/**
 * @name exports
 * @summary ElementDefinitionBinding Class
 */
module.exports = class ElementDefinitionBinding {
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

		Object.defineProperty(this, '_strength', {
			enumerable: true,
			get: () => this.__data._strength,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._strength = new Element(value);
			},
		});

		Object.defineProperty(this, 'strength', {
			enumerable: true,
			get: () => this.__data.strength,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.strength = value;
			},
		});

		Object.defineProperty(this, '_description', {
			enumerable: true,
			get: () => this.__data._description,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._description = new Element(value);
			},
		});

		Object.defineProperty(this, 'description', {
			enumerable: true,
			get: () => this.__data.description,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.description = value;
			},
		});

		Object.defineProperty(this, '_valueSet', {
			enumerable: true,
			get: () => this.__data._valueSet,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._valueSet = new Element(value);
			},
		});

		Object.defineProperty(this, 'valueSet', {
			enumerable: true,
			get: () => this.__data.valueSet,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.valueSet = value;
			},
		});

		// Merge in any defaults
		Object.assign(this, opts);

		// Define a default non-writable resourceType property
		Object.defineProperty(this, 'resourceType', {
			value: 'ElementDefinitionBinding',
			enumerable: true,
			writable: false,
		});
	}

	static get resourceType() {
		return 'ElementDefinitionBinding';
	}

	toJSON() {
		return {
			_id: this._id && this._id.toJSON(),
			id: this.id,
			extension: this.extension && this.extension.map(v => v.toJSON()),
			_strength: this._strength && this._strength.toJSON(),
			strength: this.strength,
			_description: this._description && this._description.toJSON(),
			description: this.description,
			_valueSet: this._valueSet && this._valueSet.toJSON(),
			valueSet: this.valueSet,
		};
	}
};
