const { route_args, common_args, write_args } = require('../common.arguments');
const { read_scopes, write_scopes } = require('../common.scopes');
const { CONFIG_KEYS, VERSIONS } = require('../../../constants');
const careteam_args = require('./careteam.arguments');
const controller = require('./careteam.controller');

let write_only_scopes = write_scopes('CareTeam');
let read_only_scopes = read_scopes('CareTeam');

let routes = [
	{
		type: 'get',
		path: '/:version/careteam',
		corsOptions: {methods: ['GET']},
		args: [
			route_args.VERSION,
			common_args._FORMAT,
			common_args._CONTENT,
			common_args._ID,
			common_args._LASTUPDATED,
			common_args._PROFILE,
			common_args._QUERY,
			common_args._SECURITY,
			common_args._TAG,
			Object.assign({versions: VERSIONS.STU3}, careteam_args.CATEGORY),
			Object.assign({versions: VERSIONS.STU3}, careteam_args.CONTEXT),
			Object.assign({versions: VERSIONS.STU3}, careteam_args.DATE),
			Object.assign({versions: VERSIONS.STU3}, careteam_args.ENCOUNTER),
			Object.assign({versions: VERSIONS.STU3}, careteam_args.IDENTIFIER),
			Object.assign({versions: VERSIONS.STU3}, careteam_args.PARTICIPANT),
			Object.assign({versions: VERSIONS.STU3}, careteam_args.PATIENT),
			Object.assign({versions: VERSIONS.STU3}, careteam_args.STATUS),
			Object.assign({versions: VERSIONS.STU3}, careteam_args.SUBJECT)
		],
		scopes: read_only_scopes,
		controller: controller.getCareTeam
	},
	{
		type: 'post',
		path: '/:version/careteam/_search',
		corsOptions: {methods: ['POST']},
		args: [
			route_args.VERSION,
			common_args._FORMAT,
			common_args._CONTENT,
			common_args._ID,
			common_args._LASTUPDATED,
			common_args._PROFILE,
			common_args._QUERY,
			common_args._SECURITY,
			common_args._TAG,
			Object.assign({versions: VERSIONS.STU3}, careteam_args.CATEGORY),
			Object.assign({versions: VERSIONS.STU3}, careteam_args.CONTEXT),
			Object.assign({versions: VERSIONS.STU3}, careteam_args.DATE),
			Object.assign({versions: VERSIONS.STU3}, careteam_args.ENCOUNTER),
			Object.assign({versions: VERSIONS.STU3}, careteam_args.IDENTIFIER),
			Object.assign({versions: VERSIONS.STU3}, careteam_args.PARTICIPANT),
			Object.assign({versions: VERSIONS.STU3}, careteam_args.PATIENT),
			Object.assign({versions: VERSIONS.STU3}, careteam_args.STATUS),
			Object.assign({versions: VERSIONS.STU3}, careteam_args.SUBJECT)
		],
		scopes: read_only_scopes,
		controller: controller.getCareTeam
	},
	{
		type: 'get',
		path: '/:version/careteam/:id',
		corsOptions: {methods: ['GET']},
		args: [
			route_args.VERSION,
			route_args.ID
		],
		scopes: read_only_scopes,
		controller: controller.getCareTeamById
	},
	{
		type: 'post',
		path: '/:version/careteam',
		corsOptions: { methods: ['POST'] },
		args: [
			route_args.VERSION,
			write_args.RESOURCE_ID,
			write_args.RESOURCE_BODY
		],
		scopes: write_only_scopes,
		controller: controller.createCareTeam
	},
	{
		type: 'put',
		path: '/:version/careteam/:id',
		corsOptions: { methods: ['PUT'] },
		args: [
			route_args.ID,
			route_args.VERSION,
			write_args.RESOURCE_BODY
		],
		scopes: write_only_scopes,
		controller: controller.updateCareTeam
	},
	{
		type: 'delete',
		path: '/:version/careteam/:id',
		corsOptions: { methods: ['DELETE'] },
		args: [
			route_args.ID,
			route_args.VERSION,
			write_args.RESOURCE_BODY
		],
		scopes: write_only_scopes,
		controller: controller.deleteCareTeam
	}
];

/**
 * @name exports
 * @summary CareTeam config
 */
module.exports = {
	routeOptions: {
		profileKey: CONFIG_KEYS.CARETEAM
	},
	routes
};
