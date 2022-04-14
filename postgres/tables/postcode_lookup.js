let createQuery = `-- Table: public.postcode_lookup

-- DROP TABLE IF EXISTS public.postcode_lookup;

CREATE TABLE IF NOT EXISTS public.postcode_lookup
(
    postcode text COLLATE pg_catalog."default" NOT NULL,
    val_b double precision,
    val_c text COLLATE pg_catalog."default",
    val_d double precision,
    val_e double precision,
    val_f double precision,
    val_g double precision,
    val_h double precision,
    val_i double precision,
    val_j double precision,
    val_k text COLLATE pg_catalog."default",
    val_l text COLLATE pg_catalog."default",
    val_m text COLLATE pg_catalog."default",
    val_n text COLLATE pg_catalog."default",
    val_o text COLLATE pg_catalog."default",
    val_p text COLLATE pg_catalog."default",
    val_q text COLLATE pg_catalog."default",
    val_r text COLLATE pg_catalog."default",
    val_s text COLLATE pg_catalog."default",
    CONSTRAINT postcode_lookup_pkey PRIMARY KEY (postcode)
)
WITH (
    OIDS = FALSE
)
TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.postcode_lookup
    OWNER to postgres;`;

module.exports.createQuery = createQuery;