# Untitled Diagram documentation
## Summary

- [Introduction](#introduction)
- [Database Type](#database-type)
- [Table Structure](#table-structure)
	- [cities](#cities)
	- [cities_distances](#cities_distances)
	- [hotels](#hotels)
	- [app_log](#app_log)
	- [purchase_log](#purchase_log)
	- [properties](#properties)
	- [hotel_properties](#hotel_properties)
	- [guests](#guests)
	- [train_bookings](#train_bookings)
	- [hotel_bookings](#hotel_bookings)
- [Relationships](#relationships)
- [Database Diagram](#database-diagram)

## Introduction

## Database type

- **Database system:** PostgreSQL
## Table structure

### cities

| Name        | Type          | Settings                      | References                    | Note                           |
|-------------|---------------|-------------------------------|-------------------------------|--------------------------------|
| **city_id** | INTEGER | 🔑 PK, not null, unique |  | |
| **city_name** | TEXT | not null |  | | 


### cities_distances

| Name        | Type          | Settings                      | References                    | Note                           |
|-------------|---------------|-------------------------------|-------------------------------|--------------------------------|
| **cd1_id** | INTEGER | 🔑 PK, not null, unique, autoincrement | fk_cities_distances_cd1_id_cities | |
| **cd2_id** | INTEGER | 🔑 PK, not null | fk_cities_distances_cd2_id_cities | |
| **cd_hd_train** | INTEGER | null |  | |
| **cd_hd_plane** | INTEGER | null |  | |
| **cd_distance** | INTEGER | null |  | | 


### hotels

| Name        | Type          | Settings                      | References                    | Note                           |
|-------------|---------------|-------------------------------|-------------------------------|--------------------------------|
| **hotel_id** | INTEGER | 🔑 PK, not null, unique, autoincrement | fk_hotels_hotel_id_cities | |
| **hotel_name** | TEXT | null |  | |
| **hotel_address** | TEXT | null |  | |
| **city_id** | INTEGER | not null |  | |
| **rating** | DECIMAL(3,2) | not null |  | |
| **photos** | JSONB | null |  | |
| **room_types** | JSONB | null |  | | 


### app_log

| Name        | Type          | Settings                      | References                    | Note                           |
|-------------|---------------|-------------------------------|-------------------------------|--------------------------------|
| **log_id** | INTEGER | 🔑 PK, not null, unique, autoincrement |  | |
| **log_lvl** | INTEGER | null |  | |
| **log_message** | TEXT | null |  | |
| **log_time** | TIME | null |  | |
| **log_date** | DATE | null |  | | 


### purchase_log

| Name        | Type          | Settings                      | References                    | Note                           |
|-------------|---------------|-------------------------------|-------------------------------|--------------------------------|
| **purchase_id** | INTEGER | 🔑 PK, not null, unique, autoincrement |  | |
| **purchase_type** | TEXT | null |  | |
| **purchase_info** | TEXT | null |  | |
| **purchase_time** | TIME | null |  | |
| **purchase_date** | DATE | null |  | | 


### properties

| Name        | Type          | Settings                      | References                    | Note                           |
|-------------|---------------|-------------------------------|-------------------------------|--------------------------------|
| **property_id** | INTEGER | 🔑 PK, not null, unique, autoincrement |  | |
| **property_name** | TEXT | null |  | | 


### hotel_properties

| Name        | Type          | Settings                      | References                    | Note                           |
|-------------|---------------|-------------------------------|-------------------------------|--------------------------------|
| **hotel_id** | INTEGER | 🔑 PK, not null, unique, autoincrement | fk_hotel_properties_hotel_id_hotels,fk_hotel_properties_hotel_id_properties | |
| **property_id** | INTEGER | 🔑 PK, not null |  | | 


### guests

| Name        | Type          | Settings                      | References                    | Note                           |
|-------------|---------------|-------------------------------|-------------------------------|--------------------------------|
| **id** | UUID | 🔑 PK, not null, unique |  | |
| **created_at** | TIMESTAMP | null |  | | 


#### Indexes
| Name | Unique | Fields |
|------|--------|--------|
| guests_index_0 |  | id |
### train_bookings

| Name        | Type          | Settings                      | References                    | Note                           |
|-------------|---------------|-------------------------------|-------------------------------|--------------------------------|
| **id** | INTEGER | 🔑 PK, not null, unique, autoincrement |  | |
| **guest_id** | UUID | null | fk_train_bookings_guest_id_guests | |
| **purchase_id** | INTEGER | null | fk_train_bookings_purchase_id_purchase_log | |
| **train_number** | VARCHAR(20) | null |  | |
| **arrival_station** | VARCHAR(100) | null |  | |
| **departure_time** | TIMESTAMP | null |  | |
| **arrival_time** | TIMESTAMP | null |  | |
| **car_class** | VARCHAR(50) | null |  | |
| **car_number** | VARCHAR(20) | null |  | |
| **seat_number** | INTEGER | null |  | |
| **seat_class** | VARCHAR(50) | null |  | |
| **price** | DECIMAL(10,2) | null |  | |
| **departure_station** | VARCHAR(100) | null |  | | 


### hotel_bookings

| Name        | Type          | Settings                      | References                    | Note                           |
|-------------|---------------|-------------------------------|-------------------------------|--------------------------------|
| **id** | INTEGER | 🔑 PK, not null, unique, autoincrement |  | |
| **guest_id** | UUID | null | fk_hotel_bookings_guest_id_guests | |
| **purchase_id** | INTEGER | null | fk_hotel_bookings_purchase_id_purchase_log | |
| **hotel_name** | VARCHAR(100) | null |  | |
| **address** | TEXT | null |  | |
| **check_in_date** | DATE | null |  | |
| **check_out_date** | DATE | null |  | |
| **room_type** | VARCHAR(50) | null |  | |
| **total_price** | DECIMAL | null |  | | 


## Relationships

- **cities_distances to cities**: many_to_one
- **hotels to cities**: many_to_one
- **hotel_properties to hotels**: many_to_one
- **hotel_properties to properties**: many_to_one
- **train_bookings to guests**: many_to_one
- **hotel_bookings to guests**: many_to_one
- **hotel_bookings to purchase_log**: one_to_one
- **train_bookings to purchase_log**: one_to_one
- **cities_distances to cities**: many_to_one

## Database Diagram

```mermaid
erDiagram
	cities_distances }o--|| cities : references
	hotels }o--|| cities : references
	hotel_properties }o--|| hotels : references
	hotel_properties }o--|| properties : references
	train_bookings }o--|| guests : references
	hotel_bookings }o--|| guests : references
	hotel_bookings ||--|| purchase_log : references
	train_bookings ||--|| purchase_log : references
	cities_distances }o--|| cities : references

	cities {
		INTEGER city_id
		TEXT city_name
	}

	cities_distances {
		INTEGER cd1_id
		INTEGER cd2_id
		INTEGER cd_hd_train
		INTEGER cd_hd_plane
		INTEGER cd_distance
	}

	hotels {
		INTEGER hotel_id
		TEXT hotel_name
		TEXT hotel_address
		INTEGER city_id
		DECIMAL(3,2) rating
		JSONB photos
		JSONB room_types
	}

	app_log {
		INTEGER log_id
		INTEGER log_lvl
		TEXT log_message
		TIME log_time
		DATE log_date
	}

	purchase_log {
		INTEGER purchase_id
		TEXT purchase_type
		TEXT purchase_info
		TIME purchase_time
		DATE purchase_date
	}

	properties {
		INTEGER property_id
		TEXT property_name
	}

	hotel_properties {
		INTEGER hotel_id
		INTEGER property_id
	}

	guests {
		UUID id
		TIMESTAMP created_at
	}

	train_bookings {
		INTEGER id
		UUID guest_id
		INTEGER purchase_id
		VARCHAR(20) train_number
		VARCHAR(100) arrival_station
		TIMESTAMP departure_time
		TIMESTAMP arrival_time
		VARCHAR(50) car_class
		VARCHAR(20) car_number
		INTEGER seat_number
		VARCHAR(50) seat_class
		DECIMAL(10,2) price
		VARCHAR(100) departure_station
	}

	hotel_bookings {
		INTEGER id
		UUID guest_id
		INTEGER purchase_id
		VARCHAR(100) hotel_name
		TEXT address
		DATE check_in_date
		DATE check_out_date
		VARCHAR(50) room_type
		DECIMAL total_price
	}
```