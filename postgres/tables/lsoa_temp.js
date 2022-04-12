let createQuery = `-- Table: public.lsoa_temp

-- DROP TABLE IF EXISTS public.lsoa_temp;

CREATE TABLE IF NOT EXISTS public.lsoa_temp
(
    "row.names" text COLLATE pg_catalog."default",
    lsoa11cd text COLLATE pg_catalog."default",
    lsoa11nm text COLLATE pg_catalog."default"
)
WITH (
    OIDS = FALSE
)
TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.lsoa_temp
    OWNER to postgres;`;

module.exports.createQuery = createQuery;