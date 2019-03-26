module.exports = {
	ASSERTER: {
		name: 'asserter',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/Condition-asserter',
		documentation: 'Person who asserts this condition.',
	},
	BODY_SITE: {
		name: 'body-site',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/Condition-body-site',
		documentation: 'Anatomical location, if relevant.',
	},
	CATEGORY: {
		name: 'category',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/Condition-category',
		documentation: 'The category of the condition.',
	},
	CLINICALSTATUS: {
		name: 'clinicalstatus',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/Condition-clinicalstatus',
		documentation: 'The clinical status of the condition.',
	},
	CODE: {
		name: 'code',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/Condition-code',
		documentation: 'Code for the condition.',
	},
	DATE_RECORDED: {
		name: 'date-recorded',
		type: 'date',
		definition: 'http://hl7.org/fhir/SearchParameter/Condition-date-recorded',
		documentation: 'A date, when the Condition statement was documented.',
	},
	ENCOUNTER: {
		name: 'encounter',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/Condition-encounter',
		documentation: 'Encounter when condition first asserted.',
	},
	EVIDENCE: {
		name: 'evidence',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/Condition-evidence',
		documentation: 'Manifestation/symptom.',
	},
	IDENTIFIER: {
		name: 'identifier',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/Condition-identifier',
		documentation: 'A unique identifier of the condition record.',
	},
	ONSET: {
		name: 'onset',
		type: 'date',
		definition: 'http://hl7.org/fhir/SearchParameter/Condition-onset',
		documentation: 'Date related onsets (dateTime and Period).',
	},
	ONSET_INFO: {
		name: 'onset-info',
		type: 'string',
		definition: 'http://hl7.org/fhir/SearchParameter/Condition-onset-info',
		documentation: 'Other onsets (boolean, age, range, string).',
	},
	PATIENT: {
		name: 'patient',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/Condition-patient',
		documentation: 'Who has the condition?.',
	},
	SEVERITY: {
		name: 'severity',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/Condition-severity',
		documentation: 'The severity of the condition.',
	},
	STAGE: {
		name: 'stage',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/Condition-stage',
		documentation: 'Simple summary (disease specific).',
	},
	AGE: {
		name: 'age',
		type: 'number',
		definition: 'http://hl7.org/fhir/SearchParameter/condition-daf-Condition-age',
		documentation: 'Search based on Condition onsetAge.',
	},
};