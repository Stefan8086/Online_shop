/*!
  * Bootstrap v5.3.2 (https://getbootstrap.com/)
  * Copyright 2011-2023 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('@popperjs/core')) :
  typeof define === 'function' && define.amd ? define(['@popperjs/core'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.bootstrap = factory(global.Popper));
})(this, (function (Popper) { 'use strict';

  function _interopNamespaceDefault(e) {
    const n = Object.create(null, { [Symbol.toStringTag]: { value: 'Module' } });
    if (e) {
      for (const k in e) {
        if (k !== 'default') {
          const d = Object.getOwnPropertyDescriptor(e, k);
          Object.defineProperty(n, k, d.get ? d : {
            enumerable: true,
            get: () => e[k]
          });
        }
      }
    }
    n.default = e;
    return Object.freeze(n);
  }

  const Popper__namespace = /*#__PURE__*/_interopNamespaceDefault(Popper);

  /**
   * --------------------------------------------------------------------------
   * Bootstrap dom/data.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */

  /**
   * Constants
   */

  const elementMap = new Map();
  const Data = {
    set(element, key, instance) {
      if (!elementMap.has(element)) {
        elementMap.set(element, new Map());
      }
      const instanceMap = elementMap.get(element);

      // make it clear we only want one instance per element
      // can be removed later when multiple key/instances are fine to be used
      if (!instanceMap.has(key) && instanceMap.size !== 0) {
        // eslint-disable-next-line no-console
        console.error(`Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(instanceMap.keys())[0]}.`);
        return;
      }
      instanceMap.set(key, instance);
    },
    get(element, key) {
      if (elementMap.has(element)) {
        return elementMap.get(element).get(key) || null;
      }
      return null;
    },
    remove(element, key) {
      if (!elementMap.has(element)) {
        return;
      }
      const instanceMap = elementMap.get(element);
      instanceMap.delete(key);

      // free up element references if there are no instances left for an element
      if (instanceMap.size === 0) {
        elementMap.delete(element);
      }
    }
  };

  /**
   * --------------------------------------------------------------------------
   * Bootstrap util/index.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */

  const MAX_UID = 1000000;
  const MILLISECONDS_MULTIPLIER = 1000;
  const TRANSITION_END = 'transitionend';

  /**
   * Properly escape IDs selectors to handle weird IDs
   * @param {string} selector
   * @returns {string}
   */
  const parseSelector = selector => {
    if (selector && window.CSS && window.CSS.escape) {
      // document.querySelector needs escaping to handle IDs (html5+) containing for instance /
      selector = selector.replace(/#([^\s"#']+)/g, (match, id) => `#${CSS.escape(id)}`);
    }
    return selector;
  };

  // Shout-out Angus Croll (https://goo.gl/pxwQGp)
  const toType = object => {
    if (object === null || object === undefined) {
      return `${object}`;
    }
    return Object.prototype.toString.call(object).match(/\s([a-z]+)/i)[1].toLowerCase();
  };

  /**
   * Public Util API
   */

  const getUID = prefix => {
    do {
      prefix += Math.floor(Math.random() * MAX_UID);
    } while (document.getElementById(prefix));
    return prefix;
  };
  const getTransitionDurationFromElement = element => {
    if (!element) {
      return 0;
    }

    // Get transition-duration of the element
    let {
      transitionDuration,
      transitionDelay
    } = window.getComputedStyle(element);
    const floatTransitionDuration = Number.parseFloat(transitionDuration);
    const floatTransitionDelay = Number.parseFloat(transitionDelay);

    // Return 0 if element or transition duration is not found
    if (!floatTransitionDuration && !floatTransitionDelay) {
      return 0;
    }

    // If multiple durations are defined, take the first
    transitionDuration = transitionDuration.split(',')[0];
    transitionDelay = transitionDelay.split(',')[0];
    return (Number.parseFloat(transitionDuration) + Number.parseFloat(transitionDelay)) * MILLISECONDS_MULTIPLIER;
  };
  const triggerTransitionEnd = element => {
    element.dispatchEvent(new Event(TRANSITION_END));
  };
  const isElement = object => {
    if (!object || typeof object !== 'object') {
      return false;
    }
    if (typeof object.jquery !== 'undefined') {
      object = object[0];
    }
    return typeof object.nodeType !== 'undefined';
  };
  const getElement = object => {
    // it's a jQuery object or a node element
    if (isElement(object)) {
      return object.jquery ? object[0] : object;
    }
    if (typeof object === 'string' && object.length > 0) {
      return document.querySelector(parseSelector(object));
    }
    return null;
  };
  const isVisible = element => {
    if (!isElement(element) || element.getClientRects().length === 0) {
      return false;
    }
    const elementIsVisible = getComputedStyle(element).getPropertyValue('visibility') === 'visible';
    // Handle `details` element as its content may falsie appear visible when it is closed
    const closedDetails = element.closest('details:not([open])');
    if (!closedDetails) {
      return elementIsVisible;
    }
    if (closedDetails !== element) {
      const summary = element.closest('summary');
      if (summary && summary.parentNode !== closedDetails) {
        return false;
      }
      if (summary === null) {
        return false;
      }
    }
    return elementIsVisible;
  };
  const isDisabled = element => {
    if (!element || element.nodeType !== Node.ELEMENT_NODE) {
      return true;
    }
    if (element.classList.contains('disabled')) {
      return true;
    }
    if (typeof element.disabled !== 'undefined') {
      return element.disabled;
    }
    return element.hasAttribute('disabled') && element.getAttribute('disabled') !== 'false';
  };
  const findShadowRoot = element => {
    if (!document.documentElement.attachShadow) {
      return null;
    }

    // Can find the shadow root otherwise it'll return the document
    if (typeof element.getRootNode === 'function') {
      const root = element.getRootNode();
      return root instanceof ShadowRoot ? root : null;
    }
    if (element instanceof ShadowRoot) {
      return element;
    }

    // when we don't find a shadow root
    if (!element.parentNode) {
      return null;
    }
    return findShadowRoot(element.parentNode);
  };
  const noop = () => {};

  /**
   * Trick to restart an element's animation
   *
   * @param {HTMLElement} element
   * @return void
   *
   * @see https://www.charistheo.io/blog/2021/02/restart-a-css-animation-with-javascript/#restarting-a-css-animation
   */
  const reflow = element => {
    element.offsetHeight; // eslint-disable-line no-unused-expressions
  };

  const getjQuery = () => {
    if (window.jQuery && !document.body.hasAttribute('data-bs-no-jquery')) {
      return window.jQuery;
    }
    return null;
  };
  const DOMContentLoadedCallbacks = [];
  const onDOMContentLoaded = callback => {
    if (document.readyState === 'loading') {
      // add listener on the first call when the document is in loading state
      if (!DOMContentLoadedCallbacks.length) {
        document.addEventListener('DOMContentLoaded', () => {
          for (const callback of DOMContentLoadedCallbacks) {
            callback();
          }
        });
      }
      DOMContentLoadedCallbacks.push(callback);
    } else {
      callback();
    }
  };
  const isRTL = () => document.documentElement.dir === 'rtl';
  const defineJQueryPlugin = plugin => {
    onDOMContentLoaded(() => {
      const $ = getjQuery();
      /* istanbul ignore if */
      if ($) {
        const name = plugin.NAME;
        const JQUERY_NO_CONFLICT = $.fn[name];
        $.fn[name] = plugin.jQueryInterface;
        $.fn[name].Constructor = plugin;
        $.fn[name].noConflict = () => {
          $.fn[name] = JQUERY_NO_CONFLICT;
          return plugin.jQueryInterface;
        };
      }
    });
  };
  const execute = (possibleCallback, args = [], defaultValue = possibleCallback) => {
    return typeof possibleCallback === 'function' ? possibleCallback(...args) : defaultValue;
  };
  const executeAfterTransition = (callback, transitionElement, waitForTransition = true) => {
    if (!waitForTransition) {
      execute(callback);
      return;
    }
    const durationPadding = 5;
    const emulatedDuration = getTransitionDurationFromElement(transitionElement) + durationPadding;
    let called = false;
    const handler = ({
      target
    }) => {
      if (target !== transitionElement) {
        return;
      }
      called = true;
      transitionElement.removeEventListener(TRANSITION_END, handler);
      execute(callback);
    };
    transitionElement.addEventListener(TRANSITION_END, handler);
    setTimeout(() => {
      if (!called) {
        triggerTransitionEnd(transitionElement);
      }
    }, emulatedDuration);
  };

  /**
   * Return the previous/next element of a list.
   *
   * @param {array} list    The list of elements
   * @param activeElement   The active element
   * @param shouldGetNext   Choose to get next or previous element
   * @param isCycleAllowed
   * @return {Element|elem} The proper element
   */
  const getNextActiveElement = (list, activeElement, shouldGetNext, isCycleAllowed) => {
    const listLength = list.length;
    let index = list.indexOf(activeElement);

    // if the element does not exist in the list return an element
    // depending on the direction and if cycle is allowed
    if (index === -1) {
      return !shouldGetNext && isCycleAllowed ? list[listLength - 1] : list[0];
    }
    index += shouldGetNext ? 1 : -1;
    if (isCycleAllowed) {
      index = (index + listLength) % listLength;
    }
    return list[Math.max(0, Math.min(index, listLength - 1))];
  };

  /**
   * --------------------------------------------------------------------------
   * Bootstrap dom/event-handler.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */


  /**
   * Constants
   */

  const namespaceRegex = /[^.]*(?=\..*)\.|.*/;
  const stripNameRegex = /\..*/;
  const stripUidRegex = /::\d+$/;
  const eventRegistry = {}; // Events storage
  let uidEvent = 1;
  const customEvents = {
    mouseenter: 'mouseover',
    mouseleave: 'mouseout'
  };
  const nativeEvents = new Set(['click', 'dblclick', 'mouseup', 'mousedown', 'contextmenu', 'mousewheel', 'DOMMouseScroll', 'mouseover', 'mouseout', 'mousemove', 'selectstart', 'selectend', 'keydown', 'keypress', 'keyup', 'orientationchange', 'touchstart', 'touchmove', 'touchend', 'touchcancel', 'pointerdown', 'pointermove', 'pointerup', 'pointerleave', 'pointercancel', 'gesturestart', 'gesturechange', 'gestureend', 'focus', 'blur', 'change', 'reset', 'select', 'submit', 'focusin', 'focusout', 'load', 'unload', 'beforeunload', 'resize', 'move', 'DOMContentLoaded', 'readystatechange', 'error', 'abort', 'scroll']);

  /**
   * Private methods
   */

  function makeEventUid(element, uid) {
    return uid && `${uid}::${uidEvent++}` || element.uidEvent || uidEvent++;
  }
  function getElementEvents(element) {
    const uid = makeEventUid(element);
    element.uidEvent = uid;
    eventRegistry[uid] = eventRegistry[uid] || {};
    return eventRegistry[uid];
  }
  function bootstrapHandler(element, fn) {
    return function handler(event) {
      hydrateObj(event, {
        delegateTarget: element
      });
      if (handler.oneOff) {
        EventHandler.off(element, event.type, fn);
      }
      return fn.apply(element, [event]);
    };
  }
  function bootstrapDelegationHandler(element, selector, fn) {
    return function handler(event) {
      const domElements = element.querySelectorAll(selector);
      for (let {
        target
      } = event; target && target !== this; target = target.parentNode) {
        for (const domElement of domElements) {
          if (domElement !== target) {
            continue;
          }
          hydrateObj(event, {
            delegateTarget: target
          });
          if (handler.oneOff) {
            EventHandler.off(element, event.type, selector, fn);
          }
          return fn.apply(target, [event]);
        }
      }
    };
  }
  function findHandler(events, callable, delegationSelector = null) {
    return Object.values(events).find(event => event.callable === callable && event.delegationSelector === delegationSelector);
  }
  function normalizeParameters(originalTypeEvent, handler, delegationFunction) {
    const isDelegated = typeof handler === 'string';
    // TODO: tooltip passes `false` instead of selector, so we need to check
    const callable = isDelegated ? delegationFunction : handler || delegationFunction;
    let typeEvent = getTypeEvent(originalTypeEvent);
    if (!nativeEvents.has(typeEvent)) {
      typeEvent = originalTypeEvent;
    }
    return [isDelegated, callable, typeEvent];
  }
  function addHandler(element, originalTypeEvent, handler, delegationFunction, oneOff) {
    if (typeof originalTypeEvent !== 'string' || !element) {
      return;
    }
    let [isDelegated, callable, typeEvent] = normalizeParameters(originalTypeEvent, handler, delegationFunction);

    // in case of mouseenter or mouseleave wrap the handler within a function that checks for its DOM position
    // this prevents the handler from being dispatched the same way as mouseover or mouseout does
    if (originalTypeEvent in customEvents) {
      const wrapFunction = fn => {
        return function (event) {
          if (!event.relatedTarget || event.relatedTarget !== event.delegateTarget && !event.delegateTarget.contains(event.relatedTarget)) {
            return fn.call(this, event);
          }
        };
      };
      callable = wrapFunction(callable);
    }
    const events = getElementEvents(element);
    const handlers = events[typeEvent] || (events[typeEvent] = {});
    const previousFunction = findHandler(handlers, callable, isDelegated ? handler : null);
    if (previousFunction) {
      previousFunction.oneOff = previousFunction.oneOff && oneOff;
      return;
    }
    const uid = makeEventUid(callable, originalTypeEvent.replace(namespaceRegex, ''));
    const fn = isDelegated ? bootstrapDelegationHandler(element, handler, callable) : bootstrapHandler(element, callable);
    fn.delegationSelector = isDelegated ? handler : null;
    fn.callable = callable;
    fn.oneOff = oneOff;
    fn.uidEvent = uid;
    handlers[uid] = fn;
    element.addEventListener(typeEvent, fn, isDelegated);
  }
  function removeHandler(element, events, typeEvent, handler, delegationSelector) {
    const fn = findHandler(events[typeEvent], handler, delegationSelector);
    if (!fn) {
      return;
    }
    element.removeEventListener(typeEvent, fn, Boolean(delegationSelector));
    delete events[typeEvent][fn.uidEvent];
  }
  function removeNamespacedHandlers(element, events, typeEvent, namespace) {
    const storeElementEvent = events[typeEvent] || {};
    for (const [handlerKey, event] of Object.entries(storeElementEvent)) {
      if (handlerKey.includes(namespace)) {
        removeHandler(element, events, typeEvent, event.callable, event.delegationSelector);
      }
    }
  }
  function getTypeEvent(event) {
    // allow to get the native events from namespaced events ('click.bs.button' --> 'click')
    event = event.replace(stripNameRegex, '');
    return customEvents[event] || event;
  }
  const EventHandler = {
    on(element, event, handler, delegationFunction) {
      addHandler(element, event, handler, delegationFunction, false);
    },
    one(element, event, handler, delegationFunction) {
      addHandler(element, event, handler, delegationFunction, true);
    },
    off(element, originalTypeEvent, handler, delegationFunction) {
      if (typeof originalTypeEvent !== 'string' || !element) {
        return;
      }
      const [isDelegated, callable, typeEvent] = normalizeParameters(originalTypeEvent, handler, delegationFunction);
      const inNamespace = typeEvent !== originalTypeEvent;
      const events = getElementEvents(element);
      const storeElementEvent = events[typeEvent] || {};
      const isNamespace = originalTypeEvent.startsWith('.');
      if (typeof callable !== 'undefined') {
        // Simplest case: handler is passed, remove that listener ONLY.
        if (!Object.keys(storeElementEvent).length) {
          return;
        }
        removeHandler(element, events, typeEvent, callable, isDelegated ? handler : null);
        return;
      }
      if (isNamespace) {
        for (const elementEvent of Object.keys(events)) {
          removeNamespacedHandlers(element, events, elementEvent, originalTypeEvent.slice(1));
        }
      }
      for (const [keyHandlers, event] of Object.entries(storeElementEvent)) {
        const handlerKey = keyHandlers.replace(stripUidRegex, '');
        if (!inNamespace || originalTypeEvent.includes(handlerKey)) {
          removeHandler(element, events, typeEvent, event.callable, event.delegationSelector);
        }
      }
    },
    trigger(element, event, args) {
      if (typeof event !== 'string' || !element) {
        return null;
      }
      const $ = getjQuery();
      const typeEvent = getTypeEvent(event);
      const inNamespace = event !== typeEvent;
      let jQueryEvent = null;
      let bubbles = true;
      let nativeDispatch = true;
      let defaultPrevented = false;
      if (inNamespace && $) {
        jQueryEvent = $.Event(event, args);
        $(element).trigger(jQueryEvent);
        bubbles = !jQueryEvent.isPropagationStopped();
        nativeDispatch = !jQueryEvent.isImmediatePropagationStopped();
        defaultPrevented = jQueryEvent.isDefaultPrevented();
      }
      const evt = hydrateObj(new Event(event, {
        bubbles,
        cancelable: true
      }), args);
      if (defaultPrevented) {
        evt.preventDefault();
      }
      if (nativeDispatch) {
        element.dispatchEvent(evt);
      }
      if (evt.defaultPrevented && jQueryEvent) {
        jQueryEvent.preventDefault();
      }
      return evt;
    }
  };
  function hydrateObj(obj, meta = {}) {
    for (const [key, value] of Object.entries(meta)) {
      try {
        obj[key] = value;
      } catch (_unused) {
        Object.defineProperty(obj, key, {
          configurable: true,
          get() {
            return value;
          }
        });
      }
    }
    return obj;
  }

  /**
   * --------------------------------------------------------------------------
   * Bootstrap dom/manipulator.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */

  function normalizeData(value) {
    if (value === 'true') {
      return true;
    }
    if (value === 'false') {
      return false;
    }
    if (value === Number(value).toString()) {
      return Number(value);
    }
    if (value === '' || value === 'null') {
      return null;
    }
    if (typeof value !== 'string') {
      return value;
    }
    try {
      return JSON.parse(decodeURIComponent(value));
    } catch (_unused) {
      return value;
    }
  }
  function normalizeDataKey(key) {
    return key.replace(/[A-Z]/g, chr => `-${chr.toLowerCase()}`);
  }
  const Manipulator = {
    setDataAttribute(element, key, value) {
      element.setAttribute(`data-bs-${normalizeDataKey(key)}`, value);
    },
    removeDataAttribute(element, key) {
      element.removeAttribute(`data-bs-${normalizeDataKey(key)}`);
    },
    getDataAttributes(element) {
      if (!element) {
        return {};
      }
      const attributes = {};
      const bsKeys = Object.keys(element.dataset).filter(key => key.startsWith('bs') && !key.startsWith('bsConfig'));
      for (const key of bsKeys) {
        let pureKey = key.replace(/^bs/, '');
        pureKey = pureKey.charAt(0).toLowerCase() + pureKey.slice(1, pureKey.length);
        attributes[pureKey] = normalizeData(element.dataset[key]);
      }
      return attributes;
    },
    getDataAttribute(element, key) {
      return normalizeData(element.getAttribute(`data-bs-${normalizeDataKey(key)}`));
    }
  };

  /**
   * --------------------------------------------------------------------------
   * Bootstrap util/config.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */


  /**
   * Class definition
   */

  class Config {
    // Getters
    static get Default() {
      return {};
    }
    static get DefaultType() {
      return {};
    }
    static get NAME() {
      throw new Error('You have to implement the static method "NAME", for each component!');
    }
    _getConfig(config) {
      config = this._mergeConfigObj(config);
      config = this._configAfterMerge(config);
      this._typeCheckConfig(config);
      return config;
    }
    _configAfterMerge(config) {
      return config;
    }
    _mergeConfigObj(config, element) {
      const jsonConfig = isElement(element) ? Manipulator.getDataAttribute(element, 'config') : {}; // try to parse

      return {
        ...this.constructor.Default,
        ...(typeof jsonConfig === 'object' ? jsonConfig : {}),
        ...(isElement(element) ? Manipulator.getDataAttributes(element) : {}),
        ...(typeof config === 'object' ? config : {})
      };
    }
    _typeCheckConfig(config, configTypes = this.constructor.DefaultType) {
      for (const [property, expectedTypes] of Object.entries(configTypes)) {
        const value = config[property];
        const valueType = isElement(value) ? 'element' : toType(value);
        if (!new RegExp(expectedTypes).test(valueType)) {
          throw new TypeError(`${this.constructor.NAME.toUpperCase()}: Option "${property}" provided type "${valueType}" but expected type "${expectedTypes}".`);
        }
      }
    }
  }

  /**
   * --------------------------------------------------------------------------
   * Bootstrap base-component.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */


  /**
   * Constants
   */

  const VERSION = '5.3.2';

  /**
   * Class definition
   */

  class BaseComponent extends Config {
    constructor(element, config) {
      super();
      element = getElement(element);
      if (!element) {
        return;
      }
      this._element = element;
      this._config = this._getConfig(config);
      Data.set(this._element, this.constructor.DATA_KEY, this);
    }

    // Public
    dispose() {
      Data.remove(this._element, this.constructor.DATA_KEY);
      EventHandler.off(this._element, this.constructor.EVENT_KEY);
      for (const propertyName of Object.getOwnPropertyNames(this)) {
        this[propertyName] = null;
      }
    }
    _queueCallback(callback, element, isAnimated = true) {
      executeAfterTransition(callback, element, isAnimated);
    }
    _getConfig(config) {
      config = this._mergeConfigObj(config, this._element);
      config = this._configAfterMerge(config);
      this._typeCheckConfig(config);
      return config;
    }

    // Static
    static getInstance(element) {
      return Data.get(getElement(element), this.DATA_KEY);
    }
    static getOrCreateInstance(element, config = {}) {
      return this.getInstance(element) || new this(element, typeof config === 'object' ? config : null);
    }
    static get VERSION() {
      return VERSION;
    }
    static get DATA_KEY() {
      return `bs.${this.NAME}`;
    }
    static get EVENT_KEY() {
      return `.${this.DATA_KEY}`;
    }
    static eventName(name) {
      return `${name}${this.EVENT_KEY}`;
    }
  }

  /**
   * --------------------------------------------------------------------------
   * Bootstrap dom/selector-engine.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */

  const getSelector = element => {
    let selector = element.getAttribute('data-bs-target');
    if (!selector || selector === '#') {
      let hrefAttribute = element.getAttribute('href');

      // The only valid content that could double as a selector are IDs or classes,
      // so everything starting with `#` or `.`. If a "real" URL is used as the selector,
      // `document.querySelector` will rightfully complain it is invalid.
      // See https://github.com/twbs/bootstrap/issues/32273
      if (!hrefAttribute || !hrefAttribute.includes('#') && !hrefAttribute.startsWith('.')) {
        return null;
      }

      // Just in case some CMS puts out a full URL with the anchor appended
      if (hrefAttribute.includes('#') && !hrefAttribute.startsWith('#')) {
        hrefAttribute = `#${hrefAttribute.split('#')[1]}`;
      }
      selector = hrefAttribute && hrefAttribute !== '#' ? parseSelector(hrefAttribute.trim()) : null;
    }
    return selector;
  };
  const SelectorEngine = {
    find(selector, element = document.documentElement) {
      return [].concat(...Element.prototype.querySelectorAll.call(element, selector));
    },
    findOne(selector, element = document.documentElement) {
      return Element.prototype.querySelector.call(element, selector);
    },
    children(element, selector) {
      return [].concat(...element.children).filter(child => child.matches(selector));
    },
    parents(element, selector) {
      const parents = [];
      let ancestor = element.parentNode.closest(selector);
      while (ancestor) {
        parents.push(ancestor);
        ancestor = ancestor.parentNode.closest(selector);
      }
      return parents;
    },
    prev(element, selector) {
      let previous = element.previousElementSibling;
      while (previous) {
        if (previous.matches(selector)) {
          return [previous];
        }
        previous = previous.previousElementSibling;
      }
      return [];
    },
    // TODO: this is now unused; remove later along with prev()
    next(element, selector) {
      let next = element.nextElementSibling;
      while (next) {
        if (next.matches(selector)) {
          return [next];
        }
        next = next.nextElementSibling;
      }
      return [];
    },
    focusableChildren(element) {
      const focusables = ['a', 'button', 'input', 'textarea', 'select', 'details', '[tabindex]', '[contenteditable="true"]'].map(selector => `${selector}:not([tabindex^="-"])`).join(',');
      return this.find(focusables, element).filter(el => !isDisabled(el) && isVisible(el));
    },
    getSelectorFromElement(element) {
      const selector = getSelector(element);
      if (selector) {
        return SelectorEngine.findOne(selector) ? selector : null;
      }
      return null;
    },
    getElementFromSelector(element) {
      const selector = getSelector(element);
      return selector ? SelectorEngine.findOne(selector) : null;
    },
    getMultipleElementsFromSelector(element) {
      const selector = getSelector(element);
      return selector ? SelectorEngine.find(selector) : [];
    }
  };

  /**
   * --------------------------------------------------------------------------
   * Bootstrap util/component-functions.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */

  const enableDismissTrigger = (component, method = 'hide') => {
    const clickEvent = `click.dismiss${component.EVENT_KEY}`;
    const name = component.NAME;
    EventHandler.on(document, clickEvent, `[data-bs-dismiss="${name}"]`, function (event) {
      if (['A', 'AREA'].includes(this.tagName)) {
        event.preventDefault();
      }
      if (isDisabled(this)) {
        return;
      }
      const target = SelectorEngine.getElementFromSelector(this) || this.closest(`.${name}`);
      const instance = component.getOrCreateInstance(target);

      // Method argument is left, for Alert and only, as it doesn't implement the 'hide' method
      instance[method]();
    });
  };

  /**
   * --------------------------------------------------------------------------
   * Bootstrap alert.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */


  /**
   * Constants
   */

  const NAME$f = 'alert';
  const DATA_KEY$a = 'bs.alert';
  const EVENT_KEY$b = `.${DATA_KEY$a}`;
  const EVENT_CLOSE = `close${EVENT_KEY$b}`;
  const EVENT_CLOSED = `closed${EVENT_KEY$b}`;
  const CLASS_NAME_FADE$5 = 'fade';
  const CLASS_NAME_SHOW$8 = 'show';

  /**
   * Class definition
   */

  class Alert extends BaseComponent {
    // Getters
    static get NAME() {
      return NAME$f;
    }

    // Public
    close() {
      const closeEvent = EventHandler.trigger(this._element, EVENT_CLOSE);
      if (closeEvent.defaultPrevented) {
        return;
      }
      this._element.classList.remove(CLASS_NAME_SHOW$8);
      const isAnimated = this._element.classList.contains(CLASS_NAME_FADE$5);
      this._queueCallback(() => this._destroyElement(), this._element, isAnimated);
    }

    // Private
    _destroyElement() {
      this._element.remove();
      EventHandler.trigger(this._element, EVENT_CLOSED);
      this.dispose();
    }

    // Static
    static jQueryInterface(config) {
      return this.each(function () {
        const data = Alert.getOrCreateInstance(this);
        if (typeof config !== 'string') {
          return;
        }
        if (data[config] === undefined || config.startsWith('_') || config === 'constructor') {
          throw new TypeError(`No method named "${config}"`);
        }
        data[config](this);
      });
    }
  }

  /**
   * Data API implementation
   */

  enableDismissTrigger(Alert, 'close');

  /**
   * jQuery
   */

  defineJQueryPlugin(Alert);

  /**
   * --------------------------------------------------------------------------
   * Bootstrap button.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */


  /**
   * Constants
   */

  const NAME$e = 'button';
  const DATA_KEY$9 = 'bs.button';
  const EVENT_KEY$a = `.${DATA_KEY$9}`;
  const DATA_API_KEY$6 = '.data-api';
  const CLASS_NAME_ACTIVE$3 = 'active';
  const SELECTOR_DATA_TOGGLE$5 = '[data-bs-toggle="button"]';
  const EVENT_CLICK_DATA_API$6 = `click${EVENT_KEY$a}${DATA_API_KEY$6}`;

  /**
   * Class definition
   */

  class Button extends BaseComponent {
    // Getters
    static get NAME() {
      return NAME$e;
    }

    // Public
    toggle() {
      // Toggle class and sync the `aria-pressed` attribute with the return value of the `.toggle()` method
      this._element.setAttribute('aria-pressed', this._element.classList.toggle(CLASS_NAME_ACTIVE$3));
    }

    // Static
    static jQueryInterface(config) {
      return this.each(function () {
        const data = Button.getOrCreateInstance(this);
        if (config === 'toggle') {
          data[config]();
        }
      });
    }
  }

  /**
   * Data API implementation
   */

  EventHandler.on(document, EVENT_CLICK_DATA_API$6, SELECTOR_DATA_TOGGLE$5, event => {
    event.preventDefault();
    const button = event.target.closest(SELECTOR_DATA_TOGGLE$5);
    const data = Button.getOrCreateInstance(button);
    data.toggle();
  });

  /**
   * jQuery
   */

  defineJQueryPlugin(Button);

  /**
   * --------------------------------------------------------------------------
   * Bootstrap util/swipe.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */


  /**
   * Constants
   */

  const NAME$d = 'swipe';
  const EVENT_KEY$9 = '.bs.swipe';
  const EVENT_TOUCHSTART = `touchstart${EVENT_KEY$9}`;
  const EVENT_TOUCHMOVE = `touchmove${EVENT_KEY$9}`;
  const EVENT_TOUCHEND = `touchend${EVENT_KEY$9}`;
  const EVENT_POINTERDOWN = `pointerdown${EVENT_KEY$9}`;
  const EVENT_POINTERUP = `pointerup${EVENT_KEY$9}`;
  const POINTER_TYPE_TOUCH = 'touch';
  const POINTER_TYPE_PEN = 'pen';
  const CLASS_NAME_POINTER_EVENT = 'pointer-event';
  const SWIPE_THRESHOLD = 40;
  const Default$c = {
    endCallback: null,
    leftCallback: null,
    rightCallback: null
  };
  const DefaultType$c = {
    endCallback: '(function|null)',
    leftCallback: '(function|null)',
    rightCallback: '(function|null)'
  };

  /**
   * Class definition
   */

  class Swipe extends Config {
    constructor(element, config) {
      super();
      this._element = element;
      if (!element || !Swipe.isSupported()) {
        return;
      }
      this._config = this._getConfig(config);
      this._deltaX = 0;
      this._supportPointerEvents = Boolean(window.PointerEvent);
      this._initEvents();
    }

    // Getters
    static get Default() {
      return Default$c;
    }
    static get DefaultType() {
      return DefaultType$c;
    }
    static get NAME() {
      return NAME$d;
    }

    // Public
    dispose() {
      EventHandler.off(this._element, EVENT_KEY$9);
    }

    // Private
    _start(event) {
      if (!this._supportPointerEvents) {
        this._deltaX = event.touches[0].clientX;
        return;
      }
      if (this._eventIsPointerPenTouch(event)) {
        this._deltaX = event.clientX;
      }
    }
    _end(event) {
      if (this._eventIsPointerPenTouch(event)) {
        this._deltaX = event.clientX - this._deltaX;
      }
      this._handleSwipe();
      execute(this._config.endCallback);
    }
    _move(event) {
      this._deltaX = event.touches && event.touches.length > 1 ? 0 : event.touches[0].clientX - this._deltaX;
    }
    _handleSwipe() {
      const absDeltaX = Math.abs(this._deltaX);
      if (absDeltaX <= SWIPE_THRESHOLD) {
        return;
      }
      const direction = absDeltaX / this._deltaX;
      this._deltaX = 0;
      if (!direction) {
        return;
      }
      execute(direction > 0 ? this._config.rightCallback : this._config.leftCallback);
    }
    _initEvents() {
      if (this._supportPointerEvents) {
        EventHandler.on(this._element, EVENT_POINTERDOWN, event => this._start(event));
        EventHandler.on(this._element, EVENT_POINTERUP, event => this._end(event));
        this._element.classList.add(CLASS_NAME_POINTER_EVENT);
      } else {
        EventHandler.on(this._element, EVENT_TOUCHSTART, event => this._start(event));
        EventHandler.on(this._element, EVENT_TOUCHMOVE, event => this._move(event));
        EventHandler.on(this._element, EVENT_TOUCHEND, event => this._end(event));
      }
    }
    _eventIsPointerPenTouch(event) {
      return this._supportPointerEvents && (event.pointerType === POINTER_TYPE_PEN || event.pointerType === POINTER_TYPE_TOUCH);
    }

    // Static
    static isSupported() {
      return 'ontouchstart' in document.documentElement || navigator.maxTouchPoints > 0;
    }
  }

  /**
   * --------------------------------------------------------------------------
   * Bootstrap carousel.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */


  /**
   * Constants
   */

  const NAME$c = 'carousel';
  const DATA_KEY$8 = 'bs.carousel';
  const EVENT_KEY$8 = `.${DATA_KEY$8}`;
  const DATA_API_KEY$5 = '.data-api';
  const ARROW_LEFT_KEY$1 = 'ArrowLeft';
  const ARROW_RIGHT_KEY$1 = 'ArrowRight';
  const TOUCHEVENT_COMPAT_WAIT = 500; // Time for mouse compat events to fire after touch

  const ORDER_NEXT = 'next';
  const ORDER_PREV = 'prev';
  const DIRECTION_LEFT = 'left';
  const DIRECTION_RIGHT = 'right';
  const EVENT_SLIDE = `slide${EVENT_KEY$8}`;
  const EVENT_SLID = `slid${EVENT_KEY$8}`;
  const EVENT_KEYDOWN$1 = `keydown${EVENT_KEY$8}`;
  const EVENT_MOUSEENTER$1 = `mouseenter${EVENT_KEY$8}`;
  const EVENT_MOUSELEAVE$1 = `mouseleave${EVENT_KEY$8}`;
  const EVENT_DRAG_START = `dragstart${EVENT_KEY$8}`;
  const EVENT_LOAD_DATA_API$3 = `load${EVENT_KEY$8}${DATA_API_KEY$5}`;
  const EVENT_CLICK_DATA_API$5 = `click${EVENT_KEY$8}${DATA_API_KEY$5}`;
  const CLASS_NAME_CAROUSEL = 'carousel';
  const CLASS_NAME_ACTIVE$2 = 'active';
  const CLASS_NAME_SLIDE = 'slide';
  const CLASS_NAME_END = 'carousel-item-end';
  const CLASS_NAME_START = 'carousel-item-start';
  const CLASS_NAME_NEXT = 'carousel-item-next';
  const CLASS_NAME_PREV = 'carousel-item-prev';
  const SELECTOR_ACTIVE = '.active';
  const SELECTOR_ITEM = '.carousel-item';
  const SELECTOR_ACTIVE_ITEM = SELECTOR_ACTIVE + SELECTOR_ITEM;
  const SELECTOR_ITEM_IMG = '.carousel-item img';
  const SELECTOR_INDICATORS = '.carousel-indicators';
  const SELECTOR_DATA_SLIDE = '[data-bs-slide], [data-bs-slide-to]';
  const SELECTOR_DATA_RIDE = '[data-bs-ride="carousel"]';
  const KEY_TO_DIRECTION = {
    [ARROW_LEFT_KEY$1]: DIRECTION_RIGHT,
    [ARROW_RIGHT_KEY$1]: DIRECTION_LEFT
  };
  const Default$b = {
    interval: 5000,
    keyboard: true,
    pause: 'hover',
    ride: false,
    touch: true,
    wrap: true
  };
  const DefaultType$b = {
    interval: '(number|boolean)',
    // TODO:v6 remove boolean support
    keyboard: 'boolean',
    pause: '(string|boolean)',
    ride: '(boolean|string)',
    touch: 'boolean',
    wrap: 'boolean'
  };

  /**
   * Class definition
   */

  class Carousel extends BaseComponent {
    constructor(element, config) {
      super(element, config);
      this._interval = null;
      this._activeElement = null;
      this._isSliding = false;
      this.touchTimeout = null;
      this._swipeHelper = null;
      this._indicatorsElement = SelectorEngine.findOne(SELECTOR_INDICATORS, this._element);
      this._addEventListeners();
      if (this._config.ride === CLASS_NAME_CAROUSEL) {
        this.cycle();
      }
    }

    // Getters
    static get Default() {
      return Default$b;
    }
    static get DefaultType() {
      return DefaultType$b;
    }
    static get NAME() {
      return NAME$c;
    }

    // Public
    next() {
      this._slide(ORDER_NEXT);
    }
    nextWhenVisible() {
      // FIXME TODO use `document.visibilityState`
      // Don't call next when the page isn't visible
      // or the carousel or its parent isn't visible
      if (!document.hidden && isVisible(this._element)) {
        this.next();
      }
    }
    prev() {
      this._slide(ORDER_PREV);
    }
    pause() {
      if (this._isSliding) {
        triggerTransitionEnd(this._element);
      }
      this._clearInterval();
    }
    cycle() {
      this._clearInterval();
      this._updateInterval();
      this._interval = setInterval(() => this.nextWhenVisible(), this._config.interval);
    }
    _maybeEnableCycle() {
      if (!this._config.ride) {
        return;
      }
      if (this._isSliding) {
        EventHandler.one(this._element, EVENT_SLID, () => this.cycle());
        return;
      }
      this.cycle();
    }
    to(index) {
      const items = this._getItems();
      if (index > items.length - 1 || index < 0) {
        return;
      }
      if (this._isSliding) {
        EventHandler.one(this._element, EVENT_SLID, () => this.to(index));
        return;
      }
      const activeIndex = this._getItemIndex(this._getActive());
      if (activeIndex === index) {
        return;
      }
      const order = index > activeIndex ? ORDER_NEXT : ORDER_PREV;
      this._slide(order, items[index]);
    }
    dispose() {
      if (this._swipeHelper) {
        this._swipeHelper.dispose();
      }
      super.dispose();
    }

    // Private
    _configAfterMerge(config) {
      config.defaultInterval = config.interval;
      return config;
    }
    _addEventListeners() {
      if (this._config.keyboard) {
        EventHandler.on(this._element, EVENT_KEYDOWN$1, event => this._keydown(event));
      }
      if (this._config.pause === 'hover') {
        EventHandler.on(this._element, EVENT_MOUSEENTER$1, () => this.pause());
        EventHandler.on(this._element, EVENT_MOUSELEAVE$1, () => this._maybeEnableCycle());
      }
      if (this._config.touch && Swipe.isSupported()) {
        this._addTouchEventListeners();
      }
    }
    _addTouchEventListeners() {
      for (const img of SelectorEngine.find(SELECTOR_ITEM_IMG, this._element)) {
        EventHandler.on(img, EVENT_DRAG_START, event => event.preventDefault());
      }
      const endCallBack = () => {
        if (this._config.pause !== 'hover') {
          return;
        }

        // If it's a touch-enabled device, mouseenter/leave are fired as
        // part of the mouse compatibility events on first tap - the carousel
        // would stop cycling until user tapped out of it;
        // here, we listen for touchend, explicitly pause the carousel
        // (as if it's the second time we tap on it, mouseenter compat event
        // is NOT fired) and after a timeout (to allow for mouse compatibility
        // events to fire) we explicitly restart cycling

        this.pause();
        if (this.touchTimeout) {
          clearTimeout(this.touchTimeout);
        }
        this.touchTimeout = setTimeout(() => this._maybeEnableCycle(), TOUCHEVENT_COMPAT_WAIT + this._config.interval);
      };
      const swipeConfig = {
        leftCallback: () => this._slide(this._directionToOrder(DIRECTION_LEFT)),
        rightCallback: () => this._slide(this._directionToOrder(DIRECTION_RIGHT)),
        endCallback: endCallBack
      };
      this._swipeHelper = new Swipe(this._element, swipeConfig);
    }
    _keydown(event) {
      if (/input|textarea/i.test(event.target.tagName)) {
        return;
      }
      const direction = KEY_TO_DIRECTION[event.key];
      if (direction) {
        event.preventDefault();
        this._slide(this._directionToOrder(direction));
      }
    }
    _getItemIndex(element) {
      return this._getItems().indexOf(element);
    }
    _setActiveIndicatorElement(index) {
      if (!this._indicatorsElement) {
        return;
      }
      const activeIndicator = SelectorEngine.findOne(SELECTOR_ACTIVE, this._indicatorsElement);
      activeIndicator.classList.remove(CLASS_NAME_ACTIVE$2);
      activeIndicator.removeAttribute('aria-current');
      const newActiveIndicator = SelectorEngine.findOne(`[data-bs-slide-to="${index}"]`, this._indicatorsElement);
      if (newActiveIndicator) {
        newActiveIndicator.classList.add(CLASS_NAME_ACTIVE$2);
        newActiveIndicator.setAttribute('aria-current', 'true');
      }
    }
    _updateInterval() {
      const element = this._activeElement || this._getActive();
      if (!element) {
        return;
      }
      const elementInterval = Number.parseInt(element.getAttribute('data-bs-interval'), 10);
      this._config.interval = elementInterval || this._config.defaultInterval;
    }
    _slide(order, element = null) {
      if (this._isSliding) {
        return;
      }
      const activeElement = this._getActive();
      const isNext = order === ORDER_NEXT;
      const nextElement = element || getNextActiveElement(this._getItems(), activeElement, isNext, this._config.wrap);
      if (nextElement === activeElement) {
        return;
      }
      const nextElementIndex = this._getItemIndex(nextElement);
      const triggerEvent = eventName => {
        return EventHandler.trigger(this._element, eventName, {
          relatedTarget: nextElement,
          direction: this._orderToDirection(order),
          from: this._getItemIndex(activeElement),
          to: nextElementIndex
        });
      };
      const slideEvent = triggerEvent(EVENT_SLIDE);
      if (slideEvent.defaultPrevented) {
        return;
      }
      if (!activeElement || !nextElement) {
        // Some weirdness is happening, so we bail
        // TODO: change tests that use empty divs to avoid this check
        return;
      }
      const isCycling = Boolean(this._interval);
      this.pause();
      this._isSliding = true;
      this._setActiveIndicatorElement(nextElementIndex);
      this._activeElement = nextElement;
      const directionalClassName = isNext ? CLASS_NAME_START : CLASS_NAME_END;
      const orderClassName = isNext ? CLASS_NAME_NEXT : CLASS_NAME_PREV;
      nextElement.classList.add(orderClassName);
      reflow(nextElement);
      activeElement.classList.add(directionalClassName);
      nextElement.classList.add(directionalClassName);
      const completeCallBack = () => {
        nextElement.classList.remove(directionalClassName, orderClassName);
        nextElement.classList.add(CLASS_NAME_ACTIVE$2);
        activeElement.classList.remove(CLASS_NAME_ACTIVE$2, orderClassName, directionalClassName);
        this._isSliding = false;
        triggerEvent(EVENT_SLID);
      };
      this._queueCallback(completeCallBack, activeElement, this._isAnimated());
      if (isCycling) {
        this.cycle();
      }
    }
    _isAnimated() {
      return this._element.classList.contains(CLASS_NAME_SLIDE);
    }
    _getActive() {
      return SelectorEngine.findOne(SELECTOR_ACTIVE_ITEM, this._element);
    }
    _getItems() {
      return SelectorEngine.find(SELECTOR_ITEM, this._element);
    }
    _clearInterval() {
      if (this._interval) {
        clearInterval(this._interval);
        this._interval = null;
      }
    }
    _directionToOrder(direction) {
      if (isRTL()) {
        return direction === DIRECTION_LEFT ? ORDER_PREV : ORDER_NEXT;
      }
      return direction === DIRECTION_LEFT ? ORDER_NEXT : ORDER_PREV;
    }
    _orderToDirection(order) {
      if (isRTL()) {
        return order === ORDER_PREV ? DIRECTION_LEFT : DIRECTION_RIGHT;
      }
      return order === ORDER_PREV ? DIRECTION_RIGHT : DIRECTION_LEFT;
    }

    // Static
    static jQueryInterface(config) {
      return this.each(function () {
        const data = Carousel.getOrCreateInstance(this, config);
        if (typeof config === 'number') {
          data.to(config);
          return;
        }
        if (typeof config === 'string') {
          if (data[config] === undefined || config.startsWith('_') || config === 'constructor') {
            throw new TypeError(`No method named "${config}"`);
          }
          data[config]();
        }
      });
    }
  }

  /**
   * Data API implementation
   */

  EventHandler.on(document, EVENT_CLICK_DATA_API$5, SELECTOR_DATA_SLIDE, function (event) {
    const target = SelectorEngine.getElementFromSelector(this);
    if (!target || !target.classList.contains(CLASS_NAME_CAROUSEL)) {
      return;
    }
    event.preventDefault();
    const carousel = Carousel.getOrCreateInstance(target);
    const slideIndex = this.getAttribute('data-bs-slide-to');
    if (slideIndex) {
      carousel.to(slideIndex);
      carousel._maybeEnableCycle();
      return;
    }
    if (Manipulator.getDataAttribute(this, 'slide') === 'next') {
      carousel.next();
      carousel._maybeEnableCycle();
      return;
    }
    carousel.prev();
    carousel._maybeEnableCycle();
  });
  EventHandler.on(window, EVENT_LOAD_DATA_API$3, () => {
    const carousels = SelectorEngine.find(SELECTOR_DATA_RIDE);
    for (const carousel of carousels) {
      Carousel.getOrCreateInstance(carousel);
    }
  });

  /**
   * jQuery
   */

  defineJQueryPlugin(Carousel);

  /**
   * --------------------------------------------------------------------------
   * Bootstrap collapse.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */


  /**
   * Constants
   */

  const NAME$b = 'collapse';
  const DATA_KEY$7 = 'bs.collapse';
  const EVENT_KEY$7 = `.${DATA_KEY$7}`;
  const DATA_API_KEY$4 = '.data-api';
  const EVENT_SHOW$6 = `show${EVENT_KEY$7}`;
  const EVENT_SHOWN$6 = `shown${EVENT_KEY$7}`;
  const EVENT_HIDE$6 = `hide${EVENT_KEY$7}`;
  const EVENT_HIDDEN$6 = `hidden${EVENT_KEY$7}`;
  const EVENT_CLICK_DATA_API$4 = `click${EVENT_KEY$7}${DATA_API_KEY$4}`;
  const CLASS_NAME_SHOW$7 = 'show';
  const CLASS_NAME_COLLAPSE = 'collapse';
  const CLASS_NAME_COLLAPSING = 'collapsing';
  const CLASS_NAME_COLLAPSED = 'collapsed';
  const CLASS_NAME_DEEPER_CHILDREN = `:scope .${CLASS_NAME_COLLAPSE} .${CLASS_NAME_COLLAPSE}`;
  const CLASS_NAME_HORIZONTAL = 'collapse-horizontal';
  const WIDTH = 'width';
  const HEIGHT = 'height';
  const SELECTOR_ACTIVES = '.collapse.show, .collapse.collapsing';
  const SELECTOR_DATA_TOGGLE$4 = '[data-bs-toggle="collapse"]';
  const Default$a = {
    parent: null,
    toggle: true
  };
  const DefaultType$a = {
    parent: '(null|element)',
    toggle: 'boolean'
  };

  /**
   * Class definition
   */

  class Collapse extends BaseComponent {
    constructor(element, config) {
      super(element, config);
      this._isTransitioning = false;
      this._triggerArray = [];
      const toggleList = SelectorEngine.find(SELECTOR_DATA_TOGGLE$4);
      for (const elem of toggleList) {
        const selector = SelectorEngine.getSelectorFromElement(elem);
        const filterElement = SelectorEngine.find(selector).filter(foundElement => foundElement === this._element);
        if (selector !== null && filterElement.length) {
          this._triggerArray.push(elem);
        }
      }
      this._initializeChildren();
      if (!this._config.parent) {
        this._addAriaAndCollapsedClass(this._triggerArray, this._isShown());
      }
      if (this._config.toggle) {
        this.toggle();
      }
    }

    // Getters
    static get Default() {
      return Default$a;
    }
    static get DefaultType() {
      return DefaultType$a;
    }
    static get NAME() {
      return NAME$b;
    }

    // Public
    toggle() {
      if (this._isShown()) {
        this.hide();
      } else {
        this.show();
      }
    }
    show() {
      if (this._isTransitioning || this._isShown()) {
        return;
      }
      let activeChildren = [];

      // find active children
      if (this._config.parent) {
        activeChildren = this._getFirstLevelChildren(SELECTOR_ACTIVES).filter(element => element !== this._element).map(element => Collapse.getOrCreateInstance(element, {
          toggle: false
        }));
      }
      if (activeChildren.length && activeChildren[0]._isTransitioning) {
        return;
      }
      const startEvent = EventHandler.trigger(this._element, EVENT_SHOW$6);
      if (startEvent.defaultPrevented) {
        return;
      }
      for (const activeInstance of activeChildren) {
        activeInstance.hide();
      }
      const dimension = this._getDimension();
      this._element.classList.remove(CLASS_NAME_COLLAPSE);
      this._element.classList.add(CLASS_NAME_COLLAPSING);
      this._element.style[dimension] = 0;
      this._addAriaAndCollapsedClass(this._triggerArray, true);
      this._isTransitioning = true;
      const complete = () => {
        this._isTransitioning = false;
        this._element.classList.remove(CLASS_NAME_COLLAPSING);
        this._element.classList.add(CLASS_NAME_COLLAPSE, CLASS_NAME_SHOW$7);
        this._element.style[dimension] = '';
        EventHandler.trigger(this._element, EVENT_SHOWN$6);
      };
      const capitalizedDimension = dimension[0].toUpperCase() + dimension.slice(1);
      const scrollSize = `scroll${capitalizedDimension}`;
      this._queueCallback(complete, this._element, true);
      this._element.style[dimension] = `${this._element[scrollSize]}px`;
    }
    hide() {
      if (this._isTransitioning || !this._isShown()) {
        return;
      }
      const startEvent = EventHandler.trigger(this._element, EVENT_HIDE$6);
      if (startEvent.defaultPrevented) {
        return;
      }
      const dimension = this._getDimension();
      this._element.style[dimension] = `${this._element.getBoundingClientRect()[dimension]}px`;
      reflow(this._element);
      this._element.classList.add(CLASS_NAME_COLLAPSING);
      this._element.classList.remove(CLASS_NAME_COLLAPSE, CLASS_NAME_SHOW$7);
      for (const trigger of this._triggerArray) {
        const element = SelectorEngine.getElementFromSelector(trigger);
        if (element && !this._isShown(element)) {
          this._addAriaAndCollapsedClass([trigger], false);
        }
      }
      this._isTransitioning = true;
      const complete = () => {
        this._isTransitioning = false;
        this._element.classList.remove(CLASS_NAME_COLLAPSING);
        this._element.classList.add(CLASS_NAME_COLLAPSE);
        EventHandler.trigger(this._element, EVENT_HIDDEN$6);
      };
      this._element.style[dimension] = '';
      this._queueCallback(complete, this._element, true);
    }
    _isShown(element = this._element) {
      return element.classList.contains(CLASS_NAME_SHOW$7);
    }

    // Private
    _configAfterMerge(config) {
      config.toggle = Boolean(config.toggle); // Coerce string values
      config.parent = getElement(config.parent);
      return config;
    }
    _getDimension() {
      return this._element.classList.contains(CLASS_NAME_HORIZONTAL) ? WIDTH : HEIGHT;
    }
    _initializeChildren() {
      if (!this._config.parent) {
        return;
      }
      const children = this._getFirstLevelChildren(SELECTOR_DATA_TOGGLE$4);
      for (const element of children) {
        const selected = SelectorEngine.getElementFromSelector(element);
        if (selected) {
          this._addAriaAndCollapsedClass([element], this._isShown(selected));
        }
      }
    }
    _getFirstLevelChildren(selector) {
      const children = SelectorEngine.find(CLASS_NAME_DEEPER_CHILDREN, this._config.parent);
      // remove children if greater depth
      return SelectorEngine.find(selector, this._config.parent).filter(element => !children.includes(element));
    }
    _addAriaAndCollapsedClass(triggerArray, isOpen) {
      if (!triggerArray.length) {
        return;
      }
      for (const element of triggerArray) {
        element.classList.toggle(CLASS_NAME_COLLAPSED, !isOpen);
        element.setAttribute('aria-expanded', isOpen);
      }
    }

    // Static
    static jQueryInterface(config) {
      const _config = {};
      if (typeof config === 'string' && /show|hide/.test(config)) {
        _config.toggle = false;
      }
      return this.each(function () {
        const data = Collapse.getOrCreateInstance(this, _config);
        if (typeof config === 'string') {
          if (typeof data[config] === 'undefined') {
            throw new TypeError(`No method named "${config}"`);
          }
          data[config]();
        }
      });
    }
  }

  /**
   * Data API implementation
   */

  EventHandler.on(document, EVENT_CLICK_DATA_API$4, SELECTOR_DATA_TOGGLE$4, function (event) {
    // preventDefault only for <a> elements (which change the URL) not inside the collapsible element
    if (event.target.tagName === 'A' || event.delegateTarget && event.delegateTarget.tagName === 'A') {
      event.preventDefault();
    }
    for (const element of SelectorEngine.getMultipleElementsFromSelector(this)) {
      Collapse.getOrCreateInstance(element, {
        toggle: false
      }).toggle();
    }
  });

  /**
   * jQuery
   */

  defineJQueryPlugin(Collapse);

  /**
   * --------------------------------------------------------------------------
   * Bootstrap dropdown.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */


  /**
   * Constants
   */

  const NAME$a = 'dropdown';
  const DATA_KEY$6 = 'bs.dropdown';
  const EVENT_KEY$6 = `.${DATA_KEY$6}`;
  const DATA_API_KEY$3 = '.data-api';
  const ESCAPE_KEY$2 = 'Escape';
  const TAB_KEY$1 = 'Tab';
  const ARROW_UP_KEY$1 = 'ArrowUp';
  const ARROW_DOWN_KEY$1 = 'ArrowDown';
  const RIGHT_MOUSE_BUTTON = 2; // MouseEvent.button value for the secondary button, usually the right button

  const EVENT_HIDE$5 = `hide${EVENT_KEY$6}`;
  const EVENT_HIDDEN$5 = `hidden${EVENT_KEY$6}`;
  const EVENT_SHOW$5 = `show${EVENT_KEY$6}`;
  const EVENT_SHOWN$5 = `shown${EVENT_KEY$6}`;
  const EVENT_CLICK_DATA_API$3 = `click${EVENT_KEY$6}${DATA_API_KEY$3}`;
  const EVENT_KEYDOWN_DATA_API = `keydown${EVENT_KEY$6}${DATA_API_KEY$3}`;
  const EVENT_KEYUP_DATA_API = `keyup${EVENT_KEY$6}${DATA_API_KEY$3}`;
  const CLASS_NAME_SHOW$6 = 'show';
  const CLASS_NAME_DROPUP = 'dropup';
  const CLASS_NAME_DROPEND = 'dropend';
  const CLASS_NAME_DROPSTART = 'dropstart';
  const CLASS_NAME_DROPUP_CENTER = 'dropup-center';
  const CLASS_NAME_DROPDOWN_CENTER = 'dropdown-center';
  const SELECTOR_DATA_TOGGLE$3 = '[data-bs-toggle="dropdown"]:not(.disabled):not(:disabled)';
  const SELECTOR_DATA_TOGGLE_SHOWN = `${SELECTOR_DATA_TOGGLE$3}.${CLASS_NAME_SHOW$6}`;
  const SELECTOR_MENU = '.dropdown-menu';
  const SELECTOR_NAVBAR = '.navbar';
  const SELECTOR_NAVBAR_NAV = '.navbar-nav';
  const SELECTOR_VISIBLE_ITEMS = '.dropdown-menu .dropdown-item:not(.disabled):not(:disabled)';
  const PLACEMENT_TOP = isRTL() ? 'top-end' : 'top-start';
  const PLACEMENT_TOPEND = isRTL() ? 'top-start' : 'top-end';
  const PLACEMENT_BOTTOM = isRTL() ? 'bottom-end' : 'bottom-start';
  const PLACEMENT_BOTTOMEND = isRTL() ? 'bottom-start' : 'bottom-end';
  const PLACEMENT_RIGHT = isRTL() ? 'left-start' : 'right-start';
  const PLACEMENT_LEFT = isRTL() ? 'right-start' : 'left-start';
  const PLACEMENT_TOPCENTER = 'top';
  const PLACEMENT_BOTTOMCENTER = 'bottom';
  const Default$9 = {
    autoClose: true,
    boundary: 'clippingParents',
    display: 'dynamic',
    offset: [0, 2],
    popperConfig: null,
    reference: 'toggle'
  };
  const DefaultType$9 = {
    autoClose: '(boolean|string)',
    boundary: '(string|element)',
    display: 'string',
    offset: '(array|string|function)',
    popperConfig: '(null|object|function)',
    reference: '(string|element|object)'
  };

  /**
   * Class definition
   */

  class Dropdown extends BaseComponent {
    constructor(element, config) {
      super(element, config);
      this._popper = null;
      this._parent = this._element.parentNode; // dropdown wrapper
      // TODO: v6 revert #37011 & change markup https://getbootstrap.com/docs/5.3/forms/input-group/
      this._menu = SelectorEngine.next(this._element, SELECTOR_MENU)[0] || SelectorEngine.prev(this._element, SELECTOR_MENU)[0] || SelectorEngine.findOne(SELECTOR_MENU, this._parent);
      this._inNavbar = this._detectNavbar();
    }

    // Getters
    static get Default() {
      return Default$9;
    }
    static get DefaultType() {
      return DefaultType$9;
    }
    static get NAME() {
      return NAME$a;
    }

    // Public
    toggle() {
      return this._isShown() ? this.hide() : this.show();
    }
    show() {
      if (isDisabled(this._element) || this._isShown()) {
        return;
      }
      const relatedTarget = {
        relatedTarget: this._element
      };
      const showEvent = EventHandler.trigger(this._element, EVENT_SHOW$5, relatedTarget);
      if (showEvent.defaultPrevented) {
        return;
      }
      this._createPopper();

      // If this is a touch-enabled device we add extra
      // empty mouseover listeners to the body's immediate children;
      // only needed because of broken event delegation on iOS
      // https://www.quirksmode.org/blog/archives/2014/02/mouse_event_bub.html
      if ('ontouchstart' in document.documentElement && !this._parent.closest(SELECTOR_NAVBAR_NAV)) {
        for (const element of [].concat(...document.body.children)) {
          EventHandler.on(element, 'mouseover', noop);
        }
      }
      this._element.focus();
      this._element.setAttribute('aria-expanded', true);
      this._menu.classList.add(CLASS_NAME_SHOW$6);
      this._element.classList.add(CLASS_NAME_SHOW$6);
      EventHandler.trigger(this._element, EVENT_SHOWN$5, relatedTarget);
    }
    hide() {
      if (isDisabled(this._element) || !this._isShown()) {
        return;
      }
      const relatedTarget = {
        relatedTarget: this._element
      };
      this._completeHide(relatedTarget);
    }
    dispose() {
      if (this._popper) {
        this._popper.destroy();
      }
      super.dispose();
    }
    update() {
      this._inNavbar = this._detectNavbar();
      if (this._popper) {
        this._popper.update();
      }
    }

    // Private
    _completeHide(relatedTarget) {
      const hideEvent = EventHandler.trigger(this._element, EVENT_HIDE$5, relatedTarget);
      if (hideEvent.defaultPrevented) {
        return;
      }

      // If this is a touch-enabled device we remove the extra
      // empty mouseover listeners we added for iOS support
      if ('ontouchstart' in document.documentElement) {
        for (const element of [].concat(...document.body.children)) {
          EventHandler.off(element, 'mouseover', noop);
        }
      }
      if (this._popper) {
        this._popper.destroy();
      }
      this._menu.classList.remove(CLASS_NAME_SHOW$6);
      this._element.classList.remove(CLASS_NAME_SHOW$6);
      this._element.setAttribute('aria-expanded', 'false');
      Manipulator.removeDataAttribute(this._menu, 'popper');
      EventHandler.trigger(this._element, EVENT_HIDDEN$5, relatedTarget);
    }
    _getConfig(config) {
      config = super._getConfig(config);
      if (typeof config.reference === 'object' && !isElement(config.reference) && typeof config.reference.getBoundingClientRect !== 'function') {
        // Popper virtual elements require a getBoundingClientRect method
        throw new TypeError(`${NAME$a.toUpperCase()}: Option "reference" provided type "object" without a required "getBoundingClientRect" method.`);
      }
      return config;
    }
    _createPopper() {
      if (typeof Popper__namespace === 'undefined') {
        throw new TypeError('Bootstrap\'s dropdowns require Popper (https://popper.js.org)');
      }
      let referenceElement = this._element;
      if (this._config.reference === 'parent') {
        referenceElement = this._parent;
      } else if (isElement(this._config.reference)) {
        referenceElement = getElement(this._config.reference);
      } else if (typeof this._config.reference === 'object') {
        referenceElement = this._config.reference;
      }
      const popperConfig = this._getPopperConfig();
      this._popper = Popper__namespace.createPopper(referenceElement, this._menu, popperConfig);
    }
    _isShown() {
      return this._menu.classList.contains(CLASS_NAME_SHOW$6);
    }
    _getPlacement() {
      const parentDropdown = this._parent;
      if (parentDropdown.classList.contains(CLASS_NAME_DROPEND)) {
        return PLACEMENT_RIGHT;
      }
      if (parentDropdown.classList.contains(CLASS_NAME_DROPSTART)) {
        return PLACEMENT_LEFT;
      }
      if (parentDropdown.classList.contains(CLASS_NAME_DROPUP_CENTER)) {
        return PLACEMENT_TOPCENTER;
      }
      if (parentDropdown.classList.contains(CLASS_NAME_DROPDOWN_CENTER)) {
        return PLACEMENT_BOTTOMCENTER;
      }

      // We need to trim the value because custom properties can also include spaces
      const isEnd = getComputedStyle(this._menu).getPropertyValue('--bs-position').trim() === 'end';
      if (parentDropdown.classList.contains(CLASS_NAME_DROPUP)) {
        return isEnd ? PLACEMENT_TOPEND : PLACEMENT_TOP;
      }
      return isEnd ? PLACEMENT_BOTTOMEND : PLACEMENT_BOTTOM;
    }
    _detectNavbar() {
      return this._element.closest(SELECTOR_NAVBAR) !== null;
    }
    _getOffset() {
      const {
        offset
      } = this._config;
      if (typeof offset === 'string') {
        return offset.split(',').map(value => Number.parseInt(value, 10));
      }
      if (typeof offset === 'function') {
        return popperData => offset(popperData, this._element);
      }
      return offset;
    }
    _getPopperConfig() {
      const defaultBsPopperConfig = {
        placement: this._getPlacement(),
        modifiers: [{
          name: 'preventOverflow',
          options: {
            boundary: this._config.boundary
          }
        }, {
          name: 'offset',
          options: {
            offset: this._getOffset()
          }
        }]
      };

      // Disable Popper if we have a static display or Dropdown is in Navbar
      if (this._inNavbar || this._config.display === 'static') {
        Manipulator.setDataAttribute(this._menu, 'popper', 'static'); // TODO: v6 remove
        defaultBsPopperConfig.modifiers = [{
          name: 'applyStyles',
          enabled: false
        }];
      }
      return {
        ...defaultBsPopperConfig,
        ...execute(this._config.popperConfig, [defaultBsPopperConfig])
      };
    }
    _selectMenuItem({
      key,
      target
    }) {
      const items = SelectorEngine.find(SELECTOR_VISIBLE_ITEMS, this._menu).filter(element => isVisible(element));
      if (!items.length) {
        return;
      }

      // if target isn't included in items (e.g. when expanding the dropdown)
      // allow cycling to get the last item in case key equals ARROW_UP_KEY
      getNextActiveElement(items, target, key === ARROW_DOWN_KEY$1, !items.includes(target)).focus();
    }

    // Static
    static jQueryInterface(config) {
      return this.each(function () {
        const data = Dropdown.getOrCreateInstance(this, config);
        if (typeof config !== 'string') {
          return;
        }
        if (typeof data[config] === 'undefined') {
          throw new TypeError(`No method named "${config}"`);
        }
        data[config]();
      });
    }
    static clearMenus(event) {
      if (event.button === RIGHT_MOUSE_BUTTON || event.type === 'keyup' && event.key !== TAB_KEY$1) {
        return;
      }
      const openToggles = SelectorEngine.find(SELECTOR_DATA_TOGGLE_SHOWN);
      for (const toggle of openToggles) {
        const context = Dropdown.getInstance(toggle);
        if (!context || context._config.autoClose === false) {
          continue;
        }
        const composedPath = event.composedPath();
        const isMenuTarget = composedPath.includes(context._menu);
        if (composedPath.includes(context._element) || context._config.autoClose === 'inside' && !isMenuTarget || context._config.autoClose === 'outside' && isMenuTarget) {
          continue;
        }

        // Tab navigation through the dropdown menu or events from contained inputs shouldn't close the menu
        if (context._menu.contains(event.target) && (event.type === 'keyup' && event.key === TAB_KEY$1 || /input|select|option|textarea|form/i.test(event.target.tagName))) {
          continue;
        }
        const relatedTarget = {
          relatedTarget: context._element
        };
        if (event.type === 'click') {
          relatedTarget.clickEvent = event;
        }
        context._completeHide(relatedTarget);
      }
    }
    static dataApiKeydownHandler(event) {
      // If not an UP | DOWN | ESCAPE key => not a dropdown command
      // If input/textarea && if key is other than ESCAPE => not a dropdown command

      const isInput = /input|textarea/i.test(event.target.tagName);
      const isEscapeEvent = event.key === ESCAPE_KEY$2;
      const isUpOrDownEvent = [ARROW_UP_KEY$1, ARROW_DOWN_KEY$1].includes(event.key);
      if (!isUpOrDownEvent && !isEscapeEvent) {
        return;
      }
      if (isInput && !isEscapeEvent) {
        return;
      }
      event.preventDefault();

      // TODO: v6 revert #37011 & change markup https://getbootstrap.com/docs/5.3/forms/input-group/
      const getToggleButton = this.matches(SELECTOR_DATA_TOGGLE$3) ? this : SelectorEngine.prev(this, SELECTOR_DATA_TOGGLE$3)[0] || SelectorEngine.next(this, SELECTOR_DATA_TOGGLE$3)[0] || SelectorEngine.findOne(SELECTOR_DATA_TOGGLE$3, event.delegateTarget.parentNode);
      const instance = Dropdown.getOrCreateInstance(getToggleButton);
      if (isUpOrDownEvent) {
        event.stopPropagation();
        instance.show();
        instance._selectMenuItem(event);
        return;
      }
      if (instance._isShown()) {
        // else is escape and we check if it is shown
        event.stopPropagation();
        instance.hide();
        getToggleButton.focus();
      }
    }
  }

  /**
   * Data API implementation
   */

  EventHandler.on(document, EVENT_KEYDOWN_DATA_API, SELECTOR_DATA_TOGGLE$3, Dropdown.dataApiKeydownHandler);
  EventHandler.on(document, EVENT_KEYDOWN_DATA_API, SELECTOR_MENU, Dropdown.dataApiKeydownHandler);
  EventHandler.on(document, EVENT_CLICK_DATA_API$3, Dropdown.clearMenus);
  EventHandler.on(document, EVENT_KEYUP_DATA_API, Dropdown.clearMenus);
  EventHandler.on(document, EVENT_CLICK_DATA_API$3, SELECTOR_DATA_TOGGLE$3, function (event) {
    event.preventDefault();
    Dropdown.getOrCreateInstance(this).toggle();
  });

  /**
   * jQuery
   */

  defineJQueryPlugin(Dropdown);

  /**
   * --------------------------------------------------------------------------
   * Bootstrap util/backdrop.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */


  /**
   * Constants
   */

  const NAME$9 = 'backdrop';
  const CLASS_NAME_FADE$4 = 'fade';
  const CLASS_NAME_SHOW$5 = 'show';
  const EVENT_MOUSEDOWN = `mousedown.bs.${NAME$9}`;
  const Default$8 = {
    className: 'modal-backdrop',
    clickCallback: null,
    isAnimated: false,
    isVisible: true,
    // if false, we use the backdrop helper without adding any element to the dom
    rootElement: 'body' // give the choice to place backdrop under different elements
  };

  const DefaultType$8 = {
    className: 'string',
    clickCallback: '(function|null)',
    isAnimated: 'boolean',
    isVisible: 'boolean',
    rootElement: '(element|string)'
  };

  /**
   * Class definition
   */

  class Backdrop extends Config {
    constructor(config) {
      super();
      this._config = this._getConfig(config);
      this._isAppended = false;
      this._element = null;
    }

    // Getters
    static get Default() {
      return Default$8;
    }
    static get DefaultType() {
      return DefaultType$8;
    }
    static get NAME() {
      return NAME$9;
    }

    // Public
    show(callback) {
      if (!this._config.isVisible) {
        execute(callback);
        return;
      }
      this._append();
      const element = this._getElement();
      if (this._config.isAnimated) {
        reflow(element);
      }
      element.classList.add(CLASS_NAME_SHOW$5);
      this._emulateAnimation(() => {
        execute(callback);
      });
    }
    hide(callback) {
      if (!this._config.isVisible) {
        execute(callback);
        return;
      }
      this._getElement().classList.remove(CLASS_NAME_SHOW$5);
      this._emulateAnimation(() => {
        this.dispose();
        execute(callback);
      });
    }
    dispose() {
      if (!this._isAppended) {
        return;
      }
      EventHandler.off(this._element, EVENT_MOUSEDOWN);
      this._element.remove();
      this._isAppended = false;
    }

    // Private
    _getElement() {
      if (!this._element) {
        const backdrop = document.createElement('div');
        backdrop.className = this._config.className;
        if (this._config.isAnimated) {
          backdrop.classList.add(CLASS_NAME_FADE$4);
        }
        this._element = backdrop;
      }
      return this._element;
    }
    _configAfterMerge(config) {
      // use getElement() with the default "body" to get a fresh Element on each instantiation
      config.rootElement = getElement(config.rootElement);
      return config;
    }
    _append() {
      if (this._isAppended) {
        return;
      }
      const element = this._getElement();
      this._config.rootElement.append(element);
      EventHandler.on(element, EVENT_MOUSEDOWN, () => {
        execute(this._config.clickCallback);
      });
      this._isAppended = true;
    }
    _emulateAnimation(callback) {
      executeAfterTransition(callback, this._getElement(), this._config.isAnimated);
    }
  }

  /**
   * --------------------------------------------------------------------------
   * Bootstrap util/focustrap.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */


  /**
   * Constants
   */

  const NAME$8 = 'focustrap';
  const DATA_KEY$5 = 'bs.focustrap';
  const EVENT_KEY$5 = `.${DATA_KEY$5}`;
  const EVENT_FOCUSIN$2 = `focusin${EVENT_KEY$5}`;
  const EVENT_KEYDOWN_TAB = `keydown.tab${EVENT_KEY$5}`;
  const TAB_KEY = 'Tab';
  const TAB_NAV_FORWARD = 'forward';
  const TAB_NAV_BACKWARD = 'backward';
  const Default$7 = {
    autofocus: true,
    trapElement: null // The element to trap focus inside of
  };

  const DefaultType$7 = {
    autofocus: 'boolean',
    trapElement: 'element'
  };

  /**
   * Class definition
   */

  class FocusTrap extends Config {
    constructor(config) {
      super();
      this._config = this._getConfig(config);
      this._isActive = false;
      this._lastTabNavDirection = null;
    }

    // Getters
    static get Default() {
      return Default$7;
    }
    static get DefaultType() {
      return DefaultType$7;
    }
    static get NAME() {
      return NAME$8;
    }

    // Public
    activate() {
      if (this._isActive) {
        return;
      }
      if (this._config.autofocus) {
        this._config.trapElement.focus();
      }
      EventHandler.off(document, EVENT_KEY$5); // guard against infinite focus loop
      EventHandler.on(document, EVENT_FOCUSIN$2, event => this._handleFocusin(event));
      EventHandler.on(document, EVENT_KEYDOWN_TAB, event => this._handleKeydown(event));
      this._isActive = true;
    }
    deactivate() {
      if (!this._isActive) {
        return;
      }
      this._isActive = false;
      EventHandler.off(document, EVENT_KEY$5);
    }

    // Private
    _handleFocusin(event) {
      const {
        trapElement
      } = this._config;
      if (event.target === document || event.target === trapElement || trapElement.contains(event.target)) {
        return;
      }
      const elements = SelectorEngine.focusableChildren(trapElement);
      if (elements.length === 0) {
        trapElement.focus();
      } else if (this._lastTabNavDirection === TAB_NAV_BACKWARD) {
        elements[elements.length - 1].focus();
      } else {
        elements[0].focus();
      }
    }
    _handleKeydown(event) {
      if (event.key !== TAB_KEY) {
        return;
      }
      this._lastTabNavDirection = event.shiftKey ? TAB_NAV_BACKWARD : TAB_NAV_FORWARD;
    }
  }

  /**
   * --------------------------------------------------------------------------
   * Bootstrap util/scrollBar.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */


  /**
   * Constants
   */

  const SELECTOR_FIXED_CONTENT = '.fixed-top, .fixed-bottom, .is-fixed, .sticky-top';
  const SELECTOR_STICKY_CONTENT = '.sticky-top';
  const PROPERTY_PADDING = 'padding-right';
  const PROPERTY_MARGIN = 'margin-right';

  /**
   * Class definition
   */

  class ScrollBarHelper {
    constructor() {
      this._element = document.body;
    }

    // Public
    getWidth() {
      // https://developer.mozilla.org/en-US/docs/Web/API/Window/innerWidth#usage_notes
      const documentWidth = document.documentElement.clientWidth;
      return Math.abs(window.innerWidth - documentWidth);
    }
    hide() {
      const width = this.getWidth();
      this._disableOverFlow();
      // give padding to element to balance the hidden scrollbar width
      this._setElementAttributes(this._element, PROPERTY_PADDING, calculatedValue => calculatedValue + width);
      // trick: We adjust positive paddingRight and negative marginRight to sticky-top elements to keep showing fullwidth
      this._setElementAttributes(SELECTOR_FIXED_CONTENT, PROPERTY_PADDING, calculatedValue => calculatedValue + width);
      this._setElementAttributes(SELECTOR_STICKY_CONTENT, PROPERTY_MARGIN, calculatedValue => calculatedValue - width);
    }
    reset() {
      this._resetElementAttributes(this._element, 'overflow');
      this._resetElementAttributes(this._element, PROPERTY_PADDING);
      this._resetElementAttributes(SELECTOR_FIXED_CONTENT, PROPERTY_PADDING);
      this._resetElementAttributes(SELECTOR_STICKY_CONTENT, PROPERTY_MARGIN);
    }
    isOverflowing() {
      return this.getWidth() > 0;
    }

    // Private
    _disableOverFlow() {
      this._saveInitialAttribute(this._element, 'overflow');
      this._element.style.overflow = 'hidden';
    }
    _setElementAttributes(selector, styleProperty, callback) {
      const scrollbarWidth = this.getWidth();
      const manipulationCallBack = element => {
        if (element !== this._element && window.innerWidth > element.clientWidth + scrollbarWidth) {
          return;
        }
        this._saveInitialAttribute(element, styleProperty);
        const calculatedValue = window.getComputedStyle(element).getPropertyValue(styleProperty);
        element.style.setProperty(styleProperty, `${callback(Number.parseFloat(calculatedValue))}px`);
      };
      this._applyManipulationCallback(selector, manipulationCallBack);
    }
    _saveInitialAttribute(element, styleProperty) {
      const actualValue = element.style.getPropertyValue(styleProperty);
      if (actualValue) {
        Manipulator.setDataAttribute(element, styleProperty, actualValue);
      }
    }
    _resetElementAttributes(selector, styleProperty) {
      const manipulationCallBack = element => {
        const value = Manipulator.getDataAttribute(element, styleProperty);
        // We only want to remove the property if the value is `null`; the value can also be zero
        if (value === null) {
          element.style.removeProperty(styleProperty);
          return;
        }
        Manipulator.removeDataAttribute(element, styleProperty);
        element.style.setProperty(styleProperty, value);
      };
      this._applyManipulationCallback(selector, manipulationCallBack);
    }
    _applyManipulationCallback(selector, callBack) {
      if (isElement(selector)) {
        callBack(selector);
        return;
      }
      for (const sel of SelectorEngine.find(selector, this._element)) {
        callBack(sel);
      }
    }
  }

  /**
   * --------------------------------------------------------------------------
   * Bootstrap modal.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */


  /**
   * Constants
   */

  const NAME$7 = 'modal';
  const DATA_KEY$4 = 'bs.modal';
  const EVENT_KEY$4 = `.${DATA_KEY$4}`;
  const DATA_API_KEY$2 = '.data-api';
  const ESCAPE_KEY$1 = 'Escape';
  const EVENT_HIDE$4 = `hide${EVENT_KEY$4}`;
  const EVENT_HIDE_PREVENTED$1 = `hidePrevented${EVENT_KEY$4}`;
  const EVENT_HIDDEN$4 = `hidden${EVENT_KEY$4}`;
  const EVENT_SHOW$4 = `show${EVENT_KEY$4}`;
  const EVENT_SHOWN$4 = `shown${EVENT_KEY$4}`;
  const EVENT_RESIZE$1 = `resize${EVENT_KEY$4}`;
  const EVENT_CLICK_DISMISS = `click.dismiss${EVENT_KEY$4}`;
  const EVENT_MOUSEDOWN_DISMISS = `mousedown.dismiss${EVENT_KEY$4}`;
  const EVENT_KEYDOWN_DISMISS$1 = `keydown.dismiss${EVENT_KEY$4}`;
  const EVENT_CLICK_DATA_API$2 = `click${EVENT_KEY$4}${DATA_API_KEY$2}`;
  const CLASS_NAME_OPEN = 'modal-open';
  const CLASS_NAME_FADE$3 = 'fade';
  const CLASS_NAME_SHOW$4 = 'show';
  const CLASS_NAME_STATIC = 'modal-static';
  const OPEN_SELECTOR$1 = '.modal.show';
  const SELECTOR_DIALOG = '.modal-dialog';
  const SELECTOR_MODAL_BODY = '.modal-body';
  const SELECTOR_DATA_TOGGLE$2 = '[data-bs-toggle="modal"]';
  const Default$6 = {
    backdrop: true,
    focus: true,
    keyboard: true
  };
  const DefaultType$6 = {
    backdrop: '(boolean|string)',
    focus: 'boolean',
    keyboard: 'boolean'
  };

  /**
   * Class definition
   */

  class Modal extends BaseComponent {
    constructor(element, config) {
      super(element, config);
      this._dialog = SelectorEngine.findOne(SELECTOR_DIALOG, this._element);
      this._backdrop = this._initializeBackDrop();
      this._focustrap = this._initializeFocusTrap();
      this._isShown = false;
      this._isTransitioning = false;
      this._scrollBar = new ScrollBarHelper();
      this._addEventListeners();
    }

    // Getters
    static get Default() {
      return Default$6;
    }
    static get DefaultType() {
      return DefaultType$6;
    }
    static get NAME() {
      return NAME$7;
    }

    // Public
    toggle(relatedTarget) {
      return this._isShown ? this.hide() : this.show(relatedTarget);
    }
    show(relatedTarget) {
      if (this._isShown || this._isTransitioning) {
        return;
      }
      const showEvent = EventHandler.trigger(this._element, EVENT_SHOW$4, {
        relatedTarget
      });
      if (showEvent.defaultPrevented) {
        return;
      }
      this._isShown = true;
      this._isTransitioning = true;
      this._scrollBar.hide();
      document.body.classList.add(CLASS_NAME_OPEN);
      this._adjustDialog();
      this._backdrop.show(() => this._showElement(relatedTarget));
    }
    hide() {
      if (!this._isShown || this._isTransitioning) {
        return;
      }
      const hideEvent = EventHandler.trigger(this._element, EVENT_HIDE$4);
      if (hideEvent.defaultPrevented) {
        return;
      }
      this._isShown = false;
      this._isTransitioning = true;
      this._focustrap.deactivate();
      this._element.classList.remove(CLASS_NAME_SHOW$4);
      this._queueCallback(() => this._hideModal(), this._element, this._isAnimated());
    }
    dispose() {
      EventHandler.off(window, EVENT_KEY$4);
      EventHandler.off(this._dialog, EVENT_KEY$4);
      this._backdrop.dispose();
      this._focustrap.deactivate();
      super.dispose();
    }
    handleUpdate() {
      this._adjustDialog();
    }

    // Private
    _initializeBackDrop() {
      return new Backdrop({
        isVisible: Boolean(this._config.backdrop),
        // 'static' option will be translated to true, and booleans will keep their value,
        isAnimated: this._isAnimated()
      });
    }
    _initializeFocusTrap() {
      return new FocusTrap({
        trapElement: this._element
      });
    }
    _showElement(relatedTarget) {
      // try to append dynamic modal
      if (!document.body.contains(this._element)) {
        document.body.append(this._element);
      }
      this._element.style.display = 'block';
      this._element.removeAttribute('aria-hidden');
      this._element.setAttribute('aria-modal', true);
      this._element.setAttribute('role', 'dialog');
      this._element.scrollTop = 0;
      const modalBody = SelectorEngine.findOne(SELECTOR_MODAL_BODY, this._dialog);
      if (modalBody) {
        modalBody.scrollTop = 0;
      }
      reflow(this._element);
      this._element.classList.add(CLASS_NAME_SHOW$4);
      const transitionComplete = () => {
        if (this._config.focus) {
          this._focustrap.activate();
        }
        this._isTransitioning = false;
        EventHandler.trigger(this._element, EVENT_SHOWN$4, {
          relatedTarget
        });
      };
      this._queueCallback(transitionComplete, this._dialog, this._isAnimated());
    }
    _addEventListeners() {
      EventHandler.on(this._element, EVENT_KEYDOWN_DISMISS$1, event => {
        if (event.key !== ESCAPE_KEY$1) {
          return;
        }
        if (this._config.keyboard) {
          this.hide();
          return;
        }
        this._triggerBackdropTransition();
      });
      EventHandler.on(window, EVENT_RESIZE$1, () => {
        if (this._isShown && !this._isTransitioning) {
          this._adjustDialog();
        }
      });
      EventHandler.on(this._element, EVENT_MOUSEDOWN_DISMISS, event => {
        // a bad trick to segregate clicks that may start inside dialog but end outside, and avoid listen to scrollbar clicks
        EventHandler.one(this._element, EVENT_CLICK_DISMISS, event2 => {
          if (this._element !== event.target || this._element !== event2.target) {
            return;
          }
          if (this._config.backdrop === 'static') {
            this._triggerBackdropTransition();
            return;
          }
          if (this._config.backdrop) {
            this.hide();
          }
        });
      });
    }
    _hideModal() {
      this._element.style.display = 'none';
      this._element.setAttribute('aria-hidden', true);
      this._element.removeAttribute('aria-modal');
      this._element.removeAttribute('role');
      this._isTransitioning = false;
      this._backdrop.hide(() => {
        document.body.classList.remove(CLASS_NAME_OPEN);
        this._resetAdjustments();
        this._scrollBar.reset();
        EventHandler.trigger(this._element, EVENT_HIDDEN$4);
      });
    }
    _isAnimated() {
      return this._element.classList.contains(CLASS_NAME_FADE$3);
    }
    _triggerBackdropTransition() {
      const hideEvent = EventHandler.trigger(this._element, EVENT_HIDE_PREVENTED$1);
      if (hideEvent.defaultPrevented) {
        return;
      }
      const isModalOverflowing = this._element.scrollHeight > document.documentElement.clientHeight;
      const initialOverflowY = this._element.style.overflowY;
      // return if the following background transition hasn't yet completed
      if (initialOverflowY === 'hidden' || this._element.classList.contains(CLASS_NAME_STATIC)) {
        return;
      }
      if (!isModalOverflowing) {
        this._element.style.overflowY = 'hidden';
      }
      this._element.classList.add(CLASS_NAME_STATIC);
      this._queueCallback(() => {
        this._element.classList.remove(CLASS_NAME_STATIC);
        this._queueCallback(() => {
          this._element.style.overflowY = initialOverflowY;
        }, this._dialog);
      }, this._dialog);
      this._element.focus();
    }

    /**
     * The following methods are used to handle overflowing modals
     */

    _adjustDialog() {
      const isModalOverflowing = this._element.scrollHeight > document.documentElement.clientHeight;
      const scrollbarWidth = this._scrollBar.getWidth();
      const isBodyOverflowing = scrollbarWidth > 0;
      if (isBodyOverflowing && !isModalOverflowing) {
        const property = isRTL() ? 'paddingLeft' : 'paddingRight';
        this._element.style[property] = `${scrollbarWidth}px`;
      }
      if (!isBodyOverflowing && isModalOverflowing) {
        const property = isRTL() ? 'paddingRight' : 'paddingLeft';
        this._element.style[property] = `${scrollbarWidth}px`;
      }
    }
    _resetAdjustments() {
      this._element.style.paddingLeft = '';
      this._element.style.paddingRight = '';
    }

    // Static
    static jQueryInterface(config, relatedTarget) {
      return this.each(function () {
        const data = Modal.getOrCreateInstance(this, config);
        if (typeof config !== 'string') {
          return;
        }
        if (typeof data[config] === 'undefined') {
          throw new TypeError(`No method named "${config}"`);
        }
        data[config](relatedTarget);
      });
    }
  }

  /**
   * Data API implementation
   */

  EventHandler.on(document, EVENT_CLICK_DATA_API$2, SELECTOR_DATA_TOGGLE$2, function (event) {
    const target = SelectorEngine.getElementFromSelector(this);
    if (['A', 'AREA'].includes(this.tagName)) {
      event.preventDefault();
    }
    EventHandler.one(target, EVENT_SHOW$4, showEvent => {
      if (showEvent.defaultPrevented) {
        // only register focus restorer if modal will actually get shown
        return;
      }
      EventHandler.one(target, EVENT_HIDDEN$4, () => {
        if (isVisible(this)) {
          this.focus();
        }
      });
    });

    // avoid conflict when clicking modal toggler while another one is open
    const alreadyOpen = SelectorEngine.findOne(OPEN_SELECTOR$1);
    if (alreadyOpen) {
      Modal.getInstance(alreadyOpen).hide();
    }
    const data = Modal.getOrCreateInstance(target);
    data.toggle(this);
  });
  enableDismissTrigger(Modal);

  /**
   * jQuery
   */

  defineJQueryPlugin(Modal);

  /**
   * --------------------------------------------------------------------------
   * Bootstrap offcanvas.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */


  /**
   * Constants
   */

  const NAME$6 = 'offcanvas';
  const DATA_KEY$3 = 'bs.offcanvas';
  const EVENT_KEY$3 = `.${DATA_KEY$3}`;
  const DATA_API_KEY$1 = '.data-api';
  const EVENT_LOAD_DATA_API$2 = `load${EVENT_KEY$3}${DATA_API_KEY$1}`;
  const ESCAPE_KEY = 'Escape';
  const CLASS_NAME_SHOW$3 = 'show';
  const CLASS_NAME_SHOWING$1 = 'showing';
  const CLASS_NAME_HIDING = 'hiding';
  const CLASS_NAME_BACKDROP = 'offcanvas-backdrop';
  const OPEN_SELECTOR = '.offcanvas.show';
  const EVENT_SHOW$3 = `show${EVENT_KEY$3}`;
  const EVENT_SHOWN$3 = `shown${EVENT_KEY$3}`;
  const EVENT_HIDE$3 = `hide${EVENT_KEY$3}`;
  const EVENT_HIDE_PREVENTED = `hidePrevented${EVENT_KEY$3}`;
  const EVENT_HIDDEN$3 = `hidden${EVENT_KEY$3}`;
  const EVENT_RESIZE = `resize${EVENT_KEY$3}`;
  const EVENT_CLICK_DATA_API$1 = `click${EVENT_KEY$3}${DATA_API_KEY$1}`;
  const EVENT_KEYDOWN_DISMISS = `keydown.dismiss${EVENT_KEY$3}`;
  const SELECTOR_DATA_TOGGLE$1 = '[data-bs-toggle="offcanvas"]';
  const Default$5 = {
    backdrop: true,
    keyboard: true,
    scroll: false
  };
  const DefaultType$5 = {
    backdrop: '(boolean|string)',
    keyboard: 'boolean',
    scroll: 'boolean'
  };

  /**
   * Class definition
   */

  class Offcanvas extends BaseComponent {
    constructor(element, config) {
      super(element, config);
      this._isShown = false;
      this._backdrop = this._initializeBackDrop();
      this._focustrap = this._initializeFocusTrap();
      this._addEventListeners();
    }

    // Getters
    static get Default() {
      return Default$5;
    }
    static get DefaultType() {
      return DefaultType$5;
    }
    static get NAME() {
      return NAME$6;
    }

    // Public
    toggle(relatedTarget) {
      return this._isShown ? this.hide() : this.show(relatedTarget);
    }
    show(relatedTarget) {
      if (this._isShown) {
        return;
      }
      const showEvent = EventHandler.trigger(this._element, EVENT_SHOW$3, {
        relatedTarget
      });
      if (showEvent.defaultPrevented) {
        return;
      }
      this._isShown = true;
      this._backdrop.show();
      if (!this._config.scroll) {
        new ScrollBarHelper().hide();
      }
      this._element.setAttribute('aria-modal', true);
      this._element.setAttribute('role', 'dialog');
      this._element.classList.add(CLASS_NAME_SHOWING$1);
      const completeCallBack = () => {
        if (!this._config.scroll || this._config.backdrop) {
          this._focustrap.activate();
        }
        this._element.classList.add(CLASS_NAME_SHOW$3);
        this._element.classList.remove(CLASS_NAME_SHOWING$1);
        EventHandler.trigger(this._element, EVENT_SHOWN$3, {
          relatedTarget
        });
      };
      this._queueCallback(completeCallBack, this._element, true);
    }
    hide() {
      if (!this._isShown) {
        return;
      }
      const hideEvent = EventHandler.trigger(this._element, EVENT_HIDE$3);
      if (hideEvent.defaultPrevented) {
        return;
      }
      this._focustrap.deactivate();
      this._element.blur();
      this._isShown = false;
      this._element.classList.add(CLASS_NAME_HIDING);
      this._backdrop.hide();
      const completeCallback = () => {
        this._element.classList.remove(CLASS_NAME_SHOW$3, CLASS_NAME_HIDING);
        this._element.removeAttribute('aria-modal');
        this._element.removeAttribute('role');
        if (!this._config.scroll) {
          new ScrollBarHelper().reset();
        }
        EventHandler.trigger(this._element, EVENT_HIDDEN$3);
      };
      this._queueCallback(completeCallback, this._element, true);
    }
    dispose() {
      this._backdrop.dispose();
      this._focustrap.deactivate();
      super.dispose();
    }

    // Private
    _initializeBackDrop() {
      const clickCallback = () => {
        if (this._config.backdrop === 'static') {
          EventHandler.trigger(this._element, EVENT_HIDE_PREVENTED);
          return;
        }
        this.hide();
      };

      // 'static' option will be translated to true, and booleans will keep their value
      const isVisible = Boolean(this._config.backdrop);
      return new Backdrop({
        className: CLASS_NAME_BACKDROP,
        isVisible,
        isAnimated: true,
        rootElement: this._element.parentNode,
        clickCallback: isVisible ? clickCallback : null
      });
    }
    _initializeFocusTrap() {
      return new FocusTrap({
        trapElement: this._element
      });
    }
    _addEventListeners() {
      EventHandler.on(this._element, EVENT_KEYDOWN_DISMISS, event => {
        if (event.key !== ESCAPE_KEY) {
          return;
        }
        if (this._config.keyboard) {
          this.hide();
          return;
        }
        EventHandler.trigger(this._element, EVENT_HIDE_PREVENTED);
      });
    }

    // Static
    static jQueryInterface(config) {
      return this.each(function () {
        const data = Offcanvas.getOrCreateInstance(this, config);
        if (typeof config !== 'string') {
          return;
        }
        if (data[config] === undefined || config.startsWith('_') || config === 'constructor') {
          throw new TypeError(`No method named "${config}"`);
        }
        data[config](this);
      });
    }
  }

  /**
   * Data API implementation
   */

  EventHandler.on(document, EVENT_CLICK_DATA_API$1, SELECTOR_DATA_TOGGLE$1, function (event) {
    const target = SelectorEngine.getElementFromSelector(this);
    if (['A', 'AREA'].includes(this.tagName)) {
      event.preventDefault();
    }
    if (isDisabled(this)) {
      return;
    }
    EventHandler.one(target, EVENT_HIDDEN$3, () => {
      // focus on trigger when it is closed
      if (isVisible(this)) {
        this.focus();
      }
    });

    // avoid conflict when clicking a toggler of an offcanvas, while another is open
    const alreadyOpen = SelectorEngine.findOne(OPEN_SELECTOR);
    if (alreadyOpen && alreadyOpen !== target) {
      Offcanvas.getInstance(alreadyOpen).hide();
    }
    const data = Offcanvas.getOrCreateInstance(target);
    data.toggle(this);
  });
  EventHandler.on(window, EVENT_LOAD_DATA_API$2, () => {
    for (const selector of SelectorEngine.find(OPEN_SELECTOR)) {
      Offcanvas.getOrCreateInstance(selector).show();
    }
  });
  EventHandler.on(window, EVENT_RESIZE, () => {
    for (const element of SelectorEngine.find('[aria-modal][class*=show][class*=offcanvas-]')) {
      if (getComputedStyle(element).position !== 'fixed') {
        Offcanvas.getOrCreateInstance(element).hide();
      }
    }
  });
  enableDismissTrigger(Offcanvas);

  /**
   * jQuery
   */

  defineJQueryPlugin(Offcanvas);

  /**
   * --------------------------------------------------------------------------
   * Bootstrap util/sanitizer.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */

  // js-docs-start allow-list
  const ARIA_ATTRIBUTE_PATTERN = /^aria-[\w-]*$/i;
  const DefaultAllowlist = {
    // Global attributes allowed on any supplied element below.
    '*': ['class', 'dir', 'id', 'lang', 'role', ARIA_ATTRIBUTE_PATTERN],
    a: ['target', 'href', 'title', 'rel'],
    area: [],
    b: [],
    br: [],
    col: [],
    code: [],
    div: [],
    em: [],
    hr: [],
    h1: [],
    h2: [],
    h3: [],
    h4: [],
    h5: [],
    h6: [],
    i: [],
    img: ['src', 'srcset', 'alt', 'title', 'width', 'height'],
    li: [],
    ol: [],
    p: [],
    pre: [],
    s: [],
    small: [],
    span: [],
    sub: [],
    sup: [],
    strong: [],
    u: [],
    ul: []
  };
  // js-docs-end allow-list

  const uriAttributes = new Set(['background', 'cite', 'href', 'itemtype', 'longdesc', 'poster', 'src', 'xlink:href']);

  /**
   * A pattern that recognizes URLs that are safe wrt. XSS in URL navigation
   * contexts.
   *
   * Shout-out to Angular https://github.com/angular/angular/blob/15.2.8/packages/core/src/sanitization/url_sanitizer.ts#L38
   */
  // eslint-disable-next-line unicorn/better-regex
  const SAFE_URL_PATTERN = /^(?!javascript:)(?:[a-z0-9+.-]+:|[^&:/?#]*(?:[/?#]|$))/i;
  const allowedAttribute = (attribute, allowedAttributeList) => {
    const attributeName = attribute.nodeName.toLowerCase();
    if (allowedAttributeList.includes(attributeName)) {
      if (uriAttributes.has(attributeName)) {
        return Boolean(SAFE_URL_PATTERN.test(attribute.nodeValue));
      }
      return true;
    }

    // Check if a regular expression validates the attribute.
    return allowedAttributeList.filter(attributeRegex => attributeRegex instanceof RegExp).some(regex => regex.test(attributeName));
  };
  function sanitizeHtml(unsafeHtml, allowList, sanitizeFunction) {
    if (!unsafeHtml.length) {
      return unsafeHtml;
    }
    if (sanitizeFunction && typeof sanitizeFunction === 'function') {
      return sanitizeFunction(unsafeHtml);
    }
    const domParser = new window.DOMParser();
    const createdDocument = domParser.parseFromString(unsafeHtml, 'text/html');
    const elements = [].concat(...createdDocument.body.querySelectorAll('*'));
    for (const element of elements) {
      const elementName = element.nodeName.toLowerCase();
      if (!Object.keys(allowList).includes(elementName)) {
        element.remove();
        continue;
      }
      const attributeList = [].concat(...element.attributes);
      const allowedAttributes = [].concat(allowList['*'] || [], allowList[elementName] || []);
      for (const attribute of attributeList) {
        if (!allowedAttribute(attribute, allowedAttributes)) {
          element.removeAttribute(attribute.nodeName);
        }
      }
    }
    return createdDocument.body.innerHTML;
  }

  /**
   * --------------------------------------------------------------------------
   * Bootstrap util/template-factory.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */


  /**
   * Constants
   */

  const NAME$5 = 'TemplateFactory';
  const Default$4 = {
    allowList: DefaultAllowlist,
    content: {},
    // { selector : text ,  selector2 : text2 , }
    extraClass: '',
    html: false,
    sanitize: true,
    sanitizeFn: null,
    template: '<div></div>'
  };
  const DefaultType$4 = {
    allowList: 'object',
    content: 'object',
    extraClass: '(string|function)',
    html: 'boolean',
    sanitize: 'boolean',
    sanitizeFn: '(null|function)',
    template: 'string'
  };
  const DefaultContentType = {
    entry: '(string|element|function|null)',
    selector: '(string|element)'
  };

  /**
   * Class definition
   */

  class TemplateFactory extends Config {
    constructor(config) {
      super();
      this._config = this._getConfig(config);
    }

    // Getters
    static get Default() {
      return Default$4;
    }
    static get DefaultType() {
      return DefaultType$4;
    }
    static get NAME() {
      return NAME$5;
    }

    // Public
    getContent() {
      return Object.values(this._config.content).map(config => this._resolvePossibleFunction(config)).filter(Boolean);
    }
    hasContent() {
      return this.getContent().length > 0;
    }
    changeContent(content) {
      this._checkContent(content);
      this._config.content = {
        ...this._config.content,
        ...content
      };
      return this;
    }
    toHtml() {
      const templateWrapper = document.createElement('div');
      templateWrapper.innerHTML = this._maybeSanitize(this._config.template);
      for (const [selector, text] of Object.entries(this._config.content)) {
        this._setContent(templateWrapper, text, selector);
      }
      const template = templateWrapper.children[0];
      const extraClass = this._resolvePossibleFunction(this._config.extraClass);
      if (extraClass) {
        template.classList.add(...extraClass.split(' '));
      }
      return template;
    }

    // Private
    _typeCheckConfig(config) {
      super._typeCheckConfig(config);
      this._checkContent(config.content);
    }
    _checkContent(arg) {
      for (const [selector, content] of Object.entries(arg)) {
        super._typeCheckConfig({
          selector,
          entry: content
        }, DefaultContentType);
      }
    }
    _setContent(template, content, selector) {
      const templateElement = SelectorEngine.findOne(selector, template);
      if (!templateElement) {
        return;
      }
      content = this._resolvePossibleFunction(content);
      if (!content) {
        templateElement.remove();
        return;
      }
      if (isElement(content)) {
        this._putElementInTemplate(getElement(content), templateElement);
        return;
      }
      if (this._config.html) {
        templateElement.innerHTML = this._maybeSanitize(content);
        return;
      }
      templateElement.textContent = content;
    }
    _maybeSanitize(arg) {
      return this._config.sanitize ? sanitizeHtml(arg, this._config.allowList, this._config.sanitizeFn) : arg;
    }
    _resolvePossibleFunction(arg) {
      return execute(arg, [this]);
    }
    _putElementInTemplate(element, templateElement) {
      if (this._config.html) {
        templateElement.innerHTML = '';
        templateElement.append(element);
        return;
      }
      templateElement.textContent = element.textContent;
    }
  }

  /**
   * --------------------------------------------------------------------------
   * Bootstrap tooltip.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */


  /**
   * Constants
   */

  const NAME$4 = 'tooltip';
  const DISALLOWED_ATTRIBUTES = new Set(['sanitize', 'allowList', 'sanitizeFn']);
  const CLASS_NAME_FADE$2 = 'fade';
  const CLASS_NAME_MODAL = 'modal';
  const CLASS_NAME_SHOW$2 = 'show';
  const SELECTOR_TOOLTIP_INNER = '.tooltip-inner';
  const SELECTOR_MODAL = `.${CLASS_NAME_MODAL}`;
  const EVENT_MODAL_HIDE = 'hide.bs.modal';
  const TRIGGER_HOVER = 'hover';
  const TRIGGER_FOCUS = 'focus';
  const TRIGGER_CLICK = 'click';
  const TRIGGER_MANUAL = 'manual';
  const EVENT_HIDE$2 = 'hide';
  const EVENT_HIDDEN$2 = 'hidden';
  const EVENT_SHOW$2 = 'show';
  const EVENT_SHOWN$2 = 'shown';
  const EVENT_INSERTED = 'inserted';
  const EVENT_CLICK$1 = 'click';
  const EVENT_FOCUSIN$1 = 'focusin';
  const EVENT_FOCUSOUT$1 = 'focusout';
  const EVENT_MOUSEENTER = 'mouseenter';
  const EVENT_MOUSELEAVE = 'mouseleave';
  const AttachmentMap = {
    AUTO: 'auto',
    TOP: 'top',
    RIGHT: isRTL() ? 'left' : 'right',
    BOTTOM: 'bottom',
    LEFT: isRTL() ? 'right' : 'left'
  };
  const Default$3 = {
    allowList: DefaultAllowlist,
    animation: true,
    boundary: 'clippingParents',
    container: false,
    customClass: '',
    delay: 0,
    fallbackPlacements: ['top', 'right', 'bottom', 'left'],
    html: false,
    offset: [0, 6],
    placement: 'top',
    popperConfig: null,
    sanitize: true,
    sanitizeFn: null,
    selector: false,
    template: '<div class="tooltip" role="tooltip">' + '<div class="tooltip-arrow"></div>' + '<div class="tooltip-inner"></div>' + '</div>',
    title: '',
    trigger: 'hover focus'
  };
  const DefaultType$3 = {
    allowList: 'object',
    animation: 'boolean',
    boundary: '(string|element)',
    container: '(string|element|boolean)',
    customClass: '(string|function)',
    delay: '(number|object)',
    fallbackPlacements: 'array',
    html: 'boolean',
    offset: '(array|string|function)',
    placement: '(string|function)',
    popperConfig: '(null|object|function)',
    sanitize: 'boolean',
    sanitizeFn: '(null|function)',
    selector: '(string|boolean)',
    template: 'string',
    title: '(string|element|function)',
    trigger: 'string'
  };

  /**
   * Class definition
   */

  class Tooltip extends BaseComponent {
    constructor(element, config) {
      if (typeof Popper__namespace === 'undefined') {
        throw new TypeError('Bootstrap\'s tooltips require Popper (https://popper.js.org)');
      }
      super(element, config);

      // Private
      this._isEnabled = true;
      this._timeout = 0;
      this._isHovered = null;
      this._activeTrigger = {};
      this._popper = null;
      this._templateFactory = null;
      this._newContent = null;

      // Protected
      this.tip = null;
      this._setListeners();
      if (!this._config.selector) {
        this._fixTitle();
      }
    }

    // Getters
    static get Default() {
      return Default$3;
    }
    static get DefaultType() {
      return DefaultType$3;
    }
    static get NAME() {
      return NAME$4;
    }

    // Public
    enable() {
      this._isEnabled = true;
    }
    disable() {
      this._isEnabled = false;
    }
    toggleEnabled() {
      this._isEnabled = !this._isEnabled;
    }
    toggle() {
      if (!this._isEnabled) {
        return;
      }
      this._activeTrigger.click = !this._activeTrigger.click;
      if (this._isShown()) {
        this._leave();
        return;
      }
      this._enter();
    }
    dispose() {
      clearTimeout(this._timeout);
      EventHandler.off(this._element.closest(SELECTOR_MODAL), EVENT_MODAL_HIDE, this._hideModalHandler);
      if (this._element.getAttribute('data-bs-original-title')) {
        this._element.setAttribute('title', this._element.getAttribute('data-bs-original-title'));
      }
      this._disposePopper();
      super.dispose();
    }
    show() {
      if (this._element.style.display === 'none') {
        throw new Error('Please use show on visible elements');
      }
      if (!(this._isWithContent() && this._isEnabled)) {
        return;
      }
      const showEvent = EventHandler.trigger(this._element, this.constructor.eventName(EVENT_SHOW$2));
      const shadowRoot = findShadowRoot(this._element);
      const isInTheDom = (shadowRoot || this._element.ownerDocument.documentElement).contains(this._element);
      if (showEvent.defaultPrevented || !isInTheDom) {
        return;
      }

      // TODO: v6 remove this or make it optional
      this._disposePopper();
      const tip = this._getTipElement();
      this._element.setAttribute('aria-describedby', tip.getAttribute('id'));
      const {
        container
      } = this._config;
      if (!this._element.ownerDocument.documentElement.contains(this.tip)) {
        container.append(tip);
        EventHandler.trigger(this._element, this.constructor.eventName(EVENT_INSERTED));
      }
      this._popper = this._createPopper(tip);
      tip.classList.add(CLASS_NAME_SHOW$2);

      // If this is a touch-enabled device we add extra
      // empty mouseover listeners to the body's immediate children;
      // only needed because of broken event delegation on iOS
      // https://www.quirksmode.org/blog/archives/2014/02/mouse_event_bub.html
      if ('ontouchstart' in document.documentElement) {
        for (const element of [].concat(...document.body.children)) {
          EventHandler.on(element, 'mouseover', noop);
        }
      }
      const complete = () => {
        EventHandler.trigger(this._element, this.constructor.eventName(EVENT_SHOWN$2));
        if (this._isHovered === false) {
          this._leave();
        }
        this._isHovered = false;
      };
      this._queueCallback(complete, this.tip, this._isAnimated());
    }
    hide() {
      if (!this._isShown()) {
        return;
      }
      const hideEvent = EventHandler.trigger(this._element, this.constructor.eventName(EVENT_HIDE$2));
      if (hideEvent.defaultPrevented) {
        return;
      }
      const tip = this._getTipElement();
      tip.classList.remove(CLASS_NAME_SHOW$2);

      // If this is a touch-enabled device we remove the extra
      // empty mouseover listeners we added for iOS support
      if ('ontouchstart' in document.documentElement) {
        for (const element of [].concat(...document.body.children)) {
          EventHandler.off(element, 'mouseover', noop);
        }
      }
      this._activeTrigger[TRIGGER_CLICK] = false;
      this._activeTrigger[TRIGGER_FOCUS] = false;
      this._activeTrigger[TRIGGER_HOVER] = false;
      this._isHovered = null; // it is a trick to support manual triggering

      const complete = () => {
        if (this._isWithActiveTrigger()) {
          return;
        }
        if (!this._isHovered) {
          this._disposePopper();
        }
        this._element.removeAttribute('aria-describedby');
        EventHandler.trigger(this._element, this.constructor.eventName(EVENT_HIDDEN$2));
      };
      this._queueCallback(complete, this.tip, this._isAnimated());
    }
    update() {
      if (this._popper) {
        this._popper.update();
      }
    }

    // Protected
    _isWithContent() {
      return Boolean(this._getTitle());
    }
    _getTipElement() {
      if (!this.tip) {
        this.tip = this._createTipElement(this._newContent || this._getContentForTemplate());
      }
      return this.tip;
    }
    _createTipElement(content) {
      const tip = this._getTemplateFactory(content).toHtml();

      // TODO: remove this check in v6
      if (!tip) {
        return null;
      }
      tip.classList.remove(CLASS_NAME_FADE$2, CLASS_NAME_SHOW$2);
      // TODO: v6 the following can be achieved with CSS only
      tip.classList.add(`bs-${this.constructor.NAME}-auto`);
      const tipId = getUID(this.constructor.NAME).toString();
      tip.setAttribute('id', tipId);
      if (this._isAnimated()) {
        tip.classList.add(CLASS_NAME_FADE$2);
      }
      return tip;
    }
    setContent(content) {
      this._newContent = content;
      if (this._isShown()) {
        this._disposePopper();
        this.show();
      }
    }
    _getTemplateFactory(content) {
      if (this._templateFactory) {
        this._templateFactory.changeContent(content);
      } else {
        this._templateFactory = new TemplateFactory({
          ...this._config,
          // the `content` var has to be after `this._config`
          // to override config.content in case of popover
          content,
          extraClass: this._resolvePossibleFunction(this._config.customClass)
        });
      }
      return this._templateFactory;
    }
    _getContentForTemplate() {
      return {
        [SELECTOR_TOOLTIP_INNER]: this._getTitle()
      };
    }
    _getTitle() {
      return this._resolvePossibleFunction(this._config.title) || this._element.getAttribute('data-bs-original-title');
    }

    // Private
    _initializeOnDelegatedTarget(event) {
      return this.constructor.getOrCreateInstance(event.delegateTarget, this._getDelegateConfig());
    }
    _isAnimated() {
      return this._config.animation || this.tip && this.tip.classList.contains(CLASS_NAME_FADE$2);
    }
    _isShown() {
      return this.tip && this.tip.classList.contains(CLASS_NAME_SHOW$2);
    }
    _createPopper(tip) {
      const placement = execute(this._config.placement, [this, tip, this._element]);
      const attachment = AttachmentMap[placement.toUpperCase()];
      return Popper__namespace.createPopper(this._element, tip, this._getPopperConfig(attachment));
    }
    _getOffset() {
      const {
        offset
      } = this._config;
      if (typeof offset === 'string') {
        return offset.split(',').map(value => Number.parseInt(value, 10));
      }
      if (typeof offset === 'function') {
        return popperData => offset(popperData, this._element);
      }
      return offset;
    }
    _resolvePossibleFunction(arg) {
      return execute(arg, [this._element]);
    }
    _getPopperConfig(attachment) {
      const defaultBsPopperConfig = {
        placement: attachment,
        modifiers: [{
          name: 'flip',
          options: {
            fallbackPlacements: this._config.fallbackPlacements
          }
        }, {
          name: 'offset',
          options: {
            offset: this._getOffset()
          }
        }, {
          name: 'preventOverflow',
          options: {
            boundary: this._config.boundary
          }
        }, {
          name: 'arrow',
          options: {
            element: `.${this.constructor.NAME}-arrow`
          }
        }, {
          name: 'preSetPlacement',
          enabled: true,
          phase: 'beforeMain',
          fn: data => {
            // Pre-set Popper's placement attribute in order to read the arrow sizes properly.
            // Otherwise, Popper mixes up the width and height dimensions since the initial arrow style is for top placement
            this._getTipElement().setAttribute('data-popper-placement', data.state.placement);
          }
        }]
      };
      return {
        ...defaultBsPopperConfig,
        ...execute(this._config.popperConfig, [defaultBsPopperConfig])
      };
    }
    _setListeners() {
      const triggers = this._config.trigger.split(' ');
      for (const trigger of triggers) {
        if (trigger === 'click') {
          EventHandler.on(this._element, this.constructor.eventName(EVENT_CLICK$1), this._config.selector, event => {
            const context = this._initializeOnDelegatedTarget(event);
            context.toggle();
          });
        } else if (trigger !== TRIGGER_MANUAL) {
          const eventIn = trigger === TRIGGER_HOVER ? this.constructor.eventName(EVENT_MOUSEENTER) : this.constructor.eventName(EVENT_FOCUSIN$1);
          const eventOut = trigger === TRIGGER_HOVER ? this.constructor.eventName(EVENT_MOUSELEAVE) : this.constructor.eventName(EVENT_FOCUSOUT$1);
          EventHandler.on(this._element, eventIn, this._config.selector, event => {
            const context = this._initializeOnDelegatedTarget(event);
            context._activeTrigger[event.type === 'focusin' ? TRIGGER_FOCUS : TRIGGER_HOVER] = true;
            context._enter();
          });
          EventHandler.on(this._element, eventOut, this._config.selector, event => {
            const context = this._initializeOnDelegatedTarget(event);
            context._activeTrigger[event.type === 'focusout' ? TRIGGER_FOCUS : TRIGGER_HOVER] = context._element.contains(event.relatedTarget);
            context._leave();
          });
        }
      }
      this._hideModalHandler = () => {
        if (this._element) {
          this.hide();
        }
      };
      EventHandler.on(this._element.closest(SELECTOR_MODAL), EVENT_MODAL_HIDE, this._hideModalHandler);
    }
    _fixTitle() {
      const title = this._element.getAttribute('title');
      if (!title) {
        return;
      }
      if (!this._element.getAttribute('aria-label') && !this._element.textContent.trim()) {
        this._element.setAttribute('aria-label', title);
      }
      this._element.setAttribute('data-bs-original-title', title); // DO NOT USE IT. Is only for backwards compatibility
      this._element.removeAttribute('title');
    }
    _enter() {
      if (this._isShown() || this._isHovered) {
        this._isHovered = true;
        return;
      }
      this._isHovered = true;
      this._setTimeout(() => {
        if (this._isHovered) {
          this.show();
        }
      }, this._config.delay.show);
    }
    _leave() {
      if (this._isWithActiveTrigger()) {
        return;
      }
      this._isHovered = false;
      this._setTimeout(() => {
        if (!this._isHovered) {
          this.hide();
        }
      }, this._config.delay.hide);
    }
    _setTimeout(handler, timeout) {
      clearTimeout(this._timeout);
      this._timeout = setTimeout(handler, timeout);
    }
    _isWithActiveTrigger() {
      return Object.values(this._activeTrigger).includes(true);
    }
    _getConfig(config) {
      const dataAttributes = Manipulator.getDataAttributes(this._element);
      for (const dataAttribute of Object.keys(dataAttributes)) {
        if (DISALLOWED_ATTRIBUTES.has(dataAttribute)) {
          delete dataAttributes[dataAttribute];
        }
      }
      config = {
        ...dataAttributes,
        ...(typeof config === 'object' && config ? config : {})
      };
      config = this._mergeConfigObj(config);
      config = this._configAfterMerge(config);
      this._typeCheckConfig(config);
      return config;
    }
    _configAfterMerge(config) {
      config.container = config.container === false ? document.body : getElement(config.container);
      if (typeof config.delay === 'number') {
        config.delay = {
          show: config.delay,
          hide: config.delay
        };
      }
      if (typeof config.title === 'number') {
        config.title = config.title.toString();
      }
      if (typeof config.content === 'number') {
        config.content = config.content.toString();
      }
      return config;
    }
    _getDelegateConfig() {
      const config = {};
      for (const [key, value] of Object.entries(this._config)) {
        if (this.constructor.Default[key] !== value) {
          config[key] = value;
        }
      }
      config.selector = false;
      config.trigger = 'manual';

      // In the future can be replaced with:
      // const keysWithDifferentValues = Object.entries(this._config).filter(entry => this.constructor.Default[entry[0]] !== this._config[entry[0]])
      // `Object.fromEntries(keysWithDifferentValues)`
      return config;
    }
    _disposePopper() {
      if (this._popper) {
        this._popper.destroy();
        this._popper = null;
      }
      if (this.tip) {
        this.tip.remove();
        this.tip = null;
      }
    }

    // Static
    static jQueryInterface(config) {
      return this.each(function () {
        const data = Tooltip.getOrCreateInstance(this, config);
        if (typeof config !== 'string') {
          return;
        }
        if (typeof data[config] === 'undefined') {
          throw new TypeError(`No method named "${config}"`);
        }
        data[config]();
      });
    }
  }

  /**
   * jQuery
   */

  defineJQueryPlugin(Tooltip);

  /**
   * --------------------------------------------------------------------------
   * Bootstrap popover.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */


  /**
   * Constants
   */

  const NAME$3 = 'popover';
  const SELECTOR_TITLE = '.popover-header';
  const SELECTOR_CONTENT = '.popover-body';
  const Default$2 = {
    ...Tooltip.Default,
    content: '',
    offset: [0, 8],
    placement: 'right',
    template: '<div class="popover" role="tooltip">' + '<div class="popover-arrow"></div>' + '<h3 class="popover-header"></h3>' + '<div class="popover-body"></div>' + '</div>',
    trigger: 'click'
  };
  const DefaultType$2 = {
    ...Tooltip.DefaultType,
    content: '(null|string|element|function)'
  };

  /**
   * Class definition
   */

  class Popover extends Tooltip {
    // Getters
    static get Default() {
      return Default$2;
    }
    static get DefaultType() {
      return DefaultType$2;
    }
    static get NAME() {
      return NAME$3;
    }

    // Overrides
    _isWithContent() {
      return this._getTitle() || this._getContent();
    }

    // Private
    _getContentForTemplate() {
      return {
        [SELECTOR_TITLE]: this._getTitle(),
        [SELECTOR_CONTENT]: this._getContent()
      };
    }
    _getContent() {
      return this._resolvePossibleFunction(this._config.content);
    }

    // Static
    static jQueryInterface(config) {
      return this.each(function () {
        const data = Popover.getOrCreateInstance(this, config);
        if (typeof config !== 'string') {
          return;
        }
        if (typeof data[config] === 'undefined') {
          throw new TypeError(`No method named "${config}"`);
        }
        data[config]();
      });
    }
  }

  /**
   * jQuery
   */

  defineJQueryPlugin(Popover);

  /**
   * --------------------------------------------------------------------------
   * Bootstrap scrollspy.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */


  /**
   * Constants
   */

  const NAME$2 = 'scrollspy';
  const DATA_KEY$2 = 'bs.scrollspy';
  const EVENT_KEY$2 = `.${DATA_KEY$2}`;
  const DATA_API_KEY = '.data-api';
  const EVENT_ACTIVATE = `activate${EVENT_KEY$2}`;
  const EVENT_CLICK = `click${EVENT_KEY$2}`;
  const EVENT_LOAD_DATA_API$1 = `load${EVENT_KEY$2}${DATA_API_KEY}`;
  const CLASS_NAME_DROPDOWN_ITEM = 'dropdown-item';
  const CLASS_NAME_ACTIVE$1 = 'active';
  const SELECTOR_DATA_SPY = '[data-bs-spy="scroll"]';
  const SELECTOR_TARGET_LINKS = '[href]';
  const SELECTOR_NAV_LIST_GROUP = '.nav, .list-group';
  const SELECTOR_NAV_LINKS = '.nav-link';
  const SELECTOR_NAV_ITEMS = '.nav-item';
  const SELECTOR_LIST_ITEMS = '.list-group-item';
  const SELECTOR_LINK_ITEMS = `${SELECTOR_NAV_LINKS}, ${SELECTOR_NAV_ITEMS} > ${SELECTOR_NAV_LINKS}, ${SELECTOR_LIST_ITEMS}`;
  const SELECTOR_DROPDOWN = '.dropdown';
  const SELECTOR_DROPDOWN_TOGGLE$1 = '.dropdown-toggle';
  const Default$1 = {
    offset: null,
    // TODO: v6 @deprecated, keep it for backwards compatibility reasons
    rootMargin: '0px 0px -25%',
    smoothScroll: false,
    target: null,
    threshold: [0.1, 0.5, 1]
  };
  const DefaultType$1 = {
    offset: '(number|null)',
    // TODO v6 @deprecated, keep it for backwards compatibility reasons
    rootMargin: 'string',
    smoothScroll: 'boolean',
    target: 'element',
    threshold: 'array'
  };

  /**
   * Class definition
   */

  class ScrollSpy extends BaseComponent {
    constructor(element, config) {
      super(element, config);

      // this._element is the observablesContainer and config.target the menu links wrapper
      this._targetLinks = new Map();
      this._observableSections = new Map();
      this._rootElement = getComputedStyle(this._element).overflowY === 'visible' ? null : this._element;
      this._activeTarget = null;
      this._observer = null;
      this._previousScrollData = {
        visibleEntryTop: 0,
        parentScrollTop: 0
      };
      this.refresh(); // initialize
    }

    // Getters
    static get Default() {
      return Default$1;
    }
    static get DefaultType() {
      return DefaultType$1;
    }
    static get NAME() {
      return NAME$2;
    }

    // Public
    refresh() {
      this._initializeTargetsAndObservables();
      this._maybeEnableSmoothScroll();
      if (this._observer) {
        this._observer.disconnect();
      } else {
        this._observer = this._getNewObserver();
      }
      for (const section of this._observableSections.values()) {
        this._observer.observe(section);
      }
    }
    dispose() {
      this._observer.disconnect();
      super.dispose();
    }

    // Private
    _configAfterMerge(config) {
      // TODO: on v6 target should be given explicitly & remove the {target: 'ss-target'} case
      config.target = getElement(config.target) || document.body;

      // TODO: v6 Only for backwards compatibility reasons. Use rootMargin only
      config.rootMargin = config.offset ? `${config.offset}px 0px -30%` : config.rootMargin;
      if (typeof config.threshold === 'string') {
        config.threshold = config.threshold.split(',').map(value => Number.parseFloat(value));
      }
      return config;
    }
    _maybeEnableSmoothScroll() {
      if (!this._config.smoothScroll) {
        return;
      }

      // unregister any previous listeners
      EventHandler.off(this._config.target, EVENT_CLICK);
      EventHandler.on(this._config.target, EVENT_CLICK, SELECTOR_TARGET_LINKS, event => {
        const observableSection = this._observableSections.get(event.target.hash);
        if (observableSection) {
          event.preventDefault();
          const root = this._rootElement || window;
          const height = observableSection.offsetTop - this._element.offsetTop;
          if (root.scrollTo) {
            root.scrollTo({
              top: height,
              behavior: 'smooth'
            });
            return;
          }

          // Chrome 60 doesn't support `scrollTo`
          root.scrollTop = height;
        }
      });
    }
    _getNewObserver() {
      const options = {
        root: this._rootElement,
        threshold: this._config.threshold,
        rootMargin: this._config.rootMargin
      };
      return new IntersectionObserver(entries => this._observerCallback(entries), options);
    }

    // The logic of selection
    _observerCallback(entries) {
      const targetElement = entry => this._targetLinks.get(`#${entry.target.id}`);
      const activate = entry => {
        this._previousScrollData.visibleEntryTop = entry.target.offsetTop;
        this._process(targetElement(entry));
      };
      const parentScrollTop = (this._rootElement || document.documentElement).scrollTop;
      const userScrollsDown = parentScrollTop >= this._previousScrollData.parentScrollTop;
      this._previousScrollData.parentScrollTop = parentScrollTop;
      for (const entry of entries) {
        if (!entry.isIntersecting) {
          this._activeTarget = null;
          this._clearActiveClass(targetElement(entry));
          continue;
        }
        const entryIsLowerThanPrevious = entry.target.offsetTop >= this._previousScrollData.visibleEntryTop;
        // if we are scrolling down, pick the bigger offsetTop
        if (userScrollsDown && entryIsLowerThanPrevious) {
          activate(entry);
          // if parent isn't scrolled, let's keep the first visible item, breaking the iteration
          if (!parentScrollTop) {
            return;
          }
          continue;
        }

        // if we are scrolling up, pick the smallest offsetTop
        if (!userScrollsDown && !entryIsLowerThanPrevious) {
          activate(entry);
        }
      }
    }
    _initializeTargetsAndObservables() {
      this._targetLinks = new Map();
      this._observableSections = new Map();
      const targetLinks = SelectorEngine.find(SELECTOR_TARGET_LINKS, this._config.target);
      for (const anchor of targetLinks) {
        // ensure that the anchor has an id and is not disabled
        if (!anchor.hash || isDisabled(anchor)) {
          continue;
        }
        const observableSection = SelectorEngine.findOne(decodeURI(anchor.hash), this._element);

        // ensure that the observableSection exists & is visible
        if (isVisible(observableSection)) {
          this._targetLinks.set(decodeURI(anchor.hash), anchor);
          this._observableSections.set(anchor.hash, observableSection);
        }
      }
    }
    _process(target) {
      if (this._activeTarget === target) {
        return;
      }
      this._clearActiveClass(this._config.target);
      this._activeTarget = target;
      target.classList.add(CLASS_NAME_ACTIVE$1);
      this._activateParents(target);
      EventHandler.trigger(this._element, EVENT_ACTIVATE, {
        relatedTarget: target
      });
    }
    _activateParents(target) {
      // Activate dropdown parents
      if (target.classList.contains(CLASS_NAME_DROPDOWN_ITEM)) {
        SelectorEngine.findOne(SELECTOR_DROPDOWN_TOGGLE$1, target.closest(SELECTOR_DROPDOWN)).classList.add(CLASS_NAME_ACTIVE$1);
        return;
      }
      for (const listGroup of SelectorEngine.parents(target, SELECTOR_NAV_LIST_GROUP)) {
        // Set triggered links parents as active
        // With both <ul> and <nav> markup a parent is the previous sibling of any nav ancestor
        for (const item of SelectorEngine.prev(listGroup, SELECTOR_LINK_ITEMS)) {
          item.classList.add(CLASS_NAME_ACTIVE$1);
        }
      }
    }
    _clearActiveClass(parent) {
      parent.classList.remove(CLASS_NAME_ACTIVE$1);
      const activeNodes = SelectorEngine.find(`${SELECTOR_TARGET_LINKS}.${CLASS_NAME_ACTIVE$1}`, parent);
      for (const node of activeNodes) {
        node.classList.remove(CLASS_NAME_ACTIVE$1);
      }
    }

    // Static
    static jQueryInterface(config) {
      return this.each(function () {
        const data = ScrollSpy.getOrCreateInstance(this, config);
        if (typeof config !== 'string') {
          return;
        }
        if (data[config] === undefined || config.startsWith('_') || config === 'constructor') {
          throw new TypeError(`No method named "${config}"`);
        }
        data[config]();
      });
    }
  }

  /**
   * Data API implementation
   */

  EventHandler.on(window, EVENT_LOAD_DATA_API$1, () => {
    for (const spy of SelectorEngine.find(SELECTOR_DATA_SPY)) {
      ScrollSpy.getOrCreateInstance(spy);
    }
  });

  /**
   * jQuery
   */

  defineJQueryPlugin(ScrollSpy);

  /**
   * --------------------------------------------------------------------------
   * Bootstrap tab.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */


  /**
   * Constants
   */

  const NAME$1 = 'tab';
  const DATA_KEY$1 = 'bs.tab';
  const EVENT_KEY$1 = `.${DATA_KEY$1}`;
  const EVENT_HIDE$1 = `hide${EVENT_KEY$1}`;
  const EVENT_HIDDEN$1 = `hidden${EVENT_KEY$1}`;
  const EVENT_SHOW$1 = `show${EVENT_KEY$1}`;
  const EVENT_SHOWN$1 = `shown${EVENT_KEY$1}`;
  const EVENT_CLICK_DATA_API = `click${EVENT_KEY$1}`;
  const EVENT_KEYDOWN = `keydown${EVENT_KEY$1}`;
  const EVENT_LOAD_DATA_API = `load${EVENT_KEY$1}`;
  const ARROW_LEFT_KEY = 'ArrowLeft';
  const ARROW_RIGHT_KEY = 'ArrowRight';
  const ARROW_UP_KEY = 'ArrowUp';
  const ARROW_DOWN_KEY = 'ArrowDown';
  const HOME_KEY = 'Home';
  const END_KEY = 'End';
  const CLASS_NAME_ACTIVE = 'active';
  const CLASS_NAME_FADE$1 = 'fade';
  const CLASS_NAME_SHOW$1 = 'show';
  const CLASS_DROPDOWN = 'dropdown';
  const SELECTOR_DROPDOWN_TOGGLE = '.dropdown-toggle';
  const SELECTOR_DROPDOWN_MENU = '.dropdown-menu';
  const NOT_SELECTOR_DROPDOWN_TOGGLE = `:not(${SELECTOR_DROPDOWN_TOGGLE})`;
  const SELECTOR_TAB_PANEL = '.list-group, .nav, [role="tablist"]';
  const SELECTOR_OUTER = '.nav-item, .list-group-item';
  const SELECTOR_INNER = `.nav-link${NOT_SELECTOR_DROPDOWN_TOGGLE}, .list-group-item${NOT_SELECTOR_DROPDOWN_TOGGLE}, [role="tab"]${NOT_SELECTOR_DROPDOWN_TOGGLE}`;
  const SELECTOR_DATA_TOGGLE = '[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]'; // TODO: could only be `tab` in v6
  const SELECTOR_INNER_ELEM = `${SELECTOR_INNER}, ${SELECTOR_DATA_TOGGLE}`;
  const SELECTOR_DATA_TOGGLE_ACTIVE = `.${CLASS_NAME_ACTIVE}[data-bs-toggle="tab"], .${CLASS_NAME_ACTIVE}[data-bs-toggle="pill"], .${CLASS_NAME_ACTIVE}[data-bs-toggle="list"]`;

  /**
   * Class definition
   */

  class Tab extends BaseComponent {
    constructor(element) {
      super(element);
      this._parent = this._element.closest(SELECTOR_TAB_PANEL);
      if (!this._parent) {
        return;
        // TODO: should throw exception in v6
        // throw new TypeError(`${element.outerHTML} has not a valid parent ${SELECTOR_INNER_ELEM}`)
      }

      // Set up initial aria attributes
      this._setInitialAttributes(this._parent, this._getChildren());
      EventHandler.on(this._element, EVENT_KEYDOWN, event => this._keydown(event));
    }

    // Getters
    static get NAME() {
      return NAME$1;
    }

    // Public
    show() {
      // Shows this elem and deactivate the active sibling if exists
      const innerElem = this._element;
      if (this._elemIsActive(innerElem)) {
        return;
      }

      // Search for active tab on same parent to deactivate it
      const active = this._getActiveElem();
      const hideEvent = active ? EventHandler.trigger(active, EVENT_HIDE$1, {
        relatedTarget: innerElem
      }) : null;
      const showEvent = EventHandler.trigger(innerElem, EVENT_SHOW$1, {
        relatedTarget: active
      });
      if (showEvent.defaultPrevented || hideEvent && hideEvent.defaultPrevented) {
        return;
      }
      this._deactivate(active, innerElem);
      this._activate(innerElem, active);
    }

    // Private
    _activate(element, relatedElem) {
      if (!element) {
        return;
      }
      element.classList.add(CLASS_NAME_ACTIVE);
      this._activate(SelectorEngine.getElementFromSelector(element)); // Search and activate/show the proper section

      const complete = () => {
        if (element.getAttribute('role') !== 'tab') {
          element.classList.add(CLASS_NAME_SHOW$1);
          return;
        }
        element.removeAttribute('tabindex');
        element.setAttribute('aria-selected', true);
        this._toggleDropDown(element, true);
        EventHandler.trigger(element, EVENT_SHOWN$1, {
          relatedTarget: relatedElem
        });
      };
      this._queueCallback(complete, element, element.classList.contains(CLASS_NAME_FADE$1));
    }
    _deactivate(element, relatedElem) {
      if (!element) {
        return;
      }
      element.classList.remove(CLASS_NAME_ACTIVE);
      element.blur();
      this._deactivate(SelectorEngine.getElementFromSelector(element)); // Search and deactivate the shown section too

      const complete = () => {
        if (element.getAttribute('role') !== 'tab') {
          element.classList.remove(CLASS_NAME_SHOW$1);
          return;
        }
        element.setAttribute('aria-selected', false);
        element.setAttribute('tabindex', '-1');
        this._toggleDropDown(element, false);
        EventHandler.trigger(element, EVENT_HIDDEN$1, {
          relatedTarget: relatedElem
        });
      };
      this._queueCallback(complete, element, element.classList.contains(CLASS_NAME_FADE$1));
    }
    _keydown(event) {
      if (![ARROW_LEFT_KEY, ARROW_RIGHT_KEY, ARROW_UP_KEY, ARROW_DOWN_KEY, HOME_KEY, END_KEY].includes(event.key)) {
        return;
      }
      event.stopPropagation(); // stopPropagation/preventDefault both added to support up/down keys without scrolling the page
      event.preventDefault();
      const children = this._getChildren().filter(element => !isDisabled(element));
      let nextActiveElement;
      if ([HOME_KEY, END_KEY].includes(event.key)) {
        nextActiveElement = children[event.key === HOME_KEY ? 0 : children.length - 1];
      } else {
        const isNext = [ARROW_RIGHT_KEY, ARROW_DOWN_KEY].includes(event.key);
        nextActiveElement = getNextActiveElement(children, event.target, isNext, true);
      }
      if (nextActiveElement) {
        nextActiveElement.focus({
          preventScroll: true
        });
        Tab.getOrCreateInstance(nextActiveElement).show();
      }
    }
    _getChildren() {
      // collection of inner elements
      return SelectorEngine.find(SELECTOR_INNER_ELEM, this._parent);
    }
    _getActiveElem() {
      return this._getChildren().find(child => this._elemIsActive(child)) || null;
    }
    _setInitialAttributes(parent, children) {
      this._setAttributeIfNotExists(parent, 'role', 'tablist');
      for (const child of children) {
        this._setInitialAttributesOnChild(child);
      }
    }
    _setInitialAttributesOnChild(child) {
      child = this._getInnerElement(child);
      const isActive = this._elemIsActive(child);
      const outerElem = this._getOuterElement(child);
      child.setAttribute('aria-selected', isActive);
      if (outerElem !== child) {
        this._setAttributeIfNotExists(outerElem, 'role', 'presentation');
      }
      if (!isActive) {
        child.setAttribute('tabindex', '-1');
      }
      this._setAttributeIfNotExists(child, 'role', 'tab');

      // set attributes to the related panel too
      this._setInitialAttributesOnTargetPanel(child);
    }
    _setInitialAttributesOnTargetPanel(child) {
      const target = SelectorEngine.getElementFromSelector(child);
      if (!target) {
        return;
      }
      this._setAttributeIfNotExists(target, 'role', 'tabpanel');
      if (child.id) {
        this._setAttributeIfNotExists(target, 'aria-labelledby', `${child.id}`);
      }
    }
    _toggleDropDown(element, open) {
      const outerElem = this._getOuterElement(element);
      if (!outerElem.classList.contains(CLASS_DROPDOWN)) {
        return;
      }
      const toggle = (selector, className) => {
        const element = SelectorEngine.findOne(selector, outerElem);
        if (element) {
          element.classList.toggle(className, open);
        }
      };
      toggle(SELECTOR_DROPDOWN_TOGGLE, CLASS_NAME_ACTIVE);
      toggle(SELECTOR_DROPDOWN_MENU, CLASS_NAME_SHOW$1);
      outerElem.setAttribute('aria-expanded', open);
    }
    _setAttributeIfNotExists(element, attribute, value) {
      if (!element.hasAttribute(attribute)) {
        element.setAttribute(attribute, value);
      }
    }
    _elemIsActive(elem) {
      return elem.classList.contains(CLASS_NAME_ACTIVE);
    }

    // Try to get the inner element (usually the .nav-link)
    _getInnerElement(elem) {
      return elem.matches(SELECTOR_INNER_ELEM) ? elem : SelectorEngine.findOne(SELECTOR_INNER_ELEM, elem);
    }

    // Try to get the outer element (usually the .nav-item)
    _getOuterElement(elem) {
      return elem.closest(SELECTOR_OUTER) || elem;
    }

    // Static
    static jQueryInterface(config) {
      return this.each(function () {
        const data = Tab.getOrCreateInstance(this);
        if (typeof config !== 'string') {
          return;
        }
        if (data[config] === undefined || config.startsWith('_') || config === 'constructor') {
          throw new TypeError(`No method named "${config}"`);
        }
        data[config]();
      });
    }
  }

  /**
   * Data API implementation
   */

  EventHandler.on(document, EVENT_CLICK_DATA_API, SELECTOR_DATA_TOGGLE, function (event) {
    if (['A', 'AREA'].includes(this.tagName)) {
      event.preventDefault();
    }
    if (isDisabled(this)) {
      return;
    }
    Tab.getOrCreateInstance(this).show();
  });

  /**
   * Initialize on focus
   */
  EventHandler.on(window, EVENT_LOAD_DATA_API, () => {
    for (const element of SelectorEngine.find(SELECTOR_DATA_TOGGLE_ACTIVE)) {
      Tab.getOrCreateInstance(element);
    }
  });
  /**
   * jQuery
   */

  defineJQueryPlugin(Tab);

  /**
   * --------------------------------------------------------------------------
   * Bootstrap toast.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */


  /**
   * Constants
   */

  const NAME = 'toast';
  const DATA_KEY = 'bs.toast';
  const EVENT_KEY = `.${DATA_KEY}`;
  const EVENT_MOUSEOVER = `mouseover${EVENT_KEY}`;
  const EVENT_MOUSEOUT = `mouseout${EVENT_KEY}`;
  const EVENT_FOCUSIN = `focusin${EVENT_KEY}`;
  const EVENT_FOCUSOUT = `focusout${EVENT_KEY}`;
  const EVENT_HIDE = `hide${EVENT_KEY}`;
  const EVENT_HIDDEN = `hidden${EVENT_KEY}`;
  const EVENT_SHOW = `show${EVENT_KEY}`;
  const EVENT_SHOWN = `shown${EVENT_KEY}`;
  const CLASS_NAME_FADE = 'fade';
  const CLASS_NAME_HIDE = 'hide'; // @deprecated - kept here only for backwards compatibility
  const CLASS_NAME_SHOW = 'show';
  const CLASS_NAME_SHOWING = 'showing';
  const DefaultType = {
    animation: 'boolean',
    autohide: 'boolean',
    delay: 'number'
  };
  const Default = {
    animation: true,
    autohide: true,
    delay: 5000
  };

  /**
   * Class definition
   */

  class Toast extends BaseComponent {
    constructor(element, config) {
      super(element, config);
      this._timeout = null;
      this._hasMouseInteraction = false;
      this._hasKeyboardInteraction = false;
      this._setListeners();
    }

    // Getters
    static get Default() {
      return Default;
    }
    static get DefaultType() {
      return DefaultType;
    }
    static get NAME() {
      return NAME;
    }

    // Public
    show() {
      const showEvent = EventHandler.trigger(this._element, EVENT_SHOW);
      if (showEvent.defaultPrevented) {
        return;
      }
      this._clearTimeout();
      if (this._config.animation) {
        this._element.classList.add(CLASS_NAME_FADE);
      }
      const complete = () => {
        this._element.classList.remove(CLASS_NAME_SHOWING);
        EventHandler.trigger(this._element, EVENT_SHOWN);
        this._maybeScheduleHide();
      };
      this._element.classList.remove(CLASS_NAME_HIDE); // @deprecated
      reflow(this._element);
      this._element.classList.add(CLASS_NAME_SHOW, CLASS_NAME_SHOWING);
      this._queueCallback(complete, this._element, this._config.animation);
    }
    hide() {
      if (!this.isShown()) {
        return;
      }
      const hideEvent = EventHandler.trigger(this._element, EVENT_HIDE);
      if (hideEvent.defaultPrevented) {
        return;
      }
      const complete = () => {
        this._element.classList.add(CLASS_NAME_HIDE); // @deprecated
        this._element.classList.remove(CLASS_NAME_SHOWING, CLASS_NAME_SHOW);
        EventHandler.trigger(this._element, EVENT_HIDDEN);
      };
      this._element.classList.add(CLASS_NAME_SHOWING);
      this._queueCallback(complete, this._element, this._config.animation);
    }
    dispose() {
      this._clearTimeout();
      if (this.isShown()) {
        this._element.classList.remove(CLASS_NAME_SHOW);
      }
      super.dispose();
    }
    isShown() {
      return this._element.classList.contains(CLASS_NAME_SHOW);
    }

    // Private

    _maybeScheduleHide() {
      if (!this._config.autohide) {
        return;
      }
      if (this._hasMouseInteraction || this._hasKeyboardInteraction) {
        return;
      }
      this._timeout = setTimeout(() => {
        this.hide();
      }, this._config.delay);
    }
    _onInteraction(event, isInteracting) {
      switch (event.type) {
        case 'mouseover':
        case 'mouseout':
          {
            this._hasMouseInteraction = isInteracting;
            break;
          }
        case 'focusin':
        case 'focusout':
          {
            this._hasKeyboardInteraction = isInteracting;
            break;
          }
      }
      if (isInteracting) {
        this._clearTimeout();
        return;
      }
      const nextElement = event.relatedTarget;
      if (this._element === nextElement || this._element.contains(nextElement)) {
        return;
      }
      this._maybeScheduleHide();
    }
    _setListeners() {
      EventHandler.on(this._element, EVENT_MOUSEOVER, event => this._onInteraction(event, true));
      EventHandler.on(this._element, EVENT_MOUSEOUT, event => this._onInteraction(event, false));
      EventHandler.on(this._element, EVENT_FOCUSIN, event => this._onInteraction(event, true));
      EventHandler.on(this._element, EVENT_FOCUSOUT, event => this._onInteraction(event, false));
    }
    _clearTimeout() {
      clearTimeout(this._timeout);
      this._timeout = null;
    }

    // Static
    static jQueryInterface(config) {
      return this.each(function () {
        const data = Toast.getOrCreateInstance(this, config);
        if (typeof config === 'string') {
          if (typeof data[config] === 'undefined') {
            throw new TypeError(`No method named "${config}"`);
          }
          data[config](this);
        }
      });
    }
  }

  /**
   * Data API implementation
   */

  enableDismissTrigger(Toast);

  /**
   * jQuery
   */

  defineJQueryPlugin(Toast);

  /**
   * --------------------------------------------------------------------------
   * Bootstrap index.umd.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */

  const index_umd = {
    Alert,
    Button,
    Carousel,
    Collapse,
    Dropdown,
    Modal,
    Offcanvas,
    Popover,
    ScrollSpy,
    Tab,
    Toast,
    Tooltip
  };

  return index_umd;

}));
//# sourceMappingURL=bootstrap.js.map

