<?php
include('/var/www/phplib/cache.php');
$cache = new cache('NAC');

$ien = $_GET['ien'];

$query = "
    SELECT  *
        ,   CLINIC->NAME \"CLINIC_NAME\"
        ,   PATIENT->NAME \"PAT_NAME\"
        ,   CHECK_IN_USER->NAME \"CHECK_IN_USER_NAME\"
        ,   CHECK_OUT_USER->NAME \"CHECK_OUT_USER_NAME\"
        ,   NO_SHOW_CANCELLED_BY->NAME \"NO_SHOW_CANCELLED_BY_NAME\"
    FROM BMW.BSDX_APPOINTMENT_VIEW
    WHERE PATIENT = '$ien'
    AND APPOINTMENT_DATE_TIME LIKE '$today[rpms]%'
";

$rows = $cache->getRows($query);
print json_encode($rows);


?>
