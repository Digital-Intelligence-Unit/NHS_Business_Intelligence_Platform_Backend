let createQuery = `-- Table: public.virtualward_scriptlogging

-- DROP TABLE IF EXISTS public.virtualward_scriptlogging;

CREATE TABLE IF NOT EXISTS public.virtualward_scriptlogging
(
    uid bigint NOT NULL GENERATED ALWAYS AS IDENTITY ( INCREMENT 1 START 1 MINVALUE 1 MAXVALUE 9223372036854775807 CACHE 1 ),
    runtime timestamp without time zone NOT NULL DEFAULT CURRENT_TIMESTAMP,
    summary text COLLATE pg_catalog."default",
    messagecount bigint,
    CONSTRAINT virtualward_scriptlogging_pkey PRIMARY KEY (uid)
)
WITH (
    OIDS = FALSE
)
TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.virtualward_scriptlogging
    OWNER to postgres;`;

module.exports.createQuery = createQuery;