# --- Created by Ebean DDL
# To stop Ebean DDL generation, remove this comment and start using Evolutions

# --- !Ups

create table public.billsales (
  id                        serial not null,
  pdf                       varchar(255),
  invoice_no                varchar(255),
  total_amt                 integer,
  date                      varchar(255),
  status                    varchar(255),
  constraint pk_billsales primary key (id))
;

create table public.code (
  id                        serial not null,
  code                      varchar(255),
  price                     integer,
  category                  varchar(255),
  constraint pk_code primary key (id))
;

create table public.login (
  id                        serial not null,
  usernm                    varchar(255),
  passwd                    varchar(255),
  phone                     integer,
  lastlogin                 date,
  name                      varchar(255),
  constraint pk_login primary key (id))
;

create table public.raw_material (
  id                        serial not null,
  quantity                  integer,
  price                     integer,
  name                      varchar(255),
  constraint pk_raw_material primary key (id))
;

create table public.rmtotal (
  id                        serial not null,
  rmtotal                   integer,
  constraint pk_rmtotal primary key (id))
;

create table public.stock (
  id                        serial not null,
  quantity                  integer,
  code                      varchar(255),
  category                  varchar(255),
  constraint pk_stock primary key (id))
;




# --- !Downs

drop table if exists public.billsales cascade;

drop table if exists public.code cascade;

drop table if exists public.login cascade;

drop table if exists public.raw_material cascade;

drop table if exists public.rmtotal cascade;

drop table if exists public.stock cascade;

