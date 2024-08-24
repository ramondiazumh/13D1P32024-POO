CREATE TABLE "admin".usuarios (
	idusuario bigserial NOT NULL,
	"name" varchar NOT NULL,
	email varchar NOT NULL,
	CONSTRAINT usuarios_pk PRIMARY KEY (idusuario),
	CONSTRAINT usuarios_unique UNIQUE ("name"),
	CONSTRAINT usuarios_unique_1 UNIQUE (email)
);
COMMENT ON TABLE "admin".usuarios IS 'Tabla para la gestion de los usuarios';

-- Column comments

COMMENT ON COLUMN "admin".usuarios.idusuario IS 'Id del usuario';
COMMENT ON COLUMN "admin".usuarios."name" IS 'Nombe de usuario';
COMMENT ON COLUMN "admin".usuarios.email IS 'Correo electronico del  usuario';