// bootstrap-notify.min
/* ======================== bootstrap-notify.min.js ===================== */ !(function (t) {
    "function" == typeof define && define.amd ?
    define(["jquery"], t) :
    t("object" == typeof exports ? require("jquery") : jQuery);
})(function (t) {
  function s(s) {
    var e = !1;
    return (
      t('[data-notify="container"]').each(function (i, n) {
        var a = t(n),
          o = a.find('[data-notify="title"]').text().trim(),
          r = a.find('[data-notify="message"]').html().trim(),
          l =
          o ===
          t("<div>" + s.settings.content.title + "</div>")
          .html()
          .trim(),
          d =
          r ===
          t("<div>" + s.settings.content.message + "</div>")
          .html()
          .trim(),
          g = a.hasClass("alert-" + s.settings.type);
        return l && d && g && (e = !0), !e;
      }),
      e
    );
  }

  function e(e, n, a) {
    var o = {
      content: {
        message: "object" == typeof n ? n.message : n,
        title: n.title ? n.title : "",
        icon: n.icon ? n.icon : "",
        url: n.url ? n.url : "#",
        target: n.target ? n.target : "-",
      },
    };
    (a = t.extend(!0, {}, o, a)),
    (this.settings = t.extend(!0, {}, i, a)),
    (this._defaults = i),
    "-" === this.settings.content.target &&
      (this.settings.content.target = this.settings.url_target),
      (this.animations = {
        start: "webkitAnimationStart oanimationstart MSAnimationStart animationstart",
        end: "webkitAnimationEnd oanimationend MSAnimationEnd animationend",
      }),
      "number" == typeof this.settings.offset &&
      (this.settings.offset = {
        x: this.settings.offset,
        y: this.settings.offset,
      }),
      (this.settings.allow_duplicates ||
        (!this.settings.allow_duplicates && !s(this))) &&
      this.init();
  }
  var i = {
    element: "body",
    position: null,
    type: "info",
    allow_dismiss: !0,
    allow_duplicates: !0,
    newest_on_top: !1,
    showProgressbar: !1,
    placement: {
      from: "top",
      align: "right"
    },
    offset: 20,
    spacing: 10,
    z_index: 1031,
    delay: 5e3,
    timer: 1e3,
    url_target: "_blank",
    mouse_over: null,
    animate: {
      enter: "animated fadeInDown",
      exit: "animated fadeOutUp"
    },
    onShow: null,
    onShown: null,
    onClose: null,
    onClosed: null,
    icon_type: "class",
    template: '<div data-notify="container" class="col-xs-11 col-sm-4 alert alert-{0}" role="alert"><button type="button" aria-hidden="true" class="btn-close" data-notify="dismiss"></button><span data-notify="icon"></span> <span data-notify="title">{1}</span> <span data-notify="message">{2}</span><div class="progress" data-notify="progressbar"><div class="progress-bar progress-bar-{0}" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width: 0%;"></div></div><a href="{3}" target="{4}" data-notify="url"></a></div>',
  };
  (String.format = function () {
    for (var t = arguments[0], s = 1; s < arguments.length; s++)
      t = t.replace(RegExp("\\{" + (s - 1) + "\\}", "gm"), arguments[s]);
    return t;
  }),
  t.extend(e.prototype, {
      init: function () {
        var t = this;
        this.buildNotify(),
          this.settings.content.icon && this.setIcon(),
          "#" != this.settings.content.url && this.styleURL(),
          this.styleDismiss(),
          this.placement(),
          this.bind(),
          (this.notify = {
            $ele: this.$ele,
            update: function (s, e) {
              var i = {};
              "string" == typeof s ? (i[s] = e) : (i = s);
              for (var n in i)
                switch (n) {
                  case "type":
                    this.$ele.removeClass("alert-" + t.settings.type),
                      this.$ele
                      .find('[data-notify="progressbar"] > .progress-bar')
                      .removeClass("progress-bar-" + t.settings.type),
                      (t.settings.type = i[n]),
                      this.$ele
                      .addClass("alert-" + i[n])
                      .find('[data-notify="progressbar"] > .progress-bar')
                      .addClass("progress-bar-" + i[n]);
                    break;
                  case "icon":
                    var a = this.$ele.find('[data-notify="icon"]');
                    "class" === t.settings.icon_type.toLowerCase() ?
                      a.removeClass(t.settings.content.icon).addClass(i[n]) :
                      (a.is("img") || a.find("img"), a.attr("src", i[n]));
                    break;
                  case "progress":
                    var o = t.settings.delay - t.settings.delay * (i[n] / 100);
                    this.$ele.data("notify-delay", o),
                      this.$ele
                      .find('[data-notify="progressbar"] > div')
                      .attr("aria-valuenow", i[n])
                      .css("width", i[n] + "%");
                    break;
                  case "url":
                    this.$ele.find('[data-notify="url"]').attr("href", i[n]);
                    break;
                  case "target":
                    this.$ele.find('[data-notify="url"]').attr("target", i[n]);
                    break;
                  default:
                    this.$ele.find('[data-notify="' + n + '"]').html(i[n]);
                }
              var r =
                this.$ele.outerHeight() +
                parseInt(t.settings.spacing) +
                parseInt(t.settings.offset.y);
              t.reposition(r);
            },
            close: function () {
              t.close();
            },
          });
      },
      buildNotify: function () {
        var s = this.settings.content;
        (this.$ele = t(
          String.format(
            this.settings.template,
            this.settings.type,
            s.title,
            s.message,
            s.url,
            s.target
          )
        )),
        this.$ele.attr(
            "data-notify-position",
            this.settings.placement.from + "-" + this.settings.placement.align
          ),
          this.settings.allow_dismiss ||
          this.$ele.find('[data-notify="dismiss"]').css("display", "none"),
          ((this.settings.delay <= 0 && !this.settings.showProgressbar) ||
            !this.settings.showProgressbar) &&
          this.$ele.find('[data-notify="progressbar"]').remove();
      },
      setIcon: function () {
        "class" === this.settings.icon_type.toLowerCase() ?
          this.$ele
          .find('[data-notify="icon"]')
          .addClass(this.settings.content.icon) :
          this.$ele.find('[data-notify="icon"]').is("img") ?
          this.$ele
          .find('[data-notify="icon"]')
          .attr("src", this.settings.content.icon) :
          this.$ele
          .find('[data-notify="icon"]')
          .append(
            '<img src="' +
            this.settings.content.icon +
            '" alt="Notify Icon" />'
          );
      },
      styleDismiss: function () {
        this.$ele
          .find('[data-notify="dismiss"]')
          .css({
            position: "absolute",
            right: "10px",
            top: "5px",
            zIndex: this.settings.z_index + 2,
          });
      },
      styleURL: function () {
        this.$ele
          .find('[data-notify="url"]')
          .css({
            backgroundImage: "url(data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7)",
            height: "100%",
            left: 0,
            position: "absolute",
            top: 0,
            width: "100%",
            zIndex: this.settings.z_index + 1,
          });
      },
      placement: function () {
        var s = this,
          e = this.settings.offset.y,
          i = {
            display: "inline-block",
            margin: "0px auto",
            position: this.settings.position ?
              this.settings.position : "body" === this.settings.element ?
              "fixed" : "absolute",
            transition: "all .5s ease-in-out",
            zIndex: this.settings.z_index,
          },
          n = !1,
          a = this.settings;
        switch (
          (t(
              '[data-notify-position="' +
              this.settings.placement.from +
              "-" +
              this.settings.placement.align +
              '"]:not([data-closing="true"])'
            ).each(function () {
              e = Math.max(
                e,
                parseInt(t(this).css(a.placement.from)) +
                parseInt(t(this).outerHeight()) +
                parseInt(a.spacing)
              );
            }),
            this.settings.newest_on_top === !0 && (e = this.settings.offset.y),
            (i[this.settings.placement.from] = e + "px"),
            this.settings.placement.align)
        ) {
          case "left":
          case "right":
            i[this.settings.placement.align] = this.settings.offset.x + "px";
            break;
          case "center":
            (i.left = 0), (i.right = 0);
        }
        this.$ele.css(i).addClass(this.settings.animate.enter),
          t.each(Array("webkit-", "moz-", "o-", "ms-", ""), function (t, e) {
            s.$ele[0].style[e + "AnimationIterationCount"] = 1;
          }),
          t(this.settings.element).append(this.$ele),
          this.settings.newest_on_top === !0 &&
          ((e =
              parseInt(e) +
              parseInt(this.settings.spacing) +
              this.$ele.outerHeight()),
            this.reposition(e)),
          t.isFunction(s.settings.onShow) && s.settings.onShow.call(this.$ele),
          this.$ele
          .one(this.animations.start, function () {
            n = !0;
          })
          .one(this.animations.end, function () {
            s.$ele.removeClass(s.settings.animate.enter),
              t.isFunction(s.settings.onShown) &&
              s.settings.onShown.call(this);
          }),
          setTimeout(function () {
            n ||
              (t.isFunction(s.settings.onShown) &&
                s.settings.onShown.call(this));
          }, 600);
      },
      bind: function () {
        var s = this;
        if (
          (this.$ele.find('[data-notify="dismiss"]').on("click", function () {
              s.close();
            }),
            this.$ele
            .mouseover(function () {
              t(this).data("data-hover", "true");
            })
            .mouseout(function () {
              t(this).data("data-hover", "false");
            }),
            this.$ele.data("data-hover", "false"),
            this.settings.delay > 0)
        ) {
          s.$ele.data("notify-delay", s.settings.delay);
          var e = setInterval(function () {
            var t = parseInt(s.$ele.data("notify-delay")) - s.settings.timer;
            if (
              ("false" === s.$ele.data("data-hover") &&
                "pause" === s.settings.mouse_over) ||
              "pause" != s.settings.mouse_over
            ) {
              var i = ((s.settings.delay - t) / s.settings.delay) * 100;
              s.$ele.data("notify-delay", t),
                s.$ele
                .find('[data-notify="progressbar"] > div')
                .attr("aria-valuenow", i)
                .css("width", i + "%");
            }
            t <= -s.settings.timer && (clearInterval(e), s.close());
          }, s.settings.timer);
        }
      },
      close: function () {
        var s = this,
          e = parseInt(this.$ele.css(this.settings.placement.from)),
          i = !1;
        this.$ele
          .attr("data-closing", "true")
          .addClass(this.settings.animate.exit),
          s.reposition(e),
          t.isFunction(s.settings.onClose) &&
          s.settings.onClose.call(this.$ele),
          this.$ele
          .one(this.animations.start, function () {
            i = !0;
          })
          .one(this.animations.end, function () {
            t(this).remove(),
              t.isFunction(s.settings.onClosed) &&
              s.settings.onClosed.call(this);
          }),
          setTimeout(function () {
            i ||
              (s.$ele.remove(),
                s.settings.onClosed && s.settings.onClosed(s.$ele));
          }, 600);
      },
      reposition: function (s) {
        var e = this,
          i =
          '[data-notify-position="' +
          this.settings.placement.from +
          "-" +
          this.settings.placement.align +
          '"]:not([data-closing="true"])',
          n = this.$ele.nextAll(i);
        this.settings.newest_on_top === !0 && (n = this.$ele.prevAll(i)),
          n.each(function () {
            t(this).css(e.settings.placement.from, s),
              (s =
                parseInt(s) +
                parseInt(e.settings.spacing) +
                t(this).outerHeight());
          });
      },
    }),
    (t.notify = function (t, s) {
      var i = new e(this, t, s);
      return i.notify;
    }),
    (t.notifyDefaults = function (s) {
      return (i = t.extend(!0, {}, i, s));
    }),
    (t.notifyClose = function (s) {
      "warning" === s && (s = "danger"),
        "undefined" == typeof s || "all" === s ?
        t("[data-notify]").find('[data-notify="dismiss"]').trigger("click") :
        "success" === s || "info" === s || "warning" === s || "danger" === s ?
        t(".alert-" + s + "[data-notify]")
        .find('[data-notify="dismiss"]')
        .trigger("click") :
        s ?
        t(s + "[data-notify]")
        .find('[data-notify="dismiss"]')
        .trigger("click") :
        t('[data-notify-position="' + s + '"]')
        .find('[data-notify="dismiss"]')
        .trigger("click");
    }),
    (t.notifyCloseExcept = function (s) {
      "warning" === s && (s = "danger"),
        "success" === s || "info" === s || "warning" === s || "danger" === s ?
        t("[data-notify]")
        .not(".alert-" + s)
        .find('[data-notify="dismiss"]')
        .trigger("click") :
        t("[data-notify]")
        .not(s)
        .find('[data-notify="dismiss"]')
        .trigger("click");
    });
});

