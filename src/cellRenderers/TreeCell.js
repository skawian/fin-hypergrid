'use strict';

var CellRenderer = require('./CellRenderer');

/**
 * @constructor
 * @extends CellRenderer
 */
var TreeCell = CellRenderer.extend('TreeCell', {

    /**
     * @desc A simple implementation of a tree cell renderer for use mainly with the qtree.
     * @param {number} config.x - the "translated" index into the `behavior.allColumns` array
     * @param {number} config.normalizedY - the vertical grid coordinate normalized to first data row
     * @param {number} config.untranslatedX - the horizontal grid coordinate measured from first data column
     * @param {number} config.y - the vertical grid coordinate measured from top header row
     * @memberOf TreeCell.prototype
     */
    paint: function(gc, config) {
        var x = config.bounds.x,
            y = config.bounds.y,
            width = config.bounds.width,
            height = config.bounds.height;

        var val = this.config.value.data;
        var indent = this.config.value.indent;
        var icon = this.config.value.icon;

        //fill background only if our bgColor is populated or we are a selected cell
        if (this.config.backgroundColor || this.config.isSelected) {
            gc.fillStyle = this.config.isSelected ? this.config.backgroundColor : this.config.backgroundColor;
            gc.fillRect(x, y, width, height);
        }

        if (!val || !val.length) {
            return;
        }
        var valignOffset = Math.ceil(height / 2);

        gc.fillStyle = this.config.isSelected ? this.config.backgroundColor : this.config.backgroundColor;
        gc.fillText(icon + val, x + indent, y + valignOffset);

        var textWidth = this.config.getTextWidth(gc, icon + val);
        var minWidth = x + indent + textWidth + 10;
        this.config.minWidth = minWidth;
    }
});

module.exports = TreeCell;
