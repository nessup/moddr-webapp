/*global ModdrWebapp, Backbone, JST*/

ModdrWebapp.Views = ModdrWebapp.Views || {};

(function () {
    'use strict';

    ModdrWebapp.Views.List = Backbone.View.extend({

        template: JST['app/scripts/templates/list.ejs'],

        tagName: 'ul',

        className: 'list',

        events: {},

        initialize: function (options) {
            this.list = options.list;
        },

        render: function () {
            this.$el.html(this.template({
                list: this.list
            }));
        }
    });

})();
u
