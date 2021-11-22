export interface Departure {
  actual: boolean,
  trip_id: string,
  stop_id: number,
  departure_text: string,
  departure_time: number,
  description: string,
  gate: string,
  route_id: string,
  route_short_name: string,
  direction_id: number,
  direction_text: string,
  terminal: string,
  schedule_relationship: string

}


/*
Departure{
actual	boolean
trip_id	string
nullable: true
stop_id	integer($int32)
departure_text	string
nullable: true
readOnly: true
departure_time	integer($int64)
description	string
nullable: true
gate	string
nullable: true
route_id	string
nullable: true
route_short_name	string
nullable: true
direction_id	integer($int32)
direction_text	string
nullable: true
terminal	string
nullable: true
schedule_relationship	string
nullable: true
}
 */
