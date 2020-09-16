export const CONTROL_QUERY_PROFILE = {
    PROFILE_LIST: `
    SELECT * FROM perfil_lista;
    `,
    ADD_PROFILE: `
    SELECT add_perfil ({{desc_perfil}}::character varying);
    `,
    UPDATE_PROFILE: `
    SELECT update_perfil ({{id_perfil}}::bigint, {desc_perfil}}::character varying);
    `,
    DELETE_PROFILE: `
    SELECT delete_perfil ({{id_perfil}}::bigint);
    `
}

export const CONTROL_QUERY_PERMISSION = {
    PROFILES_LIST: `
    SELECT * FROM perfiles_lista;
    `,
    LOAD_LOST_PERMISSIONS: `
    SELECT * FROM get_permisos_by_perfiles({{id_perfil}}::bigint);
    `,
    UPDATE_PERMISSIONS: `
    SELECT * FROM update_permiso({{idpermiso}}::bigint, {{id_usuario_update}}::bigint, {{ischecked}}::boolean);
    `
}

export const CONTROL_QUERY_USER = {
    USER_LIST: `
    SELECT * FROM usuario_lista;
    `,
    ADD_USER: `
    SELECT add_perfil ({{desc_perfil}}::character varying);
    `,
    UPDATE_USER: `
    SELECT update_perfil ({{id_perfil}}::bigint, {desc_perfil}}::character varying);
    `,
    DELETE_USER: `
    SELECT delete_perfil ({{id_perfil}}::bigint);
    `
}
