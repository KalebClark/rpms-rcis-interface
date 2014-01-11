<?php
include('/var/www/phplib/cache.php');
$cache = new cache('NAC');

$query = "
SELECT  IEN
    ,   DATE_INITIATED
    ,   REFERRAL_ \"REFERRAL_ID\"
    ,   PATIENT->NAME->IEN \"PATIENT_IEN\"
    ,   PATIENT->NAME->NAME \"PATIENT_NAME\"
    ,   REQUESTING_FACILITY->NAME->IEN \"REQUESTING_FACILITY_IEN\"
    ,   REQUESTING_FACILITY->NAME->NAME \"REQUESTING_FACILITY_NAME\"
    ,   REQUESTING_PROVIDER->IEN \"REQUESTING_PROVIDER_IEN\"
    ,   REQUESTING_PROVIDER->NAME \"REQUESTING_PROVIDER_NAME\"
    ,   TO_PRIMARY_VENDOR->IEN \"TO_PRIMAY_VENDOR_IEN\"
    ,   TO_PRIMARY_VENDOR->NAME \"TO_PRIMARY_VENDOR_NAME\"
    ,   TO_IHS_FACILITY->IEN \"TO_IHS_FACILITY_IEN\"
    ,   TO_IHS_FACILITY->NAME->NAME \"TO_IHS_FACILITY_NAME\"
    ,   TO_OTHER_PROVIDER->IEN \"TO_OTHER_PROVIDER_IEN\"
    ,   TO_OTHER_PROVIDER->NAME \"TO_OTHER_PROVIDER_NAME\"
    ,   PRIMARY_PAYOR
    ,   ICD_DIAGNOSTIC_CATEGORY->IEN \"ICD_DIAG_CATEGORY_IEN\"
    ,   ICD_DIAGNOSTIC_CATEGORY->DX_CATEGORY \"ICD_DIAG_CATEGORY_NAME\"
    ,   CPT_SERVICE_CATEGORY->IEN \"CPT_SERVICE_CATEGORY_IEN\"
    ,   CPT_SERVICE_CATEGORY->SVC_CATEGORY \"CPT_SERVICE_CATEGORY_NAME\"
    ,   INPATIENT_OR_OUTPATIENT
    ,   STATUS_OF_REFERRAL
    ,   REASON_NOT_COMPLETED
    ,   DATE_CLOSED
    ,   CASE_MANAGER->IEN \"CASE_MANAGER_IEN\"
    ,   CASE_MANAGER->NAME \"CASE_MANAGER_NAME\"
    ,   CLINIC_REFERRED_TO_IN_HOUSE->IEN \"CLINIC_REFERRED_TO_IN_HOUSE_IEN\"
    ,   CLINIC_REFERRED_TO_IN_HOUSE->NAME \"CLINIC_REFERRED_TO_IN_HOUSE\"
    ,   CLOSED_BY_USER->IEN \"CLOSED_BY_USER_IEN\"
    ,   CLOSED_BY_USER->NAME \"CLOSED_BY_USER_NAME\"
    ,   CREATED_BY_USER->IEN \"CREATED_BY_USER_IEN\"
    ,   CREATED_BY_USER->NAME \"CREATED_BY_USER_NAME\"
    ,   NEXT_REVIEW_DATE
    ,   DATE_CREATED
    ,   DATE_LAST_MODIFIED
    ,   DATE_EXPORTED
    ,   CHS_ELIGIBILITY_FACTOR
    ,   EXPECTED_BEGIN_DOS
    ,   ACTUAL_APPTBEGIN_DOS
    ,   EXPECTED_END_DOS
    ,   ACTUAL_END_DOS
    ,   CHS_APPROVAL_STATUS
    ,   CHS_APPROVALDENIAL_DATE
    ,   PURPOSE_OF_REFERRAL
    ,   NOTES_TO_SCHEDULER
    ,   SCHEDULE_WI__DAYS
    ,   EXP_NAME
    ,   EXP_HRN
    ,   EXP_DOB
    ,   EXP_SSN
    ,   EXP_SEX
    ,   EXP_VENDOR
    ,   EXP_EIN
    ,   EXP_MCARE_ELIGIBLE
    ,   EXP_MCAID_ELIGIBLE
    ,   EXP_PI_ELIGIBLE
    ,   EXP_FACILITY
FROM BFMC.RCIS_REFERRAL_90001
ORDER BY DATE_CREATED DESC

";
$rows = $cache->getRows($query);
print json_encode($rows);


?>
