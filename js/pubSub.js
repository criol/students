/**
 * Created with JetBrains WebStorm.
 * User: Sparko
 * Date: 18.04.13
 * Time: 2:20
 * To change this template use File | Settings | File Templates.
 */
    var publisher = {
        subscribers: {
            any: [] // тип события: подписчик
        },
        subscribe: function (fn, type) {
            type = type || 'any';
            if (typeof this.subscribers[type] === 'undefined') {
                this.subscribers[type] = [];
            }
            this.subscribers[type].push(fn);
        },
        unsubscribe: function (fn, type) {
            this.visitSubscribers('unsubscribe', fn, type);
        },
        publish: function (publication, type) {
            this.visitSubscribers('publish', publication, type);
        },
        visitSubscribers: function (action, arg, type) {
            var pubtype = type || 'any',
            subscribers = this.subscribers[pubtype],
                i,
                max = subscribers.length;
            for (i = 0; i < max; i += 1) {
                if (action === 'publish') {
                    subscribers[i](arg);
                } else {
                    if (subscribers[i] === arg) {
                        subscribers.splice(i, 1);
                    }
                }
            }
        }
    };