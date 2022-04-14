let createQuery = `-- Table: public.pharmacy

-- DROP TABLE IF EXISTS public.pharmacy;

CREATE TABLE IF NOT EXISTS public.pharmacy
(
    postcode character varying(255) COLLATE pg_catalog."default",
    organisation_code character varying(255) COLLATE pg_catalog."default",
    name character varying(255) COLLATE pg_catalog."default",
    national_grouping character varying(255) COLLATE pg_catalog."default",
    high_level_health_geography character varying(255) COLLATE pg_catalog."default",
    address_line_1 character varying(255) COLLATE pg_catalog."default",
    address_line_2 character varying(255) COLLATE pg_catalog."default",
    address_line_3 character varying(255) COLLATE pg_catalog."default",
    address_line_4 character varying(255) COLLATE pg_catalog."default",
    address_line_5 character varying(255) COLLATE pg_catalog."default",
    open_date character varying(255) COLLATE pg_catalog."default",
    close_date character varying(255) COLLATE pg_catalog."default",
    status_code character varying(255) COLLATE pg_catalog."default",
    organisation_sub_type_code character varying(255) COLLATE pg_catalog."default",
    parent_organisation_code character varying(255) COLLATE pg_catalog."default",
    join_parent_date character varying(255) COLLATE pg_catalog."default",
    left_parent_date character varying(255) COLLATE pg_catalog."default",
    contact_telephone_number character varying(255) COLLATE pg_catalog."default",
    null_1 character varying(255) COLLATE pg_catalog."default",
    null_2 character varying(255) COLLATE pg_catalog."default",
    null_3 character varying(255) COLLATE pg_catalog."default",
    amended_record_indicator character varying(255) COLLATE pg_catalog."default",
    null_4 character varying(255) COLLATE pg_catalog."default",
    current_care_organisation character varying(255) COLLATE pg_catalog."default",
    null_5 character varying(255) COLLATE pg_catalog."default",
    null_6 character varying(255) COLLATE pg_catalog."default",
    null_7 character varying(255) COLLATE pg_catalog."default",
    pcd2 character varying(255) COLLATE pg_catalog."default",
    dointr character varying(255) COLLATE pg_catalog."default",
    doterm character varying(255) COLLATE pg_catalog."default",
    oseast100m character varying(255) COLLATE pg_catalog."default",
    osnrth100m character varying(255) COLLATE pg_catalog."default",
    oscty character varying(255) COLLATE pg_catalog."default",
    odslaua character varying(255) COLLATE pg_catalog."default",
    oslaua character varying(255) COLLATE pg_catalog."default",
    osward character varying(255) COLLATE pg_catalog."default",
    usertype character varying(255) COLLATE pg_catalog."default",
    osgrdind character varying(255) COLLATE pg_catalog."default",
    ctry character varying(255) COLLATE pg_catalog."default",
    oshlthau character varying(255) COLLATE pg_catalog."default",
    rgn character varying(255) COLLATE pg_catalog."default",
    oldha character varying(255) COLLATE pg_catalog."default",
    nhser character varying(255) COLLATE pg_catalog."default",
    ccg character varying(255) COLLATE pg_catalog."default",
    psed character varying(255) COLLATE pg_catalog."default",
    cened character varying(255) COLLATE pg_catalog."default",
    edind character varying(255) COLLATE pg_catalog."default",
    ward98 character varying(255) COLLATE pg_catalog."default",
    oa01 character varying(255) COLLATE pg_catalog."default",
    nhsrlo character varying(255) COLLATE pg_catalog."default",
    hro character varying(255) COLLATE pg_catalog."default",
    lsoa01 character varying(255) COLLATE pg_catalog."default",
    ur01ind character varying(255) COLLATE pg_catalog."default",
    msoa01 character varying(255) COLLATE pg_catalog."default",
    cannet character varying(255) COLLATE pg_catalog."default",
    scn character varying(255) COLLATE pg_catalog."default",
    oshaprev character varying(255) COLLATE pg_catalog."default",
    oldpct character varying(255) COLLATE pg_catalog."default",
    oldhro character varying(255) COLLATE pg_catalog."default",
    pcon character varying(255) COLLATE pg_catalog."default",
    canreg character varying(255) COLLATE pg_catalog."default",
    pct character varying(255) COLLATE pg_catalog."default",
    oseast1m character varying(255) COLLATE pg_catalog."default",
    osnrth1m character varying(255) COLLATE pg_catalog."default",
    oa11 character varying(255) COLLATE pg_catalog."default",
    lsoa11 character varying(255) COLLATE pg_catalog."default",
    msoa11 character varying(255) COLLATE pg_catalog."default",
    calncv character varying(255) COLLATE pg_catalog."default",
    stp character varying(255) COLLATE pg_catalog."default",
    geom geometry
)
WITH (
    OIDS = FALSE
)
TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.pharmacy
    OWNER to postgres;`;

module.exports.createQuery = createQuery;