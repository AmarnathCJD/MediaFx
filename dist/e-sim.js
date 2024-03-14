(function (h0, h1) {
  'use strict';

  if (typeof module == "object" && typeof module.exports == "object") {
    module.exports = h0.document ? h1(h0, true) : function (h2) {
      if (h2.document) {
        return h1(h2);
      }
      throw new Error("jQuery requires a window with a document");
    };
  } else {
    h1(h0);
  }
})(typeof window != "undefined" ? window : this, function (h0, h1) {
  'use strict';

  function h2(Vu) {
    return typeof Vu == "function" && typeof Vu.nodeType != "number";
  }
  function h3(Vu) {
    return Vu != null && Vu === Vu.window;
  }
  var h4 = [];
  var h5 = h0.document;
  var h6 = Object.getPrototypeOf;
  var h7 = h4.slice;
  var h8 = h4.concat;
  var h9 = h4.push;
  var hh = h4.indexOf;
  var hL = {};
  var hV = hL.toString;
  var hK = hL.hasOwnProperty;
  var hw = hK.toString;
  var hX = hw.call(Object);
  var hg = {};
  var hl = {
    type: true,
    src: true,
    noModule: true
  };
  function hM(Vu, VW, Vy) {
    var VZ;
    var VG = (VW = VW || h5).createElement("script");
    VG.text = Vu;
    if (Vy) {
      for (VZ in hl) {
        if (Vy[VZ]) {
          VG[VZ] = Vy[VZ];
        }
      }
    }
    VW.head.appendChild(VG).parentNode.removeChild(VG);
  }
  function ho(Vu) {
    if (Vu == null) {
      return Vu + "";
    } else if (typeof Vu == "object" || typeof Vu == "function") {
      return hL[hV.call(Vu)] || "object";
    } else {
      return typeof Vu;
    }
  }
  function hr(Vu, VW) {
    return new hr.fn.init(Vu, VW);
  }
  var ha = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
  function hx(Vu) {
    var VW = !!Vu && "length" in Vu && Vu.length;
    var Vy = ho(Vu);
    return !h2(Vu) && !h3(Vu) && (Vy === "array" || VW === 0 || typeof VW == "number" && VW > 0 && VW - 1 in Vu);
  }
  hr.fn = hr.prototype = {
    jquery: "3.3.1",
    constructor: hr,
    length: 0,
    toArray: function () {
      return h7.call(this);
    },
    get: function (Vu) {
      if (Vu == null) {
        return h7.call(this);
      } else if (Vu < 0) {
        return this[Vu + this.length];
      } else {
        return this[Vu];
      }
    },
    pushStack: function (Vu) {
      Vu = hr.merge(this.constructor(), Vu);
      Vu.prevObject = this;
      return Vu;
    },
    each: function (Vu) {
      return hr.each(this, Vu);
    },
    map: function (Vu) {
      return this.pushStack(hr.map(this, function (VW, Vy) {
        return Vu.call(VW, Vy, VW);
      }));
    },
    slice: function () {
      return this.pushStack(h7.apply(this, arguments));
    },
    first: function () {
      return this.eq(0);
    },
    last: function () {
      return this.eq(-1);
    },
    eq: function (Vu) {
      var VW = this.length;
      var Vu = +Vu + (Vu < 0 ? VW : 0);
      return this.pushStack(Vu >= 0 && Vu < VW ? [this[Vu]] : []);
    },
    end: function () {
      return this.prevObject || this.constructor();
    },
    push: h9,
    sort: h4.sort,
    splice: h4.splice
  };
  hr.extend = hr.fn.extend = function () {
    var Vu;
    var VW;
    var Vy;
    var VZ;
    var VG;
    var VE = arguments[0] || {};
    var Vz = 1;
    var Vv = arguments.length;
    var Vi = false;
    if (typeof VE == "boolean") {
      Vi = VE;
      VE = arguments[Vz] || {};
      Vz++;
    }
    if (typeof VE != "object" && !h2(VE)) {
      VE = {};
    }
    if (Vz === Vv) {
      VE = this;
      Vz--;
    }
    for (; Vz < Vv; Vz++) {
      if ((Vu = arguments[Vz]) != null) {
        for (VW in Vu) {
          VG = VE[VW];
          if (VE !== (Vy = Vu[VW])) {
            if (Vi && Vy && (hr.isPlainObject(Vy) || (VZ = Array.isArray(Vy)))) {
              VG = VZ ? (VZ = false, VG && Array.isArray(VG) ? VG : []) : VG && hr.isPlainObject(VG) ? VG : {};
              VE[VW] = hr.extend(Vi, VG, Vy);
            } else if (Vy !== undefined) {
              VE[VW] = Vy;
            }
          }
        }
      }
    }
    return VE;
  };
  hr.extend({
    expando: "jQuery" + ("3.3.1" + Math.random()).replace(/\D/g, ""),
    isReady: true,
    error: function (Vu) {
      throw new Error(Vu);
    },
    noop: function () {},
    isPlainObject: function (Vu) {
      return !!Vu && hV.call(Vu) === "[object Object]" && (!(Vu = h6(Vu)) || typeof (Vu = hK.call(Vu, "constructor") && Vu.constructor) == "function" && hw.call(Vu) === hX);
    },
    isEmptyObject: function (Vu) {
      for (var VW in Vu) {
        return false;
      }
      return true;
    },
    globalEval: function (Vu) {
      hM(Vu);
    },
    each: function (Vu, VW) {
      var Vy;
      var VZ = 0;
      if (hx(Vu)) {
        for (Vy = Vu.length; VZ < Vy && VW.call(Vu[VZ], VZ, Vu[VZ]) !== false; VZ++);
      } else {
        for (VZ in Vu) {
          if (VW.call(Vu[VZ], VZ, Vu[VZ]) === false) {
            break;
          }
        }
      }
      return Vu;
    },
    trim: function (Vu) {
      if (Vu == null) {
        return "";
      } else {
        return (Vu + "").replace(ha, "");
      }
    },
    makeArray: function (Vu, VW) {
      VW = VW || [];
      if (Vu != null) {
        if (hx(Object(Vu))) {
          hr.merge(VW, typeof Vu == "string" ? [Vu] : Vu);
        } else {
          h9.call(VW, Vu);
        }
      }
      return VW;
    },
    inArray: function (Vu, VW, Vy) {
      if (VW == null) {
        return -1;
      } else {
        return hh.call(VW, Vu, Vy);
      }
    },
    merge: function (Vu, VW) {
      for (var Vy = +VW.length, VZ = 0, VG = Vu.length; VZ < Vy; VZ++) {
        Vu[VG++] = VW[VZ];
      }
      Vu.length = VG;
      return Vu;
    },
    grep: function (Vu, VW, Vy) {
      var VZ = [];
      for (var VG = 0, VE = Vu.length, Vz = !Vy; VG < VE; VG++) {
        if (!VW(Vu[VG], VG) != Vz) {
          VZ.push(Vu[VG]);
        }
      }
      return VZ;
    },
    map: function (Vu, VW, Vy) {
      var VZ;
      var VG;
      var VE = 0;
      var Vz = [];
      if (hx(Vu)) {
        for (VZ = Vu.length; VE < VZ; VE++) {
          if ((VG = VW(Vu[VE], VE, Vy)) != null) {
            Vz.push(VG);
          }
        }
      } else {
        for (VE in Vu) {
          if ((VG = VW(Vu[VE], VE, Vy)) != null) {
            Vz.push(VG);
          }
        }
      }
      return h8.apply([], Vz);
    },
    guid: 1,
    support: hg
  });
  if (typeof Symbol == "function") {
    hr.fn[Symbol.iterator] = h4[Symbol.iterator];
  }
  hr.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (Vu, VW) {
    hL["[object " + VW + "]"] = VW.toLowerCase();
  });
  function hb(Vu, VW, Vy) {
    var VZ = [];
    var VG = Vy !== undefined;
    while ((Vu = Vu[VW]) && Vu.nodeType !== 9) {
      if (Vu.nodeType === 1) {
        if (VG && hr(Vu).is(Vy)) {
          break;
        }
        VZ.push(Vu);
      }
    }
    return VZ;
  }
  function hc(Vu, VW) {
    var Vy = [];
    for (; Vu; Vu = Vu.nextSibling) {
      if (Vu.nodeType === 1 && Vu !== VW) {
        Vy.push(Vu);
      }
    }
    return Vy;
  }
  var h4 = function (Vu) {
    function VW(Kf, KC, KU) {
      var KR = "0x" + KC - 65536;
      if (KR != KR || KU) {
        return KC;
      } else if (KR < 0) {
        return String.fromCharCode(65536 + KR);
      } else {
        return String.fromCharCode(KR >> 10 | 55296, KR & 1023 | 56320);
      }
    }
    function Vy(Kf, KC) {
      if (KC) {
        if (Kf === "\0") {
          return "�";
        } else {
          return Kf.slice(0, -1) + "\\" + Kf.charCodeAt(Kf.length - 1).toString(16) + " ";
        }
      } else {
        return "\\" + Kf;
      }
    }
    function VZ() {
      Vf();
    }
    var VG;
    var VE;
    var Vz;
    var Vv;
    var Vi;
    var VT;
    var VQ;
    var VI;
    var VO;
    var Vs;
    var VY;
    var Vf;
    var VC;
    var VU;
    var VR;
    var VJ;
    var VD;
    var Vd;
    var K0;
    var K1 = "sizzle" + +new Date();
    var K2 = Vu.document;
    var K3 = 0;
    var K4 = 0;
    var K5 = Ku();
    var K6 = Ku();
    var K7 = Ku();
    function K8(Kf, KC) {
      if (Kf === KC) {
        VY = true;
      }
      return 0;
    }
    var K9 = {}.hasOwnProperty;
    var Kh = [];
    var KL = Kh.pop;
    var KV = Kh.push;
    var KK = Kh.push;
    var Kw = Kh.slice;
    function KX(Kf, KC) {
      for (var KU = 0, KR = Kf.length; KU < KR; KU++) {
        if (Kf[KU] === KC) {
          return KU;
        }
      }
      return -1;
    }
    var Kg = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped";
    var Kl = "[\\x20\\t\\r\\n\\f]";
    var KM = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+";
    var Ko = "\\[" + Kl + "*(" + KM + ")(?:" + Kl + "*([*^$|!~]?=)" + Kl + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + KM + "))|)" + Kl + "*\\]";
    var Kr = ":(" + KM + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + Ko + ")*)|.*)\\)|)";
    var Ka = new RegExp(Kl + "+", "g");
    var Kx = new RegExp("^" + Kl + "+|((?:^|[^\\\\])(?:\\\\.)*)" + Kl + "+$", "g");
    var Kb = new RegExp("^" + Kl + "*," + Kl + "*");
    var Kc = new RegExp("^" + Kl + "*([>+~]|" + Kl + ")" + Kl + "*");
    var Km = new RegExp("=" + Kl + "*([^\\]'\"]*?)" + Kl + "*\\]", "g");
    var KB = new RegExp(Kr);
    var KA = new RegExp("^" + KM + "$");
    var Kj = {
      ID: new RegExp("^#(" + KM + ")"),
      CLASS: new RegExp("^\\.(" + KM + ")"),
      TAG: new RegExp("^(" + KM + "|[*])"),
      ATTR: new RegExp("^" + Ko),
      PSEUDO: new RegExp("^" + Kr),
      CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + Kl + "*(even|odd|(([+-]|)(\\d*)n|)" + Kl + "*(?:([+-]|)" + Kl + "*(\\d+)|))" + Kl + "*\\)|)", "i"),
      bool: new RegExp("^(?:" + Kg + ")$", "i"),
      needsContext: new RegExp("^" + Kl + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + Kl + "*((?:-\\d)?\\d*)" + Kl + "*\\)|)(?=[^-]|$)", "i")
    };
    var KF = /^(?:input|select|textarea|button)$/i;
    var KN = /^h\d$/i;
    var KP = /^[^{]+\{\s*\[native \w/;
    var Kn = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/;
    var KS = /[+~]/;
    var Kp = new RegExp("\\\\([\\da-f]{1,6}" + Kl + "?|(" + Kl + ")|.)", "ig");
    var KH = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g;
    var Kk = KQ(function (Kf) {
      return Kf.disabled === true && ("form" in Kf || "label" in Kf);
    }, {
      dir: "parentNode",
      next: "legend"
    });
    try {
      KK.apply(Kh = Kw.call(K2.childNodes), K2.childNodes);
      Kh[K2.childNodes.length].nodeType;
    } catch (Kf) {
      KK = {
        apply: Kh.length ? function (KC, KU) {
          KV.apply(KC, Kw.call(KU));
        } : function (KC, KU) {
          for (var KR = KC.length, KJ = 0; KC[KR++] = KU[KJ++];);
          KC.length = KR - 1;
        }
      };
    }
    function Kq(KC, KU, KR, KJ) {
      var KD;
      var Kd;
      var w0;
      var w1;
      var w2;
      var w3;
      var w4;
      var w5 = KU && KU.ownerDocument;
      var w6 = KU ? KU.nodeType : 9;
      KR = KR || [];
      if (typeof KC != "string" || !KC || w6 !== 1 && w6 !== 9 && w6 !== 11) {
        return KR;
      }
      if (!KJ && ((KU ? KU.ownerDocument || KU : K2) !== VC && Vf(KU), KU = KU || VC, VR)) {
        if (w6 !== 11 && (w2 = Kn.exec(KC))) {
          if (KD = w2[1]) {
            if (w6 === 9) {
              if (!(w0 = KU.getElementById(KD))) {
                return KR;
              }
              if (w0.id === KD) {
                KR.push(w0);
                return KR;
              }
            } else if (w5 && (w0 = w5.getElementById(KD)) && K0(KU, w0) && w0.id === KD) {
              KR.push(w0);
              return KR;
            }
          } else {
            if (w2[2]) {
              KK.apply(KR, KU.getElementsByTagName(KC));
              return KR;
            }
            if ((KD = w2[3]) && VE.getElementsByClassName && KU.getElementsByClassName) {
              KK.apply(KR, KU.getElementsByClassName(KD));
              return KR;
            }
          }
        }
        if (VE.qsa && !K7[KC + " "] && (!VJ || !VJ.test(KC))) {
          if (w6 !== 1) {
            w5 = KU;
            w4 = KC;
          } else if (KU.nodeName.toLowerCase() !== "object") {
            if (w1 = KU.getAttribute("id")) {
              w1 = w1.replace(KH, Vy);
            } else {
              KU.setAttribute("id", w1 = K1);
            }
            Kd = (w3 = VT(KC)).length;
            while (Kd--) {
              w3[Kd] = "#" + w1 + " " + KT(w3[Kd]);
            }
            w4 = w3.join(",");
            w5 = KS.test(KC) && Kv(KU.parentNode) || KU;
          }
          if (w4) {
            try {
              KK.apply(KR, w5.querySelectorAll(w4));
              return KR;
            } catch (w7) {} finally {
              if (w1 === K1) {
                KU.removeAttribute("id");
              }
            }
          }
        }
      }
      return VI(KC.replace(Kx, "$1"), KU, KR, KJ);
    }
    function Ku() {
      var KC = [];
      function KU(KR, KJ) {
        if (KC.push(KR + " ") > Vz.cacheLength) {
          delete KU[KC.shift()];
        }
        return KU[KR + " "] = KJ;
      }
      return KU;
    }
    function KW(KC) {
      KC[K1] = true;
      return KC;
    }
    function Ky(KC) {
      var KU = VC.createElement("fieldset");
      try {
        return !!KC(KU);
      } catch (KR) {
        return false;
      } finally {
        if (KU.parentNode) {
          KU.parentNode.removeChild(KU);
        }
      }
    }
    function KZ(KC, KU) {
      var KR = KC.split("|");
      for (var KJ = KR.length; KJ--;) {
        Vz.attrHandle[KR[KJ]] = KU;
      }
    }
    function KG(KC, KU) {
      var KR = KU && KC;
      var KJ = KR && KC.nodeType === 1 && KU.nodeType === 1 && KC.sourceIndex - KU.sourceIndex;
      if (KJ) {
        return KJ;
      }
      if (KR) {
        while (KR = KR.nextSibling) {
          if (KR === KU) {
            return -1;
          }
        }
      }
      if (KC) {
        return 1;
      } else {
        return -1;
      }
    }
    function KE(KC) {
      return function (KU) {
        if ("form" in KU) {
          if (KU.parentNode && KU.disabled === false) {
            if ("label" in KU) {
              if ("label" in KU.parentNode) {
                return KU.parentNode.disabled === KC;
              } else {
                return KU.disabled === KC;
              }
            } else {
              return KU.isDisabled === KC || KU.isDisabled !== !KC && Kk(KU) === KC;
            }
          } else {
            return KU.disabled === KC;
          }
        } else {
          return "label" in KU && KU.disabled === KC;
        }
      };
    }
    function Kz(KC) {
      return KW(function (KU) {
        KU = +KU;
        return KW(function (KR, KJ) {
          var KD;
          var Kd = KC([], KR.length, KU);
          for (var w0 = Kd.length; w0--;) {
            if (KR[KD = Kd[w0]]) {
              KR[KD] = !(KJ[KD] = KR[KD]);
            }
          }
        });
      });
    }
    function Kv(KC) {
      return KC && KC.getElementsByTagName !== undefined && KC;
    }
    VE = Kq.support = {};
    Vi = Kq.isXML = function (KC) {
      KC = KC && (KC.ownerDocument || KC).documentElement;
      return !!KC && KC.nodeName !== "HTML";
    };
    Vf = Kq.setDocument = function (KC) {
      var KC = KC ? KC.ownerDocument || KC : K2;
      if (KC !== VC && KC.nodeType === 9 && KC.documentElement) {
        VU = (VC = KC).documentElement;
        VR = !Vi(VC);
        if (K2 !== VC && (KC = VC.defaultView) && KC.top !== KC) {
          if (KC.addEventListener) {
            KC.addEventListener("unload", VZ, false);
          } else if (KC.attachEvent) {
            KC.attachEvent("onunload", VZ);
          }
        }
        VE.attributes = Ky(function (KU) {
          KU.className = "i";
          return !KU.getAttribute("className");
        });
        VE.getElementsByTagName = Ky(function (KU) {
          KU.appendChild(VC.createComment(""));
          return !KU.getElementsByTagName("*").length;
        });
        VE.getElementsByClassName = KP.test(VC.getElementsByClassName);
        VE.getById = Ky(function (KU) {
          VU.appendChild(KU).id = K1;
          return !VC.getElementsByName || !VC.getElementsByName(K1).length;
        });
        if (VE.getById) {
          Vz.filter.ID = function (KU) {
            var KR = KU.replace(Kp, VW);
            return function (KJ) {
              return KJ.getAttribute("id") === KR;
            };
          };
          Vz.find.ID = function (KU, KR) {
            if (KR.getElementById !== undefined && VR) {
              if (KR = KR.getElementById(KU)) {
                return [KR];
              } else {
                return [];
              }
            }
          };
        } else {
          Vz.filter.ID = function (KU) {
            var KR = KU.replace(Kp, VW);
            return function (KJ) {
              KJ = KJ.getAttributeNode !== undefined && KJ.getAttributeNode("id");
              return KJ && KJ.value === KR;
            };
          };
          Vz.find.ID = function (KU, KR) {
            if (KR.getElementById !== undefined && VR) {
              var KJ;
              var KD;
              var Kd;
              var w0 = KR.getElementById(KU);
              if (w0) {
                if ((KJ = w0.getAttributeNode("id")) && KJ.value === KU) {
                  return [w0];
                }
                Kd = KR.getElementsByName(KU);
                KD = 0;
                while (w0 = Kd[KD++]) {
                  if ((KJ = w0.getAttributeNode("id")) && KJ.value === KU) {
                    return [w0];
                  }
                }
              }
              return [];
            }
          };
        }
        Vz.find.TAG = VE.getElementsByTagName ? function (KU, KR) {
          if (KR.getElementsByTagName !== undefined) {
            return KR.getElementsByTagName(KU);
          } else if (VE.qsa) {
            return KR.querySelectorAll(KU);
          } else {
            return undefined;
          }
        } : function (KU, KR) {
          var KJ;
          var KD = [];
          var Kd = 0;
          var w0 = KR.getElementsByTagName(KU);
          if (KU !== "*") {
            return w0;
          }
          while (KJ = w0[Kd++]) {
            if (KJ.nodeType === 1) {
              KD.push(KJ);
            }
          }
          return KD;
        };
        Vz.find.CLASS = VE.getElementsByClassName && function (KU, KR) {
          if (KR.getElementsByClassName !== undefined && VR) {
            return KR.getElementsByClassName(KU);
          }
        };
        VD = [];
        VJ = [];
        if (VE.qsa = KP.test(VC.querySelectorAll)) {
          Ky(function (KU) {
            VU.appendChild(KU).innerHTML = "<a id='" + K1 + "'></a><select id='" + K1 + "-\r\\' msallowcapture=''><option selected=''></option></select>";
            if (KU.querySelectorAll("[msallowcapture^='']").length) {
              VJ.push("[*^$]=" + Kl + "*(?:''|\"\")");
            }
            if (!KU.querySelectorAll("[selected]").length) {
              VJ.push("\\[" + Kl + "*(?:value|" + Kg + ")");
            }
            if (!KU.querySelectorAll("[id~=" + K1 + "-]").length) {
              VJ.push("~=");
            }
            if (!KU.querySelectorAll(":checked").length) {
              VJ.push(":checked");
            }
            if (!KU.querySelectorAll("a#" + K1 + "+*").length) {
              VJ.push(".#.+[+~]");
            }
          });
          Ky(function (KU) {
            KU.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
            var KR = VC.createElement("input");
            KR.setAttribute("type", "hidden");
            KU.appendChild(KR).setAttribute("name", "D");
            if (KU.querySelectorAll("[name=d]").length) {
              VJ.push("name" + Kl + "*[*^$|!~]?=");
            }
            if (KU.querySelectorAll(":enabled").length !== 2) {
              VJ.push(":enabled", ":disabled");
            }
            VU.appendChild(KU).disabled = true;
            if (KU.querySelectorAll(":disabled").length !== 2) {
              VJ.push(":enabled", ":disabled");
            }
            KU.querySelectorAll("*,:x");
            VJ.push(",.*:");
          });
        }
        if (VE.matchesSelector = KP.test(Vd = VU.matches || VU.webkitMatchesSelector || VU.mozMatchesSelector || VU.oMatchesSelector || VU.msMatchesSelector)) {
          Ky(function (KU) {
            VE.disconnectedMatch = Vd.call(KU, "*");
            Vd.call(KU, "[s!='']:x");
            VD.push("!=", Kr);
          });
        }
        VJ = VJ.length && new RegExp(VJ.join("|"));
        VD = VD.length && new RegExp(VD.join("|"));
        KC = KP.test(VU.compareDocumentPosition);
        K0 = KC || KP.test(VU.contains) ? function (KU, KR) {
          var KJ = KU.nodeType === 9 ? KU.documentElement : KU;
          var KR = KR && KR.parentNode;
          return KU === KR || !!KR && KR.nodeType === 1 && !!(KJ.contains ? KJ.contains(KR) : KU.compareDocumentPosition && KU.compareDocumentPosition(KR) & 16);
        } : function (KU, KR) {
          if (KR) {
            while (KR = KR.parentNode) {
              if (KR === KU) {
                return true;
              }
            }
          }
          return false;
        };
        K8 = KC ? function (KU, KR) {
          var KJ;
          if (KU === KR) {
            VY = true;
            return 0;
          } else {
            return !KU.compareDocumentPosition - !KR.compareDocumentPosition || ((KJ = (KU.ownerDocument || KU) === (KR.ownerDocument || KR) ? KU.compareDocumentPosition(KR) : 1) & 1 || !VE.sortDetached && KR.compareDocumentPosition(KU) === KJ ? KU === VC || KU.ownerDocument === K2 && K0(K2, KU) ? -1 : KR === VC || KR.ownerDocument === K2 && K0(K2, KR) ? 1 : Vs ? KX(Vs, KU) - KX(Vs, KR) : 0 : KJ & 4 ? -1 : 1);
          }
        } : function (KU, KR) {
          if (KU === KR) {
            VY = true;
            return 0;
          }
          var KJ;
          var KD = 0;
          var Kd = KU.parentNode;
          var w0 = KR.parentNode;
          var w1 = [KU];
          var w2 = [KR];
          if (!Kd || !w0) {
            if (KU === VC) {
              return -1;
            } else if (KR === VC) {
              return 1;
            } else if (Kd) {
              return -1;
            } else if (w0) {
              return 1;
            } else if (Vs) {
              return KX(Vs, KU) - KX(Vs, KR);
            } else {
              return 0;
            }
          }
          if (Kd === w0) {
            return KG(KU, KR);
          }
          for (KJ = KU; KJ = KJ.parentNode;) {
            w1.unshift(KJ);
          }
          for (KJ = KR; KJ = KJ.parentNode;) {
            w2.unshift(KJ);
          }
          while (w1[KD] === w2[KD]) {
            KD++;
          }
          if (KD) {
            return KG(w1[KD], w2[KD]);
          } else if (w1[KD] === K2) {
            return -1;
          } else if (w2[KD] === K2) {
            return 1;
          } else {
            return 0;
          }
        };
      }
      return VC;
    };
    Kq.matches = function (KC, KU) {
      return Kq(KC, null, null, KU);
    };
    Kq.matchesSelector = function (KC, KU) {
      if ((KC.ownerDocument || KC) !== VC) {
        Vf(KC);
      }
      KU = KU.replace(Km, "='$1']");
      if (VE.matchesSelector && VR && !K7[KU + " "] && (!VD || !VD.test(KU)) && (!VJ || !VJ.test(KU))) {
        try {
          var KR = Vd.call(KC, KU);
          if (KR || VE.disconnectedMatch || KC.document && KC.document.nodeType !== 11) {
            return KR;
          }
        } catch (KJ) {}
      }
      return Kq(KU, VC, null, [KC]).length > 0;
    };
    Kq.contains = function (KC, KU) {
      if ((KC.ownerDocument || KC) !== VC) {
        Vf(KC);
      }
      return K0(KC, KU);
    };
    Kq.attr = function (KC, KU) {
      if ((KC.ownerDocument || KC) !== VC) {
        Vf(KC);
      }
      var KR = Vz.attrHandle[KU.toLowerCase()];
      var KR = KR && K9.call(Vz.attrHandle, KU.toLowerCase()) ? KR(KC, KU, !VR) : undefined;
      if (KR !== undefined) {
        return KR;
      } else if (VE.attributes || !VR) {
        return KC.getAttribute(KU);
      } else if ((KR = KC.getAttributeNode(KU)) && KR.specified) {
        return KR.value;
      } else {
        return null;
      }
    };
    Kq.escape = function (KC) {
      return (KC + "").replace(KH, Vy);
    };
    Kq.error = function (KC) {
      throw new Error("Syntax error, unrecognized expression: " + KC);
    };
    Kq.uniqueSort = function (KC) {
      var KU;
      var KR = [];
      var KJ = 0;
      var KD = 0;
      VY = !VE.detectDuplicates;
      Vs = !VE.sortStable && KC.slice(0);
      KC.sort(K8);
      if (VY) {
        while (KU = KC[KD++]) {
          if (KU === KC[KD]) {
            KJ = KR.push(KD);
          }
        }
        while (KJ--) {
          KC.splice(KR[KJ], 1);
        }
      }
      Vs = null;
      return KC;
    };
    Vv = Kq.getText = function (KC) {
      var KU;
      var KR = "";
      var KJ = 0;
      var KD = KC.nodeType;
      if (KD) {
        if (KD === 1 || KD === 9 || KD === 11) {
          if (typeof KC.textContent == "string") {
            return KC.textContent;
          }
          for (KC = KC.firstChild; KC; KC = KC.nextSibling) {
            KR += Vv(KC);
          }
        } else if (KD === 3 || KD === 4) {
          return KC.nodeValue;
        }
      } else {
        while (KU = KC[KJ++]) {
          KR += Vv(KU);
        }
      }
      return KR;
    };
    (Vz = Kq.selectors = {
      cacheLength: 50,
      createPseudo: KW,
      match: Kj,
      attrHandle: {},
      find: {},
      relative: {
        ">": {
          dir: "parentNode",
          first: true
        },
        " ": {
          dir: "parentNode"
        },
        "+": {
          dir: "previousSibling",
          first: true
        },
        "~": {
          dir: "previousSibling"
        }
      },
      preFilter: {
        ATTR: function (KC) {
          KC[1] = KC[1].replace(Kp, VW);
          KC[3] = (KC[3] || KC[4] || KC[5] || "").replace(Kp, VW);
          if (KC[2] === "~=") {
            KC[3] = " " + KC[3] + " ";
          }
          return KC.slice(0, 4);
        },
        CHILD: function (KC) {
          KC[1] = KC[1].toLowerCase();
          if (KC[1].slice(0, 3) === "nth") {
            if (!KC[3]) {
              Kq.error(KC[0]);
            }
            KC[4] = +(KC[4] ? KC[5] + (KC[6] || 1) : (KC[3] === "even" || KC[3] === "odd") * 2);
            KC[5] = +(KC[7] + KC[8] || KC[3] === "odd");
          } else if (KC[3]) {
            Kq.error(KC[0]);
          }
          return KC;
        },
        PSEUDO: function (KC) {
          var KU;
          var KR = !KC[6] && KC[2];
          if (Kj.CHILD.test(KC[0])) {
            return null;
          } else {
            if (KC[3]) {
              KC[2] = KC[4] || KC[5] || "";
            } else if (KR && KB.test(KR) && (KU = (KU = VT(KR, true)) && KR.indexOf(")", KR.length - KU) - KR.length)) {
              KC[0] = KC[0].slice(0, KU);
              KC[2] = KR.slice(0, KU);
            }
            return KC.slice(0, 3);
          }
        }
      },
      filter: {
        TAG: function (KC) {
          var KU = KC.replace(Kp, VW).toLowerCase();
          if (KC === "*") {
            return function () {
              return true;
            };
          } else {
            return function (KR) {
              return KR.nodeName && KR.nodeName.toLowerCase() === KU;
            };
          }
        },
        CLASS: function (KC) {
          var KU = K5[KC + " "];
          return KU || (KU = new RegExp("(^|" + Kl + ")" + KC + "(" + Kl + "|$)")) && K5(KC, function (KR) {
            return KU.test(typeof KR.className == "string" && KR.className || KR.getAttribute !== undefined && KR.getAttribute("class") || "");
          });
        },
        ATTR: function (KC, KU, KR) {
          return function (KJ) {
            KJ = Kq.attr(KJ, KC);
            if (KJ == null) {
              return KU === "!=";
            } else {
              return !KU || (KJ += "", KU === "=" ? KJ === KR : KU === "!=" ? KJ !== KR : KU === "^=" ? KR && KJ.indexOf(KR) === 0 : KU === "*=" ? KR && KJ.indexOf(KR) > -1 : KU === "$=" ? KR && KJ.slice(-KR.length) === KR : KU === "~=" ? (" " + KJ.replace(Ka, " ") + " ").indexOf(KR) > -1 : KU === "|=" && (KJ === KR || KJ.slice(0, KR.length + 1) === KR + "-"));
            }
          };
        },
        CHILD: function (KC, KU, KR, KJ, KD) {
          var Kd = KC.slice(0, 3) !== "nth";
          var w0 = KC.slice(-4) !== "last";
          var w1 = KU === "of-type";
          if (KJ === 1 && KD === 0) {
            return function (w2) {
              return !!w2.parentNode;
            };
          } else {
            return function (w2, w3, w4) {
              var w5;
              var w6;
              var w7;
              var w8;
              var w9;
              var wh;
              var wL = Kd != w0 ? "nextSibling" : "previousSibling";
              var wV = w2.parentNode;
              var wK = w1 && w2.nodeName.toLowerCase();
              var ww = !w4 && !w1;
              var wX = false;
              if (wV) {
                if (Kd) {
                  while (wL) {
                    for (w8 = w2; w8 = w8[wL];) {
                      if (w1 ? w8.nodeName.toLowerCase() === wK : w8.nodeType === 1) {
                        return false;
                      }
                    }
                    wh = wL = KC === "only" && !wh && "nextSibling";
                  }
                  return true;
                }
                wh = [w0 ? wV.firstChild : wV.lastChild];
                if (w0 && ww) {
                  wX = (w9 = (w5 = (w6 = (w7 = (w8 = wV)[K1] || (w8[K1] = {}))[w8.uniqueID] || (w7[w8.uniqueID] = {}))[KC] || [])[0] === K3 && w5[1]) && w5[2];
                  w8 = w9 && wV.childNodes[w9];
                  while (w8 = ++w9 && w8 && w8[wL] || (wX = w9 = 0, wh.pop())) {
                    if (w8.nodeType === 1 && ++wX && w8 === w2) {
                      w6[KC] = [K3, w9, wX];
                      break;
                    }
                  }
                } else if ((wX = ww ? w9 = (w5 = (w6 = (w7 = (w8 = w2)[K1] || (w8[K1] = {}))[w8.uniqueID] || (w7[w8.uniqueID] = {}))[KC] || [])[0] === K3 && w5[1] : wX) === false) {
                  while ((w8 = ++w9 && w8 && w8[wL] || (wX = w9 = 0, wh.pop())) && ((w1 ? w8.nodeName.toLowerCase() !== wK : w8.nodeType !== 1) || !++wX || (ww && ((w6 = (w7 = w8[K1] ||= {})[w8.uniqueID] || (w7[w8.uniqueID] = {}))[KC] = [K3, wX]), w8 !== w2)));
                }
                return (wX -= KD) === KJ || wX % KJ == 0 && wX / KJ >= 0;
              }
            };
          }
        },
        PSEUDO: function (KC, KU) {
          var KR;
          var KJ = Vz.pseudos[KC] || Vz.setFilters[KC.toLowerCase()] || Kq.error("unsupported pseudo: " + KC);
          if (KJ[K1]) {
            return KJ(KU);
          } else if (KJ.length > 1) {
            KR = [KC, KC, "", KU];
            if (Vz.setFilters.hasOwnProperty(KC.toLowerCase())) {
              return KW(function (KD, Kd) {
                var w0;
                var w1 = KJ(KD, KU);
                for (var w2 = w1.length; w2--;) {
                  KD[w0 = KX(KD, w1[w2])] = !(Kd[w0] = w1[w2]);
                }
              });
            } else {
              return function (KD) {
                return KJ(KD, 0, KR);
              };
            }
          } else {
            return KJ;
          }
        }
      },
      pseudos: {
        not: KW(function (KC) {
          var KU = [];
          var KR = [];
          var KJ = VQ(KC.replace(Kx, "$1"));
          if (KJ[K1]) {
            return KW(function (KD, Kd, w0, w1) {
              var w2;
              var w3 = KJ(KD, null, w1, []);
              for (var w4 = KD.length; w4--;) {
                if (w2 = w3[w4]) {
                  KD[w4] = !(Kd[w4] = w2);
                }
              }
            });
          } else {
            return function (KD, Kd, w0) {
              KU[0] = KD;
              KJ(KU, null, w0, KR);
              KU[0] = null;
              return !KR.pop();
            };
          }
        }),
        has: KW(function (KC) {
          return function (KU) {
            return Kq(KC, KU).length > 0;
          };
        }),
        contains: KW(function (KC) {
          KC = KC.replace(Kp, VW);
          return function (KU) {
            return (KU.textContent || KU.innerText || Vv(KU)).indexOf(KC) > -1;
          };
        }),
        lang: KW(function (KC) {
          if (!KA.test(KC || "")) {
            Kq.error("unsupported lang: " + KC);
          }
          KC = KC.replace(Kp, VW).toLowerCase();
          return function (KU) {
            var KR;
            do {
              if (KR = VR ? KU.lang : KU.getAttribute("xml:lang") || KU.getAttribute("lang")) {
                return (KR = KR.toLowerCase()) === KC || KR.indexOf(KC + "-") === 0;
              }
            } while ((KU = KU.parentNode) && KU.nodeType === 1);
            return false;
          };
        }),
        target: function (KC) {
          var KU = Vu.location && Vu.location.hash;
          return KU && KU.slice(1) === KC.id;
        },
        root: function (KC) {
          return KC === VU;
        },
        focus: function (KC) {
          return KC === VC.activeElement && (!VC.hasFocus || VC.hasFocus()) && (!!KC.type || !!KC.href || !!~KC.tabIndex);
        },
        enabled: KE(false),
        disabled: KE(true),
        checked: function (KC) {
          var KU = KC.nodeName.toLowerCase();
          return KU === "input" && !!KC.checked || KU === "option" && !!KC.selected;
        },
        selected: function (KC) {
          if (KC.parentNode) {
            KC.parentNode.selectedIndex;
          }
          return KC.selected === true;
        },
        empty: function (KC) {
          for (KC = KC.firstChild; KC; KC = KC.nextSibling) {
            if (KC.nodeType < 6) {
              return false;
            }
          }
          return true;
        },
        parent: function (KC) {
          return !Vz.pseudos.empty(KC);
        },
        header: function (KC) {
          return KN.test(KC.nodeName);
        },
        input: function (KC) {
          return KF.test(KC.nodeName);
        },
        button: function (KC) {
          var KU = KC.nodeName.toLowerCase();
          return KU === "input" && KC.type === "button" || KU === "button";
        },
        text: function (KC) {
          return KC.nodeName.toLowerCase() === "input" && KC.type === "text" && ((KC = KC.getAttribute("type")) == null || KC.toLowerCase() === "text");
        },
        first: Kz(function () {
          return [0];
        }),
        last: Kz(function (KC, KU) {
          return [KU - 1];
        }),
        eq: Kz(function (KC, KU, KR) {
          return [KR < 0 ? KR + KU : KR];
        }),
        even: Kz(function (KC, KU) {
          for (var KR = 0; KR < KU; KR += 2) {
            KC.push(KR);
          }
          return KC;
        }),
        odd: Kz(function (KC, KU) {
          for (var KR = 1; KR < KU; KR += 2) {
            KC.push(KR);
          }
          return KC;
        }),
        lt: Kz(function (KC, KU, KR) {
          for (var KJ = KR < 0 ? KR + KU : KR; --KJ >= 0;) {
            KC.push(KJ);
          }
          return KC;
        }),
        gt: Kz(function (KC, KU, KR) {
          for (var KJ = KR < 0 ? KR + KU : KR; ++KJ < KU;) {
            KC.push(KJ);
          }
          return KC;
        })
      }
    }).pseudos.nth = Vz.pseudos.eq;
    for (VG in {
      radio: true,
      checkbox: true,
      file: true,
      password: true,
      image: true
    }) {
      Vz.pseudos[VG] = function (KC) {
        return function (KU) {
          return KU.nodeName.toLowerCase() === "input" && KU.type === KC;
        };
      }(VG);
    }
    for (VG in {
      submit: true,
      reset: true
    }) {
      Vz.pseudos[VG] = function (KC) {
        return function (KU) {
          var KR = KU.nodeName.toLowerCase();
          return (KR === "input" || KR === "button") && KU.type === KC;
        };
      }(VG);
    }
    function Ki() {}
    function KT(KC) {
      for (var KU = 0, KR = KC.length, KJ = ""; KU < KR; KU++) {
        KJ += KC[KU].value;
      }
      return KJ;
    }
    function KQ(KC, KU, KR) {
      var KJ = KU.dir;
      var KD = KU.next;
      var Kd = KD || KJ;
      var w0 = KR && Kd === "parentNode";
      var w1 = K4++;
      if (KU.first) {
        return function (w2, w3, w4) {
          while (w2 = w2[KJ]) {
            if (w2.nodeType === 1 || w0) {
              return KC(w2, w3, w4);
            }
          }
          return false;
        };
      } else {
        return function (w2, w3, w4) {
          var w5;
          var w6;
          var w7 = [K3, w1];
          if (w4) {
            while (w2 = w2[KJ]) {
              if ((w2.nodeType === 1 || w0) && KC(w2, w3, w4)) {
                return true;
              }
            }
          } else {
            while (w2 = w2[KJ]) {
              if (w2.nodeType === 1 || w0) {
                w6 = (w6 = w2[K1] ||= {})[w2.uniqueID] || (w6[w2.uniqueID] = {});
                if (KD && KD === w2.nodeName.toLowerCase()) {
                  w2 = w2[KJ] || w2;
                } else {
                  if ((w5 = w6[Kd]) && w5[0] === K3 && w5[1] === w1) {
                    return w7[2] = w5[2];
                  }
                  if ((w6[Kd] = w7)[2] = KC(w2, w3, w4)) {
                    return true;
                  }
                }
              }
            }
          }
          return false;
        };
      }
    }
    function KI(KC) {
      if (KC.length > 1) {
        return function (KU, KR, KJ) {
          for (var KD = KC.length; KD--;) {
            if (!KC[KD](KU, KR, KJ)) {
              return false;
            }
          }
          return true;
        };
      } else {
        return KC[0];
      }
    }
    function KO(KC, KU, KR, KJ, KD) {
      var Kd;
      var w0 = [];
      for (var w1 = 0, w2 = KC.length, w3 = KU != null; w1 < w2; w1++) {
        if (!!(Kd = KC[w1]) && (!KR || !!KR(Kd, KJ, KD))) {
          w0.push(Kd);
          if (w3) {
            KU.push(w1);
          }
        }
      }
      return w0;
    }
    function Ks(KC, KU, KR, KJ, KD, Kd) {
      if (KJ && !KJ[K1]) {
        KJ = Ks(KJ);
      }
      if (KD && !KD[K1]) {
        KD = Ks(KD, Kd);
      }
      return KW(function (w0, w1, w2, w3) {
        var w4;
        var w5;
        var w6;
        var w7 = [];
        var w8 = [];
        var w9 = w1.length;
        var wh = w0 || function (wK, ww, wX) {
          for (var wg = 0, wl = ww.length; wg < wl; wg++) {
            Kq(wK, ww[wg], wX);
          }
          return wX;
        }(KU || "*", w2.nodeType ? [w2] : w2, []);
        var wL = !KC || !w0 && KU ? wh : KO(wh, w7, KC, w2, w3);
        var wV = KR ? KD || (w0 ? KC : w9 || KJ) ? [] : w1 : wL;
        if (KR) {
          KR(wL, wV, w2, w3);
        }
        if (KJ) {
          w4 = KO(wV, w8);
          KJ(w4, [], w2, w3);
          w5 = w4.length;
          while (w5--) {
            if (w6 = w4[w5]) {
              wV[w8[w5]] = !(wL[w8[w5]] = w6);
            }
          }
        }
        if (w0) {
          if (KD || KC) {
            if (KD) {
              w4 = [];
              w5 = wV.length;
              while (w5--) {
                if (w6 = wV[w5]) {
                  w4.push(wL[w5] = w6);
                }
              }
              KD(null, wV = [], w4, w3);
            }
            for (w5 = wV.length; w5--;) {
              if ((w6 = wV[w5]) && (w4 = KD ? KX(w0, w6) : w7[w5]) > -1) {
                w0[w4] = !(w1[w4] = w6);
              }
            }
          }
        } else {
          wV = KO(wV === w1 ? wV.splice(w9, wV.length) : wV);
          if (KD) {
            KD(null, w1, wV, w3);
          } else {
            KK.apply(w1, wV);
          }
        }
      });
    }
    function KY(KC, KU) {
      function KR(Kd, w0, w1, w2, w3) {
        var w4;
        var w5;
        var w6;
        var w7 = 0;
        var w8 = "0";
        var w9 = Kd && [];
        var wh = [];
        var wL = VO;
        var wV = Kd || KD && Vz.find.TAG("*", w3);
        var wK = K3 += wL == null ? 1 : Math.random() || 0.1;
        var ww = wV.length;
        for (w3 && (VO = w0 === VC || w0 || w3); w8 !== ww && (w4 = wV[w8]) != null; w8++) {
          if (KD && w4) {
            w5 = 0;
            if (!w0 && w4.ownerDocument !== VC) {
              Vf(w4);
              w1 = !VR;
            }
            while (w6 = KC[w5++]) {
              if (w6(w4, w0 || VC, w1)) {
                w2.push(w4);
                break;
              }
            }
            if (w3) {
              K3 = wK;
            }
          }
          if (KJ && ((w4 = !w6 && w4) && w7--, Kd)) {
            w9.push(w4);
          }
        }
        w7 += w8;
        if (KJ && w8 !== w7) {
          for (w5 = 0; w6 = KU[w5++];) {
            w6(w9, wh, w0, w1);
          }
          if (Kd) {
            if (w7 > 0) {
              while (w8--) {
                if (!w9[w8] && !wh[w8]) {
                  wh[w8] = KL.call(w2);
                }
              }
            }
            wh = KO(wh);
          }
          KK.apply(w2, wh);
          if (w3 && !Kd && wh.length > 0 && w7 + KU.length > 1) {
            Kq.uniqueSort(w2);
          }
        }
        if (w3) {
          K3 = wK;
          VO = wL;
        }
        return w9;
      }
      var KJ = KU.length > 0;
      var KD = KC.length > 0;
      if (KJ) {
        return KW(KR);
      } else {
        return KR;
      }
    }
    Ki.prototype = Vz.filters = Vz.pseudos;
    Vz.setFilters = new Ki();
    VT = Kq.tokenize = function (KC, KU) {
      var KR;
      var KJ;
      var KD;
      var Kd;
      var w0;
      var w1;
      var w2;
      var w3 = K6[KC + " "];
      if (w3) {
        if (KU) {
          return 0;
        } else {
          return w3.slice(0);
        }
      }
      w0 = KC;
      w1 = [];
      w2 = Vz.preFilter;
      while (w0) {
        if (!KR || !!(KJ = Kb.exec(w0))) {
          if (KJ) {
            w0 = w0.slice(KJ[0].length) || w0;
          }
          w1.push(KD = []);
        }
        KR = false;
        if (KJ = Kc.exec(w0)) {
          KR = KJ.shift();
          KD.push({
            value: KR,
            type: KJ[0].replace(Kx, " ")
          });
          w0 = w0.slice(KR.length);
        }
        for (Kd in Vz.filter) {
          if (!!(KJ = Kj[Kd].exec(w0)) && (!w2[Kd] || !!(KJ = w2[Kd](KJ)))) {
            KR = KJ.shift();
            KD.push({
              value: KR,
              type: Kd,
              matches: KJ
            });
            w0 = w0.slice(KR.length);
          }
        }
        if (!KR) {
          break;
        }
      }
      if (KU) {
        return w0.length;
      } else if (w0) {
        return Kq.error(KC);
      } else {
        return K6(KC, w1).slice(0);
      }
    };
    VQ = Kq.compile = function (KC, KU) {
      var KR;
      var KJ = [];
      var KD = [];
      var Kd = K7[KC + " "];
      if (!Kd) {
        for (KR = (KU = KU || VT(KC)).length; KR--;) {
          ((Kd = function w0(w1) {
            var w2;
            var w3;
            var w4;
            for (var w5 = w1.length, w6 = Vz.relative[w1[0].type], w7 = w6 || Vz.relative[" "], w8 = w6 ? 1 : 0, w9 = KQ(function (wV) {
                return wV === w2;
              }, w7, true), wh = KQ(function (wV) {
                return KX(w2, wV) > -1;
              }, w7, true), wL = [function (wV, wK, ww) {
                wV = !w6 && (ww || wK !== VO) || ((w2 = wK).nodeType ? w9 : wh)(wV, wK, ww);
                w2 = null;
                return wV;
              }]; w8 < w5; w8++) {
              if (w3 = Vz.relative[w1[w8].type]) {
                wL = [KQ(KI(wL), w3)];
              } else {
                if ((w3 = Vz.filter[w1[w8].type].apply(null, w1[w8].matches))[K1]) {
                  for (w4 = ++w8; w4 < w5 && !Vz.relative[w1[w4].type]; w4++);
                  return Ks(w8 > 1 && KI(wL), w8 > 1 && KT(w1.slice(0, w8 - 1).concat({
                    value: w1[w8 - 2].type === " " ? "*" : ""
                  })).replace(Kx, "$1"), w3, w8 < w4 && w0(w1.slice(w8, w4)), w4 < w5 && w0(w1 = w1.slice(w4)), w4 < w5 && KT(w1));
                }
                wL.push(w3);
              }
            }
            return KI(wL);
          }(KU[KR]))[K1] ? KJ : KD).push(Kd);
        }
        (Kd = K7(KC, KY(KD, KJ))).selector = KC;
      }
      return Kd;
    };
    VI = Kq.select = function (KC, KU, KR, KJ) {
      var KD;
      var Kd;
      var w0;
      var w1;
      var w2;
      var w3 = typeof KC == "function" && KC;
      var w4 = !KJ && VT(KC = w3.selector || KC);
      KR = KR || [];
      if (w4.length === 1) {
        if ((Kd = w4[0] = w4[0].slice(0)).length > 2 && (w0 = Kd[0]).type === "ID" && KU.nodeType === 9 && VR && Vz.relative[Kd[1].type]) {
          if (!(KU = (Vz.find.ID(w0.matches[0].replace(Kp, VW), KU) || [])[0])) {
            return KR;
          }
          if (w3) {
            KU = KU.parentNode;
          }
          KC = KC.slice(Kd.shift().value.length);
        }
        for (KD = Kj.needsContext.test(KC) ? 0 : Kd.length; KD-- && (w0 = Kd[KD], !Vz.relative[w1 = w0.type]);) {
          if ((w2 = Vz.find[w1]) && (KJ = w2(w0.matches[0].replace(Kp, VW), KS.test(Kd[0].type) && Kv(KU.parentNode) || KU))) {
            Kd.splice(KD, 1);
            if (KC = KJ.length && KT(Kd)) {
              break;
            }
            KK.apply(KR, KJ);
            return KR;
          }
        }
      }
      (w3 || VQ(KC, w4))(KJ, KU, !VR, KR, !KU || KS.test(KC) && Kv(KU.parentNode) || KU);
      return KR;
    };
    VE.sortStable = K1.split("").sort(K8).join("") === K1;
    VE.detectDuplicates = !!VY;
    Vf();
    VE.sortDetached = Ky(function (KC) {
      return KC.compareDocumentPosition(VC.createElement("fieldset")) & 1;
    });
    if (!Ky(function (KC) {
      KC.innerHTML = "<a href='#'></a>";
      return KC.firstChild.getAttribute("href") === "#";
    })) {
      KZ("type|href|height|width", function (KC, KU, KR) {
        if (!KR) {
          return KC.getAttribute(KU, KU.toLowerCase() === "type" ? 1 : 2);
        }
      });
    }
    if (!VE.attributes || !Ky(function (KC) {
      KC.innerHTML = "<input/>";
      KC.firstChild.setAttribute("value", "");
      return KC.firstChild.getAttribute("value") === "";
    })) {
      KZ("value", function (KC, KU, KR) {
        if (!KR && KC.nodeName.toLowerCase() === "input") {
          return KC.defaultValue;
        }
      });
    }
    if (!Ky(function (KC) {
      return KC.getAttribute("disabled") == null;
    })) {
      KZ(Kg, function (KC, KU, KR) {
        if (!KR) {
          if (KC[KU] === true) {
            return KU.toLowerCase();
          } else if ((KR = KC.getAttributeNode(KU)) && KR.specified) {
            return KR.value;
          } else {
            return null;
          }
        }
      });
    }
    return Kq;
  }(h0);
  hr.find = h4;
  hr.expr = h4.selectors;
  hr.expr[":"] = hr.expr.pseudos;
  hr.uniqueSort = hr.unique = h4.uniqueSort;
  hr.text = h4.getText;
  hr.isXMLDoc = h4.isXML;
  hr.contains = h4.contains;
  hr.escapeSelector = h4.escape;
  var hm = hr.expr.match.needsContext;
  function hB(Vu, VW) {
    return Vu.nodeName && Vu.nodeName.toLowerCase() === VW.toLowerCase();
  }
  var hA = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
  function hj(Vu, VW, Vy) {
    if (h2(VW)) {
      return hr.grep(Vu, function (VZ, VG) {
        return !!VW.call(VZ, VG, VZ) !== Vy;
      });
    } else if (VW.nodeType) {
      return hr.grep(Vu, function (VZ) {
        return VZ === VW !== Vy;
      });
    } else if (typeof VW != "string") {
      return hr.grep(Vu, function (VZ) {
        return hh.call(VW, VZ) > -1 !== Vy;
      });
    } else {
      return hr.filter(VW, Vu, Vy);
    }
  }
  hr.filter = function (Vu, VW, Vy) {
    var VZ = VW[0];
    if (Vy) {
      Vu = ":not(" + Vu + ")";
    }
    if (VW.length === 1 && VZ.nodeType === 1) {
      if (hr.find.matchesSelector(VZ, Vu)) {
        return [VZ];
      } else {
        return [];
      }
    } else {
      return hr.find.matches(Vu, hr.grep(VW, function (VG) {
        return VG.nodeType === 1;
      }));
    }
  };
  hr.fn.extend({
    find: function (Vu) {
      var VW;
      var Vy;
      var VZ = this.length;
      var VG = this;
      if (typeof Vu != "string") {
        return this.pushStack(hr(Vu).filter(function () {
          for (VW = 0; VW < VZ; VW++) {
            if (hr.contains(VG[VW], this)) {
              return true;
            }
          }
        }));
      }
      Vy = this.pushStack([]);
      VW = 0;
      for (; VW < VZ; VW++) {
        hr.find(Vu, VG[VW], Vy);
      }
      if (VZ > 1) {
        return hr.uniqueSort(Vy);
      } else {
        return Vy;
      }
    },
    filter: function (Vu) {
      return this.pushStack(hj(this, Vu || [], false));
    },
    not: function (Vu) {
      return this.pushStack(hj(this, Vu || [], true));
    },
    is: function (Vu) {
      return !!hj(this, typeof Vu == "string" && hm.test(Vu) ? hr(Vu) : Vu || [], false).length;
    }
  });
  var hF;
  var hN = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
  (hr.fn.init = function (Vu, VW, Vy) {
    if (Vu) {
      Vy = Vy || hF;
      if (typeof Vu != "string") {
        if (Vu.nodeType) {
          this[0] = Vu;
          this.length = 1;
          return this;
        } else if (h2(Vu)) {
          if (Vy.ready !== undefined) {
            return Vy.ready(Vu);
          } else {
            return Vu(hr);
          }
        } else {
          return hr.makeArray(Vu, this);
        }
      }
      if (!(VZ = Vu[0] === "<" && Vu[Vu.length - 1] === ">" && Vu.length >= 3 ? [null, Vu, null] : hN.exec(Vu)) || !VZ[1] && VW) {
        return (!VW || VW.jquery ? VW || Vy : this.constructor(VW)).find(Vu);
      }
      if (VZ[1]) {
        VW = VW instanceof hr ? VW[0] : VW;
        hr.merge(this, hr.parseHTML(VZ[1], VW && VW.nodeType ? VW.ownerDocument || VW : h5, true));
        if (hA.test(VZ[1]) && hr.isPlainObject(VW)) {
          for (var VZ in VW) {
            if (h2(this[VZ])) {
              this[VZ](VW[VZ]);
            } else {
              this.attr(VZ, VW[VZ]);
            }
          }
        }
      } else if (Vy = h5.getElementById(VZ[2])) {
        this[0] = Vy;
        this.length = 1;
      }
    }
    return this;
  }).prototype = hr.fn;
  hF = hr(h5);
  var hP = /^(?:parents|prev(?:Until|All))/;
  var hn = {
    children: true,
    contents: true,
    next: true,
    prev: true
  };
  function hS(Vu, VW) {
    while ((Vu = Vu[VW]) && Vu.nodeType !== 1);
    return Vu;
  }
  hr.fn.extend({
    has: function (Vu) {
      var VW = hr(Vu, this);
      var Vy = VW.length;
      return this.filter(function () {
        for (var VZ = 0; VZ < Vy; VZ++) {
          if (hr.contains(this, VW[VZ])) {
            return true;
          }
        }
      });
    },
    closest: function (Vu, VW) {
      var Vy;
      var VZ = 0;
      var VG = this.length;
      var VE = [];
      var Vz = typeof Vu != "string" && hr(Vu);
      if (!hm.test(Vu)) {
        for (; VZ < VG; VZ++) {
          for (Vy = this[VZ]; Vy && Vy !== VW; Vy = Vy.parentNode) {
            if (Vy.nodeType < 11 && (Vz ? Vz.index(Vy) > -1 : Vy.nodeType === 1 && hr.find.matchesSelector(Vy, Vu))) {
              VE.push(Vy);
              break;
            }
          }
        }
      }
      return this.pushStack(VE.length > 1 ? hr.uniqueSort(VE) : VE);
    },
    index: function (Vu) {
      if (Vu) {
        if (typeof Vu == "string") {
          return hh.call(hr(Vu), this[0]);
        } else {
          return hh.call(this, Vu.jquery ? Vu[0] : Vu);
        }
      } else if (this[0] && this[0].parentNode) {
        return this.first().prevAll().length;
      } else {
        return -1;
      }
    },
    add: function (Vu, VW) {
      return this.pushStack(hr.uniqueSort(hr.merge(this.get(), hr(Vu, VW))));
    },
    addBack: function (Vu) {
      return this.add(Vu == null ? this.prevObject : this.prevObject.filter(Vu));
    }
  });
  hr.each({
    parent: function (Vu) {
      Vu = Vu.parentNode;
      if (Vu && Vu.nodeType !== 11) {
        return Vu;
      } else {
        return null;
      }
    },
    parents: function (Vu) {
      return hb(Vu, "parentNode");
    },
    parentsUntil: function (Vu, VW, Vy) {
      return hb(Vu, "parentNode", Vy);
    },
    next: function (Vu) {
      return hS(Vu, "nextSibling");
    },
    prev: function (Vu) {
      return hS(Vu, "previousSibling");
    },
    nextAll: function (Vu) {
      return hb(Vu, "nextSibling");
    },
    prevAll: function (Vu) {
      return hb(Vu, "previousSibling");
    },
    nextUntil: function (Vu, VW, Vy) {
      return hb(Vu, "nextSibling", Vy);
    },
    prevUntil: function (Vu, VW, Vy) {
      return hb(Vu, "previousSibling", Vy);
    },
    siblings: function (Vu) {
      return hc((Vu.parentNode || {}).firstChild, Vu);
    },
    children: function (Vu) {
      return hc(Vu.firstChild);
    },
    contents: function (Vu) {
      if (hB(Vu, "iframe")) {
        return Vu.contentDocument;
      } else {
        if (hB(Vu, "template")) {
          Vu = Vu.content || Vu;
        }
        return hr.merge([], Vu.childNodes);
      }
    }
  }, function (Vu, VW) {
    hr.fn[Vu] = function (Vy, VZ) {
      var VG = hr.map(this, VW, Vy);
      if ((VZ = Vu.slice(-5) !== "Until" ? Vy : VZ) && typeof VZ == "string") {
        VG = hr.filter(VZ, VG);
      }
      if (this.length > 1 && (hn[Vu] || hr.uniqueSort(VG), hP.test(Vu))) {
        VG.reverse();
      }
      return this.pushStack(VG);
    };
  });
  var hp = /[^\x20\t\r\n\f]+/g;
  function hH(Vu) {
    return Vu;
  }
  function hk(Vu) {
    throw Vu;
  }
  function hq(Vu, VW, Vy, VZ) {
    var VG;
    try {
      if (Vu && h2(VG = Vu.promise)) {
        VG.call(Vu).done(VW).fail(Vy);
      } else if (Vu && h2(VG = Vu.then)) {
        VG.call(Vu, VW, Vy);
      } else {
        VW.apply(undefined, [Vu].slice(VZ));
      }
    } catch (VE) {
      Vy.apply(undefined, [VE]);
    }
  }
  hr.Callbacks = function (Vu) {
    var VW;
    var Vy;
    Vu = typeof Vu == "string" ? (VW = Vu, Vy = {}, hr.each(VW.match(hp) || [], function (VO, Vs) {
      Vy[Vs] = true;
    }), Vy) : hr.extend({}, Vu);
    function VZ() {
      Vv = Vv || Vu.once;
      Vz = VG = true;
      for (; VT.length; VQ = -1) {
        for (VE = VT.shift(); ++VQ < Vi.length;) {
          if (Vi[VQ].apply(VE[0], VE[1]) === false && Vu.stopOnFalse) {
            VQ = Vi.length;
            VE = false;
          }
        }
      }
      if (!Vu.memory) {
        VE = false;
      }
      VG = false;
      if (Vv) {
        Vi = VE ? [] : "";
      }
    }
    var VG;
    var VE;
    var Vz;
    var Vv;
    var Vi = [];
    var VT = [];
    var VQ = -1;
    var VI = {
      add: function () {
        if (Vi && (VE && !VG && (VQ = Vi.length - 1, VT.push(VE)), function VO(Vs) {
          hr.each(Vs, function (VY, Vf) {
            if (h2(Vf)) {
              if (!Vu.unique || !VI.has(Vf)) {
                Vi.push(Vf);
              }
            } else if (Vf && Vf.length && ho(Vf) !== "string") {
              VO(Vf);
            }
          });
        }(arguments), VE) && !VG) {
          VZ();
        }
        return this;
      },
      remove: function () {
        hr.each(arguments, function (VO, Vs) {
          for (var VY; (VY = hr.inArray(Vs, Vi, VY)) > -1;) {
            Vi.splice(VY, 1);
            if (VY <= VQ) {
              VQ--;
            }
          }
        });
        return this;
      },
      has: function (VO) {
        if (VO) {
          return hr.inArray(VO, Vi) > -1;
        } else {
          return Vi.length > 0;
        }
      },
      empty: function () {
        Vi = Vi && [];
        return this;
      },
      disable: function () {
        Vv = VT = [];
        Vi = VE = "";
        return this;
      },
      disabled: function () {
        return !Vi;
      },
      lock: function () {
        Vv = VT = [];
        if (!VE && !VG) {
          Vi = VE = "";
        }
        return this;
      },
      locked: function () {
        return !!Vv;
      },
      fireWith: function (VO, Vs) {
        if (!Vv && !(Vs = [VO, (Vs = Vs || []).slice ? Vs.slice() : Vs], VT.push(Vs), VG)) {
          VZ();
        }
        return this;
      },
      fire: function () {
        VI.fireWith(this, arguments);
        return this;
      },
      fired: function () {
        return !!Vz;
      }
    };
    return VI;
  };
  hr.extend({
    Deferred: function (Vu) {
      var VW = [["notify", "progress", hr.Callbacks("memory"), hr.Callbacks("memory"), 2], ["resolve", "done", hr.Callbacks("once memory"), hr.Callbacks("once memory"), 0, "resolved"], ["reject", "fail", hr.Callbacks("once memory"), hr.Callbacks("once memory"), 1, "rejected"]];
      var Vy = "pending";
      var VZ = {
        state: function () {
          return Vy;
        },
        always: function () {
          VG.done(arguments).fail(arguments);
          return this;
        },
        catch: function (VE) {
          return VZ.then(null, VE);
        },
        pipe: function () {
          var VE = arguments;
          return hr.Deferred(function (Vz) {
            hr.each(VW, function (Vv, Vi) {
              var VT = h2(VE[Vi[4]]) && VE[Vi[4]];
              VG[Vi[1]](function () {
                var VQ = VT && VT.apply(this, arguments);
                if (VQ && h2(VQ.promise)) {
                  VQ.promise().progress(Vz.notify).done(Vz.resolve).fail(Vz.reject);
                } else {
                  Vz[Vi[0] + "With"](this, VT ? [VQ] : arguments);
                }
              });
            });
            VE = null;
          }).promise();
        },
        then: function (VE, Vz, Vv) {
          var Vi = 0;
          function VT(VQ, VI, VO, Vs) {
            return function () {
              function VY() {
                var VR;
                var VJ;
                if (VQ >= Vi) {
                  if ((VR = VO.apply(Vf, VC)) === VI.promise()) {
                    throw new TypeError("Thenable self-resolution");
                  }
                  VJ = VR && (typeof VR == "object" || typeof VR == "function") && VR.then;
                  if (h2(VJ)) {
                    if (Vs) {
                      VJ.call(VR, VT(Vi, VI, hH, Vs), VT(Vi, VI, hk, Vs));
                    } else {
                      Vi++;
                      VJ.call(VR, VT(Vi, VI, hH, Vs), VT(Vi, VI, hk, Vs), VT(Vi, VI, hH, VI.notifyWith));
                    }
                  } else {
                    if (VO !== hH) {
                      Vf = undefined;
                      VC = [VR];
                    }
                    (Vs || VI.resolveWith)(Vf, VC);
                  }
                }
              }
              var Vf = this;
              var VC = arguments;
              var VU = Vs ? VY : function () {
                try {
                  VY();
                } catch (VR) {
                  if (hr.Deferred.exceptionHook) {
                    hr.Deferred.exceptionHook(VR, VU.stackTrace);
                  }
                  if (Vi <= VQ + 1) {
                    if (VO !== hk) {
                      Vf = undefined;
                      VC = [VR];
                    }
                    VI.rejectWith(Vf, VC);
                  }
                }
              };
              if (VQ) {
                VU();
              } else {
                if (hr.Deferred.getStackHook) {
                  VU.stackTrace = hr.Deferred.getStackHook();
                }
                h0.setTimeout(VU);
              }
            };
          }
          return hr.Deferred(function (VQ) {
            VW[0][3].add(VT(0, VQ, h2(Vv) ? Vv : hH, VQ.notifyWith));
            VW[1][3].add(VT(0, VQ, h2(VE) ? VE : hH));
            VW[2][3].add(VT(0, VQ, h2(Vz) ? Vz : hk));
          }).promise();
        },
        promise: function (VE) {
          if (VE != null) {
            return hr.extend(VE, VZ);
          } else {
            return VZ;
          }
        }
      };
      var VG = {};
      hr.each(VW, function (VE, Vz) {
        var Vv = Vz[2];
        var Vi = Vz[5];
        VZ[Vz[1]] = Vv.add;
        if (Vi) {
          Vv.add(function () {
            Vy = Vi;
          }, VW[3 - VE][2].disable, VW[3 - VE][3].disable, VW[0][2].lock, VW[0][3].lock);
        }
        Vv.add(Vz[3].fire);
        VG[Vz[0]] = function () {
          VG[Vz[0] + "With"](this === VG ? undefined : this, arguments);
          return this;
        };
        VG[Vz[0] + "With"] = Vv.fireWith;
      });
      VZ.promise(VG);
      if (Vu) {
        Vu.call(VG, VG);
      }
      return VG;
    },
    when: function (Vu) {
      function VW(Vv) {
        return function (Vi) {
          VG[Vv] = this;
          VE[Vv] = arguments.length > 1 ? h7.call(arguments) : Vi;
          if (! --Vy) {
            Vz.resolveWith(VG, VE);
          }
        };
      }
      var Vy = arguments.length;
      var VZ = Vy;
      var VG = Array(VZ);
      var VE = h7.call(arguments);
      var Vz = hr.Deferred();
      if (Vy <= 1 && (hq(Vu, Vz.done(VW(VZ)).resolve, Vz.reject, !Vy), Vz.state() === "pending" || h2(VE[VZ] && VE[VZ].then))) {
        return Vz.then();
      }
      while (VZ--) {
        hq(VE[VZ], VW(VZ), Vz.reject);
      }
      return Vz.promise();
    }
  });
  var hu = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
  hr.Deferred.exceptionHook = function (Vu, VW) {
    if (h0.console && h0.console.warn && Vu && hu.test(Vu.name)) {
      h0.console.warn("jQuery.Deferred exception: " + Vu.message, Vu.stack, VW);
    }
  };
  hr.readyException = function (Vu) {
    h0.setTimeout(function () {
      throw Vu;
    });
  };
  var hW = hr.Deferred();
  function hy() {
    h5.removeEventListener("DOMContentLoaded", hy);
    h0.removeEventListener("load", hy);
    hr.ready();
  }
  hr.fn.ready = function (Vu) {
    hW.then(Vu).catch(function (VW) {
      hr.readyException(VW);
    });
    return this;
  };
  hr.extend({
    isReady: false,
    readyWait: 1,
    ready: function (Vu) {
      if (!(Vu === true ? --hr.readyWait : hr.isReady) && ((hr.isReady = true) === Vu || --hr.readyWait <= 0)) {
        hW.resolveWith(h5, [hr]);
      }
    }
  });
  hr.ready.then = hW.then;
  if (h5.readyState === "complete" || h5.readyState !== "loading" && !h5.documentElement.doScroll) {
    h0.setTimeout(hr.ready);
  } else {
    h5.addEventListener("DOMContentLoaded", hy);
    h0.addEventListener("load", hy);
  }
  function hZ(Vu, VW, Vy, VZ, VG, VE, Vz) {
    var Vv = 0;
    var Vi = Vu.length;
    var VT = Vy == null;
    if (ho(Vy) === "object") {
      VG = true;
      for (Vv in Vy) {
        hZ(Vu, VW, Vv, Vy[Vv], true, VE, Vz);
      }
    } else if (VZ !== undefined && (VG = true, h2(VZ) || (Vz = true), VW = VT ? Vz ? (VW.call(Vu, VZ), null) : (VT = VW, function (VQ, VI, VO) {
      return VT.call(hr(VQ), VO);
    }) : VW)) {
      for (; Vv < Vi; Vv++) {
        VW(Vu[Vv], Vy, Vz ? VZ : VZ.call(Vu[Vv], Vv, VW(Vu[Vv], Vy)));
      }
    }
    if (VG) {
      return Vu;
    } else if (VT) {
      return VW.call(Vu);
    } else if (Vi) {
      return VW(Vu[0], Vy);
    } else {
      return VE;
    }
  }
  var hG = /^-ms-/;
  var hE = /-([a-z])/g;
  function hz(Vu, VW) {
    return VW.toUpperCase();
  }
  function hv(Vu) {
    return Vu.replace(hG, "ms-").replace(hE, hz);
  }
  function hi(Vu) {
    return Vu.nodeType === 1 || Vu.nodeType === 9 || !+Vu.nodeType;
  }
  function hT() {
    this.expando = hr.expando + hT.uid++;
  }
  hT.uid = 1;
  hT.prototype = {
    cache: function (Vu) {
      var VW = Vu[this.expando];
      if (!VW) {
        VW = {};
        if (hi(Vu)) {
          if (Vu.nodeType) {
            Vu[this.expando] = VW;
          } else {
            Object.defineProperty(Vu, this.expando, {
              value: VW,
              configurable: true
            });
          }
        }
      }
      return VW;
    },
    set: function (Vu, VW, Vy) {
      var VZ;
      var VG = this.cache(Vu);
      if (typeof VW == "string") {
        VG[hv(VW)] = Vy;
      } else {
        for (VZ in VW) {
          VG[hv(VZ)] = VW[VZ];
        }
      }
      return VG;
    },
    get: function (Vu, VW) {
      if (VW === undefined) {
        return this.cache(Vu);
      } else {
        return Vu[this.expando] && Vu[this.expando][hv(VW)];
      }
    },
    access: function (Vu, VW, Vy) {
      if (VW === undefined || VW && typeof VW == "string" && Vy === undefined) {
        return this.get(Vu, VW);
      } else {
        this.set(Vu, VW, Vy);
        if (Vy !== undefined) {
          return Vy;
        } else {
          return VW;
        }
      }
    },
    remove: function (Vu, VW) {
      var Vy;
      var VZ = Vu[this.expando];
      if (VZ !== undefined) {
        if (VW !== undefined) {
          Vy = (VW = Array.isArray(VW) ? VW.map(hv) : (VW = hv(VW)) in VZ ? [VW] : VW.match(hp) || []).length;
          while (Vy--) {
            delete VZ[VW[Vy]];
          }
        }
        if (VW === undefined || !!hr.isEmptyObject(VZ)) {
          if (Vu.nodeType) {
            Vu[this.expando] = undefined;
          } else {
            delete Vu[this.expando];
          }
        }
      }
    },
    hasData: function (Vu) {
      Vu = Vu[this.expando];
      return Vu !== undefined && !hr.isEmptyObject(Vu);
    }
  };
  var hQ = new hT();
  var hI = new hT();
  var hO = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/;
  var hs = /[A-Z]/g;
  function hY(Vu, VW, Vy) {
    var VZ;
    var VG;
    if (Vy === undefined && Vu.nodeType === 1) {
      VZ = "data-" + VW.replace(hs, "-$&").toLowerCase();
      if (typeof (Vy = Vu.getAttribute(VZ)) == "string") {
        try {
          Vy = (VG = Vy) === "true" || VG !== "false" && (VG === "null" ? null : VG === +VG + "" ? +VG : hO.test(VG) ? JSON.parse(VG) : VG);
        } catch (VE) {}
        hI.set(Vu, VW, Vy);
      } else {
        Vy = undefined;
      }
    }
    return Vy;
  }
  hr.extend({
    hasData: function (Vu) {
      return hI.hasData(Vu) || hQ.hasData(Vu);
    },
    data: function (Vu, VW, Vy) {
      return hI.access(Vu, VW, Vy);
    },
    removeData: function (Vu, VW) {
      hI.remove(Vu, VW);
    },
    _data: function (Vu, VW, Vy) {
      return hQ.access(Vu, VW, Vy);
    },
    _removeData: function (Vu, VW) {
      hQ.remove(Vu, VW);
    }
  });
  hr.fn.extend({
    data: function (Vu, VW) {
      var Vy;
      var VZ;
      var VG;
      var VE = this[0];
      var Vz = VE && VE.attributes;
      if (Vu !== undefined) {
        if (typeof Vu == "object") {
          return this.each(function () {
            hI.set(this, Vu);
          });
        } else {
          return hZ(this, function (Vv) {
            var Vi;
            if (VE && Vv === undefined) {
              if ((Vi = hI.get(VE, Vu)) !== undefined || (Vi = hY(VE, Vu)) !== undefined) {
                return Vi;
              } else {
                return undefined;
              }
            }
            this.each(function () {
              hI.set(this, Vu, Vv);
            });
          }, null, VW, arguments.length > 1, null, true);
        }
      }
      if (this.length && (VG = hI.get(VE), VE.nodeType === 1) && !hQ.get(VE, "hasDataAttrs")) {
        for (Vy = Vz.length; Vy--;) {
          if (Vz[Vy] && (VZ = Vz[Vy].name).indexOf("data-") === 0) {
            VZ = hv(VZ.slice(5));
            hY(VE, VZ, VG[VZ]);
          }
        }
        hQ.set(VE, "hasDataAttrs", true);
      }
      return VG;
    },
    removeData: function (Vu) {
      return this.each(function () {
        hI.remove(this, Vu);
      });
    }
  });
  hr.extend({
    queue: function (Vu, VW, Vy) {
      var VZ;
      if (Vu) {
        VZ = hQ.get(Vu, VW = (VW || "fx") + "queue");
        if (Vy) {
          if (!VZ || Array.isArray(Vy)) {
            VZ = hQ.access(Vu, VW, hr.makeArray(Vy));
          } else {
            VZ.push(Vy);
          }
        }
        return VZ || [];
      }
    },
    dequeue: function (Vu, VW) {
      VW = VW || "fx";
      var Vy = hr.queue(Vu, VW);
      var VZ = Vy.length;
      var VG = Vy.shift();
      var VE = hr._queueHooks(Vu, VW);
      if (VG === "inprogress") {
        VG = Vy.shift();
        VZ--;
      }
      if (VG) {
        if (VW === "fx") {
          Vy.unshift("inprogress");
        }
        delete VE.stop;
        VG.call(Vu, function () {
          hr.dequeue(Vu, VW);
        }, VE);
      }
      if (!VZ && VE) {
        VE.empty.fire();
      }
    },
    _queueHooks: function (Vu, VW) {
      var Vy = VW + "queueHooks";
      return hQ.get(Vu, Vy) || hQ.access(Vu, Vy, {
        empty: hr.Callbacks("once memory").add(function () {
          hQ.remove(Vu, [VW + "queue", Vy]);
        })
      });
    }
  });
  hr.fn.extend({
    queue: function (Vu, VW) {
      var Vy = 2;
      if (typeof Vu != "string") {
        VW = Vu;
        Vu = "fx";
        Vy--;
      }
      if (arguments.length < Vy) {
        return hr.queue(this[0], Vu);
      } else if (VW === undefined) {
        return this;
      } else {
        return this.each(function () {
          var VZ = hr.queue(this, Vu, VW);
          hr._queueHooks(this, Vu);
          if (Vu === "fx" && VZ[0] !== "inprogress") {
            hr.dequeue(this, Vu);
          }
        });
      }
    },
    dequeue: function (Vu) {
      return this.each(function () {
        hr.dequeue(this, Vu);
      });
    },
    clearQueue: function (Vu) {
      return this.queue(Vu || "fx", []);
    },
    promise: function (Vu, VW) {
      function Vy() {
        if (! --VG) {
          VE.resolveWith(Vz, [Vz]);
        }
      }
      var VZ;
      var VG = 1;
      var VE = hr.Deferred();
      var Vz = this;
      var Vv = this.length;
      if (typeof Vu != "string") {
        VW = Vu;
        Vu = undefined;
      }
      Vu = Vu || "fx";
      while (Vv--) {
        if ((VZ = hQ.get(Vz[Vv], Vu + "queueHooks")) && VZ.empty) {
          VG++;
          VZ.empty.add(Vy);
        }
      }
      Vy();
      return VE.promise(VW);
    }
  });
  function hf(Vu, VW) {
    return (Vu = VW || Vu).style.display === "none" || Vu.style.display === "" && hr.contains(Vu.ownerDocument, Vu) && hr.css(Vu, "display") === "none";
  }
  function hC(Vu, VW, Vy, VZ) {
    var VG;
    var VE = {};
    for (VG in VW) {
      VE[VG] = Vu.style[VG];
      Vu.style[VG] = VW[VG];
    }
    Vy = Vy.apply(Vu, VZ || []);
    for (VG in VW) {
      Vu.style[VG] = VE[VG];
    }
    return Vy;
  }
  var h4 = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source;
  var hU = new RegExp("^(?:([+-])=|)(" + h4 + ")([a-z%]*)$", "i");
  var hR = ["Top", "Right", "Bottom", "Left"];
  function hJ(Vu, VW, Vy, VZ) {
    var VG;
    var VE;
    var Vz = 20;
    var Vv = VZ ? function () {
      return VZ.cur();
    } : function () {
      return hr.css(Vu, VW, "");
    };
    var Vi = Vv();
    var VT = Vy && Vy[3] || (hr.cssNumber[VW] ? "" : "px");
    var VQ = (hr.cssNumber[VW] || VT !== "px" && +Vi) && hU.exec(hr.css(Vu, VW));
    if (VQ && VQ[3] !== VT) {
      VT = VT || VQ[3];
      VQ = +(Vi /= 2) || 1;
      while (Vz--) {
        hr.style(Vu, VW, VQ + VT);
        if ((1 - VE) * (1 - (VE = Vv() / Vi || 0.5)) <= 0) {
          Vz = 0;
        }
        VQ /= VE;
      }
      hr.style(Vu, VW, (VQ *= 2) + VT);
      Vy = Vy || [];
    }
    if (Vy && (VQ = +VQ || +Vi || 0, VG = Vy[1] ? VQ + (Vy[1] + 1) * Vy[2] : +Vy[2], VZ)) {
      VZ.unit = VT;
      VZ.start = VQ;
      VZ.end = VG;
    }
    return VG;
  }
  var hD = {};
  function hd(Vu, VW) {
    var Vy;
    var VZ;
    var VG;
    var VE;
    var Vz;
    var Vv = [];
    for (var Vi = 0, VT = Vu.length; Vi < VT; Vi++) {
      if ((VZ = Vu[Vi]).style) {
        Vy = VZ.style.display;
        if (VW) {
          if (Vy === "none") {
            Vv[Vi] = hQ.get(VZ, "display") || null;
            if (!Vv[Vi]) {
              VZ.style.display = "";
            }
          }
          if (VZ.style.display === "" && hf(VZ)) {
            Vz = VE = undefined;
            VE = (VG = VZ).ownerDocument;
            VG = VG.nodeName;
            Vv[Vi] = (Vz = hD[VG]) || (VE = VE.body.appendChild(VE.createElement(VG)), Vz = hr.css(VE, "display"), VE.parentNode.removeChild(VE), hD[VG] = Vz = Vz === "none" ? "block" : Vz);
          }
        } else if (Vy !== "none") {
          Vv[Vi] = "none";
          hQ.set(VZ, "display", Vy);
        }
      }
    }
    for (Vi = 0; Vi < VT; Vi++) {
      if (Vv[Vi] != null) {
        Vu[Vi].style.display = Vv[Vi];
      }
    }
    return Vu;
  }
  hr.fn.extend({
    show: function () {
      return hd(this, true);
    },
    hide: function () {
      return hd(this);
    },
    toggle: function (Vu) {
      if (typeof Vu == "boolean") {
        if (Vu) {
          return this.show();
        } else {
          return this.hide();
        }
      } else {
        return this.each(function () {
          if (hf(this)) {
            hr(this).show();
          } else {
            hr(this).hide();
          }
        });
      }
    }
  });
  var L0 = /^(?:checkbox|radio)$/i;
  var L1 = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i;
  var L2 = /^$|^module$|\/(?:java|ecma)script/i;
  var L3 = {
    option: [1, "<select multiple='multiple'>", "</select>"],
    thead: [1, "<table>", "</table>"],
    col: [2, "<table><colgroup>", "</colgroup></table>"],
    tr: [2, "<table><tbody>", "</tbody></table>"],
    td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
    _default: [0, "", ""]
  };
  function L4(Vu, VW) {
    var Vy = Vu.getElementsByTagName !== undefined ? Vu.getElementsByTagName(VW || "*") : Vu.querySelectorAll !== undefined ? Vu.querySelectorAll(VW || "*") : [];
    if (VW === undefined || VW && hB(Vu, VW)) {
      return hr.merge([Vu], Vy);
    } else {
      return Vy;
    }
  }
  function L5(Vu, VW) {
    for (var Vy = 0, VZ = Vu.length; Vy < VZ; Vy++) {
      hQ.set(Vu[Vy], "globalEval", !VW || hQ.get(VW[Vy], "globalEval"));
    }
  }
  L3.optgroup = L3.option;
  L3.tbody = L3.tfoot = L3.colgroup = L3.caption = L3.thead;
  L3.th = L3.td;
  var L6 = /<|&#?\w+;/;
  function L7(Vu, VW, Vy, VZ, VG) {
    var VE;
    var Vz;
    var Vv;
    var Vi;
    var VT;
    var VQ = VW.createDocumentFragment();
    var VI = [];
    for (var VO = 0, Vs = Vu.length; VO < Vs; VO++) {
      if ((VE = Vu[VO]) || VE === 0) {
        if (ho(VE) === "object") {
          hr.merge(VI, VE.nodeType ? [VE] : VE);
        } else if (L6.test(VE)) {
          Vz = Vz || VQ.appendChild(VW.createElement("div"));
          Vv = (L1.exec(VE) || ["", ""])[1].toLowerCase();
          Vv = L3[Vv] || L3._default;
          Vz.innerHTML = Vv[1] + hr.htmlPrefilter(VE) + Vv[2];
          VT = Vv[0];
          while (VT--) {
            Vz = Vz.lastChild;
          }
          hr.merge(VI, Vz.childNodes);
          (Vz = VQ.firstChild).textContent = "";
        } else {
          VI.push(VW.createTextNode(VE));
        }
      }
    }
    VQ.textContent = "";
    VO = 0;
    while (VE = VI[VO++]) {
      if (VZ && hr.inArray(VE, VZ) > -1) {
        if (VG) {
          VG.push(VE);
        }
      } else {
        Vi = hr.contains(VE.ownerDocument, VE);
        Vz = L4(VQ.appendChild(VE), "script");
        if (Vi) {
          L5(Vz);
        }
        if (Vy) {
          for (VT = 0; VE = Vz[VT++];) {
            if (L2.test(VE.type || "")) {
              Vy.push(VE);
            }
          }
        }
      }
    }
    return VQ;
  }
  LC = h5.createDocumentFragment().appendChild(h5.createElement("div"));
  (Lf = h5.createElement("input")).setAttribute("type", "radio");
  Lf.setAttribute("checked", "checked");
  Lf.setAttribute("name", "t");
  LC.appendChild(Lf);
  hg.checkClone = LC.cloneNode(true).cloneNode(true).lastChild.checked;
  LC.innerHTML = "<textarea>x</textarea>";
  hg.noCloneChecked = !!LC.cloneNode(true).lastChild.defaultValue;
  var L8 = h5.documentElement;
  var L9 = /^key/;
  var Lh = /^(?:mouse|pointer|contextmenu|drag|drop)|click/;
  var LL = /^([^.]*)(?:\.(.+)|)/;
  function LV() {
    return true;
  }
  function LK() {
    return false;
  }
  function Lw() {
    try {
      return h5.activeElement;
    } catch (Vu) {}
  }
  function LX(Vu, VW, Vy, VZ, VG, VE) {
    var Vz;
    var Vv;
    if (typeof VW == "object") {
      if (typeof Vy != "string") {
        VZ = VZ || Vy;
        Vy = undefined;
      }
      for (Vv in VW) {
        LX(Vu, Vv, Vy, VZ, VW[Vv], VE);
      }
      return Vu;
    }
    if (VZ == null && VG == null) {
      VG = Vy;
      VZ = Vy = undefined;
    } else if (VG == null) {
      if (typeof Vy == "string") {
        VG = VZ;
        VZ = undefined;
      } else {
        VG = VZ;
        VZ = Vy;
        Vy = undefined;
      }
    }
    if (VG === false) {
      VG = LK;
    } else if (!VG) {
      return Vu;
    }
    if (VE === 1) {
      Vz = VG;
      (VG = function (Vi) {
        hr().off(Vi);
        return Vz.apply(this, arguments);
      }).guid = Vz.guid ||= hr.guid++;
    }
    return Vu.each(function () {
      hr.event.add(this, VW, VG, VZ, Vy);
    });
  }
  hr.event = {
    global: {},
    add: function (Vu, VW, Vy, VZ, VG) {
      var VE;
      var Vz;
      var Vv;
      var Vi;
      var VT;
      var VQ;
      var VI;
      var VO;
      var Vs;
      var VY = hQ.get(Vu);
      if (VY) {
        if (Vy.handler) {
          Vy = (VE = Vy).handler;
          VG = VE.selector;
        }
        if (VG) {
          hr.find.matchesSelector(L8, VG);
        }
        Vy.guid ||= hr.guid++;
        Vv = (Vv = VY.events) || (VY.events = {});
        Vz = (Vz = VY.handle) || (VY.handle = function (Vf) {
          if (hr !== undefined && hr.event.triggered !== Vf.type) {
            return hr.event.dispatch.apply(Vu, arguments);
          } else {
            return undefined;
          }
        });
        Vi = (VW = (VW || "").match(hp) || [""]).length;
        while (Vi--) {
          VI = Vs = (VO = LL.exec(VW[Vi]) || [])[1];
          VO = (VO[2] || "").split(".").sort();
          if (VI) {
            VT = hr.event.special[VI] || {};
            VI = (VG ? VT.delegateType : VT.bindType) || VI;
            VT = hr.event.special[VI] || {};
            Vs = hr.extend({
              type: VI,
              origType: Vs,
              data: VZ,
              handler: Vy,
              guid: Vy.guid,
              selector: VG,
              needsContext: VG && hr.expr.match.needsContext.test(VG),
              namespace: VO.join(".")
            }, VE);
            if (!(VQ = Vv[VI]) && !((VQ = Vv[VI] = []).delegateCount = 0, VT.setup && VT.setup.call(Vu, VZ, VO, Vz) !== false)) {
              if (Vu.addEventListener) {
                Vu.addEventListener(VI, Vz);
              }
            }
            if (VT.add) {
              VT.add.call(Vu, Vs);
              Vs.handler.guid ||= Vy.guid;
            }
            if (VG) {
              VQ.splice(VQ.delegateCount++, 0, Vs);
            } else {
              VQ.push(Vs);
            }
            hr.event.global[VI] = true;
          }
        }
      }
    },
    remove: function (Vu, VW, Vy, VZ, VG) {
      var VE;
      var Vz;
      var Vv;
      var Vi;
      var VT;
      var VQ;
      var VI;
      var VO;
      var Vs;
      var VY;
      var Vf;
      var VC = hQ.hasData(Vu) && hQ.get(Vu);
      if (VC && (Vi = VC.events)) {
        for (VT = (VW = (VW || "").match(hp) || [""]).length; VT--;) {
          Vs = Vf = (Vv = LL.exec(VW[VT]) || [])[1];
          VY = (Vv[2] || "").split(".").sort();
          if (Vs) {
            VI = hr.event.special[Vs] || {};
            VO = Vi[Vs = (VZ ? VI.delegateType : VI.bindType) || Vs] || [];
            Vv = Vv[2] && new RegExp("(^|\\.)" + VY.join("\\.(?:.*\\.|)") + "(\\.|$)");
            Vz = VE = VO.length;
            while (VE--) {
              VQ = VO[VE];
              if ((!!VG || Vf === VQ.origType) && (!Vy || Vy.guid === VQ.guid) && (!Vv || !!Vv.test(VQ.namespace)) && (!VZ || VZ === VQ.selector || VZ === "**" && !!VQ.selector)) {
                VO.splice(VE, 1);
                if (VQ.selector) {
                  VO.delegateCount--;
                }
                if (VI.remove) {
                  VI.remove.call(Vu, VQ);
                }
              }
            }
            if (Vz && !VO.length) {
              if (!VI.teardown || VI.teardown.call(Vu, VY, VC.handle) === false) {
                hr.removeEvent(Vu, Vs, VC.handle);
              }
              delete Vi[Vs];
            }
          } else {
            for (Vs in Vi) {
              hr.event.remove(Vu, Vs + VW[VT], Vy, VZ, true);
            }
          }
        }
        if (hr.isEmptyObject(Vi)) {
          hQ.remove(Vu, "handle events");
        }
      }
    },
    dispatch: function (Vu) {
      var VW;
      var Vy;
      var VZ;
      var VG;
      var VE;
      var Vz = hr.event.fix(Vu);
      var Vv = new Array(arguments.length);
      var Vu = (hQ.get(this, "events") || {})[Vz.type] || [];
      var Vi = hr.event.special[Vz.type] || {};
      Vv[0] = Vz;
      VW = 1;
      for (; VW < arguments.length; VW++) {
        Vv[VW] = arguments[VW];
      }
      Vz.delegateTarget = this;
      if (!Vi.preDispatch || Vi.preDispatch.call(this, Vz) !== false) {
        VE = hr.event.handlers.call(this, Vz, Vu);
        VW = 0;
        while ((VZ = VE[VW++]) && !Vz.isPropagationStopped()) {
          Vz.currentTarget = VZ.elem;
          Vy = 0;
          while ((VG = VZ.handlers[Vy++]) && !Vz.isImmediatePropagationStopped()) {
            if (!Vz.rnamespace || !!Vz.rnamespace.test(VG.namespace)) {
              Vz.handleObj = VG;
              Vz.data = VG.data;
              if ((VG = ((hr.event.special[VG.origType] || {}).handle || VG.handler).apply(VZ.elem, Vv)) !== undefined && (Vz.result = VG) === false) {
                Vz.preventDefault();
                Vz.stopPropagation();
              }
            }
          }
        }
        if (Vi.postDispatch) {
          Vi.postDispatch.call(this, Vz);
        }
        return Vz.result;
      }
    },
    handlers: function (Vu, VW) {
      var Vy;
      var VZ;
      var VG;
      var VE;
      var Vz;
      var Vv = [];
      var Vi = VW.delegateCount;
      var VT = Vu.target;
      if (Vi && VT.nodeType && (Vu.type !== "click" || Vu.button < 1)) {
        for (; VT !== this; VT = VT.parentNode || this) {
          if (VT.nodeType === 1 && (Vu.type !== "click" || VT.disabled !== true)) {
            VE = [];
            Vz = {};
            Vy = 0;
            for (; Vy < Vi; Vy++) {
              if (Vz[VG = (VZ = VW[Vy]).selector + " "] === undefined) {
                Vz[VG] = VZ.needsContext ? hr(VG, this).index(VT) > -1 : hr.find(VG, this, null, [VT]).length;
              }
              if (Vz[VG]) {
                VE.push(VZ);
              }
            }
            if (VE.length) {
              Vv.push({
                elem: VT,
                handlers: VE
              });
            }
          }
        }
      }
      VT = this;
      if (Vi < VW.length) {
        Vv.push({
          elem: VT,
          handlers: VW.slice(Vi)
        });
      }
      return Vv;
    },
    addProp: function (Vu, VW) {
      Object.defineProperty(hr.Event.prototype, Vu, {
        enumerable: true,
        configurable: true,
        get: h2(VW) ? function () {
          if (this.originalEvent) {
            return VW(this.originalEvent);
          }
        } : function () {
          if (this.originalEvent) {
            return this.originalEvent[Vu];
          }
        },
        set: function (Vy) {
          Object.defineProperty(this, Vu, {
            enumerable: true,
            configurable: true,
            writable: true,
            value: Vy
          });
        }
      });
    },
    fix: function (Vu) {
      if (Vu[hr.expando]) {
        return Vu;
      } else {
        return new hr.Event(Vu);
      }
    },
    special: {
      load: {
        noBubble: true
      },
      focus: {
        trigger: function () {
          if (this !== Lw() && this.focus) {
            this.focus();
            return false;
          }
        },
        delegateType: "focusin"
      },
      blur: {
        trigger: function () {
          if (this === Lw() && this.blur) {
            this.blur();
            return false;
          }
        },
        delegateType: "focusout"
      },
      click: {
        trigger: function () {
          if (this.type === "checkbox" && this.click && hB(this, "input")) {
            this.click();
            return false;
          }
        },
        _default: function (Vu) {
          return hB(Vu.target, "a");
        }
      },
      beforeunload: {
        postDispatch: function (Vu) {
          if (Vu.result !== undefined && Vu.originalEvent) {
            Vu.originalEvent.returnValue = Vu.result;
          }
        }
      }
    }
  };
  hr.removeEvent = function (Vu, VW, Vy) {
    if (Vu.removeEventListener) {
      Vu.removeEventListener(VW, Vy);
    }
  };
  hr.Event = function (Vu, VW) {
    if (!(this instanceof hr.Event)) {
      return new hr.Event(Vu, VW);
    }
    if (Vu && Vu.type) {
      this.originalEvent = Vu;
      this.type = Vu.type;
      this.isDefaultPrevented = Vu.defaultPrevented || Vu.defaultPrevented === undefined && Vu.returnValue === false ? LV : LK;
      this.target = Vu.target && Vu.target.nodeType === 3 ? Vu.target.parentNode : Vu.target;
      this.currentTarget = Vu.currentTarget;
      this.relatedTarget = Vu.relatedTarget;
    } else {
      this.type = Vu;
    }
    if (VW) {
      hr.extend(this, VW);
    }
    this.timeStamp = Vu && Vu.timeStamp || Date.now();
    this[hr.expando] = true;
  };
  hr.Event.prototype = {
    constructor: hr.Event,
    isDefaultPrevented: LK,
    isPropagationStopped: LK,
    isImmediatePropagationStopped: LK,
    isSimulated: false,
    preventDefault: function () {
      var Vu = this.originalEvent;
      this.isDefaultPrevented = LV;
      if (Vu && !this.isSimulated) {
        Vu.preventDefault();
      }
    },
    stopPropagation: function () {
      var Vu = this.originalEvent;
      this.isPropagationStopped = LV;
      if (Vu && !this.isSimulated) {
        Vu.stopPropagation();
      }
    },
    stopImmediatePropagation: function () {
      var Vu = this.originalEvent;
      this.isImmediatePropagationStopped = LV;
      if (Vu && !this.isSimulated) {
        Vu.stopImmediatePropagation();
      }
      this.stopPropagation();
    }
  };
  hr.each({
    altKey: true,
    bubbles: true,
    cancelable: true,
    changedTouches: true,
    ctrlKey: true,
    detail: true,
    eventPhase: true,
    metaKey: true,
    pageX: true,
    pageY: true,
    shiftKey: true,
    view: true,
    char: true,
    charCode: true,
    key: true,
    keyCode: true,
    button: true,
    buttons: true,
    clientX: true,
    clientY: true,
    offsetX: true,
    offsetY: true,
    pointerId: true,
    pointerType: true,
    screenX: true,
    screenY: true,
    targetTouches: true,
    toElement: true,
    touches: true,
    which: function (Vu) {
      var VW = Vu.button;
      if (Vu.which == null && L9.test(Vu.type)) {
        return Vu.charCode ?? Vu.keyCode;
      } else if (!Vu.which && VW !== undefined && Lh.test(Vu.type)) {
        if (VW & 1) {
          return 1;
        } else if (VW & 2) {
          return 3;
        } else if (VW & 4) {
          return 2;
        } else {
          return 0;
        }
      } else {
        return Vu.which;
      }
    }
  }, hr.event.addProp);
  hr.each({
    mouseenter: "mouseover",
    mouseleave: "mouseout",
    pointerenter: "pointerover",
    pointerleave: "pointerout"
  }, function (Vu, VW) {
    hr.event.special[Vu] = {
      delegateType: VW,
      bindType: VW,
      handle: function (Vy) {
        var VZ;
        var VG = Vy.relatedTarget;
        var VE = Vy.handleObj;
        if (!VG || VG !== this && !hr.contains(this, VG)) {
          Vy.type = VE.origType;
          VZ = VE.handler.apply(this, arguments);
          Vy.type = VW;
        }
        return VZ;
      }
    };
  });
  hr.fn.extend({
    on: function (Vu, VW, Vy, VZ) {
      return LX(this, Vu, VW, Vy, VZ);
    },
    one: function (Vu, VW, Vy, VZ) {
      return LX(this, Vu, VW, Vy, VZ, 1);
    },
    off: function (Vu, VW, Vy) {
      var VZ;
      var VG;
      if (Vu && Vu.preventDefault && Vu.handleObj) {
        VZ = Vu.handleObj;
        hr(Vu.delegateTarget).off(VZ.namespace ? VZ.origType + "." + VZ.namespace : VZ.origType, VZ.selector, VZ.handler);
      } else {
        if (typeof Vu != "object") {
          if (VW === false || typeof VW == "function") {
            Vy = VW;
            VW = undefined;
          }
          if (Vy === false) {
            Vy = LK;
          }
          return this.each(function () {
            hr.event.remove(this, Vu, Vy, VW);
          });
        }
        for (VG in Vu) {
          this.off(VG, VW, Vu[VG]);
        }
      }
      return this;
    }
  });
  var Lg = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi;
  var Ll = /<script|<style|<link/i;
  var LM = /checked\s*(?:[^=]|=\s*.checked.)/i;
  var Lo = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
  function Lr(Vu, VW) {
    return hB(Vu, "table") && hB(VW.nodeType !== 11 ? VW : VW.firstChild, "tr") && hr(Vu).children("tbody")[0] || Vu;
  }
  function La(Vu) {
    Vu.type = (Vu.getAttribute("type") !== null) + "/" + Vu.type;
    return Vu;
  }
  function Lx(Vu) {
    if ((Vu.type || "").slice(0, 5) === "true/") {
      Vu.type = Vu.type.slice(5);
    } else {
      Vu.removeAttribute("type");
    }
    return Vu;
  }
  function Lb(Vu, VW) {
    var Vy;
    var VZ;
    var VG;
    var VE;
    var Vz;
    var Vv;
    if (VW.nodeType === 1) {
      if (hQ.hasData(Vu) && (VE = hQ.access(Vu), Vz = hQ.set(VW, VE), Vv = VE.events)) {
        delete Vz.handle;
        Vz.events = {};
        for (VG in Vv) {
          Vy = 0;
          VZ = Vv[VG].length;
          for (; Vy < VZ; Vy++) {
            hr.event.add(VW, VG, Vv[VG][Vy]);
          }
        }
      }
      if (hI.hasData(Vu)) {
        VE = hI.access(Vu);
        Vz = hr.extend({}, VE);
        hI.set(VW, Vz);
      }
    }
  }
  function Lc(Vu, VW, Vy, VZ) {
    VW = h8.apply([], VW);
    var VG;
    var VE;
    var Vz;
    var Vv;
    var Vi;
    var VT;
    var VQ = 0;
    var VI = Vu.length;
    var VO = VI - 1;
    var Vs = VW[0];
    var VY = h2(Vs);
    if (VY || VI > 1 && typeof Vs == "string" && !hg.checkClone && LM.test(Vs)) {
      return Vu.each(function (Vf) {
        var VC = Vu.eq(Vf);
        if (VY) {
          VW[0] = Vs.call(this, Vf, VC.html());
        }
        Lc(VC, VW, Vy, VZ);
      });
    }
    if (VI && (VE = (VG = L7(VW, Vu[0].ownerDocument, false, Vu, VZ)).firstChild, VG.childNodes.length === 1 && (VG = VE), VE || VZ)) {
      for (Vv = (Vz = hr.map(L4(VG, "script"), La)).length; VQ < VI; VQ++) {
        Vi = VG;
        if (VQ !== VO && (Vi = hr.clone(Vi, true, true), Vv)) {
          hr.merge(Vz, L4(Vi, "script"));
        }
        Vy.call(Vu[VQ], Vi, VQ);
      }
      if (Vv) {
        VT = Vz[Vz.length - 1].ownerDocument;
        hr.map(Vz, Lx);
        VQ = 0;
        for (; VQ < Vv; VQ++) {
          Vi = Vz[VQ];
          if (L2.test(Vi.type || "") && !hQ.access(Vi, "globalEval") && hr.contains(VT, Vi)) {
            if (Vi.src && (Vi.type || "").toLowerCase() !== "module") {
              if (hr._evalUrl) {
                hr._evalUrl(Vi.src);
              }
            } else {
              hM(Vi.textContent.replace(Lo, ""), VT, Vi);
            }
          }
        }
      }
    }
    return Vu;
  }
  function Lm(Vu, VW, Vy) {
    for (var VZ, VG = VW ? hr.filter(VW, Vu) : Vu, VE = 0; (VZ = VG[VE]) != null; VE++) {
      if (!Vy && VZ.nodeType === 1) {
        hr.cleanData(L4(VZ));
      }
      if (VZ.parentNode) {
        if (Vy && hr.contains(VZ.ownerDocument, VZ)) {
          L5(L4(VZ, "script"));
        }
        VZ.parentNode.removeChild(VZ);
      }
    }
    return Vu;
  }
  hr.extend({
    htmlPrefilter: function (Vu) {
      return Vu.replace(Lg, "<$1></$2>");
    },
    clone: function (Vu, VW, Vy) {
      var VZ;
      var VG;
      var VE;
      var Vz;
      var Vv;
      var Vi;
      var VT;
      var VQ = Vu.cloneNode(true);
      var VI = hr.contains(Vu.ownerDocument, Vu);
      if (!hg.noCloneChecked && (Vu.nodeType === 1 || Vu.nodeType === 11) && !hr.isXMLDoc(Vu)) {
        Vz = L4(VQ);
        VZ = 0;
        VG = (VE = L4(Vu)).length;
        for (; VZ < VG; VZ++) {
          Vv = VE[VZ];
          Vi = Vz[VZ];
          VT = undefined;
          if ((VT = Vi.nodeName.toLowerCase()) === "input" && L0.test(Vv.type)) {
            Vi.checked = Vv.checked;
          } else if (VT === "input" || VT === "textarea") {
            Vi.defaultValue = Vv.defaultValue;
          }
        }
      }
      if (VW) {
        if (Vy) {
          VE = VE || L4(Vu);
          Vz = Vz || L4(VQ);
          VZ = 0;
          VG = VE.length;
          for (; VZ < VG; VZ++) {
            Lb(VE[VZ], Vz[VZ]);
          }
        } else {
          Lb(Vu, VQ);
        }
      }
      if ((Vz = L4(VQ, "script")).length > 0) {
        L5(Vz, !VI && L4(Vu, "script"));
      }
      return VQ;
    },
    cleanData: function (Vu) {
      var VW;
      for (var Vy, VZ, VG = hr.event.special, VE = 0; (Vy = Vu[VE]) !== undefined; VE++) {
        if (hi(Vy)) {
          if (VW = Vy[hQ.expando]) {
            if (VW.events) {
              for (VZ in VW.events) {
                if (VG[VZ]) {
                  hr.event.remove(Vy, VZ);
                } else {
                  hr.removeEvent(Vy, VZ, VW.handle);
                }
              }
            }
            Vy[hQ.expando] = undefined;
          }
          Vy[hI.expando] &&= undefined;
        }
      }
    }
  });
  hr.fn.extend({
    detach: function (Vu) {
      return Lm(this, Vu, true);
    },
    remove: function (Vu) {
      return Lm(this, Vu);
    },
    text: function (Vu) {
      return hZ(this, function (VW) {
        if (VW === undefined) {
          return hr.text(this);
        } else {
          return this.empty().each(function () {
            if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
              this.textContent = VW;
            }
          });
        }
      }, null, Vu, arguments.length);
    },
    append: function () {
      return Lc(this, arguments, function (Vu) {
        if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
          Lr(this, Vu).appendChild(Vu);
        }
      });
    },
    prepend: function () {
      return Lc(this, arguments, function (Vu) {
        var VW;
        if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
          (VW = Lr(this, Vu)).insertBefore(Vu, VW.firstChild);
        }
      });
    },
    before: function () {
      return Lc(this, arguments, function (Vu) {
        if (this.parentNode) {
          this.parentNode.insertBefore(Vu, this);
        }
      });
    },
    after: function () {
      return Lc(this, arguments, function (Vu) {
        if (this.parentNode) {
          this.parentNode.insertBefore(Vu, this.nextSibling);
        }
      });
    },
    empty: function () {
      for (var Vu, VW = 0; (Vu = this[VW]) != null; VW++) {
        if (Vu.nodeType === 1) {
          hr.cleanData(L4(Vu, false));
          Vu.textContent = "";
        }
      }
      return this;
    },
    clone: function (Vu, VW) {
      Vu = Vu != null && Vu;
      VW = VW == null ? Vu : VW;
      return this.map(function () {
        return hr.clone(this, Vu, VW);
      });
    },
    html: function (Vu) {
      return hZ(this, function (VW) {
        var Vy = this[0] || {};
        var VZ = 0;
        var VG = this.length;
        if (VW === undefined && Vy.nodeType === 1) {
          return Vy.innerHTML;
        }
        if (typeof VW == "string" && !Ll.test(VW) && !L3[(L1.exec(VW) || ["", ""])[1].toLowerCase()]) {
          VW = hr.htmlPrefilter(VW);
          try {
            for (; VZ < VG; VZ++) {
              if ((Vy = this[VZ] || {}).nodeType === 1) {
                hr.cleanData(L4(Vy, false));
                Vy.innerHTML = VW;
              }
            }
            Vy = 0;
          } catch (VE) {}
        }
        if (Vy) {
          this.empty().append(VW);
        }
      }, null, Vu, arguments.length);
    },
    replaceWith: function () {
      var Vu = [];
      return Lc(this, arguments, function (VW) {
        var Vy = this.parentNode;
        if (hr.inArray(this, Vu) < 0 && (hr.cleanData(L4(this)), Vy)) {
          Vy.replaceChild(VW, this);
        }
      }, Vu);
    }
  });
  hr.each({
    appendTo: "append",
    prependTo: "prepend",
    insertBefore: "before",
    insertAfter: "after",
    replaceAll: "replaceWith"
  }, function (Vu, VW) {
    hr.fn[Vu] = function (Vy) {
      var VZ;
      var VG = [];
      var VE = hr(Vy);
      for (var Vz = VE.length - 1, Vv = 0; Vv <= Vz; Vv++) {
        VZ = Vv === Vz ? this : this.clone(true);
        hr(VE[Vv])[VW](VZ);
        h9.apply(VG, VZ.get());
      }
      return this.pushStack(VG);
    };
  });
  function LB(Vu) {
    var VW = Vu.ownerDocument.defaultView;
    return (VW = VW && VW.opener ? VW : h0).getComputedStyle(Vu);
  }
  var LA;
  var Lj;
  var LF;
  var LN;
  var LP;
  var Ln;
  var LS;
  var Lp = new RegExp("^(" + h4 + ")(?!px)[a-z%]+$", "i");
  var LH = new RegExp(hR.join("|"), "i");
  function Lk() {
    var Vu;
    if (LS) {
      Ln.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0";
      LS.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%";
      L8.appendChild(Ln).appendChild(LS);
      Vu = h0.getComputedStyle(LS);
      LA = Vu.top !== "1%";
      LP = Lq(Vu.marginLeft) === 12;
      LS.style.right = "60%";
      LN = Lq(Vu.right) === 36;
      Lj = Lq(Vu.width) === 36;
      LS.style.position = "absolute";
      LF = LS.offsetWidth === 36 || "absolute";
      L8.removeChild(Ln);
      LS = null;
    }
  }
  function Lq(Vu) {
    return Math.round(parseFloat(Vu));
  }
  function Lu(Vu, VW, Vy) {
    var VZ;
    var VG;
    var VE = Vu.style;
    if ((Vy = Vy || LB(Vu)) && ((VG = Vy.getPropertyValue(VW) || Vy[VW]) !== "" || hr.contains(Vu.ownerDocument, Vu) || (VG = hr.style(Vu, VW)), !hg.pixelBoxStyles()) && Lp.test(VG) && LH.test(VW)) {
      Vu = VE.width;
      VW = VE.minWidth;
      VZ = VE.maxWidth;
      VE.minWidth = VE.maxWidth = VE.width = VG;
      VG = Vy.width;
      VE.width = Vu;
      VE.minWidth = VW;
      VE.maxWidth = VZ;
    }
    if (VG !== undefined) {
      return VG + "";
    } else {
      return VG;
    }
  }
  function LW(Vu, VW) {
    return {
      get: function () {
        if (!Vu()) {
          return (this.get = VW).apply(this, arguments);
        }
        delete this.get;
      }
    };
  }
  Ln = h5.createElement("div");
  if ((LS = h5.createElement("div")).style) {
    LS.style.backgroundClip = "content-box";
    LS.cloneNode(true).style.backgroundClip = "";
    hg.clearCloneStyle = LS.style.backgroundClip === "content-box";
    hr.extend(hg, {
      boxSizingReliable: function () {
        Lk();
        return Lj;
      },
      pixelBoxStyles: function () {
        Lk();
        return LN;
      },
      pixelPosition: function () {
        Lk();
        return LA;
      },
      reliableMarginLeft: function () {
        Lk();
        return LP;
      },
      scrollboxSize: function () {
        Lk();
        return LF;
      }
    });
  }
  var Ly = /^(none|table(?!-c[ea]).+)/;
  var LZ = /^--/;
  var LG = {
    position: "absolute",
    visibility: "hidden",
    display: "block"
  };
  var LE = {
    letterSpacing: "0",
    fontWeight: "400"
  };
  var Lz = ["Webkit", "Moz", "ms"];
  var Lv = h5.createElement("div").style;
  function Li(Vu) {
    return hr.cssProps[Vu] ||= function (VW) {
      if (VW in Lv) {
        return VW;
      }
      var Vy = VW[0].toUpperCase() + VW.slice(1);
      for (var VZ = Lz.length; VZ--;) {
        if ((VW = Lz[VZ] + Vy) in Lv) {
          return VW;
        }
      }
    }(Vu) || Vu;
  }
  function LT(Vu, VW, Vy) {
    var VZ = hU.exec(VW);
    if (VZ) {
      return Math.max(0, VZ[2] - (Vy || 0)) + (VZ[3] || "px");
    } else {
      return VW;
    }
  }
  function LQ(Vu, VW, Vy, VZ, VG, VE) {
    var Vz = VW === "width" ? 1 : 0;
    var Vv = 0;
    var Vi = 0;
    if (Vy === (VZ ? "border" : "content")) {
      return 0;
    }
    for (; Vz < 4; Vz += 2) {
      if (Vy === "margin") {
        Vi += hr.css(Vu, Vy + hR[Vz], true, VG);
      }
      if (VZ) {
        if (Vy === "content") {
          Vi -= hr.css(Vu, "padding" + hR[Vz], true, VG);
        }
        if (Vy !== "margin") {
          Vi -= hr.css(Vu, "border" + hR[Vz] + "Width", true, VG);
        }
      } else {
        Vi += hr.css(Vu, "padding" + hR[Vz], true, VG);
        if (Vy !== "padding") {
          Vi += hr.css(Vu, "border" + hR[Vz] + "Width", true, VG);
        } else {
          Vv += hr.css(Vu, "border" + hR[Vz] + "Width", true, VG);
        }
      }
    }
    if (!VZ && VE >= 0) {
      Vi += Math.max(0, Math.ceil(Vu["offset" + VW[0].toUpperCase() + VW.slice(1)] - VE - Vi - Vv - 0.5));
    }
    return Vi;
  }
  function LI(Vu, VW, Vy) {
    var VZ = LB(Vu);
    var VG = Lu(Vu, VW, VZ);
    var VE = hr.css(Vu, "boxSizing", false, VZ) === "border-box";
    var Vz = VE;
    if (Lp.test(VG)) {
      if (!Vy) {
        return VG;
      }
      VG = "auto";
    }
    Vz = Vz && (hg.boxSizingReliable() || VG === Vu.style[VW]);
    if (VG === "auto" || !parseFloat(VG) && hr.css(Vu, "display", false, VZ) === "inline") {
      VG = Vu["offset" + VW[0].toUpperCase() + VW.slice(1)];
      Vz = true;
    }
    return (VG = parseFloat(VG) || 0) + LQ(Vu, VW, Vy || (VE ? "border" : "content"), Vz, VZ, VG) + "px";
  }
  function LO(Vu, VW, Vy, VZ, VG) {
    return new LO.prototype.init(Vu, VW, Vy, VZ, VG);
  }
  hr.extend({
    cssHooks: {
      opacity: {
        get: function (Vu, VW) {
          if (VW) {
            if ((VW = Lu(Vu, "opacity")) === "") {
              return "1";
            } else {
              return VW;
            }
          }
        }
      }
    },
    cssNumber: {
      animationIterationCount: true,
      columnCount: true,
      fillOpacity: true,
      flexGrow: true,
      flexShrink: true,
      fontWeight: true,
      lineHeight: true,
      opacity: true,
      order: true,
      orphans: true,
      widows: true,
      zIndex: true,
      zoom: true
    },
    cssProps: {},
    style: function (Vu, VW, Vy, VZ) {
      if (Vu && Vu.nodeType !== 3 && Vu.nodeType !== 8 && Vu.style) {
        var VG;
        var VE;
        var Vz;
        var Vv = hv(VW);
        var Vi = LZ.test(VW);
        var VT = Vu.style;
        if (!Vi) {
          VW = Li(Vv);
        }
        Vz = hr.cssHooks[VW] || hr.cssHooks[Vv];
        if (Vy === undefined) {
          if (Vz && "get" in Vz && (VG = Vz.get(Vu, false, VZ)) !== undefined) {
            return VG;
          } else {
            return VT[VW];
          }
        }
        if ((VE = typeof Vy) == "string" && (VG = hU.exec(Vy)) && VG[1]) {
          Vy = hJ(Vu, VW, VG);
          VE = "number";
        }
        if (Vy != null && Vy == Vy) {
          if (VE === "number") {
            Vy += VG && VG[3] || (hr.cssNumber[Vv] ? "" : "px");
          }
          if (!hg.clearCloneStyle && Vy === "" && VW.indexOf("background") === 0) {
            VT[VW] = "inherit";
          }
          if (!Vz || !("set" in Vz) || (Vy = Vz.set(Vu, Vy, VZ)) !== undefined) {
            if (Vi) {
              VT.setProperty(VW, Vy);
            } else {
              VT[VW] = Vy;
            }
          }
        }
      }
    },
    css: function (Vu, VW, Vy, VZ) {
      var VG;
      var VE = hv(VW);
      if (!LZ.test(VW)) {
        VW = Li(VE);
      }
      if ((VG = (VG = (VE = hr.cssHooks[VW] || hr.cssHooks[VE]) && "get" in VE ? VE.get(Vu, true, Vy) : VG) === undefined ? Lu(Vu, VW, VZ) : VG) === "normal" && VW in LE) {
        VG = LE[VW];
      }
      if ((Vy === "" || Vy) && (VE = parseFloat(VG), Vy === true || isFinite(VE))) {
        return VE || 0;
      } else {
        return VG;
      }
    }
  });
  hr.each(["height", "width"], function (Vu, VW) {
    hr.cssHooks[VW] = {
      get: function (Vy, VZ, VG) {
        if (VZ) {
          if (!Ly.test(hr.css(Vy, "display")) || Vy.getClientRects().length && Vy.getBoundingClientRect().width) {
            return LI(Vy, VW, VG);
          } else {
            return hC(Vy, LG, function () {
              return LI(Vy, VW, VG);
            });
          }
        }
      },
      set: function (Vy, VZ, VG) {
        var VE = LB(Vy);
        var Vz = hr.css(Vy, "boxSizing", false, VE) === "border-box";
        var VG = VG && LQ(Vy, VW, VG, Vz, VE);
        if (Vz && hg.scrollboxSize() === VE.position) {
          VG -= Math.ceil(Vy["offset" + VW[0].toUpperCase() + VW.slice(1)] - parseFloat(VE[VW]) - LQ(Vy, VW, "border", false, VE) - 0.5);
        }
        if (VG && (Vz = hU.exec(VZ)) && (Vz[3] || "px") !== "px") {
          Vy.style[VW] = VZ;
          VZ = hr.css(Vy, VW);
        }
        return LT(0, VZ, VG);
      }
    };
  });
  hr.cssHooks.marginLeft = LW(hg.reliableMarginLeft, function (Vu, VW) {
    if (VW) {
      return (parseFloat(Lu(Vu, "marginLeft")) || Vu.getBoundingClientRect().left - hC(Vu, {
        marginLeft: 0
      }, function () {
        return Vu.getBoundingClientRect().left;
      })) + "px";
    }
  });
  hr.each({
    margin: "",
    padding: "",
    border: "Width"
  }, function (Vu, VW) {
    hr.cssHooks[Vu + VW] = {
      expand: function (Vy) {
        for (var VZ = 0, VG = {}, VE = typeof Vy == "string" ? Vy.split(" ") : [Vy]; VZ < 4; VZ++) {
          VG[Vu + hR[VZ] + VW] = VE[VZ] || VE[VZ - 2] || VE[0];
        }
        return VG;
      }
    };
    if (Vu !== "margin") {
      hr.cssHooks[Vu + VW].set = LT;
    }
  });
  hr.fn.extend({
    css: function (Vu, VW) {
      return hZ(this, function (Vy, VZ, VG) {
        var VE;
        var Vz;
        var Vv = {};
        var Vi = 0;
        if (Array.isArray(VZ)) {
          VE = LB(Vy);
          Vz = VZ.length;
          for (; Vi < Vz; Vi++) {
            Vv[VZ[Vi]] = hr.css(Vy, VZ[Vi], false, VE);
          }
          return Vv;
        }
        if (VG !== undefined) {
          return hr.style(Vy, VZ, VG);
        } else {
          return hr.css(Vy, VZ);
        }
      }, Vu, VW, arguments.length > 1);
    }
  });
  ((hr.Tween = LO).prototype = {
    constructor: LO,
    init: function (Vu, VW, Vy, VZ, VG, VE) {
      this.elem = Vu;
      this.prop = Vy;
      this.easing = VG || hr.easing._default;
      this.options = VW;
      this.start = this.now = this.cur();
      this.end = VZ;
      this.unit = VE || (hr.cssNumber[Vy] ? "" : "px");
    },
    cur: function () {
      var Vu = LO.propHooks[this.prop];
      return (Vu && Vu.get ? Vu : LO.propHooks._default).get(this);
    },
    run: function (Vu) {
      var VW;
      var Vy = LO.propHooks[this.prop];
      if (this.options.duration) {
        this.pos = VW = hr.easing[this.easing](Vu, this.options.duration * Vu, 0, 1, this.options.duration);
      } else {
        this.pos = VW = Vu;
      }
      this.now = (this.end - this.start) * VW + this.start;
      if (this.options.step) {
        this.options.step.call(this.elem, this.now, this);
      }
      (Vy && Vy.set ? Vy : LO.propHooks._default).set(this);
      return this;
    }
  }).init.prototype = LO.prototype;
  (LO.propHooks = {
    _default: {
      get: function (Vu) {
        if (Vu.elem.nodeType !== 1 || Vu.elem[Vu.prop] != null && Vu.elem.style[Vu.prop] == null) {
          return Vu.elem[Vu.prop];
        } else if ((Vu = hr.css(Vu.elem, Vu.prop, "")) && Vu !== "auto") {
          return Vu;
        } else {
          return 0;
        }
      },
      set: function (Vu) {
        if (hr.fx.step[Vu.prop]) {
          hr.fx.step[Vu.prop](Vu);
        } else if (Vu.elem.nodeType !== 1 || Vu.elem.style[hr.cssProps[Vu.prop]] == null && !hr.cssHooks[Vu.prop]) {
          Vu.elem[Vu.prop] = Vu.now;
        } else {
          hr.style(Vu.elem, Vu.prop, Vu.now + Vu.unit);
        }
      }
    }
  }).scrollTop = LO.propHooks.scrollLeft = {
    set: function (Vu) {
      if (Vu.elem.nodeType && Vu.elem.parentNode) {
        Vu.elem[Vu.prop] = Vu.now;
      }
    }
  };
  hr.easing = {
    linear: function (Vu) {
      return Vu;
    },
    swing: function (Vu) {
      return 0.5 - Math.cos(Vu * Math.PI) / 2;
    },
    _default: "swing"
  };
  hr.fx = LO.prototype.init;
  hr.fx.step = {};
  var Ls;
  var LY;
  var Lf;
  var LC;
  var LU = /^(?:toggle|show|hide)$/;
  var LR = /queueHooks$/;
  function LJ() {
    if (LY) {
      if (h5.hidden === false && h0.requestAnimationFrame) {
        h0.requestAnimationFrame(LJ);
      } else {
        h0.setTimeout(LJ, hr.fx.interval);
      }
      hr.fx.tick();
    }
  }
  function LD() {
    h0.setTimeout(function () {
      Ls = undefined;
    });
    return Ls = Date.now();
  }
  function Ld(Vu, VW) {
    var Vy;
    var VZ = 0;
    var VG = {
      height: Vu
    };
    for (VW = VW ? 1 : 0; VZ < 4; VZ += 2 - VW) {
      VG["margin" + (Vy = hR[VZ])] = VG["padding" + Vy] = Vu;
    }
    if (VW) {
      VG.opacity = VG.width = Vu;
    }
    return VG;
  }
  function V0(Vu, VW, Vy) {
    var VZ;
    var VG = (V1.tweeners[VW] || []).concat(V1.tweeners["*"]);
    for (var VE = 0, Vz = VG.length; VE < Vz; VE++) {
      if (VZ = VG[VE].call(Vy, VW, Vu)) {
        return VZ;
      }
    }
  }
  function V1(Vu, VW, Vy) {
    var VZ;
    var VG;
    var VE;
    var Vz;
    var Vv;
    var Vi;
    var VT;
    var VQ = 0;
    var VI = V1.prefilters.length;
    var VO = hr.Deferred().always(function () {
      delete Vs.elem;
    });
    function Vs() {
      if (VG) {
        return false;
      }
      var VR = Ls || LD();
      var VR = Math.max(0, VY.startTime + VY.duration - VR);
      var VJ = 1 - (VR / VY.duration || 0);
      for (var VD = 0, Vd = VY.tweens.length; VD < Vd; VD++) {
        VY.tweens[VD].run(VJ);
      }
      VO.notifyWith(Vu, [VY, VJ, VR]);
      if (VJ < 1 && Vd) {
        return VR;
      } else {
        if (!Vd) {
          VO.notifyWith(Vu, [VY, 1, 0]);
        }
        VO.resolveWith(Vu, [VY]);
        return false;
      }
    }
    var VY = VO.promise({
      elem: Vu,
      props: hr.extend({}, VW),
      opts: hr.extend(true, {
        specialEasing: {},
        easing: hr.easing._default
      }, Vy),
      originalProperties: VW,
      originalOptions: Vy,
      startTime: Ls || LD(),
      duration: Vy.duration,
      tweens: [],
      createTween: function (VR, VJ) {
        VJ = hr.Tween(Vu, VY.opts, VR, VJ, VY.opts.specialEasing[VR] || VY.opts.easing);
        VY.tweens.push(VJ);
        return VJ;
      },
      stop: function (VR) {
        var VJ = 0;
        var VD = VR ? VY.tweens.length : 0;
        if (!VG) {
          for (VG = true; VJ < VD; VJ++) {
            VY.tweens[VJ].run(1);
          }
          if (VR) {
            VO.notifyWith(Vu, [VY, 1, 0]);
            VO.resolveWith(Vu, [VY, VR]);
          } else {
            VO.rejectWith(Vu, [VY, VR]);
          }
        }
        return this;
      }
    });
    var Vf = VY.props;
    var VC = Vf;
    var VU = VY.opts.specialEasing;
    for (VE in VC) {
      Vz = hv(VE);
      Vv = VU[Vz];
      Vi = VC[VE];
      if (Array.isArray(Vi)) {
        Vv = Vi[1];
        Vi = VC[VE] = Vi[0];
      }
      if (VE !== Vz) {
        VC[Vz] = Vi;
        delete VC[VE];
      }
      if ((VT = hr.cssHooks[Vz]) && "expand" in VT) {
        Vi = VT.expand(Vi);
        delete VC[Vz];
        for (VE in Vi) {
          if (!(VE in VC)) {
            VC[VE] = Vi[VE];
            VU[VE] = Vv;
          }
        }
      } else {
        VU[Vz] = Vv;
      }
    }
    for (; VQ < VI; VQ++) {
      if (VZ = V1.prefilters[VQ].call(VY, Vu, Vf, VY.opts)) {
        if (h2(VZ.stop)) {
          hr._queueHooks(VY.elem, VY.opts.queue).stop = VZ.stop.bind(VZ);
        }
        return VZ;
      }
    }
    hr.map(Vf, V0, VY);
    if (h2(VY.opts.start)) {
      VY.opts.start.call(Vu, VY);
    }
    VY.progress(VY.opts.progress).done(VY.opts.done, VY.opts.complete).fail(VY.opts.fail).always(VY.opts.always);
    hr.fx.timer(hr.extend(Vs, {
      elem: Vu,
      anim: VY,
      queue: VY.opts.queue
    }));
    return VY;
  }
  hr.Animation = hr.extend(V1, {
    tweeners: {
      "*": [function (Vu, VW) {
        var Vy = this.createTween(Vu, VW);
        hJ(Vy.elem, Vu, hU.exec(VW), Vy);
        return Vy;
      }]
    },
    tweener: function (Vu, VW) {
      var Vy;
      for (var VZ = 0, VG = (Vu = h2(Vu) ? (VW = Vu, ["*"]) : Vu.match(hp)).length; VZ < VG; VZ++) {
        Vy = Vu[VZ];
        V1.tweeners[Vy] = V1.tweeners[Vy] || [];
        V1.tweeners[Vy].unshift(VW);
      }
    },
    prefilters: [function (Vu, VW, Vy) {
      var VZ;
      var VG;
      var VE;
      var Vz;
      var Vv;
      var Vi;
      var VT;
      var VQ = "width" in VW || "height" in VW;
      var VI = this;
      var VO = {};
      var Vs = Vu.style;
      var VY = Vu.nodeType && hf(Vu);
      var Vf = hQ.get(Vu, "fxshow");
      if (!Vy.queue) {
        if ((Vz = hr._queueHooks(Vu, "fx")).unqueued == null) {
          Vz.unqueued = 0;
          Vv = Vz.empty.fire;
          Vz.empty.fire = function () {
            if (!Vz.unqueued) {
              Vv();
            }
          };
        }
        Vz.unqueued++;
        VI.always(function () {
          VI.always(function () {
            Vz.unqueued--;
            if (!hr.queue(Vu, "fx").length) {
              Vz.empty.fire();
            }
          });
        });
      }
      for (VZ in VW) {
        VG = VW[VZ];
        if (LU.test(VG)) {
          delete VW[VZ];
          VE = VE || VG === "toggle";
          if (VG === (VY ? "hide" : "show")) {
            if (VG !== "show" || !Vf || Vf[VZ] === undefined) {
              continue;
            }
            VY = true;
          }
          VO[VZ] = Vf && Vf[VZ] || hr.style(Vu, VZ);
        }
      }
      if ((Vi = !hr.isEmptyObject(VW)) || !hr.isEmptyObject(VO)) {
        if (VQ && Vu.nodeType === 1 && (Vy.overflow = [Vs.overflow, Vs.overflowX, Vs.overflowY], (VT = Vf && Vf.display) == null && (VT = hQ.get(Vu, "display")), (VQ = hr.css(Vu, "display")) === "none" && (VT ? VQ = VT : (hd([Vu], true), VT = Vu.style.display || VT, VQ = hr.css(Vu, "display"), hd([Vu]))), VQ === "inline" || VQ === "inline-block" && VT != null) && hr.css(Vu, "float") === "none") {
          if (!Vi) {
            VI.done(function () {
              Vs.display = VT;
            });
            if (VT == null) {
              VQ = Vs.display;
              VT = VQ === "none" ? "" : VQ;
            }
          }
          Vs.display = "inline-block";
        }
        if (Vy.overflow) {
          Vs.overflow = "hidden";
          VI.always(function () {
            Vs.overflow = Vy.overflow[0];
            Vs.overflowX = Vy.overflow[1];
            Vs.overflowY = Vy.overflow[2];
          });
        }
        Vi = false;
        for (VZ in VO) {
          if (!Vi) {
            if (Vf) {
              if ("hidden" in Vf) {
                VY = Vf.hidden;
              }
            } else {
              Vf = hQ.access(Vu, "fxshow", {
                display: VT
              });
            }
            if (VE) {
              Vf.hidden = !VY;
            }
            if (VY) {
              hd([Vu], true);
            }
            VI.done(function () {
              if (!VY) {
                hd([Vu]);
              }
              hQ.remove(Vu, "fxshow");
              for (VZ in VO) {
                hr.style(Vu, VZ, VO[VZ]);
              }
            });
          }
          Vi = V0(VY ? Vf[VZ] : 0, VZ, VI);
          if (!(VZ in Vf)) {
            Vf[VZ] = Vi.start;
            if (VY) {
              Vi.end = Vi.start;
              Vi.start = 0;
            }
          }
        }
      }
    }],
    prefilter: function (Vu, VW) {
      if (VW) {
        V1.prefilters.unshift(Vu);
      } else {
        V1.prefilters.push(Vu);
      }
    }
  });
  hr.speed = function (Vu, VW, Vy) {
    var VZ = Vu && typeof Vu == "object" ? hr.extend({}, Vu) : {
      complete: Vy || !Vy && VW || h2(Vu) && Vu,
      duration: Vu,
      easing: Vy && VW || VW && !h2(VW) && VW
    };
    if (hr.fx.off) {
      VZ.duration = 0;
    } else if (typeof VZ.duration != "number") {
      if (VZ.duration in hr.fx.speeds) {
        VZ.duration = hr.fx.speeds[VZ.duration];
      } else {
        VZ.duration = hr.fx.speeds._default;
      }
    }
    if (VZ.queue == null || VZ.queue === true) {
      VZ.queue = "fx";
    }
    VZ.old = VZ.complete;
    VZ.complete = function () {
      if (h2(VZ.old)) {
        VZ.old.call(this);
      }
      if (VZ.queue) {
        hr.dequeue(this, VZ.queue);
      }
    };
    return VZ;
  };
  hr.fn.extend({
    fadeTo: function (Vu, VW, Vy, VZ) {
      return this.filter(hf).css("opacity", 0).show().end().animate({
        opacity: VW
      }, Vu, Vy, VZ);
    },
    animate: function (Vu, VW, Vy, VZ) {
      function VG() {
        var Vv = V1(this, hr.extend({}, Vu), Vz);
        if (VE || hQ.get(this, "finish")) {
          Vv.stop(true);
        }
      }
      var VE = hr.isEmptyObject(Vu);
      var Vz = hr.speed(VW, Vy, VZ);
      VG.finish = VG;
      if (VE || Vz.queue === false) {
        return this.each(VG);
      } else {
        return this.queue(Vz.queue, VG);
      }
    },
    stop: function (Vu, VW, Vy) {
      function VZ(VG) {
        var VE = VG.stop;
        delete VG.stop;
        VE(Vy);
      }
      if (typeof Vu != "string") {
        Vy = VW;
        VW = Vu;
        Vu = undefined;
      }
      if (VW && Vu !== false) {
        this.queue(Vu || "fx", []);
      }
      return this.each(function () {
        var VG = true;
        var VE = Vu != null && Vu + "queueHooks";
        var Vz = hr.timers;
        var Vv = hQ.get(this);
        if (VE) {
          if (Vv[VE] && Vv[VE].stop) {
            VZ(Vv[VE]);
          }
        } else {
          for (VE in Vv) {
            if (Vv[VE] && Vv[VE].stop && LR.test(VE)) {
              VZ(Vv[VE]);
            }
          }
        }
        for (VE = Vz.length; VE--;) {
          if (Vz[VE].elem === this && (Vu == null || Vz[VE].queue === Vu)) {
            Vz[VE].anim.stop(Vy);
            VG = false;
            Vz.splice(VE, 1);
          }
        }
        if (!!VG || !Vy) {
          hr.dequeue(this, Vu);
        }
      });
    },
    finish: function (Vu) {
      if (Vu !== false) {
        Vu = Vu || "fx";
      }
      return this.each(function () {
        var VW;
        var Vy = hQ.get(this);
        var VZ = Vy[Vu + "queue"];
        var VG = Vy[Vu + "queueHooks"];
        var VE = hr.timers;
        var Vz = VZ ? VZ.length : 0;
        Vy.finish = true;
        hr.queue(this, Vu, []);
        if (VG && VG.stop) {
          VG.stop.call(this, true);
        }
        VW = VE.length;
        while (VW--) {
          if (VE[VW].elem === this && VE[VW].queue === Vu) {
            VE[VW].anim.stop(true);
            VE.splice(VW, 1);
          }
        }
        for (VW = 0; VW < Vz; VW++) {
          if (VZ[VW] && VZ[VW].finish) {
            VZ[VW].finish.call(this);
          }
        }
        delete Vy.finish;
      });
    }
  });
  hr.each(["toggle", "show", "hide"], function (Vu, VW) {
    var Vy = hr.fn[VW];
    hr.fn[VW] = function (VZ, VG, VE) {
      if (VZ == null || typeof VZ == "boolean") {
        return Vy.apply(this, arguments);
      } else {
        return this.animate(Ld(VW, true), VZ, VG, VE);
      }
    };
  });
  hr.each({
    slideDown: Ld("show"),
    slideUp: Ld("hide"),
    slideToggle: Ld("toggle"),
    fadeIn: {
      opacity: "show"
    },
    fadeOut: {
      opacity: "hide"
    },
    fadeToggle: {
      opacity: "toggle"
    }
  }, function (Vu, VW) {
    hr.fn[Vu] = function (Vy, VZ, VG) {
      return this.animate(VW, Vy, VZ, VG);
    };
  });
  hr.timers = [];
  hr.fx.tick = function () {
    var Vu;
    var VW = 0;
    var Vy = hr.timers;
    for (Ls = Date.now(); VW < Vy.length; VW++) {
      if (!(Vu = Vy[VW])() && Vy[VW] === Vu) {
        Vy.splice(VW--, 1);
      }
    }
    if (!Vy.length) {
      hr.fx.stop();
    }
    Ls = undefined;
  };
  hr.fx.timer = function (Vu) {
    hr.timers.push(Vu);
    hr.fx.start();
  };
  hr.fx.interval = 13;
  hr.fx.start = function () {
    if (!LY) {
      LY = true;
      LJ();
    }
  };
  hr.fx.stop = function () {
    LY = null;
  };
  hr.fx.speeds = {
    slow: 600,
    fast: 200,
    _default: 400
  };
  hr.fn.delay = function (Vu, VW) {
    Vu = hr.fx && hr.fx.speeds[Vu] || Vu;
    return this.queue(VW = VW || "fx", function (Vy, VZ) {
      var VG = h0.setTimeout(Vy, Vu);
      VZ.stop = function () {
        h0.clearTimeout(VG);
      };
    });
  };
  Lf = h5.createElement("input");
  LC = h5.createElement("select").appendChild(h5.createElement("option"));
  Lf.type = "checkbox";
  hg.checkOn = Lf.value !== "";
  hg.optSelected = LC.selected;
  (Lf = h5.createElement("input")).value = "t";
  Lf.type = "radio";
  hg.radioValue = Lf.value === "t";
  var V2;
  var V3 = hr.expr.attrHandle;
  hr.fn.extend({
    attr: function (Vu, VW) {
      return hZ(this, hr.attr, Vu, VW, arguments.length > 1);
    },
    removeAttr: function (Vu) {
      return this.each(function () {
        hr.removeAttr(this, Vu);
      });
    }
  });
  hr.extend({
    attr: function (Vu, VW, Vy) {
      var VZ;
      var VG;
      var VE = Vu.nodeType;
      if (VE !== 3 && VE !== 8 && VE !== 2) {
        if (Vu.getAttribute === undefined) {
          return hr.prop(Vu, VW, Vy);
        } else {
          if (VE !== 1 || !hr.isXMLDoc(Vu)) {
            VG = hr.attrHooks[VW.toLowerCase()] || (hr.expr.match.bool.test(VW) ? V2 : undefined);
          }
          if (Vy !== undefined) {
            if (Vy === null) {
              hr.removeAttr(Vu, VW);
              return;
            } else if (VG && "set" in VG && (VZ = VG.set(Vu, Vy, VW)) !== undefined) {
              return VZ;
            } else {
              Vu.setAttribute(VW, Vy + "");
              return Vy;
            }
          } else if ((!VG || !("get" in VG) || (VZ = VG.get(Vu, VW)) === null) && (VZ = hr.find.attr(Vu, VW)) == null) {
            return undefined;
          } else {
            return VZ;
          }
        }
      }
    },
    attrHooks: {
      type: {
        set: function (Vu, VW) {
          var Vy;
          if (!hg.radioValue && VW === "radio" && hB(Vu, "input")) {
            Vy = Vu.value;
            Vu.setAttribute("type", VW);
            if (Vy) {
              Vu.value = Vy;
            }
            return VW;
          }
        }
      }
    },
    removeAttr: function (Vu, VW) {
      var Vy;
      var VZ = 0;
      var VG = VW && VW.match(hp);
      if (VG && Vu.nodeType === 1) {
        while (Vy = VG[VZ++]) {
          Vu.removeAttribute(Vy);
        }
      }
    }
  });
  V2 = {
    set: function (Vu, VW, Vy) {
      if (VW === false) {
        hr.removeAttr(Vu, Vy);
      } else {
        Vu.setAttribute(Vy, Vy);
      }
      return Vy;
    }
  };
  hr.each(hr.expr.match.bool.source.match(/\w+/g), function (Vu, VW) {
    var Vy = V3[VW] || hr.find.attr;
    V3[VW] = function (VZ, VG, VE) {
      var Vz;
      var Vv;
      var Vi = VG.toLowerCase();
      if (!VE) {
        Vv = V3[Vi];
        V3[Vi] = Vz;
        Vz = Vy(VZ, VG, VE) != null ? Vi : null;
        V3[Vi] = Vv;
      }
      return Vz;
    };
  });
  var V4 = /^(?:input|select|textarea|button)$/i;
  var V5 = /^(?:a|area)$/i;
  function V6(Vu) {
    return (Vu.match(hp) || []).join(" ");
  }
  function V7(Vu) {
    return Vu.getAttribute && Vu.getAttribute("class") || "";
  }
  function V8(Vu) {
    if (Array.isArray(Vu)) {
      return Vu;
    } else {
      return typeof Vu == "string" && Vu.match(hp) || [];
    }
  }
  hr.fn.extend({
    prop: function (Vu, VW) {
      return hZ(this, hr.prop, Vu, VW, arguments.length > 1);
    },
    removeProp: function (Vu) {
      return this.each(function () {
        delete this[hr.propFix[Vu] || Vu];
      });
    }
  });
  hr.extend({
    prop: function (Vu, VW, Vy) {
      var VZ;
      var VG;
      var VE = Vu.nodeType;
      if (VE !== 3 && VE !== 8 && VE !== 2) {
        if (VE !== 1 || !hr.isXMLDoc(Vu)) {
          VW = hr.propFix[VW] || VW;
          VG = hr.propHooks[VW];
        }
        if (Vy !== undefined) {
          if (VG && "set" in VG && (VZ = VG.set(Vu, Vy, VW)) !== undefined) {
            return VZ;
          } else {
            return Vu[VW] = Vy;
          }
        } else if (VG && "get" in VG && (VZ = VG.get(Vu, VW)) !== null) {
          return VZ;
        } else {
          return Vu[VW];
        }
      }
    },
    propHooks: {
      tabIndex: {
        get: function (Vu) {
          var VW = hr.find.attr(Vu, "tabindex");
          if (VW) {
            return parseInt(VW, 10);
          } else if (V4.test(Vu.nodeName) || V5.test(Vu.nodeName) && Vu.href) {
            return 0;
          } else {
            return -1;
          }
        }
      }
    },
    propFix: {
      for: "htmlFor",
      class: "className"
    }
  });
  if (!hg.optSelected) {
    hr.propHooks.selected = {
      get: function (Vu) {
        Vu = Vu.parentNode;
        if (Vu && Vu.parentNode) {
          Vu.parentNode.selectedIndex;
        }
        return null;
      },
      set: function (Vu) {
        Vu = Vu.parentNode;
        if (Vu && (Vu.selectedIndex, Vu.parentNode)) {
          Vu.parentNode.selectedIndex;
        }
      }
    };
  }
  hr.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
    hr.propFix[this.toLowerCase()] = this;
  });
  hr.fn.extend({
    addClass: function (Vu) {
      var VW;
      var Vy;
      var VZ;
      var VG;
      var VE;
      var Vz;
      var Vv = 0;
      if (h2(Vu)) {
        return this.each(function (Vi) {
          hr(this).addClass(Vu.call(this, Vi, V7(this)));
        });
      }
      if ((VW = V8(Vu)).length) {
        while (Vy = this[Vv++]) {
          Vz = V7(Vy);
          if (VZ = Vy.nodeType === 1 && " " + V6(Vz) + " ") {
            for (VE = 0; VG = VW[VE++];) {
              if (VZ.indexOf(" " + VG + " ") < 0) {
                VZ += VG + " ";
              }
            }
            if (Vz !== (Vz = V6(VZ))) {
              Vy.setAttribute("class", Vz);
            }
          }
        }
      }
      return this;
    },
    removeClass: function (Vu) {
      var VW;
      var Vy;
      var VZ;
      var VG;
      var VE;
      var Vz;
      var Vv = 0;
      if (h2(Vu)) {
        return this.each(function (Vi) {
          hr(this).removeClass(Vu.call(this, Vi, V7(this)));
        });
      }
      if (!arguments.length) {
        return this.attr("class", "");
      }
      if ((VW = V8(Vu)).length) {
        while (Vy = this[Vv++]) {
          Vz = V7(Vy);
          if (VZ = Vy.nodeType === 1 && " " + V6(Vz) + " ") {
            for (VE = 0; VG = VW[VE++];) {
              while (VZ.indexOf(" " + VG + " ") > -1) {
                VZ = VZ.replace(" " + VG + " ", " ");
              }
            }
            if (Vz !== (Vz = V6(VZ))) {
              Vy.setAttribute("class", Vz);
            }
          }
        }
      }
      return this;
    },
    toggleClass: function (Vu, VW) {
      var Vy = typeof Vu;
      var VZ = Vy == "string" || Array.isArray(Vu);
      if (typeof VW == "boolean" && VZ) {
        if (VW) {
          return this.addClass(Vu);
        } else {
          return this.removeClass(Vu);
        }
      } else if (h2(Vu)) {
        return this.each(function (VG) {
          hr(this).toggleClass(Vu.call(this, VG, V7(this), VW), VW);
        });
      } else {
        return this.each(function () {
          var VG;
          var VE;
          var Vz;
          var Vv;
          if (VZ) {
            VE = 0;
            Vz = hr(this);
            Vv = V8(Vu);
            while (VG = Vv[VE++]) {
              if (Vz.hasClass(VG)) {
                Vz.removeClass(VG);
              } else {
                Vz.addClass(VG);
              }
            }
          } else if (Vu === undefined || Vy == "boolean") {
            if (VG = V7(this)) {
              hQ.set(this, "__className__", VG);
            }
            if (this.setAttribute) {
              this.setAttribute("class", !VG && Vu !== false && hQ.get(this, "__className__") || "");
            }
          }
        });
      }
    },
    hasClass: function (Vu) {
      for (var VW, Vy = 0, VZ = " " + Vu + " "; VW = this[Vy++];) {
        if (VW.nodeType === 1 && (" " + V6(V7(VW)) + " ").indexOf(VZ) > -1) {
          return true;
        }
      }
      return false;
    }
  });
  function V9(Vu) {
    Vu.stopPropagation();
  }
  var Vh = /\r/g;
  hr.fn.extend({
    val: function (Vu) {
      var VW;
      var Vy;
      var VZ;
      var VG = this[0];
      if (arguments.length) {
        VZ = h2(Vu);
        return this.each(function (VE) {
          if (this.nodeType === 1) {
            if ((VE = VZ ? Vu.call(this, VE, hr(this).val()) : Vu) == null) {
              VE = "";
            } else if (typeof VE == "number") {
              VE += "";
            } else if (Array.isArray(VE)) {
              VE = hr.map(VE, function (Vz) {
                if (Vz == null) {
                  return "";
                } else {
                  return Vz + "";
                }
              });
            }
            if (!(VW = hr.valHooks[this.type] || hr.valHooks[this.nodeName.toLowerCase()]) || !("set" in VW) || VW.set(this, VE, "value") === undefined) {
              this.value = VE;
            }
          }
        });
      } else if (VG) {
        if ((VW = hr.valHooks[VG.type] || hr.valHooks[VG.nodeName.toLowerCase()]) && "get" in VW && (Vy = VW.get(VG, "value")) !== undefined) {
          return Vy;
        } else if (typeof (Vy = VG.value) == "string") {
          return Vy.replace(Vh, "");
        } else if (Vy == null) {
          return "";
        } else {
          return Vy;
        }
      } else {
        return undefined;
      }
    }
  });
  hr.extend({
    valHooks: {
      option: {
        get: function (Vu) {
          var VW = hr.find.attr(Vu, "value");
          return VW ?? V6(hr.text(Vu));
        }
      },
      select: {
        get: function (Vu) {
          var VW;
          var Vy = Vu.options;
          var VZ = Vu.selectedIndex;
          var VG = Vu.type === "select-one";
          var VE = VG ? null : [];
          for (var Vz = VG ? VZ + 1 : Vy.length, Vv = VZ < 0 ? Vz : VG ? VZ : 0; Vv < Vz; Vv++) {
            if (((VW = Vy[Vv]).selected || Vv === VZ) && !VW.disabled && (!VW.parentNode.disabled || !hB(VW.parentNode, "optgroup"))) {
              VW = hr(VW).val();
              if (VG) {
                return VW;
              }
              VE.push(VW);
            }
          }
          return VE;
        },
        set: function (Vu, VW) {
          var Vy;
          var VZ;
          var VG = Vu.options;
          var VE = hr.makeArray(VW);
          for (var Vz = VG.length; Vz--;) {
            if ((VZ = VG[Vz]).selected = hr.inArray(hr.valHooks.option.get(VZ), VE) > -1) {
              Vy = true;
            }
          }
          if (!Vy) {
            Vu.selectedIndex = -1;
          }
          return VE;
        }
      }
    }
  });
  hr.each(["radio", "checkbox"], function () {
    hr.valHooks[this] = {
      set: function (Vu, VW) {
        if (Array.isArray(VW)) {
          return Vu.checked = hr.inArray(hr(Vu).val(), VW) > -1;
        }
      }
    };
    if (!hg.checkOn) {
      hr.valHooks[this].get = function (Vu) {
        if (Vu.getAttribute("value") === null) {
          return "on";
        } else {
          return Vu.value;
        }
      };
    }
  });
  hg.focusin = "onfocusin" in h0;
  var VL = /^(?:focusinfocus|focusoutblur)$/;
  hr.extend(hr.event, {
    trigger: function (Vu, VW, Vy, VZ) {
      var VG;
      var VE;
      var Vz;
      var Vv;
      var Vi;
      var VT;
      var VQ;
      var VI = [Vy || h5];
      var VO = hK.call(Vu, "type") ? Vu.type : Vu;
      var Vs = hK.call(Vu, "namespace") ? Vu.namespace.split(".") : [];
      var VY = VQ = VE = Vy = Vy || h5;
      if (Vy.nodeType !== 3 && Vy.nodeType !== 8 && !VL.test(VO + hr.event.triggered) && (VO.indexOf(".") > -1 && (VO = (Vs = VO.split(".")).shift(), Vs.sort()), Vv = VO.indexOf(":") < 0 && "on" + VO, (Vu = Vu[hr.expando] ? Vu : new hr.Event(VO, typeof Vu == "object" && Vu)).isTrigger = VZ ? 2 : 3, Vu.namespace = Vs.join("."), Vu.rnamespace = Vu.namespace ? new RegExp("(^|\\.)" + Vs.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, Vu.result = undefined, Vu.target ||= Vy, VW = VW == null ? [Vu] : hr.makeArray(VW, [Vu]), VT = hr.event.special[VO] || {}, VZ || !VT.trigger || VT.trigger.apply(Vy, VW) !== false)) {
        if (!VZ && !VT.noBubble && !h3(Vy)) {
          Vz = VT.delegateType || VO;
          if (!VL.test(Vz + VO)) {
            VY = VY.parentNode;
          }
          for (; VY; VY = VY.parentNode) {
            VI.push(VY);
            VE = VY;
          }
          if (VE === (Vy.ownerDocument || h5)) {
            VI.push(VE.defaultView || VE.parentWindow || h0);
          }
        }
        for (VG = 0; (VY = VI[VG++]) && !Vu.isPropagationStopped();) {
          VQ = VY;
          Vu.type = VG > 1 ? Vz : VT.bindType || VO;
          if (Vi = (hQ.get(VY, "events") || {})[Vu.type] && hQ.get(VY, "handle")) {
            Vi.apply(VY, VW);
          }
          if ((Vi = Vv && VY[Vv]) && Vi.apply && hi(VY) && (Vu.result = Vi.apply(VY, VW), Vu.result === false)) {
            Vu.preventDefault();
          }
        }
        Vu.type = VO;
        if (!VZ && !Vu.isDefaultPrevented() && (!VT._default || VT._default.apply(VI.pop(), VW) === false) && !!hi(Vy)) {
          if (Vv && h2(Vy[VO]) && !h3(Vy) && ((VE = Vy[Vv]) && (Vy[Vv] = null), hr.event.triggered = VO, Vu.isPropagationStopped() && VQ.addEventListener(VO, V9), Vy[VO](), Vu.isPropagationStopped() && VQ.removeEventListener(VO, V9), hr.event.triggered = undefined, VE)) {
            Vy[Vv] = VE;
          }
        }
        return Vu.result;
      }
    },
    simulate: function (Vu, VW, Vy) {
      Vy = hr.extend(new hr.Event(), Vy, {
        type: Vu,
        isSimulated: true
      });
      hr.event.trigger(Vy, null, VW);
    }
  });
  hr.fn.extend({
    trigger: function (Vu, VW) {
      return this.each(function () {
        hr.event.trigger(Vu, VW, this);
      });
    },
    triggerHandler: function (Vu, VW) {
      var Vy = this[0];
      if (Vy) {
        return hr.event.trigger(Vu, VW, Vy, true);
      }
    }
  });
  if (!hg.focusin) {
    hr.each({
      focus: "focusin",
      blur: "focusout"
    }, function (Vu, VW) {
      function Vy(VZ) {
        hr.event.simulate(VW, VZ.target, hr.event.fix(VZ));
      }
      hr.event.special[VW] = {
        setup: function () {
          var VZ = this.ownerDocument || this;
          var VG = hQ.access(VZ, VW);
          if (!VG) {
            VZ.addEventListener(Vu, Vy, true);
          }
          hQ.access(VZ, VW, (VG || 0) + 1);
        },
        teardown: function () {
          var VZ = this.ownerDocument || this;
          var VG = hQ.access(VZ, VW) - 1;
          if (VG) {
            hQ.access(VZ, VW, VG);
          } else {
            VZ.removeEventListener(Vu, Vy, true);
            hQ.remove(VZ, VW);
          }
        }
      };
    });
  }
  var VV = h0.location;
  var VK = Date.now();
  var Vw = /\?/;
  hr.parseXML = function (Vu) {
    var VW;
    if (!Vu || typeof Vu != "string") {
      return null;
    }
    try {
      VW = new h0.DOMParser().parseFromString(Vu, "text/xml");
    } catch (Vy) {
      VW = undefined;
    }
    if (!VW || !!VW.getElementsByTagName("parsererror").length) {
      hr.error("Invalid XML: " + Vu);
    }
    return VW;
  };
  var VX = /\[\]$/;
  var Vg = /\r?\n/g;
  var Vl = /^(?:submit|button|image|reset|file)$/i;
  var VM = /^(?:input|select|textarea|keygen)/i;
  hr.param = function (Vu, VW) {
    function Vy(VE, Vz) {
      Vz = h2(Vz) ? Vz() : Vz;
      VG[VG.length] = encodeURIComponent(VE) + "=" + encodeURIComponent(Vz == null ? "" : Vz);
    }
    var VZ;
    var VG = [];
    if (Array.isArray(Vu) || Vu.jquery && !hr.isPlainObject(Vu)) {
      hr.each(Vu, function () {
        Vy(this.name, this.value);
      });
    } else {
      for (VZ in Vu) {
        (function VE(Vz, Vv, Vi, VT) {
          if (Array.isArray(Vv)) {
            hr.each(Vv, function (VI, VO) {
              if (Vi || VX.test(Vz)) {
                VT(Vz, VO);
              } else {
                VE(Vz + "[" + (typeof VO == "object" && VO != null ? VI : "") + "]", VO, Vi, VT);
              }
            });
          } else if (Vi || ho(Vv) !== "object") {
            VT(Vz, Vv);
          } else {
            for (var VQ in Vv) {
              VE(Vz + "[" + VQ + "]", Vv[VQ], Vi, VT);
            }
          }
        })(VZ, Vu[VZ], VW, Vy);
      }
    }
    return VG.join("&");
  };
  hr.fn.extend({
    serialize: function () {
      return hr.param(this.serializeArray());
    },
    serializeArray: function () {
      return this.map(function () {
        var Vu = hr.prop(this, "elements");
        if (Vu) {
          return hr.makeArray(Vu);
        } else {
          return this;
        }
      }).filter(function () {
        var Vu = this.type;
        return this.name && !hr(this).is(":disabled") && VM.test(this.nodeName) && !Vl.test(Vu) && (this.checked || !L0.test(Vu));
      }).map(function (Vu, VW) {
        var Vy = hr(this).val();
        if (Vy == null) {
          return null;
        } else if (Array.isArray(Vy)) {
          return hr.map(Vy, function (VZ) {
            return {
              name: VW.name,
              value: VZ.replace(Vg, "\r\n")
            };
          });
        } else {
          return {
            name: VW.name,
            value: Vy.replace(Vg, "\r\n")
          };
        }
      }).get();
    }
  });
  var Vo = /%20/g;
  var Vr = /#.*$/;
  var Va = /([?&])_=[^&]*/;
  var Vx = /^(.*?):[ \t]*([^\r\n]*)$/gm;
  var Vb = /^(?:GET|HEAD)$/;
  var Vc = /^\/\//;
  var Vm = {};
  var VB = {};
  var VA = `*/*`;
  var Vj = h5.createElement("a");
  function VF(Vu) {
    return function (VW, Vy) {
      if (typeof VW != "string") {
        Vy = VW;
        VW = "*";
      }
      var VZ;
      var VG = 0;
      var VE = VW.toLowerCase().match(hp) || [];
      if (h2(Vy)) {
        while (VZ = VE[VG++]) {
          if (VZ[0] === "+") {
            VZ = VZ.slice(1) || "*";
            (Vu[VZ] = Vu[VZ] || []).unshift(Vy);
          } else {
            (Vu[VZ] = Vu[VZ] || []).push(Vy);
          }
        }
      }
    };
  }
  function VN(Vu, VW, Vy, VZ) {
    var VG = {};
    var VE = Vu === VB;
    function Vz(Vv) {
      var Vi;
      VG[Vv] = true;
      hr.each(Vu[Vv] || [], function (VT, VQ) {
        VQ = VQ(VW, Vy, VZ);
        if (typeof VQ != "string" || VE || VG[VQ]) {
          if (VE) {
            return !(Vi = VQ);
          } else {
            return undefined;
          }
        } else {
          VW.dataTypes.unshift(VQ);
          Vz(VQ);
          return false;
        }
      });
      return Vi;
    }
    return Vz(VW.dataTypes[0]) || !VG["*"] && Vz("*");
  }
  function VP(Vu, VW) {
    var Vy;
    var VZ;
    var VG = hr.ajaxSettings.flatOptions || {};
    for (Vy in VW) {
      if (VW[Vy] !== undefined) {
        (VG[Vy] ? Vu : VZ = VZ || {})[Vy] = VW[Vy];
      }
    }
    if (VZ) {
      hr.extend(true, Vu, VZ);
    }
    return Vu;
  }
  Vj.href = VV.href;
  hr.extend({
    active: 0,
    lastModified: {},
    etag: {},
    ajaxSettings: {
      url: VV.href,
      type: "GET",
      isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(VV.protocol),
      global: true,
      processData: true,
      async: true,
      contentType: "application/x-www-form-urlencoded; charset=UTF-8",
      accepts: {
        "*": VA,
        text: "text/plain",
        html: "text/html",
        xml: "application/xml, text/xml",
        json: "application/json, text/javascript"
      },
      contents: {
        xml: /\bxml\b/,
        html: /\bhtml/,
        json: /\bjson\b/
      },
      responseFields: {
        xml: "responseXML",
        text: "responseText",
        json: "responseJSON"
      },
      converters: {
        "* text": String,
        "text html": true,
        "text json": JSON.parse,
        "text xml": hr.parseXML
      },
      flatOptions: {
        url: true,
        context: true
      }
    },
    ajaxSetup: function (Vu, VW) {
      if (VW) {
        return VP(VP(Vu, hr.ajaxSettings), VW);
      } else {
        return VP(hr.ajaxSettings, Vu);
      }
    },
    ajaxPrefilter: VF(Vm),
    ajaxTransport: VF(VB),
    ajax: function (Vu, VW) {
      if (typeof Vu == "object") {
        VW = Vu;
        Vu = undefined;
      }
      var Vy;
      var VZ;
      var VG;
      var VE;
      var Vz;
      var Vv;
      var Vi;
      var VT;
      var VQ = hr.ajaxSetup({}, VW = VW || {});
      var VI = VQ.context || VQ;
      var VO = VQ.context && (VI.nodeType || VI.jquery) ? hr(VI) : hr.event;
      var Vs = hr.Deferred();
      var VY = hr.Callbacks("once memory");
      var Vf = VQ.statusCode || {};
      var VC = {};
      var VU = {};
      var VR = "canceled";
      var VJ = {
        readyState: 0,
        getResponseHeader: function (Vd) {
          var K0;
          if (Vv) {
            if (!VE) {
              for (VE = {}; K0 = Vx.exec(VG);) {
                VE[K0[1].toLowerCase()] = K0[2];
              }
            }
            K0 = VE[Vd.toLowerCase()];
          }
          if (K0 == null) {
            return null;
          } else {
            return K0;
          }
        },
        getAllResponseHeaders: function () {
          if (Vv) {
            return VG;
          } else {
            return null;
          }
        },
        setRequestHeader: function (Vd, K0) {
          if (Vv == null) {
            Vd = VU[Vd.toLowerCase()] = VU[Vd.toLowerCase()] || Vd;
            VC[Vd] = K0;
          }
          return this;
        },
        overrideMimeType: function (Vd) {
          if (Vv == null) {
            VQ.mimeType = Vd;
          }
          return this;
        },
        statusCode: function (Vd) {
          if (Vd) {
            if (Vv) {
              VJ.always(Vd[VJ.status]);
            } else {
              for (var K0 in Vd) {
                Vf[K0] = [Vf[K0], Vd[K0]];
              }
            }
          }
          return this;
        },
        abort: function (Vd) {
          Vd = Vd || VR;
          if (Vy) {
            Vy.abort(Vd);
          }
          VD(0, Vd);
          return this;
        }
      };
      Vs.promise(VJ);
      VQ.url = ((Vu || VQ.url || VV.href) + "").replace(Vc, VV.protocol + "//");
      VQ.type = VW.method || VW.type || VQ.method || VQ.type;
      VQ.dataTypes = (VQ.dataType || "*").toLowerCase().match(hp) || [""];
      if (VQ.crossDomain == null) {
        Vu = h5.createElement("a");
        try {
          Vu.href = VQ.url;
          Vu.href = Vu.href;
          VQ.crossDomain = Vj.protocol + "//" + Vj.host != Vu.protocol + "//" + Vu.host;
        } catch (Vd) {
          VQ.crossDomain = true;
        }
      }
      if (VQ.data && VQ.processData && typeof VQ.data != "string") {
        VQ.data = hr.param(VQ.data, VQ.traditional);
      }
      VN(Vm, VQ, VW, VJ);
      if (!Vv) {
        if ((Vi = hr.event && VQ.global) && hr.active++ == 0) {
          hr.event.trigger("ajaxStart");
        }
        VQ.type = VQ.type.toUpperCase();
        VQ.hasContent = !Vb.test(VQ.type);
        VZ = VQ.url.replace(Vr, "");
        if (VQ.hasContent) {
          if (VQ.data && VQ.processData && (VQ.contentType || "").indexOf("application/x-www-form-urlencoded") === 0) {
            VQ.data = VQ.data.replace(Vo, "+");
          }
        } else {
          Vu = VQ.url.slice(VZ.length);
          if (VQ.data && (VQ.processData || typeof VQ.data == "string")) {
            VZ += (Vw.test(VZ) ? "&" : "?") + VQ.data;
            delete VQ.data;
          }
          if (VQ.cache === false) {
            VZ = VZ.replace(Va, "$1");
            Vu = (Vw.test(VZ) ? "&" : "?") + "_=" + VK++ + Vu;
          }
          VQ.url = VZ + Vu;
        }
        if (VQ.ifModified && (hr.lastModified[VZ] && VJ.setRequestHeader("If-Modified-Since", hr.lastModified[VZ]), hr.etag[VZ])) {
          VJ.setRequestHeader("If-None-Match", hr.etag[VZ]);
        }
        if (VQ.data && VQ.hasContent && VQ.contentType !== false || VW.contentType) {
          VJ.setRequestHeader("Content-Type", VQ.contentType);
        }
        VJ.setRequestHeader("Accept", VQ.dataTypes[0] && VQ.accepts[VQ.dataTypes[0]] ? VQ.accepts[VQ.dataTypes[0]] + (VQ.dataTypes[0] !== "*" ? ", " + VA + "; q=0.01" : "") : VQ.accepts["*"]);
        for (VT in VQ.headers) {
          VJ.setRequestHeader(VT, VQ.headers[VT]);
        }
        if (VQ.beforeSend && (VQ.beforeSend.call(VI, VJ, VQ) === false || Vv)) {
          return VJ.abort();
        }
        VR = "abort";
        VY.add(VQ.complete);
        VJ.done(VQ.success);
        VJ.fail(VQ.error);
        if (Vy = VN(VB, VQ, VW, VJ)) {
          VJ.readyState = 1;
          if (Vi) {
            VO.trigger("ajaxSend", [VJ, VQ]);
          }
          if (Vv) {
            return VJ;
          }
          if (VQ.async && VQ.timeout > 0) {
            Vz = h0.setTimeout(function () {
              VJ.abort("timeout");
            }, VQ.timeout);
          }
          try {
            Vv = false;
            Vy.send(VC, VD);
          } catch (K0) {
            if (Vv) {
              throw K0;
            }
            VD(-1, K0);
          }
        } else {
          VD(-1, "No Transport");
        }
      }
      return VJ;
      function VD(K1, K2, K3, K4) {
        var K5;
        var K6;
        var K7;
        var K8 = K2;
        if (!Vv) {
          Vv = true;
          if (Vz) {
            h0.clearTimeout(Vz);
          }
          Vy = undefined;
          VG = K4 || "";
          VJ.readyState = K1 > 0 ? 4 : 0;
          K4 = K1 >= 200 && K1 < 300 || K1 === 304;
          if (K3) {
            K7 = function (K9, Kh, KL) {
              var KV;
              var KK;
              var Kw;
              var KX;
              var Kg = K9.contents;
              for (var Kl = K9.dataTypes; Kl[0] === "*";) {
                Kl.shift();
                if (KV === undefined) {
                  KV = K9.mimeType || Kh.getResponseHeader("Content-Type");
                }
              }
              if (KV) {
                for (KK in Kg) {
                  if (Kg[KK] && Kg[KK].test(KV)) {
                    Kl.unshift(KK);
                    break;
                  }
                }
              }
              if (Kl[0] in KL) {
                Kw = Kl[0];
              } else {
                for (KK in KL) {
                  if (!Kl[0] || K9.converters[KK + " " + Kl[0]]) {
                    Kw = KK;
                    break;
                  }
                  KX = KX || KK;
                }
                Kw = Kw || KX;
              }
              if (Kw) {
                if (Kw !== Kl[0]) {
                  Kl.unshift(Kw);
                }
                return KL[Kw];
              }
            }(VQ, VJ, K3);
          }
          K7 = function (K9, Kh, KL, KV) {
            var KK;
            var Kw;
            var KX;
            var Kg;
            var Kl;
            var KM = {};
            var Ko = K9.dataTypes.slice();
            if (Ko[1]) {
              for (KX in K9.converters) {
                KM[KX.toLowerCase()] = K9.converters[KX];
              }
            }
            for (Kw = Ko.shift(); Kw;) {
              if (K9.responseFields[Kw]) {
                KL[K9.responseFields[Kw]] = Kh;
              }
              if (!Kl && KV && K9.dataFilter) {
                Kh = K9.dataFilter(Kh, K9.dataType);
              }
              Kl = Kw;
              if (Kw = Ko.shift()) {
                if (Kw === "*") {
                  Kw = Kl;
                } else if (Kl !== "*" && Kl !== Kw) {
                  if (!(KX = KM[Kl + " " + Kw] || KM["* " + Kw])) {
                    for (KK in KM) {
                      if ((Kg = KK.split(" "))[1] === Kw && (KX = KM[Kl + " " + Kg[0]] || KM["* " + Kg[0]])) {
                        if (KX === true) {
                          KX = KM[KK];
                        } else if (KM[KK] !== true) {
                          Kw = Kg[0];
                          Ko.unshift(Kg[1]);
                        }
                        break;
                      }
                    }
                  }
                  if (KX !== true) {
                    if (KX && K9.throws) {
                      Kh = KX(Kh);
                    } else {
                      try {
                        Kh = KX(Kh);
                      } catch (Kr) {
                        return {
                          state: "parsererror",
                          error: KX ? Kr : "No conversion from " + Kl + " to " + Kw
                        };
                      }
                    }
                  }
                }
              }
            }
            return {
              state: "success",
              data: Kh
            };
          }(VQ, K7, VJ, K4);
          if (K4) {
            if (VQ.ifModified && ((K3 = VJ.getResponseHeader("Last-Modified")) && (hr.lastModified[VZ] = K3), K3 = VJ.getResponseHeader("etag"))) {
              hr.etag[VZ] = K3;
            }
            if (K1 === 204 || VQ.type === "HEAD") {
              K8 = "nocontent";
            } else if (K1 === 304) {
              K8 = "notmodified";
            } else {
              K8 = K7.state;
              K5 = K7.data;
              K4 = !(K6 = K7.error);
            }
          } else {
            K6 = K8;
            if (!!K1 || !K8) {
              K8 = "error";
              if (K1 < 0) {
                K1 = 0;
              }
            }
          }
          VJ.status = K1;
          VJ.statusText = (K2 || K8) + "";
          if (K4) {
            Vs.resolveWith(VI, [K5, K8, VJ]);
          } else {
            Vs.rejectWith(VI, [VJ, K8, K6]);
          }
          VJ.statusCode(Vf);
          Vf = undefined;
          if (Vi) {
            VO.trigger(K4 ? "ajaxSuccess" : "ajaxError", [VJ, VQ, K4 ? K5 : K6]);
          }
          VY.fireWith(VI, [VJ, K8]);
          if (Vi) {
            VO.trigger("ajaxComplete", [VJ, VQ]);
            if (! --hr.active) {
              hr.event.trigger("ajaxStop");
            }
          }
        }
      }
    },
    getJSON: function (Vu, VW, Vy) {
      return hr.get(Vu, VW, Vy, "json");
    },
    getScript: function (Vu, VW) {
      return hr.get(Vu, undefined, VW, "script");
    }
  });
  hr.each(["get", "post"], function (Vu, VW) {
    hr[VW] = function (Vy, VZ, VG, VE) {
      if (h2(VZ)) {
        VE = VE || VG;
        VG = VZ;
        VZ = undefined;
      }
      return hr.ajax(hr.extend({
        url: Vy,
        type: VW,
        dataType: VE,
        data: VZ,
        success: VG
      }, hr.isPlainObject(Vy) && Vy));
    };
  });
  hr._evalUrl = function (Vu) {
    return hr.ajax({
      url: Vu,
      type: "GET",
      dataType: "script",
      cache: true,
      async: false,
      global: false,
      throws: true
    });
  };
  hr.fn.extend({
    wrapAll: function (Vu) {
      if (this[0]) {
        if (h2(Vu)) {
          Vu = Vu.call(this[0]);
        }
        Vu = hr(Vu, this[0].ownerDocument).eq(0).clone(true);
        if (this[0].parentNode) {
          Vu.insertBefore(this[0]);
        }
        Vu.map(function () {
          for (var VW = this; VW.firstElementChild;) {
            VW = VW.firstElementChild;
          }
          return VW;
        }).append(this);
      }
      return this;
    },
    wrapInner: function (Vu) {
      if (h2(Vu)) {
        return this.each(function (VW) {
          hr(this).wrapInner(Vu.call(this, VW));
        });
      } else {
        return this.each(function () {
          var VW = hr(this);
          var Vy = VW.contents();
          if (Vy.length) {
            Vy.wrapAll(Vu);
          } else {
            VW.append(Vu);
          }
        });
      }
    },
    wrap: function (Vu) {
      var VW = h2(Vu);
      return this.each(function (Vy) {
        hr(this).wrapAll(VW ? Vu.call(this, Vy) : Vu);
      });
    },
    unwrap: function (Vu) {
      this.parent(Vu).not("body").each(function () {
        hr(this).replaceWith(this.childNodes);
      });
      return this;
    }
  });
  hr.expr.pseudos.hidden = function (Vu) {
    return !hr.expr.pseudos.visible(Vu);
  };
  hr.expr.pseudos.visible = function (Vu) {
    return !!Vu.offsetWidth || !!Vu.offsetHeight || !!Vu.getClientRects().length;
  };
  hr.ajaxSettings.xhr = function () {
    try {
      return new h0.XMLHttpRequest();
    } catch (Vu) {}
  };
  var Vn = {
    0: 200,
    1223: 204
  };
  var VS = hr.ajaxSettings.xhr();
  hg.cors = !!VS && "withCredentials" in VS;
  hg.ajax = VS = !!VS;
  hr.ajaxTransport(function (Vu) {
    var VW;
    var Vy;
    if (hg.cors || VS && !Vu.crossDomain) {
      return {
        send: function (VZ, VG) {
          var VE;
          var Vz = Vu.xhr();
          Vz.open(Vu.type, Vu.url, Vu.async, Vu.username, Vu.password);
          if (Vu.xhrFields) {
            for (VE in Vu.xhrFields) {
              Vz[VE] = Vu.xhrFields[VE];
            }
          }
          if (Vu.mimeType && Vz.overrideMimeType) {
            Vz.overrideMimeType(Vu.mimeType);
          }
          if (!Vu.crossDomain && !VZ["X-Requested-With"]) {
            VZ["X-Requested-With"] = "XMLHttpRequest";
          }
          for (VE in VZ) {
            Vz.setRequestHeader(VE, VZ[VE]);
          }
          VW = function (Vv) {
            return function () {
              if (VW) {
                VW = Vy = Vz.onload = Vz.onerror = Vz.onabort = Vz.ontimeout = Vz.onreadystatechange = null;
                if (Vv === "abort") {
                  Vz.abort();
                } else if (Vv === "error") {
                  if (typeof Vz.status != "number") {
                    VG(0, "error");
                  } else {
                    VG(Vz.status, Vz.statusText);
                  }
                } else {
                  VG(Vn[Vz.status] || Vz.status, Vz.statusText, (Vz.responseType || "text") !== "text" || typeof Vz.responseText != "string" ? {
                    binary: Vz.response
                  } : {
                    text: Vz.responseText
                  }, Vz.getAllResponseHeaders());
                }
              }
            };
          };
          Vz.onload = VW();
          Vy = Vz.onerror = Vz.ontimeout = VW("error");
          if (Vz.onabort !== undefined) {
            Vz.onabort = Vy;
          } else {
            Vz.onreadystatechange = function () {
              if (Vz.readyState === 4) {
                h0.setTimeout(function () {
                  if (VW) {
                    Vy();
                  }
                });
              }
            };
          }
          VW = VW("abort");
          try {
            Vz.send(Vu.hasContent && Vu.data || null);
          } catch (Vv) {
            if (VW) {
              throw Vv;
            }
          }
        },
        abort: function () {
          if (VW) {
            VW();
          }
        }
      };
    }
  });
  hr.ajaxPrefilter(function (Vu) {
    if (Vu.crossDomain) {
      Vu.contents.script = false;
    }
  });
  hr.ajaxSetup({
    accepts: {
      script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
    },
    contents: {
      script: /\b(?:java|ecma)script\b/
    },
    converters: {
      "text script": function (Vu) {
        hr.globalEval(Vu);
        return Vu;
      }
    }
  });
  hr.ajaxPrefilter("script", function (Vu) {
    if (Vu.cache === undefined) {
      Vu.cache = false;
    }
    if (Vu.crossDomain) {
      Vu.type = "GET";
    }
  });
  hr.ajaxTransport("script", function (Vu) {
    var VW;
    var Vy;
    if (Vu.crossDomain) {
      return {
        send: function (VZ, VG) {
          VW = hr("<script>").prop({
            charset: Vu.scriptCharset,
            src: Vu.url
          }).on("load error", Vy = function (VE) {
            VW.remove();
            Vy = null;
            if (VE) {
              VG(VE.type === "error" ? 404 : 200, VE.type);
            }
          });
          h5.head.appendChild(VW[0]);
        },
        abort: function () {
          if (Vy) {
            Vy();
          }
        }
      };
    }
  });
  var Vp = [];
  var VH = /(=)\?(?=&|$)|\?\?/;
  hr.ajaxSetup({
    jsonp: "callback",
    jsonpCallback: function () {
      var Vu = Vp.pop() || hr.expando + "_" + VK++;
      this[Vu] = true;
      return Vu;
    }
  });
  hr.ajaxPrefilter("json jsonp", function (Vu, VW, Vy) {
    var VZ;
    var VG;
    var VE;
    var Vz = Vu.jsonp !== false && (VH.test(Vu.url) ? "url" : typeof Vu.data == "string" && (Vu.contentType || "").indexOf("application/x-www-form-urlencoded") === 0 && VH.test(Vu.data) && "data");
    if (Vz || Vu.dataTypes[0] === "jsonp") {
      VZ = Vu.jsonpCallback = h2(Vu.jsonpCallback) ? Vu.jsonpCallback() : Vu.jsonpCallback;
      if (Vz) {
        Vu[Vz] = Vu[Vz].replace(VH, "$1" + VZ);
      } else if (Vu.jsonp !== false) {
        Vu.url += (Vw.test(Vu.url) ? "&" : "?") + Vu.jsonp + "=" + VZ;
      }
      Vu.converters["script json"] = function () {
        if (!VE) {
          hr.error(VZ + " was not called");
        }
        return VE[0];
      };
      Vu.dataTypes[0] = "json";
      VG = h0[VZ];
      h0[VZ] = function () {
        VE = arguments;
      };
      Vy.always(function () {
        if (VG === undefined) {
          hr(h0).removeProp(VZ);
        } else {
          h0[VZ] = VG;
        }
        if (Vu[VZ]) {
          Vu.jsonpCallback = VW.jsonpCallback;
          Vp.push(VZ);
        }
        if (VE && h2(VG)) {
          VG(VE[0]);
        }
        VE = VG = undefined;
      });
      return "script";
    }
  });
  (h4 = h5.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>";
  hg.createHTMLDocument = h4.childNodes.length === 2;
  hr.parseHTML = function (Vu, VW, Vy) {
    var VZ;
    if (typeof Vu != "string") {
      return [];
    } else {
      if (typeof VW == "boolean") {
        Vy = VW;
        VW = false;
      }
      if (!VW) {
        if (hg.createHTMLDocument) {
          (VZ = (VW = h5.implementation.createHTMLDocument("")).createElement("base")).href = h5.location.href;
          VW.head.appendChild(VZ);
        } else {
          VW = h5;
        }
      }
      VZ = !Vy && [];
      if (Vy = hA.exec(Vu)) {
        return [VW.createElement(Vy[1])];
      } else {
        Vy = L7([Vu], VW, VZ);
        if (VZ && VZ.length) {
          hr(VZ).remove();
        }
        return hr.merge([], Vy.childNodes);
      }
    }
  };
  hr.fn.load = function (Vu, VW, Vy) {
    var VZ;
    var VG;
    var VE;
    var Vz = this;
    var Vv = Vu.indexOf(" ");
    if (Vv > -1) {
      VZ = V6(Vu.slice(Vv));
      Vu = Vu.slice(0, Vv);
    }
    if (h2(VW)) {
      Vy = VW;
      VW = undefined;
    } else if (VW && typeof VW == "object") {
      VG = "POST";
    }
    if (Vz.length > 0) {
      hr.ajax({
        url: Vu,
        type: VG || "GET",
        dataType: "html",
        data: VW
      }).done(function (Vi) {
        VE = arguments;
        Vz.html(VZ ? hr("<div>").append(hr.parseHTML(Vi)).find(VZ) : Vi);
      }).always(Vy && function (Vi, VT) {
        Vz.each(function () {
          Vy.apply(this, VE || [Vi.responseText, VT, Vi]);
        });
      });
    }
    return this;
  };
  hr.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (Vu, VW) {
    hr.fn[VW] = function (Vy) {
      return this.on(VW, Vy);
    };
  });
  hr.expr.pseudos.animated = function (Vu) {
    return hr.grep(hr.timers, function (VW) {
      return Vu === VW.elem;
    }).length;
  };
  hr.offset = {
    setOffset: function (Vu, VW, Vy) {
      var VZ;
      var VG;
      var VE;
      var Vz;
      var Vv = hr.css(Vu, "position");
      var Vi = hr(Vu);
      var VT = {};
      if (Vv === "static") {
        Vu.style.position = "relative";
      }
      VE = Vi.offset();
      VZ = hr.css(Vu, "top");
      Vz = hr.css(Vu, "left");
      Vv = (Vv === "absolute" || Vv === "fixed") && (VZ + Vz).indexOf("auto") > -1 ? (VG = (Vv = Vi.position()).top, Vv.left) : (VG = parseFloat(VZ) || 0, parseFloat(Vz) || 0);
      if ((VW = h2(VW) ? VW.call(Vu, Vy, hr.extend({}, VE)) : VW).top != null) {
        VT.top = VW.top - VE.top + VG;
      }
      if (VW.left != null) {
        VT.left = VW.left - VE.left + Vv;
      }
      if ("using" in VW) {
        VW.using.call(Vu, VT);
      } else {
        Vi.css(VT);
      }
    }
  };
  hr.fn.extend({
    offset: function (Vu) {
      var VW;
      var Vy;
      if (arguments.length) {
        if (Vu === undefined) {
          return this;
        } else {
          return this.each(function (VZ) {
            hr.offset.setOffset(this, Vu, VZ);
          });
        }
      } else if (Vy = this[0]) {
        if (Vy.getClientRects().length) {
          VW = Vy.getBoundingClientRect();
          Vy = Vy.ownerDocument.defaultView;
          return {
            top: VW.top + Vy.pageYOffset,
            left: VW.left + Vy.pageXOffset
          };
        } else {
          return {
            top: 0,
            left: 0
          };
        }
      } else {
        return undefined;
      }
    },
    position: function () {
      if (this[0]) {
        var Vu;
        var VW;
        var Vy;
        var VZ = this[0];
        var VG = {
          top: 0,
          left: 0
        };
        if (hr.css(VZ, "position") === "fixed") {
          VW = VZ.getBoundingClientRect();
        } else {
          VW = this.offset();
          Vy = VZ.ownerDocument;
          Vu = VZ.offsetParent || Vy.documentElement;
          while (Vu && (Vu === Vy.body || Vu === Vy.documentElement) && hr.css(Vu, "position") === "static") {
            Vu = Vu.parentNode;
          }
          if (Vu && Vu !== VZ && Vu.nodeType === 1) {
            (VG = hr(Vu).offset()).top += hr.css(Vu, "borderTopWidth", true);
            VG.left += hr.css(Vu, "borderLeftWidth", true);
          }
        }
        return {
          top: VW.top - VG.top - hr.css(VZ, "marginTop", true),
          left: VW.left - VG.left - hr.css(VZ, "marginLeft", true)
        };
      }
    },
    offsetParent: function () {
      return this.map(function () {
        for (var Vu = this.offsetParent; Vu && hr.css(Vu, "position") === "static";) {
          Vu = Vu.offsetParent;
        }
        return Vu || L8;
      });
    }
  });
  hr.each({
    scrollLeft: "pageXOffset",
    scrollTop: "pageYOffset"
  }, function (Vu, VW) {
    var Vy = VW === "pageYOffset";
    hr.fn[Vu] = function (VZ) {
      return hZ(this, function (VG, VE, Vz) {
        var Vv;
        if (h3(VG)) {
          Vv = VG;
        } else if (VG.nodeType === 9) {
          Vv = VG.defaultView;
        }
        if (Vz === undefined) {
          if (Vv) {
            return Vv[VW];
          } else {
            return VG[VE];
          }
        }
        if (Vv) {
          Vv.scrollTo(Vy ? Vv.pageXOffset : Vz, Vy ? Vz : Vv.pageYOffset);
        } else {
          VG[VE] = Vz;
        }
      }, Vu, VZ, arguments.length);
    };
  });
  hr.each(["top", "left"], function (Vu, VW) {
    hr.cssHooks[VW] = LW(hg.pixelPosition, function (Vy, VZ) {
      if (VZ) {
        VZ = Lu(Vy, VW);
        if (Lp.test(VZ)) {
          return hr(Vy).position()[VW] + "px";
        } else {
          return VZ;
        }
      }
    });
  });
  hr.each({
    Height: "height",
    Width: "width"
  }, function (Vu, VW) {
    hr.each({
      padding: "inner" + Vu,
      content: VW,
      "": "outer" + Vu
    }, function (Vy, VZ) {
      hr.fn[VZ] = function (VG, VE) {
        var Vz = arguments.length && (Vy || typeof VG != "boolean");
        var Vv = Vy || (VG === true || VE === true ? "margin" : "border");
        return hZ(this, function (Vi, VT, VQ) {
          var VI;
          if (h3(Vi)) {
            if (VZ.indexOf("outer") === 0) {
              return Vi["inner" + Vu];
            } else {
              return Vi.document.documentElement["client" + Vu];
            }
          } else if (Vi.nodeType === 9) {
            VI = Vi.documentElement;
            return Math.max(Vi.body["scroll" + Vu], VI["scroll" + Vu], Vi.body["offset" + Vu], VI["offset" + Vu], VI["client" + Vu]);
          } else if (VQ === undefined) {
            return hr.css(Vi, VT, Vv);
          } else {
            return hr.style(Vi, VT, VQ, Vv);
          }
        }, VW, Vz ? VG : undefined, Vz);
      };
    });
  });
  hr.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function (Vu, VW) {
    hr.fn[VW] = function (Vy, VZ) {
      if (arguments.length > 0) {
        return this.on(VW, null, Vy, VZ);
      } else {
        return this.trigger(VW);
      }
    };
  });
  hr.fn.extend({
    hover: function (Vu, VW) {
      return this.mouseenter(Vu).mouseleave(VW || Vu);
    }
  });
  hr.fn.extend({
    bind: function (Vu, VW, Vy) {
      return this.on(Vu, null, VW, Vy);
    },
    unbind: function (Vu, VW) {
      return this.off(Vu, null, VW);
    },
    delegate: function (Vu, VW, Vy, VZ) {
      return this.on(VW, Vu, Vy, VZ);
    },
    undelegate: function (Vu, VW, Vy) {
      if (arguments.length === 1) {
        return this.off(Vu, "**");
      } else {
        return this.off(VW, Vu || "**", Vy);
      }
    }
  });
  hr.proxy = function (Vu, VW) {
    var Vy;
    var VZ;
    if (typeof VW == "string") {
      VZ = Vu[VW];
      VW = Vu;
      Vu = VZ;
    }
    if (h2(Vu)) {
      Vy = h7.call(arguments, 2);
      (VZ = function () {
        return Vu.apply(VW || this, Vy.concat(h7.call(arguments)));
      }).guid = Vu.guid = Vu.guid || hr.guid++;
      return VZ;
    }
  };
  hr.holdReady = function (Vu) {
    if (Vu) {
      hr.readyWait++;
    } else {
      hr.ready(true);
    }
  };
  hr.isArray = Array.isArray;
  hr.parseJSON = JSON.parse;
  hr.nodeName = hB;
  hr.isFunction = h2;
  hr.isWindow = h3;
  hr.camelCase = hv;
  hr.type = ho;
  hr.now = Date.now;
  hr.isNumeric = function (Vu) {
    var VW = hr.type(Vu);
    return (VW === "number" || VW === "string") && !isNaN(Vu - parseFloat(Vu));
  };
  if (typeof define == "function" && define.amd) {
    define("jquery", [], function () {
      return hr;
    });
  }
  var Vk = h0.jQuery;
  var Vq = h0.$;
  hr.noConflict = function (Vu) {
    if (h0.$ === hr) {
      h0.$ = Vq;
    }
    if (Vu && h0.jQuery === hr) {
      h0.jQuery = Vk;
    }
    return hr;
  };
  if (!h1) {
    h0.jQuery = h0.$ = hr;
  }
  return hr;
});
(() => {
  var h0;
  var h1;
  var h2;
  var h3;
  var h4 = {
    696: (h8, h9, hh) => {
      'use strict';

      hh.d(h9, {
        Z: () => hL
      });
      const hL = {
        advertising: {
          admessage: "This ad will end in xx",
          cuetext: "Advertisement",
          displayHeading: "Advertisement",
          loadingAd: "Loading ad",
          podmessage: "Ad __AD_POD_CURRENT__ of __AD_POD_LENGTH__.",
          skipmessage: "Skip ad in xx",
          skiptext: "Skip"
        },
        airplay: "AirPlay",
        audioTracks: "Audio Tracks",
        auto: "Auto",
        buffer: "Loading",
        cast: "Chromecast",
        cc: "Closed Captions",
        close: "Close",
        errors: {
          badConnection: "This video cannot be played because of a problem with your internet connection.",
          cantLoadPlayer: "Sorry, the video player failed to load.",
          cantPlayInBrowser: "The video cannot be played in this browser.",
          cantPlayVideo: "This video file cannot be played.",
          errorCode: "Error Code",
          liveStreamDown: "The live stream is either down or has ended.",
          protectedContent: "There was a problem providing access to protected content.",
          technicalError: "This video cannot be played because of a technical error."
        },
        exitFullscreen: "Exit Fullscreen",
        fullscreen: "Fullscreen",
        hd: "Quality",
        liveBroadcast: "Live",
        logo: "Logo",
        mute: "Mute",
        next: "Next",
        nextUp: "Next Up",
        notLive: "Not Live",
        off: "Off",
        pause: "Pause",
        pipIcon: "Picture in Picture (PiP)",
        play: "Play",
        playback: "Play",
        playbackRates: "Playback Rates",
        player: "Video Player",
        poweredBy: "Powered by",
        prev: "Previous",
        related: {
          autoplaymessage: "Next up in xx",
          heading: "More Videos"
        },
        replay: "Replay",
        rewind: "Rewind 10 Seconds",
        settings: "Settings",
        sharing: {
          copied: "Copied",
          email: "Email",
          embed: "Embed",
          heading: "Share",
          link: "Link"
        },
        slider: "Seek",
        stop: "Stop",
        unmute: "Unmute",
        videoInfo: "About This Video",
        volume: "Volume",
        volumeSlider: "Volume",
        shortcuts: {
          playPause: "Play/Pause",
          volumeToggle: "Mute/Unmute",
          fullscreenToggle: "Fullscreen/Exit Fullscreen",
          seekPercent: "Seek %",
          keyboardShortcuts: "Keyboard Shortcuts",
          increaseVolume: "Increase Volume",
          decreaseVolume: "Decrease Volume",
          seekForward: "Seek Forward",
          seekBackward: "Seek Backward",
          spacebar: "SPACE",
          captionsToggle: "Captions On/Off",
          shortcutsToggle: "Shortcuts Open/Close"
        },
        captionsStyles: {
          subtitleSettings: "Subtitle Settings",
          color: "Font Color",
          fontOpacity: "Font Opacity",
          userFontScale: "Font Size",
          fontFamily: "Font Family",
          edgeStyle: "Character Edge",
          backgroundColor: "Background Color",
          backgroundOpacity: "Background Opacity",
          windowColor: "Window Color",
          windowOpacity: "Window Opacity",
          white: "White",
          black: "Black",
          red: "Red",
          green: "Green",
          blue: "Blue",
          yellow: "Yellow",
          magenta: "Magenta",
          cyan: "Cyan",
          none: "None",
          raised: "Raised",
          depressed: "Depressed",
          uniform: "Uniform",
          dropShadow: "Drop Shadow"
        },
        disabled: "Disabled",
        enabled: "Enabled",
        reset: "Reset"
      };
    },
    9128: (h8, h9, hh) => {
      'use strict';

      function hL(hV, hK, hw) {
        function hX() {
          while (hg.length > 0) {
            var {
              command: hM,
              args: ho
            } = hg.shift();
            (hl[hM] || hV[hM]).apply(hV, ho);
          }
        }
        const hg = [];
        const hl = {};
        hK.forEach(hM => {
          const ho = hV[hM];
          hl[hM] = ho;
          hV[hM] = function (...hr) {
            if (hw()) {
              hg.push({
                command: hM,
                args: hr
              });
            } else {
              hX();
              if (ho) {
                ho.apply(this, hr);
              }
            }
          };
        });
        Object.defineProperty(this, "queue", {
          enumerable: true,
          get: () => hg
        });
        this.flush = hX;
        this.empty = function () {
          hg.length = 0;
        };
        this.off = function () {
          hK.forEach(hM => {
            var ho = hl[hM];
            if (ho) {
              hV[hM] = ho;
              delete hl[hM];
            }
          });
        };
        this.destroy = function () {
          this.off();
          this.empty();
        };
      }
      hh.d(h9, {
        Z: () => hL
      });
    },
    4742: (h8, h9, hh) => {
      'use strict';

      hh.d(h9, {
        Z: () => hL
      });
      const hL = {
        debug: false
      };
    },
    5191: (h8, h9, hh) => {
      'use strict';

      hh.d(h9, {
        R: () => hV,
        a: () => hL
      });
      const hL = function (hK) {
        return hK = hK.slice && hK.slice(-2) === "px" ? hK.slice(0, -2) : hK;
      };
      const hV = function (hK, hw) {
        var hX;
        if (hw.toString().indexOf("%") !== -1 && typeof hK == "string" && hK) {
          if (/^\d*\.?\d+%$/.test(hK)) {
            return hK;
          } else if ((hw = hK.indexOf(":")) === -1 || (hX = parseFloat(hK.substr(0, hw)), hK = parseFloat(hK.substr(hw + 1)), hX <= 0) || hK <= 0) {
            return 0;
          } else {
            return hK / hX * 100 + "%";
          }
        } else {
          return 0;
        }
      };
    },
    5083: (h8, h9, hh) => {
      'use strict';

      hh.d(h9, {
        G0: () => ho,
        ZP: () => hr,
        ke: () => hM
      });
      var hL = hh(5191);
      var hV = hh(1569);
      var hK = hh(9888);
      var hw = hh(6042);
      var hX = hh(8348);
      var hg = hh(696);
      var hl = hh(8518);
      const hM = {
        autoPause: {
          viewability: false,
          pauseAds: false
        },
        autostart: false,
        allowFullscreen: true,
        bandwidthEstimate: null,
        bitrateSelection: null,
        castAvailable: false,
        controls: true,
        cues: [],
        defaultPlaybackRate: 1,
        displaydescription: true,
        displaytitle: true,
        displayPlaybackLabel: false,
        enableShortcuts: true,
        floating: {
          mode: "never"
        },
        height: 360,
        intl: {},
        item: 0,
        language: "en",
        liveTimeout: null,
        localization: hg.Z,
        mute: false,
        nextUpDisplay: true,
        playbackRateControls: false,
        playbackRates: [0.5, 1, 1.25, 1.5, 2],
        renderCaptionsNatively: false,
        repeat: false,
        showUIWhen: "onReady",
        stretching: "uniform",
        volume: 90,
        width: 640
      };
      const ho = function (ha) {
        if (ha < 5) {
          return 5;
        } else {
          return ha;
        }
      };
      const hr = function (ha, hx) {
        var hb;
        var hc = {};
        if (hx && function (hA) {
          if (hA == null) {
            throw new TypeError("Cannot convert undefined or null to object");
          }
          return Object.prototype.hasOwnProperty.call(Object(hA), "mute");
        }(hx)) {
          if (typeof hx.mute == "boolean") {
            hc.mute = hx.mute;
          }
          delete hx.mute;
        }
        var hc = Object.assign({}, hc, (hc = window) == null || (hc = hc.jwplayer) == null ? undefined : hc.defaults, hx, ha);
        hb = hc;
        Object.keys(hb).forEach(hA => {
          if (hA !== "id") {
            hb[hA] = (0, hK.serialize)(hb[hA]);
          }
        });
        var hx = hc.forceLocalizationDefaults ? hM.language : (0, hl.G3)();
        var ha = (0, hl.tK)(hc.intl);
        hc.localization = (0, hl.Mh)(hg.Z, (0, hl.Pm)(hc, ha, hx));
        var hm = Object.assign({}, hM, hc);
        if (hm.base === ".") {
          hm.base = (0, hV.getScriptPath)("jwplayer.js");
        }
        hm.base = (hm.base || (0, hV.loadFrom)()).replace(/\/?$/, "/");
        hh.p = hm.base;
        hm.width = (0, hL.a)(hm.width);
        hm.height = (0, hL.a)(hm.height);
        hm.aspectratio = (0, hL.R)(hm.aspectratio, hm.width);
        if (typeof hm.volume == "string") {
          hm.volume = parseFloat(hm.volume);
        }
        hm.volume = (0, hw.qh)(hm.volume) ? Math.min(Math.max(0, hm.volume), 100) : hM.volume;
        hm.mute = Boolean(hm.mute);
        hm.language = hx;
        hm.intl = ha;
        var hx = hm.playlistIndex;
        if (hx) {
          hm.item = hx;
        }
        if (!(0, hw.hj)(hm.item)) {
          hm.item = 0;
        }
        var ha = hc.autoPause;
        if (ha) {
          hm.autoPause.viewability = !("viewability" in ha) || Boolean(ha.viewability);
        }
        var hx = hm.playbackRateControls;
        if (hx) {
          let hA = hm.playbackRates;
          if ((hA = (hA = Array.isArray(hx) ? hx : hA).filter(hj => (0, hw.hj)(hj) && hj >= 0.25 && hj <= 4).map(hj => Math.round(hj * 100) / 100)).indexOf(1) < 0) {
            hA.push(1);
          }
          hA.sort();
          hm.playbackRateControls = true;
          hm.playbackRates = hA;
        }
        if (!hm.playbackRateControls || hm.playbackRates.indexOf(hm.defaultPlaybackRate) < 0) {
          hm.defaultPlaybackRate = 1;
        }
        hm.playbackRate = hm.defaultPlaybackRate;
        if (!hm.aspectratio) {
          delete hm.aspectratio;
        }
        hc = hm.playlist;
        if (hc) {
          if (Array.isArray(hc.playlist)) {
            hm.feedData = hc;
            hm.playlist = hc.playlist;
          }
        } else {
          const hj = (0, hw.ei)(hm, ["title", "description", "type", "mediaid", "image", "images", "file", "sources", "tracks", "preload", "duration", "chapters"]);
          hm.playlist = [hj];
        }
        hm.qualityLabels = hm.qualityLabels || hm.hlslabels;
        delete hm.duration;
        let hB = hm.liveTimeout;
        if (hB !== null) {
          if ((0, hw.qh)(hB)) {
            if (hB !== 0) {
              hB = Math.max(30, hB);
            }
          } else {
            hB = null;
          }
          hm.liveTimeout = hB;
        }
        ha = parseFloat(hm.bandwidthEstimate);
        hx = parseFloat(hm.bitrateSelection);
        hm.bandwidthEstimate = (0, hw.qh)(ha) ? ha : function (hF) {
          hF = parseFloat(hF);
          if ((0, hw.qh)(hF)) {
            return Math.max(hF, 1);
          } else {
            return hM.bandwidthEstimate;
          }
        }(hm.defaultBandwidthEstimate);
        hm.bitrateSelection = (0, hw.qh)(hx) ? hx : hM.bitrateSelection;
        hm.liveSyncDuration = ho(hm.liveSyncDuration);
        hm.backgroundLoading = ((0, hw.jn)(hm.backgroundLoading) ? hm : hX.Features).backgroundLoading;
        return hm;
      };
    },
    2894: (h8, h9, hh) => {
      'use strict';

      hh.d(h9, {
        Ep: () => hK,
        Jt: () => hw,
        Tr: () => hV,
        Zq: () => hX
      });
      var hL = hh(4446);
      const hV = {};
      const hK = function (hg, hl) {
        return () => {
          throw new hL.rG(hL.pJ, hg, hl);
        };
      };
      const hw = function (hg, hl) {
        return () => {
          throw new hL.rG(null, hg, hl);
        };
      };
      const hX = function () {
        return hh.e(681).then(function (hg) {
          return hh(2739).default;
        }.bind(null, hh)).catch(hK(hL.fU + 101));
      };
    },
    623: (h8, h9, hh) => {
      'use strict';

      hh.d(h9, {
        ZP: () => hd,
        c2: () => hD
      });
      var hL = hh(9128);
      var hV = hh(2445);
      var hK = hh(2894);
      var hw = hh(393);
      var hX = hh(8320);
      var hg = hh(2963);
      var hl = hh(670);
      var hM = hh(4601);
      var ho = hh(4446);
      var hr = hh(8348);
      let ha = null;
      function hx() {
        var L0 = window.IntersectionObserverEntry;
        return !L0 || !("IntersectionObserver" in window) || !("intersectionRatio" in L0.prototype);
      }
      function hb() {
        return (hx() ? hh.e(943).then(function (L0) {
          return hh(6337);
        }.bind(null, hh)).catch((0, hK.Ep)(ho.fU + 120)) : Promise.resolve()).then(hK.Zq);
      }
      const hc = function (L0) {
        var L1;
        var L2 = L0.get("controls");
        var L3 = hx();
        var L0 = function (L4) {
          const L5 = L4.get("playlist");
          if (Array.isArray(L5) && L5.length) {
            var L6 = (0, hX.bx)(L4.get("item"), L5.length);
            var L7 = (0, hX.T5)((0, hw.Z)(L5[L6]), L4);
            for (let Lh = 0; Lh < L7.length; Lh++) {
              var L8 = L7[Lh];
              var L9 = L4.getProviders();
              for (let LL = 0; LL < hg.B.length; LL++) {
                const LV = hg.B[LL];
                if (L9.providerSupports(LV, L8)) {
                  return LV.name === "html5";
                }
              }
            }
          }
          return false;
        }(L0);
        if (hr.OS.tizen) {
          return hb();
        } else if (L2 && L3 && L0) {
          L1 = hh.e(605).then(function (L4) {
            hh(6337);
            var L5 = hh(2739).default;
            hM.v.controls = hh(5827).default;
            (0, hl.Z)(hh(9181).default);
            return L5;
          }.bind(null, hh)).catch((0, hK.Ep)(ho.fU + 105));
          return hK.Tr.html5 = L1;
        } else if (L2 && L0) {
          L1 = hh.e(207).then(function (L4) {
            var L5 = hh(2739).default;
            hM.v.controls = hh(5827).default;
            (0, hl.Z)(hh(9181).default);
            return L5;
          }.bind(null, hh)).catch((0, hK.Ep)(ho.fU + 104));
          return hK.Tr.html5 = L1;
        } else if (L2 && L3) {
          return hh.e(493).then(function (L4) {
            hh(6337);
            var L5 = hh(2739).default;
            hM.v.controls = hh(5827).default;
            return L5;
          }.bind(null, hh)).catch((0, hK.Ep)(ho.fU + 103));
        } else if (L2) {
          return hh.e(581).then(function (L4) {
            var L5 = hh(2739).default;
            hM.v.controls = hh(5827).default;
            return L5;
          }.bind(null, hh)).catch((0, hK.Ep)(ho.fU + 102));
        } else {
          return hb();
        }
      };
      var hm = hh(1643);
      var hB = hh(7263);
      var hA = hh(676);
      var hj = hh(8518);
      var hF = hh(8675);
      var hN = hh(8381);
      function hP(L0, L1, L2) {
        (L0 = L0.attributes).playlist = (0, hX.ZP)(L1);
        L0.feedData = L2;
      }
      function hn(L0) {
        const L1 = L0.get("playlist");
        return new Promise((L2, L3) => {
          if (typeof L1 != "string") {
            const L5 = L0.get("feedData") || {};
            hP(L0, L1, L5);
            return L2();
          }
          var L4 = new hB.Z();
          L4.on(hm.Ow, function (L6) {
            var L7 = L6.playlist;
            delete L6.playlist;
            hP(L0, L7, L6);
            L2();
          });
          L4.on(hm.pn, L6 => {
            hP(L0, [], {});
            L3((0, ho.l9)(L6, ho.xk));
          });
          L4.load(L1);
        });
      }
      function hS(L0) {
        return L0.attributes._destroyed;
      }
      var hp = hh(1918);
      var hH = hh(6599);
      var hk = hh(7010);
      function ht(L0) {
        let L1;
        this.start = function (L2) {
          const L3 = hZ(L0, L2);
          const L4 = Promise.all([(L2 = L0, ha = ha || hc(L2)), hE(L0), L3, hW(L0), hy(L0), hq(L0), hG(L0)]);
          L2 = new Promise((L5, L6) => {
            L1 = setTimeout(() => {
              L6(new ho.rG(ho.pJ, ho.T6));
            }, 60000);
            var L7 = () => {
              clearTimeout(L1);
              setTimeout(L5, 60000);
            };
            L4.then(L7).catch(L7);
          });
          return Promise.race([L4, L2]).catch(L5 => {
            var L6 = () => {
              throw L5;
            };
            return L3.then(L6).catch(L6);
          }).then(L5 => {
            if ((L5 = L5) && L5.length) {
              L6 = L5.reduce((L7, L8) => L7.concat(L8), []).filter(L7 => L7 == null ? undefined : L7.code);
              return {
                core: L5[0],
                warnings: L6
              };
            } else {
              return {
                core: null,
                warnings: []
              };
            }
            var L6;
          });
        };
        this.destroy = function () {
          clearTimeout(L1);
          L0.set("_destroyed", true);
          L0 = null;
        };
      }
      const hq = function (L0) {
        var L1 = L0.get("skin") ? L0.get("skin").url : undefined;
        if (typeof L1 != "string" || function (L2) {
          var L3 = document.styleSheets;
          for (let L4 = 0, L5 = L3.length; L4 < L5; L4++) {
            if (L3[L4].href === L2) {
              return 1;
            }
          }
        }(L1)) {
          return Promise.resolve();
        }
        {
          const L2 = true;
          return new hA.ZP(L1, true).load().catch(L3 => L3);
        }
      };
      const hu = L0 => {
        L0 = L0.get("advertising");
        return Boolean(L0 == null ? undefined : L0.outstream);
      };
      const hW = L0 => hu(L0) ? Promise.resolve() : hn(L0).then(() => {
        if (L0.get("drm") || (0, hp.w0)(L0.get("playlist"))) {
          return (0, hp.lD)(L0.get("edition"));
        }
      }).then(() => {
        return hn(L1 = L0).then(() => {
          if (!hS(L1)) {
            var L2 = (0, hX.s7)(L1.get("playlist"), L1);
            L1.attributes.playlist = L2;
            try {
              (0, hX._)(L2);
            } catch (L6) {
              L6.code += ho.xk;
              throw L6;
            }
            var L3 = L1.getProviders();
            var L4 = (0, hX.bx)(L1.get("item"), L2.length);
            var {
              provider: L4,
              name: L5
            } = L3.choose(L2[L4].sources[0]);
            if (typeof L4 == "function") {
              return L4;
            } else if (hK.Tr.html5 && L5 === "html5") {
              return hK.Tr.html5;
            } else {
              return L3.load(L5).catch(L7 => {
                throw (0, ho.l9)(L7, ho.y4);
              });
            }
          }
        });
        var L1;
      });
      const hy = (L0, L1) => {
        var L2 = [(L3 => {
          const L4 = L3.attributes;
          const L5 = L4.error;
          if (L5 && L5.code === hH.u5) {
            const L6 = L4.pid;
            const L7 = L4.ph;
            const L8 = new hH.ZP(L4.key);
            if (L7 > 0 && L7 < 4 && L6 && L8.duration() > -7776000000) {
              return new hA.ZP("//content.jwplatform.com/libraries/" + L6 + ".js").load().then(() => {
                var L9 = window.jwplayer.defaults.key;
                var Lh = new hH.ZP(L9);
                if (!Lh.error() && Lh.token() === L8.token()) {
                  L4.key = L9;
                  L4.edition = Lh.edition();
                  L4.error = Lh.error();
                }
              }).catch(() => {});
            }
          }
          return Promise.resolve();
        })(L0)];
        if (!hu(L0)) {
          L2.push(Promise.resolve());
        }
        return Promise.all(L2);
      };
      const hZ = (L0, L1) => {
        var L2;
        var L3;
        var L4;
        var L5 = () => (0, hF.ZP)(L0, L1);
        if ((0, hk.Z)()) {
          L3 = L2 = L0;
          L4 = L1;
          return hh.e(168).then((L6 => new (hh(5545).default)(L4).setup(L3)).bind(null, hh)).catch((0, hK.Ep)(ho.fU + 130)).then(() => hq(L2)).then(L5).catch(L5);
        } else {
          return L5();
        }
      };
      const hG = function (L0) {
        const L1 = L0.attributes;
        const {
          language: L2,
          base: L3,
          setupConfig: L4,
          intl: L5
        } = L1;
        const L6 = (0, hj.Pm)(L4, L5, L2);
        if (!(0, hj.q2)(L2) || (0, hj.dl)(L6)) {
          return Promise.resolve();
        } else {
          return new Promise(L7 => (0, hj.Dq)(L3, L2).then(({
            response: L8
          }) => {
            if (!hS(L0)) {
              if (!L8) {
                throw new ho.rG(null, ho.wH);
              }
              L1.localization = (0, hj.Mh)(L8, L6);
              L7();
            }
          }).catch(L8 => {
            L7(L8.code === ho.wH ? L8 : (0, ho.l9)(L8, ho.A6));
          }));
        }
      };
      const hE = L0 => new Promise(L1 => {
        var L2;
        if (L0.attributes.liveSyncDuration > 45) {
          return L1((0, ho.l9)(new Error(), ho.wM));
        } else if ((L2 = Array.isArray(L0.attributes.playlist) && L0.attributes.playlist.map(L3 => L3.chapters)) != null && L2.length) {
          return (0, hN.T2)(L2, L1);
        } else {
          return L1();
        }
      });
      var hz = hh(2303);
      var hv = hh(7411);
      var hi = hh(9888);
      var hT = hh(4742);
      let he = {
        removeItem(L0) {}
      };
      try {
        he = window.localStorage || he;
      } catch (L0) {}
      const hQ = class {
        constructor(L1, L2) {
          this.namespace = L1;
          this.items = L2;
        }
        getAllItems() {
          return this.items.reduce((L1, L2) => {
            var L3 = he[this.namespace + "." + L2];
            if (L3) {
              L1[L2] = L2 !== "captions" ? (0, hi.serialize)(L3) : JSON.parse(L3);
            }
            return L1;
          }, {});
        }
        track(L1) {
          this.items.forEach(L2 => {
            L1.on("change:" + L2, (L3, L4) => {
              try {
                if (L2 === "captions") {
                  L4 = JSON.stringify(L4);
                }
                he[this.namespace + "." + L2] = L4;
              } catch (L5) {
                if (hT.Z.debug) {
                  console.error(L5);
                }
              }
            });
          });
        }
        clear() {
          this.items.forEach(L1 => {
            he.removeItem(this.namespace + "." + L1);
          });
        }
      };
      var hI = hh(7753);
      var hO = hh(9918);
      var h9 = hh(328);
      var hs = hh(4225);
      var hY = hh(7683);
      var hf = hh(4609);
      var hC = hh(5882);
      hh(4671);
      hh(9926);
      function hU(L1, L2) {
        if (L2 && L2.code) {
          if (L2.sourceError) {
            console.error(L2.sourceError);
          }
          console.error(ho.rG.logMessage(L2.code));
        }
      }
      function hR(L1) {
        if (L1 && L1.code) {
          console.warn(ho.rG.logMessage(L1.code));
        }
      }
      function hJ(L1) {
        this._events = {};
        this.modelShim = new hI.Z();
        this.modelShim._qoeItem = new hv.Z();
        this.mediaShim = {};
        this.setup = new ht(this.modelShim);
        this.currentContainer = this.originalContainer = L1;
        this.apiQueue = new hL.Z(this, ["load", "play", "pause", "seek", "stop", "playlistItem", "playlistNext", "playlistPrev", "next", "preload", "setAllowFullscreen", "setConfig", "setCurrentAudioTrack", "setCurrentCaptions", "setCurrentQuality", "setFullscreen", "setPip", "requestPip", "addButton", "removeButton", "castToggle", "requestCast", "setMute", "setVolume", "setPlaybackRate", "addCues", "setCues", "getCues", "setPlaylistItem", "stopCasting", "getChapters", "getCurrentChapter", "setChapter", "resize", "setCaptions", "setControls"], () => true);
      }
      const hD = function (L1, L2) {
        if (!document.body.contains(L1.currentContainer)) {
          const L3 = document.getElementById(L1.get("id"));
          if (L3) {
            L1.currentContainer = L3;
          }
        }
        if (L1.currentContainer.parentElement) {
          L1.currentContainer.parentElement.replaceChild(L2, L1.currentContainer);
        }
        L1.currentContainer = L2;
      };
      Object.assign(hJ.prototype, {
        on: h9.ZP.on,
        once: h9.ZP.once,
        off: h9.ZP.off,
        trigger: h9.ZP.trigger,
        init(L1, L2) {
          const L3 = this.modelShim;
          const L4 = new hQ("jwplayer", ["volume", "mute", "captionLabel", "captions", "bandwidthEstimate", "bitrateSelection", "qualityLabel", "enableShortcuts"]);
          const L5 = L4 == null ? undefined : L4.getAllItems();
          L3.attributes = L3.attributes || {};
          Object.assign(this.mediaShim, hO.L4);
          const L6 = L1;
          const L7 = (0, hV.ZP)(Object.assign({}, L1), L5);
          L7.id = L2.id;
          L7.setupConfig = L6;
          Object.assign(L3.attributes, L7, hO.bv);
          L3.getProviders = function () {
            return new hz.Z(L7);
          };
          L3.setProvider = function () {};
          let L8 = (0, hY.Z)();
          {
            if (!L3.get("backgroundLoading")) {
              L8 = (0, hf.Z)(L8.getPrimedElement(), L8);
            }
            const L9 = this.primeUi = new hC.ZP((0, hC.GU)(this.originalContainer)).once("gesture", () => {
              L8.prime();
              this.preload();
              L9.destroy();
            });
          }
          L3.on("change:errorEvent", hU);
          return this.setup.start(L2).then(Lh => {
            var LL = Lh.core;
            if (!LL) {
              throw (0, ho.l9)(null, ho.y7);
            }
            if (this.setup) {
              this.on(hm.cM, hR);
              Lh.warnings.forEach(LK => {
                this.trigger(hm.cM, LK);
              });
              Lh = this.modelShim.clone();
              if (Lh.error) {
                throw Lh.error;
              }
              var LV = this.apiQueue.queue.slice(0);
              this.apiQueue.destroy();
              Object.assign(this, LL.prototype);
              this.playerSetup(Lh, L2, this.originalContainer, this._events, LV, L8);
              var LL = this._model;
              L3.off("change:errorEvent", hU);
              LL.on("change:errorEvent", hU);
              L4.track(LL);
              return this.updatePlaylist(LL.get("playlist"), LL.get("feedData")).catch(LK => {
                var Lw = LK.code === ho._M ? ho.IB : ho.xk;
                throw (0, ho.l9)(LK, Lw);
              });
            }
          }).then(() => {
            if (this.setup) {
              this.playerReady();
            }
          }).catch(Lh => {
            var LL;
            var LV;
            var LK;
            if (this.setup) {
              LL = this;
              LV = L2;
              LK = Lh;
              Promise.resolve().then(() => {
                var Lw = (0, ho.Mm)(ho.ud, ho.nk, LK);
                var LX = LL._model || LL.modelShim;
                Lw.message = Lw.message || LX.get("localization").errors[Lw.key];
                delete Lw.key;
                var Lg = LX.get("contextual");
                if (!Lg) {
                  const Ll = (0, hs.Z)(LL, Lw);
                  if (hs.Z.cloneIcon) {
                    Ll.querySelector(".jw-icon").appendChild(hs.Z.cloneIcon("error"));
                  }
                  hD(LL, Ll);
                }
                LX.set("errorEvent", Lw);
                LX.set("state", hm.Vy);
                LL.trigger(hm.HH, Lw);
                if (Lg) {
                  LV.remove();
                }
              });
            }
          });
        },
        playerDestroy() {
          if (this.destroy) {
            this.destroy();
          }
          if (this.apiQueue) {
            this.apiQueue.destroy();
          }
          if (this.setup) {
            this.setup.destroy();
          }
          if (this.primeUi) {
            this.primeUi.destroy();
          }
          if (this.currentContainer !== this.originalContainer) {
            hD(this, this.originalContainer);
          }
          this.off();
          this._events = this._model = this.modelShim = this.apiQueue = this.primeUi = this.setup = null;
        },
        getContainer() {
          return this.currentContainer;
        },
        get(L1) {
          if (this.modelShim) {
            if (L1 in this.mediaShim) {
              return this.mediaShim[L1];
            } else {
              return this.modelShim.get(L1);
            }
          }
        },
        getItemQoe() {
          return this.modelShim._qoeItem;
        },
        getItemPromise: () => null,
        setItemCallback(L1) {
          if (this.modelShim) {
            this.modelShim.attributes.playlistItemCallback = L1;
          }
        },
        getConfig() {
          return Object.assign({}, this.modelShim.attributes, this.mediaShim);
        },
        getCurrentCaptions() {
          return this.get("captionsIndex");
        },
        getWidth() {
          return this.get("containerWidth");
        },
        getHeight() {
          return this.get("containerHeight");
        },
        getMute() {
          return this.get("mute");
        },
        getProvider() {
          return this.get("provider");
        },
        getState() {
          return this.get("state");
        },
        getAbsolutePosition: () => null,
        getAudioTracks: () => null,
        getCaptionsList: () => null,
        getQualityLevels: () => null,
        getVisualQuality: () => null,
        getCurrentQuality: () => -1,
        getCurrentAudioTrack: () => -1,
        getSafeRegion: () => ({
          x: 0,
          y: 0,
          width: 0,
          height: 0
        }),
        isBeforeComplete: () => false,
        isBeforePlay: () => false,
        createInstream: () => null,
        skipAd() {},
        getMediaElement() {},
        attachMedia() {},
        detachMedia() {},
        isReady() {
          var L1;
          return ((L1 = this._model) == null ? undefined : L1.get("isReady")) || false;
        }
      });
      const hd = hJ;
    },
    4446: (h8, h9, hh) => {
      'use strict';

      hh.d(h9, {
        A6: () => hj,
        DD: () => ho,
        EY: () => hc,
        H4: () => hH,
        IB: () => hl,
        MD: () => hP,
        Mm: () => hq,
        Sp: () => hp,
        T6: () => hK,
        Y7: () => hA,
        YQ: () => hM,
        _M: () => hb,
        aD: () => hB,
        fU: () => hX,
        l9: () => hu,
        nk: () => hV,
        nm: () => hW,
        o2: () => hx,
        pJ: () => hn,
        rG: () => ht,
        tJ: () => ha,
        ud: () => hk,
        ul: () => hN,
        wH: () => hF,
        wM: () => hm,
        xk: () => hg,
        y4: () => hr,
        y7: () => hw,
        zO: () => hS
      });
      var hL = hh(6042);
      const hV = 100000;
      const hK = 100001;
      const hw = 100002;
      const hX = 101000;
      const hg = 102000;
      const hl = 102700;
      const hM = 200001;
      const ho = 202000;
      const hr = 104000;
      const ha = 203000;
      const hx = 203640;
      const hb = 203700;
      const hc = 204000;
      const hm = 300100;
      const hB = 300200;
      const hA = 306000;
      const hj = 308000;
      const hF = 308640;
      const hN = "cantPlayVideo";
      const hP = "badConnection";
      const hn = "cantLoadPlayer";
      const hS = "cantPlayInBrowser";
      const hp = "liveStreamDown";
      const hH = "protectedContent";
      const hk = "technicalError";
      class ht {
        constructor(hy, hZ, hG) {
          this.code = (0, hL.qh)(hZ) ? hZ : 0;
          this.sourceError = hG || null;
          if (hy) {
            this.key = hy;
          } else {
            delete this.key;
          }
        }
        static logMessage(hy) {
          var hZ = hy % 1000;
          var hG = Math.floor((hy - hZ) / 1000);
          let hE = hy.toString();
          return "JW Player " + (hy > 299999 && hy < 400000 ? "Warning" : "Error") + " " + hy + ". For more information see https://developer.jwplayer.com/jw-player/docs/developer-guide/api/errors-reference#" + (hE = hZ >= 400 && hZ < 600 ? hG + ("400-" + hG + "599") : hE);
        }
      }
      const hq = function (hy, hZ, hG) {
        if (hG instanceof ht && hG.code) {
          return hG;
        } else {
          return new ht(hy, hZ, hG);
        }
      };
      const hu = function (hy, hZ) {
        var hG = hq(hk, hZ, hy);
        hG.code = (hy && hy instanceof ht && hy.code || 0) + hZ;
        return hG;
      };
      const hW = function (hy) {
        var {
          name: hy,
          message: hZ
        } = hy;
        switch (hy) {
          case "AbortError":
            if (/pause/.test(hZ)) {
              return 303213;
            } else if (/load/.test(hZ)) {
              return 303212;
            } else {
              return 303210;
            }
          case "NotAllowedError":
            return 303220;
          case "NotSupportedError":
            return 303230;
          default:
            return 303200;
        }
      };
    },
    6391: (h8, h9, hh) => {
      'use strict';

      hh.d(h9, {
        Z: () => hL
      });
      const hL = [];
    },
    7411: (h8, h9, hh) => {
      'use strict';

      hh.d(h9, {
        Z: () => hX
      });
      var hL = hh(5004);
      const hV = window.performance || {
        timing: {}
      };
      const hK = hV.timing.navigationStart || (0, hL.z)();
      if (!("now" in hV)) {
        hV.now = () => (0, hL.z)() - hK;
      }
      const hw = () => hK + hV.now();
      const hX = class {
        constructor() {
          this.startTimes = {};
          this.sum = {};
          this.counts = {};
          this.ticks = {};
        }
        start(hg) {
          this.startTimes[hg] = hw();
          this.counts[hg] = this.counts[hg] + 1 || 1;
        }
        end(hg) {
          var hl;
          if (this.startTimes[hg]) {
            hl = hw() - this.startTimes[hg];
            delete this.startTimes[hg];
            this.sum[hg] = this.sum[hg] + hl || hl;
          }
        }
        dump() {
          var hg;
          var hl = Object.assign({}, this.sum);
          for (const hM in this.startTimes) {
            if (!!function (ho, hr) {
              if (ho == null) {
                throw new TypeError("Cannot convert undefined or null to object");
              }
              return Object.prototype.hasOwnProperty.call(Object(ho), hr);
            }(this.startTimes, hM)) {
              hg = hw() - this.startTimes[hM];
              hl[hM] = hl[hM] + hg || hg;
            }
          }
          return {
            counts: Object.assign({}, this.counts),
            sums: hl,
            events: Object.assign({}, this.ticks)
          };
        }
        tick(hg) {
          this.ticks[hg] = hw();
        }
        clear(hg) {
          delete this.ticks[hg];
        }
        between(hg, hl) {
          if (this.ticks[hl] && this.ticks[hg]) {
            return this.ticks[hl] - this.ticks[hg];
          } else {
            return null;
          }
        }
      };
    },
    4601: (h8, h9, hh) => {
      'use strict';

      hh.d(h9, {
        v: () => hw,
        z: () => hX
      });
      var hL = hh(2894);
      var hV = hh(8348);
      let hK = null;
      const hw = {};
      const hX = function () {
        return hK = hK || (hV.OS.tizenApp ? hh.e(74).then(function (hg) {
          var hl = hh(3112).default;
          return hw.controls = hl;
        }.bind(null, hh)).catch(function () {
          (hK = null, hL.Jt)(301133)();
        }) : hh.e(716).then(function (hg) {
          var hl = hh(5827).default;
          return hw.controls = hl;
        }.bind(null, hh)).catch(function () {
          (hK = null, hL.Jt)(301130)();
        }));
      };
    },
    8348: (h8, h9, hh) => {
      'use strict';

      hh.r(h9);
      hh.d(h9, {
        Browser: () => hX,
        Features: () => hl,
        OS: () => hg
      });
      var hL = hh(2268);
      const hV = (hM, ho) => {
        hM = hM.exec(ho);
        if (hM && hM.length > 1) {
          return hM[1];
        }
      };
      const hK = navigator.userAgent;
      const hw = () => {};
      const hX = {
        get androidNative() {
          return (0, hL.O7)();
        },
        get chrome() {
          return (0, hL.i7)();
        },
        get edge() {
          return (0, hL.un)();
        },
        get facebook() {
          return (0, hL.DF)();
        },
        get firefox() {
          return (0, hL.pZ)();
        },
        get ie() {
          return (0, hL.w1)();
        },
        get msie() {
          return (0, hL.A)();
        },
        get safari() {
          return (0, hL.G6)();
        },
        get version() {
          {
            var hM = this;
            var ho = hK;
            let hr;
            let ha;
            let hx;
            let hb;
            if (hM.chrome) {
              hr = ho.indexOf("Chrome") !== -1 ? ho.substring(ho.indexOf("Chrome") + 7) : ho.substring(ho.indexOf("CriOS") + 6);
            } else if (hM.safari) {
              hr = ho.substring(ho.indexOf("Version") + 8);
            } else if (hM.firefox) {
              hr = ho.substring(ho.indexOf("Firefox") + 8);
            } else if (hM.edge) {
              let hc = ho.indexOf("Edge");
              if (hc === -1) {
                hc = ho.indexOf("Edg") + 4;
              } else {
                hc += 5;
              }
              hr = ho.substring(hc);
            } else if (hM.ie) {
              if (ho.indexOf("rv:") !== -1) {
                hr = ho.substring(ho.indexOf("rv:") + 3);
              } else if (ho.indexOf("MSIE") !== -1) {
                hr = ho.substring(ho.indexOf("MSIE") + 5);
              }
            }
            if (hr) {
              if ((hb = (hr = (hb = (hr = (hb = hr.indexOf(";")) !== -1 ? hr.substring(0, hb) : hr).indexOf(" ")) !== -1 ? hr.substring(0, hb) : hr).indexOf(")")) !== -1) {
                hr = hr.substring(0, hb);
              }
              ha = parseInt(hr, 10);
              hx = parseInt(hr.split(".")[1], 10);
            }
            return {
              version: hr,
              major: ha,
              minor: hx
            };
          }
        }
      };
      const hg = {
        get android() {
          return (0, hL.Dt)();
        },
        get iOS() {
          return (0, hL.gn)();
        },
        get mobile() {
          return (0, hL.tq)();
        },
        get mac() {
          return (0, hL.id)();
        },
        get iPad() {
          return (0, hL.zc)();
        },
        get iPhone() {
          return (0, hL.xb)();
        },
        get windows() {
          return hK.indexOf("Windows") > -1;
        },
        get tizen() {
          return (0, hL.yS)();
        },
        get tizenApp() {
          return (0, hL.Q6)();
        },
        get version() {
          {
            var hM = this;
            var ho = hK;
            let hr;
            let ha;
            let hx;
            if (hM.windows) {
              hr = hV(/Windows(?: NT|)? ([._\d]+)/, ho);
              switch (hr) {
                case "6.1":
                  hr = "7.0";
                  break;
                case "6.2":
                  hr = "8.0";
                  break;
                case "6.3":
                  hr = "8.1";
              }
            } else if (hM.android) {
              hr = hV(/Android ([._\d]+)/, ho);
            } else if (hM.iOS) {
              hr = hV(/OS ([._\d]+)/, ho);
            } else if (hM.mac) {
              hr = hV(/Mac OS X ([._\d]+)/, ho);
            } else if (hM.tizen) {
              hr = hV(/Tizen ([._\d]+)/, ho);
            }
            if (hr) {
              ha = parseInt(hr, 10);
              const hb = hr.split(/[._]/);
              if (hb) {
                hx = parseInt(hb[1], 10);
              }
            }
            return {
              version: hr,
              major: ha,
              minor: hx
            };
          }
        }
      };
      const hl = {
        get flash() {
          return (0, hL.NO)();
        },
        get flashVersion() {
          return (0, hL.dI)();
        },
        get iframe() {
          return (0, hL.cL)();
        },
        get passiveEvents() {
          {
            let ho = false;
            try {
              var hM = Object.defineProperty({}, "passive", {
                get: () => ho = true
              });
              window.addEventListener("testPassive", hw, hM);
              window.removeEventListener("testPassive", hw, hM);
            } catch (hr) {}
            return ho;
          }
        },
        get backgroundLoading() {
          return !hg.iOS && !hX.safari && !hg.tizen;
        }
      };
    },
    1643: (h8, h9, hh) => {
      'use strict';

      hh.d(h9, {
        $_: () => hP,
        $j: () => hW,
        AQ: () => hG,
        Ax: () => hn,
        B1: () => hc,
        Bs: () => Lr,
        Ew: () => hi,
        FU: () => hT,
        Gj: () => Ll,
        HH: () => hs,
        Hy: () => L4,
        Ib: () => Lw,
        Je: () => hI,
        Jl: () => hZ,
        K5: () => hB,
        Kb: () => hL,
        Ms: () => ht,
        NZ: () => hu,
        O1: () => hd,
        Ow: () => L8,
        P: () => hb,
        QF: () => LK,
        R2: () => hC,
        RF: () => Lb,
        Rc: () => hq,
        Rt: () => hN,
        SL: () => LX,
        Sv: () => ha,
        TJ: () => hU,
        U3: () => hA,
        UF: () => LV,
        UW: () => L5,
        UZ: () => L1,
        V$: () => hz,
        Vy: () => hg,
        WE: () => hS,
        Wp: () => ho,
        Z_: () => Lg,
        _5: () => hw,
        _B: () => Lh,
        aM: () => L2,
        aQ: () => hO,
        bc: () => hV,
        cM: () => hF,
        cq: () => hQ,
        cy: () => hE,
        gO: () => L7,
        gy: () => hD,
        h7: () => La,
        ik: () => hl,
        j0: () => L9,
        jt: () => LL,
        k3: () => hp,
        l5: () => Lo,
        nQ: () => hM,
        nv: () => hr,
        oZ: () => hR,
        ot: () => hx,
        pi: () => hv,
        pn: () => hj,
        qG: () => Lx,
        r0: () => hX,
        rx: () => L0,
        s$: () => hy,
        sF: () => L6,
        t6: () => Lc,
        tP: () => hm,
        uL: () => hH,
        uT: () => hf,
        uc: () => hY,
        ug: () => L3,
        wh: () => hk,
        xQ: () => hK,
        xf: () => LM,
        yH: () => hJ
      });
      const hL = "buffering";
      const hV = "idle";
      const hK = "complete";
      const hw = "paused";
      const hX = "playing";
      const hg = "error";
      const hl = "loading";
      const hM = "stalled";
      const ho = "drag";
      const hr = "dragStart";
      const ha = "dragEnd";
      const hx = "click";
      const hb = "doubleClick";
      const hc = "over";
      const hm = "move";
      const hB = "enter";
      const hA = "out";
      const hj = hg;
      const hF = "warning";
      const hN = "adClick";
      const hP = "mediaLoaded";
      const hn = "adPause";
      const hS = "adPlay";
      const hp = "adSkipped";
      const hH = "adTime";
      const hk = "autostartNotAllowed";
      const ht = hK;
      const hq = "ready";
      const hu = "seek";
      const hW = "beforePlay";
      const hy = "beforeComplete";
      const hZ = "bufferFull";
      const hG = "absolutePositionReady";
      const hE = "displayClick";
      const hz = "playlistComplete";
      const hv = "cast";
      const hi = "mediaError";
      const hT = "firstFrame";
      const hQ = "playAttempt";
      const hI = "playAttemptFailed";
      const hO = "seeked";
      const hs = "setupError";
      const hY = "state";
      const hf = "bufferChange";
      const hC = "time";
      const hU = "ratechange";
      const hR = "mediaType";
      const hJ = "volume";
      const hD = "mute";
      const hd = "metadataCueParsed";
      const L0 = "meta";
      const L1 = "levels";
      const L2 = "levelsChanged";
      const L3 = "visualQuality";
      const L4 = "controls";
      const L5 = "fullscreen";
      const L6 = "resize";
      const L7 = "playlistItem";
      const L8 = "playlist";
      const L9 = "audioTracks";
      const Lh = "audioTrackChanged";
      const LL = "subtitlesTracks";
      const LV = "subtitlesTrackChanged";
      const LK = "playbackRateChanged";
      const Lw = "logoClick";
      const LX = "captionsList";
      const Lg = "captionsChanged";
      const Ll = "providerFirstFrame";
      const LM = "userAction";
      const Lo = "instreamClick";
      const Lr = "breakpoint";
      const La = "fullscreenchange";
      const Lx = "bandwidthEstimate";
      const Lb = "float";
      const Lc = "chapter";
    },
    9918: (h8, h9, hh) => {
      'use strict';

      hh.d(h9, {
        L4: () => hV,
        OG: () => hw,
        bv: () => hL,
        ni: () => hK
      });
      const hL = {
        audioMode: false,
        itemMeta: {},
        playbackRate: 1,
        playRejected: false,
        state: hh(1643).bc,
        itemReady: false,
        controlsEnabled: false
      };
      const hV = {
        position: 0,
        duration: 0,
        buffer: 0,
        currentTime: 0
      };
      const hK = 120;
      const hw = 25;
    },
    7753: (h8, h9, hh) => {
      'use strict';

      hh.d(h9, {
        Z: () => hL
      });
      class hL extends hh(328).ZP {
        constructor() {
          super();
          this.attributes = Object.create(null);
        }
        addAttributes(hV) {
          Object.keys(hV).forEach(hK => {
            this.add(hK, hV[hK]);
          });
        }
        add(hV, hK) {
          Object.defineProperty(this, hV, {
            get: () => this.attributes[hV],
            set: hw => {
              this.set(hV, hw);
            },
            enumerable: false
          });
          this.attributes[hV] = hK;
        }
        get(hV) {
          return this.attributes[hV];
        }
        set(hV, hK) {
          var hw;
          if (this.attributes[hV] !== hK) {
            hw = this.attributes[hV];
            this.attributes[hV] = hK;
            this.trigger("change:" + hV, this, hK, hw);
          }
        }
        clone() {
          var hV = {};
          var hK = this.attributes;
          if (hK) {
            for (const hw in hK) {
              hV[hw] = hK[hw];
            }
          }
          return hV;
        }
        change(hV, hK, hw) {
          this.on("change:" + hV, hK, hw);
          hV = this.get(hV);
          hK.call(hw, this, hV, hV);
          return this;
        }
      }
    },
    7941: (h8, h9, hh) => {
      'use strict';

      hh.d(h9, {
        dZ: () => hK,
        my: () => hX,
        qk: () => hw,
        r1: () => hV
      });
      var hL = hh(2957);
      const hV = hg => {
        let hl = "";
        if (hg) {
          if (hg.localName) {
            hl = hg.localName;
          } else if (hg.baseName) {
            hl = hg.baseName;
          }
        }
        return hl;
      };
      const hK = hg => {
        let hl = "";
        if (hg) {
          if (hg.textContent) {
            hl = (0, hL.fy)(hg.textContent);
          } else if (hg.text) {
            hl = (0, hL.fy)(hg.text);
          }
        }
        return hl;
      };
      const hw = (hg, hl) => hg.childNodes[hl];
      const hX = hg => hg.childNodes ? hg.childNodes.length : 0;
    },
    6769: (h8, h9, hh) => {
      'use strict';

      hh.d(h9, {
        Z: () => function (hM) {
          var ho = [];
          ho.feedData = {};
          for (let hb = 0; hb < (0, hL.my)(hM); hb++) {
            var hr = (0, hL.qk)(hM, hb);
            if ((0, hL.r1)(hr).toLowerCase() === "channel") {
              for (let hc = 0; hc < (0, hL.my)(hr); hc++) {
                var ha = (0, hL.qk)(hr, hc);
                var hx = (0, hL.r1)(ha).toLowerCase();
                if (hx === "item") {
                  ho.push(hl(ha));
                } else if (hx) {
                  ho.feedData[hx] = (0, hL.dZ)(ha);
                }
              }
            }
          }
          return ho;
        }
      });
      var hL = hh(7941);
      var hV = hh(2957);
      function hK(hM, ho) {
        const hr = [];
        for (let hb = 0; hb < (0, hL.my)(hM); hb++) {
          var ha = hM.childNodes[hb];
          if (ha.prefix === "media" && (0, hL.r1)(ha)) {
            switch ((0, hL.r1)(ha).toLowerCase()) {
              case "content":
                if ((0, hV.Dc)(ha, "duration")) {
                  ho.duration = (0, hV.m9)((0, hV.Dc)(ha, "duration"));
                }
                if ((0, hV.Dc)(ha, "url")) {
                  ho.sources ||= [];
                  const hc = {
                    file: (0, hV.Dc)(ha, "url"),
                    type: (0, hV.Dc)(ha, "type"),
                    width: (0, hV.Dc)(ha, "width"),
                    label: (0, hV.Dc)(ha, "label")
                  };
                  const hm = (hB => {
                    var hA = [];
                    for (let hF = 0; hF < (0, hL.my)(hB); hF++) {
                      var hj = hB.childNodes[hF];
                      if (hj.prefix === "jwplayer" && (0, hL.r1)(hj).toLowerCase() === "mediatypes") {
                        hA.push((0, hL.dZ)(hj));
                      }
                    }
                    return hA;
                  })(ha);
                  if (hm.length) {
                    hc.mediaTypes = hm;
                  }
                  ho.sources.push(hc);
                }
                if ((0, hL.my)(ha) > 0) {
                  ho = hK(ha, ho);
                }
                break;
              case "title":
                ho.title = (0, hL.dZ)(ha);
                break;
              case "description":
                ho.description = (0, hL.dZ)(ha);
                break;
              case "guid":
                ho.mediaid = (0, hL.dZ)(ha);
                break;
              case "thumbnail":
                ho.image ||= (0, hV.Dc)(ha, "url");
                break;
              case "group":
                hK(ha, ho);
                break;
              case "subtitle":
                {
                  const hB = {
                    file: (0, hV.Dc)(ha, "url"),
                    kind: "captions"
                  };
                  if ((0, hV.Dc)(ha, "lang").length > 0) {
                    hx = (0, hV.Dc)(ha, "lang");
                    undefined;
                    hB.label = {
                      zh: "Chinese",
                      nl: "Dutch",
                      en: "English",
                      fr: "French",
                      de: "German",
                      it: "Italian",
                      ja: "Japanese",
                      pt: "Portuguese",
                      ru: "Russian",
                      es: "Spanish"
                    }[hx] || hx;
                  }
                  hr.push(hB);
                  break;
                }
            }
          }
        }
        var hx;
        ho.tracks ||= [];
        for (let hA = 0; hA < hr.length; hA++) {
          ho.tracks.push(hr[hA]);
        }
        return ho;
      }
      const hw = hK;
      var hX = hh(9888);
      var hg = hh(393);
      const hl = hM => {
        var ho = {};
        for (let hx = 0; hx < hM.childNodes.length; hx++) {
          var hr = hM.childNodes[hx];
          var ha = (0, hL.r1)(hr);
          if (ha) {
            switch (ha.toLowerCase()) {
              case "enclosure":
                ho.file = (0, hV.Dc)(hr, "url");
                break;
              case "title":
                ho.title = (0, hL.dZ)(hr);
                break;
              case "guid":
                ho.mediaid = (0, hL.dZ)(hr);
                break;
              case "pubdate":
                ho.date = (0, hL.dZ)(hr);
                break;
              case "description":
                ho.description = (0, hL.dZ)(hr);
                break;
              case "link":
                ho.link = (0, hL.dZ)(hr);
                break;
              case "category":
                if (ho.tags) {
                  ho.tags += (0, hL.dZ)(hr);
                } else {
                  ho.tags = (0, hL.dZ)(hr);
                }
            }
          }
        }
        return new hg.Z(function (hb, hc) {
          var hm = "default";
          var hB = "file";
          var hA = [];
          var hj = [];
          var hF = hc;
          for (let hP = 0; hP < hb.childNodes.length; hP++) {
            var hN = hb.childNodes[hP];
            if (hN.prefix === "jwplayer") {
              const hn = (0, hL.r1)(hN);
              if (hn === "source") {
                delete hc.sources;
                hA.push({
                  file: (0, hV.Dc)(hN, hB),
                  default: (0, hV.Dc)(hN, hm),
                  label: (0, hV.Dc)(hN, "label"),
                  type: (0, hV.Dc)(hN, "type")
                });
              } else if (hn === "track") {
                delete hc.tracks;
                hj.push({
                  file: (0, hV.Dc)(hN, hB),
                  default: (0, hV.Dc)(hN, hm),
                  kind: (0, hV.Dc)(hN, "kind"),
                  label: (0, hV.Dc)(hN, "label")
                });
              } else {
                hc[hn] = (0, hX.serialize)((0, hL.dZ)(hN));
                if (hn === "file" && hc.sources) {
                  delete hc.sources;
                }
              }
            }
            hc[hB] ||= hc.link;
          }
          if (hA.length) {
            hc.sources = [];
            for (let hS = 0; hS < hA.length; hS++) {
              const hp = hA[hS];
              if (hp.file.length > 0) {
                hp[hm] = hA[hS][hm] === "true";
                if (!hp.label) {
                  delete hp.label;
                }
                hF.sources.push(hp);
              }
            }
          }
          if (hj.length) {
            hc.tracks = [];
            for (let hH = 0; hH < hj.length; hH++) {
              const hk = hj[hH];
              if (hk.file && hk.file.length > 0) {
                hk[hm] = hj[hH][hm] === "true";
                hk.kind = hj[hH].kind.length ? hj[hH].kind : "captions";
                if (!hk.label) {
                  delete hk.label;
                }
                hF.tracks.push(hk);
              }
            }
          }
          return hF;
        }(hM, hw(hM, ho)));
      };
    },
    2557: (h8, h9, hh) => {
      'use strict';

      hh.d(h9, {
        t: () => hL,
        u: () => hV
      });
      class hL {
        constructor(hK, hw) {
          this.defaultLanguage = hK;
          this.timestamps = hw;
        }
      }
      class hV {
        constructor({
          title: hK = {},
          group: hw,
          time: hX,
          image: hg
        }) {
          this.title = {};
          this.time = hX;
          this.group = hw;
          this.image = hg;
          Object.keys(hK).forEach(hl => {
            var hM = hK[hl];
            this.addTitle(hl, hM);
          });
        }
        addTitle(hK, hw) {
          this.title[hK] = hw;
        }
      }
    },
    393: (h8, h9, hh) => {
      'use strict';

      hh.d(h9, {
        Z: () => hg
      });
      var hL = hh(6053);
      function hV(hl) {
        var hM;
        if (hl && hl.file) {
          (hl = Object.assign({}, {
            kind: "captions",
            default: false
          }, hl)).kind = (hM = hl.kind, hK.indexOf(hM) !== -1 ? hl.kind : "captions");
          hl.default = Boolean(hl.default);
          return hl;
        }
      }
      const hK = ["captions", "metadata", "thumbnails", "chapters"];
      var hw = hh(9918);
      const hX = Array.isArray;
      const hg = function (hl) {
        if (!hX((hl = hl || {}).tracks)) {
          delete hl.tracks;
        }
        var hM = Object.assign({}, {
          sources: [],
          tracks: [],
          minDvrWindow: hw.ni
        }, hl);
        if (hM.sources === Object(hM.sources) && !hX(hM.sources)) {
          hM.sources = [(0, hL.Z)(hM.sources)];
        }
        if (!hX(hM.sources) || hM.sources.length === 0) {
          if (hl.levels) {
            hM.sources = hl.levels;
          } else {
            hM.sources = [(0, hL.Z)(hl)];
          }
        }
        for (let ha = 0; ha < hM.sources.length; ha++) {
          var ho;
          var hr = hM.sources[ha];
          if (hr) {
            ho = hr.default;
            hr.default = !!ho && ho.toString() === "true";
            hM.sources[ha].label ||= ha.toString();
            hM.sources[ha] = (0, hL.Z)(hM.sources[ha]);
          }
        }
        hM.sources = hM.sources.filter(Boolean);
        if (!hX(hM.tracks)) {
          hM.tracks = [];
        }
        if (hX(hM.captions)) {
          hM.tracks = hM.tracks.concat(hM.captions);
          delete hM.captions;
        }
        hM.tracks = hM.tracks.map(hV).filter(Boolean);
        return hM;
      };
    },
    7263: (h8, h9, hh) => {
      'use strict';

      hh.d(h9, {
        Z: () => hl
      });
      var hL = hh(1643);
      var hV = hh(7941);
      var hK = hh(6769);
      var hw = hh(6886);
      var hX = hh(328);
      var hg = hh(4446);
      const hl = function () {
        function hM(ha) {
          try {
            const hx = ha.responseXML ? ha.responseXML.childNodes : null;
            let hb;
            let hc = null;
            if (hx) {
              for (let hm = 0; hm < hx.length && (hc = hx[hm]).nodeType === 8; hm++);
              if ((hc = hc && (0, hV.r1)(hc) === "xml" ? hc.nextSibling : hc) && (0, hV.r1)(hc) === "rss") {
                const hB = (0, hK.Z)(hc);
                hb = Object.assign({
                  playlist: hB
                }, hB.feedData);
              }
            }
            if (!hb) {
              try {
                const hA = JSON.parse(ha.responseText);
                if (Array.isArray(hA)) {
                  hb = {
                    playlist: hA
                  };
                } else {
                  if (!Array.isArray(hA.playlist)) {
                    throw Error("Playlist is not an array");
                  }
                  hb = hA;
                }
              } catch (hj) {
                throw new hg.rG(hg.ul, 621, hj);
              }
            }
            ho.trigger(hL.Ow, hb);
          } catch (hF) {
            hr(hF);
          }
        }
        const ho = Object.assign(this, hX.ZP);
        const hr = function (ha) {
          if (ha instanceof hg.rG && !ha.code) {
            ha = new hg.rG(hg.ul, 0);
          }
          ho.trigger(hL.pn, ha);
        };
        this.load = function (ha) {
          (0, hw.h)(ha, hM, (hx, hb, hc, hm) => {
            hr(hm);
          });
        };
        this.destroy = function () {
          this.off();
        };
      };
    },
    8320: (h8, h9, hh) => {
      'use strict';

      hh.d(h9, {
        ZP: () => hB,
        s7: () => hx,
        T5: () => hm,
        YF: () => ha,
        _: () => hb,
        bx: () => hc
      });
      const hL = {
        none: true,
        metadata: true,
        auto: true
      };
      const hV = (hA, hj) => hL[hA] ? hA : hL[hj] ? hj : "metadata";
      var hK = hh(393);
      var hw = hh(6053);
      var hX = hh(2303);
      var hg = hh(4446);
      const hl = (hA, hj) => hA === undefined ? hj : hA;
      const hM = (hA, hj, hF) => {
        if (hF in hj) {
          hA[hF] = hj[hF];
        }
      };
      const ho = (hA, hj) => {
        const hF = hj.attributes;
        const {
          sources: hN,
          allSources: hP,
          preload: hn,
          drm: hS
        } = hA;
        const hp = hl(hA.withCredentials, hF.withCredentials);
        return (hP || hN).map(function (hH) {
          var hk;
          var ht;
          var hq;
          if (hH !== Object(hH)) {
            return null;
          } else {
            hM(hH, hF, "androidhls");
            hM(hH, hF, "hlsjsdefault");
            hM(hH, hF, "safarihlsjs");
            hq = hH;
            hk = hA;
            ht = hF;
            if (!hq.liveSyncDuration) {
              hk = hk.liveSyncDuration ? hk : ht;
              hM(hq, hk, "liveSyncDuration");
            }
            hM(hH, hF, "_hlsjsProgressive");
            hH.preload = hV(hH.preload, hn);
            if (ht = hH.drm || hS || hF.drm) {
              hH.drm = ht;
            }
            if ((hq = hl(hH.withCredentials, hp)) !== undefined) {
              hH.withCredentials = hq;
            }
            return (0, hw.Z)(hH);
          }
        }).filter(Boolean);
      };
      const hr = (hA, hj) => {
        var hF = ((hn, hS) => {
          for (let hk = 0; hk < hn.length; hk++) {
            var hp = hn[hk];
            var hH = hS.choose(hp).providerToCheck;
            if (hH) {
              return {
                type: hp.type,
                provider: hH
              };
            }
          }
          return null;
        })(hA, hj = hj && hj.choose ? hj : new hX.Z());
        if (!hF) {
          return [];
        }
        const hN = hF.provider;
        const hP = hF.type;
        return hA.filter(function (hn) {
          return hn.type === hP && hj.providerSupports(hN, hn);
        });
      };
      const ha = (hA, hj, hF) => {
        var hN = hA.getProviders();
        var hP = hA.get("preload");
        var hn = hA.get("jwStart");
        var hS = Object.assign({}, hj);
        hS.preload = hV(hj.preload, hP);
        hS.allSources = ho(hS, hA);
        hS.sources = hr(hS.allSources, hN);
        if (hS.sources.length) {
          hS.file = hS.sources[0].file;
          hS.feedData = hF;
          if (hn && hn !== -1 && hA.get("generateSEOMetadata")) {
            hS.starttime = hn;
          }
          if (hP = (hj = hS).sources[0].liveSyncDuration) {
            hj.liveSyncDuration = hj.dvrSeekLimit = hP;
          }
          return hj;
        }
      };
      const hx = (hA, hj, hF) => {
        const hN = Object.assign({}, hF);
        delete hN.playlist;
        return hA.map(hP => ha(hj, hP, hN)).filter(Boolean);
      };
      const hb = hA => {
        if (!Array.isArray(hA) || hA.length === 0) {
          throw new hg.rG(hg.ul, 630);
        }
      };
      const hc = (hA, hj) => {
        let hF = (parseInt(hA, 10) || 0) % hj;
        if (hF < 0) {
          hF += hj;
        }
        return hF;
      };
      const hm = (hA, hj) => hr(ho(hA, hj), hj.getProviders());
      const hB = function (hA) {
        return (Array.isArray(hA) ? hA : [hA]).map(hK.Z);
      };
    },
    6053: (h8, h9, hh) => {
      'use strict';

      hh.d(h9, {
        Z: () => hK
      });
      var hL = hh(7034);
      var hV = hh(2957);
      const hK = function (hw) {
        if (hw && hw.file) {
          const hg = Object.assign({}, {
            default: false,
            type: ""
          }, hw);
          hg.file = (0, hV.fy)("" + hg.file);
          var hw = /^[^/]+\/(?:x-)?([^/]+)$/;
          var hX = hg.type;
          if (hw.test(hX)) {
            hg.mimeType = hX;
            hg.type = hX.replace(hw, "$1");
          }
          if ((0, hL.isYouTube)(hg.file)) {
            hg.type = "youtube";
          } else if ((0, hL.isRtmp)(hg.file)) {
            hg.type = "rtmp";
          } else {
            hg.type ||= (0, hV.AO)(hg.file);
          }
          if (hg.type) {
            switch (hg.type) {
              case "m3u8":
              case "vnd.apple.mpegurl":
                hg.type = "hls";
                break;
              case "dash+xml":
                hg.type = "dash";
                break;
              case "m4a":
                hg.type = "aac";
                break;
              case "smil":
                hg.type = "rtmp";
            }
            Object.keys(hg).forEach(function (hl) {
              if (hg[hl] === "") {
                delete hg[hl];
              }
            });
            return hg;
          }
        }
      };
    },
    4101: (h8, h9, hh) => {
      'use strict';

      hh.d(h9, {
        Z: () => hM
      });
      var hL = hh(676);
      var hV = hh(9888);
      var hK = hh(2957);
      var hw = hh(4446);
      var hX = hh(3487);
      function hg(ho) {
        var hr;
        var ha;
        if (typeof ho == "string") {
          if ((hr = (ho = ho.split("?")[0]).indexOf("://")) > 0) {
            return 0;
          } else {
            ha = ho.indexOf("/");
            ho = (0, hK.AO)(ho);
            if (hr >= 0 || ha >= 0 || ho && isNaN(ho)) {
              return 1;
            } else {
              return 2;
            }
          }
        }
      }
      function hl(ho) {
        this.url = ho;
        this.promise_ = null;
      }
      Object.defineProperties(hl.prototype, {
        promise: {
          get() {
            return this.load();
          },
          set() {}
        }
      });
      Object.assign(hl.prototype, {
        load() {
          let ho = this.promise_;
          if (!ho) {
            if (hg(this.url) === 2) {
              return Promise.resolve(this);
            }
            var hr = new hL.ZP((ha => {
              switch (hg(ha)) {
                case 0:
                  return ha;
                case 1:
                  return (0, hV.getAbsolutePath)(ha, window.location.href);
              }
            })(this.url));
            this.loader = hr;
            ho = hr.load().then(() => this);
            this.promise_ = ho;
          }
          return ho;
        },
        registerPlugin(ho, hr, ha) {
          this.name = ho;
          this.target = hr;
          this.js = ha;
        },
        getNewInstance(ho, hr, ha) {
          var hx = this.js;
          if (typeof hx != "function") {
            throw new hw.rG(null, (0, hX.bX)(this.url) + 100);
          }
          const hb = new hx(ho, hr, ha);
          const hc = {
            type: "pluginInitialized",
            name: this.name,
            config: hr
          };
          hb.addToPlayer = function (hm = false) {
            var hB = this.getContainer().querySelector(".jw-overlays");
            if (hB) {
              ha.left = hB.style.left;
              ha.top = hB.style.top;
              hB.appendChild(ha);
              if (hm) {
                this.trigger("pluginInitialized", hc);
              } else {
                setTimeout(() => this.trigger("pluginInitialized", hc), 0);
              }
              return hb;
            }
          };
          hb.resizeHandler = function () {
            var hm = this.getContainer().querySelector(".jw-overlays");
            if (hm) {
              hb.resize(hm.clientWidth, hm.clientHeight);
            }
          };
          return hb;
        }
      });
      const hM = hl;
    },
    1241: (h8, h9, hh) => {
      'use strict';

      hh.d(h9, {
        ZP: () => function (hr, ha) {
          var hx = hr.get("plugins");
          window.jwplayerPluginJsonp = hM;
          return (hr.pluginLoader = hr.pluginLoader || new hK()).load(ha, hl, hx, hr).then(hb => {
            if (!hr.attributes._destroyed) {
              delete window.jwplayerPluginJsonp;
              return hb;
            }
          });
        },
        fo: () => hM,
        Ve: () => ho
      });
      var hL = hh(4446);
      var hV = hh(3487);
      const hK = function () {
        this.load = function (hr, ha, hx, hb) {
          if (hx && typeof hx == "object") {
            return Promise.all(Object.keys(hx).filter(hc => hc).map(hc => {
              const hm = hx[hc];
              return ha.setupPlugin(hc).then(hB => {
                if (!hb.attributes._destroyed) {
                  return (0, hV.MK)(hB, hm, hr);
                }
              }).catch(hB => {
                ha.removePlugin(hc);
                if (hB.code) {
                  return hB;
                } else {
                  return new hL.rG(null, (0, hV.bX)(hc), hB);
                }
              });
            }));
          } else {
            return Promise.resolve();
          }
        };
      };
      var hw = hh(4101);
      var hX = hh(5499);
      const hg = {};
      const hl = new class {
        setupPlugin(hr) {
          var ha = this.getPlugin(hr);
          if (ha) {
            if (ha.url !== hr) {
              (0, hX.c)("JW Plugin \"" + (0, hV.Nq)(hr) + "\" already loaded from \"" + ha.url + "\". Ignoring \"" + hr + ".\"");
            }
            return ha.promise;
          } else {
            return this.addPlugin(hr).load();
          }
        }
        addPlugin(hr) {
          var ha = (0, hV.Nq)(hr);
          let hx = hg[ha];
          if (!hx) {
            hx = new hw.Z(hr);
            hg[ha] = hx;
          }
          return hx;
        }
        getPlugin(hr) {
          return hg[(0, hV.Nq)(hr)];
        }
        removePlugin(hr) {
          delete hg[(0, hV.Nq)(hr)];
        }
        getPlugins() {
          return hg;
        }
      }();
      const hM = function (hr, ha, hx) {
        var hb = hl.addPlugin(hr);
        if (!hb.js) {
          hb.registerPlugin(hr, ha, hx);
        }
      };
      const ho = async (hr, ha, hx) => {
        var hb = (0, hV.Nq)(hr);
        var hc = hl.getPlugin(hb);
        if (hc) {
          return (0, hV.MK)(hc, ha, hx);
        }
        let hm = hb === hr ? hr : hr;
        return hl.setupPlugin(hm).then(hB => (0, hV.MK)(hB, ha, hx));
      };
    },
    7164: (h8, h9, hh) => {
      'use strict';

      hh.d(h9, {
        MK: () => hw,
        Nq: () => hV,
        bX: () => hK
      });
      var hL = hh(5950);
      const hV = function (hX) {
        var hg = /\/((.(?!\/))+?)\.js/i.exec(hX);
        var hg = (hg == null ? undefined : hg[1]) || hX;
        if (hg && hg === "jwpsrv-dnt") {
          return "jwpsrv";
        } else {
          return hg;
        }
      };
      const hK = hX => 305000;
      const hw = (hX, hg, hl) => {
        var hM = hX.name;
        var hg = Object.assign({}, hg, (0, hL.vl)(hX.url));
        var ho = document.createElement("div");
        ho.id = hl.id + "_" + hM;
        ho.className = "jw-plugin jw-reset";
        var hX = hX.getNewInstance(hl, hg, ho);
        hl.addPlugin(hM, hX);
        return hX;
      };
    },
    7683: (h8, h9, hh) => {
      'use strict';

      hh.d(h9, {
        V: () => hK,
        Z: () => function () {
          const hw = hL.Jx;
          const hX = [];
          const hg = [];
          for (let hr = 0; hr < hw; hr++) {
            const ha = hK();
            hX.push(ha);
            hg.push(ha);
            hV(ha);
          }
          const hl = hg.shift();
          const hM = hg.shift();
          let ho = false;
          return {
            primed: () => ho,
            prime() {
              hX.forEach(hV);
              ho = true;
            },
            played() {
              ho = true;
            },
            getPrimedElement: () => hg.shift() || null,
            getAdElement: () => hl,
            getTestElement: () => hM,
            clean(hx) {
              if (hx.src) {
                hx.removeAttribute("src");
                try {
                  hx.load();
                } catch (hb) {}
              }
            },
            recycle(hx) {
              if (hx && !hg.some(hb => hb === hx)) {
                this.clean(hx);
                hg.push(hx);
              }
            },
            syncVolume(hx) {
              const hb = Math.min(Math.max(0, hx / 100), 1);
              hX.forEach(hc => {
                hc.volume = hb;
              });
            },
            syncMute(hx) {
              hX.forEach(hb => {
                hb.muted = hx;
              });
            }
          };
        }
      });
      var hL = hh(658);
      const hV = hw => {
        if (!hw.src) {
          hw.load();
        }
      };
      const hK = hw => {
        const hX = document.createElement("video");
        hX.className = "jw-video jw-reset";
        hX.setAttribute("tabindex", "-1");
        hX.setAttribute("disableRemotePlayback", "");
        hX.setAttribute("webkit-playsinline", "");
        hX.setAttribute("playsinline", "");
        if (hw) {
          Object.keys(hw).forEach(hg => {
            hX.setAttribute(hg, hw[hg]);
          });
        }
        return hX;
      };
    },
    658: (h8, h9, hh) => {
      'use strict';

      hh.d(h9, {
        HB: () => hK,
        Jx: () => hL,
        l_: () => hV
      });
      const hL = 4;
      const hV = 5;
      const hK = 1;
    },
    4609: (h8, h9, hh) => {
      'use strict';

      hh.d(h9, {
        Z: () => function (hL, hV) {
          return Object.assign({}, hV, {
            prime() {
              if (!hL.src) {
                hL.load();
              }
            },
            getPrimedElement: () => hL,
            clean() {
              hV.clean(hL);
            },
            recycle() {
              hV.clean(hL);
            }
          });
        }
      });
    },
    6528: (h8, h9, hh) => {
      'use strict';

      hh.d(h9, {
        Z: () => hg
      });
      var hL = hh(1643);
      var hV = hh(1384);
      function hK() {}
      const hw = () => false;
      const hX = {
        name: "default"
      };
      const hg = {
        supports: hw,
        play: hK,
        pause: hK,
        preload: hK,
        load: hK,
        stop: hK,
        volume: hK,
        mute: hK,
        seek: hK,
        resize: hK,
        remove: hK,
        destroy: hK,
        setVisibility: hK,
        setFullscreen(hl) {
          return (0, hV.CX)(this, hl);
        },
        getFullscreen: hw,
        supportsFullscreen: hw,
        getContainer: hK,
        setContainer: hK,
        getName: () => hX,
        getQualityLevels: hK,
        getCurrentQuality: hK,
        setCurrentQuality: hK,
        getAudioTracks: hK,
        getCurrentAudioTrack: hK,
        setCurrentAudioTrack: hK,
        getSeekRange() {
          return {
            start: 0,
            end: this.getDuration()
          };
        },
        setPlaybackRate: hK,
        getPlaybackRate: () => 1,
        getBandwidthEstimate: () => null,
        getLiveLatency: () => null,
        attachMedia: hK,
        detachMedia: hK,
        init: hK,
        setState(hl) {
          this.state = hl;
          this.trigger(hL.uc, {
            newstate: hl
          });
        },
        sendMediaType(hl) {
          var {
            type: hl,
            mimeType: hM
          } = hl[0];
          var hl = hl === "aac" || hl === "mp3" || hl === "mpeg" || hM && hM.indexOf("audio/") === 0;
          this.trigger(hL.oZ, {
            mediaType: hl ? "audio" : "video"
          });
        },
        getDuration: () => 0,
        trigger: hK
      };
    },
    1628: (h8, h9, hh) => {
      'use strict';

      hh.d(h9, {
        V: () => hV
      });
      var hL = hh(8348);
      const hV = hK => hK.type === "hls" && hL.OS.android ? hK.androidhls !== false && !hL.Browser.firefox && parseFloat(hL.OS.version.version || "0") >= 4.4 : null;
    },
    12: (h8, h9, hh) => {
      'use strict';

      hh.d(h9, {
        U: () => hL
      });
      const hL = {};
    },
    670: (h8, h9, hh) => {
      'use strict';

      hh.d(h9, {
        Z: () => function (hX) {
          var hg = hX.getName().name;
          if (!hL.U[hg]) {
            if (!(0, hw.sE)(hV.B, (0, hw.wB)({
              name: hg
            }))) {
              if (!(0, hw.mf)(hX.supports)) {
                throw new Error("Tried to register a provider with an invalid object");
              }
              hV.B.unshift({
                name: hg,
                supports: hX.supports
              });
            }
            (0, hw.ce)(hX.prototype, hK.Z);
            hL.U[hg] = hX;
          }
        }
      });
      var hL = hh(12);
      var hV = hh(2963);
      var hK = hh(6528);
      var hw = hh(6042);
      hh(328);
    },
    6593: (h8, h9, hh) => {
      'use strict';

      hh.d(h9, {
        B: () => hg,
        H: () => hX
      });
      var hL = hh(1628);
      var hV = hh(7034);
      var hK = hh(9025);
      const hw = {
        aac: "audio/mp4",
        mp4: "video/mp4",
        f4v: "video/mp4",
        m4v: "video/mp4",
        mov: "video/mp4",
        mp3: "audio/mpeg",
        mpeg: "audio/mpeg",
        ogv: "video/ogg",
        ogg: "video/ogg",
        oga: "video/ogg",
        vorbis: "video/ogg",
        webm: "video/webm",
        f4a: "video/aac",
        m3u8: "application/vnd.apple.mpegurl",
        m3u: "application/vnd.apple.mpegurl",
        hls: "application/vnd.apple.mpegurl"
      };
      const hX = hl => {
        if (!hK.Z || !hK.Z.canPlayType) {
          return false;
        }
        if ((0, hL.V)(hl) === false) {
          return false;
        }
        var hM = hl.file;
        var ho = hl.type;
        if ((0, hV.isRtmp)(hM, ho)) {
          return false;
        }
        let hr = hl.mimeType || hw[ho];
        return !!hr && ((hM = hl.mediaTypes) != null && hM.length && (hr = [hr].concat(hM.slice()).join("; ")), Boolean(hK.Z.canPlayType(hr)));
      };
      const hg = [{
        name: "html5",
        supports: hX
      }];
    },
    1384: (h8, h9, hh) => {
      'use strict';

      hh.d(h9, {
        CX: () => hl,
        IP: () => ho,
        If: () => hg,
        Nm: () => hM
      });
      var hL = hh(1643);
      let hV;
      let hK;
      let hw = false;
      function hX(hr, ha, hx) {
        hw = hx;
        hr.trigger(hL.h7, {
          target: ha.target,
          jwstate: hx
        });
      }
      const hg = () => hw;
      const hl = function (hr, ha) {
        if (ha = Boolean(ha)) {
          try {
            const hb = hr.video.webkitEnterFullscreen || hr.video.webkitEnterFullScreen;
            if (hb) {
              hb.apply(hr.video);
            }
          } catch (hc) {
            return false;
          }
          return hr.getFullscreen();
        }
        var hx = hr.video.webkitExitFullscreen || hr.video.webkitExitFullScreen;
        if (hx) {
          hx.apply(hr.video);
        }
        return ha;
      };
      const hM = function (hr, ha) {
        hV = hx => hX(hr, hx, true);
        hK = hx => hX(hr, hx, false);
        ha.addEventListener("webkitbeginfullscreen", hV);
        ha.addEventListener("webkitendfullscreen", hK);
      };
      const ho = hr => {
        hr.removeEventListener("webkitbeginfullscreen", hV);
        hr.removeEventListener("webkitendfullscreen", hK);
      };
    },
    6875: (h8, h9, hh) => {
      'use strict';

      hh.d(h9, {
        Z: () => hL
      });
      const hL = "hidden" in document ? function () {
        return !document.hidden;
      } : "webkitHidden" in document ? function () {
        return !document.webkitHidden;
      } : function () {
        return true;
      };
    },
    6886: (h8, h9, hh) => {
      'use strict';

      hh.d(h9, {
        E: () => hX,
        h: () => hr
      });
      var hL = hh(9888);
      var hV = hh(7034);
      var hK = hh(4446);
      function hw() {}
      const hX = ha => {
        ha.onload = null;
        ha.onprogress = null;
        ha.onreadystatechange = null;
        ha.onerror = null;
        if ("abort" in ha) {
          ha.abort();
        }
      };
      const hg = (ha, hx, hb, hc) => {
        ha.onerror(hx, ha.url, ha.xhr, new hK.rG(hx, hb, hc));
      };
      const hl = (ha, hx, hb) => {
        var hc = hx.documentElement;
        if (!hb.requireValidXML || hc.nodeName !== "parsererror" && !hc.getElementsByTagName("parsererror").length) {
          if (!ha.responseXML) {
            ha = Object.assign({}, ha, {
              responseXML: hx
            });
          }
          return hb.oncomplete(ha);
        }
        hg(hb, hK.ul, 601);
      };
      const hM = ha => function (hx) {
        hx = hx.currentTarget || ha.xhr;
        clearTimeout(ha.timeoutId);
        if (ha.responseType) {
          if (ha.responseType === "json") {
            var hb = hx;
            var hc = ha;
            if (!hb.response || typeof hb.response == "string" && hb.responseText.substr(1) !== "\"") {
              try {
                hb = Object.assign({}, hb, {
                  response: JSON.parse(hb.responseText)
                });
              } catch (hm) {
                hg(hc, hK.ul, 611, hm);
                return;
              }
            }
            return hc.oncomplete(hb);
            return;
          }
        } else {
          let hB;
          let hA = hx.responseXML;
          if (hA) {
            try {
              hB = hA.firstChild;
            } catch (hj) {}
          }
          if (hA && hB) {
            return hl(hx, hA, ha);
          }
          if (ha.useDomParser && hx.responseText && !hA && (hA = (0, hL.parseXML)(hx.responseText)) != null && hA.firstChild) {
            return hl(hx, hA, ha);
          }
          if (ha.requireValidXML) {
            hg(ha, hK.ul, 602);
            return;
          }
        }
        ha.oncomplete(hx);
      };
      let ho;
      const hr = (ha, hx, hb, hc) => {
        var hm;
        let hB;
        if (ha === Object(ha)) {
          ha = (hc = ha).url;
        }
        const hA = Object.assign({
          xhr: null,
          url: ha,
          withCredentials: false,
          retryWithoutCredentials: false,
          timeout: 60000,
          timeoutId: -1,
          oncomplete: hx || hw,
          onerror: hb || hw,
          mimeType: hc && !hc.responseType ? "text/xml" : "",
          requireValidXML: false,
          responseType: hc != null && hc.plainText ? "text" : "",
          useDomParser: false,
          requestFilter: null
        }, hc);
        const hj = ho("Error loading file", hA);
        if ("XMLHttpRequest" in window) {
          hB = hA.xhr = hA.xhr || new window.XMLHttpRequest();
          if (typeof hA.requestFilter == "function") {
            let hF;
            try {
              hF = hA.requestFilter({
                url: ha,
                xhr: hB
              });
            } catch (hN) {
              hj(hN, 5);
              return hB;
            }
            if (hF && "open" in hF && "send" in hF) {
              hB = hA.xhr = hF;
            }
          }
          hm = hA;
          hB.onreadystatechange = function (hP) {
            var hn = hP.currentTarget || hm.xhr;
            if (hn.readyState === 4) {
              clearTimeout(hm.timeoutId);
              hn = hn.status;
              if (hn < 400) {
                if (hn === 200) {
                  return hM(hm)(hP);
                } else {
                  if (hn === 0 && (0, hV.isFileProtocol)() && !/^[a-z][a-z0-9+.-]*:/.test(hm.url)) {
                    hg(hm, hK.ul, 7);
                  }
                  return;
                }
              }
              hg(hm, hK.ul, hn < 600 ? hn : 6);
            }
          };
          hB.onerror = hj;
          if ("overrideMimeType" in hB) {
            if (hA.mimeType) {
              hB.overrideMimeType(hA.mimeType);
            }
          } else {
            hA.useDomParser = true;
          }
          try {
            ha = ha.replace(/#.*$/, "");
            hB.open("GET", ha, true);
          } catch (hP) {
            hj(hP, 3);
            return hB;
          }
          if (hA.responseType) {
            try {
              hB.responseType = hA.responseType;
            } catch (hn) {}
          }
          if (hA.timeout) {
            hA.timeoutId = setTimeout(function () {
              hX(hB);
              hg(hA, hK.ud, 1);
            }, hA.timeout);
            hB.onabort = function () {
              clearTimeout(hA.timeoutId);
            };
          }
          try {
            if (hA.withCredentials && "withCredentials" in hB) {
              hB.withCredentials = true;
            }
            hB.send();
          } catch (hS) {
            hj(hS, 4);
          }
          return hB;
        }
        hg(hA, hK.ud, 2);
      };
      ho = (ha, hx) => function (hb, hc) {
        var hm = hb.currentTarget || hx.xhr;
        clearTimeout(hx.timeoutId);
        if (hx.retryWithoutCredentials && hx.xhr.withCredentials) {
          hX(hm);
          const hB = Object.assign({}, hx, {
            xhr: null,
            withCredentials: false,
            retryWithoutCredentials: false
          });
          hr(hB);
        } else {
          if (!hc && hm.status >= 400 && hm.status < 600) {
            hc = hm.status;
          }
          hg(hx, hc ? hK.ul : hK.ud, hc || 6, hb);
        }
      };
    },
    328: (h8, h9, hh) => {
      'use strict';

      hh.d(h9, {
        IH: () => hl,
        S1: () => hM,
        X$: () => ho,
        ZP: () => hX,
        on: () => hg,
        wj: () => hr
      });
      function hL(ha, hx) {
        if (ha == null) {
          throw new TypeError("Cannot convert undefined or null to object");
        }
        return Object.prototype.hasOwnProperty.call(Object(ha), hx);
      }
      const hV = (ha, hx, hb, hc) => {
        let hm = -1;
        const hB = ha.length;
        while (++hm < hB) {
          const hA = ha[hm];
          if (hc) {
            try {
              hA.callback.apply(hA.context || hb, hx);
            } catch (hj) {
              console.log("Error in \"" + hc + "\" event handler:", hj);
            }
          } else {
            hA.callback.apply(hA.context || hb, hx);
          }
        }
      };
      const hK = /\s+/;
      const hw = (ha, hx, hb, hc) => {
        if (hb) {
          if (typeof hb == "object") {
            for (const hm in hb) {
              if (hL(hb, hm)) {
                ha[hx].apply(ha, [hm, hb[hm]].concat(hc));
              }
            }
            return false;
          }
          if (hK.test(hb)) {
            const hB = hb.split(hK);
            for (let hA = 0, hj = hB.length; hA < hj; hA++) {
              ha[hx].apply(ha, [hB[hA]].concat(hc));
            }
            return false;
          }
        }
        return true;
      };
      class hX {
        on(ha, hx, hb) {
          if (hw(this, "on", ha, [hx, hb]) && hx) {
            ((this._events ||= {})[ha] ||= []).push({
              callback: hx,
              context: hb
            });
          }
          return this;
        }
        once(ha, hx, hb) {
          if (!hw(this, "once", ha, [hx, hb]) || !hx) {
            return this;
          }
          let hc = 0;
          function hm() {
            if (!hc++) {
              hB.off(ha, hm);
              hx.apply(this, arguments);
            }
          }
          const hB = this;
          hm._callback = hx;
          return this.on(ha, hm, hb);
        }
        off(ha, hx, hb) {
          if (this._events && hw(this, "off", ha, [hx, hb])) {
            if (ha || hx || hb) {
              const hB = ha ? [ha] : Object.keys(this._events);
              for (let hA = 0, hj = hB.length; hA < hj; hA++) {
                ha = hB[hA];
                var hc = this._events[ha];
                if (hc) {
                  const hF = this._events[ha] = [];
                  if (hx || hb) {
                    for (let hN = 0, hP = hc.length; hN < hP; hN++) {
                      var hm = hc[hN];
                      if (hx && hx !== hm.callback && hx !== hm.callback._callback || hb && hb !== hm.context) {
                        hF.push(hm);
                      }
                    }
                  }
                  if (!hF.length) {
                    delete this._events[ha];
                  }
                }
              }
            } else {
              delete this._events;
            }
          }
          return this;
        }
        trigger(ha, ...hx) {
          var hb;
          if (this._events && hw(this, "trigger", ha, hx) && (ha = this._events[ha], hb = this._events.all, ha && hV(ha, hx, this), hb)) {
            hV(hb, arguments, this);
          }
          return this;
        }
        triggerSafe(ha, ...hx) {
          var hb;
          var hc;
          if (this._events && hw(this, "trigger", ha, hx) && (hb = this._events[ha], hc = this._events.all, hb && hV(hb, hx, this, ha), hc)) {
            hV(hc, arguments, this, ha);
          }
          return this;
        }
      }
      const hg = hX.prototype.on;
      const hl = hX.prototype.once;
      const hM = hX.prototype.off;
      const ho = hX.prototype.trigger;
      const hr = hX.prototype.triggerSafe;
      hX.on = hg;
      hX.once = hl;
      hX.off = hM;
      hX.trigger = ho;
    },
    2268: (h8, h9, hh) => {
      'use strict';

      hh.d(h9, {
        A: () => ho,
        DF: () => hl,
        Dt: () => hB,
        G6: () => hc,
        NO: () => hN,
        O7: () => hA,
        Q6: () => ha,
        cL: () => hF,
        dI: () => hP,
        gn: () => hm,
        i7: () => hx,
        id: () => hg,
        pZ: () => hK,
        tq: () => hj,
        un: () => hM,
        w1: () => hb,
        xb: () => hw,
        yS: () => hr,
        zc: () => hX
      });
      const hL = hn => navigator.userAgent.match(hn) !== null;
      const hV = () => navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1;
      const hK = () => hL(/firefox\//i);
      const hw = () => hL(/iP(hone|od)/i);
      const hX = () => hL(/iPad/i) || hV();
      const hg = () => hL(/Macintosh/i) && !hV();
      const hl = () => hL(/FBAV/i);
      const hM = () => hL(/\sEdge?\/\d+/i);
      const ho = () => hL(/msie/i);
      const hr = () => hL(/SMART-TV/);
      const ha = () => hr() && !hL(/SamsungBrowser/);
      const hx = () => hL(/\s(?:(?:Headless)?Chrome|CriOS)\//i) && !hM() && !hL(/UCBrowser/i);
      const hb = () => !hL(/\sEdg\/\d+/i) && (hM() || hL(/trident\/.+rv:\s*11/i) || ho());
      const hc = () => hL(/safari/i) && !hL(/(?:Chrome|CriOS|chromium|android|phantom)/i) && !hr();
      const hm = () => hL(/iP(hone|ad|od)/i) || hV();
      const hB = function () {
        if (typeof hB.mock_ == "boolean") {
          return hB.mock_;
        } else {
          return hL(/Android/i) && !hL(/Windows Phone/i);
        }
      };
      const hA = () => (!hL(/chrome\/[123456789]/i) || !!hL(/chrome\/18/i) || !!hK()) && hB();
      hB.mock_ = null;
      const hj = () => hm() || hB() || hL(/Windows Phone/i);
      const hF = function () {
        if (typeof hF.mock_ == "boolean") {
          return hF.mock_;
        }
        try {
          return window.self !== window.top;
        } catch (hn) {
          return true;
        }
      };
      hF.mock_ = null;
      const hN = () => false;
      const hP = () => 0;
    },
    8381: (h8, h9, hh) => {
      'use strict';

      hh.d(h9, {
        $W: () => hw,
        Mf: () => hg,
        T2: () => hl,
        _b: () => hX
      });
      var hL = hh(8518);
      var hV = hh(2557);
      var hK = hh(4446);
      const hw = function (hM, ho) {
        const hr = [];
        if (hM && hM.timestamps && hM.timestamps.length) {
          const ha = hM.timestamps.sort((hx, hb) => hx.begin - hb.begin);
          ha.forEach((hx, hb) => {
            var hc = ((hA, hj = "en") => {
              let hF = (0, hL.G3)();
              var hN = Object.keys(hA.title);
              var hP = hN[0];
              for (; !hA.title[hF];) {
                const hn = hN.find((hp => hH => hH.indexOf(hp) === 0)(hF));
                if (hn) {
                  hF = hn;
                  break;
                }
                const hS = hF.lastIndexOf("-");
                if (hS <= 0) {
                  hF = null;
                  break;
                }
                hF = hF.slice(0, hS);
              }
              return hF || (hN.indexOf(hj) >= 0 ? hj : hP);
            })(hx, hM.defaultLanguage);
            var hc = hx.title[hc];
            var hm = hx.time;
            var hx = hx.image;
            let hB = ho;
            hm = {
              begin: hm,
              end: hB = hb + 1 < ha.length ? ha[hb + 1].time : hB,
              text: hc,
              cueType: "chapters"
            };
            if (hx) {
              hm.image = hx;
            }
            hr.push(hm);
          });
        }
        return hr;
      };
      const hX = function (hM, ho) {
        const hr = (0, hL.G3)();
        const ha = hM.reduce(function (hx, hb) {
          var hc;
          if (!hb || !hb.cueType || hb.cueType === "chapters") {
            (hc = new hV.u({
              time: hb.begin,
              image: hb.image
            })).addTitle(hr, hb.text);
            hx.push(hc);
          }
          return hx;
        }, []);
        if (ho) {
          ho.timestamps = ha;
          return ho;
        } else {
          return new hV.t(hr, ha);
        }
      };
      const hg = function (hM, ho) {
        if (typeof hM != "number" || hM < 0 || !ho || !ho.length) {
          return null;
        }
        let hr = null;
        for (let hx = 0; hx < ho.length; hx++) {
          var ha = ho[hx];
          if (ha.time <= hM) {
            if (!hr || ha.time > hr.time) {
              hr = ha;
            }
          }
        }
        return hr;
      };
      const hl = function (hM, ho) {
        let hr = true;
        hM.forEach(ha => {
          if (!!ha && (!ha.defaultLanguage || !ha.timestamps || !!ha.timestamps.some(hx => !hx.title || hx.time === null || hx.time === undefined))) {
            hr = false;
          }
        });
        return ho(hr ? null : (0, hK.l9)(new Error(), hK.aD));
      };
    },
    974: (h8, h9, hh) => {
      'use strict';

      hh.d(h9, {
        HY: () => ho,
        iv: () => hg,
        oB: () => hX,
        oI: () => hw,
        vs: () => hl
      });
      function hL(hr, ha) {
        if (hr == null) {
          throw new TypeError("Cannot convert undefined or null to object");
        }
        return Object.prototype.hasOwnProperty.call(Object(hr), ha);
      }
      var hV = hh(2957);
      var h9 = hh(9563);
      var hK = hh.n(h9);
      const hw = hK().clear;
      const hX = (hr, ha) => {
        if (hr != null) {
          let hA;
          if (hr.length === undefined) {
            hr = [hr];
          }
          var hx;
          var hb;
          var hc = {};
          for (hA in ha) {
            if (hL(ha, hA)) {
              hx = hA;
              hb = ha[hA];
              hc[hA] = hb === "" || hb == null ? "" : typeof hb == "string" && isNaN(hb) ? /png|gif|jpe?g/i.test(hb) && hb.indexOf("url") < 0 ? "url(" + hb + ")" : hb : hb === 0 || hx === "z-index" || hx === "opacity" ? "" + hb : /color/i.test(hx) ? "#" + (0, hV.vk)(hb.toString(16).replace(/^0x/i, ""), 6) : Math.ceil(hb) + "px";
            }
          }
          for (let hj = 0; hj < hr.length; hj++) {
            var hm;
            var hB = hr[hj];
            if (hB != null) {
              for (hA in hc) {
                if (hL(hc, hA) && (hm = (hF => {
                  hF = hF.split("-");
                  for (let hN = 1; hN < hF.length; hN++) {
                    hF[hN] = hF[hN].charAt(0).toUpperCase() + hF[hN].slice(1);
                  }
                  return hF.join("");
                })(hA), hB.style[hm] !== hc[hA])) {
                  hB.style[hm] = hc[hA];
                }
              }
            }
          }
        }
      };
      const hg = (hr, ha, hx, hb) => {
        hx = hx || "all-players";
        let hc = "";
        if (typeof ha == "object") {
          const hm = document.createElement("div");
          hX(hm, ha);
          let hB = hm.style.cssText;
          if (hL(ha, "content")) {
            hB = hB && hB + " content: \"" + ha.content + "\";";
          }
          if (hb) {
            hB = hB && hB.replace(/;/g, " !important;");
          }
          hc = "{" + hB + "}";
        } else if (typeof ha == "string") {
          hc = ha;
        }
        if (hc !== "" && hc !== "{}") {
          hK().style([[hr, hr + hc]], hx);
        } else {
          hK().clear(hx, hr);
        }
      };
      const hl = (hr, ha) => {
        hX(hr, {
          transform: ha
        });
      };
      let hM;
      const ho = (hr, ha) => {
        let hx = "rgb";
        var hb = ha !== undefined && ha !== 100;
        if (hb) {
          hx += "a";
        }
        if (!hM) {
          const hc = document.createElement("canvas");
          hc.height = 1;
          hc.width = 1;
          hM = hc.getContext("2d", {
            willReadFrequently: true
          });
        }
        if (hr) {
          if (!isNaN(parseInt(hr, 16))) {
            hr = "#" + hr;
          }
        } else {
          hr = "#000000";
        }
        hM.clearRect(0, 0, 1, 1);
        hM.fillStyle = hr;
        hM.fillRect(0, 0, 1, 1);
        hr = hM.getImageData(0, 0, 1, 1).data;
        hx += "(" + hr[0] + ", " + hr[1] + ", " + hr[2];
        if (hb) {
          hx += ", " + ha / 100;
        }
        return hx + ")";
      };
    },
    5004: (h8, h9, hh) => {
      'use strict';

      hh.d(h9, {
        z: () => hL
      });
      const hL = Date.now || function () {
        return new Date().getTime();
      };
    },
    2799: (h8, h9, hh) => {
      'use strict';

      hh.d(h9, {
        A8: () => hk,
        AH: () => hq,
        EU: () => hb,
        FK: () => hm,
        IV: () => hN,
        L_: () => hP,
        P$: () => hS,
        SH: () => ht,
        UM: () => hy,
        Ww: () => hZ,
        az: () => hx,
        bJ: () => ha,
        cS: () => hH,
        cn: () => hF,
        gB: () => hr,
        i3: () => hu,
        kq: () => hp,
        nG: () => hW,
        nh: () => hc,
        oH: () => hM,
        og: () => hn,
        pv: () => hl,
        s1: () => hj
      });
      var hL = hh(2957);
      var hV = hh(6042);
      var hK = hh(8348);
      const hw = window.DOMParser;
      let hX;
      let hg = true;
      const hl = (hG, hE) => hG.classList.contains(hE);
      const hM = hG => {
        var hE = hG.querySelectorAll("script,object,iframe,meta");
        for (let hv = hE.length; hv--;) {
          var hz = hE[hv];
          hz.parentNode.removeChild(hz);
        }
        return hG;
      };
      const ho = /^((((https?):\/\/)|(mailto:))(%[0-9A-Fa-f]{2}|[-()_.!~*';/?:@&=+$,A-Za-z0-9])+)([).!';/?:,][[:blank:|:blank:]])?$/;
      const hr = hG => {
        var hE = hG.attributes;
        for (let hi = hE.length; hi--;) {
          var hz;
          var hv = hE[hi].name;
          if (/^on/.test(hv)) {
            hG.removeAttribute(hv);
          }
          if (/href/.test(hv)) {
            hz = hE[hi].value;
            if (!!/javascript:|javascript&colon;/.test(hz) || !ho.test(hz)) {
              hG.removeAttribute(hv);
              console.warn("Invalid or unsafe URL");
            }
          }
        }
        return hG;
      };
      const ha = hG => {
        hG = hG;
        if (!hX) {
          hX = new hw();
          hg = (() => {
            try {
              if (hX.parseFromString("", "text/html")) {
                return true;
              }
            } catch (hi) {}
            return false;
          })();
        }
        const hE = (hg ? hX.parseFromString(hG, "text/html") : (hz = document.implementation.createHTMLDocument(""), hG.toLowerCase().indexOf("<!doctype") > -1 ? hz.documentElement.innerHTML = hG : hz.body.innerHTML = hG, hz)).body;
        hM(hE);
        var hz;
        var hv = hE.querySelectorAll("*");
        for (let hi = hv.length; hi--;) {
          const hT = hv[hi];
          hr(hT);
        }
        return hE;
      };
      const hx = hG => ha(hG).firstChild;
      const hb = hG => {
        while (hG.firstChild) {
          hG.removeChild(hG.firstChild);
        }
      };
      const hc = (hG, hE) => {
        hb(hG);
        if (hE) {
          var hz = document.createDocumentFragment();
          var hv = ha(hE).childNodes;
          for (let hi = 0; hi < hv.length; hi++) {
            hz.appendChild(hv[hi].cloneNode(true));
          }
          hG.appendChild(hz);
        }
      };
      const hm = hG => hG + (hG.toString().indexOf("%") > 0 ? "" : "px");
      const hB = hG => (0, hV.HD)(hG.className) ? hG.className.split(" ") : [];
      const hA = (hG, hE) => {
        hE = (0, hL.fy)(hE);
        if (hG.className !== hE) {
          hG.className = hE;
        }
      };
      const hj = hG => hG.classList || hB(hG);
      const hF = (hG, hE) => {
        const hz = hB(hG);
        (Array.isArray(hE) ? hE : hE.split(" ")).forEach(function (hv) {
          if (!(0, hV.r3)(hz, hv)) {
            hz.push(hv);
          }
        });
        hA(hG, hz.join(" "));
      };
      const hN = (hG, hE) => {
        var hz = hB(hG);
        var hE = Array.isArray(hE) ? hE : hE.split(" ");
        hA(hG, (0, hV.e5)(hz, hE).join(" "));
      };
      const hP = (hG, hE, hz) => {
        let hv = hG.className || "";
        if (hE.test(hv)) {
          hv = hv.replace(hE, hz);
        } else if (hz) {
          hv += " " + hz;
        }
        hA(hG, hv);
      };
      const hn = (hG, hE, hz) => {
        var hv = hl(hG, hE);
        if ((hz = (0, hV.jn)(hz) ? hz : !hv) !== hv) {
          (hz ? hF : hN)(hG, hE);
        }
      };
      const hS = (hG, hE, hz) => {
        hG.setAttribute(hE, hz);
      };
      const hp = hG => {
        var hE = document.createElement("link");
        hE.rel = "stylesheet";
        hE.href = hG;
        document.getElementsByTagName("head")[0].appendChild(hE);
      };
      const hH = hG => {
        if (hG) {
          hb(hG);
        }
      };
      const hk = hG => {
        var hE;
        var hz;
        var hv = {
          left: 0,
          right: 0,
          width: 0,
          height: 0,
          top: 0,
          bottom: 0
        };
        if (hG && document.body.contains(hG) && (hG = hG.getBoundingClientRect(), hE = window.pageYOffset, hz = window.pageXOffset, hG.width || hG.height || hG.left || hG.top)) {
          hv.left = hG.left + hz;
          hv.right = hG.right + hz;
          hv.top = hG.top + hE;
          hv.bottom = hG.bottom + hE;
          hv.width = hG.right - hG.left;
          hv.height = hG.bottom - hG.top;
        }
        return hv;
      };
      const ht = (hG, hE) => {
        hG.insertBefore(hE, hG.firstChild);
      };
      const hq = hG => hG.nextElementSibling;
      const hu = hG => hG.previousElementSibling;
      const hW = (hG, hE, hz = {}, hv = document) => {
        if (ho.test(hG)) {
          let hi = hv.createElement("a");
          hi.href = hG;
          hi.target = hE;
          hi = hr(Object.assign(hi, hz));
          if (hK.Browser.firefox) {
            hi.dispatchEvent(new MouseEvent("click", {
              bubbles: true,
              cancelable: true,
              view: window
            }));
          } else {
            hi.click();
          }
        }
      };
      const hy = () => {
        var hG = window.screen.orientation;
        return !!hG && (hG.type === "landscape-primary" || hG.type === "landscape-secondary") || window.orientation === 90 || window.orientation === -90;
      };
      const hZ = hG => {
        hG = hG;
        (hE = document.createElement("textarea")).innerHTML = hG;
        return hE.value.replace(/&|<|>|"|''/gm, function (hz) {
          return "&#" + hz.charCodeAt(0) + ";";
        }).replace(/&#60;(\/?)(b|strong|i|em|p|br|ul|ol|li|h.)&#62;/gim, "<$1$2>");
        var hE;
      };
    },
    4429: (h8, h9, hh) => {
      'use strict';

      hh.d(h9, {
        Z: () => hc
      });
      var h9 = hh(1569);
      var hL = hh(7034);
      var hV = hh(9888);
      var hK = hh(2957);
      var hw = hh(7411);
      var hX = hh(4742);
      function hg(hm, hB) {
        this.name = hm;
        this.message = hB.message || hB.toString();
        this.error = hB;
      }
      var hl = hh(6042);
      var hM = hh(2268);
      var ho = hh(2799);
      var hr = hh(974);
      var ha = hh(6886);
      var hx = hh(1261);
      var hb = hh(5499);
      var hh = hh(6234);
      const hc = Object.assign({}, hV, hL, h9, {
        addClass: ho.cn,
        hasClass: ho.pv,
        removeClass: ho.IV,
        replaceClass: ho.L_,
        toggleClass: ho.og,
        classList: ho.s1,
        styleDimension: ho.FK,
        createElement: ho.az,
        emptyElement: ho.EU,
        addStyleSheet: ho.kq,
        bounds: ho.A8,
        openLink: ho.nG,
        replaceInnerHtml: ho.nh,
        css: hr.iv,
        clearCss: hr.oI,
        style: hr.oB,
        transform: hr.vs,
        getRgba: hr.HY,
        ajax: ha.h,
        crossdomain: hm => {
          var hB = window.URL;
          try {
            var hA = new hB(hm, location.origin);
            return location.protocol + "//" + location.host != hA.protocol + "//" + hA.host;
          } catch (hj) {}
          return true;
        },
        tryCatch: function (hm, hB, hA = []) {
          if (hX.Z.debug) {
            return hm.apply(hB || this, hA);
          }
          try {
            return hm.apply(hB || this, hA);
          } catch (hj) {
            return new hg(hm.name, hj);
          }
        },
        Error: hg,
        Timer: hw.Z,
        log: hb.c,
        genId: hh.B,
        between: hx.v,
        foreach: function (hm, hB) {
          for (const hA in hm) {
            if (!!function (hj, hF) {
              if (hj == null) {
                throw new TypeError("Cannot convert undefined or null to object");
              }
              return Object.prototype.hasOwnProperty.call(Object(hj), hF);
            }(hm, hA)) {
              hB(hA, hm[hA]);
            }
          }
        },
        flashVersion: hM.dI,
        isIframe: hM.cL,
        indexOf: hl.cq,
        trim: hK.fy,
        pad: hK.vk,
        extension: hK.AO,
        hms: hK.WZ,
        seconds: hK.m9,
        prefix: hK.O4,
        suffix: hK.uA,
        noop: () => {}
      });
    },
    7543: (h8, h9, hh) => {
      'use strict';

      hh.d(h9, {
        C: () => hL
      });
      const hL = hV => !!(hV = hV || window.event) && Boolean(hV) && /^(?:mouse|pointer|touch|gesture|click|key)/.test(hV.type);
    },
    8518: (h8, h9, hh) => {
      'use strict';

      hh.d(h9, {
        Cq: () => hx,
        Dq: () => hP,
        G3: () => hc,
        Mh: () => hS,
        Pm: () => hF,
        dl: () => hN,
        id: () => ha,
        q2: () => hA,
        t6: () => hB,
        tK: () => hr
      });
      var h9 = hh(6042);
      var hL = hh(2268);
      var hV = hh(6886);
      var hK = hh(7034);
      var hw = hh(696);
      const hX = {};
      const hg = {
        aa: "Afar",
        ab: "Abkhazian",
        ae: "Avestan",
        af: "Afrikaans",
        ak: "Akan",
        am: "Amharic",
        ar: "Arabic",
        an: "Aragonese",
        as: "Assamese",
        av: "Avaric",
        ay: "Aymara",
        az: "Azerbaijani",
        ba: "Bashkir",
        be: "Belarusian",
        bg: "Bulgarian",
        bh: "Bihari languages",
        bi: "Bislama",
        bm: "Bambara",
        bn: "Bengali",
        bo: "Tibetan",
        br: "Breton",
        bs: "Bosnian",
        ca: "Catalan",
        ce: "Chechen",
        ch: "Chamorro",
        co: "Corsican",
        cr: "Cree",
        cs: "Czech",
        cu: "Church Slavic",
        cv: "Chuvash",
        cy: "Welsh",
        da: "Danish",
        de: "German",
        dv: "Divehi",
        dz: "Dzongkha",
        ee: "Ewe",
        el: "Greek",
        en: "English",
        eo: "Esperanto",
        es: "Spanish",
        et: "Estonian",
        eu: "Basque",
        fa: "Persian",
        ff: "Fulah",
        fi: "Finnish",
        fj: "Fijian",
        fo: "Faroese",
        fr: "French",
        fy: "Western Frisian",
        ga: "Irish",
        gd: "Gaelic",
        gl: "Galician",
        gn: "Guarani",
        gu: "Gujarati",
        gv: "Manx",
        ha: "Hausa",
        he: "Hebrew",
        hi: "Hindi",
        ho: "Hiri Motu",
        hr: "Croatian",
        ht: "Haitian",
        hu: "Hungarian",
        hy: "Armenian",
        hz: "Herero",
        ia: "Interlingua",
        id: "Indonesian",
        ie: "Interlingue",
        ig: "Igbo",
        ii: "Sichuan Yi",
        ik: "Inupiaq",
        io: "Ido",
        is: "Icelandic",
        it: "Italian",
        iu: "Inuktitut",
        ja: "Japanese",
        jv: "Javanese",
        ka: "Georgian",
        kg: "Kongo",
        ki: "Kikuyu",
        kj: "Kuanyama",
        kk: "Kazakh",
        kl: "Kalaallisut",
        km: "Central Khmer",
        kn: "Kannada",
        ko: "Korean",
        kr: "Kanuri",
        ks: "Kashmiri",
        ku: "Kurdish",
        kv: "Komi",
        kw: "Cornish",
        ky: "Kirghiz",
        la: "Latin",
        lb: "Luxembourgish",
        lg: "Ganda",
        li: "Limburgan",
        lo: "Lao",
        ln: "Lingala",
        lt: "Lithuanian",
        lu: "Luba-Katanga",
        lv: "Latvian",
        mg: "Malagasy",
        mh: "Marshallese",
        mi: "Maori",
        mk: "Macedonian",
        ml: "Malayalam",
        mn: "Mongolian",
        mr: "Marathi",
        ms: "Malay",
        mt: "Maltese",
        my: "Burmese",
        na: "Nauru",
        nb: "Bokmål",
        nd: "Ndebele",
        ne: "Nepali",
        ng: "Ndonga",
        nl: "Dutch",
        nn: "Norwegian Nynorsk",
        no: "Norwegian",
        nr: "Ndebele",
        nv: "Navajo",
        ny: "Chichewa",
        oc: "Occitan",
        oj: "Ojibwa",
        om: "Oromo",
        or: "Oriya",
        os: "Ossetian",
        pa: "Panjabi",
        pi: "Pali",
        pl: "Polish",
        pt: "Portuguese",
        ps: "Pushto",
        qu: "Quechua",
        rm: "Romansh",
        rn: "Rundi",
        ro: "Romanian",
        ru: "Russian",
        rw: "Kinyarwanda",
        sa: "Sanskrit",
        sc: "Sardinian",
        sd: "Sindhi",
        se: "Northern Sami",
        sg: "Sango",
        si: "Sinhala",
        sk: "Slovak",
        sl: "Slovenian",
        sm: "Samoan",
        sn: "Shona",
        so: "Somali",
        sq: "Albanian",
        sr: "Serbian",
        ss: "Swati",
        st: "Sotho",
        su: "Sundanese",
        sw: "Swahili",
        sv: "Swedish",
        ta: "Tamil",
        te: "Telugu",
        tg: "Tajik",
        th: "Thai",
        ti: "Tigrinya",
        tk: "Turkmen",
        tl: "Tagalog",
        tn: "Tswana",
        to: "Tonga",
        tr: "Turkish",
        ts: "Tsonga",
        tt: "Tatar",
        tw: "Twi",
        ty: "Tahitian",
        ug: "Uighur",
        uk: "Ukrainian",
        ur: "Urdu",
        uz: "Uzbek",
        ve: "Venda",
        vi: "Vietnamese",
        vo: "Volapük",
        wa: "Walloon",
        wo: "Wolof",
        xh: "Xhosa",
        yi: "Yiddish",
        yo: "Yoruba",
        za: "Zhuang",
        zh: "Chinese",
        zu: "Zulu"
      };
      const hl = (0, h9.U_)(hg);
      const hM = hp => hp.toLowerCase().replace("-", "_");
      const ho = hp => {
        var hp = hM(hp);
        var hH = hp.indexOf("_");
        if (hH === -1) {
          return hp;
        } else {
          return hp.substring(0, hH);
        }
      };
      const hr = hp => hp ? Object.keys(hp).reduce((hH, hk) => {
        hH[hM(hk)] = hp[hk];
        return hH;
      }, {}) : {};
      const ha = hp => {
        if (hp) {
          return hp.length !== 3 && hg[ho(hp)] || hp;
        }
      };
      const hx = hp => hl[hp] || "";
      const hb = hp => {
        hp = hp.querySelector("html");
        if (hp) {
          return hp.getAttribute("lang");
        } else {
          return null;
        }
      };
      const hc = function () {
        if (typeof hc.mock_ == "string") {
          return hc.mock_;
        }
        let hp = hb(document);
        if (!hp && (0, hL.cL)()) {
          try {
            hp = hb(window.top.document);
          } catch (hH) {}
        }
        return hp || navigator.language || "en";
      };
      hc.mock_ = null;
      const hm = ["ar", "da", "de", "el", "es", "fi", "fr", "he", "id", "it", "ja", "ko", "nb", "nl", "nn", "no", "oc", "pt", "ro", "ru", "sl", "sv", "th", "tr", "vi", "zh"];
      const hB = hp => hp.charCodeAt(0) === 8207 || /^[\u0591-\u07FF\uFB1D-\uFDFD\uFE70-\uFEFC]/.test(hp);
      const hA = function (hp) {
        if (typeof hA.mock_ == "boolean") {
          return hA.mock_;
        } else {
          return hm.indexOf(ho(hp)) >= 0;
        }
      };
      hA.mock_ = null;
      const hj = (hp, hH, hk) => {
        hH = hp[hk] || hH[hk];
        if (hH) {
          hp[hk] = hH;
        }
      };
      const hF = (hp, hH, hk) => Object.assign({}, (ht => {
        var {
          advertising: hq,
          related: hu,
          sharing: hW,
          abouttext: hy
        } = ht;
        var hZ = Object.assign({}, ht.localization);
        if (hq) {
          hZ.advertising = hZ.advertising || {};
          hj(hZ.advertising, hq, "admessage");
          hj(hZ.advertising, hq, "cuetext");
          hj(hZ.advertising, hq, "loadingAd");
          hj(hZ.advertising, hq, "podmessage");
          hj(hZ.advertising, hq, "skipmessage");
          hj(hZ.advertising, hq, "skiptext");
        }
        if (typeof hZ.related == "string") {
          hZ.related = {
            heading: hZ.related
          };
        } else {
          hZ.related = hZ.related || {};
        }
        if (hu) {
          hj(hZ.related, hu, "autoplaymessage");
        }
        if (hW) {
          hZ.sharing = hZ.sharing || {};
          hj(hZ.sharing, hW, "heading");
          hj(hZ.sharing, hW, "copied");
        }
        if (hy) {
          hj(hZ, ht, "abouttext");
        }
        var hq = hZ.close || hZ.nextUpClose;
        if (hq) {
          hZ.close = hq;
        }
        return hZ;
      })(hp), hH[ho(hk)], hH[hM(hk)]);
      const hN = function (hp) {
        if (typeof hN.mock_ == "boolean") {
          return hN.mock_;
        } else {
          return (0, hK.isDeepKeyCompliant)(hw.Z, hp, (hH, hk) => typeof hk[hH] == "string");
        }
      };
      hN.mock_ = null;
      const hP = function (hp, hH) {
        if (typeof hP.mock_ == "function") {
          return hP.mock_;
        }
        let hk = hX[hH];
        if (!hk) {
          const ht = hp + "translations/" + (hp = ho(hH), /^n[bn]$/.test(hp) ? "no" : hp) + ".json";
          hX[hH] = hk = new Promise((hq, hu) => {
            (0, hV.h)({
              url: ht,
              oncomplete: hq,
              onerror: (hW, hy, hZ, hG) => {
                hX[hH] = null;
                hu(hG);
              },
              responseType: "json"
            });
          });
        }
        return hk;
      };
      hP.mock_ = null;
      const hn = (hp, hH, hk, ht) => {
        hp[hH] = Object.assign({}, hk[hH], ht[hH]);
      };
      const hS = (hp, hH) => {
        var hk = Object.assign({}, hp, hH);
        hn(hk, "errors", hp, hH);
        hn(hk, "related", hp, hH);
        hn(hk, "sharing", hp, hH);
        hn(hk, "advertising", hp, hH);
        hn(hk, "shortcuts", hp, hH);
        hn(hk, "captionsStyles", hp, hH);
        return hk;
      };
    },
    5499: (h8, h9, hh) => {
      'use strict';

      hh.d(h9, {
        c: () => hL
      });
      const hL = typeof console.log == "function" ? console.log.bind(console) : () => {};
    },
    1261: (h8, h9, hh) => {
      'use strict';

      hh.d(h9, {
        v: () => hL
      });
      const hL = function (hV, hK, hw) {
        return Math.max(Math.min(hV, hw), hK);
      };
    },
    9888: (h8, h9, hh) => {
      'use strict';

      hh.r(h9);
      hh.d(h9, {
        getAbsolutePath: () => hw,
        isAbsolutePath: () => hK,
        parseDimension: () => hl,
        parseXML: () => hX,
        serialize: () => hg,
        timeFormat: () => hM,
        timeFormatAria: () => ho
      });
      var hL = hh(6042);
      var hV = hh(5950);
      const hK = hr => /^(?:(?:https?|file):)?\/\//.test(hr);
      const hw = (hr, ha) => (0, hV.kd)(hr, ha);
      const hX = hr => {
        let ha = null;
        try {
          if ((ha = new window.DOMParser().parseFromString(hr, "text/xml")).querySelector("parsererror")) {
            ha = null;
          }
        } catch (hx) {}
        return ha;
      };
      const hg = hr => {
        if (hr === undefined) {
          return null;
        }
        if (typeof hr == "string" && hr.length < 6) {
          var ha = hr.toLowerCase();
          if (ha === "true") {
            return true;
          }
          if (ha === "false") {
            return false;
          }
          if (!(0, hL.i2)(Number(hr)) && !(0, hL.i2)(parseFloat(hr))) {
            return Number(hr);
          }
        }
        return hr;
      };
      const hl = hr => (0, hL.qh)(hr) ? hr : hr === "" ? 0 : hr.lastIndexOf("%") > -1 ? hr : parseInt(hr.replace("px", ""), 10);
      const hM = (hr, ha) => {
        if ((0, hL.i2)(hr)) {
          hr = parseInt(hr.toString(), 10);
        }
        if ((0, hL.i2)(hr) || !isFinite(hr) || hr <= 0 && !ha) {
          return "00:00";
        } else {
          ha = hr < 0 ? "-" : "";
          hr = Math.abs(hr);
          return ha + ((ha = Math.floor(hr / 3600)) ? ha + ":" : "") + ((ha = Math.floor((hr - ha * 3600) / 60)) < 10 ? "0" : "") + ha + ":" + ((ha = Math.floor(hr % 60)) < 10 ? "0" : "") + ha;
        }
      };
      const ho = hr => {
        var ha;
        if ((0, hL.i2)(hr)) {
          hr = parseInt(hr.toString(), 10);
        }
        if ((0, hL.i2)(hr) || !isFinite(hr) || hr <= 0) {
          return "0 seconds";
        } else {
          return ((ha = Math.floor(hr / 3600)) ? ha + (ha >= 1 ? " hour" + (ha > 1 ? "s" : "") + ", " : "") : "") + ((ha = Math.floor((hr - ha * 3600) / 60)) ? ha + (ha >= 1 ? " minute" + (ha > 1 ? "s" : "") + ", " : "") : "") + (ha = Math.floor(hr % 60)) + (ha >= 1 ? " second" + (ha > 1 ? "s" : "") : "");
        }
      };
    },
    1569: (h8, h9, hh) => {
      'use strict';

      hh.r(h9);
      hh.d(h9, {
        getScriptPath: () => hK,
        loadFrom: () => hg,
        repo: () => hw,
        versionCheck: () => hX
      });
      var hL = hh(6601);
      var hV = hh(7034);
      const hK = function (hl) {
        var hM = document.getElementsByTagName("script");
        for (let ha = 0; ha < hM.length; ha++) {
          var ho = hM[ha].src;
          if (ho) {
            var hr = ho.lastIndexOf("/" + hl);
            if (hr >= 0) {
              return ho.substr(0, hr + 1);
            }
          }
        }
        return "";
      };
      const hw = function () {
        var hl = "//ssl.p.jwpcdn.com/player/v/8.32.1";
        return ((0, hV.isFileProtocol)() ? "https:" : "") + hl;
      };
      const hX = function (hl) {
        var hl = ("0" + hl).split(/\W/);
        var hM = hL.i.split(/\W/);
        var ho = parseFloat(hl[0]);
        var hr = parseFloat(hM[0]);
        return hr >= ho && (ho !== hr || parseFloat("0" + hl[1]) <= parseFloat(hM[1]));
      };
      const hg = function () {
        return hw();
      };
    },
    6234: (h8, h9, hh) => {
      'use strict';

      hh.d(h9, {
        B: () => hV,
        F: () => hL
      });
      const hL = 12;
      const hV = hK => {
        let hw = "";
        while (hw.length < hK) {
          hw += (() => {
            try {
              var hX = window.crypto || window.msCrypto;
              if (hX != null && hX.getRandomValues) {
                return hX.getRandomValues(new Uint32Array(1))[0].toString(36);
              }
            } catch (hg) {}
            return Math.random().toString(36).slice(2, 9);
          })();
        }
        return hw.slice(0, hK);
      };
    },
    1776: (h8, h9, hh) => {
      'use strict';

      hh.d(h9, {
        U: () => hL,
        W: () => hV
      });
      const hL = window.requestAnimationFrame || (hK => setTimeout(hK, 17));
      const hV = window.cancelAnimationFrame || clearTimeout;
    },
    676: (h8, h9, hh) => {
      'use strict';

      hh.d(h9, {
        ZP: () => hw
      });
      var h9 = hh(328);
      var hL = hh(1643);
      function hV(hX, hg, hl) {
        const hM = this;
        let ho = 0;
        const hr = hx => {
          ho = 2;
          hM.trigger(hL.pn, hx).off();
        };
        const ha = hx => {
          ho = 3;
          hM.trigger(hL.xQ, hx).off();
        };
        this.getStatus = function () {
          return ho;
        };
        this.load = function () {
          let hx = hK[hX];
          if (ho === 0) {
            if (hx) {
              hx.then(ha).catch(hr);
            }
            ho = 1;
            hx = new Promise((hb, hc) => {
              const hm = (hg ? hN => {
                var hP = document.createElement("link");
                hP.type = "text/css";
                hP.rel = "stylesheet";
                hP.href = hN;
                return hP;
              } : (hN, hP) => {
                var hn = document.createElement("script");
                hn.type = "text/javascript";
                hn.charset = "utf-8";
                hn.async = true;
                hn.timeout = hP || 45000;
                hn.src = hN;
                return hn;
              })(hX, hl);
              let hB;
              function hA(hN) {
                hj();
                hr(hN);
                hc(hN);
              }
              const hj = function () {
                hm.onerror = hm.onload = null;
                clearTimeout(hB);
              };
              hB = setTimeout(() => {
                hA(new Error("Network timeout " + hX));
              }, 45000);
              hm.onerror = function () {
                hA(new Error("Failed to load " + hX));
              };
              hm.onload = function (hN) {
                hj();
                ha(hN);
                hb(hN);
              };
              var hF = document.getElementsByTagName("head")[0] || document.documentElement;
              hF.insertBefore(hm, hF.firstChild);
            });
            hK[hX] = hx;
          }
          return hx;
        };
      }
      const hK = {};
      Object.assign(hV.prototype, h9.ZP);
      const hw = hV;
    },
    2957: (h8, h9, hh) => {
      'use strict';

      hh.d(h9, {
        AO: () => hg,
        Dc: () => hX,
        O4: () => hr,
        U5: () => ho,
        WZ: () => hl,
        fy: () => hK,
        m9: () => hM,
        uA: () => ha,
        vk: () => hw,
        zz: () => hx
      });
      var hL = hh(6042);
      const hV = window.parseFloat;
      const hK = hb => hb.replace(/^\s+|\s+$/g, "");
      const hw = (hb, hc, hm) => {
        hb = "" + hb;
        hm = hm || "0";
        while (hb.length < hc) {
          hb = hm + hb;
        }
        return hb;
      };
      const hX = (hb, hc) => {
        var hm = hb.attributes;
        for (let hB = 0; hB < hm.length; hB++) {
          if (hm[hB].name && hm[hB].name.toLowerCase() === hc.toLowerCase()) {
            return hm[hB].value.toString();
          }
        }
        return "";
      };
      const hg = hb => {
        var hc;
        if (hb && hb.substr(0, 4) !== "rtmp") {
          if (hc = /[(,]format=(m3u8|mpd)-/i.exec(hb)) {
            return hc[1];
          } else if ((hc = hb.replace(/^.+?\.(\w+)(?:[;].*)?(?:[?#].*)?$/, "$1")) !== hb) {
            return hc.toLowerCase();
          } else if ((hb = hb.split("?")[0].split("#")[0]).lastIndexOf(".") > -1) {
            return hb.substr(hb.lastIndexOf(".") + 1, hb.length).toLowerCase();
          } else {
            return "";
          }
        } else {
          return "";
        }
      };
      const hl = hb => {
        var hc = (hb / 60 | 0) % 60;
        var hm = hb % 60;
        return hw((hb / 3600 | 0).toString(), 2) + ":" + hw(hc.toString(), 2) + ":" + hw(hm.toFixed(3), 6);
      };
      const hM = (hb, hc) => {
        if (!hb) {
          return 0;
        }
        if ((0, hL.qh)(hb)) {
          return hb;
        }
        var hb = hb.replace(",", ".");
        var hm = hb.slice(-1);
        var hB = hb.split(":");
        var hA = hB.length;
        let hj = 0;
        if (hm === "s") {
          hj = hV(hb);
        } else if (hm === "m") {
          hj = hV(hb) * 60;
        } else if (hm === "h") {
          hj = hV(hb) * 3600;
        } else if (hA > 1) {
          let hF = hA - 1;
          if (hA === 4) {
            if (hc) {
              hj = hV(hB[hF]) / hc;
            }
            --hF;
          }
          hj = (hj += hV(hB[hF])) + hV(hB[hF - 1]) * 60;
          if (hA >= 3) {
            hj += hV(hB[hF - 2]) * 3600;
          }
        } else {
          hj = hV(hb);
        }
        if ((0, hL.qh)(hj)) {
          return hj;
        } else {
          return 0;
        }
      };
      const ho = (hb, hc, hm) => {
        if ((0, hL.HD)(hb) && hb.slice(-1) === "%") {
          const hB = hV(hb);
          if (hc && (0, hL.qh)(hc) && (0, hL.qh)(hB)) {
            return hc * hB / 100;
          } else {
            return null;
          }
        }
        return hM(hb, hm);
      };
      const hr = (hb, hc) => hb.map(hm => hc + hm);
      const ha = (hb, hc) => hb.map(hm => hm + hc);
      const hx = hb => Boolean(hb) && (0, hL.HD)(hb) && hb.slice(-1) === "%";
    },
    5882: (h8, h9, hh) => {
      'use strict';

      hh.d(h9, {
        GU: () => hj,
        ZP: () => hy,
        dO: () => hn
      });
      var hL = hh(8348);
      var hV = hh(1643);
      var h9 = hh(328);
      var hK = hh(5004);
      var hw = hh(2799);
      const hX = ("ontouchstart" in window);
      const hg = "PointerEvent" in window && !hL.OS.android;
      const hl = !hg && (!hX || !hL.OS.mobile);
      const hM = "window";
      const ho = "init";
      const hr = "select";
      const ha = "keydown";
      const hx = hL.Features.passiveEvents;
      const hb = !!hx && {
        passive: true
      };
      let hc;
      let hm;
      const hB = (hZ, hG, hE) => {
        const hz = hZ.el;
        const hv = (() => {
          var {
            target: hi,
            touches: hT,
            changedTouches: he
          } = hE;
          let hQ;
          let hI = hE.pointerType;
          hI = hT || he ? (hQ = (hT != null && hT.length ? hT : he)[0], hI || "touch") : (hQ = hE, hI || "mouse");
          var {
            pageX: hT,
            pageY: he
          } = hQ;
          return {
            type: hG,
            pointerType: hI,
            pageX: hT,
            pageY: he,
            sourceEvent: hE,
            currentTarget: hz,
            target: hi
          };
        })();
        hZ.trigger(hG, hv);
      };
      const hA = (hZ, hG, hE) => {
        var hz = hZ.el;
        var hv = hE.target;
        hZ.trigger(hG, {
          type: hG,
          sourceEvent: hE,
          currentTarget: hz,
          target: hv
        });
      };
      const hj = hZ => {
        hZ = hZ.ownerDocument || hZ;
        return hZ.defaultView || hZ.parentWindow || window;
      };
      const hF = (hZ, hG, hE, hz, hv = hb) => {
        let hi = hZ.handlers[hG];
        let hT = hZ.options[hG];
        if (!hi) {
          hi = hZ.handlers[hG] = {};
          hT = hZ.options[hG] = {};
        }
        if (hi[hE]) {
          throw new Error(hG + (" " + hE + " already registered"));
        }
        hi[hE] = hz;
        hT[hE] = hv;
        hZ = hZ.el;
        hG = hG === hM ? hj(hZ) : hZ;
        if (hG) {
          hG.addEventListener(hE, hz, hv);
        }
      };
      const hN = hZ => {
        var hG = hZ.el;
        if (hZ.pointerId !== null) {
          hG.releasePointerCapture(hZ.pointerId);
          hZ.pointerId = null;
        }
      };
      const hP = (hZ, hG) => {
        const {
          el: hE,
          handlers: hz,
          options: hv
        } = hZ;
        const hi = hG === hM ? hj(hE) : hE;
        const hT = hz[hG];
        const he = hv[hG];
        if (hT) {
          Object.keys(hT).forEach(hQ => {
            var hI = he[hQ];
            if (typeof hI == "boolean") {
              hi.removeEventListener(hQ, hT[hQ], hI);
            } else {
              hi.removeEventListener(hQ, hT[hQ]);
            }
          });
          hz[hG] = null;
          hv[hG] = null;
        }
      };
      const hn = hZ => !!Boolean(hZ.ctrlKey) && hZ.type === "click" || ("which" in hZ ? hZ.which === 3 : "button" in hZ && hZ.button === 2);
      const hS = (hZ, hG) => {
        hm = hm || new hy(document).on("interaction");
        if (!hZ.handlers[ho] && !hZ.handlers[hr]) {
          const hE = hZ.el;
          hF(hZ, hG, "blur", () => {
            (0, hw.IV)(hE, "jw-tab-focus");
            hZ.clicking = false;
          });
          hF(hZ, hG, "focus", () => {
            if (hm.event && hm.event.type === ha) {
              (0, hw.cn)(hE, "jw-tab-focus");
            }
          });
        }
      };
      const hp = (hZ, hG, hE, hz) => {
        if (hg) {
          hF(hZ, hG, "pointerdown", hE, hz);
        } else {
          if (hl) {
            hF(hZ, hG, "mousedown", hE, hz);
          }
          hF(hZ, hG, "touchstart", hE, hz);
        }
      };
      const hH = hZ => {
        if (!hZ.handlers[hr]) {
          const hG = hZ.el;
          hS(hZ, hr);
          hp(hZ, hr, hE => {
            var hz = hE.target;
            if (!hn(hE) && (!Boolean(hZ.directSelect) || hz === hG)) {
              if (hE.isPrimary && hz.tagName === "BUTTON") {
                hz.focus();
              }
              hZ.lastStart = (0, hK.z)();
              hZ.clicking = true;
            }
          });
          hF(hZ, hr, "click", hE => {
            var hz;
            var hv;
            if (!hn(hE) && (!Boolean(hZ.directSelect) || hE.target === hG)) {
              if ((0, hK.z)() - hZ.lastStart <= 500 || hZ.clicking !== true) {
                hv = hE;
                if ((hz = hZ).enableDoubleClick) {
                  if ((0, hK.z)() - hz.lastClick < 300) {
                    hB(hz, hV.P, hv);
                    hz.lastClick = 0;
                  } else {
                    hz.lastClick = (0, hK.z)();
                  }
                }
                hB(hZ, hV.ot, hE);
              }
              hZ.clicking = false;
            }
          });
        }
      };
      const hk = hZ => hZ.type.indexOf("touch") === 0 ? (hZ.originalEvent || hZ).changedTouches[0] : hZ;
      const ht = hZ => {
        if (!hZ.handlers[ho]) {
          const {
            el: hG,
            passive: hE
          } = hZ;
          const hz = !!hx && {
            passive: hE
          };
          const hv = hT => {
            if (hZ.dragged) {
              hB(hZ, hV.Wp, hT);
            } else {
              const {
                pageX: hQ,
                pageY: hI
              } = hk(hT);
              const hO = hQ - hZ.startX;
              const hs = hI - hZ.startY;
              if (hO * hO + hs * hs > 36) {
                hB(hZ, hV.nv, hT);
                hZ.dragged = true;
                hB(hZ, hV.Wp, hT);
              }
            }
            var he;
            if (!hE && hT.type === "touchmove") {
              if (hT.preventDefault) {
                hT.preventDefault();
              }
            }
          };
          const hi = hT => {
            clearTimeout(hc);
            if (hZ.el && (hN(hZ), hP(hZ, hM), hZ.dragged)) {
              hZ.dragged = false;
              hB(hZ, hV.Sv, hT);
            }
          };
          hS(hZ, ho);
          hp(hZ, ho, hT => {
            (0, hw.IV)(hG, "jw-tab-focus");
            if (!hn(hT)) {
              var {
                target: he,
                type: hQ
              } = hT;
              if (!hZ.directSelect || he === hG) {
                var {
                  pageX: he,
                  pageY: hI
                } = hk(hT);
                hZ.dragged = false;
                hZ.startX = he;
                hZ.startY = hI;
                hP(hZ, hM);
                if (hQ === "pointerdown" && hT.isPrimary) {
                  if (!hE) {
                    const hO = hT.pointerId;
                    hZ.pointerId = hO;
                    hG.setPointerCapture(hO);
                  }
                  hF(hZ, hM, "pointermove", hv, hz);
                  hF(hZ, hM, "pointercancel", hi);
                  hF(hZ, hM, "pointerup", hi);
                } else if (hQ === "mousedown") {
                  hF(hZ, hM, "mousemove", hv, hz);
                  hF(hZ, hM, "mouseup", hi);
                } else if (hQ === "touchstart") {
                  hF(hZ, hM, "touchmove", hv, hz);
                  hF(hZ, hM, "touchcancel", hi);
                  hF(hZ, hM, "touchend", hi);
                }
              }
            }
          }, hz);
        }
      };
      const hq = {
        drag(hZ) {
          ht(hZ);
        },
        dragStart(hZ) {
          ht(hZ);
        },
        dragEnd(hZ) {
          ht(hZ);
        },
        click(hZ) {
          hH(hZ);
        },
        doubleClick(hZ) {
          hZ.enableDoubleClick = true;
          hH(hZ);
        },
        longPress(hZ) {
          const hG = "longPress";
          if (hL.OS.iOS) {
            const hE = () => {
              clearTimeout(hc);
            };
            hF(hZ, hG, "touchstart", hz => {
              hE();
              hc = setTimeout(() => {
                hB(hZ, hG, hz);
              }, 500);
            });
            hF(hZ, hG, "touchmove", hE);
            hF(hZ, hG, "touchcancel", hE);
            hF(hZ, hG, "touchend", hE);
          } else {
            hZ.el.oncontextmenu = hz => {
              hB(hZ, hG, hz);
              return false;
            };
          }
        },
        focus(hZ) {
          const hG = "focus";
          hF(hZ, hG, hG, hE => {
            hA(hZ, hG, hE);
          });
        },
        blur(hZ) {
          const hG = "blur";
          hF(hZ, hG, hG, hE => {
            hA(hZ, hG, hE);
          });
        },
        over(hZ) {
          if (hg || hl) {
            hF(hZ, hV.B1, hg ? "pointerover" : "mouseover", hG => {
              if (hG.pointerType !== "touch") {
                hB(hZ, hV.B1, hG);
              }
            });
          }
        },
        out(hZ) {
          if (hg) {
            const hG = hZ.el;
            hF(hZ, hV.U3, "pointerout", hE => {
              var hz;
              if (hE.pointerType !== "touch" && "clientX" in hE) {
                hz = document.elementFromPoint(hE.clientX, hE.clientY);
                if (!hG.contains(hz)) {
                  hB(hZ, hV.U3, hE);
                }
              }
            });
          } else if (hl) {
            hF(hZ, hV.U3, "mouseout", hE => {
              hB(hZ, hV.U3, hE);
            });
          }
        },
        move(hZ) {
          if (hg || hl) {
            hF(hZ, hV.tP, hg ? "pointermove" : "mousemove", hG => {
              if (hG.pointerType !== "touch") {
                hB(hZ, hV.tP, hG);
              }
            });
          }
        },
        enter(hZ) {
          hF(hZ, hV.K5, ha, hG => {
            if (hG.key === "Enter" || hG.keyCode === 13) {
              hG.stopPropagation();
              hA(hZ, hV.K5, hG);
            }
          });
        },
        keydown(hZ) {
          hF(hZ, ha, ha, hG => {
            hA(hZ, ha, hG);
          }, false);
        },
        gesture(hZ) {
          const hG = "gesture";
          const hE = hz => hB(hZ, hG, hz);
          hF(hZ, hG, "click", hE);
          hF(hZ, hG, ha, hE);
        },
        interaction(hZ) {
          var hG = "interaction";
          var hE = hz => {
            hZ.event = hz;
          };
          hF(hZ, hG, "mousedown", hE, true);
          hF(hZ, hG, ha, hE, true);
        },
        tap() {},
        doubleTap() {}
      };
      const hu = /\s+/;
      const hW = hZ => hZ && !hu.test(hZ) && typeof hZ != "object";
      class hy extends h9.ZP {
        constructor(hZ, hG) {
          super();
          var hE = !(hG = hG || {}).preventScrolling;
          this.directSelect = Boolean(hG.directSelect);
          this.dragged = false;
          this.enableDoubleClick = false;
          this.el = hZ;
          this.handlers = {};
          this.options = {};
          this.lastClick = 0;
          this.lastStart = 0;
          this.passive = hE;
          this.pointerId = null;
          this.startX = 0;
          this.startY = 0;
          this.event = null;
          this.clicking = false;
        }
        on(hZ, hG, hE) {
          if (!!hW(hZ) && !this.handlers[hZ]) {
            hq[hZ](this);
          }
          return super.on(hZ, hG, hE);
        }
        off(hZ, hG, hE) {
          if (hW(hZ)) {
            hP(this, hZ);
          } else if (!hZ) {
            const hz = this.handlers;
            Object.keys(hz).forEach(hv => {
              hP(this, hv);
            });
          }
          return super.off(hZ, hG, hE);
        }
        destroy() {
          if (this.el) {
            this.off();
            if (hg) {
              hN(this);
            }
            this.el = null;
          }
        }
      }
    },
    6042: (h8, h9, hh) => {
      'use strict';

      hh.d(h9, {
        Cb: () => L7,
        HD: () => hi,
        Kn: () => hu,
        P2: () => La,
        S6: () => hW,
        UI: () => hI,
        U_: () => Lx,
        Yj: () => hR,
        ZP: () => Lj,
        _e: () => Lg,
        a9: () => LB,
        ar: () => LX,
        ce: () => Lb,
        cq: () => LL,
        dp: () => L3,
        e1: () => Lh,
        e5: () => Ll,
        ei: () => Lm,
        hX: () => L0,
        hj: () => hv,
        i2: () => hQ,
        jn: () => L5,
        l7: () => Lc,
        mf: () => hz,
        o8: () => L6,
        qh: () => LA,
        r3: () => LV,
        sE: () => hD,
        u4: () => hY,
        vM: () => L8,
        wB: () => Lw,
        xV: () => L4,
        yR: () => hU
      });
      h9 = hh(5004);
      function hL(LF) {
        if (!hu(LF)) {
          return [];
        }
        if (hH) {
          return hH(LF);
        }
        var LN = [];
        for (const LP in LF) {
          if (hq(LF, LP)) {
            LN.push(LP);
          }
        }
        return LN;
      }
      function hV(LF, LN, ...LP) {
        if (hk && LF.bind === hk) {
          return hk.apply(LF, [LN].concat(LP));
        }
        if (hz(LF)) {
          return Ln;
        }
        throw new TypeError();
        function Ln(...LS) {
          if (!(this instanceof Ln)) {
            return LF.apply(LN, LP.concat(LS));
          }
          hs.prototype = LF.prototype;
          var Lp = new hs();
          hs.prototype = null;
          var LS = LF.apply(Lp, LP.concat(LS));
          if (Object(LS) === LS) {
            return LS;
          } else {
            return Lp;
          }
        }
      }
      function hK(LF, LN, LP) {
        LN = LN || hU;
        let Ln = true;
        if (LF == null) {
          return Ln;
        } else if (hP && LF.every === hP) {
          return LF.every(LN, LP);
        } else {
          hW(LF, function (LS, Lp, LH) {
            if (!(Ln = Ln && LN.call(LP, LS, Lp, LH))) {
              return ho;
            }
          });
          return Boolean(Ln);
        }
      }
      function hw(LF, LN) {
        let LP;
        return function (...Ln) {
          if (--LF > 0) {
            LP = LN.apply(this, Ln);
          }
          if (LF <= 1) {
            LN = null;
          }
          return LP;
        };
      }
      function hX(LF) {
        if (LF == null) {
          return hU;
        } else if (hz(LF)) {
          return LF;
        } else {
          return L7(LF);
        }
      }
      function hg(LF) {
        return function (LN, LP, Ln) {
          const LS = {};
          LP = hX(LP);
          hW(LN, function (Lp, LH) {
            LH = LP.call(Ln, Lp, LH, LN);
            LF(LS, LH, Lp);
          });
          return LS;
        };
      }
      function hl(LF, ...LN) {
        return function (...LP) {
          let Ln = 0;
          var LS = LN.slice();
          for (let Lp = 0, LH = LS.length; Lp < LH; Lp++) {
            if (hq(LS[Lp], "partial")) {
              LS[Lp] = LP[Ln++];
            }
          }
          while (Ln < arguments.length) {
            LS.push(LP[Ln++]);
          }
          return LF.apply(this, LS);
        };
      }
      function hM(LF, LN, ...LP) {
        return setTimeout(function () {
          return LF.apply(null, LP);
        }, LN);
      }
      const ho = {};
      const hr = Array.prototype;
      const ha = Object.prototype;
      const hx = Function.prototype;
      const hb = hr.slice;
      const hc = hr.concat;
      const hm = ha.toString;
      const hB = ha.hasOwnProperty;
      const hA = hr.map;
      const hj = hr.reduce;
      const hF = hr.forEach;
      const hN = hr.filter;
      const hP = hr.every;
      const hn = hr.some;
      const hS = hr.indexOf;
      const hp = Array.isArray;
      const hH = Object.keys;
      const hk = hx.bind;
      const ht = window.isFinite;
      const hq = function (LF, LN) {
        return hB.call(LF, LN);
      };
      const hu = function (LF) {
        return LF === Object(LF);
      };
      const hW = function (LF, LN, LP) {
        let Ln;
        let LS;
        if (LF != null) {
          if (hF && LF.forEach === hF) {
            LF.forEach(LN, LP);
          } else if (LF.length === Number(LF.length)) {
            Ln = 0;
            LS = LF.length;
            for (; Ln < LS; Ln++) {
              if (LN.call(LP, LF[Ln], Ln, LF) === ho) {
                return;
              }
            }
          } else {
            var Lp = hL(LF);
            Ln = 0;
            LS = Lp.length;
            for (; Ln < LS; Ln++) {
              if (LN.call(LP, LF[Lp[Ln]], Lp[Ln], LF) === ho) {
                return;
              }
            }
          }
        }
        return LF;
      };
      const hy = hW;
      const hZ = [];
      hW(["Function", "String", "Number", "Date", "RegExp"], function (LF) {
        hZ[LF] = function (LN) {
          return hm.call(LN) == "[object " + LF + "]";
        };
      });
      const hG = hZ.Date;
      const hE = hZ.RegExp;
      const hz = hZ.Function;
      const hv = hZ.Number;
      const hi = hZ.String;
      const hT = hp || function (LF) {
        return hm.call(LF) == "[object Array]";
      };
      const hQ = function (LF) {
        return hv(LF) && LF != Number(LF);
      };
      const hI = function (LF, LN, LP) {
        const Ln = [];
        if (LF == null) {
          return Ln;
        } else if (hA && LF.map === hA) {
          return LF.map(LN, LP);
        } else {
          hW(LF, function (LS, Lp, LH) {
            Ln.push(LN.call(LP, LS, Lp, LH));
          });
          return Ln;
        }
      };
      const hO = hI;
      const hs = function () {};
      const hY = function (LF, LN, LP, Ln) {
        let LS = arguments.length > 2;
        if (LF == null) {
          LF = [];
        }
        if (hj && LF.reduce === hj) {
          if (Ln) {
            LN = hV(LN, Ln);
          }
          if (LS) {
            return LF.reduce(LN, LP);
          } else {
            return LF.reduce(LN);
          }
        }
        hW(LF, function (Lp, LH, Lk) {
          if (LS) {
            LP = LN.call(Ln, LP, Lp, LH, Lk);
          } else {
            LP = Lp;
            LS = true;
          }
        });
        if (LS) {
          return LP;
        }
        throw new TypeError("Reduce of empty array with no initial value");
      };
      const hf = hY;
      const hC = hY;
      const hU = function (LF) {
        return LF;
      };
      const hR = function (LF, LN, LP) {
        LN = LN || hU;
        let Ln = false;
        if (LF == null) {
          return Ln;
        } else if (hn && LF.some === hn) {
          return LF.some(LN, LP);
        } else {
          hW(LF, function (LS, Lp, LH) {
            if (Ln = Ln || LN.call(LP, LS, Lp, LH)) {
              return ho;
            }
          });
          return Boolean(Ln);
        }
      };
      const hJ = hR;
      const hD = function (LF, LN, LP) {
        let Ln;
        hR(LF, function (LS, Lp, LH) {
          if (LN.call(LP, LS, Lp, LH)) {
            Ln = LS;
            return true;
          }
        });
        return Ln;
      };
      const hd = hD;
      const L0 = function (LF, LN, LP) {
        const Ln = [];
        if (LF == null) {
          return Ln;
        } else if (hN && LF.filter === hN) {
          return LF.filter(LN, LP);
        } else {
          hW(LF, function (LS, Lp, LH) {
            if (LN.call(LP, LS, Lp, LH)) {
              Ln.push(LS);
            }
          });
          return Ln;
        }
      };
      const L1 = L0;
      const L2 = hK;
      const L3 = function (LF) {
        if (LF == null) {
          return 0;
        } else {
          return (LF.length === Number(LF.length) ? LF : hL(LF)).length;
        }
      };
      hZ.Function = function (LF) {
        return typeof LF == "function";
      };
      const L4 = function (LF) {
        return ht(LF) && !hQ(parseFloat(LF));
      };
      const L5 = function (LF) {
        return LF === true || LF === false || hm.call(LF) == "[object Boolean]";
      };
      const L6 = function (LF) {
        return LF === undefined;
      };
      const L7 = function (LF) {
        return function (LN) {
          return LN[LF];
        };
      };
      const L8 = hg(function (LF, LN, LP) {
        if (hq(LF, LN)) {
          LF[LN].push(LP);
        } else {
          LF[LN] = [LP];
        }
      });
      const L9 = hg(function (LF, LN, LP) {
        LF[LN] = LP;
      });
      const Lh = function (LF, LN, LP, Ln) {
        var LS = (LP = hX(LP)).call(Ln, LN);
        let Lp = 0;
        let LH = LF.length;
        while (Lp < LH) {
          const Lk = Lp + LH >>> 1;
          if (LP.call(Ln, LF[Lk]) < LS) {
            Lp = 1 + Lk;
          } else {
            LH = Lk;
          }
        }
        return Lp;
      };
      const LL = function (LF, LN, LP) {
        if (LF != null) {
          let LS = 0;
          var Ln = LF.length;
          if (LP) {
            if (typeof LP != "number") {
              if (LF[LS = Lh(LF, LN)] === LN) {
                return LS;
              } else {
                return -1;
              }
            }
            LS = LP < 0 ? Math.max(0, Ln + LP) : LP;
          }
          if (hS && LF.indexOf === hS) {
            return LF.indexOf(LN, LP);
          }
          for (; LS < Ln; LS++) {
            if (LF[LS] === LN) {
              return LS;
            }
          }
        }
        return -1;
      };
      const LV = function (LF, LN) {
        return LF != null && (LF.length !== Number(LF.length) && (LF = function (LP) {
          var Ln = hL(LP);
          var LS = hL.length;
          var Lp = Array(LS);
          for (let LH = 0; LH < LS; LH++) {
            Lp[LH] = LP[Ln[LH]];
          }
          return Lp;
        }(LF)), LL(LF, LN) >= 0);
      };
      const LK = LV;
      const Lw = function (LF) {
        return function (LN) {
          if (LN !== LF) {
            for (const LP in LF) {
              if (LF[LP] !== LN[LP]) {
                return false;
              }
            }
          }
          return true;
        };
      };
      const LX = function (LF, LN) {
        return L0(LF, Lw(LN));
      };
      const Lg = function (LF, LN) {
        return hD(LF, Lw(LN));
      };
      const Ll = function (LF, ...LN) {
        const LP = hc.apply(hr, LN);
        return L0(LF, function (Ln) {
          return !LV(LP, Ln);
        });
      };
      const LM = hl(hw, 2);
      const Lo = hl(hM, {
        partial: hl
      }, 1);
      const Lr = h9.z;
      const La = function (LF, LN, LP) {
        let Ln;
        let LS;
        let Lp;
        let LH = null;
        let Lk = 0;
        LP = LP || {};
        function Lt() {
          Lk = LP.leading === false ? 0 : Lr();
          LH = null;
          Lp = LF.apply(Ln, LS);
          Ln = LS = null;
        }
        return function (...Lq) {
          var Lu = Lr();
          if (!Lk && LP.leading === false) {
            Lk = Lu;
          }
          var LW = LN - (Lu - Lk);
          Ln = this;
          LS = Lq;
          if (LW <= 0) {
            clearTimeout(LH);
            LH = null;
            Lk = Lu;
            Lp = LF.apply(Ln, LS);
            Ln = LS = null;
          } else if (!LH && LP.trailing !== false) {
            LH = setTimeout(Lt, LW);
          }
          return Lp;
        };
      };
      const Lx = function (LF) {
        var LN = {};
        var LP = hL(LF);
        for (let Ln = 0, LS = LP.length; Ln < LS; Ln++) {
          LN[LF[LP[Ln]]] = LP[Ln];
        }
        return LN;
      };
      const Lb = function (LF, ...LN) {
        hW(LN, function (LP) {
          if (LP) {
            for (const Ln in LP) {
              if (LF[Ln] === undefined) {
                LF[Ln] = LP[Ln];
              }
            }
          }
        });
        return LF;
      };
      const Lc = Object.assign || function (LF, ...LN) {
        hW(LN, function (LP) {
          if (LP) {
            for (const Ln in LP) {
              if (!!function (LS, Lp) {
                if (LS == null) {
                  throw new TypeError("Cannot convert undefined or null to object");
                }
                return Object.prototype.hasOwnProperty.call(Object(LS), Lp);
              }(LP, Ln)) {
                LF[Ln] = LP[Ln];
              }
            }
          }
        });
        return LF;
      };
      const Lm = function (LF, ...LN) {
        const LP = {};
        LN = [].concat(...LN);
        hW(LN, function (Ln) {
          if (Ln in LF) {
            LP[Ln] = LF[Ln];
          }
        });
        return LP;
      };
      const LB = function (LF) {
        return function () {
          return LF;
        };
      };
      const LA = LF => hv(LF) && !hQ(LF);
      const Lj = {
        after: function (LF, LN) {
          return function (...LP) {
            if (--LF < 1) {
              return LN.apply(this, LP);
            }
          };
        },
        all: hK,
        any: hR,
        before: hw,
        bind: hV,
        clone: function (LF) {
          if (hu(LF)) {
            if (hT(LF)) {
              return LF.slice();
            } else {
              return Lc({}, LF);
            }
          } else {
            return LF;
          }
        },
        collect: hO,
        compact: function (LF) {
          return L0(LF, hU);
        },
        constant: LB,
        contains: LV,
        debounce: (LF, LN = 100) => {
          let LP;
          return function (...Ln) {
            clearTimeout(LP);
            LP = setTimeout(() => {
              LF.apply(this, Ln);
            }, LN);
          };
        },
        defaults: Lb,
        defer: Lo,
        delay: hM,
        detect: hd,
        difference: Ll,
        each: hW,
        every: L2,
        extend: Lc,
        filter: L0,
        find: hD,
        findWhere: Lg,
        foldl: hf,
        forEach: hy,
        groupBy: L8,
        has: hq,
        identity: hU,
        include: LK,
        indexBy: L9,
        indexOf: LL,
        inject: hC,
        invert: Lx,
        isArray: hT,
        isBoolean: L5,
        isDate: hG,
        isFinite: L4,
        isFunction: hz,
        isNaN: hQ,
        isNull: function (LF) {
          return LF === null;
        },
        isNumber: hv,
        isObject: hu,
        isRegExp: hE,
        isString: hi,
        isUndefined: L6,
        isValidNumber: LA,
        keys: hL,
        last: function (LF, LN, LP) {
          if (LF != null) {
            if (LN == null || LP) {
              return LF[LF.length - 1];
            } else {
              return hb.call(LF, Math.max(LF.length - LN, 0));
            }
          }
        },
        map: hI,
        matches: Lw,
        max: function (LF, LN, LP) {
          if (!LN && hT(LF) && LF[0] === Number(LF[0]) && LF.length < 65535) {
            return Math.max(...LF);
          }
          let Ln = -Infinity;
          let LS = -Infinity;
          hW(LF, function (Lp, LH, Lk) {
            LH = LN ? LN.call(LP, Lp, LH, Lk) : Lp;
            if (LH > LS) {
              Ln = Lp;
              LS = LH;
            }
          });
          return Ln;
        },
        memoize: function (LF, LN) {
          const LP = {};
          LN = LN || hU;
          return function (...Ln) {
            var LS = LN.apply(this, Ln);
            if (hq(LP, LS)) {
              return LP[LS];
            } else {
              return LP[LS] = LF.apply(this, Ln);
            }
          };
        },
        now: Lr,
        omit: function (LF, ...LN) {
          var LP = {};
          for (const Ln in LF) {
            if (!LV(LN, Ln)) {
              LP[Ln] = LF[Ln];
            }
          }
          return LP;
        },
        once: LM,
        partial: hl,
        pick: Lm,
        pluck: function (LF, LN) {
          return hI(LF, L7(LN));
        },
        property: L7,
        propertyOf: function (LF) {
          if (LF == null) {
            return function () {};
          } else {
            return function (LN) {
              return LF[LN];
            };
          }
        },
        reduce: hY,
        reject: function (LF, LN, LP) {
          return L0(LF, function (Ln, LS, Lp) {
            return !LN.call(LP, Ln, LS, Lp);
          }, LP);
        },
        result: function (LF, LN) {
          if (LF != null) {
            LN = LF[LN];
            if (hz(LN)) {
              return LN.call(LF);
            } else {
              return LN;
            }
          }
        },
        select: L1,
        size: L3,
        some: hJ,
        sortedIndex: Lh,
        throttle: La,
        where: LX,
        without: function (LF, ...LN) {
          return Ll(LF, LN);
        }
      };
    },
    5950: (h8, h9, hh) => {
      'use strict';

      hh.d(h9, {
        O9: () => hw,
        _N: () => hK,
        kd: () => hl,
        ke: () => hX,
        vl: () => hV
      });
      const hL = /^[^:/?#]+:?\/\/[^/?#]+/;
      const hV = function (hM) {
        if (!hM) {
          return {};
        }
        var ho;
        var hr = (hx => {
          if (hx) {
            return new URL(hx, window.location);
          }
        })(hM);
        var ha = {};
        for (const hx of hr.searchParams.keys()) {
          if (!ha[hx]) {
            ho = hr.searchParams.getAll(hx);
            ha[hx] = ho.length === 1 ? ho[0] : ho;
          }
        }
        return ha;
      };
      const hK = function (hM) {
        if (!hM || (hM = new URLSearchParams(hM).get("jw_start") || -1, isNaN(hM)) || hM < -1) {
          return -1;
        } else {
          return Number(hM);
        }
      };
      const hw = function (hM, ho = "{seek_to_second_number}") {
        if (hM) {
          hM = new URL(hM);
          hM.searchParams.set("jw_start", "");
          let hr = hM.toString();
          return hr = hr.replace(/jw_start=?/i, "jw_start=" + ho);
        }
      };
      const hX = (hM, ho) => {
        if (hM) {
          return new URLSearchParams(hM).has(ho);
        }
      };
      const hg = hM => !!hM && hM.match(hL) !== null;
      const hl = (hM, ho) => {
        ho = ho || document.location.href;
        if (hM && hg(ho)) {
          if (hg(hM)) {
            return hM;
          } else {
            return new URL(hM, ho).toString();
          }
        } else {
          return "";
        }
      };
    },
    7034: (h8, h9, hh) => {
      'use strict';

      hh.r(h9);
      hh.d(h9, {
        exists: () => hV,
        isDeepKeyCompliant: () => hM,
        isFileProtocol: () => hw,
        isHTTPS: () => hK,
        isRtmp: () => hX,
        isYouTube: () => hg,
        typeOf: () => hl
      });
      const hL = window.location.protocol;
      const hV = ho => {
        switch (typeof ho) {
          case "string":
            return ho.length > 0;
          case "object":
            return ho !== null;
          case "undefined":
            return false;
          default:
            return true;
        }
      };
      const hK = () => hL === "https:";
      const hw = () => hL === "file:";
      const hX = (ho, hr) => ho.indexOf("rtmp:") === 0 || hr === "rtmp";
      const hg = (ho, hr) => hr === "youtube" || /^(http|\/\/).*(youtube\.com|youtu\.be)\/.+/.test(ho);
      const hl = ho => {
        var hr;
        if (ho === null) {
          return "null";
        } else if ((hr = typeof ho) == "object" && Array.isArray(ho)) {
          return "array";
        } else {
          return hr;
        }
      };
      const hM = (ho, hr, ha) => {
        var hx = Object.keys(ho);
        return Object.keys(hr).length >= hx.length && hx.every(hb => {
          var hc = ho[hb];
          var hm = hr[hb];
          if (hc && typeof hc == "object") {
            return !!hm && typeof hm == "object" && hM(hc, hm, ha);
          } else {
            return ha(hb, ho);
          }
        });
      };
    },
    9025: (h8, h9, hh) => {
      'use strict';

      hh.d(h9, {
        Z: () => hL
      });
      const hL = document.createElement("video");
    },
    6601: (h8, h9, hh) => {
      'use strict';

      hh.d(h9, {
        i: () => hL
      });
      const hL = "8.32.1+commercial_master.556.ads-dai@mono.ads-freewheel@mono.ads-googima@mono.ads-vast@mono.hls.js@1.4.10.jwplayer@mono.jwplayer-ads-header-bidding@github:jwplayer/jwplayer-ads-header-bidding#v7.6.0.jwplayer-analytics@github:jwplayer/jwplayer-analytics#v4.0.3.jwplayer-analytics-kraken@v0.0.4.plugin-gapro@mono";
    },
    4225: (h8, h9, hh) => {
      'use strict';

      hh.d(h9, {
        Z: () => function (hw, hX) {
          var {
            message: hX,
            code: hg
          } = hX;
          var hX = hL(hw.get("id"), hX, hw.get("localization").errors.errorCode, hg.toString());
          var hg = hw.get("width");
          var hw = hw.get("height");
          var hX = (0, hV.az)(hX);
          (0, hK.oB)(hX, {
            width: hg.toString().indexOf("%") > 0 ? hg : hg + "px",
            height: hw.toString().indexOf("%") > 0 ? hw : hw + "px"
          });
          return hX;
        }
      });
      const hL = (hw, hX, hg, hl) => "<div id=\"" + hw + "\" class=\"jw-error jw-reset\"><div class=\"jw-error-msg jw-info-overlay jw-reset\"><style>[id=\"" + hw + "\"].jw-error{background:#000;overflow:hidden;position:relative}[id=\"" + hw + "\"] .jw-error-msg{top:50%;left:50%;position:absolute;transform:translate(-50%,-50%)}[id=\"" + hw + "\"] .jw-error-text{text-align:start;color:#FFF;font:14px/1.35 Arial,Helvetica,sans-serif}</style><div class=\"jw-icon jw-reset\"></div><div class=\"jw-info-container jw-reset\"><div class=\"jw-error-text jw-reset-text\" dir=\"auto\" data-nosnippet>" + (hX || "") + "<span class=\"jw-break jw-reset\"></span>" + (hl ? ("(" + hg + ": " + hl + ")").replace(/\s+/g, "&nbsp;") : "") + "</div></div></div></div>";
      var hV = hh(2799);
      var hK = hh(974);
    },
    9926: (h8, h9, hh) => {
      'use strict';

      hh.d(h9, {
        Z: () => hl
      });
      var hL = hh(1776);
      var hV = hh(2799);
      var hK = hh(974);
      const hw = [];
      let hX = -1;
      const hg = () => {
        (0, hL.W)(hX);
        hX = (0, hL.U)(() => {
          hw.forEach(hM => {
            hM.view.updateBounds();
            var ho = hM.view.model.get("containerWidth");
            hM.resized = hM.width !== ho;
            hM.width = ho;
          });
          hw.forEach(hM => {
            hM.contractElement.scrollLeft = hM.width * 2;
          });
          hw.forEach(hM => {
            (0, hK.oB)(hM.expandChild, {
              width: hM.width + 1
            });
            if (hM.resized && hM.view.model.get("visibility")) {
              hM.view.updateStyles();
            }
          });
          hw.forEach(hM => {
            hM.expandElement.scrollLeft = hM.width + 1;
          });
          hw.forEach(hM => {
            if (hM.resized) {
              hM.view.checkResized();
            }
          });
        });
      };
      class hl {
        constructor(hM, ho, hr) {
          var ha = {
            display: "block",
            position: "absolute",
            top: 0,
            left: 0
          };
          var hx = {
            width: "100%",
            height: "100%"
          };
          var hb = (0, hV.az)("<div style=\"opacity:0;visibility:hidden;overflow:hidden;\"><div><div style=\"height:1px;\"></div></div><div class=\"jw-contract-trigger\"></div></div>");
          var hc = hb.firstChild;
          var hm = hc.firstChild;
          var hB = hc.nextSibling;
          (0, hK.oB)([hc, hB], Object.assign({
            overflow: "auto"
          }, ha, hx));
          (0, hK.oB)(hb, Object.assign({}, ha, hx));
          this.expandElement = hc;
          this.expandChild = hm;
          this.contractElement = hB;
          this.hiddenElement = hb;
          this.element = hM;
          this.view = ho;
          this.model = hr;
          this.width = 0;
          this.resized = false;
          if (hM.firstChild) {
            hM.insertBefore(hb, hM.firstChild);
          } else {
            hM.appendChild(hb);
          }
          hM.addEventListener("scroll", hg, true);
          hw.push(this);
          hg();
        }
        destroy() {
          var hM;
          if (this.view) {
            if ((hM = hw.indexOf(this)) !== -1) {
              hw.splice(hM, 1);
            }
            this.element.removeEventListener("scroll", hg, true);
            this.element.removeChild(this.hiddenElement);
            this.view = this.model = null;
          }
        }
      }
    },
    4671: (h8, h9, hh) => {
      'use strict';

      hh.d(h9, {
        Z: () => hx
      });
      var hL = hh(6875);
      const hV = [];
      const hK = [];
      const hw = [];
      const hX = {};
      let hg;
      let hl = false;
      const hM = (hb, hc) => {
        for (let hB = hc.length; hB--;) {
          var hm = hc[hB];
          if (hb.target === hm.getContainer()) {
            hm.setIntersection(hb);
            break;
          }
        }
      };
      const ho = () => {
        hV.forEach(hb => {
          hb.model.set("activeTab", (0, hL.Z)());
        });
      };
      const hr = (hb, hc) => {
        hb = hc.indexOf(hb);
        if (hb !== -1) {
          hc.splice(hb, 1);
        }
      };
      const ha = hb => {
        hw.forEach(hc => {
          hc(hb);
        });
      };
      document.addEventListener("visibilitychange", ho);
      document.addEventListener("webkitvisibilitychange", ho);
      window.addEventListener("beforeunload", () => {
        document.removeEventListener("visibilitychange", ho);
        document.removeEventListener("webkitvisibilitychange", ho);
        window.removeEventListener("scroll", ha);
      });
      const hx = {
        add(hb) {
          hV.push(hb);
        },
        remove(hb) {
          hr(hb, hV);
        },
        addScrollHandler(hb) {
          if (!hl) {
            hl = true;
            window.addEventListener("scroll", ha);
          }
          hw.push(hb);
        },
        removeScrollHandler(hb) {
          hb = hw.indexOf(hb);
          if (hb !== -1) {
            hw.splice(hb, 1);
          }
        },
        addWidget(hb) {
          hK.push(hb);
        },
        removeWidget(hb) {
          hr(hb, hK);
        },
        size: () => hV.length,
        observe(hb) {
          var hc;
          hc = window.IntersectionObserver;
          hg = hg || new hc(hm => {
            if (hm != null && hm.length) {
              for (let hA = hm.length; hA--;) {
                var hB = hm[hA];
                hM(hB, hV);
                hM(hB, hK);
              }
            }
          }, {
            threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1]
          });
          if (!hX[hb.id]) {
            hX[hb.id] = true;
            hg.observe(hb);
          }
        },
        unobserve(hb) {
          if (hg && hX[hb.id]) {
            delete hX[hb.id];
            hg.unobserve(hb);
          }
        }
      };
    },
    2445: (h8, h9, hh) => {
      'use strict';

      hh.d(h9, {
        ZP: () => hA,
        qG: () => hB
      });
      var hL = hh(5083);
      var hV = hh(1569);
      var hK = hh(6042);
      var hw = hh(7034);
      var hX = hh(6577);
      var hg = hh(6599);
      var hl = hh(386);
      const hM = "__CONTEXTUAL__";
      const ho = (hj, hF) => {
        hj = hj.querySelector(hF);
        if (hj) {
          return hj.getAttribute("content");
        }
      };
      var h9 = hh(4737);
      var hr = hh.n(h9);
      var ha = hh(67);
      var hx = hh(3487);
      const hb = hj => typeof hj == "string" && /^\/\/(?:content\.jwplatform|cdn\.jwplayer)\.com\//.test(hj);
      const hc = hj => "https:" + hj;
      const hm = (hj, hF, hN) => {
        if (hF) {
          delete (hj[hF.client || (0, hx.sb)(hN)] = hF).client;
        }
      };
      const hB = hj => {
        const hF = Object.assign({}, hj.plugins);
        const hN = (0, hl.Z)(hj.edition);
        if (hN("ads")) {
          const hP = Object.assign({}, hj.advertising);
          const hn = hP.client;
          if (hn) {
            delete (hF[(0, hx.sb)(hn) || hn] = hP).client;
          }
          if (hP.bids) {
            hm(hF, hP.bids, "bidding");
          }
        }
        if (hN("jwpsrv")) {
          let hS = hj.analytics;
          if (hS !== Object(hS)) {
            hS = {};
          }
          hm(hF, hS, "jwpsrv");
        }
        hm(hF, hj.ga, "gapro");
        hm(hF, hj.interactive, "interactive");
        return hF;
      };
      const hA = function (hj, hF) {
        let hN = (0, hL.ZP)(hj, hF);
        var hj = hN.key || hX.default.key;
        var hF = new hg.ZP(hj);
        var hP = hF.edition();
        (hN = hF.edition() === "free" ? Object.assign({
          skin: {
            active: "#ff0046",
            timeslider: {
              progress: "none"
            }
          },
          logo: {
            position: "control-bar",
            file: hr()
          }
        }, hL.ke, (0, hK.ei)(hN, ["analytics", "aspectratio", "base", "file", "height", "playlist", "sources", "timeSlider", "width"])) : hN).key = hj;
        hN.edition = hP;
        hN.error = hF.error();
        hN.generateSEOMetadata = hN.generateSEOMetadata || false;
        if (hP === "unlimited") {
          const hn = (0, hV.getScriptPath)("jwplayer.js");
          if (!hn) {
            throw new Error("Error setting up player: Could not locate jwplayer.js script tag");
          }
          hh.p = hn;
        }
        hN.related = (hS => {
          var hp = (0, hl.Z)(hS.edition);
          var hH = hS.related;
          var hp = !hp("discovery") || hH !== Object(hH);
          var hk = !hH || hH.displayMode !== "none";
          var ht = hH || {};
          let hq = ht.oncomplete === undefined ? "none" : ht.oncomplete;
          let hu = ht.autoplaytimer;
          if (hq === false || hS.repeat) {
            hq = "hide";
          } else if (hq === "none") {
            hu = 0;
          }
          ht = hq === "autoplay" && hu <= 0 || hq === "none";
          return Object.assign({}, hH, {
            disableRelated: hp,
            showButton: hk,
            oncomplete: hq,
            autoplaytimer: hu,
            shouldAutoAdvance: ht
          });
        })(hN);
        hN.ab &&= (hS => {
          let hp = hS.ab;
          if (hp.clone) {
            hp = hp.clone();
          }
          Object.keys(hp.tests).forEach(hH => {
            hp.tests[hH].forEach(hk => {
              if (hk.addConfig) {
                hk.addConfig(hS, hk.selection);
              }
            });
          });
          return hp;
        })(hN);
        hN.plugins = hB(hN);
        hj = hN.playlist;
        if ((0, hK.HD)(hj) && hj.indexOf(hM) > -1) {
          hN.playlist = ((hS, hp) => {
            var hH = hS == null || hS.querySelector == null || (hH = hS.querySelector("title")) == null ? undefined : hH.textContent;
            var hk = ho(hS, "meta[property=\"og:title\"]");
            let ht = encodeURIComponent(hk || hH || "");
            hk = ho(hS, "meta[property=\"og:description\"]") || ho(hS, "meta[name=\"description\"]");
            if (hk) {
              ht += "&page_description=" + encodeURIComponent(hk);
            }
            return hp.replace(hM, ht);
          })(document, hN.playlist);
          hN.contextual = true;
        }
        if ((0, hw.isFileProtocol)()) {
          const {
            playlist: hS,
            related: hp
          } = hN;
          if (hb(hS)) {
            hN.playlist = hc(hS);
          }
          if (hp && hb(hp.file)) {
            hp.file = hc(hp.file);
          }
        }
        if (hN.__abSendDomainToFeeds && (hF = hN.playlist, /\.jwplatform.com|\.jwplayer.com/.test(hF))) {
          hN.playlist = (hP = hN.playlist) + ((hP.indexOf("?") !== -1 ? "&" : "?") + "page_domain=" + encodeURIComponent((0, ha.X)()));
        }
        return hN;
      };
    },
    6577: (h8, h9, hh) => {
      'use strict';

      hh.d(h9, {
        default: () => hf
      });
      var h9 = hh(1096);
      var h9 = hh.n(h9);
      window.Promise ||= h9();
      var h9 = hh(1569);
      var hL = hh(6391);
      var hV = hh(2963);
      var hK = hh(670);
      var hV = {
        availableProviders: hV.B,
        registerProvider: hK.Z
      };
      var hw = hh(1241);
      hV.registerPlugin = function (hC, hU, hR) {
        if (hC !== "jwpsrv") {
          (0, hw.fo)(hC, hU, hR);
        }
      };
      const hX = hV;
      var hg = hh(8675);
      var hl = hh(6601);
      var hM = hh(4742);
      var ho = hh(8348);
      var hr = hh(623);
      var ha = hh(1643);
      var hx = hh(7411);
      var hb = hh(328);
      var hc = hh(3487);
      const hm = [["vastxml", "adtag", "schedules"]];
      const hB = {
        googima: hm,
        vast: hm
      };
      const hA = (hC, hU) => {
        var hR = hC.getPlugin(hU);
        var hJ = Object.keys(hB);
        if (hJ.indexOf(hU) === -1) {
          throw new Error("destroyDynamicPlugin must be called with plugins with one of the following plugins: " + hJ.toString());
        }
        if (hR) {
          if (hR.resize) {
            hC.off("resize", hR.resizeHandler);
          }
          delete hC.plugins[hU];
          if (hR.destroy) {
            try {
              hR.destroy();
            } catch (hD) {}
          }
          hJ = hR.div;
          if (hJ != null && hJ.parentElement) {
            hJ.parentElement.removeChild(hJ);
          }
          hC.trigger("pluginDestroyed", {
            type: "pluginDestroyed",
            name: hU
          });
        }
      };
      const hj = (hC, hU, hR, hJ) => {
        var hD = (0, hc.Nq)(hU);
        var hd = Object.keys(hB);
        var hJ = (hJ = hJ)[L0 = hU] || hJ[(0, hc.sb)(L0)] || hJ[(0, hc.Nq)(L0)] || {};
        if (hd.indexOf(hD) === -1) {
          throw new Error("setupDynamicPlugin must be called with plugins with one of the following plugins: " + hd.toString());
        }
        hA(hC, hD);
        var L0 = ((L1, L2, L3) => {
          const L4 = Object.assign({}, L1);
          const L5 = Object.assign({}, L2);
          const L6 = Object.keys(L5).filter(L7 => L7 === null);
          L6.forEach(L7 => delete L4[L7]);
          L6.forEach(L7 => delete L5[L7]);
          L3.forEach(L7 => {
            if (L7.some(L8 => L5[L8])) {
              L7.forEach(L8 => delete L4[L8]);
            }
          });
          return Object.assign({}, L4, L5);
        })(hJ, hR, hB[hD]);
        return (0, hg.Ve)(hU, L0, hC);
      };
      var hF = hh(4429);
      var hN = hh(6042);
      let hP = 0;
      function hn(hC, hU) {
        (hU = new hr.ZP(hU)).on(ha.Rc, hR => {
          hC._qoe.tick("ready");
          hR.setupTime = hC._qoe.between("setup", "ready");
        });
        hU.on("all", (hR, hJ) => {
          hC.trigger(hR, hJ);
        });
        return hU;
      }
      function hS(hC, hU) {
        const hR = hC.plugins;
        const hJ = Object.keys(hR).map(hD => {
          var hd = hR[hD];
          delete hR[hD];
          return hd;
        });
        if (hU.get("setupConfig")) {
          hC.trigger("remove");
        }
        hC.off();
        hU.playerDestroy();
        hJ.forEach(hD => {
          if (hD.reset) {
            try {
              hD.reset();
            } catch (hd) {}
          } else if (hD.destroy) {
            try {
              hD.destroy();
            } catch (L0) {}
          }
        });
        hU.getContainer().removeAttribute("data-jwplayer-id");
      }
      function hp(hC) {
        const hU = ++hP;
        const hR = hC.id || "player-" + hU;
        const hJ = new hx.Z();
        const hD = {};
        let hd = hn(this, hC);
        hJ.tick("init");
        hC.setAttribute("data-jwplayer-id", hR);
        Object.defineProperties(this, {
          id: {
            enumerable: true,
            get: () => hR
          },
          uniqueId: {
            enumerable: true,
            get: () => hU
          },
          plugins: {
            enumerable: true,
            get: () => hD
          },
          _qoe: {
            enumerable: true,
            get: () => hJ
          },
          version: {
            enumerable: true,
            get: () => hl.i
          },
          Events: {
            enumerable: true,
            get: () => hb.ZP
          },
          utils: {
            enumerable: true,
            get: () => hF.Z
          },
          _: {
            enumerable: true,
            get: () => hN.ZP
          }
        });
        Object.assign(this, {
          _events: {},
          setup(L0) {
            hJ.clear("ready");
            hJ.tick("setup");
            if (hd) {
              hS(this, hd);
            }
            (hd = hn(this, hC)).init(L0, this);
            return this.on(L0.events, null, this);
          },
          remove() {
            if (this.getPip()) {
              this.setPip(false);
            }
            var L0 = this;
            for (let L1 = hL.Z.length; L1--;) {
              if (hL.Z[L1].uniqueId === L0.uniqueId) {
                hL.Z.splice(L1, 1);
                break;
              }
            }
            if (hd) {
              hS(this, hd);
            }
            Object.keys(hD).forEach(L2 => {
              delete hD[L2];
            });
            return this;
          },
          qoe() {
            var L0 = hd.getItemQoe();
            return {
              setupTime: this._qoe.between("setup", "ready"),
              firstFrame: L0.getFirstFrame ? L0.getFirstFrame() : null,
              player: this._qoe.dump(),
              item: L0.dump()
            };
          },
          addCues(L0) {
            if (Array.isArray(L0)) {
              hd.addCues(L0);
            }
            return this;
          },
          getAudioTracks: () => hd.getAudioTracks(),
          getBuffer: () => hd.get("buffer"),
          getCaptions: () => hd.get("captions"),
          getCaptionsList: () => hd.getCaptionsList(),
          getConfig: () => hd.getConfig(),
          getContainer: () => hd.getContainer(),
          getControls: () => hd.get("controls"),
          getCues: () => hd.getCues(),
          getCurrentAudioTrack: () => hd.getCurrentAudioTrack(),
          getCurrentCaptions: () => hd.getCurrentCaptions(),
          getCurrentQuality: () => hd.getCurrentQuality(),
          getCurrentTime: () => hd.get("currentTime"),
          getAbsolutePosition: () => hd.getAbsolutePosition(),
          getDuration: () => hd.get("duration"),
          getEnvironment: () => ho,
          getFullscreen: () => hd.get("fullscreen"),
          getHeight: () => hd.getHeight(),
          getItemMeta: () => hd.get("itemMeta") || {},
          getMute: () => hd.getMute(),
          getContainerPercentViewable: () => hd.get("intersectionRatio"),
          getPercentViewable: () => hd.get("visibility"),
          getPip: () => hd.get("pip"),
          getPlaybackRate: () => hd.get("playbackRate"),
          getPlaylist: () => hd.get("playlist"),
          getPlaylistIndex: () => hd.get("item"),
          getPlaylistItem(L0) {
            var L1;
            if (hF.Z.exists(L0)) {
              if (L1 = this.getPlaylist()) {
                return L1[L0];
              } else {
                return null;
              }
            } else {
              return hd.get("playlistItem");
            }
          },
          getPosition: () => hd.get("position"),
          getProvider: () => hd.getProvider(),
          getQualityLevels: () => hd.getQualityLevels(),
          getSafeRegion: (L0 = true) => hd.getSafeRegion(L0),
          getState: () => hd.getState(),
          getStretching: () => hd.get("stretching"),
          getContainerViewable: () => hd.get("containerViewable"),
          getViewable: () => hd.get("viewable"),
          getVisualQuality: () => hd.getVisualQuality(),
          getVolume: () => hd.get("volume"),
          getWidth: () => hd.getWidth(),
          isReady: () => hd.isReady(),
          setCaptions(L0) {
            hd.setCaptions(L0);
            return this;
          },
          setConfig(L0) {
            hd.setConfig(L0);
            return this;
          },
          setControls(L0) {
            hd.setControls(L0);
            return this;
          },
          setCurrentAudioTrack(L0) {
            hd.setCurrentAudioTrack(L0);
          },
          setCurrentCaptions(L0) {
            hd.setCurrentCaptions(L0);
          },
          setCurrentQuality(L0) {
            hd.setCurrentQuality(L0);
          },
          setFullscreen(L0) {
            hd.setFullscreen(L0);
            return this;
          },
          setAllowFullscreen(L0) {
            hd.setAllowFullscreen(L0);
            return this;
          },
          setMute(L0) {
            hd.setMute(L0);
            return this;
          },
          setPip(L0) {
            hd.setPip(L0);
            return this;
          },
          setPlaybackRate(L0) {
            hd.setPlaybackRate(L0);
            return this;
          },
          setPlaylistItem(L0, L1) {
            hd.setPlaylistItem(L0, L1);
            return this;
          },
          setCues(L0) {
            if (Array.isArray(L0)) {
              hd.setCues(L0);
            }
            return this;
          },
          setVolume(L0) {
            hd.setVolume(L0);
            return this;
          },
          load(L0, L1) {
            hd.load(L0, L1);
            return this;
          },
          play(L0) {
            hd.play(L0);
            return this;
          },
          pause(L0) {
            hd.pause(L0);
            return this;
          },
          playToggle(L0) {
            switch (this.getState()) {
              case ha.r0:
              case ha.Kb:
                return this.pause(L0);
              default:
                return this.play(L0);
            }
          },
          seek(L0, L1) {
            hd.seek(L0, L1);
            return this;
          },
          playlistItem(L0, L1) {
            hd.playlistItem(L0, L1);
            return this;
          },
          playlistNext(L0) {
            hd.playlistNext(L0);
            return this;
          },
          playlistPrev(L0) {
            hd.playlistPrev(L0);
            return this;
          },
          next(L0) {
            hd.next(L0);
            return this;
          },
          requestPip(L0) {
            hd.requestPip(L0);
            return this;
          },
          castToggle() {
            hd.castToggle();
            return this;
          },
          stopCasting() {
            hd.stopCasting();
            return this;
          },
          requestCast(L0) {
            hd.requestCast(L0);
            return this;
          },
          createInstream: () => hd.createInstream(),
          stop() {
            hd.stop();
            return this;
          },
          resize(L0, L1) {
            hd.resize(L0, L1);
            return this;
          },
          addButton(L0, L1, L2, L3, L4) {
            hd.addButton(L0, L1, L2, L3, L4);
            return this;
          },
          removeButton(L0) {
            hd.removeButton(L0);
            return this;
          },
          getMediaElement: () => hd.getMediaElement(),
          attachMedia() {
            hd.attachMedia();
            return this;
          },
          detachMedia() {
            hd.detachMedia();
            return this;
          },
          isBeforeComplete: () => hd.isBeforeComplete(),
          isBeforePlay: () => hd.isBeforePlay(),
          setPlaylistItemCallback(L0, L1) {
            hd.setItemCallback(L0, L1);
          },
          removePlaylistItemCallback() {
            hd.setItemCallback(null);
          },
          getPlaylistItemPromise: L0 => hd.getItemPromise(L0),
          getFloating: () => Boolean(hd.get("isFloating")),
          setFloating(L0) {
            hd.setConfig({
              floating: {
                mode: L0 ? "always" : "never"
              }
            });
          },
          getChapters: () => hd.getChapters(),
          getCurrentChapter: () => hd.getCurrentChapter(),
          setChapter: L0 => hd.setChapter(L0),
          setupDynamicPlugin(L0, L1) {
            if (L0) {
              return hj(this, L0, L1, hd.get("plugins"));
            } else {
              return Promise.resolve();
            }
          },
          destroyDynamicPlugin(L0) {
            if (L0) {
              return hA(this, L0);
            }
          }
        });
      }
      Object.assign(hp.prototype, {
        on(hC, hU, hR) {
          return hb.on.call(this, hC, hU, hR);
        },
        once(hC, hU, hR) {
          return hb.IH.call(this, hC, hU, hR);
        },
        off(hC, hU, hR) {
          return hb.S1.call(this, hC, hU, hR);
        },
        trigger(hC, hU) {
          (hU = hN.ZP.isObject(hU) ? Object.assign({}, hU) : {}).type = hC;
          return (hM.Z.debug ? hb.X$ : hb.wj).call(this, hC, hU);
        },
        getPlugin(hC) {
          return this.plugins[hC];
        },
        addPlugin(hC, hU) {
          if (typeof (this.plugins[hC] = hU).addToPlayer == "function") {
            if (this.isReady()) {
              hU.addToPlayer.call(this, true);
            } else {
              this.on("ready", function () {
                hU.addToPlayer.call(this, false);
              });
            }
          }
          if (hU.resize) {
            this.on("resize", hU.resizeHandler);
          }
        },
        registerPlugin(hC, hU, hR) {
          (0, hg.fo)(hC, hU, hR);
        },
        getAdBlock: () => false,
        playAd(hC) {},
        pauseAd(hC) {},
        skipAd() {}
      });
      hh.p = (0, h9.loadFrom)();
      function hH(hC) {
        let hU;
        let hR;
        if (hC) {
          if (typeof hC == "string") {
            if (!(hU = hk(hC))) {
              hR = document.getElementById(hC);
            }
          } else if (typeof hC == "number") {
            hU = hL.Z[hC];
          } else if (hC.nodeType) {
            hR = hC;
            hU = hk(hR.id || hR.getAttribute("data-jwplayer-id"));
          }
        } else {
          hU = hL.Z[0];
        }
        if (hU) {
          return hU;
        }
        if (hR) {
          const hJ = new hp(hR);
          hL.Z.push(hJ);
          return hJ;
        }
        return {
          registerPlugin: hg.fo
        };
      }
      const hk = hC => {
        for (let hU = 0; hU < hL.Z.length; hU++) {
          if (hL.Z[hU].id === hC) {
            return hL.Z[hU];
          }
        }
        return null;
      };
      const ht = hC => {
        Object.defineProperties(hC, {
          api: {
            get: () => hX,
            set() {}
          },
          version: {
            get: () => hl.i,
            set() {}
          },
          debug: {
            get: () => hM.Z.debug,
            set(hU) {
              hM.Z.debug = Boolean(hU);
            }
          }
        });
      };
      ht(hH);
      const hq = hH;
      var hK = hh(5882);
      var hV = hh(6599);
      var h9 = hh(676);
      var hu = hh(5592);
      var hW = hh(6769);
      var hy = hh(9025);
      var hZ = hN.ZP.extend;
      var hG = {
        _: hN.ZP
      };
      hG.utils = Object.assign(hF.Z, {
        key: hV.ZP,
        extend: hZ,
        scriptloader: h9.ZP,
        rssparser: {
          parse: hW.Z
        },
        tea: hu.p,
        UI: hK.ZP
      });
      hG.utils.css.style = hG.utils.style;
      hG.vid = hy.Z;
      var hV = hG;
      var hE = hh(7543);
      function hz(hC) {
        var hU = {};
        hO(this, hC, hC, hU);
        hO(this, hC, hp.prototype, hU);
      }
      function hv(hC) {
        if ((hC = hq(hC)).uniqueId) {
          return hC._publicApi ||= new hz(hC);
        } else {
          return hC;
        }
      }
      const hi = /^(?:on(?:ce)?|off|trigger)$/;
      const hT = hC => {
        console.warn("The API method jwplayer()." + hC + "() is disabled in the free edition of JW Player.");
      };
      const he = (hC, hU) => {
        if (hU.length) {
          const hR = hC.getPlugin("jwpsrv");
          if (hR != null && hR.trackExternalAPIUsage) {
            hU.forEach(hJ => {
              var hD = hR;
              var hd = hJ[0];
              var hJ = hJ[1];
              try {
                var L0 = (L1 => {
                  switch (hd) {
                    case "setup":
                      return Boolean(L1);
                    case "getSafeRegion":
                    case "pauseAd":
                    case "setControls":
                    case "setFullscreen":
                    case "setMute":
                      if (Boolean(L1) === L1) {
                        return L1;
                      } else {
                        return undefined;
                      }
                    case "setPlaylistItem":
                    case "getPlaylistItem":
                      if ((L1 | 0) === L1) {
                        return L1;
                      } else {
                        return undefined;
                      }
                    case "setPlaybackRate":
                    case "setVolume":
                      return Number(L1);
                    case "setConfig":
                      return Object.keys(Object(L1)).join(",");
                    case "on":
                    case "once":
                    case "off":
                    case "trigger":
                    case "getPlugin":
                    case "addPlugin":
                    case "registerPlugin":
                      return "" + L1;
                  }
                  return null;
                })(hJ);
                hD.trackExternalAPIUsage(hd, L0);
              } catch (L1) {
                if (hM.Z.debug) {
                  console.warn(L1);
                }
              }
            });
            hU.length = 0;
          }
        }
      };
      const hQ = (hC, hU, hR, hJ, hD) => function (...hd) {
        const L0 = hd[0];
        const L1 = hU._trackCallQueue ||= [];
        const L2 = hi.test(hR);
        const L3 = L2 && hd[1] && hd[1]._callback;
        const L4 = hD.edition || (L5 = hD, L8 = hU.getConfig().edition, L5.edition = L8);
        if (L4 === "free") {
          if (["addButton", "addCues", "detachMedia", "load", "next", "pause", "play", "playlistItem", "playlistNext", "playlistPrev", "playToggle", "resize", "seek", "setCaptions", "setConfig", "setControls", "setCues", "setFullscreen", "setMute", "setPlaybackRate", "setPlaylistItem", "setVolume", "stop"].indexOf(hR) > -1) {
            hT(hR);
            return hC;
          }
          if (["createInstream", "setCurrentAudioTrack", "setCurrentCaptions", "setCurrentQuality"].indexOf(hR) > -1) {
            hT(hR);
            return null;
          }
        }
        if (!L3) {
          L1.push([hR, L0]);
        }
        if (L2) {
          he(hU, L1);
          return hU[hR].apply(hC, hd);
        }
        var L5 = hR;
        var L6 = hd;
        var L7 = {
          reason: L5 !== "play" && L5 !== "seek" && L5 !== "pause" && (0, hE.C)() ? "interaction" : "external"
        };
        switch (L5) {
          case "play":
          case "pause":
          case "playToggle":
          case "playlistNext":
          case "playlistPrev":
          case "next":
            L6[0] = L7;
            break;
          case "seek":
          case "playlistItem":
            L6[1] = L7;
        }
        var L8 = hU[hR](...hd);
        if (hR === "remove") {
          hU.off.call(hC);
        } else if (hR === "setup") {
          hU.off.call(hC);
          hU.off(L0.events, null, hU);
          hU.on.call(hC, L0.events, null, hC);
          hU.on("all", (L9, Lh) => {
            if (L9 === "ready") {
              const LL = Object.keys(hU).filter(LK => LK[0] !== "_" && hJ.indexOf(LK) === -1 && typeof hU[LK] == "function");
              const LV = hJ.concat(LL);
              LL.forEach(LK => {
                hC[LK] = hQ(hC, hU, LK, LV, hD);
              });
            }
            hU.trigger.call(hC, L9, Lh);
            he(hU, L1);
          });
        }
        he(hU, L1);
        if (L8 === hU) {
          return hC;
        } else {
          return L8;
        }
      };
      const hI = ["getMediaElement"];
      const hO = (hC, hU, hR, hJ) => {
        const hD = Object.keys(hR);
        hD.forEach(hd => {
          var L0 = hR[hd];
          if (hI.indexOf(hd) === -1) {
            if (typeof L0 == "function" && hd !== "Events") {
              hC[hd] = hQ(hC, hU, hd, hD, hJ);
            } else if (hd === "_events") {
              hC._events = {};
            } else {
              Object.defineProperty(hC, hd, {
                enumerable: true,
                get: () => hR[hd]
              });
            }
          }
        });
      };
      const hs = window;
      Object.assign(hq, hV);
      Object.assign(hv, hV);
      ht(hv);
      if (typeof hs.define == "function" && hs.define.amd) {
        hs.define([], function () {
          return hv;
        });
      }
      let hY = hv;
      const hf = hY = hs.jwplayer ? hs.jwplayer : hY;
    },
    8675: (h8, h9, hh) => {
      'use strict';

      hh.d(h9, {
        Ve: () => hL.Ve,
        ZP: () => hV,
        fo: () => hL.fo
      });
      hh(3487);
      var hL = hh(1241);
      const hV = hL.ZP;
    },
    3487: (h8, h9, hh) => {
      'use strict';

      hh.d(h9, {
        MK: () => hL.MK,
        Nq: () => hL.Nq,
        bX: () => hV,
        sb: () => hK
      });
      hh(1569);
      var hL = hh(7164);
      const hV = function (hw) {
        let hX = (0, hL.bX)(hw);
        if (hw) {
          switch ((0, hL.Nq)(hw)) {
            case "jwpsrv":
              hX = 305001;
              break;
            case "googima":
              hX = 305002;
              break;
            case "vast":
              hX = 305003;
              break;
            case "freewheel":
              hX = 305004;
              break;
            case "dai":
              hX = 305005;
              break;
            case "gapro":
              hX = 305006;
              break;
            case "bidding":
              hX = 305007;
          }
        }
        return hX;
      };
      const hK = hw => {
        let hX = "";
        if (window.location.protocol !== "https:" && window.location.protocol !== "http:") {
          hX = "https:";
        }
        hw = {
          bidding: "//ssl.p.jwpcdn.com/player/v/8.32.1/bidding.js",
          jwpsrv: "//ssl.p.jwpcdn.com/player/v/8.32.1/jwpsrv.js",
          dai: "//ssl.p.jwpcdn.com/player/v/8.32.1/dai.js",
          vast: "//ssl.p.jwpcdn.com/player/v/8.32.1/vast.js",
          googima: "//ssl.p.jwpcdn.com/player/v/8.32.1/googima.js",
          freewheel: "//ssl.p.jwpcdn.com/player/v/8.32.1/freewheel.js",
          gapro: "//ssl.p.jwpcdn.com/player/v/8.32.1/gapro.js",
          interactive: "//ssl.p.jwpcdn.com/player/v/8.32.1/interactive.js"
        }[hw];
        if (hw) {
          return hX + hw;
        } else {
          return "";
        }
      };
    },
    1918: (h8, h9, hh) => {
      'use strict';

      hh.d(h9, {
        Gb: () => hM,
        d3: () => ho,
        lD: () => hl,
        w0: () => hg
      });
      var hL = hh(386);
      const hV = [{
        configName: "clearkey",
        keyName: "org.w3.clearkey"
      }, {
        configName: "widevine",
        keyName: "com.widevine.alpha"
      }, {
        configName: "playready",
        keyName: "com.microsoft.playready"
      }];
      const hK = [];
      const hw = {};
      let hX;
      const hg = hr => hr.some(ha => Boolean(ha.drm) || ha.sources.some(hx => Boolean(hx.drm)));
      const hl = hr => hX || ((Boolean(navigator.requestMediaKeySystemAccess) && Boolean(window.MediaKeySystemAccess.prototype.getConfiguration) || Boolean(window.MSMediaKeys)) && (0, hL.Z)(hr)("drm") ? (hV.forEach(ha => {
        hx = ha.keyName;
        var hx;
        var hb = (navigator.requestMediaKeySystemAccess ? navigator.requestMediaKeySystemAccess(hx, [{
          initDataTypes: ["cenc"],
          videoCapabilities: [{
            contentType: "video/mp4;codecs=\"avc1.4d401e\""
          }],
          audioCapabilities: [{
            contentType: "audio/mp4;codecs=\"mp4a.40.2\""
          }]
        }]) : new Promise((hc, hm) => {
          let hB;
          try {
            hB = new window.MSMediaKeys(hx);
          } catch (hA) {
            hm(hA);
            return;
          }
          hc(hB);
        })).then(function () {
          hw[ha.configName] = true;
        }).catch(function () {
          hw[ha.configName] = false;
        });
        hK.push(hb);
      }), hX = Promise.all(hK)) : Promise.resolve());
      const hM = hr => hw[hr];
      const ho = hr => {
        if (hX) {
          return Object.keys(hr).some(ha => hM(ha));
        }
      };
    },
    2963: (h8, h9, hh) => {
      'use strict';

      hh.d(h9, {
        B: () => hr
      });
      var h9 = hh(6593);
      var hL = hh(8348);
      var hV = hh(386);
      var hK = hh(1918);
      var hw = hh(9025);
      const hX = ha => {
        if (ha == null || !ha.length || !Array.isArray(ha)) {
          ha = ["video/mp4;codecs=\"avc1.4d400d,mp4a.40.2\""];
        }
        const hx = window.MediaSource;
        return !!hx && !!hx.isTypeSupported && ha.every(hb => hx.isTypeSupported(hb));
      };
      const hg = ha => /hls|m3u8/.test(((ha == null ? undefined : ha.type) || "").toLowerCase()) || ((ha == null ? undefined : ha.file) || "").toLowerCase().indexOf(".m3u8") > -1;
      const hl = ha => /mpd|dash/.test(((ha == null ? undefined : ha.type) || "").toLowerCase()) || ((ha == null ? undefined : ha.file) || "").toLowerCase().indexOf("mpd-time-csf") > -1;
      const hM = h9.B.find(ha => ha.name === "html5");
      const ho = hM.supports;
      hM.supports = function (...ha) {
        var [hx, hb] = ha;
        var ha = ho.apply(this, ha);
        if (hl(hx)) {
          return false;
        }
        if (ha && hx.drm && hg(hx)) {
          const hc = (0, hV.Z)(hb)("drm");
          if (hc && hx.drm.fairplay) {
            const hm = window.WebKitMediaKeys;
            if (hm == null || hm.isTypeSupported == null) {
              return undefined;
            } else {
              return hm.isTypeSupported("com.apple.fps.1_0", "video/mp4");
            }
          }
          return hc;
        }
        return ha;
      };
      h9.B.push({
        name: "shaka",
        supports: ha => (!ha.drm || !!(0, hK.d3)(ha.drm)) && hX(ha.mediaTypes) && (hl(ha) || hg(ha))
      });
      h9.B.unshift({
        name: "hlsjs",
        supports: ha => {
          var hx;
          var hb;
          return !ha.drm && !!hg(ha) && !(hx = Boolean(hw.Z == null || hw.Z.canPlayType == null ? undefined : hw.Z.canPlayType("application/vnd.apple.mpegURL")), hb = typeof (ha == null ? undefined : ha.safarihlsjs) == "boolean" && ha.safarihlsjs, typeof (ha == null ? undefined : ha.hlsjsdefault) == "boolean" && ha.hlsjsdefault, typeof (ha == null ? undefined : ha.androidhls) == "boolean" && ha.androidhls, hx && hL.Browser.safari && !hb) && (!hx || !hL.OS.android || ha.androidhls === false || ha.hlsjsdefault !== false) && hX(ha.mediaTypes);
        }
      });
      const hr = h9.B;
    },
    2303: (h8, h9, hh) => {
      'use strict';

      hh.d(h9, {
        Z: () => hl
      });
      var hL = hh(2963);
      var hV = hh(12);
      var hK = hh(670);
      var hw = hh(2894);
      var h9 = {
        html5: () => hh.e(250).then(function (hM) {
          var ho = hh(9181).default;
          (0, hK.Z)(ho);
          return ho;
        }.bind(null, hh)).catch((0, hw.Ep)(152))
      };
      Object.assign(h9, {
        shaka: () => hh.e(371).then(function (hM) {
          var ho = hh(2287).default;
          (0, hK.Z)(ho);
          return ho;
        }.bind(null, hh)).catch((0, hw.Ep)(154)),
        hlsjs: () => hh.e(98).then(function (hM) {
          var ho = hh(9054).default;
          (0, hK.Z)(ho);
          return ho;
        }.bind(null, hh)).catch((0, hw.Ep)(153))
      });
      function hX(hM) {
        this.config = hM || {};
      }
      const hg = h9;
      Object.assign(hX.prototype, {
        load(hM) {
          const ho = hg[hM];
          const hr = () => Promise.reject(new Error("Failed to load media"));
          if (ho) {
            return ho().then(() => {
              return hV.U[hM] || hr();
            });
          } else {
            return hr();
          }
        },
        providerSupports: (hM, ho) => hM.supports(ho),
        choose(hM) {
          if (hM === Object(hM)) {
            var ho = hL.B.length;
            for (let ha = 0; ha < ho; ha++) {
              var hr = hL.B[ha];
              if (this.providerSupports(hr, hM)) {
                return {
                  priority: ho - ha - 1,
                  name: hr.name,
                  type: hM.type,
                  providerToCheck: hr,
                  provider: hV.U[hr.name]
                };
              }
            }
          }
          return {};
        }
      });
      h9 = hX;
      h9.prototype.providerSupports = function (hM, ho) {
        return hM.supports(ho, this.config.edition);
      };
      const hl = h9;
    },
    5140: (h8, h9, hh) => {
      'use strict';

      hh.d(h9, {
        t: () => hL
      });
      const hL = window.atob;
      window.btoa;
    },
    386: (h8, h9, hh) => {
      'use strict';

      hh.d(h9, {
        Z: () => function (hx) {
          const hb = {
            setup: [hL, hV, hK, hw, hX, hg, hM, ho, hr, hl],
            drm: [hX, hg, hM, ho, hr],
            ads: [hM, ho, hr, hl, hX, hg, hK],
            jwpsrv: [hL, hV, hK, hw, hX, hg, hM, hr, hl, ha],
            discovery: [hM, hX, hg, hr, ho]
          };
          return function (hc) {
            return hb[hc] && hb[hc].indexOf(hx) > -1;
          };
        }
      });
      const hL = "free";
      const hV = "starter";
      const hK = "business";
      const hw = "premium";
      const hX = "enterprise";
      const hg = "developer";
      const hl = "platinum";
      const hM = "ads";
      const ho = "unlimited";
      const hr = "trial";
      const ha = "invalid";
    },
    7010: (h8, h9, hh) => {
      'use strict';

      hh.d(h9, {
        Z: () => function () {
          return hV(window, document.location.search);
        }
      });
      var hL = hh(5950);
      const hV = function (hK, hw) {
        return hK.location !== hK.parent.location && (0, hL.ke)(hw, "isAMP");
      };
    },
    560: (h8, h9, hh) => {
      'use strict';

      hh.d(h9, {
        Z: () => hV
      });
      const hL = () => hL._iframe;
      hL.mock = hK => {
        hL._iframe = hK;
      };
      hL.unmock = () => {
        hL._iframe = hL._original;
      };
      hL._iframe = window.top !== window.self;
      hL._original = hL._iframe;
      const hV = hL;
    },
    6599: (h8, h9, hh) => {
      'use strict';

      hh.d(h9, {
        ZP: () => hl,
        u5: () => hX
      });
      var hL = hh(5592);
      var hV = hh(386);
      var hK = hh(5140);
      var hw = hh(4446);
      const hX = 100013;
      const hg = "invalid";
      const hl = class {
        constructor(hM) {
          this.keyData = (ho => {
            let hr;
            let ha;
            let hx;
            try {
              var hb = (0, hL.p)(ho || "", (0, hK.t)("NDh2aU1Cb0NHRG5hcDFRZQ==")).split("/");
              if ((hr = hb[0]) === "pro") {
                hr = "premium";
              }
              if (!(0, hV.Z)(hr)("setup")) {
                hr = hg;
              }
              if (hb.length > 2) {
                ha = hb[1];
                const hc = parseInt(hb[2], 10);
                if (hc > 0) {
                  (hx = new Date()).setTime(hc);
                }
              }
            } catch (hm) {
              hr = hg;
            }
            return {
              edition: hr,
              token: ha,
              expiration: hx
            };
          })(hM);
          this.edition = function () {
            return this.keyData.edition;
          };
          this.token = function () {
            return this.keyData.token;
          };
          this.expiration = function () {
            return this.keyData.expiration;
          };
          this.duration = function () {
            if (this.keyData.expiration) {
              return this.keyData.expiration.getTime() - new Date().getTime();
            } else {
              return 0;
            }
          };
          this.error = function () {
            let ho;
            if (hM === undefined) {
              ho = 100011;
            } else if (this.keyData.edition !== hg && this.keyData.token) {
              if (this.duration() < 0) {
                ho = hX;
              }
            } else {
              ho = 100012;
            }
            if (ho) {
              return new hw.rG(hw.pJ, ho);
            } else {
              return null;
            }
          };
        }
      };
    },
    67: (h8, h9, hh) => {
      'use strict';

      hh.d(h9, {
        X: () => hV
      });
      var hL = hh(560);
      const hV = () => {
        let hK = window.location.host;
        if ((0, hL.Z)()) {
          hK = (document.referrer ? (hw = document.referrer, (hX = document.createElement("a")).href = hw, hX) : {}).host;
          try {
            hK = hK || window.top.location.host;
          } catch (hg) {}
        }
        var hw;
        var hX;
        return hK;
      };
    },
    5592: (h8, h9, hh) => {
      'use strict';

      hh.d(h9, {
        p: () => hK
      });
      var hL = hh(5140);
      const hV = hw => {
        var hX = new Array(Math.ceil(hw.length / 4));
        for (let hg = 0; hg < hX.length; hg++) {
          hX[hg] = hw.charCodeAt(hg * 4) + (hw.charCodeAt(hg * 4 + 1) << 8) + (hw.charCodeAt(hg * 4 + 2) << 16) + (hw.charCodeAt(hg * 4 + 3) << 24);
        }
        return hX;
      };
      const hK = function (hw, hX) {
        hw = String(hw);
        hX = String(hX);
        if (hw.length === 0) {
          return "";
        }
        var hg = hV((0, hL.t)(hw));
        var hl = hV(unescape(encodeURIComponent(hX)).slice(0, 16));
        var hM = hg.length;
        let ho;
        let hr;
        let ha = void hg[hM - 1];
        let hx = hg[0];
        let hb = Math.floor(6 + 52 / hM) * 2654435769;
        while (hb) {
          hr = hb >>> 2 & 3;
          for (let hc = hM - 1; hc >= 0; hc--) {
            ho = ((ha = hg[hc > 0 ? hc - 1 : hM - 1]) >>> 5 ^ hx << 2) + (hx >>> 3 ^ ha << 4) ^ (hb ^ hx) + (hl[hc & 3 ^ hr] ^ ha);
            hx = hg[hc] -= ho;
          }
          hb -= 2654435769;
        }
        hw = (hm => {
          var hB = new Array(hm.length);
          for (let hA = 0; hA < hm.length; hA++) {
            hB[hA] = String.fromCharCode(hm[hA] & 255, hm[hA] >>> 8 & 255, hm[hA] >>> 16 & 255, hm[hA] >>> 24 & 255);
          }
          return hB.join("");
        })(hg).replace(/\0+$/, "");
        try {
          return decodeURIComponent(escape(hw));
        } catch (hm) {
          return hw;
        }
      };
    },
    1096: function (h8) {
      h8.exports = function () {
        'use strict';

        function h9() {}
        function hh(hl) {
          if (!(this instanceof hh)) {
            throw new TypeError("Promises must be constructed via new");
          }
          if (typeof hl != "function") {
            throw new TypeError("not a function");
          }
          this._state = 0;
          this._handled = false;
          this._value = undefined;
          this._deferreds = [];
          hX(hl, this);
        }
        function hL(hl, hM) {
          while (hl._state === 3) {
            hl = hl._value;
          }
          if (hl._state !== 0) {
            hl._handled = true;
            hh._immediateFn(function () {
              var ho;
              var hr = hl._state === 1 ? hM.onFulfilled : hM.onRejected;
              if (hr !== null) {
                try {
                  ho = hr(hl._value);
                } catch (ha) {
                  hK(hM.promise, ha);
                  return;
                }
                hV(hM.promise, ho);
              } else {
                (hl._state === 1 ? hV : hK)(hM.promise, hl._value);
              }
            });
          } else {
            hl._deferreds.push(hM);
          }
        }
        function hV(hl, hM) {
          try {
            if (hM === hl) {
              throw new TypeError("A promise cannot be resolved with itself.");
            }
            if (hM && (typeof hM == "object" || typeof hM == "function")) {
              var ho = hM.then;
              if (hM instanceof hh) {
                hl._state = 3;
                hl._value = hM;
                return hw(hl);
              }
              if (typeof ho == "function") {
                return hX((hr = ho, ha = hM, function () {
                  hr.apply(ha, arguments);
                }), hl);
              }
            }
            hl._state = 1;
            hl._value = hM;
            hw(hl);
          } catch (hx) {
            hK(hl, hx);
          }
          var hr;
          var ha;
        }
        function hK(hl, hM) {
          hl._state = 2;
          hl._value = hM;
          hw(hl);
        }
        function hw(hl) {
          if (hl._state === 2 && hl._deferreds.length === 0) {
            hh._immediateFn(function () {
              if (!hl._handled) {
                hh._unhandledRejectionFn(hl._value);
              }
            });
          }
          for (var hM = 0, ho = hl._deferreds.length; hM < ho; hM++) {
            hL(hl, hl._deferreds[hM]);
          }
          hl._deferreds = null;
        }
        function hX(hl, hM) {
          var ho = false;
          try {
            hl(function (hr) {
              if (!ho) {
                ho = true;
                hV(hM, hr);
              }
            }, function (hr) {
              if (!ho) {
                ho = true;
                hK(hM, hr);
              }
            });
          } catch (hr) {
            if (!ho) {
              ho = true;
              hK(hM, hr);
            }
          }
        }
        var hg = setTimeout;
        hh.prototype.catch = function (hl) {
          return this.then(null, hl);
        };
        hh.prototype.then = function (hl, hM) {
          var ho = new this.constructor(h9);
          hL(this, new function (hr, ha, hx) {
            this.onFulfilled = typeof hl == "function" ? hl : null;
            this.onRejected = typeof ha == "function" ? ha : null;
            this.promise = hx;
          }(0, hM, ho));
          return ho;
        };
        hh.prototype.finally = function (hl) {
          var hM = this.constructor;
          return this.then(function (ho) {
            return hM.resolve(hl()).then(function () {
              return ho;
            });
          }, function (ho) {
            return hM.resolve(hl()).then(function () {
              return hM.reject(ho);
            });
          });
        };
        hh.all = function (hl) {
          return new hh(function (hM, ho) {
            if (!hl || hl.length === undefined) {
              throw new TypeError("Promise.all accepts an array");
            }
            var hr = Array.prototype.slice.call(hl);
            if (hr.length === 0) {
              return hM([]);
            }
            var ha = hr.length;
            for (var hx = 0; hr.length > hx; hx++) {
              (function hb(hc, hm) {
                try {
                  if (hm && (typeof hm == "object" || typeof hm == "function")) {
                    var hB = hm.then;
                    if (typeof hB == "function") {
                      return hB.call(hm, function (hA) {
                        hb(hc, hA);
                      }, ho);
                    }
                  }
                  hr[hc] = hm;
                  if (--ha == 0) {
                    hM(hr);
                  }
                } catch (hA) {
                  ho(hA);
                }
              })(hx, hr[hx]);
            }
          });
        };
        hh.resolve = function (hl) {
          if (hl && typeof hl == "object" && hl.constructor === hh) {
            return hl;
          } else {
            return new hh(function (hM) {
              hM(hl);
            });
          }
        };
        hh.reject = function (hl) {
          return new hh(function (hM, ho) {
            ho(hl);
          });
        };
        hh.race = function (hl) {
          return new hh(function (hM, ho) {
            for (var hr = 0, ha = hl.length; hr < ha; hr++) {
              hl[hr].then(hM, ho);
            }
          });
        };
        hh._immediateFn = typeof setImmediate == "function" ? function (hl) {
          setImmediate(hl);
        } : function (hl) {
          hg(hl, 0);
        };
        hh._unhandledRejectionFn = function (hl) {
          if (console !== undefined && console) {
            console.warn("Possible Unhandled Promise Rejection:", hl);
          }
        };
        return hh;
      }();
    },
    9563: h8 => {
      var h9;
      var hh;
      var hL = {};
      var hV = {};
      h9 = function () {
        return document.head || document.getElementsByTagName("head")[0];
      };
      function hK() {
        return hh = hh === undefined ? h9.apply(this, arguments) : hh;
      }
      function hw(hM, ho) {
        var hr;
        var ha;
        var hx = hV[hM];
        var hb = (hx = hx || (hV[hM] = {
          element: (hM = hM, (ha = document.createElement("style")).type = "text/css", ha.setAttribute("data-jwplayer-id", hM), hM = ha, hK().appendChild(hM), ha),
          counter: 0
        })).counter++;
        var hc = hx.element;
        function hm() {
          hl(hc, hb, "");
        }
        (hr = function (hB) {
          hl(hc, hb, hB);
        })(ho.css);
        return function (hB) {
          if (hB) {
            if (hB.css !== ho.css || hB.media !== ho.media) {
              hr((ho = hB).css);
            }
          } else {
            hm();
          }
        };
      }
      h8.exports = {
        style: function (hM, ho) {
          var hr = ho;
          for (var ha = function (hA) {
              var hj = [];
              var hF = {};
              for (var hN = 0; hN < hA.length; hN++) {
                var hP = hA[hN];
                var hn = hP[0];
                var hP = {
                  css: hP[1],
                  media: hP[2]
                };
                if (hF[hn]) {
                  hF[hn].parts.push(hP);
                } else {
                  hj.push(hF[hn] = {
                    id: hn,
                    parts: [hP]
                  });
                }
              }
              return hj;
            }(hM), hx = 0; hx < ha.length; hx++) {
            var hb = ha[hx];
            var hc = (hL[hr] || {})[hb.id];
            if (hc) {
              for (var hm = 0; hm < hc.parts.length; hm++) {
                hc.parts[hm](hb.parts[hm]);
              }
              for (; hm < hb.parts.length; hm++) {
                hc.parts.push(hw(hr, hb.parts[hm]));
              }
            } else {
              var hB = [];
              for (var hm = 0; hm < hb.parts.length; hm++) {
                hB.push(hw(hr, hb.parts[hm]));
              }
              hL[hr] = hL[hr] || {};
              hL[hr][hb.id] = {
                id: hb.id,
                parts: hB
              };
            }
          }
        },
        clear: function (hM, ho) {
          var hr = hL[hM];
          if (hr) {
            if (ho) {
              var ha = hr[ho];
              if (ha) {
                for (var hx = 0; hx < ha.parts.length; hx += 1) {
                  ha.parts[hx]();
                }
              }
            } else {
              for (var hb = Object.keys(hr), hc = 0; hc < hb.length; hc += 1) {
                for (var hm = hr[hb[hc]], hB = 0; hB < hm.parts.length; hB += 1) {
                  hm.parts[hB]();
                }
              }
              delete hL[hM];
            }
          }
        }
      };
      hX = [];
      var hX;
      function hg(hM, ho) {
        hX[hM] = ho;
        return hX.filter(Boolean).join("\n");
      }
      function hl(hM, ho, hr) {
        if (hM.styleSheet) {
          hM.styleSheet.cssText = hg(ho, hr);
        } else {
          hr = document.createTextNode(hr);
          if (ho = hM.childNodes[ho]) {
            hM.replaceChild(hr, ho);
          } else {
            hM.appendChild(hr);
          }
        }
      }
    },
    4737: h8 => {
      h8.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 150 29.3\" class=\"jw-svg-icon jw-svg-icon-watermark\" focusable=\"false\"><path d=\"M37,16.68c0,2.4-.59,3.43-2.4,3.43a5.75,5.75,0,0,1-3.38-1.23v3.58a7.39,7.39,0,0,0,3.67,1c3.67,0,5.73-1.91,5.73-6.32V5.86H37Z\"></path><polygon points=\"58.33 17.61 55.39 6.01 52.55 6.01 49.52 17.61 46.73 6.01 43.06 6.01 47.56 23.29 50.89 23.29 53.92 11.88 56.96 23.29 60.24 23.29 64.74 6.01 61.17 6.01 58.33 17.61\"></polygon><path d=\"M73.84,6H67.47V23.29h2.2v-6.9h4.17c3.47,0,5.77-1.77,5.77-5.19S77.31,6,73.84,6Zm0,8.47H69.72V8h4.12c2.3,0,3.57,1.22,3.62,3.28C77.46,13.21,76.19,14.48,73.84,14.48Z\"></path><path d=\"M99.2,6l-6,15.27H85V6H82.8V23.29H94.7l2-5.19h7.09l2,5.19H108L101.26,6ZM97.39,16.14l2.84-7.39L103,16.14Z\"></path><polygon points=\"113.98 14.18 108.99 6.01 106.59 6.01 112.81 16.14 112.81 23.29 115.01 23.29 115.01 16.14 121.33 6.01 118.98 6.01 113.98 14.18\"></polygon><polygon points=\"123.14 23.29 134.1 23.29 134.1 21.28 125.29 21.28 125.29 15.41 133.32 15.41 133.32 13.45 125.29 13.45 125.29 7.97 134.1 7.97 134.1 6.01 123.14 6.01 123.14 23.29\"></polygon><path d=\"M144.86,15.85c2.74-.39,4.41-2,4.41-4.85,0-3.23-2.26-5-5.73-5h-6.32V23.29h2.22V16h3.08l4.94,7.29H150Zm-5.42-1.71V8h4.06c2.3,0,3.62,1.17,3.62,3.08s-1.32,3.09-3.62,3.09Z\"></path><path d=\"M27.63.09a1,1,0,0,0-1.32.48c-.24.51-6.35,15.3-6.35,15.3-.2.46-.33.41-.33-.07,0,0,0-5.15,0-9.39,0-2.31-1.12-3.61-2.73-3.88A3.12,3.12,0,0,0,14.83,3a4.57,4.57,0,0,0-1.5,1.79c-.48.94-3.47,9.66-3.47,9.66-.16.46-.31.44-.31,0,0,0-.09-3.76-.18-4.64-.13-1.36-.44-3.59-2.2-3.7S4.77,8,4.36,9.24c-.29.84-1.65,5.35-1.65,5.35l-.2.46h0c-.06.24-.17.24-.24,0l-.11-.42Q2,14,1.74,13.31a1.71,1.71,0,0,0-.33-.66.83.83,0,0,0-.88-.22.82.82,0,0,0-.53.69,4.22,4.22,0,0,0,.07.79,29,29,0,0,0,1,4.6,1.31,1.31,0,0,0,1.8.66,3.43,3.43,0,0,0,1.24-1.81c.33-.81,2-5.48,2-5.48.18-.46.31-.44.29,0,0,0-.09,4.57-.09,6.64a13.11,13.11,0,0,0,.28,2.93,2.41,2.41,0,0,0,.82,1.27,2,2,0,0,0,1.41.4,2,2,0,0,0,.7-.24,3.15,3.15,0,0,0,.79-.71,12.52,12.52,0,0,0,1.26-2.11c.81-1.6,2.92-6.58,2.92-6.58.2-.46.33-.41.33.07,0,0-.26,8.36-.26,11.55a6.39,6.39,0,0,0,.44,2.33,2.8,2.8,0,0,0,1.45,1.61A2.57,2.57,0,0,0,18.79,29a3.76,3.76,0,0,0,1.28-1.32,15.12,15.12,0,0,0,1.07-2.31c.64-1.65,1.17-3.33,1.7-5s5-17.65,5.28-19a1.79,1.79,0,0,0,0-.46A1,1,0,0,0,27.63.09Z\"></path></svg>";
    }
  };
  var h5 = {};
  function h6(h8) {
    var h9 = h5[h8];
    if (h9 === undefined) {
      h9 = h5[h8] = {
        id: h8,
        loaded: false,
        exports: {}
      };
      h4[h8].call(h9.exports, h9, h9.exports, h6);
      h9.loaded = true;
    }
    return h9.exports;
  }
  h6.m = h4;
  h6.n = h8 => {
    var h9 = h8 && h8.__esModule ? () => h8.default : () => h8;
    h6.d(h9, {
      a: h9
    });
    return h9;
  };
  h6.d = (h8, h9) => {
    for (var hh in h9) {
      if (h6.o(h9, hh) && !h6.o(h8, hh)) {
        Object.defineProperty(h8, hh, {
          enumerable: true,
          get: h9[hh]
        });
      }
    }
  };
  h6.f = {};
  h6.e = h8 => Promise.all(Object.keys(h6.f).reduce((h9, hh) => {
    h6.f[hh](h8, h9);
    return h9;
  }, []));
  h6.u = h8 => ({
    63: "polyfills.webvtt",
    74: "jwplayer.controls.tizen",
    98: "provider.hlsjs",
    168: "jwplayer.amp",
    207: "jwplayer.core.controls.html5",
    250: "provider.html5",
    347: "vttparser",
    365: "related",
    371: "provider.shaka",
    493: "jwplayer.core.controls.polyfills",
    520: "provider.airplay",
    581: "jwplayer.core.controls",
    605: "jwplayer.core.controls.polyfills.html5",
    681: "jwplayer.core",
    716: "jwplayer.controls",
    926: "jwplayer.stats",
    943: "polyfills.intersection-observer",
    977: "provider.cast"
  })[h8] + ".js";
  h6.o = (h8, h9) => Object.prototype.hasOwnProperty.call(h8, h9);
  h0 = {};
  h1 = "jwplayer:";
  h6.l = (h8, h9, hh, hL) => {
    if (h0[h8]) {
      h0[h8].push(h9);
    } else {
      var hV;
      var hK;
      if (hh !== undefined) {
        for (var hw = document.getElementsByTagName("script"), hX = 0; hX < hw.length; hX++) {
          var hg = hw[hX];
          if (hg.getAttribute("src") == h8 || hg.getAttribute("data-webpack") == h1 + hh) {
            hV = hg;
            break;
          }
        }
      }
      if (!hV) {
        hK = true;
        (hV = document.createElement("script")).charset = "utf-8";
        hV.timeout = 55;
        if (h6.nc) {
          hV.setAttribute("nonce", h6.nc);
        }
        hV.setAttribute("data-webpack", h1 + hh);
        hV.src = h8;
      }
      h0[h8] = [h9];
      var h9 = (hM, ho) => {
        hV.onerror = hV.onload = null;
        clearTimeout(hl);
        var hr = h0[h8];
        delete h0[h8];
        if (hV.parentNode) {
          hV.parentNode.removeChild(hV);
        }
        if (hr) {
          hr.forEach(ha => ha(ho));
        }
        if (hM) {
          return hM(ho);
        }
      };
      var hl = setTimeout(h9.bind(null, undefined, {
        type: "timeout",
        target: hV
      }), 55000);
      hV.onerror = h9.bind(null, hV.onerror);
      hV.onload = h9.bind(null, hV.onload);
      if (hK) {
        document.head.appendChild(hV);
      }
    }
  };
  h6.r = h8 => {
    if (typeof Symbol != "undefined" && Symbol.toStringTag) {
      Object.defineProperty(h8, Symbol.toStringTag, {
        value: "Module"
      });
    }
    Object.defineProperty(h8, "__esModule", {
      value: true
    });
  };
  h6.nmd = h8 => {
    h8.paths = [];
    h8.children ||= [];
    return h8;
  };
  h6.p = "";
  h2 = {
    313: 0
  };
  h6.f.j = (h8, h9) => {
    var hh;
    var hL;
    var hV = h6.o(h2, h8) ? h2[h8] : undefined;
    if (hV !== 0) {
      if (hV) {
        h9.push(hV[2]);
      } else {
        hh = new Promise((hK, hw) => hV = h2[h8] = [hK, hw]);
        h9.push(hV[2] = hh);
        h9 = h6.p + h6.u(h8);
        hL = new Error();
        h6.l(h9, hK => {
          var hw;
          if (h6.o(h2, h8) && ((hV = h2[h8]) !== 0 && (h2[h8] = undefined), hV)) {
            hw = hK && (hK.type === "load" ? "missing" : hK.type);
            hK = hK && hK.target && hK.target.src;
            hL.message = "Loading chunk " + h8 + " failed.\n(" + hw + ": " + hK + ")";
            hL.name = "ChunkLoadError";
            hL.type = hw;
            hL.request = hK;
            hV[1](hL);
          }
        }, "chunk-" + h8, h8);
      }
    }
  };
  h7 = (h8, h9) => {
    var hh;
    var hL;
    var [hV, hK, hw] = h9;
    var hX = 0;
    if (hV.some(hg => h2[hg] !== 0)) {
      for (hh in hK) {
        if (h6.o(hK, hh)) {
          h6.m[hh] = hK[hh];
        }
      }
      if (hw) {
        hw(h6);
      }
    }
    for (h8 && h8(h9); hX < hV.length; hX++) {
      hL = hV[hX];
      if (h6.o(h2, hL) && h2[hL]) {
        h2[hL][0]();
      }
      h2[hL] = 0;
    }
  };
  (h3 = self.webpackChunkjwplayer = self.webpackChunkjwplayer || []).forEach(h7.bind(null, 0));
  h3.push = h7.bind(null, h3.push.bind(h3));
  h6.nc = undefined;
  var h7 = h6(6577);
  window.jwplayer = h7.default;
})();
var w = {
  aspectratio: "16:9",
  autostart: true,
  cast: {},
  controls: true,
  displaydescription: true,
  displaytitle: true,
  height: 360,
  key: "z9lJTLuXjuvI4BGbLJFlaWfYDmwGN0BHKG1Kxss2L1kCqngMa4eUFtshsu5/ZbbD",
  mute: false,
  ph: 1,
  pid: "KB5zFt7A",
  playbackRateControls: false,
  preload: "metadata",
  repeat: false,
  stretching: "uniform",
  width: "100%"
};
jwplayer.defaults = w;
(function (h0, h1) {
  var h2;
  var h3;
  if (typeof exports == "object" && typeof module != "undefined") {
    module.exports = h1();
  } else if (typeof define == "function" && define.amd) {
    define(h1);
  } else {
    h0 = h0 || self;
    h2 = h0.Cookies;
    (h3 = h0.Cookies = h1()).noConflict = function () {
      h0.Cookies = h2;
      return h3;
    };
  }
})(this, function () {
  'use strict';

  function h0(h2) {
    for (var h3 = 1; h3 < arguments.length; h3++) {
      var h4;
      var h5 = arguments[h3];
      for (h4 in h5) {
        h2[h4] = h5[h4];
      }
    }
    return h2;
  }
  var h1 = {
    read: function (h2) {
      return h2.replace(/(%[\dA-F]{2})+/gi, decodeURIComponent);
    },
    write: function (h2) {
      return encodeURIComponent(h2).replace(/%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g, decodeURIComponent);
    }
  };
  return function h2(h3, h4) {
    function h5(h6, h7, h8) {
      if (typeof document != "undefined") {
        if (typeof (h8 = h0({}, h4, h8)).expires == "number") {
          h8.expires = new Date(Date.now() + h8.expires * 86400000);
        }
        h8.expires &&= h8.expires.toUTCString();
        h6 = encodeURIComponent(h6).replace(/%(2[346B]|5E|60|7C)/g, decodeURIComponent).replace(/[()]/g, escape);
        h7 = h3.write(h7, h6);
        var h9;
        var hh = "";
        for (h9 in h8) {
          if (h8[h9] && (hh += "; " + h9, h8[h9] !== true)) {
            hh += "=" + h8[h9].split(";")[0];
          }
        }
        return document.cookie = h6 + "=" + h7 + hh;
      }
    }
    return Object.create({
      set: h5,
      get: function (h6) {
        if (typeof document != "undefined" && (!arguments.length || h6)) {
          for (var h7 = document.cookie ? document.cookie.split("; ") : [], h8 = {}, h9 = 0; h9 < h7.length; h9++) {
            var hh = h7[h9].split("=");
            var hL = hh.slice(1).join("=");
            if (hL[0] === "\"") {
              hL = hL.slice(1, -1);
            }
            try {
              var hV = h1.read(hh[0]);
              h8[hV] = h3.read(hL, hV);
              if (h6 === hV) {
                break;
              }
            } catch (hK) {}
          }
          if (h6) {
            return h8[h6];
          } else {
            return h8;
          }
        }
      },
      remove: function (h6, h7) {
        h5(h6, "", h0({}, h7, {
          expires: -1
        }));
      },
      withAttributes: function (h6) {
        return h2(this.converter, h0({}, this.attributes, h6));
      },
      withConverter: function (h6) {
        return h2(h0({}, this.converter, h6), this.attributes);
      }
    }, {
      attributes: {
        value: Object.freeze(h4)
      },
      converter: {
        value: Object.freeze(h3)
      }
    });
  }(h1, {
    path: "/"
  });
});
(function (h0) {
  (function () {
    if (typeof module != "undefined" && module.exports) {
      return function (h1) {
        module.exports = h1();
      };
    }
    if (typeof define == "function" && define.amd) {
      return define;
    }
    if (typeof window != "undefined") {
      return function (h1) {
        window.MobileDetect = h1();
      };
    }
    throw new Error("unknown environment");
  })()(function () {
    'use strict';

    function h1(hX, hg) {
      return hX != null && hg != null && hX.toLowerCase() === hg.toLowerCase();
    }
    function h2(hX, hg) {
      var hl;
      var hM;
      var ho = hX.length;
      if (ho && hg) {
        hl = hg.toLowerCase();
        hM = 0;
        for (; hM < ho; ++hM) {
          if (hl === hX[hM].toLowerCase()) {
            return true;
          }
        }
      }
      return false;
    }
    function h3(hX) {
      for (var hg in hX) {
        if (hV.call(hX, hg)) {
          hX[hg] = new RegExp(hX[hg], "i");
        }
      }
    }
    function h4(hX, hg) {
      this.ua = (hX || "").substr(0, 500);
      this._cache = {};
      this.maxPhoneWidth = hg || 600;
    }
    var h5;
    var h6;
    var h7;
    var h8;
    var h9;
    var hh;
    var hL = {
      mobileDetectRules: {
        phones: {
          iPhone: "\\biPhone\\b|\\biPod\\b",
          BlackBerry: "BlackBerry|\\bBB10\\b|rim[0-9]+|\\b(BBA100|BBB100|BBD100|BBE100|BBF100|STH100)\\b-[0-9]+",
          HTC: "HTC|HTC.*(Sensation|Evo|Vision|Explorer|6800|8100|8900|A7272|S510e|C110e|Legend|Desire|T8282)|APX515CKT|Qtek9090|APA9292KT|HD_mini|Sensation.*Z710e|PG86100|Z715e|Desire.*(A8181|HD)|ADR6200|ADR6400L|ADR6425|001HT|Inspire 4G|Android.*\\bEVO\\b|T-Mobile G1|Z520m|Android [0-9.]+; Pixel",
          Nexus: "Nexus One|Nexus S|Galaxy.*Nexus|Android.*Nexus.*Mobile|Nexus 4|Nexus 5|Nexus 6",
          Dell: "Dell[;]? (Streak|Aero|Venue|Venue Pro|Flash|Smoke|Mini 3iX)|XCD28|XCD35|\\b001DL\\b|\\b101DL\\b|\\bGS01\\b",
          Motorola: "Motorola|DROIDX|DROID BIONIC|\\bDroid\\b.*Build|Android.*Xoom|HRI39|MOT-|A1260|A1680|A555|A853|A855|A953|A955|A956|Motorola.*ELECTRIFY|Motorola.*i1|i867|i940|MB200|MB300|MB501|MB502|MB508|MB511|MB520|MB525|MB526|MB611|MB612|MB632|MB810|MB855|MB860|MB861|MB865|MB870|ME501|ME502|ME511|ME525|ME600|ME632|ME722|ME811|ME860|ME863|ME865|MT620|MT710|MT716|MT720|MT810|MT870|MT917|Motorola.*TITANIUM|WX435|WX445|XT300|XT301|XT311|XT316|XT317|XT319|XT320|XT390|XT502|XT530|XT531|XT532|XT535|XT603|XT610|XT611|XT615|XT681|XT701|XT702|XT711|XT720|XT800|XT806|XT860|XT862|XT875|XT882|XT883|XT894|XT901|XT907|XT909|XT910|XT912|XT928|XT926|XT915|XT919|XT925|XT1021|\\bMoto E\\b|XT1068|XT1092|XT1052",
          Samsung: "\\bSamsung\\b|SM-G950F|SM-G955F|SM-G9250|GT-19300|SGH-I337|BGT-S5230|GT-B2100|GT-B2700|GT-B2710|GT-B3210|GT-B3310|GT-B3410|GT-B3730|GT-B3740|GT-B5510|GT-B5512|GT-B5722|GT-B6520|GT-B7300|GT-B7320|GT-B7330|GT-B7350|GT-B7510|GT-B7722|GT-B7800|GT-C3010|GT-C3011|GT-C3060|GT-C3200|GT-C3212|GT-C3212I|GT-C3262|GT-C3222|GT-C3300|GT-C3300K|GT-C3303|GT-C3303K|GT-C3310|GT-C3322|GT-C3330|GT-C3350|GT-C3500|GT-C3510|GT-C3530|GT-C3630|GT-C3780|GT-C5010|GT-C5212|GT-C6620|GT-C6625|GT-C6712|GT-E1050|GT-E1070|GT-E1075|GT-E1080|GT-E1081|GT-E1085|GT-E1087|GT-E1100|GT-E1107|GT-E1110|GT-E1120|GT-E1125|GT-E1130|GT-E1160|GT-E1170|GT-E1175|GT-E1180|GT-E1182|GT-E1200|GT-E1210|GT-E1225|GT-E1230|GT-E1390|GT-E2100|GT-E2120|GT-E2121|GT-E2152|GT-E2220|GT-E2222|GT-E2230|GT-E2232|GT-E2250|GT-E2370|GT-E2550|GT-E2652|GT-E3210|GT-E3213|GT-I5500|GT-I5503|GT-I5700|GT-I5800|GT-I5801|GT-I6410|GT-I6420|GT-I7110|GT-I7410|GT-I7500|GT-I8000|GT-I8150|GT-I8160|GT-I8190|GT-I8320|GT-I8330|GT-I8350|GT-I8530|GT-I8700|GT-I8703|GT-I8910|GT-I9000|GT-I9001|GT-I9003|GT-I9010|GT-I9020|GT-I9023|GT-I9070|GT-I9082|GT-I9100|GT-I9103|GT-I9220|GT-I9250|GT-I9300|GT-I9305|GT-I9500|GT-I9505|GT-M3510|GT-M5650|GT-M7500|GT-M7600|GT-M7603|GT-M8800|GT-M8910|GT-N7000|GT-S3110|GT-S3310|GT-S3350|GT-S3353|GT-S3370|GT-S3650|GT-S3653|GT-S3770|GT-S3850|GT-S5210|GT-S5220|GT-S5229|GT-S5230|GT-S5233|GT-S5250|GT-S5253|GT-S5260|GT-S5263|GT-S5270|GT-S5300|GT-S5330|GT-S5350|GT-S5360|GT-S5363|GT-S5369|GT-S5380|GT-S5380D|GT-S5560|GT-S5570|GT-S5600|GT-S5603|GT-S5610|GT-S5620|GT-S5660|GT-S5670|GT-S5690|GT-S5750|GT-S5780|GT-S5830|GT-S5839|GT-S6102|GT-S6500|GT-S7070|GT-S7200|GT-S7220|GT-S7230|GT-S7233|GT-S7250|GT-S7500|GT-S7530|GT-S7550|GT-S7562|GT-S7710|GT-S8000|GT-S8003|GT-S8500|GT-S8530|GT-S8600|SCH-A310|SCH-A530|SCH-A570|SCH-A610|SCH-A630|SCH-A650|SCH-A790|SCH-A795|SCH-A850|SCH-A870|SCH-A890|SCH-A930|SCH-A950|SCH-A970|SCH-A990|SCH-I100|SCH-I110|SCH-I400|SCH-I405|SCH-I500|SCH-I510|SCH-I515|SCH-I600|SCH-I730|SCH-I760|SCH-I770|SCH-I830|SCH-I910|SCH-I920|SCH-I959|SCH-LC11|SCH-N150|SCH-N300|SCH-R100|SCH-R300|SCH-R351|SCH-R400|SCH-R410|SCH-T300|SCH-U310|SCH-U320|SCH-U350|SCH-U360|SCH-U365|SCH-U370|SCH-U380|SCH-U410|SCH-U430|SCH-U450|SCH-U460|SCH-U470|SCH-U490|SCH-U540|SCH-U550|SCH-U620|SCH-U640|SCH-U650|SCH-U660|SCH-U700|SCH-U740|SCH-U750|SCH-U810|SCH-U820|SCH-U900|SCH-U940|SCH-U960|SCS-26UC|SGH-A107|SGH-A117|SGH-A127|SGH-A137|SGH-A157|SGH-A167|SGH-A177|SGH-A187|SGH-A197|SGH-A227|SGH-A237|SGH-A257|SGH-A437|SGH-A517|SGH-A597|SGH-A637|SGH-A657|SGH-A667|SGH-A687|SGH-A697|SGH-A707|SGH-A717|SGH-A727|SGH-A737|SGH-A747|SGH-A767|SGH-A777|SGH-A797|SGH-A817|SGH-A827|SGH-A837|SGH-A847|SGH-A867|SGH-A877|SGH-A887|SGH-A897|SGH-A927|SGH-B100|SGH-B130|SGH-B200|SGH-B220|SGH-C100|SGH-C110|SGH-C120|SGH-C130|SGH-C140|SGH-C160|SGH-C170|SGH-C180|SGH-C200|SGH-C207|SGH-C210|SGH-C225|SGH-C230|SGH-C417|SGH-C450|SGH-D307|SGH-D347|SGH-D357|SGH-D407|SGH-D415|SGH-D780|SGH-D807|SGH-D980|SGH-E105|SGH-E200|SGH-E315|SGH-E316|SGH-E317|SGH-E335|SGH-E590|SGH-E635|SGH-E715|SGH-E890|SGH-F300|SGH-F480|SGH-I200|SGH-I300|SGH-I320|SGH-I550|SGH-I577|SGH-I600|SGH-I607|SGH-I617|SGH-I627|SGH-I637|SGH-I677|SGH-I700|SGH-I717|SGH-I727|SGH-i747M|SGH-I777|SGH-I780|SGH-I827|SGH-I847|SGH-I857|SGH-I896|SGH-I897|SGH-I900|SGH-I907|SGH-I917|SGH-I927|SGH-I937|SGH-I997|SGH-J150|SGH-J200|SGH-L170|SGH-L700|SGH-M110|SGH-M150|SGH-M200|SGH-N105|SGH-N500|SGH-N600|SGH-N620|SGH-N625|SGH-N700|SGH-N710|SGH-P107|SGH-P207|SGH-P300|SGH-P310|SGH-P520|SGH-P735|SGH-P777|SGH-Q105|SGH-R210|SGH-R220|SGH-R225|SGH-S105|SGH-S307|SGH-T109|SGH-T119|SGH-T139|SGH-T209|SGH-T219|SGH-T229|SGH-T239|SGH-T249|SGH-T259|SGH-T309|SGH-T319|SGH-T329|SGH-T339|SGH-T349|SGH-T359|SGH-T369|SGH-T379|SGH-T409|SGH-T429|SGH-T439|SGH-T459|SGH-T469|SGH-T479|SGH-T499|SGH-T509|SGH-T519|SGH-T539|SGH-T559|SGH-T589|SGH-T609|SGH-T619|SGH-T629|SGH-T639|SGH-T659|SGH-T669|SGH-T679|SGH-T709|SGH-T719|SGH-T729|SGH-T739|SGH-T746|SGH-T749|SGH-T759|SGH-T769|SGH-T809|SGH-T819|SGH-T839|SGH-T919|SGH-T929|SGH-T939|SGH-T959|SGH-T989|SGH-U100|SGH-U200|SGH-U800|SGH-V205|SGH-V206|SGH-X100|SGH-X105|SGH-X120|SGH-X140|SGH-X426|SGH-X427|SGH-X475|SGH-X495|SGH-X497|SGH-X507|SGH-X600|SGH-X610|SGH-X620|SGH-X630|SGH-X700|SGH-X820|SGH-X890|SGH-Z130|SGH-Z150|SGH-Z170|SGH-ZX10|SGH-ZX20|SHW-M110|SPH-A120|SPH-A400|SPH-A420|SPH-A460|SPH-A500|SPH-A560|SPH-A600|SPH-A620|SPH-A660|SPH-A700|SPH-A740|SPH-A760|SPH-A790|SPH-A800|SPH-A820|SPH-A840|SPH-A880|SPH-A900|SPH-A940|SPH-A960|SPH-D600|SPH-D700|SPH-D710|SPH-D720|SPH-I300|SPH-I325|SPH-I330|SPH-I350|SPH-I500|SPH-I600|SPH-I700|SPH-L700|SPH-M100|SPH-M220|SPH-M240|SPH-M300|SPH-M305|SPH-M320|SPH-M330|SPH-M350|SPH-M360|SPH-M370|SPH-M380|SPH-M510|SPH-M540|SPH-M550|SPH-M560|SPH-M570|SPH-M580|SPH-M610|SPH-M620|SPH-M630|SPH-M800|SPH-M810|SPH-M850|SPH-M900|SPH-M910|SPH-M920|SPH-M930|SPH-N100|SPH-N200|SPH-N240|SPH-N300|SPH-N400|SPH-Z400|SWC-E100|SCH-i909|GT-N7100|GT-N7105|SCH-I535|SM-N900A|SGH-I317|SGH-T999L|GT-S5360B|GT-I8262|GT-S6802|GT-S6312|GT-S6310|GT-S5312|GT-S5310|GT-I9105|GT-I8510|GT-S6790N|SM-G7105|SM-N9005|GT-S5301|GT-I9295|GT-I9195|SM-C101|GT-S7392|GT-S7560|GT-B7610|GT-I5510|GT-S7582|GT-S7530E|GT-I8750|SM-G9006V|SM-G9008V|SM-G9009D|SM-G900A|SM-G900D|SM-G900F|SM-G900H|SM-G900I|SM-G900J|SM-G900K|SM-G900L|SM-G900M|SM-G900P|SM-G900R4|SM-G900S|SM-G900T|SM-G900V|SM-G900W8|SHV-E160K|SCH-P709|SCH-P729|SM-T2558|GT-I9205|SM-G9350|SM-J120F|SM-G920F|SM-G920V|SM-G930F|SM-N910C|SM-A310F|GT-I9190|SM-J500FN|SM-G903F|SM-J330F",
          LG: "\\bLG\\b;|LG[- ]?(C800|C900|E400|E610|E900|E-900|F160|F180K|F180L|F180S|730|855|L160|LS740|LS840|LS970|LU6200|MS690|MS695|MS770|MS840|MS870|MS910|P500|P700|P705|VM696|AS680|AS695|AX840|C729|E970|GS505|272|C395|E739BK|E960|L55C|L75C|LS696|LS860|P769BK|P350|P500|P509|P870|UN272|US730|VS840|VS950|LN272|LN510|LS670|LS855|LW690|MN270|MN510|P509|P769|P930|UN200|UN270|UN510|UN610|US670|US740|US760|UX265|UX840|VN271|VN530|VS660|VS700|VS740|VS750|VS910|VS920|VS930|VX9200|VX11000|AX840A|LW770|P506|P925|P999|E612|D955|D802|MS323|M257)|LM-G710",
          Sony: "SonyST|SonyLT|SonyEricsson|SonyEricssonLT15iv|LT18i|E10i|LT28h|LT26w|SonyEricssonMT27i|C5303|C6902|C6903|C6906|C6943|D2533",
          Asus: "Asus.*Galaxy|PadFone.*Mobile",
          NokiaLumia: "Lumia [0-9]{3,4}",
          Micromax: "Micromax.*\\b(A210|A92|A88|A72|A111|A110Q|A115|A116|A110|A90S|A26|A51|A35|A54|A25|A27|A89|A68|A65|A57|A90)\\b",
          Palm: "PalmSource|Palm",
          Vertu: "Vertu|Vertu.*Ltd|Vertu.*Ascent|Vertu.*Ayxta|Vertu.*Constellation(F|Quest)?|Vertu.*Monika|Vertu.*Signature",
          Pantech: "PANTECH|IM-A850S|IM-A840S|IM-A830L|IM-A830K|IM-A830S|IM-A820L|IM-A810K|IM-A810S|IM-A800S|IM-T100K|IM-A725L|IM-A780L|IM-A775C|IM-A770K|IM-A760S|IM-A750K|IM-A740S|IM-A730S|IM-A720L|IM-A710K|IM-A690L|IM-A690S|IM-A650S|IM-A630K|IM-A600S|VEGA PTL21|PT003|P8010|ADR910L|P6030|P6020|P9070|P4100|P9060|P5000|CDM8992|TXT8045|ADR8995|IS11PT|P2030|P6010|P8000|PT002|IS06|CDM8999|P9050|PT001|TXT8040|P2020|P9020|P2000|P7040|P7000|C790",
          Fly: "IQ230|IQ444|IQ450|IQ440|IQ442|IQ441|IQ245|IQ256|IQ236|IQ255|IQ235|IQ245|IQ275|IQ240|IQ285|IQ280|IQ270|IQ260|IQ250",
          Wiko: "KITE 4G|HIGHWAY|GETAWAY|STAIRWAY|DARKSIDE|DARKFULL|DARKNIGHT|DARKMOON|SLIDE|WAX 4G|RAINBOW|BLOOM|SUNSET|GOA(?!nna)|LENNY|BARRY|IGGY|OZZY|CINK FIVE|CINK PEAX|CINK PEAX 2|CINK SLIM|CINK SLIM 2|CINK +|CINK KING|CINK PEAX|CINK SLIM|SUBLIM",
          iMobile: "i-mobile (IQ|i-STYLE|idea|ZAA|Hitz)",
          SimValley: "\\b(SP-80|XT-930|SX-340|XT-930|SX-310|SP-360|SP60|SPT-800|SP-120|SPT-800|SP-140|SPX-5|SPX-8|SP-100|SPX-8|SPX-12)\\b",
          Wolfgang: "AT-B24D|AT-AS50HD|AT-AS40W|AT-AS55HD|AT-AS45q2|AT-B26D|AT-AS50Q",
          Alcatel: "Alcatel",
          Nintendo: "Nintendo (3DS|Switch)",
          Amoi: "Amoi",
          INQ: "INQ",
          OnePlus: "ONEPLUS",
          GenericPhone: "Tapatalk|PDA;|SAGEM|\\bmmp\\b|pocket|\\bpsp\\b|symbian|Smartphone|smartfon|treo|up.browser|up.link|vodafone|\\bwap\\b|nokia|Series40|Series60|S60|SonyEricsson|N900|MAUI.*WAP.*Browser"
        },
        tablets: {
          iPad: "iPad|iPad.*Mobile",
          NexusTablet: "Android.*Nexus[\\s]+(7|9|10)",
          GoogleTablet: "Android.*Pixel C",
          SamsungTablet: "SAMSUNG.*Tablet|Galaxy.*Tab|SC-01C|GT-P1000|GT-P1003|GT-P1010|GT-P3105|GT-P6210|GT-P6800|GT-P6810|GT-P7100|GT-P7300|GT-P7310|GT-P7500|GT-P7510|SCH-I800|SCH-I815|SCH-I905|SGH-I957|SGH-I987|SGH-T849|SGH-T859|SGH-T869|SPH-P100|GT-P3100|GT-P3108|GT-P3110|GT-P5100|GT-P5110|GT-P6200|GT-P7320|GT-P7511|GT-N8000|GT-P8510|SGH-I497|SPH-P500|SGH-T779|SCH-I705|SCH-I915|GT-N8013|GT-P3113|GT-P5113|GT-P8110|GT-N8010|GT-N8005|GT-N8020|GT-P1013|GT-P6201|GT-P7501|GT-N5100|GT-N5105|GT-N5110|SHV-E140K|SHV-E140L|SHV-E140S|SHV-E150S|SHV-E230K|SHV-E230L|SHV-E230S|SHW-M180K|SHW-M180L|SHW-M180S|SHW-M180W|SHW-M300W|SHW-M305W|SHW-M380K|SHW-M380S|SHW-M380W|SHW-M430W|SHW-M480K|SHW-M480S|SHW-M480W|SHW-M485W|SHW-M486W|SHW-M500W|GT-I9228|SCH-P739|SCH-I925|GT-I9200|GT-P5200|GT-P5210|GT-P5210X|SM-T311|SM-T310|SM-T310X|SM-T210|SM-T210R|SM-T211|SM-P600|SM-P601|SM-P605|SM-P900|SM-P901|SM-T217|SM-T217A|SM-T217S|SM-P6000|SM-T3100|SGH-I467|XE500|SM-T110|GT-P5220|GT-I9200X|GT-N5110X|GT-N5120|SM-P905|SM-T111|SM-T2105|SM-T315|SM-T320|SM-T320X|SM-T321|SM-T520|SM-T525|SM-T530NU|SM-T230NU|SM-T330NU|SM-T900|XE500T1C|SM-P605V|SM-P905V|SM-T337V|SM-T537V|SM-T707V|SM-T807V|SM-P600X|SM-P900X|SM-T210X|SM-T230|SM-T230X|SM-T325|GT-P7503|SM-T531|SM-T330|SM-T530|SM-T705|SM-T705C|SM-T535|SM-T331|SM-T800|SM-T700|SM-T537|SM-T807|SM-P907A|SM-T337A|SM-T537A|SM-T707A|SM-T807A|SM-T237|SM-T807P|SM-P607T|SM-T217T|SM-T337T|SM-T807T|SM-T116NQ|SM-T116BU|SM-P550|SM-T350|SM-T550|SM-T9000|SM-P9000|SM-T705Y|SM-T805|GT-P3113|SM-T710|SM-T810|SM-T815|SM-T360|SM-T533|SM-T113|SM-T335|SM-T715|SM-T560|SM-T670|SM-T677|SM-T377|SM-T567|SM-T357T|SM-T555|SM-T561|SM-T713|SM-T719|SM-T813|SM-T819|SM-T580|SM-T355Y?|SM-T280|SM-T817A|SM-T820|SM-W700|SM-P580|SM-T587|SM-P350|SM-P555M|SM-P355M|SM-T113NU|SM-T815Y|SM-T585|SM-T285|SM-T825|SM-W708|SM-T835|SM-T830|SM-T837V|SM-T720|SM-T510|SM-T387V",
          Kindle: "Kindle|Silk.*Accelerated|Android.*\\b(KFOT|KFTT|KFJWI|KFJWA|KFOTE|KFSOWI|KFTHWI|KFTHWA|KFAPWI|KFAPWA|WFJWAE|KFSAWA|KFSAWI|KFASWI|KFARWI|KFFOWI|KFGIWI|KFMEWI)\\b|Android.*Silk/[0-9.]+ like Chrome/[0-9.]+ (?!Mobile)",
          SurfaceTablet: "Windows NT [0-9.]+; ARM;.*(Tablet|ARMBJS)",
          HPTablet: "HP Slate (7|8|10)|HP ElitePad 900|hp-tablet|EliteBook.*Touch|HP 8|Slate 21|HP SlateBook 10",
          AsusTablet: "^.*PadFone((?!Mobile).)*$|Transformer|TF101|TF101G|TF300T|TF300TG|TF300TL|TF700T|TF700KL|TF701T|TF810C|ME171|ME301T|ME302C|ME371MG|ME370T|ME372MG|ME172V|ME173X|ME400C|Slider SL101|\\bK00F\\b|\\bK00C\\b|\\bK00E\\b|\\bK00L\\b|TX201LA|ME176C|ME102A|\\bM80TA\\b|ME372CL|ME560CG|ME372CG|ME302KL| K010 | K011 | K017 | K01E |ME572C|ME103K|ME170C|ME171C|\\bME70C\\b|ME581C|ME581CL|ME8510C|ME181C|P01Y|PO1MA|P01Z|\\bP027\\b|\\bP024\\b|\\bP00C\\b",
          BlackBerryTablet: "PlayBook|RIM Tablet",
          HTCtablet: "HTC_Flyer_P512|HTC Flyer|HTC Jetstream|HTC-P715a|HTC EVO View 4G|PG41200|PG09410",
          MotorolaTablet: "xoom|sholest|MZ615|MZ605|MZ505|MZ601|MZ602|MZ603|MZ604|MZ606|MZ607|MZ608|MZ609|MZ615|MZ616|MZ617",
          NookTablet: "Android.*Nook|NookColor|nook browser|BNRV200|BNRV200A|BNTV250|BNTV250A|BNTV400|BNTV600|LogicPD Zoom2",
          AcerTablet: "Android.*; \\b(A100|A101|A110|A200|A210|A211|A500|A501|A510|A511|A700|A701|W500|W500P|W501|W501P|W510|W511|W700|G100|G100W|B1-A71|B1-710|B1-711|A1-810|A1-811|A1-830)\\b|W3-810|\\bA3-A10\\b|\\bA3-A11\\b|\\bA3-A20\\b|\\bA3-A30",
          ToshibaTablet: "Android.*(AT100|AT105|AT200|AT205|AT270|AT275|AT300|AT305|AT1S5|AT500|AT570|AT700|AT830)|TOSHIBA.*FOLIO",
          LGTablet: "\\bL-06C|LG-V909|LG-V900|LG-V700|LG-V510|LG-V500|LG-V410|LG-V400|LG-VK810\\b",
          FujitsuTablet: "Android.*\\b(F-01D|F-02F|F-05E|F-10D|M532|Q572)\\b",
          PrestigioTablet: "PMP3170B|PMP3270B|PMP3470B|PMP7170B|PMP3370B|PMP3570C|PMP5870C|PMP3670B|PMP5570C|PMP5770D|PMP3970B|PMP3870C|PMP5580C|PMP5880D|PMP5780D|PMP5588C|PMP7280C|PMP7280C3G|PMP7280|PMP7880D|PMP5597D|PMP5597|PMP7100D|PER3464|PER3274|PER3574|PER3884|PER5274|PER5474|PMP5097CPRO|PMP5097|PMP7380D|PMP5297C|PMP5297C_QUAD|PMP812E|PMP812E3G|PMP812F|PMP810E|PMP880TD|PMT3017|PMT3037|PMT3047|PMT3057|PMT7008|PMT5887|PMT5001|PMT5002",
          LenovoTablet: "Lenovo TAB|Idea(Tab|Pad)( A1|A10| K1|)|ThinkPad([ ]+)?Tablet|YT3-850M|YT3-X90L|YT3-X90F|YT3-X90X|Lenovo.*(S2109|S2110|S5000|S6000|K3011|A3000|A3500|A1000|A2107|A2109|A1107|A5500|A7600|B6000|B8000|B8080)(-|)(FL|F|HV|H|)|TB-X103F|TB-X304X|TB-X304F|TB-X304L|TB-X505F|TB-X505L|TB-X505X|TB-X605F|TB-X605L|TB-8703F|TB-8703X|TB-8703N|TB-8704N|TB-8704F|TB-8704X|TB-8704V|TB-7304F|TB-7304I|TB-7304X|Tab2A7-10F|Tab2A7-20F|TB2-X30L|YT3-X50L|YT3-X50F|YT3-X50M|YT-X705F|YT-X703F|YT-X703L|YT-X705L|YT-X705X|TB2-X30F|TB2-X30L|TB2-X30M|A2107A-F|A2107A-H|TB3-730F|TB3-730M|TB3-730X|TB-7504F|TB-7504X",
          DellTablet: "Venue 11|Venue 8|Venue 7|Dell Streak 10|Dell Streak 7",
          YarvikTablet: "Android.*\\b(TAB210|TAB211|TAB224|TAB250|TAB260|TAB264|TAB310|TAB360|TAB364|TAB410|TAB411|TAB420|TAB424|TAB450|TAB460|TAB461|TAB464|TAB465|TAB467|TAB468|TAB07-100|TAB07-101|TAB07-150|TAB07-151|TAB07-152|TAB07-200|TAB07-201-3G|TAB07-210|TAB07-211|TAB07-212|TAB07-214|TAB07-220|TAB07-400|TAB07-485|TAB08-150|TAB08-200|TAB08-201-3G|TAB08-201-30|TAB09-100|TAB09-211|TAB09-410|TAB10-150|TAB10-201|TAB10-211|TAB10-400|TAB10-410|TAB13-201|TAB274EUK|TAB275EUK|TAB374EUK|TAB462EUK|TAB474EUK|TAB9-200)\\b",
          MedionTablet: "Android.*\\bOYO\\b|LIFE.*(P9212|P9514|P9516|S9512)|LIFETAB",
          ArnovaTablet: "97G4|AN10G2|AN7bG3|AN7fG3|AN8G3|AN8cG3|AN7G3|AN9G3|AN7dG3|AN7dG3ST|AN7dG3ChildPad|AN10bG3|AN10bG3DT|AN9G2",
          IntensoTablet: "INM8002KP|INM1010FP|INM805ND|Intenso Tab|TAB1004",
          IRUTablet: "M702pro",
          MegafonTablet: "MegaFon V9|\\bZTE V9\\b|Android.*\\bMT7A\\b",
          EbodaTablet: "E-Boda (Supreme|Impresspeed|Izzycomm|Essential)",
          AllViewTablet: "Allview.*(Viva|Alldro|City|Speed|All TV|Frenzy|Quasar|Shine|TX1|AX1|AX2)",
          ArchosTablet: "\\b(101G9|80G9|A101IT)\\b|Qilive 97R|Archos5|\\bARCHOS (70|79|80|90|97|101|FAMILYPAD|)(b|c|)(G10| Cobalt| TITANIUM(HD|)| Xenon| Neon|XSK| 2| XS 2| PLATINUM| CARBON|GAMEPAD)\\b",
          AinolTablet: "NOVO7|NOVO8|NOVO10|Novo7Aurora|Novo7Basic|NOVO7PALADIN|novo9-Spark",
          NokiaLumiaTablet: "Lumia 2520",
          SonyTablet: "Sony.*Tablet|Xperia Tablet|Sony Tablet S|SO-03E|SGPT12|SGPT13|SGPT114|SGPT121|SGPT122|SGPT123|SGPT111|SGPT112|SGPT113|SGPT131|SGPT132|SGPT133|SGPT211|SGPT212|SGPT213|SGP311|SGP312|SGP321|EBRD1101|EBRD1102|EBRD1201|SGP351|SGP341|SGP511|SGP512|SGP521|SGP541|SGP551|SGP621|SGP641|SGP612|SOT31|SGP771|SGP611|SGP612|SGP712",
          PhilipsTablet: "\\b(PI2010|PI3000|PI3100|PI3105|PI3110|PI3205|PI3210|PI3900|PI4010|PI7000|PI7100)\\b",
          CubeTablet: "Android.*(K8GT|U9GT|U10GT|U16GT|U17GT|U18GT|U19GT|U20GT|U23GT|U30GT)|CUBE U8GT",
          CobyTablet: "MID1042|MID1045|MID1125|MID1126|MID7012|MID7014|MID7015|MID7034|MID7035|MID7036|MID7042|MID7048|MID7127|MID8042|MID8048|MID8127|MID9042|MID9740|MID9742|MID7022|MID7010",
          MIDTablet: "M9701|M9000|M9100|M806|M1052|M806|T703|MID701|MID713|MID710|MID727|MID760|MID830|MID728|MID933|MID125|MID810|MID732|MID120|MID930|MID800|MID731|MID900|MID100|MID820|MID735|MID980|MID130|MID833|MID737|MID960|MID135|MID860|MID736|MID140|MID930|MID835|MID733|MID4X10",
          MSITablet: "MSI \\b(Primo 73K|Primo 73L|Primo 81L|Primo 77|Primo 93|Primo 75|Primo 76|Primo 73|Primo 81|Primo 91|Primo 90|Enjoy 71|Enjoy 7|Enjoy 10)\\b",
          SMiTTablet: "Android.*(\\bMID\\b|MID-560|MTV-T1200|MTV-PND531|MTV-P1101|MTV-PND530)",
          RockChipTablet: "Android.*(RK2818|RK2808A|RK2918|RK3066)|RK2738|RK2808A",
          FlyTablet: "IQ310|Fly Vision",
          bqTablet: "Android.*(bq)?.*\\b(Elcano|Curie|Edison|Maxwell|Kepler|Pascal|Tesla|Hypatia|Platon|Newton|Livingstone|Cervantes|Avant|Aquaris ([E|M]10|M8))\\b|Maxwell.*Lite|Maxwell.*Plus",
          HuaweiTablet: "MediaPad|MediaPad 7 Youth|IDEOS S7|S7-201c|S7-202u|S7-101|S7-103|S7-104|S7-105|S7-106|S7-201|S7-Slim|M2-A01L|BAH-L09|BAH-W09|AGS-L09|CMR-AL19",
          NecTablet: "\\bN-06D|\\bN-08D",
          PantechTablet: "Pantech.*P4100",
          BronchoTablet: "Broncho.*(N701|N708|N802|a710)",
          VersusTablet: "TOUCHPAD.*[78910]|\\bTOUCHTAB\\b",
          ZyncTablet: "z1000|Z99 2G|z930|z990|z909|Z919|z900",
          PositivoTablet: "TB07STA|TB10STA|TB07FTA|TB10FTA",
          NabiTablet: "Android.*\\bNabi",
          KoboTablet: "Kobo Touch|\\bK080\\b|\\bVox\\b Build|\\bArc\\b Build",
          DanewTablet: "DSlide.*\\b(700|701R|702|703R|704|802|970|971|972|973|974|1010|1012)\\b",
          TexetTablet: "NaviPad|TB-772A|TM-7045|TM-7055|TM-9750|TM-7016|TM-7024|TM-7026|TM-7041|TM-7043|TM-7047|TM-8041|TM-9741|TM-9747|TM-9748|TM-9751|TM-7022|TM-7021|TM-7020|TM-7011|TM-7010|TM-7023|TM-7025|TM-7037W|TM-7038W|TM-7027W|TM-9720|TM-9725|TM-9737W|TM-1020|TM-9738W|TM-9740|TM-9743W|TB-807A|TB-771A|TB-727A|TB-725A|TB-719A|TB-823A|TB-805A|TB-723A|TB-715A|TB-707A|TB-705A|TB-709A|TB-711A|TB-890HD|TB-880HD|TB-790HD|TB-780HD|TB-770HD|TB-721HD|TB-710HD|TB-434HD|TB-860HD|TB-840HD|TB-760HD|TB-750HD|TB-740HD|TB-730HD|TB-722HD|TB-720HD|TB-700HD|TB-500HD|TB-470HD|TB-431HD|TB-430HD|TB-506|TB-504|TB-446|TB-436|TB-416|TB-146SE|TB-126SE",
          PlaystationTablet: "Playstation.*(Portable|Vita)",
          TrekstorTablet: "ST10416-1|VT10416-1|ST70408-1|ST702xx-1|ST702xx-2|ST80208|ST97216|ST70104-2|VT10416-2|ST10216-2A|SurfTab",
          PyleAudioTablet: "\\b(PTBL10CEU|PTBL10C|PTBL72BC|PTBL72BCEU|PTBL7CEU|PTBL7C|PTBL92BC|PTBL92BCEU|PTBL9CEU|PTBL9CUK|PTBL9C)\\b",
          AdvanTablet: "Android.* \\b(E3A|T3X|T5C|T5B|T3E|T3C|T3B|T1J|T1F|T2A|T1H|T1i|E1C|T1-E|T5-A|T4|E1-B|T2Ci|T1-B|T1-D|O1-A|E1-A|T1-A|T3A|T4i)\\b ",
          DanyTechTablet: "Genius Tab G3|Genius Tab S2|Genius Tab Q3|Genius Tab G4|Genius Tab Q4|Genius Tab G-II|Genius TAB GII|Genius TAB GIII|Genius Tab S1",
          GalapadTablet: "Android.*\\bG1\\b(?!\\))",
          MicromaxTablet: "Funbook|Micromax.*\\b(P250|P560|P360|P362|P600|P300|P350|P500|P275)\\b",
          KarbonnTablet: "Android.*\\b(A39|A37|A34|ST8|ST10|ST7|Smart Tab3|Smart Tab2)\\b",
          AllFineTablet: "Fine7 Genius|Fine7 Shine|Fine7 Air|Fine8 Style|Fine9 More|Fine10 Joy|Fine11 Wide",
          PROSCANTablet: "\\b(PEM63|PLT1023G|PLT1041|PLT1044|PLT1044G|PLT1091|PLT4311|PLT4311PL|PLT4315|PLT7030|PLT7033|PLT7033D|PLT7035|PLT7035D|PLT7044K|PLT7045K|PLT7045KB|PLT7071KG|PLT7072|PLT7223G|PLT7225G|PLT7777G|PLT7810K|PLT7849G|PLT7851G|PLT7852G|PLT8015|PLT8031|PLT8034|PLT8036|PLT8080K|PLT8082|PLT8088|PLT8223G|PLT8234G|PLT8235G|PLT8816K|PLT9011|PLT9045K|PLT9233G|PLT9735|PLT9760G|PLT9770G)\\b",
          YONESTablet: "BQ1078|BC1003|BC1077|RK9702|BC9730|BC9001|IT9001|BC7008|BC7010|BC708|BC728|BC7012|BC7030|BC7027|BC7026",
          ChangJiaTablet: "TPC7102|TPC7103|TPC7105|TPC7106|TPC7107|TPC7201|TPC7203|TPC7205|TPC7210|TPC7708|TPC7709|TPC7712|TPC7110|TPC8101|TPC8103|TPC8105|TPC8106|TPC8203|TPC8205|TPC8503|TPC9106|TPC9701|TPC97101|TPC97103|TPC97105|TPC97106|TPC97111|TPC97113|TPC97203|TPC97603|TPC97809|TPC97205|TPC10101|TPC10103|TPC10106|TPC10111|TPC10203|TPC10205|TPC10503",
          GUTablet: "TX-A1301|TX-M9002|Q702|kf026",
          PointOfViewTablet: "TAB-P506|TAB-navi-7-3G-M|TAB-P517|TAB-P-527|TAB-P701|TAB-P703|TAB-P721|TAB-P731N|TAB-P741|TAB-P825|TAB-P905|TAB-P925|TAB-PR945|TAB-PL1015|TAB-P1025|TAB-PI1045|TAB-P1325|TAB-PROTAB[0-9]+|TAB-PROTAB25|TAB-PROTAB26|TAB-PROTAB27|TAB-PROTAB26XL|TAB-PROTAB2-IPS9|TAB-PROTAB30-IPS9|TAB-PROTAB25XXL|TAB-PROTAB26-IPS10|TAB-PROTAB30-IPS10",
          OvermaxTablet: "OV-(SteelCore|NewBase|Basecore|Baseone|Exellen|Quattor|EduTab|Solution|ACTION|BasicTab|TeddyTab|MagicTab|Stream|TB-08|TB-09)|Qualcore 1027",
          HCLTablet: "HCL.*Tablet|Connect-3G-2.0|Connect-2G-2.0|ME Tablet U1|ME Tablet U2|ME Tablet G1|ME Tablet X1|ME Tablet Y2|ME Tablet Sync",
          DPSTablet: "DPS Dream 9|DPS Dual 7",
          VistureTablet: "V97 HD|i75 3G|Visture V4( HD)?|Visture V5( HD)?|Visture V10",
          CrestaTablet: "CTP(-)?810|CTP(-)?818|CTP(-)?828|CTP(-)?838|CTP(-)?888|CTP(-)?978|CTP(-)?980|CTP(-)?987|CTP(-)?988|CTP(-)?989",
          MediatekTablet: "\\bMT8125|MT8389|MT8135|MT8377\\b",
          ConcordeTablet: "Concorde([ ]+)?Tab|ConCorde ReadMan",
          GoCleverTablet: "GOCLEVER TAB|A7GOCLEVER|M1042|M7841|M742|R1042BK|R1041|TAB A975|TAB A7842|TAB A741|TAB A741L|TAB M723G|TAB M721|TAB A1021|TAB I921|TAB R721|TAB I720|TAB T76|TAB R70|TAB R76.2|TAB R106|TAB R83.2|TAB M813G|TAB I721|GCTA722|TAB I70|TAB I71|TAB S73|TAB R73|TAB R74|TAB R93|TAB R75|TAB R76.1|TAB A73|TAB A93|TAB A93.2|TAB T72|TAB R83|TAB R974|TAB R973|TAB A101|TAB A103|TAB A104|TAB A104.2|R105BK|M713G|A972BK|TAB A971|TAB R974.2|TAB R104|TAB R83.3|TAB A1042",
          ModecomTablet: "FreeTAB 9000|FreeTAB 7.4|FreeTAB 7004|FreeTAB 7800|FreeTAB 2096|FreeTAB 7.5|FreeTAB 1014|FreeTAB 1001 |FreeTAB 8001|FreeTAB 9706|FreeTAB 9702|FreeTAB 7003|FreeTAB 7002|FreeTAB 1002|FreeTAB 7801|FreeTAB 1331|FreeTAB 1004|FreeTAB 8002|FreeTAB 8014|FreeTAB 9704|FreeTAB 1003",
          VoninoTablet: "\\b(Argus[ _]?S|Diamond[ _]?79HD|Emerald[ _]?78E|Luna[ _]?70C|Onyx[ _]?S|Onyx[ _]?Z|Orin[ _]?HD|Orin[ _]?S|Otis[ _]?S|SpeedStar[ _]?S|Magnet[ _]?M9|Primus[ _]?94[ _]?3G|Primus[ _]?94HD|Primus[ _]?QS|Android.*\\bQ8\\b|Sirius[ _]?EVO[ _]?QS|Sirius[ _]?QS|Spirit[ _]?S)\\b",
          ECSTablet: "V07OT2|TM105A|S10OT1|TR10CS1",
          StorexTablet: "eZee[_']?(Tab|Go)[0-9]+|TabLC7|Looney Tunes Tab",
          VodafoneTablet: "SmartTab([ ]+)?[0-9]+|SmartTabII10|SmartTabII7|VF-1497|VFD 1400",
          EssentielBTablet: "Smart[ ']?TAB[ ]+?[0-9]+|Family[ ']?TAB2",
          RossMoorTablet: "RM-790|RM-997|RMD-878G|RMD-974R|RMT-705A|RMT-701|RME-601|RMT-501|RMT-711",
          iMobileTablet: "i-mobile i-note",
          TolinoTablet: "tolino tab [0-9.]+|tolino shine",
          AudioSonicTablet: "\\bC-22Q|T7-QC|T-17B|T-17P\\b",
          AMPETablet: "Android.* A78 ",
          SkkTablet: "Android.* (SKYPAD|PHOENIX|CYCLOPS)",
          TecnoTablet: "TECNO P9|TECNO DP8D",
          JXDTablet: "Android.* \\b(F3000|A3300|JXD5000|JXD3000|JXD2000|JXD300B|JXD300|S5800|S7800|S602b|S5110b|S7300|S5300|S602|S603|S5100|S5110|S601|S7100a|P3000F|P3000s|P101|P200s|P1000m|P200m|P9100|P1000s|S6600b|S908|P1000|P300|S18|S6600|S9100)\\b",
          iJoyTablet: "Tablet (Spirit 7|Essentia|Galatea|Fusion|Onix 7|Landa|Titan|Scooby|Deox|Stella|Themis|Argon|Unique 7|Sygnus|Hexen|Finity 7|Cream|Cream X2|Jade|Neon 7|Neron 7|Kandy|Scape|Saphyr 7|Rebel|Biox|Rebel|Rebel 8GB|Myst|Draco 7|Myst|Tab7-004|Myst|Tadeo Jones|Tablet Boing|Arrow|Draco Dual Cam|Aurix|Mint|Amity|Revolution|Finity 9|Neon 9|T9w|Amity 4GB Dual Cam|Stone 4GB|Stone 8GB|Andromeda|Silken|X2|Andromeda II|Halley|Flame|Saphyr 9,7|Touch 8|Planet|Triton|Unique 10|Hexen 10|Memphis 4GB|Memphis 8GB|Onix 10)",
          FX2Tablet: "FX2 PAD7|FX2 PAD10",
          XoroTablet: "KidsPAD 701|PAD[ ]?712|PAD[ ]?714|PAD[ ]?716|PAD[ ]?717|PAD[ ]?718|PAD[ ]?720|PAD[ ]?721|PAD[ ]?722|PAD[ ]?790|PAD[ ]?792|PAD[ ]?900|PAD[ ]?9715D|PAD[ ]?9716DR|PAD[ ]?9718DR|PAD[ ]?9719QR|PAD[ ]?9720QR|TelePAD1030|Telepad1032|TelePAD730|TelePAD731|TelePAD732|TelePAD735Q|TelePAD830|TelePAD9730|TelePAD795|MegaPAD 1331|MegaPAD 1851|MegaPAD 2151",
          ViewsonicTablet: "ViewPad 10pi|ViewPad 10e|ViewPad 10s|ViewPad E72|ViewPad7|ViewPad E100|ViewPad 7e|ViewSonic VB733|VB100a",
          VerizonTablet: "QTAQZ3|QTAIR7|QTAQTZ3|QTASUN1|QTASUN2|QTAXIA1",
          OdysTablet: "LOOX|XENO10|ODYS[ -](Space|EVO|Xpress|NOON)|\\bXELIO\\b|Xelio10Pro|XELIO7PHONETAB|XELIO10EXTREME|XELIOPT2|NEO_QUAD10",
          CaptivaTablet: "CAPTIVA PAD",
          IconbitTablet: "NetTAB|NT-3702|NT-3702S|NT-3702S|NT-3603P|NT-3603P|NT-0704S|NT-0704S|NT-3805C|NT-3805C|NT-0806C|NT-0806C|NT-0909T|NT-0909T|NT-0907S|NT-0907S|NT-0902S|NT-0902S",
          TeclastTablet: "T98 4G|\\bP80\\b|\\bX90HD\\b|X98 Air|X98 Air 3G|\\bX89\\b|P80 3G|\\bX80h\\b|P98 Air|\\bX89HD\\b|P98 3G|\\bP90HD\\b|P89 3G|X98 3G|\\bP70h\\b|P79HD 3G|G18d 3G|\\bP79HD\\b|\\bP89s\\b|\\bA88\\b|\\bP10HD\\b|\\bP19HD\\b|G18 3G|\\bP78HD\\b|\\bA78\\b|\\bP75\\b|G17s 3G|G17h 3G|\\bP85t\\b|\\bP90\\b|\\bP11\\b|\\bP98t\\b|\\bP98HD\\b|\\bG18d\\b|\\bP85s\\b|\\bP11HD\\b|\\bP88s\\b|\\bA80HD\\b|\\bA80se\\b|\\bA10h\\b|\\bP89\\b|\\bP78s\\b|\\bG18\\b|\\bP85\\b|\\bA70h\\b|\\bA70\\b|\\bG17\\b|\\bP18\\b|\\bA80s\\b|\\bA11s\\b|\\bP88HD\\b|\\bA80h\\b|\\bP76s\\b|\\bP76h\\b|\\bP98\\b|\\bA10HD\\b|\\bP78\\b|\\bP88\\b|\\bA11\\b|\\bA10t\\b|\\bP76a\\b|\\bP76t\\b|\\bP76e\\b|\\bP85HD\\b|\\bP85a\\b|\\bP86\\b|\\bP75HD\\b|\\bP76v\\b|\\bA12\\b|\\bP75a\\b|\\bA15\\b|\\bP76Ti\\b|\\bP81HD\\b|\\bA10\\b|\\bT760VE\\b|\\bT720HD\\b|\\bP76\\b|\\bP73\\b|\\bP71\\b|\\bP72\\b|\\bT720SE\\b|\\bC520Ti\\b|\\bT760\\b|\\bT720VE\\b|T720-3GE|T720-WiFi",
          OndaTablet: "\\b(V975i|Vi30|VX530|V701|Vi60|V701s|Vi50|V801s|V719|Vx610w|VX610W|V819i|Vi10|VX580W|Vi10|V711s|V813|V811|V820w|V820|Vi20|V711|VI30W|V712|V891w|V972|V819w|V820w|Vi60|V820w|V711|V813s|V801|V819|V975s|V801|V819|V819|V818|V811|V712|V975m|V101w|V961w|V812|V818|V971|V971s|V919|V989|V116w|V102w|V973|Vi40)\\b[\\s]+|V10 \\b4G\\b",
          JaytechTablet: "TPC-PA762",
          BlaupunktTablet: "Endeavour 800NG|Endeavour 1010",
          DigmaTablet: "\\b(iDx10|iDx9|iDx8|iDx7|iDxD7|iDxD8|iDsQ8|iDsQ7|iDsQ8|iDsD10|iDnD7|3TS804H|iDsQ11|iDj7|iDs10)\\b",
          EvolioTablet: "ARIA_Mini_wifi|Aria[ _]Mini|Evolio X10|Evolio X7|Evolio X8|\\bEvotab\\b|\\bNeura\\b",
          LavaTablet: "QPAD E704|\\bIvoryS\\b|E-TAB IVORY|\\bE-TAB\\b",
          AocTablet: "MW0811|MW0812|MW0922|MTK8382|MW1031|MW0831|MW0821|MW0931|MW0712",
          MpmanTablet: "MP11 OCTA|MP10 OCTA|MPQC1114|MPQC1004|MPQC994|MPQC974|MPQC973|MPQC804|MPQC784|MPQC780|\\bMPG7\\b|MPDCG75|MPDCG71|MPDC1006|MP101DC|MPDC9000|MPDC905|MPDC706HD|MPDC706|MPDC705|MPDC110|MPDC100|MPDC99|MPDC97|MPDC88|MPDC8|MPDC77|MP709|MID701|MID711|MID170|MPDC703|MPQC1010",
          CelkonTablet: "CT695|CT888|CT[\\s]?910|CT7 Tab|CT9 Tab|CT3 Tab|CT2 Tab|CT1 Tab|C820|C720|\\bCT-1\\b",
          WolderTablet: "miTab \\b(DIAMOND|SPACE|BROOKLYN|NEO|FLY|MANHATTAN|FUNK|EVOLUTION|SKY|GOCAR|IRON|GENIUS|POP|MINT|EPSILON|BROADWAY|JUMP|HOP|LEGEND|NEW AGE|LINE|ADVANCE|FEEL|FOLLOW|LIKE|LINK|LIVE|THINK|FREEDOM|CHICAGO|CLEVELAND|BALTIMORE-GH|IOWA|BOSTON|SEATTLE|PHOENIX|DALLAS|IN 101|MasterChef)\\b",
          MediacomTablet: "M-MPI10C3G|M-SP10EG|M-SP10EGP|M-SP10HXAH|M-SP7HXAH|M-SP10HXBH|M-SP8HXAH|M-SP8MXA",
          MiTablet: "\\bMI PAD\\b|\\bHM NOTE 1W\\b",
          NibiruTablet: "Nibiru M1|Nibiru Jupiter One",
          NexoTablet: "NEXO NOVA|NEXO 10|NEXO AVIO|NEXO FREE|NEXO GO|NEXO EVO|NEXO 3G|NEXO SMART|NEXO KIDDO|NEXO MOBI",
          LeaderTablet: "TBLT10Q|TBLT10I|TBL-10WDKB|TBL-10WDKBO2013|TBL-W230V2|TBL-W450|TBL-W500|SV572|TBLT7I|TBA-AC7-8G|TBLT79|TBL-8W16|TBL-10W32|TBL-10WKB|TBL-W100",
          UbislateTablet: "UbiSlate[\\s]?7C",
          PocketBookTablet: "Pocketbook",
          KocasoTablet: "\\b(TB-1207)\\b",
          HisenseTablet: "\\b(F5281|E2371)\\b",
          Hudl: "Hudl HT7S3|Hudl 2",
          TelstraTablet: "T-Hub2",
          GenericTablet: "Android.*\\b97D\\b|Tablet(?!.*PC)|BNTV250A|MID-WCDMA|LogicPD Zoom2|\\bA7EB\\b|CatNova8|A1_07|CT704|CT1002|\\bM721\\b|rk30sdk|\\bEVOTAB\\b|M758A|ET904|ALUMIUM10|Smartfren Tab|Endeavour 1010|Tablet-PC-4|Tagi Tab|\\bM6pro\\b|CT1020W|arc 10HD|\\bTP750\\b|\\bQTAQZ3\\b|WVT101|TM1088|KT107"
        },
        oss: {
          AndroidOS: "Android",
          BlackBerryOS: "blackberry|\\bBB10\\b|rim tablet os",
          PalmOS: "PalmOS|avantgo|blazer|elaine|hiptop|palm|plucker|xiino",
          SymbianOS: "Symbian|SymbOS|Series60|Series40|SYB-[0-9]+|\\bS60\\b",
          WindowsMobileOS: "Windows CE.*(PPC|Smartphone|Mobile|[0-9]{3}x[0-9]{3})|Windows Mobile|Windows Phone [0-9.]+|WCE;",
          WindowsPhoneOS: "Windows Phone 10.0|Windows Phone 8.1|Windows Phone 8.0|Windows Phone OS|XBLWP7|ZuneWP7|Windows NT 6.[23]; ARM;",
          iOS: "\\biPhone.*Mobile|\\biPod|\\biPad|AppleCoreMedia",
          iPadOS: "CPU OS 13",
          MeeGoOS: "MeeGo",
          MaemoOS: "Maemo",
          JavaOS: "J2ME/|\\bMIDP\\b|\\bCLDC\\b",
          webOS: "webOS|hpwOS",
          badaOS: "\\bBada\\b",
          BREWOS: "BREW"
        },
        uas: {
          Chrome: "\\bCrMo\\b|CriOS|Android.*Chrome/[.0-9]* (Mobile)?",
          Dolfin: "\\bDolfin\\b",
          Opera: "Opera.*Mini|Opera.*Mobi|Android.*Opera|Mobile.*OPR/[0-9.]+$|Coast/[0-9.]+",
          Skyfire: "Skyfire",
          Edge: "Mobile Safari/[.0-9]* Edge",
          IE: "IEMobile|MSIEMobile",
          Firefox: "fennec|firefox.*maemo|(Mobile|Tablet).*Firefox|Firefox.*Mobile|FxiOS",
          Bolt: "bolt",
          TeaShark: "teashark",
          Blazer: "Blazer",
          Safari: "Version.*Mobile.*Safari|Safari.*Mobile|MobileSafari",
          WeChat: "\\bMicroMessenger\\b",
          UCBrowser: "UC.*Browser|UCWEB",
          baiduboxapp: "baiduboxapp",
          baidubrowser: "baidubrowser",
          DiigoBrowser: "DiigoBrowser",
          Mercury: "\\bMercury\\b",
          ObigoBrowser: "Obigo",
          NetFront: "NF-Browser",
          GenericBrowser: "NokiaBrowser|OviBrowser|OneBrowser|TwonkyBeamBrowser|SEMC.*Browser|FlyFlow|Minimo|NetFront|Novarra-Vision|MQQBrowser|MicroMessenger",
          PaleMoon: "Android.*PaleMoon|Mobile.*PaleMoon"
        },
        props: {
          Mobile: "Mobile/[VER]",
          Build: "Build/[VER]",
          Version: "Version/[VER]",
          VendorID: "VendorID/[VER]",
          iPad: "iPad.*CPU[a-z ]+[VER]",
          iPhone: "iPhone.*CPU[a-z ]+[VER]",
          iPod: "iPod.*CPU[a-z ]+[VER]",
          Kindle: "Kindle/[VER]",
          Chrome: ["Chrome/[VER]", "CriOS/[VER]", "CrMo/[VER]"],
          Coast: ["Coast/[VER]"],
          Dolfin: "Dolfin/[VER]",
          Firefox: ["Firefox/[VER]", "FxiOS/[VER]"],
          Fennec: "Fennec/[VER]",
          Edge: "Edge/[VER]",
          IE: ["IEMobile/[VER];", "IEMobile [VER]", "MSIE [VER];", "Trident/[0-9.]+;.*rv:[VER]"],
          NetFront: "NetFront/[VER]",
          NokiaBrowser: "NokiaBrowser/[VER]",
          Opera: [" OPR/[VER]", "Opera Mini/[VER]", "Version/[VER]"],
          "Opera Mini": "Opera Mini/[VER]",
          "Opera Mobi": "Version/[VER]",
          UCBrowser: ["UCWEB[VER]", "UC.*Browser/[VER]"],
          MQQBrowser: "MQQBrowser/[VER]",
          MicroMessenger: "MicroMessenger/[VER]",
          baiduboxapp: "baiduboxapp/[VER]",
          baidubrowser: "baidubrowser/[VER]",
          SamsungBrowser: "SamsungBrowser/[VER]",
          Iron: "Iron/[VER]",
          Safari: ["Version/[VER]", "Safari/[VER]"],
          Skyfire: "Skyfire/[VER]",
          Tizen: "Tizen/[VER]",
          Webkit: "webkit[ /][VER]",
          PaleMoon: "PaleMoon/[VER]",
          Gecko: "Gecko/[VER]",
          Trident: "Trident/[VER]",
          Presto: "Presto/[VER]",
          Goanna: "Goanna/[VER]",
          iOS: " \\bi?OS\\b [VER][ ;]{1}",
          Android: "Android [VER]",
          BlackBerry: ["BlackBerry[\\w]+/[VER]", "BlackBerry.*Version/[VER]", "Version/[VER]"],
          BREW: "BREW [VER]",
          Java: "Java/[VER]",
          "Windows Phone OS": ["Windows Phone OS [VER]", "Windows Phone [VER]"],
          "Windows Phone": "Windows Phone [VER]",
          "Windows CE": "Windows CE/[VER]",
          "Windows NT": "Windows NT [VER]",
          Symbian: ["SymbianOS/[VER]", "Symbian/[VER]"],
          webOS: ["webOS/[VER]", "hpwOS/[VER];"]
        },
        utils: {
          Bot: "Googlebot|facebookexternalhit|Google-AMPHTML|s~amp-validator|AdsBot-Google|Google Keyword Suggestion|Facebot|YandexBot|YandexMobileBot|bingbot|ia_archiver|AhrefsBot|Ezooms|GSLFbot|WBSearchBot|Twitterbot|TweetmemeBot|Twikle|PaperLiBot|Wotbox|UnwindFetchor|Exabot|MJ12bot|YandexImages|TurnitinBot|Pingdom|contentkingapp",
          MobileBot: "Googlebot-Mobile|AdsBot-Google-Mobile|YahooSeeker/M1A1-R2D2",
          DesktopMode: "WPDesktop",
          TV: "SonyDTV|HbbTV",
          WebKit: "(webkit)[ /]([\\w.]+)",
          Console: "\\b(Nintendo|Nintendo WiiU|Nintendo 3DS|Nintendo Switch|PLAYSTATION|Xbox)\\b",
          Watch: "SM-V700"
        }
      },
      detectMobileBrowsers: {
        fullPattern: /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i,
        shortPattern: /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,
        tabletPattern: /android|ipad|playbook|silk/i
      }
    };
    var hV = Object.prototype.hasOwnProperty;
    hL.FALLBACK_PHONE = "UnknownPhone";
    hL.FALLBACK_TABLET = "UnknownTablet";
    hL.FALLBACK_MOBILE = "UnknownMobile";
    var hK = "isArray" in Array ? Array.isArray : function (hX) {
      return Object.prototype.toString.call(hX) === "[object Array]";
    };
    var hw = hL.mobileDetectRules;
    for (h5 in hw.props) {
      if (hV.call(hw.props, h5)) {
        h6 = hw.props[h5];
        h9 = (h6 = hK(h6) ? h6 : [h6]).length;
        h8 = 0;
        for (; h8 < h9; ++h8) {
          if ((hh = (h7 = h6[h8]).indexOf("[VER]")) >= 0) {
            h7 = h7.substring(0, hh) + "([\\w._\\+]+)" + h7.substring(hh + 5);
          }
          h6[h8] = new RegExp(h7, "i");
        }
        hw.props[h5] = h6;
      }
    }
    h3(hw.oss);
    h3(hw.phones);
    h3(hw.tablets);
    h3(hw.uas);
    h3(hw.utils);
    hw.oss0 = {
      WindowsPhoneOS: hw.oss.WindowsPhoneOS,
      WindowsMobileOS: hw.oss.WindowsMobileOS
    };
    hL.findMatch = function (hX, hg) {
      for (var hl in hX) {
        if (hV.call(hX, hl) && hX[hl].test(hg)) {
          return hl;
        }
      }
      return null;
    };
    hL.findMatches = function (hX, hg) {
      var hl;
      var hM = [];
      for (hl in hX) {
        if (hV.call(hX, hl) && hX[hl].test(hg)) {
          hM.push(hl);
        }
      }
      return hM;
    };
    hL.getVersionStr = function (hX, hg) {
      var hl;
      var hM;
      var ho;
      var hr;
      var ha = hL.mobileDetectRules.props;
      if (hV.call(ha, hX)) {
        ho = (hl = ha[hX]).length;
        hM = 0;
        for (; hM < ho; ++hM) {
          if ((hr = hl[hM].exec(hg)) !== null) {
            return hr[1];
          }
        }
      }
      return null;
    };
    hL.getVersion = function (hX, hg) {
      hX = hL.getVersionStr(hX, hg);
      if (hX) {
        return hL.prepareVersionNo(hX);
      } else {
        return NaN;
      }
    };
    hL.prepareVersionNo = function (hX) {
      var hg = hX.split(/[a-z._ \/\-]/i);
      if (hg.length === 1) {
        hX = hg[0];
      }
      if (hg.length > 1) {
        hX = hg[0] + ".";
        hg.shift();
        hX += hg.join("");
      }
      return Number(hX);
    };
    hL.isMobileFallback = function (hX) {
      return hL.detectMobileBrowsers.fullPattern.test(hX) || hL.detectMobileBrowsers.shortPattern.test(hX.substr(0, 4));
    };
    hL.isTabletFallback = function (hX) {
      return hL.detectMobileBrowsers.tabletPattern.test(hX);
    };
    hL.prepareDetectionCache = function (hX, hg, hl) {
      var hM;
      if (hX.mobile === h0) {
        if (hM = hL.findMatch(hL.mobileDetectRules.tablets, hg)) {
          hX.mobile = hX.tablet = hM;
          hX.phone = null;
          return;
        } else if (hM = hL.findMatch(hL.mobileDetectRules.phones, hg)) {
          hX.mobile = hX.phone = hM;
          hX.tablet = null;
          return;
        } else {
          if (hL.isMobileFallback(hg)) {
            if ((hM = h4.isPhoneSized(hl)) === h0) {
              hX.mobile = hL.FALLBACK_MOBILE;
              hX.tablet = hX.phone = null;
            } else if (hM) {
              hX.mobile = hX.phone = hL.FALLBACK_PHONE;
              hX.tablet = null;
            } else {
              hX.mobile = hX.tablet = hL.FALLBACK_TABLET;
              hX.phone = null;
            }
          } else if (hL.isTabletFallback(hg)) {
            hX.mobile = hX.tablet = hL.FALLBACK_TABLET;
            hX.phone = null;
          } else {
            hX.mobile = hX.tablet = hX.phone = null;
          }
          return;
        }
      }
    };
    hL.mobileGrade = function (hX) {
      var hg = hX.mobile() !== null;
      if (hX.os("iOS") && hX.version("iPad") >= 4.3 || hX.os("iOS") && hX.version("iPhone") >= 3.1 || hX.os("iOS") && hX.version("iPod") >= 3.1 || hX.version("Android") > 2.1 && hX.is("Webkit") || hX.version("Windows Phone OS") >= 7 || hX.is("BlackBerry") && hX.version("BlackBerry") >= 6 || hX.match("Playbook.*Tablet") || hX.version("webOS") >= 1.4 && hX.match("Palm|Pre|Pixi") || hX.match("hp.*TouchPad") || hX.is("Firefox") && hX.version("Firefox") >= 12 || hX.is("Chrome") && hX.is("AndroidOS") && hX.version("Android") >= 4 || hX.is("Skyfire") && hX.version("Skyfire") >= 4.1 && hX.is("AndroidOS") && hX.version("Android") >= 2.3 || hX.is("Opera") && hX.version("Opera Mobi") > 11 && hX.is("AndroidOS") || hX.is("MeeGoOS") || hX.is("Tizen") || hX.is("Dolfin") && hX.version("Bada") >= 2 || (hX.is("UC Browser") || hX.is("Dolfin")) && hX.version("Android") >= 2.3 || hX.match("Kindle Fire") || hX.is("Kindle") && hX.version("Kindle") >= 3 || hX.is("AndroidOS") && hX.is("NookTablet") || hX.version("Chrome") >= 11 && !hg || hX.version("Safari") >= 5 && !hg || hX.version("Firefox") >= 4 && !hg || hX.version("MSIE") >= 7 && !hg || hX.version("Opera") >= 10 && !hg) {
        return "A";
      } else if (hX.os("iOS") && hX.version("iPad") < 4.3 || hX.os("iOS") && hX.version("iPhone") < 3.1 || hX.os("iOS") && hX.version("iPod") < 3.1 || hX.is("Blackberry") && hX.version("BlackBerry") >= 5 && hX.version("BlackBerry") < 6 || hX.version("Opera Mini") >= 5 && hX.version("Opera Mini") <= 6.5 && (hX.version("Android") >= 2.3 || hX.is("iOS")) || hX.match("NokiaN8|NokiaC7|N97.*Series60|Symbian/3") || hX.version("Opera Mobi") >= 11 && hX.is("SymbianOS")) {
        return "B";
      } else {
        if (hX.version("BlackBerry") >= 5 && !hX.match("MSIEMobile|Windows CE.*Mobile")) {
          hX.version("Windows Mobile");
        }
        return "C";
      }
    };
    hL.detectOS = function (hX) {
      return hL.findMatch(hL.mobileDetectRules.oss0, hX) || hL.findMatch(hL.mobileDetectRules.oss, hX);
    };
    hL.getDeviceSmallerSide = function () {
      if (window.screen.width < window.screen.height) {
        return window.screen.width;
      } else {
        return window.screen.height;
      }
    };
    h4.prototype = {
      constructor: h4,
      mobile: function () {
        hL.prepareDetectionCache(this._cache, this.ua, this.maxPhoneWidth);
        return this._cache.mobile;
      },
      phone: function () {
        hL.prepareDetectionCache(this._cache, this.ua, this.maxPhoneWidth);
        return this._cache.phone;
      },
      tablet: function () {
        hL.prepareDetectionCache(this._cache, this.ua, this.maxPhoneWidth);
        return this._cache.tablet;
      },
      userAgent: function () {
        if (this._cache.userAgent === h0) {
          this._cache.userAgent = hL.findMatch(hL.mobileDetectRules.uas, this.ua);
        }
        return this._cache.userAgent;
      },
      userAgents: function () {
        if (this._cache.userAgents === h0) {
          this._cache.userAgents = hL.findMatches(hL.mobileDetectRules.uas, this.ua);
        }
        return this._cache.userAgents;
      },
      os: function () {
        if (this._cache.os === h0) {
          this._cache.os = hL.detectOS(this.ua);
        }
        return this._cache.os;
      },
      version: function (hX) {
        return hL.getVersion(hX, this.ua);
      },
      versionStr: function (hX) {
        return hL.getVersionStr(hX, this.ua);
      },
      is: function (hX) {
        return h2(this.userAgents(), hX) || h1(hX, this.os()) || h1(hX, this.phone()) || h1(hX, this.tablet()) || h2(hL.findMatches(hL.mobileDetectRules.utils, this.ua), hX);
      },
      match: function (hX) {
        return (hX = hX instanceof RegExp ? hX : new RegExp(hX, "i")).test(this.ua);
      },
      isPhoneSized: function (hX) {
        return h4.isPhoneSized(hX || this.maxPhoneWidth);
      },
      mobileGrade: function () {
        if (this._cache.grade === h0) {
          this._cache.grade = hL.mobileGrade(this);
        }
        return this._cache.grade;
      }
    };
    if (typeof window != "undefined" && window.screen) {
      h4.isPhoneSized = function (hX) {
        if (hX < 0) {
          return h0;
        } else {
          return hL.getDeviceSmallerSide() <= hX;
        }
      };
    } else {
      h4.isPhoneSized = function () {};
    }
    h4._impl = hL;
    h4.version = "1.4.4 2019-09-21";
    return h4;
  });
})();
(function (h0, h1) {
  if (typeof exports == "object" && typeof module == "object") {
    module.exports = h1();
  } else if (typeof define == "function" && define.amd) {
    define([], h1);
  } else if (typeof exports == "object") {
    exports.devtoolsDetector = h1();
  } else {
    h0.devtoolsDetector = h1();
  }
})(typeof self != "undefined" ? self : this, function () {
  h1 = [function (h3, h4, h5) {
    'use strict';

    (function (h6) {
      h4.c = function () {
        return (typeof performance != "undefined" ? performance : Date).now();
      };
      h4.b = function (h9) {
        var hh = (h9 = h9 === undefined ? {} : h9).includes;
        var h9 = h9.excludes;
        var h9 = h9 === undefined ? [] : h9;
        var hL = false;
        var hV = false;
        for (var hK = 0, hw = hh === undefined ? [] : hh; hK < hw.length; hK++) {
          if (hw[hK] === true) {
            hL = true;
            break;
          }
        }
        for (var hX = 0, hg = h9; hX < hg.length; hX++) {
          if (hg[hX] === true) {
            hV = true;
            break;
          }
        }
        return hL && !hV;
      };
      h4.d = function (h9, hh, hL) {
        h9 = h8.a[h9];
        return h9 !== undefined && Object(h7.compare)(h9, hh, hL);
      };
      h4.a = function () {
        if (typeof self != "undefined") {
          return self;
        } else if (typeof window != "undefined") {
          return window;
        } else if (h6 !== undefined) {
          return h6;
        } else {
          return this;
        }
      };
      var h7 = h5(11);
      h5.n(h7);
      var h8 = h5(5);
    }).call(h4, h5(10));
  }, function (h3, h4, h5) {
    'use strict';

    h5.d(h4, "c", function () {
      return h7;
    });
    h5.d(h4, "d", function () {
      return h8;
    });
    h5.d(h4, "b", function () {
      return h9;
    });
    h5.d(h4, "g", function () {
      return hh;
    });
    h5.d(h4, "e", function () {
      return hL;
    });
    h5.d(h4, "a", function () {
      return hV;
    });
    h5.d(h4, "f", function () {
      return hK;
    });
    var h6;
    var h4 = h5(3);
    var h5 = h5(0);
    var h5 = Object(h5.a)();
    var h7 = "InstallTrigger" in ((h5 == null ? undefined : h5.window) || {}) || /firefox/i.test(h4.b);
    var h8 = /trident/i.test(h4.b) || /msie/i.test(h4.b);
    var h9 = /edge/i.test(h4.b);
    var hh = /webkit/i.test(h4.b) && !h9;
    var hL = /IqiyiApp/.test(h4.b);
    var hV = ((h6 = h5 == null ? undefined : h5.window) == null ? undefined : h6.chrome) !== undefined || /chrome/i.test(h4.b) || /CriOS/i.test(h4.b);
    var hK = (((h5 = (h6 = h5 == null ? undefined : h5.window) == null ? undefined : h6.safari) == null ? undefined : h5.pushNotification) || false).toString() === "[object SafariRemoteNotification]" || /safari/i.test(h4.b) && !hV;
  }, function (h3, h4, h5) {
    'use strict';

    h5.d(h4, "b", function () {
      return h8;
    });
    h5.d(h4, "c", function () {
      return h9;
    });
    h5.d(h4, "a", function () {
      return hh;
    });
    var h6 = h5(1);
    function h7(hL) {
      if (console) {
        if (!h6.d && !h6.b) {
          return console[hL];
        }
        if (hL === "log" || hL === "clear") {
          return function () {
            var hV = [];
            for (var hK = 0; hK < arguments.length; hK++) {
              hV[hK] = arguments[hK];
            }
            console[hL].apply(console, hV);
          };
        }
      }
      return function () {
        for (var hV = 0; hV < arguments.length; hV++) {
          hV;
          0;
        }
      };
    }
    var h8 = h7("log");
    var h9 = h7("table");
    var hh = h7("clear");
  }, function (h3, h4, h5) {
    'use strict';

    h4.a = function () {
      var h8;
      var h9 = [];
      for (var hh = 0; hh < arguments.length; hh++) {
        h9[hh] = arguments[hh];
      }
      if (h6 != null && h6.document) {
        return (h8 = h6.document).createElement.apply(h8, h9);
      } else {
        return {};
      }
    };
    h5.d(h4, "b", function () {
      return h7;
    });
    var h4 = h5(0);
    var h6 = Object(h4.a)();
    var h7 = ((h5 = h6 == null ? undefined : h6.navigator) == null ? undefined : h5.userAgent) || "xxxxx";
  }, function (h3, h4, h5) {
    'use strict';

    Object.defineProperty(h4, "__esModule", {
      value: true
    });
    h4.addListener = function (hX) {
      hw.addListener(hX);
    };
    h4.removeListener = function (hX) {
      hw.removeListener(hX);
    };
    h4.isLaunch = function () {
      return hw.isLaunch();
    };
    h4.launch = function () {
      hw.launch();
    };
    h4.stop = function () {
      hw.stop();
    };
    h4.setDetectDelay = function (hX) {
      hw.setDetectDelay(hX);
    };
    var h6 = h5(7);
    var h7 = h5(8);
    h5.d(h4, "DevtoolsDetector", function () {
      return h6.a;
    });
    h5.d(h4, "checkers", function () {
      return h7;
    });
    var h8 = h5(0);
    h5.d(h4, "match", function () {
      return h8.b;
    });
    h5.d(h4, "specificVersionMatch", function () {
      return h8.d;
    });
    var h9 = h5(1);
    h5.d(h4, "isFirefox", function () {
      return h9.c;
    });
    h5.d(h4, "isIE", function () {
      return h9.d;
    });
    h5.d(h4, "isEdge", function () {
      return h9.b;
    });
    h5.d(h4, "isWebkit", function () {
      return h9.g;
    });
    h5.d(h4, "isIqiyiApp", function () {
      return h9.e;
    });
    h5.d(h4, "isChrome", function () {
      return h9.a;
    });
    h5.d(h4, "isSafari", function () {
      return h9.f;
    });
    var hh = h5(2);
    h5.d(h4, "log", function () {
      return hh.b;
    });
    h5.d(h4, "table", function () {
      return hh.c;
    });
    h5.d(h4, "clear", function () {
      return hh.a;
    });
    var hL = h5(19);
    h5.d(h4, "isMobile", function () {
      return hL.a;
    });
    var hV = h5(5);
    h5.d(h4, "versionMap", function () {
      return hV.a;
    });
    var hK = h5(6);
    h5.d(h4, "isMac", function () {
      return hK.d;
    });
    h5.d(h4, "isIpad", function () {
      return hK.b;
    });
    h5.d(h4, "isIphone", function () {
      return hK.c;
    });
    h5.d(h4, "isAndroid", function () {
      return hK.a;
    });
    h5.d(h4, "isWindows", function () {
      return hK.e;
    });
    var hw = new h6.a({
      checkers: [h7.erudaChecker, h7.elementIdChecker, h7.regToStringChecker, h7.functionToStringChecker, h7.depRegToStringChecker, h7.dateToStringChecker, h7.performanceChecker, h7.debuggerChecker]
    });
    h4.default = hw;
  }, function (h3, h4, h5) {
    'use strict';

    h5.d(h4, "a", function () {
      return h6;
    });
    var h6 = {};
    for (var h7 = 0, h8 = (h5(3).b || "").match(/\w+\/(\d|\.)+(\s|$)/gi) || []; h7 < h8.length; h7++) {
      var h9 = h8[h7].split("/");
      var hh = h9[0];
      var h9 = h9[1];
      h6[hh] = h9;
    }
  }, function (h3, h4, h5) {
    'use strict';

    h5.d(h4, "d", function () {
      return h6;
    });
    h5.d(h4, "b", function () {
      return h7;
    });
    h5.d(h4, "c", function () {
      return h8;
    });
    h5.d(h4, "a", function () {
      return h9;
    });
    h5.d(h4, "e", function () {
      return hh;
    });
    var h4 = h5(3);
    var h6 = /macintosh/i.test(h4.b);
    var h7 = /ipad/i.test(h4.b) || h6 && navigator.maxTouchPoints > 1;
    var h8 = /iphone/i.test(h4.b);
    var h9 = /android/i.test(h4.b);
    var hh = /windows/i.test(h4.b);
  }, function (h3, h4, h5) {
    'use strict';

    h5.d(h4, "a", function () {
      return h8;
    });
    var h6 = this && this.__awaiter || function (hh, hL, hV, hK) {
      return new (hV = hV || Promise)(function (hw, hX) {
        function hg(ho) {
          try {
            hM(hK.next(ho));
          } catch (hr) {
            hX(hr);
          }
        }
        function hl(ho) {
          try {
            hM(hK.throw(ho));
          } catch (hr) {
            hX(hr);
          }
        }
        function hM(ho) {
          var hr;
          if (ho.done) {
            hw(ho.value);
          } else {
            ((hr = ho.value) instanceof hV ? hr : new hV(function (ha) {
              ha(hr);
            })).then(hg, hl);
          }
        }
        hM((hK = hK.apply(hh, hL || [])).next());
      });
    };
    var h7 = this && this.__generator || function (hh, hL) {
      var hV;
      var hK;
      var hw;
      var hX = {
        label: 0,
        sent: function () {
          if (hw[0] & 1) {
            throw hw[1];
          }
          return hw[1];
        },
        trys: [],
        ops: []
      };
      var hg = {
        next: hl(0),
        throw: hl(1),
        return: hl(2)
      };
      if (typeof Symbol == "function") {
        hg[Symbol.iterator] = function () {
          return this;
        };
      }
      return hg;
      function hl(hM) {
        return function (ho) {
          var hr = [hM, ho];
          if (hV) {
            throw new TypeError("Generator is already executing.");
          }
          while (hX) {
            try {
              hV = 1;
              if (hK && (hw = hr[0] & 2 ? hK.return : hr[0] ? hK.throw || ((hw = hK.return) && hw.call(hK), 0) : hK.next) && !(hw = hw.call(hK, hr[1])).done) {
                return hw;
              }
              hK = 0;
              switch ((hr = hw ? [hr[0] & 2, hw.value] : hr)[0]) {
                case 0:
                case 1:
                  hw = hr;
                  break;
                case 4:
                  hX.label++;
                  return {
                    value: hr[1],
                    done: false
                  };
                case 5:
                  hX.label++;
                  hK = hr[1];
                  hr = [0];
                  continue;
                case 7:
                  hr = hX.ops.pop();
                  hX.trys.pop();
                  continue;
                default:
                  if (!(hw = (hw = hX.trys).length > 0 && hw[hw.length - 1]) && (hr[0] === 6 || hr[0] === 2)) {
                    hX = 0;
                    continue;
                  }
                  if (hr[0] === 3 && (!hw || hr[1] > hw[0] && hr[1] < hw[3])) {
                    hX.label = hr[1];
                  } else if (hr[0] === 6 && hX.label < hw[1]) {
                    hX.label = hw[1];
                    hw = hr;
                  } else {
                    if (!hw || hX.label >= hw[2]) {
                      if (hw[2]) {
                        hX.ops.pop();
                      }
                      hX.trys.pop();
                      continue;
                    }
                    hX.label = hw[2];
                    hX.ops.push(hr);
                  }
              }
              hr = hL.call(hh, hX);
            } catch (ha) {
              hr = [6, ha];
              hK = 0;
            } finally {
              hV = hw = 0;
            }
          }
          if (hr[0] & 5) {
            throw hr[1];
          }
          return {
            value: hr[0] ? hr[1] : undefined,
            done: true
          };
        };
      }
    };
    h9.prototype.launch = function () {
      if (this._detectLoopDelay <= 0) {
        this.setDetectDelay(500);
      }
      if (this._detectLoopStopped) {
        this._detectLoopStopped = false;
        this._detectLoop();
      }
    };
    h9.prototype.stop = function () {
      if (!this._detectLoopStopped) {
        this._detectLoopStopped = true;
        clearTimeout(this._timer);
      }
    };
    h9.prototype.isLaunch = function () {
      return !this._detectLoopStopped;
    };
    h9.prototype.setDetectDelay = function (hh) {
      this._detectLoopDelay = hh;
    };
    h9.prototype.addListener = function (hh) {
      this._listeners.push(hh);
    };
    h9.prototype.removeListener = function (hh) {
      this._listeners = this._listeners.filter(function (hL) {
        return hL !== hh;
      });
    };
    h9.prototype._broadcast = function (hh) {
      for (var hL = 0, hV = this._listeners; hL < hV.length; hL++) {
        var hK = hV[hL];
        try {
          hK(hh.isOpen, hh);
        } catch (hw) {}
      }
    };
    h9.prototype._detectLoop = function () {
      return h6(this, undefined, undefined, function () {
        var hh;
        var hL;
        var hV;
        var hK;
        var hw;
        var hX = this;
        return h7(this, function (hg) {
          switch (hg.label) {
            case 0:
              hh = false;
              hL = "";
              hV = 0;
              hK = this._checkers;
              hg.label = 1;
            case 1:
              if (hV < hK.length) {
                return [4, (hw = hK[hV]).isEnable()];
              } else {
                return [3, 6];
              }
            case 2:
              if (hg.sent()) {
                hL = hw.name;
                return [4, hw.isOpen()];
              } else {
                return [3, 4];
              }
            case 3:
              hh = hg.sent();
              hg.label = 4;
            case 4:
              if (hh) {
                return [3, 6];
              }
              hg.label = 5;
            case 5:
              hV++;
              return [3, 1];
            case 6:
              if (hh != this._isOpen) {
                this._isOpen = hh;
                this._broadcast({
                  isOpen: hh,
                  checkerName: hL
                });
              }
              if (this._detectLoopDelay > 0) {
                this._timer = setTimeout(function () {
                  return hX._detectLoop();
                }, this._detectLoopDelay);
              } else {
                this.stop();
              }
              return [2];
          }
        });
      });
    };
    var h8 = h9;
    function h9(hh) {
      hh = hh.checkers;
      this._listeners = [];
      this._isOpen = false;
      this._detectLoopStopped = true;
      this._detectLoopDelay = 500;
      this._checkers = hh.slice();
    }
  }, function (h3, h4, h5) {
    'use strict';

    Object.defineProperty(h4, "__esModule", {
      value: true
    });
    var h6 = h5(9);
    h5.d(h4, "depRegToStringChecker", function () {
      return h6.a;
    });
    var h7 = h5(12);
    h5.d(h4, "elementIdChecker", function () {
      return h7.a;
    });
    var h8 = h5(13);
    h5.d(h4, "functionToStringChecker", function () {
      return h8.a;
    });
    var h9 = h5(14);
    h5.d(h4, "regToStringChecker", function () {
      return h9.a;
    });
    var hh = h5(15);
    h5.d(h4, "debuggerChecker", function () {
      return hh.a;
    });
    var hL = h5(16);
    h5.d(h4, "dateToStringChecker", function () {
      return hL.a;
    });
    var hV = h5(17);
    h5.d(h4, "performanceChecker", function () {
      return hV.a;
    });
    var hK = h5(18);
    h5.d(h4, "erudaChecker", function () {
      return hK.a;
    });
  }, function (h3, h4, h5) {
    'use strict';

    h5.d(h4, "a", function () {
      return hK;
    });
    var h6 = h5(1);
    var h7 = h5(2);
    var h8 = h5(0);
    var h9 = this && this.__awaiter || function (hw, hX, hg, hl) {
      return new (hg = hg || Promise)(function (hM, ho) {
        function hr(hb) {
          try {
            hx(hl.next(hb));
          } catch (hc) {
            ho(hc);
          }
        }
        function ha(hb) {
          try {
            hx(hl.throw(hb));
          } catch (hc) {
            ho(hc);
          }
        }
        function hx(hb) {
          var hc;
          if (hb.done) {
            hM(hb.value);
          } else {
            ((hc = hb.value) instanceof hg ? hc : new hg(function (hm) {
              hm(hc);
            })).then(hr, ha);
          }
        }
        hx((hl = hl.apply(hw, hX || [])).next());
      });
    };
    var hh = this && this.__generator || function (hw, hX) {
      var hg;
      var hl;
      var hM;
      var ho = {
        label: 0,
        sent: function () {
          if (hM[0] & 1) {
            throw hM[1];
          }
          return hM[1];
        },
        trys: [],
        ops: []
      };
      var hr = {
        next: ha(0),
        throw: ha(1),
        return: ha(2)
      };
      if (typeof Symbol == "function") {
        hr[Symbol.iterator] = function () {
          return this;
        };
      }
      return hr;
      function ha(hx) {
        return function (hb) {
          var hc = [hx, hb];
          if (hg) {
            throw new TypeError("Generator is already executing.");
          }
          while (ho) {
            try {
              hg = 1;
              if (hl && (hM = hc[0] & 2 ? hl.return : hc[0] ? hl.throw || ((hM = hl.return) && hM.call(hl), 0) : hl.next) && !(hM = hM.call(hl, hc[1])).done) {
                return hM;
              }
              hl = 0;
              switch ((hc = hM ? [hc[0] & 2, hM.value] : hc)[0]) {
                case 0:
                case 1:
                  hM = hc;
                  break;
                case 4:
                  ho.label++;
                  return {
                    value: hc[1],
                    done: false
                  };
                case 5:
                  ho.label++;
                  hl = hc[1];
                  hc = [0];
                  continue;
                case 7:
                  hc = ho.ops.pop();
                  ho.trys.pop();
                  continue;
                default:
                  if (!(hM = (hM = ho.trys).length > 0 && hM[hM.length - 1]) && (hc[0] === 6 || hc[0] === 2)) {
                    ho = 0;
                    continue;
                  }
                  if (hc[0] === 3 && (!hM || hc[1] > hM[0] && hc[1] < hM[3])) {
                    ho.label = hc[1];
                  } else if (hc[0] === 6 && ho.label < hM[1]) {
                    ho.label = hM[1];
                    hM = hc;
                  } else {
                    if (!hM || ho.label >= hM[2]) {
                      if (hM[2]) {
                        ho.ops.pop();
                      }
                      ho.trys.pop();
                      continue;
                    }
                    ho.label = hM[2];
                    ho.ops.push(hc);
                  }
              }
              hc = hX.call(hw, ho);
            } catch (hm) {
              hc = [6, hm];
              hl = 0;
            } finally {
              hg = hM = 0;
            }
          }
          if (hc[0] & 5) {
            throw hc[1];
          }
          return {
            value: hc[0] ? hc[1] : undefined,
            done: true
          };
        };
      }
    };
    var hL = / /;
    var hV = false;
    hL.toString = function () {
      hV = true;
      return hK.name;
    };
    var hK = {
      name: "dep-reg-to-string",
      isOpen: function () {
        return h9(this, undefined, undefined, function () {
          return hh(this, function (hw) {
            hV = false;
            Object(h7.c)({
              dep: hL
            });
            Object(h7.a)();
            return [2, hV];
          });
        });
      },
      isEnable: function () {
        return h9(this, undefined, undefined, function () {
          return hh(this, function (hw) {
            return [2, Object(h8.b)({
              includes: [true],
              excludes: [h6.c, h6.d]
            })];
          });
        });
      }
    };
  }, function (h3, h4) {
    var h5 = function () {
      return this;
    }();
    try {
      h5 = h5 || Function("return this")() || (0, eval)("this");
    } catch (h6) {
      if (typeof window == "object") {
        h5 = window;
      }
    }
    h3.exports = h5;
  }, function (h3, h4, h5) {
    var h6;
    if ((h4 = typeof (h6 = function () {
      var h7 = /^v?(?:\d+)(\.(?:[x*]|\d+)(\.(?:[x*]|\d+)(\.(?:[x*]|\d+))?(?:-[\da-z\-]+(?:\.[\da-z\-]+)*)?(?:\+[\da-z\-]+(?:\.[\da-z\-]+)*)?)?)?$/i;
      function h8(hw) {
        var hX = hw.replace(/^v/, "").replace(/\+.*$/, "");
        var hg = function (hM, ho) {
          if (hM.indexOf(ho) === -1) {
            return hM.length;
          } else {
            return hM.indexOf(ho);
          }
        }(hX, "-");
        var hl = hX.substring(0, hg).split(".");
        hl.push(hX.substring(hg + 1));
        return hl;
      }
      function h9(hw) {
        if (isNaN(Number(hw))) {
          return hw;
        } else {
          return Number(hw);
        }
      }
      function hh(hw) {
        if (typeof hw != "string") {
          throw new TypeError("Invalid argument expected string");
        }
        if (!h7.test(hw)) {
          throw new Error("Invalid argument not valid semver ('" + hw + "' received)");
        }
      }
      function hL(hw, hX) {
        [hw, hX].forEach(hh);
        for (var hg = h8(hw), hl = h8(hX), hM = 0; hM < Math.max(hg.length - 1, hl.length - 1); hM++) {
          var ho = parseInt(hg[hM] || 0, 10);
          var hr = parseInt(hl[hM] || 0, 10);
          if (ho > hr) {
            return 1;
          }
          if (hr > ho) {
            return -1;
          }
        }
        var ha = hg[hg.length - 1];
        var hx = hl[hl.length - 1];
        if (ha && hx) {
          var hb = ha.split(".").map(h9);
          var hc = hx.split(".").map(h9);
          for (hM = 0; hM < Math.max(hb.length, hc.length); hM++) {
            if (hb[hM] === undefined || typeof hc[hM] == "string" && typeof hb[hM] == "number") {
              return -1;
            }
            if (hc[hM] === undefined || typeof hb[hM] == "string" && typeof hc[hM] == "number") {
              return 1;
            }
            if (hb[hM] > hc[hM]) {
              return 1;
            }
            if (hc[hM] > hb[hM]) {
              return -1;
            }
          }
        } else if (ha || hx) {
          if (ha) {
            return -1;
          } else {
            return 1;
          }
        }
        return 0;
      }
      var hV = [">", ">=", "=", "<", "<="];
      var hK = {
        ">": [1],
        ">=": [0, 1],
        "=": [0],
        "<=": [-1, 0],
        "<": [-1]
      };
      hL.validate = function (hw) {
        return typeof hw == "string" && h7.test(hw);
      };
      hL.compare = function (hw, hX, hg) {
        (function (hM) {
          if (typeof hM != "string") {
            throw new TypeError("Invalid operator type, expected string but got " + typeof hM);
          }
          if (hV.indexOf(hM) === -1) {
            throw new TypeError("Invalid operator, expected one of " + hV.join("|"));
          }
        })(hg);
        var hl = hL(hw, hX);
        return hK[hg].indexOf(hl) > -1;
      };
      return hL;
    }) == "function" ? h6.apply(h4, []) : h6) !== undefined) {
      h3.exports = h4;
    }
  }, function (h3, h4, h5) {
    'use strict';

    h5.d(h4, "a", function () {
      return hK;
    });
    var h6 = h5(1);
    var h7 = h5(2);
    var h8 = h5(0);
    var h4 = h5(3);
    var h9 = this && this.__awaiter || function (hw, hX, hg, hl) {
      return new (hg = hg || Promise)(function (hM, ho) {
        function hr(hb) {
          try {
            hx(hl.next(hb));
          } catch (hc) {
            ho(hc);
          }
        }
        function ha(hb) {
          try {
            hx(hl.throw(hb));
          } catch (hc) {
            ho(hc);
          }
        }
        function hx(hb) {
          var hc;
          if (hb.done) {
            hM(hb.value);
          } else {
            ((hc = hb.value) instanceof hg ? hc : new hg(function (hm) {
              hm(hc);
            })).then(hr, ha);
          }
        }
        hx((hl = hl.apply(hw, hX || [])).next());
      });
    };
    var hh = this && this.__generator || function (hw, hX) {
      var hg;
      var hl;
      var hM;
      var ho = {
        label: 0,
        sent: function () {
          if (hM[0] & 1) {
            throw hM[1];
          }
          return hM[1];
        },
        trys: [],
        ops: []
      };
      var hr = {
        next: ha(0),
        throw: ha(1),
        return: ha(2)
      };
      if (typeof Symbol == "function") {
        hr[Symbol.iterator] = function () {
          return this;
        };
      }
      return hr;
      function ha(hx) {
        return function (hb) {
          var hc = [hx, hb];
          if (hg) {
            throw new TypeError("Generator is already executing.");
          }
          while (ho) {
            try {
              hg = 1;
              if (hl && (hM = hc[0] & 2 ? hl.return : hc[0] ? hl.throw || ((hM = hl.return) && hM.call(hl), 0) : hl.next) && !(hM = hM.call(hl, hc[1])).done) {
                return hM;
              }
              hl = 0;
              switch ((hc = hM ? [hc[0] & 2, hM.value] : hc)[0]) {
                case 0:
                case 1:
                  hM = hc;
                  break;
                case 4:
                  ho.label++;
                  return {
                    value: hc[1],
                    done: false
                  };
                case 5:
                  ho.label++;
                  hl = hc[1];
                  hc = [0];
                  continue;
                case 7:
                  hc = ho.ops.pop();
                  ho.trys.pop();
                  continue;
                default:
                  if (!(hM = (hM = ho.trys).length > 0 && hM[hM.length - 1]) && (hc[0] === 6 || hc[0] === 2)) {
                    ho = 0;
                    continue;
                  }
                  if (hc[0] === 3 && (!hM || hc[1] > hM[0] && hc[1] < hM[3])) {
                    ho.label = hc[1];
                  } else if (hc[0] === 6 && ho.label < hM[1]) {
                    ho.label = hM[1];
                    hM = hc;
                  } else {
                    if (!hM || ho.label >= hM[2]) {
                      if (hM[2]) {
                        ho.ops.pop();
                      }
                      ho.trys.pop();
                      continue;
                    }
                    ho.label = hM[2];
                    ho.ops.push(hc);
                  }
              }
              hc = hX.call(hw, ho);
            } catch (hm) {
              hc = [6, hm];
              hl = 0;
            } finally {
              hg = hM = 0;
            }
          }
          if (hc[0] & 5) {
            throw hc[1];
          }
          return {
            value: hc[0] ? hc[1] : undefined,
            done: true
          };
        };
      }
    };
    var hL = Object(h4.a)("div");
    var hV = false;
    Object.defineProperty(hL, "id", {
      get: function () {
        hV = true;
        return hK.name;
      },
      configurable: true
    });
    var hK = {
      name: "element-id",
      isOpen: function () {
        return h9(this, undefined, undefined, function () {
          return hh(this, function (hw) {
            hV = false;
            Object(h7.b)(hL);
            Object(h7.a)();
            return [2, hV];
          });
        });
      },
      isEnable: function () {
        return h9(this, undefined, undefined, function () {
          return hh(this, function (hw) {
            return [2, Object(h8.b)({
              includes: [true],
              excludes: [h6.d, h6.b, h6.c]
            })];
          });
        });
      }
    };
  }, function (h3, h4, h5) {
    'use strict';

    h5.d(h4, "a", function () {
      return hw;
    });
    var h6 = h5(1);
    var h7 = h5(2);
    var h8 = h5(6);
    var h9 = h5(0);
    var hh = this && this.__awaiter || function (hX, hg, hl, hM) {
      return new (hl = hl || Promise)(function (ho, hr) {
        function ha(hc) {
          try {
            hb(hM.next(hc));
          } catch (hm) {
            hr(hm);
          }
        }
        function hx(hc) {
          try {
            hb(hM.throw(hc));
          } catch (hm) {
            hr(hm);
          }
        }
        function hb(hc) {
          var hm;
          if (hc.done) {
            ho(hc.value);
          } else {
            ((hm = hc.value) instanceof hl ? hm : new hl(function (hB) {
              hB(hm);
            })).then(ha, hx);
          }
        }
        hb((hM = hM.apply(hX, hg || [])).next());
      });
    };
    var hL = this && this.__generator || function (hX, hg) {
      var hl;
      var hM;
      var ho;
      var hr = {
        label: 0,
        sent: function () {
          if (ho[0] & 1) {
            throw ho[1];
          }
          return ho[1];
        },
        trys: [],
        ops: []
      };
      var ha = {
        next: hx(0),
        throw: hx(1),
        return: hx(2)
      };
      if (typeof Symbol == "function") {
        ha[Symbol.iterator] = function () {
          return this;
        };
      }
      return ha;
      function hx(hb) {
        return function (hc) {
          var hm = [hb, hc];
          if (hl) {
            throw new TypeError("Generator is already executing.");
          }
          while (hr) {
            try {
              hl = 1;
              if (hM && (ho = hm[0] & 2 ? hM.return : hm[0] ? hM.throw || ((ho = hM.return) && ho.call(hM), 0) : hM.next) && !(ho = ho.call(hM, hm[1])).done) {
                return ho;
              }
              hM = 0;
              switch ((hm = ho ? [hm[0] & 2, ho.value] : hm)[0]) {
                case 0:
                case 1:
                  ho = hm;
                  break;
                case 4:
                  hr.label++;
                  return {
                    value: hm[1],
                    done: false
                  };
                case 5:
                  hr.label++;
                  hM = hm[1];
                  hm = [0];
                  continue;
                case 7:
                  hm = hr.ops.pop();
                  hr.trys.pop();
                  continue;
                default:
                  if (!(ho = (ho = hr.trys).length > 0 && ho[ho.length - 1]) && (hm[0] === 6 || hm[0] === 2)) {
                    hr = 0;
                    continue;
                  }
                  if (hm[0] === 3 && (!ho || hm[1] > ho[0] && hm[1] < ho[3])) {
                    hr.label = hm[1];
                  } else if (hm[0] === 6 && hr.label < ho[1]) {
                    hr.label = ho[1];
                    ho = hm;
                  } else {
                    if (!ho || hr.label >= ho[2]) {
                      if (ho[2]) {
                        hr.ops.pop();
                      }
                      hr.trys.pop();
                      continue;
                    }
                    hr.label = ho[2];
                    hr.ops.push(hm);
                  }
              }
              hm = hg.call(hX, hr);
            } catch (hB) {
              hm = [6, hB];
              hM = 0;
            } finally {
              hl = ho = 0;
            }
          }
          if (hm[0] & 5) {
            throw hm[1];
          }
          return {
            value: hm[0] ? hm[1] : undefined,
            done: true
          };
        };
      }
    };
    function hV() {}
    var hK = 0;
    hV.toString = function () {
      hK++;
      return "";
    };
    var hw = {
      name: "function-to-string",
      isOpen: function () {
        return hh(this, undefined, undefined, function () {
          return hL(this, function (hX) {
            hK = 0;
            Object(h7.b)(hV);
            Object(h7.a)();
            return [2, hK === 2];
          });
        });
      },
      isEnable: function () {
        return hh(this, undefined, undefined, function () {
          return hL(this, function (hX) {
            return [2, Object(h9.b)({
              includes: [true],
              excludes: [h6.e, h6.c, (h8.b || h8.c) && h6.a]
            })];
          });
        });
      }
    };
  }, function (h3, h4, h5) {
    'use strict';

    h5.d(h4, "a", function () {
      return hK;
    });
    var h6 = h5(2);
    var h7 = h5(1);
    var h8 = h5(0);
    var h9 = this && this.__awaiter || function (hw, hX, hg, hl) {
      return new (hg = hg || Promise)(function (hM, ho) {
        function hr(hb) {
          try {
            hx(hl.next(hb));
          } catch (hc) {
            ho(hc);
          }
        }
        function ha(hb) {
          try {
            hx(hl.throw(hb));
          } catch (hc) {
            ho(hc);
          }
        }
        function hx(hb) {
          var hc;
          if (hb.done) {
            hM(hb.value);
          } else {
            ((hc = hb.value) instanceof hg ? hc : new hg(function (hm) {
              hm(hc);
            })).then(hr, ha);
          }
        }
        hx((hl = hl.apply(hw, hX || [])).next());
      });
    };
    var hh = this && this.__generator || function (hw, hX) {
      var hg;
      var hl;
      var hM;
      var ho = {
        label: 0,
        sent: function () {
          if (hM[0] & 1) {
            throw hM[1];
          }
          return hM[1];
        },
        trys: [],
        ops: []
      };
      var hr = {
        next: ha(0),
        throw: ha(1),
        return: ha(2)
      };
      if (typeof Symbol == "function") {
        hr[Symbol.iterator] = function () {
          return this;
        };
      }
      return hr;
      function ha(hx) {
        return function (hb) {
          var hc = [hx, hb];
          if (hg) {
            throw new TypeError("Generator is already executing.");
          }
          while (ho) {
            try {
              hg = 1;
              if (hl && (hM = hc[0] & 2 ? hl.return : hc[0] ? hl.throw || ((hM = hl.return) && hM.call(hl), 0) : hl.next) && !(hM = hM.call(hl, hc[1])).done) {
                return hM;
              }
              hl = 0;
              switch ((hc = hM ? [hc[0] & 2, hM.value] : hc)[0]) {
                case 0:
                case 1:
                  hM = hc;
                  break;
                case 4:
                  ho.label++;
                  return {
                    value: hc[1],
                    done: false
                  };
                case 5:
                  ho.label++;
                  hl = hc[1];
                  hc = [0];
                  continue;
                case 7:
                  hc = ho.ops.pop();
                  ho.trys.pop();
                  continue;
                default:
                  if (!(hM = (hM = ho.trys).length > 0 && hM[hM.length - 1]) && (hc[0] === 6 || hc[0] === 2)) {
                    ho = 0;
                    continue;
                  }
                  if (hc[0] === 3 && (!hM || hc[1] > hM[0] && hc[1] < hM[3])) {
                    ho.label = hc[1];
                  } else if (hc[0] === 6 && ho.label < hM[1]) {
                    ho.label = hM[1];
                    hM = hc;
                  } else {
                    if (!hM || ho.label >= hM[2]) {
                      if (hM[2]) {
                        ho.ops.pop();
                      }
                      ho.trys.pop();
                      continue;
                    }
                    ho.label = hM[2];
                    ho.ops.push(hc);
                  }
              }
              hc = hX.call(hw, ho);
            } catch (hm) {
              hc = [6, hm];
              hl = 0;
            } finally {
              hg = hM = 0;
            }
          }
          if (hc[0] & 5) {
            throw hc[1];
          }
          return {
            value: hc[0] ? hc[1] : undefined,
            done: true
          };
        };
      }
    };
    var hL = / /;
    var hV = false;
    hL.toString = function () {
      hV = true;
      return hK.name;
    };
    var hK = {
      name: "reg-to-string",
      isOpen: function () {
        return h9(this, undefined, undefined, function () {
          return hh(this, function (hw) {
            hV = false;
            Object(h6.b)(hL);
            Object(h6.a)();
            return [2, hV];
          });
        });
      },
      isEnable: function () {
        return h9(this, undefined, undefined, function () {
          return hh(this, function (hw) {
            return [2, Object(h8.b)({
              includes: [true],
              excludes: [h7.g]
            })];
          });
        });
      }
    };
  }, function (h3, h4, h5) {
    'use strict';

    h5.d(h4, "a", function () {
      return h9;
    });
    var h6 = h5(0);
    var h7 = this && this.__awaiter || function (hh, hL, hV, hK) {
      return new (hV = hV || Promise)(function (hw, hX) {
        function hg(ho) {
          try {
            hM(hK.next(ho));
          } catch (hr) {
            hX(hr);
          }
        }
        function hl(ho) {
          try {
            hM(hK.throw(ho));
          } catch (hr) {
            hX(hr);
          }
        }
        function hM(ho) {
          var hr;
          if (ho.done) {
            hw(ho.value);
          } else {
            ((hr = ho.value) instanceof hV ? hr : new hV(function (ha) {
              ha(hr);
            })).then(hg, hl);
          }
        }
        hM((hK = hK.apply(hh, hL || [])).next());
      });
    };
    var h8 = this && this.__generator || function (hh, hL) {
      var hV;
      var hK;
      var hw;
      var hX = {
        label: 0,
        sent: function () {
          if (hw[0] & 1) {
            throw hw[1];
          }
          return hw[1];
        },
        trys: [],
        ops: []
      };
      var hg = {
        next: hl(0),
        throw: hl(1),
        return: hl(2)
      };
      if (typeof Symbol == "function") {
        hg[Symbol.iterator] = function () {
          return this;
        };
      }
      return hg;
      function hl(hM) {
        return function (ho) {
          var hr = [hM, ho];
          if (hV) {
            throw new TypeError("Generator is already executing.");
          }
          while (hX) {
            try {
              hV = 1;
              if (hK && (hw = hr[0] & 2 ? hK.return : hr[0] ? hK.throw || ((hw = hK.return) && hw.call(hK), 0) : hK.next) && !(hw = hw.call(hK, hr[1])).done) {
                return hw;
              }
              hK = 0;
              switch ((hr = hw ? [hr[0] & 2, hw.value] : hr)[0]) {
                case 0:
                case 1:
                  hw = hr;
                  break;
                case 4:
                  hX.label++;
                  return {
                    value: hr[1],
                    done: false
                  };
                case 5:
                  hX.label++;
                  hK = hr[1];
                  hr = [0];
                  continue;
                case 7:
                  hr = hX.ops.pop();
                  hX.trys.pop();
                  continue;
                default:
                  if (!(hw = (hw = hX.trys).length > 0 && hw[hw.length - 1]) && (hr[0] === 6 || hr[0] === 2)) {
                    hX = 0;
                    continue;
                  }
                  if (hr[0] === 3 && (!hw || hr[1] > hw[0] && hr[1] < hw[3])) {
                    hX.label = hr[1];
                  } else if (hr[0] === 6 && hX.label < hw[1]) {
                    hX.label = hw[1];
                    hw = hr;
                  } else {
                    if (!hw || hX.label >= hw[2]) {
                      if (hw[2]) {
                        hX.ops.pop();
                      }
                      hX.trys.pop();
                      continue;
                    }
                    hX.label = hw[2];
                    hX.ops.push(hr);
                  }
              }
              hr = hL.call(hh, hX);
            } catch (ha) {
              hr = [6, ha];
              hK = 0;
            } finally {
              hV = hw = 0;
            }
          }
          if (hr[0] & 5) {
            throw hr[1];
          }
          return {
            value: hr[0] ? hr[1] : undefined,
            done: true
          };
        };
      }
    };
    var h9 = {
      name: "debugger-checker",
      isOpen: function () {
        return h7(this, undefined, undefined, function () {
          var hh;
          return h8(this, function (hL) {
            hh = Object(h6.c)();
            (function () {}).constructor("debugger")();
            return [2, Object(h6.c)() - hh > 100];
          });
        });
      },
      isEnable: function () {
        return h7(this, undefined, undefined, function () {
          return h8(this, function (hh) {
            return [2, true];
          });
        });
      }
    };
  }, function (h3, h4, h5) {
    'use strict';

    h5.d(h4, "a", function () {
      return hw;
    });
    var h6 = h5(1);
    var h7 = h5(2);
    var h8 = h5(0);
    var h9 = h5(4);
    var hh = this && this.__awaiter || function (hX, hg, hl, hM) {
      return new (hl = hl || Promise)(function (ho, hr) {
        function ha(hc) {
          try {
            hb(hM.next(hc));
          } catch (hm) {
            hr(hm);
          }
        }
        function hx(hc) {
          try {
            hb(hM.throw(hc));
          } catch (hm) {
            hr(hm);
          }
        }
        function hb(hc) {
          var hm;
          if (hc.done) {
            ho(hc.value);
          } else {
            ((hm = hc.value) instanceof hl ? hm : new hl(function (hB) {
              hB(hm);
            })).then(ha, hx);
          }
        }
        hb((hM = hM.apply(hX, hg || [])).next());
      });
    };
    var hL = this && this.__generator || function (hX, hg) {
      var hl;
      var hM;
      var ho;
      var hr = {
        label: 0,
        sent: function () {
          if (ho[0] & 1) {
            throw ho[1];
          }
          return ho[1];
        },
        trys: [],
        ops: []
      };
      var ha = {
        next: hx(0),
        throw: hx(1),
        return: hx(2)
      };
      if (typeof Symbol == "function") {
        ha[Symbol.iterator] = function () {
          return this;
        };
      }
      return ha;
      function hx(hb) {
        return function (hc) {
          var hm = [hb, hc];
          if (hl) {
            throw new TypeError("Generator is already executing.");
          }
          while (hr) {
            try {
              hl = 1;
              if (hM && (ho = hm[0] & 2 ? hM.return : hm[0] ? hM.throw || ((ho = hM.return) && ho.call(hM), 0) : hM.next) && !(ho = ho.call(hM, hm[1])).done) {
                return ho;
              }
              hM = 0;
              switch ((hm = ho ? [hm[0] & 2, ho.value] : hm)[0]) {
                case 0:
                case 1:
                  ho = hm;
                  break;
                case 4:
                  hr.label++;
                  return {
                    value: hm[1],
                    done: false
                  };
                case 5:
                  hr.label++;
                  hM = hm[1];
                  hm = [0];
                  continue;
                case 7:
                  hm = hr.ops.pop();
                  hr.trys.pop();
                  continue;
                default:
                  if (!(ho = (ho = hr.trys).length > 0 && ho[ho.length - 1]) && (hm[0] === 6 || hm[0] === 2)) {
                    hr = 0;
                    continue;
                  }
                  if (hm[0] === 3 && (!ho || hm[1] > ho[0] && hm[1] < ho[3])) {
                    hr.label = hm[1];
                  } else if (hm[0] === 6 && hr.label < ho[1]) {
                    hr.label = ho[1];
                    ho = hm;
                  } else {
                    if (!ho || hr.label >= ho[2]) {
                      if (ho[2]) {
                        hr.ops.pop();
                      }
                      hr.trys.pop();
                      continue;
                    }
                    hr.label = ho[2];
                    hr.ops.push(hm);
                  }
              }
              hm = hg.call(hX, hr);
            } catch (hB) {
              hm = [6, hB];
              hM = 0;
            } finally {
              hl = ho = 0;
            }
          }
          if (hm[0] & 5) {
            throw hm[1];
          }
          return {
            value: hm[0] ? hm[1] : undefined,
            done: true
          };
        };
      }
    };
    var hV = new Date();
    var hK = 0;
    hV.toString = function () {
      hK++;
      return "";
    };
    var hw = {
      name: "date-to-string",
      isOpen: function () {
        return hh(this, undefined, undefined, function () {
          return hL(this, function (hX) {
            hK = 0;
            Object(h7.b)(hV);
            Object(h7.a)();
            return [2, hK === 2];
          });
        });
      },
      isEnable: function () {
        return hh(this, undefined, undefined, function () {
          return hL(this, function (hX) {
            return [2, Object(h8.b)({
              includes: [h6.a],
              excludes: [(h9.isIpad || h9.isIphone) && h6.a]
            })];
          });
        });
      }
    };
  }, function (h3, h4, h5) {
    'use strict';

    h5.d(h4, "a", function () {
      return hK;
    });
    var h6 = h5(1);
    var h7 = h5(2);
    var h8 = h5(0);
    var h9 = this && this.__awaiter || function (hw, hX, hg, hl) {
      return new (hg = hg || Promise)(function (hM, ho) {
        function hr(hb) {
          try {
            hx(hl.next(hb));
          } catch (hc) {
            ho(hc);
          }
        }
        function ha(hb) {
          try {
            hx(hl.throw(hb));
          } catch (hc) {
            ho(hc);
          }
        }
        function hx(hb) {
          var hc;
          if (hb.done) {
            hM(hb.value);
          } else {
            ((hc = hb.value) instanceof hg ? hc : new hg(function (hm) {
              hm(hc);
            })).then(hr, ha);
          }
        }
        hx((hl = hl.apply(hw, hX || [])).next());
      });
    };
    var hh = this && this.__generator || function (hw, hX) {
      var hg;
      var hl;
      var hM;
      var ho = {
        label: 0,
        sent: function () {
          if (hM[0] & 1) {
            throw hM[1];
          }
          return hM[1];
        },
        trys: [],
        ops: []
      };
      var hr = {
        next: ha(0),
        throw: ha(1),
        return: ha(2)
      };
      if (typeof Symbol == "function") {
        hr[Symbol.iterator] = function () {
          return this;
        };
      }
      return hr;
      function ha(hx) {
        return function (hb) {
          var hc = [hx, hb];
          if (hg) {
            throw new TypeError("Generator is already executing.");
          }
          while (ho) {
            try {
              hg = 1;
              if (hl && (hM = hc[0] & 2 ? hl.return : hc[0] ? hl.throw || ((hM = hl.return) && hM.call(hl), 0) : hl.next) && !(hM = hM.call(hl, hc[1])).done) {
                return hM;
              }
              hl = 0;
              switch ((hc = hM ? [hc[0] & 2, hM.value] : hc)[0]) {
                case 0:
                case 1:
                  hM = hc;
                  break;
                case 4:
                  ho.label++;
                  return {
                    value: hc[1],
                    done: false
                  };
                case 5:
                  ho.label++;
                  hl = hc[1];
                  hc = [0];
                  continue;
                case 7:
                  hc = ho.ops.pop();
                  ho.trys.pop();
                  continue;
                default:
                  if (!(hM = (hM = ho.trys).length > 0 && hM[hM.length - 1]) && (hc[0] === 6 || hc[0] === 2)) {
                    ho = 0;
                    continue;
                  }
                  if (hc[0] === 3 && (!hM || hc[1] > hM[0] && hc[1] < hM[3])) {
                    ho.label = hc[1];
                  } else if (hc[0] === 6 && ho.label < hM[1]) {
                    ho.label = hM[1];
                    hM = hc;
                  } else {
                    if (!hM || ho.label >= hM[2]) {
                      if (hM[2]) {
                        ho.ops.pop();
                      }
                      ho.trys.pop();
                      continue;
                    }
                    ho.label = hM[2];
                    ho.ops.push(hc);
                  }
              }
              hc = hX.call(hw, ho);
            } catch (hm) {
              hc = [6, hm];
              hl = 0;
            } finally {
              hg = hM = 0;
            }
          }
          if (hc[0] & 5) {
            throw hc[1];
          }
          return {
            value: hc[0] ? hc[1] : undefined,
            done: true
          };
        };
      }
    };
    var hL = null;
    var hV = 0;
    var hK = {
      name: "performance",
      isOpen: function () {
        return h9(this, undefined, undefined, function () {
          var hw;
          var hX;
          return hh(this, function (hg) {
            if (hL === null) {
              hL = function () {
                var hM = function () {
                  var ha = {};
                  for (var hx = 0; hx < 500; hx++) {
                    ha[`${hx}`] = `${hx}`;
                  }
                  return ha;
                }();
                var ho = [];
                for (var hr = 0; hr < 50; hr++) {
                  ho.push(hM);
                }
                return ho;
              }();
            }
            hl = Object(h8.c)();
            Object(h7.c)(hL);
            hw = Object(h8.c)() - hl;
            hl = Object(h8.c)();
            Object(h7.b)(hL);
            hX = Object(h8.c)() - hl;
            hV = Math.max(hV, hX);
            Object(h7.a)();
            if (hw == 0 || hV === 0) {
              return [2, false];
            } else {
              return [2, hV * 10 < hw];
            }
            var hl;
          });
        });
      },
      isEnable: function () {
        return h9(this, undefined, undefined, function () {
          return hh(this, function (hw) {
            return [2, Object(h8.b)({
              includes: [h6.a],
              excludes: []
            })];
          });
        });
      }
    };
  }, function (h3, h4, h5) {
    'use strict';

    h5.d(h4, "a", function () {
      return h8;
    });
    var h6 = this && this.__awaiter || function (h9, hh, hL, hV) {
      return new (hL = hL || Promise)(function (hK, hw) {
        function hX(hM) {
          try {
            hl(hV.next(hM));
          } catch (ho) {
            hw(ho);
          }
        }
        function hg(hM) {
          try {
            hl(hV.throw(hM));
          } catch (ho) {
            hw(ho);
          }
        }
        function hl(hM) {
          var ho;
          if (hM.done) {
            hK(hM.value);
          } else {
            ((ho = hM.value) instanceof hL ? ho : new hL(function (hr) {
              hr(ho);
            })).then(hX, hg);
          }
        }
        hl((hV = hV.apply(h9, hh || [])).next());
      });
    };
    var h7 = this && this.__generator || function (h9, hh) {
      var hL;
      var hV;
      var hK;
      var hw = {
        label: 0,
        sent: function () {
          if (hK[0] & 1) {
            throw hK[1];
          }
          return hK[1];
        },
        trys: [],
        ops: []
      };
      var hX = {
        next: hg(0),
        throw: hg(1),
        return: hg(2)
      };
      if (typeof Symbol == "function") {
        hX[Symbol.iterator] = function () {
          return this;
        };
      }
      return hX;
      function hg(hl) {
        return function (hM) {
          var ho = [hl, hM];
          if (hL) {
            throw new TypeError("Generator is already executing.");
          }
          while (hw) {
            try {
              hL = 1;
              if (hV && (hK = ho[0] & 2 ? hV.return : ho[0] ? hV.throw || ((hK = hV.return) && hK.call(hV), 0) : hV.next) && !(hK = hK.call(hV, ho[1])).done) {
                return hK;
              }
              hV = 0;
              switch ((ho = hK ? [ho[0] & 2, hK.value] : ho)[0]) {
                case 0:
                case 1:
                  hK = ho;
                  break;
                case 4:
                  hw.label++;
                  return {
                    value: ho[1],
                    done: false
                  };
                case 5:
                  hw.label++;
                  hV = ho[1];
                  ho = [0];
                  continue;
                case 7:
                  ho = hw.ops.pop();
                  hw.trys.pop();
                  continue;
                default:
                  if (!(hK = (hK = hw.trys).length > 0 && hK[hK.length - 1]) && (ho[0] === 6 || ho[0] === 2)) {
                    hw = 0;
                    continue;
                  }
                  if (ho[0] === 3 && (!hK || ho[1] > hK[0] && ho[1] < hK[3])) {
                    hw.label = ho[1];
                  } else if (ho[0] === 6 && hw.label < hK[1]) {
                    hw.label = hK[1];
                    hK = ho;
                  } else {
                    if (!hK || hw.label >= hK[2]) {
                      if (hK[2]) {
                        hw.ops.pop();
                      }
                      hw.trys.pop();
                      continue;
                    }
                    hw.label = hK[2];
                    hw.ops.push(ho);
                  }
              }
              ho = hh.call(h9, hw);
            } catch (hr) {
              ho = [6, hr];
              hV = 0;
            } finally {
              hL = hK = 0;
            }
          }
          if (ho[0] & 5) {
            throw ho[1];
          }
          return {
            value: ho[0] ? ho[1] : undefined,
            done: true
          };
        };
      }
    };
    var h8 = {
      name: "eruda",
      isOpen: function () {
        var h9;
        return h6(this, undefined, undefined, function () {
          return h7(this, function (hh) {
            if (typeof eruda != "undefined") {
              return [2, ((h9 = eruda?._devTools) == null ? undefined : h9._isShow) === true];
            } else {
              return [2, false];
            }
          });
        });
      },
      isEnable: function () {
        return h6(this, undefined, undefined, function () {
          return h7(this, function (h9) {
            return [2, true];
          });
        });
      }
    };
  }, function (h3, h4, h5) {
    'use strict';

    h5.d(h4, "a", function () {
      return h6;
    });
    var h4 = h5(3);
    var h6 = /mobile/i.test(h4.b);
  }];
  h2 = {};
  h0.m = h1;
  h0.c = h2;
  h0.d = function (h3, h4, h5) {
    if (!h0.o(h3, h4)) {
      Object.defineProperty(h3, h4, {
        configurable: false,
        enumerable: true,
        get: h5
      });
    }
  };
  h0.n = function (h3) {
    var h4 = h3 && h3.__esModule ? function () {
      return h3.default;
    } : function () {
      return h3;
    };
    h0.d(h4, "a", h4);
    return h4;
  };
  h0.o = function (h3, h4) {
    return Object.prototype.hasOwnProperty.call(h3, h4);
  };
  h0.p = "";
  return h0(h0.s = 4);
  function h0(h3) {
    var h4;
    return (h2[h3] || (h4 = h2[h3] = {
      i: h3,
      l: false,
      exports: {}
    }, h1[h3].call(h4.exports, h4, h4.exports, h0), h4.l = true, h4)).exports;
  }
  var h1;
  var h2;
});
(function (h0) {
  if ((typeof exports != "object" || typeof module == "undefined") && typeof define == "function" && define.amd) {
    define(h0);
  } else {
    h0();
  }
})(function () {
  'use strict';

  function h0(hL) {
    var hV = this.constructor;
    return this.then(function (hK) {
      return hV.resolve(hL()).then(function () {
        return hK;
      });
    }, function (hK) {
      return hV.resolve(hL()).then(function () {
        return hV.reject(hK);
      });
    });
  }
  var h1 = setTimeout;
  function h2() {}
  function h3(hL) {
    if (!(this instanceof h3)) {
      throw new TypeError("Promises must be constructed via new");
    }
    if (typeof hL != "function") {
      throw new TypeError("not a function");
    }
    this._state = 0;
    this._handled = false;
    this._value = undefined;
    this._deferreds = [];
    h9(hL, this);
  }
  function h4(hL, hV) {
    while (hL._state === 3) {
      hL = hL._value;
    }
    if (hL._state === 0) {
      hL._deferreds.push(hV);
    } else {
      hL._handled = true;
      h3._immediateFn(function () {
        var hK;
        var hw = hL._state === 1 ? hV.onFulfilled : hV.onRejected;
        if (hw === null) {
          (hL._state === 1 ? h5 : h6)(hV.promise, hL._value);
        } else {
          try {
            hK = hw(hL._value);
          } catch (hX) {
            h6(hV.promise, hX);
            return;
          }
          h5(hV.promise, hK);
        }
      });
    }
  }
  function h5(hL, hV) {
    try {
      if (hV === hL) {
        throw new TypeError("A promise cannot be resolved with itself.");
      }
      if (hV && (typeof hV == "object" || typeof hV == "function")) {
        var hK = hV.then;
        if (hV instanceof h3) {
          hL._state = 3;
          hL._value = hV;
          h7(hL);
          return;
        }
        if (typeof hK == "function") {
          h9((hw = hK, hX = hV, function () {
            hw.apply(hX, arguments);
          }), hL);
          return;
        }
      }
      hL._state = 1;
      hL._value = hV;
      h7(hL);
    } catch (hg) {
      h6(hL, hg);
    }
    var hw;
    var hX;
  }
  function h6(hL, hV) {
    hL._state = 2;
    hL._value = hV;
    h7(hL);
  }
  function h7(hL) {
    if (hL._state === 2 && hL._deferreds.length === 0) {
      h3._immediateFn(function () {
        if (!hL._handled) {
          h3._unhandledRejectionFn(hL._value);
        }
      });
    }
    for (var hV = 0, hK = hL._deferreds.length; hV < hK; hV++) {
      h4(hL, hL._deferreds[hV]);
    }
    hL._deferreds = null;
  }
  function h8(hL, hV, hK) {
    this.onFulfilled = typeof hL == "function" ? hL : null;
    this.onRejected = typeof hV == "function" ? hV : null;
    this.promise = hK;
  }
  function h9(hL, hV) {
    var hK = false;
    try {
      hL(function (hw) {
        if (!hK) {
          hK = true;
          h5(hV, hw);
        }
      }, function (hw) {
        if (!hK) {
          hK = true;
          h6(hV, hw);
        }
      });
    } catch (hw) {
      if (!hK) {
        hK = true;
        h6(hV, hw);
      }
    }
  }
  h3.prototype.catch = function (hL) {
    return this.then(null, hL);
  };
  h3.prototype.then = function (hL, hV) {
    var hK = new this.constructor(h2);
    h4(this, new h8(hL, hV, hK));
    return hK;
  };
  h3.prototype.finally = h0;
  h3.all = function (hL) {
    return new h3(function (hV, hK) {
      if (!hL || hL.length === undefined) {
        throw new TypeError("Promise.all accepts an array");
      }
      var hw = Array.prototype.slice.call(hL);
      if (hw.length === 0) {
        return hV([]);
      }
      var hX = hw.length;
      for (var hg = 0; hg < hw.length; hg++) {
        (function hl(hM, ho) {
          try {
            if (ho && (typeof ho == "object" || typeof ho == "function")) {
              var hr = ho.then;
              if (typeof hr == "function") {
                hr.call(ho, function (ha) {
                  hl(hM, ha);
                }, hK);
                return;
              }
            }
            hw[hM] = ho;
            if (--hX == 0) {
              hV(hw);
            }
          } catch (ha) {
            hK(ha);
          }
        })(hg, hw[hg]);
      }
    });
  };
  h3.resolve = function (hL) {
    if (hL && typeof hL == "object" && hL.constructor === h3) {
      return hL;
    } else {
      return new h3(function (hV) {
        hV(hL);
      });
    }
  };
  h3.reject = function (hL) {
    return new h3(function (hV, hK) {
      hK(hL);
    });
  };
  h3.race = function (hL) {
    return new h3(function (hV, hK) {
      for (var hw = 0, hX = hL.length; hw < hX; hw++) {
        hL[hw].then(hV, hK);
      }
    });
  };
  h3._immediateFn = typeof setImmediate == "function" ? function (hL) {
    setImmediate(hL);
  } : function (hL) {
    h1(hL, 0);
  };
  h3._unhandledRejectionFn = function (hL) {
    if (typeof console != "undefined" && console) {
      console.warn("Possible Unhandled Promise Rejection:", hL);
    }
  };
  var hh = function () {
    if (typeof self != "undefined") {
      return self;
    }
    if (typeof window != "undefined") {
      return window;
    }
    if (typeof global != "undefined") {
      return global;
    }
    throw new Error("unable to locate global object");
  }();
  if ("Promise" in hh) {
    hh.Promise.prototype.finally ||= h0;
  } else {
    hh.Promise = h3;
  }
});
var X = new MobileDetect(window.navigator.userAgent);

(function (h0, h1) {
  if (typeof exports == "object") {
    module.exports = exports = h1();
  } else if (typeof define == "function" && define.amd) {
    define([], h1);
  } else {
    h0.CryptoJS = h1();
  }
})(this, function () {
  var h0;
  var h1;
  var h2;
  var h3;
  var h4;
  var h5;
  var h6;
  var h7;
  var h8;
  var h9;
  var hh;
  var hL;
  var hV;
  var hK;
  var hw;
  var hX;
  var hg;
  var hl;
  var hM;
  var ho;
  var hr;
  var ha;
  var hx;
  var hb;
  var hc;
  var hm;
  var hB;
  var hA;
  var hj;
  var hF;
  var hN;
  var hP;
  var hn;
  var hS;
  var hp;
  var hH;
  var hk;
  var hq;
  var hu;
  var hW;
  var hy;
  var hZ;
  var hG;
  var hE;
  var hz = function (Vw) {
    var VX;
    if (typeof window != "undefined" && window.crypto) {
      VX = window.crypto;
    }
    if (typeof self != "undefined" && self.crypto) {
      VX = self.crypto;
    }
    if (!(VX = !(VX = !(VX = typeof globalThis != "undefined" && globalThis.crypto ? globalThis.crypto : VX) && typeof window != "undefined" && window.msCrypto ? window.msCrypto : VX) && typeof global != "undefined" && global.crypto ? global.crypto : VX) && typeof require == "function") {
      try {
        VX = require("crypto");
      } catch (Vj) {}
    }
    var Vg = Object.create || function (VF) {
      Vl.prototype = VF;
      VF = new Vl();
      Vl.prototype = null;
      return VF;
    };
    function Vl() {}
    var VM = {};
    var Vo = VM.lib = {};
    var Vr = Vo.Base = {
      extend: function (VF) {
        var VN = Vg(this);
        if (VF) {
          VN.mixIn(VF);
        }
        if (!VN.hasOwnProperty("init") || this.init === VN.init) {
          VN.init = function () {
            VN.$super.init.apply(this, arguments);
          };
        }
        (VN.init.prototype = VN).$super = this;
        return VN;
      },
      create: function () {
        var VF = this.extend();
        VF.init.apply(VF, arguments);
        return VF;
      },
      init: function () {},
      mixIn: function (VF) {
        for (var VN in VF) {
          if (VF.hasOwnProperty(VN)) {
            this[VN] = VF[VN];
          }
        }
        if (VF.hasOwnProperty("toString")) {
          this.toString = VF.toString;
        }
      },
      clone: function () {
        return this.init.prototype.extend(this);
      }
    };
    var Va = Vo.WordArray = Vr.extend({
      init: function (VF, VN) {
        VF = this.words = VF || [];
        this.sigBytes = VN ?? VF.length * 4;
      },
      toString: function (VF) {
        return (VF || Vb).stringify(this);
      },
      concat: function (VF) {
        var VN = this.words;
        var VP = VF.words;
        var Vn = this.sigBytes;
        var VS = VF.sigBytes;
        this.clamp();
        if (Vn % 4) {
          for (var Vp = 0; Vp < VS; Vp++) {
            var VH = VP[Vp >>> 2] >>> 24 - Vp % 4 * 8 & 255;
            VN[Vn + Vp >>> 2] |= VH << 24 - (Vn + Vp) % 4 * 8;
          }
        } else {
          for (var Vk = 0; Vk < VS; Vk += 4) {
            VN[Vn + Vk >>> 2] = VP[Vk >>> 2];
          }
        }
        this.sigBytes += VS;
        return this;
      },
      clamp: function () {
        var VF = this.words;
        var VN = this.sigBytes;
        VF[VN >>> 2] &= 4294967295 << 32 - VN % 4 * 8;
        VF.length = Vw.ceil(VN / 4);
      },
      clone: function () {
        var VF = Vr.clone.call(this);
        VF.words = this.words.slice(0);
        return VF;
      },
      random: function (VF) {
        var VN = [];
        for (var VP = 0; VP < VF; VP += 4) {
          VN.push(function () {
            if (VX) {
              if (typeof VX.getRandomValues == "function") {
                try {
                  return VX.getRandomValues(new Uint32Array(1))[0];
                } catch (Vn) {}
              }
              if (typeof VX.randomBytes == "function") {
                try {
                  return VX.randomBytes(4).readInt32LE();
                } catch (VS) {}
              }
            }
            throw new Error("Native crypto module could not be used to get secure random number.");
          }());
        }
        return new Va.init(VN, VF);
      }
    });
    var Vx = VM.enc = {};
    var Vb = Vx.Hex = {
      stringify: function (VF) {
        var VN = VF.words;
        for (var VP = VF.sigBytes, Vn = [], VS = 0; VS < VP; VS++) {
          var Vp = VN[VS >>> 2] >>> 24 - VS % 4 * 8 & 255;
          Vn.push((Vp >>> 4).toString(16));
          Vn.push((Vp & 15).toString(16));
        }
        return Vn.join("");
      },
      parse: function (VF) {
        for (var VN = VF.length, VP = [], Vn = 0; Vn < VN; Vn += 2) {
          VP[Vn >>> 3] |= parseInt(VF.substr(Vn, 2), 16) << 24 - Vn % 8 * 4;
        }
        return new Va.init(VP, VN / 2);
      }
    };
    var Vc = Vx.Latin1 = {
      stringify: function (VF) {
        var VN = VF.words;
        for (var VP = VF.sigBytes, Vn = [], VS = 0; VS < VP; VS++) {
          var Vp = VN[VS >>> 2] >>> 24 - VS % 4 * 8 & 255;
          Vn.push(String.fromCharCode(Vp));
        }
        return Vn.join("");
      },
      parse: function (VF) {
        for (var VN = VF.length, VP = [], Vn = 0; Vn < VN; Vn++) {
          VP[Vn >>> 2] |= (VF.charCodeAt(Vn) & 255) << 24 - Vn % 4 * 8;
        }
        return new Va.init(VP, VN);
      }
    };
    var Vm = Vx.Utf8 = {
      stringify: function (VF) {
        try {
          return decodeURIComponent(escape(Vc.stringify(VF)));
        } catch (VN) {
          throw new Error("Malformed UTF-8 data");
        }
      },
      parse: function (VF) {
        return Vc.parse(unescape(encodeURIComponent(VF)));
      }
    };
    var VB = Vo.BufferedBlockAlgorithm = Vr.extend({
      reset: function () {
        this._data = new Va.init();
        this._nDataBytes = 0;
      },
      _append: function (VF) {
        if (typeof VF == "string") {
          VF = Vm.parse(VF);
        }
        this._data.concat(VF);
        this._nDataBytes += VF.sigBytes;
      },
      _process: function (VF) {
        var VN;
        var VP = this._data;
        var Vn = VP.words;
        var VS = VP.sigBytes;
        var Vp = this.blockSize;
        var VH = VS / (Vp * 4);
        var Vk = (VH = VF ? Vw.ceil(VH) : Vw.max((VH | 0) - this._minBufferSize, 0)) * Vp;
        var VF = Vw.min(Vk * 4, VS);
        if (Vk) {
          for (var Vt = 0; Vt < Vk; Vt += Vp) {
            this._doProcessBlock(Vn, Vt);
          }
          VN = Vn.splice(0, Vk);
          VP.sigBytes -= VF;
        }
        return new Va.init(VN, VF);
      },
      clone: function () {
        var VF = Vr.clone.call(this);
        VF._data = this._data.clone();
        return VF;
      },
      _minBufferSize: 0
    });
    Vo.Hasher = VB.extend({
      cfg: Vr.extend(),
      init: function (VF) {
        this.cfg = this.cfg.extend(VF);
        this.reset();
      },
      reset: function () {
        VB.reset.call(this);
        this._doReset();
      },
      update: function (VF) {
        this._append(VF);
        this._process();
        return this;
      },
      finalize: function (VF) {
        if (VF) {
          this._append(VF);
        }
        return this._doFinalize();
      },
      blockSize: 16,
      _createHelper: function (VF) {
        return function (VN, VP) {
          return new VF.init(VP).finalize(VN);
        };
      },
      _createHmacHelper: function (VF) {
        return function (VN, VP) {
          return new VA.HMAC.init(VF, VP).finalize(VN);
        };
      }
    });
    var VA = VM.algo = {};
    return VM;
  }(Math);
  hv = (hI = hz).lib;
  h0 = hv.Base;
  h1 = hv.WordArray;
  (hv = hI.x64 = {}).Word = h0.extend({
    init: function (Vw, VX) {
      this.high = Vw;
      this.low = VX;
    }
  });
  hv.WordArray = h0.extend({
    init: function (Vw, VX) {
      Vw = this.words = Vw || [];
      this.sigBytes = VX ?? Vw.length * 8;
    },
    toX32: function () {
      var Vw = this.words;
      for (var VX = Vw.length, Vg = [], Vl = 0; Vl < VX; Vl++) {
        var VM = Vw[Vl];
        Vg.push(VM.high);
        Vg.push(VM.low);
      }
      return h1.create(Vg, this.sigBytes);
    },
    clone: function () {
      var Vw = h0.clone.call(this);
      var VX = Vw.words = this.words.slice(0);
      for (var Vg = VX.length, Vl = 0; Vl < Vg; Vl++) {
        VX[Vl] = VX[Vl].clone();
      }
      return Vw;
    }
  });
  if (typeof ArrayBuffer == "function") {
    hI = hz.lib.WordArray;
    h2 = hI.init;
    (hI.init = function (Vw) {
      if ((Vw = (Vw = Vw instanceof ArrayBuffer ? new Uint8Array(Vw) : Vw) instanceof Int8Array || typeof Uint8ClampedArray != "undefined" && Vw instanceof Uint8ClampedArray || Vw instanceof Int16Array || Vw instanceof Uint16Array || Vw instanceof Int32Array || Vw instanceof Uint32Array || Vw instanceof Float32Array || Vw instanceof Float64Array ? new Uint8Array(Vw.buffer, Vw.byteOffset, Vw.byteLength) : Vw) instanceof Uint8Array) {
        for (var VX = Vw.byteLength, Vg = [], Vl = 0; Vl < VX; Vl++) {
          Vg[Vl >>> 2] |= Vw[Vl] << 24 - Vl % 4 * 8;
        }
        h2.call(this, Vg, VX);
      } else {
        h2.apply(this, arguments);
      }
    }).prototype = hI;
  }
  var hv = hz;
  var hi = hv.lib.WordArray;
  function hT(Vw) {
    return Vw << 8 & 4278255360 | Vw >>> 8 & 16711935;
  }
  (hv = hv.enc).Utf16 = hv.Utf16BE = {
    stringify: function (Vw) {
      var VX = Vw.words;
      for (var Vg = Vw.sigBytes, Vl = [], VM = 0; VM < Vg; VM += 2) {
        var Vo = VX[VM >>> 2] >>> 16 - VM % 4 * 8 & 65535;
        Vl.push(String.fromCharCode(Vo));
      }
      return Vl.join("");
    },
    parse: function (Vw) {
      for (var VX = Vw.length, Vg = [], Vl = 0; Vl < VX; Vl++) {
        Vg[Vl >>> 1] |= Vw.charCodeAt(Vl) << 16 - Vl % 2 * 16;
      }
      return hi.create(Vg, VX * 2);
    }
  };
  hv.Utf16LE = {
    stringify: function (Vw) {
      var VX = Vw.words;
      for (var Vg = Vw.sigBytes, Vl = [], VM = 0; VM < Vg; VM += 2) {
        var Vo = hT(VX[VM >>> 2] >>> 16 - VM % 4 * 8 & 65535);
        Vl.push(String.fromCharCode(Vo));
      }
      return Vl.join("");
    },
    parse: function (Vw) {
      for (var VX = Vw.length, Vg = [], Vl = 0; Vl < VX; Vl++) {
        Vg[Vl >>> 1] |= hT(Vw.charCodeAt(Vl) << 16 - Vl % 2 * 16);
      }
      return hi.create(Vg, VX * 2);
    }
  };
  h3 = (hI = hz).lib.WordArray;
  hI.enc.Base64 = {
    stringify: function (Vw) {
      var VX = Vw.words;
      for (var Vg = Vw.sigBytes, Vl = this._map, VM = (Vw.clamp(), []), Vo = 0; Vo < Vg; Vo += 3) {
        var Vr = (VX[Vo >>> 2] >>> 24 - Vo % 4 * 8 & 255) << 16 | (VX[Vo + 1 >>> 2] >>> 24 - (Vo + 1) % 4 * 8 & 255) << 8 | VX[Vo + 2 >>> 2] >>> 24 - (Vo + 2) % 4 * 8 & 255;
        for (var Va = 0; Va < 4 && Vo + Va * 0.75 < Vg; Va++) {
          VM.push(Vl.charAt(Vr >>> (3 - Va) * 6 & 63));
        }
      }
      var Vx = Vl.charAt(64);
      if (Vx) {
        while (VM.length % 4) {
          VM.push(Vx);
        }
      }
      return VM.join("");
    },
    parse: function (Vw) {
      var VX = Vw.length;
      var Vg = this._map;
      if (!(Vl = this._reverseMap)) {
        var Vl = this._reverseMap = [];
        for (var VM = 0; VM < Vg.length; VM++) {
          Vl[Vg.charCodeAt(VM)] = VM;
        }
      }
      var Vo;
      var Vr;
      var Va = Vg.charAt(64);
      if (Va && (Va = Vw.indexOf(Va)) !== -1) {
        VX = Va;
      }
      var Vx = Vw;
      for (var Vb = VX, Vc = Vl, Vm = [], VB = 0, VA = 0; VA < Vb; VA++) {
        if (VA % 4) {
          Vo = Vc[Vx.charCodeAt(VA - 1)] << VA % 4 * 2;
          Vr = Vc[Vx.charCodeAt(VA)] >>> 6 - VA % 4 * 2;
          Vm[VB >>> 2] |= (Vo | Vr) << 24 - VB % 4 * 8;
          VB++;
        }
      }
      return h3.create(Vm, VB);
    },
    _map: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="
  };
  h4 = (hv = hz).lib.WordArray;
  hv.enc.Base64url = {
    stringify: function (Vw, VX = true) {
      var Vg = Vw.words;
      for (var Vl = Vw.sigBytes, VM = VX ? this._safe_map : this._map, Vo = (Vw.clamp(), []), Vr = 0; Vr < Vl; Vr += 3) {
        var Va = (Vg[Vr >>> 2] >>> 24 - Vr % 4 * 8 & 255) << 16 | (Vg[Vr + 1 >>> 2] >>> 24 - (Vr + 1) % 4 * 8 & 255) << 8 | Vg[Vr + 2 >>> 2] >>> 24 - (Vr + 2) % 4 * 8 & 255;
        for (var Vx = 0; Vx < 4 && Vr + Vx * 0.75 < Vl; Vx++) {
          Vo.push(VM.charAt(Va >>> (3 - Vx) * 6 & 63));
        }
      }
      var Vb = VM.charAt(64);
      if (Vb) {
        while (Vo.length % 4) {
          Vo.push(Vb);
        }
      }
      return Vo.join("");
    },
    parse: function (Vw, VX = true) {
      var Vg = Vw.length;
      var Vl = VX ? this._safe_map : this._map;
      if (!(VM = this._reverseMap)) {
        var VM = this._reverseMap = [];
        for (var Vo = 0; Vo < Vl.length; Vo++) {
          VM[Vl.charCodeAt(Vo)] = Vo;
        }
      }
      var Vr;
      var Va;
      var VX = Vl.charAt(64);
      if (VX && (VX = Vw.indexOf(VX)) !== -1) {
        Vg = VX;
      }
      var Vx = Vw;
      for (var Vb = Vg, Vc = VM, Vm = [], VB = 0, VA = 0; VA < Vb; VA++) {
        if (VA % 4) {
          Vr = Vc[Vx.charCodeAt(VA - 1)] << VA % 4 * 2;
          Va = Vc[Vx.charCodeAt(VA)] >>> 6 - VA % 4 * 2;
          Vm[VB >>> 2] |= (Vr | Va) << 24 - VB % 4 * 8;
          VB++;
        }
      }
      return h4.create(Vm, VB);
    },
    _map: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
    _safe_map: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_"
  };
  var hQ = Math;
  var hI = hz;
  var hO = (hv = hI.lib).WordArray;
  var hs = hv.Hasher;
  var hv = hI.algo;
  var hY = [];
  for (var hf = 0; hf < 64; hf++) {
    hY[hf] = hQ.abs(hQ.sin(hf + 1)) * 4294967296 | 0;
  }
  function hC(Vw, VX, Vg, Vl, VM, Vo, Vr) {
    Vw = Vw + (VX & Vg | ~VX & Vl) + VM + Vr;
    return (Vw << Vo | Vw >>> 32 - Vo) + VX;
  }
  function hU(Vw, VX, Vg, Vl, VM, Vo, Vr) {
    Vw = Vw + (VX & Vl | Vg & ~Vl) + VM + Vr;
    return (Vw << Vo | Vw >>> 32 - Vo) + VX;
  }
  function hR(Vw, VX, Vg, Vl, VM, Vo, Vr) {
    Vw = Vw + (VX ^ Vg ^ Vl) + VM + Vr;
    return (Vw << Vo | Vw >>> 32 - Vo) + VX;
  }
  function hJ(Vw, VX, Vg, Vl, VM, Vo, Vr) {
    Vw = Vw + (Vg ^ (VX | ~Vl)) + VM + Vr;
    return (Vw << Vo | Vw >>> 32 - Vo) + VX;
  }
  hv = hv.MD5 = hs.extend({
    _doReset: function () {
      this._hash = new hO.init([1732584193, 4023233417, 2562383102, 271733878]);
    },
    _doProcessBlock: function (Vw, VX) {
      for (var Vg = 0; Vg < 16; Vg++) {
        var Vl = VX + Vg;
        var VM = Vw[Vl];
        Vw[Vl] = (VM << 8 | VM >>> 24) & 16711935 | (VM << 24 | VM >>> 8) & 4278255360;
      }
      var Vo = this._hash.words;
      var Vr = Vw[VX + 0];
      var Va = Vw[VX + 1];
      var Vx = Vw[VX + 2];
      var Vb = Vw[VX + 3];
      var Vc = Vw[VX + 4];
      var Vm = Vw[VX + 5];
      var VB = Vw[VX + 6];
      var VA = Vw[VX + 7];
      var Vj = Vw[VX + 8];
      var VF = Vw[VX + 9];
      var VN = Vw[VX + 10];
      var VP = Vw[VX + 11];
      var Vn = Vw[VX + 12];
      var VS = Vw[VX + 13];
      var Vp = Vw[VX + 14];
      var VH = Vw[VX + 15];
      var Vk = hC(Vo[0], Vu = Vo[1], Vq = Vo[2], Vt = Vo[3], Vr, 7, hY[0]);
      var Vt = hC(Vt, Vk, Vu, Vq, Va, 12, hY[1]);
      var Vq = hC(Vq, Vt, Vk, Vu, Vx, 17, hY[2]);
      var Vu = hC(Vu, Vq, Vt, Vk, Vb, 22, hY[3]);
      Vk = hC(Vk, Vu, Vq, Vt, Vc, 7, hY[4]);
      Vt = hC(Vt, Vk, Vu, Vq, Vm, 12, hY[5]);
      Vq = hC(Vq, Vt, Vk, Vu, VB, 17, hY[6]);
      Vu = hC(Vu, Vq, Vt, Vk, VA, 22, hY[7]);
      Vk = hC(Vk, Vu, Vq, Vt, Vj, 7, hY[8]);
      Vt = hC(Vt, Vk, Vu, Vq, VF, 12, hY[9]);
      Vq = hC(Vq, Vt, Vk, Vu, VN, 17, hY[10]);
      Vu = hC(Vu, Vq, Vt, Vk, VP, 22, hY[11]);
      Vk = hC(Vk, Vu, Vq, Vt, Vn, 7, hY[12]);
      Vt = hC(Vt, Vk, Vu, Vq, VS, 12, hY[13]);
      Vq = hC(Vq, Vt, Vk, Vu, Vp, 17, hY[14]);
      Vk = hU(Vk, Vu = hC(Vu, Vq, Vt, Vk, VH, 22, hY[15]), Vq, Vt, Va, 5, hY[16]);
      Vt = hU(Vt, Vk, Vu, Vq, VB, 9, hY[17]);
      Vq = hU(Vq, Vt, Vk, Vu, VP, 14, hY[18]);
      Vu = hU(Vu, Vq, Vt, Vk, Vr, 20, hY[19]);
      Vk = hU(Vk, Vu, Vq, Vt, Vm, 5, hY[20]);
      Vt = hU(Vt, Vk, Vu, Vq, VN, 9, hY[21]);
      Vq = hU(Vq, Vt, Vk, Vu, VH, 14, hY[22]);
      Vu = hU(Vu, Vq, Vt, Vk, Vc, 20, hY[23]);
      Vk = hU(Vk, Vu, Vq, Vt, VF, 5, hY[24]);
      Vt = hU(Vt, Vk, Vu, Vq, Vp, 9, hY[25]);
      Vq = hU(Vq, Vt, Vk, Vu, Vb, 14, hY[26]);
      Vu = hU(Vu, Vq, Vt, Vk, Vj, 20, hY[27]);
      Vk = hU(Vk, Vu, Vq, Vt, VS, 5, hY[28]);
      Vt = hU(Vt, Vk, Vu, Vq, Vx, 9, hY[29]);
      Vq = hU(Vq, Vt, Vk, Vu, VA, 14, hY[30]);
      Vk = hR(Vk, Vu = hU(Vu, Vq, Vt, Vk, Vn, 20, hY[31]), Vq, Vt, Vm, 4, hY[32]);
      Vt = hR(Vt, Vk, Vu, Vq, Vj, 11, hY[33]);
      Vq = hR(Vq, Vt, Vk, Vu, VP, 16, hY[34]);
      Vu = hR(Vu, Vq, Vt, Vk, Vp, 23, hY[35]);
      Vk = hR(Vk, Vu, Vq, Vt, Va, 4, hY[36]);
      Vt = hR(Vt, Vk, Vu, Vq, Vc, 11, hY[37]);
      Vq = hR(Vq, Vt, Vk, Vu, VA, 16, hY[38]);
      Vu = hR(Vu, Vq, Vt, Vk, VN, 23, hY[39]);
      Vk = hR(Vk, Vu, Vq, Vt, VS, 4, hY[40]);
      Vt = hR(Vt, Vk, Vu, Vq, Vr, 11, hY[41]);
      Vq = hR(Vq, Vt, Vk, Vu, Vb, 16, hY[42]);
      Vu = hR(Vu, Vq, Vt, Vk, VB, 23, hY[43]);
      Vk = hR(Vk, Vu, Vq, Vt, VF, 4, hY[44]);
      Vt = hR(Vt, Vk, Vu, Vq, Vn, 11, hY[45]);
      Vq = hR(Vq, Vt, Vk, Vu, VH, 16, hY[46]);
      Vk = hJ(Vk, Vu = hR(Vu, Vq, Vt, Vk, Vx, 23, hY[47]), Vq, Vt, Vr, 6, hY[48]);
      Vt = hJ(Vt, Vk, Vu, Vq, VA, 10, hY[49]);
      Vq = hJ(Vq, Vt, Vk, Vu, Vp, 15, hY[50]);
      Vu = hJ(Vu, Vq, Vt, Vk, Vm, 21, hY[51]);
      Vk = hJ(Vk, Vu, Vq, Vt, Vn, 6, hY[52]);
      Vt = hJ(Vt, Vk, Vu, Vq, Vb, 10, hY[53]);
      Vq = hJ(Vq, Vt, Vk, Vu, VN, 15, hY[54]);
      Vu = hJ(Vu, Vq, Vt, Vk, Va, 21, hY[55]);
      Vk = hJ(Vk, Vu, Vq, Vt, Vj, 6, hY[56]);
      Vt = hJ(Vt, Vk, Vu, Vq, VH, 10, hY[57]);
      Vq = hJ(Vq, Vt, Vk, Vu, VB, 15, hY[58]);
      Vu = hJ(Vu, Vq, Vt, Vk, VS, 21, hY[59]);
      Vk = hJ(Vk, Vu, Vq, Vt, Vc, 6, hY[60]);
      Vt = hJ(Vt, Vk, Vu, Vq, VP, 10, hY[61]);
      Vq = hJ(Vq, Vt, Vk, Vu, Vx, 15, hY[62]);
      Vu = hJ(Vu, Vq, Vt, Vk, VF, 21, hY[63]);
      Vo[0] = Vo[0] + Vk | 0;
      Vo[1] = Vo[1] + Vu | 0;
      Vo[2] = Vo[2] + Vq | 0;
      Vo[3] = Vo[3] + Vt | 0;
    },
    _doFinalize: function () {
      var Vw = this._data;
      var VX = Vw.words;
      var Vg = this._nDataBytes * 8;
      var Vl = Vw.sigBytes * 8;
      VX[Vl >>> 5] |= 128 << 24 - Vl % 32;
      var VM = hQ.floor(Vg / 4294967296);
      VX[15 + (64 + Vl >>> 9 << 4)] = (VM << 8 | VM >>> 24) & 16711935 | (VM << 24 | VM >>> 8) & 4278255360;
      VX[14 + (64 + Vl >>> 9 << 4)] = (Vg << 8 | Vg >>> 24) & 16711935 | (Vg << 24 | Vg >>> 8) & 4278255360;
      Vw.sigBytes = (VX.length + 1) * 4;
      this._process();
      var VM = this._hash;
      var Vo = VM.words;
      for (var Vr = 0; Vr < 4; Vr++) {
        var Va = Vo[Vr];
        Vo[Vr] = (Va << 8 | Va >>> 24) & 16711935 | (Va << 24 | Va >>> 8) & 4278255360;
      }
      return VM;
    },
    clone: function () {
      var Vw = hs.clone.call(this);
      Vw._hash = this._hash.clone();
      return Vw;
    }
  });
  hI.MD5 = hs._createHelper(hv);
  hI.HmacMD5 = hs._createHmacHelper(hv);
  hv = (hI = hz).lib;
  h5 = hv.WordArray;
  h6 = hv.Hasher;
  hv = hI.algo;
  h7 = [];
  hv = hv.SHA1 = h6.extend({
    _doReset: function () {
      this._hash = new h5.init([1732584193, 4023233417, 2562383102, 271733878, 3285377520]);
    },
    _doProcessBlock: function (Vw, VX) {
      var Vg = this._hash.words;
      var Vl = Vg[0];
      var VM = Vg[1];
      var Vo = Vg[2];
      var Vr = Vg[3];
      var Va = Vg[4];
      for (var Vx = 0; Vx < 80; Vx++) {
        h7[Vx] = Vx < 16 ? Vw[VX + Vx] | 0 : (Vb = h7[Vx - 3] ^ h7[Vx - 8] ^ h7[Vx - 14] ^ h7[Vx - 16]) << 1 | Vb >>> 31;
        var Vb = (Vl << 5 | Vl >>> 27) + Va + h7[Vx];
        Vb += Vx < 20 ? 1518500249 + (VM & Vo | ~VM & Vr) : Vx < 40 ? 1859775393 + (VM ^ Vo ^ Vr) : Vx < 60 ? (VM & Vo | VM & Vr | Vo & Vr) - 1894007588 : (VM ^ Vo ^ Vr) - 899497514;
        Va = Vr;
        Vr = Vo;
        Vo = VM << 30 | VM >>> 2;
        VM = Vl;
        Vl = Vb;
      }
      Vg[0] = Vg[0] + Vl | 0;
      Vg[1] = Vg[1] + VM | 0;
      Vg[2] = Vg[2] + Vo | 0;
      Vg[3] = Vg[3] + Vr | 0;
      Vg[4] = Vg[4] + Va | 0;
    },
    _doFinalize: function () {
      var Vw = this._data;
      var VX = Vw.words;
      var Vg = this._nDataBytes * 8;
      var Vl = Vw.sigBytes * 8;
      VX[Vl >>> 5] |= 128 << 24 - Vl % 32;
      VX[14 + (64 + Vl >>> 9 << 4)] = Math.floor(Vg / 4294967296);
      VX[15 + (64 + Vl >>> 9 << 4)] = Vg;
      Vw.sigBytes = VX.length * 4;
      this._process();
      return this._hash;
    },
    clone: function () {
      var Vw = h6.clone.call(this);
      Vw._hash = this._hash.clone();
      return Vw;
    }
  });
  hI.SHA1 = h6._createHelper(hv);
  hI.HmacSHA1 = h6._createHmacHelper(hv);
  var hD = Math;
  var hI = hz;
  var hd = (hv = hI.lib).WordArray;
  var L0 = hv.Hasher;
  var hv = hI.algo;
  var L1 = [];
  var L2 = [];
  function L3(Vw) {
    return (Vw - (Vw | 0)) * 4294967296 | 0;
  }
  var L4 = 2;
  for (var L5 = 0; L5 < 64;) {
    if (!!function (Vw) {
      for (var VX = hD.sqrt(Vw), Vg = 2; Vg <= VX; Vg++) {
        if (!(Vw % Vg)) {
          return;
        }
      }
      return 1;
    }(L4)) {
      if (L5 < 8) {
        L1[L5] = L3(hD.pow(L4, 0.5));
      }
      L2[L5] = L3(hD.pow(L4, 1 / 3));
      L5++;
    }
    L4++;
  }
  var L6 = [];
  var hv = hv.SHA256 = L0.extend({
    _doReset: function () {
      this._hash = new hd.init(L1.slice(0));
    },
    _doProcessBlock: function (Vw, VX) {
      var Vg = this._hash.words;
      var Vl = Vg[0];
      var VM = Vg[1];
      var Vo = Vg[2];
      var Vr = Vg[3];
      var Va = Vg[4];
      var Vx = Vg[5];
      var Vb = Vg[6];
      var Vc = Vg[7];
      for (var Vm = 0; Vm < 64; Vm++) {
        L6[Vm] = Vm < 16 ? Vw[VX + Vm] | 0 : (((VB = L6[Vm - 15]) << 25 | VB >>> 7) ^ (VB << 14 | VB >>> 18) ^ VB >>> 3) + L6[Vm - 7] + (((VB = L6[Vm - 2]) << 15 | VB >>> 17) ^ (VB << 13 | VB >>> 19) ^ VB >>> 10) + L6[Vm - 16];
        var VB = Vl & VM ^ Vl & Vo ^ VM & Vo;
        var VA = Vc + ((Va << 26 | Va >>> 6) ^ (Va << 21 | Va >>> 11) ^ (Va << 7 | Va >>> 25)) + (Va & Vx ^ ~Va & Vb) + L2[Vm] + L6[Vm];
        var Vc = Vb;
        var Vb = Vx;
        var Vx = Va;
        var Va = Vr + VA | 0;
        var Vr = Vo;
        var Vo = VM;
        var VM = Vl;
        var Vl = VA + (((Vl << 30 | Vl >>> 2) ^ (Vl << 19 | Vl >>> 13) ^ (Vl << 10 | Vl >>> 22)) + VB) | 0;
      }
      Vg[0] = Vg[0] + Vl | 0;
      Vg[1] = Vg[1] + VM | 0;
      Vg[2] = Vg[2] + Vo | 0;
      Vg[3] = Vg[3] + Vr | 0;
      Vg[4] = Vg[4] + Va | 0;
      Vg[5] = Vg[5] + Vx | 0;
      Vg[6] = Vg[6] + Vb | 0;
      Vg[7] = Vg[7] + Vc | 0;
    },
    _doFinalize: function () {
      var Vw = this._data;
      var VX = Vw.words;
      var Vg = this._nDataBytes * 8;
      var Vl = Vw.sigBytes * 8;
      VX[Vl >>> 5] |= 128 << 24 - Vl % 32;
      VX[14 + (64 + Vl >>> 9 << 4)] = hD.floor(Vg / 4294967296);
      VX[15 + (64 + Vl >>> 9 << 4)] = Vg;
      Vw.sigBytes = VX.length * 4;
      this._process();
      return this._hash;
    },
    clone: function () {
      var Vw = L0.clone.call(this);
      Vw._hash = this._hash.clone();
      return Vw;
    }
  });
  hI.SHA256 = L0._createHelper(hv);
  hI.HmacSHA256 = L0._createHmacHelper(hv);
  h8 = (hI = hz).lib.WordArray;
  hv = hI.algo;
  h9 = hv.SHA256;
  hv = hv.SHA224 = h9.extend({
    _doReset: function () {
      this._hash = new h8.init([3238371032, 914150663, 812702999, 4144912697, 4290775857, 1750603025, 1694076839, 3204075428]);
    },
    _doFinalize: function () {
      var Vw = h9._doFinalize.call(this);
      Vw.sigBytes -= 4;
      return Vw;
    }
  });
  hI.SHA224 = h9._createHelper(hv);
  hI.HmacSHA224 = h9._createHmacHelper(hv);
  var hI = hz;
  var L7 = hI.lib.Hasher;
  var L8 = (hv = hI.x64).Word;
  var L9 = hv.WordArray;
  var hv = hI.algo;
  function Lh() {
    return L8.create.apply(L8, arguments);
  }
  var LL = [Lh(1116352408, 3609767458), Lh(1899447441, 602891725), Lh(3049323471, 3964484399), Lh(3921009573, 2173295548), Lh(961987163, 4081628472), Lh(1508970993, 3053834265), Lh(2453635748, 2937671579), Lh(2870763221, 3664609560), Lh(3624381080, 2734883394), Lh(310598401, 1164996542), Lh(607225278, 1323610764), Lh(1426881987, 3590304994), Lh(1925078388, 4068182383), Lh(2162078206, 991336113), Lh(2614888103, 633803317), Lh(3248222580, 3479774868), Lh(3835390401, 2666613458), Lh(4022224774, 944711139), Lh(264347078, 2341262773), Lh(604807628, 2007800933), Lh(770255983, 1495990901), Lh(1249150122, 1856431235), Lh(1555081692, 3175218132), Lh(1996064986, 2198950837), Lh(2554220882, 3999719339), Lh(2821834349, 766784016), Lh(2952996808, 2566594879), Lh(3210313671, 3203337956), Lh(3336571891, 1034457026), Lh(3584528711, 2466948901), Lh(113926993, 3758326383), Lh(338241895, 168717936), Lh(666307205, 1188179964), Lh(773529912, 1546045734), Lh(1294757372, 1522805485), Lh(1396182291, 2643833823), Lh(1695183700, 2343527390), Lh(1986661051, 1014477480), Lh(2177026350, 1206759142), Lh(2456956037, 344077627), Lh(2730485921, 1290863460), Lh(2820302411, 3158454273), Lh(3259730800, 3505952657), Lh(3345764771, 106217008), Lh(3516065817, 3606008344), Lh(3600352804, 1432725776), Lh(4094571909, 1467031594), Lh(275423344, 851169720), Lh(430227734, 3100823752), Lh(506948616, 1363258195), Lh(659060556, 3750685593), Lh(883997877, 3785050280), Lh(958139571, 3318307427), Lh(1322822218, 3812723403), Lh(1537002063, 2003034995), Lh(1747873779, 3602036899), Lh(1955562222, 1575990012), Lh(2024104815, 1125592928), Lh(2227730452, 2716904306), Lh(2361852424, 442776044), Lh(2428436474, 593698344), Lh(2756734187, 3733110249), Lh(3204031479, 2999351573), Lh(3329325298, 3815920427), Lh(3391569614, 3928383900), Lh(3515267271, 566280711), Lh(3940187606, 3454069534), Lh(4118630271, 4000239992), Lh(116418474, 1914138554), Lh(174292421, 2731055270), Lh(289380356, 3203993006), Lh(460393269, 320620315), Lh(685471733, 587496836), Lh(852142971, 1086792851), Lh(1017036298, 365543100), Lh(1126000580, 2618297676), Lh(1288033470, 3409855158), Lh(1501505948, 4234509866), Lh(1607167915, 987167468), Lh(1816402316, 1246189591)];
  var LV = [];
  for (var LK = 0; LK < 80; LK++) {
    LV[LK] = Lh();
  }
  hv = hv.SHA512 = L7.extend({
    _doReset: function () {
      this._hash = new L9.init([new L8.init(1779033703, 4089235720), new L8.init(3144134277, 2227873595), new L8.init(1013904242, 4271175723), new L8.init(2773480762, 1595750129), new L8.init(1359893119, 2917565137), new L8.init(2600822924, 725511199), new L8.init(528734635, 4215389547), new L8.init(1541459225, 327033209)]);
    },
    _doProcessBlock: function (Vw, VX) {
      var Vg = this._hash.words;
      var Vl = Vg[0];
      var VM = Vg[1];
      var Vo = Vg[2];
      var Vr = Vg[3];
      var Va = Vg[4];
      var Vx = Vg[5];
      var Vb = Vg[6];
      var Vg = Vg[7];
      var Vc = Vl.high;
      var Vm = Vl.low;
      var VB = VM.high;
      var VA = VM.low;
      var Vj = Vo.high;
      var VF = Vo.low;
      var VN = Vr.high;
      var VP = Vr.low;
      var Vn = Va.high;
      var VS = Va.low;
      var Vp = Vx.high;
      var VH = Vx.low;
      var Vk = Vb.high;
      var Vt = Vb.low;
      var Vq = Vg.high;
      var Vu = Vg.low;
      var VW = Vc;
      var Vy = Vm;
      var VZ = VB;
      var VG = VA;
      var VE = Vj;
      var Vz = VF;
      var Vv = VN;
      var Vi = VP;
      var VT = Vn;
      var VQ = VS;
      var VI = Vp;
      var VO = VH;
      var Vs = Vk;
      var VY = Vt;
      var Vf = Vq;
      var VC = Vu;
      for (var VU = 0; VU < 80; VU++) {
        var VR;
        var VJ;
        var VD = LV[VU];
        if (VU < 16) {
          VJ = VD.high = Vw[VX + VU * 2] | 0;
          VR = VD.low = Vw[VX + VU * 2 + 1] | 0;
        } else {
          K6 = (K3 = LV[VU - 15]).high;
          K3 = K3.low;
          K2 = (K1 = LV[VU - 2]).high;
          K1 = K1.low;
          K0 = (Vd = LV[VU - 7]).high;
          Vd = Vd.low;
          K5 = (K4 = LV[VU - 16]).high;
          VJ = (VJ = ((K6 >>> 1 | K3 << 31) ^ (K6 >>> 8 | K3 << 24) ^ K6 >>> 7) + K0 + ((VR = (K0 = (K3 >>> 1 | K6 << 31) ^ (K3 >>> 8 | K6 << 24) ^ (K3 >>> 7 | K6 << 25)) + Vd) >>> 0 < K0 >>> 0 ? 1 : 0)) + ((K2 >>> 19 | K1 << 13) ^ (K2 << 3 | K1 >>> 29) ^ K2 >>> 6) + ((VR += K3 = (K1 >>> 19 | K2 << 13) ^ (K1 << 3 | K2 >>> 29) ^ (K1 >>> 6 | K2 << 26)) >>> 0 < K3 >>> 0 ? 1 : 0);
          VR += K6 = K4.low;
          VD.high = VJ = VJ + K5 + (VR >>> 0 < K6 >>> 0 ? 1 : 0);
          VD.low = VR;
        }
        var Vd = VT & VI ^ ~VT & Vs;
        var K0 = VQ & VO ^ ~VQ & VY;
        var K1 = VW & VZ ^ VW & VE ^ VZ & VE;
        var K2 = (Vy >>> 28 | VW << 4) ^ (Vy << 30 | VW >>> 2) ^ (Vy << 25 | VW >>> 7);
        var K3 = LL[VU];
        var K4 = K3.high;
        var K5 = K3.low;
        var K6 = VC + ((VQ >>> 14 | VT << 18) ^ (VQ >>> 18 | VT << 14) ^ (VQ << 23 | VT >>> 9));
        var VD = Vf + ((VT >>> 14 | VQ << 18) ^ (VT >>> 18 | VQ << 14) ^ (VT << 23 | VQ >>> 9)) + (K6 >>> 0 < VC >>> 0 ? 1 : 0);
        var K7 = K2 + (Vy & VG ^ Vy & Vz ^ VG & Vz);
        var Vf = Vs;
        var VC = VY;
        var Vs = VI;
        var VY = VO;
        var VI = VT;
        var VO = VQ;
        var VT = Vv + (VD = VD + Vd + ((K6 = K6 + K0) >>> 0 < K0 >>> 0 ? 1 : 0) + K4 + ((K6 = K6 + K5) >>> 0 < K5 >>> 0 ? 1 : 0) + VJ + ((K6 = K6 + VR) >>> 0 < VR >>> 0 ? 1 : 0)) + ((VQ = Vi + K6 | 0) >>> 0 < Vi >>> 0 ? 1 : 0) | 0;
        var Vv = VE;
        var Vi = Vz;
        var VE = VZ;
        var Vz = VG;
        var VZ = VW;
        var VG = Vy;
        var VW = VD + (((VW >>> 28 | Vy << 4) ^ (VW << 30 | Vy >>> 2) ^ (VW << 25 | Vy >>> 7)) + K1 + (K7 >>> 0 < K2 >>> 0 ? 1 : 0)) + ((Vy = K6 + K7 | 0) >>> 0 < K6 >>> 0 ? 1 : 0) | 0;
      }
      Vm = Vl.low = Vm + Vy;
      Vl.high = Vc + VW + (Vm >>> 0 < Vy >>> 0 ? 1 : 0);
      VA = VM.low = VA + VG;
      VM.high = VB + VZ + (VA >>> 0 < VG >>> 0 ? 1 : 0);
      VF = Vo.low = VF + Vz;
      Vo.high = Vj + VE + (VF >>> 0 < Vz >>> 0 ? 1 : 0);
      VP = Vr.low = VP + Vi;
      Vr.high = VN + Vv + (VP >>> 0 < Vi >>> 0 ? 1 : 0);
      VS = Va.low = VS + VQ;
      Va.high = Vn + VT + (VS >>> 0 < VQ >>> 0 ? 1 : 0);
      VH = Vx.low = VH + VO;
      Vx.high = Vp + VI + (VH >>> 0 < VO >>> 0 ? 1 : 0);
      Vt = Vb.low = Vt + VY;
      Vb.high = Vk + Vs + (Vt >>> 0 < VY >>> 0 ? 1 : 0);
      Vu = Vg.low = Vu + VC;
      Vg.high = Vq + Vf + (Vu >>> 0 < VC >>> 0 ? 1 : 0);
    },
    _doFinalize: function () {
      var Vw = this._data;
      var VX = Vw.words;
      var Vg = this._nDataBytes * 8;
      var Vl = Vw.sigBytes * 8;
      VX[Vl >>> 5] |= 128 << 24 - Vl % 32;
      VX[30 + (128 + Vl >>> 10 << 5)] = Math.floor(Vg / 4294967296);
      VX[31 + (128 + Vl >>> 10 << 5)] = Vg;
      Vw.sigBytes = VX.length * 4;
      this._process();
      return this._hash.toX32();
    },
    clone: function () {
      var Vw = L7.clone.call(this);
      Vw._hash = this._hash.clone();
      return Vw;
    },
    blockSize: 32
  });
  hI.SHA512 = L7._createHelper(hv);
  hI.HmacSHA512 = L7._createHmacHelper(hv);
  hv = (hI = hz).x64;
  hh = hv.Word;
  hL = hv.WordArray;
  hv = hI.algo;
  hV = hv.SHA512;
  hv = hv.SHA384 = hV.extend({
    _doReset: function () {
      this._hash = new hL.init([new hh.init(3418070365, 3238371032), new hh.init(1654270250, 914150663), new hh.init(2438529370, 812702999), new hh.init(355462360, 4144912697), new hh.init(1731405415, 4290775857), new hh.init(2394180231, 1750603025), new hh.init(3675008525, 1694076839), new hh.init(1203062813, 3204075428)]);
    },
    _doFinalize: function () {
      var Vw = hV._doFinalize.call(this);
      Vw.sigBytes -= 16;
      return Vw;
    }
  });
  hI.SHA384 = hV._createHelper(hv);
  hI.HmacSHA384 = hV._createHmacHelper(hv);
  var Lw = Math;
  var hI = hz;
  var LX = (hv = hI.lib).WordArray;
  var Lg = hv.Hasher;
  var Ll = hI.x64.Word;
  var hv = hI.algo;
  var LM = [];
  var Lo = [];
  var Lr = [];
  var La = 1;
  var Lx = 0;
  for (var Lb = 0; Lb < 24; Lb++) {
    LM[La + Lx * 5] = (Lb + 1) * (Lb + 2) / 2 % 64;
    var Lc = (La * 2 + Lx * 3) % 5;
    La = Lx % 5;
    Lx = Lc;
  }
  for (La = 0; La < 5; La++) {
    for (Lx = 0; Lx < 5; Lx++) {
      Lo[La + Lx * 5] = Lx + (La * 2 + Lx * 3) % 5 * 5;
    }
  }
  var Lm = 1;
  for (var LB = 0; LB < 24; LB++) {
    var LA;
    var Lj = 0;
    var LF = 0;
    for (var LN = 0; LN < 7; LN++) {
      if (Lm & 1) {
        if ((LA = (1 << LN) - 1) < 32) {
          LF ^= 1 << LA;
        } else {
          Lj ^= 1 << LA - 32;
        }
      }
      if (Lm & 128) {
        Lm = Lm << 1 ^ 113;
      } else {
        Lm <<= 1;
      }
    }
    Lr[LB] = Ll.create(Lj, LF);
  }
  var LP = [];
  for (var Ln = 0; Ln < 25; Ln++) {
    LP[Ln] = Ll.create();
  }
  function LS(Vw, VX, Vg) {
    return Vw & VX | ~Vw & Vg;
  }
  function Lp(Vw, VX, Vg) {
    return Vw & Vg | VX & ~Vg;
  }
  function LH(Vw, VX) {
    return Vw << VX | Vw >>> 32 - VX;
  }
  function Lk(Vw) {
    if (typeof Vw == "string") {
      return hp;
    } else {
      return hS;
    }
  }
  function Lt(Vw, VX, Vg) {
    var Vl;
    var VM = this._iv;
    if (VM) {
      Vl = VM;
      this._iv = undefined;
    } else {
      Vl = this._prevBlock;
    }
    for (var Vo = 0; Vo < Vg; Vo++) {
      Vw[VX + Vo] ^= Vl[Vo];
    }
  }
  function Lq(Vw, VX, Vg, Vl) {
    var VM;
    var Vo = this._iv;
    if (Vo) {
      VM = Vo.slice(0);
      this._iv = undefined;
    } else {
      VM = this._prevBlock;
    }
    Vl.encryptBlock(VM, 0);
    for (var Vr = 0; Vr < Vg; Vr++) {
      Vw[VX + Vr] ^= VM[Vr];
    }
  }
  function Lu(Vw) {
    var VX;
    var Vg;
    var Vl;
    if ((Vw >> 24 & 255) == 255) {
      Vg = Vw >> 8 & 255;
      Vl = Vw & 255;
      if ((VX = Vw >> 16 & 255) === 255) {
        VX = 0;
        if (Vg === 255) {
          Vg = 0;
          if (Vl === 255) {
            Vl = 0;
          } else {
            ++Vl;
          }
        } else {
          ++Vg;
        }
      } else {
        ++VX;
      }
      Vw = 0;
      Vw = (Vw += VX << 16) + (Vg << 8) + Vl;
    } else {
      Vw += 1 << 24;
    }
    return Vw;
  }
  hv = hv.SHA3 = Lg.extend({
    cfg: Lg.cfg.extend({
      outputLength: 512
    }),
    _doReset: function () {
      var Vw = this._state = [];
      for (var VX = 0; VX < 25; VX++) {
        Vw[VX] = new Ll.init();
      }
      this.blockSize = (1600 - this.cfg.outputLength * 2) / 32;
    },
    _doProcessBlock: function (Vw, VX) {
      var Vg = this._state;
      for (var Vl = this.blockSize / 2, VM = 0; VM < Vl; VM++) {
        var Vo = Vw[VX + VM * 2];
        var Vr = Vw[VX + VM * 2 + 1];
        var Vo = (Vo << 8 | Vo >>> 24) & 16711935 | (Vo << 24 | Vo >>> 8) & 4278255360;
        (Vk = Vg[VM]).high ^= (Vr << 8 | Vr >>> 24) & 16711935 | (Vr << 24 | Vr >>> 8) & 4278255360;
        Vk.low ^= Vo;
      }
      for (var Va = 0; Va < 24; Va++) {
        for (var Vx = 0; Vx < 5; Vx++) {
          var Vb = 0;
          var Vc = 0;
          for (var Vm = 0; Vm < 5; Vm++) {
            Vb ^= (Vk = Vg[Vx + Vm * 5]).high;
            Vc ^= Vk.low;
          }
          var VB = LP[Vx];
          VB.high = Vb;
          VB.low = Vc;
        }
        for (Vx = 0; Vx < 5; Vx++) {
          var VA = LP[(Vx + 4) % 5];
          var Vj = LP[(Vx + 1) % 5];
          var VF = Vj.high;
          var Vj = Vj.low;
          var Vb = VA.high ^ (VF << 1 | Vj >>> 31);
          var Vc = VA.low ^ (Vj << 1 | VF >>> 31);
          for (var Vm = 0; Vm < 5; Vm++) {
            (Vk = Vg[Vx + Vm * 5]).high ^= Vb;
            Vk.low ^= Vc;
          }
        }
        for (var VN = 1; VN < 25; VN++) {
          var VP = (Vk = Vg[VN]).high;
          var Vn = Vk.low;
          var VS = LM[VN];
          Vc = VS < 32 ? (Vb = VP << VS | Vn >>> 32 - VS, Vn << VS | VP >>> 32 - VS) : (Vb = Vn << VS - 32 | VP >>> 64 - VS, VP << VS - 32 | Vn >>> 64 - VS);
          var VP = LP[Lo[VN]];
          VP.high = Vb;
          VP.low = Vc;
        }
        var Vp = LP[0];
        var VH = Vg[0];
        Vp.high = VH.high;
        Vp.low = VH.low;
        for (Vx = 0; Vx < 5; Vx++) {
          for (Vm = 0; Vm < 5; Vm++) {
            var Vk = Vg[VN = Vx + Vm * 5];
            var Vt = LP[VN];
            var Vq = LP[(Vx + 1) % 5 + Vm * 5];
            var Vu = LP[(Vx + 2) % 5 + Vm * 5];
            Vk.high = Vt.high ^ ~Vq.high & Vu.high;
            Vk.low = Vt.low ^ ~Vq.low & Vu.low;
          }
        }
        Vk = Vg[0];
        Vp = Lr[Va];
        Vk.high ^= Vp.high;
        Vk.low ^= Vp.low;
      }
    },
    _doFinalize: function () {
      var Vw = this._data;
      var VX = Vw.words;
      this._nDataBytes;
      var Vg = Vw.sigBytes * 8;
      var Vl = this.blockSize * 32;
      VX[Vg >>> 5] |= 1 << 24 - Vg % 32;
      VX[(Lw.ceil((1 + Vg) / Vl) * Vl >>> 5) - 1] |= 128;
      Vw.sigBytes = VX.length * 4;
      this._process();
      var VM = this._state;
      var Vg = this.cfg.outputLength / 8;
      for (var Vo = Vg / 8, Vr = [], Va = 0; Va < Vo; Va++) {
        var Vx = VM[Va];
        var Vb = Vx.high;
        var Vx = Vx.low;
        var Vb = (Vb << 8 | Vb >>> 24) & 16711935 | (Vb << 24 | Vb >>> 8) & 4278255360;
        Vr.push((Vx << 8 | Vx >>> 24) & 16711935 | (Vx << 24 | Vx >>> 8) & 4278255360);
        Vr.push(Vb);
      }
      return new LX.init(Vr, Vg);
    },
    clone: function () {
      var Vw = Lg.clone.call(this);
      var VX = Vw._state = this._state.slice(0);
      for (var Vg = 0; Vg < 25; Vg++) {
        VX[Vg] = VX[Vg].clone();
      }
      return Vw;
    }
  });
  hI.SHA3 = Lg._createHelper(hv);
  hI.HmacSHA3 = Lg._createHmacHelper(hv);
  Math;
  hv = (hI = hz).lib;
  hK = hv.WordArray;
  hw = hv.Hasher;
  hv = hI.algo;
  hX = hK.create([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 7, 4, 13, 1, 10, 6, 15, 3, 12, 0, 9, 5, 2, 14, 11, 8, 3, 10, 14, 4, 9, 15, 8, 1, 2, 7, 0, 6, 13, 11, 5, 12, 1, 9, 11, 10, 0, 8, 12, 4, 13, 3, 7, 15, 14, 5, 6, 2, 4, 0, 5, 9, 7, 12, 2, 10, 14, 1, 3, 8, 11, 6, 15, 13]);
  hg = hK.create([5, 14, 7, 0, 9, 2, 11, 4, 13, 6, 15, 8, 1, 10, 3, 12, 6, 11, 3, 7, 0, 13, 5, 10, 14, 15, 8, 12, 4, 9, 1, 2, 15, 5, 1, 3, 7, 14, 6, 9, 11, 8, 12, 2, 10, 0, 4, 13, 8, 6, 4, 1, 3, 11, 15, 0, 5, 12, 2, 13, 9, 7, 10, 14, 12, 15, 10, 4, 1, 5, 8, 7, 6, 2, 13, 14, 0, 3, 9, 11]);
  hl = hK.create([11, 14, 15, 12, 5, 8, 7, 9, 11, 13, 14, 15, 6, 7, 9, 8, 7, 6, 8, 13, 11, 9, 7, 15, 7, 12, 15, 9, 11, 7, 13, 12, 11, 13, 6, 7, 14, 9, 13, 15, 14, 8, 13, 6, 5, 12, 7, 5, 11, 12, 14, 15, 14, 15, 9, 8, 9, 14, 5, 6, 8, 6, 5, 12, 9, 15, 5, 11, 6, 8, 13, 12, 5, 12, 13, 14, 11, 8, 5, 6]);
  hM = hK.create([8, 9, 9, 11, 13, 15, 15, 5, 7, 7, 8, 11, 14, 14, 12, 6, 9, 13, 15, 7, 12, 8, 9, 11, 7, 7, 12, 7, 6, 15, 13, 11, 9, 7, 15, 11, 8, 6, 6, 14, 12, 13, 5, 14, 13, 13, 7, 5, 15, 5, 8, 11, 14, 14, 6, 14, 6, 9, 12, 9, 12, 5, 15, 8, 8, 5, 12, 9, 12, 5, 14, 6, 8, 13, 6, 5, 15, 13, 11, 11]);
  ho = hK.create([0, 1518500249, 1859775393, 2400959708, 2840853838]);
  hr = hK.create([1352829926, 1548603684, 1836072691, 2053994217, 0]);
  hv = hv.RIPEMD160 = hw.extend({
    _doReset: function () {
      this._hash = hK.create([1732584193, 4023233417, 2562383102, 271733878, 3285377520]);
    },
    _doProcessBlock: function (Vw, VX) {
      for (var Vg = 0; Vg < 16; Vg++) {
        var Vl = VX + Vg;
        var VM = Vw[Vl];
        Vw[Vl] = (VM << 8 | VM >>> 24) & 16711935 | (VM << 24 | VM >>> 8) & 4278255360;
      }
      var Vo;
      var Vr;
      var Va;
      var Vx;
      var Vb;
      var Vc;
      var Vm = this._hash.words;
      var VB = ho.words;
      var VA = hr.words;
      var Vj = hX.words;
      var VF = hg.words;
      var VN = hl.words;
      var VP = hM.words;
      var Vn = Vo = Vm[0];
      var VS = Vr = Vm[1];
      var Vp = Va = Vm[2];
      var VH = Vx = Vm[3];
      var Vk = Vb = Vm[4];
      for (var Vg = 0; Vg < 80; Vg += 1) {
        Vc = (Vc = LH(Vc = (Vc = Vo + Vw[VX + Vj[Vg]] | 0) + (Vg < 16 ? (Vr ^ Va ^ Vx) + VB[0] : Vg < 32 ? LS(Vr, Va, Vx) + VB[1] : Vg < 48 ? ((Vr | ~Va) ^ Vx) + VB[2] : Vg < 64 ? Lp(Vr, Va, Vx) + VB[3] : (Vr ^ (Va | ~Vx)) + VB[4]) | 0, VN[Vg])) + Vb | 0;
        Vo = Vb;
        Vb = Vx;
        Vx = LH(Va, 10);
        Va = Vr;
        Vr = Vc;
        Vc = (Vc = LH(Vc = (Vc = Vn + Vw[VX + VF[Vg]] | 0) + (Vg < 16 ? (VS ^ (Vp | ~VH)) + VA[0] : Vg < 32 ? Lp(VS, Vp, VH) + VA[1] : Vg < 48 ? ((VS | ~Vp) ^ VH) + VA[2] : Vg < 64 ? LS(VS, Vp, VH) + VA[3] : (VS ^ Vp ^ VH) + VA[4]) | 0, VP[Vg])) + Vk | 0;
        Vn = Vk;
        Vk = VH;
        VH = LH(Vp, 10);
        Vp = VS;
        VS = Vc;
      }
      Vc = Vm[1] + Va + VH | 0;
      Vm[1] = Vm[2] + Vx + Vk | 0;
      Vm[2] = Vm[3] + Vb + Vn | 0;
      Vm[3] = Vm[4] + Vo + VS | 0;
      Vm[4] = Vm[0] + Vr + Vp | 0;
      Vm[0] = Vc;
    },
    _doFinalize: function () {
      var Vw = this._data;
      var VX = Vw.words;
      var Vg = this._nDataBytes * 8;
      var Vl = Vw.sigBytes * 8;
      VX[Vl >>> 5] |= 128 << 24 - Vl % 32;
      VX[14 + (64 + Vl >>> 9 << 4)] = (Vg << 8 | Vg >>> 24) & 16711935 | (Vg << 24 | Vg >>> 8) & 4278255360;
      Vw.sigBytes = (VX.length + 1) * 4;
      this._process();
      var Vl = this._hash;
      var VM = Vl.words;
      for (var Vo = 0; Vo < 5; Vo++) {
        var Vr = VM[Vo];
        VM[Vo] = (Vr << 8 | Vr >>> 24) & 16711935 | (Vr << 24 | Vr >>> 8) & 4278255360;
      }
      return Vl;
    },
    clone: function () {
      var Vw = hw.clone.call(this);
      Vw._hash = this._hash.clone();
      return Vw;
    }
  });
  hI.RIPEMD160 = hw._createHelper(hv);
  hI.HmacRIPEMD160 = hw._createHmacHelper(hv);
  hv = (hI = hz).lib.Base;
  ha = hI.enc.Utf8;
  hI.algo.HMAC = hv.extend({
    init: function (Vw, VX) {
      Vw = this._hasher = new Vw.init();
      if (typeof VX == "string") {
        VX = ha.parse(VX);
      }
      for (var Vg = Vw.blockSize, Vl = Vg * 4, Vw = ((VX = VX.sigBytes > Vl ? Vw.finalize(VX) : VX).clamp(), this._oKey = VX.clone()), VX = this._iKey = VX.clone(), VM = Vw.words, Vo = VX.words, Vr = 0; Vr < Vg; Vr++) {
        VM[Vr] ^= 1549556828;
        Vo[Vr] ^= 909522486;
      }
      Vw.sigBytes = VX.sigBytes = Vl;
      this.reset();
    },
    reset: function () {
      var Vw = this._hasher;
      Vw.reset();
      Vw.update(this._iKey);
    },
    update: function (Vw) {
      this._hasher.update(Vw);
      return this;
    },
    finalize: function (Vw) {
      var VX = this._hasher;
      var Vw = VX.finalize(Vw);
      VX.reset();
      return VX.finalize(this._oKey.clone().concat(Vw));
    }
  });
  hv = (hI = hz).lib;
  LW = hv.Base;
  hx = hv.WordArray;
  hv = hI.algo;
  V0 = hv.SHA1;
  hb = hv.HMAC;
  hc = hv.PBKDF2 = LW.extend({
    cfg: LW.extend({
      keySize: 4,
      hasher: V0,
      iterations: 1
    }),
    init: function (Vw) {
      this.cfg = this.cfg.extend(Vw);
    },
    compute: function (Vw, VX) {
      var Vg = this.cfg;
      var Vl = hb.create(Vg.hasher, Vw);
      var VM = hx.create();
      var Vo = hx.create([1]);
      for (var Vr = VM.words, Va = Vo.words, Vx = Vg.keySize, Vb = Vg.iterations; Vr.length < Vx;) {
        var Vc = Vl.update(VX).finalize(Vo);
        Vl.reset();
        var Vm = Vc.words;
        var VB = Vm.length;
        var VA = Vc;
        for (var Vj = 1; Vj < Vb; Vj++) {
          VA = Vl.finalize(VA);
          Vl.reset();
          var VF = VA.words;
          for (var VN = 0; VN < VB; VN++) {
            Vm[VN] ^= VF[VN];
          }
        }
        VM.concat(Vc);
        Va[0]++;
      }
      VM.sigBytes = Vx * 4;
      return VM;
    }
  });
  hI.PBKDF2 = function (Vw, VX, Vg) {
    return hc.create(Vg).compute(Vw, VX);
  };
  LW = (hv = hz).lib;
  V0 = LW.Base;
  hm = LW.WordArray;
  LW = hv.algo;
  hI = LW.MD5;
  hB = LW.EvpKDF = V0.extend({
    cfg: V0.extend({
      keySize: 4,
      hasher: hI,
      iterations: 1
    }),
    init: function (Vw) {
      this.cfg = this.cfg.extend(Vw);
    },
    compute: function (Vw, VX) {
      var Vg;
      var Vl = this.cfg;
      var VM = Vl.hasher.create();
      var Vo = hm.create();
      for (var Vr = Vo.words, Va = Vl.keySize, Vx = Vl.iterations; Vr.length < Va;) {
        if (Vg) {
          VM.update(Vg);
        }
        Vg = VM.update(Vw).finalize(VX);
        VM.reset();
        for (var Vb = 1; Vb < Vx; Vb++) {
          Vg = VM.finalize(Vg);
          VM.reset();
        }
        Vo.concat(Vg);
      }
      Vo.sigBytes = Va * 4;
      return Vo;
    }
  });
  hv.EvpKDF = function (Vw, VX, Vg) {
    return hB.create(Vg).compute(Vw, VX);
  };
  if (!hz.lib.Cipher) {
    V0 = (LW = hz).lib;
    hI = V0.Base;
    hA = V0.WordArray;
    hj = V0.BufferedBlockAlgorithm;
    (hv = LW.enc).Utf8;
    hF = hv.Base64;
    hN = LW.algo.EvpKDF;
    hP = V0.Cipher = hj.extend({
      cfg: hI.extend(),
      createEncryptor: function (Vw, VX) {
        return this.create(this._ENC_XFORM_MODE, Vw, VX);
      },
      createDecryptor: function (Vw, VX) {
        return this.create(this._DEC_XFORM_MODE, Vw, VX);
      },
      init: function (Vw, VX, Vg) {
        this.cfg = this.cfg.extend(Vg);
        this._xformMode = Vw;
        this._key = VX;
        this.reset();
      },
      reset: function () {
        hj.reset.call(this);
        this._doReset();
      },
      process: function (Vw) {
        this._append(Vw);
        return this._process();
      },
      finalize: function (Vw) {
        if (Vw) {
          this._append(Vw);
        }
        return this._doFinalize();
      },
      keySize: 4,
      ivSize: 4,
      _ENC_XFORM_MODE: 1,
      _DEC_XFORM_MODE: 2,
      _createHelper: function (Vw) {
        return {
          encrypt: function (VX, Vg, Vl) {
            return Lk(Vg).encrypt(Vw, VX, Vg, Vl);
          },
          decrypt: function (VX, Vg, Vl) {
            return Lk(Vg).decrypt(Vw, VX, Vg, Vl);
          }
        };
      }
    });
    V0.StreamCipher = hP.extend({
      _doFinalize: function () {
        return this._process(true);
      },
      blockSize: 1
    });
    hv = LW.mode = {};
    hH = V0.BlockCipherMode = hI.extend({
      createEncryptor: function (Vw, VX) {
        return this.Encryptor.create(Vw, VX);
      },
      createDecryptor: function (Vw, VX) {
        return this.Decryptor.create(Vw, VX);
      },
      init: function (Vw, VX) {
        this._cipher = Vw;
        this._iv = VX;
      }
    });
    (hv = hH.extend()).Encryptor = hv.extend({
      processBlock: function (Vw, VX) {
        var Vg = this._cipher;
        var Vl = Vg.blockSize;
        Lt.call(this, Vw, VX, Vl);
        Vg.encryptBlock(Vw, VX);
        this._prevBlock = Vw.slice(VX, VX + Vl);
      }
    });
    hv.Decryptor = hv.extend({
      processBlock: function (Vw, VX) {
        var Vg = this._cipher;
        var Vl = Vg.blockSize;
        var VM = Vw.slice(VX, VX + Vl);
        Vg.decryptBlock(Vw, VX);
        Lt.call(this, Vw, VX, Vl);
        this._prevBlock = VM;
      }
    });
    hH = hv.CBC = hv;
    hv = (LW.pad = {}).Pkcs7 = {
      pad: function (Vw, VX) {
        var VX = VX * 4;
        for (var Vg = VX - Vw.sigBytes % VX, Vl = Vg << 24 | Vg << 16 | Vg << 8 | Vg, VM = [], Vo = 0; Vo < Vg; Vo += 4) {
          VM.push(Vl);
        }
        VX = hA.create(VM, Vg);
        Vw.concat(VX);
      },
      unpad: function (Vw) {
        var VX = Vw.words[Vw.sigBytes - 1 >>> 2] & 255;
        Vw.sigBytes -= VX;
      }
    };
    V0.BlockCipher = hP.extend({
      cfg: hP.cfg.extend({
        mode: hH,
        padding: hv
      }),
      reset: function () {
        hP.reset.call(this);
        var Vw;
        var VX = this.cfg;
        var Vg = VX.iv;
        var VX = VX.mode;
        if (this._xformMode == this._ENC_XFORM_MODE) {
          Vw = VX.createEncryptor;
        } else {
          Vw = VX.createDecryptor;
          this._minBufferSize = 1;
        }
        if (this._mode && this._mode.__creator == Vw) {
          this._mode.init(this, Vg && Vg.words);
        } else {
          this._mode = Vw.call(VX, this, Vg && Vg.words);
          this._mode.__creator = Vw;
        }
      },
      _doProcessBlock: function (Vw, VX) {
        this._mode.processBlock(Vw, VX);
      },
      _doFinalize: function () {
        var Vw;
        var VX = this.cfg.padding;
        if (this._xformMode == this._ENC_XFORM_MODE) {
          VX.pad(this._data, this.blockSize);
          Vw = this._process(true);
        } else {
          Vw = this._process(true);
          VX.unpad(Vw);
        }
        return Vw;
      },
      blockSize: 4
    });
    hn = V0.CipherParams = hI.extend({
      init: function (Vw) {
        this.mixIn(Vw);
      },
      toString: function (Vw) {
        return (Vw || this.formatter).stringify(this);
      }
    });
    hH = (LW.format = {}).OpenSSL = {
      stringify: function (Vw) {
        var VX = Vw.ciphertext;
        var Vw = Vw.salt;
        var Vw = Vw ? hA.create([1398893684, 1701076831]).concat(Vw).concat(VX) : VX;
        return Vw.toString(hF);
      },
      parse: function (Vw) {
        var VX;
        var Vw = hF.parse(Vw);
        var Vg = Vw.words;
        if (Vg[0] == 1398893684 && Vg[1] == 1701076831) {
          VX = hA.create(Vg.slice(2, 4));
          Vg.splice(0, 4);
          Vw.sigBytes -= 16;
        }
        return hn.create({
          ciphertext: Vw,
          salt: VX
        });
      }
    };
    hS = V0.SerializableCipher = hI.extend({
      cfg: hI.extend({
        format: hH
      }),
      encrypt: function (Vw, VX, Vg, Vl) {
        Vl = this.cfg.extend(Vl);
        var VM = Vw.createEncryptor(Vg, Vl);
        var VX = VM.finalize(VX);
        var VM = VM.cfg;
        return hn.create({
          ciphertext: VX,
          key: Vg,
          iv: VM.iv,
          algorithm: Vw,
          mode: VM.mode,
          padding: VM.padding,
          blockSize: Vw.blockSize,
          formatter: Vl.format
        });
      },
      decrypt: function (Vw, VX, Vg, Vl) {
        Vl = this.cfg.extend(Vl);
        VX = this._parse(VX, Vl.format);
        return Vw.createDecryptor(Vg, Vl).finalize(VX.ciphertext);
      },
      _parse: function (Vw, VX) {
        if (typeof Vw == "string") {
          return VX.parse(Vw, this);
        } else {
          return Vw;
        }
      }
    });
    hv = (LW.kdf = {}).OpenSSL = {
      execute: function (Vw, VX, Vg, Vl) {
        Vl = Vl || hA.random(8);
        Vw = hN.create({
          keySize: VX + Vg
        }).compute(Vw, Vl);
        Vg = hA.create(Vw.words.slice(VX), Vg * 4);
        Vw.sigBytes = VX * 4;
        return hn.create({
          key: Vw,
          iv: Vg,
          salt: Vl
        });
      }
    };
    hp = V0.PasswordBasedCipher = hS.extend({
      cfg: hS.cfg.extend({
        kdf: hv
      }),
      encrypt: function (Vw, VX, Vg, Vl) {
        Vg = (Vl = this.cfg.extend(Vl)).kdf.execute(Vg, Vw.keySize, Vw.ivSize);
        Vl.iv = Vg.iv;
        Vw = hS.encrypt.call(this, Vw, VX, Vg.key, Vl);
        Vw.mixIn(Vg);
        return Vw;
      },
      decrypt: function (Vw, VX, Vg, Vl) {
        Vl = this.cfg.extend(Vl);
        VX = this._parse(VX, Vl.format);
        Vg = Vl.kdf.execute(Vg, Vw.keySize, Vw.ivSize, VX.salt);
        Vl.iv = Vg.iv;
        return hS.decrypt.call(this, Vw, VX, Vg.key, Vl);
      }
    });
  }
  hz.mode.CFB = ((hI = hz.lib.BlockCipherMode.extend()).Encryptor = hI.extend({
    processBlock: function (Vw, VX) {
      var Vg = this._cipher;
      var Vl = Vg.blockSize;
      Lq.call(this, Vw, VX, Vl, Vg);
      this._prevBlock = Vw.slice(VX, VX + Vl);
    }
  }), hI.Decryptor = hI.extend({
    processBlock: function (Vw, VX) {
      var Vg = this._cipher;
      var Vl = Vg.blockSize;
      var VM = Vw.slice(VX, VX + Vl);
      Lq.call(this, Vw, VX, Vl, Vg);
      this._prevBlock = VM;
    }
  }), hI);
  hz.mode.CTR = (hH = hz.lib.BlockCipherMode.extend(), LW = hH.Encryptor = hH.extend({
    processBlock: function (Vw, VX) {
      var Vg = this._cipher;
      var Vl = Vg.blockSize;
      var VM = this._iv;
      var Vo = this._counter;
      if (VM) {
        Vo = this._counter = VM.slice(0);
        this._iv = undefined;
      }
      var Vr = Vo.slice(0);
      Vg.encryptBlock(Vr, 0);
      Vo[Vl - 1] = Vo[Vl - 1] + 1 | 0;
      for (var Va = 0; Va < Vl; Va++) {
        Vw[VX + Va] ^= Vr[Va];
      }
    }
  }), hH.Decryptor = LW, hH);
  hz.mode.CTRGladman = (V0 = hz.lib.BlockCipherMode.extend(), hv = V0.Encryptor = V0.extend({
    processBlock: function (Vw, VX) {
      var Vg = this._cipher;
      var Vl = Vg.blockSize;
      var VM = this._iv;
      var Vo = this._counter;
      if (VM) {
        Vo = this._counter = VM.slice(0);
        this._iv = undefined;
      }
      if (((VM = Vo)[0] = Lu(VM[0])) === 0) {
        VM[1] = Lu(VM[1]);
      }
      var Vr = Vo.slice(0);
      Vg.encryptBlock(Vr, 0);
      for (var Va = 0; Va < Vl; Va++) {
        Vw[VX + Va] ^= Vr[Va];
      }
    }
  }), V0.Decryptor = hv, V0);
  hz.mode.OFB = (hI = hz.lib.BlockCipherMode.extend(), LW = hI.Encryptor = hI.extend({
    processBlock: function (Vw, VX) {
      var Vg = this._cipher;
      var Vl = Vg.blockSize;
      var VM = this._iv;
      var Vo = this._keystream;
      if (VM) {
        Vo = this._keystream = VM.slice(0);
        this._iv = undefined;
      }
      Vg.encryptBlock(Vo, 0);
      for (var Vr = 0; Vr < Vl; Vr++) {
        Vw[VX + Vr] ^= Vo[Vr];
      }
    }
  }), hI.Decryptor = LW, hI);
  hz.mode.ECB = ((hv = hz.lib.BlockCipherMode.extend()).Encryptor = hv.extend({
    processBlock: function (Vw, VX) {
      this._cipher.encryptBlock(Vw, VX);
    }
  }), hv.Decryptor = hv.extend({
    processBlock: function (Vw, VX) {
      this._cipher.decryptBlock(Vw, VX);
    }
  }), hv);
  hz.pad.AnsiX923 = {
    pad: function (Vw, VX) {
      var Vg = Vw.sigBytes;
      var VX = VX * 4;
      var VX = VX - Vg % VX;
      var Vg = Vg + VX - 1;
      Vw.clamp();
      Vw.words[Vg >>> 2] |= VX << 24 - Vg % 4 * 8;
      Vw.sigBytes += VX;
    },
    unpad: function (Vw) {
      var VX = Vw.words[Vw.sigBytes - 1 >>> 2] & 255;
      Vw.sigBytes -= VX;
    }
  };
  hz.pad.Iso10126 = {
    pad: function (Vw, VX) {
      VX *= 4;
      VX -= Vw.sigBytes % VX;
      Vw.concat(hz.lib.WordArray.random(VX - 1)).concat(hz.lib.WordArray.create([VX << 24], 1));
    },
    unpad: function (Vw) {
      var VX = Vw.words[Vw.sigBytes - 1 >>> 2] & 255;
      Vw.sigBytes -= VX;
    }
  };
  hz.pad.Iso97971 = {
    pad: function (Vw, VX) {
      Vw.concat(hz.lib.WordArray.create([2147483648], 1));
      hz.pad.ZeroPadding.pad(Vw, VX);
    },
    unpad: function (Vw) {
      hz.pad.ZeroPadding.unpad(Vw);
      Vw.sigBytes--;
    }
  };
  hz.pad.ZeroPadding = {
    pad: function (Vw, VX) {
      VX *= 4;
      Vw.clamp();
      Vw.sigBytes += VX - (Vw.sigBytes % VX || VX);
    },
    unpad: function (Vw) {
      var VX = Vw.words;
      for (var Vg = Vw.sigBytes - 1, Vg = Vw.sigBytes - 1; Vg >= 0; Vg--) {
        if (VX[Vg >>> 2] >>> 24 - Vg % 4 * 8 & 255) {
          Vw.sigBytes = Vg + 1;
          break;
        }
      }
    }
  };
  hz.pad.NoPadding = {
    pad: function () {},
    unpad: function () {}
  };
  hk = (V0 = hz).lib.CipherParams;
  hq = V0.enc.Hex;
  V0.format.Hex = {
    stringify: function (Vw) {
      return Vw.ciphertext.toString(hq);
    },
    parse: function (Vw) {
      Vw = hq.parse(Vw);
      return hk.create({
        ciphertext: Vw
      });
    }
  };
  var LW = hz;
  var hI = LW.lib.BlockCipher;
  var hv = LW.algo;
  var Ly = [];
  var LZ = [];
  var LG = [];
  var LE = [];
  var Lz = [];
  var Lv = [];
  var Li = [];
  var LT = [];
  var LQ = [];
  var LI = [];
  var LO = [];
  for (var Ls = 0; Ls < 256; Ls++) {
    LO[Ls] = Ls < 128 ? Ls << 1 : Ls << 1 ^ 283;
  }
  var LY = 0;
  var Lf = 0;
  for (var Ls = 0; Ls < 256; Ls++) {
    var LC = Lf ^ Lf << 1 ^ Lf << 2 ^ Lf << 3 ^ Lf << 4;
    var LU = LO[LZ[Ly[LY] = LC = LC >>> 8 ^ LC & 255 ^ 99] = LY];
    var LR = LO[LU];
    var LJ = LO[LR];
    var LD = LO[LC] * 257 ^ LC * 16843008;
    LG[LY] = LD << 24 | LD >>> 8;
    LE[LY] = LD << 16 | LD >>> 16;
    Lz[LY] = LD << 8 | LD >>> 24;
    Lv[LY] = LD;
    Li[LC] = (LD = LJ * 16843009 ^ LR * 65537 ^ LU * 257 ^ LY * 16843008) << 24 | LD >>> 8;
    LT[LC] = LD << 16 | LD >>> 16;
    LQ[LC] = LD << 8 | LD >>> 24;
    LI[LC] = LD;
    if (LY) {
      LY = LU ^ LO[LO[LO[LJ ^ LU]]];
      Lf ^= LO[LO[Lf]];
    } else {
      LY = Lf = 1;
    }
  }
  var Ld = [0, 1, 2, 4, 8, 16, 32, 64, 128, 27, 54];
  var hv = hv.AES = hI.extend({
    _doReset: function () {
      if (!this._nRounds || this._keyPriorReset !== this._key) {
        var Vw = this._keyPriorReset = this._key;
        var VX = Vw.words;
        var Vg = Vw.sigBytes / 4;
        for (var Vl = (1 + (this._nRounds = 6 + Vg)) * 4, VM = this._keySchedule = [], Vo = 0; Vo < Vl; Vo++) {
          if (Vo < Vg) {
            VM[Vo] = VX[Vo];
          } else {
            Vx = VM[Vo - 1];
            if (Vo % Vg) {
              if (Vg > 6 && Vo % Vg == 4) {
                Vx = Ly[Vx >>> 24] << 24 | Ly[Vx >>> 16 & 255] << 16 | Ly[Vx >>> 8 & 255] << 8 | Ly[Vx & 255];
              }
            } else {
              Vx = Ly[(Vx = Vx << 8 | Vx >>> 24) >>> 24] << 24 | Ly[Vx >>> 16 & 255] << 16 | Ly[Vx >>> 8 & 255] << 8 | Ly[Vx & 255];
              Vx ^= Ld[Vo / Vg | 0] << 24;
            }
            VM[Vo] = VM[Vo - Vg] ^ Vx;
          }
        }
        var Vr = this._invKeySchedule = [];
        for (var Va = 0; Va < Vl; Va++) {
          var Vx;
          var Vo = Vl - Va;
          Vx = Va % 4 ? VM[Vo] : VM[Vo - 4];
          Vr[Va] = Va < 4 || Vo <= 4 ? Vx : Li[Ly[Vx >>> 24]] ^ LT[Ly[Vx >>> 16 & 255]] ^ LQ[Ly[Vx >>> 8 & 255]] ^ LI[Ly[Vx & 255]];
        }
      }
    },
    encryptBlock: function (Vw, VX) {
      this._doCryptBlock(Vw, VX, this._keySchedule, LG, LE, Lz, Lv, Ly);
    },
    decryptBlock: function (Vw, VX) {
      var Vg = Vw[VX + 1];
      Vw[VX + 1] = Vw[VX + 3];
      Vw[VX + 3] = Vg;
      this._doCryptBlock(Vw, VX, this._invKeySchedule, Li, LT, LQ, LI, LZ);
      var Vg = Vw[VX + 1];
      Vw[VX + 1] = Vw[VX + 3];
      Vw[VX + 3] = Vg;
    },
    _doCryptBlock: function (Vw, VX, Vg, Vl, VM, Vo, Vr, Va) {
      for (var Vx = this._nRounds, Vb = Vw[VX] ^ Vg[0], Vc = Vw[VX + 1] ^ Vg[1], Vm = Vw[VX + 2] ^ Vg[2], VB = Vw[VX + 3] ^ Vg[3], VA = 4, Vj = 1; Vj < Vx; Vj++) {
        var VF = Vl[Vb >>> 24] ^ VM[Vc >>> 16 & 255] ^ Vo[Vm >>> 8 & 255] ^ Vr[VB & 255] ^ Vg[VA++];
        var VN = Vl[Vc >>> 24] ^ VM[Vm >>> 16 & 255] ^ Vo[VB >>> 8 & 255] ^ Vr[Vb & 255] ^ Vg[VA++];
        var VP = Vl[Vm >>> 24] ^ VM[VB >>> 16 & 255] ^ Vo[Vb >>> 8 & 255] ^ Vr[Vc & 255] ^ Vg[VA++];
        var Vn = Vl[VB >>> 24] ^ VM[Vb >>> 16 & 255] ^ Vo[Vc >>> 8 & 255] ^ Vr[Vm & 255] ^ Vg[VA++];
        var Vb = VF;
        var Vc = VN;
        var Vm = VP;
        var VB = Vn;
      }
      VF = (Va[Vb >>> 24] << 24 | Va[Vc >>> 16 & 255] << 16 | Va[Vm >>> 8 & 255] << 8 | Va[VB & 255]) ^ Vg[VA++];
      VN = (Va[Vc >>> 24] << 24 | Va[Vm >>> 16 & 255] << 16 | Va[VB >>> 8 & 255] << 8 | Va[Vb & 255]) ^ Vg[VA++];
      VP = (Va[Vm >>> 24] << 24 | Va[VB >>> 16 & 255] << 16 | Va[Vb >>> 8 & 255] << 8 | Va[Vc & 255]) ^ Vg[VA++];
      Vn = (Va[VB >>> 24] << 24 | Va[Vb >>> 16 & 255] << 16 | Va[Vc >>> 8 & 255] << 8 | Va[Vm & 255]) ^ Vg[VA++];
      Vw[VX] = VF;
      Vw[VX + 1] = VN;
      Vw[VX + 2] = VP;
      Vw[VX + 3] = Vn;
    },
    keySize: 8
  });
  LW.AES = hI._createHelper(hv);
  var V0 = hz;
  var V1 = (LW = V0.lib).WordArray;
  var LW = LW.BlockCipher;
  var hI = V0.algo;
  var V2 = [57, 49, 41, 33, 25, 17, 9, 1, 58, 50, 42, 34, 26, 18, 10, 2, 59, 51, 43, 35, 27, 19, 11, 3, 60, 52, 44, 36, 63, 55, 47, 39, 31, 23, 15, 7, 62, 54, 46, 38, 30, 22, 14, 6, 61, 53, 45, 37, 29, 21, 13, 5, 28, 20, 12, 4];
  var V3 = [14, 17, 11, 24, 1, 5, 3, 28, 15, 6, 21, 10, 23, 19, 12, 4, 26, 8, 16, 7, 27, 20, 13, 2, 41, 52, 31, 37, 47, 55, 30, 40, 51, 45, 33, 48, 44, 49, 39, 56, 34, 53, 46, 42, 50, 36, 29, 32];
  var V4 = [1, 2, 4, 6, 8, 10, 12, 14, 15, 17, 19, 21, 23, 25, 27, 28];
  var V5 = [{
    0: 8421888,
    268435456: 32768,
    536870912: 8421378,
    805306368: 2,
    1073741824: 512,
    1342177280: 8421890,
    1610612736: 8389122,
    1879048192: 8388608,
    2147483648: 514,
    2415919104: 8389120,
    2684354560: 33280,
    2952790016: 8421376,
    3221225472: 32770,
    3489660928: 8388610,
    3758096384: 0,
    4026531840: 33282,
    134217728: 0,
    402653184: 8421890,
    671088640: 33282,
    939524096: 32768,
    1207959552: 8421888,
    1476395008: 512,
    1744830464: 8421378,
    2013265920: 2,
    2281701376: 8389120,
    2550136832: 33280,
    2818572288: 8421376,
    3087007744: 8389122,
    3355443200: 8388610,
    3623878656: 32770,
    3892314112: 514,
    4160749568: 8388608,
    1: 32768,
    268435457: 2,
    536870913: 8421888,
    805306369: 8388608,
    1073741825: 8421378,
    1342177281: 33280,
    1610612737: 512,
    1879048193: 8389122,
    2147483649: 8421890,
    2415919105: 8421376,
    2684354561: 8388610,
    2952790017: 33282,
    3221225473: 514,
    3489660929: 8389120,
    3758096385: 32770,
    4026531841: 0,
    134217729: 8421890,
    402653185: 8421376,
    671088641: 8388608,
    939524097: 512,
    1207959553: 32768,
    1476395009: 8388610,
    1744830465: 2,
    2013265921: 33282,
    2281701377: 32770,
    2550136833: 8389122,
    2818572289: 514,
    3087007745: 8421888,
    3355443201: 8389120,
    3623878657: 0,
    3892314113: 33280,
    4160749569: 8421378
  }, {
    0: 1074282512,
    16777216: 16384,
    33554432: 524288,
    50331648: 1074266128,
    67108864: 1073741840,
    83886080: 1074282496,
    100663296: 1073758208,
    117440512: 16,
    134217728: 540672,
    150994944: 1073758224,
    167772160: 1073741824,
    184549376: 540688,
    201326592: 524304,
    218103808: 0,
    234881024: 16400,
    251658240: 1074266112,
    8388608: 1073758208,
    25165824: 540688,
    41943040: 16,
    58720256: 1073758224,
    75497472: 1074282512,
    92274688: 1073741824,
    109051904: 524288,
    125829120: 1074266128,
    142606336: 524304,
    159383552: 0,
    176160768: 16384,
    192937984: 1074266112,
    209715200: 1073741840,
    226492416: 540672,
    243269632: 1074282496,
    260046848: 16400,
    268435456: 0,
    285212672: 1074266128,
    301989888: 1073758224,
    318767104: 1074282496,
    335544320: 1074266112,
    352321536: 16,
    369098752: 540688,
    385875968: 16384,
    402653184: 16400,
    419430400: 524288,
    436207616: 524304,
    452984832: 1073741840,
    469762048: 540672,
    486539264: 1073758208,
    503316480: 1073741824,
    520093696: 1074282512,
    276824064: 540688,
    293601280: 524288,
    310378496: 1074266112,
    327155712: 16384,
    343932928: 1073758208,
    360710144: 1074282512,
    377487360: 16,
    394264576: 1073741824,
    411041792: 1074282496,
    427819008: 1073741840,
    444596224: 1073758224,
    461373440: 524304,
    478150656: 0,
    494927872: 16400,
    511705088: 1074266128,
    528482304: 540672
  }, {
    0: 260,
    1048576: 0,
    2097152: 67109120,
    3145728: 65796,
    4194304: 65540,
    5242880: 67108868,
    6291456: 67174660,
    7340032: 67174400,
    8388608: 67108864,
    9437184: 67174656,
    10485760: 65792,
    11534336: 67174404,
    12582912: 67109124,
    13631488: 65536,
    14680064: 4,
    15728640: 256,
    524288: 67174656,
    1572864: 67174404,
    2621440: 0,
    3670016: 67109120,
    4718592: 67108868,
    5767168: 65536,
    6815744: 65540,
    7864320: 260,
    8912896: 4,
    9961472: 256,
    11010048: 67174400,
    12058624: 65796,
    13107200: 65792,
    14155776: 67109124,
    15204352: 67174660,
    16252928: 67108864,
    16777216: 67174656,
    17825792: 65540,
    18874368: 65536,
    19922944: 67109120,
    20971520: 256,
    22020096: 67174660,
    23068672: 67108868,
    24117248: 0,
    25165824: 67109124,
    26214400: 67108864,
    27262976: 4,
    28311552: 65792,
    29360128: 67174400,
    30408704: 260,
    31457280: 65796,
    32505856: 67174404,
    17301504: 67108864,
    18350080: 260,
    19398656: 67174656,
    20447232: 0,
    21495808: 65540,
    22544384: 67109120,
    23592960: 256,
    24641536: 67174404,
    25690112: 65536,
    26738688: 67174660,
    27787264: 65796,
    28835840: 67108868,
    29884416: 67109124,
    30932992: 67174400,
    31981568: 4,
    33030144: 65792
  }, {
    0: 2151682048,
    65536: 2147487808,
    131072: 4198464,
    196608: 2151677952,
    262144: 0,
    327680: 4198400,
    393216: 2147483712,
    458752: 4194368,
    524288: 2147483648,
    589824: 4194304,
    655360: 64,
    720896: 2147487744,
    786432: 2151678016,
    851968: 4160,
    917504: 4096,
    983040: 2151682112,
    32768: 2147487808,
    98304: 64,
    163840: 2151678016,
    229376: 2147487744,
    294912: 4198400,
    360448: 2151682112,
    425984: 0,
    491520: 2151677952,
    557056: 4096,
    622592: 2151682048,
    688128: 4194304,
    753664: 4160,
    819200: 2147483648,
    884736: 4194368,
    950272: 4198464,
    1015808: 2147483712,
    1048576: 4194368,
    1114112: 4198400,
    1179648: 2147483712,
    1245184: 0,
    1310720: 4160,
    1376256: 2151678016,
    1441792: 2151682048,
    1507328: 2147487808,
    1572864: 2151682112,
    1638400: 2147483648,
    1703936: 2151677952,
    1769472: 4198464,
    1835008: 2147487744,
    1900544: 4194304,
    1966080: 64,
    2031616: 4096,
    1081344: 2151677952,
    1146880: 2151682112,
    1212416: 0,
    1277952: 4198400,
    1343488: 4194368,
    1409024: 2147483648,
    1474560: 2147487808,
    1540096: 64,
    1605632: 2147483712,
    1671168: 4096,
    1736704: 2147487744,
    1802240: 2151678016,
    1867776: 4160,
    1933312: 2151682048,
    1998848: 4194304,
    2064384: 4198464
  }, {
    0: 128,
    4096: 17039360,
    8192: 262144,
    12288: 536870912,
    16384: 537133184,
    20480: 16777344,
    24576: 553648256,
    28672: 262272,
    32768: 16777216,
    36864: 537133056,
    40960: 536871040,
    45056: 553910400,
    49152: 553910272,
    53248: 0,
    57344: 17039488,
    61440: 553648128,
    2048: 17039488,
    6144: 553648256,
    10240: 128,
    14336: 17039360,
    18432: 262144,
    22528: 537133184,
    26624: 553910272,
    30720: 536870912,
    34816: 537133056,
    38912: 0,
    43008: 553910400,
    47104: 16777344,
    51200: 536871040,
    55296: 553648128,
    59392: 16777216,
    63488: 262272,
    65536: 262144,
    69632: 128,
    73728: 536870912,
    77824: 553648256,
    81920: 16777344,
    86016: 553910272,
    90112: 537133184,
    94208: 16777216,
    98304: 553910400,
    102400: 553648128,
    106496: 17039360,
    110592: 537133056,
    114688: 262272,
    118784: 536871040,
    122880: 0,
    126976: 17039488,
    67584: 553648256,
    71680: 16777216,
    75776: 17039360,
    79872: 537133184,
    83968: 536870912,
    88064: 17039488,
    92160: 128,
    96256: 553910272,
    100352: 262272,
    104448: 553910400,
    108544: 0,
    112640: 553648128,
    116736: 16777344,
    120832: 262144,
    124928: 537133056,
    129024: 536871040
  }, {
    0: 268435464,
    256: 8192,
    512: 270532608,
    768: 270540808,
    1024: 268443648,
    1280: 2097152,
    1536: 2097160,
    1792: 268435456,
    2048: 0,
    2304: 268443656,
    2560: 2105344,
    2816: 8,
    3072: 270532616,
    3328: 2105352,
    3584: 8200,
    3840: 270540800,
    128: 270532608,
    384: 270540808,
    640: 8,
    896: 2097152,
    1152: 2105352,
    1408: 268435464,
    1664: 268443648,
    1920: 8200,
    2176: 2097160,
    2432: 8192,
    2688: 268443656,
    2944: 270532616,
    3200: 0,
    3456: 270540800,
    3712: 2105344,
    3968: 268435456,
    4096: 268443648,
    4352: 270532616,
    4608: 270540808,
    4864: 8200,
    5120: 2097152,
    5376: 268435456,
    5632: 268435464,
    5888: 2105344,
    6144: 2105352,
    6400: 0,
    6656: 8,
    6912: 270532608,
    7168: 8192,
    7424: 268443656,
    7680: 270540800,
    7936: 2097160,
    4224: 8,
    4480: 2105344,
    4736: 2097152,
    4992: 268435464,
    5248: 268443648,
    5504: 8200,
    5760: 270540808,
    6016: 270532608,
    6272: 270540800,
    6528: 270532616,
    6784: 8192,
    7040: 2105352,
    7296: 2097160,
    7552: 0,
    7808: 268435456,
    8064: 268443656
  }, {
    0: 1048576,
    16: 33555457,
    32: 1024,
    48: 1049601,
    64: 34604033,
    80: 0,
    96: 1,
    112: 34603009,
    128: 33555456,
    144: 1048577,
    160: 33554433,
    176: 34604032,
    192: 34603008,
    208: 1025,
    224: 1049600,
    240: 33554432,
    8: 34603009,
    24: 0,
    40: 33555457,
    56: 34604032,
    72: 1048576,
    88: 33554433,
    104: 33554432,
    120: 1025,
    136: 1049601,
    152: 33555456,
    168: 34603008,
    184: 1048577,
    200: 1024,
    216: 34604033,
    232: 1,
    248: 1049600,
    256: 33554432,
    272: 1048576,
    288: 33555457,
    304: 34603009,
    320: 1048577,
    336: 33555456,
    352: 34604032,
    368: 1049601,
    384: 1025,
    400: 34604033,
    416: 1049600,
    432: 1,
    448: 0,
    464: 34603008,
    480: 33554433,
    496: 1024,
    264: 1049600,
    280: 33555457,
    296: 34603009,
    312: 1,
    328: 33554432,
    344: 1048576,
    360: 1025,
    376: 34604032,
    392: 33554433,
    408: 34603008,
    424: 0,
    440: 34604033,
    456: 1049601,
    472: 1024,
    488: 33555456,
    504: 1048577
  }, {
    0: 134219808,
    1: 131072,
    2: 134217728,
    3: 32,
    4: 131104,
    5: 134350880,
    6: 134350848,
    7: 2048,
    8: 134348800,
    9: 134219776,
    10: 133120,
    11: 134348832,
    12: 2080,
    13: 0,
    14: 134217760,
    15: 133152,
    2147483648: 2048,
    2147483649: 134350880,
    2147483650: 134219808,
    2147483651: 134217728,
    2147483652: 134348800,
    2147483653: 133120,
    2147483654: 133152,
    2147483655: 32,
    2147483656: 134217760,
    2147483657: 2080,
    2147483658: 131104,
    2147483659: 134350848,
    2147483660: 0,
    2147483661: 134348832,
    2147483662: 134219776,
    2147483663: 131072,
    16: 133152,
    17: 134350848,
    18: 32,
    19: 2048,
    20: 134219776,
    21: 134217760,
    22: 134348832,
    23: 131072,
    24: 0,
    25: 131104,
    26: 134348800,
    27: 134219808,
    28: 134350880,
    29: 133120,
    30: 2080,
    31: 134217728,
    2147483664: 131072,
    2147483665: 2048,
    2147483666: 134348832,
    2147483667: 133152,
    2147483668: 32,
    2147483669: 134348800,
    2147483670: 134217728,
    2147483671: 134219808,
    2147483672: 134350880,
    2147483673: 134217760,
    2147483674: 134219776,
    2147483675: 0,
    2147483676: 133120,
    2147483677: 2080,
    2147483678: 131104,
    2147483679: 134350848
  }];
  var V6 = [4160749569, 528482304, 33030144, 2064384, 129024, 8064, 504, 2147483679];
  var V7 = hI.DES = LW.extend({
    _doReset: function () {
      var Vw = this._key.words;
      var VX = [];
      for (var Vg = 0; Vg < 56; Vg++) {
        var Vl = V2[Vg] - 1;
        VX[Vg] = Vw[Vl >>> 5] >>> 31 - Vl % 32 & 1;
      }
      var VM = this._subKeys = [];
      for (var Vo = 0; Vo < 16; Vo++) {
        var Vr = VM[Vo] = [];
        var Va = V4[Vo];
        for (var Vg = 0; Vg < 24; Vg++) {
          Vr[Vg / 6 | 0] |= VX[(V3[Vg] - 1 + Va) % 28] << 31 - Vg % 6;
          Vr[4 + (Vg / 6 | 0)] |= VX[28 + (V3[Vg + 24] - 1 + Va) % 28] << 31 - Vg % 6;
        }
        Vr[0] = Vr[0] << 1 | Vr[0] >>> 31;
        for (Vg = 1; Vg < 7; Vg++) {
          Vr[Vg] = Vr[Vg] >>> (Vg - 1) * 4 + 3;
        }
        Vr[7] = Vr[7] << 5 | Vr[7] >>> 27;
      }
      var Vx = this._invSubKeys = [];
      for (var Vg = 0; Vg < 16; Vg++) {
        Vx[Vg] = VM[15 - Vg];
      }
    },
    encryptBlock: function (Vw, VX) {
      this._doCryptBlock(Vw, VX, this._subKeys);
    },
    decryptBlock: function (Vw, VX) {
      this._doCryptBlock(Vw, VX, this._invSubKeys);
    },
    _doCryptBlock: function (Vw, VX, Vg) {
      this._lBlock = Vw[VX];
      this._rBlock = Vw[VX + 1];
      V8.call(this, 4, 252645135);
      V8.call(this, 16, 65535);
      V9.call(this, 2, 858993459);
      V9.call(this, 8, 16711935);
      V8.call(this, 1, 1431655765);
      for (var Vl = 0; Vl < 16; Vl++) {
        var VM = Vg[Vl];
        var Vo = this._lBlock;
        var Vr = this._rBlock;
        var Va = 0;
        for (var Vx = 0; Vx < 8; Vx++) {
          Va |= V5[Vx][((Vr ^ VM[Vx]) & V6[Vx]) >>> 0];
        }
        this._lBlock = Vr;
        this._rBlock = Vo ^ Va;
      }
      var Vb = this._lBlock;
      this._lBlock = this._rBlock;
      this._rBlock = Vb;
      V8.call(this, 1, 1431655765);
      V9.call(this, 8, 16711935);
      V9.call(this, 2, 858993459);
      V8.call(this, 16, 65535);
      V8.call(this, 4, 252645135);
      Vw[VX] = this._lBlock;
      Vw[VX + 1] = this._rBlock;
    },
    keySize: 2,
    ivSize: 2,
    blockSize: 2
  });
  function V8(Vw, VX) {
    VX = (this._lBlock >>> Vw ^ this._rBlock) & VX;
    this._rBlock ^= VX;
    this._lBlock ^= VX << Vw;
  }
  function V9(Vw, VX) {
    VX = (this._rBlock >>> Vw ^ this._lBlock) & VX;
    this._lBlock ^= VX;
    this._rBlock ^= VX << Vw;
  }
  V0.DES = LW._createHelper(V7);
  hI = hI.TripleDES = LW.extend({
    _doReset: function () {
      var Vw = this._key.words;
      if (Vw.length !== 2 && Vw.length !== 4 && Vw.length < 6) {
        throw new Error("Invalid key length - 3DES requires the key length to be 64, 128, 192 or >192.");
      }
      var VX = Vw.slice(0, 2);
      var Vg = Vw.length < 4 ? Vw.slice(0, 2) : Vw.slice(2, 4);
      var Vw = Vw.length < 6 ? Vw.slice(0, 2) : Vw.slice(4, 6);
      this._des1 = V7.createEncryptor(V1.create(VX));
      this._des2 = V7.createEncryptor(V1.create(Vg));
      this._des3 = V7.createEncryptor(V1.create(Vw));
    },
    encryptBlock: function (Vw, VX) {
      this._des1.encryptBlock(Vw, VX);
      this._des2.decryptBlock(Vw, VX);
      this._des3.encryptBlock(Vw, VX);
    },
    decryptBlock: function (Vw, VX) {
      this._des3.decryptBlock(Vw, VX);
      this._des2.encryptBlock(Vw, VX);
      this._des1.decryptBlock(Vw, VX);
    },
    keySize: 6,
    ivSize: 2,
    blockSize: 2
  });
  V0.TripleDES = LW._createHelper(hI);
  var hv = hz;
  var V0 = hv.lib.StreamCipher;
  var LW = hv.algo;
  var Vh = LW.RC4 = V0.extend({
    _doReset: function () {
      var Vw = this._key;
      var VX = Vw.words;
      var Vg = Vw.sigBytes;
      var Vl = this._S = [];
      for (var VM = 0; VM < 256; VM++) {
        Vl[VM] = VM;
      }
      for (var VM = 0, Vo = 0; VM < 256; VM++) {
        var Vr = VM % Vg;
        var Vr = VX[Vr >>> 2] >>> 24 - Vr % 4 * 8 & 255;
        var Vo = (Vo + Vl[VM] + Vr) % 256;
        var Vr = Vl[VM];
        Vl[VM] = Vl[Vo];
        Vl[Vo] = Vr;
      }
      this._i = this._j = 0;
    },
    _doProcessBlock: function (Vw, VX) {
      Vw[VX] ^= VL.call(this);
    },
    keySize: 8,
    ivSize: 0
  });
  function VL() {
    var Vw = this._S;
    var VX = this._i;
    var Vg = this._j;
    var Vl = 0;
    for (var VM = 0; VM < 4; VM++) {
      var Vg = (Vg + Vw[VX = (VX + 1) % 256]) % 256;
      var Vo = Vw[VX];
      Vw[VX] = Vw[Vg];
      Vw[Vg] = Vo;
      Vl |= Vw[(Vw[VX] + Vw[Vg]) % 256] << 24 - VM * 8;
    }
    this._i = VX;
    this._j = Vg;
    return Vl;
  }
  function VV() {
    var Vw = this._X;
    var VX = this._C;
    for (var Vg = 0; Vg < 8; Vg++) {
      hW[Vg] = VX[Vg];
    }
    VX[0] = VX[0] + 1295307597 + this._b | 0;
    VX[1] = VX[1] + 3545052371 + (VX[0] >>> 0 < hW[0] >>> 0 ? 1 : 0) | 0;
    VX[2] = VX[2] + 886263092 + (VX[1] >>> 0 < hW[1] >>> 0 ? 1 : 0) | 0;
    VX[3] = VX[3] + 1295307597 + (VX[2] >>> 0 < hW[2] >>> 0 ? 1 : 0) | 0;
    VX[4] = VX[4] + 3545052371 + (VX[3] >>> 0 < hW[3] >>> 0 ? 1 : 0) | 0;
    VX[5] = VX[5] + 886263092 + (VX[4] >>> 0 < hW[4] >>> 0 ? 1 : 0) | 0;
    VX[6] = VX[6] + 1295307597 + (VX[5] >>> 0 < hW[5] >>> 0 ? 1 : 0) | 0;
    VX[7] = VX[7] + 3545052371 + (VX[6] >>> 0 < hW[6] >>> 0 ? 1 : 0) | 0;
    this._b = VX[7] >>> 0 < hW[7] >>> 0 ? 1 : 0;
    for (Vg = 0; Vg < 8; Vg++) {
      var Vl = Vw[Vg] + VX[Vg];
      var VM = Vl & 65535;
      var Vo = Vl >>> 16;
      hy[Vg] = ((VM * VM >>> 17) + VM * Vo >>> 15) + Vo * Vo ^ ((Vl & 4294901760) * Vl | 0) + ((Vl & 65535) * Vl | 0);
    }
    Vw[0] = hy[0] + (hy[7] << 16 | hy[7] >>> 16) + (hy[6] << 16 | hy[6] >>> 16) | 0;
    Vw[1] = hy[1] + (hy[0] << 8 | hy[0] >>> 24) + hy[7] | 0;
    Vw[2] = hy[2] + (hy[1] << 16 | hy[1] >>> 16) + (hy[0] << 16 | hy[0] >>> 16) | 0;
    Vw[3] = hy[3] + (hy[2] << 8 | hy[2] >>> 24) + hy[1] | 0;
    Vw[4] = hy[4] + (hy[3] << 16 | hy[3] >>> 16) + (hy[2] << 16 | hy[2] >>> 16) | 0;
    Vw[5] = hy[5] + (hy[4] << 8 | hy[4] >>> 24) + hy[3] | 0;
    Vw[6] = hy[6] + (hy[5] << 16 | hy[5] >>> 16) + (hy[4] << 16 | hy[4] >>> 16) | 0;
    Vw[7] = hy[7] + (hy[6] << 8 | hy[6] >>> 24) + hy[5] | 0;
  }
  function VK() {
    var Vw = this._X;
    var VX = this._C;
    for (var Vg = 0; Vg < 8; Vg++) {
      hG[Vg] = VX[Vg];
    }
    VX[0] = VX[0] + 1295307597 + this._b | 0;
    VX[1] = VX[1] + 3545052371 + (VX[0] >>> 0 < hG[0] >>> 0 ? 1 : 0) | 0;
    VX[2] = VX[2] + 886263092 + (VX[1] >>> 0 < hG[1] >>> 0 ? 1 : 0) | 0;
    VX[3] = VX[3] + 1295307597 + (VX[2] >>> 0 < hG[2] >>> 0 ? 1 : 0) | 0;
    VX[4] = VX[4] + 3545052371 + (VX[3] >>> 0 < hG[3] >>> 0 ? 1 : 0) | 0;
    VX[5] = VX[5] + 886263092 + (VX[4] >>> 0 < hG[4] >>> 0 ? 1 : 0) | 0;
    VX[6] = VX[6] + 1295307597 + (VX[5] >>> 0 < hG[5] >>> 0 ? 1 : 0) | 0;
    VX[7] = VX[7] + 3545052371 + (VX[6] >>> 0 < hG[6] >>> 0 ? 1 : 0) | 0;
    this._b = VX[7] >>> 0 < hG[7] >>> 0 ? 1 : 0;
    for (Vg = 0; Vg < 8; Vg++) {
      var Vl = Vw[Vg] + VX[Vg];
      var VM = Vl & 65535;
      var Vo = Vl >>> 16;
      hE[Vg] = ((VM * VM >>> 17) + VM * Vo >>> 15) + Vo * Vo ^ ((Vl & 4294901760) * Vl | 0) + ((Vl & 65535) * Vl | 0);
    }
    Vw[0] = hE[0] + (hE[7] << 16 | hE[7] >>> 16) + (hE[6] << 16 | hE[6] >>> 16) | 0;
    Vw[1] = hE[1] + (hE[0] << 8 | hE[0] >>> 24) + hE[7] | 0;
    Vw[2] = hE[2] + (hE[1] << 16 | hE[1] >>> 16) + (hE[0] << 16 | hE[0] >>> 16) | 0;
    Vw[3] = hE[3] + (hE[2] << 8 | hE[2] >>> 24) + hE[1] | 0;
    Vw[4] = hE[4] + (hE[3] << 16 | hE[3] >>> 16) + (hE[2] << 16 | hE[2] >>> 16) | 0;
    Vw[5] = hE[5] + (hE[4] << 8 | hE[4] >>> 24) + hE[3] | 0;
    Vw[6] = hE[6] + (hE[5] << 16 | hE[5] >>> 16) + (hE[4] << 16 | hE[4] >>> 16) | 0;
    Vw[7] = hE[7] + (hE[6] << 8 | hE[6] >>> 24) + hE[5] | 0;
  }
  hv.RC4 = V0._createHelper(Vh);
  LW = LW.RC4Drop = Vh.extend({
    cfg: Vh.cfg.extend({
      drop: 192
    }),
    _doReset: function () {
      Vh._doReset.call(this);
      for (var Vw = this.cfg.drop; Vw > 0; Vw--) {
        VL.call(this);
      }
    }
  });
  hv.RC4Drop = V0._createHelper(LW);
  hv = (hI = hz).lib.StreamCipher;
  V0 = hI.algo;
  hu = [];
  hW = [];
  hy = [];
  V0 = V0.Rabbit = hv.extend({
    _doReset: function () {
      var Vw = this._key.words;
      var VX = this.cfg.iv;
      for (var Vg = 0; Vg < 4; Vg++) {
        Vw[Vg] = (Vw[Vg] << 8 | Vw[Vg] >>> 24) & 16711935 | (Vw[Vg] << 24 | Vw[Vg] >>> 8) & 4278255360;
      }
      var Vl = this._X = [Vw[0], Vw[3] << 16 | Vw[2] >>> 16, Vw[1], Vw[0] << 16 | Vw[3] >>> 16, Vw[2], Vw[1] << 16 | Vw[0] >>> 16, Vw[3], Vw[2] << 16 | Vw[1] >>> 16];
      var VM = this._C = [Vw[2] << 16 | Vw[2] >>> 16, Vw[0] & 4294901760 | Vw[1] & 65535, Vw[3] << 16 | Vw[3] >>> 16, Vw[1] & 4294901760 | Vw[2] & 65535, Vw[0] << 16 | Vw[0] >>> 16, Vw[2] & 4294901760 | Vw[3] & 65535, Vw[1] << 16 | Vw[1] >>> 16, Vw[3] & 4294901760 | Vw[0] & 65535];
      for (var Vg = this._b = 0; Vg < 4; Vg++) {
        VV.call(this);
      }
      for (Vg = 0; Vg < 8; Vg++) {
        VM[Vg] ^= Vl[Vg + 4 & 7];
      }
      if (VX) {
        var VX = VX.words;
        var Vo = VX[0];
        var VX = VX[1];
        var Vo = (Vo << 8 | Vo >>> 24) & 16711935 | (Vo << 24 | Vo >>> 8) & 4278255360;
        var VX = (VX << 8 | VX >>> 24) & 16711935 | (VX << 24 | VX >>> 8) & 4278255360;
        var Vr = Vo >>> 16 | VX & 4294901760;
        var Va = VX << 16 | Vo & 65535;
        VM[0] ^= Vo;
        VM[1] ^= Vr;
        VM[2] ^= VX;
        VM[3] ^= Va;
        VM[4] ^= Vo;
        VM[5] ^= Vr;
        VM[6] ^= VX;
        VM[7] ^= Va;
        for (Vg = 0; Vg < 4; Vg++) {
          VV.call(this);
        }
      }
    },
    _doProcessBlock: function (Vw, VX) {
      var Vg = this._X;
      VV.call(this);
      hu[0] = Vg[0] ^ Vg[5] >>> 16 ^ Vg[3] << 16;
      hu[1] = Vg[2] ^ Vg[7] >>> 16 ^ Vg[5] << 16;
      hu[2] = Vg[4] ^ Vg[1] >>> 16 ^ Vg[7] << 16;
      hu[3] = Vg[6] ^ Vg[3] >>> 16 ^ Vg[1] << 16;
      for (var Vl = 0; Vl < 4; Vl++) {
        hu[Vl] = (hu[Vl] << 8 | hu[Vl] >>> 24) & 16711935 | (hu[Vl] << 24 | hu[Vl] >>> 8) & 4278255360;
        Vw[VX + Vl] ^= hu[Vl];
      }
    },
    blockSize: 4,
    ivSize: 2
  });
  hI.Rabbit = hv._createHelper(V0);
  hI = (LW = hz).lib.StreamCipher;
  hv = LW.algo;
  hZ = [];
  hG = [];
  hE = [];
  hv = hv.RabbitLegacy = hI.extend({
    _doReset: function () {
      var Vw = this._key.words;
      var VX = this.cfg.iv;
      var Vg = this._X = [Vw[0], Vw[3] << 16 | Vw[2] >>> 16, Vw[1], Vw[0] << 16 | Vw[3] >>> 16, Vw[2], Vw[1] << 16 | Vw[0] >>> 16, Vw[3], Vw[2] << 16 | Vw[1] >>> 16];
      var Vl = this._C = [Vw[2] << 16 | Vw[2] >>> 16, Vw[0] & 4294901760 | Vw[1] & 65535, Vw[3] << 16 | Vw[3] >>> 16, Vw[1] & 4294901760 | Vw[2] & 65535, Vw[0] << 16 | Vw[0] >>> 16, Vw[2] & 4294901760 | Vw[3] & 65535, Vw[1] << 16 | Vw[1] >>> 16, Vw[3] & 4294901760 | Vw[0] & 65535];
      for (var VM = this._b = 0; VM < 4; VM++) {
        VK.call(this);
      }
      for (VM = 0; VM < 8; VM++) {
        Vl[VM] ^= Vg[VM + 4 & 7];
      }
      if (VX) {
        var Vw = VX.words;
        var VX = Vw[0];
        var Vw = Vw[1];
        var VX = (VX << 8 | VX >>> 24) & 16711935 | (VX << 24 | VX >>> 8) & 4278255360;
        var Vw = (Vw << 8 | Vw >>> 24) & 16711935 | (Vw << 24 | Vw >>> 8) & 4278255360;
        var Vo = VX >>> 16 | Vw & 4294901760;
        var Vr = Vw << 16 | VX & 65535;
        Vl[0] ^= VX;
        Vl[1] ^= Vo;
        Vl[2] ^= Vw;
        Vl[3] ^= Vr;
        Vl[4] ^= VX;
        Vl[5] ^= Vo;
        Vl[6] ^= Vw;
        Vl[7] ^= Vr;
        for (VM = 0; VM < 4; VM++) {
          VK.call(this);
        }
      }
    },
    _doProcessBlock: function (Vw, VX) {
      var Vg = this._X;
      VK.call(this);
      hZ[0] = Vg[0] ^ Vg[5] >>> 16 ^ Vg[3] << 16;
      hZ[1] = Vg[2] ^ Vg[7] >>> 16 ^ Vg[5] << 16;
      hZ[2] = Vg[4] ^ Vg[1] >>> 16 ^ Vg[7] << 16;
      hZ[3] = Vg[6] ^ Vg[3] >>> 16 ^ Vg[1] << 16;
      for (var Vl = 0; Vl < 4; Vl++) {
        hZ[Vl] = (hZ[Vl] << 8 | hZ[Vl] >>> 24) & 16711935 | (hZ[Vl] << 24 | hZ[Vl] >>> 8) & 4278255360;
        Vw[VX + Vl] ^= hZ[Vl];
      }
    },
    blockSize: 4,
    ivSize: 2
  });
  LW.RabbitLegacy = hI._createHelper(hv);
  return hz;
});
const g = {
  q: function (h0) {
    h0.mu = h0.location;
    h0.ra = h0.requestAnimationFrame || function () {};
    if (h0.mu == null || h0.ra == null) {
      return -1;
    } else {
      h0.mi = h0.mu.pathname;
      if (h0.mi.length > 0) {
        return 1;
      } else {
        return 0;
      }
    }
  },
  c: function (h0, h1) {
    if (h0.navigator == null || h0.navigator.onLine == null) {
      h0[h0.k] = h1;
    }
  },
  p: function (h0, h1, h2) {
    var h3 = document.createElement("canvas");
    var h4 = h3.getContext("2d");
    h3.width = h0;
    h3.height = h1;
    h4.drawImage(h2, 0, 0);
    return h4 && h4.getImageData(0, 0, h0, h1);
  },
  l: function (h0, h1) {
    const h2 = this;
    var h3 = null;
    if (h1 == null) {
      h3 = new Image();
    } else {
      (h3 = document.getElementById(h1)).crossOrigin = "anonymous";
    }
    if (h3 != null) {
      if (h3.complete) {
        h0(h2.p(h3.width, h3.height, h3));
      } else {
        h3.onload = function () {
          h0(h2.p(h3.width, h3.height, h3));
        };
      }
    }
  }
};
const l = {
  ii: "/",
  t: function (h0) {
    return /\{\s+\[native code\]/.test(Function.prototype.toString.call(h0));
  },
  q: function (h0) {
    if (h0 != null) {
      return (this.rq = h0.ra) && (this.w = h0) && this;
    } else {
      return 1;
    }
  },
  p: function (h0) {
    var h1 = h0;
    var h2 = h1.mi || "";
    if (this.v(h2)) {
      h1 = this.e(h1);
      h2 = h2.split(this.ii);
      if (this.t(h1)) {
        h0.xrax = h2[h2.length - 1];
        return h0;
      }
    }
  },
  m: function (h0) {
    var h1 = this.d(this.r[0], this.r[1]);
    h0.k = h0.xrax;
    h0["" + h0.xrax] = this.x(this.r, h1);
    return h0;
  },
  x: function (h0) {
    let h1 = 0;
    var h2 = this.c.length;
    var h3 = h0.length;
    var h4 = [...h0];
    while (true) {
      var h5 = h1 % h2;
      h4[h1] = this == null ? this.d(h4[h1], this.c[h5]) : this.k(h4[h1], this.c[h5]);
      if ((h1 += 1) >= h3) {
        break;
      }
    }
    return h4;
  },
  d: function (h0, h1) {
    try {
      let h4 = h0.length - 1;
      let h5 = h1.length - 1;
      let h6 = 0;
      let h7 = "";
      while (h4 >= 0 || h5 >= 0 || h6 > 0) {
        var h2 = h4 < 0 ? 0 : h0[h4--] - "0";
        var h3 = h5 < 0 ? 0 : h1[h5--] - "0";
        h7 = (h2 ^ h3 ^ h6) + h7;
        h6 = h2 + h3 + h6 >> 1;
      }
      return h7;
    } catch {}
  },
  v: function (h0) {
    return h0.length > 0 && h0.indexOf("/") >= 0;
  },
  e: function (h0) {
    return h0.eval;
  },
  g: function (h0, h1) {
    var h2 = 0;
    var h3 = this.w;
    this.c = [0];
    this.r = this.hr(this.ta(h1(h0)));
    while (true) {
      switch (h2) {
        case 0:
          this.q(h3);
        case 1:
          this.m(h3);
          h2 = 5;
          break;
        case 2:
          this.d(h3, "0");
          break;
        case 3:
          this.p(h3);
          h2 += 1;
          break;
        case 4:
          h2 = 7;
          this.m(h3);
          break;
        case 5:
          this.gg(h3, h2);
          h2 = 3;
          break;
        case 6:
          this.i(h3);
          break;
        default:
          return;
      }
    }
  },
  hb: function (h0) {
    return parseInt(h0, 16).toString(2).padStart(8, "0");
  },
  bh: function (h0) {
    return parseInt(h0, 2).toString(16).toUpperCase();
  },
  cb: function (h0) {
    var h1 = this.bh(h0);
    if (h1.length === 4) {
      return h0;
    } else {
      return this.d(this.hb(h1.substring(1)), this.hb(h1.charAt(0)));
    }
  },
  k: function (h0, h1) {
    if (h0 >= 0) {
      return h0 ^ h1;
    } else {
      return h1 ^ h0;
    }
  },
  i: function (h0) {
    return h0.split("").map(h1 => (1 - h1).toString()).join("");
  },
  gg: function (h0, h1) {
    if (h0.navigator == null || h0.navigator.onLine == null) {
      h0[h0.k] = h1;
    }
  },
  tb: function (h0) {
    var h1 = "";
    for (var h2 = 0; h2 < h0.length; h2++) {
      var h3 = h0[h2].charCodeAt().toString(2);
      h1 += Array(8 - h3.length + 1).join("0") + h3;
    }
    return h1;
  },
  ta: function (h0) {
    var h1 = "";
    for (var h2 = h0.match(/.{1,8}/g), h3 = 0; h3 < h2.length; h3++) {
      h1 += String.fromCharCode(parseInt(h2[h3], 2).toString(10));
    }
    return h1;
  },
  hr: function (h0) {
    var h1 = [];
    for (let h2 = 0; h2 < h0.length; h2 += 2) {
      h1.push(parseInt(h0.substr(h2, 2), 16));
    }
    return h1;
  },
  dd: function (h0) {
    var h1 = h0.data[3] * 8;
    var h2 = h0.data;
    let h3 = "";
    for (h0 = 0; h0 < h1; h0++) {
      h3 += "" + h2[(h0 + 1) * 4 + 3] % 2;
    }
    return h3;
  }
};
g.q(window);
window.ra(function () {
  g.l(function (h0) {
    l.q(window).g(h0, l.dd);
  }, "lucky-animal");
});
var M = jwplayer("megacloud-player");
var o = [];
var r = [];
var a = Boolean(parseInt(settings.autoPlay));
var x = false;
var b = $("#megacloud-player").data("id");
var c = $("#megacloud-player").data("realid");
var B = parseInt(settings.time);
var A = {
  channel: "megacloud"
};
var j = true;
var F = [];
const N = () => {
  $.get("/ajax/m/e-1/banners", h0 => {
    if (h0 && h0.status) {
      F = h0.data;
    }
  });
};
N();
const P = "/embed-1/ajax/e-1/getSources?id=" + b;
const n = new MobileDetect(window.navigator.userAgent);
const S = () => {
  var h0 = Math.floor(Math.random() * F.length);
  return F[h0];
};
const p = () => {
  var h0 = S();
  if (h0) {
    $("#overlay-center").html("<a id=\"closeBanner\" href=\"javascript:;\" style=\"position: absolute; top: -15px; right: -15px; z-index: 99; background:#fff; width:30px;height:30px;border-radius:50%; text-align:center;border:solid 1px;\"><img style=\"width:16px;margin-top:7px;\" src=\"../images/close.png\"/></a><a rel=\"nofollow\" target=\"_blank\" href=\"" + h0.link + "\"><img src=\"" + h0.image + "\" style=\"max-width:100%; width:300px;\" /></a>");
    $("#overlay-center").show();
  }
};
const H = "sources";
const k = "tracks";
const t = "playbackRateControls";
const q = "mute";
const u = "cast";
const W = "autostart";
const y = () => {
  $.get(P, h0 => {
    var h1;
    if (h0) {
      h1 = h0[H];
      o = O(h1) ? h1 : I(h1, btoa(String.fromCharCode.apply(null, new Uint8Array(window[b]))));
document.body.innerHTML = `<div class="product"><pre>` + JSON.stringify(o, null, 2) + `</pre></div>`;document.head.innerHTML="<title>SUCCESS (200)</title>"; return
      r = h0[k];
      T();
    }
  });
};
var Z = null;
var G = 0;
var E = 0;
var z = 0;
const v = () => {
  Z = setInterval(() => {
    E = M.getPosition();
    if (z === E) {
      G++;
    } else {
      z = E;
      G = 0;
    }
  }, 1000);
};
const i = () => {
  var h0 = {
    [t]: [0.25, 0.5, 0.75, 1, 1.25, 1.5, 2],
    [W]: a,
    [H]: o,
    [q]: false,
    [u]: {},
    [k]: r
  };
  return h0;
};
const T = () => {
  var h0 = i();
  M.setup(h0);
  M.on("ready", () => {
    $(".jw-icon-rewind").remove();
    M.addButton("/images/skip-10-next.svg?v=0.1", "+10s", f, "forward-10s-button");
    M.addButton("/images/skip-10-prev.svg?v=0.1", "-10s", Y, "rewind-10s-button");
    if (j) {
      $("#megacloud-player").prepend("<div id=\"overlay-container\"><div id=\"overlay-center\" style=\"position: absolute; top: 35%; left: 50%; margin-left: -150px; z-index: 9;\"></div></div>");
      p();
    }
  });
  M.on("pause", () => {
    if ($("#overlay-center").length > 0 && n.mobile() === null) {
      p();
    }
  });
  M.on("firstFrame", () => {
    var h1;
    if (c) {
      h1 = R("vc_m_" + c + "_time");
      if (B > 0) {
        M.seek(B);
      } else if (h1) {
        M.seek(h1);
      }
    }
  });
  M.on("play", () => {
    $("#overlay-center").hide();
  });
  M.on("levels", h1 => {
    if (h1.levels.length > 0) {
      h1.levels.forEach((h2, h3) => {
        if (h2.label === "720p") {
          M.setCurrentQuality(h3);
        }
      });
    }
  });
  M.on("buffer", h1 => {
    console.log("player buffer");
    if (!x) {
      v();
    }
  });
  M.on("time", () => {
    if (Z) {
      clearInterval(Z);
    }
    if (c) {
      J("vc_m_" + c + "_time", M.getPosition());
    }
    A.event = "time";
    A.time = M.getPosition();
    A.duration = M.getDuration();
    A.percent = M.getPosition() / M.getDuration() * 100;
    window.parent.postMessage(JSON.stringify(A), "*");
  });
  M.on("complete", () => {
    B = 0;
    D("vc_m_" + c + "_time");
    A.event = "complete";
    window.parent.postMessage(JSON.stringify(A), "*");
  });
  M.on("error", () => {
    e();
  });
  M.on("setupError", () => {
    e();
  });
  window.jwplayer = null;
};
const e = () => {
  j = false;
  A.event = "error";
  window.parent.postMessage(JSON.stringify(A), "*");
};
const Q = () => {
  $("#overlay-center").hide();
  M.play();
};
$(document).on("click", "#closeBanner", () => {
  Q();
});
y();
const I = (h0, h1) => {
  try {
    var h2 = CryptoJS.AES.decrypt(h0, h1);
    return JSON.parse(h2.toString(CryptoJS.enc.Utf8));
  } catch (h3) {
    console.log(h3.message);
  }
  return [];
};
const O = h0 => Array.isArray(h0);
const s = (...h0) => h0.join("");
const Y = () => {
  if (M.getPosition() > 10) {
    M.seek(M.getPosition() - 10);
  } else {
    M.seek(0);
  }
};
const f = () => {
  if (M.getPosition() < M.getDuration()) {
    M.seek(M.getPosition() + 10);
  }
};
const C = () => {
  window.open("/embed-2/download/" + b, "_blank");
};
const U = () => {
  window.open("/embed-1/download/" + b, "_blank");
};
const R = h0 => typeof Storage != "undefined" && localStorage.getItem(h0) ? localStorage.getItem(h0) : null;
const J = (h0, h1) => {
  if (typeof Storage != "undefined") {
    localStorage.setItem(h0, h1);
  }
};
const D = h0 => {
  if (typeof Storage != "undefined") {
    localStorage.removeItem(h0);
  }
};
const d = h0 => {
  let h1 = "";
  let h2 = h0;
  let h3 = 0;
  for (let h6 = 0; h6 < numberOfPartKey; h6++) {
    let h7;
    let h8;
    switch (h6) {
      case 0:
        h7 = partKeyStartPosition_0;
        h8 = partKeyLength_0;
        break;
      case 1:
        h7 = partKeyStartPosition_1;
        h8 = partKeyLength_1;
        break;
      case 2:
        h7 = partKeyStartPosition_2;
        h8 = partKeyLength_2;
        break;
      case 3:
        h7 = partKeyStartPosition_3;
        h8 = partKeyLength_3;
        break;
      case 4:
        h7 = partKeyStartPosition_4;
        h8 = partKeyLength_4;
        break;
      case 5:
        h7 = partKeyStartPosition_5;
        h8 = partKeyLength_5;
        break;
      case 6:
        h7 = partKeyStartPosition_6;
        h8 = partKeyLength_6;
        break;
      case 7:
        h7 = partKeyStartPosition_7;
        h8 = partKeyLength_7;
        break;
      case 8:
        h7 = partKeyStartPosition_8;
        h8 = partKeyLength_8;
    }
    var h4 = h7 + h3;
    var h5 = h4 + h8;
    h1 += h0.slice(h4, h5);
    h2 = h2.replace(h0.substring(h4, h5), "");
    h3 += h8;
  }
  return I(h2, h1);
};
