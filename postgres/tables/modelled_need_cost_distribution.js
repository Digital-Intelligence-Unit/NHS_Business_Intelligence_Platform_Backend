const createQuery = `-- Table: public.modelled_need_cost_distribution

-- DROP TABLE IF EXISTS public.modelled_need_cost_distribution;

CREATE TABLE IF NOT EXISTS public.modelled_need_cost_distribution
(
    "row.names" text COLLATE pg_catalog."default",
    cost double precision,
    count integer,
    type text COLLATE pg_catalog."default"
)
WITH (
    OIDS = FALSE
)
TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.modelled_need_cost_distribution
    OWNER to postgres;`;

module.exports.createQuery = createQuery;
