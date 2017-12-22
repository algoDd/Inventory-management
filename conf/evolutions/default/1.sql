# --- Created by Ebean DDL
# To stop Ebean DDL generation, remove this comment and start using Evolutions

# --- !Ups


create table public.login (
  id                        bigserial not null,
  usernm                    varchar(255),
  passwd                    varchar(255),
  phone                     bigint,
  lastlogin                 date,
  name                      varchar(255),
  constraint pk_login primary key (id))
;  
# --- !Downs


drop table if exists public.login cascade;
drop table if exists public.billsales cascade;

drop table if exists public.code cascade;

drop table if exists public.raw_material cascade;

drop table if exists public.rmtotal cascade;

drop table if exists public.stock cascade;

