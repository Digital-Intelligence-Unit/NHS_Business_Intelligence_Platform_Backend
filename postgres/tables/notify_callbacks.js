const createQuery = `-- Table: public.notify_callbacks

-- DROP TABLE IF EXISTS public.notify_callbacks;

CREATE TABLE IF NOT EXISTS public.notify_callbacks
(
    -- Inherited from table public.virtualward_servicecountlog: uid bigint NOT NULL GENERATED ALWAYS AS IDENTITY ( INCREMENT 1 START 1 MINVALUE 1 MAXVALUE 9223372036854775807 CACHE 1 ),
    -- Inherited from table public.virtualward_servicecountlog: msgcount smallint NOT NULL,
    -- Inherited from table public.virtualward_servicecountlog: organisation text COLLATE pg_catalog."default" NOT NULL,
    -- Inherited from table public.virtualward_servicecountlog: servicename text COLLATE pg_catalog."default" NOT NULL,
    -- Inherited from table public.virtualward_servicecountlog: type text COLLATE pg_catalog."default" NOT NULL,
    -- Inherited from table public.virtualward_servicecountlog: period text COLLATE pg_catalog."default" NOT NULL,
    -- Inherited from table public.virtualward_servicecountlog: messageid text COLLATE pg_catalog."default",
    templateid text COLLATE pg_catalog."default",
    status text COLLATE pg_catalog."default",
    recipient text COLLATE pg_catalog."default"
)
    INHERITS (public.virtualward_servicecountlog)
WITH (
    OIDS = FALSE
)
TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.notify_callbacks
    OWNER to postgres;`;

module.exports.createQuery = createQuery;
