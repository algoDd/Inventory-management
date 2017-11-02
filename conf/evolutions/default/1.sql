# --- Created by Ebean DDL
# To stop Ebean DDL generation, remove this comment and start using Evolutions

# --- !Ups

create table public.billsales (
  id                        serial not null,
  pdf                       varchar(255),
  invoice_no                varchar(255),
  total_amt                 integer,
  constraint pk_billsales primary key (id))
;

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

create table public.rmtotal (
  id                        serial not null,
  rmtotal                   integer,
  constraint pk_rmtotal primary key (id))
;




# --- !Downs

drop table if exists public.billsales cascade;

drop table if exists public.code cascade;

drop table if exists public.raw_material cascade;

drop table if exists public.rmtotal cascade;

