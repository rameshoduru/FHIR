/**
 * @name exports
 * @summary ConformanceRestResource Class
 */
module.exports = class ConformanceRestResource {
	constructor(opts) {
		// Create an object to store all props
		Object.defineProperty(this, '__data', { value: {} });

		// Define getters and setters as enumerable

		Object.defineProperty(this, '_id', {
			enumerable: true,
			get: () => this.__data._id,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._id = new Element(value);
			},
		});

		Object.defineProperty(this, 'id', {
			enumerable: true,
			get: () => this.__data.id,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.id = value;
			},
		});

		Object.defineProperty(this, 'extension', {
			enumerable: true,
			get: () => this.__data.extension,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Extension = require('./extension.js');
				this.__data.extension = Array.isArray(value) ? value.map(v => new Extension(v)) : [new Extension(value)];
			},
		});

		Object.defineProperty(this, 'modifierExtension', {
			enumerable: true,
			get: () => this.__data.modifierExtension,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Extension = require('./extension.js');
				this.__data.modifierExtension = Array.isArray(value)
					? value.map(v => new Extension(v))
					: [new Extension(value)];
			},
		});

		Object.defineProperty(this, '_type', {
			enumerable: true,
			get: () => this.__data._type,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._type = new Element(value);
			},
		});
		// valueSetReference: http://hl7.org/fhir/ValueSet/resource-types
		Object.defineProperty(this, 'type', {
			enumerable: true,
			get: () => this.__data.type,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.type = value;
			},
		});

		Object.defineProperty(this, 'profile', {
			enumerable: true,
			get: () => this.__data.profile,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Reference = require('./reference.js');
				this.__data.profile = new Reference(value);
			},
		});

		Object.defineProperty(this, 'interaction', {
			enumerable: true,
			get: () => this.__data.interaction,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let ConformanceRestResourceInteraction = require('./conformancerestresourceinteraction.js');
				this.__data.interaction = Array.isArray(value)
					? value.map(v => new ConformanceRestResourceInteraction(v))
					: [new ConformanceRestResourceInteraction(value)];
			},
		});

		Object.defineProperty(this, '_versioning', {
			enumerable: true,
			get: () => this.__data._versioning,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._versioning = new Element(value);
			},
		});
		// valueSetReference: http://hl7.org/fhir/ValueSet/versioning-policy
		Object.defineProperty(this, 'versioning', {
			enumerable: true,
			get: () => this.__data.versioning,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.versioning = value;
			},
		});

		Object.defineProperty(this, '_readHistory', {
			enumerable: true,
			get: () => this.__data._readHistory,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._readHistory = new Element(value);
			},
		});

		Object.defineProperty(this, 'readHistory', {
			enumerable: true,
			get: () => this.__data.readHistory,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.readHistory = value;
			},
		});

		Object.defineProperty(this, '_updateCreate', {
			enumerable: true,
			get: () => this.__data._updateCreate,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._updateCreate = new Element(value);
			},
		});

		Object.defineProperty(this, 'updateCreate', {
			enumerable: true,
			get: () => this.__data.updateCreate,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.updateCreate = value;
			},
		});

		Object.defineProperty(this, '_conditionalCreate', {
			enumerable: true,
			get: () => this.__data._conditionalCreate,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._conditionalCreate = new Element(value);
			},
		});

		Object.defineProperty(this, 'conditionalCreate', {
			enumerable: true,
			get: () => this.__data.conditionalCreate,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.conditionalCreate = value;
			},
		});

		Object.defineProperty(this, '_conditionalUpdate', {
			enumerable: true,
			get: () => this.__data._conditionalUpdate,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._conditionalUpdate = new Element(value);
			},
		});

		Object.defineProperty(this, 'conditionalUpdate', {
			enumerable: true,
			get: () => this.__data.conditionalUpdate,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.conditionalUpdate = value;
			},
		});

		Object.defineProperty(this, '_conditionalDelete', {
			enumerable: true,
			get: () => this.__data._conditionalDelete,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._conditionalDelete = new Element(value);
			},
		});
		// valueSetReference: http://hl7.org/fhir/ValueSet/conditional-delete-status
		Object.defineProperty(this, 'conditionalDelete', {
			enumerable: true,
			get: () => this.__data.conditionalDelete,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.conditionalDelete = value;
			},
		});

		Object.defineProperty(this, '_searchInclude', {
			enumerable: true,
			get: () => this.__data._searchInclude,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._searchInclude = new Element(value);
			},
		});

		Object.defineProperty(this, 'searchInclude', {
			enumerable: true,
			get: () => this.__data.searchInclude,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.searchInclude = Array.isArray(value) ? value.map(v => v) : [value];
			},
		});

		Object.defineProperty(this, '_searchRevInclude', {
			enumerable: true,
			get: () => this.__data._searchRevInclude,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._searchRevInclude = new Element(value);
			},
		});

		Object.defineProperty(this, 'searchRevInclude', {
			enumerable: true,
			get: () => this.__data.searchRevInclude,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.searchRevInclude = Array.isArray(value) ? value.map(v => v) : [value];
			},
		});

		Object.defineProperty(this, 'searchParam', {
			enumerable: true,
			get: () => this.__data.searchParam,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let ConformanceRestResourceSearchParam = require('./conformancerestresourcesearchparam.js');
				this.__data.searchParam = Array.isArray(value)
					? value.map(v => new ConformanceRestResourceSearchParam(v))
					: [new ConformanceRestResourceSearchParam(value)];
			},
		});

		// Merge in any defaults
		Object.assign(this, opts);

		// Define a default non-writable resourceType property
		Object.defineProperty(this, 'resourceType', {
			value: 'ConformanceRestResource',
			enumerable: true,
			writable: false,
		});
	}

	static get resourceType() {
		return 'ConformanceRestResource';
	}

	toJSON() {
		return {
			_id: this._id && this._id.toJSON(),
			id: this.id,
			extension: this.extension && this.extension.map(v => v.toJSON()),
			modifierExtension: this.modifierExtension && this.modifierExtension.map(v => v.toJSON()),
			_type: this._type && this._type.toJSON(),
			type: this.type,
			profile: this.profile && this.profile.toJSON(),
			interaction: this.interaction && this.interaction.map(v => v.toJSON()),
			_versioning: this._versioning && this._versioning.toJSON(),
			versioning: this.versioning,
			_readHistory: this._readHistory && this._readHistory.toJSON(),
			readHistory: this.readHistory,
			_updateCreate: this._updateCreate && this._updateCreate.toJSON(),
			updateCreate: this.updateCreate,
			_conditionalCreate: this._conditionalCreate && this._conditionalCreate.toJSON(),
			conditionalCreate: this.conditionalCreate,
			_conditionalUpdate: this._conditionalUpdate && this._conditionalUpdate.toJSON(),
			conditionalUpdate: this.conditionalUpdate,
			_conditionalDelete: this._conditionalDelete && this._conditionalDelete.toJSON(),
			conditionalDelete: this.conditionalDelete,
			_searchInclude: this._searchInclude && this._searchInclude.toJSON(),
			searchInclude: this.searchInclude,
			_searchRevInclude: this._searchRevInclude && this._searchRevInclude.toJSON(),
			searchRevInclude: this.searchRevInclude,
			searchParam: this.searchParam && this.searchParam.map(v => v.toJSON()),
		};
	}
};
