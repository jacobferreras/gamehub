import { db } from "../../../server.js";

const executeQuery = async (sql, params = [], retries = 1) => {
  try {
    return await db.promise().query(sql, params);
  } catch (error) {
    console.error(
      `Database query error: ${error.message} for query: ${sql.substring(
        0,
        100
      )}...`
    );

    if (
      error.message.includes("connection is in closed state") &&
      retries > 0
    ) {
      console.log(
        "Connection closed, waiting for reconnection and retrying..."
      );
      await new Promise((resolve) => setTimeout(resolve, 2000));
      return executeQuery(sql, params, retries - 1);
    }

    throw error;
  }
};

const getAll = async ({
  limit = 10,
  random = false,
  page = 1,
  search = "",
}) => {
  const offset = (page - 1) * limit;

  let condition = "";
  let params = [];

  if (search) {
    condition += (condition ? " AND" : " WHERE") + " proplayers.ign LIKE ?";
    params.push(`%${search}%`);
  }

  let sql = `
    SELECT 
      proplayers.*, 

      -- Settings
      player_settings.mouse_sensitivity,
      player_settings.dpi,
      player_settings.Hz,
      player_settings.scoped_sensitivity,
      player_settings.windows_sensitivity,
      player_settings.input_buffer,
      player_settings.display_mode,
      player_settings.resolution,
      player_settings.aspect_ratio,
      player_settings.nvidia_reflex,
      player_settings.rendering,
      player_settings.material_quality,
      player_settings.texture_quality,
      player_settings.detail_quality,
      player_settings.ui_quality,
      player_settings.vignette,
      player_settings.vsync,
      player_settings.anti_aliasing,
      player_settings.anisotropic_filtering,
      player_settings.improve_clarity,
      player_settings.experimental_harpening,
      player_settings.bloom,
      player_settings.distortion,
      player_settings.cast_shadows,

      -- Socials
      player_socials.twitch,
      player_socials.youtube,
      player_socials.instagram,
      player_socials.x

    FROM proplayers
    LEFT JOIN player_settings ON proplayers.id = player_settings.proplayer_id
    LEFT JOIN player_socials ON proplayers.id = player_socials.proplayer_id
    ${condition}
  `;

  if (random) {
    sql += " ORDER BY RAND()";
  } else {
    sql += " ORDER BY proplayers.id DESC";
  }

  sql += " LIMIT ? OFFSET ?";
  params.push(Number(limit));
  params.push(Number(offset));

  try {
    const [rows] = await executeQuery(sql, params);

    const totalCountQuery = `SELECT COUNT(*) as total FROM proplayers${condition}`;
    const [countRows] = await executeQuery(
      totalCountQuery,
      params.slice(0, params.length - 2)
    );

    const totalCount = countRows[0].total;
    const totalPages = totalCount ? Math.ceil(totalCount / limit) : 1;

    return {
      message: "Pro players found",
      data: rows,
      totalPages,
      currentPage: page,
    };
  } catch (error) {
    console.error("Error in getAll pro players:", error);
    throw error;
  }
};

const getProPlayerById = async (id) => {
  try {
    const [[player]] = await executeQuery(
      `SELECT * FROM proplayers WHERE id = ?`,
      [id]
    );

    if (!player) {
      return { message: "Pro player not found", data: null };
    }

    const [[settings]] = await executeQuery(
      `SELECT * FROM player_settings WHERE proplayer_id = ?`,
      [id]
    );
    const [[socials]] = await executeQuery(
      `SELECT * FROM player_socials WHERE proplayer_id = ?`,
      [id]
    );

    return {
      message: "Pro player found",
      data: {
        ...player,
        ...settings,
        ...socials,
      },
    };
  } catch (error) {
    console.error(`Error fetching pro player with ID ${id}:`, error);
    throw error;
  }
};

const getProPlayerByIGN = async (ign) => {
  try {
    ign = decodeURIComponent(ign).trim();

    const [[player]] = await executeQuery(
      `SELECT * FROM proplayers WHERE LOWER(TRIM(ign)) = LOWER(TRIM(?))`,
      [ign]
    );

    if (!player) {
      return { message: "Pro player not found", data: null };
    }

    const [[settings]] = await executeQuery(
      `SELECT * FROM player_settings WHERE proplayer_id = ?`,
      [player.id]
    );

    const [[socials]] = await executeQuery(
      `SELECT * FROM player_socials WHERE proplayer_id = ?`,
      [player.id]
    );

    return {
      message: "Pro player found",
      data: {
        ...player,
        ...settings,
        ...socials,
      },
    };
  } catch (error) {
    console.error(`Error fetching pro player with IGN ${ign}:`, error);
    throw error;
  }
};

export default {
  getAll,
  getProPlayerById,
  getProPlayerByIGN,
};
