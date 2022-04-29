const createQuery = `-- Table: public.postcode_to_lsoa

-- DROP TABLE IF EXISTS public.postcode_to_lsoa;

CREATE TABLE IF NOT EXISTS public.postcode_to_lsoa
(
    postcode text COLLATE pg_catalog."default",
    lsoa text COLLATE pg_catalog."default"
)
WITH (
    OIDS = FALSE
)
TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.postcode_to_lsoa
    OWNER to postgres;`;

module.exports.createQuery = createQuery;
