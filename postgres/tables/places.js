let createQuery = `-- Table: public.places

-- DROP TABLE IF EXISTS public.places;

CREATE TABLE IF NOT EXISTS public.places
(
    id character varying(255) COLLATE pg_catalog."default",
    names_uri character varying(255) COLLATE pg_catalog."default",
    name1 character varying(255) COLLATE pg_catalog."default",
    name1_lang character varying(255) COLLATE pg_catalog."default",
    name2 character varying(255) COLLATE pg_catalog."default",
    name2_lang character varying(255) COLLATE pg_catalog."default",
    type character varying(255) COLLATE pg_catalog."default",
    local_type character varying(255) COLLATE pg_catalog."default",
    geometry_x character varying(255) COLLATE pg_catalog."default",
    geometry_y character varying(255) COLLATE pg_catalog."default",
    most_detail_view_res character varying(255) COLLATE pg_catalog."default",
    least_detail_view_res character varying(255) COLLATE pg_catalog."default",
    mbr_xmin character varying(255) COLLATE pg_catalog."default",
    mbr_ymin character varying(255) COLLATE pg_catalog."default",
    mbr_xmax character varying(255) COLLATE pg_catalog."default",
    mbr_ymax character varying(255) COLLATE pg_catalog."default",
    postcode_district character varying(255) COLLATE pg_catalog."default",
    postcode_district_uri character varying(255) COLLATE pg_catalog."default",
    populated_place character varying(255) COLLATE pg_catalog."default",
    populated_place_uri character varying(255) COLLATE pg_catalog."default",
    populated_place_type character varying(255) COLLATE pg_catalog."default",
    district_borough character varying(255) COLLATE pg_catalog."default",
    district_borough_uri character varying(255) COLLATE pg_catalog."default",
    district_borough_type character varying(255) COLLATE pg_catalog."default",
    county_unitary character varying(255) COLLATE pg_catalog."default",
    county_unitary_uri character varying(255) COLLATE pg_catalog."default",
    county_unitary_type character varying(255) COLLATE pg_catalog."default",
    region character varying(255) COLLATE pg_catalog."default",
    region_uri character varying(255) COLLATE pg_catalog."default",
    country character varying(255) COLLATE pg_catalog."default",
    country_uri character varying(255) COLLATE pg_catalog."default",
    related_spatial_object character varying(255) COLLATE pg_catalog."default",
    same_as_dbpedia character varying(255) COLLATE pg_catalog."default",
    same_as_geonames character varying(255) COLLATE pg_catalog."default",
    geom geometry
)
WITH (
    OIDS = FALSE
)
TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.places
    OWNER to postgres;`;

module.exports.createQuery = createQuery;