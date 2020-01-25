var opts = {
    host: "completion.amazon.co.uk/search/complete",
    marketId: "44571",
    obfuscatedMarketId: "A21TJRUUN4KGV",
    searchAliases: ["aps", "amazonfresh", "amazon-devices", "stripbooks", "computers", "digital-text", "dvd", "instant-video", "electronics", "hpc", "kitchen", "furniture", "popular", "software", "videogames", "toys", "beauty", "baby", "watches", "jewelry", "luggage", "mobile-apps", "apparel", "shoes", "sporting", "gift-cards", "grocery", "mi", "office-products", "pets", "automotive", "industrial", "fashion", "appliances", "pantry", "lawngarden", "local-services", "luxury-beauty", "home-improvement", "amazon-global-store", "alexa-skills", "collectibles"],
    filterAliases: [],
    pageType: "Gateway",
    requestId: "JVHGG2EMJ56M7MGB6Q0Q",
    sessionId: "262-6785183-7012312",
    language: "en_IN",
    customerId: "",
    b2b: 0,
    fresh: 0,
    biaWidgetUrl: "/gp/yourstore?ie=UTF8&edit=1&p=teJJ0kYVpfabQqnQxRJhz0gItBOiZDzEGQrYPHlNfEh8%2BwyTPCnkZCMWy1goXar9yD7J76J9OgEeLtdHM0itJ2lB1cg7xeRR&ref=nb_sb_ss_bia_acct",
    isDdInT3: 0,
    isDdInT1: 0,
    isJpOrCn: 0,
    isUseAuiIss: 1
};

var issOpts = {
    fallbackFlag: 1,
    isDigitalFeaturesEnabled: 0,
    isWayfindingEnabled: 0,
    dropdown: "select.searchSelect",
    departmentText: "in {department}",
    suggestionText: "Search suggestions",
    recentSearchesTreatment: "C",
    authorSuggestionText: "all books by {author}",
    recentSearchesText: "Recent searches",
    biaTitleText: "",
    biaPurchasedText: "",
    biaViewAllText: "",
    biaViewAllManageText: "View all and manage",
    biaAndText: "",
    biaManageText: "",
    biaWeblabTreatment: "",
    issNavConfig: {
        "weblabTreatments": {
            "SEARCH_ISS_174372": "C",
            "SEARCH_ISS_209616": "T2"
        }
    },
    np: 0,
    issCorpus: [],
    cf: 1,
    removeDeepNodeISS: "",
    trendingTreatment: "C",
    useAPIV2: "",
    opfSwitch: "",
    isISSDesktopRefactorEnabled: "1",
    widgetSuggestionsEnabled: "1",
    isInternal: 0,
    enableAJAXWarmupCall: "1",
    useServiceHighlighting: "1"
};

if (opts.isUseAuiIss === 1 && window.$Nav) {
    window.$Nav.when('sx.iss').run('iss-mason-init', function(iss) {
        var issInitObj = buildIssInitObject(opts, issOpts, true);

        new iss.IssParentCoordinator(issInitObj);

        $SearchJS.declare('canCreateAutocomplete', issInitObj);
    });
} else if (window.$SearchJS) {

    var iss;

    // BEGIN Deprecated globals
    var issHost = opts.host,
        issMktid = opts.marketId,
        issSearchAliases = opts.searchAliases,
        updateISSCompletion = function() {
            iss.updateAutoCompletion();
        };
    // END deprecated globals

    $SearchJS.when('jQuery', 'search-js-autocomplete-lib').run('autocomplete-init', initializeAutocomplete);
    $SearchJS.when('canCreateAutocomplete').run('createAutocomplete', createAutocomplete);

    if (opts.isDdInT3) {
        $SearchJS.when('search-js-autocomplete').run('autocomplete-dd-init', function() {
            mergeBTFDropdown();
        });
    }

    if (opts.isDdInT1) {
        $SearchJS.when('search-js-autocomplete').run('autocomplete-dd-init', function() {
            searchDropdown();
        });
    }

} // END conditional for window.$SearchJS

function initializeAutocomplete(jQuery) {

    var issInitObj = buildIssInitObject(opts, issOpts);
    $SearchJS.declare('canCreateAutocomplete', issInitObj);
} // END initializeAutocomplete

function initSearchCsl(searchCSL, issInitObject) {
    searchCSL.init(opts.pageType, (window.ue && window.ue.rid) || opts.requestId);

    $SearchJS.declare('canCreateAutocomplete', issInitObject);
} // END initSearchCsl

function createAutocomplete(issObject) {
    iss = new AutoComplete(issObject);

    $SearchJS.publish('search-js-autocomplete', iss);

    logMetrics();
} // END createAutocomplete



function logMetrics() {
    if (typeof uet == 'function' && typeof uex == 'function') {
        uet('be', 'iss-init-pc', {
            wb: 1
        });
        uex('ld', 'iss-init-pc', {
            wb: 1
        });
    }
} // END logMetrics

window.$Nav && $Nav.declare('nav.inline');

(function(i) {
    i.onload = function() {
        window.uet && uet('ne')
    };
    i.src = window._navbarSpriteUrl;
}(new Image()));



