# --- Created by Ebean DDL
# To stop Ebean DDL generation, remove this comment and start using Evolutions

# --- !Ups

create table public.code (
  id                        serial not null,
  code                      varchar(255),
  price                     integer,
  constraint pk_code primary key (id))
;

create table public.raw_material (
  id                        serial not null,
  quantity                  integer,
  price                     integer,
  name                      varchar(255),
  constraint pk_raw_material primary key (id))
;




# --- !Downs

drop table if exists public.code cascade;

drop table if exists public.raw_material cascade;

