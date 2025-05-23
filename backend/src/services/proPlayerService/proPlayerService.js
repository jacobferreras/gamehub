import { db } from "../../../server.js";

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
    condition += (condition ? " AND" : " WHERE") + " proplayers.name LIKE ?";
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

  const [rows] = await db.promise().query(sql, params);

  const totalCountQuery = `SELECT COUNT(*) as total FROM proplayers${condition}`;
  const [countRows] = await db
    .promise()
    .query(totalCountQuery, params.slice(0, params.length - 2));

  const totalCount = countRows[0].total;
  const totalPages = totalCount ? Math.ceil(totalCount / limit) : 1;

  return {
    message: "Pro players found",
    data: rows,
    totalPages,
    currentPage: page,
  };
};

const getProPlayerById = async (id) => {
  const sql = `
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
    WHERE proplayers.id = ?
  `;

  const [rows] = await db.promise().query(sql, [id]);

  if (rows.length === 0) {
    return {
      message: "Pro player not found",
      data: null,
    };
  }

  return {
    message: "Pro player found",
    data: rows[0],
  };
};

const getProPlayerByIGN = async (ign) => {
  ign = decodeURIComponent(ign).trim();
  console.log(ign);

  const sql = `
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
    WHERE LOWER(TRIM(proplayers.ign)) = LOWER(TRIM(?))
  `;

  const [rows] = await db.promise().query(sql, [ign]);

  if (rows.length === 0) {
    return {
      message: "Pro player not found",
      data: null,
    };
  }

  return {
    message: "Pro player found",
    data: rows[0],
  };
};

export default {
  getAll,
  getProPlayerById,
  getProPlayerByIGN,
};