_navbar.browsepromos['nav-sa-Echo'] = {
    "width": "500",
    "promoType": "wide",
    "vertOffset": "0",
    "tabletAltText": null,
    "horizOffset": "0",
    "height": "450",
    "altText": null,
    "image": "assest/Flyout_500x450._CB463264986_.png",
    "tabletDestination": null,
    "tabletImage": null
};
_navbar.browsepromos['nav-sa-Fire-TV'] = {
    "width": "499",
    "promoType": "wide",
    "vertOffset": "0",
    "tabletAltText": null,
    "horizOffset": "0",
    "height": "479",
    "altText": null,
    "image": "assest/Flyout_just._CB458220204_.png",
    "tabletDestination": null,
    "tabletImage": null
};
_navbar.browsepromos['nav-sa-Beauty, Health & Grocery'] = {
    "width": null,
    "promoType": "wide",
    "vertOffset": "-1",
    "tabletAltText": null,
    "horizOffset": "0",
    "height": null,
    "altText": null,
    "image": null,
    "tabletDestination": null,
    "tabletImage": null
};
_navbar.browsepromos['nav-sa-books'] = {
    "width": "500",
    "promoType": "wide",
    "vertOffset": "0",
    "tabletAltText": null,
    "horizOffset": "0",
    "height": "450",
    "altText": "Father's day bookstore",
    "image": "assest/xcm_manual-1173179_in_books_fathers_day_500x450_1559145443._CB463276719_.png",
    "tabletDestination": null,
    "tabletImage": null
};
_navbar.browsepromos['nav-sa-gift-cards'] = {
    "width": "100%",
    "promoType": "wide",
    "vertOffset": "0",
    "tabletAltText": null,
    "horizOffset": "0",
    "height": "auto",
    "altText": null,
    "image": "assest/RGC24_JupiterW1GC_500x500_Nov._CB479161047_.png",
    "tabletDestination": null,
    "tabletImage": null
};
_navbar.browsepromos['nav-sa-home-kitchen'] = {
    "width": "100%",
    "promoType": "wide",
    "vertOffset": "-1",
    "tabletAltText": null,
    "horizOffset": "0",
    "height": "450",
    "altText": null,
    "image": "assest/GW_Flyout_500x450_Flyout._CB487102089_.png",
    "tabletDestination": null,
    "tabletImage": null
};
_navbar.browsepromos['nav-sa-kindle'] = {
    "width": "100%",
    "promoType": "wide",
    "vertOffset": "0",
    "tabletAltText": null,
    "horizOffset": "0",
    "height": "auto",
    "altText": null,
    "image": "assest/Jaegerstreetflyout._CB467541377_.png",
    "tabletDestination": null,
    "tabletImage": null
};
_navbar.browsepromos['nav-sa-mens-fashion'] = {
    "width": "500",
    "promoType": "wide",
    "vertOffset": "0",
    "tabletAltText": null,
    "horizOffset": "-1",
    "height": "450",
    "altText": "mens fashion",
    "image": "assest/men._CB468888570_.jpg",
    "tabletDestination": null,
    "tabletImage": null
};
_navbar.browsepromos['nav-sa-prime-music'] = {
    "width": "500",
    "promoType": "wide",
    "vertOffset": "0",
    "tabletAltText": null,
    "horizOffset": "0",
    "height": "450",
    "altText": null,
    "image": "assest/Flyout_Reduced._CB462852406_.png",
    "tabletDestination": null,
    "tabletImage": null
};
_navbar.browsepromos['nav-sa-prime-video'] = {
    "width": "499",
    "promoType": "wide",
    "vertOffset": "0",
    "tabletAltText": null,
    "horizOffset": "0",
    "height": "492",
    "altText": null,
    "image": "assest/499x492-GNO._CB463231671_.png",
    "tabletDestination": null,
    "tabletImage": null
};
_navbar.browsepromos['nav-sa-sports-outdoors'] = {
    "width": "500",
    "promoType": "wide",
    "vertOffset": "-1",
    "tabletAltText": null,
    "horizOffset": "0",
    "height": "450",
    "altText": null,
    "image": "assest/flyout._CB505942756_.png",
    "tabletDestination": null,
    "tabletImage": null
};
_navbar.browsepromos['nav-sa-toys-baby'] = {
    "width": "500",
    "promoType": "wide",
    "vertOffset": "0",
    "tabletAltText": null,
    "horizOffset": "0",
    "height": "450",
    "altText": null,
    "image": "assest/Flyoutnew_500x450_1559280449._CB461564221_.png",
    "tabletDestination": null,
    "tabletImage": null
};
_navbar.browsepromos['nav-sa-tv-appl-elec'] = {
    "width": "500",
    "promoType": "wide",
    "vertOffset": "-1",
    "tabletAltText": null,
    "horizOffset": "0",
    "height": "500",
    "altText": "Bose Framesz",
    "image": "assest/D10643648_CEAV_Bose-Frame_fluout_500x500._CB444006028_.png",
    "tabletDestination": null,
    "tabletImage": null
};
_navbar.browsepromos['nav-sa-womens-fashion'] = {
    "width": "500",
    "promoType": "wide",
    "vertOffset": "0",
    "tabletAltText": null,
    "horizOffset": "-1",
    "height": "450",
    "altText": null,
    "image": "assest/Women-fashion_Flyout_500x450._CB468888565_.jpg",
    "tabletDestination": null,
    "tabletImage": null
};

window.$Nav && $Nav.declare('config.browsePromos', window._navbar.browsepromos);

window.$Nav && $Nav.declare('config.extendedFlyout', 'false');

window.$Nav && $Nav.declare('config.logNonAuiJsError', false);

window.$Nav && $Nav.declare('config.pssFlag', '0');

window.$Nav && $Nav.declare('config.flyoutClickState', 'C');

if (window.P && typeof window.P.declare === "function" && typeof window.P.now === "function") {
    window.P.now('packardGlowIngressJsEnabled').execute(function(glowEnabled) {
        if (!glowEnabled) {
            window.P.declare('packardGlowIngressJsEnabled', true);
        }
    });
    window.P.now('packardGlowStoreName').execute(function(storeName) {
        if (!storeName) {
            window.P.declare('packardGlowStoreName', 'generic');
        }
    });
}

window.$Nav && $Nav.declare('configComplete');