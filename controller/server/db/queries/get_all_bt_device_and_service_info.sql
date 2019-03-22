 SELECT 
     devices.device_uuid, 
     devices.name, 
     service_uuid, 
     services.name as service_name,
     group_concat(chars.char_uuid) AS characteristics 
 FROM bt_devices AS devices
 INNER JOIN bt_services AS services 
     ON devices.device_uuid = services.device_uuid 
 INNER JOIN bt_service_chars AS chars 
     ON services.service_uuid = chars.service_uuid 
 GROUP BY devices.device_uuid, services.service_uuid
