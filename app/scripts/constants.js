/*global ModdrWebapp, Backbone, JST*/

(function() {
    'use strict';

    // This singleton's purpose is to maintain a list of all connected devices. It does this by polling ADB
    ModdrWebapp.Constants = {
        // This is the rate at which we query ADB for the connected devices list.
        ADBDeviceRefreshInterval: 1000,

        // This data is used to populate the UI with list elements for testing purposes.
        TestData: {
            myMods: [
                {
                    // canCheck: true,
                    checked: 1,
                    title: 'Valentines Day Messenger',
                    subtitle: 'Themes Facebook Messenger for you or a special someone.',
                    callToAction: 'Install',
                    // image: '/images/instagram.jpg'
                },
                {
                    // canCheck: true,
                    checked: 1,
                    title: 'Instagram Color Changer',
                    subtitle: 'Allows you to choose which colors appear throughout Instagram.',
                    callToAction: 'Install',
                    // image: '/images/instagram.jpg'
                }
            ],

            store: [
                {
                    // canCheck: true,
                    // checked: 1,
                    title: 'Facebook Messenger',
                    subtitle: '1 mod installed, 1 available',
                    callToAction: 'Explore',
                    image: '/images/facebook-messenger.png'
                },
                {
                    // canCheck: true,
                    // checked: 1,
                    title: 'Facebook',
                    subtitle: '2 mods available',
                    callToAction: 'Explore',
                    image: '/images/facebook.png'
                },
                {
                    // checked: 1,
                    title: 'Yik Yak',
                    subtitle: '1 mod available',
                    callToAction: 'Explore',
                    image: '/images/yik-yak.png'
                },
                {
                    // checked: 1,
                    title: 'Instagram',
                    subtitle: '1 mod available',
                    callToAction: 'Explore',
                    image: '/images/instagram.jpg'
                }
            ],

            products: [
                [
                    {
                        title: 'Valentines Day Messenger',
                        subtitle: 'Themes Facebook Messenger for you or a special someone.',
                        callToAction: 'Installed',
                    },
                    {
                        title: 'Mute All Group Conversations',
                        subtitle: 'Never have to deal with another group conversation again.',
                        callToAction: 'Install',
                    }
                ],
                [
                    {
                        title: 'Distraction-Free Facebook',
                        subtitle: 'Replace your newsfeed with inspiring quotes.',
                        callToAction: 'Install',
                    },
                    {
                        title: 'Facebook Color Chooser',
                        subtitle: 'Rebuild Facebooks color palette and make it your own!',
                        callToAction: 'Install',
                    }
                ],
                [
                    {
                        title: 'Distraction-Free Facebook',
                        subtitle: 'Replace your newsfeed with inspiring quotes.',
                        callToAction: 'Install',
                    }
                ],
                [
                    {
                        title: 'Yik Yak Limiter',
                        subtitle: 'Limit your Yik Yak usage to once per day.',
                        callToAction: 'Install',
                    }
                ],
                [
                    {
                        title: 'Instagram Limiter',
                        subtitle: 'Limit your Instagram usage to once per day.',
                        callToAction: 'Install',
                    }
                ]
            ]
        }
    };

})();