//bootstrap.bundle.min
/*!
 * Bootstrap v5.0.1 (https://getbootstrap.com/)
 * Copyright 2011-2021 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 */
! function (t, e) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : (t = "undefined" != typeof globalThis ? globalThis : t || self).bootstrap = e()
  }(this, (function () {
    "use strict";
    const t = {
        find: (t, e = document.documentElement) => [].concat(...Element.prototype.querySelectorAll.call(e, t)),
        findOne: (t, e = document.documentElement) => Element.prototype.querySelector.call(e, t),
        children: (t, e) => [].concat(...t.children).filter(t => t.matches(e)),
        parents(t, e) {
          const i = [];
          let n = t.parentNode;
          for (; n && n.nodeType === Node.ELEMENT_NODE && 3 !== n.nodeType;) n.matches(e) && i.push(n), n = n.parentNode;
          return i
        },
        prev(t, e) {
          let i = t.previousElementSibling;
          for (; i;) {
            if (i.matches(e)) return [i];
            i = i.previousElementSibling
          }
          return []
        },
        next(t, e) {
          let i = t.nextElementSibling;
          for (; i;) {
            if (i.matches(e)) return [i];
            i = i.nextElementSibling
          }
          return []
        }
      },
      e = t => {
        do {
          t += Math.floor(1e6 * Math.random())
        } while (document.getElementById(t));
        return t
      },
      i = t => {
        let e = t.getAttribute("data-bs-target");
        if (!e || "#" === e) {
          let i = t.getAttribute("href");
          if (!i || !i.includes("#") && !i.startsWith(".")) return null;
          i.includes("#") && !i.startsWith("#") && (i = "#" + i.split("#")[1]), e = i && "#" !== i ? i.trim() : null
        }
        return e
      },
      n = t => {
        const e = i(t);
        return e && document.querySelector(e) ? e : null
      },
      s = t => {
        const e = i(t);
        return e ? document.querySelector(e) : null
      },
      o = t => {
        if (!t) return 0;
        let {
          transitionDuration: e,
          transitionDelay: i
        } = window.getComputedStyle(t);
        const n = Number.parseFloat(e),
          s = Number.parseFloat(i);
        return n || s ? (e = e.split(",")[0], i = i.split(",")[0], 1e3 * (Number.parseFloat(e) + Number.parseFloat(i))) : 0
      },
      r = t => {
        t.dispatchEvent(new Event("transitionend"))
      },
      a = t => !(!t || "object" != typeof t) && (void 0 !== t.jquery && (t = t[0]), void 0 !== t.nodeType),
      l = e => a(e) ? e.jquery ? e[0] : e : "string" == typeof e && e.length > 0 ? t.findOne(e) : null,
      c = (t, e) => {
        let i = !1;
        const n = e + 5;
        t.addEventListener("transitionend", (function e() {
          i = !0, t.removeEventListener("transitionend", e)
        })), setTimeout(() => {
          i || r(t)
        }, n)
      },
      d = (t, e, i) => {
        Object.keys(i).forEach(n => {
          const s = i[n],
            o = e[n],
            r = o && a(o) ? "element" : null == (l = o) ? "" + l : {}.toString.call(l).match(/\s([a-z]+)/i)[1].toLowerCase();
          var l;
          if (!new RegExp(s).test(r)) throw new TypeError(`${t.toUpperCase()}: Option "${n}" provided type "${r}" but expected type "${s}".`)
        })
      },
      h = t => {
        if (!t) return !1;
        if (t.style && t.parentNode && t.parentNode.style) {
          const e = getComputedStyle(t),
            i = getComputedStyle(t.parentNode);
          return "none" !== e.display && "none" !== i.display && "hidden" !== e.visibility
        }
        return !1
      },
      u = t => !t || t.nodeType !== Node.ELEMENT_NODE || !!t.classList.contains("disabled") || (void 0 !== t.disabled ? t.disabled : t.hasAttribute("disabled") && "false" !== t.getAttribute("disabled")),
      f = t => {
        if (!document.documentElement.attachShadow) return null;
        if ("function" == typeof t.getRootNode) {
          const e = t.getRootNode();
          return e instanceof ShadowRoot ? e : null
        }
        return t instanceof ShadowRoot ? t : t.parentNode ? f(t.parentNode) : null
      },
      p = () => {},
      m = t => t.offsetHeight,
      g = () => {
        const {
          jQuery: t
        } = window;
        return t && !document.body.hasAttribute("data-bs-no-jquery") ? t : null
      },
      _ = () => "rtl" === document.documentElement.dir,
      b = t => {
        var e;
        e = () => {
          const e = g();
          if (e) {
            const i = t.NAME,
              n = e.fn[i];
            e.fn[i] = t.jQueryInterface, e.fn[i].Constructor = t, e.fn[i].noConflict = () => (e.fn[i] = n, t.jQueryInterface)
          }
        }, "loading" === document.readyState ? document.addEventListener("DOMContentLoaded", e) : e()
      },
      v = t => {
        "function" == typeof t && t()
      },
      y = new Map;
    var w = {
      set(t, e, i) {
        y.has(t) || y.set(t, new Map);
        const n = y.get(t);
        n.has(e) || 0 === n.size ? n.set(e, i) : console.error(`Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(n.keys())[0]}.`)
      },
      get: (t, e) => y.has(t) && y.get(t).get(e) || null,
      remove(t, e) {
        if (!y.has(t)) return;
        const i = y.get(t);
        i.delete(e), 0 === i.size && y.delete(t)
      }
    };
    const E = /[^.]*(?=\..*)\.|.*/,
      T = /\..*/,
      A = /::\d+$/,
      L = {};
    let O = 1;
    const k = {
        mouseenter: "mouseover",
        mouseleave: "mouseout"
      },
      C = /^(mouseenter|mouseleave)/i,
      x = new Set(["click", "dblclick", "mouseup", "mousedown", "contextmenu", "mousewheel", "DOMMouseScroll", "mouseover", "mouseout", "mousemove", "selectstart", "selectend", "keydown", "keypress", "keyup", "orientationchange", "touchstart", "touchmove", "touchend", "touchcancel", "pointerdown", "pointermove", "pointerup", "pointerleave", "pointercancel", "gesturestart", "gesturechange", "gestureend", "focus", "blur", "change", "reset", "select", "submit", "focusin", "focusout", "load", "unload", "beforeunload", "resize", "move", "DOMContentLoaded", "readystatechange", "error", "abort", "scroll"]);

    function D(t, e) {
      return e && `${e}::${O++}` || t.uidEvent || O++
    }

    function N(t) {
      const e = D(t);
      return t.uidEvent = e, L[e] = L[e] || {}, L[e]
    }

    function S(t, e, i = null) {
      const n = Object.keys(t);
      for (let s = 0, o = n.length; s < o; s++) {
        const o = t[n[s]];
        if (o.originalHandler === e && o.delegationSelector === i) return o
      }
      return null
    }

    function I(t, e, i) {
      const n = "string" == typeof e,
        s = n ? i : e;
      let o = M(t);
      return x.has(o) || (o = t), [n, s, o]
    }

    function j(t, e, i, n, s) {
      if ("string" != typeof e || !t) return;
      if (i || (i = n, n = null), C.test(e)) {
        const t = t => function (e) {
          if (!e.relatedTarget || e.relatedTarget !== e.delegateTarget && !e.delegateTarget.contains(e.relatedTarget)) return t.call(this, e)
        };
        n ? n = t(n) : i = t(i)
      }
      const [o, r, a] = I(e, i, n), l = N(t), c = l[a] || (l[a] = {}), d = S(c, r, o ? i : null);
      if (d) return void(d.oneOff = d.oneOff && s);
      const h = D(r, e.replace(E, "")),
        u = o ? function (t, e, i) {
          return function n(s) {
            const o = t.querySelectorAll(e);
            for (let {
                target: r
              } = s; r && r !== this; r = r.parentNode)
              for (let a = o.length; a--;)
                if (o[a] === r) return s.delegateTarget = r, n.oneOff && H.off(t, s.type, e, i), i.apply(r, [s]);
            return null
          }
        }(t, i, n) : function (t, e) {
          return function i(n) {
            return n.delegateTarget = t, i.oneOff && H.off(t, n.type, e), e.apply(t, [n])
          }
        }(t, i);
      u.delegationSelector = o ? i : null, u.originalHandler = r, u.oneOff = s, u.uidEvent = h, c[h] = u, t.addEventListener(a, u, o)
    }

    function P(t, e, i, n, s) {
      const o = S(e[i], n, s);
      o && (t.removeEventListener(i, o, Boolean(s)), delete e[i][o.uidEvent])
    }

    function M(t) {
      return t = t.replace(T, ""), k[t] || t
    }
    const H = {
      on(t, e, i, n) {
        j(t, e, i, n, !1)
      },
      one(t, e, i, n) {
        j(t, e, i, n, !0)
      },
      off(t, e, i, n) {
        if ("string" != typeof e || !t) return;
        const [s, o, r] = I(e, i, n), a = r !== e, l = N(t), c = e.startsWith(".");
        if (void 0 !== o) {
          if (!l || !l[r]) return;
          return void P(t, l, r, o, s ? i : null)
        }
        c && Object.keys(l).forEach(i => {
          ! function (t, e, i, n) {
            const s = e[i] || {};
            Object.keys(s).forEach(o => {
              if (o.includes(n)) {
                const n = s[o];
                P(t, e, i, n.originalHandler, n.delegationSelector)
              }
            })
          }(t, l, i, e.slice(1))
        });
        const d = l[r] || {};
        Object.keys(d).forEach(i => {
          const n = i.replace(A, "");
          if (!a || e.includes(n)) {
            const e = d[i];
            P(t, l, r, e.originalHandler, e.delegationSelector)
          }
        })
      },
      trigger(t, e, i) {
        if ("string" != typeof e || !t) return null;
        const n = g(),
          s = M(e),
          o = e !== s,
          r = x.has(s);
        let a, l = !0,
          c = !0,
          d = !1,
          h = null;
        return o && n && (a = n.Event(e, i), n(t).trigger(a), l = !a.isPropagationStopped(), c = !a.isImmediatePropagationStopped(), d = a.isDefaultPrevented()), r ? (h = document.createEvent("HTMLEvents"), h.initEvent(s, l, !0)) : h = new CustomEvent(e, {
          bubbles: l,
          cancelable: !0
        }), void 0 !== i && Object.keys(i).forEach(t => {
          Object.defineProperty(h, t, {
            get: () => i[t]
          })
        }), d && h.preventDefault(), c && t.dispatchEvent(h), h.defaultPrevented && void 0 !== a && a.preventDefault(), h
      }
    };
    class R {
      constructor(t) {
        (t = l(t)) && (this._element = t, w.set(this._element, this.constructor.DATA_KEY, this))
      }
      dispose() {
        w.remove(this._element, this.constructor.DATA_KEY), H.off(this._element, this.constructor.EVENT_KEY), Object.getOwnPropertyNames(this).forEach(t => {
          this[t] = null
        })
      }
      _queueCallback(t, e, i = !0) {
        if (!i) return void v(t);
        const n = o(e);
        H.one(e, "transitionend", () => v(t)), c(e, n)
      }
      static getInstance(t) {
        return w.get(t, this.DATA_KEY)
      }
      static get VERSION() {
        return "5.0.1"
      }
      static get NAME() {
        throw new Error('You have to implement the static method "NAME", for each component!')
      }
      static get DATA_KEY() {
        return "bs." + this.NAME
      }
      static get EVENT_KEY() {
        return "." + this.DATA_KEY
      }
    }
    class B extends R {
      static get NAME() {
        return "alert"
      }
      close(t) {
        const e = t ? this._getRootElement(t) : this._element,
          i = this._triggerCloseEvent(e);
        null === i || i.defaultPrevented || this._removeElement(e)
      }
      _getRootElement(t) {
        return s(t) || t.closest(".alert")
      }
      _triggerCloseEvent(t) {
        return H.trigger(t, "close.bs.alert")
      }
      _removeElement(t) {
        t.classList.remove("show");
        const e = t.classList.contains("fade");
        this._queueCallback(() => this._destroyElement(t), t, e)
      }
      _destroyElement(t) {
        t.parentNode && t.parentNode.removeChild(t), H.trigger(t, "closed.bs.alert")
      }
      static jQueryInterface(t) {
        return this.each((function () {
          let e = w.get(this, "bs.alert");
          e || (e = new B(this)), "close" === t && e[t](this)
        }))
      }
      static handleDismiss(t) {
        return function (e) {
          e && e.preventDefault(), t.close(this)
        }
      }
    }
    H.on(document, "click.bs.alert.data-api", '[data-bs-dismiss="alert"]', B.handleDismiss(new B)), b(B);
    class W extends R {
      static get NAME() {
        return "button"
      }
      toggle() {
        this._element.setAttribute("aria-pressed", this._element.classList.toggle("active"))
      }
      static jQueryInterface(t) {
        return this.each((function () {
          let e = w.get(this, "bs.button");
          e || (e = new W(this)), "toggle" === t && e[t]()
        }))
      }
    }

    function q(t) {
      return "true" === t || "false" !== t && (t === Number(t).toString() ? Number(t) : "" === t || "null" === t ? null : t)
    }

    function z(t) {
      return t.replace(/[A-Z]/g, t => "-" + t.toLowerCase())
    }
    H.on(document, "click.bs.button.data-api", '[data-bs-toggle="button"]', t => {
      t.preventDefault();
      const e = t.target.closest('[data-bs-toggle="button"]');
      let i = w.get(e, "bs.button");
      i || (i = new W(e)), i.toggle()
    }), b(W);
    const U = {
        setDataAttribute(t, e, i) {
          t.setAttribute("data-bs-" + z(e), i)
        },
        removeDataAttribute(t, e) {
          t.removeAttribute("data-bs-" + z(e))
        },
        getDataAttributes(t) {
          if (!t) return {};
          const e = {};
          return Object.keys(t.dataset).filter(t => t.startsWith("bs")).forEach(i => {
            let n = i.replace(/^bs/, "");
            n = n.charAt(0).toLowerCase() + n.slice(1, n.length), e[n] = q(t.dataset[i])
          }), e
        },
        getDataAttribute: (t, e) => q(t.getAttribute("data-bs-" + z(e))),
        offset(t) {
          const e = t.getBoundingClientRect();
          return {
            top: e.top + document.body.scrollTop,
            left: e.left + document.body.scrollLeft
          }
        },
        position: t => ({
          top: t.offsetTop,
          left: t.offsetLeft
        })
      },
      $ = {
        interval: 5e3,
        keyboard: !0,
        slide: !1,
        pause: "hover",
        wrap: !0,
        touch: !0
      },
      F = {
        interval: "(number|boolean)",
        keyboard: "boolean",
        slide: "(boolean|string)",
        pause: "(string|boolean)",
        wrap: "boolean",
        touch: "boolean"
      },
      V = "next",
      K = "prev",
      X = "left",
      Y = "right";
    class Q extends R {
      constructor(e, i) {
        super(e), this._items = null, this._interval = null, this._activeElement = null, this._isPaused = !1, this._isSliding = !1, this.touchTimeout = null, this.touchStartX = 0, this.touchDeltaX = 0, this._config = this._getConfig(i), this._indicatorsElement = t.findOne(".carousel-indicators", this._element), this._touchSupported = "ontouchstart" in document.documentElement || navigator.maxTouchPoints > 0, this._pointerEvent = Boolean(window.PointerEvent), this._addEventListeners()
      }
      static get Default() {
        return $
      }
      static get NAME() {
        return "carousel"
      }
      next() {
        this._isSliding || this._slide(V)
      }
      nextWhenVisible() {
        !document.hidden && h(this._element) && this.next()
      }
      prev() {
        this._isSliding || this._slide(K)
      }
      pause(e) {
        e || (this._isPaused = !0), t.findOne(".carousel-item-next, .carousel-item-prev", this._element) && (r(this._element), this.cycle(!0)), clearInterval(this._interval), this._interval = null
      }
      cycle(t) {
        t || (this._isPaused = !1), this._interval && (clearInterval(this._interval), this._interval = null), this._config && this._config.interval && !this._isPaused && (this._updateInterval(), this._interval = setInterval((document.visibilityState ? this.nextWhenVisible : this.next).bind(this), this._config.interval))
      }
      to(e) {
        this._activeElement = t.findOne(".active.carousel-item", this._element);
        const i = this._getItemIndex(this._activeElement);
        if (e > this._items.length - 1 || e < 0) return;
        if (this._isSliding) return void H.one(this._element, "slid.bs.carousel", () => this.to(e));
        if (i === e) return this.pause(), void this.cycle();
        const n = e > i ? V : K;
        this._slide(n, this._items[e])
      }
      _getConfig(t) {
        return t = {
          ...$,
          ...t
        }, d("carousel", t, F), t
      }
      _handleSwipe() {
        const t = Math.abs(this.touchDeltaX);
        if (t <= 40) return;
        const e = t / this.touchDeltaX;
        this.touchDeltaX = 0, e && this._slide(e > 0 ? Y : X)
      }
      _addEventListeners() {
        this._config.keyboard && H.on(this._element, "keydown.bs.carousel", t => this._keydown(t)), "hover" === this._config.pause && (H.on(this._element, "mouseenter.bs.carousel", t => this.pause(t)), H.on(this._element, "mouseleave.bs.carousel", t => this.cycle(t))), this._config.touch && this._touchSupported && this._addTouchEventListeners()
      }
      _addTouchEventListeners() {
        const e = t => {
            !this._pointerEvent || "pen" !== t.pointerType && "touch" !== t.pointerType ? this._pointerEvent || (this.touchStartX = t.touches[0].clientX) : this.touchStartX = t.clientX
          },
          i = t => {
            this.touchDeltaX = t.touches && t.touches.length > 1 ? 0 : t.touches[0].clientX - this.touchStartX
          },
          n = t => {
            !this._pointerEvent || "pen" !== t.pointerType && "touch" !== t.pointerType || (this.touchDeltaX = t.clientX - this.touchStartX), this._handleSwipe(), "hover" === this._config.pause && (this.pause(), this.touchTimeout && clearTimeout(this.touchTimeout), this.touchTimeout = setTimeout(t => this.cycle(t), 500 + this._config.interval))
          };
        t.find(".carousel-item img", this._element).forEach(t => {
          H.on(t, "dragstart.bs.carousel", t => t.preventDefault())
        }), this._pointerEvent ? (H.on(this._element, "pointerdown.bs.carousel", t => e(t)), H.on(this._element, "pointerup.bs.carousel", t => n(t)), this._element.classList.add("pointer-event")) : (H.on(this._element, "touchstart.bs.carousel", t => e(t)), H.on(this._element, "touchmove.bs.carousel", t => i(t)), H.on(this._element, "touchend.bs.carousel", t => n(t)))
      }
      _keydown(t) {
        /input|textarea/i.test(t.target.tagName) || ("ArrowLeft" === t.key ? (t.preventDefault(), this._slide(Y)) : "ArrowRight" === t.key && (t.preventDefault(), this._slide(X)))
      }
      _getItemIndex(e) {
        return this._items = e && e.parentNode ? t.find(".carousel-item", e.parentNode) : [], this._items.indexOf(e)
      }
      _getItemByOrder(t, e) {
        const i = t === V,
          n = t === K,
          s = this._getItemIndex(e),
          o = this._items.length - 1;
        if ((n && 0 === s || i && s === o) && !this._config.wrap) return e;
        const r = (s + (n ? -1 : 1)) % this._items.length;
        return -1 === r ? this._items[this._items.length - 1] : this._items[r]
      }
      _triggerSlideEvent(e, i) {
        const n = this._getItemIndex(e),
          s = this._getItemIndex(t.findOne(".active.carousel-item", this._element));
        return H.trigger(this._element, "slide.bs.carousel", {
          relatedTarget: e,
          direction: i,
          from: s,
          to: n
        })
      }
      _setActiveIndicatorElement(e) {
        if (this._indicatorsElement) {
          const i = t.findOne(".active", this._indicatorsElement);
          i.classList.remove("active"), i.removeAttribute("aria-current");
          const n = t.find("[data-bs-target]", this._indicatorsElement);
          for (let t = 0; t < n.length; t++)
            if (Number.parseInt(n[t].getAttribute("data-bs-slide-to"), 10) === this._getItemIndex(e)) {
              n[t].classList.add("active"), n[t].setAttribute("aria-current", "true");
              break
            }
        }
      }
      _updateInterval() {
        const e = this._activeElement || t.findOne(".active.carousel-item", this._element);
        if (!e) return;
        const i = Number.parseInt(e.getAttribute("data-bs-interval"), 10);
        i ? (this._config.defaultInterval = this._config.defaultInterval || this._config.interval, this._config.interval = i) : this._config.interval = this._config.defaultInterval || this._config.interval
      }
      _slide(e, i) {
        const n = this._directionToOrder(e),
          s = t.findOne(".active.carousel-item", this._element),
          o = this._getItemIndex(s),
          r = i || this._getItemByOrder(n, s),
          a = this._getItemIndex(r),
          l = Boolean(this._interval),
          c = n === V,
          d = c ? "carousel-item-start" : "carousel-item-end",
          h = c ? "carousel-item-next" : "carousel-item-prev",
          u = this._orderToDirection(n);
        if (r && r.classList.contains("active")) return void(this._isSliding = !1);
        if (this._triggerSlideEvent(r, u).defaultPrevented) return;
        if (!s || !r) return;
        this._isSliding = !0, l && this.pause(), this._setActiveIndicatorElement(r), this._activeElement = r;
        const f = () => {
          H.trigger(this._element, "slid.bs.carousel", {
            relatedTarget: r,
            direction: u,
            from: o,
            to: a
          })
        };
        if (this._element.classList.contains("slide")) {
          r.classList.add(h), m(r), s.classList.add(d), r.classList.add(d);
          const t = () => {
            r.classList.remove(d, h), r.classList.add("active"), s.classList.remove("active", h, d), this._isSliding = !1, setTimeout(f, 0)
          };
          this._queueCallback(t, s, !0)
        } else s.classList.remove("active"), r.classList.add("active"), this._isSliding = !1, f();
        l && this.cycle()
      }
      _directionToOrder(t) {
        return [Y, X].includes(t) ? _() ? t === X ? K : V : t === X ? V : K : t
      }
      _orderToDirection(t) {
        return [V, K].includes(t) ? _() ? t === K ? X : Y : t === K ? Y : X : t
      }
      static carouselInterface(t, e) {
        let i = w.get(t, "bs.carousel"),
          n = {
            ...$,
            ...U.getDataAttributes(t)
          };
        "object" == typeof e && (n = {
          ...n,
          ...e
        });
        const s = "string" == typeof e ? e : n.slide;
        if (i || (i = new Q(t, n)), "number" == typeof e) i.to(e);
        else if ("string" == typeof s) {
          if (void 0 === i[s]) throw new TypeError(`No method named "${s}"`);
          i[s]()
        } else n.interval && n.ride && (i.pause(), i.cycle())
      }
      static jQueryInterface(t) {
        return this.each((function () {
          Q.carouselInterface(this, t)
        }))
      }
      static dataApiClickHandler(t) {
        const e = s(this);
        if (!e || !e.classList.contains("carousel")) return;
        const i = {
            ...U.getDataAttributes(e),
            ...U.getDataAttributes(this)
          },
          n = this.getAttribute("data-bs-slide-to");
        n && (i.interval = !1), Q.carouselInterface(e, i), n && w.get(e, "bs.carousel").to(n), t.preventDefault()
      }
    }
    H.on(document, "click.bs.carousel.data-api", "[data-bs-slide], [data-bs-slide-to]", Q.dataApiClickHandler), H.on(window, "load.bs.carousel.data-api", () => {
      const e = t.find('[data-bs-ride="carousel"]');
      for (let t = 0, i = e.length; t < i; t++) Q.carouselInterface(e[t], w.get(e[t], "bs.carousel"))
    }), b(Q);
    const G = {
        toggle: !0,
        parent: ""
      },
      Z = {
        toggle: "boolean",
        parent: "(string|element)"
      };
    class J extends R {
      constructor(e, i) {
        super(e), this._isTransitioning = !1, this._config = this._getConfig(i), this._triggerArray = t.find(`[data-bs-toggle="collapse"][href="#${this._element.id}"],[data-bs-toggle="collapse"][data-bs-target="#${this._element.id}"]`);
        const s = t.find('[data-bs-toggle="collapse"]');
        for (let e = 0, i = s.length; e < i; e++) {
          const i = s[e],
            o = n(i),
            r = t.find(o).filter(t => t === this._element);
          null !== o && r.length && (this._selector = o, this._triggerArray.push(i))
        }
        this._parent = this._config.parent ? this._getParent() : null, this._config.parent || this._addAriaAndCollapsedClass(this._element, this._triggerArray), this._config.toggle && this.toggle()
      }
      static get Default() {
        return G
      }
      static get NAME() {
        return "collapse"
      }
      toggle() {
        this._element.classList.contains("show") ? this.hide() : this.show()
      }
      show() {
        if (this._isTransitioning || this._element.classList.contains("show")) return;
        let e, i;
        this._parent && (e = t.find(".show, .collapsing", this._parent).filter(t => "string" == typeof this._config.parent ? t.getAttribute("data-bs-parent") === this._config.parent : t.classList.contains("collapse")), 0 === e.length && (e = null));
        const n = t.findOne(this._selector);
        if (e) {
          const t = e.find(t => n !== t);
          if (i = t ? w.get(t, "bs.collapse") : null, i && i._isTransitioning) return
        }
        if (H.trigger(this._element, "show.bs.collapse").defaultPrevented) return;
        e && e.forEach(t => {
          n !== t && J.collapseInterface(t, "hide"), i || w.set(t, "bs.collapse", null)
        });
        const s = this._getDimension();
        this._element.classList.remove("collapse"), this._element.classList.add("collapsing"), this._element.style[s] = 0, this._triggerArray.length && this._triggerArray.forEach(t => {
          t.classList.remove("collapsed"), t.setAttribute("aria-expanded", !0)
        }), this.setTransitioning(!0);
        const o = "scroll" + (s[0].toUpperCase() + s.slice(1));
        this._queueCallback(() => {
          this._element.classList.remove("collapsing"), this._element.classList.add("collapse", "show"), this._element.style[s] = "", this.setTransitioning(!1), H.trigger(this._element, "shown.bs.collapse")
        }, this._element, !0), this._element.style[s] = this._element[o] + "px"
      }
      hide() {
        if (this._isTransitioning || !this._element.classList.contains("show")) return;
        if (H.trigger(this._element, "hide.bs.collapse").defaultPrevented) return;
        const t = this._getDimension();
        this._element.style[t] = this._element.getBoundingClientRect()[t] + "px", m(this._element), this._element.classList.add("collapsing"), this._element.classList.remove("collapse", "show");
        const e = this._triggerArray.length;
        if (e > 0)
          for (let t = 0; t < e; t++) {
            const e = this._triggerArray[t],
              i = s(e);
            i && !i.classList.contains("show") && (e.classList.add("collapsed"), e.setAttribute("aria-expanded", !1))
          }
        this.setTransitioning(!0), this._element.style[t] = "", this._queueCallback(() => {
          this.setTransitioning(!1), this._element.classList.remove("collapsing"), this._element.classList.add("collapse"), H.trigger(this._element, "hidden.bs.collapse")
        }, this._element, !0)
      }
      setTransitioning(t) {
        this._isTransitioning = t
      }
      _getConfig(t) {
        return (t = {
          ...G,
          ...t
        }).toggle = Boolean(t.toggle), d("collapse", t, Z), t
      }
      _getDimension() {
        return this._element.classList.contains("width") ? "width" : "height"
      }
      _getParent() {
        let {
          parent: e
        } = this._config;
        e = l(e);
        const i = `[data-bs-toggle="collapse"][data-bs-parent="${e}"]`;
        return t.find(i, e).forEach(t => {
          const e = s(t);
          this._addAriaAndCollapsedClass(e, [t])
        }), e
      }
      _addAriaAndCollapsedClass(t, e) {
        if (!t || !e.length) return;
        const i = t.classList.contains("show");
        e.forEach(t => {
          i ? t.classList.remove("collapsed") : t.classList.add("collapsed"), t.setAttribute("aria-expanded", i)
        })
      }
      static collapseInterface(t, e) {
        let i = w.get(t, "bs.collapse");
        const n = {
          ...G,
          ...U.getDataAttributes(t),
          ..."object" == typeof e && e ? e : {}
        };
        if (!i && n.toggle && "string" == typeof e && /show|hide/.test(e) && (n.toggle = !1), i || (i = new J(t, n)), "string" == typeof e) {
          if (void 0 === i[e]) throw new TypeError(`No method named "${e}"`);
          i[e]()
        }
      }
      static jQueryInterface(t) {
        return this.each((function () {
          J.collapseInterface(this, t)
        }))
      }
    }
    H.on(document, "click.bs.collapse.data-api", '[data-bs-toggle="collapse"]', (function (e) {
      ("A" === e.target.tagName || e.delegateTarget && "A" === e.delegateTarget.tagName) && e.preventDefault();
      const i = U.getDataAttributes(this),
        s = n(this);
      t.find(s).forEach(t => {
        const e = w.get(t, "bs.collapse");
        let n;
        e ? (null === e._parent && "string" == typeof i.parent && (e._config.parent = i.parent, e._parent = e._getParent()), n = "toggle") : n = i, J.collapseInterface(t, n)
      })
    })), b(J);
    var tt = "top",
      et = "bottom",
      it = "right",
      nt = "left",
      st = [tt, et, it, nt],
      ot = st.reduce((function (t, e) {
        return t.concat([e + "-start", e + "-end"])
      }), []),
      rt = [].concat(st, ["auto"]).reduce((function (t, e) {
        return t.concat([e, e + "-start", e + "-end"])
      }), []),
      at = ["beforeRead", "read", "afterRead", "beforeMain", "main", "afterMain", "beforeWrite", "write", "afterWrite"];

    function lt(t) {
      return t ? (t.nodeName || "").toLowerCase() : null
    }

    function ct(t) {
      if (null == t) return window;
      if ("[object Window]" !== t.toString()) {
        var e = t.ownerDocument;
        return e && e.defaultView || window
      }
      return t
    }

    function dt(t) {
      return t instanceof ct(t).Element || t instanceof Element
    }

    function ht(t) {
      return t instanceof ct(t).HTMLElement || t instanceof HTMLElement
    }

    function ut(t) {
      return "undefined" != typeof ShadowRoot && (t instanceof ct(t).ShadowRoot || t instanceof ShadowRoot)
    }
    var ft = {
      name: "applyStyles",
      enabled: !0,
      phase: "write",
      fn: function (t) {
        var e = t.state;
        Object.keys(e.elements).forEach((function (t) {
          var i = e.styles[t] || {},
            n = e.attributes[t] || {},
            s = e.elements[t];
          ht(s) && lt(s) && (Object.assign(s.style, i), Object.keys(n).forEach((function (t) {
            var e = n[t];
            !1 === e ? s.removeAttribute(t) : s.setAttribute(t, !0 === e ? "" : e)
          })))
        }))
      },
      effect: function (t) {
        var e = t.state,
          i = {
            popper: {
              position: e.options.strategy,
              left: "0",
              top: "0",
              margin: "0"
            },
            arrow: {
              position: "absolute"
            },
            reference: {}
          };
        return Object.assign(e.elements.popper.style, i.popper), e.styles = i, e.elements.arrow && Object.assign(e.elements.arrow.style, i.arrow),
          function () {
            Object.keys(e.elements).forEach((function (t) {
              var n = e.elements[t],
                s = e.attributes[t] || {},
                o = Object.keys(e.styles.hasOwnProperty(t) ? e.styles[t] : i[t]).reduce((function (t, e) {
                  return t[e] = "", t
                }), {});
              ht(n) && lt(n) && (Object.assign(n.style, o), Object.keys(s).forEach((function (t) {
                n.removeAttribute(t)
              })))
            }))
          }
      },
      requires: ["computeStyles"]
    };

    function pt(t) {
      return t.split("-")[0]
    }

    function mt(t) {
      var e = t.getBoundingClientRect();
      return {
        width: e.width,
        height: e.height,
        top: e.top,
        right: e.right,
        bottom: e.bottom,
        left: e.left,
        x: e.left,
        y: e.top
      }
    }

    function gt(t) {
      var e = mt(t),
        i = t.offsetWidth,
        n = t.offsetHeight;
      return Math.abs(e.width - i) <= 1 && (i = e.width), Math.abs(e.height - n) <= 1 && (n = e.height), {
        x: t.offsetLeft,
        y: t.offsetTop,
        width: i,
        height: n
      }
    }

    function _t(t, e) {
      var i = e.getRootNode && e.getRootNode();
      if (t.contains(e)) return !0;
      if (i && ut(i)) {
        var n = e;
        do {
          if (n && t.isSameNode(n)) return !0;
          n = n.parentNode || n.host
        } while (n)
      }
      return !1
    }

    function bt(t) {
      return ct(t).getComputedStyle(t)
    }

    function vt(t) {
      return ["table", "td", "th"].indexOf(lt(t)) >= 0
    }

    function yt(t) {
      return ((dt(t) ? t.ownerDocument : t.document) || window.document).documentElement
    }

    function wt(t) {
      return "html" === lt(t) ? t : t.assignedSlot || t.parentNode || (ut(t) ? t.host : null) || yt(t)
    }

    function Et(t) {
      return ht(t) && "fixed" !== bt(t).position ? t.offsetParent : null
    }

    function Tt(t) {
      for (var e = ct(t), i = Et(t); i && vt(i) && "static" === bt(i).position;) i = Et(i);
      return i && ("html" === lt(i) || "body" === lt(i) && "static" === bt(i).position) ? e : i || function (t) {
        var e = -1 !== navigator.userAgent.toLowerCase().indexOf("firefox");
        if (-1 !== navigator.userAgent.indexOf("Trident") && ht(t) && "fixed" === bt(t).position) return null;
        for (var i = wt(t); ht(i) && ["html", "body"].indexOf(lt(i)) < 0;) {
          var n = bt(i);
          if ("none" !== n.transform || "none" !== n.perspective || "paint" === n.contain || -1 !== ["transform", "perspective"].indexOf(n.willChange) || e && "filter" === n.willChange || e && n.filter && "none" !== n.filter) return i;
          i = i.parentNode
        }
        return null
      }(t) || e
    }

    function At(t) {
      return ["top", "bottom"].indexOf(t) >= 0 ? "x" : "y"
    }
    var Lt = Math.max,
      Ot = Math.min,
      kt = Math.round;

    function Ct(t, e, i) {
      return Lt(t, Ot(e, i))
    }

    function xt(t) {
      return Object.assign({}, {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0
      }, t)
    }

    function Dt(t, e) {
      return e.reduce((function (e, i) {
        return e[i] = t, e
      }), {})
    }
    var Nt = {
        name: "arrow",
        enabled: !0,
        phase: "main",
        fn: function (t) {
          var e, i = t.state,
            n = t.name,
            s = t.options,
            o = i.elements.arrow,
            r = i.modifiersData.popperOffsets,
            a = pt(i.placement),
            l = At(a),
            c = [nt, it].indexOf(a) >= 0 ? "height" : "width";
          if (o && r) {
            var d = function (t, e) {
                return xt("number" != typeof (t = "function" == typeof t ? t(Object.assign({}, e.rects, {
                  placement: e.placement
                })) : t) ? t : Dt(t, st))
              }(s.padding, i),
              h = gt(o),
              u = "y" === l ? tt : nt,
              f = "y" === l ? et : it,
              p = i.rects.reference[c] + i.rects.reference[l] - r[l] - i.rects.popper[c],
              m = r[l] - i.rects.reference[l],
              g = Tt(o),
              _ = g ? "y" === l ? g.clientHeight || 0 : g.clientWidth || 0 : 0,
              b = p / 2 - m / 2,
              v = d[u],
              y = _ - h[c] - d[f],
              w = _ / 2 - h[c] / 2 + b,
              E = Ct(v, w, y),
              T = l;
            i.modifiersData[n] = ((e = {})[T] = E, e.centerOffset = E - w, e)
          }
        },
        effect: function (t) {
          var e = t.state,
            i = t.options.element,
            n = void 0 === i ? "[data-popper-arrow]" : i;
          null != n && ("string" != typeof n || (n = e.elements.popper.querySelector(n))) && _t(e.elements.popper, n) && (e.elements.arrow = n)
        },
        requires: ["popperOffsets"],
        requiresIfExists: ["preventOverflow"]
      },
      St = {
        top: "auto",
        right: "auto",
        bottom: "auto",
        left: "auto"
      };

    function It(t) {
      var e, i = t.popper,
        n = t.popperRect,
        s = t.placement,
        o = t.offsets,
        r = t.position,
        a = t.gpuAcceleration,
        l = t.adaptive,
        c = t.roundOffsets,
        d = !0 === c ? function (t) {
          var e = t.x,
            i = t.y,
            n = window.devicePixelRatio || 1;
          return {
            x: kt(kt(e * n) / n) || 0,
            y: kt(kt(i * n) / n) || 0
          }
        }(o) : "function" == typeof c ? c(o) : o,
        h = d.x,
        u = void 0 === h ? 0 : h,
        f = d.y,
        p = void 0 === f ? 0 : f,
        m = o.hasOwnProperty("x"),
        g = o.hasOwnProperty("y"),
        _ = nt,
        b = tt,
        v = window;
      if (l) {
        var y = Tt(i),
          w = "clientHeight",
          E = "clientWidth";
        y === ct(i) && "static" !== bt(y = yt(i)).position && (w = "scrollHeight", E = "scrollWidth"), y = y, s === tt && (b = et, p -= y[w] - n.height, p *= a ? 1 : -1), s === nt && (_ = it, u -= y[E] - n.width, u *= a ? 1 : -1)
      }
      var T, A = Object.assign({
        position: r
      }, l && St);
      return a ? Object.assign({}, A, ((T = {})[b] = g ? "0" : "", T[_] = m ? "0" : "", T.transform = (v.devicePixelRatio || 1) < 2 ? "translate(" + u + "px, " + p + "px)" : "translate3d(" + u + "px, " + p + "px, 0)", T)) : Object.assign({}, A, ((e = {})[b] = g ? p + "px" : "", e[_] = m ? u + "px" : "", e.transform = "", e))
    }
    var jt = {
        name: "computeStyles",
        enabled: !0,
        phase: "beforeWrite",
        fn: function (t) {
          var e = t.state,
            i = t.options,
            n = i.gpuAcceleration,
            s = void 0 === n || n,
            o = i.adaptive,
            r = void 0 === o || o,
            a = i.roundOffsets,
            l = void 0 === a || a,
            c = {
              placement: pt(e.placement),
              popper: e.elements.popper,
              popperRect: e.rects.popper,
              gpuAcceleration: s
            };
          null != e.modifiersData.popperOffsets && (e.styles.popper = Object.assign({}, e.styles.popper, It(Object.assign({}, c, {
            offsets: e.modifiersData.popperOffsets,
            position: e.options.strategy,
            adaptive: r,
            roundOffsets: l
          })))), null != e.modifiersData.arrow && (e.styles.arrow = Object.assign({}, e.styles.arrow, It(Object.assign({}, c, {
            offsets: e.modifiersData.arrow,
            position: "absolute",
            adaptive: !1,
            roundOffsets: l
          })))), e.attributes.popper = Object.assign({}, e.attributes.popper, {
            "data-popper-placement": e.placement
          })
        },
        data: {}
      },
      Pt = {
        passive: !0
      },
      Mt = {
        name: "eventListeners",
        enabled: !0,
        phase: "write",
        fn: function () {},
        effect: function (t) {
          var e = t.state,
            i = t.instance,
            n = t.options,
            s = n.scroll,
            o = void 0 === s || s,
            r = n.resize,
            a = void 0 === r || r,
            l = ct(e.elements.popper),
            c = [].concat(e.scrollParents.reference, e.scrollParents.popper);
          return o && c.forEach((function (t) {
              t.addEventListener("scroll", i.update, Pt)
            })), a && l.addEventListener("resize", i.update, Pt),
            function () {
              o && c.forEach((function (t) {
                t.removeEventListener("scroll", i.update, Pt)
              })), a && l.removeEventListener("resize", i.update, Pt)
            }
        },
        data: {}
      },
      Ht = {
        left: "right",
        right: "left",
        bottom: "top",
        top: "bottom"
      };

    function Rt(t) {
      return t.replace(/left|right|bottom|top/g, (function (t) {
        return Ht[t]
      }))
    }
    var Bt = {
      start: "end",
      end: "start"
    };

    function Wt(t) {
      return t.replace(/start|end/g, (function (t) {
        return Bt[t]
      }))
    }

    function qt(t) {
      var e = ct(t);
      return {
        scrollLeft: e.pageXOffset,
        scrollTop: e.pageYOffset
      }
    }

    function zt(t) {
      return mt(yt(t)).left + qt(t).scrollLeft
    }

    function Ut(t) {
      var e = bt(t),
        i = e.overflow,
        n = e.overflowX,
        s = e.overflowY;
      return /auto|scroll|overlay|hidden/.test(i + s + n)
    }

    function $t(t, e) {
      var i;
      void 0 === e && (e = []);
      var n = function t(e) {
          return ["html", "body", "#document"].indexOf(lt(e)) >= 0 ? e.ownerDocument.body : ht(e) && Ut(e) ? e : t(wt(e))
        }(t),
        s = n === (null == (i = t.ownerDocument) ? void 0 : i.body),
        o = ct(n),
        r = s ? [o].concat(o.visualViewport || [], Ut(n) ? n : []) : n,
        a = e.concat(r);
      return s ? a : a.concat($t(wt(r)))
    }

    function Ft(t) {
      return Object.assign({}, t, {
        left: t.x,
        top: t.y,
        right: t.x + t.width,
        bottom: t.y + t.height
      })
    }

    function Vt(t, e) {
      return "viewport" === e ? Ft(function (t) {
        var e = ct(t),
          i = yt(t),
          n = e.visualViewport,
          s = i.clientWidth,
          o = i.clientHeight,
          r = 0,
          a = 0;
        return n && (s = n.width, o = n.height, /^((?!chrome|android).)*safari/i.test(navigator.userAgent) || (r = n.offsetLeft, a = n.offsetTop)), {
          width: s,
          height: o,
          x: r + zt(t),
          y: a
        }
      }(t)) : ht(e) ? function (t) {
        var e = mt(t);
        return e.top = e.top + t.clientTop, e.left = e.left + t.clientLeft, e.bottom = e.top + t.clientHeight, e.right = e.left + t.clientWidth, e.width = t.clientWidth, e.height = t.clientHeight, e.x = e.left, e.y = e.top, e
      }(e) : Ft(function (t) {
        var e, i = yt(t),
          n = qt(t),
          s = null == (e = t.ownerDocument) ? void 0 : e.body,
          o = Lt(i.scrollWidth, i.clientWidth, s ? s.scrollWidth : 0, s ? s.clientWidth : 0),
          r = Lt(i.scrollHeight, i.clientHeight, s ? s.scrollHeight : 0, s ? s.clientHeight : 0),
          a = -n.scrollLeft + zt(t),
          l = -n.scrollTop;
        return "rtl" === bt(s || i).direction && (a += Lt(i.clientWidth, s ? s.clientWidth : 0) - o), {
          width: o,
          height: r,
          x: a,
          y: l
        }
      }(yt(t)))
    }

    function Kt(t) {
      return t.split("-")[1]
    }

    function Xt(t) {
      var e, i = t.reference,
        n = t.element,
        s = t.placement,
        o = s ? pt(s) : null,
        r = s ? Kt(s) : null,
        a = i.x + i.width / 2 - n.width / 2,
        l = i.y + i.height / 2 - n.height / 2;
      switch (o) {
        case tt:
          e = {
            x: a,
            y: i.y - n.height
          };
          break;
        case et:
          e = {
            x: a,
            y: i.y + i.height
          };
          break;
        case it:
          e = {
            x: i.x + i.width,
            y: l
          };
          break;
        case nt:
          e = {
            x: i.x - n.width,
            y: l
          };
          break;
        default:
          e = {
            x: i.x,
            y: i.y
          }
      }
      var c = o ? At(o) : null;
      if (null != c) {
        var d = "y" === c ? "height" : "width";
        switch (r) {
          case "start":
            e[c] = e[c] - (i[d] / 2 - n[d] / 2);
            break;
          case "end":
            e[c] = e[c] + (i[d] / 2 - n[d] / 2)
        }
      }
      return e
    }

    function Yt(t, e) {
      void 0 === e && (e = {});
      var i = e,
        n = i.placement,
        s = void 0 === n ? t.placement : n,
        o = i.boundary,
        r = void 0 === o ? "clippingParents" : o,
        a = i.rootBoundary,
        l = void 0 === a ? "viewport" : a,
        c = i.elementContext,
        d = void 0 === c ? "popper" : c,
        h = i.altBoundary,
        u = void 0 !== h && h,
        f = i.padding,
        p = void 0 === f ? 0 : f,
        m = xt("number" != typeof p ? p : Dt(p, st)),
        g = "popper" === d ? "reference" : "popper",
        _ = t.elements.reference,
        b = t.rects.popper,
        v = t.elements[u ? g : d],
        y = function (t, e, i) {
          var n = "clippingParents" === e ? function (t) {
              var e = $t(wt(t)),
                i = ["absolute", "fixed"].indexOf(bt(t).position) >= 0 && ht(t) ? Tt(t) : t;
              return dt(i) ? e.filter((function (t) {
                return dt(t) && _t(t, i) && "body" !== lt(t)
              })) : []
            }(t) : [].concat(e),
            s = [].concat(n, [i]),
            o = s[0],
            r = s.reduce((function (e, i) {
              var n = Vt(t, i);
              return e.top = Lt(n.top, e.top), e.right = Ot(n.right, e.right), e.bottom = Ot(n.bottom, e.bottom), e.left = Lt(n.left, e.left), e
            }), Vt(t, o));
          return r.width = r.right - r.left, r.height = r.bottom - r.top, r.x = r.left, r.y = r.top, r
        }(dt(v) ? v : v.contextElement || yt(t.elements.popper), r, l),
        w = mt(_),
        E = Xt({
          reference: w,
          element: b,
          strategy: "absolute",
          placement: s
        }),
        T = Ft(Object.assign({}, b, E)),
        A = "popper" === d ? T : w,
        L = {
          top: y.top - A.top + m.top,
          bottom: A.bottom - y.bottom + m.bottom,
          left: y.left - A.left + m.left,
          right: A.right - y.right + m.right
        },
        O = t.modifiersData.offset;
      if ("popper" === d && O) {
        var k = O[s];
        Object.keys(L).forEach((function (t) {
          var e = [it, et].indexOf(t) >= 0 ? 1 : -1,
            i = [tt, et].indexOf(t) >= 0 ? "y" : "x";
          L[t] += k[i] * e
        }))
      }
      return L
    }

    function Qt(t, e) {
      void 0 === e && (e = {});
      var i = e,
        n = i.placement,
        s = i.boundary,
        o = i.rootBoundary,
        r = i.padding,
        a = i.flipVariations,
        l = i.allowedAutoPlacements,
        c = void 0 === l ? rt : l,
        d = Kt(n),
        h = d ? a ? ot : ot.filter((function (t) {
          return Kt(t) === d
        })) : st,
        u = h.filter((function (t) {
          return c.indexOf(t) >= 0
        }));
      0 === u.length && (u = h);
      var f = u.reduce((function (e, i) {
        return e[i] = Yt(t, {
          placement: i,
          boundary: s,
          rootBoundary: o,
          padding: r
        })[pt(i)], e
      }), {});
      return Object.keys(f).sort((function (t, e) {
        return f[t] - f[e]
      }))
    }
    var Gt = {
      name: "flip",
      enabled: !0,
      phase: "main",
      fn: function (t) {
        var e = t.state,
          i = t.options,
          n = t.name;
        if (!e.modifiersData[n]._skip) {
          for (var s = i.mainAxis, o = void 0 === s || s, r = i.altAxis, a = void 0 === r || r, l = i.fallbackPlacements, c = i.padding, d = i.boundary, h = i.rootBoundary, u = i.altBoundary, f = i.flipVariations, p = void 0 === f || f, m = i.allowedAutoPlacements, g = e.options.placement, _ = pt(g), b = l || (_ !== g && p ? function (t) {
              if ("auto" === pt(t)) return [];
              var e = Rt(t);
              return [Wt(t), e, Wt(e)]
            }(g) : [Rt(g)]), v = [g].concat(b).reduce((function (t, i) {
              return t.concat("auto" === pt(i) ? Qt(e, {
                placement: i,
                boundary: d,
                rootBoundary: h,
                padding: c,
                flipVariations: p,
                allowedAutoPlacements: m
              }) : i)
            }), []), y = e.rects.reference, w = e.rects.popper, E = new Map, T = !0, A = v[0], L = 0; L < v.length; L++) {
            var O = v[L],
              k = pt(O),
              C = "start" === Kt(O),
              x = [tt, et].indexOf(k) >= 0,
              D = x ? "width" : "height",
              N = Yt(e, {
                placement: O,
                boundary: d,
                rootBoundary: h,
                altBoundary: u,
                padding: c
              }),
              S = x ? C ? it : nt : C ? et : tt;
            y[D] > w[D] && (S = Rt(S));
            var I = Rt(S),
              j = [];
            if (o && j.push(N[k] <= 0), a && j.push(N[S] <= 0, N[I] <= 0), j.every((function (t) {
                return t
              }))) {
              A = O, T = !1;
              break
            }
            E.set(O, j)
          }
          if (T)
            for (var P = function (t) {
                var e = v.find((function (e) {
                  var i = E.get(e);
                  if (i) return i.slice(0, t).every((function (t) {
                    return t
                  }))
                }));
                if (e) return A = e, "break"
              }, M = p ? 3 : 1; M > 0 && "break" !== P(M); M--);
          e.placement !== A && (e.modifiersData[n]._skip = !0, e.placement = A, e.reset = !0)
        }
      },
      requiresIfExists: ["offset"],
      data: {
        _skip: !1
      }
    };

    function Zt(t, e, i) {
      return void 0 === i && (i = {
        x: 0,
        y: 0
      }), {
        top: t.top - e.height - i.y,
        right: t.right - e.width + i.x,
        bottom: t.bottom - e.height + i.y,
        left: t.left - e.width - i.x
      }
    }

    function Jt(t) {
      return [tt, it, et, nt].some((function (e) {
        return t[e] >= 0
      }))
    }
    var te = {
        name: "hide",
        enabled: !0,
        phase: "main",
        requiresIfExists: ["preventOverflow"],
        fn: function (t) {
          var e = t.state,
            i = t.name,
            n = e.rects.reference,
            s = e.rects.popper,
            o = e.modifiersData.preventOverflow,
            r = Yt(e, {
              elementContext: "reference"
            }),
            a = Yt(e, {
              altBoundary: !0
            }),
            l = Zt(r, n),
            c = Zt(a, s, o),
            d = Jt(l),
            h = Jt(c);
          e.modifiersData[i] = {
            referenceClippingOffsets: l,
            popperEscapeOffsets: c,
            isReferenceHidden: d,
            hasPopperEscaped: h
          }, e.attributes.popper = Object.assign({}, e.attributes.popper, {
            "data-popper-reference-hidden": d,
            "data-popper-escaped": h
          })
        }
      },
      ee = {
        name: "offset",
        enabled: !0,
        phase: "main",
        requires: ["popperOffsets"],
        fn: function (t) {
          var e = t.state,
            i = t.options,
            n = t.name,
            s = i.offset,
            o = void 0 === s ? [0, 0] : s,
            r = rt.reduce((function (t, i) {
              return t[i] = function (t, e, i) {
                var n = pt(t),
                  s = [nt, tt].indexOf(n) >= 0 ? -1 : 1,
                  o = "function" == typeof i ? i(Object.assign({}, e, {
                    placement: t
                  })) : i,
                  r = o[0],
                  a = o[1];
                return r = r || 0, a = (a || 0) * s, [nt, it].indexOf(n) >= 0 ? {
                  x: a,
                  y: r
                } : {
                  x: r,
                  y: a
                }
              }(i, e.rects, o), t
            }), {}),
            a = r[e.placement],
            l = a.x,
            c = a.y;
          null != e.modifiersData.popperOffsets && (e.modifiersData.popperOffsets.x += l, e.modifiersData.popperOffsets.y += c), e.modifiersData[n] = r
        }
      },
      ie = {
        name: "popperOffsets",
        enabled: !0,
        phase: "read",
        fn: function (t) {
          var e = t.state,
            i = t.name;
          e.modifiersData[i] = Xt({
            reference: e.rects.reference,
            element: e.rects.popper,
            strategy: "absolute",
            placement: e.placement
          })
        },
        data: {}
      },
      ne = {
        name: "preventOverflow",
        enabled: !0,
        phase: "main",
        fn: function (t) {
          var e = t.state,
            i = t.options,
            n = t.name,
            s = i.mainAxis,
            o = void 0 === s || s,
            r = i.altAxis,
            a = void 0 !== r && r,
            l = i.boundary,
            c = i.rootBoundary,
            d = i.altBoundary,
            h = i.padding,
            u = i.tether,
            f = void 0 === u || u,
            p = i.tetherOffset,
            m = void 0 === p ? 0 : p,
            g = Yt(e, {
              boundary: l,
              rootBoundary: c,
              padding: h,
              altBoundary: d
            }),
            _ = pt(e.placement),
            b = Kt(e.placement),
            v = !b,
            y = At(_),
            w = "x" === y ? "y" : "x",
            E = e.modifiersData.popperOffsets,
            T = e.rects.reference,
            A = e.rects.popper,
            L = "function" == typeof m ? m(Object.assign({}, e.rects, {
              placement: e.placement
            })) : m,
            O = {
              x: 0,
              y: 0
            };
          if (E) {
            if (o || a) {
              var k = "y" === y ? tt : nt,
                C = "y" === y ? et : it,
                x = "y" === y ? "height" : "width",
                D = E[y],
                N = E[y] + g[k],
                S = E[y] - g[C],
                I = f ? -A[x] / 2 : 0,
                j = "start" === b ? T[x] : A[x],
                P = "start" === b ? -A[x] : -T[x],
                M = e.elements.arrow,
                H = f && M ? gt(M) : {
                  width: 0,
                  height: 0
                },
                R = e.modifiersData["arrow#persistent"] ? e.modifiersData["arrow#persistent"].padding : {
                  top: 0,
                  right: 0,
                  bottom: 0,
                  left: 0
                },
                B = R[k],
                W = R[C],
                q = Ct(0, T[x], H[x]),
                z = v ? T[x] / 2 - I - q - B - L : j - q - B - L,
                U = v ? -T[x] / 2 + I + q + W + L : P + q + W + L,
                $ = e.elements.arrow && Tt(e.elements.arrow),
                F = $ ? "y" === y ? $.clientTop || 0 : $.clientLeft || 0 : 0,
                V = e.modifiersData.offset ? e.modifiersData.offset[e.placement][y] : 0,
                K = E[y] + z - V - F,
                X = E[y] + U - V;
              if (o) {
                var Y = Ct(f ? Ot(N, K) : N, D, f ? Lt(S, X) : S);
                E[y] = Y, O[y] = Y - D
              }
              if (a) {
                var Q = "x" === y ? tt : nt,
                  G = "x" === y ? et : it,
                  Z = E[w],
                  J = Z + g[Q],
                  st = Z - g[G],
                  ot = Ct(f ? Ot(J, K) : J, Z, f ? Lt(st, X) : st);
                E[w] = ot, O[w] = ot - Z
              }
            }
            e.modifiersData[n] = O
          }
        },
        requiresIfExists: ["offset"]
      };

    function se(t, e, i) {
      void 0 === i && (i = !1);
      var n, s, o = yt(e),
        r = mt(t),
        a = ht(e),
        l = {
          scrollLeft: 0,
          scrollTop: 0
        },
        c = {
          x: 0,
          y: 0
        };
      return (a || !a && !i) && (("body" !== lt(e) || Ut(o)) && (l = (n = e) !== ct(n) && ht(n) ? {
        scrollLeft: (s = n).scrollLeft,
        scrollTop: s.scrollTop
      } : qt(n)), ht(e) ? ((c = mt(e)).x += e.clientLeft, c.y += e.clientTop) : o && (c.x = zt(o))), {
        x: r.left + l.scrollLeft - c.x,
        y: r.top + l.scrollTop - c.y,
        width: r.width,
        height: r.height
      }
    }
    var oe = {
      placement: "bottom",
      modifiers: [],
      strategy: "absolute"
    };

    function re() {
      for (var t = arguments.length, e = new Array(t), i = 0; i < t; i++) e[i] = arguments[i];
      return !e.some((function (t) {
        return !(t && "function" == typeof t.getBoundingClientRect)
      }))
    }

    function ae(t) {
      void 0 === t && (t = {});
      var e = t,
        i = e.defaultModifiers,
        n = void 0 === i ? [] : i,
        s = e.defaultOptions,
        o = void 0 === s ? oe : s;
      return function (t, e, i) {
        void 0 === i && (i = o);
        var s, r, a = {
            placement: "bottom",
            orderedModifiers: [],
            options: Object.assign({}, oe, o),
            modifiersData: {},
            elements: {
              reference: t,
              popper: e
            },
            attributes: {},
            styles: {}
          },
          l = [],
          c = !1,
          d = {
            state: a,
            setOptions: function (i) {
              h(), a.options = Object.assign({}, o, a.options, i), a.scrollParents = {
                reference: dt(t) ? $t(t) : t.contextElement ? $t(t.contextElement) : [],
                popper: $t(e)
              };
              var s, r, c = function (t) {
                var e = function (t) {
                  var e = new Map,
                    i = new Set,
                    n = [];
                  return t.forEach((function (t) {
                    e.set(t.name, t)
                  })), t.forEach((function (t) {
                    i.has(t.name) || function t(s) {
                      i.add(s.name), [].concat(s.requires || [], s.requiresIfExists || []).forEach((function (n) {
                        if (!i.has(n)) {
                          var s = e.get(n);
                          s && t(s)
                        }
                      })), n.push(s)
                    }(t)
                  })), n
                }(t);
                return at.reduce((function (t, i) {
                  return t.concat(e.filter((function (t) {
                    return t.phase === i
                  })))
                }), [])
              }((s = [].concat(n, a.options.modifiers), r = s.reduce((function (t, e) {
                var i = t[e.name];
                return t[e.name] = i ? Object.assign({}, i, e, {
                  options: Object.assign({}, i.options, e.options),
                  data: Object.assign({}, i.data, e.data)
                }) : e, t
              }), {}), Object.keys(r).map((function (t) {
                return r[t]
              }))));
              return a.orderedModifiers = c.filter((function (t) {
                return t.enabled
              })), a.orderedModifiers.forEach((function (t) {
                var e = t.name,
                  i = t.options,
                  n = void 0 === i ? {} : i,
                  s = t.effect;
                if ("function" == typeof s) {
                  var o = s({
                    state: a,
                    name: e,
                    instance: d,
                    options: n
                  });
                  l.push(o || function () {})
                }
              })), d.update()
            },
            forceUpdate: function () {
              if (!c) {
                var t = a.elements,
                  e = t.reference,
                  i = t.popper;
                if (re(e, i)) {
                  a.rects = {
                    reference: se(e, Tt(i), "fixed" === a.options.strategy),
                    popper: gt(i)
                  }, a.reset = !1, a.placement = a.options.placement, a.orderedModifiers.forEach((function (t) {
                    return a.modifiersData[t.name] = Object.assign({}, t.data)
                  }));
                  for (var n = 0; n < a.orderedModifiers.length; n++)
                    if (!0 !== a.reset) {
                      var s = a.orderedModifiers[n],
                        o = s.fn,
                        r = s.options,
                        l = void 0 === r ? {} : r,
                        h = s.name;
                      "function" == typeof o && (a = o({
                        state: a,
                        options: l,
                        name: h,
                        instance: d
                      }) || a)
                    } else a.reset = !1, n = -1
                }
              }
            },
            update: (s = function () {
              return new Promise((function (t) {
                d.forceUpdate(), t(a)
              }))
            }, function () {
              return r || (r = new Promise((function (t) {
                Promise.resolve().then((function () {
                  r = void 0, t(s())
                }))
              }))), r
            }),
            destroy: function () {
              h(), c = !0
            }
          };
        if (!re(t, e)) return d;

        function h() {
          l.forEach((function (t) {
            return t()
          })), l = []
        }
        return d.setOptions(i).then((function (t) {
          !c && i.onFirstUpdate && i.onFirstUpdate(t)
        })), d
      }
    }
    var le = ae(),
      ce = ae({
        defaultModifiers: [Mt, ie, jt, ft]
      }),
      de = ae({
        defaultModifiers: [Mt, ie, jt, ft, ee, Gt, ne, Nt, te]
      }),
      he = Object.freeze({
        __proto__: null,
        popperGenerator: ae,
        detectOverflow: Yt,
        createPopperBase: le,
        createPopper: de,
        createPopperLite: ce,
        top: tt,
        bottom: et,
        right: it,
        left: nt,
        auto: "auto",
        basePlacements: st,
        start: "start",
        end: "end",
        clippingParents: "clippingParents",
        viewport: "viewport",
        popper: "popper",
        reference: "reference",
        variationPlacements: ot,
        placements: rt,
        beforeRead: "beforeRead",
        read: "read",
        afterRead: "afterRead",
        beforeMain: "beforeMain",
        main: "main",
        afterMain: "afterMain",
        beforeWrite: "beforeWrite",
        write: "write",
        afterWrite: "afterWrite",
        modifierPhases: at,
        applyStyles: ft,
        arrow: Nt,
        computeStyles: jt,
        eventListeners: Mt,
        flip: Gt,
        hide: te,
        offset: ee,
        popperOffsets: ie,
        preventOverflow: ne
      });
    const ue = new RegExp("ArrowUp|ArrowDown|Escape"),
      fe = _() ? "top-end" : "top-start",
      pe = _() ? "top-start" : "top-end",
      me = _() ? "bottom-end" : "bottom-start",
      ge = _() ? "bottom-start" : "bottom-end",
      _e = _() ? "left-start" : "right-start",
      be = _() ? "right-start" : "left-start",
      ve = {
        offset: [0, 2],
        boundary: "clippingParents",
        reference: "toggle",
        display: "dynamic",
        popperConfig: null,
        autoClose: !0
      },
      ye = {
        offset: "(array|string|function)",
        boundary: "(string|element)",
        reference: "(string|element|object)",
        display: "string",
        popperConfig: "(null|object|function)",
        autoClose: "(boolean|string)"
      };
    class we extends R {
      constructor(t, e) {
        super(t), this._popper = null, this._config = this._getConfig(e), this._menu = this._getMenuElement(), this._inNavbar = this._detectNavbar(), this._addEventListeners()
      }
      static get Default() {
        return ve
      }
      static get DefaultType() {
        return ye
      }
      static get NAME() {
        return "dropdown"
      }
      toggle() {
        u(this._element) || (this._element.classList.contains("show") ? this.hide() : this.show())
      }
      show() {
        if (u(this._element) || this._menu.classList.contains("show")) return;
        const t = we.getParentFromElement(this._element),
          e = {
            relatedTarget: this._element
          };
        if (!H.trigger(this._element, "show.bs.dropdown", e).defaultPrevented) {
          if (this._inNavbar) U.setDataAttribute(this._menu, "popper", "none");
          else {
            if (void 0 === he) throw new TypeError("Bootstrap's dropdowns require Popper (https://popper.js.org)");
            let e = this._element;
            "parent" === this._config.reference ? e = t : a(this._config.reference) ? e = l(this._config.reference) : "object" == typeof this._config.reference && (e = this._config.reference);
            const i = this._getPopperConfig(),
              n = i.modifiers.find(t => "applyStyles" === t.name && !1 === t.enabled);
            this._popper = de(e, this._menu, i), n && U.setDataAttribute(this._menu, "popper", "static")
          }
          "ontouchstart" in document.documentElement && !t.closest(".navbar-nav") && [].concat(...document.body.children).forEach(t => H.on(t, "mouseover", p)), this._element.focus(), this._element.setAttribute("aria-expanded", !0), this._menu.classList.toggle("show"), this._element.classList.toggle("show"), H.trigger(this._element, "shown.bs.dropdown", e)
        }
      }
      hide() {
        if (u(this._element) || !this._menu.classList.contains("show")) return;
        const t = {
          relatedTarget: this._element
        };
        this._completeHide(t)
      }
      dispose() {
        this._popper && this._popper.destroy(), super.dispose()
      }
      update() {
        this._inNavbar = this._detectNavbar(), this._popper && this._popper.update()
      }
      _addEventListeners() {
        H.on(this._element, "click.bs.dropdown", t => {
          t.preventDefault(), this.toggle()
        })
      }
      _completeHide(t) {
        H.trigger(this._element, "hide.bs.dropdown", t).defaultPrevented || ("ontouchstart" in document.documentElement && [].concat(...document.body.children).forEach(t => H.off(t, "mouseover", p)), this._popper && this._popper.destroy(), this._menu.classList.remove("show"), this._element.classList.remove("show"), this._element.setAttribute("aria-expanded", "false"), U.removeDataAttribute(this._menu, "popper"), H.trigger(this._element, "hidden.bs.dropdown", t))
      }
      _getConfig(t) {
        if (t = {
            ...this.constructor.Default,
            ...U.getDataAttributes(this._element),
            ...t
          }, d("dropdown", t, this.constructor.DefaultType), "object" == typeof t.reference && !a(t.reference) && "function" != typeof t.reference.getBoundingClientRect) throw new TypeError("dropdown".toUpperCase() + ': Option "reference" provided type "object" without a required "getBoundingClientRect" method.');
        return t
      }
      _getMenuElement() {
        return t.next(this._element, ".dropdown-menu")[0]
      }
      _getPlacement() {
        const t = this._element.parentNode;
        if (t.classList.contains("dropend")) return _e;
        if (t.classList.contains("dropstart")) return be;
        const e = "end" === getComputedStyle(this._menu).getPropertyValue("--bs-position").trim();
        return t.classList.contains("dropup") ? e ? pe : fe : e ? ge : me
      }
      _detectNavbar() {
        return null !== this._element.closest(".navbar")
      }
      _getOffset() {
        const {
          offset: t
        } = this._config;
        return "string" == typeof t ? t.split(",").map(t => Number.parseInt(t, 10)) : "function" == typeof t ? e => t(e, this._element) : t
      }
      _getPopperConfig() {
        const t = {
          placement: this._getPlacement(),
          modifiers: [{
            name: "preventOverflow",
            options: {
              boundary: this._config.boundary
            }
          }, {
            name: "offset",
            options: {
              offset: this._getOffset()
            }
          }]
        };
        return "static" === this._config.display && (t.modifiers = [{
          name: "applyStyles",
          enabled: !1
        }]), {
          ...t,
          ..."function" == typeof this._config.popperConfig ? this._config.popperConfig(t) : this._config.popperConfig
        }
      }
      _selectMenuItem(e) {
        const i = t.find(".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)", this._menu).filter(h);
        if (!i.length) return;
        let n = i.indexOf(e.target);
        "ArrowUp" === e.key && n > 0 && n--, "ArrowDown" === e.key && n < i.length - 1 && n++, n = -1 === n ? 0 : n, i[n].focus()
      }
      static dropdownInterface(t, e) {
        let i = w.get(t, "bs.dropdown");
        if (i || (i = new we(t, "object" == typeof e ? e : null)), "string" == typeof e) {
          if (void 0 === i[e]) throw new TypeError(`No method named "${e}"`);
          i[e]()
        }
      }
      static jQueryInterface(t) {
        return this.each((function () {
          we.dropdownInterface(this, t)
        }))
      }
      static clearMenus(e) {
        if (e && (2 === e.button || "keyup" === e.type && "Tab" !== e.key)) return;
        const i = t.find('[data-bs-toggle="dropdown"]');
        for (let t = 0, n = i.length; t < n; t++) {
          const n = w.get(i[t], "bs.dropdown");
          if (!n || !1 === n._config.autoClose) continue;
          if (!n._element.classList.contains("show")) continue;
          const s = {
            relatedTarget: n._element
          };
          if (e) {
            const t = e.composedPath(),
              i = t.includes(n._menu);
            if (t.includes(n._element) || "inside" === n._config.autoClose && !i || "outside" === n._config.autoClose && i) continue;
            if (n._menu.contains(e.target) && ("keyup" === e.type && "Tab" === e.key || /input|select|option|textarea|form/i.test(e.target.tagName))) continue;
            "click" === e.type && (s.clickEvent = e)
          }
          n._completeHide(s)
        }
      }
      static getParentFromElement(t) {
        return s(t) || t.parentNode
      }
      static dataApiKeydownHandler(e) {
        if (/input|textarea/i.test(e.target.tagName) ? "Space" === e.key || "Escape" !== e.key && ("ArrowDown" !== e.key && "ArrowUp" !== e.key || e.target.closest(".dropdown-menu")) : !ue.test(e.key)) return;
        const i = this.classList.contains("show");
        if (!i && "Escape" === e.key) return;
        if (e.preventDefault(), e.stopPropagation(), u(this)) return;
        const n = () => this.matches('[data-bs-toggle="dropdown"]') ? this : t.prev(this, '[data-bs-toggle="dropdown"]')[0];
        if ("Escape" === e.key) return n().focus(), void we.clearMenus();
        i || "ArrowUp" !== e.key && "ArrowDown" !== e.key ? i && "Space" !== e.key ? we.getInstance(n())._selectMenuItem(e) : we.clearMenus() : n().click()
      }
    }
    H.on(document, "keydown.bs.dropdown.data-api", '[data-bs-toggle="dropdown"]', we.dataApiKeydownHandler), H.on(document, "keydown.bs.dropdown.data-api", ".dropdown-menu", we.dataApiKeydownHandler), H.on(document, "click.bs.dropdown.data-api", we.clearMenus), H.on(document, "keyup.bs.dropdown.data-api", we.clearMenus), H.on(document, "click.bs.dropdown.data-api", '[data-bs-toggle="dropdown"]', (function (t) {
      t.preventDefault(), we.dropdownInterface(this)
    })), b(we);
    const Ee = () => {
        const t = document.documentElement.clientWidth;
        return Math.abs(window.innerWidth - t)
      },
      Te = (t = Ee()) => {
        Ae(), Le("body", "paddingRight", e => e + t), Le(".fixed-top, .fixed-bottom, .is-fixed, .sticky-top", "paddingRight", e => e + t), Le(".sticky-top", "marginRight", e => e - t)
      },
      Ae = () => {
        const t = document.body.style.overflow;
        t && U.setDataAttribute(document.body, "overflow", t), document.body.style.overflow = "hidden"
      },
      Le = (e, i, n) => {
        const s = Ee();
        t.find(e).forEach(t => {
          if (t !== document.body && window.innerWidth > t.clientWidth + s) return;
          const e = t.style[i],
            o = window.getComputedStyle(t)[i];
          U.setDataAttribute(t, i, e), t.style[i] = n(Number.parseFloat(o)) + "px"
        })
      },
      Oe = () => {
        ke("body", "overflow"), ke("body", "paddingRight"), ke(".fixed-top, .fixed-bottom, .is-fixed, .sticky-top", "paddingRight"), ke(".sticky-top", "marginRight")
      },
      ke = (e, i) => {
        t.find(e).forEach(t => {
          const e = U.getDataAttribute(t, i);
          void 0 === e ? t.style.removeProperty(i) : (U.removeDataAttribute(t, i), t.style[i] = e)
        })
      },
      Ce = {
        isVisible: !0,
        isAnimated: !1,
        rootElement: document.body,
        clickCallback: null
      },
      xe = {
        isVisible: "boolean",
        isAnimated: "boolean",
        rootElement: "element",
        clickCallback: "(function|null)"
      };
    class De {
      constructor(t) {
        this._config = this._getConfig(t), this._isAppended = !1, this._element = null
      }
      show(t) {
        this._config.isVisible ? (this._append(), this._config.isAnimated && m(this._getElement()), this._getElement().classList.add("show"), this._emulateAnimation(() => {
          v(t)
        })) : v(t)
      }
      hide(t) {
        this._config.isVisible ? (this._getElement().classList.remove("show"), this._emulateAnimation(() => {
          this.dispose(), v(t)
        })) : v(t)
      }
      _getElement() {
        if (!this._element) {
          const t = document.createElement("div");
          t.className = "modal-backdrop", this._config.isAnimated && t.classList.add("fade"), this._element = t
        }
        return this._element
      }
      _getConfig(t) {
        return (t = {
          ...Ce,
          ..."object" == typeof t ? t : {}
        }).rootElement = t.rootElement || document.body, d("backdrop", t, xe), t
      }
      _append() {
        this._isAppended || (this._config.rootElement.appendChild(this._getElement()), H.on(this._getElement(), "mousedown.bs.backdrop", () => {
          v(this._config.clickCallback)
        }), this._isAppended = !0)
      }
      dispose() {
        this._isAppended && (H.off(this._element, "mousedown.bs.backdrop"), this._getElement().parentNode.removeChild(this._element), this._isAppended = !1)
      }
      _emulateAnimation(t) {
        if (!this._config.isAnimated) return void v(t);
        const e = o(this._getElement());
        H.one(this._getElement(), "transitionend", () => v(t)), c(this._getElement(), e)
      }
    }
    const Ne = {
        backdrop: !0,
        keyboard: !0,
        focus: !0
      },
      Se = {
        backdrop: "(boolean|string)",
        keyboard: "boolean",
        focus: "boolean"
      };
    class Ie extends R {
      constructor(e, i) {
        super(e), this._config = this._getConfig(i), this._dialog = t.findOne(".modal-dialog", this._element), this._backdrop = this._initializeBackDrop(), this._isShown = !1, this._ignoreBackdropClick = !1, this._isTransitioning = !1
      }
      static get Default() {
        return Ne
      }
      static get NAME() {
        return "modal"
      }
      toggle(t) {
        return this._isShown ? this.hide() : this.show(t)
      }
      show(t) {
        if (this._isShown || this._isTransitioning) return;
        this._isAnimated() && (this._isTransitioning = !0);
        const e = H.trigger(this._element, "show.bs.modal", {
          relatedTarget: t
        });
        this._isShown || e.defaultPrevented || (this._isShown = !0, Te(), document.body.classList.add("modal-open"), this._adjustDialog(), this._setEscapeEvent(), this._setResizeEvent(), H.on(this._element, "click.dismiss.bs.modal", '[data-bs-dismiss="modal"]', t => this.hide(t)), H.on(this._dialog, "mousedown.dismiss.bs.modal", () => {
          H.one(this._element, "mouseup.dismiss.bs.modal", t => {
            t.target === this._element && (this._ignoreBackdropClick = !0)
          })
        }), this._showBackdrop(() => this._showElement(t)))
      }
      hide(t) {
        if (t && t.preventDefault(), !this._isShown || this._isTransitioning) return;
        if (H.trigger(this._element, "hide.bs.modal").defaultPrevented) return;
        this._isShown = !1;
        const e = this._isAnimated();
        e && (this._isTransitioning = !0), this._setEscapeEvent(), this._setResizeEvent(), H.off(document, "focusin.bs.modal"), this._element.classList.remove("show"), H.off(this._element, "click.dismiss.bs.modal"), H.off(this._dialog, "mousedown.dismiss.bs.modal"), this._queueCallback(() => this._hideModal(), this._element, e)
      }
      dispose() {
        [window, this._dialog].forEach(t => H.off(t, ".bs.modal")), this._backdrop.dispose(), super.dispose(), H.off(document, "focusin.bs.modal")
      }
      handleUpdate() {
        this._adjustDialog()
      }
      _initializeBackDrop() {
        return new De({
          isVisible: Boolean(this._config.backdrop),
          isAnimated: this._isAnimated()
        })
      }
      _getConfig(t) {
        return t = {
          ...Ne,
          ...U.getDataAttributes(this._element),
          ...t
        }, d("modal", t, Se), t
      }
      _showElement(e) {
        const i = this._isAnimated(),
          n = t.findOne(".modal-body", this._dialog);
        this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE || document.body.appendChild(this._element), this._element.style.display = "block", this._element.removeAttribute("aria-hidden"), this._element.setAttribute("aria-modal", !0), this._element.setAttribute("role", "dialog"), this._element.scrollTop = 0, n && (n.scrollTop = 0), i && m(this._element), this._element.classList.add("show"), this._config.focus && this._enforceFocus(), this._queueCallback(() => {
          this._config.focus && this._element.focus(), this._isTransitioning = !1, H.trigger(this._element, "shown.bs.modal", {
            relatedTarget: e
          })
        }, this._dialog, i)
      }
      _enforceFocus() {
        H.off(document, "focusin.bs.modal"), H.on(document, "focusin.bs.modal", t => {
          document === t.target || this._element === t.target || this._element.contains(t.target) || this._element.focus()
        })
      }
      _setEscapeEvent() {
        this._isShown ? H.on(this._element, "keydown.dismiss.bs.modal", t => {
          this._config.keyboard && "Escape" === t.key ? (t.preventDefault(), this.hide()) : this._config.keyboard || "Escape" !== t.key || this._triggerBackdropTransition()
        }) : H.off(this._element, "keydown.dismiss.bs.modal")
      }
      _setResizeEvent() {
        this._isShown ? H.on(window, "resize.bs.modal", () => this._adjustDialog()) : H.off(window, "resize.bs.modal")
      }
      _hideModal() {
        this._element.style.display = "none", this._element.setAttribute("aria-hidden", !0), this._element.removeAttribute("aria-modal"), this._element.removeAttribute("role"), this._isTransitioning = !1, this._backdrop.hide(() => {
          document.body.classList.remove("modal-open"), this._resetAdjustments(), Oe(), H.trigger(this._element, "hidden.bs.modal")
        })
      }
      _showBackdrop(t) {
        H.on(this._element, "click.dismiss.bs.modal", t => {
          this._ignoreBackdropClick ? this._ignoreBackdropClick = !1 : t.target === t.currentTarget && (!0 === this._config.backdrop ? this.hide() : "static" === this._config.backdrop && this._triggerBackdropTransition())
        }), this._backdrop.show(t)
      }
      _isAnimated() {
        return this._element.classList.contains("fade")
      }
      _triggerBackdropTransition() {
        if (H.trigger(this._element, "hidePrevented.bs.modal").defaultPrevented) return;
        const t = this._element.scrollHeight > document.documentElement.clientHeight;
        t || (this._element.style.overflowY = "hidden"), this._element.classList.add("modal-static");
        const e = o(this._dialog);
        H.off(this._element, "transitionend"), H.one(this._element, "transitionend", () => {
          this._element.classList.remove("modal-static"), t || (H.one(this._element, "transitionend", () => {
            this._element.style.overflowY = ""
          }), c(this._element, e))
        }), c(this._element, e), this._element.focus()
      }
      _adjustDialog() {
        const t = this._element.scrollHeight > document.documentElement.clientHeight,
          e = Ee(),
          i = e > 0;
        (!i && t && !_() || i && !t && _()) && (this._element.style.paddingLeft = e + "px"), (i && !t && !_() || !i && t && _()) && (this._element.style.paddingRight = e + "px")
      }
      _resetAdjustments() {
        this._element.style.paddingLeft = "", this._element.style.paddingRight = ""
      }
      static jQueryInterface(t, e) {
        return this.each((function () {
          const i = Ie.getInstance(this) || new Ie(this, "object" == typeof t ? t : {});
          if ("string" == typeof t) {
            if (void 0 === i[t]) throw new TypeError(`No method named "${t}"`);
            i[t](e)
          }
        }))
      }
    }
    H.on(document, "click.bs.modal.data-api", '[data-bs-toggle="modal"]', (function (t) {
      const e = s(this);
      ["A", "AREA"].includes(this.tagName) && t.preventDefault(), H.one(e, "show.bs.modal", t => {
        t.defaultPrevented || H.one(e, "hidden.bs.modal", () => {
          h(this) && this.focus()
        })
      }), (Ie.getInstance(e) || new Ie(e)).toggle(this)
    })), b(Ie);
    const je = {
        backdrop: !0,
        keyboard: !0,
        scroll: !1
      },
      Pe = {
        backdrop: "boolean",
        keyboard: "boolean",
        scroll: "boolean"
      };
    class Me extends R {
      constructor(t, e) {
        super(t), this._config = this._getConfig(e), this._isShown = !1, this._backdrop = this._initializeBackDrop(), this._addEventListeners()
      }
      static get NAME() {
        return "offcanvas"
      }
      static get Default() {
        return je
      }
      toggle(t) {
        return this._isShown ? this.hide() : this.show(t)
      }
      show(t) {
        this._isShown || H.trigger(this._element, "show.bs.offcanvas", {
          relatedTarget: t
        }).defaultPrevented || (this._isShown = !0, this._element.style.visibility = "visible", this._backdrop.show(), this._config.scroll || (Te(), this._enforceFocusOnElement(this._element)), this._element.removeAttribute("aria-hidden"), this._element.setAttribute("aria-modal", !0), this._element.setAttribute("role", "dialog"), this._element.classList.add("show"), this._queueCallback(() => {
          H.trigger(this._element, "shown.bs.offcanvas", {
            relatedTarget: t
          })
        }, this._element, !0))
      }
      hide() {
        this._isShown && (H.trigger(this._element, "hide.bs.offcanvas").defaultPrevented || (H.off(document, "focusin.bs.offcanvas"), this._element.blur(), this._isShown = !1, this._element.classList.remove("show"), this._backdrop.hide(), this._queueCallback(() => {
          this._element.setAttribute("aria-hidden", !0), this._element.removeAttribute("aria-modal"), this._element.removeAttribute("role"), this._element.style.visibility = "hidden", this._config.scroll || Oe(), H.trigger(this._element, "hidden.bs.offcanvas")
        }, this._element, !0)))
      }
      dispose() {
        this._backdrop.dispose(), super.dispose(), H.off(document, "focusin.bs.offcanvas")
      }
      _getConfig(t) {
        return t = {
          ...je,
          ...U.getDataAttributes(this._element),
          ..."object" == typeof t ? t : {}
        }, d("offcanvas", t, Pe), t
      }
      _initializeBackDrop() {
        return new De({
          isVisible: this._config.backdrop,
          isAnimated: !0,
          rootElement: this._element.parentNode,
          clickCallback: () => this.hide()
        })
      }
      _enforceFocusOnElement(t) {
        H.off(document, "focusin.bs.offcanvas"), H.on(document, "focusin.bs.offcanvas", e => {
          document === e.target || t === e.target || t.contains(e.target) || t.focus()
        }), t.focus()
      }
      _addEventListeners() {
        H.on(this._element, "click.dismiss.bs.offcanvas", '[data-bs-dismiss="offcanvas"]', () => this.hide()), H.on(this._element, "keydown.dismiss.bs.offcanvas", t => {
          this._config.keyboard && "Escape" === t.key && this.hide()
        })
      }
      static jQueryInterface(t) {
        return this.each((function () {
          const e = w.get(this, "bs.offcanvas") || new Me(this, "object" == typeof t ? t : {});
          if ("string" == typeof t) {
            if (void 0 === e[t] || t.startsWith("_") || "constructor" === t) throw new TypeError(`No method named "${t}"`);
            e[t](this)
          }
        }))
      }
    }
    H.on(document, "click.bs.offcanvas.data-api", '[data-bs-toggle="offcanvas"]', (function (e) {
      const i = s(this);
      if (["A", "AREA"].includes(this.tagName) && e.preventDefault(), u(this)) return;
      H.one(i, "hidden.bs.offcanvas", () => {
        h(this) && this.focus()
      });
      const n = t.findOne(".offcanvas.show");
      n && n !== i && Me.getInstance(n).hide(), (w.get(i, "bs.offcanvas") || new Me(i)).toggle(this)
    })), H.on(window, "load.bs.offcanvas.data-api", () => {
      t.find(".offcanvas.show").forEach(t => (w.get(t, "bs.offcanvas") || new Me(t)).show())
    }), b(Me);
    const He = new Set(["background", "cite", "href", "itemtype", "longdesc", "poster", "src", "xlink:href"]),
      Re = /^(?:(?:https?|mailto|ftp|tel|file):|[^#&/:?]*(?:[#/?]|$))/i,
      Be = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[\d+/a-z]+=*$/i,
      We = (t, e) => {
        const i = t.nodeName.toLowerCase();
        if (e.includes(i)) return !He.has(i) || Boolean(Re.test(t.nodeValue) || Be.test(t.nodeValue));
        const n = e.filter(t => t instanceof RegExp);
        for (let t = 0, e = n.length; t < e; t++)
          if (n[t].test(i)) return !0;
        return !1
      };

    function qe(t, e, i) {
      if (!t.length) return t;
      if (i && "function" == typeof i) return i(t);
      const n = (new window.DOMParser).parseFromString(t, "text/html"),
        s = Object.keys(e),
        o = [].concat(...n.body.querySelectorAll("*"));
      for (let t = 0, i = o.length; t < i; t++) {
        const i = o[t],
          n = i.nodeName.toLowerCase();
        if (!s.includes(n)) {
          i.parentNode.removeChild(i);
          continue
        }
        const r = [].concat(...i.attributes),
          a = [].concat(e["*"] || [], e[n] || []);
        r.forEach(t => {
          We(t, a) || i.removeAttribute(t.nodeName)
        })
      }
      return n.body.innerHTML
    }
    const ze = new RegExp("(^|\\s)bs-tooltip\\S+", "g"),
      Ue = new Set(["sanitize", "allowList", "sanitizeFn"]),
      $e = {
        animation: "boolean",
        template: "string",
        title: "(string|element|function)",
        trigger: "string",
        delay: "(number|object)",
        html: "boolean",
        selector: "(string|boolean)",
        placement: "(string|function)",
        offset: "(array|string|function)",
        container: "(string|element|boolean)",
        fallbackPlacements: "array",
        boundary: "(string|element)",
        customClass: "(string|function)",
        sanitize: "boolean",
        sanitizeFn: "(null|function)",
        allowList: "object",
        popperConfig: "(null|object|function)"
      },
      Fe = {
        AUTO: "auto",
        TOP: "top",
        RIGHT: _() ? "left" : "right",
        BOTTOM: "bottom",
        LEFT: _() ? "right" : "left"
      },
      Ve = {
        animation: !0,
        template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
        trigger: "hover focus",
        title: "",
        delay: 0,
        html: !1,
        selector: !1,
        placement: "top",
        offset: [0, 0],
        container: !1,
        fallbackPlacements: ["top", "right", "bottom", "left"],
        boundary: "clippingParents",
        customClass: "",
        sanitize: !0,
        sanitizeFn: null,
        allowList: {
          "*": ["class", "dir", "id", "lang", "role", /^aria-[\w-]*$/i],
          a: ["target", "href", "title", "rel"],
          area: [],
          b: [],
          br: [],
          col: [],
          code: [],
          div: [],
          em: [],
          hr: [],
          h1: [],
          h2: [],
          h3: [],
          h4: [],
          h5: [],
          h6: [],
          i: [],
          img: ["src", "srcset", "alt", "title", "width", "height"],
          li: [],
          ol: [],
          p: [],
          pre: [],
          s: [],
          small: [],
          span: [],
          sub: [],
          sup: [],
          strong: [],
          u: [],
          ul: []
        },
        popperConfig: null
      },
      Ke = {
        HIDE: "hide.bs.tooltip",
        HIDDEN: "hidden.bs.tooltip",
        SHOW: "show.bs.tooltip",
        SHOWN: "shown.bs.tooltip",
        INSERTED: "inserted.bs.tooltip",
        CLICK: "click.bs.tooltip",
        FOCUSIN: "focusin.bs.tooltip",
        FOCUSOUT: "focusout.bs.tooltip",
        MOUSEENTER: "mouseenter.bs.tooltip",
        MOUSELEAVE: "mouseleave.bs.tooltip"
      };
    class Xe extends R {
      constructor(t, e) {
        if (void 0 === he) throw new TypeError("Bootstrap's tooltips require Popper (https://popper.js.org)");
        super(t), this._isEnabled = !0, this._timeout = 0, this._hoverState = "", this._activeTrigger = {}, this._popper = null, this._config = this._getConfig(e), this.tip = null, this._setListeners()
      }
      static get Default() {
        return Ve
      }
      static get NAME() {
        return "tooltip"
      }
      static get Event() {
        return Ke
      }
      static get DefaultType() {
        return $e
      }
      enable() {
        this._isEnabled = !0
      }
      disable() {
        this._isEnabled = !1
      }
      toggleEnabled() {
        this._isEnabled = !this._isEnabled
      }
      toggle(t) {
        if (this._isEnabled)
          if (t) {
            const e = this._initializeOnDelegatedTarget(t);
            e._activeTrigger.click = !e._activeTrigger.click, e._isWithActiveTrigger() ? e._enter(null, e) : e._leave(null, e)
          } else {
            if (this.getTipElement().classList.contains("show")) return void this._leave(null, this);
            this._enter(null, this)
          }
      }
      dispose() {
        clearTimeout(this._timeout), H.off(this._element.closest(".modal"), "hide.bs.modal", this._hideModalHandler), this.tip && this.tip.parentNode && this.tip.parentNode.removeChild(this.tip), this._popper && this._popper.destroy(), super.dispose()
      }
      show() {
        if ("none" === this._element.style.display) throw new Error("Please use show on visible elements");
        if (!this.isWithContent() || !this._isEnabled) return;
        const t = H.trigger(this._element, this.constructor.Event.SHOW),
          i = f(this._element),
          n = null === i ? this._element.ownerDocument.documentElement.contains(this._element) : i.contains(this._element);
        if (t.defaultPrevented || !n) return;
        const s = this.getTipElement(),
          o = e(this.constructor.NAME);
        s.setAttribute("id", o), this._element.setAttribute("aria-describedby", o), this.setContent(), this._config.animation && s.classList.add("fade");
        const r = "function" == typeof this._config.placement ? this._config.placement.call(this, s, this._element) : this._config.placement,
          a = this._getAttachment(r);
        this._addAttachmentClass(a);
        const {
          container: l
        } = this._config;
        w.set(s, this.constructor.DATA_KEY, this), this._element.ownerDocument.documentElement.contains(this.tip) || (l.appendChild(s), H.trigger(this._element, this.constructor.Event.INSERTED)), this._popper ? this._popper.update() : this._popper = de(this._element, s, this._getPopperConfig(a)), s.classList.add("show");
        const c = "function" == typeof this._config.customClass ? this._config.customClass() : this._config.customClass;
        c && s.classList.add(...c.split(" ")), "ontouchstart" in document.documentElement && [].concat(...document.body.children).forEach(t => {
          H.on(t, "mouseover", p)
        });
        const d = this.tip.classList.contains("fade");
        this._queueCallback(() => {
          const t = this._hoverState;
          this._hoverState = null, H.trigger(this._element, this.constructor.Event.SHOWN), "out" === t && this._leave(null, this)
        }, this.tip, d)
      }
      hide() {
        if (!this._popper) return;
        const t = this.getTipElement();
        if (H.trigger(this._element, this.constructor.Event.HIDE).defaultPrevented) return;
        t.classList.remove("show"), "ontouchstart" in document.documentElement && [].concat(...document.body.children).forEach(t => H.off(t, "mouseover", p)), this._activeTrigger.click = !1, this._activeTrigger.focus = !1, this._activeTrigger.hover = !1;
        const e = this.tip.classList.contains("fade");
        this._queueCallback(() => {
          this._isWithActiveTrigger() || ("show" !== this._hoverState && t.parentNode && t.parentNode.removeChild(t), this._cleanTipClass(), this._element.removeAttribute("aria-describedby"), H.trigger(this._element, this.constructor.Event.HIDDEN), this._popper && (this._popper.destroy(), this._popper = null))
        }, this.tip, e), this._hoverState = ""
      }
      update() {
        null !== this._popper && this._popper.update()
      }
      isWithContent() {
        return Boolean(this.getTitle())
      }
      getTipElement() {
        if (this.tip) return this.tip;
        const t = document.createElement("div");
        return t.innerHTML = this._config.template, this.tip = t.children[0], this.tip
      }
      setContent() {
        const e = this.getTipElement();
        this.setElementContent(t.findOne(".tooltip-inner", e), this.getTitle()), e.classList.remove("fade", "show")
      }
      setElementContent(t, e) {
        if (null !== t) return a(e) ? (e = l(e), void(this._config.html ? e.parentNode !== t && (t.innerHTML = "", t.appendChild(e)) : t.textContent = e.textContent)) : void(this._config.html ? (this._config.sanitize && (e = qe(e, this._config.allowList, this._config.sanitizeFn)), t.innerHTML = e) : t.textContent = e)
      }
      getTitle() {
        let t = this._element.getAttribute("data-bs-original-title");
        return t || (t = "function" == typeof this._config.title ? this._config.title.call(this._element) : this._config.title), t
      }
      updateAttachment(t) {
        return "right" === t ? "end" : "left" === t ? "start" : t
      }
      _initializeOnDelegatedTarget(t, e) {
        const i = this.constructor.DATA_KEY;
        return (e = e || w.get(t.delegateTarget, i)) || (e = new this.constructor(t.delegateTarget, this._getDelegateConfig()), w.set(t.delegateTarget, i, e)), e
      }
      _getOffset() {
        const {
          offset: t
        } = this._config;
        return "string" == typeof t ? t.split(",").map(t => Number.parseInt(t, 10)) : "function" == typeof t ? e => t(e, this._element) : t
      }
      _getPopperConfig(t) {
        const e = {
          placement: t,
          modifiers: [{
            name: "flip",
            options: {
              fallbackPlacements: this._config.fallbackPlacements
            }
          }, {
            name: "offset",
            options: {
              offset: this._getOffset()
            }
          }, {
            name: "preventOverflow",
            options: {
              boundary: this._config.boundary
            }
          }, {
            name: "arrow",
            options: {
              element: `.${this.constructor.NAME}-arrow`
            }
          }, {
            name: "onChange",
            enabled: !0,
            phase: "afterWrite",
            fn: t => this._handlePopperPlacementChange(t)
          }],
          onFirstUpdate: t => {
            t.options.placement !== t.placement && this._handlePopperPlacementChange(t)
          }
        };
        return {
          ...e,
          ..."function" == typeof this._config.popperConfig ? this._config.popperConfig(e) : this._config.popperConfig
        }
      }
      _addAttachmentClass(t) {
        this.getTipElement().classList.add("bs-tooltip-" + this.updateAttachment(t))
      }
      _getAttachment(t) {
        return Fe[t.toUpperCase()]
      }
      _setListeners() {
        this._config.trigger.split(" ").forEach(t => {
          if ("click" === t) H.on(this._element, this.constructor.Event.CLICK, this._config.selector, t => this.toggle(t));
          else if ("manual" !== t) {
            const e = "hover" === t ? this.constructor.Event.MOUSEENTER : this.constructor.Event.FOCUSIN,
              i = "hover" === t ? this.constructor.Event.MOUSELEAVE : this.constructor.Event.FOCUSOUT;
            H.on(this._element, e, this._config.selector, t => this._enter(t)), H.on(this._element, i, this._config.selector, t => this._leave(t))
          }
        }), this._hideModalHandler = () => {
          this._element && this.hide()
        }, H.on(this._element.closest(".modal"), "hide.bs.modal", this._hideModalHandler), this._config.selector ? this._config = {
          ...this._config,
          trigger: "manual",
          selector: ""
        } : this._fixTitle()
      }
      _fixTitle() {
        const t = this._element.getAttribute("title"),
          e = typeof this._element.getAttribute("data-bs-original-title");
        (t || "string" !== e) && (this._element.setAttribute("data-bs-original-title", t || ""), !t || this._element.getAttribute("aria-label") || this._element.textContent || this._element.setAttribute("aria-label", t), this._element.setAttribute("title", ""))
      }
      _enter(t, e) {
        e = this._initializeOnDelegatedTarget(t, e), t && (e._activeTrigger["focusin" === t.type ? "focus" : "hover"] = !0), e.getTipElement().classList.contains("show") || "show" === e._hoverState ? e._hoverState = "show" : (clearTimeout(e._timeout), e._hoverState = "show", e._config.delay && e._config.delay.show ? e._timeout = setTimeout(() => {
          "show" === e._hoverState && e.show()
        }, e._config.delay.show) : e.show())
      }
      _leave(t, e) {
        e = this._initializeOnDelegatedTarget(t, e), t && (e._activeTrigger["focusout" === t.type ? "focus" : "hover"] = e._element.contains(t.relatedTarget)), e._isWithActiveTrigger() || (clearTimeout(e._timeout), e._hoverState = "out", e._config.delay && e._config.delay.hide ? e._timeout = setTimeout(() => {
          "out" === e._hoverState && e.hide()
        }, e._config.delay.hide) : e.hide())
      }
      _isWithActiveTrigger() {
        for (const t in this._activeTrigger)
          if (this._activeTrigger[t]) return !0;
        return !1
      }
      _getConfig(t) {
        const e = U.getDataAttributes(this._element);
        return Object.keys(e).forEach(t => {
          Ue.has(t) && delete e[t]
        }), (t = {
          ...this.constructor.Default,
          ...e,
          ..."object" == typeof t && t ? t : {}
        }).container = !1 === t.container ? document.body : l(t.container), "number" == typeof t.delay && (t.delay = {
          show: t.delay,
          hide: t.delay
        }), "number" == typeof t.title && (t.title = t.title.toString()), "number" == typeof t.content && (t.content = t.content.toString()), d("tooltip", t, this.constructor.DefaultType), t.sanitize && (t.template = qe(t.template, t.allowList, t.sanitizeFn)), t
      }
      _getDelegateConfig() {
        const t = {};
        if (this._config)
          for (const e in this._config) this.constructor.Default[e] !== this._config[e] && (t[e] = this._config[e]);
        return t
      }
      _cleanTipClass() {
        const t = this.getTipElement(),
          e = t.getAttribute("class").match(ze);
        null !== e && e.length > 0 && e.map(t => t.trim()).forEach(e => t.classList.remove(e))
      }
      _handlePopperPlacementChange(t) {
        const {
          state: e
        } = t;
        e && (this.tip = e.elements.popper, this._cleanTipClass(), this._addAttachmentClass(this._getAttachment(e.placement)))
      }
      static jQueryInterface(t) {
        return this.each((function () {
          let e = w.get(this, "bs.tooltip");
          const i = "object" == typeof t && t;
          if ((e || !/dispose|hide/.test(t)) && (e || (e = new Xe(this, i)), "string" == typeof t)) {
            if (void 0 === e[t]) throw new TypeError(`No method named "${t}"`);
            e[t]()
          }
        }))
      }
    }
    b(Xe);
    const Ye = new RegExp("(^|\\s)bs-popover\\S+", "g"),
      Qe = {
        ...Xe.Default,
        placement: "right",
        offset: [0, 8],
        trigger: "click",
        content: "",
        template: '<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'
      },
      Ge = {
        ...Xe.DefaultType,
        content: "(string|element|function)"
      },
      Ze = {
        HIDE: "hide.bs.popover",
        HIDDEN: "hidden.bs.popover",
        SHOW: "show.bs.popover",
        SHOWN: "shown.bs.popover",
        INSERTED: "inserted.bs.popover",
        CLICK: "click.bs.popover",
        FOCUSIN: "focusin.bs.popover",
        FOCUSOUT: "focusout.bs.popover",
        MOUSEENTER: "mouseenter.bs.popover",
        MOUSELEAVE: "mouseleave.bs.popover"
      };
    class Je extends Xe {
      static get Default() {
        return Qe
      }
      static get NAME() {
        return "popover"
      }
      static get Event() {
        return Ze
      }
      static get DefaultType() {
        return Ge
      }
      isWithContent() {
        return this.getTitle() || this._getContent()
      }
      setContent() {
        const e = this.getTipElement();
        this.setElementContent(t.findOne(".popover-header", e), this.getTitle());
        let i = this._getContent();
        "function" == typeof i && (i = i.call(this._element)), this.setElementContent(t.findOne(".popover-body", e), i), e.classList.remove("fade", "show")
      }
      _addAttachmentClass(t) {
        this.getTipElement().classList.add("bs-popover-" + this.updateAttachment(t))
      }
      _getContent() {
        return this._element.getAttribute("data-bs-content") || this._config.content
      }
      _cleanTipClass() {
        const t = this.getTipElement(),
          e = t.getAttribute("class").match(Ye);
        null !== e && e.length > 0 && e.map(t => t.trim()).forEach(e => t.classList.remove(e))
      }
      static jQueryInterface(t) {
        return this.each((function () {
          let e = w.get(this, "bs.popover");
          const i = "object" == typeof t ? t : null;
          if ((e || !/dispose|hide/.test(t)) && (e || (e = new Je(this, i), w.set(this, "bs.popover", e)), "string" == typeof t)) {
            if (void 0 === e[t]) throw new TypeError(`No method named "${t}"`);
            e[t]()
          }
        }))
      }
    }
    b(Je);
    const ti = {
        offset: 10,
        method: "auto",
        target: ""
      },
      ei = {
        offset: "number",
        method: "string",
        target: "(string|element)"
      };
    class ii extends R {
      constructor(t, e) {
        super(t), this._scrollElement = "BODY" === this._element.tagName ? window : this._element, this._config = this._getConfig(e), this._selector = `${this._config.target} .nav-link, ${this._config.target} .list-group-item, ${this._config.target} .dropdown-item`, this._offsets = [], this._targets = [], this._activeTarget = null, this._scrollHeight = 0, H.on(this._scrollElement, "scroll.bs.scrollspy", () => this._process()), this.refresh(), this._process()
      }
      static get Default() {
        return ti
      }
      static get NAME() {
        return "scrollspy"
      }
      refresh() {
        const e = this._scrollElement === this._scrollElement.window ? "offset" : "position",
          i = "auto" === this._config.method ? e : this._config.method,
          s = "position" === i ? this._getScrollTop() : 0;
        this._offsets = [], this._targets = [], this._scrollHeight = this._getScrollHeight(), t.find(this._selector).map(e => {
          const o = n(e),
            r = o ? t.findOne(o) : null;
          if (r) {
            const t = r.getBoundingClientRect();
            if (t.width || t.height) return [U[i](r).top + s, o]
          }
          return null
        }).filter(t => t).sort((t, e) => t[0] - e[0]).forEach(t => {
          this._offsets.push(t[0]), this._targets.push(t[1])
        })
      }
      dispose() {
        H.off(this._scrollElement, ".bs.scrollspy"), super.dispose()
      }
      _getConfig(t) {
        if ("string" != typeof (t = {
            ...ti,
            ...U.getDataAttributes(this._element),
            ..."object" == typeof t && t ? t : {}
          }).target && a(t.target)) {
          let {
            id: i
          } = t.target;
          i || (i = e("scrollspy"), t.target.id = i), t.target = "#" + i
        }
        return d("scrollspy", t, ei), t
      }
      _getScrollTop() {
        return this._scrollElement === window ? this._scrollElement.pageYOffset : this._scrollElement.scrollTop
      }
      _getScrollHeight() {
        return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight)
      }
      _getOffsetHeight() {
        return this._scrollElement === window ? window.innerHeight : this._scrollElement.getBoundingClientRect().height
      }
      _process() {
        const t = this._getScrollTop() + this._config.offset,
          e = this._getScrollHeight(),
          i = this._config.offset + e - this._getOffsetHeight();
        if (this._scrollHeight !== e && this.refresh(), t >= i) {
          const t = this._targets[this._targets.length - 1];
          this._activeTarget !== t && this._activate(t)
        } else {
          if (this._activeTarget && t < this._offsets[0] && this._offsets[0] > 0) return this._activeTarget = null, void this._clear();
          for (let e = this._offsets.length; e--;) this._activeTarget !== this._targets[e] && t >= this._offsets[e] && (void 0 === this._offsets[e + 1] || t < this._offsets[e + 1]) && this._activate(this._targets[e])
        }
      }
      _activate(e) {
        this._activeTarget = e, this._clear();
        const i = this._selector.split(",").map(t => `${t}[data-bs-target="${e}"],${t}[href="${e}"]`),
          n = t.findOne(i.join(","));
        n.classList.contains("dropdown-item") ? (t.findOne(".dropdown-toggle", n.closest(".dropdown")).classList.add("active"), n.classList.add("active")) : (n.classList.add("active"), t.parents(n, ".nav, .list-group").forEach(e => {
          t.prev(e, ".nav-link, .list-group-item").forEach(t => t.classList.add("active")), t.prev(e, ".nav-item").forEach(e => {
            t.children(e, ".nav-link").forEach(t => t.classList.add("active"))
          })
        })), H.trigger(this._scrollElement, "activate.bs.scrollspy", {
          relatedTarget: e
        })
      }
      _clear() {
        t.find(this._selector).filter(t => t.classList.contains("active")).forEach(t => t.classList.remove("active"))
      }
      static jQueryInterface(t) {
        return this.each((function () {
          const e = ii.getInstance(this) || new ii(this, "object" == typeof t ? t : {});
          if ("string" == typeof t) {
            if (void 0 === e[t]) throw new TypeError(`No method named "${t}"`);
            e[t]()
          }
        }))
      }
    }
    H.on(window, "load.bs.scrollspy.data-api", () => {
      t.find('[data-bs-spy="scroll"]').forEach(t => new ii(t))
    }), b(ii);
    class ni extends R {
      static get NAME() {
        return "tab"
      }
      show() {
        if (this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && this._element.classList.contains("active")) return;
        let e;
        const i = s(this._element),
          n = this._element.closest(".nav, .list-group");
        if (n) {
          const i = "UL" === n.nodeName || "OL" === n.nodeName ? ":scope > li > .active" : ".active";
          e = t.find(i, n), e = e[e.length - 1]
        }
        const o = e ? H.trigger(e, "hide.bs.tab", {
          relatedTarget: this._element
        }) : null;
        if (H.trigger(this._element, "show.bs.tab", {
            relatedTarget: e
          }).defaultPrevented || null !== o && o.defaultPrevented) return;
        this._activate(this._element, n);
        const r = () => {
          H.trigger(e, "hidden.bs.tab", {
            relatedTarget: this._element
          }), H.trigger(this._element, "shown.bs.tab", {
            relatedTarget: e
          })
        };
        i ? this._activate(i, i.parentNode, r) : r()
      }
      _activate(e, i, n) {
        const s = (!i || "UL" !== i.nodeName && "OL" !== i.nodeName ? t.children(i, ".active") : t.find(":scope > li > .active", i))[0],
          o = n && s && s.classList.contains("fade"),
          r = () => this._transitionComplete(e, s, n);
        s && o ? (s.classList.remove("show"), this._queueCallback(r, e, !0)) : r()
      }
      _transitionComplete(e, i, n) {
        if (i) {
          i.classList.remove("active");
          const e = t.findOne(":scope > .dropdown-menu .active", i.parentNode);
          e && e.classList.remove("active"), "tab" === i.getAttribute("role") && i.setAttribute("aria-selected", !1)
        }
        e.classList.add("active"), "tab" === e.getAttribute("role") && e.setAttribute("aria-selected", !0), m(e), e.classList.contains("fade") && e.classList.add("show");
        let s = e.parentNode;
        if (s && "LI" === s.nodeName && (s = s.parentNode), s && s.classList.contains("dropdown-menu")) {
          const i = e.closest(".dropdown");
          i && t.find(".dropdown-toggle", i).forEach(t => t.classList.add("active")), e.setAttribute("aria-expanded", !0)
        }
        n && n()
      }
      static jQueryInterface(t) {
        return this.each((function () {
          const e = w.get(this, "bs.tab") || new ni(this);
          if ("string" == typeof t) {
            if (void 0 === e[t]) throw new TypeError(`No method named "${t}"`);
            e[t]()
          }
        }))
      }
    }
    H.on(document, "click.bs.tab.data-api", '[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]', (function (t) {
      ["A", "AREA"].includes(this.tagName) && t.preventDefault(), u(this) || (w.get(this, "bs.tab") || new ni(this)).show()
    })), b(ni);
    const si = {
        animation: "boolean",
        autohide: "boolean",
        delay: "number"
      },
      oi = {
        animation: !0,
        autohide: !0,
        delay: 5e3
      };
    class ri extends R {
      constructor(t, e) {
        super(t), this._config = this._getConfig(e), this._timeout = null, this._hasMouseInteraction = !1, this._hasKeyboardInteraction = !1, this._setListeners()
      }
      static get DefaultType() {
        return si
      }
      static get Default() {
        return oi
      }
      static get NAME() {
        return "toast"
      }
      show() {
        H.trigger(this._element, "show.bs.toast").defaultPrevented || (this._clearTimeout(), this._config.animation && this._element.classList.add("fade"), this._element.classList.remove("hide"), m(this._element), this._element.classList.add("showing"), this._queueCallback(() => {
          this._element.classList.remove("showing"), this._element.classList.add("show"), H.trigger(this._element, "shown.bs.toast"), this._maybeScheduleHide()
        }, this._element, this._config.animation))
      }
      hide() {
        this._element.classList.contains("show") && (H.trigger(this._element, "hide.bs.toast").defaultPrevented || (this._element.classList.remove("show"), this._queueCallback(() => {
          this._element.classList.add("hide"), H.trigger(this._element, "hidden.bs.toast")
        }, this._element, this._config.animation)))
      }
      dispose() {
        this._clearTimeout(), this._element.classList.contains("show") && this._element.classList.remove("show"), super.dispose()
      }
      _getConfig(t) {
        return t = {
          ...oi,
          ...U.getDataAttributes(this._element),
          ..."object" == typeof t && t ? t : {}
        }, d("toast", t, this.constructor.DefaultType), t
      }
      _maybeScheduleHide() {
        this._config.autohide && (this._hasMouseInteraction || this._hasKeyboardInteraction || (this._timeout = setTimeout(() => {
          this.hide()
        }, this._config.delay)))
      }
      _onInteraction(t, e) {
        switch (t.type) {
          case "mouseover":
          case "mouseout":
            this._hasMouseInteraction = e;
            break;
          case "focusin":
          case "focusout":
            this._hasKeyboardInteraction = e
        }
        if (e) return void this._clearTimeout();
        const i = t.relatedTarget;
        this._element === i || this._element.contains(i) || this._maybeScheduleHide()
      }
      _setListeners() {
        H.on(this._element, "click.dismiss.bs.toast", '[data-bs-dismiss="toast"]', () => this.hide()), H.on(this._element, "mouseover.bs.toast", t => this._onInteraction(t, !0)), H.on(this._element, "mouseout.bs.toast", t => this._onInteraction(t, !1)), H.on(this._element, "focusin.bs.toast", t => this._onInteraction(t, !0)), H.on(this._element, "focusout.bs.toast", t => this._onInteraction(t, !1))
      }
      _clearTimeout() {
        clearTimeout(this._timeout), this._timeout = null
      }
      static jQueryInterface(t) {
        return this.each((function () {
          let e = w.get(this, "bs.toast");
          if (e || (e = new ri(this, "object" == typeof t && t)), "string" == typeof t) {
            if (void 0 === e[t]) throw new TypeError(`No method named "${t}"`);
            e[t](this)
          }
        }))
      }
    }
    return b(ri), {
      Alert: B,
      Button: W,
      Carousel: Q,
      Collapse: J,
      Dropdown: we,
      Modal: Ie,
      Offcanvas: Me,
      Popover: Je,
      ScrollSpy: ii,
      Tab: ni,
      Toast: ri,
      Tooltip: Xe
    }
  }));
  //# sourceMappingURL=bootstrap.bundle.min.js.map
