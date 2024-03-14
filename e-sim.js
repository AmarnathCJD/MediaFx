(function (R0, R1) {
  'use strict';

  if (typeof module == "object" && typeof module.exports == "object") {
    module.exports = R0.document ? R1(R0, true) : function (R2) {
      if (R2.document) {
        return R1(R2);
      }
      throw new Error("jQuery requires a window with a document");
    };
  } else {
    R1(R0);
  }
})(typeof window != "undefined" ? window : this, function (R0, R1) {
  'use strict';

  function R2(hZ) {
    return typeof hZ == "function" && typeof hZ.nodeType != "number";
  }
  function R3(hZ) {
    return hZ != null && hZ === hZ.window;
  }
  var R4 = [];
  var R5 = R0.document;
  var R6 = Object.getPrototypeOf;
  var R7 = R4.slice;
  var R8 = R4.concat;
  var R9 = R4.push;
  var RR = R4.indexOf;
  var Rj = {};
  var Rh = Rj.toString;
  var RH = Rj.hasOwnProperty;
  var RO = RH.toString;
  var Ro = RO.call(Object);
  var RA = {};
  var RF = {
    type: true,
    src: true,
    noModule: true
  };
  function RB(hZ, hy, hb) {
    var hT;
    var hq = (hy = hy || R5).createElement("script");
    hq.text = hZ;
    if (hb) {
      for (hT in RF) {
        if (hb[hT]) {
          hq[hT] = hb[hT];
        }
      }
    }
    hy.head.appendChild(hq).parentNode.removeChild(hq);
  }
  function RY(hZ) {
    if (hZ == null) {
      return hZ + "";
    } else if (typeof hZ == "object" || typeof hZ == "function") {
      return Rj[Rh.call(hZ)] || "object";
    } else {
      return typeof hZ;
    }
  }
  function Rm(hZ, hy) {
    return new Rm.fn.init(hZ, hy);
  }
  var RC = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
  function Rn(hZ) {
    var hy = !!hZ && "length" in hZ && hZ.length;
    var hb = RY(hZ);
    return !R2(hZ) && !R3(hZ) && (hb === "array" || hy === 0 || typeof hy == "number" && hy > 0 && hy - 1 in hZ);
  }
  Rm.fn = Rm.prototype = {
    jquery: "3.3.1",
    constructor: Rm,
    length: 0,
    toArray: function () {
      return R7.call(this);
    },
    get: function (hZ) {
      if (hZ == null) {
        return R7.call(this);
      } else if (hZ < 0) {
        return this[hZ + this.length];
      } else {
        return this[hZ];
      }
    },
    pushStack: function (hZ) {
      hZ = Rm.merge(this.constructor(), hZ);
      hZ.prevObject = this;
      return hZ;
    },
    each: function (hZ) {
      return Rm.each(this, hZ);
    },
    map: function (hZ) {
      return this.pushStack(Rm.map(this, function (hy, hb) {
        return hZ.call(hy, hb, hy);
      }));
    },
    slice: function () {
      return this.pushStack(R7.apply(this, arguments));
    },
    first: function () {
      return this.eq(0);
    },
    last: function () {
      return this.eq(-1);
    },
    eq: function (hZ) {
      var hy = this.length;
      var hZ = +hZ + (hZ < 0 ? hy : 0);
      return this.pushStack(hZ >= 0 && hZ < hy ? [this[hZ]] : []);
    },
    end: function () {
      return this.prevObject || this.constructor();
    },
    push: R9,
    sort: R4.sort,
    splice: R4.splice
  };
  Rm.extend = Rm.fn.extend = function () {
    var hZ;
    var hy;
    var hb;
    var hT;
    var hq;
    var hv = arguments[0] || {};
    var hE = 1;
    var hu = arguments.length;
    var ha = false;
    if (typeof hv == "boolean") {
      ha = hv;
      hv = arguments[hE] || {};
      hE++;
    }
    if (typeof hv != "object" && !R2(hv)) {
      hv = {};
    }
    if (hE === hu) {
      hv = this;
      hE--;
    }
    for (; hE < hu; hE++) {
      if ((hZ = arguments[hE]) != null) {
        for (hy in hZ) {
          hq = hv[hy];
          if (hv !== (hb = hZ[hy])) {
            if (ha && hb && (Rm.isPlainObject(hb) || (hT = Array.isArray(hb)))) {
              hq = hT ? (hT = false, hq && Array.isArray(hq) ? hq : []) : hq && Rm.isPlainObject(hq) ? hq : {};
              hv[hy] = Rm.extend(ha, hq, hb);
            } else if (hb !== undefined) {
              hv[hy] = hb;
            }
          }
        }
      }
    }
    return hv;
  };
  Rm.extend({
    expando: "jQuery" + ("3.3.1" + Math.random()).replace(/\D/g, ""),
    isReady: true,
    error: function (hZ) {
      throw new Error(hZ);
    },
    noop: function () {},
    isPlainObject: function (hZ) {
      return !!hZ && Rh.call(hZ) === "[object Object]" && (!(hZ = R6(hZ)) || typeof (hZ = RH.call(hZ, "constructor") && hZ.constructor) == "function" && RO.call(hZ) === Ro);
    },
    isEmptyObject: function (hZ) {
      for (var hy in hZ) {
        return false;
      }
      return true;
    },
    globalEval: function (hZ) {
      RB(hZ);
    },
    each: function (hZ, hy) {
      var hb;
      var hT = 0;
      if (Rn(hZ)) {
        for (hb = hZ.length; hT < hb && hy.call(hZ[hT], hT, hZ[hT]) !== false; hT++);
      } else {
        for (hT in hZ) {
          if (hy.call(hZ[hT], hT, hZ[hT]) === false) {
            break;
          }
        }
      }
      return hZ;
    },
    trim: function (hZ) {
      if (hZ == null) {
        return "";
      } else {
        return (hZ + "").replace(RC, "");
      }
    },
    makeArray: function (hZ, hy) {
      hy = hy || [];
      if (hZ != null) {
        if (Rn(Object(hZ))) {
          Rm.merge(hy, typeof hZ == "string" ? [hZ] : hZ);
        } else {
          R9.call(hy, hZ);
        }
      }
      return hy;
    },
    inArray: function (hZ, hy, hb) {
      if (hy == null) {
        return -1;
      } else {
        return RR.call(hy, hZ, hb);
      }
    },
    merge: function (hZ, hy) {
      for (var hb = +hy.length, hT = 0, hq = hZ.length; hT < hb; hT++) {
        hZ[hq++] = hy[hT];
      }
      hZ.length = hq;
      return hZ;
    },
    grep: function (hZ, hy, hb) {
      var hT = [];
      for (var hq = 0, hv = hZ.length, hE = !hb; hq < hv; hq++) {
        if (!hy(hZ[hq], hq) != hE) {
          hT.push(hZ[hq]);
        }
      }
      return hT;
    },
    map: function (hZ, hy, hb) {
      var hT;
      var hq;
      var hv = 0;
      var hE = [];
      if (Rn(hZ)) {
        for (hT = hZ.length; hv < hT; hv++) {
          if ((hq = hy(hZ[hv], hv, hb)) != null) {
            hE.push(hq);
          }
        }
      } else {
        for (hv in hZ) {
          if ((hq = hy(hZ[hv], hv, hb)) != null) {
            hE.push(hq);
          }
        }
      }
      return R8.apply([], hE);
    },
    guid: 1,
    support: RA
  });
  if (typeof Symbol == "function") {
    Rm.fn[Symbol.iterator] = R4[Symbol.iterator];
  }
  Rm.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (hZ, hy) {
    Rj["[object " + hy + "]"] = hy.toLowerCase();
  });
  function Rd(hZ, hy, hb) {
    var hT = [];
    var hq = hb !== undefined;
    while ((hZ = hZ[hy]) && hZ.nodeType !== 9) {
      if (hZ.nodeType === 1) {
        if (hq && Rm(hZ).is(hb)) {
          break;
        }
        hT.push(hZ);
      }
    }
    return hT;
  }
  function RQ(hZ, hy) {
    var hb = [];
    for (; hZ; hZ = hZ.nextSibling) {
      if (hZ.nodeType === 1 && hZ !== hy) {
        hb.push(hZ);
      }
    }
    return hb;
  }
  var R4 = function (hZ) {
    function hy(HU, HW, HL) {
      var Hz = "0x" + HW - 65536;
      if (Hz != Hz || HL) {
        return HW;
      } else if (Hz < 0) {
        return String.fromCharCode(65536 + Hz);
      } else {
        return String.fromCharCode(Hz >> 10 | 55296, Hz & 1023 | 56320);
      }
    }
    function hb(HU, HW) {
      if (HW) {
        if (HU === "\0") {
          return "�";
        } else {
          return HU.slice(0, -1) + "\\" + HU.charCodeAt(HU.length - 1).toString(16) + " ";
        }
      } else {
        return "\\" + HU;
      }
    }
    function hT() {
      hU();
    }
    var hq;
    var hv;
    var hE;
    var hu;
    var ha;
    var hP;
    var hS;
    var hJ;
    var hw;
    var hK;
    var hD;
    var hU;
    var hW;
    var hL;
    var hz;
    var hr;
    var hl;
    var hs;
    var H0;
    var H1 = "sizzle" + +new Date();
    var H2 = hZ.document;
    var H3 = 0;
    var H4 = 0;
    var H5 = HZ();
    var H6 = HZ();
    var H7 = HZ();
    function H8(HU, HW) {
      if (HU === HW) {
        hD = true;
      }
      return 0;
    }
    var H9 = {}.hasOwnProperty;
    var HR = [];
    var Hj = HR.pop;
    var Hh = HR.push;
    var HH = HR.push;
    var HO = HR.slice;
    function Ho(HU, HW) {
      for (var HL = 0, Hz = HU.length; HL < Hz; HL++) {
        if (HU[HL] === HW) {
          return HL;
        }
      }
      return -1;
    }
    var HA = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped";
    var HF = "[\\x20\\t\\r\\n\\f]";
    var HB = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+";
    var HY = "\\[" + HF + "*(" + HB + ")(?:" + HF + "*([*^$|!~]?=)" + HF + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + HB + "))|)" + HF + "*\\]";
    var Hm = ":(" + HB + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + HY + ")*)|.*)\\)|)";
    var HC = new RegExp(HF + "+", "g");
    var Hn = new RegExp("^" + HF + "+|((?:^|[^\\\\])(?:\\\\.)*)" + HF + "+$", "g");
    var Hd = new RegExp("^" + HF + "*," + HF + "*");
    var HQ = new RegExp("^" + HF + "*([>+~]|" + HF + ")" + HF + "*");
    var Hg = new RegExp("=" + HF + "*([^\\]'\"]*?)" + HF + "*\\]", "g");
    var Hp = new RegExp(Hm);
    var HN = new RegExp("^" + HB + "$");
    var HG = {
      ID: new RegExp("^#(" + HB + ")"),
      CLASS: new RegExp("^\\.(" + HB + ")"),
      TAG: new RegExp("^(" + HB + "|[*])"),
      ATTR: new RegExp("^" + HY),
      PSEUDO: new RegExp("^" + Hm),
      CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + HF + "*(even|odd|(([+-]|)(\\d*)n|)" + HF + "*(?:([+-]|)" + HF + "*(\\d+)|))" + HF + "*\\)|)", "i"),
      bool: new RegExp("^(?:" + HA + ")$", "i"),
      needsContext: new RegExp("^" + HF + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + HF + "*((?:-\\d)?\\d*)" + HF + "*\\)|)(?=[^-]|$)", "i")
    };
    var Hc = /^(?:input|select|textarea|button)$/i;
    var HV = /^h\d$/i;
    var Hk = /^[^{]+\{\s*\[native \w/;
    var Hx = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/;
    var HM = /[+~]/;
    var HI = new RegExp("\\\\([\\da-f]{1,6}" + HF + "?|(" + HF + ")|.)", "ig");
    var HX = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g;
    var Hi = HS(function (HU) {
      return HU.disabled === true && ("form" in HU || "label" in HU);
    }, {
      dir: "parentNode",
      next: "legend"
    });
    try {
      HH.apply(HR = HO.call(H2.childNodes), H2.childNodes);
      HR[H2.childNodes.length].nodeType;
    } catch (HU) {
      HH = {
        apply: HR.length ? function (HW, HL) {
          Hh.apply(HW, HO.call(HL));
        } : function (HW, HL) {
          for (var Hz = HW.length, Hr = 0; HW[Hz++] = HL[Hr++];);
          HW.length = Hz - 1;
        }
      };
    }
    function Hf(HW, HL, Hz, Hr) {
      var Hl;
      var Hs;
      var O0;
      var O1;
      var O2;
      var O3;
      var O4;
      var O5 = HL && HL.ownerDocument;
      var O6 = HL ? HL.nodeType : 9;
      Hz = Hz || [];
      if (typeof HW != "string" || !HW || O6 !== 1 && O6 !== 9 && O6 !== 11) {
        return Hz;
      }
      if (!Hr && ((HL ? HL.ownerDocument || HL : H2) !== hW && hU(HL), HL = HL || hW, hz)) {
        if (O6 !== 11 && (O2 = Hx.exec(HW))) {
          if (Hl = O2[1]) {
            if (O6 === 9) {
              if (!(O0 = HL.getElementById(Hl))) {
                return Hz;
              }
              if (O0.id === Hl) {
                Hz.push(O0);
                return Hz;
              }
            } else if (O5 && (O0 = O5.getElementById(Hl)) && H0(HL, O0) && O0.id === Hl) {
              Hz.push(O0);
              return Hz;
            }
          } else {
            if (O2[2]) {
              HH.apply(Hz, HL.getElementsByTagName(HW));
              return Hz;
            }
            if ((Hl = O2[3]) && hv.getElementsByClassName && HL.getElementsByClassName) {
              HH.apply(Hz, HL.getElementsByClassName(Hl));
              return Hz;
            }
          }
        }
        if (hv.qsa && !H7[HW + " "] && (!hr || !hr.test(HW))) {
          if (O6 !== 1) {
            O5 = HL;
            O4 = HW;
          } else if (HL.nodeName.toLowerCase() !== "object") {
            if (O1 = HL.getAttribute("id")) {
              O1 = O1.replace(HX, hb);
            } else {
              HL.setAttribute("id", O1 = H1);
            }
            Hs = (O3 = hP(HW)).length;
            while (Hs--) {
              O3[Hs] = "#" + O1 + " " + HP(O3[Hs]);
            }
            O4 = O3.join(",");
            O5 = HM.test(HW) && Hu(HL.parentNode) || HL;
          }
          if (O4) {
            try {
              HH.apply(Hz, O5.querySelectorAll(O4));
              return Hz;
            } catch (O7) {} finally {
              if (O1 === H1) {
                HL.removeAttribute("id");
              }
            }
          }
        }
      }
      return hJ(HW.replace(Hn, "$1"), HL, Hz, Hr);
    }
    function HZ() {
      var HW = [];
      function HL(Hz, Hr) {
        if (HW.push(Hz + " ") > hE.cacheLength) {
          delete HL[HW.shift()];
        }
        return HL[Hz + " "] = Hr;
      }
      return HL;
    }
    function Hy(HW) {
      HW[H1] = true;
      return HW;
    }
    function Hb(HW) {
      var HL = hW.createElement("fieldset");
      try {
        return !!HW(HL);
      } catch (Hz) {
        return false;
      } finally {
        if (HL.parentNode) {
          HL.parentNode.removeChild(HL);
        }
      }
    }
    function HT(HW, HL) {
      var Hz = HW.split("|");
      for (var Hr = Hz.length; Hr--;) {
        hE.attrHandle[Hz[Hr]] = HL;
      }
    }
    function Hq(HW, HL) {
      var Hz = HL && HW;
      var Hr = Hz && HW.nodeType === 1 && HL.nodeType === 1 && HW.sourceIndex - HL.sourceIndex;
      if (Hr) {
        return Hr;
      }
      if (Hz) {
        while (Hz = Hz.nextSibling) {
          if (Hz === HL) {
            return -1;
          }
        }
      }
      if (HW) {
        return 1;
      } else {
        return -1;
      }
    }
    function Hv(HW) {
      return function (HL) {
        if ("form" in HL) {
          if (HL.parentNode && HL.disabled === false) {
            if ("label" in HL) {
              if ("label" in HL.parentNode) {
                return HL.parentNode.disabled === HW;
              } else {
                return HL.disabled === HW;
              }
            } else {
              return HL.isDisabled === HW || HL.isDisabled !== !HW && Hi(HL) === HW;
            }
          } else {
            return HL.disabled === HW;
          }
        } else {
          return "label" in HL && HL.disabled === HW;
        }
      };
    }
    function HE(HW) {
      return Hy(function (HL) {
        HL = +HL;
        return Hy(function (Hz, Hr) {
          var Hl;
          var Hs = HW([], Hz.length, HL);
          for (var O0 = Hs.length; O0--;) {
            if (Hz[Hl = Hs[O0]]) {
              Hz[Hl] = !(Hr[Hl] = Hz[Hl]);
            }
          }
        });
      });
    }
    function Hu(HW) {
      return HW && HW.getElementsByTagName !== undefined && HW;
    }
    hv = Hf.support = {};
    ha = Hf.isXML = function (HW) {
      HW = HW && (HW.ownerDocument || HW).documentElement;
      return !!HW && HW.nodeName !== "HTML";
    };
    hU = Hf.setDocument = function (HW) {
      var HW = HW ? HW.ownerDocument || HW : H2;
      if (HW !== hW && HW.nodeType === 9 && HW.documentElement) {
        hL = (hW = HW).documentElement;
        hz = !ha(hW);
        if (H2 !== hW && (HW = hW.defaultView) && HW.top !== HW) {
          if (HW.addEventListener) {
            HW.addEventListener("unload", hT, false);
          } else if (HW.attachEvent) {
            HW.attachEvent("onunload", hT);
          }
        }
        hv.attributes = Hb(function (HL) {
          HL.className = "i";
          return !HL.getAttribute("className");
        });
        hv.getElementsByTagName = Hb(function (HL) {
          HL.appendChild(hW.createComment(""));
          return !HL.getElementsByTagName("*").length;
        });
        hv.getElementsByClassName = Hk.test(hW.getElementsByClassName);
        hv.getById = Hb(function (HL) {
          hL.appendChild(HL).id = H1;
          return !hW.getElementsByName || !hW.getElementsByName(H1).length;
        });
        if (hv.getById) {
          hE.filter.ID = function (HL) {
            var Hz = HL.replace(HI, hy);
            return function (Hr) {
              return Hr.getAttribute("id") === Hz;
            };
          };
          hE.find.ID = function (HL, Hz) {
            if (Hz.getElementById !== undefined && hz) {
              if (Hz = Hz.getElementById(HL)) {
                return [Hz];
              } else {
                return [];
              }
            }
          };
        } else {
          hE.filter.ID = function (HL) {
            var Hz = HL.replace(HI, hy);
            return function (Hr) {
              Hr = Hr.getAttributeNode !== undefined && Hr.getAttributeNode("id");
              return Hr && Hr.value === Hz;
            };
          };
          hE.find.ID = function (HL, Hz) {
            if (Hz.getElementById !== undefined && hz) {
              var Hr;
              var Hl;
              var Hs;
              var O0 = Hz.getElementById(HL);
              if (O0) {
                if ((Hr = O0.getAttributeNode("id")) && Hr.value === HL) {
                  return [O0];
                }
                Hs = Hz.getElementsByName(HL);
                Hl = 0;
                while (O0 = Hs[Hl++]) {
                  if ((Hr = O0.getAttributeNode("id")) && Hr.value === HL) {
                    return [O0];
                  }
                }
              }
              return [];
            }
          };
        }
        hE.find.TAG = hv.getElementsByTagName ? function (HL, Hz) {
          if (Hz.getElementsByTagName !== undefined) {
            return Hz.getElementsByTagName(HL);
          } else if (hv.qsa) {
            return Hz.querySelectorAll(HL);
          } else {
            return undefined;
          }
        } : function (HL, Hz) {
          var Hr;
          var Hl = [];
          var Hs = 0;
          var O0 = Hz.getElementsByTagName(HL);
          if (HL !== "*") {
            return O0;
          }
          while (Hr = O0[Hs++]) {
            if (Hr.nodeType === 1) {
              Hl.push(Hr);
            }
          }
          return Hl;
        };
        hE.find.CLASS = hv.getElementsByClassName && function (HL, Hz) {
          if (Hz.getElementsByClassName !== undefined && hz) {
            return Hz.getElementsByClassName(HL);
          }
        };
        hl = [];
        hr = [];
        if (hv.qsa = Hk.test(hW.querySelectorAll)) {
          Hb(function (HL) {
            hL.appendChild(HL).innerHTML = "<a id='" + H1 + "'></a><select id='" + H1 + "-\r\\' msallowcapture=''><option selected=''></option></select>";
            if (HL.querySelectorAll("[msallowcapture^='']").length) {
              hr.push("[*^$]=" + HF + "*(?:''|\"\")");
            }
            if (!HL.querySelectorAll("[selected]").length) {
              hr.push("\\[" + HF + "*(?:value|" + HA + ")");
            }
            if (!HL.querySelectorAll("[id~=" + H1 + "-]").length) {
              hr.push("~=");
            }
            if (!HL.querySelectorAll(":checked").length) {
              hr.push(":checked");
            }
            if (!HL.querySelectorAll("a#" + H1 + "+*").length) {
              hr.push(".#.+[+~]");
            }
          });
          Hb(function (HL) {
            HL.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
            var Hz = hW.createElement("input");
            Hz.setAttribute("type", "hidden");
            HL.appendChild(Hz).setAttribute("name", "D");
            if (HL.querySelectorAll("[name=d]").length) {
              hr.push("name" + HF + "*[*^$|!~]?=");
            }
            if (HL.querySelectorAll(":enabled").length !== 2) {
              hr.push(":enabled", ":disabled");
            }
            hL.appendChild(HL).disabled = true;
            if (HL.querySelectorAll(":disabled").length !== 2) {
              hr.push(":enabled", ":disabled");
            }
            HL.querySelectorAll("*,:x");
            hr.push(",.*:");
          });
        }
        if (hv.matchesSelector = Hk.test(hs = hL.matches || hL.webkitMatchesSelector || hL.mozMatchesSelector || hL.oMatchesSelector || hL.msMatchesSelector)) {
          Hb(function (HL) {
            hv.disconnectedMatch = hs.call(HL, "*");
            hs.call(HL, "[s!='']:x");
            hl.push("!=", Hm);
          });
        }
        hr = hr.length && new RegExp(hr.join("|"));
        hl = hl.length && new RegExp(hl.join("|"));
        HW = Hk.test(hL.compareDocumentPosition);
        H0 = HW || Hk.test(hL.contains) ? function (HL, Hz) {
          var Hr = HL.nodeType === 9 ? HL.documentElement : HL;
          var Hz = Hz && Hz.parentNode;
          return HL === Hz || !!Hz && Hz.nodeType === 1 && !!(Hr.contains ? Hr.contains(Hz) : HL.compareDocumentPosition && HL.compareDocumentPosition(Hz) & 16);
        } : function (HL, Hz) {
          if (Hz) {
            while (Hz = Hz.parentNode) {
              if (Hz === HL) {
                return true;
              }
            }
          }
          return false;
        };
        H8 = HW ? function (HL, Hz) {
          var Hr;
          if (HL === Hz) {
            hD = true;
            return 0;
          } else {
            return !HL.compareDocumentPosition - !Hz.compareDocumentPosition || ((Hr = (HL.ownerDocument || HL) === (Hz.ownerDocument || Hz) ? HL.compareDocumentPosition(Hz) : 1) & 1 || !hv.sortDetached && Hz.compareDocumentPosition(HL) === Hr ? HL === hW || HL.ownerDocument === H2 && H0(H2, HL) ? -1 : Hz === hW || Hz.ownerDocument === H2 && H0(H2, Hz) ? 1 : hK ? Ho(hK, HL) - Ho(hK, Hz) : 0 : Hr & 4 ? -1 : 1);
          }
        } : function (HL, Hz) {
          if (HL === Hz) {
            hD = true;
            return 0;
          }
          var Hr;
          var Hl = 0;
          var Hs = HL.parentNode;
          var O0 = Hz.parentNode;
          var O1 = [HL];
          var O2 = [Hz];
          if (!Hs || !O0) {
            if (HL === hW) {
              return -1;
            } else if (Hz === hW) {
              return 1;
            } else if (Hs) {
              return -1;
            } else if (O0) {
              return 1;
            } else if (hK) {
              return Ho(hK, HL) - Ho(hK, Hz);
            } else {
              return 0;
            }
          }
          if (Hs === O0) {
            return Hq(HL, Hz);
          }
          for (Hr = HL; Hr = Hr.parentNode;) {
            O1.unshift(Hr);
          }
          for (Hr = Hz; Hr = Hr.parentNode;) {
            O2.unshift(Hr);
          }
          while (O1[Hl] === O2[Hl]) {
            Hl++;
          }
          if (Hl) {
            return Hq(O1[Hl], O2[Hl]);
          } else if (O1[Hl] === H2) {
            return -1;
          } else if (O2[Hl] === H2) {
            return 1;
          } else {
            return 0;
          }
        };
      }
      return hW;
    };
    Hf.matches = function (HW, HL) {
      return Hf(HW, null, null, HL);
    };
    Hf.matchesSelector = function (HW, HL) {
      if ((HW.ownerDocument || HW) !== hW) {
        hU(HW);
      }
      HL = HL.replace(Hg, "='$1']");
      if (hv.matchesSelector && hz && !H7[HL + " "] && (!hl || !hl.test(HL)) && (!hr || !hr.test(HL))) {
        try {
          var Hz = hs.call(HW, HL);
          if (Hz || hv.disconnectedMatch || HW.document && HW.document.nodeType !== 11) {
            return Hz;
          }
        } catch (Hr) {}
      }
      return Hf(HL, hW, null, [HW]).length > 0;
    };
    Hf.contains = function (HW, HL) {
      if ((HW.ownerDocument || HW) !== hW) {
        hU(HW);
      }
      return H0(HW, HL);
    };
    Hf.attr = function (HW, HL) {
      if ((HW.ownerDocument || HW) !== hW) {
        hU(HW);
      }
      var Hz = hE.attrHandle[HL.toLowerCase()];
      var Hz = Hz && H9.call(hE.attrHandle, HL.toLowerCase()) ? Hz(HW, HL, !hz) : undefined;
      if (Hz !== undefined) {
        return Hz;
      } else if (hv.attributes || !hz) {
        return HW.getAttribute(HL);
      } else if ((Hz = HW.getAttributeNode(HL)) && Hz.specified) {
        return Hz.value;
      } else {
        return null;
      }
    };
    Hf.escape = function (HW) {
      return (HW + "").replace(HX, hb);
    };
    Hf.error = function (HW) {
      throw new Error("Syntax error, unrecognized expression: " + HW);
    };
    Hf.uniqueSort = function (HW) {
      var HL;
      var Hz = [];
      var Hr = 0;
      var Hl = 0;
      hD = !hv.detectDuplicates;
      hK = !hv.sortStable && HW.slice(0);
      HW.sort(H8);
      if (hD) {
        while (HL = HW[Hl++]) {
          if (HL === HW[Hl]) {
            Hr = Hz.push(Hl);
          }
        }
        while (Hr--) {
          HW.splice(Hz[Hr], 1);
        }
      }
      hK = null;
      return HW;
    };
    hu = Hf.getText = function (HW) {
      var HL;
      var Hz = "";
      var Hr = 0;
      var Hl = HW.nodeType;
      if (Hl) {
        if (Hl === 1 || Hl === 9 || Hl === 11) {
          if (typeof HW.textContent == "string") {
            return HW.textContent;
          }
          for (HW = HW.firstChild; HW; HW = HW.nextSibling) {
            Hz += hu(HW);
          }
        } else if (Hl === 3 || Hl === 4) {
          return HW.nodeValue;
        }
      } else {
        while (HL = HW[Hr++]) {
          Hz += hu(HL);
        }
      }
      return Hz;
    };
    (hE = Hf.selectors = {
      cacheLength: 50,
      createPseudo: Hy,
      match: HG,
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
        ATTR: function (HW) {
          HW[1] = HW[1].replace(HI, hy);
          HW[3] = (HW[3] || HW[4] || HW[5] || "").replace(HI, hy);
          if (HW[2] === "~=") {
            HW[3] = " " + HW[3] + " ";
          }
          return HW.slice(0, 4);
        },
        CHILD: function (HW) {
          HW[1] = HW[1].toLowerCase();
          if (HW[1].slice(0, 3) === "nth") {
            if (!HW[3]) {
              Hf.error(HW[0]);
            }
            HW[4] = +(HW[4] ? HW[5] + (HW[6] || 1) : (HW[3] === "even" || HW[3] === "odd") * 2);
            HW[5] = +(HW[7] + HW[8] || HW[3] === "odd");
          } else if (HW[3]) {
            Hf.error(HW[0]);
          }
          return HW;
        },
        PSEUDO: function (HW) {
          var HL;
          var Hz = !HW[6] && HW[2];
          if (HG.CHILD.test(HW[0])) {
            return null;
          } else {
            if (HW[3]) {
              HW[2] = HW[4] || HW[5] || "";
            } else if (Hz && Hp.test(Hz) && (HL = (HL = hP(Hz, true)) && Hz.indexOf(")", Hz.length - HL) - Hz.length)) {
              HW[0] = HW[0].slice(0, HL);
              HW[2] = Hz.slice(0, HL);
            }
            return HW.slice(0, 3);
          }
        }
      },
      filter: {
        TAG: function (HW) {
          var HL = HW.replace(HI, hy).toLowerCase();
          if (HW === "*") {
            return function () {
              return true;
            };
          } else {
            return function (Hz) {
              return Hz.nodeName && Hz.nodeName.toLowerCase() === HL;
            };
          }
        },
        CLASS: function (HW) {
          var HL = H5[HW + " "];
          return HL || (HL = new RegExp("(^|" + HF + ")" + HW + "(" + HF + "|$)")) && H5(HW, function (Hz) {
            return HL.test(typeof Hz.className == "string" && Hz.className || Hz.getAttribute !== undefined && Hz.getAttribute("class") || "");
          });
        },
        ATTR: function (HW, HL, Hz) {
          return function (Hr) {
            Hr = Hf.attr(Hr, HW);
            if (Hr == null) {
              return HL === "!=";
            } else {
              return !HL || (Hr += "", HL === "=" ? Hr === Hz : HL === "!=" ? Hr !== Hz : HL === "^=" ? Hz && Hr.indexOf(Hz) === 0 : HL === "*=" ? Hz && Hr.indexOf(Hz) > -1 : HL === "$=" ? Hz && Hr.slice(-Hz.length) === Hz : HL === "~=" ? (" " + Hr.replace(HC, " ") + " ").indexOf(Hz) > -1 : HL === "|=" && (Hr === Hz || Hr.slice(0, Hz.length + 1) === Hz + "-"));
            }
          };
        },
        CHILD: function (HW, HL, Hz, Hr, Hl) {
          var Hs = HW.slice(0, 3) !== "nth";
          var O0 = HW.slice(-4) !== "last";
          var O1 = HL === "of-type";
          if (Hr === 1 && Hl === 0) {
            return function (O2) {
              return !!O2.parentNode;
            };
          } else {
            return function (O2, O3, O4) {
              var O5;
              var O6;
              var O7;
              var O8;
              var O9;
              var OR;
              var Oj = Hs != O0 ? "nextSibling" : "previousSibling";
              var Oh = O2.parentNode;
              var OH = O1 && O2.nodeName.toLowerCase();
              var OO = !O4 && !O1;
              var Oo = false;
              if (Oh) {
                if (Hs) {
                  while (Oj) {
                    for (O8 = O2; O8 = O8[Oj];) {
                      if (O1 ? O8.nodeName.toLowerCase() === OH : O8.nodeType === 1) {
                        return false;
                      }
                    }
                    OR = Oj = HW === "only" && !OR && "nextSibling";
                  }
                  return true;
                }
                OR = [O0 ? Oh.firstChild : Oh.lastChild];
                if (O0 && OO) {
                  Oo = (O9 = (O5 = (O6 = (O7 = (O8 = Oh)[H1] || (O8[H1] = {}))[O8.uniqueID] || (O7[O8.uniqueID] = {}))[HW] || [])[0] === H3 && O5[1]) && O5[2];
                  O8 = O9 && Oh.childNodes[O9];
                  while (O8 = ++O9 && O8 && O8[Oj] || (Oo = O9 = 0, OR.pop())) {
                    if (O8.nodeType === 1 && ++Oo && O8 === O2) {
                      O6[HW] = [H3, O9, Oo];
                      break;
                    }
                  }
                } else if ((Oo = OO ? O9 = (O5 = (O6 = (O7 = (O8 = O2)[H1] || (O8[H1] = {}))[O8.uniqueID] || (O7[O8.uniqueID] = {}))[HW] || [])[0] === H3 && O5[1] : Oo) === false) {
                  while ((O8 = ++O9 && O8 && O8[Oj] || (Oo = O9 = 0, OR.pop())) && ((O1 ? O8.nodeName.toLowerCase() !== OH : O8.nodeType !== 1) || !++Oo || (OO && ((O6 = (O7 = O8[H1] ||= {})[O8.uniqueID] || (O7[O8.uniqueID] = {}))[HW] = [H3, Oo]), O8 !== O2)));
                }
                return (Oo -= Hl) === Hr || Oo % Hr == 0 && Oo / Hr >= 0;
              }
            };
          }
        },
        PSEUDO: function (HW, HL) {
          var Hz;
          var Hr = hE.pseudos[HW] || hE.setFilters[HW.toLowerCase()] || Hf.error("unsupported pseudo: " + HW);
          if (Hr[H1]) {
            return Hr(HL);
          } else if (Hr.length > 1) {
            Hz = [HW, HW, "", HL];
            if (hE.setFilters.hasOwnProperty(HW.toLowerCase())) {
              return Hy(function (Hl, Hs) {
                var O0;
                var O1 = Hr(Hl, HL);
                for (var O2 = O1.length; O2--;) {
                  Hl[O0 = Ho(Hl, O1[O2])] = !(Hs[O0] = O1[O2]);
                }
              });
            } else {
              return function (Hl) {
                return Hr(Hl, 0, Hz);
              };
            }
          } else {
            return Hr;
          }
        }
      },
      pseudos: {
        not: Hy(function (HW) {
          var HL = [];
          var Hz = [];
          var Hr = hS(HW.replace(Hn, "$1"));
          if (Hr[H1]) {
            return Hy(function (Hl, Hs, O0, O1) {
              var O2;
              var O3 = Hr(Hl, null, O1, []);
              for (var O4 = Hl.length; O4--;) {
                if (O2 = O3[O4]) {
                  Hl[O4] = !(Hs[O4] = O2);
                }
              }
            });
          } else {
            return function (Hl, Hs, O0) {
              HL[0] = Hl;
              Hr(HL, null, O0, Hz);
              HL[0] = null;
              return !Hz.pop();
            };
          }
        }),
        has: Hy(function (HW) {
          return function (HL) {
            return Hf(HW, HL).length > 0;
          };
        }),
        contains: Hy(function (HW) {
          HW = HW.replace(HI, hy);
          return function (HL) {
            return (HL.textContent || HL.innerText || hu(HL)).indexOf(HW) > -1;
          };
        }),
        lang: Hy(function (HW) {
          if (!HN.test(HW || "")) {
            Hf.error("unsupported lang: " + HW);
          }
          HW = HW.replace(HI, hy).toLowerCase();
          return function (HL) {
            var Hz;
            do {
              if (Hz = hz ? HL.lang : HL.getAttribute("xml:lang") || HL.getAttribute("lang")) {
                return (Hz = Hz.toLowerCase()) === HW || Hz.indexOf(HW + "-") === 0;
              }
            } while ((HL = HL.parentNode) && HL.nodeType === 1);
            return false;
          };
        }),
        target: function (HW) {
          var HL = hZ.location && hZ.location.hash;
          return HL && HL.slice(1) === HW.id;
        },
        root: function (HW) {
          return HW === hL;
        },
        focus: function (HW) {
          return HW === hW.activeElement && (!hW.hasFocus || hW.hasFocus()) && (!!HW.type || !!HW.href || !!~HW.tabIndex);
        },
        enabled: Hv(false),
        disabled: Hv(true),
        checked: function (HW) {
          var HL = HW.nodeName.toLowerCase();
          return HL === "input" && !!HW.checked || HL === "option" && !!HW.selected;
        },
        selected: function (HW) {
          if (HW.parentNode) {
            HW.parentNode.selectedIndex;
          }
          return HW.selected === true;
        },
        empty: function (HW) {
          for (HW = HW.firstChild; HW; HW = HW.nextSibling) {
            if (HW.nodeType < 6) {
              return false;
            }
          }
          return true;
        },
        parent: function (HW) {
          return !hE.pseudos.empty(HW);
        },
        header: function (HW) {
          return HV.test(HW.nodeName);
        },
        input: function (HW) {
          return Hc.test(HW.nodeName);
        },
        button: function (HW) {
          var HL = HW.nodeName.toLowerCase();
          return HL === "input" && HW.type === "button" || HL === "button";
        },
        text: function (HW) {
          return HW.nodeName.toLowerCase() === "input" && HW.type === "text" && ((HW = HW.getAttribute("type")) == null || HW.toLowerCase() === "text");
        },
        first: HE(function () {
          return [0];
        }),
        last: HE(function (HW, HL) {
          return [HL - 1];
        }),
        eq: HE(function (HW, HL, Hz) {
          return [Hz < 0 ? Hz + HL : Hz];
        }),
        even: HE(function (HW, HL) {
          for (var Hz = 0; Hz < HL; Hz += 2) {
            HW.push(Hz);
          }
          return HW;
        }),
        odd: HE(function (HW, HL) {
          for (var Hz = 1; Hz < HL; Hz += 2) {
            HW.push(Hz);
          }
          return HW;
        }),
        lt: HE(function (HW, HL, Hz) {
          for (var Hr = Hz < 0 ? Hz + HL : Hz; --Hr >= 0;) {
            HW.push(Hr);
          }
          return HW;
        }),
        gt: HE(function (HW, HL, Hz) {
          for (var Hr = Hz < 0 ? Hz + HL : Hz; ++Hr < HL;) {
            HW.push(Hr);
          }
          return HW;
        })
      }
    }).pseudos.nth = hE.pseudos.eq;
    for (hq in {
      radio: true,
      checkbox: true,
      file: true,
      password: true,
      image: true
    }) {
      hE.pseudos[hq] = function (HW) {
        return function (HL) {
          return HL.nodeName.toLowerCase() === "input" && HL.type === HW;
        };
      }(hq);
    }
    for (hq in {
      submit: true,
      reset: true
    }) {
      hE.pseudos[hq] = function (HW) {
        return function (HL) {
          var Hz = HL.nodeName.toLowerCase();
          return (Hz === "input" || Hz === "button") && HL.type === HW;
        };
      }(hq);
    }
    function Ha() {}
    function HP(HW) {
      for (var HL = 0, Hz = HW.length, Hr = ""; HL < Hz; HL++) {
        Hr += HW[HL].value;
      }
      return Hr;
    }
    function HS(HW, HL, Hz) {
      var Hr = HL.dir;
      var Hl = HL.next;
      var Hs = Hl || Hr;
      var O0 = Hz && Hs === "parentNode";
      var O1 = H4++;
      if (HL.first) {
        return function (O2, O3, O4) {
          while (O2 = O2[Hr]) {
            if (O2.nodeType === 1 || O0) {
              return HW(O2, O3, O4);
            }
          }
          return false;
        };
      } else {
        return function (O2, O3, O4) {
          var O5;
          var O6;
          var O7 = [H3, O1];
          if (O4) {
            while (O2 = O2[Hr]) {
              if ((O2.nodeType === 1 || O0) && HW(O2, O3, O4)) {
                return true;
              }
            }
          } else {
            while (O2 = O2[Hr]) {
              if (O2.nodeType === 1 || O0) {
                O6 = (O6 = O2[H1] ||= {})[O2.uniqueID] || (O6[O2.uniqueID] = {});
                if (Hl && Hl === O2.nodeName.toLowerCase()) {
                  O2 = O2[Hr] || O2;
                } else {
                  if ((O5 = O6[Hs]) && O5[0] === H3 && O5[1] === O1) {
                    return O7[2] = O5[2];
                  }
                  if ((O6[Hs] = O7)[2] = HW(O2, O3, O4)) {
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
    function HJ(HW) {
      if (HW.length > 1) {
        return function (HL, Hz, Hr) {
          for (var Hl = HW.length; Hl--;) {
            if (!HW[Hl](HL, Hz, Hr)) {
              return false;
            }
          }
          return true;
        };
      } else {
        return HW[0];
      }
    }
    function Hw(HW, HL, Hz, Hr, Hl) {
      var Hs;
      var O0 = [];
      for (var O1 = 0, O2 = HW.length, O3 = HL != null; O1 < O2; O1++) {
        if (!!(Hs = HW[O1]) && (!Hz || !!Hz(Hs, Hr, Hl))) {
          O0.push(Hs);
          if (O3) {
            HL.push(O1);
          }
        }
      }
      return O0;
    }
    function HK(HW, HL, Hz, Hr, Hl, Hs) {
      if (Hr && !Hr[H1]) {
        Hr = HK(Hr);
      }
      if (Hl && !Hl[H1]) {
        Hl = HK(Hl, Hs);
      }
      return Hy(function (O0, O1, O2, O3) {
        var O4;
        var O5;
        var O6;
        var O7 = [];
        var O8 = [];
        var O9 = O1.length;
        var OR = O0 || function (OH, OO, Oo) {
          for (var OA = 0, OF = OO.length; OA < OF; OA++) {
            Hf(OH, OO[OA], Oo);
          }
          return Oo;
        }(HL || "*", O2.nodeType ? [O2] : O2, []);
        var Oj = !HW || !O0 && HL ? OR : Hw(OR, O7, HW, O2, O3);
        var Oh = Hz ? Hl || (O0 ? HW : O9 || Hr) ? [] : O1 : Oj;
        if (Hz) {
          Hz(Oj, Oh, O2, O3);
        }
        if (Hr) {
          O4 = Hw(Oh, O8);
          Hr(O4, [], O2, O3);
          O5 = O4.length;
          while (O5--) {
            if (O6 = O4[O5]) {
              Oh[O8[O5]] = !(Oj[O8[O5]] = O6);
            }
          }
        }
        if (O0) {
          if (Hl || HW) {
            if (Hl) {
              O4 = [];
              O5 = Oh.length;
              while (O5--) {
                if (O6 = Oh[O5]) {
                  O4.push(Oj[O5] = O6);
                }
              }
              Hl(null, Oh = [], O4, O3);
            }
            for (O5 = Oh.length; O5--;) {
              if ((O6 = Oh[O5]) && (O4 = Hl ? Ho(O0, O6) : O7[O5]) > -1) {
                O0[O4] = !(O1[O4] = O6);
              }
            }
          }
        } else {
          Oh = Hw(Oh === O1 ? Oh.splice(O9, Oh.length) : Oh);
          if (Hl) {
            Hl(null, O1, Oh, O3);
          } else {
            HH.apply(O1, Oh);
          }
        }
      });
    }
    function HD(HW, HL) {
      function Hz(Hs, O0, O1, O2, O3) {
        var O4;
        var O5;
        var O6;
        var O7 = 0;
        var O8 = "0";
        var O9 = Hs && [];
        var OR = [];
        var Oj = hw;
        var Oh = Hs || Hl && hE.find.TAG("*", O3);
        var OH = H3 += Oj == null ? 1 : Math.random() || 0.1;
        var OO = Oh.length;
        for (O3 && (hw = O0 === hW || O0 || O3); O8 !== OO && (O4 = Oh[O8]) != null; O8++) {
          if (Hl && O4) {
            O5 = 0;
            if (!O0 && O4.ownerDocument !== hW) {
              hU(O4);
              O1 = !hz;
            }
            while (O6 = HW[O5++]) {
              if (O6(O4, O0 || hW, O1)) {
                O2.push(O4);
                break;
              }
            }
            if (O3) {
              H3 = OH;
            }
          }
          if (Hr && ((O4 = !O6 && O4) && O7--, Hs)) {
            O9.push(O4);
          }
        }
        O7 += O8;
        if (Hr && O8 !== O7) {
          for (O5 = 0; O6 = HL[O5++];) {
            O6(O9, OR, O0, O1);
          }
          if (Hs) {
            if (O7 > 0) {
              while (O8--) {
                if (!O9[O8] && !OR[O8]) {
                  OR[O8] = Hj.call(O2);
                }
              }
            }
            OR = Hw(OR);
          }
          HH.apply(O2, OR);
          if (O3 && !Hs && OR.length > 0 && O7 + HL.length > 1) {
            Hf.uniqueSort(O2);
          }
        }
        if (O3) {
          H3 = OH;
          hw = Oj;
        }
        return O9;
      }
      var Hr = HL.length > 0;
      var Hl = HW.length > 0;
      if (Hr) {
        return Hy(Hz);
      } else {
        return Hz;
      }
    }
    Ha.prototype = hE.filters = hE.pseudos;
    hE.setFilters = new Ha();
    hP = Hf.tokenize = function (HW, HL) {
      var Hz;
      var Hr;
      var Hl;
      var Hs;
      var O0;
      var O1;
      var O2;
      var O3 = H6[HW + " "];
      if (O3) {
        if (HL) {
          return 0;
        } else {
          return O3.slice(0);
        }
      }
      O0 = HW;
      O1 = [];
      O2 = hE.preFilter;
      while (O0) {
        if (!Hz || !!(Hr = Hd.exec(O0))) {
          if (Hr) {
            O0 = O0.slice(Hr[0].length) || O0;
          }
          O1.push(Hl = []);
        }
        Hz = false;
        if (Hr = HQ.exec(O0)) {
          Hz = Hr.shift();
          Hl.push({
            value: Hz,
            type: Hr[0].replace(Hn, " ")
          });
          O0 = O0.slice(Hz.length);
        }
        for (Hs in hE.filter) {
          if (!!(Hr = HG[Hs].exec(O0)) && (!O2[Hs] || !!(Hr = O2[Hs](Hr)))) {
            Hz = Hr.shift();
            Hl.push({
              value: Hz,
              type: Hs,
              matches: Hr
            });
            O0 = O0.slice(Hz.length);
          }
        }
        if (!Hz) {
          break;
        }
      }
      if (HL) {
        return O0.length;
      } else if (O0) {
        return Hf.error(HW);
      } else {
        return H6(HW, O1).slice(0);
      }
    };
    hS = Hf.compile = function (HW, HL) {
      var Hz;
      var Hr = [];
      var Hl = [];
      var Hs = H7[HW + " "];
      if (!Hs) {
        for (Hz = (HL = HL || hP(HW)).length; Hz--;) {
          ((Hs = function O0(O1) {
            var O2;
            var O3;
            var O4;
            for (var O5 = O1.length, O6 = hE.relative[O1[0].type], O7 = O6 || hE.relative[" "], O8 = O6 ? 1 : 0, O9 = HS(function (Oh) {
                return Oh === O2;
              }, O7, true), OR = HS(function (Oh) {
                return Ho(O2, Oh) > -1;
              }, O7, true), Oj = [function (Oh, OH, OO) {
                Oh = !O6 && (OO || OH !== hw) || ((O2 = OH).nodeType ? O9 : OR)(Oh, OH, OO);
                O2 = null;
                return Oh;
              }]; O8 < O5; O8++) {
              if (O3 = hE.relative[O1[O8].type]) {
                Oj = [HS(HJ(Oj), O3)];
              } else {
                if ((O3 = hE.filter[O1[O8].type].apply(null, O1[O8].matches))[H1]) {
                  for (O4 = ++O8; O4 < O5 && !hE.relative[O1[O4].type]; O4++);
                  return HK(O8 > 1 && HJ(Oj), O8 > 1 && HP(O1.slice(0, O8 - 1).concat({
                    value: O1[O8 - 2].type === " " ? "*" : ""
                  })).replace(Hn, "$1"), O3, O8 < O4 && O0(O1.slice(O8, O4)), O4 < O5 && O0(O1 = O1.slice(O4)), O4 < O5 && HP(O1));
                }
                Oj.push(O3);
              }
            }
            return HJ(Oj);
          }(HL[Hz]))[H1] ? Hr : Hl).push(Hs);
        }
        (Hs = H7(HW, HD(Hl, Hr))).selector = HW;
      }
      return Hs;
    };
    hJ = Hf.select = function (HW, HL, Hz, Hr) {
      var Hl;
      var Hs;
      var O0;
      var O1;
      var O2;
      var O3 = typeof HW == "function" && HW;
      var O4 = !Hr && hP(HW = O3.selector || HW);
      Hz = Hz || [];
      if (O4.length === 1) {
        if ((Hs = O4[0] = O4[0].slice(0)).length > 2 && (O0 = Hs[0]).type === "ID" && HL.nodeType === 9 && hz && hE.relative[Hs[1].type]) {
          if (!(HL = (hE.find.ID(O0.matches[0].replace(HI, hy), HL) || [])[0])) {
            return Hz;
          }
          if (O3) {
            HL = HL.parentNode;
          }
          HW = HW.slice(Hs.shift().value.length);
        }
        for (Hl = HG.needsContext.test(HW) ? 0 : Hs.length; Hl-- && (O0 = Hs[Hl], !hE.relative[O1 = O0.type]);) {
          if ((O2 = hE.find[O1]) && (Hr = O2(O0.matches[0].replace(HI, hy), HM.test(Hs[0].type) && Hu(HL.parentNode) || HL))) {
            Hs.splice(Hl, 1);
            if (HW = Hr.length && HP(Hs)) {
              break;
            }
            HH.apply(Hz, Hr);
            return Hz;
          }
        }
      }
      (O3 || hS(HW, O4))(Hr, HL, !hz, Hz, !HL || HM.test(HW) && Hu(HL.parentNode) || HL);
      return Hz;
    };
    hv.sortStable = H1.split("").sort(H8).join("") === H1;
    hv.detectDuplicates = !!hD;
    hU();
    hv.sortDetached = Hb(function (HW) {
      return HW.compareDocumentPosition(hW.createElement("fieldset")) & 1;
    });
    if (!Hb(function (HW) {
      HW.innerHTML = "<a href='#'></a>";
      return HW.firstChild.getAttribute("href") === "#";
    })) {
      HT("type|href|height|width", function (HW, HL, Hz) {
        if (!Hz) {
          return HW.getAttribute(HL, HL.toLowerCase() === "type" ? 1 : 2);
        }
      });
    }
    if (!hv.attributes || !Hb(function (HW) {
      HW.innerHTML = "<input/>";
      HW.firstChild.setAttribute("value", "");
      return HW.firstChild.getAttribute("value") === "";
    })) {
      HT("value", function (HW, HL, Hz) {
        if (!Hz && HW.nodeName.toLowerCase() === "input") {
          return HW.defaultValue;
        }
      });
    }
    if (!Hb(function (HW) {
      return HW.getAttribute("disabled") == null;
    })) {
      HT(HA, function (HW, HL, Hz) {
        if (!Hz) {
          if (HW[HL] === true) {
            return HL.toLowerCase();
          } else if ((Hz = HW.getAttributeNode(HL)) && Hz.specified) {
            return Hz.value;
          } else {
            return null;
          }
        }
      });
    }
    return Hf;
  }(R0);
  Rm.find = R4;
  Rm.expr = R4.selectors;
  Rm.expr[":"] = Rm.expr.pseudos;
  Rm.uniqueSort = Rm.unique = R4.uniqueSort;
  Rm.text = R4.getText;
  Rm.isXMLDoc = R4.isXML;
  Rm.contains = R4.contains;
  Rm.escapeSelector = R4.escape;
  var Rg = Rm.expr.match.needsContext;
  function Rp(hZ, hy) {
    return hZ.nodeName && hZ.nodeName.toLowerCase() === hy.toLowerCase();
  }
  var RN = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
  function RG(hZ, hy, hb) {
    if (R2(hy)) {
      return Rm.grep(hZ, function (hT, hq) {
        return !!hy.call(hT, hq, hT) !== hb;
      });
    } else if (hy.nodeType) {
      return Rm.grep(hZ, function (hT) {
        return hT === hy !== hb;
      });
    } else if (typeof hy != "string") {
      return Rm.grep(hZ, function (hT) {
        return RR.call(hy, hT) > -1 !== hb;
      });
    } else {
      return Rm.filter(hy, hZ, hb);
    }
  }
  Rm.filter = function (hZ, hy, hb) {
    var hT = hy[0];
    if (hb) {
      hZ = ":not(" + hZ + ")";
    }
    if (hy.length === 1 && hT.nodeType === 1) {
      if (Rm.find.matchesSelector(hT, hZ)) {
        return [hT];
      } else {
        return [];
      }
    } else {
      return Rm.find.matches(hZ, Rm.grep(hy, function (hq) {
        return hq.nodeType === 1;
      }));
    }
  };
  Rm.fn.extend({
    find: function (hZ) {
      var hy;
      var hb;
      var hT = this.length;
      var hq = this;
      if (typeof hZ != "string") {
        return this.pushStack(Rm(hZ).filter(function () {
          for (hy = 0; hy < hT; hy++) {
            if (Rm.contains(hq[hy], this)) {
              return true;
            }
          }
        }));
      }
      hb = this.pushStack([]);
      hy = 0;
      for (; hy < hT; hy++) {
        Rm.find(hZ, hq[hy], hb);
      }
      if (hT > 1) {
        return Rm.uniqueSort(hb);
      } else {
        return hb;
      }
    },
    filter: function (hZ) {
      return this.pushStack(RG(this, hZ || [], false));
    },
    not: function (hZ) {
      return this.pushStack(RG(this, hZ || [], true));
    },
    is: function (hZ) {
      return !!RG(this, typeof hZ == "string" && Rg.test(hZ) ? Rm(hZ) : hZ || [], false).length;
    }
  });
  var Rc;
  var RV = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
  (Rm.fn.init = function (hZ, hy, hb) {
    if (hZ) {
      hb = hb || Rc;
      if (typeof hZ != "string") {
        if (hZ.nodeType) {
          this[0] = hZ;
          this.length = 1;
          return this;
        } else if (R2(hZ)) {
          if (hb.ready !== undefined) {
            return hb.ready(hZ);
          } else {
            return hZ(Rm);
          }
        } else {
          return Rm.makeArray(hZ, this);
        }
      }
      if (!(hT = hZ[0] === "<" && hZ[hZ.length - 1] === ">" && hZ.length >= 3 ? [null, hZ, null] : RV.exec(hZ)) || !hT[1] && hy) {
        return (!hy || hy.jquery ? hy || hb : this.constructor(hy)).find(hZ);
      }
      if (hT[1]) {
        hy = hy instanceof Rm ? hy[0] : hy;
        Rm.merge(this, Rm.parseHTML(hT[1], hy && hy.nodeType ? hy.ownerDocument || hy : R5, true));
        if (RN.test(hT[1]) && Rm.isPlainObject(hy)) {
          for (var hT in hy) {
            if (R2(this[hT])) {
              this[hT](hy[hT]);
            } else {
              this.attr(hT, hy[hT]);
            }
          }
        }
      } else if (hb = R5.getElementById(hT[2])) {
        this[0] = hb;
        this.length = 1;
      }
    }
    return this;
  }).prototype = Rm.fn;
  Rc = Rm(R5);
  var Rk = /^(?:parents|prev(?:Until|All))/;
  var Rx = {
    children: true,
    contents: true,
    next: true,
    prev: true
  };
  function RM(hZ, hy) {
    while ((hZ = hZ[hy]) && hZ.nodeType !== 1);
    return hZ;
  }
  Rm.fn.extend({
    has: function (hZ) {
      var hy = Rm(hZ, this);
      var hb = hy.length;
      return this.filter(function () {
        for (var hT = 0; hT < hb; hT++) {
          if (Rm.contains(this, hy[hT])) {
            return true;
          }
        }
      });
    },
    closest: function (hZ, hy) {
      var hb;
      var hT = 0;
      var hq = this.length;
      var hv = [];
      var hE = typeof hZ != "string" && Rm(hZ);
      if (!Rg.test(hZ)) {
        for (; hT < hq; hT++) {
          for (hb = this[hT]; hb && hb !== hy; hb = hb.parentNode) {
            if (hb.nodeType < 11 && (hE ? hE.index(hb) > -1 : hb.nodeType === 1 && Rm.find.matchesSelector(hb, hZ))) {
              hv.push(hb);
              break;
            }
          }
        }
      }
      return this.pushStack(hv.length > 1 ? Rm.uniqueSort(hv) : hv);
    },
    index: function (hZ) {
      if (hZ) {
        if (typeof hZ == "string") {
          return RR.call(Rm(hZ), this[0]);
        } else {
          return RR.call(this, hZ.jquery ? hZ[0] : hZ);
        }
      } else if (this[0] && this[0].parentNode) {
        return this.first().prevAll().length;
      } else {
        return -1;
      }
    },
    add: function (hZ, hy) {
      return this.pushStack(Rm.uniqueSort(Rm.merge(this.get(), Rm(hZ, hy))));
    },
    addBack: function (hZ) {
      return this.add(hZ == null ? this.prevObject : this.prevObject.filter(hZ));
    }
  });
  Rm.each({
    parent: function (hZ) {
      hZ = hZ.parentNode;
      if (hZ && hZ.nodeType !== 11) {
        return hZ;
      } else {
        return null;
      }
    },
    parents: function (hZ) {
      return Rd(hZ, "parentNode");
    },
    parentsUntil: function (hZ, hy, hb) {
      return Rd(hZ, "parentNode", hb);
    },
    next: function (hZ) {
      return RM(hZ, "nextSibling");
    },
    prev: function (hZ) {
      return RM(hZ, "previousSibling");
    },
    nextAll: function (hZ) {
      return Rd(hZ, "nextSibling");
    },
    prevAll: function (hZ) {
      return Rd(hZ, "previousSibling");
    },
    nextUntil: function (hZ, hy, hb) {
      return Rd(hZ, "nextSibling", hb);
    },
    prevUntil: function (hZ, hy, hb) {
      return Rd(hZ, "previousSibling", hb);
    },
    siblings: function (hZ) {
      return RQ((hZ.parentNode || {}).firstChild, hZ);
    },
    children: function (hZ) {
      return RQ(hZ.firstChild);
    },
    contents: function (hZ) {
      if (Rp(hZ, "iframe")) {
        return hZ.contentDocument;
      } else {
        if (Rp(hZ, "template")) {
          hZ = hZ.content || hZ;
        }
        return Rm.merge([], hZ.childNodes);
      }
    }
  }, function (hZ, hy) {
    Rm.fn[hZ] = function (hb, hT) {
      var hq = Rm.map(this, hy, hb);
      if ((hT = hZ.slice(-5) !== "Until" ? hb : hT) && typeof hT == "string") {
        hq = Rm.filter(hT, hq);
      }
      if (this.length > 1 && (Rx[hZ] || Rm.uniqueSort(hq), Rk.test(hZ))) {
        hq.reverse();
      }
      return this.pushStack(hq);
    };
  });
  var RI = /[^\x20\t\r\n\f]+/g;
  function RX(hZ) {
    return hZ;
  }
  function Ri(hZ) {
    throw hZ;
  }
  function Rf(hZ, hy, hb, hT) {
    var hq;
    try {
      if (hZ && R2(hq = hZ.promise)) {
        hq.call(hZ).done(hy).fail(hb);
      } else if (hZ && R2(hq = hZ.then)) {
        hq.call(hZ, hy, hb);
      } else {
        hy.apply(undefined, [hZ].slice(hT));
      }
    } catch (hv) {
      hb.apply(undefined, [hv]);
    }
  }
  Rm.Callbacks = function (hZ) {
    var hy;
    var hb;
    hZ = typeof hZ == "string" ? (hy = hZ, hb = {}, Rm.each(hy.match(RI) || [], function (hw, hK) {
      hb[hK] = true;
    }), hb) : Rm.extend({}, hZ);
    function hT() {
      hu = hu || hZ.once;
      hE = hq = true;
      for (; hP.length; hS = -1) {
        for (hv = hP.shift(); ++hS < ha.length;) {
          if (ha[hS].apply(hv[0], hv[1]) === false && hZ.stopOnFalse) {
            hS = ha.length;
            hv = false;
          }
        }
      }
      if (!hZ.memory) {
        hv = false;
      }
      hq = false;
      if (hu) {
        ha = hv ? [] : "";
      }
    }
    var hq;
    var hv;
    var hE;
    var hu;
    var ha = [];
    var hP = [];
    var hS = -1;
    var hJ = {
      add: function () {
        if (ha && (hv && !hq && (hS = ha.length - 1, hP.push(hv)), function hw(hK) {
          Rm.each(hK, function (hD, hU) {
            if (R2(hU)) {
              if (!hZ.unique || !hJ.has(hU)) {
                ha.push(hU);
              }
            } else if (hU && hU.length && RY(hU) !== "string") {
              hw(hU);
            }
          });
        }(arguments), hv) && !hq) {
          hT();
        }
        return this;
      },
      remove: function () {
        Rm.each(arguments, function (hw, hK) {
          for (var hD; (hD = Rm.inArray(hK, ha, hD)) > -1;) {
            ha.splice(hD, 1);
            if (hD <= hS) {
              hS--;
            }
          }
        });
        return this;
      },
      has: function (hw) {
        if (hw) {
          return Rm.inArray(hw, ha) > -1;
        } else {
          return ha.length > 0;
        }
      },
      empty: function () {
        ha = ha && [];
        return this;
      },
      disable: function () {
        hu = hP = [];
        ha = hv = "";
        return this;
      },
      disabled: function () {
        return !ha;
      },
      lock: function () {
        hu = hP = [];
        if (!hv && !hq) {
          ha = hv = "";
        }
        return this;
      },
      locked: function () {
        return !!hu;
      },
      fireWith: function (hw, hK) {
        if (!hu && !(hK = [hw, (hK = hK || []).slice ? hK.slice() : hK], hP.push(hK), hq)) {
          hT();
        }
        return this;
      },
      fire: function () {
        hJ.fireWith(this, arguments);
        return this;
      },
      fired: function () {
        return !!hE;
      }
    };
    return hJ;
  };
  Rm.extend({
    Deferred: function (hZ) {
      var hy = [["notify", "progress", Rm.Callbacks("memory"), Rm.Callbacks("memory"), 2], ["resolve", "done", Rm.Callbacks("once memory"), Rm.Callbacks("once memory"), 0, "resolved"], ["reject", "fail", Rm.Callbacks("once memory"), Rm.Callbacks("once memory"), 1, "rejected"]];
      var hb = "pending";
      var hT = {
        state: function () {
          return hb;
        },
        always: function () {
          hq.done(arguments).fail(arguments);
          return this;
        },
        catch: function (hv) {
          return hT.then(null, hv);
        },
        pipe: function () {
          var hv = arguments;
          return Rm.Deferred(function (hE) {
            Rm.each(hy, function (hu, ha) {
              var hP = R2(hv[ha[4]]) && hv[ha[4]];
              hq[ha[1]](function () {
                var hS = hP && hP.apply(this, arguments);
                if (hS && R2(hS.promise)) {
                  hS.promise().progress(hE.notify).done(hE.resolve).fail(hE.reject);
                } else {
                  hE[ha[0] + "With"](this, hP ? [hS] : arguments);
                }
              });
            });
            hv = null;
          }).promise();
        },
        then: function (hv, hE, hu) {
          var ha = 0;
          function hP(hS, hJ, hw, hK) {
            return function () {
              function hD() {
                var hz;
                var hr;
                if (hS >= ha) {
                  if ((hz = hw.apply(hU, hW)) === hJ.promise()) {
                    throw new TypeError("Thenable self-resolution");
                  }
                  hr = hz && (typeof hz == "object" || typeof hz == "function") && hz.then;
                  if (R2(hr)) {
                    if (hK) {
                      hr.call(hz, hP(ha, hJ, RX, hK), hP(ha, hJ, Ri, hK));
                    } else {
                      ha++;
                      hr.call(hz, hP(ha, hJ, RX, hK), hP(ha, hJ, Ri, hK), hP(ha, hJ, RX, hJ.notifyWith));
                    }
                  } else {
                    if (hw !== RX) {
                      hU = undefined;
                      hW = [hz];
                    }
                    (hK || hJ.resolveWith)(hU, hW);
                  }
                }
              }
              var hU = this;
              var hW = arguments;
              var hL = hK ? hD : function () {
                try {
                  hD();
                } catch (hz) {
                  if (Rm.Deferred.exceptionHook) {
                    Rm.Deferred.exceptionHook(hz, hL.stackTrace);
                  }
                  if (ha <= hS + 1) {
                    if (hw !== Ri) {
                      hU = undefined;
                      hW = [hz];
                    }
                    hJ.rejectWith(hU, hW);
                  }
                }
              };
              if (hS) {
                hL();
              } else {
                if (Rm.Deferred.getStackHook) {
                  hL.stackTrace = Rm.Deferred.getStackHook();
                }
                R0.setTimeout(hL);
              }
            };
          }
          return Rm.Deferred(function (hS) {
            hy[0][3].add(hP(0, hS, R2(hu) ? hu : RX, hS.notifyWith));
            hy[1][3].add(hP(0, hS, R2(hv) ? hv : RX));
            hy[2][3].add(hP(0, hS, R2(hE) ? hE : Ri));
          }).promise();
        },
        promise: function (hv) {
          if (hv != null) {
            return Rm.extend(hv, hT);
          } else {
            return hT;
          }
        }
      };
      var hq = {};
      Rm.each(hy, function (hv, hE) {
        var hu = hE[2];
        var ha = hE[5];
        hT[hE[1]] = hu.add;
        if (ha) {
          hu.add(function () {
            hb = ha;
          }, hy[3 - hv][2].disable, hy[3 - hv][3].disable, hy[0][2].lock, hy[0][3].lock);
        }
        hu.add(hE[3].fire);
        hq[hE[0]] = function () {
          hq[hE[0] + "With"](this === hq ? undefined : this, arguments);
          return this;
        };
        hq[hE[0] + "With"] = hu.fireWith;
      });
      hT.promise(hq);
      if (hZ) {
        hZ.call(hq, hq);
      }
      return hq;
    },
    when: function (hZ) {
      function hy(hu) {
        return function (ha) {
          hq[hu] = this;
          hv[hu] = arguments.length > 1 ? R7.call(arguments) : ha;
          if (! --hb) {
            hE.resolveWith(hq, hv);
          }
        };
      }
      var hb = arguments.length;
      var hT = hb;
      var hq = Array(hT);
      var hv = R7.call(arguments);
      var hE = Rm.Deferred();
      if (hb <= 1 && (Rf(hZ, hE.done(hy(hT)).resolve, hE.reject, !hb), hE.state() === "pending" || R2(hv[hT] && hv[hT].then))) {
        return hE.then();
      }
      while (hT--) {
        Rf(hv[hT], hy(hT), hE.reject);
      }
      return hE.promise();
    }
  });
  var RZ = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
  Rm.Deferred.exceptionHook = function (hZ, hy) {
    if (R0.console && R0.console.warn && hZ && RZ.test(hZ.name)) {
      R0.console.warn("jQuery.Deferred exception: " + hZ.message, hZ.stack, hy);
    }
  };
  Rm.readyException = function (hZ) {
    R0.setTimeout(function () {
      throw hZ;
    });
  };
  var Ry = Rm.Deferred();
  function Rb() {
    R5.removeEventListener("DOMContentLoaded", Rb);
    R0.removeEventListener("load", Rb);
    Rm.ready();
  }
  Rm.fn.ready = function (hZ) {
    Ry.then(hZ).catch(function (hy) {
      Rm.readyException(hy);
    });
    return this;
  };
  Rm.extend({
    isReady: false,
    readyWait: 1,
    ready: function (hZ) {
      if (!(hZ === true ? --Rm.readyWait : Rm.isReady) && ((Rm.isReady = true) === hZ || --Rm.readyWait <= 0)) {
        Ry.resolveWith(R5, [Rm]);
      }
    }
  });
  Rm.ready.then = Ry.then;
  if (R5.readyState === "complete" || R5.readyState !== "loading" && !R5.documentElement.doScroll) {
    R0.setTimeout(Rm.ready);
  } else {
    R5.addEventListener("DOMContentLoaded", Rb);
    R0.addEventListener("load", Rb);
  }
  function RT(hZ, hy, hb, hT, hq, hv, hE) {
    var hu = 0;
    var ha = hZ.length;
    var hP = hb == null;
    if (RY(hb) === "object") {
      hq = true;
      for (hu in hb) {
        RT(hZ, hy, hu, hb[hu], true, hv, hE);
      }
    } else if (hT !== undefined && (hq = true, R2(hT) || (hE = true), hy = hP ? hE ? (hy.call(hZ, hT), null) : (hP = hy, function (hS, hJ, hw) {
      return hP.call(Rm(hS), hw);
    }) : hy)) {
      for (; hu < ha; hu++) {
        hy(hZ[hu], hb, hE ? hT : hT.call(hZ[hu], hu, hy(hZ[hu], hb)));
      }
    }
    if (hq) {
      return hZ;
    } else if (hP) {
      return hy.call(hZ);
    } else if (ha) {
      return hy(hZ[0], hb);
    } else {
      return hv;
    }
  }
  var Rq = /^-ms-/;
  var Rv = /-([a-z])/g;
  function RE(hZ, hy) {
    return hy.toUpperCase();
  }
  function Ru(hZ) {
    return hZ.replace(Rq, "ms-").replace(Rv, RE);
  }
  function Ra(hZ) {
    return hZ.nodeType === 1 || hZ.nodeType === 9 || !+hZ.nodeType;
  }
  function RP() {
    this.expando = Rm.expando + RP.uid++;
  }
  RP.uid = 1;
  RP.prototype = {
    cache: function (hZ) {
      var hy = hZ[this.expando];
      if (!hy) {
        hy = {};
        if (Ra(hZ)) {
          if (hZ.nodeType) {
            hZ[this.expando] = hy;
          } else {
            Object.defineProperty(hZ, this.expando, {
              value: hy,
              configurable: true
            });
          }
        }
      }
      return hy;
    },
    set: function (hZ, hy, hb) {
      var hT;
      var hq = this.cache(hZ);
      if (typeof hy == "string") {
        hq[Ru(hy)] = hb;
      } else {
        for (hT in hy) {
          hq[Ru(hT)] = hy[hT];
        }
      }
      return hq;
    },
    get: function (hZ, hy) {
      if (hy === undefined) {
        return this.cache(hZ);
      } else {
        return hZ[this.expando] && hZ[this.expando][Ru(hy)];
      }
    },
    access: function (hZ, hy, hb) {
      if (hy === undefined || hy && typeof hy == "string" && hb === undefined) {
        return this.get(hZ, hy);
      } else {
        this.set(hZ, hy, hb);
        if (hb !== undefined) {
          return hb;
        } else {
          return hy;
        }
      }
    },
    remove: function (hZ, hy) {
      var hb;
      var hT = hZ[this.expando];
      if (hT !== undefined) {
        if (hy !== undefined) {
          hb = (hy = Array.isArray(hy) ? hy.map(Ru) : (hy = Ru(hy)) in hT ? [hy] : hy.match(RI) || []).length;
          while (hb--) {
            delete hT[hy[hb]];
          }
        }
        if (hy === undefined || !!Rm.isEmptyObject(hT)) {
          if (hZ.nodeType) {
            hZ[this.expando] = undefined;
          } else {
            delete hZ[this.expando];
          }
        }
      }
    },
    hasData: function (hZ) {
      hZ = hZ[this.expando];
      return hZ !== undefined && !Rm.isEmptyObject(hZ);
    }
  };
  var RS = new RP();
  var RJ = new RP();
  var Rw = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/;
  var RK = /[A-Z]/g;
  function RD(hZ, hy, hb) {
    var hT;
    var hq;
    if (hb === undefined && hZ.nodeType === 1) {
      hT = "data-" + hy.replace(RK, "-$&").toLowerCase();
      if (typeof (hb = hZ.getAttribute(hT)) == "string") {
        try {
          hb = (hq = hb) === "true" || hq !== "false" && (hq === "null" ? null : hq === +hq + "" ? +hq : Rw.test(hq) ? JSON.parse(hq) : hq);
        } catch (hv) {}
        RJ.set(hZ, hy, hb);
      } else {
        hb = undefined;
      }
    }
    return hb;
  }
  Rm.extend({
    hasData: function (hZ) {
      return RJ.hasData(hZ) || RS.hasData(hZ);
    },
    data: function (hZ, hy, hb) {
      return RJ.access(hZ, hy, hb);
    },
    removeData: function (hZ, hy) {
      RJ.remove(hZ, hy);
    },
    _data: function (hZ, hy, hb) {
      return RS.access(hZ, hy, hb);
    },
    _removeData: function (hZ, hy) {
      RS.remove(hZ, hy);
    }
  });
  Rm.fn.extend({
    data: function (hZ, hy) {
      var hb;
      var hT;
      var hq;
      var hv = this[0];
      var hE = hv && hv.attributes;
      if (hZ !== undefined) {
        if (typeof hZ == "object") {
          return this.each(function () {
            RJ.set(this, hZ);
          });
        } else {
          return RT(this, function (hu) {
            var ha;
            if (hv && hu === undefined) {
              if ((ha = RJ.get(hv, hZ)) !== undefined || (ha = RD(hv, hZ)) !== undefined) {
                return ha;
              } else {
                return undefined;
              }
            }
            this.each(function () {
              RJ.set(this, hZ, hu);
            });
          }, null, hy, arguments.length > 1, null, true);
        }
      }
      if (this.length && (hq = RJ.get(hv), hv.nodeType === 1) && !RS.get(hv, "hasDataAttrs")) {
        for (hb = hE.length; hb--;) {
          if (hE[hb] && (hT = hE[hb].name).indexOf("data-") === 0) {
            hT = Ru(hT.slice(5));
            RD(hv, hT, hq[hT]);
          }
        }
        RS.set(hv, "hasDataAttrs", true);
      }
      return hq;
    },
    removeData: function (hZ) {
      return this.each(function () {
        RJ.remove(this, hZ);
      });
    }
  });
  Rm.extend({
    queue: function (hZ, hy, hb) {
      var hT;
      if (hZ) {
        hT = RS.get(hZ, hy = (hy || "fx") + "queue");
        if (hb) {
          if (!hT || Array.isArray(hb)) {
            hT = RS.access(hZ, hy, Rm.makeArray(hb));
          } else {
            hT.push(hb);
          }
        }
        return hT || [];
      }
    },
    dequeue: function (hZ, hy) {
      hy = hy || "fx";
      var hb = Rm.queue(hZ, hy);
      var hT = hb.length;
      var hq = hb.shift();
      var hv = Rm._queueHooks(hZ, hy);
      if (hq === "inprogress") {
        hq = hb.shift();
        hT--;
      }
      if (hq) {
        if (hy === "fx") {
          hb.unshift("inprogress");
        }
        delete hv.stop;
        hq.call(hZ, function () {
          Rm.dequeue(hZ, hy);
        }, hv);
      }
      if (!hT && hv) {
        hv.empty.fire();
      }
    },
    _queueHooks: function (hZ, hy) {
      var hb = hy + "queueHooks";
      return RS.get(hZ, hb) || RS.access(hZ, hb, {
        empty: Rm.Callbacks("once memory").add(function () {
          RS.remove(hZ, [hy + "queue", hb]);
        })
      });
    }
  });
  Rm.fn.extend({
    queue: function (hZ, hy) {
      var hb = 2;
      if (typeof hZ != "string") {
        hy = hZ;
        hZ = "fx";
        hb--;
      }
      if (arguments.length < hb) {
        return Rm.queue(this[0], hZ);
      } else if (hy === undefined) {
        return this;
      } else {
        return this.each(function () {
          var hT = Rm.queue(this, hZ, hy);
          Rm._queueHooks(this, hZ);
          if (hZ === "fx" && hT[0] !== "inprogress") {
            Rm.dequeue(this, hZ);
          }
        });
      }
    },
    dequeue: function (hZ) {
      return this.each(function () {
        Rm.dequeue(this, hZ);
      });
    },
    clearQueue: function (hZ) {
      return this.queue(hZ || "fx", []);
    },
    promise: function (hZ, hy) {
      function hb() {
        if (! --hq) {
          hv.resolveWith(hE, [hE]);
        }
      }
      var hT;
      var hq = 1;
      var hv = Rm.Deferred();
      var hE = this;
      var hu = this.length;
      if (typeof hZ != "string") {
        hy = hZ;
        hZ = undefined;
      }
      hZ = hZ || "fx";
      while (hu--) {
        if ((hT = RS.get(hE[hu], hZ + "queueHooks")) && hT.empty) {
          hq++;
          hT.empty.add(hb);
        }
      }
      hb();
      return hv.promise(hy);
    }
  });
  function RU(hZ, hy) {
    return (hZ = hy || hZ).style.display === "none" || hZ.style.display === "" && Rm.contains(hZ.ownerDocument, hZ) && Rm.css(hZ, "display") === "none";
  }
  function RW(hZ, hy, hb, hT) {
    var hq;
    var hv = {};
    for (hq in hy) {
      hv[hq] = hZ.style[hq];
      hZ.style[hq] = hy[hq];
    }
    hb = hb.apply(hZ, hT || []);
    for (hq in hy) {
      hZ.style[hq] = hv[hq];
    }
    return hb;
  }
  var R4 = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source;
  var RL = new RegExp("^(?:([+-])=|)(" + R4 + ")([a-z%]*)$", "i");
  var Rz = ["Top", "Right", "Bottom", "Left"];
  function Rr(hZ, hy, hb, hT) {
    var hq;
    var hv;
    var hE = 20;
    var hu = hT ? function () {
      return hT.cur();
    } : function () {
      return Rm.css(hZ, hy, "");
    };
    var ha = hu();
    var hP = hb && hb[3] || (Rm.cssNumber[hy] ? "" : "px");
    var hS = (Rm.cssNumber[hy] || hP !== "px" && +ha) && RL.exec(Rm.css(hZ, hy));
    if (hS && hS[3] !== hP) {
      hP = hP || hS[3];
      hS = +(ha /= 2) || 1;
      while (hE--) {
        Rm.style(hZ, hy, hS + hP);
        if ((1 - hv) * (1 - (hv = hu() / ha || 0.5)) <= 0) {
          hE = 0;
        }
        hS /= hv;
      }
      Rm.style(hZ, hy, (hS *= 2) + hP);
      hb = hb || [];
    }
    if (hb && (hS = +hS || +ha || 0, hq = hb[1] ? hS + (hb[1] + 1) * hb[2] : +hb[2], hT)) {
      hT.unit = hP;
      hT.start = hS;
      hT.end = hq;
    }
    return hq;
  }
  var Rl = {};
  function Rs(hZ, hy) {
    var hb;
    var hT;
    var hq;
    var hv;
    var hE;
    var hu = [];
    for (var ha = 0, hP = hZ.length; ha < hP; ha++) {
      if ((hT = hZ[ha]).style) {
        hb = hT.style.display;
        if (hy) {
          if (hb === "none") {
            hu[ha] = RS.get(hT, "display") || null;
            if (!hu[ha]) {
              hT.style.display = "";
            }
          }
          if (hT.style.display === "" && RU(hT)) {
            hE = hv = undefined;
            hv = (hq = hT).ownerDocument;
            hq = hq.nodeName;
            hu[ha] = (hE = Rl[hq]) || (hv = hv.body.appendChild(hv.createElement(hq)), hE = Rm.css(hv, "display"), hv.parentNode.removeChild(hv), Rl[hq] = hE = hE === "none" ? "block" : hE);
          }
        } else if (hb !== "none") {
          hu[ha] = "none";
          RS.set(hT, "display", hb);
        }
      }
    }
    for (ha = 0; ha < hP; ha++) {
      if (hu[ha] != null) {
        hZ[ha].style.display = hu[ha];
      }
    }
    return hZ;
  }
  Rm.fn.extend({
    show: function () {
      return Rs(this, true);
    },
    hide: function () {
      return Rs(this);
    },
    toggle: function (hZ) {
      if (typeof hZ == "boolean") {
        if (hZ) {
          return this.show();
        } else {
          return this.hide();
        }
      } else {
        return this.each(function () {
          if (RU(this)) {
            Rm(this).show();
          } else {
            Rm(this).hide();
          }
        });
      }
    }
  });
  var j0 = /^(?:checkbox|radio)$/i;
  var j1 = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i;
  var j2 = /^$|^module$|\/(?:java|ecma)script/i;
  var j3 = {
    option: [1, "<select multiple='multiple'>", "</select>"],
    thead: [1, "<table>", "</table>"],
    col: [2, "<table><colgroup>", "</colgroup></table>"],
    tr: [2, "<table><tbody>", "</tbody></table>"],
    td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
    _default: [0, "", ""]
  };
  function j4(hZ, hy) {
    var hb = hZ.getElementsByTagName !== undefined ? hZ.getElementsByTagName(hy || "*") : hZ.querySelectorAll !== undefined ? hZ.querySelectorAll(hy || "*") : [];
    if (hy === undefined || hy && Rp(hZ, hy)) {
      return Rm.merge([hZ], hb);
    } else {
      return hb;
    }
  }
  function j5(hZ, hy) {
    for (var hb = 0, hT = hZ.length; hb < hT; hb++) {
      RS.set(hZ[hb], "globalEval", !hy || RS.get(hy[hb], "globalEval"));
    }
  }
  j3.optgroup = j3.option;
  j3.tbody = j3.tfoot = j3.colgroup = j3.caption = j3.thead;
  j3.th = j3.td;
  var j6 = /<|&#?\w+;/;
  function j7(hZ, hy, hb, hT, hq) {
    var hv;
    var hE;
    var hu;
    var ha;
    var hP;
    var hS = hy.createDocumentFragment();
    var hJ = [];
    for (var hw = 0, hK = hZ.length; hw < hK; hw++) {
      if ((hv = hZ[hw]) || hv === 0) {
        if (RY(hv) === "object") {
          Rm.merge(hJ, hv.nodeType ? [hv] : hv);
        } else if (j6.test(hv)) {
          hE = hE || hS.appendChild(hy.createElement("div"));
          hu = (j1.exec(hv) || ["", ""])[1].toLowerCase();
          hu = j3[hu] || j3._default;
          hE.innerHTML = hu[1] + Rm.htmlPrefilter(hv) + hu[2];
          hP = hu[0];
          while (hP--) {
            hE = hE.lastChild;
          }
          Rm.merge(hJ, hE.childNodes);
          (hE = hS.firstChild).textContent = "";
        } else {
          hJ.push(hy.createTextNode(hv));
        }
      }
    }
    hS.textContent = "";
    hw = 0;
    while (hv = hJ[hw++]) {
      if (hT && Rm.inArray(hv, hT) > -1) {
        if (hq) {
          hq.push(hv);
        }
      } else {
        ha = Rm.contains(hv.ownerDocument, hv);
        hE = j4(hS.appendChild(hv), "script");
        if (ha) {
          j5(hE);
        }
        if (hb) {
          for (hP = 0; hv = hE[hP++];) {
            if (j2.test(hv.type || "")) {
              hb.push(hv);
            }
          }
        }
      }
    }
    return hS;
  }
  jW = R5.createDocumentFragment().appendChild(R5.createElement("div"));
  (jU = R5.createElement("input")).setAttribute("type", "radio");
  jU.setAttribute("checked", "checked");
  jU.setAttribute("name", "t");
  jW.appendChild(jU);
  RA.checkClone = jW.cloneNode(true).cloneNode(true).lastChild.checked;
  jW.innerHTML = "<textarea>x</textarea>";
  RA.noCloneChecked = !!jW.cloneNode(true).lastChild.defaultValue;
  var j8 = R5.documentElement;
  var j9 = /^key/;
  var jR = /^(?:mouse|pointer|contextmenu|drag|drop)|click/;
  var jj = /^([^.]*)(?:\.(.+)|)/;
  function jh() {
    return true;
  }
  function jH() {
    return false;
  }
  function jO() {
    try {
      return R5.activeElement;
    } catch (hZ) {}
  }
  function jo(hZ, hy, hb, hT, hq, hv) {
    var hE;
    var hu;
    if (typeof hy == "object") {
      if (typeof hb != "string") {
        hT = hT || hb;
        hb = undefined;
      }
      for (hu in hy) {
        jo(hZ, hu, hb, hT, hy[hu], hv);
      }
      return hZ;
    }
    if (hT == null && hq == null) {
      hq = hb;
      hT = hb = undefined;
    } else if (hq == null) {
      if (typeof hb == "string") {
        hq = hT;
        hT = undefined;
      } else {
        hq = hT;
        hT = hb;
        hb = undefined;
      }
    }
    if (hq === false) {
      hq = jH;
    } else if (!hq) {
      return hZ;
    }
    if (hv === 1) {
      hE = hq;
      (hq = function (ha) {
        Rm().off(ha);
        return hE.apply(this, arguments);
      }).guid = hE.guid ||= Rm.guid++;
    }
    return hZ.each(function () {
      Rm.event.add(this, hy, hq, hT, hb);
    });
  }
  Rm.event = {
    global: {},
    add: function (hZ, hy, hb, hT, hq) {
      var hv;
      var hE;
      var hu;
      var ha;
      var hP;
      var hS;
      var hJ;
      var hw;
      var hK;
      var hD = RS.get(hZ);
      if (hD) {
        if (hb.handler) {
          hb = (hv = hb).handler;
          hq = hv.selector;
        }
        if (hq) {
          Rm.find.matchesSelector(j8, hq);
        }
        hb.guid ||= Rm.guid++;
        hu = (hu = hD.events) || (hD.events = {});
        hE = (hE = hD.handle) || (hD.handle = function (hU) {
          if (Rm !== undefined && Rm.event.triggered !== hU.type) {
            return Rm.event.dispatch.apply(hZ, arguments);
          } else {
            return undefined;
          }
        });
        ha = (hy = (hy || "").match(RI) || [""]).length;
        while (ha--) {
          hJ = hK = (hw = jj.exec(hy[ha]) || [])[1];
          hw = (hw[2] || "").split(".").sort();
          if (hJ) {
            hP = Rm.event.special[hJ] || {};
            hJ = (hq ? hP.delegateType : hP.bindType) || hJ;
            hP = Rm.event.special[hJ] || {};
            hK = Rm.extend({
              type: hJ,
              origType: hK,
              data: hT,
              handler: hb,
              guid: hb.guid,
              selector: hq,
              needsContext: hq && Rm.expr.match.needsContext.test(hq),
              namespace: hw.join(".")
            }, hv);
            if (!(hS = hu[hJ]) && !((hS = hu[hJ] = []).delegateCount = 0, hP.setup && hP.setup.call(hZ, hT, hw, hE) !== false)) {
              if (hZ.addEventListener) {
                hZ.addEventListener(hJ, hE);
              }
            }
            if (hP.add) {
              hP.add.call(hZ, hK);
              hK.handler.guid ||= hb.guid;
            }
            if (hq) {
              hS.splice(hS.delegateCount++, 0, hK);
            } else {
              hS.push(hK);
            }
            Rm.event.global[hJ] = true;
          }
        }
      }
    },
    remove: function (hZ, hy, hb, hT, hq) {
      var hv;
      var hE;
      var hu;
      var ha;
      var hP;
      var hS;
      var hJ;
      var hw;
      var hK;
      var hD;
      var hU;
      var hW = RS.hasData(hZ) && RS.get(hZ);
      if (hW && (ha = hW.events)) {
        for (hP = (hy = (hy || "").match(RI) || [""]).length; hP--;) {
          hK = hU = (hu = jj.exec(hy[hP]) || [])[1];
          hD = (hu[2] || "").split(".").sort();
          if (hK) {
            hJ = Rm.event.special[hK] || {};
            hw = ha[hK = (hT ? hJ.delegateType : hJ.bindType) || hK] || [];
            hu = hu[2] && new RegExp("(^|\\.)" + hD.join("\\.(?:.*\\.|)") + "(\\.|$)");
            hE = hv = hw.length;
            while (hv--) {
              hS = hw[hv];
              if ((!!hq || hU === hS.origType) && (!hb || hb.guid === hS.guid) && (!hu || !!hu.test(hS.namespace)) && (!hT || hT === hS.selector || hT === "**" && !!hS.selector)) {
                hw.splice(hv, 1);
                if (hS.selector) {
                  hw.delegateCount--;
                }
                if (hJ.remove) {
                  hJ.remove.call(hZ, hS);
                }
              }
            }
            if (hE && !hw.length) {
              if (!hJ.teardown || hJ.teardown.call(hZ, hD, hW.handle) === false) {
                Rm.removeEvent(hZ, hK, hW.handle);
              }
              delete ha[hK];
            }
          } else {
            for (hK in ha) {
              Rm.event.remove(hZ, hK + hy[hP], hb, hT, true);
            }
          }
        }
        if (Rm.isEmptyObject(ha)) {
          RS.remove(hZ, "handle events");
        }
      }
    },
    dispatch: function (hZ) {
      var hy;
      var hb;
      var hT;
      var hq;
      var hv;
      var hE = Rm.event.fix(hZ);
      var hu = new Array(arguments.length);
      var hZ = (RS.get(this, "events") || {})[hE.type] || [];
      var ha = Rm.event.special[hE.type] || {};
      hu[0] = hE;
      hy = 1;
      for (; hy < arguments.length; hy++) {
        hu[hy] = arguments[hy];
      }
      hE.delegateTarget = this;
      if (!ha.preDispatch || ha.preDispatch.call(this, hE) !== false) {
        hv = Rm.event.handlers.call(this, hE, hZ);
        hy = 0;
        while ((hT = hv[hy++]) && !hE.isPropagationStopped()) {
          hE.currentTarget = hT.elem;
          hb = 0;
          while ((hq = hT.handlers[hb++]) && !hE.isImmediatePropagationStopped()) {
            if (!hE.rnamespace || !!hE.rnamespace.test(hq.namespace)) {
              hE.handleObj = hq;
              hE.data = hq.data;
              if ((hq = ((Rm.event.special[hq.origType] || {}).handle || hq.handler).apply(hT.elem, hu)) !== undefined && (hE.result = hq) === false) {
                hE.preventDefault();
                hE.stopPropagation();
              }
            }
          }
        }
        if (ha.postDispatch) {
          ha.postDispatch.call(this, hE);
        }
        return hE.result;
      }
    },
    handlers: function (hZ, hy) {
      var hb;
      var hT;
      var hq;
      var hv;
      var hE;
      var hu = [];
      var ha = hy.delegateCount;
      var hP = hZ.target;
      if (ha && hP.nodeType && (hZ.type !== "click" || hZ.button < 1)) {
        for (; hP !== this; hP = hP.parentNode || this) {
          if (hP.nodeType === 1 && (hZ.type !== "click" || hP.disabled !== true)) {
            hv = [];
            hE = {};
            hb = 0;
            for (; hb < ha; hb++) {
              if (hE[hq = (hT = hy[hb]).selector + " "] === undefined) {
                hE[hq] = hT.needsContext ? Rm(hq, this).index(hP) > -1 : Rm.find(hq, this, null, [hP]).length;
              }
              if (hE[hq]) {
                hv.push(hT);
              }
            }
            if (hv.length) {
              hu.push({
                elem: hP,
                handlers: hv
              });
            }
          }
        }
      }
      hP = this;
      if (ha < hy.length) {
        hu.push({
          elem: hP,
          handlers: hy.slice(ha)
        });
      }
      return hu;
    },
    addProp: function (hZ, hy) {
      Object.defineProperty(Rm.Event.prototype, hZ, {
        enumerable: true,
        configurable: true,
        get: R2(hy) ? function () {
          if (this.originalEvent) {
            return hy(this.originalEvent);
          }
        } : function () {
          if (this.originalEvent) {
            return this.originalEvent[hZ];
          }
        },
        set: function (hb) {
          Object.defineProperty(this, hZ, {
            enumerable: true,
            configurable: true,
            writable: true,
            value: hb
          });
        }
      });
    },
    fix: function (hZ) {
      if (hZ[Rm.expando]) {
        return hZ;
      } else {
        return new Rm.Event(hZ);
      }
    },
    special: {
      load: {
        noBubble: true
      },
      focus: {
        trigger: function () {
          if (this !== jO() && this.focus) {
            this.focus();
            return false;
          }
        },
        delegateType: "focusin"
      },
      blur: {
        trigger: function () {
          if (this === jO() && this.blur) {
            this.blur();
            return false;
          }
        },
        delegateType: "focusout"
      },
      click: {
        trigger: function () {
          if (this.type === "checkbox" && this.click && Rp(this, "input")) {
            this.click();
            return false;
          }
        },
        _default: function (hZ) {
          return Rp(hZ.target, "a");
        }
      },
      beforeunload: {
        postDispatch: function (hZ) {
          if (hZ.result !== undefined && hZ.originalEvent) {
            hZ.originalEvent.returnValue = hZ.result;
          }
        }
      }
    }
  };
  Rm.removeEvent = function (hZ, hy, hb) {
    if (hZ.removeEventListener) {
      hZ.removeEventListener(hy, hb);
    }
  };
  Rm.Event = function (hZ, hy) {
    if (!(this instanceof Rm.Event)) {
      return new Rm.Event(hZ, hy);
    }
    if (hZ && hZ.type) {
      this.originalEvent = hZ;
      this.type = hZ.type;
      this.isDefaultPrevented = hZ.defaultPrevented || hZ.defaultPrevented === undefined && hZ.returnValue === false ? jh : jH;
      this.target = hZ.target && hZ.target.nodeType === 3 ? hZ.target.parentNode : hZ.target;
      this.currentTarget = hZ.currentTarget;
      this.relatedTarget = hZ.relatedTarget;
    } else {
      this.type = hZ;
    }
    if (hy) {
      Rm.extend(this, hy);
    }
    this.timeStamp = hZ && hZ.timeStamp || Date.now();
    this[Rm.expando] = true;
  };
  Rm.Event.prototype = {
    constructor: Rm.Event,
    isDefaultPrevented: jH,
    isPropagationStopped: jH,
    isImmediatePropagationStopped: jH,
    isSimulated: false,
    preventDefault: function () {
      var hZ = this.originalEvent;
      this.isDefaultPrevented = jh;
      if (hZ && !this.isSimulated) {
        hZ.preventDefault();
      }
    },
    stopPropagation: function () {
      var hZ = this.originalEvent;
      this.isPropagationStopped = jh;
      if (hZ && !this.isSimulated) {
        hZ.stopPropagation();
      }
    },
    stopImmediatePropagation: function () {
      var hZ = this.originalEvent;
      this.isImmediatePropagationStopped = jh;
      if (hZ && !this.isSimulated) {
        hZ.stopImmediatePropagation();
      }
      this.stopPropagation();
    }
  };
  Rm.each({
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
    which: function (hZ) {
      var hy = hZ.button;
      if (hZ.which == null && j9.test(hZ.type)) {
        return hZ.charCode ?? hZ.keyCode;
      } else if (!hZ.which && hy !== undefined && jR.test(hZ.type)) {
        if (hy & 1) {
          return 1;
        } else if (hy & 2) {
          return 3;
        } else if (hy & 4) {
          return 2;
        } else {
          return 0;
        }
      } else {
        return hZ.which;
      }
    }
  }, Rm.event.addProp);
  Rm.each({
    mouseenter: "mouseover",
    mouseleave: "mouseout",
    pointerenter: "pointerover",
    pointerleave: "pointerout"
  }, function (hZ, hy) {
    Rm.event.special[hZ] = {
      delegateType: hy,
      bindType: hy,
      handle: function (hb) {
        var hT;
        var hq = hb.relatedTarget;
        var hv = hb.handleObj;
        if (!hq || hq !== this && !Rm.contains(this, hq)) {
          hb.type = hv.origType;
          hT = hv.handler.apply(this, arguments);
          hb.type = hy;
        }
        return hT;
      }
    };
  });
  Rm.fn.extend({
    on: function (hZ, hy, hb, hT) {
      return jo(this, hZ, hy, hb, hT);
    },
    one: function (hZ, hy, hb, hT) {
      return jo(this, hZ, hy, hb, hT, 1);
    },
    off: function (hZ, hy, hb) {
      var hT;
      var hq;
      if (hZ && hZ.preventDefault && hZ.handleObj) {
        hT = hZ.handleObj;
        Rm(hZ.delegateTarget).off(hT.namespace ? hT.origType + "." + hT.namespace : hT.origType, hT.selector, hT.handler);
      } else {
        if (typeof hZ != "object") {
          if (hy === false || typeof hy == "function") {
            hb = hy;
            hy = undefined;
          }
          if (hb === false) {
            hb = jH;
          }
          return this.each(function () {
            Rm.event.remove(this, hZ, hb, hy);
          });
        }
        for (hq in hZ) {
          this.off(hq, hy, hZ[hq]);
        }
      }
      return this;
    }
  });
  var jA = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi;
  var jF = /<script|<style|<link/i;
  var jB = /checked\s*(?:[^=]|=\s*.checked.)/i;
  var jY = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
  function jm(hZ, hy) {
    return Rp(hZ, "table") && Rp(hy.nodeType !== 11 ? hy : hy.firstChild, "tr") && Rm(hZ).children("tbody")[0] || hZ;
  }
  function jC(hZ) {
    hZ.type = (hZ.getAttribute("type") !== null) + "/" + hZ.type;
    return hZ;
  }
  function jn(hZ) {
    if ((hZ.type || "").slice(0, 5) === "true/") {
      hZ.type = hZ.type.slice(5);
    } else {
      hZ.removeAttribute("type");
    }
    return hZ;
  }
  function jd(hZ, hy) {
    var hb;
    var hT;
    var hq;
    var hv;
    var hE;
    var hu;
    if (hy.nodeType === 1) {
      if (RS.hasData(hZ) && (hv = RS.access(hZ), hE = RS.set(hy, hv), hu = hv.events)) {
        delete hE.handle;
        hE.events = {};
        for (hq in hu) {
          hb = 0;
          hT = hu[hq].length;
          for (; hb < hT; hb++) {
            Rm.event.add(hy, hq, hu[hq][hb]);
          }
        }
      }
      if (RJ.hasData(hZ)) {
        hv = RJ.access(hZ);
        hE = Rm.extend({}, hv);
        RJ.set(hy, hE);
      }
    }
  }
  function jQ(hZ, hy, hb, hT) {
    hy = R8.apply([], hy);
    var hq;
    var hv;
    var hE;
    var hu;
    var ha;
    var hP;
    var hS = 0;
    var hJ = hZ.length;
    var hw = hJ - 1;
    var hK = hy[0];
    var hD = R2(hK);
    if (hD || hJ > 1 && typeof hK == "string" && !RA.checkClone && jB.test(hK)) {
      return hZ.each(function (hU) {
        var hW = hZ.eq(hU);
        if (hD) {
          hy[0] = hK.call(this, hU, hW.html());
        }
        jQ(hW, hy, hb, hT);
      });
    }
    if (hJ && (hv = (hq = j7(hy, hZ[0].ownerDocument, false, hZ, hT)).firstChild, hq.childNodes.length === 1 && (hq = hv), hv || hT)) {
      for (hu = (hE = Rm.map(j4(hq, "script"), jC)).length; hS < hJ; hS++) {
        ha = hq;
        if (hS !== hw && (ha = Rm.clone(ha, true, true), hu)) {
          Rm.merge(hE, j4(ha, "script"));
        }
        hb.call(hZ[hS], ha, hS);
      }
      if (hu) {
        hP = hE[hE.length - 1].ownerDocument;
        Rm.map(hE, jn);
        hS = 0;
        for (; hS < hu; hS++) {
          ha = hE[hS];
          if (j2.test(ha.type || "") && !RS.access(ha, "globalEval") && Rm.contains(hP, ha)) {
            if (ha.src && (ha.type || "").toLowerCase() !== "module") {
              if (Rm._evalUrl) {
                Rm._evalUrl(ha.src);
              }
            } else {
              RB(ha.textContent.replace(jY, ""), hP, ha);
            }
          }
        }
      }
    }
    return hZ;
  }
  function jg(hZ, hy, hb) {
    for (var hT, hq = hy ? Rm.filter(hy, hZ) : hZ, hv = 0; (hT = hq[hv]) != null; hv++) {
      if (!hb && hT.nodeType === 1) {
        Rm.cleanData(j4(hT));
      }
      if (hT.parentNode) {
        if (hb && Rm.contains(hT.ownerDocument, hT)) {
          j5(j4(hT, "script"));
        }
        hT.parentNode.removeChild(hT);
      }
    }
    return hZ;
  }
  Rm.extend({
    htmlPrefilter: function (hZ) {
      return hZ.replace(jA, "<$1></$2>");
    },
    clone: function (hZ, hy, hb) {
      var hT;
      var hq;
      var hv;
      var hE;
      var hu;
      var ha;
      var hP;
      var hS = hZ.cloneNode(true);
      var hJ = Rm.contains(hZ.ownerDocument, hZ);
      if (!RA.noCloneChecked && (hZ.nodeType === 1 || hZ.nodeType === 11) && !Rm.isXMLDoc(hZ)) {
        hE = j4(hS);
        hT = 0;
        hq = (hv = j4(hZ)).length;
        for (; hT < hq; hT++) {
          hu = hv[hT];
          ha = hE[hT];
          hP = undefined;
          if ((hP = ha.nodeName.toLowerCase()) === "input" && j0.test(hu.type)) {
            ha.checked = hu.checked;
          } else if (hP === "input" || hP === "textarea") {
            ha.defaultValue = hu.defaultValue;
          }
        }
      }
      if (hy) {
        if (hb) {
          hv = hv || j4(hZ);
          hE = hE || j4(hS);
          hT = 0;
          hq = hv.length;
          for (; hT < hq; hT++) {
            jd(hv[hT], hE[hT]);
          }
        } else {
          jd(hZ, hS);
        }
      }
      if ((hE = j4(hS, "script")).length > 0) {
        j5(hE, !hJ && j4(hZ, "script"));
      }
      return hS;
    },
    cleanData: function (hZ) {
      var hy;
      for (var hb, hT, hq = Rm.event.special, hv = 0; (hb = hZ[hv]) !== undefined; hv++) {
        if (Ra(hb)) {
          if (hy = hb[RS.expando]) {
            if (hy.events) {
              for (hT in hy.events) {
                if (hq[hT]) {
                  Rm.event.remove(hb, hT);
                } else {
                  Rm.removeEvent(hb, hT, hy.handle);
                }
              }
            }
            hb[RS.expando] = undefined;
          }
          hb[RJ.expando] &&= undefined;
        }
      }
    }
  });
  Rm.fn.extend({
    detach: function (hZ) {
      return jg(this, hZ, true);
    },
    remove: function (hZ) {
      return jg(this, hZ);
    },
    text: function (hZ) {
      return RT(this, function (hy) {
        if (hy === undefined) {
          return Rm.text(this);
        } else {
          return this.empty().each(function () {
            if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
              this.textContent = hy;
            }
          });
        }
      }, null, hZ, arguments.length);
    },
    append: function () {
      return jQ(this, arguments, function (hZ) {
        if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
          jm(this, hZ).appendChild(hZ);
        }
      });
    },
    prepend: function () {
      return jQ(this, arguments, function (hZ) {
        var hy;
        if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
          (hy = jm(this, hZ)).insertBefore(hZ, hy.firstChild);
        }
      });
    },
    before: function () {
      return jQ(this, arguments, function (hZ) {
        if (this.parentNode) {
          this.parentNode.insertBefore(hZ, this);
        }
      });
    },
    after: function () {
      return jQ(this, arguments, function (hZ) {
        if (this.parentNode) {
          this.parentNode.insertBefore(hZ, this.nextSibling);
        }
      });
    },
    empty: function () {
      for (var hZ, hy = 0; (hZ = this[hy]) != null; hy++) {
        if (hZ.nodeType === 1) {
          Rm.cleanData(j4(hZ, false));
          hZ.textContent = "";
        }
      }
      return this;
    },
    clone: function (hZ, hy) {
      hZ = hZ != null && hZ;
      hy = hy == null ? hZ : hy;
      return this.map(function () {
        return Rm.clone(this, hZ, hy);
      });
    },
    html: function (hZ) {
      return RT(this, function (hy) {
        var hb = this[0] || {};
        var hT = 0;
        var hq = this.length;
        if (hy === undefined && hb.nodeType === 1) {
          return hb.innerHTML;
        }
        if (typeof hy == "string" && !jF.test(hy) && !j3[(j1.exec(hy) || ["", ""])[1].toLowerCase()]) {
          hy = Rm.htmlPrefilter(hy);
          try {
            for (; hT < hq; hT++) {
              if ((hb = this[hT] || {}).nodeType === 1) {
                Rm.cleanData(j4(hb, false));
                hb.innerHTML = hy;
              }
            }
            hb = 0;
          } catch (hv) {}
        }
        if (hb) {
          this.empty().append(hy);
        }
      }, null, hZ, arguments.length);
    },
    replaceWith: function () {
      var hZ = [];
      return jQ(this, arguments, function (hy) {
        var hb = this.parentNode;
        if (Rm.inArray(this, hZ) < 0 && (Rm.cleanData(j4(this)), hb)) {
          hb.replaceChild(hy, this);
        }
      }, hZ);
    }
  });
  Rm.each({
    appendTo: "append",
    prependTo: "prepend",
    insertBefore: "before",
    insertAfter: "after",
    replaceAll: "replaceWith"
  }, function (hZ, hy) {
    Rm.fn[hZ] = function (hb) {
      var hT;
      var hq = [];
      var hv = Rm(hb);
      for (var hE = hv.length - 1, hu = 0; hu <= hE; hu++) {
        hT = hu === hE ? this : this.clone(true);
        Rm(hv[hu])[hy](hT);
        R9.apply(hq, hT.get());
      }
      return this.pushStack(hq);
    };
  });
  function jp(hZ) {
    var hy = hZ.ownerDocument.defaultView;
    return (hy = hy && hy.opener ? hy : R0).getComputedStyle(hZ);
  }
  var jN;
  var jG;
  var jc;
  var jV;
  var jk;
  var jx;
  var jM;
  var jI = new RegExp("^(" + R4 + ")(?!px)[a-z%]+$", "i");
  var jX = new RegExp(Rz.join("|"), "i");
  function ji() {
    var hZ;
    if (jM) {
      jx.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0";
      jM.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%";
      j8.appendChild(jx).appendChild(jM);
      hZ = R0.getComputedStyle(jM);
      jN = hZ.top !== "1%";
      jk = jf(hZ.marginLeft) === 12;
      jM.style.right = "60%";
      jV = jf(hZ.right) === 36;
      jG = jf(hZ.width) === 36;
      jM.style.position = "absolute";
      jc = jM.offsetWidth === 36 || "absolute";
      j8.removeChild(jx);
      jM = null;
    }
  }
  function jf(hZ) {
    return Math.round(parseFloat(hZ));
  }
  function jZ(hZ, hy, hb) {
    var hT;
    var hq;
    var hv = hZ.style;
    if ((hb = hb || jp(hZ)) && ((hq = hb.getPropertyValue(hy) || hb[hy]) !== "" || Rm.contains(hZ.ownerDocument, hZ) || (hq = Rm.style(hZ, hy)), !RA.pixelBoxStyles()) && jI.test(hq) && jX.test(hy)) {
      hZ = hv.width;
      hy = hv.minWidth;
      hT = hv.maxWidth;
      hv.minWidth = hv.maxWidth = hv.width = hq;
      hq = hb.width;
      hv.width = hZ;
      hv.minWidth = hy;
      hv.maxWidth = hT;
    }
    if (hq !== undefined) {
      return hq + "";
    } else {
      return hq;
    }
  }
  function jy(hZ, hy) {
    return {
      get: function () {
        if (!hZ()) {
          return (this.get = hy).apply(this, arguments);
        }
        delete this.get;
      }
    };
  }
  jx = R5.createElement("div");
  if ((jM = R5.createElement("div")).style) {
    jM.style.backgroundClip = "content-box";
    jM.cloneNode(true).style.backgroundClip = "";
    RA.clearCloneStyle = jM.style.backgroundClip === "content-box";
    Rm.extend(RA, {
      boxSizingReliable: function () {
        ji();
        return jG;
      },
      pixelBoxStyles: function () {
        ji();
        return jV;
      },
      pixelPosition: function () {
        ji();
        return jN;
      },
      reliableMarginLeft: function () {
        ji();
        return jk;
      },
      scrollboxSize: function () {
        ji();
        return jc;
      }
    });
  }
  var jb = /^(none|table(?!-c[ea]).+)/;
  var jT = /^--/;
  var jq = {
    position: "absolute",
    visibility: "hidden",
    display: "block"
  };
  var jv = {
    letterSpacing: "0",
    fontWeight: "400"
  };
  var jE = ["Webkit", "Moz", "ms"];
  var ju = R5.createElement("div").style;
  function ja(hZ) {
    return Rm.cssProps[hZ] ||= function (hy) {
      if (hy in ju) {
        return hy;
      }
      var hb = hy[0].toUpperCase() + hy.slice(1);
      for (var hT = jE.length; hT--;) {
        if ((hy = jE[hT] + hb) in ju) {
          return hy;
        }
      }
    }(hZ) || hZ;
  }
  function jP(hZ, hy, hb) {
    var hT = RL.exec(hy);
    if (hT) {
      return Math.max(0, hT[2] - (hb || 0)) + (hT[3] || "px");
    } else {
      return hy;
    }
  }
  function jS(hZ, hy, hb, hT, hq, hv) {
    var hE = hy === "width" ? 1 : 0;
    var hu = 0;
    var ha = 0;
    if (hb === (hT ? "border" : "content")) {
      return 0;
    }
    for (; hE < 4; hE += 2) {
      if (hb === "margin") {
        ha += Rm.css(hZ, hb + Rz[hE], true, hq);
      }
      if (hT) {
        if (hb === "content") {
          ha -= Rm.css(hZ, "padding" + Rz[hE], true, hq);
        }
        if (hb !== "margin") {
          ha -= Rm.css(hZ, "border" + Rz[hE] + "Width", true, hq);
        }
      } else {
        ha += Rm.css(hZ, "padding" + Rz[hE], true, hq);
        if (hb !== "padding") {
          ha += Rm.css(hZ, "border" + Rz[hE] + "Width", true, hq);
        } else {
          hu += Rm.css(hZ, "border" + Rz[hE] + "Width", true, hq);
        }
      }
    }
    if (!hT && hv >= 0) {
      ha += Math.max(0, Math.ceil(hZ["offset" + hy[0].toUpperCase() + hy.slice(1)] - hv - ha - hu - 0.5));
    }
    return ha;
  }
  function jJ(hZ, hy, hb) {
    var hT = jp(hZ);
    var hq = jZ(hZ, hy, hT);
    var hv = Rm.css(hZ, "boxSizing", false, hT) === "border-box";
    var hE = hv;
    if (jI.test(hq)) {
      if (!hb) {
        return hq;
      }
      hq = "auto";
    }
    hE = hE && (RA.boxSizingReliable() || hq === hZ.style[hy]);
    if (hq === "auto" || !parseFloat(hq) && Rm.css(hZ, "display", false, hT) === "inline") {
      hq = hZ["offset" + hy[0].toUpperCase() + hy.slice(1)];
      hE = true;
    }
    return (hq = parseFloat(hq) || 0) + jS(hZ, hy, hb || (hv ? "border" : "content"), hE, hT, hq) + "px";
  }
  function jw(hZ, hy, hb, hT, hq) {
    return new jw.prototype.init(hZ, hy, hb, hT, hq);
  }
  Rm.extend({
    cssHooks: {
      opacity: {
        get: function (hZ, hy) {
          if (hy) {
            if ((hy = jZ(hZ, "opacity")) === "") {
              return "1";
            } else {
              return hy;
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
    style: function (hZ, hy, hb, hT) {
      if (hZ && hZ.nodeType !== 3 && hZ.nodeType !== 8 && hZ.style) {
        var hq;
        var hv;
        var hE;
        var hu = Ru(hy);
        var ha = jT.test(hy);
        var hP = hZ.style;
        if (!ha) {
          hy = ja(hu);
        }
        hE = Rm.cssHooks[hy] || Rm.cssHooks[hu];
        if (hb === undefined) {
          if (hE && "get" in hE && (hq = hE.get(hZ, false, hT)) !== undefined) {
            return hq;
          } else {
            return hP[hy];
          }
        }
        if ((hv = typeof hb) == "string" && (hq = RL.exec(hb)) && hq[1]) {
          hb = Rr(hZ, hy, hq);
          hv = "number";
        }
        if (hb != null && hb == hb) {
          if (hv === "number") {
            hb += hq && hq[3] || (Rm.cssNumber[hu] ? "" : "px");
          }
          if (!RA.clearCloneStyle && hb === "" && hy.indexOf("background") === 0) {
            hP[hy] = "inherit";
          }
          if (!hE || !("set" in hE) || (hb = hE.set(hZ, hb, hT)) !== undefined) {
            if (ha) {
              hP.setProperty(hy, hb);
            } else {
              hP[hy] = hb;
            }
          }
        }
      }
    },
    css: function (hZ, hy, hb, hT) {
      var hq;
      var hv = Ru(hy);
      if (!jT.test(hy)) {
        hy = ja(hv);
      }
      if ((hq = (hq = (hv = Rm.cssHooks[hy] || Rm.cssHooks[hv]) && "get" in hv ? hv.get(hZ, true, hb) : hq) === undefined ? jZ(hZ, hy, hT) : hq) === "normal" && hy in jv) {
        hq = jv[hy];
      }
      if ((hb === "" || hb) && (hv = parseFloat(hq), hb === true || isFinite(hv))) {
        return hv || 0;
      } else {
        return hq;
      }
    }
  });
  Rm.each(["height", "width"], function (hZ, hy) {
    Rm.cssHooks[hy] = {
      get: function (hb, hT, hq) {
        if (hT) {
          if (!jb.test(Rm.css(hb, "display")) || hb.getClientRects().length && hb.getBoundingClientRect().width) {
            return jJ(hb, hy, hq);
          } else {
            return RW(hb, jq, function () {
              return jJ(hb, hy, hq);
            });
          }
        }
      },
      set: function (hb, hT, hq) {
        var hv = jp(hb);
        var hE = Rm.css(hb, "boxSizing", false, hv) === "border-box";
        var hq = hq && jS(hb, hy, hq, hE, hv);
        if (hE && RA.scrollboxSize() === hv.position) {
          hq -= Math.ceil(hb["offset" + hy[0].toUpperCase() + hy.slice(1)] - parseFloat(hv[hy]) - jS(hb, hy, "border", false, hv) - 0.5);
        }
        if (hq && (hE = RL.exec(hT)) && (hE[3] || "px") !== "px") {
          hb.style[hy] = hT;
          hT = Rm.css(hb, hy);
        }
        return jP(0, hT, hq);
      }
    };
  });
  Rm.cssHooks.marginLeft = jy(RA.reliableMarginLeft, function (hZ, hy) {
    if (hy) {
      return (parseFloat(jZ(hZ, "marginLeft")) || hZ.getBoundingClientRect().left - RW(hZ, {
        marginLeft: 0
      }, function () {
        return hZ.getBoundingClientRect().left;
      })) + "px";
    }
  });
  Rm.each({
    margin: "",
    padding: "",
    border: "Width"
  }, function (hZ, hy) {
    Rm.cssHooks[hZ + hy] = {
      expand: function (hb) {
        for (var hT = 0, hq = {}, hv = typeof hb == "string" ? hb.split(" ") : [hb]; hT < 4; hT++) {
          hq[hZ + Rz[hT] + hy] = hv[hT] || hv[hT - 2] || hv[0];
        }
        return hq;
      }
    };
    if (hZ !== "margin") {
      Rm.cssHooks[hZ + hy].set = jP;
    }
  });
  Rm.fn.extend({
    css: function (hZ, hy) {
      return RT(this, function (hb, hT, hq) {
        var hv;
        var hE;
        var hu = {};
        var ha = 0;
        if (Array.isArray(hT)) {
          hv = jp(hb);
          hE = hT.length;
          for (; ha < hE; ha++) {
            hu[hT[ha]] = Rm.css(hb, hT[ha], false, hv);
          }
          return hu;
        }
        if (hq !== undefined) {
          return Rm.style(hb, hT, hq);
        } else {
          return Rm.css(hb, hT);
        }
      }, hZ, hy, arguments.length > 1);
    }
  });
  ((Rm.Tween = jw).prototype = {
    constructor: jw,
    init: function (hZ, hy, hb, hT, hq, hv) {
      this.elem = hZ;
      this.prop = hb;
      this.easing = hq || Rm.easing._default;
      this.options = hy;
      this.start = this.now = this.cur();
      this.end = hT;
      this.unit = hv || (Rm.cssNumber[hb] ? "" : "px");
    },
    cur: function () {
      var hZ = jw.propHooks[this.prop];
      return (hZ && hZ.get ? hZ : jw.propHooks._default).get(this);
    },
    run: function (hZ) {
      var hy;
      var hb = jw.propHooks[this.prop];
      if (this.options.duration) {
        this.pos = hy = Rm.easing[this.easing](hZ, this.options.duration * hZ, 0, 1, this.options.duration);
      } else {
        this.pos = hy = hZ;
      }
      this.now = (this.end - this.start) * hy + this.start;
      if (this.options.step) {
        this.options.step.call(this.elem, this.now, this);
      }
      (hb && hb.set ? hb : jw.propHooks._default).set(this);
      return this;
    }
  }).init.prototype = jw.prototype;
  (jw.propHooks = {
    _default: {
      get: function (hZ) {
        if (hZ.elem.nodeType !== 1 || hZ.elem[hZ.prop] != null && hZ.elem.style[hZ.prop] == null) {
          return hZ.elem[hZ.prop];
        } else if ((hZ = Rm.css(hZ.elem, hZ.prop, "")) && hZ !== "auto") {
          return hZ;
        } else {
          return 0;
        }
      },
      set: function (hZ) {
        if (Rm.fx.step[hZ.prop]) {
          Rm.fx.step[hZ.prop](hZ);
        } else if (hZ.elem.nodeType !== 1 || hZ.elem.style[Rm.cssProps[hZ.prop]] == null && !Rm.cssHooks[hZ.prop]) {
          hZ.elem[hZ.prop] = hZ.now;
        } else {
          Rm.style(hZ.elem, hZ.prop, hZ.now + hZ.unit);
        }
      }
    }
  }).scrollTop = jw.propHooks.scrollLeft = {
    set: function (hZ) {
      if (hZ.elem.nodeType && hZ.elem.parentNode) {
        hZ.elem[hZ.prop] = hZ.now;
      }
    }
  };
  Rm.easing = {
    linear: function (hZ) {
      return hZ;
    },
    swing: function (hZ) {
      return 0.5 - Math.cos(hZ * Math.PI) / 2;
    },
    _default: "swing"
  };
  Rm.fx = jw.prototype.init;
  Rm.fx.step = {};
  var jK;
  var jD;
  var jU;
  var jW;
  var jL = /^(?:toggle|show|hide)$/;
  var jz = /queueHooks$/;
  function jr() {
    if (jD) {
      if (R5.hidden === false && R0.requestAnimationFrame) {
        R0.requestAnimationFrame(jr);
      } else {
        R0.setTimeout(jr, Rm.fx.interval);
      }
      Rm.fx.tick();
    }
  }
  function jl() {
    R0.setTimeout(function () {
      jK = undefined;
    });
    return jK = Date.now();
  }
  function js(hZ, hy) {
    var hb;
    var hT = 0;
    var hq = {
      height: hZ
    };
    for (hy = hy ? 1 : 0; hT < 4; hT += 2 - hy) {
      hq["margin" + (hb = Rz[hT])] = hq["padding" + hb] = hZ;
    }
    if (hy) {
      hq.opacity = hq.width = hZ;
    }
    return hq;
  }
  function h0(hZ, hy, hb) {
    var hT;
    var hq = (h1.tweeners[hy] || []).concat(h1.tweeners["*"]);
    for (var hv = 0, hE = hq.length; hv < hE; hv++) {
      if (hT = hq[hv].call(hb, hy, hZ)) {
        return hT;
      }
    }
  }
  function h1(hZ, hy, hb) {
    var hT;
    var hq;
    var hv;
    var hE;
    var hu;
    var ha;
    var hP;
    var hS = 0;
    var hJ = h1.prefilters.length;
    var hw = Rm.Deferred().always(function () {
      delete hK.elem;
    });
    function hK() {
      if (hq) {
        return false;
      }
      var hz = jK || jl();
      var hz = Math.max(0, hD.startTime + hD.duration - hz);
      var hr = 1 - (hz / hD.duration || 0);
      for (var hl = 0, hs = hD.tweens.length; hl < hs; hl++) {
        hD.tweens[hl].run(hr);
      }
      hw.notifyWith(hZ, [hD, hr, hz]);
      if (hr < 1 && hs) {
        return hz;
      } else {
        if (!hs) {
          hw.notifyWith(hZ, [hD, 1, 0]);
        }
        hw.resolveWith(hZ, [hD]);
        return false;
      }
    }
    var hD = hw.promise({
      elem: hZ,
      props: Rm.extend({}, hy),
      opts: Rm.extend(true, {
        specialEasing: {},
        easing: Rm.easing._default
      }, hb),
      originalProperties: hy,
      originalOptions: hb,
      startTime: jK || jl(),
      duration: hb.duration,
      tweens: [],
      createTween: function (hz, hr) {
        hr = Rm.Tween(hZ, hD.opts, hz, hr, hD.opts.specialEasing[hz] || hD.opts.easing);
        hD.tweens.push(hr);
        return hr;
      },
      stop: function (hz) {
        var hr = 0;
        var hl = hz ? hD.tweens.length : 0;
        if (!hq) {
          for (hq = true; hr < hl; hr++) {
            hD.tweens[hr].run(1);
          }
          if (hz) {
            hw.notifyWith(hZ, [hD, 1, 0]);
            hw.resolveWith(hZ, [hD, hz]);
          } else {
            hw.rejectWith(hZ, [hD, hz]);
          }
        }
        return this;
      }
    });
    var hU = hD.props;
    var hW = hU;
    var hL = hD.opts.specialEasing;
    for (hv in hW) {
      hE = Ru(hv);
      hu = hL[hE];
      ha = hW[hv];
      if (Array.isArray(ha)) {
        hu = ha[1];
        ha = hW[hv] = ha[0];
      }
      if (hv !== hE) {
        hW[hE] = ha;
        delete hW[hv];
      }
      if ((hP = Rm.cssHooks[hE]) && "expand" in hP) {
        ha = hP.expand(ha);
        delete hW[hE];
        for (hv in ha) {
          if (!(hv in hW)) {
            hW[hv] = ha[hv];
            hL[hv] = hu;
          }
        }
      } else {
        hL[hE] = hu;
      }
    }
    for (; hS < hJ; hS++) {
      if (hT = h1.prefilters[hS].call(hD, hZ, hU, hD.opts)) {
        if (R2(hT.stop)) {
          Rm._queueHooks(hD.elem, hD.opts.queue).stop = hT.stop.bind(hT);
        }
        return hT;
      }
    }
    Rm.map(hU, h0, hD);
    if (R2(hD.opts.start)) {
      hD.opts.start.call(hZ, hD);
    }
    hD.progress(hD.opts.progress).done(hD.opts.done, hD.opts.complete).fail(hD.opts.fail).always(hD.opts.always);
    Rm.fx.timer(Rm.extend(hK, {
      elem: hZ,
      anim: hD,
      queue: hD.opts.queue
    }));
    return hD;
  }
  Rm.Animation = Rm.extend(h1, {
    tweeners: {
      "*": [function (hZ, hy) {
        var hb = this.createTween(hZ, hy);
        Rr(hb.elem, hZ, RL.exec(hy), hb);
        return hb;
      }]
    },
    tweener: function (hZ, hy) {
      var hb;
      for (var hT = 0, hq = (hZ = R2(hZ) ? (hy = hZ, ["*"]) : hZ.match(RI)).length; hT < hq; hT++) {
        hb = hZ[hT];
        h1.tweeners[hb] = h1.tweeners[hb] || [];
        h1.tweeners[hb].unshift(hy);
      }
    },
    prefilters: [function (hZ, hy, hb) {
      var hT;
      var hq;
      var hv;
      var hE;
      var hu;
      var ha;
      var hP;
      var hS = "width" in hy || "height" in hy;
      var hJ = this;
      var hw = {};
      var hK = hZ.style;
      var hD = hZ.nodeType && RU(hZ);
      var hU = RS.get(hZ, "fxshow");
      if (!hb.queue) {
        if ((hE = Rm._queueHooks(hZ, "fx")).unqueued == null) {
          hE.unqueued = 0;
          hu = hE.empty.fire;
          hE.empty.fire = function () {
            if (!hE.unqueued) {
              hu();
            }
          };
        }
        hE.unqueued++;
        hJ.always(function () {
          hJ.always(function () {
            hE.unqueued--;
            if (!Rm.queue(hZ, "fx").length) {
              hE.empty.fire();
            }
          });
        });
      }
      for (hT in hy) {
        hq = hy[hT];
        if (jL.test(hq)) {
          delete hy[hT];
          hv = hv || hq === "toggle";
          if (hq === (hD ? "hide" : "show")) {
            if (hq !== "show" || !hU || hU[hT] === undefined) {
              continue;
            }
            hD = true;
          }
          hw[hT] = hU && hU[hT] || Rm.style(hZ, hT);
        }
      }
      if ((ha = !Rm.isEmptyObject(hy)) || !Rm.isEmptyObject(hw)) {
        if (hS && hZ.nodeType === 1 && (hb.overflow = [hK.overflow, hK.overflowX, hK.overflowY], (hP = hU && hU.display) == null && (hP = RS.get(hZ, "display")), (hS = Rm.css(hZ, "display")) === "none" && (hP ? hS = hP : (Rs([hZ], true), hP = hZ.style.display || hP, hS = Rm.css(hZ, "display"), Rs([hZ]))), hS === "inline" || hS === "inline-block" && hP != null) && Rm.css(hZ, "float") === "none") {
          if (!ha) {
            hJ.done(function () {
              hK.display = hP;
            });
            if (hP == null) {
              hS = hK.display;
              hP = hS === "none" ? "" : hS;
            }
          }
          hK.display = "inline-block";
        }
        if (hb.overflow) {
          hK.overflow = "hidden";
          hJ.always(function () {
            hK.overflow = hb.overflow[0];
            hK.overflowX = hb.overflow[1];
            hK.overflowY = hb.overflow[2];
          });
        }
        ha = false;
        for (hT in hw) {
          if (!ha) {
            if (hU) {
              if ("hidden" in hU) {
                hD = hU.hidden;
              }
            } else {
              hU = RS.access(hZ, "fxshow", {
                display: hP
              });
            }
            if (hv) {
              hU.hidden = !hD;
            }
            if (hD) {
              Rs([hZ], true);
            }
            hJ.done(function () {
              if (!hD) {
                Rs([hZ]);
              }
              RS.remove(hZ, "fxshow");
              for (hT in hw) {
                Rm.style(hZ, hT, hw[hT]);
              }
            });
          }
          ha = h0(hD ? hU[hT] : 0, hT, hJ);
          if (!(hT in hU)) {
            hU[hT] = ha.start;
            if (hD) {
              ha.end = ha.start;
              ha.start = 0;
            }
          }
        }
      }
    }],
    prefilter: function (hZ, hy) {
      if (hy) {
        h1.prefilters.unshift(hZ);
      } else {
        h1.prefilters.push(hZ);
      }
    }
  });
  Rm.speed = function (hZ, hy, hb) {
    var hT = hZ && typeof hZ == "object" ? Rm.extend({}, hZ) : {
      complete: hb || !hb && hy || R2(hZ) && hZ,
      duration: hZ,
      easing: hb && hy || hy && !R2(hy) && hy
    };
    if (Rm.fx.off) {
      hT.duration = 0;
    } else if (typeof hT.duration != "number") {
      if (hT.duration in Rm.fx.speeds) {
        hT.duration = Rm.fx.speeds[hT.duration];
      } else {
        hT.duration = Rm.fx.speeds._default;
      }
    }
    if (hT.queue == null || hT.queue === true) {
      hT.queue = "fx";
    }
    hT.old = hT.complete;
    hT.complete = function () {
      if (R2(hT.old)) {
        hT.old.call(this);
      }
      if (hT.queue) {
        Rm.dequeue(this, hT.queue);
      }
    };
    return hT;
  };
  Rm.fn.extend({
    fadeTo: function (hZ, hy, hb, hT) {
      return this.filter(RU).css("opacity", 0).show().end().animate({
        opacity: hy
      }, hZ, hb, hT);
    },
    animate: function (hZ, hy, hb, hT) {
      function hq() {
        var hu = h1(this, Rm.extend({}, hZ), hE);
        if (hv || RS.get(this, "finish")) {
          hu.stop(true);
        }
      }
      var hv = Rm.isEmptyObject(hZ);
      var hE = Rm.speed(hy, hb, hT);
      hq.finish = hq;
      if (hv || hE.queue === false) {
        return this.each(hq);
      } else {
        return this.queue(hE.queue, hq);
      }
    },
    stop: function (hZ, hy, hb) {
      function hT(hq) {
        var hv = hq.stop;
        delete hq.stop;
        hv(hb);
      }
      if (typeof hZ != "string") {
        hb = hy;
        hy = hZ;
        hZ = undefined;
      }
      if (hy && hZ !== false) {
        this.queue(hZ || "fx", []);
      }
      return this.each(function () {
        var hq = true;
        var hv = hZ != null && hZ + "queueHooks";
        var hE = Rm.timers;
        var hu = RS.get(this);
        if (hv) {
          if (hu[hv] && hu[hv].stop) {
            hT(hu[hv]);
          }
        } else {
          for (hv in hu) {
            if (hu[hv] && hu[hv].stop && jz.test(hv)) {
              hT(hu[hv]);
            }
          }
        }
        for (hv = hE.length; hv--;) {
          if (hE[hv].elem === this && (hZ == null || hE[hv].queue === hZ)) {
            hE[hv].anim.stop(hb);
            hq = false;
            hE.splice(hv, 1);
          }
        }
        if (!!hq || !hb) {
          Rm.dequeue(this, hZ);
        }
      });
    },
    finish: function (hZ) {
      if (hZ !== false) {
        hZ = hZ || "fx";
      }
      return this.each(function () {
        var hy;
        var hb = RS.get(this);
        var hT = hb[hZ + "queue"];
        var hq = hb[hZ + "queueHooks"];
        var hv = Rm.timers;
        var hE = hT ? hT.length : 0;
        hb.finish = true;
        Rm.queue(this, hZ, []);
        if (hq && hq.stop) {
          hq.stop.call(this, true);
        }
        hy = hv.length;
        while (hy--) {
          if (hv[hy].elem === this && hv[hy].queue === hZ) {
            hv[hy].anim.stop(true);
            hv.splice(hy, 1);
          }
        }
        for (hy = 0; hy < hE; hy++) {
          if (hT[hy] && hT[hy].finish) {
            hT[hy].finish.call(this);
          }
        }
        delete hb.finish;
      });
    }
  });
  Rm.each(["toggle", "show", "hide"], function (hZ, hy) {
    var hb = Rm.fn[hy];
    Rm.fn[hy] = function (hT, hq, hv) {
      if (hT == null || typeof hT == "boolean") {
        return hb.apply(this, arguments);
      } else {
        return this.animate(js(hy, true), hT, hq, hv);
      }
    };
  });
  Rm.each({
    slideDown: js("show"),
    slideUp: js("hide"),
    slideToggle: js("toggle"),
    fadeIn: {
      opacity: "show"
    },
    fadeOut: {
      opacity: "hide"
    },
    fadeToggle: {
      opacity: "toggle"
    }
  }, function (hZ, hy) {
    Rm.fn[hZ] = function (hb, hT, hq) {
      return this.animate(hy, hb, hT, hq);
    };
  });
  Rm.timers = [];
  Rm.fx.tick = function () {
    var hZ;
    var hy = 0;
    var hb = Rm.timers;
    for (jK = Date.now(); hy < hb.length; hy++) {
      if (!(hZ = hb[hy])() && hb[hy] === hZ) {
        hb.splice(hy--, 1);
      }
    }
    if (!hb.length) {
      Rm.fx.stop();
    }
    jK = undefined;
  };
  Rm.fx.timer = function (hZ) {
    Rm.timers.push(hZ);
    Rm.fx.start();
  };
  Rm.fx.interval = 13;
  Rm.fx.start = function () {
    if (!jD) {
      jD = true;
      jr();
    }
  };
  Rm.fx.stop = function () {
    jD = null;
  };
  Rm.fx.speeds = {
    slow: 600,
    fast: 200,
    _default: 400
  };
  Rm.fn.delay = function (hZ, hy) {
    hZ = Rm.fx && Rm.fx.speeds[hZ] || hZ;
    return this.queue(hy = hy || "fx", function (hb, hT) {
      var hq = R0.setTimeout(hb, hZ);
      hT.stop = function () {
        R0.clearTimeout(hq);
      };
    });
  };
  jU = R5.createElement("input");
  jW = R5.createElement("select").appendChild(R5.createElement("option"));
  jU.type = "checkbox";
  RA.checkOn = jU.value !== "";
  RA.optSelected = jW.selected;
  (jU = R5.createElement("input")).value = "t";
  jU.type = "radio";
  RA.radioValue = jU.value === "t";
  var h2;
  var h3 = Rm.expr.attrHandle;
  Rm.fn.extend({
    attr: function (hZ, hy) {
      return RT(this, Rm.attr, hZ, hy, arguments.length > 1);
    },
    removeAttr: function (hZ) {
      return this.each(function () {
        Rm.removeAttr(this, hZ);
      });
    }
  });
  Rm.extend({
    attr: function (hZ, hy, hb) {
      var hT;
      var hq;
      var hv = hZ.nodeType;
      if (hv !== 3 && hv !== 8 && hv !== 2) {
        if (hZ.getAttribute === undefined) {
          return Rm.prop(hZ, hy, hb);
        } else {
          if (hv !== 1 || !Rm.isXMLDoc(hZ)) {
            hq = Rm.attrHooks[hy.toLowerCase()] || (Rm.expr.match.bool.test(hy) ? h2 : undefined);
          }
          if (hb !== undefined) {
            if (hb === null) {
              Rm.removeAttr(hZ, hy);
              return;
            } else if (hq && "set" in hq && (hT = hq.set(hZ, hb, hy)) !== undefined) {
              return hT;
            } else {
              hZ.setAttribute(hy, hb + "");
              return hb;
            }
          } else if ((!hq || !("get" in hq) || (hT = hq.get(hZ, hy)) === null) && (hT = Rm.find.attr(hZ, hy)) == null) {
            return undefined;
          } else {
            return hT;
          }
        }
      }
    },
    attrHooks: {
      type: {
        set: function (hZ, hy) {
          var hb;
          if (!RA.radioValue && hy === "radio" && Rp(hZ, "input")) {
            hb = hZ.value;
            hZ.setAttribute("type", hy);
            if (hb) {
              hZ.value = hb;
            }
            return hy;
          }
        }
      }
    },
    removeAttr: function (hZ, hy) {
      var hb;
      var hT = 0;
      var hq = hy && hy.match(RI);
      if (hq && hZ.nodeType === 1) {
        while (hb = hq[hT++]) {
          hZ.removeAttribute(hb);
        }
      }
    }
  });
  h2 = {
    set: function (hZ, hy, hb) {
      if (hy === false) {
        Rm.removeAttr(hZ, hb);
      } else {
        hZ.setAttribute(hb, hb);
      }
      return hb;
    }
  };
  Rm.each(Rm.expr.match.bool.source.match(/\w+/g), function (hZ, hy) {
    var hb = h3[hy] || Rm.find.attr;
    h3[hy] = function (hT, hq, hv) {
      var hE;
      var hu;
      var ha = hq.toLowerCase();
      if (!hv) {
        hu = h3[ha];
        h3[ha] = hE;
        hE = hb(hT, hq, hv) != null ? ha : null;
        h3[ha] = hu;
      }
      return hE;
    };
  });
  var h4 = /^(?:input|select|textarea|button)$/i;
  var h5 = /^(?:a|area)$/i;
  function h6(hZ) {
    return (hZ.match(RI) || []).join(" ");
  }
  function h7(hZ) {
    return hZ.getAttribute && hZ.getAttribute("class") || "";
  }
  function h8(hZ) {
    if (Array.isArray(hZ)) {
      return hZ;
    } else {
      return typeof hZ == "string" && hZ.match(RI) || [];
    }
  }
  Rm.fn.extend({
    prop: function (hZ, hy) {
      return RT(this, Rm.prop, hZ, hy, arguments.length > 1);
    },
    removeProp: function (hZ) {
      return this.each(function () {
        delete this[Rm.propFix[hZ] || hZ];
      });
    }
  });
  Rm.extend({
    prop: function (hZ, hy, hb) {
      var hT;
      var hq;
      var hv = hZ.nodeType;
      if (hv !== 3 && hv !== 8 && hv !== 2) {
        if (hv !== 1 || !Rm.isXMLDoc(hZ)) {
          hy = Rm.propFix[hy] || hy;
          hq = Rm.propHooks[hy];
        }
        if (hb !== undefined) {
          if (hq && "set" in hq && (hT = hq.set(hZ, hb, hy)) !== undefined) {
            return hT;
          } else {
            return hZ[hy] = hb;
          }
        } else if (hq && "get" in hq && (hT = hq.get(hZ, hy)) !== null) {
          return hT;
        } else {
          return hZ[hy];
        }
      }
    },
    propHooks: {
      tabIndex: {
        get: function (hZ) {
          var hy = Rm.find.attr(hZ, "tabindex");
          if (hy) {
            return parseInt(hy, 10);
          } else if (h4.test(hZ.nodeName) || h5.test(hZ.nodeName) && hZ.href) {
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
  if (!RA.optSelected) {
    Rm.propHooks.selected = {
      get: function (hZ) {
        hZ = hZ.parentNode;
        if (hZ && hZ.parentNode) {
          hZ.parentNode.selectedIndex;
        }
        return null;
      },
      set: function (hZ) {
        hZ = hZ.parentNode;
        if (hZ && (hZ.selectedIndex, hZ.parentNode)) {
          hZ.parentNode.selectedIndex;
        }
      }
    };
  }
  Rm.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
    Rm.propFix[this.toLowerCase()] = this;
  });
  Rm.fn.extend({
    addClass: function (hZ) {
      var hy;
      var hb;
      var hT;
      var hq;
      var hv;
      var hE;
      var hu = 0;
      if (R2(hZ)) {
        return this.each(function (ha) {
          Rm(this).addClass(hZ.call(this, ha, h7(this)));
        });
      }
      if ((hy = h8(hZ)).length) {
        while (hb = this[hu++]) {
          hE = h7(hb);
          if (hT = hb.nodeType === 1 && " " + h6(hE) + " ") {
            for (hv = 0; hq = hy[hv++];) {
              if (hT.indexOf(" " + hq + " ") < 0) {
                hT += hq + " ";
              }
            }
            if (hE !== (hE = h6(hT))) {
              hb.setAttribute("class", hE);
            }
          }
        }
      }
      return this;
    },
    removeClass: function (hZ) {
      var hy;
      var hb;
      var hT;
      var hq;
      var hv;
      var hE;
      var hu = 0;
      if (R2(hZ)) {
        return this.each(function (ha) {
          Rm(this).removeClass(hZ.call(this, ha, h7(this)));
        });
      }
      if (!arguments.length) {
        return this.attr("class", "");
      }
      if ((hy = h8(hZ)).length) {
        while (hb = this[hu++]) {
          hE = h7(hb);
          if (hT = hb.nodeType === 1 && " " + h6(hE) + " ") {
            for (hv = 0; hq = hy[hv++];) {
              while (hT.indexOf(" " + hq + " ") > -1) {
                hT = hT.replace(" " + hq + " ", " ");
              }
            }
            if (hE !== (hE = h6(hT))) {
              hb.setAttribute("class", hE);
            }
          }
        }
      }
      return this;
    },
    toggleClass: function (hZ, hy) {
      var hb = typeof hZ;
      var hT = hb == "string" || Array.isArray(hZ);
      if (typeof hy == "boolean" && hT) {
        if (hy) {
          return this.addClass(hZ);
        } else {
          return this.removeClass(hZ);
        }
      } else if (R2(hZ)) {
        return this.each(function (hq) {
          Rm(this).toggleClass(hZ.call(this, hq, h7(this), hy), hy);
        });
      } else {
        return this.each(function () {
          var hq;
          var hv;
          var hE;
          var hu;
          if (hT) {
            hv = 0;
            hE = Rm(this);
            hu = h8(hZ);
            while (hq = hu[hv++]) {
              if (hE.hasClass(hq)) {
                hE.removeClass(hq);
              } else {
                hE.addClass(hq);
              }
            }
          } else if (hZ === undefined || hb == "boolean") {
            if (hq = h7(this)) {
              RS.set(this, "__className__", hq);
            }
            if (this.setAttribute) {
              this.setAttribute("class", !hq && hZ !== false && RS.get(this, "__className__") || "");
            }
          }
        });
      }
    },
    hasClass: function (hZ) {
      for (var hy, hb = 0, hT = " " + hZ + " "; hy = this[hb++];) {
        if (hy.nodeType === 1 && (" " + h6(h7(hy)) + " ").indexOf(hT) > -1) {
          return true;
        }
      }
      return false;
    }
  });
  function h9(hZ) {
    hZ.stopPropagation();
  }
  var hR = /\r/g;
  Rm.fn.extend({
    val: function (hZ) {
      var hy;
      var hb;
      var hT;
      var hq = this[0];
      if (arguments.length) {
        hT = R2(hZ);
        return this.each(function (hv) {
          if (this.nodeType === 1) {
            if ((hv = hT ? hZ.call(this, hv, Rm(this).val()) : hZ) == null) {
              hv = "";
            } else if (typeof hv == "number") {
              hv += "";
            } else if (Array.isArray(hv)) {
              hv = Rm.map(hv, function (hE) {
                if (hE == null) {
                  return "";
                } else {
                  return hE + "";
                }
              });
            }
            if (!(hy = Rm.valHooks[this.type] || Rm.valHooks[this.nodeName.toLowerCase()]) || !("set" in hy) || hy.set(this, hv, "value") === undefined) {
              this.value = hv;
            }
          }
        });
      } else if (hq) {
        if ((hy = Rm.valHooks[hq.type] || Rm.valHooks[hq.nodeName.toLowerCase()]) && "get" in hy && (hb = hy.get(hq, "value")) !== undefined) {
          return hb;
        } else if (typeof (hb = hq.value) == "string") {
          return hb.replace(hR, "");
        } else if (hb == null) {
          return "";
        } else {
          return hb;
        }
      } else {
        return undefined;
      }
    }
  });
  Rm.extend({
    valHooks: {
      option: {
        get: function (hZ) {
          var hy = Rm.find.attr(hZ, "value");
          return hy ?? h6(Rm.text(hZ));
        }
      },
      select: {
        get: function (hZ) {
          var hy;
          var hb = hZ.options;
          var hT = hZ.selectedIndex;
          var hq = hZ.type === "select-one";
          var hv = hq ? null : [];
          for (var hE = hq ? hT + 1 : hb.length, hu = hT < 0 ? hE : hq ? hT : 0; hu < hE; hu++) {
            if (((hy = hb[hu]).selected || hu === hT) && !hy.disabled && (!hy.parentNode.disabled || !Rp(hy.parentNode, "optgroup"))) {
              hy = Rm(hy).val();
              if (hq) {
                return hy;
              }
              hv.push(hy);
            }
          }
          return hv;
        },
        set: function (hZ, hy) {
          var hb;
          var hT;
          var hq = hZ.options;
          var hv = Rm.makeArray(hy);
          for (var hE = hq.length; hE--;) {
            if ((hT = hq[hE]).selected = Rm.inArray(Rm.valHooks.option.get(hT), hv) > -1) {
              hb = true;
            }
          }
          if (!hb) {
            hZ.selectedIndex = -1;
          }
          return hv;
        }
      }
    }
  });
  Rm.each(["radio", "checkbox"], function () {
    Rm.valHooks[this] = {
      set: function (hZ, hy) {
        if (Array.isArray(hy)) {
          return hZ.checked = Rm.inArray(Rm(hZ).val(), hy) > -1;
        }
      }
    };
    if (!RA.checkOn) {
      Rm.valHooks[this].get = function (hZ) {
        if (hZ.getAttribute("value") === null) {
          return "on";
        } else {
          return hZ.value;
        }
      };
    }
  });
  RA.focusin = "onfocusin" in R0;
  var hj = /^(?:focusinfocus|focusoutblur)$/;
  Rm.extend(Rm.event, {
    trigger: function (hZ, hy, hb, hT) {
      var hq;
      var hv;
      var hE;
      var hu;
      var ha;
      var hP;
      var hS;
      var hJ = [hb || R5];
      var hw = RH.call(hZ, "type") ? hZ.type : hZ;
      var hK = RH.call(hZ, "namespace") ? hZ.namespace.split(".") : [];
      var hD = hS = hv = hb = hb || R5;
      if (hb.nodeType !== 3 && hb.nodeType !== 8 && !hj.test(hw + Rm.event.triggered) && (hw.indexOf(".") > -1 && (hw = (hK = hw.split(".")).shift(), hK.sort()), hu = hw.indexOf(":") < 0 && "on" + hw, (hZ = hZ[Rm.expando] ? hZ : new Rm.Event(hw, typeof hZ == "object" && hZ)).isTrigger = hT ? 2 : 3, hZ.namespace = hK.join("."), hZ.rnamespace = hZ.namespace ? new RegExp("(^|\\.)" + hK.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, hZ.result = undefined, hZ.target ||= hb, hy = hy == null ? [hZ] : Rm.makeArray(hy, [hZ]), hP = Rm.event.special[hw] || {}, hT || !hP.trigger || hP.trigger.apply(hb, hy) !== false)) {
        if (!hT && !hP.noBubble && !R3(hb)) {
          hE = hP.delegateType || hw;
          if (!hj.test(hE + hw)) {
            hD = hD.parentNode;
          }
          for (; hD; hD = hD.parentNode) {
            hJ.push(hD);
            hv = hD;
          }
          if (hv === (hb.ownerDocument || R5)) {
            hJ.push(hv.defaultView || hv.parentWindow || R0);
          }
        }
        for (hq = 0; (hD = hJ[hq++]) && !hZ.isPropagationStopped();) {
          hS = hD;
          hZ.type = hq > 1 ? hE : hP.bindType || hw;
          if (ha = (RS.get(hD, "events") || {})[hZ.type] && RS.get(hD, "handle")) {
            ha.apply(hD, hy);
          }
          if ((ha = hu && hD[hu]) && ha.apply && Ra(hD) && (hZ.result = ha.apply(hD, hy), hZ.result === false)) {
            hZ.preventDefault();
          }
        }
        hZ.type = hw;
        if (!hT && !hZ.isDefaultPrevented() && (!hP._default || hP._default.apply(hJ.pop(), hy) === false) && !!Ra(hb)) {
          if (hu && R2(hb[hw]) && !R3(hb) && ((hv = hb[hu]) && (hb[hu] = null), Rm.event.triggered = hw, hZ.isPropagationStopped() && hS.addEventListener(hw, h9), hb[hw](), hZ.isPropagationStopped() && hS.removeEventListener(hw, h9), Rm.event.triggered = undefined, hv)) {
            hb[hu] = hv;
          }
        }
        return hZ.result;
      }
    },
    simulate: function (hZ, hy, hb) {
      hb = Rm.extend(new Rm.Event(), hb, {
        type: hZ,
        isSimulated: true
      });
      Rm.event.trigger(hb, null, hy);
    }
  });
  Rm.fn.extend({
    trigger: function (hZ, hy) {
      return this.each(function () {
        Rm.event.trigger(hZ, hy, this);
      });
    },
    triggerHandler: function (hZ, hy) {
      var hb = this[0];
      if (hb) {
        return Rm.event.trigger(hZ, hy, hb, true);
      }
    }
  });
  if (!RA.focusin) {
    Rm.each({
      focus: "focusin",
      blur: "focusout"
    }, function (hZ, hy) {
      function hb(hT) {
        Rm.event.simulate(hy, hT.target, Rm.event.fix(hT));
      }
      Rm.event.special[hy] = {
        setup: function () {
          var hT = this.ownerDocument || this;
          var hq = RS.access(hT, hy);
          if (!hq) {
            hT.addEventListener(hZ, hb, true);
          }
          RS.access(hT, hy, (hq || 0) + 1);
        },
        teardown: function () {
          var hT = this.ownerDocument || this;
          var hq = RS.access(hT, hy) - 1;
          if (hq) {
            RS.access(hT, hy, hq);
          } else {
            hT.removeEventListener(hZ, hb, true);
            RS.remove(hT, hy);
          }
        }
      };
    });
  }
  var hh = R0.location;
  var hH = Date.now();
  var hO = /\?/;
  Rm.parseXML = function (hZ) {
    var hy;
    if (!hZ || typeof hZ != "string") {
      return null;
    }
    try {
      hy = new R0.DOMParser().parseFromString(hZ, "text/xml");
    } catch (hb) {
      hy = undefined;
    }
    if (!hy || !!hy.getElementsByTagName("parsererror").length) {
      Rm.error("Invalid XML: " + hZ);
    }
    return hy;
  };
  var ho = /\[\]$/;
  var hA = /\r?\n/g;
  var hF = /^(?:submit|button|image|reset|file)$/i;
  var hB = /^(?:input|select|textarea|keygen)/i;
  Rm.param = function (hZ, hy) {
    function hb(hv, hE) {
      hE = R2(hE) ? hE() : hE;
      hq[hq.length] = encodeURIComponent(hv) + "=" + encodeURIComponent(hE == null ? "" : hE);
    }
    var hT;
    var hq = [];
    if (Array.isArray(hZ) || hZ.jquery && !Rm.isPlainObject(hZ)) {
      Rm.each(hZ, function () {
        hb(this.name, this.value);
      });
    } else {
      for (hT in hZ) {
        (function hv(hE, hu, ha, hP) {
          if (Array.isArray(hu)) {
            Rm.each(hu, function (hJ, hw) {
              if (ha || ho.test(hE)) {
                hP(hE, hw);
              } else {
                hv(hE + "[" + (typeof hw == "object" && hw != null ? hJ : "") + "]", hw, ha, hP);
              }
            });
          } else if (ha || RY(hu) !== "object") {
            hP(hE, hu);
          } else {
            for (var hS in hu) {
              hv(hE + "[" + hS + "]", hu[hS], ha, hP);
            }
          }
        })(hT, hZ[hT], hy, hb);
      }
    }
    return hq.join("&");
  };
  Rm.fn.extend({
    serialize: function () {
      return Rm.param(this.serializeArray());
    },
    serializeArray: function () {
      return this.map(function () {
        var hZ = Rm.prop(this, "elements");
        if (hZ) {
          return Rm.makeArray(hZ);
        } else {
          return this;
        }
      }).filter(function () {
        var hZ = this.type;
        return this.name && !Rm(this).is(":disabled") && hB.test(this.nodeName) && !hF.test(hZ) && (this.checked || !j0.test(hZ));
      }).map(function (hZ, hy) {
        var hb = Rm(this).val();
        if (hb == null) {
          return null;
        } else if (Array.isArray(hb)) {
          return Rm.map(hb, function (hT) {
            return {
              name: hy.name,
              value: hT.replace(hA, "\r\n")
            };
          });
        } else {
          return {
            name: hy.name,
            value: hb.replace(hA, "\r\n")
          };
        }
      }).get();
    }
  });
  var hY = /%20/g;
  var hm = /#.*$/;
  var hC = /([?&])_=[^&]*/;
  var hn = /^(.*?):[ \t]*([^\r\n]*)$/gm;
  var hd = /^(?:GET|HEAD)$/;
  var hQ = /^\/\//;
  var hg = {};
  var hp = {};
  var hN = `*/*`;
  var hG = R5.createElement("a");
  function hc(hZ) {
    return function (hy, hb) {
      if (typeof hy != "string") {
        hb = hy;
        hy = "*";
      }
      var hT;
      var hq = 0;
      var hv = hy.toLowerCase().match(RI) || [];
      if (R2(hb)) {
        while (hT = hv[hq++]) {
          if (hT[0] === "+") {
            hT = hT.slice(1) || "*";
            (hZ[hT] = hZ[hT] || []).unshift(hb);
          } else {
            (hZ[hT] = hZ[hT] || []).push(hb);
          }
        }
      }
    };
  }
  function hV(hZ, hy, hb, hT) {
    var hq = {};
    var hv = hZ === hp;
    function hE(hu) {
      var ha;
      hq[hu] = true;
      Rm.each(hZ[hu] || [], function (hP, hS) {
        hS = hS(hy, hb, hT);
        if (typeof hS != "string" || hv || hq[hS]) {
          if (hv) {
            return !(ha = hS);
          } else {
            return undefined;
          }
        } else {
          hy.dataTypes.unshift(hS);
          hE(hS);
          return false;
        }
      });
      return ha;
    }
    return hE(hy.dataTypes[0]) || !hq["*"] && hE("*");
  }
  function hk(hZ, hy) {
    var hb;
    var hT;
    var hq = Rm.ajaxSettings.flatOptions || {};
    for (hb in hy) {
      if (hy[hb] !== undefined) {
        (hq[hb] ? hZ : hT = hT || {})[hb] = hy[hb];
      }
    }
    if (hT) {
      Rm.extend(true, hZ, hT);
    }
    return hZ;
  }
  hG.href = hh.href;
  Rm.extend({
    active: 0,
    lastModified: {},
    etag: {},
    ajaxSettings: {
      url: hh.href,
      type: "GET",
      isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(hh.protocol),
      global: true,
      processData: true,
      async: true,
      contentType: "application/x-www-form-urlencoded; charset=UTF-8",
      accepts: {
        "*": hN,
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
        "text xml": Rm.parseXML
      },
      flatOptions: {
        url: true,
        context: true
      }
    },
    ajaxSetup: function (hZ, hy) {
      if (hy) {
        return hk(hk(hZ, Rm.ajaxSettings), hy);
      } else {
        return hk(Rm.ajaxSettings, hZ);
      }
    },
    ajaxPrefilter: hc(hg),
    ajaxTransport: hc(hp),
    ajax: function (hZ, hy) {
      if (typeof hZ == "object") {
        hy = hZ;
        hZ = undefined;
      }
      var hb;
      var hT;
      var hq;
      var hv;
      var hE;
      var hu;
      var ha;
      var hP;
      var hS = Rm.ajaxSetup({}, hy = hy || {});
      var hJ = hS.context || hS;
      var hw = hS.context && (hJ.nodeType || hJ.jquery) ? Rm(hJ) : Rm.event;
      var hK = Rm.Deferred();
      var hD = Rm.Callbacks("once memory");
      var hU = hS.statusCode || {};
      var hW = {};
      var hL = {};
      var hz = "canceled";
      var hr = {
        readyState: 0,
        getResponseHeader: function (hs) {
          var H0;
          if (hu) {
            if (!hv) {
              for (hv = {}; H0 = hn.exec(hq);) {
                hv[H0[1].toLowerCase()] = H0[2];
              }
            }
            H0 = hv[hs.toLowerCase()];
          }
          if (H0 == null) {
            return null;
          } else {
            return H0;
          }
        },
        getAllResponseHeaders: function () {
          if (hu) {
            return hq;
          } else {
            return null;
          }
        },
        setRequestHeader: function (hs, H0) {
          if (hu == null) {
            hs = hL[hs.toLowerCase()] = hL[hs.toLowerCase()] || hs;
            hW[hs] = H0;
          }
          return this;
        },
        overrideMimeType: function (hs) {
          if (hu == null) {
            hS.mimeType = hs;
          }
          return this;
        },
        statusCode: function (hs) {
          if (hs) {
            if (hu) {
              hr.always(hs[hr.status]);
            } else {
              for (var H0 in hs) {
                hU[H0] = [hU[H0], hs[H0]];
              }
            }
          }
          return this;
        },
        abort: function (hs) {
          hs = hs || hz;
          if (hb) {
            hb.abort(hs);
          }
          hl(0, hs);
          return this;
        }
      };
      hK.promise(hr);
      hS.url = ((hZ || hS.url || hh.href) + "").replace(hQ, hh.protocol + "//");
      hS.type = hy.method || hy.type || hS.method || hS.type;
      hS.dataTypes = (hS.dataType || "*").toLowerCase().match(RI) || [""];
      if (hS.crossDomain == null) {
        hZ = R5.createElement("a");
        try {
          hZ.href = hS.url;
          hZ.href = hZ.href;
          hS.crossDomain = hG.protocol + "//" + hG.host != hZ.protocol + "//" + hZ.host;
        } catch (hs) {
          hS.crossDomain = true;
        }
      }
      if (hS.data && hS.processData && typeof hS.data != "string") {
        hS.data = Rm.param(hS.data, hS.traditional);
      }
      hV(hg, hS, hy, hr);
      if (!hu) {
        if ((ha = Rm.event && hS.global) && Rm.active++ == 0) {
          Rm.event.trigger("ajaxStart");
        }
        hS.type = hS.type.toUpperCase();
        hS.hasContent = !hd.test(hS.type);
        hT = hS.url.replace(hm, "");
        if (hS.hasContent) {
          if (hS.data && hS.processData && (hS.contentType || "").indexOf("application/x-www-form-urlencoded") === 0) {
            hS.data = hS.data.replace(hY, "+");
          }
        } else {
          hZ = hS.url.slice(hT.length);
          if (hS.data && (hS.processData || typeof hS.data == "string")) {
            hT += (hO.test(hT) ? "&" : "?") + hS.data;
            delete hS.data;
          }
          if (hS.cache === false) {
            hT = hT.replace(hC, "$1");
            hZ = (hO.test(hT) ? "&" : "?") + "_=" + hH++ + hZ;
          }
          hS.url = hT + hZ;
        }
        if (hS.ifModified && (Rm.lastModified[hT] && hr.setRequestHeader("If-Modified-Since", Rm.lastModified[hT]), Rm.etag[hT])) {
          hr.setRequestHeader("If-None-Match", Rm.etag[hT]);
        }
        if (hS.data && hS.hasContent && hS.contentType !== false || hy.contentType) {
          hr.setRequestHeader("Content-Type", hS.contentType);
        }
        hr.setRequestHeader("Accept", hS.dataTypes[0] && hS.accepts[hS.dataTypes[0]] ? hS.accepts[hS.dataTypes[0]] + (hS.dataTypes[0] !== "*" ? ", " + hN + "; q=0.01" : "") : hS.accepts["*"]);
        for (hP in hS.headers) {
          hr.setRequestHeader(hP, hS.headers[hP]);
        }
        if (hS.beforeSend && (hS.beforeSend.call(hJ, hr, hS) === false || hu)) {
          return hr.abort();
        }
        hz = "abort";
        hD.add(hS.complete);
        hr.done(hS.success);
        hr.fail(hS.error);
        if (hb = hV(hp, hS, hy, hr)) {
          hr.readyState = 1;
          if (ha) {
            hw.trigger("ajaxSend", [hr, hS]);
          }
          if (hu) {
            return hr;
          }
          if (hS.async && hS.timeout > 0) {
            hE = R0.setTimeout(function () {
              hr.abort("timeout");
            }, hS.timeout);
          }
          try {
            hu = false;
            hb.send(hW, hl);
          } catch (H0) {
            if (hu) {
              throw H0;
            }
            hl(-1, H0);
          }
        } else {
          hl(-1, "No Transport");
        }
      }
      return hr;
      function hl(H1, H2, H3, H4) {
        var H5;
        var H6;
        var H7;
        var H8 = H2;
        if (!hu) {
          hu = true;
          if (hE) {
            R0.clearTimeout(hE);
          }
          hb = undefined;
          hq = H4 || "";
          hr.readyState = H1 > 0 ? 4 : 0;
          H4 = H1 >= 200 && H1 < 300 || H1 === 304;
          if (H3) {
            H7 = function (H9, HR, Hj) {
              var Hh;
              var HH;
              var HO;
              var Ho;
              var HA = H9.contents;
              for (var HF = H9.dataTypes; HF[0] === "*";) {
                HF.shift();
                if (Hh === undefined) {
                  Hh = H9.mimeType || HR.getResponseHeader("Content-Type");
                }
              }
              if (Hh) {
                for (HH in HA) {
                  if (HA[HH] && HA[HH].test(Hh)) {
                    HF.unshift(HH);
                    break;
                  }
                }
              }
              if (HF[0] in Hj) {
                HO = HF[0];
              } else {
                for (HH in Hj) {
                  if (!HF[0] || H9.converters[HH + " " + HF[0]]) {
                    HO = HH;
                    break;
                  }
                  Ho = Ho || HH;
                }
                HO = HO || Ho;
              }
              if (HO) {
                if (HO !== HF[0]) {
                  HF.unshift(HO);
                }
                return Hj[HO];
              }
            }(hS, hr, H3);
          }
          H7 = function (H9, HR, Hj, Hh) {
            var HH;
            var HO;
            var Ho;
            var HA;
            var HF;
            var HB = {};
            var HY = H9.dataTypes.slice();
            if (HY[1]) {
              for (Ho in H9.converters) {
                HB[Ho.toLowerCase()] = H9.converters[Ho];
              }
            }
            for (HO = HY.shift(); HO;) {
              if (H9.responseFields[HO]) {
                Hj[H9.responseFields[HO]] = HR;
              }
              if (!HF && Hh && H9.dataFilter) {
                HR = H9.dataFilter(HR, H9.dataType);
              }
              HF = HO;
              if (HO = HY.shift()) {
                if (HO === "*") {
                  HO = HF;
                } else if (HF !== "*" && HF !== HO) {
                  if (!(Ho = HB[HF + " " + HO] || HB["* " + HO])) {
                    for (HH in HB) {
                      if ((HA = HH.split(" "))[1] === HO && (Ho = HB[HF + " " + HA[0]] || HB["* " + HA[0]])) {
                        if (Ho === true) {
                          Ho = HB[HH];
                        } else if (HB[HH] !== true) {
                          HO = HA[0];
                          HY.unshift(HA[1]);
                        }
                        break;
                      }
                    }
                  }
                  if (Ho !== true) {
                    if (Ho && H9.throws) {
                      HR = Ho(HR);
                    } else {
                      try {
                        HR = Ho(HR);
                      } catch (Hm) {
                        return {
                          state: "parsererror",
                          error: Ho ? Hm : "No conversion from " + HF + " to " + HO
                        };
                      }
                    }
                  }
                }
              }
            }
            return {
              state: "success",
              data: HR
            };
          }(hS, H7, hr, H4);
          if (H4) {
            if (hS.ifModified && ((H3 = hr.getResponseHeader("Last-Modified")) && (Rm.lastModified[hT] = H3), H3 = hr.getResponseHeader("etag"))) {
              Rm.etag[hT] = H3;
            }
            if (H1 === 204 || hS.type === "HEAD") {
              H8 = "nocontent";
            } else if (H1 === 304) {
              H8 = "notmodified";
            } else {
              H8 = H7.state;
              H5 = H7.data;
              H4 = !(H6 = H7.error);
            }
          } else {
            H6 = H8;
            if (!!H1 || !H8) {
              H8 = "error";
              if (H1 < 0) {
                H1 = 0;
              }
            }
          }
          hr.status = H1;
          hr.statusText = (H2 || H8) + "";
          if (H4) {
            hK.resolveWith(hJ, [H5, H8, hr]);
          } else {
            hK.rejectWith(hJ, [hr, H8, H6]);
          }
          hr.statusCode(hU);
          hU = undefined;
          if (ha) {
            hw.trigger(H4 ? "ajaxSuccess" : "ajaxError", [hr, hS, H4 ? H5 : H6]);
          }
          hD.fireWith(hJ, [hr, H8]);
          if (ha) {
            hw.trigger("ajaxComplete", [hr, hS]);
            if (! --Rm.active) {
              Rm.event.trigger("ajaxStop");
            }
          }
        }
      }
    },
    getJSON: function (hZ, hy, hb) {
      return Rm.get(hZ, hy, hb, "json");
    },
    getScript: function (hZ, hy) {
      return Rm.get(hZ, undefined, hy, "script");
    }
  });
  Rm.each(["get", "post"], function (hZ, hy) {
    Rm[hy] = function (hb, hT, hq, hv) {
      if (R2(hT)) {
        hv = hv || hq;
        hq = hT;
        hT = undefined;
      }
      return Rm.ajax(Rm.extend({
        url: hb,
        type: hy,
        dataType: hv,
        data: hT,
        success: hq
      }, Rm.isPlainObject(hb) && hb));
    };
  });
  Rm._evalUrl = function (hZ) {
    return Rm.ajax({
      url: hZ,
      type: "GET",
      dataType: "script",
      cache: true,
      async: false,
      global: false,
      throws: true
    });
  };
  Rm.fn.extend({
    wrapAll: function (hZ) {
      if (this[0]) {
        if (R2(hZ)) {
          hZ = hZ.call(this[0]);
        }
        hZ = Rm(hZ, this[0].ownerDocument).eq(0).clone(true);
        if (this[0].parentNode) {
          hZ.insertBefore(this[0]);
        }
        hZ.map(function () {
          for (var hy = this; hy.firstElementChild;) {
            hy = hy.firstElementChild;
          }
          return hy;
        }).append(this);
      }
      return this;
    },
    wrapInner: function (hZ) {
      if (R2(hZ)) {
        return this.each(function (hy) {
          Rm(this).wrapInner(hZ.call(this, hy));
        });
      } else {
        return this.each(function () {
          var hy = Rm(this);
          var hb = hy.contents();
          if (hb.length) {
            hb.wrapAll(hZ);
          } else {
            hy.append(hZ);
          }
        });
      }
    },
    wrap: function (hZ) {
      var hy = R2(hZ);
      return this.each(function (hb) {
        Rm(this).wrapAll(hy ? hZ.call(this, hb) : hZ);
      });
    },
    unwrap: function (hZ) {
      this.parent(hZ).not("body").each(function () {
        Rm(this).replaceWith(this.childNodes);
      });
      return this;
    }
  });
  Rm.expr.pseudos.hidden = function (hZ) {
    return !Rm.expr.pseudos.visible(hZ);
  };
  Rm.expr.pseudos.visible = function (hZ) {
    return !!hZ.offsetWidth || !!hZ.offsetHeight || !!hZ.getClientRects().length;
  };
  Rm.ajaxSettings.xhr = function () {
    try {
      return new R0.XMLHttpRequest();
    } catch (hZ) {}
  };
  var hx = {
    0: 200,
    1223: 204
  };
  var hM = Rm.ajaxSettings.xhr();
  RA.cors = !!hM && "withCredentials" in hM;
  RA.ajax = hM = !!hM;
  Rm.ajaxTransport(function (hZ) {
    var hy;
    var hb;
    if (RA.cors || hM && !hZ.crossDomain) {
      return {
        send: function (hT, hq) {
          var hv;
          var hE = hZ.xhr();
          hE.open(hZ.type, hZ.url, hZ.async, hZ.username, hZ.password);
          if (hZ.xhrFields) {
            for (hv in hZ.xhrFields) {
              hE[hv] = hZ.xhrFields[hv];
            }
          }
          if (hZ.mimeType && hE.overrideMimeType) {
            hE.overrideMimeType(hZ.mimeType);
          }
          if (!hZ.crossDomain && !hT["X-Requested-With"]) {
            hT["X-Requested-With"] = "XMLHttpRequest";
          }
          for (hv in hT) {
            hE.setRequestHeader(hv, hT[hv]);
          }
          hy = function (hu) {
            return function () {
              if (hy) {
                hy = hb = hE.onload = hE.onerror = hE.onabort = hE.ontimeout = hE.onreadystatechange = null;
                if (hu === "abort") {
                  hE.abort();
                } else if (hu === "error") {
                  if (typeof hE.status != "number") {
                    hq(0, "error");
                  } else {
                    hq(hE.status, hE.statusText);
                  }
                } else {
                  hq(hx[hE.status] || hE.status, hE.statusText, (hE.responseType || "text") !== "text" || typeof hE.responseText != "string" ? {
                    binary: hE.response
                  } : {
                    text: hE.responseText
                  }, hE.getAllResponseHeaders());
                }
              }
            };
          };
          hE.onload = hy();
          hb = hE.onerror = hE.ontimeout = hy("error");
          if (hE.onabort !== undefined) {
            hE.onabort = hb;
          } else {
            hE.onreadystatechange = function () {
              if (hE.readyState === 4) {
                R0.setTimeout(function () {
                  if (hy) {
                    hb();
                  }
                });
              }
            };
          }
          hy = hy("abort");
          try {
            hE.send(hZ.hasContent && hZ.data || null);
          } catch (hu) {
            if (hy) {
              throw hu;
            }
          }
        },
        abort: function () {
          if (hy) {
            hy();
          }
        }
      };
    }
  });
  Rm.ajaxPrefilter(function (hZ) {
    if (hZ.crossDomain) {
      hZ.contents.script = false;
    }
  });
  Rm.ajaxSetup({
    accepts: {
      script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
    },
    contents: {
      script: /\b(?:java|ecma)script\b/
    },
    converters: {
      "text script": function (hZ) {
        Rm.globalEval(hZ);
        return hZ;
      }
    }
  });
  Rm.ajaxPrefilter("script", function (hZ) {
    if (hZ.cache === undefined) {
      hZ.cache = false;
    }
    if (hZ.crossDomain) {
      hZ.type = "GET";
    }
  });
  Rm.ajaxTransport("script", function (hZ) {
    var hy;
    var hb;
    if (hZ.crossDomain) {
      return {
        send: function (hT, hq) {
          hy = Rm("<script>").prop({
            charset: hZ.scriptCharset,
            src: hZ.url
          }).on("load error", hb = function (hv) {
            hy.remove();
            hb = null;
            if (hv) {
              hq(hv.type === "error" ? 404 : 200, hv.type);
            }
          });
          R5.head.appendChild(hy[0]);
        },
        abort: function () {
          if (hb) {
            hb();
          }
        }
      };
    }
  });
  var hI = [];
  var hX = /(=)\?(?=&|$)|\?\?/;
  Rm.ajaxSetup({
    jsonp: "callback",
    jsonpCallback: function () {
      var hZ = hI.pop() || Rm.expando + "_" + hH++;
      this[hZ] = true;
      return hZ;
    }
  });
  Rm.ajaxPrefilter("json jsonp", function (hZ, hy, hb) {
    var hT;
    var hq;
    var hv;
    var hE = hZ.jsonp !== false && (hX.test(hZ.url) ? "url" : typeof hZ.data == "string" && (hZ.contentType || "").indexOf("application/x-www-form-urlencoded") === 0 && hX.test(hZ.data) && "data");
    if (hE || hZ.dataTypes[0] === "jsonp") {
      hT = hZ.jsonpCallback = R2(hZ.jsonpCallback) ? hZ.jsonpCallback() : hZ.jsonpCallback;
      if (hE) {
        hZ[hE] = hZ[hE].replace(hX, "$1" + hT);
      } else if (hZ.jsonp !== false) {
        hZ.url += (hO.test(hZ.url) ? "&" : "?") + hZ.jsonp + "=" + hT;
      }
      hZ.converters["script json"] = function () {
        if (!hv) {
          Rm.error(hT + " was not called");
        }
        return hv[0];
      };
      hZ.dataTypes[0] = "json";
      hq = R0[hT];
      R0[hT] = function () {
        hv = arguments;
      };
      hb.always(function () {
        if (hq === undefined) {
          Rm(R0).removeProp(hT);
        } else {
          R0[hT] = hq;
        }
        if (hZ[hT]) {
          hZ.jsonpCallback = hy.jsonpCallback;
          hI.push(hT);
        }
        if (hv && R2(hq)) {
          hq(hv[0]);
        }
        hv = hq = undefined;
      });
      return "script";
    }
  });
  (R4 = R5.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>";
  RA.createHTMLDocument = R4.childNodes.length === 2;
  Rm.parseHTML = function (hZ, hy, hb) {
    var hT;
    if (typeof hZ != "string") {
      return [];
    } else {
      if (typeof hy == "boolean") {
        hb = hy;
        hy = false;
      }
      if (!hy) {
        if (RA.createHTMLDocument) {
          (hT = (hy = R5.implementation.createHTMLDocument("")).createElement("base")).href = R5.location.href;
          hy.head.appendChild(hT);
        } else {
          hy = R5;
        }
      }
      hT = !hb && [];
      if (hb = RN.exec(hZ)) {
        return [hy.createElement(hb[1])];
      } else {
        hb = j7([hZ], hy, hT);
        if (hT && hT.length) {
          Rm(hT).remove();
        }
        return Rm.merge([], hb.childNodes);
      }
    }
  };
  Rm.fn.load = function (hZ, hy, hb) {
    var hT;
    var hq;
    var hv;
    var hE = this;
    var hu = hZ.indexOf(" ");
    if (hu > -1) {
      hT = h6(hZ.slice(hu));
      hZ = hZ.slice(0, hu);
    }
    if (R2(hy)) {
      hb = hy;
      hy = undefined;
    } else if (hy && typeof hy == "object") {
      hq = "POST";
    }
    if (hE.length > 0) {
      Rm.ajax({
        url: hZ,
        type: hq || "GET",
        dataType: "html",
        data: hy
      }).done(function (ha) {
        hv = arguments;
        hE.html(hT ? Rm("<div>").append(Rm.parseHTML(ha)).find(hT) : ha);
      }).always(hb && function (ha, hP) {
        hE.each(function () {
          hb.apply(this, hv || [ha.responseText, hP, ha]);
        });
      });
    }
    return this;
  };
  Rm.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (hZ, hy) {
    Rm.fn[hy] = function (hb) {
      return this.on(hy, hb);
    };
  });
  Rm.expr.pseudos.animated = function (hZ) {
    return Rm.grep(Rm.timers, function (hy) {
      return hZ === hy.elem;
    }).length;
  };
  Rm.offset = {
    setOffset: function (hZ, hy, hb) {
      var hT;
      var hq;
      var hv;
      var hE;
      var hu = Rm.css(hZ, "position");
      var ha = Rm(hZ);
      var hP = {};
      if (hu === "static") {
        hZ.style.position = "relative";
      }
      hv = ha.offset();
      hT = Rm.css(hZ, "top");
      hE = Rm.css(hZ, "left");
      hu = (hu === "absolute" || hu === "fixed") && (hT + hE).indexOf("auto") > -1 ? (hq = (hu = ha.position()).top, hu.left) : (hq = parseFloat(hT) || 0, parseFloat(hE) || 0);
      if ((hy = R2(hy) ? hy.call(hZ, hb, Rm.extend({}, hv)) : hy).top != null) {
        hP.top = hy.top - hv.top + hq;
      }
      if (hy.left != null) {
        hP.left = hy.left - hv.left + hu;
      }
      if ("using" in hy) {
        hy.using.call(hZ, hP);
      } else {
        ha.css(hP);
      }
    }
  };
  Rm.fn.extend({
    offset: function (hZ) {
      var hy;
      var hb;
      if (arguments.length) {
        if (hZ === undefined) {
          return this;
        } else {
          return this.each(function (hT) {
            Rm.offset.setOffset(this, hZ, hT);
          });
        }
      } else if (hb = this[0]) {
        if (hb.getClientRects().length) {
          hy = hb.getBoundingClientRect();
          hb = hb.ownerDocument.defaultView;
          return {
            top: hy.top + hb.pageYOffset,
            left: hy.left + hb.pageXOffset
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
        var hZ;
        var hy;
        var hb;
        var hT = this[0];
        var hq = {
          top: 0,
          left: 0
        };
        if (Rm.css(hT, "position") === "fixed") {
          hy = hT.getBoundingClientRect();
        } else {
          hy = this.offset();
          hb = hT.ownerDocument;
          hZ = hT.offsetParent || hb.documentElement;
          while (hZ && (hZ === hb.body || hZ === hb.documentElement) && Rm.css(hZ, "position") === "static") {
            hZ = hZ.parentNode;
          }
          if (hZ && hZ !== hT && hZ.nodeType === 1) {
            (hq = Rm(hZ).offset()).top += Rm.css(hZ, "borderTopWidth", true);
            hq.left += Rm.css(hZ, "borderLeftWidth", true);
          }
        }
        return {
          top: hy.top - hq.top - Rm.css(hT, "marginTop", true),
          left: hy.left - hq.left - Rm.css(hT, "marginLeft", true)
        };
      }
    },
    offsetParent: function () {
      return this.map(function () {
        for (var hZ = this.offsetParent; hZ && Rm.css(hZ, "position") === "static";) {
          hZ = hZ.offsetParent;
        }
        return hZ || j8;
      });
    }
  });
  Rm.each({
    scrollLeft: "pageXOffset",
    scrollTop: "pageYOffset"
  }, function (hZ, hy) {
    var hb = hy === "pageYOffset";
    Rm.fn[hZ] = function (hT) {
      return RT(this, function (hq, hv, hE) {
        var hu;
        if (R3(hq)) {
          hu = hq;
        } else if (hq.nodeType === 9) {
          hu = hq.defaultView;
        }
        if (hE === undefined) {
          if (hu) {
            return hu[hy];
          } else {
            return hq[hv];
          }
        }
        if (hu) {
          hu.scrollTo(hb ? hu.pageXOffset : hE, hb ? hE : hu.pageYOffset);
        } else {
          hq[hv] = hE;
        }
      }, hZ, hT, arguments.length);
    };
  });
  Rm.each(["top", "left"], function (hZ, hy) {
    Rm.cssHooks[hy] = jy(RA.pixelPosition, function (hb, hT) {
      if (hT) {
        hT = jZ(hb, hy);
        if (jI.test(hT)) {
          return Rm(hb).position()[hy] + "px";
        } else {
          return hT;
        }
      }
    });
  });
  Rm.each({
    Height: "height",
    Width: "width"
  }, function (hZ, hy) {
    Rm.each({
      padding: "inner" + hZ,
      content: hy,
      "": "outer" + hZ
    }, function (hb, hT) {
      Rm.fn[hT] = function (hq, hv) {
        var hE = arguments.length && (hb || typeof hq != "boolean");
        var hu = hb || (hq === true || hv === true ? "margin" : "border");
        return RT(this, function (ha, hP, hS) {
          var hJ;
          if (R3(ha)) {
            if (hT.indexOf("outer") === 0) {
              return ha["inner" + hZ];
            } else {
              return ha.document.documentElement["client" + hZ];
            }
          } else if (ha.nodeType === 9) {
            hJ = ha.documentElement;
            return Math.max(ha.body["scroll" + hZ], hJ["scroll" + hZ], ha.body["offset" + hZ], hJ["offset" + hZ], hJ["client" + hZ]);
          } else if (hS === undefined) {
            return Rm.css(ha, hP, hu);
          } else {
            return Rm.style(ha, hP, hS, hu);
          }
        }, hy, hE ? hq : undefined, hE);
      };
    });
  });
  Rm.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function (hZ, hy) {
    Rm.fn[hy] = function (hb, hT) {
      if (arguments.length > 0) {
        return this.on(hy, null, hb, hT);
      } else {
        return this.trigger(hy);
      }
    };
  });
  Rm.fn.extend({
    hover: function (hZ, hy) {
      return this.mouseenter(hZ).mouseleave(hy || hZ);
    }
  });
  Rm.fn.extend({
    bind: function (hZ, hy, hb) {
      return this.on(hZ, null, hy, hb);
    },
    unbind: function (hZ, hy) {
      return this.off(hZ, null, hy);
    },
    delegate: function (hZ, hy, hb, hT) {
      return this.on(hy, hZ, hb, hT);
    },
    undelegate: function (hZ, hy, hb) {
      if (arguments.length === 1) {
        return this.off(hZ, "**");
      } else {
        return this.off(hy, hZ || "**", hb);
      }
    }
  });
  Rm.proxy = function (hZ, hy) {
    var hb;
    var hT;
    if (typeof hy == "string") {
      hT = hZ[hy];
      hy = hZ;
      hZ = hT;
    }
    if (R2(hZ)) {
      hb = R7.call(arguments, 2);
      (hT = function () {
        return hZ.apply(hy || this, hb.concat(R7.call(arguments)));
      }).guid = hZ.guid = hZ.guid || Rm.guid++;
      return hT;
    }
  };
  Rm.holdReady = function (hZ) {
    if (hZ) {
      Rm.readyWait++;
    } else {
      Rm.ready(true);
    }
  };
  Rm.isArray = Array.isArray;
  Rm.parseJSON = JSON.parse;
  Rm.nodeName = Rp;
  Rm.isFunction = R2;
  Rm.isWindow = R3;
  Rm.camelCase = Ru;
  Rm.type = RY;
  Rm.now = Date.now;
  Rm.isNumeric = function (hZ) {
    var hy = Rm.type(hZ);
    return (hy === "number" || hy === "string") && !isNaN(hZ - parseFloat(hZ));
  };
  if (typeof define == "function" && define.amd) {
    define("jquery", [], function () {
      return Rm;
    });
  }
  var hi = R0.jQuery;
  var hf = R0.$;
  Rm.noConflict = function (hZ) {
    if (R0.$ === Rm) {
      R0.$ = hf;
    }
    if (hZ && R0.jQuery === Rm) {
      R0.jQuery = hi;
    }
    return Rm;
  };
  if (!R1) {
    R0.jQuery = R0.$ = Rm;
  }
  return Rm;
});
(() => {
  var R0;
  var R1;
  var R2;
  var R3;
  var R4 = {
    696: (R8, R9, RR) => {
      'use strict';

      RR.d(R9, {
        Z: () => Rj
      });
      const Rj = {
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
    9128: (R8, R9, RR) => {
      'use strict';

      function Rj(Rh, RH, RO) {
        function Ro() {
          while (RA.length > 0) {
            var {
              command: RB,
              args: RY
            } = RA.shift();
            (RF[RB] || Rh[RB]).apply(Rh, RY);
          }
        }
        const RA = [];
        const RF = {};
        RH.forEach(RB => {
          const RY = Rh[RB];
          RF[RB] = RY;
          Rh[RB] = function (...Rm) {
            if (RO()) {
              RA.push({
                command: RB,
                args: Rm
              });
            } else {
              Ro();
              if (RY) {
                RY.apply(this, Rm);
              }
            }
          };
        });
        Object.defineProperty(this, "queue", {
          enumerable: true,
          get: () => RA
        });
        this.flush = Ro;
        this.empty = function () {
          RA.length = 0;
        };
        this.off = function () {
          RH.forEach(RB => {
            var RY = RF[RB];
            if (RY) {
              Rh[RB] = RY;
              delete RF[RB];
            }
          });
        };
        this.destroy = function () {
          this.off();
          this.empty();
        };
      }
      RR.d(R9, {
        Z: () => Rj
      });
    },
    4742: (R8, R9, RR) => {
      'use strict';

      RR.d(R9, {
        Z: () => Rj
      });
      const Rj = {
        debug: false
      };
    },
    5191: (R8, R9, RR) => {
      'use strict';

      RR.d(R9, {
        R: () => Rh,
        a: () => Rj
      });
      const Rj = function (RH) {
        return RH = RH.slice && RH.slice(-2) === "px" ? RH.slice(0, -2) : RH;
      };
      const Rh = function (RH, RO) {
        var Ro;
        if (RO.toString().indexOf("%") !== -1 && typeof RH == "string" && RH) {
          if (/^\d*\.?\d+%$/.test(RH)) {
            return RH;
          } else if ((RO = RH.indexOf(":")) === -1 || (Ro = parseFloat(RH.substr(0, RO)), RH = parseFloat(RH.substr(RO + 1)), Ro <= 0) || RH <= 0) {
            return 0;
          } else {
            return RH / Ro * 100 + "%";
          }
        } else {
          return 0;
        }
      };
    },
    5083: (R8, R9, RR) => {
      'use strict';

      RR.d(R9, {
        G0: () => RY,
        ZP: () => Rm,
        ke: () => RB
      });
      var Rj = RR(5191);
      var Rh = RR(1569);
      var RH = RR(9888);
      var RO = RR(6042);
      var Ro = RR(8348);
      var RA = RR(696);
      var RF = RR(8518);
      const RB = {
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
        localization: RA.Z,
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
      const RY = function (RC) {
        if (RC < 5) {
          return 5;
        } else {
          return RC;
        }
      };
      const Rm = function (RC, Rn) {
        var Rd;
        var RQ = {};
        if (Rn && function (RN) {
          if (RN == null) {
            throw new TypeError("Cannot convert undefined or null to object");
          }
          return Object.prototype.hasOwnProperty.call(Object(RN), "mute");
        }(Rn)) {
          if (typeof Rn.mute == "boolean") {
            RQ.mute = Rn.mute;
          }
          delete Rn.mute;
        }
        var RQ = Object.assign({}, RQ, (RQ = window) == null || (RQ = RQ.jwplayer) == null ? undefined : RQ.defaults, Rn, RC);
        Rd = RQ;
        Object.keys(Rd).forEach(RN => {
          if (RN !== "id") {
            Rd[RN] = (0, RH.serialize)(Rd[RN]);
          }
        });
        var Rn = RQ.forceLocalizationDefaults ? RB.language : (0, RF.G3)();
        var RC = (0, RF.tK)(RQ.intl);
        RQ.localization = (0, RF.Mh)(RA.Z, (0, RF.Pm)(RQ, RC, Rn));
        var Rg = Object.assign({}, RB, RQ);
        if (Rg.base === ".") {
          Rg.base = (0, Rh.getScriptPath)("jwplayer.js");
        }
        Rg.base = (Rg.base || (0, Rh.loadFrom)()).replace(/\/?$/, "/");
        RR.p = Rg.base;
        Rg.width = (0, Rj.a)(Rg.width);
        Rg.height = (0, Rj.a)(Rg.height);
        Rg.aspectratio = (0, Rj.R)(Rg.aspectratio, Rg.width);
        if (typeof Rg.volume == "string") {
          Rg.volume = parseFloat(Rg.volume);
        }
        Rg.volume = (0, RO.qh)(Rg.volume) ? Math.min(Math.max(0, Rg.volume), 100) : RB.volume;
        Rg.mute = Boolean(Rg.mute);
        Rg.language = Rn;
        Rg.intl = RC;
        var Rn = Rg.playlistIndex;
        if (Rn) {
          Rg.item = Rn;
        }
        if (!(0, RO.hj)(Rg.item)) {
          Rg.item = 0;
        }
        var RC = RQ.autoPause;
        if (RC) {
          Rg.autoPause.viewability = !("viewability" in RC) || Boolean(RC.viewability);
        }
        var Rn = Rg.playbackRateControls;
        if (Rn) {
          let RN = Rg.playbackRates;
          if ((RN = (RN = Array.isArray(Rn) ? Rn : RN).filter(RG => (0, RO.hj)(RG) && RG >= 0.25 && RG <= 4).map(RG => Math.round(RG * 100) / 100)).indexOf(1) < 0) {
            RN.push(1);
          }
          RN.sort();
          Rg.playbackRateControls = true;
          Rg.playbackRates = RN;
        }
        if (!Rg.playbackRateControls || Rg.playbackRates.indexOf(Rg.defaultPlaybackRate) < 0) {
          Rg.defaultPlaybackRate = 1;
        }
        Rg.playbackRate = Rg.defaultPlaybackRate;
        if (!Rg.aspectratio) {
          delete Rg.aspectratio;
        }
        RQ = Rg.playlist;
        if (RQ) {
          if (Array.isArray(RQ.playlist)) {
            Rg.feedData = RQ;
            Rg.playlist = RQ.playlist;
          }
        } else {
          const RG = (0, RO.ei)(Rg, ["title", "description", "type", "mediaid", "image", "images", "file", "sources", "tracks", "preload", "duration", "chapters"]);
          Rg.playlist = [RG];
        }
        Rg.qualityLabels = Rg.qualityLabels || Rg.hlslabels;
        delete Rg.duration;
        let Rp = Rg.liveTimeout;
        if (Rp !== null) {
          if ((0, RO.qh)(Rp)) {
            if (Rp !== 0) {
              Rp = Math.max(30, Rp);
            }
          } else {
            Rp = null;
          }
          Rg.liveTimeout = Rp;
        }
        RC = parseFloat(Rg.bandwidthEstimate);
        Rn = parseFloat(Rg.bitrateSelection);
        Rg.bandwidthEstimate = (0, RO.qh)(RC) ? RC : function (Rc) {
          Rc = parseFloat(Rc);
          if ((0, RO.qh)(Rc)) {
            return Math.max(Rc, 1);
          } else {
            return RB.bandwidthEstimate;
          }
        }(Rg.defaultBandwidthEstimate);
        Rg.bitrateSelection = (0, RO.qh)(Rn) ? Rn : RB.bitrateSelection;
        Rg.liveSyncDuration = RY(Rg.liveSyncDuration);
        Rg.backgroundLoading = ((0, RO.jn)(Rg.backgroundLoading) ? Rg : Ro.Features).backgroundLoading;
        return Rg;
      };
    },
    2894: (R8, R9, RR) => {
      'use strict';

      RR.d(R9, {
        Ep: () => RH,
        Jt: () => RO,
        Tr: () => Rh,
        Zq: () => Ro
      });
      var Rj = RR(4446);
      const Rh = {};
      const RH = function (RA, RF) {
        return () => {
          throw new Rj.rG(Rj.pJ, RA, RF);
        };
      };
      const RO = function (RA, RF) {
        return () => {
          throw new Rj.rG(null, RA, RF);
        };
      };
      const Ro = function () {
        return RR.e(681).then(function (RA) {
          return RR(2739).default;
        }.bind(null, RR)).catch(RH(Rj.fU + 101));
      };
    },
    623: (R8, R9, RR) => {
      'use strict';

      RR.d(R9, {
        ZP: () => Rs,
        c2: () => Rl
      });
      var Rj = RR(9128);
      var Rh = RR(2445);
      var RH = RR(2894);
      var RO = RR(393);
      var Ro = RR(8320);
      var RA = RR(2963);
      var RF = RR(670);
      var RB = RR(4601);
      var RY = RR(4446);
      var Rm = RR(8348);
      let RC = null;
      function Rn() {
        var j0 = window.IntersectionObserverEntry;
        return !j0 || !("IntersectionObserver" in window) || !("intersectionRatio" in j0.prototype);
      }
      function Rd() {
        return (Rn() ? RR.e(943).then(function (j0) {
          return RR(6337);
        }.bind(null, RR)).catch((0, RH.Ep)(RY.fU + 120)) : Promise.resolve()).then(RH.Zq);
      }
      const RQ = function (j0) {
        var j1;
        var j2 = j0.get("controls");
        var j3 = Rn();
        var j0 = function (j4) {
          const j5 = j4.get("playlist");
          if (Array.isArray(j5) && j5.length) {
            var j6 = (0, Ro.bx)(j4.get("item"), j5.length);
            var j7 = (0, Ro.T5)((0, RO.Z)(j5[j6]), j4);
            for (let jR = 0; jR < j7.length; jR++) {
              var j8 = j7[jR];
              var j9 = j4.getProviders();
              for (let jj = 0; jj < RA.B.length; jj++) {
                const jh = RA.B[jj];
                if (j9.providerSupports(jh, j8)) {
                  return jh.name === "html5";
                }
              }
            }
          }
          return false;
        }(j0);
        if (Rm.OS.tizen) {
          return Rd();
        } else if (j2 && j3 && j0) {
          j1 = RR.e(605).then(function (j4) {
            RR(6337);
            var j5 = RR(2739).default;
            RB.v.controls = RR(5827).default;
            (0, RF.Z)(RR(9181).default);
            return j5;
          }.bind(null, RR)).catch((0, RH.Ep)(RY.fU + 105));
          return RH.Tr.html5 = j1;
        } else if (j2 && j0) {
          j1 = RR.e(207).then(function (j4) {
            var j5 = RR(2739).default;
            RB.v.controls = RR(5827).default;
            (0, RF.Z)(RR(9181).default);
            return j5;
          }.bind(null, RR)).catch((0, RH.Ep)(RY.fU + 104));
          return RH.Tr.html5 = j1;
        } else if (j2 && j3) {
          return RR.e(493).then(function (j4) {
            RR(6337);
            var j5 = RR(2739).default;
            RB.v.controls = RR(5827).default;
            return j5;
          }.bind(null, RR)).catch((0, RH.Ep)(RY.fU + 103));
        } else if (j2) {
          return RR.e(581).then(function (j4) {
            var j5 = RR(2739).default;
            RB.v.controls = RR(5827).default;
            return j5;
          }.bind(null, RR)).catch((0, RH.Ep)(RY.fU + 102));
        } else {
          return Rd();
        }
      };
      var Rg = RR(1643);
      var Rp = RR(7263);
      var RN = RR(676);
      var RG = RR(8518);
      var Rc = RR(8675);
      var RV = RR(8381);
      function Re(j0, j1, j2) {
        (j0 = j0.attributes).playlist = (0, Ro.ZP)(j1);
        j0.feedData = j2;
      }
      function Rk(j0) {
        const j1 = j0.get("playlist");
        return new Promise((j2, j3) => {
          if (typeof j1 != "string") {
            const j5 = j0.get("feedData") || {};
            Re(j0, j1, j5);
            return j2();
          }
          var j4 = new Rp.Z();
          j4.on(Rg.Ow, function (j6) {
            var j7 = j6.playlist;
            delete j6.playlist;
            Re(j0, j7, j6);
            j2();
          });
          j4.on(Rg.pn, j6 => {
            Re(j0, [], {});
            j3((0, RY.l9)(j6, RY.xk));
          });
          j4.load(j1);
        });
      }
      function Rx(j0) {
        return j0.attributes._destroyed;
      }
      var RM = RR(1918);
      var RI = RR(6599);
      var RX = RR(7010);
      function Ri(j0) {
        let j1;
        this.start = function (j2) {
          const j3 = Rb(j0, j2);
          const j4 = Promise.all([(j2 = j0, RC = RC || RQ(j2)), Rq(j0), j3, Rt(j0), Ry(j0), Rf(j0), RT(j0)]);
          j2 = new Promise((j5, j6) => {
            j1 = setTimeout(() => {
              j6(new RY.rG(RY.pJ, RY.T6));
            }, 60000);
            var j7 = () => {
              clearTimeout(j1);
              setTimeout(j5, 60000);
            };
            j4.then(j7).catch(j7);
          });
          return Promise.race([j4, j2]).catch(j5 => {
            var j6 = () => {
              throw j5;
            };
            return j3.then(j6).catch(j6);
          }).then(j5 => {
            if ((j5 = j5) && j5.length) {
              j6 = j5.reduce((j7, j8) => j7.concat(j8), []).filter(j7 => j7 == null ? undefined : j7.code);
              return {
                core: j5[0],
                warnings: j6
              };
            } else {
              return {
                core: null,
                warnings: []
              };
            }
            var j6;
          });
        };
        this.destroy = function () {
          clearTimeout(j1);
          j0.set("_destroyed", true);
          j0 = null;
        };
      }
      const Rf = function (j0) {
        var j1 = j0.get("skin") ? j0.get("skin").url : undefined;
        if (typeof j1 != "string" || function (j2) {
          var j3 = document.styleSheets;
          for (let j4 = 0, j5 = j3.length; j4 < j5; j4++) {
            if (j3[j4].href === j2) {
              return 1;
            }
          }
        }(j1)) {
          return Promise.resolve();
        }
        {
          const j2 = true;
          return new RN.ZP(j1, true).load().catch(j3 => j3);
        }
      };
      const RZ = j0 => {
        j0 = j0.get("advertising");
        return Boolean(j0 == null ? undefined : j0.outstream);
      };
      const Rt = j0 => RZ(j0) ? Promise.resolve() : Rk(j0).then(() => {
        if (j0.get("drm") || (0, RM.w0)(j0.get("playlist"))) {
          return (0, RM.lD)(j0.get("edition"));
        }
      }).then(() => {
        return Rk(j1 = j0).then(() => {
          if (!Rx(j1)) {
            var j2 = (0, Ro.s7)(j1.get("playlist"), j1);
            j1.attributes.playlist = j2;
            try {
              (0, Ro._)(j2);
            } catch (j6) {
              j6.code += RY.xk;
              throw j6;
            }
            var j3 = j1.getProviders();
            var j4 = (0, Ro.bx)(j1.get("item"), j2.length);
            var {
              provider: j4,
              name: j5
            } = j3.choose(j2[j4].sources[0]);
            if (typeof j4 == "function") {
              return j4;
            } else if (RH.Tr.html5 && j5 === "html5") {
              return RH.Tr.html5;
            } else {
              return j3.load(j5).catch(j7 => {
                throw (0, RY.l9)(j7, RY.y4);
              });
            }
          }
        });
        var j1;
      });
      const Ry = (j0, j1) => {
        var j2 = [(j3 => {
          const j4 = j3.attributes;
          const j5 = j4.error;
          if (j5 && j5.code === RI.u5) {
            const j6 = j4.pid;
            const j7 = j4.ph;
            const j8 = new RI.ZP(j4.key);
            if (j7 > 0 && j7 < 4 && j6 && j8.duration() > -7776000000) {
              return new RN.ZP("//content.jwplatform.com/libraries/" + j6 + ".js").load().then(() => {
                var j9 = window.jwplayer.defaults.key;
                var jR = new RI.ZP(j9);
                if (!jR.error() && jR.token() === j8.token()) {
                  j4.key = j9;
                  j4.edition = jR.edition();
                  j4.error = jR.error();
                }
              }).catch(() => {});
            }
          }
          return Promise.resolve();
        })(j0)];
        if (!RZ(j0)) {
          j2.push(Promise.resolve());
        }
        return Promise.all(j2);
      };
      const Rb = (j0, j1) => {
        var j2;
        var j3;
        var j4;
        var j5 = () => (0, Rc.ZP)(j0, j1);
        if ((0, RX.Z)()) {
          j3 = j2 = j0;
          j4 = j1;
          return RR.e(168).then((j6 => new (RR(5545).default)(j4).setup(j3)).bind(null, RR)).catch((0, RH.Ep)(RY.fU + 130)).then(() => Rf(j2)).then(j5).catch(j5);
        } else {
          return j5();
        }
      };
      const RT = function (j0) {
        const j1 = j0.attributes;
        const {
          language: j2,
          base: j3,
          setupConfig: j4,
          intl: j5
        } = j1;
        const j6 = (0, RG.Pm)(j4, j5, j2);
        if (!(0, RG.q2)(j2) || (0, RG.dl)(j6)) {
          return Promise.resolve();
        } else {
          return new Promise(j7 => (0, RG.Dq)(j3, j2).then(({
            response: j8
          }) => {
            if (!Rx(j0)) {
              if (!j8) {
                throw new RY.rG(null, RY.wH);
              }
              j1.localization = (0, RG.Mh)(j8, j6);
              j7();
            }
          }).catch(j8 => {
            j7(j8.code === RY.wH ? j8 : (0, RY.l9)(j8, RY.A6));
          }));
        }
      };
      const Rq = j0 => new Promise(j1 => {
        var j2;
        if (j0.attributes.liveSyncDuration > 45) {
          return j1((0, RY.l9)(new Error(), RY.wM));
        } else if ((j2 = Array.isArray(j0.attributes.playlist) && j0.attributes.playlist.map(j3 => j3.chapters)) != null && j2.length) {
          return (0, RV.T2)(j2, j1);
        } else {
          return j1();
        }
      });
      var Rv = RR(2303);
      var RE = RR(7411);
      var Ru = RR(9888);
      var Ra = RR(4742);
      let RP = {
        removeItem(j0) {}
      };
      try {
        RP = window.localStorage || RP;
      } catch (j0) {}
      const RS = class {
        constructor(j1, j2) {
          this.namespace = j1;
          this.items = j2;
        }
        getAllItems() {
          return this.items.reduce((j1, j2) => {
            var j3 = RP[this.namespace + "." + j2];
            if (j3) {
              j1[j2] = j2 !== "captions" ? (0, Ru.serialize)(j3) : JSON.parse(j3);
            }
            return j1;
          }, {});
        }
        track(j1) {
          this.items.forEach(j2 => {
            j1.on("change:" + j2, (j3, j4) => {
              try {
                if (j2 === "captions") {
                  j4 = JSON.stringify(j4);
                }
                RP[this.namespace + "." + j2] = j4;
              } catch (j5) {
                if (Ra.Z.debug) {
                  console.error(j5);
                }
              }
            });
          });
        }
        clear() {
          this.items.forEach(j1 => {
            RP.removeItem(this.namespace + "." + j1);
          });
        }
      };
      var RJ = RR(7753);
      var Rw = RR(9918);
      var R9 = RR(328);
      var RK = RR(4225);
      var RD = RR(7683);
      var RU = RR(4609);
      var RW = RR(5882);
      RR(4671);
      RR(9926);
      function RL(j1, j2) {
        if (j2 && j2.code) {
          if (j2.sourceError) {
            console.error(j2.sourceError);
          }
          console.error(RY.rG.logMessage(j2.code));
        }
      }
      function Rz(j1) {
        if (j1 && j1.code) {
          console.warn(RY.rG.logMessage(j1.code));
        }
      }
      function Rr(j1) {
        this._events = {};
        this.modelShim = new RJ.Z();
        this.modelShim._qoeItem = new RE.Z();
        this.mediaShim = {};
        this.setup = new Ri(this.modelShim);
        this.currentContainer = this.originalContainer = j1;
        this.apiQueue = new Rj.Z(this, ["load", "play", "pause", "seek", "stop", "playlistItem", "playlistNext", "playlistPrev", "next", "preload", "setAllowFullscreen", "setConfig", "setCurrentAudioTrack", "setCurrentCaptions", "setCurrentQuality", "setFullscreen", "setPip", "requestPip", "addButton", "removeButton", "castToggle", "requestCast", "setMute", "setVolume", "setPlaybackRate", "addCues", "setCues", "getCues", "setPlaylistItem", "stopCasting", "getChapters", "getCurrentChapter", "setChapter", "resize", "setCaptions", "setControls"], () => true);
      }
      const Rl = function (j1, j2) {
        if (!document.body.contains(j1.currentContainer)) {
          const j3 = document.getElementById(j1.get("id"));
          if (j3) {
            j1.currentContainer = j3;
          }
        }
        if (j1.currentContainer.parentElement) {
          j1.currentContainer.parentElement.replaceChild(j2, j1.currentContainer);
        }
        j1.currentContainer = j2;
      };
      Object.assign(Rr.prototype, {
        on: R9.ZP.on,
        once: R9.ZP.once,
        off: R9.ZP.off,
        trigger: R9.ZP.trigger,
        init(j1, j2) {
          const j3 = this.modelShim;
          const j4 = new RS("jwplayer", ["volume", "mute", "captionLabel", "captions", "bandwidthEstimate", "bitrateSelection", "qualityLabel", "enableShortcuts"]);
          const j5 = j4 == null ? undefined : j4.getAllItems();
          j3.attributes = j3.attributes || {};
          Object.assign(this.mediaShim, Rw.L4);
          const j6 = j1;
          const j7 = (0, Rh.ZP)(Object.assign({}, j1), j5);
          j7.id = j2.id;
          j7.setupConfig = j6;
          Object.assign(j3.attributes, j7, Rw.bv);
          j3.getProviders = function () {
            return new Rv.Z(j7);
          };
          j3.setProvider = function () {};
          let j8 = (0, RD.Z)();
          {
            if (!j3.get("backgroundLoading")) {
              j8 = (0, RU.Z)(j8.getPrimedElement(), j8);
            }
            const j9 = this.primeUi = new RW.ZP((0, RW.GU)(this.originalContainer)).once("gesture", () => {
              j8.prime();
              this.preload();
              j9.destroy();
            });
          }
          j3.on("change:errorEvent", RL);
          return this.setup.start(j2).then(jR => {
            var jj = jR.core;
            if (!jj) {
              throw (0, RY.l9)(null, RY.y7);
            }
            if (this.setup) {
              this.on(Rg.cM, Rz);
              jR.warnings.forEach(jH => {
                this.trigger(Rg.cM, jH);
              });
              jR = this.modelShim.clone();
              if (jR.error) {
                throw jR.error;
              }
              var jh = this.apiQueue.queue.slice(0);
              this.apiQueue.destroy();
              Object.assign(this, jj.prototype);
              this.playerSetup(jR, j2, this.originalContainer, this._events, jh, j8);
              var jj = this._model;
              j3.off("change:errorEvent", RL);
              jj.on("change:errorEvent", RL);
              j4.track(jj);
              return this.updatePlaylist(jj.get("playlist"), jj.get("feedData")).catch(jH => {
                var jO = jH.code === RY._M ? RY.IB : RY.xk;
                throw (0, RY.l9)(jH, jO);
              });
            }
          }).then(() => {
            if (this.setup) {
              this.playerReady();
            }
          }).catch(jR => {
            var jj;
            var jh;
            var jH;
            if (this.setup) {
              jj = this;
              jh = j2;
              jH = jR;
              Promise.resolve().then(() => {
                var jO = (0, RY.Mm)(RY.ud, RY.nk, jH);
                var jo = jj._model || jj.modelShim;
                jO.message = jO.message || jo.get("localization").errors[jO.key];
                delete jO.key;
                var jA = jo.get("contextual");
                if (!jA) {
                  const jF = (0, RK.Z)(jj, jO);
                  if (RK.Z.cloneIcon) {
                    jF.querySelector(".jw-icon").appendChild(RK.Z.cloneIcon("error"));
                  }
                  Rl(jj, jF);
                }
                jo.set("errorEvent", jO);
                jo.set("state", Rg.Vy);
                jj.trigger(Rg.HH, jO);
                if (jA) {
                  jh.remove();
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
            Rl(this, this.originalContainer);
          }
          this.off();
          this._events = this._model = this.modelShim = this.apiQueue = this.primeUi = this.setup = null;
        },
        getContainer() {
          return this.currentContainer;
        },
        get(j1) {
          if (this.modelShim) {
            if (j1 in this.mediaShim) {
              return this.mediaShim[j1];
            } else {
              return this.modelShim.get(j1);
            }
          }
        },
        getItemQoe() {
          return this.modelShim._qoeItem;
        },
        getItemPromise: () => null,
        setItemCallback(j1) {
          if (this.modelShim) {
            this.modelShim.attributes.playlistItemCallback = j1;
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
          var j1;
          return ((j1 = this._model) == null ? undefined : j1.get("isReady")) || false;
        }
      });
      const Rs = Rr;
    },
    4446: (R8, R9, RR) => {
      'use strict';

      RR.d(R9, {
        A6: () => RG,
        DD: () => RY,
        EY: () => RQ,
        H4: () => RI,
        IB: () => RF,
        MD: () => Re,
        Mm: () => Rf,
        Sp: () => RM,
        T6: () => RH,
        Y7: () => RN,
        YQ: () => RB,
        _M: () => Rd,
        aD: () => Rp,
        fU: () => Ro,
        l9: () => RZ,
        nk: () => Rh,
        nm: () => Rt,
        o2: () => Rn,
        pJ: () => Rk,
        rG: () => Ri,
        tJ: () => RC,
        ud: () => RX,
        ul: () => RV,
        wH: () => Rc,
        wM: () => Rg,
        xk: () => RA,
        y4: () => Rm,
        y7: () => RO,
        zO: () => Rx
      });
      var Rj = RR(6042);
      const Rh = 100000;
      const RH = 100001;
      const RO = 100002;
      const Ro = 101000;
      const RA = 102000;
      const RF = 102700;
      const RB = 200001;
      const RY = 202000;
      const Rm = 104000;
      const RC = 203000;
      const Rn = 203640;
      const Rd = 203700;
      const RQ = 204000;
      const Rg = 300100;
      const Rp = 300200;
      const RN = 306000;
      const RG = 308000;
      const Rc = 308640;
      const RV = "cantPlayVideo";
      const Re = "badConnection";
      const Rk = "cantLoadPlayer";
      const Rx = "cantPlayInBrowser";
      const RM = "liveStreamDown";
      const RI = "protectedContent";
      const RX = "technicalError";
      class Ri {
        constructor(Ry, Rb, RT) {
          this.code = (0, Rj.qh)(Rb) ? Rb : 0;
          this.sourceError = RT || null;
          if (Ry) {
            this.key = Ry;
          } else {
            delete this.key;
          }
        }
        static logMessage(Ry) {
          var Rb = Ry % 1000;
          var RT = Math.floor((Ry - Rb) / 1000);
          let Rq = Ry.toString();
          return "JW Player " + (Ry > 299999 && Ry < 400000 ? "Warning" : "Error") + " " + Ry + ". For more information see https://developer.jwplayer.com/jw-player/docs/developer-guide/api/errors-reference#" + (Rq = Rb >= 400 && Rb < 600 ? RT + ("400-" + RT + "599") : Rq);
        }
      }
      const Rf = function (Ry, Rb, RT) {
        if (RT instanceof Ri && RT.code) {
          return RT;
        } else {
          return new Ri(Ry, Rb, RT);
        }
      };
      const RZ = function (Ry, Rb) {
        var RT = Rf(RX, Rb, Ry);
        RT.code = (Ry && Ry instanceof Ri && Ry.code || 0) + Rb;
        return RT;
      };
      const Rt = function (Ry) {
        var {
          name: Ry,
          message: Rb
        } = Ry;
        switch (Ry) {
          case "AbortError":
            if (/pause/.test(Rb)) {
              return 303213;
            } else if (/load/.test(Rb)) {
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
    6391: (R8, R9, RR) => {
      'use strict';

      RR.d(R9, {
        Z: () => Rj
      });
      const Rj = [];
    },
    7411: (R8, R9, RR) => {
      'use strict';

      RR.d(R9, {
        Z: () => Ro
      });
      var Rj = RR(5004);
      const Rh = window.performance || {
        timing: {}
      };
      const RH = Rh.timing.navigationStart || (0, Rj.z)();
      if (!("now" in Rh)) {
        Rh.now = () => (0, Rj.z)() - RH;
      }
      const RO = () => RH + Rh.now();
      const Ro = class {
        constructor() {
          this.startTimes = {};
          this.sum = {};
          this.counts = {};
          this.ticks = {};
        }
        start(RA) {
          this.startTimes[RA] = RO();
          this.counts[RA] = this.counts[RA] + 1 || 1;
        }
        end(RA) {
          var RF;
          if (this.startTimes[RA]) {
            RF = RO() - this.startTimes[RA];
            delete this.startTimes[RA];
            this.sum[RA] = this.sum[RA] + RF || RF;
          }
        }
        dump() {
          var RA;
          var RF = Object.assign({}, this.sum);
          for (const RB in this.startTimes) {
            if (!!function (RY, Rm) {
              if (RY == null) {
                throw new TypeError("Cannot convert undefined or null to object");
              }
              return Object.prototype.hasOwnProperty.call(Object(RY), Rm);
            }(this.startTimes, RB)) {
              RA = RO() - this.startTimes[RB];
              RF[RB] = RF[RB] + RA || RA;
            }
          }
          return {
            counts: Object.assign({}, this.counts),
            sums: RF,
            events: Object.assign({}, this.ticks)
          };
        }
        tick(RA) {
          this.ticks[RA] = RO();
        }
        clear(RA) {
          delete this.ticks[RA];
        }
        between(RA, RF) {
          if (this.ticks[RF] && this.ticks[RA]) {
            return this.ticks[RF] - this.ticks[RA];
          } else {
            return null;
          }
        }
      };
    },
    4601: (R8, R9, RR) => {
      'use strict';

      RR.d(R9, {
        v: () => RO,
        z: () => Ro
      });
      var Rj = RR(2894);
      var Rh = RR(8348);
      let RH = null;
      const RO = {};
      const Ro = function () {
        return RH = RH || (Rh.OS.tizenApp ? RR.e(74).then(function (RA) {
          var RF = RR(3112).default;
          return RO.controls = RF;
        }.bind(null, RR)).catch(function () {
          (RH = null, Rj.Jt)(301133)();
        }) : RR.e(716).then(function (RA) {
          var RF = RR(5827).default;
          return RO.controls = RF;
        }.bind(null, RR)).catch(function () {
          (RH = null, Rj.Jt)(301130)();
        }));
      };
    },
    8348: (R8, R9, RR) => {
      'use strict';

      RR.r(R9);
      RR.d(R9, {
        Browser: () => Ro,
        Features: () => RF,
        OS: () => RA
      });
      var Rj = RR(2268);
      const Rh = (RB, RY) => {
        RB = RB.exec(RY);
        if (RB && RB.length > 1) {
          return RB[1];
        }
      };
      const RH = navigator.userAgent;
      const RO = () => {};
      const Ro = {
        get androidNative() {
          return (0, Rj.O7)();
        },
        get chrome() {
          return (0, Rj.i7)();
        },
        get edge() {
          return (0, Rj.un)();
        },
        get facebook() {
          return (0, Rj.DF)();
        },
        get firefox() {
          return (0, Rj.pZ)();
        },
        get ie() {
          return (0, Rj.w1)();
        },
        get msie() {
          return (0, Rj.A)();
        },
        get safari() {
          return (0, Rj.G6)();
        },
        get version() {
          {
            var RB = this;
            var RY = RH;
            let Rm;
            let RC;
            let Rn;
            let Rd;
            if (RB.chrome) {
              Rm = RY.indexOf("Chrome") !== -1 ? RY.substring(RY.indexOf("Chrome") + 7) : RY.substring(RY.indexOf("CriOS") + 6);
            } else if (RB.safari) {
              Rm = RY.substring(RY.indexOf("Version") + 8);
            } else if (RB.firefox) {
              Rm = RY.substring(RY.indexOf("Firefox") + 8);
            } else if (RB.edge) {
              let RQ = RY.indexOf("Edge");
              if (RQ === -1) {
                RQ = RY.indexOf("Edg") + 4;
              } else {
                RQ += 5;
              }
              Rm = RY.substring(RQ);
            } else if (RB.ie) {
              if (RY.indexOf("rv:") !== -1) {
                Rm = RY.substring(RY.indexOf("rv:") + 3);
              } else if (RY.indexOf("MSIE") !== -1) {
                Rm = RY.substring(RY.indexOf("MSIE") + 5);
              }
            }
            if (Rm) {
              if ((Rd = (Rm = (Rd = (Rm = (Rd = Rm.indexOf(";")) !== -1 ? Rm.substring(0, Rd) : Rm).indexOf(" ")) !== -1 ? Rm.substring(0, Rd) : Rm).indexOf(")")) !== -1) {
                Rm = Rm.substring(0, Rd);
              }
              RC = parseInt(Rm, 10);
              Rn = parseInt(Rm.split(".")[1], 10);
            }
            return {
              version: Rm,
              major: RC,
              minor: Rn
            };
          }
        }
      };
      const RA = {
        get android() {
          return (0, Rj.Dt)();
        },
        get iOS() {
          return (0, Rj.gn)();
        },
        get mobile() {
          return (0, Rj.tq)();
        },
        get mac() {
          return (0, Rj.id)();
        },
        get iPad() {
          return (0, Rj.zc)();
        },
        get iPhone() {
          return (0, Rj.xb)();
        },
        get windows() {
          return RH.indexOf("Windows") > -1;
        },
        get tizen() {
          return (0, Rj.yS)();
        },
        get tizenApp() {
          return (0, Rj.Q6)();
        },
        get version() {
          {
            var RB = this;
            var RY = RH;
            let Rm;
            let RC;
            let Rn;
            if (RB.windows) {
              Rm = Rh(/Windows(?: NT|)? ([._\d]+)/, RY);
              switch (Rm) {
                case "6.1":
                  Rm = "7.0";
                  break;
                case "6.2":
                  Rm = "8.0";
                  break;
                case "6.3":
                  Rm = "8.1";
              }
            } else if (RB.android) {
              Rm = Rh(/Android ([._\d]+)/, RY);
            } else if (RB.iOS) {
              Rm = Rh(/OS ([._\d]+)/, RY);
            } else if (RB.mac) {
              Rm = Rh(/Mac OS X ([._\d]+)/, RY);
            } else if (RB.tizen) {
              Rm = Rh(/Tizen ([._\d]+)/, RY);
            }
            if (Rm) {
              RC = parseInt(Rm, 10);
              const Rd = Rm.split(/[._]/);
              if (Rd) {
                Rn = parseInt(Rd[1], 10);
              }
            }
            return {
              version: Rm,
              major: RC,
              minor: Rn
            };
          }
        }
      };
      const RF = {
        get flash() {
          return (0, Rj.NO)();
        },
        get flashVersion() {
          return (0, Rj.dI)();
        },
        get iframe() {
          return (0, Rj.cL)();
        },
        get passiveEvents() {
          {
            let RY = false;
            try {
              var RB = Object.defineProperty({}, "passive", {
                get: () => RY = true
              });
              window.addEventListener("testPassive", RO, RB);
              window.removeEventListener("testPassive", RO, RB);
            } catch (Rm) {}
            return RY;
          }
        },
        get backgroundLoading() {
          return !RA.iOS && !Ro.safari && !RA.tizen;
        }
      };
    },
    1643: (R8, R9, RR) => {
      'use strict';

      RR.d(R9, {
        $_: () => Re,
        $j: () => Rt,
        AQ: () => RT,
        Ax: () => Rk,
        B1: () => RQ,
        Bs: () => jY,
        Ew: () => Ru,
        FU: () => Ra,
        Gj: () => jA,
        HH: () => Rw,
        Hy: () => j3,
        Ib: () => jH,
        Je: () => RS,
        Jl: () => Rb,
        K5: () => Rp,
        Kb: () => Rj,
        Ms: () => Ri,
        NZ: () => RZ,
        O1: () => Rl,
        Ow: () => j7,
        P: () => Rd,
        QF: () => jh,
        R2: () => RU,
        RF: () => jn,
        Rc: () => Rf,
        Rt: () => RV,
        SL: () => jO,
        Sv: () => RC,
        TJ: () => RW,
        U3: () => RN,
        UF: () => jj,
        UW: () => j4,
        UZ: () => j0,
        V$: () => Rv,
        Vy: () => RA,
        WE: () => Rx,
        Wp: () => RY,
        Z_: () => jo,
        _5: () => RO,
        _B: () => j9,
        aM: () => j1,
        aQ: () => RJ,
        bc: () => Rh,
        cM: () => Rc,
        cq: () => RP,
        cy: () => Rq,
        gO: () => j6,
        gy: () => Rr,
        h7: () => jm,
        ik: () => RF,
        j0: () => j8,
        jt: () => jR,
        k3: () => RM,
        l5: () => jB,
        nQ: () => RB,
        nv: () => Rm,
        oZ: () => RL,
        ot: () => Rn,
        pi: () => RE,
        pn: () => RG,
        qG: () => jC,
        r0: () => Ro,
        rx: () => Rs,
        s$: () => Ry,
        sF: () => j5,
        t6: () => jd,
        tP: () => Rg,
        uL: () => RI,
        uT: () => RD,
        uc: () => RK,
        ug: () => j2,
        wh: () => RX,
        xQ: () => RH,
        xf: () => jF,
        yH: () => Rz
      });
      const Rj = "buffering";
      const Rh = "idle";
      const RH = "complete";
      const RO = "paused";
      const Ro = "playing";
      const RA = "error";
      const RF = "loading";
      const RB = "stalled";
      const RY = "drag";
      const Rm = "dragStart";
      const RC = "dragEnd";
      const Rn = "click";
      const Rd = "doubleClick";
      const RQ = "over";
      const Rg = "move";
      const Rp = "enter";
      const RN = "out";
      const RG = RA;
      const Rc = "warning";
      const RV = "adClick";
      const Re = "mediaLoaded";
      const Rk = "adPause";
      const Rx = "adPlay";
      const RM = "adSkipped";
      const RI = "adTime";
      const RX = "autostartNotAllowed";
      const Ri = RH;
      const Rf = "ready";
      const RZ = "seek";
      const Rt = "beforePlay";
      const Ry = "beforeComplete";
      const Rb = "bufferFull";
      const RT = "absolutePositionReady";
      const Rq = "displayClick";
      const Rv = "playlistComplete";
      const RE = "cast";
      const Ru = "mediaError";
      const Ra = "firstFrame";
      const RP = "playAttempt";
      const RS = "playAttemptFailed";
      const RJ = "seeked";
      const Rw = "setupError";
      const RK = "state";
      const RD = "bufferChange";
      const RU = "time";
      const RW = "ratechange";
      const RL = "mediaType";
      const Rz = "volume";
      const Rr = "mute";
      const Rl = "metadataCueParsed";
      const Rs = "meta";
      const j0 = "levels";
      const j1 = "levelsChanged";
      const j2 = "visualQuality";
      const j3 = "controls";
      const j4 = "fullscreen";
      const j5 = "resize";
      const j6 = "playlistItem";
      const j7 = "playlist";
      const j8 = "audioTracks";
      const j9 = "audioTrackChanged";
      const jR = "subtitlesTracks";
      const jj = "subtitlesTrackChanged";
      const jh = "playbackRateChanged";
      const jH = "logoClick";
      const jO = "captionsList";
      const jo = "captionsChanged";
      const jA = "providerFirstFrame";
      const jF = "userAction";
      const jB = "instreamClick";
      const jY = "breakpoint";
      const jm = "fullscreenchange";
      const jC = "bandwidthEstimate";
      const jn = "float";
      const jd = "chapter";
    },
    9918: (R8, R9, RR) => {
      'use strict';

      RR.d(R9, {
        L4: () => Rh,
        OG: () => RO,
        bv: () => Rj,
        ni: () => RH
      });
      const Rj = {
        audioMode: false,
        itemMeta: {},
        playbackRate: 1,
        playRejected: false,
        state: RR(1643).bc,
        itemReady: false,
        controlsEnabled: false
      };
      const Rh = {
        position: 0,
        duration: 0,
        buffer: 0,
        currentTime: 0
      };
      const RH = 120;
      const RO = 25;
    },
    7753: (R8, R9, RR) => {
      'use strict';

      RR.d(R9, {
        Z: () => Rj
      });
      class Rj extends RR(328).ZP {
        constructor() {
          super();
          this.attributes = Object.create(null);
        }
        addAttributes(Rh) {
          Object.keys(Rh).forEach(RH => {
            this.add(RH, Rh[RH]);
          });
        }
        add(Rh, RH) {
          Object.defineProperty(this, Rh, {
            get: () => this.attributes[Rh],
            set: RO => {
              this.set(Rh, RO);
            },
            enumerable: false
          });
          this.attributes[Rh] = RH;
        }
        get(Rh) {
          return this.attributes[Rh];
        }
        set(Rh, RH) {
          var RO;
          if (this.attributes[Rh] !== RH) {
            RO = this.attributes[Rh];
            this.attributes[Rh] = RH;
            this.trigger("change:" + Rh, this, RH, RO);
          }
        }
        clone() {
          var Rh = {};
          var RH = this.attributes;
          if (RH) {
            for (const RO in RH) {
              Rh[RO] = RH[RO];
            }
          }
          return Rh;
        }
        change(Rh, RH, RO) {
          this.on("change:" + Rh, RH, RO);
          Rh = this.get(Rh);
          RH.call(RO, this, Rh, Rh);
          return this;
        }
      }
    },
    7941: (R8, R9, RR) => {
      'use strict';

      RR.d(R9, {
        dZ: () => RH,
        my: () => Ro,
        qk: () => RO,
        r1: () => Rh
      });
      var Rj = RR(2957);
      const Rh = RA => {
        let RF = "";
        if (RA) {
          if (RA.localName) {
            RF = RA.localName;
          } else if (RA.baseName) {
            RF = RA.baseName;
          }
        }
        return RF;
      };
      const RH = RA => {
        let RF = "";
        if (RA) {
          if (RA.textContent) {
            RF = (0, Rj.fy)(RA.textContent);
          } else if (RA.text) {
            RF = (0, Rj.fy)(RA.text);
          }
        }
        return RF;
      };
      const RO = (RA, RF) => RA.childNodes[RF];
      const Ro = RA => RA.childNodes ? RA.childNodes.length : 0;
    },
    6769: (R8, R9, RR) => {
      'use strict';

      RR.d(R9, {
        Z: () => function (RB) {
          var RY = [];
          RY.feedData = {};
          for (let Rd = 0; Rd < (0, Rj.my)(RB); Rd++) {
            var Rm = (0, Rj.qk)(RB, Rd);
            if ((0, Rj.r1)(Rm).toLowerCase() === "channel") {
              for (let RQ = 0; RQ < (0, Rj.my)(Rm); RQ++) {
                var RC = (0, Rj.qk)(Rm, RQ);
                var Rn = (0, Rj.r1)(RC).toLowerCase();
                if (Rn === "item") {
                  RY.push(RF(RC));
                } else if (Rn) {
                  RY.feedData[Rn] = (0, Rj.dZ)(RC);
                }
              }
            }
          }
          return RY;
        }
      });
      var Rj = RR(7941);
      var Rh = RR(2957);
      function RH(RB, RY) {
        const Rm = [];
        for (let Rd = 0; Rd < (0, Rj.my)(RB); Rd++) {
          var RC = RB.childNodes[Rd];
          if (RC.prefix === "media" && (0, Rj.r1)(RC)) {
            switch ((0, Rj.r1)(RC).toLowerCase()) {
              case "content":
                if ((0, Rh.Dc)(RC, "duration")) {
                  RY.duration = (0, Rh.m9)((0, Rh.Dc)(RC, "duration"));
                }
                if ((0, Rh.Dc)(RC, "url")) {
                  RY.sources ||= [];
                  const RQ = {
                    file: (0, Rh.Dc)(RC, "url"),
                    type: (0, Rh.Dc)(RC, "type"),
                    width: (0, Rh.Dc)(RC, "width"),
                    label: (0, Rh.Dc)(RC, "label")
                  };
                  const Rg = (Rp => {
                    var RN = [];
                    for (let Rc = 0; Rc < (0, Rj.my)(Rp); Rc++) {
                      var RG = Rp.childNodes[Rc];
                      if (RG.prefix === "jwplayer" && (0, Rj.r1)(RG).toLowerCase() === "mediatypes") {
                        RN.push((0, Rj.dZ)(RG));
                      }
                    }
                    return RN;
                  })(RC);
                  if (Rg.length) {
                    RQ.mediaTypes = Rg;
                  }
                  RY.sources.push(RQ);
                }
                if ((0, Rj.my)(RC) > 0) {
                  RY = RH(RC, RY);
                }
                break;
              case "title":
                RY.title = (0, Rj.dZ)(RC);
                break;
              case "description":
                RY.description = (0, Rj.dZ)(RC);
                break;
              case "guid":
                RY.mediaid = (0, Rj.dZ)(RC);
                break;
              case "thumbnail":
                RY.image ||= (0, Rh.Dc)(RC, "url");
                break;
              case "group":
                RH(RC, RY);
                break;
              case "subtitle":
                {
                  const Rp = {
                    file: (0, Rh.Dc)(RC, "url"),
                    kind: "captions"
                  };
                  if ((0, Rh.Dc)(RC, "lang").length > 0) {
                    Rn = (0, Rh.Dc)(RC, "lang");
                    undefined;
                    Rp.label = {
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
                    }[Rn] || Rn;
                  }
                  Rm.push(Rp);
                  break;
                }
            }
          }
        }
        var Rn;
        RY.tracks ||= [];
        for (let RN = 0; RN < Rm.length; RN++) {
          RY.tracks.push(Rm[RN]);
        }
        return RY;
      }
      const RO = RH;
      var Ro = RR(9888);
      var RA = RR(393);
      const RF = RB => {
        var RY = {};
        for (let Rn = 0; Rn < RB.childNodes.length; Rn++) {
          var Rm = RB.childNodes[Rn];
          var RC = (0, Rj.r1)(Rm);
          if (RC) {
            switch (RC.toLowerCase()) {
              case "enclosure":
                RY.file = (0, Rh.Dc)(Rm, "url");
                break;
              case "title":
                RY.title = (0, Rj.dZ)(Rm);
                break;
              case "guid":
                RY.mediaid = (0, Rj.dZ)(Rm);
                break;
              case "pubdate":
                RY.date = (0, Rj.dZ)(Rm);
                break;
              case "description":
                RY.description = (0, Rj.dZ)(Rm);
                break;
              case "link":
                RY.link = (0, Rj.dZ)(Rm);
                break;
              case "category":
                if (RY.tags) {
                  RY.tags += (0, Rj.dZ)(Rm);
                } else {
                  RY.tags = (0, Rj.dZ)(Rm);
                }
            }
          }
        }
        return new RA.Z(function (Rd, RQ) {
          var Rg = "default";
          var Rp = "file";
          var RN = [];
          var RG = [];
          var Rc = RQ;
          for (let Re = 0; Re < Rd.childNodes.length; Re++) {
            var RV = Rd.childNodes[Re];
            if (RV.prefix === "jwplayer") {
              const Rk = (0, Rj.r1)(RV);
              if (Rk === "source") {
                delete RQ.sources;
                RN.push({
                  file: (0, Rh.Dc)(RV, Rp),
                  default: (0, Rh.Dc)(RV, Rg),
                  label: (0, Rh.Dc)(RV, "label"),
                  type: (0, Rh.Dc)(RV, "type")
                });
              } else if (Rk === "track") {
                delete RQ.tracks;
                RG.push({
                  file: (0, Rh.Dc)(RV, Rp),
                  default: (0, Rh.Dc)(RV, Rg),
                  kind: (0, Rh.Dc)(RV, "kind"),
                  label: (0, Rh.Dc)(RV, "label")
                });
              } else {
                RQ[Rk] = (0, Ro.serialize)((0, Rj.dZ)(RV));
                if (Rk === "file" && RQ.sources) {
                  delete RQ.sources;
                }
              }
            }
            RQ[Rp] ||= RQ.link;
          }
          if (RN.length) {
            RQ.sources = [];
            for (let Rx = 0; Rx < RN.length; Rx++) {
              const RM = RN[Rx];
              if (RM.file.length > 0) {
                RM[Rg] = RN[Rx][Rg] === "true";
                if (!RM.label) {
                  delete RM.label;
                }
                Rc.sources.push(RM);
              }
            }
          }
          if (RG.length) {
            RQ.tracks = [];
            for (let RI = 0; RI < RG.length; RI++) {
              const RX = RG[RI];
              if (RX.file && RX.file.length > 0) {
                RX[Rg] = RG[RI][Rg] === "true";
                RX.kind = RG[RI].kind.length ? RG[RI].kind : "captions";
                if (!RX.label) {
                  delete RX.label;
                }
                Rc.tracks.push(RX);
              }
            }
          }
          return Rc;
        }(RB, RO(RB, RY)));
      };
    },
    2557: (R8, R9, RR) => {
      'use strict';

      RR.d(R9, {
        t: () => Rj,
        u: () => Rh
      });
      class Rj {
        constructor(RH, RO) {
          this.defaultLanguage = RH;
          this.timestamps = RO;
        }
      }
      class Rh {
        constructor({
          title: RH = {},
          group: RO,
          time: Ro,
          image: RA
        }) {
          this.title = {};
          this.time = Ro;
          this.group = RO;
          this.image = RA;
          Object.keys(RH).forEach(RF => {
            var RB = RH[RF];
            this.addTitle(RF, RB);
          });
        }
        addTitle(RH, RO) {
          this.title[RH] = RO;
        }
      }
    },
    393: (R8, R9, RR) => {
      'use strict';

      RR.d(R9, {
        Z: () => RA
      });
      var Rj = RR(6053);
      function Rh(RF) {
        var RB;
        if (RF && RF.file) {
          (RF = Object.assign({}, {
            kind: "captions",
            default: false
          }, RF)).kind = (RB = RF.kind, RH.indexOf(RB) !== -1 ? RF.kind : "captions");
          RF.default = Boolean(RF.default);
          return RF;
        }
      }
      const RH = ["captions", "metadata", "thumbnails", "chapters"];
      var RO = RR(9918);
      const Ro = Array.isArray;
      const RA = function (RF) {
        if (!Ro((RF = RF || {}).tracks)) {
          delete RF.tracks;
        }
        var RB = Object.assign({}, {
          sources: [],
          tracks: [],
          minDvrWindow: RO.ni
        }, RF);
        if (RB.sources === Object(RB.sources) && !Ro(RB.sources)) {
          RB.sources = [(0, Rj.Z)(RB.sources)];
        }
        if (!Ro(RB.sources) || RB.sources.length === 0) {
          if (RF.levels) {
            RB.sources = RF.levels;
          } else {
            RB.sources = [(0, Rj.Z)(RF)];
          }
        }
        for (let RC = 0; RC < RB.sources.length; RC++) {
          var RY;
          var Rm = RB.sources[RC];
          if (Rm) {
            RY = Rm.default;
            Rm.default = !!RY && RY.toString() === "true";
            RB.sources[RC].label ||= RC.toString();
            RB.sources[RC] = (0, Rj.Z)(RB.sources[RC]);
          }
        }
        RB.sources = RB.sources.filter(Boolean);
        if (!Ro(RB.tracks)) {
          RB.tracks = [];
        }
        if (Ro(RB.captions)) {
          RB.tracks = RB.tracks.concat(RB.captions);
          delete RB.captions;
        }
        RB.tracks = RB.tracks.map(Rh).filter(Boolean);
        return RB;
      };
    },
    7263: (R8, R9, RR) => {
      'use strict';

      RR.d(R9, {
        Z: () => RF
      });
      var Rj = RR(1643);
      var Rh = RR(7941);
      var RH = RR(6769);
      var RO = RR(6886);
      var Ro = RR(328);
      var RA = RR(4446);
      const RF = function () {
        function RB(RC) {
          try {
            const Rn = RC.responseXML ? RC.responseXML.childNodes : null;
            let Rd;
            let RQ = null;
            if (Rn) {
              for (let Rg = 0; Rg < Rn.length && (RQ = Rn[Rg]).nodeType === 8; Rg++);
              if ((RQ = RQ && (0, Rh.r1)(RQ) === "xml" ? RQ.nextSibling : RQ) && (0, Rh.r1)(RQ) === "rss") {
                const Rp = (0, RH.Z)(RQ);
                Rd = Object.assign({
                  playlist: Rp
                }, Rp.feedData);
              }
            }
            if (!Rd) {
              try {
                const RN = JSON.parse(RC.responseText);
                if (Array.isArray(RN)) {
                  Rd = {
                    playlist: RN
                  };
                } else {
                  if (!Array.isArray(RN.playlist)) {
                    throw Error("Playlist is not an array");
                  }
                  Rd = RN;
                }
              } catch (RG) {
                throw new RA.rG(RA.ul, 621, RG);
              }
            }
            RY.trigger(Rj.Ow, Rd);
          } catch (Rc) {
            Rm(Rc);
          }
        }
        const RY = Object.assign(this, Ro.ZP);
        const Rm = function (RC) {
          if (RC instanceof RA.rG && !RC.code) {
            RC = new RA.rG(RA.ul, 0);
          }
          RY.trigger(Rj.pn, RC);
        };
        this.load = function (RC) {
          (0, RO.h)(RC, RB, (Rn, Rd, RQ, Rg) => {
            Rm(Rg);
          });
        };
        this.destroy = function () {
          this.off();
        };
      };
    },
    8320: (R8, R9, RR) => {
      'use strict';

      RR.d(R9, {
        ZP: () => Rp,
        s7: () => Rn,
        T5: () => Rg,
        YF: () => RC,
        _: () => Rd,
        bx: () => RQ
      });
      const Rj = {
        none: true,
        metadata: true,
        auto: true
      };
      const Rh = (RN, RG) => Rj[RN] ? RN : Rj[RG] ? RG : "metadata";
      var RH = RR(393);
      var RO = RR(6053);
      var Ro = RR(2303);
      var RA = RR(4446);
      const RF = (RN, RG) => RN === undefined ? RG : RN;
      const RB = (RN, RG, Rc) => {
        if (Rc in RG) {
          RN[Rc] = RG[Rc];
        }
      };
      const RY = (RN, RG) => {
        const Rc = RG.attributes;
        const {
          sources: RV,
          allSources: Re,
          preload: Rk,
          drm: Rx
        } = RN;
        const RM = RF(RN.withCredentials, Rc.withCredentials);
        return (Re || RV).map(function (RI) {
          var RX;
          var Ri;
          var Rf;
          if (RI !== Object(RI)) {
            return null;
          } else {
            RB(RI, Rc, "androidhls");
            RB(RI, Rc, "hlsjsdefault");
            RB(RI, Rc, "safarihlsjs");
            Rf = RI;
            RX = RN;
            Ri = Rc;
            if (!Rf.liveSyncDuration) {
              RX = RX.liveSyncDuration ? RX : Ri;
              RB(Rf, RX, "liveSyncDuration");
            }
            RB(RI, Rc, "_hlsjsProgressive");
            RI.preload = Rh(RI.preload, Rk);
            if (Ri = RI.drm || Rx || Rc.drm) {
              RI.drm = Ri;
            }
            if ((Rf = RF(RI.withCredentials, RM)) !== undefined) {
              RI.withCredentials = Rf;
            }
            return (0, RO.Z)(RI);
          }
        }).filter(Boolean);
      };
      const Rm = (RN, RG) => {
        var Rc = ((Rk, Rx) => {
          for (let RX = 0; RX < Rk.length; RX++) {
            var RM = Rk[RX];
            var RI = Rx.choose(RM).providerToCheck;
            if (RI) {
              return {
                type: RM.type,
                provider: RI
              };
            }
          }
          return null;
        })(RN, RG = RG && RG.choose ? RG : new Ro.Z());
        if (!Rc) {
          return [];
        }
        const RV = Rc.provider;
        const Re = Rc.type;
        return RN.filter(function (Rk) {
          return Rk.type === Re && RG.providerSupports(RV, Rk);
        });
      };
      const RC = (RN, RG, Rc) => {
        var RV = RN.getProviders();
        var Re = RN.get("preload");
        var Rk = RN.get("jwStart");
        var Rx = Object.assign({}, RG);
        Rx.preload = Rh(RG.preload, Re);
        Rx.allSources = RY(Rx, RN);
        Rx.sources = Rm(Rx.allSources, RV);
        if (Rx.sources.length) {
          Rx.file = Rx.sources[0].file;
          Rx.feedData = Rc;
          if (Rk && Rk !== -1 && RN.get("generateSEOMetadata")) {
            Rx.starttime = Rk;
          }
          if (Re = (RG = Rx).sources[0].liveSyncDuration) {
            RG.liveSyncDuration = RG.dvrSeekLimit = Re;
          }
          return RG;
        }
      };
      const Rn = (RN, RG, Rc) => {
        const RV = Object.assign({}, Rc);
        delete RV.playlist;
        return RN.map(Re => RC(RG, Re, RV)).filter(Boolean);
      };
      const Rd = RN => {
        if (!Array.isArray(RN) || RN.length === 0) {
          throw new RA.rG(RA.ul, 630);
        }
      };
      const RQ = (RN, RG) => {
        let Rc = (parseInt(RN, 10) || 0) % RG;
        if (Rc < 0) {
          Rc += RG;
        }
        return Rc;
      };
      const Rg = (RN, RG) => Rm(RY(RN, RG), RG.getProviders());
      const Rp = function (RN) {
        return (Array.isArray(RN) ? RN : [RN]).map(RH.Z);
      };
    },
    6053: (R8, R9, RR) => {
      'use strict';

      RR.d(R9, {
        Z: () => RH
      });
      var Rj = RR(7034);
      var Rh = RR(2957);
      const RH = function (RO) {
        if (RO && RO.file) {
          const RA = Object.assign({}, {
            default: false,
            type: ""
          }, RO);
          RA.file = (0, Rh.fy)("" + RA.file);
          var RO = /^[^/]+\/(?:x-)?([^/]+)$/;
          var Ro = RA.type;
          if (RO.test(Ro)) {
            RA.mimeType = Ro;
            RA.type = Ro.replace(RO, "$1");
          }
          if ((0, Rj.isYouTube)(RA.file)) {
            RA.type = "youtube";
          } else if ((0, Rj.isRtmp)(RA.file)) {
            RA.type = "rtmp";
          } else {
            RA.type ||= (0, Rh.AO)(RA.file);
          }
          if (RA.type) {
            switch (RA.type) {
              case "m3u8":
              case "vnd.apple.mpegurl":
                RA.type = "hls";
                break;
              case "dash+xml":
                RA.type = "dash";
                break;
              case "m4a":
                RA.type = "aac";
                break;
              case "smil":
                RA.type = "rtmp";
            }
            Object.keys(RA).forEach(function (RF) {
              if (RA[RF] === "") {
                delete RA[RF];
              }
            });
            return RA;
          }
        }
      };
    },
    4101: (R8, R9, RR) => {
      'use strict';

      RR.d(R9, {
        Z: () => RB
      });
      var Rj = RR(676);
      var Rh = RR(9888);
      var RH = RR(2957);
      var RO = RR(4446);
      var Ro = RR(3487);
      function RA(RY) {
        var Rm;
        var RC;
        if (typeof RY == "string") {
          if ((Rm = (RY = RY.split("?")[0]).indexOf("://")) > 0) {
            return 0;
          } else {
            RC = RY.indexOf("/");
            RY = (0, RH.AO)(RY);
            if (Rm >= 0 || RC >= 0 || RY && isNaN(RY)) {
              return 1;
            } else {
              return 2;
            }
          }
        }
      }
      function RF(RY) {
        this.url = RY;
        this.promise_ = null;
      }
      Object.defineProperties(RF.prototype, {
        promise: {
          get() {
            return this.load();
          },
          set() {}
        }
      });
      Object.assign(RF.prototype, {
        load() {
          let RY = this.promise_;
          if (!RY) {
            if (RA(this.url) === 2) {
              return Promise.resolve(this);
            }
            var Rm = new Rj.ZP((RC => {
              switch (RA(RC)) {
                case 0:
                  return RC;
                case 1:
                  return (0, Rh.getAbsolutePath)(RC, window.location.href);
              }
            })(this.url));
            this.loader = Rm;
            RY = Rm.load().then(() => this);
            this.promise_ = RY;
          }
          return RY;
        },
        registerPlugin(RY, Rm, RC) {
          this.name = RY;
          this.target = Rm;
          this.js = RC;
        },
        getNewInstance(RY, Rm, RC) {
          var Rn = this.js;
          if (typeof Rn != "function") {
            throw new RO.rG(null, (0, Ro.bX)(this.url) + 100);
          }
          const Rd = new Rn(RY, Rm, RC);
          const RQ = {
            type: "pluginInitialized",
            name: this.name,
            config: Rm
          };
          Rd.addToPlayer = function (Rg = false) {
            var Rp = this.getContainer().querySelector(".jw-overlays");
            if (Rp) {
              RC.left = Rp.style.left;
              RC.top = Rp.style.top;
              Rp.appendChild(RC);
              if (Rg) {
                this.trigger("pluginInitialized", RQ);
              } else {
                setTimeout(() => this.trigger("pluginInitialized", RQ), 0);
              }
              return Rd;
            }
          };
          Rd.resizeHandler = function () {
            var Rg = this.getContainer().querySelector(".jw-overlays");
            if (Rg) {
              Rd.resize(Rg.clientWidth, Rg.clientHeight);
            }
          };
          return Rd;
        }
      });
      const RB = RF;
    },
    1241: (R8, R9, RR) => {
      'use strict';

      RR.d(R9, {
        ZP: () => function (Rm, RC) {
          var Rn = Rm.get("plugins");
          window.jwplayerPluginJsonp = RB;
          return (Rm.pluginLoader = Rm.pluginLoader || new RH()).load(RC, RF, Rn, Rm).then(Rd => {
            if (!Rm.attributes._destroyed) {
              delete window.jwplayerPluginJsonp;
              return Rd;
            }
          });
        },
        fo: () => RB,
        Ve: () => RY
      });
      var Rj = RR(4446);
      var Rh = RR(3487);
      const RH = function () {
        this.load = function (Rm, RC, Rn, Rd) {
          if (Rn && typeof Rn == "object") {
            return Promise.all(Object.keys(Rn).filter(RQ => RQ).map(RQ => {
              const Rg = Rn[RQ];
              return RC.setupPlugin(RQ).then(Rp => {
                if (!Rd.attributes._destroyed) {
                  return (0, Rh.MK)(Rp, Rg, Rm);
                }
              }).catch(Rp => {
                RC.removePlugin(RQ);
                if (Rp.code) {
                  return Rp;
                } else {
                  return new Rj.rG(null, (0, Rh.bX)(RQ), Rp);
                }
              });
            }));
          } else {
            return Promise.resolve();
          }
        };
      };
      var RO = RR(4101);
      var Ro = RR(5499);
      const RA = {};
      const RF = new class {
        setupPlugin(Rm) {
          var RC = this.getPlugin(Rm);
          if (RC) {
            if (RC.url !== Rm) {
              (0, Ro.c)("JW Plugin \"" + (0, Rh.Nq)(Rm) + "\" already loaded from \"" + RC.url + "\". Ignoring \"" + Rm + ".\"");
            }
            return RC.promise;
          } else {
            return this.addPlugin(Rm).load();
          }
        }
        addPlugin(Rm) {
          var RC = (0, Rh.Nq)(Rm);
          let Rn = RA[RC];
          if (!Rn) {
            Rn = new RO.Z(Rm);
            RA[RC] = Rn;
          }
          return Rn;
        }
        getPlugin(Rm) {
          return RA[(0, Rh.Nq)(Rm)];
        }
        removePlugin(Rm) {
          delete RA[(0, Rh.Nq)(Rm)];
        }
        getPlugins() {
          return RA;
        }
      }();
      const RB = function (Rm, RC, Rn) {
        var Rd = RF.addPlugin(Rm);
        if (!Rd.js) {
          Rd.registerPlugin(Rm, RC, Rn);
        }
      };
      const RY = async (Rm, RC, Rn) => {
        var Rd = (0, Rh.Nq)(Rm);
        var RQ = RF.getPlugin(Rd);
        if (RQ) {
          return (0, Rh.MK)(RQ, RC, Rn);
        }
        let Rg = Rd === Rm ? Rm : Rm;
        return RF.setupPlugin(Rg).then(Rp => (0, Rh.MK)(Rp, RC, Rn));
      };
    },
    7164: (R8, R9, RR) => {
      'use strict';

      RR.d(R9, {
        MK: () => RO,
        Nq: () => Rh,
        bX: () => RH
      });
      var Rj = RR(5950);
      const Rh = function (Ro) {
        var RA = /\/((.(?!\/))+?)\.js/i.exec(Ro);
        var RA = (RA == null ? undefined : RA[1]) || Ro;
        if (RA && RA === "jwpsrv-dnt") {
          return "jwpsrv";
        } else {
          return RA;
        }
      };
      const RH = Ro => 305000;
      const RO = (Ro, RA, RF) => {
        var RB = Ro.name;
        var RA = Object.assign({}, RA, (0, Rj.vl)(Ro.url));
        var RY = document.createElement("div");
        RY.id = RF.id + "_" + RB;
        RY.className = "jw-plugin jw-reset";
        var Ro = Ro.getNewInstance(RF, RA, RY);
        RF.addPlugin(RB, Ro);
        return Ro;
      };
    },
    7683: (R8, R9, RR) => {
      'use strict';

      RR.d(R9, {
        V: () => RH,
        Z: () => function () {
          const RO = Rj.Jx;
          const Ro = [];
          const RA = [];
          for (let Rm = 0; Rm < RO; Rm++) {
            const RC = RH();
            Ro.push(RC);
            RA.push(RC);
            Rh(RC);
          }
          const RF = RA.shift();
          const RB = RA.shift();
          let RY = false;
          return {
            primed: () => RY,
            prime() {
              Ro.forEach(Rh);
              RY = true;
            },
            played() {
              RY = true;
            },
            getPrimedElement: () => RA.shift() || null,
            getAdElement: () => RF,
            getTestElement: () => RB,
            clean(Rn) {
              if (Rn.src) {
                Rn.removeAttribute("src");
                try {
                  Rn.load();
                } catch (Rd) {}
              }
            },
            recycle(Rn) {
              if (Rn && !RA.some(Rd => Rd === Rn)) {
                this.clean(Rn);
                RA.push(Rn);
              }
            },
            syncVolume(Rn) {
              const Rd = Math.min(Math.max(0, Rn / 100), 1);
              Ro.forEach(RQ => {
                RQ.volume = Rd;
              });
            },
            syncMute(Rn) {
              Ro.forEach(Rd => {
                Rd.muted = Rn;
              });
            }
          };
        }
      });
      var Rj = RR(658);
      const Rh = RO => {
        if (!RO.src) {
          RO.load();
        }
      };
      const RH = RO => {
        const Ro = document.createElement("video");
        Ro.className = "jw-video jw-reset";
        Ro.setAttribute("tabindex", "-1");
        Ro.setAttribute("disableRemotePlayback", "");
        Ro.setAttribute("webkit-playsinline", "");
        Ro.setAttribute("playsinline", "");
        if (RO) {
          Object.keys(RO).forEach(RA => {
            Ro.setAttribute(RA, RO[RA]);
          });
        }
        return Ro;
      };
    },
    658: (R8, R9, RR) => {
      'use strict';

      RR.d(R9, {
        HB: () => RH,
        Jx: () => Rj,
        l_: () => Rh
      });
      const Rj = 4;
      const Rh = 5;
      const RH = 1;
    },
    4609: (R8, R9, RR) => {
      'use strict';

      RR.d(R9, {
        Z: () => function (Rj, Rh) {
          return Object.assign({}, Rh, {
            prime() {
              if (!Rj.src) {
                Rj.load();
              }
            },
            getPrimedElement: () => Rj,
            clean() {
              Rh.clean(Rj);
            },
            recycle() {
              Rh.clean(Rj);
            }
          });
        }
      });
    },
    6528: (R8, R9, RR) => {
      'use strict';

      RR.d(R9, {
        Z: () => RA
      });
      var Rj = RR(1643);
      var Rh = RR(1384);
      function RH() {}
      const RO = () => false;
      const Ro = {
        name: "default"
      };
      const RA = {
        supports: RO,
        play: RH,
        pause: RH,
        preload: RH,
        load: RH,
        stop: RH,
        volume: RH,
        mute: RH,
        seek: RH,
        resize: RH,
        remove: RH,
        destroy: RH,
        setVisibility: RH,
        setFullscreen(RF) {
          return (0, Rh.CX)(this, RF);
        },
        getFullscreen: RO,
        supportsFullscreen: RO,
        getContainer: RH,
        setContainer: RH,
        getName: () => Ro,
        getQualityLevels: RH,
        getCurrentQuality: RH,
        setCurrentQuality: RH,
        getAudioTracks: RH,
        getCurrentAudioTrack: RH,
        setCurrentAudioTrack: RH,
        getSeekRange() {
          return {
            start: 0,
            end: this.getDuration()
          };
        },
        setPlaybackRate: RH,
        getPlaybackRate: () => 1,
        getBandwidthEstimate: () => null,
        getLiveLatency: () => null,
        attachMedia: RH,
        detachMedia: RH,
        init: RH,
        setState(RF) {
          this.state = RF;
          this.trigger(Rj.uc, {
            newstate: RF
          });
        },
        sendMediaType(RF) {
          var {
            type: RF,
            mimeType: RB
          } = RF[0];
          var RF = RF === "aac" || RF === "mp3" || RF === "mpeg" || RB && RB.indexOf("audio/") === 0;
          this.trigger(Rj.oZ, {
            mediaType: RF ? "audio" : "video"
          });
        },
        getDuration: () => 0,
        trigger: RH
      };
    },
    1628: (R8, R9, RR) => {
      'use strict';

      RR.d(R9, {
        V: () => Rh
      });
      var Rj = RR(8348);
      const Rh = RH => RH.type === "hls" && Rj.OS.android ? RH.androidhls !== false && !Rj.Browser.firefox && parseFloat(Rj.OS.version.version || "0") >= 4.4 : null;
    },
    12: (R8, R9, RR) => {
      'use strict';

      RR.d(R9, {
        U: () => Rj
      });
      const Rj = {};
    },
    670: (R8, R9, RR) => {
      'use strict';

      RR.d(R9, {
        Z: () => function (Ro) {
          var RA = Ro.getName().name;
          if (!Rj.U[RA]) {
            if (!(0, RO.sE)(Rh.B, (0, RO.wB)({
              name: RA
            }))) {
              if (!(0, RO.mf)(Ro.supports)) {
                throw new Error("Tried to register a provider with an invalid object");
              }
              Rh.B.unshift({
                name: RA,
                supports: Ro.supports
              });
            }
            (0, RO.ce)(Ro.prototype, RH.Z);
            Rj.U[RA] = Ro;
          }
        }
      });
      var Rj = RR(12);
      var Rh = RR(2963);
      var RH = RR(6528);
      var RO = RR(6042);
      RR(328);
    },
    6593: (R8, R9, RR) => {
      'use strict';

      RR.d(R9, {
        B: () => RA,
        H: () => Ro
      });
      var Rj = RR(1628);
      var Rh = RR(7034);
      var RH = RR(9025);
      const RO = {
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
      const Ro = RF => {
        if (!RH.Z || !RH.Z.canPlayType) {
          return false;
        }
        if ((0, Rj.V)(RF) === false) {
          return false;
        }
        var RB = RF.file;
        var RY = RF.type;
        if ((0, Rh.isRtmp)(RB, RY)) {
          return false;
        }
        let Rm = RF.mimeType || RO[RY];
        return !!Rm && ((RB = RF.mediaTypes) != null && RB.length && (Rm = [Rm].concat(RB.slice()).join("; ")), Boolean(RH.Z.canPlayType(Rm)));
      };
      const RA = [{
        name: "html5",
        supports: Ro
      }];
    },
    1384: (R8, R9, RR) => {
      'use strict';

      RR.d(R9, {
        CX: () => RF,
        IP: () => RY,
        If: () => RA,
        Nm: () => RB
      });
      var Rj = RR(1643);
      let Rh;
      let RH;
      let RO = false;
      function Ro(Rm, RC, Rn) {
        RO = Rn;
        Rm.trigger(Rj.h7, {
          target: RC.target,
          jwstate: Rn
        });
      }
      const RA = () => RO;
      const RF = function (Rm, RC) {
        if (RC = Boolean(RC)) {
          try {
            const Rd = Rm.video.webkitEnterFullscreen || Rm.video.webkitEnterFullScreen;
            if (Rd) {
              Rd.apply(Rm.video);
            }
          } catch (RQ) {
            return false;
          }
          return Rm.getFullscreen();
        }
        var Rn = Rm.video.webkitExitFullscreen || Rm.video.webkitExitFullScreen;
        if (Rn) {
          Rn.apply(Rm.video);
        }
        return RC;
      };
      const RB = function (Rm, RC) {
        Rh = Rn => Ro(Rm, Rn, true);
        RH = Rn => Ro(Rm, Rn, false);
        RC.addEventListener("webkitbeginfullscreen", Rh);
        RC.addEventListener("webkitendfullscreen", RH);
      };
      const RY = Rm => {
        Rm.removeEventListener("webkitbeginfullscreen", Rh);
        Rm.removeEventListener("webkitendfullscreen", RH);
      };
    },
    6875: (R8, R9, RR) => {
      'use strict';

      RR.d(R9, {
        Z: () => Rj
      });
      const Rj = "hidden" in document ? function () {
        return !document.hidden;
      } : "webkitHidden" in document ? function () {
        return !document.webkitHidden;
      } : function () {
        return true;
      };
    },
    6886: (R8, R9, RR) => {
      'use strict';

      RR.d(R9, {
        E: () => Ro,
        h: () => Rm
      });
      var Rj = RR(9888);
      var Rh = RR(7034);
      var RH = RR(4446);
      function RO() {}
      const Ro = RC => {
        RC.onload = null;
        RC.onprogress = null;
        RC.onreadystatechange = null;
        RC.onerror = null;
        if ("abort" in RC) {
          RC.abort();
        }
      };
      const RA = (RC, Rn, Rd, RQ) => {
        RC.onerror(Rn, RC.url, RC.xhr, new RH.rG(Rn, Rd, RQ));
      };
      const RF = (RC, Rn, Rd) => {
        var RQ = Rn.documentElement;
        if (!Rd.requireValidXML || RQ.nodeName !== "parsererror" && !RQ.getElementsByTagName("parsererror").length) {
          if (!RC.responseXML) {
            RC = Object.assign({}, RC, {
              responseXML: Rn
            });
          }
          return Rd.oncomplete(RC);
        }
        RA(Rd, RH.ul, 601);
      };
      const RB = RC => function (Rn) {
        Rn = Rn.currentTarget || RC.xhr;
        clearTimeout(RC.timeoutId);
        if (RC.responseType) {
          if (RC.responseType === "json") {
            var Rd = Rn;
            var RQ = RC;
            if (!Rd.response || typeof Rd.response == "string" && Rd.responseText.substr(1) !== "\"") {
              try {
                Rd = Object.assign({}, Rd, {
                  response: JSON.parse(Rd.responseText)
                });
              } catch (Rg) {
                RA(RQ, RH.ul, 611, Rg);
                return;
              }
            }
            return RQ.oncomplete(Rd);
            return;
          }
        } else {
          let Rp;
          let RN = Rn.responseXML;
          if (RN) {
            try {
              Rp = RN.firstChild;
            } catch (RG) {}
          }
          if (RN && Rp) {
            return RF(Rn, RN, RC);
          }
          if (RC.useDomParser && Rn.responseText && !RN && (RN = (0, Rj.parseXML)(Rn.responseText)) != null && RN.firstChild) {
            return RF(Rn, RN, RC);
          }
          if (RC.requireValidXML) {
            RA(RC, RH.ul, 602);
            return;
          }
        }
        RC.oncomplete(Rn);
      };
      let RY;
      const Rm = (RC, Rn, Rd, RQ) => {
        var Rg;
        let Rp;
        if (RC === Object(RC)) {
          RC = (RQ = RC).url;
        }
        const RN = Object.assign({
          xhr: null,
          url: RC,
          withCredentials: false,
          retryWithoutCredentials: false,
          timeout: 60000,
          timeoutId: -1,
          oncomplete: Rn || RO,
          onerror: Rd || RO,
          mimeType: RQ && !RQ.responseType ? "text/xml" : "",
          requireValidXML: false,
          responseType: RQ != null && RQ.plainText ? "text" : "",
          useDomParser: false,
          requestFilter: null
        }, RQ);
        const RG = RY("Error loading file", RN);
        if ("XMLHttpRequest" in window) {
          Rp = RN.xhr = RN.xhr || new window.XMLHttpRequest();
          if (typeof RN.requestFilter == "function") {
            let Rc;
            try {
              Rc = RN.requestFilter({
                url: RC,
                xhr: Rp
              });
            } catch (RV) {
              RG(RV, 5);
              return Rp;
            }
            if (Rc && "open" in Rc && "send" in Rc) {
              Rp = RN.xhr = Rc;
            }
          }
          Rg = RN;
          Rp.onreadystatechange = function (Re) {
            var Rk = Re.currentTarget || Rg.xhr;
            if (Rk.readyState === 4) {
              clearTimeout(Rg.timeoutId);
              Rk = Rk.status;
              if (Rk < 400) {
                if (Rk === 200) {
                  return RB(Rg)(Re);
                } else {
                  if (Rk === 0 && (0, Rh.isFileProtocol)() && !/^[a-z][a-z0-9+.-]*:/.test(Rg.url)) {
                    RA(Rg, RH.ul, 7);
                  }
                  return;
                }
              }
              RA(Rg, RH.ul, Rk < 600 ? Rk : 6);
            }
          };
          Rp.onerror = RG;
          if ("overrideMimeType" in Rp) {
            if (RN.mimeType) {
              Rp.overrideMimeType(RN.mimeType);
            }
          } else {
            RN.useDomParser = true;
          }
          try {
            RC = RC.replace(/#.*$/, "");
            Rp.open("GET", RC, true);
          } catch (Re) {
            RG(Re, 3);
            return Rp;
          }
          if (RN.responseType) {
            try {
              Rp.responseType = RN.responseType;
            } catch (Rk) {}
          }
          if (RN.timeout) {
            RN.timeoutId = setTimeout(function () {
              Ro(Rp);
              RA(RN, RH.ud, 1);
            }, RN.timeout);
            Rp.onabort = function () {
              clearTimeout(RN.timeoutId);
            };
          }
          try {
            if (RN.withCredentials && "withCredentials" in Rp) {
              Rp.withCredentials = true;
            }
            Rp.send();
          } catch (Rx) {
            RG(Rx, 4);
          }
          return Rp;
        }
        RA(RN, RH.ud, 2);
      };
      RY = (RC, Rn) => function (Rd, RQ) {
        var Rg = Rd.currentTarget || Rn.xhr;
        clearTimeout(Rn.timeoutId);
        if (Rn.retryWithoutCredentials && Rn.xhr.withCredentials) {
          Ro(Rg);
          const Rp = Object.assign({}, Rn, {
            xhr: null,
            withCredentials: false,
            retryWithoutCredentials: false
          });
          Rm(Rp);
        } else {
          if (!RQ && Rg.status >= 400 && Rg.status < 600) {
            RQ = Rg.status;
          }
          RA(Rn, RQ ? RH.ul : RH.ud, RQ || 6, Rd);
        }
      };
    },
    328: (R8, R9, RR) => {
      'use strict';

      RR.d(R9, {
        IH: () => RF,
        S1: () => RB,
        X$: () => RY,
        ZP: () => Ro,
        on: () => RA,
        wj: () => Rm
      });
      function Rj(RC, Rn) {
        if (RC == null) {
          throw new TypeError("Cannot convert undefined or null to object");
        }
        return Object.prototype.hasOwnProperty.call(Object(RC), Rn);
      }
      const Rh = (RC, Rn, Rd, RQ) => {
        let Rg = -1;
        const Rp = RC.length;
        while (++Rg < Rp) {
          const RN = RC[Rg];
          if (RQ) {
            try {
              RN.callback.apply(RN.context || Rd, Rn);
            } catch (RG) {
              console.log("Error in \"" + RQ + "\" event handler:", RG);
            }
          } else {
            RN.callback.apply(RN.context || Rd, Rn);
          }
        }
      };
      const RH = /\s+/;
      const RO = (RC, Rn, Rd, RQ) => {
        if (Rd) {
          if (typeof Rd == "object") {
            for (const Rg in Rd) {
              if (Rj(Rd, Rg)) {
                RC[Rn].apply(RC, [Rg, Rd[Rg]].concat(RQ));
              }
            }
            return false;
          }
          if (RH.test(Rd)) {
            const Rp = Rd.split(RH);
            for (let RN = 0, RG = Rp.length; RN < RG; RN++) {
              RC[Rn].apply(RC, [Rp[RN]].concat(RQ));
            }
            return false;
          }
        }
        return true;
      };
      class Ro {
        on(RC, Rn, Rd) {
          if (RO(this, "on", RC, [Rn, Rd]) && Rn) {
            ((this._events ||= {})[RC] ||= []).push({
              callback: Rn,
              context: Rd
            });
          }
          return this;
        }
        once(RC, Rn, Rd) {
          if (!RO(this, "once", RC, [Rn, Rd]) || !Rn) {
            return this;
          }
          let RQ = 0;
          function Rg() {
            if (!RQ++) {
              Rp.off(RC, Rg);
              Rn.apply(this, arguments);
            }
          }
          const Rp = this;
          Rg._callback = Rn;
          return this.on(RC, Rg, Rd);
        }
        off(RC, Rn, Rd) {
          if (this._events && RO(this, "off", RC, [Rn, Rd])) {
            if (RC || Rn || Rd) {
              const Rp = RC ? [RC] : Object.keys(this._events);
              for (let RN = 0, RG = Rp.length; RN < RG; RN++) {
                RC = Rp[RN];
                var RQ = this._events[RC];
                if (RQ) {
                  const Rc = this._events[RC] = [];
                  if (Rn || Rd) {
                    for (let RV = 0, Re = RQ.length; RV < Re; RV++) {
                      var Rg = RQ[RV];
                      if (Rn && Rn !== Rg.callback && Rn !== Rg.callback._callback || Rd && Rd !== Rg.context) {
                        Rc.push(Rg);
                      }
                    }
                  }
                  if (!Rc.length) {
                    delete this._events[RC];
                  }
                }
              }
            } else {
              delete this._events;
            }
          }
          return this;
        }
        trigger(RC, ...Rn) {
          var Rd;
          if (this._events && RO(this, "trigger", RC, Rn) && (RC = this._events[RC], Rd = this._events.all, RC && Rh(RC, Rn, this), Rd)) {
            Rh(Rd, arguments, this);
          }
          return this;
        }
        triggerSafe(RC, ...Rn) {
          var Rd;
          var RQ;
          if (this._events && RO(this, "trigger", RC, Rn) && (Rd = this._events[RC], RQ = this._events.all, Rd && Rh(Rd, Rn, this, RC), RQ)) {
            Rh(RQ, arguments, this, RC);
          }
          return this;
        }
      }
      const RA = Ro.prototype.on;
      const RF = Ro.prototype.once;
      const RB = Ro.prototype.off;
      const RY = Ro.prototype.trigger;
      const Rm = Ro.prototype.triggerSafe;
      Ro.on = RA;
      Ro.once = RF;
      Ro.off = RB;
      Ro.trigger = RY;
    },
    2268: (R8, R9, RR) => {
      'use strict';

      RR.d(R9, {
        A: () => RY,
        DF: () => RF,
        Dt: () => Rp,
        G6: () => RQ,
        NO: () => RV,
        O7: () => RN,
        Q6: () => RC,
        cL: () => Rc,
        dI: () => Re,
        gn: () => Rg,
        i7: () => Rn,
        id: () => RA,
        pZ: () => RH,
        tq: () => RG,
        un: () => RB,
        w1: () => Rd,
        xb: () => RO,
        yS: () => Rm,
        zc: () => Ro
      });
      const Rj = Rk => navigator.userAgent.match(Rk) !== null;
      const Rh = () => navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1;
      const RH = () => Rj(/firefox\//i);
      const RO = () => Rj(/iP(hone|od)/i);
      const Ro = () => Rj(/iPad/i) || Rh();
      const RA = () => Rj(/Macintosh/i) && !Rh();
      const RF = () => Rj(/FBAV/i);
      const RB = () => Rj(/\sEdge?\/\d+/i);
      const RY = () => Rj(/msie/i);
      const Rm = () => Rj(/SMART-TV/);
      const RC = () => Rm() && !Rj(/SamsungBrowser/);
      const Rn = () => Rj(/\s(?:(?:Headless)?Chrome|CriOS)\//i) && !RB() && !Rj(/UCBrowser/i);
      const Rd = () => !Rj(/\sEdg\/\d+/i) && (RB() || Rj(/trident\/.+rv:\s*11/i) || RY());
      const RQ = () => Rj(/safari/i) && !Rj(/(?:Chrome|CriOS|chromium|android|phantom)/i) && !Rm();
      const Rg = () => Rj(/iP(hone|ad|od)/i) || Rh();
      const Rp = function () {
        if (typeof Rp.mock_ == "boolean") {
          return Rp.mock_;
        } else {
          return Rj(/Android/i) && !Rj(/Windows Phone/i);
        }
      };
      const RN = () => (!Rj(/chrome\/[123456789]/i) || !!Rj(/chrome\/18/i) || !!RH()) && Rp();
      Rp.mock_ = null;
      const RG = () => Rg() || Rp() || Rj(/Windows Phone/i);
      const Rc = function () {
        if (typeof Rc.mock_ == "boolean") {
          return Rc.mock_;
        }
        try {
          return window.self !== window.top;
        } catch (Rk) {
          return true;
        }
      };
      Rc.mock_ = null;
      const RV = () => false;
      const Re = () => 0;
    },
    8381: (R8, R9, RR) => {
      'use strict';

      RR.d(R9, {
        $W: () => RO,
        Mf: () => RA,
        T2: () => RF,
        _b: () => Ro
      });
      var Rj = RR(8518);
      var Rh = RR(2557);
      var RH = RR(4446);
      const RO = function (RB, RY) {
        const Rm = [];
        if (RB && RB.timestamps && RB.timestamps.length) {
          const RC = RB.timestamps.sort((Rn, Rd) => Rn.begin - Rd.begin);
          RC.forEach((Rn, Rd) => {
            var RQ = ((RN, RG = "en") => {
              let Rc = (0, Rj.G3)();
              var RV = Object.keys(RN.title);
              var Re = RV[0];
              for (; !RN.title[Rc];) {
                const Rk = RV.find((RM => RI => RI.indexOf(RM) === 0)(Rc));
                if (Rk) {
                  Rc = Rk;
                  break;
                }
                const Rx = Rc.lastIndexOf("-");
                if (Rx <= 0) {
                  Rc = null;
                  break;
                }
                Rc = Rc.slice(0, Rx);
              }
              return Rc || (RV.indexOf(RG) >= 0 ? RG : Re);
            })(Rn, RB.defaultLanguage);
            var RQ = Rn.title[RQ];
            var Rg = Rn.time;
            var Rn = Rn.image;
            let Rp = RY;
            Rg = {
              begin: Rg,
              end: Rp = Rd + 1 < RC.length ? RC[Rd + 1].time : Rp,
              text: RQ,
              cueType: "chapters"
            };
            if (Rn) {
              Rg.image = Rn;
            }
            Rm.push(Rg);
          });
        }
        return Rm;
      };
      const Ro = function (RB, RY) {
        const Rm = (0, Rj.G3)();
        const RC = RB.reduce(function (Rn, Rd) {
          var RQ;
          if (!Rd || !Rd.cueType || Rd.cueType === "chapters") {
            (RQ = new Rh.u({
              time: Rd.begin,
              image: Rd.image
            })).addTitle(Rm, Rd.text);
            Rn.push(RQ);
          }
          return Rn;
        }, []);
        if (RY) {
          RY.timestamps = RC;
          return RY;
        } else {
          return new Rh.t(Rm, RC);
        }
      };
      const RA = function (RB, RY) {
        if (typeof RB != "number" || RB < 0 || !RY || !RY.length) {
          return null;
        }
        let Rm = null;
        for (let Rn = 0; Rn < RY.length; Rn++) {
          var RC = RY[Rn];
          if (RC.time <= RB) {
            if (!Rm || RC.time > Rm.time) {
              Rm = RC;
            }
          }
        }
        return Rm;
      };
      const RF = function (RB, RY) {
        let Rm = true;
        RB.forEach(RC => {
          if (!!RC && (!RC.defaultLanguage || !RC.timestamps || !!RC.timestamps.some(Rn => !Rn.title || Rn.time === null || Rn.time === undefined))) {
            Rm = false;
          }
        });
        return RY(Rm ? null : (0, RH.l9)(new Error(), RH.aD));
      };
    },
    974: (R8, R9, RR) => {
      'use strict';

      RR.d(R9, {
        HY: () => RY,
        iv: () => RA,
        oB: () => Ro,
        oI: () => RO,
        vs: () => RF
      });
      function Rj(Rm, RC) {
        if (Rm == null) {
          throw new TypeError("Cannot convert undefined or null to object");
        }
        return Object.prototype.hasOwnProperty.call(Object(Rm), RC);
      }
      var Rh = RR(2957);
      var R9 = RR(9563);
      var RH = RR.n(R9);
      const RO = RH().clear;
      const Ro = (Rm, RC) => {
        if (Rm != null) {
          let RN;
          if (Rm.length === undefined) {
            Rm = [Rm];
          }
          var Rn;
          var Rd;
          var RQ = {};
          for (RN in RC) {
            if (Rj(RC, RN)) {
              Rn = RN;
              Rd = RC[RN];
              RQ[RN] = Rd === "" || Rd == null ? "" : typeof Rd == "string" && isNaN(Rd) ? /png|gif|jpe?g/i.test(Rd) && Rd.indexOf("url") < 0 ? "url(" + Rd + ")" : Rd : Rd === 0 || Rn === "z-index" || Rn === "opacity" ? "" + Rd : /color/i.test(Rn) ? "#" + (0, Rh.vk)(Rd.toString(16).replace(/^0x/i, ""), 6) : Math.ceil(Rd) + "px";
            }
          }
          for (let RG = 0; RG < Rm.length; RG++) {
            var Rg;
            var Rp = Rm[RG];
            if (Rp != null) {
              for (RN in RQ) {
                if (Rj(RQ, RN) && (Rg = (Rc => {
                  Rc = Rc.split("-");
                  for (let RV = 1; RV < Rc.length; RV++) {
                    Rc[RV] = Rc[RV].charAt(0).toUpperCase() + Rc[RV].slice(1);
                  }
                  return Rc.join("");
                })(RN), Rp.style[Rg] !== RQ[RN])) {
                  Rp.style[Rg] = RQ[RN];
                }
              }
            }
          }
        }
      };
      const RA = (Rm, RC, Rn, Rd) => {
        Rn = Rn || "all-players";
        let RQ = "";
        if (typeof RC == "object") {
          const Rg = document.createElement("div");
          Ro(Rg, RC);
          let Rp = Rg.style.cssText;
          if (Rj(RC, "content")) {
            Rp = Rp && Rp + " content: \"" + RC.content + "\";";
          }
          if (Rd) {
            Rp = Rp && Rp.replace(/;/g, " !important;");
          }
          RQ = "{" + Rp + "}";
        } else if (typeof RC == "string") {
          RQ = RC;
        }
        if (RQ !== "" && RQ !== "{}") {
          RH().style([[Rm, Rm + RQ]], Rn);
        } else {
          RH().clear(Rn, Rm);
        }
      };
      const RF = (Rm, RC) => {
        Ro(Rm, {
          transform: RC
        });
      };
      let RB;
      const RY = (Rm, RC) => {
        let Rn = "rgb";
        var Rd = RC !== undefined && RC !== 100;
        if (Rd) {
          Rn += "a";
        }
        if (!RB) {
          const RQ = document.createElement("canvas");
          RQ.height = 1;
          RQ.width = 1;
          RB = RQ.getContext("2d", {
            willReadFrequently: true
          });
        }
        if (Rm) {
          if (!isNaN(parseInt(Rm, 16))) {
            Rm = "#" + Rm;
          }
        } else {
          Rm = "#000000";
        }
        RB.clearRect(0, 0, 1, 1);
        RB.fillStyle = Rm;
        RB.fillRect(0, 0, 1, 1);
        Rm = RB.getImageData(0, 0, 1, 1).data;
        Rn += "(" + Rm[0] + ", " + Rm[1] + ", " + Rm[2];
        if (Rd) {
          Rn += ", " + RC / 100;
        }
        return Rn + ")";
      };
    },
    5004: (R8, R9, RR) => {
      'use strict';

      RR.d(R9, {
        z: () => Rj
      });
      const Rj = Date.now || function () {
        return new Date().getTime();
      };
    },
    2799: (R8, R9, RR) => {
      'use strict';

      RR.d(R9, {
        A8: () => RX,
        AH: () => Rf,
        EU: () => Rd,
        FK: () => Rg,
        IV: () => RV,
        L_: () => Re,
        P$: () => Rx,
        SH: () => Ri,
        UM: () => Ry,
        Ww: () => Rb,
        az: () => Rn,
        bJ: () => RC,
        cS: () => RI,
        cn: () => Rc,
        gB: () => Rm,
        i3: () => RZ,
        kq: () => RM,
        nG: () => Rt,
        nh: () => RQ,
        oH: () => RB,
        og: () => Rk,
        pv: () => RF,
        s1: () => RG
      });
      var Rj = RR(2957);
      var Rh = RR(6042);
      var RH = RR(8348);
      const RO = window.DOMParser;
      let Ro;
      let RA = true;
      const RF = (RT, Rq) => RT.classList.contains(Rq);
      const RB = RT => {
        var Rq = RT.querySelectorAll("script,object,iframe,meta");
        for (let RE = Rq.length; RE--;) {
          var Rv = Rq[RE];
          Rv.parentNode.removeChild(Rv);
        }
        return RT;
      };
      const RY = /^((((https?):\/\/)|(mailto:))(%[0-9A-Fa-f]{2}|[-()_.!~*';/?:@&=+$,A-Za-z0-9])+)([).!';/?:,][[:blank:|:blank:]])?$/;
      const Rm = RT => {
        var Rq = RT.attributes;
        for (let Ru = Rq.length; Ru--;) {
          var Rv;
          var RE = Rq[Ru].name;
          if (/^on/.test(RE)) {
            RT.removeAttribute(RE);
          }
          if (/href/.test(RE)) {
            Rv = Rq[Ru].value;
            if (!!/javascript:|javascript&colon;/.test(Rv) || !RY.test(Rv)) {
              RT.removeAttribute(RE);
              console.warn("Invalid or unsafe URL");
            }
          }
        }
        return RT;
      };
      const RC = RT => {
        RT = RT;
        if (!Ro) {
          Ro = new RO();
          RA = (() => {
            try {
              if (Ro.parseFromString("", "text/html")) {
                return true;
              }
            } catch (Ru) {}
            return false;
          })();
        }
        const Rq = (RA ? Ro.parseFromString(RT, "text/html") : (Rv = document.implementation.createHTMLDocument(""), RT.toLowerCase().indexOf("<!doctype") > -1 ? Rv.documentElement.innerHTML = RT : Rv.body.innerHTML = RT, Rv)).body;
        RB(Rq);
        var Rv;
        var RE = Rq.querySelectorAll("*");
        for (let Ru = RE.length; Ru--;) {
          const Ra = RE[Ru];
          Rm(Ra);
        }
        return Rq;
      };
      const Rn = RT => RC(RT).firstChild;
      const Rd = RT => {
        while (RT.firstChild) {
          RT.removeChild(RT.firstChild);
        }
      };
      const RQ = (RT, Rq) => {
        Rd(RT);
        if (Rq) {
          var Rv = document.createDocumentFragment();
          var RE = RC(Rq).childNodes;
          for (let Ru = 0; Ru < RE.length; Ru++) {
            Rv.appendChild(RE[Ru].cloneNode(true));
          }
          RT.appendChild(Rv);
        }
      };
      const Rg = RT => RT + (RT.toString().indexOf("%") > 0 ? "" : "px");
      const Rp = RT => (0, Rh.HD)(RT.className) ? RT.className.split(" ") : [];
      const RN = (RT, Rq) => {
        Rq = (0, Rj.fy)(Rq);
        if (RT.className !== Rq) {
          RT.className = Rq;
        }
      };
      const RG = RT => RT.classList || Rp(RT);
      const Rc = (RT, Rq) => {
        const Rv = Rp(RT);
        (Array.isArray(Rq) ? Rq : Rq.split(" ")).forEach(function (RE) {
          if (!(0, Rh.r3)(Rv, RE)) {
            Rv.push(RE);
          }
        });
        RN(RT, Rv.join(" "));
      };
      const RV = (RT, Rq) => {
        var Rv = Rp(RT);
        var Rq = Array.isArray(Rq) ? Rq : Rq.split(" ");
        RN(RT, (0, Rh.e5)(Rv, Rq).join(" "));
      };
      const Re = (RT, Rq, Rv) => {
        let RE = RT.className || "";
        if (Rq.test(RE)) {
          RE = RE.replace(Rq, Rv);
        } else if (Rv) {
          RE += " " + Rv;
        }
        RN(RT, RE);
      };
      const Rk = (RT, Rq, Rv) => {
        var RE = RF(RT, Rq);
        if ((Rv = (0, Rh.jn)(Rv) ? Rv : !RE) !== RE) {
          (Rv ? Rc : RV)(RT, Rq);
        }
      };
      const Rx = (RT, Rq, Rv) => {
        RT.setAttribute(Rq, Rv);
      };
      const RM = RT => {
        var Rq = document.createElement("link");
        Rq.rel = "stylesheet";
        Rq.href = RT;
        document.getElementsByTagName("head")[0].appendChild(Rq);
      };
      const RI = RT => {
        if (RT) {
          Rd(RT);
        }
      };
      const RX = RT => {
        var Rq;
        var Rv;
        var RE = {
          left: 0,
          right: 0,
          width: 0,
          height: 0,
          top: 0,
          bottom: 0
        };
        if (RT && document.body.contains(RT) && (RT = RT.getBoundingClientRect(), Rq = window.pageYOffset, Rv = window.pageXOffset, RT.width || RT.height || RT.left || RT.top)) {
          RE.left = RT.left + Rv;
          RE.right = RT.right + Rv;
          RE.top = RT.top + Rq;
          RE.bottom = RT.bottom + Rq;
          RE.width = RT.right - RT.left;
          RE.height = RT.bottom - RT.top;
        }
        return RE;
      };
      const Ri = (RT, Rq) => {
        RT.insertBefore(Rq, RT.firstChild);
      };
      const Rf = RT => RT.nextElementSibling;
      const RZ = RT => RT.previousElementSibling;
      const Rt = (RT, Rq, Rv = {}, RE = document) => {
        if (RY.test(RT)) {
          let Ru = RE.createElement("a");
          Ru.href = RT;
          Ru.target = Rq;
          Ru = Rm(Object.assign(Ru, Rv));
          if (RH.Browser.firefox) {
            Ru.dispatchEvent(new MouseEvent("click", {
              bubbles: true,
              cancelable: true,
              view: window
            }));
          } else {
            Ru.click();
          }
        }
      };
      const Ry = () => {
        var RT = window.screen.orientation;
        return !!RT && (RT.type === "landscape-primary" || RT.type === "landscape-secondary") || window.orientation === 90 || window.orientation === -90;
      };
      const Rb = RT => {
        RT = RT;
        (Rq = document.createElement("textarea")).innerHTML = RT;
        return Rq.value.replace(/&|<|>|"|''/gm, function (Rv) {
          return "&#" + Rv.charCodeAt(0) + ";";
        }).replace(/&#60;(\/?)(b|strong|i|em|p|br|ul|ol|li|h.)&#62;/gim, "<$1$2>");
        var Rq;
      };
    },
    4429: (R8, R9, RR) => {
      'use strict';

      RR.d(R9, {
        Z: () => RQ
      });
      var R9 = RR(1569);
      var Rj = RR(7034);
      var Rh = RR(9888);
      var RH = RR(2957);
      var RO = RR(7411);
      var Ro = RR(4742);
      function RA(Rg, Rp) {
        this.name = Rg;
        this.message = Rp.message || Rp.toString();
        this.error = Rp;
      }
      var RF = RR(6042);
      var RB = RR(2268);
      var RY = RR(2799);
      var Rm = RR(974);
      var RC = RR(6886);
      var Rn = RR(1261);
      var Rd = RR(5499);
      var RR = RR(6234);
      const RQ = Object.assign({}, Rh, Rj, R9, {
        addClass: RY.cn,
        hasClass: RY.pv,
        removeClass: RY.IV,
        replaceClass: RY.L_,
        toggleClass: RY.og,
        classList: RY.s1,
        styleDimension: RY.FK,
        createElement: RY.az,
        emptyElement: RY.EU,
        addStyleSheet: RY.kq,
        bounds: RY.A8,
        openLink: RY.nG,
        replaceInnerHtml: RY.nh,
        css: Rm.iv,
        clearCss: Rm.oI,
        style: Rm.oB,
        transform: Rm.vs,
        getRgba: Rm.HY,
        ajax: RC.h,
        crossdomain: Rg => {
          var Rp = window.URL;
          try {
            var RN = new Rp(Rg, location.origin);
            return location.protocol + "//" + location.host != RN.protocol + "//" + RN.host;
          } catch (RG) {}
          return true;
        },
        tryCatch: function (Rg, Rp, RN = []) {
          if (Ro.Z.debug) {
            return Rg.apply(Rp || this, RN);
          }
          try {
            return Rg.apply(Rp || this, RN);
          } catch (RG) {
            return new RA(Rg.name, RG);
          }
        },
        Error: RA,
        Timer: RO.Z,
        log: Rd.c,
        genId: RR.B,
        between: Rn.v,
        foreach: function (Rg, Rp) {
          for (const RN in Rg) {
            if (!!function (RG, Rc) {
              if (RG == null) {
                throw new TypeError("Cannot convert undefined or null to object");
              }
              return Object.prototype.hasOwnProperty.call(Object(RG), Rc);
            }(Rg, RN)) {
              Rp(RN, Rg[RN]);
            }
          }
        },
        flashVersion: RB.dI,
        isIframe: RB.cL,
        indexOf: RF.cq,
        trim: RH.fy,
        pad: RH.vk,
        extension: RH.AO,
        hms: RH.WZ,
        seconds: RH.m9,
        prefix: RH.O4,
        suffix: RH.uA,
        noop: () => {}
      });
    },
    7543: (R8, R9, RR) => {
      'use strict';

      RR.d(R9, {
        C: () => Rj
      });
      const Rj = Rh => !!(Rh = Rh || window.event) && Boolean(Rh) && /^(?:mouse|pointer|touch|gesture|click|key)/.test(Rh.type);
    },
    8518: (R8, R9, RR) => {
      'use strict';

      RR.d(R9, {
        Cq: () => Rn,
        Dq: () => Re,
        G3: () => RQ,
        Mh: () => Rx,
        Pm: () => Rc,
        dl: () => RV,
        id: () => RC,
        q2: () => RN,
        t6: () => Rp,
        tK: () => Rm
      });
      var R9 = RR(6042);
      var Rj = RR(2268);
      var Rh = RR(6886);
      var RH = RR(7034);
      var RO = RR(696);
      const Ro = {};
      const RA = {
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
      const RF = (0, R9.U_)(RA);
      const RB = RM => RM.toLowerCase().replace("-", "_");
      const RY = RM => {
        var RM = RB(RM);
        var RI = RM.indexOf("_");
        if (RI === -1) {
          return RM;
        } else {
          return RM.substring(0, RI);
        }
      };
      const Rm = RM => RM ? Object.keys(RM).reduce((RI, RX) => {
        RI[RB(RX)] = RM[RX];
        return RI;
      }, {}) : {};
      const RC = RM => {
        if (RM) {
          return RM.length !== 3 && RA[RY(RM)] || RM;
        }
      };
      const Rn = RM => RF[RM] || "";
      const Rd = RM => {
        RM = RM.querySelector("html");
        if (RM) {
          return RM.getAttribute("lang");
        } else {
          return null;
        }
      };
      const RQ = function () {
        if (typeof RQ.mock_ == "string") {
          return RQ.mock_;
        }
        let RM = Rd(document);
        if (!RM && (0, Rj.cL)()) {
          try {
            RM = Rd(window.top.document);
          } catch (RI) {}
        }
        return RM || navigator.language || "en";
      };
      RQ.mock_ = null;
      const Rg = ["ar", "da", "de", "el", "es", "fi", "fr", "he", "id", "it", "ja", "ko", "nb", "nl", "nn", "no", "oc", "pt", "ro", "ru", "sl", "sv", "th", "tr", "vi", "zh"];
      const Rp = RM => RM.charCodeAt(0) === 8207 || /^[\u0591-\u07FF\uFB1D-\uFDFD\uFE70-\uFEFC]/.test(RM);
      const RN = function (RM) {
        if (typeof RN.mock_ == "boolean") {
          return RN.mock_;
        } else {
          return Rg.indexOf(RY(RM)) >= 0;
        }
      };
      RN.mock_ = null;
      const RG = (RM, RI, RX) => {
        RI = RM[RX] || RI[RX];
        if (RI) {
          RM[RX] = RI;
        }
      };
      const Rc = (RM, RI, RX) => Object.assign({}, (Ri => {
        var {
          advertising: Rf,
          related: RZ,
          sharing: Rt,
          abouttext: Ry
        } = Ri;
        var Rb = Object.assign({}, Ri.localization);
        if (Rf) {
          Rb.advertising = Rb.advertising || {};
          RG(Rb.advertising, Rf, "admessage");
          RG(Rb.advertising, Rf, "cuetext");
          RG(Rb.advertising, Rf, "loadingAd");
          RG(Rb.advertising, Rf, "podmessage");
          RG(Rb.advertising, Rf, "skipmessage");
          RG(Rb.advertising, Rf, "skiptext");
        }
        if (typeof Rb.related == "string") {
          Rb.related = {
            heading: Rb.related
          };
        } else {
          Rb.related = Rb.related || {};
        }
        if (RZ) {
          RG(Rb.related, RZ, "autoplaymessage");
        }
        if (Rt) {
          Rb.sharing = Rb.sharing || {};
          RG(Rb.sharing, Rt, "heading");
          RG(Rb.sharing, Rt, "copied");
        }
        if (Ry) {
          RG(Rb, Ri, "abouttext");
        }
        var Rf = Rb.close || Rb.nextUpClose;
        if (Rf) {
          Rb.close = Rf;
        }
        return Rb;
      })(RM), RI[RY(RX)], RI[RB(RX)]);
      const RV = function (RM) {
        if (typeof RV.mock_ == "boolean") {
          return RV.mock_;
        } else {
          return (0, RH.isDeepKeyCompliant)(RO.Z, RM, (RI, RX) => typeof RX[RI] == "string");
        }
      };
      RV.mock_ = null;
      const Re = function (RM, RI) {
        if (typeof Re.mock_ == "function") {
          return Re.mock_;
        }
        let RX = Ro[RI];
        if (!RX) {
          const Ri = RM + "translations/" + (RM = RY(RI), /^n[bn]$/.test(RM) ? "no" : RM) + ".json";
          Ro[RI] = RX = new Promise((Rf, RZ) => {
            (0, Rh.h)({
              url: Ri,
              oncomplete: Rf,
              onerror: (Rt, Ry, Rb, RT) => {
                Ro[RI] = null;
                RZ(RT);
              },
              responseType: "json"
            });
          });
        }
        return RX;
      };
      Re.mock_ = null;
      const Rk = (RM, RI, RX, Ri) => {
        RM[RI] = Object.assign({}, RX[RI], Ri[RI]);
      };
      const Rx = (RM, RI) => {
        var RX = Object.assign({}, RM, RI);
        Rk(RX, "errors", RM, RI);
        Rk(RX, "related", RM, RI);
        Rk(RX, "sharing", RM, RI);
        Rk(RX, "advertising", RM, RI);
        Rk(RX, "shortcuts", RM, RI);
        Rk(RX, "captionsStyles", RM, RI);
        return RX;
      };
    },
    5499: (R8, R9, RR) => {
      'use strict';

      RR.d(R9, {
        c: () => Rj
      });
      const Rj = typeof console.log == "function" ? console.log.bind(console) : () => {};
    },
    1261: (R8, R9, RR) => {
      'use strict';

      RR.d(R9, {
        v: () => Rj
      });
      const Rj = function (Rh, RH, RO) {
        return Math.max(Math.min(Rh, RO), RH);
      };
    },
    9888: (R8, R9, RR) => {
      'use strict';

      RR.r(R9);
      RR.d(R9, {
        getAbsolutePath: () => RO,
        isAbsolutePath: () => RH,
        parseDimension: () => RF,
        parseXML: () => Ro,
        serialize: () => RA,
        timeFormat: () => RB,
        timeFormatAria: () => RY
      });
      var Rj = RR(6042);
      var Rh = RR(5950);
      const RH = Rm => /^(?:(?:https?|file):)?\/\//.test(Rm);
      const RO = (Rm, RC) => (0, Rh.kd)(Rm, RC);
      const Ro = Rm => {
        let RC = null;
        try {
          if ((RC = new window.DOMParser().parseFromString(Rm, "text/xml")).querySelector("parsererror")) {
            RC = null;
          }
        } catch (Rn) {}
        return RC;
      };
      const RA = Rm => {
        if (Rm === undefined) {
          return null;
        }
        if (typeof Rm == "string" && Rm.length < 6) {
          var RC = Rm.toLowerCase();
          if (RC === "true") {
            return true;
          }
          if (RC === "false") {
            return false;
          }
          if (!(0, Rj.i2)(Number(Rm)) && !(0, Rj.i2)(parseFloat(Rm))) {
            return Number(Rm);
          }
        }
        return Rm;
      };
      const RF = Rm => (0, Rj.qh)(Rm) ? Rm : Rm === "" ? 0 : Rm.lastIndexOf("%") > -1 ? Rm : parseInt(Rm.replace("px", ""), 10);
      const RB = (Rm, RC) => {
        if ((0, Rj.i2)(Rm)) {
          Rm = parseInt(Rm.toString(), 10);
        }
        if ((0, Rj.i2)(Rm) || !isFinite(Rm) || Rm <= 0 && !RC) {
          return "00:00";
        } else {
          RC = Rm < 0 ? "-" : "";
          Rm = Math.abs(Rm);
          return RC + ((RC = Math.floor(Rm / 3600)) ? RC + ":" : "") + ((RC = Math.floor((Rm - RC * 3600) / 60)) < 10 ? "0" : "") + RC + ":" + ((RC = Math.floor(Rm % 60)) < 10 ? "0" : "") + RC;
        }
      };
      const RY = Rm => {
        var RC;
        if ((0, Rj.i2)(Rm)) {
          Rm = parseInt(Rm.toString(), 10);
        }
        if ((0, Rj.i2)(Rm) || !isFinite(Rm) || Rm <= 0) {
          return "0 seconds";
        } else {
          return ((RC = Math.floor(Rm / 3600)) ? RC + (RC >= 1 ? " hour" + (RC > 1 ? "s" : "") + ", " : "") : "") + ((RC = Math.floor((Rm - RC * 3600) / 60)) ? RC + (RC >= 1 ? " minute" + (RC > 1 ? "s" : "") + ", " : "") : "") + (RC = Math.floor(Rm % 60)) + (RC >= 1 ? " second" + (RC > 1 ? "s" : "") : "");
        }
      };
    },
    1569: (R8, R9, RR) => {
      'use strict';

      RR.r(R9);
      RR.d(R9, {
        getScriptPath: () => RH,
        loadFrom: () => RA,
        repo: () => RO,
        versionCheck: () => Ro
      });
      var Rj = RR(6601);
      var Rh = RR(7034);
      const RH = function (RF) {
        var RB = document.getElementsByTagName("script");
        for (let RC = 0; RC < RB.length; RC++) {
          var RY = RB[RC].src;
          if (RY) {
            var Rm = RY.lastIndexOf("/" + RF);
            if (Rm >= 0) {
              return RY.substr(0, Rm + 1);
            }
          }
        }
        return "";
      };
      const RO = function () {
        var RF = "//ssl.p.jwpcdn.com/player/v/8.32.1";
        return ((0, Rh.isFileProtocol)() ? "https:" : "") + RF;
      };
      const Ro = function (RF) {
        var RF = ("0" + RF).split(/\W/);
        var RB = Rj.i.split(/\W/);
        var RY = parseFloat(RF[0]);
        var Rm = parseFloat(RB[0]);
        return Rm >= RY && (RY !== Rm || parseFloat("0" + RF[1]) <= parseFloat(RB[1]));
      };
      const RA = function () {
        return RO();
      };
    },
    6234: (R8, R9, RR) => {
      'use strict';

      RR.d(R9, {
        B: () => Rh,
        F: () => Rj
      });
      const Rj = 12;
      const Rh = RH => {
        let RO = "";
        while (RO.length < RH) {
          RO += (() => {
            try {
              var Ro = window.crypto || window.msCrypto;
              if (Ro != null && Ro.getRandomValues) {
                return Ro.getRandomValues(new Uint32Array(1))[0].toString(36);
              }
            } catch (RA) {}
            return Math.random().toString(36).slice(2, 9);
          })();
        }
        return RO.slice(0, RH);
      };
    },
    1776: (R8, R9, RR) => {
      'use strict';

      RR.d(R9, {
        U: () => Rj,
        W: () => Rh
      });
      const Rj = window.requestAnimationFrame || (RH => setTimeout(RH, 17));
      const Rh = window.cancelAnimationFrame || clearTimeout;
    },
    676: (R8, R9, RR) => {
      'use strict';

      RR.d(R9, {
        ZP: () => RO
      });
      var R9 = RR(328);
      var Rj = RR(1643);
      function Rh(Ro, RA, RF) {
        const RB = this;
        let RY = 0;
        const Rm = Rn => {
          RY = 2;
          RB.trigger(Rj.pn, Rn).off();
        };
        const RC = Rn => {
          RY = 3;
          RB.trigger(Rj.xQ, Rn).off();
        };
        this.getStatus = function () {
          return RY;
        };
        this.load = function () {
          let Rn = RH[Ro];
          if (RY === 0) {
            if (Rn) {
              Rn.then(RC).catch(Rm);
            }
            RY = 1;
            Rn = new Promise((Rd, RQ) => {
              const Rg = (RA ? RV => {
                var Re = document.createElement("link");
                Re.type = "text/css";
                Re.rel = "stylesheet";
                Re.href = RV;
                return Re;
              } : (RV, Re) => {
                var Rk = document.createElement("script");
                Rk.type = "text/javascript";
                Rk.charset = "utf-8";
                Rk.async = true;
                Rk.timeout = Re || 45000;
                Rk.src = RV;
                return Rk;
              })(Ro, RF);
              let Rp;
              function RN(RV) {
                RG();
                Rm(RV);
                RQ(RV);
              }
              const RG = function () {
                Rg.onerror = Rg.onload = null;
                clearTimeout(Rp);
              };
              Rp = setTimeout(() => {
                RN(new Error("Network timeout " + Ro));
              }, 45000);
              Rg.onerror = function () {
                RN(new Error("Failed to load " + Ro));
              };
              Rg.onload = function (RV) {
                RG();
                RC(RV);
                Rd(RV);
              };
              var Rc = document.getElementsByTagName("head")[0] || document.documentElement;
              Rc.insertBefore(Rg, Rc.firstChild);
            });
            RH[Ro] = Rn;
          }
          return Rn;
        };
      }
      const RH = {};
      Object.assign(Rh.prototype, R9.ZP);
      const RO = Rh;
    },
    2957: (R8, R9, RR) => {
      'use strict';

      RR.d(R9, {
        AO: () => RA,
        Dc: () => Ro,
        O4: () => Rm,
        U5: () => RY,
        WZ: () => RF,
        fy: () => RH,
        m9: () => RB,
        uA: () => RC,
        vk: () => RO,
        zz: () => Rn
      });
      var Rj = RR(6042);
      const Rh = window.parseFloat;
      const RH = Rd => Rd.replace(/^\s+|\s+$/g, "");
      const RO = (Rd, RQ, Rg) => {
        Rd = "" + Rd;
        Rg = Rg || "0";
        while (Rd.length < RQ) {
          Rd = Rg + Rd;
        }
        return Rd;
      };
      const Ro = (Rd, RQ) => {
        var Rg = Rd.attributes;
        for (let Rp = 0; Rp < Rg.length; Rp++) {
          if (Rg[Rp].name && Rg[Rp].name.toLowerCase() === RQ.toLowerCase()) {
            return Rg[Rp].value.toString();
          }
        }
        return "";
      };
      const RA = Rd => {
        var RQ;
        if (Rd && Rd.substr(0, 4) !== "rtmp") {
          if (RQ = /[(,]format=(m3u8|mpd)-/i.exec(Rd)) {
            return RQ[1];
          } else if ((RQ = Rd.replace(/^.+?\.(\w+)(?:[;].*)?(?:[?#].*)?$/, "$1")) !== Rd) {
            return RQ.toLowerCase();
          } else if ((Rd = Rd.split("?")[0].split("#")[0]).lastIndexOf(".") > -1) {
            return Rd.substr(Rd.lastIndexOf(".") + 1, Rd.length).toLowerCase();
          } else {
            return "";
          }
        } else {
          return "";
        }
      };
      const RF = Rd => {
        var RQ = (Rd / 60 | 0) % 60;
        var Rg = Rd % 60;
        return RO((Rd / 3600 | 0).toString(), 2) + ":" + RO(RQ.toString(), 2) + ":" + RO(Rg.toFixed(3), 6);
      };
      const RB = (Rd, RQ) => {
        if (!Rd) {
          return 0;
        }
        if ((0, Rj.qh)(Rd)) {
          return Rd;
        }
        var Rd = Rd.replace(",", ".");
        var Rg = Rd.slice(-1);
        var Rp = Rd.split(":");
        var RN = Rp.length;
        let RG = 0;
        if (Rg === "s") {
          RG = Rh(Rd);
        } else if (Rg === "m") {
          RG = Rh(Rd) * 60;
        } else if (Rg === "h") {
          RG = Rh(Rd) * 3600;
        } else if (RN > 1) {
          let Rc = RN - 1;
          if (RN === 4) {
            if (RQ) {
              RG = Rh(Rp[Rc]) / RQ;
            }
            --Rc;
          }
          RG = (RG += Rh(Rp[Rc])) + Rh(Rp[Rc - 1]) * 60;
          if (RN >= 3) {
            RG += Rh(Rp[Rc - 2]) * 3600;
          }
        } else {
          RG = Rh(Rd);
        }
        if ((0, Rj.qh)(RG)) {
          return RG;
        } else {
          return 0;
        }
      };
      const RY = (Rd, RQ, Rg) => {
        if ((0, Rj.HD)(Rd) && Rd.slice(-1) === "%") {
          const Rp = Rh(Rd);
          if (RQ && (0, Rj.qh)(RQ) && (0, Rj.qh)(Rp)) {
            return RQ * Rp / 100;
          } else {
            return null;
          }
        }
        return RB(Rd, Rg);
      };
      const Rm = (Rd, RQ) => Rd.map(Rg => RQ + Rg);
      const RC = (Rd, RQ) => Rd.map(Rg => Rg + RQ);
      const Rn = Rd => Boolean(Rd) && (0, Rj.HD)(Rd) && Rd.slice(-1) === "%";
    },
    5882: (R8, R9, RR) => {
      'use strict';

      RR.d(R9, {
        GU: () => RG,
        ZP: () => Ry,
        dO: () => Rk
      });
      var Rj = RR(8348);
      var Rh = RR(1643);
      var R9 = RR(328);
      var RH = RR(5004);
      var RO = RR(2799);
      const Ro = ("ontouchstart" in window);
      const RA = "PointerEvent" in window && !Rj.OS.android;
      const RF = !RA && (!Ro || !Rj.OS.mobile);
      const RB = "window";
      const RY = "init";
      const Rm = "select";
      const RC = "keydown";
      const Rn = Rj.Features.passiveEvents;
      const Rd = !!Rn && {
        passive: true
      };
      let RQ;
      let Rg;
      const Rp = (Rb, RT, Rq) => {
        const Rv = Rb.el;
        const RE = (() => {
          var {
            target: Ru,
            touches: Ra,
            changedTouches: RP
          } = Rq;
          let RS;
          let RJ = Rq.pointerType;
          RJ = Ra || RP ? (RS = (Ra != null && Ra.length ? Ra : RP)[0], RJ || "touch") : (RS = Rq, RJ || "mouse");
          var {
            pageX: Ra,
            pageY: RP
          } = RS;
          return {
            type: RT,
            pointerType: RJ,
            pageX: Ra,
            pageY: RP,
            sourceEvent: Rq,
            currentTarget: Rv,
            target: Ru
          };
        })();
        Rb.trigger(RT, RE);
      };
      const RN = (Rb, RT, Rq) => {
        var Rv = Rb.el;
        var RE = Rq.target;
        Rb.trigger(RT, {
          type: RT,
          sourceEvent: Rq,
          currentTarget: Rv,
          target: RE
        });
      };
      const RG = Rb => {
        Rb = Rb.ownerDocument || Rb;
        return Rb.defaultView || Rb.parentWindow || window;
      };
      const Rc = (Rb, RT, Rq, Rv, RE = Rd) => {
        let Ru = Rb.handlers[RT];
        let Ra = Rb.options[RT];
        if (!Ru) {
          Ru = Rb.handlers[RT] = {};
          Ra = Rb.options[RT] = {};
        }
        if (Ru[Rq]) {
          throw new Error(RT + (" " + Rq + " already registered"));
        }
        Ru[Rq] = Rv;
        Ra[Rq] = RE;
        Rb = Rb.el;
        RT = RT === RB ? RG(Rb) : Rb;
        if (RT) {
          RT.addEventListener(Rq, Rv, RE);
        }
      };
      const RV = Rb => {
        var RT = Rb.el;
        if (Rb.pointerId !== null) {
          RT.releasePointerCapture(Rb.pointerId);
          Rb.pointerId = null;
        }
      };
      const Re = (Rb, RT) => {
        const {
          el: Rq,
          handlers: Rv,
          options: RE
        } = Rb;
        const Ru = RT === RB ? RG(Rq) : Rq;
        const Ra = Rv[RT];
        const RP = RE[RT];
        if (Ra) {
          Object.keys(Ra).forEach(RS => {
            var RJ = RP[RS];
            if (typeof RJ == "boolean") {
              Ru.removeEventListener(RS, Ra[RS], RJ);
            } else {
              Ru.removeEventListener(RS, Ra[RS]);
            }
          });
          Rv[RT] = null;
          RE[RT] = null;
        }
      };
      const Rk = Rb => !!Boolean(Rb.ctrlKey) && Rb.type === "click" || ("which" in Rb ? Rb.which === 3 : "button" in Rb && Rb.button === 2);
      const Rx = (Rb, RT) => {
        Rg = Rg || new Ry(document).on("interaction");
        if (!Rb.handlers[RY] && !Rb.handlers[Rm]) {
          const Rq = Rb.el;
          Rc(Rb, RT, "blur", () => {
            (0, RO.IV)(Rq, "jw-tab-focus");
            Rb.clicking = false;
          });
          Rc(Rb, RT, "focus", () => {
            if (Rg.event && Rg.event.type === RC) {
              (0, RO.cn)(Rq, "jw-tab-focus");
            }
          });
        }
      };
      const RM = (Rb, RT, Rq, Rv) => {
        if (RA) {
          Rc(Rb, RT, "pointerdown", Rq, Rv);
        } else {
          if (RF) {
            Rc(Rb, RT, "mousedown", Rq, Rv);
          }
          Rc(Rb, RT, "touchstart", Rq, Rv);
        }
      };
      const RI = Rb => {
        if (!Rb.handlers[Rm]) {
          const RT = Rb.el;
          Rx(Rb, Rm);
          RM(Rb, Rm, Rq => {
            var Rv = Rq.target;
            if (!Rk(Rq) && (!Boolean(Rb.directSelect) || Rv === RT)) {
              if (Rq.isPrimary && Rv.tagName === "BUTTON") {
                Rv.focus();
              }
              Rb.lastStart = (0, RH.z)();
              Rb.clicking = true;
            }
          });
          Rc(Rb, Rm, "click", Rq => {
            var Rv;
            var RE;
            if (!Rk(Rq) && (!Boolean(Rb.directSelect) || Rq.target === RT)) {
              if ((0, RH.z)() - Rb.lastStart <= 500 || Rb.clicking !== true) {
                RE = Rq;
                if ((Rv = Rb).enableDoubleClick) {
                  if ((0, RH.z)() - Rv.lastClick < 300) {
                    Rp(Rv, Rh.P, RE);
                    Rv.lastClick = 0;
                  } else {
                    Rv.lastClick = (0, RH.z)();
                  }
                }
                Rp(Rb, Rh.ot, Rq);
              }
              Rb.clicking = false;
            }
          });
        }
      };
      const RX = Rb => Rb.type.indexOf("touch") === 0 ? (Rb.originalEvent || Rb).changedTouches[0] : Rb;
      const Ri = Rb => {
        if (!Rb.handlers[RY]) {
          const {
            el: RT,
            passive: Rq
          } = Rb;
          const Rv = !!Rn && {
            passive: Rq
          };
          const RE = Ra => {
            if (Rb.dragged) {
              Rp(Rb, Rh.Wp, Ra);
            } else {
              const {
                pageX: RS,
                pageY: RJ
              } = RX(Ra);
              const Rw = RS - Rb.startX;
              const RK = RJ - Rb.startY;
              if (Rw * Rw + RK * RK > 36) {
                Rp(Rb, Rh.nv, Ra);
                Rb.dragged = true;
                Rp(Rb, Rh.Wp, Ra);
              }
            }
            var RP;
            if (!Rq && Ra.type === "touchmove") {
              if (Ra.preventDefault) {
                Ra.preventDefault();
              }
            }
          };
          const Ru = Ra => {
            clearTimeout(RQ);
            if (Rb.el && (RV(Rb), Re(Rb, RB), Rb.dragged)) {
              Rb.dragged = false;
              Rp(Rb, Rh.Sv, Ra);
            }
          };
          Rx(Rb, RY);
          RM(Rb, RY, Ra => {
            (0, RO.IV)(RT, "jw-tab-focus");
            if (!Rk(Ra)) {
              var {
                target: RP,
                type: RS
              } = Ra;
              if (!Rb.directSelect || RP === RT) {
                var {
                  pageX: RP,
                  pageY: RJ
                } = RX(Ra);
                Rb.dragged = false;
                Rb.startX = RP;
                Rb.startY = RJ;
                Re(Rb, RB);
                if (RS === "pointerdown" && Ra.isPrimary) {
                  if (!Rq) {
                    const Rw = Ra.pointerId;
                    Rb.pointerId = Rw;
                    RT.setPointerCapture(Rw);
                  }
                  Rc(Rb, RB, "pointermove", RE, Rv);
                  Rc(Rb, RB, "pointercancel", Ru);
                  Rc(Rb, RB, "pointerup", Ru);
                } else if (RS === "mousedown") {
                  Rc(Rb, RB, "mousemove", RE, Rv);
                  Rc(Rb, RB, "mouseup", Ru);
                } else if (RS === "touchstart") {
                  Rc(Rb, RB, "touchmove", RE, Rv);
                  Rc(Rb, RB, "touchcancel", Ru);
                  Rc(Rb, RB, "touchend", Ru);
                }
              }
            }
          }, Rv);
        }
      };
      const Rf = {
        drag(Rb) {
          Ri(Rb);
        },
        dragStart(Rb) {
          Ri(Rb);
        },
        dragEnd(Rb) {
          Ri(Rb);
        },
        click(Rb) {
          RI(Rb);
        },
        doubleClick(Rb) {
          Rb.enableDoubleClick = true;
          RI(Rb);
        },
        longPress(Rb) {
          const RT = "longPress";
          if (Rj.OS.iOS) {
            const Rq = () => {
              clearTimeout(RQ);
            };
            Rc(Rb, RT, "touchstart", Rv => {
              Rq();
              RQ = setTimeout(() => {
                Rp(Rb, RT, Rv);
              }, 500);
            });
            Rc(Rb, RT, "touchmove", Rq);
            Rc(Rb, RT, "touchcancel", Rq);
            Rc(Rb, RT, "touchend", Rq);
          } else {
            Rb.el.oncontextmenu = Rv => {
              Rp(Rb, RT, Rv);
              return false;
            };
          }
        },
        focus(Rb) {
          const RT = "focus";
          Rc(Rb, RT, RT, Rq => {
            RN(Rb, RT, Rq);
          });
        },
        blur(Rb) {
          const RT = "blur";
          Rc(Rb, RT, RT, Rq => {
            RN(Rb, RT, Rq);
          });
        },
        over(Rb) {
          if (RA || RF) {
            Rc(Rb, Rh.B1, RA ? "pointerover" : "mouseover", RT => {
              if (RT.pointerType !== "touch") {
                Rp(Rb, Rh.B1, RT);
              }
            });
          }
        },
        out(Rb) {
          if (RA) {
            const RT = Rb.el;
            Rc(Rb, Rh.U3, "pointerout", Rq => {
              var Rv;
              if (Rq.pointerType !== "touch" && "clientX" in Rq) {
                Rv = document.elementFromPoint(Rq.clientX, Rq.clientY);
                if (!RT.contains(Rv)) {
                  Rp(Rb, Rh.U3, Rq);
                }
              }
            });
          } else if (RF) {
            Rc(Rb, Rh.U3, "mouseout", Rq => {
              Rp(Rb, Rh.U3, Rq);
            });
          }
        },
        move(Rb) {
          if (RA || RF) {
            Rc(Rb, Rh.tP, RA ? "pointermove" : "mousemove", RT => {
              if (RT.pointerType !== "touch") {
                Rp(Rb, Rh.tP, RT);
              }
            });
          }
        },
        enter(Rb) {
          Rc(Rb, Rh.K5, RC, RT => {
            if (RT.key === "Enter" || RT.keyCode === 13) {
              RT.stopPropagation();
              RN(Rb, Rh.K5, RT);
            }
          });
        },
        keydown(Rb) {
          Rc(Rb, RC, RC, RT => {
            RN(Rb, RC, RT);
          }, false);
        },
        gesture(Rb) {
          const RT = "gesture";
          const Rq = Rv => Rp(Rb, RT, Rv);
          Rc(Rb, RT, "click", Rq);
          Rc(Rb, RT, RC, Rq);
        },
        interaction(Rb) {
          var RT = "interaction";
          var Rq = Rv => {
            Rb.event = Rv;
          };
          Rc(Rb, RT, "mousedown", Rq, true);
          Rc(Rb, RT, RC, Rq, true);
        },
        tap() {},
        doubleTap() {}
      };
      const RZ = /\s+/;
      const Rt = Rb => Rb && !RZ.test(Rb) && typeof Rb != "object";
      class Ry extends R9.ZP {
        constructor(Rb, RT) {
          super();
          var Rq = !(RT = RT || {}).preventScrolling;
          this.directSelect = Boolean(RT.directSelect);
          this.dragged = false;
          this.enableDoubleClick = false;
          this.el = Rb;
          this.handlers = {};
          this.options = {};
          this.lastClick = 0;
          this.lastStart = 0;
          this.passive = Rq;
          this.pointerId = null;
          this.startX = 0;
          this.startY = 0;
          this.event = null;
          this.clicking = false;
        }
        on(Rb, RT, Rq) {
          if (!!Rt(Rb) && !this.handlers[Rb]) {
            Rf[Rb](this);
          }
          return super.on(Rb, RT, Rq);
        }
        off(Rb, RT, Rq) {
          if (Rt(Rb)) {
            Re(this, Rb);
          } else if (!Rb) {
            const Rv = this.handlers;
            Object.keys(Rv).forEach(RE => {
              Re(this, RE);
            });
          }
          return super.off(Rb, RT, Rq);
        }
        destroy() {
          if (this.el) {
            this.off();
            if (RA) {
              RV(this);
            }
            this.el = null;
          }
        }
      }
    },
    6042: (R8, R9, RR) => {
      'use strict';

      RR.d(R9, {
        Cb: () => j6,
        HD: () => Ru,
        Kn: () => RZ,
        P2: () => jm,
        S6: () => Rt,
        UI: () => RS,
        U_: () => jC,
        Yj: () => RL,
        ZP: () => jN,
        _e: () => jo,
        a9: () => jg,
        ar: () => jO,
        ce: () => jn,
        cq: () => jR,
        dp: () => j2,
        e1: () => j9,
        e5: () => jA,
        ei: () => jQ,
        hX: () => Rs,
        hj: () => RE,
        i2: () => RP,
        jn: () => j4,
        l7: () => jd,
        mf: () => Rv,
        o8: () => j5,
        qh: () => jp,
        r3: () => jj,
        sE: () => Rr,
        u4: () => RK,
        vM: () => j7,
        wB: () => jH,
        xV: () => j3,
        yR: () => RW
      });
      R9 = RR(5004);
      function Rj(jG) {
        if (!RZ(jG)) {
          return [];
        }
        if (RI) {
          return RI(jG);
        }
        var jc = [];
        for (const jV in jG) {
          if (Rf(jG, jV)) {
            jc.push(jV);
          }
        }
        return jc;
      }
      function Rh(jG, jc, ...jV) {
        if (RX && jG.bind === RX) {
          return RX.apply(jG, [jc].concat(jV));
        }
        if (Rv(jG)) {
          return je;
        }
        throw new TypeError();
        function je(...jk) {
          if (!(this instanceof je)) {
            return jG.apply(jc, jV.concat(jk));
          }
          Rw.prototype = jG.prototype;
          var jx = new Rw();
          Rw.prototype = null;
          var jk = jG.apply(jx, jV.concat(jk));
          if (Object(jk) === jk) {
            return jk;
          } else {
            return jx;
          }
        }
      }
      function RH(jG, jc, jV) {
        jc = jc || RW;
        let je = true;
        if (jG == null) {
          return je;
        } else if (Re && jG.every === Re) {
          return jG.every(jc, jV);
        } else {
          Rt(jG, function (jk, jx, jM) {
            if (!(je = je && jc.call(jV, jk, jx, jM))) {
              return RY;
            }
          });
          return Boolean(je);
        }
      }
      function RO(jG, jc) {
        let jV;
        return function (...je) {
          if (--jG > 0) {
            jV = jc.apply(this, je);
          }
          if (jG <= 1) {
            jc = null;
          }
          return jV;
        };
      }
      function Ro(jG) {
        if (jG == null) {
          return RW;
        } else if (Rv(jG)) {
          return jG;
        } else {
          return j6(jG);
        }
      }
      function RA(jG) {
        return function (jc, jV, je) {
          const jk = {};
          jV = Ro(jV);
          Rt(jc, function (jx, jM) {
            jM = jV.call(je, jx, jM, jc);
            jG(jk, jM, jx);
          });
          return jk;
        };
      }
      function RF(jG, ...jc) {
        return function (...jV) {
          let je = 0;
          var jk = jc.slice();
          for (let jx = 0, jM = jk.length; jx < jM; jx++) {
            if (Rf(jk[jx], "partial")) {
              jk[jx] = jV[je++];
            }
          }
          while (je < arguments.length) {
            jk.push(jV[je++]);
          }
          return jG.apply(this, jk);
        };
      }
      function RB(jG, jc, ...jV) {
        return setTimeout(function () {
          return jG.apply(null, jV);
        }, jc);
      }
      const RY = {};
      const Rm = Array.prototype;
      const RC = Object.prototype;
      const Rn = Function.prototype;
      const Rd = Rm.slice;
      const RQ = Rm.concat;
      const Rg = RC.toString;
      const Rp = RC.hasOwnProperty;
      const RN = Rm.map;
      const RG = Rm.reduce;
      const Rc = Rm.forEach;
      const RV = Rm.filter;
      const Re = Rm.every;
      const Rk = Rm.some;
      const Rx = Rm.indexOf;
      const RM = Array.isArray;
      const RI = Object.keys;
      const RX = Rn.bind;
      const Ri = window.isFinite;
      const Rf = function (jG, jc) {
        return Rp.call(jG, jc);
      };
      const RZ = function (jG) {
        return jG === Object(jG);
      };
      const Rt = function (jG, jc, jV) {
        let je;
        let jk;
        if (jG != null) {
          if (Rc && jG.forEach === Rc) {
            jG.forEach(jc, jV);
          } else if (jG.length === Number(jG.length)) {
            je = 0;
            jk = jG.length;
            for (; je < jk; je++) {
              if (jc.call(jV, jG[je], je, jG) === RY) {
                return;
              }
            }
          } else {
            var jx = Rj(jG);
            je = 0;
            jk = jx.length;
            for (; je < jk; je++) {
              if (jc.call(jV, jG[jx[je]], jx[je], jG) === RY) {
                return;
              }
            }
          }
        }
        return jG;
      };
      const Ry = Rt;
      const Rb = [];
      Rt(["Function", "String", "Number", "Date", "RegExp"], function (jG) {
        Rb[jG] = function (jc) {
          return Rg.call(jc) == "[object " + jG + "]";
        };
      });
      const RT = Rb.Date;
      const Rq = Rb.RegExp;
      const Rv = Rb.Function;
      const RE = Rb.Number;
      const Ru = Rb.String;
      const Ra = RM || function (jG) {
        return Rg.call(jG) == "[object Array]";
      };
      const RP = function (jG) {
        return RE(jG) && jG != Number(jG);
      };
      const RS = function (jG, jc, jV) {
        const je = [];
        if (jG == null) {
          return je;
        } else if (RN && jG.map === RN) {
          return jG.map(jc, jV);
        } else {
          Rt(jG, function (jk, jx, jM) {
            je.push(jc.call(jV, jk, jx, jM));
          });
          return je;
        }
      };
      const RJ = RS;
      const Rw = function () {};
      const RK = function (jG, jc, jV, je) {
        let jk = arguments.length > 2;
        if (jG == null) {
          jG = [];
        }
        if (RG && jG.reduce === RG) {
          if (je) {
            jc = Rh(jc, je);
          }
          if (jk) {
            return jG.reduce(jc, jV);
          } else {
            return jG.reduce(jc);
          }
        }
        Rt(jG, function (jx, jM, jI) {
          if (jk) {
            jV = jc.call(je, jV, jx, jM, jI);
          } else {
            jV = jx;
            jk = true;
          }
        });
        if (jk) {
          return jV;
        }
        throw new TypeError("Reduce of empty array with no initial value");
      };
      const RD = RK;
      const RU = RK;
      const RW = function (jG) {
        return jG;
      };
      const RL = function (jG, jc, jV) {
        jc = jc || RW;
        let je = false;
        if (jG == null) {
          return je;
        } else if (Rk && jG.some === Rk) {
          return jG.some(jc, jV);
        } else {
          Rt(jG, function (jk, jx, jM) {
            if (je = je || jc.call(jV, jk, jx, jM)) {
              return RY;
            }
          });
          return Boolean(je);
        }
      };
      const Rz = RL;
      const Rr = function (jG, jc, jV) {
        let je;
        RL(jG, function (jk, jx, jM) {
          if (jc.call(jV, jk, jx, jM)) {
            je = jk;
            return true;
          }
        });
        return je;
      };
      const Rl = Rr;
      const Rs = function (jG, jc, jV) {
        const je = [];
        if (jG == null) {
          return je;
        } else if (RV && jG.filter === RV) {
          return jG.filter(jc, jV);
        } else {
          Rt(jG, function (jk, jx, jM) {
            if (jc.call(jV, jk, jx, jM)) {
              je.push(jk);
            }
          });
          return je;
        }
      };
      const j0 = Rs;
      const j1 = RH;
      const j2 = function (jG) {
        if (jG == null) {
          return 0;
        } else {
          return (jG.length === Number(jG.length) ? jG : Rj(jG)).length;
        }
      };
      Rb.Function = function (jG) {
        return typeof jG == "function";
      };
      const j3 = function (jG) {
        return Ri(jG) && !RP(parseFloat(jG));
      };
      const j4 = function (jG) {
        return jG === true || jG === false || Rg.call(jG) == "[object Boolean]";
      };
      const j5 = function (jG) {
        return jG === undefined;
      };
      const j6 = function (jG) {
        return function (jc) {
          return jc[jG];
        };
      };
      const j7 = RA(function (jG, jc, jV) {
        if (Rf(jG, jc)) {
          jG[jc].push(jV);
        } else {
          jG[jc] = [jV];
        }
      });
      const j8 = RA(function (jG, jc, jV) {
        jG[jc] = jV;
      });
      const j9 = function (jG, jc, jV, je) {
        var jk = (jV = Ro(jV)).call(je, jc);
        let jx = 0;
        let jM = jG.length;
        while (jx < jM) {
          const jI = jx + jM >>> 1;
          if (jV.call(je, jG[jI]) < jk) {
            jx = 1 + jI;
          } else {
            jM = jI;
          }
        }
        return jx;
      };
      const jR = function (jG, jc, jV) {
        if (jG != null) {
          let jk = 0;
          var je = jG.length;
          if (jV) {
            if (typeof jV != "number") {
              if (jG[jk = j9(jG, jc)] === jc) {
                return jk;
              } else {
                return -1;
              }
            }
            jk = jV < 0 ? Math.max(0, je + jV) : jV;
          }
          if (Rx && jG.indexOf === Rx) {
            return jG.indexOf(jc, jV);
          }
          for (; jk < je; jk++) {
            if (jG[jk] === jc) {
              return jk;
            }
          }
        }
        return -1;
      };
      const jj = function (jG, jc) {
        return jG != null && (jG.length !== Number(jG.length) && (jG = function (jV) {
          var je = Rj(jV);
          var jk = Rj.length;
          var jx = Array(jk);
          for (let jM = 0; jM < jk; jM++) {
            jx[jM] = jV[je[jM]];
          }
          return jx;
        }(jG)), jR(jG, jc) >= 0);
      };
      const jh = jj;
      const jH = function (jG) {
        return function (jc) {
          if (jc !== jG) {
            for (const jV in jG) {
              if (jG[jV] !== jc[jV]) {
                return false;
              }
            }
          }
          return true;
        };
      };
      const jO = function (jG, jc) {
        return Rs(jG, jH(jc));
      };
      const jo = function (jG, jc) {
        return Rr(jG, jH(jc));
      };
      const jA = function (jG, ...jc) {
        const jV = RQ.apply(Rm, jc);
        return Rs(jG, function (je) {
          return !jj(jV, je);
        });
      };
      const jF = RF(RO, 2);
      const jB = RF(RB, {
        partial: RF
      }, 1);
      const jY = R9.z;
      const jm = function (jG, jc, jV) {
        let je;
        let jk;
        let jx;
        let jM = null;
        let jI = 0;
        jV = jV || {};
        function jX() {
          jI = jV.leading === false ? 0 : jY();
          jM = null;
          jx = jG.apply(je, jk);
          je = jk = null;
        }
        return function (...ji) {
          var jf = jY();
          if (!jI && jV.leading === false) {
            jI = jf;
          }
          var jZ = jc - (jf - jI);
          je = this;
          jk = ji;
          if (jZ <= 0) {
            clearTimeout(jM);
            jM = null;
            jI = jf;
            jx = jG.apply(je, jk);
            je = jk = null;
          } else if (!jM && jV.trailing !== false) {
            jM = setTimeout(jX, jZ);
          }
          return jx;
        };
      };
      const jC = function (jG) {
        var jc = {};
        var jV = Rj(jG);
        for (let je = 0, jk = jV.length; je < jk; je++) {
          jc[jG[jV[je]]] = jV[je];
        }
        return jc;
      };
      const jn = function (jG, ...jc) {
        Rt(jc, function (jV) {
          if (jV) {
            for (const je in jV) {
              if (jG[je] === undefined) {
                jG[je] = jV[je];
              }
            }
          }
        });
        return jG;
      };
      const jd = Object.assign || function (jG, ...jc) {
        Rt(jc, function (jV) {
          if (jV) {
            for (const je in jV) {
              if (!!function (jk, jx) {
                if (jk == null) {
                  throw new TypeError("Cannot convert undefined or null to object");
                }
                return Object.prototype.hasOwnProperty.call(Object(jk), jx);
              }(jV, je)) {
                jG[je] = jV[je];
              }
            }
          }
        });
        return jG;
      };
      const jQ = function (jG, ...jc) {
        const jV = {};
        jc = [].concat(...jc);
        Rt(jc, function (je) {
          if (je in jG) {
            jV[je] = jG[je];
          }
        });
        return jV;
      };
      const jg = function (jG) {
        return function () {
          return jG;
        };
      };
      const jp = jG => RE(jG) && !RP(jG);
      const jN = {
        after: function (jG, jc) {
          return function (...jV) {
            if (--jG < 1) {
              return jc.apply(this, jV);
            }
          };
        },
        all: RH,
        any: RL,
        before: RO,
        bind: Rh,
        clone: function (jG) {
          if (RZ(jG)) {
            if (Ra(jG)) {
              return jG.slice();
            } else {
              return jd({}, jG);
            }
          } else {
            return jG;
          }
        },
        collect: RJ,
        compact: function (jG) {
          return Rs(jG, RW);
        },
        constant: jg,
        contains: jj,
        debounce: (jG, jc = 100) => {
          let jV;
          return function (...je) {
            clearTimeout(jV);
            jV = setTimeout(() => {
              jG.apply(this, je);
            }, jc);
          };
        },
        defaults: jn,
        defer: jB,
        delay: RB,
        detect: Rl,
        difference: jA,
        each: Rt,
        every: j1,
        extend: jd,
        filter: Rs,
        find: Rr,
        findWhere: jo,
        foldl: RD,
        forEach: Ry,
        groupBy: j7,
        has: Rf,
        identity: RW,
        include: jh,
        indexBy: j8,
        indexOf: jR,
        inject: RU,
        invert: jC,
        isArray: Ra,
        isBoolean: j4,
        isDate: RT,
        isFinite: j3,
        isFunction: Rv,
        isNaN: RP,
        isNull: function (jG) {
          return jG === null;
        },
        isNumber: RE,
        isObject: RZ,
        isRegExp: Rq,
        isString: Ru,
        isUndefined: j5,
        isValidNumber: jp,
        keys: Rj,
        last: function (jG, jc, jV) {
          if (jG != null) {
            if (jc == null || jV) {
              return jG[jG.length - 1];
            } else {
              return Rd.call(jG, Math.max(jG.length - jc, 0));
            }
          }
        },
        map: RS,
        matches: jH,
        max: function (jG, jc, jV) {
          if (!jc && Ra(jG) && jG[0] === Number(jG[0]) && jG.length < 65535) {
            return Math.max(...jG);
          }
          let je = -Infinity;
          let jk = -Infinity;
          Rt(jG, function (jx, jM, jI) {
            jM = jc ? jc.call(jV, jx, jM, jI) : jx;
            if (jM > jk) {
              je = jx;
              jk = jM;
            }
          });
          return je;
        },
        memoize: function (jG, jc) {
          const jV = {};
          jc = jc || RW;
          return function (...je) {
            var jk = jc.apply(this, je);
            if (Rf(jV, jk)) {
              return jV[jk];
            } else {
              return jV[jk] = jG.apply(this, je);
            }
          };
        },
        now: jY,
        omit: function (jG, ...jc) {
          var jV = {};
          for (const je in jG) {
            if (!jj(jc, je)) {
              jV[je] = jG[je];
            }
          }
          return jV;
        },
        once: jF,
        partial: RF,
        pick: jQ,
        pluck: function (jG, jc) {
          return RS(jG, j6(jc));
        },
        property: j6,
        propertyOf: function (jG) {
          if (jG == null) {
            return function () {};
          } else {
            return function (jc) {
              return jG[jc];
            };
          }
        },
        reduce: RK,
        reject: function (jG, jc, jV) {
          return Rs(jG, function (je, jk, jx) {
            return !jc.call(jV, je, jk, jx);
          }, jV);
        },
        result: function (jG, jc) {
          if (jG != null) {
            jc = jG[jc];
            if (Rv(jc)) {
              return jc.call(jG);
            } else {
              return jc;
            }
          }
        },
        select: j0,
        size: j2,
        some: Rz,
        sortedIndex: j9,
        throttle: jm,
        where: jO,
        without: function (jG, ...jc) {
          return jA(jG, jc);
        }
      };
    },
    5950: (R8, R9, RR) => {
      'use strict';

      RR.d(R9, {
        O9: () => RO,
        _N: () => RH,
        kd: () => RF,
        ke: () => Ro,
        vl: () => Rh
      });
      const Rj = /^[^:/?#]+:?\/\/[^/?#]+/;
      const Rh = function (RB) {
        if (!RB) {
          return {};
        }
        var RY;
        var Rm = (Rn => {
          if (Rn) {
            return new URL(Rn, window.location);
          }
        })(RB);
        var RC = {};
        for (const Rn of Rm.searchParams.keys()) {
          if (!RC[Rn]) {
            RY = Rm.searchParams.getAll(Rn);
            RC[Rn] = RY.length === 1 ? RY[0] : RY;
          }
        }
        return RC;
      };
      const RH = function (RB) {
        if (!RB || (RB = new URLSearchParams(RB).get("jw_start") || -1, isNaN(RB)) || RB < -1) {
          return -1;
        } else {
          return Number(RB);
        }
      };
      const RO = function (RB, RY = "{seek_to_second_number}") {
        if (RB) {
          RB = new URL(RB);
          RB.searchParams.set("jw_start", "");
          let Rm = RB.toString();
          return Rm = Rm.replace(/jw_start=?/i, "jw_start=" + RY);
        }
      };
      const Ro = (RB, RY) => {
        if (RB) {
          return new URLSearchParams(RB).has(RY);
        }
      };
      const RA = RB => !!RB && RB.match(Rj) !== null;
      const RF = (RB, RY) => {
        RY = RY || document.location.href;
        if (RB && RA(RY)) {
          if (RA(RB)) {
            return RB;
          } else {
            return new URL(RB, RY).toString();
          }
        } else {
          return "";
        }
      };
    },
    7034: (R8, R9, RR) => {
      'use strict';

      RR.r(R9);
      RR.d(R9, {
        exists: () => Rh,
        isDeepKeyCompliant: () => RB,
        isFileProtocol: () => RO,
        isHTTPS: () => RH,
        isRtmp: () => Ro,
        isYouTube: () => RA,
        typeOf: () => RF
      });
      const Rj = window.location.protocol;
      const Rh = RY => {
        switch (typeof RY) {
          case "string":
            return RY.length > 0;
          case "object":
            return RY !== null;
          case "undefined":
            return false;
          default:
            return true;
        }
      };
      const RH = () => Rj === "https:";
      const RO = () => Rj === "file:";
      const Ro = (RY, Rm) => RY.indexOf("rtmp:") === 0 || Rm === "rtmp";
      const RA = (RY, Rm) => Rm === "youtube" || /^(http|\/\/).*(youtube\.com|youtu\.be)\/.+/.test(RY);
      const RF = RY => {
        var Rm;
        if (RY === null) {
          return "null";
        } else if ((Rm = typeof RY) == "object" && Array.isArray(RY)) {
          return "array";
        } else {
          return Rm;
        }
      };
      const RB = (RY, Rm, RC) => {
        var Rn = Object.keys(RY);
        return Object.keys(Rm).length >= Rn.length && Rn.every(Rd => {
          var RQ = RY[Rd];
          var Rg = Rm[Rd];
          if (RQ && typeof RQ == "object") {
            return !!Rg && typeof Rg == "object" && RB(RQ, Rg, RC);
          } else {
            return RC(Rd, RY);
          }
        });
      };
    },
    9025: (R8, R9, RR) => {
      'use strict';

      RR.d(R9, {
        Z: () => Rj
      });
      const Rj = document.createElement("video");
    },
    6601: (R8, R9, RR) => {
      'use strict';

      RR.d(R9, {
        i: () => Rj
      });
      const Rj = "8.32.1+commercial_master.556.ads-dai@mono.ads-freewheel@mono.ads-googima@mono.ads-vast@mono.hls.js@1.4.10.jwplayer@mono.jwplayer-ads-header-bidding@github:jwplayer/jwplayer-ads-header-bidding#v7.6.0.jwplayer-analytics@github:jwplayer/jwplayer-analytics#v4.0.3.jwplayer-analytics-kraken@v0.0.4.plugin-gapro@mono";
    },
    4225: (R8, R9, RR) => {
      'use strict';

      RR.d(R9, {
        Z: () => function (RO, Ro) {
          var {
            message: Ro,
            code: RA
          } = Ro;
          var Ro = Rj(RO.get("id"), Ro, RO.get("localization").errors.errorCode, RA.toString());
          var RA = RO.get("width");
          var RO = RO.get("height");
          var Ro = (0, Rh.az)(Ro);
          (0, RH.oB)(Ro, {
            width: RA.toString().indexOf("%") > 0 ? RA : RA + "px",
            height: RO.toString().indexOf("%") > 0 ? RO : RO + "px"
          });
          return Ro;
        }
      });
      const Rj = (RO, Ro, RA, RF) => "<div id=\"" + RO + "\" class=\"jw-error jw-reset\"><div class=\"jw-error-msg jw-info-overlay jw-reset\"><style>[id=\"" + RO + "\"].jw-error{background:#000;overflow:hidden;position:relative}[id=\"" + RO + "\"] .jw-error-msg{top:50%;left:50%;position:absolute;transform:translate(-50%,-50%)}[id=\"" + RO + "\"] .jw-error-text{text-align:start;color:#FFF;font:14px/1.35 Arial,Helvetica,sans-serif}</style><div class=\"jw-icon jw-reset\"></div><div class=\"jw-info-container jw-reset\"><div class=\"jw-error-text jw-reset-text\" dir=\"auto\" data-nosnippet>" + (Ro || "") + "<span class=\"jw-break jw-reset\"></span>" + (RF ? ("(" + RA + ": " + RF + ")").replace(/\s+/g, "&nbsp;") : "") + "</div></div></div></div>";
      var Rh = RR(2799);
      var RH = RR(974);
    },
    9926: (R8, R9, RR) => {
      'use strict';

      RR.d(R9, {
        Z: () => RF
      });
      var Rj = RR(1776);
      var Rh = RR(2799);
      var RH = RR(974);
      const RO = [];
      let Ro = -1;
      const RA = () => {
        (0, Rj.W)(Ro);
        Ro = (0, Rj.U)(() => {
          RO.forEach(RB => {
            RB.view.updateBounds();
            var RY = RB.view.model.get("containerWidth");
            RB.resized = RB.width !== RY;
            RB.width = RY;
          });
          RO.forEach(RB => {
            RB.contractElement.scrollLeft = RB.width * 2;
          });
          RO.forEach(RB => {
            (0, RH.oB)(RB.expandChild, {
              width: RB.width + 1
            });
            if (RB.resized && RB.view.model.get("visibility")) {
              RB.view.updateStyles();
            }
          });
          RO.forEach(RB => {
            RB.expandElement.scrollLeft = RB.width + 1;
          });
          RO.forEach(RB => {
            if (RB.resized) {
              RB.view.checkResized();
            }
          });
        });
      };
      class RF {
        constructor(RB, RY, Rm) {
          var RC = {
            display: "block",
            position: "absolute",
            top: 0,
            left: 0
          };
          var Rn = {
            width: "100%",
            height: "100%"
          };
          var Rd = (0, Rh.az)("<div style=\"opacity:0;visibility:hidden;overflow:hidden;\"><div><div style=\"height:1px;\"></div></div><div class=\"jw-contract-trigger\"></div></div>");
          var RQ = Rd.firstChild;
          var Rg = RQ.firstChild;
          var Rp = RQ.nextSibling;
          (0, RH.oB)([RQ, Rp], Object.assign({
            overflow: "auto"
          }, RC, Rn));
          (0, RH.oB)(Rd, Object.assign({}, RC, Rn));
          this.expandElement = RQ;
          this.expandChild = Rg;
          this.contractElement = Rp;
          this.hiddenElement = Rd;
          this.element = RB;
          this.view = RY;
          this.model = Rm;
          this.width = 0;
          this.resized = false;
          if (RB.firstChild) {
            RB.insertBefore(Rd, RB.firstChild);
          } else {
            RB.appendChild(Rd);
          }
          RB.addEventListener("scroll", RA, true);
          RO.push(this);
          RA();
        }
        destroy() {
          var RB;
          if (this.view) {
            if ((RB = RO.indexOf(this)) !== -1) {
              RO.splice(RB, 1);
            }
            this.element.removeEventListener("scroll", RA, true);
            this.element.removeChild(this.hiddenElement);
            this.view = this.model = null;
          }
        }
      }
    },
    4671: (R8, R9, RR) => {
      'use strict';

      RR.d(R9, {
        Z: () => Rn
      });
      var Rj = RR(6875);
      const Rh = [];
      const RH = [];
      const RO = [];
      const Ro = {};
      let RA;
      let RF = false;
      const RB = (Rd, RQ) => {
        for (let Rp = RQ.length; Rp--;) {
          var Rg = RQ[Rp];
          if (Rd.target === Rg.getContainer()) {
            Rg.setIntersection(Rd);
            break;
          }
        }
      };
      const RY = () => {
        Rh.forEach(Rd => {
          Rd.model.set("activeTab", (0, Rj.Z)());
        });
      };
      const Rm = (Rd, RQ) => {
        Rd = RQ.indexOf(Rd);
        if (Rd !== -1) {
          RQ.splice(Rd, 1);
        }
      };
      const RC = Rd => {
        RO.forEach(RQ => {
          RQ(Rd);
        });
      };
      document.addEventListener("visibilitychange", RY);
      document.addEventListener("webkitvisibilitychange", RY);
      window.addEventListener("beforeunload", () => {
        document.removeEventListener("visibilitychange", RY);
        document.removeEventListener("webkitvisibilitychange", RY);
        window.removeEventListener("scroll", RC);
      });
      const Rn = {
        add(Rd) {
          Rh.push(Rd);
        },
        remove(Rd) {
          Rm(Rd, Rh);
        },
        addScrollHandler(Rd) {
          if (!RF) {
            RF = true;
            window.addEventListener("scroll", RC);
          }
          RO.push(Rd);
        },
        removeScrollHandler(Rd) {
          Rd = RO.indexOf(Rd);
          if (Rd !== -1) {
            RO.splice(Rd, 1);
          }
        },
        addWidget(Rd) {
          RH.push(Rd);
        },
        removeWidget(Rd) {
          Rm(Rd, RH);
        },
        size: () => Rh.length,
        observe(Rd) {
          var RQ;
          RQ = window.IntersectionObserver;
          RA = RA || new RQ(Rg => {
            if (Rg != null && Rg.length) {
              for (let RN = Rg.length; RN--;) {
                var Rp = Rg[RN];
                RB(Rp, Rh);
                RB(Rp, RH);
              }
            }
          }, {
            threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1]
          });
          if (!Ro[Rd.id]) {
            Ro[Rd.id] = true;
            RA.observe(Rd);
          }
        },
        unobserve(Rd) {
          if (RA && Ro[Rd.id]) {
            delete Ro[Rd.id];
            RA.unobserve(Rd);
          }
        }
      };
    },
    2445: (R8, R9, RR) => {
      'use strict';

      RR.d(R9, {
        ZP: () => RN,
        qG: () => Rp
      });
      var Rj = RR(5083);
      var Rh = RR(1569);
      var RH = RR(6042);
      var RO = RR(7034);
      var Ro = RR(6577);
      var RA = RR(6599);
      var RF = RR(386);
      const RB = "__CONTEXTUAL__";
      const RY = (RG, Rc) => {
        RG = RG.querySelector(Rc);
        if (RG) {
          return RG.getAttribute("content");
        }
      };
      var R9 = RR(4737);
      var Rm = RR.n(R9);
      var RC = RR(67);
      var Rn = RR(3487);
      const Rd = RG => typeof RG == "string" && /^\/\/(?:content\.jwplatform|cdn\.jwplayer)\.com\//.test(RG);
      const RQ = RG => "https:" + RG;
      const Rg = (RG, Rc, RV) => {
        if (Rc) {
          delete (RG[Rc.client || (0, Rn.sb)(RV)] = Rc).client;
        }
      };
      const Rp = RG => {
        const Rc = Object.assign({}, RG.plugins);
        const RV = (0, RF.Z)(RG.edition);
        if (RV("ads")) {
          const Re = Object.assign({}, RG.advertising);
          const Rk = Re.client;
          if (Rk) {
            delete (Rc[(0, Rn.sb)(Rk) || Rk] = Re).client;
          }
          if (Re.bids) {
            Rg(Rc, Re.bids, "bidding");
          }
        }
        if (RV("jwpsrv")) {
          let Rx = RG.analytics;
          if (Rx !== Object(Rx)) {
            Rx = {};
          }
          Rg(Rc, Rx, "jwpsrv");
        }
        Rg(Rc, RG.ga, "gapro");
        Rg(Rc, RG.interactive, "interactive");
        return Rc;
      };
      const RN = function (RG, Rc) {
        let RV = (0, Rj.ZP)(RG, Rc);
        var RG = RV.key || Ro.default.key;
        var Rc = new RA.ZP(RG);
        var Re = Rc.edition();
        (RV = Rc.edition() === "free" ? Object.assign({
          skin: {
            active: "#ff0046",
            timeslider: {
              progress: "none"
            }
          },
          logo: {
            position: "control-bar",
            file: Rm()
          }
        }, Rj.ke, (0, RH.ei)(RV, ["analytics", "aspectratio", "base", "file", "height", "playlist", "sources", "timeSlider", "width"])) : RV).key = RG;
        RV.edition = Re;
        RV.error = Rc.error();
        RV.generateSEOMetadata = RV.generateSEOMetadata || false;
        if (Re === "unlimited") {
          const Rk = (0, Rh.getScriptPath)("jwplayer.js");
          if (!Rk) {
            throw new Error("Error setting up player: Could not locate jwplayer.js script tag");
          }
          RR.p = Rk;
        }
        RV.related = (Rx => {
          var RM = (0, RF.Z)(Rx.edition);
          var RI = Rx.related;
          var RM = !RM("discovery") || RI !== Object(RI);
          var RX = !RI || RI.displayMode !== "none";
          var Ri = RI || {};
          let Rf = Ri.oncomplete === undefined ? "none" : Ri.oncomplete;
          let RZ = Ri.autoplaytimer;
          if (Rf === false || Rx.repeat) {
            Rf = "hide";
          } else if (Rf === "none") {
            RZ = 0;
          }
          Ri = Rf === "autoplay" && RZ <= 0 || Rf === "none";
          return Object.assign({}, RI, {
            disableRelated: RM,
            showButton: RX,
            oncomplete: Rf,
            autoplaytimer: RZ,
            shouldAutoAdvance: Ri
          });
        })(RV);
        RV.ab &&= (Rx => {
          let RM = Rx.ab;
          if (RM.clone) {
            RM = RM.clone();
          }
          Object.keys(RM.tests).forEach(RI => {
            RM.tests[RI].forEach(RX => {
              if (RX.addConfig) {
                RX.addConfig(Rx, RX.selection);
              }
            });
          });
          return RM;
        })(RV);
        RV.plugins = Rp(RV);
        RG = RV.playlist;
        if ((0, RH.HD)(RG) && RG.indexOf(RB) > -1) {
          RV.playlist = ((Rx, RM) => {
            var RI = Rx == null || Rx.querySelector == null || (RI = Rx.querySelector("title")) == null ? undefined : RI.textContent;
            var RX = RY(Rx, "meta[property=\"og:title\"]");
            let Ri = encodeURIComponent(RX || RI || "");
            RX = RY(Rx, "meta[property=\"og:description\"]") || RY(Rx, "meta[name=\"description\"]");
            if (RX) {
              Ri += "&page_description=" + encodeURIComponent(RX);
            }
            return RM.replace(RB, Ri);
          })(document, RV.playlist);
          RV.contextual = true;
        }
        if ((0, RO.isFileProtocol)()) {
          const {
            playlist: Rx,
            related: RM
          } = RV;
          if (Rd(Rx)) {
            RV.playlist = RQ(Rx);
          }
          if (RM && Rd(RM.file)) {
            RM.file = RQ(RM.file);
          }
        }
        if (RV.__abSendDomainToFeeds && (Rc = RV.playlist, /\.jwplatform.com|\.jwplayer.com/.test(Rc))) {
          RV.playlist = (Re = RV.playlist) + ((Re.indexOf("?") !== -1 ? "&" : "?") + "page_domain=" + encodeURIComponent((0, RC.X)()));
        }
        return RV;
      };
    },
    6577: (R8, R9, RR) => {
      'use strict';

      RR.d(R9, {
        default: () => RU
      });
      var R9 = RR(1096);
      var R9 = RR.n(R9);
      window.Promise ||= R9();
      var R9 = RR(1569);
      var Rj = RR(6391);
      var Rh = RR(2963);
      var RH = RR(670);
      var Rh = {
        availableProviders: Rh.B,
        registerProvider: RH.Z
      };
      var RO = RR(1241);
      Rh.registerPlugin = function (RW, RL, Rz) {
        if (RW !== "jwpsrv") {
          (0, RO.fo)(RW, RL, Rz);
        }
      };
      const Ro = Rh;
      var RA = RR(8675);
      var RF = RR(6601);
      var RB = RR(4742);
      var RY = RR(8348);
      var Rm = RR(623);
      var RC = RR(1643);
      var Rn = RR(7411);
      var Rd = RR(328);
      var RQ = RR(3487);
      const Rg = [["vastxml", "adtag", "schedules"]];
      const Rp = {
        googima: Rg,
        vast: Rg
      };
      const RN = (RW, RL) => {
        var Rz = RW.getPlugin(RL);
        var Rr = Object.keys(Rp);
        if (Rr.indexOf(RL) === -1) {
          throw new Error("destroyDynamicPlugin must be called with plugins with one of the following plugins: " + Rr.toString());
        }
        if (Rz) {
          if (Rz.resize) {
            RW.off("resize", Rz.resizeHandler);
          }
          delete RW.plugins[RL];
          if (Rz.destroy) {
            try {
              Rz.destroy();
            } catch (Rl) {}
          }
          Rr = Rz.div;
          if (Rr != null && Rr.parentElement) {
            Rr.parentElement.removeChild(Rr);
          }
          RW.trigger("pluginDestroyed", {
            type: "pluginDestroyed",
            name: RL
          });
        }
      };
      const RG = (RW, RL, Rz, Rr) => {
        var Rl = (0, RQ.Nq)(RL);
        var Rs = Object.keys(Rp);
        var Rr = (Rr = Rr)[j0 = RL] || Rr[(0, RQ.sb)(j0)] || Rr[(0, RQ.Nq)(j0)] || {};
        if (Rs.indexOf(Rl) === -1) {
          throw new Error("setupDynamicPlugin must be called with plugins with one of the following plugins: " + Rs.toString());
        }
        RN(RW, Rl);
        var j0 = ((j1, j2, j3) => {
          const j4 = Object.assign({}, j1);
          const j5 = Object.assign({}, j2);
          const j6 = Object.keys(j5).filter(j7 => j7 === null);
          j6.forEach(j7 => delete j4[j7]);
          j6.forEach(j7 => delete j5[j7]);
          j3.forEach(j7 => {
            if (j7.some(j8 => j5[j8])) {
              j7.forEach(j8 => delete j4[j8]);
            }
          });
          return Object.assign({}, j4, j5);
        })(Rr, Rz, Rp[Rl]);
        return (0, RA.Ve)(RL, j0, RW);
      };
      var Rc = RR(4429);
      var RV = RR(6042);
      let Re = 0;
      function Rk(RW, RL) {
        (RL = new Rm.ZP(RL)).on(RC.Rc, Rz => {
          RW._qoe.tick("ready");
          Rz.setupTime = RW._qoe.between("setup", "ready");
        });
        RL.on("all", (Rz, Rr) => {
          RW.trigger(Rz, Rr);
        });
        return RL;
      }
      function Rx(RW, RL) {
        const Rz = RW.plugins;
        const Rr = Object.keys(Rz).map(Rl => {
          var Rs = Rz[Rl];
          delete Rz[Rl];
          return Rs;
        });
        if (RL.get("setupConfig")) {
          RW.trigger("remove");
        }
        RW.off();
        RL.playerDestroy();
        Rr.forEach(Rl => {
          if (Rl.reset) {
            try {
              Rl.reset();
            } catch (Rs) {}
          } else if (Rl.destroy) {
            try {
              Rl.destroy();
            } catch (j0) {}
          }
        });
        RL.getContainer().removeAttribute("data-jwplayer-id");
      }
      function RM(RW) {
        const RL = ++Re;
        const Rz = RW.id || "player-" + RL;
        const Rr = new Rn.Z();
        const Rl = {};
        let Rs = Rk(this, RW);
        Rr.tick("init");
        RW.setAttribute("data-jwplayer-id", Rz);
        Object.defineProperties(this, {
          id: {
            enumerable: true,
            get: () => Rz
          },
          uniqueId: {
            enumerable: true,
            get: () => RL
          },
          plugins: {
            enumerable: true,
            get: () => Rl
          },
          _qoe: {
            enumerable: true,
            get: () => Rr
          },
          version: {
            enumerable: true,
            get: () => RF.i
          },
          Events: {
            enumerable: true,
            get: () => Rd.ZP
          },
          utils: {
            enumerable: true,
            get: () => Rc.Z
          },
          _: {
            enumerable: true,
            get: () => RV.ZP
          }
        });
        Object.assign(this, {
          _events: {},
          setup(j0) {
            Rr.clear("ready");
            Rr.tick("setup");
            if (Rs) {
              Rx(this, Rs);
            }
            (Rs = Rk(this, RW)).init(j0, this);
            return this.on(j0.events, null, this);
          },
          remove() {
            if (this.getPip()) {
              this.setPip(false);
            }
            var j0 = this;
            for (let j1 = Rj.Z.length; j1--;) {
              if (Rj.Z[j1].uniqueId === j0.uniqueId) {
                Rj.Z.splice(j1, 1);
                break;
              }
            }
            if (Rs) {
              Rx(this, Rs);
            }
            Object.keys(Rl).forEach(j2 => {
              delete Rl[j2];
            });
            return this;
          },
          qoe() {
            var j0 = Rs.getItemQoe();
            return {
              setupTime: this._qoe.between("setup", "ready"),
              firstFrame: j0.getFirstFrame ? j0.getFirstFrame() : null,
              player: this._qoe.dump(),
              item: j0.dump()
            };
          },
          addCues(j0) {
            if (Array.isArray(j0)) {
              Rs.addCues(j0);
            }
            return this;
          },
          getAudioTracks: () => Rs.getAudioTracks(),
          getBuffer: () => Rs.get("buffer"),
          getCaptions: () => Rs.get("captions"),
          getCaptionsList: () => Rs.getCaptionsList(),
          getConfig: () => Rs.getConfig(),
          getContainer: () => Rs.getContainer(),
          getControls: () => Rs.get("controls"),
          getCues: () => Rs.getCues(),
          getCurrentAudioTrack: () => Rs.getCurrentAudioTrack(),
          getCurrentCaptions: () => Rs.getCurrentCaptions(),
          getCurrentQuality: () => Rs.getCurrentQuality(),
          getCurrentTime: () => Rs.get("currentTime"),
          getAbsolutePosition: () => Rs.getAbsolutePosition(),
          getDuration: () => Rs.get("duration"),
          getEnvironment: () => RY,
          getFullscreen: () => Rs.get("fullscreen"),
          getHeight: () => Rs.getHeight(),
          getItemMeta: () => Rs.get("itemMeta") || {},
          getMute: () => Rs.getMute(),
          getContainerPercentViewable: () => Rs.get("intersectionRatio"),
          getPercentViewable: () => Rs.get("visibility"),
          getPip: () => Rs.get("pip"),
          getPlaybackRate: () => Rs.get("playbackRate"),
          getPlaylist: () => Rs.get("playlist"),
          getPlaylistIndex: () => Rs.get("item"),
          getPlaylistItem(j0) {
            var j1;
            if (Rc.Z.exists(j0)) {
              if (j1 = this.getPlaylist()) {
                return j1[j0];
              } else {
                return null;
              }
            } else {
              return Rs.get("playlistItem");
            }
          },
          getPosition: () => Rs.get("position"),
          getProvider: () => Rs.getProvider(),
          getQualityLevels: () => Rs.getQualityLevels(),
          getSafeRegion: (j0 = true) => Rs.getSafeRegion(j0),
          getState: () => Rs.getState(),
          getStretching: () => Rs.get("stretching"),
          getContainerViewable: () => Rs.get("containerViewable"),
          getViewable: () => Rs.get("viewable"),
          getVisualQuality: () => Rs.getVisualQuality(),
          getVolume: () => Rs.get("volume"),
          getWidth: () => Rs.getWidth(),
          isReady: () => Rs.isReady(),
          setCaptions(j0) {
            Rs.setCaptions(j0);
            return this;
          },
          setConfig(j0) {
            Rs.setConfig(j0);
            return this;
          },
          setControls(j0) {
            Rs.setControls(j0);
            return this;
          },
          setCurrentAudioTrack(j0) {
            Rs.setCurrentAudioTrack(j0);
          },
          setCurrentCaptions(j0) {
            Rs.setCurrentCaptions(j0);
          },
          setCurrentQuality(j0) {
            Rs.setCurrentQuality(j0);
          },
          setFullscreen(j0) {
            Rs.setFullscreen(j0);
            return this;
          },
          setAllowFullscreen(j0) {
            Rs.setAllowFullscreen(j0);
            return this;
          },
          setMute(j0) {
            Rs.setMute(j0);
            return this;
          },
          setPip(j0) {
            Rs.setPip(j0);
            return this;
          },
          setPlaybackRate(j0) {
            Rs.setPlaybackRate(j0);
            return this;
          },
          setPlaylistItem(j0, j1) {
            Rs.setPlaylistItem(j0, j1);
            return this;
          },
          setCues(j0) {
            if (Array.isArray(j0)) {
              Rs.setCues(j0);
            }
            return this;
          },
          setVolume(j0) {
            Rs.setVolume(j0);
            return this;
          },
          load(j0, j1) {
            Rs.load(j0, j1);
            return this;
          },
          play(j0) {
            Rs.play(j0);
            return this;
          },
          pause(j0) {
            Rs.pause(j0);
            return this;
          },
          playToggle(j0) {
            switch (this.getState()) {
              case RC.r0:
              case RC.Kb:
                return this.pause(j0);
              default:
                return this.play(j0);
            }
          },
          seek(j0, j1) {
            Rs.seek(j0, j1);
            return this;
          },
          playlistItem(j0, j1) {
            Rs.playlistItem(j0, j1);
            return this;
          },
          playlistNext(j0) {
            Rs.playlistNext(j0);
            return this;
          },
          playlistPrev(j0) {
            Rs.playlistPrev(j0);
            return this;
          },
          next(j0) {
            Rs.next(j0);
            return this;
          },
          requestPip(j0) {
            Rs.requestPip(j0);
            return this;
          },
          castToggle() {
            Rs.castToggle();
            return this;
          },
          stopCasting() {
            Rs.stopCasting();
            return this;
          },
          requestCast(j0) {
            Rs.requestCast(j0);
            return this;
          },
          createInstream: () => Rs.createInstream(),
          stop() {
            Rs.stop();
            return this;
          },
          resize(j0, j1) {
            Rs.resize(j0, j1);
            return this;
          },
          addButton(j0, j1, j2, j3, j4) {
            Rs.addButton(j0, j1, j2, j3, j4);
            return this;
          },
          removeButton(j0) {
            Rs.removeButton(j0);
            return this;
          },
          getMediaElement: () => Rs.getMediaElement(),
          attachMedia() {
            Rs.attachMedia();
            return this;
          },
          detachMedia() {
            Rs.detachMedia();
            return this;
          },
          isBeforeComplete: () => Rs.isBeforeComplete(),
          isBeforePlay: () => Rs.isBeforePlay(),
          setPlaylistItemCallback(j0, j1) {
            Rs.setItemCallback(j0, j1);
          },
          removePlaylistItemCallback() {
            Rs.setItemCallback(null);
          },
          getPlaylistItemPromise: j0 => Rs.getItemPromise(j0),
          getFloating: () => Boolean(Rs.get("isFloating")),
          setFloating(j0) {
            Rs.setConfig({
              floating: {
                mode: j0 ? "always" : "never"
              }
            });
          },
          getChapters: () => Rs.getChapters(),
          getCurrentChapter: () => Rs.getCurrentChapter(),
          setChapter: j0 => Rs.setChapter(j0),
          setupDynamicPlugin(j0, j1) {
            if (j0) {
              return RG(this, j0, j1, Rs.get("plugins"));
            } else {
              return Promise.resolve();
            }
          },
          destroyDynamicPlugin(j0) {
            if (j0) {
              return RN(this, j0);
            }
          }
        });
      }
      Object.assign(RM.prototype, {
        on(RW, RL, Rz) {
          return Rd.on.call(this, RW, RL, Rz);
        },
        once(RW, RL, Rz) {
          return Rd.IH.call(this, RW, RL, Rz);
        },
        off(RW, RL, Rz) {
          return Rd.S1.call(this, RW, RL, Rz);
        },
        trigger(RW, RL) {
          (RL = RV.ZP.isObject(RL) ? Object.assign({}, RL) : {}).type = RW;
          return (RB.Z.debug ? Rd.X$ : Rd.wj).call(this, RW, RL);
        },
        getPlugin(RW) {
          return this.plugins[RW];
        },
        addPlugin(RW, RL) {
          if (typeof (this.plugins[RW] = RL).addToPlayer == "function") {
            if (this.isReady()) {
              RL.addToPlayer.call(this, true);
            } else {
              this.on("ready", function () {
                RL.addToPlayer.call(this, false);
              });
            }
          }
          if (RL.resize) {
            this.on("resize", RL.resizeHandler);
          }
        },
        registerPlugin(RW, RL, Rz) {
          (0, RA.fo)(RW, RL, Rz);
        },
        getAdBlock: () => false,
        playAd(RW) {},
        pauseAd(RW) {},
        skipAd() {}
      });
      RR.p = (0, R9.loadFrom)();
      function RI(RW) {
        let RL;
        let Rz;
        if (RW) {
          if (typeof RW == "string") {
            if (!(RL = RX(RW))) {
              Rz = document.getElementById(RW);
            }
          } else if (typeof RW == "number") {
            RL = Rj.Z[RW];
          } else if (RW.nodeType) {
            Rz = RW;
            RL = RX(Rz.id || Rz.getAttribute("data-jwplayer-id"));
          }
        } else {
          RL = Rj.Z[0];
        }
        if (RL) {
          return RL;
        }
        if (Rz) {
          const Rr = new RM(Rz);
          Rj.Z.push(Rr);
          return Rr;
        }
        return {
          registerPlugin: RA.fo
        };
      }
      const RX = RW => {
        for (let RL = 0; RL < Rj.Z.length; RL++) {
          if (Rj.Z[RL].id === RW) {
            return Rj.Z[RL];
          }
        }
        return null;
      };
      const Ri = RW => {
        Object.defineProperties(RW, {
          api: {
            get: () => Ro,
            set() {}
          },
          version: {
            get: () => RF.i,
            set() {}
          },
          debug: {
            get: () => RB.Z.debug,
            set(RL) {
              RB.Z.debug = Boolean(RL);
            }
          }
        });
      };
      Ri(RI);
      const Rf = RI;
      var RH = RR(5882);
      var Rh = RR(6599);
      var R9 = RR(676);
      var RZ = RR(5592);
      var Rt = RR(6769);
      var Ry = RR(9025);
      var Rb = RV.ZP.extend;
      var RT = {
        _: RV.ZP
      };
      RT.utils = Object.assign(Rc.Z, {
        key: Rh.ZP,
        extend: Rb,
        scriptloader: R9.ZP,
        rssparser: {
          parse: Rt.Z
        },
        tea: RZ.p,
        UI: RH.ZP
      });
      RT.utils.css.style = RT.utils.style;
      RT.vid = Ry.Z;
      var Rh = RT;
      var Rq = RR(7543);
      function Rv(RW) {
        var RL = {};
        Rw(this, RW, RW, RL);
        Rw(this, RW, RM.prototype, RL);
      }
      function RE(RW) {
        if ((RW = Rf(RW)).uniqueId) {
          return RW._publicApi ||= new Rv(RW);
        } else {
          return RW;
        }
      }
      const Ru = /^(?:on(?:ce)?|off|trigger)$/;
      const Ra = RW => {
        console.warn("The API method jwplayer()." + RW + "() is disabled in the free edition of JW Player.");
      };
      const RP = (RW, RL) => {
        if (RL.length) {
          const Rz = RW.getPlugin("jwpsrv");
          if (Rz != null && Rz.trackExternalAPIUsage) {
            RL.forEach(Rr => {
              var Rl = Rz;
              var Rs = Rr[0];
              var Rr = Rr[1];
              try {
                var j0 = (j1 => {
                  switch (Rs) {
                    case "setup":
                      return Boolean(j1);
                    case "getSafeRegion":
                    case "pauseAd":
                    case "setControls":
                    case "setFullscreen":
                    case "setMute":
                      if (Boolean(j1) === j1) {
                        return j1;
                      } else {
                        return undefined;
                      }
                    case "setPlaylistItem":
                    case "getPlaylistItem":
                      if ((j1 | 0) === j1) {
                        return j1;
                      } else {
                        return undefined;
                      }
                    case "setPlaybackRate":
                    case "setVolume":
                      return Number(j1);
                    case "setConfig":
                      return Object.keys(Object(j1)).join(",");
                    case "on":
                    case "once":
                    case "off":
                    case "trigger":
                    case "getPlugin":
                    case "addPlugin":
                    case "registerPlugin":
                      return "" + j1;
                  }
                  return null;
                })(Rr);
                Rl.trackExternalAPIUsage(Rs, j0);
              } catch (j1) {
                if (RB.Z.debug) {
                  console.warn(j1);
                }
              }
            });
            RL.length = 0;
          }
        }
      };
      const RS = (RW, RL, Rz, Rr, Rl) => function (...Rs) {
        const j0 = Rs[0];
        const j1 = RL._trackCallQueue ||= [];
        const j2 = Ru.test(Rz);
        const j3 = j2 && Rs[1] && Rs[1]._callback;
        const j4 = Rl.edition || (j5 = Rl, j8 = RL.getConfig().edition, j5.edition = j8);
        if (j4 === "free") {
          if (["addButton", "addCues", "detachMedia", "load", "next", "pause", "play", "playlistItem", "playlistNext", "playlistPrev", "playToggle", "resize", "seek", "setCaptions", "setConfig", "setControls", "setCues", "setFullscreen", "setMute", "setPlaybackRate", "setPlaylistItem", "setVolume", "stop"].indexOf(Rz) > -1) {
            Ra(Rz);
            return RW;
          }
          if (["createInstream", "setCurrentAudioTrack", "setCurrentCaptions", "setCurrentQuality"].indexOf(Rz) > -1) {
            Ra(Rz);
            return null;
          }
        }
        if (!j3) {
          j1.push([Rz, j0]);
        }
        if (j2) {
          RP(RL, j1);
          return RL[Rz].apply(RW, Rs);
        }
        var j5 = Rz;
        var j6 = Rs;
        var j7 = {
          reason: j5 !== "play" && j5 !== "seek" && j5 !== "pause" && (0, Rq.C)() ? "interaction" : "external"
        };
        switch (j5) {
          case "play":
          case "pause":
          case "playToggle":
          case "playlistNext":
          case "playlistPrev":
          case "next":
            j6[0] = j7;
            break;
          case "seek":
          case "playlistItem":
            j6[1] = j7;
        }
        var j8 = RL[Rz](...Rs);
        if (Rz === "remove") {
          RL.off.call(RW);
        } else if (Rz === "setup") {
          RL.off.call(RW);
          RL.off(j0.events, null, RL);
          RL.on.call(RW, j0.events, null, RW);
          RL.on("all", (j9, jR) => {
            if (j9 === "ready") {
              const jj = Object.keys(RL).filter(jH => jH[0] !== "_" && Rr.indexOf(jH) === -1 && typeof RL[jH] == "function");
              const jh = Rr.concat(jj);
              jj.forEach(jH => {
                RW[jH] = RS(RW, RL, jH, jh, Rl);
              });
            }
            RL.trigger.call(RW, j9, jR);
            RP(RL, j1);
          });
        }
        RP(RL, j1);
        if (j8 === RL) {
          return RW;
        } else {
          return j8;
        }
      };
      const RJ = ["getMediaElement"];
      const Rw = (RW, RL, Rz, Rr) => {
        const Rl = Object.keys(Rz);
        Rl.forEach(Rs => {
          var j0 = Rz[Rs];
          if (RJ.indexOf(Rs) === -1) {
            if (typeof j0 == "function" && Rs !== "Events") {
              RW[Rs] = RS(RW, RL, Rs, Rl, Rr);
            } else if (Rs === "_events") {
              RW._events = {};
            } else {
              Object.defineProperty(RW, Rs, {
                enumerable: true,
                get: () => Rz[Rs]
              });
            }
          }
        });
      };
      const RK = window;
      Object.assign(Rf, Rh);
      Object.assign(RE, Rh);
      Ri(RE);
      if (typeof RK.define == "function" && RK.define.amd) {
        RK.define([], function () {
          return RE;
        });
      }
      let RD = RE;
      const RU = RD = RK.jwplayer ? RK.jwplayer : RD;
    },
    8675: (R8, R9, RR) => {
      'use strict';

      RR.d(R9, {
        Ve: () => Rj.Ve,
        ZP: () => Rh,
        fo: () => Rj.fo
      });
      RR(3487);
      var Rj = RR(1241);
      const Rh = Rj.ZP;
    },
    3487: (R8, R9, RR) => {
      'use strict';

      RR.d(R9, {
        MK: () => Rj.MK,
        Nq: () => Rj.Nq,
        bX: () => Rh,
        sb: () => RH
      });
      RR(1569);
      var Rj = RR(7164);
      const Rh = function (RO) {
        let Ro = (0, Rj.bX)(RO);
        if (RO) {
          switch ((0, Rj.Nq)(RO)) {
            case "jwpsrv":
              Ro = 305001;
              break;
            case "googima":
              Ro = 305002;
              break;
            case "vast":
              Ro = 305003;
              break;
            case "freewheel":
              Ro = 305004;
              break;
            case "dai":
              Ro = 305005;
              break;
            case "gapro":
              Ro = 305006;
              break;
            case "bidding":
              Ro = 305007;
          }
        }
        return Ro;
      };
      const RH = RO => {
        let Ro = "";
        if (window.location.protocol !== "https:" && window.location.protocol !== "http:") {
          Ro = "https:";
        }
        RO = {
          bidding: "//ssl.p.jwpcdn.com/player/v/8.32.1/bidding.js",
          jwpsrv: "//ssl.p.jwpcdn.com/player/v/8.32.1/jwpsrv.js",
          dai: "//ssl.p.jwpcdn.com/player/v/8.32.1/dai.js",
          vast: "//ssl.p.jwpcdn.com/player/v/8.32.1/vast.js",
          googima: "//ssl.p.jwpcdn.com/player/v/8.32.1/googima.js",
          freewheel: "//ssl.p.jwpcdn.com/player/v/8.32.1/freewheel.js",
          gapro: "//ssl.p.jwpcdn.com/player/v/8.32.1/gapro.js",
          interactive: "//ssl.p.jwpcdn.com/player/v/8.32.1/interactive.js"
        }[RO];
        if (RO) {
          return Ro + RO;
        } else {
          return "";
        }
      };
    },
    1918: (R8, R9, RR) => {
      'use strict';

      RR.d(R9, {
        Gb: () => RB,
        d3: () => RY,
        lD: () => RF,
        w0: () => RA
      });
      var Rj = RR(386);
      const Rh = [{
        configName: "clearkey",
        keyName: "org.w3.clearkey"
      }, {
        configName: "widevine",
        keyName: "com.widevine.alpha"
      }, {
        configName: "playready",
        keyName: "com.microsoft.playready"
      }];
      const RH = [];
      const RO = {};
      let Ro;
      const RA = Rm => Rm.some(RC => Boolean(RC.drm) || RC.sources.some(Rn => Boolean(Rn.drm)));
      const RF = Rm => Ro || ((Boolean(navigator.requestMediaKeySystemAccess) && Boolean(window.MediaKeySystemAccess.prototype.getConfiguration) || Boolean(window.MSMediaKeys)) && (0, Rj.Z)(Rm)("drm") ? (Rh.forEach(RC => {
        Rn = RC.keyName;
        var Rn;
        var Rd = (navigator.requestMediaKeySystemAccess ? navigator.requestMediaKeySystemAccess(Rn, [{
          initDataTypes: ["cenc"],
          videoCapabilities: [{
            contentType: "video/mp4;codecs=\"avc1.4d401e\""
          }],
          audioCapabilities: [{
            contentType: "audio/mp4;codecs=\"mp4a.40.2\""
          }]
        }]) : new Promise((RQ, Rg) => {
          let Rp;
          try {
            Rp = new window.MSMediaKeys(Rn);
          } catch (RN) {
            Rg(RN);
            return;
          }
          RQ(Rp);
        })).then(function () {
          RO[RC.configName] = true;
        }).catch(function () {
          RO[RC.configName] = false;
        });
        RH.push(Rd);
      }), Ro = Promise.all(RH)) : Promise.resolve());
      const RB = Rm => RO[Rm];
      const RY = Rm => {
        if (Ro) {
          return Object.keys(Rm).some(RC => RB(RC));
        }
      };
    },
    2963: (R8, R9, RR) => {
      'use strict';

      RR.d(R9, {
        B: () => Rm
      });
      var R9 = RR(6593);
      var Rj = RR(8348);
      var Rh = RR(386);
      var RH = RR(1918);
      var RO = RR(9025);
      const Ro = RC => {
        if (RC == null || !RC.length || !Array.isArray(RC)) {
          RC = ["video/mp4;codecs=\"avc1.4d400d,mp4a.40.2\""];
        }
        const Rn = window.MediaSource;
        return !!Rn && !!Rn.isTypeSupported && RC.every(Rd => Rn.isTypeSupported(Rd));
      };
      const RA = RC => /hls|m3u8/.test(((RC == null ? undefined : RC.type) || "").toLowerCase()) || ((RC == null ? undefined : RC.file) || "").toLowerCase().indexOf(".m3u8") > -1;
      const RF = RC => /mpd|dash/.test(((RC == null ? undefined : RC.type) || "").toLowerCase()) || ((RC == null ? undefined : RC.file) || "").toLowerCase().indexOf("mpd-time-csf") > -1;
      const RB = R9.B.find(RC => RC.name === "html5");
      const RY = RB.supports;
      RB.supports = function (...RC) {
        var [Rn, Rd] = RC;
        var RC = RY.apply(this, RC);
        if (RF(Rn)) {
          return false;
        }
        if (RC && Rn.drm && RA(Rn)) {
          const RQ = (0, Rh.Z)(Rd)("drm");
          if (RQ && Rn.drm.fairplay) {
            const Rg = window.WebKitMediaKeys;
            if (Rg == null || Rg.isTypeSupported == null) {
              return undefined;
            } else {
              return Rg.isTypeSupported("com.apple.fps.1_0", "video/mp4");
            }
          }
          return RQ;
        }
        return RC;
      };
      R9.B.push({
        name: "shaka",
        supports: RC => (!RC.drm || !!(0, RH.d3)(RC.drm)) && Ro(RC.mediaTypes) && (RF(RC) || RA(RC))
      });
      R9.B.unshift({
        name: "hlsjs",
        supports: RC => {
          var Rn;
          var Rd;
          return !RC.drm && !!RA(RC) && !(Rn = Boolean(RO.Z == null || RO.Z.canPlayType == null ? undefined : RO.Z.canPlayType("application/vnd.apple.mpegURL")), Rd = typeof (RC == null ? undefined : RC.safarihlsjs) == "boolean" && RC.safarihlsjs, typeof (RC == null ? undefined : RC.hlsjsdefault) == "boolean" && RC.hlsjsdefault, typeof (RC == null ? undefined : RC.androidhls) == "boolean" && RC.androidhls, Rn && Rj.Browser.safari && !Rd) && (!Rn || !Rj.OS.android || RC.androidhls === false || RC.hlsjsdefault !== false) && Ro(RC.mediaTypes);
        }
      });
      const Rm = R9.B;
    },
    2303: (R8, R9, RR) => {
      'use strict';

      RR.d(R9, {
        Z: () => RF
      });
      var Rj = RR(2963);
      var Rh = RR(12);
      var RH = RR(670);
      var RO = RR(2894);
      var R9 = {
        html5: () => RR.e(250).then(function (RB) {
          var RY = RR(9181).default;
          (0, RH.Z)(RY);
          return RY;
        }.bind(null, RR)).catch((0, RO.Ep)(152))
      };
      Object.assign(R9, {
        shaka: () => RR.e(371).then(function (RB) {
          var RY = RR(2287).default;
          (0, RH.Z)(RY);
          return RY;
        }.bind(null, RR)).catch((0, RO.Ep)(154)),
        hlsjs: () => RR.e(98).then(function (RB) {
          var RY = RR(9054).default;
          (0, RH.Z)(RY);
          return RY;
        }.bind(null, RR)).catch((0, RO.Ep)(153))
      });
      function Ro(RB) {
        this.config = RB || {};
      }
      const RA = R9;
      Object.assign(Ro.prototype, {
        load(RB) {
          const RY = RA[RB];
          const Rm = () => Promise.reject(new Error("Failed to load media"));
          if (RY) {
            return RY().then(() => {
              return Rh.U[RB] || Rm();
            });
          } else {
            return Rm();
          }
        },
        providerSupports: (RB, RY) => RB.supports(RY),
        choose(RB) {
          if (RB === Object(RB)) {
            var RY = Rj.B.length;
            for (let RC = 0; RC < RY; RC++) {
              var Rm = Rj.B[RC];
              if (this.providerSupports(Rm, RB)) {
                return {
                  priority: RY - RC - 1,
                  name: Rm.name,
                  type: RB.type,
                  providerToCheck: Rm,
                  provider: Rh.U[Rm.name]
                };
              }
            }
          }
          return {};
        }
      });
      R9 = Ro;
      R9.prototype.providerSupports = function (RB, RY) {
        return RB.supports(RY, this.config.edition);
      };
      const RF = R9;
    },
    5140: (R8, R9, RR) => {
      'use strict';

      RR.d(R9, {
        t: () => Rj
      });
      const Rj = window.atob;
      window.btoa;
    },
    386: (R8, R9, RR) => {
      'use strict';

      RR.d(R9, {
        Z: () => function (Rn) {
          const Rd = {
            setup: [Rj, Rh, RH, RO, Ro, RA, RB, RY, Rm, RF],
            drm: [Ro, RA, RB, RY, Rm],
            ads: [RB, RY, Rm, RF, Ro, RA, RH],
            jwpsrv: [Rj, Rh, RH, RO, Ro, RA, RB, Rm, RF, RC],
            discovery: [RB, Ro, RA, Rm, RY]
          };
          return function (RQ) {
            return Rd[RQ] && Rd[RQ].indexOf(Rn) > -1;
          };
        }
      });
      const Rj = "free";
      const Rh = "starter";
      const RH = "business";
      const RO = "premium";
      const Ro = "enterprise";
      const RA = "developer";
      const RF = "platinum";
      const RB = "ads";
      const RY = "unlimited";
      const Rm = "trial";
      const RC = "invalid";
    },
    7010: (R8, R9, RR) => {
      'use strict';

      RR.d(R9, {
        Z: () => function () {
          return Rh(window, document.location.search);
        }
      });
      var Rj = RR(5950);
      const Rh = function (RH, RO) {
        return RH.location !== RH.parent.location && (0, Rj.ke)(RO, "isAMP");
      };
    },
    560: (R8, R9, RR) => {
      'use strict';

      RR.d(R9, {
        Z: () => Rh
      });
      const Rj = () => Rj._iframe;
      Rj.mock = RH => {
        Rj._iframe = RH;
      };
      Rj.unmock = () => {
        Rj._iframe = Rj._original;
      };
      Rj._iframe = window.top !== window.self;
      Rj._original = Rj._iframe;
      const Rh = Rj;
    },
    6599: (R8, R9, RR) => {
      'use strict';

      RR.d(R9, {
        ZP: () => RF,
        u5: () => Ro
      });
      var Rj = RR(5592);
      var Rh = RR(386);
      var RH = RR(5140);
      var RO = RR(4446);
      const Ro = 100013;
      const RA = "invalid";
      const RF = class {
        constructor(RB) {
          this.keyData = (RY => {
            let Rm;
            let RC;
            let Rn;
            try {
              var Rd = (0, Rj.p)(RY || "", (0, RH.t)("NDh2aU1Cb0NHRG5hcDFRZQ==")).split("/");
              if ((Rm = Rd[0]) === "pro") {
                Rm = "premium";
              }
              if (!(0, Rh.Z)(Rm)("setup")) {
                Rm = RA;
              }
              if (Rd.length > 2) {
                RC = Rd[1];
                const RQ = parseInt(Rd[2], 10);
                if (RQ > 0) {
                  (Rn = new Date()).setTime(RQ);
                }
              }
            } catch (Rg) {
              Rm = RA;
            }
            return {
              edition: Rm,
              token: RC,
              expiration: Rn
            };
          })(RB);
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
            let RY;
            if (RB === undefined) {
              RY = 100011;
            } else if (this.keyData.edition !== RA && this.keyData.token) {
              if (this.duration() < 0) {
                RY = Ro;
              }
            } else {
              RY = 100012;
            }
            if (RY) {
              return new RO.rG(RO.pJ, RY);
            } else {
              return null;
            }
          };
        }
      };
    },
    67: (R8, R9, RR) => {
      'use strict';

      RR.d(R9, {
        X: () => Rh
      });
      var Rj = RR(560);
      const Rh = () => {
        let RH = window.location.host;
        if ((0, Rj.Z)()) {
          RH = (document.referrer ? (RO = document.referrer, (Ro = document.createElement("a")).href = RO, Ro) : {}).host;
          try {
            RH = RH || window.top.location.host;
          } catch (RA) {}
        }
        var RO;
        var Ro;
        return RH;
      };
    },
    5592: (R8, R9, RR) => {
      'use strict';

      RR.d(R9, {
        p: () => RH
      });
      var Rj = RR(5140);
      const Rh = RO => {
        var Ro = new Array(Math.ceil(RO.length / 4));
        for (let RA = 0; RA < Ro.length; RA++) {
          Ro[RA] = RO.charCodeAt(RA * 4) + (RO.charCodeAt(RA * 4 + 1) << 8) + (RO.charCodeAt(RA * 4 + 2) << 16) + (RO.charCodeAt(RA * 4 + 3) << 24);
        }
        return Ro;
      };
      const RH = function (RO, Ro) {
        RO = String(RO);
        Ro = String(Ro);
        if (RO.length === 0) {
          return "";
        }
        var RA = Rh((0, Rj.t)(RO));
        var RF = Rh(unescape(encodeURIComponent(Ro)).slice(0, 16));
        var RB = RA.length;
        let RY;
        let Rm;
        let RC = void RA[RB - 1];
        let Rn = RA[0];
        let Rd = Math.floor(6 + 52 / RB) * 2654435769;
        while (Rd) {
          Rm = Rd >>> 2 & 3;
          for (let RQ = RB - 1; RQ >= 0; RQ--) {
            RY = ((RC = RA[RQ > 0 ? RQ - 1 : RB - 1]) >>> 5 ^ Rn << 2) + (Rn >>> 3 ^ RC << 4) ^ (Rd ^ Rn) + (RF[RQ & 3 ^ Rm] ^ RC);
            Rn = RA[RQ] -= RY;
          }
          Rd -= 2654435769;
        }
        RO = (Rg => {
          var Rp = new Array(Rg.length);
          for (let RN = 0; RN < Rg.length; RN++) {
            Rp[RN] = String.fromCharCode(Rg[RN] & 255, Rg[RN] >>> 8 & 255, Rg[RN] >>> 16 & 255, Rg[RN] >>> 24 & 255);
          }
          return Rp.join("");
        })(RA).replace(/\0+$/, "");
        try {
          return decodeURIComponent(escape(RO));
        } catch (Rg) {
          return RO;
        }
      };
    },
    1096: function (R8) {
      R8.exports = function () {
        'use strict';

        function R9() {}
        function RR(RF) {
          if (!(this instanceof RR)) {
            throw new TypeError("Promises must be constructed via new");
          }
          if (typeof RF != "function") {
            throw new TypeError("not a function");
          }
          this._state = 0;
          this._handled = false;
          this._value = undefined;
          this._deferreds = [];
          Ro(RF, this);
        }
        function Rj(RF, RB) {
          while (RF._state === 3) {
            RF = RF._value;
          }
          if (RF._state !== 0) {
            RF._handled = true;
            RR._immediateFn(function () {
              var RY;
              var Rm = RF._state === 1 ? RB.onFulfilled : RB.onRejected;
              if (Rm !== null) {
                try {
                  RY = Rm(RF._value);
                } catch (RC) {
                  RH(RB.promise, RC);
                  return;
                }
                Rh(RB.promise, RY);
              } else {
                (RF._state === 1 ? Rh : RH)(RB.promise, RF._value);
              }
            });
          } else {
            RF._deferreds.push(RB);
          }
        }
        function Rh(RF, RB) {
          try {
            if (RB === RF) {
              throw new TypeError("A promise cannot be resolved with itself.");
            }
            if (RB && (typeof RB == "object" || typeof RB == "function")) {
              var RY = RB.then;
              if (RB instanceof RR) {
                RF._state = 3;
                RF._value = RB;
                return RO(RF);
              }
              if (typeof RY == "function") {
                return Ro((Rm = RY, RC = RB, function () {
                  Rm.apply(RC, arguments);
                }), RF);
              }
            }
            RF._state = 1;
            RF._value = RB;
            RO(RF);
          } catch (Rn) {
            RH(RF, Rn);
          }
          var Rm;
          var RC;
        }
        function RH(RF, RB) {
          RF._state = 2;
          RF._value = RB;
          RO(RF);
        }
        function RO(RF) {
          if (RF._state === 2 && RF._deferreds.length === 0) {
            RR._immediateFn(function () {
              if (!RF._handled) {
                RR._unhandledRejectionFn(RF._value);
              }
            });
          }
          for (var RB = 0, RY = RF._deferreds.length; RB < RY; RB++) {
            Rj(RF, RF._deferreds[RB]);
          }
          RF._deferreds = null;
        }
        function Ro(RF, RB) {
          var RY = false;
          try {
            RF(function (Rm) {
              if (!RY) {
                RY = true;
                Rh(RB, Rm);
              }
            }, function (Rm) {
              if (!RY) {
                RY = true;
                RH(RB, Rm);
              }
            });
          } catch (Rm) {
            if (!RY) {
              RY = true;
              RH(RB, Rm);
            }
          }
        }
        var RA = setTimeout;
        RR.prototype.catch = function (RF) {
          return this.then(null, RF);
        };
        RR.prototype.then = function (RF, RB) {
          var RY = new this.constructor(R9);
          Rj(this, new function (Rm, RC, Rn) {
            this.onFulfilled = typeof RF == "function" ? RF : null;
            this.onRejected = typeof RC == "function" ? RC : null;
            this.promise = Rn;
          }(0, RB, RY));
          return RY;
        };
        RR.prototype.finally = function (RF) {
          var RB = this.constructor;
          return this.then(function (RY) {
            return RB.resolve(RF()).then(function () {
              return RY;
            });
          }, function (RY) {
            return RB.resolve(RF()).then(function () {
              return RB.reject(RY);
            });
          });
        };
        RR.all = function (RF) {
          return new RR(function (RB, RY) {
            if (!RF || RF.length === undefined) {
              throw new TypeError("Promise.all accepts an array");
            }
            var Rm = Array.prototype.slice.call(RF);
            if (Rm.length === 0) {
              return RB([]);
            }
            var RC = Rm.length;
            for (var Rn = 0; Rm.length > Rn; Rn++) {
              (function Rd(RQ, Rg) {
                try {
                  if (Rg && (typeof Rg == "object" || typeof Rg == "function")) {
                    var Rp = Rg.then;
                    if (typeof Rp == "function") {
                      return Rp.call(Rg, function (RN) {
                        Rd(RQ, RN);
                      }, RY);
                    }
                  }
                  Rm[RQ] = Rg;
                  if (--RC == 0) {
                    RB(Rm);
                  }
                } catch (RN) {
                  RY(RN);
                }
              })(Rn, Rm[Rn]);
            }
          });
        };
        RR.resolve = function (RF) {
          if (RF && typeof RF == "object" && RF.constructor === RR) {
            return RF;
          } else {
            return new RR(function (RB) {
              RB(RF);
            });
          }
        };
        RR.reject = function (RF) {
          return new RR(function (RB, RY) {
            RY(RF);
          });
        };
        RR.race = function (RF) {
          return new RR(function (RB, RY) {
            for (var Rm = 0, RC = RF.length; Rm < RC; Rm++) {
              RF[Rm].then(RB, RY);
            }
          });
        };
        RR._immediateFn = typeof setImmediate == "function" ? function (RF) {
          setImmediate(RF);
        } : function (RF) {
          RA(RF, 0);
        };
        RR._unhandledRejectionFn = function (RF) {
          if (console !== undefined && console) {
            console.warn("Possible Unhandled Promise Rejection:", RF);
          }
        };
        return RR;
      }();
    },
    9563: R8 => {
      var R9;
      var RR;
      var Rj = {};
      var Rh = {};
      R9 = function () {
        return document.head || document.getElementsByTagName("head")[0];
      };
      function RH() {
        return RR = RR === undefined ? R9.apply(this, arguments) : RR;
      }
      function RO(RB, RY) {
        var Rm;
        var RC;
        var Rn = Rh[RB];
        var Rd = (Rn = Rn || (Rh[RB] = {
          element: (RB = RB, (RC = document.createElement("style")).type = "text/css", RC.setAttribute("data-jwplayer-id", RB), RB = RC, RH().appendChild(RB), RC),
          counter: 0
        })).counter++;
        var RQ = Rn.element;
        function Rg() {
          RF(RQ, Rd, "");
        }
        (Rm = function (Rp) {
          RF(RQ, Rd, Rp);
        })(RY.css);
        return function (Rp) {
          if (Rp) {
            if (Rp.css !== RY.css || Rp.media !== RY.media) {
              Rm((RY = Rp).css);
            }
          } else {
            Rg();
          }
        };
      }
      R8.exports = {
        style: function (RB, RY) {
          var Rm = RY;
          for (var RC = function (RN) {
              var RG = [];
              var Rc = {};
              for (var RV = 0; RV < RN.length; RV++) {
                var Re = RN[RV];
                var Rk = Re[0];
                var Re = {
                  css: Re[1],
                  media: Re[2]
                };
                if (Rc[Rk]) {
                  Rc[Rk].parts.push(Re);
                } else {
                  RG.push(Rc[Rk] = {
                    id: Rk,
                    parts: [Re]
                  });
                }
              }
              return RG;
            }(RB), Rn = 0; Rn < RC.length; Rn++) {
            var Rd = RC[Rn];
            var RQ = (Rj[Rm] || {})[Rd.id];
            if (RQ) {
              for (var Rg = 0; Rg < RQ.parts.length; Rg++) {
                RQ.parts[Rg](Rd.parts[Rg]);
              }
              for (; Rg < Rd.parts.length; Rg++) {
                RQ.parts.push(RO(Rm, Rd.parts[Rg]));
              }
            } else {
              var Rp = [];
              for (var Rg = 0; Rg < Rd.parts.length; Rg++) {
                Rp.push(RO(Rm, Rd.parts[Rg]));
              }
              Rj[Rm] = Rj[Rm] || {};
              Rj[Rm][Rd.id] = {
                id: Rd.id,
                parts: Rp
              };
            }
          }
        },
        clear: function (RB, RY) {
          var Rm = Rj[RB];
          if (Rm) {
            if (RY) {
              var RC = Rm[RY];
              if (RC) {
                for (var Rn = 0; Rn < RC.parts.length; Rn += 1) {
                  RC.parts[Rn]();
                }
              }
            } else {
              for (var Rd = Object.keys(Rm), RQ = 0; RQ < Rd.length; RQ += 1) {
                for (var Rg = Rm[Rd[RQ]], Rp = 0; Rp < Rg.parts.length; Rp += 1) {
                  Rg.parts[Rp]();
                }
              }
              delete Rj[RB];
            }
          }
        }
      };
      Ro = [];
      var Ro;
      function RA(RB, RY) {
        Ro[RB] = RY;
        return Ro.filter(Boolean).join("\n");
      }
      function RF(RB, RY, Rm) {
        if (RB.styleSheet) {
          RB.styleSheet.cssText = RA(RY, Rm);
        } else {
          Rm = document.createTextNode(Rm);
          if (RY = RB.childNodes[RY]) {
            RB.replaceChild(Rm, RY);
          } else {
            RB.appendChild(Rm);
          }
        }
      }
    },
    4737: R8 => {
      R8.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 150 29.3\" class=\"jw-svg-icon jw-svg-icon-watermark\" focusable=\"false\"><path d=\"M37,16.68c0,2.4-.59,3.43-2.4,3.43a5.75,5.75,0,0,1-3.38-1.23v3.58a7.39,7.39,0,0,0,3.67,1c3.67,0,5.73-1.91,5.73-6.32V5.86H37Z\"></path><polygon points=\"58.33 17.61 55.39 6.01 52.55 6.01 49.52 17.61 46.73 6.01 43.06 6.01 47.56 23.29 50.89 23.29 53.92 11.88 56.96 23.29 60.24 23.29 64.74 6.01 61.17 6.01 58.33 17.61\"></polygon><path d=\"M73.84,6H67.47V23.29h2.2v-6.9h4.17c3.47,0,5.77-1.77,5.77-5.19S77.31,6,73.84,6Zm0,8.47H69.72V8h4.12c2.3,0,3.57,1.22,3.62,3.28C77.46,13.21,76.19,14.48,73.84,14.48Z\"></path><path d=\"M99.2,6l-6,15.27H85V6H82.8V23.29H94.7l2-5.19h7.09l2,5.19H108L101.26,6ZM97.39,16.14l2.84-7.39L103,16.14Z\"></path><polygon points=\"113.98 14.18 108.99 6.01 106.59 6.01 112.81 16.14 112.81 23.29 115.01 23.29 115.01 16.14 121.33 6.01 118.98 6.01 113.98 14.18\"></polygon><polygon points=\"123.14 23.29 134.1 23.29 134.1 21.28 125.29 21.28 125.29 15.41 133.32 15.41 133.32 13.45 125.29 13.45 125.29 7.97 134.1 7.97 134.1 6.01 123.14 6.01 123.14 23.29\"></polygon><path d=\"M144.86,15.85c2.74-.39,4.41-2,4.41-4.85,0-3.23-2.26-5-5.73-5h-6.32V23.29h2.22V16h3.08l4.94,7.29H150Zm-5.42-1.71V8h4.06c2.3,0,3.62,1.17,3.62,3.08s-1.32,3.09-3.62,3.09Z\"></path><path d=\"M27.63.09a1,1,0,0,0-1.32.48c-.24.51-6.35,15.3-6.35,15.3-.2.46-.33.41-.33-.07,0,0,0-5.15,0-9.39,0-2.31-1.12-3.61-2.73-3.88A3.12,3.12,0,0,0,14.83,3a4.57,4.57,0,0,0-1.5,1.79c-.48.94-3.47,9.66-3.47,9.66-.16.46-.31.44-.31,0,0,0-.09-3.76-.18-4.64-.13-1.36-.44-3.59-2.2-3.7S4.77,8,4.36,9.24c-.29.84-1.65,5.35-1.65,5.35l-.2.46h0c-.06.24-.17.24-.24,0l-.11-.42Q2,14,1.74,13.31a1.71,1.71,0,0,0-.33-.66.83.83,0,0,0-.88-.22.82.82,0,0,0-.53.69,4.22,4.22,0,0,0,.07.79,29,29,0,0,0,1,4.6,1.31,1.31,0,0,0,1.8.66,3.43,3.43,0,0,0,1.24-1.81c.33-.81,2-5.48,2-5.48.18-.46.31-.44.29,0,0,0-.09,4.57-.09,6.64a13.11,13.11,0,0,0,.28,2.93,2.41,2.41,0,0,0,.82,1.27,2,2,0,0,0,1.41.4,2,2,0,0,0,.7-.24,3.15,3.15,0,0,0,.79-.71,12.52,12.52,0,0,0,1.26-2.11c.81-1.6,2.92-6.58,2.92-6.58.2-.46.33-.41.33.07,0,0-.26,8.36-.26,11.55a6.39,6.39,0,0,0,.44,2.33,2.8,2.8,0,0,0,1.45,1.61A2.57,2.57,0,0,0,18.79,29a3.76,3.76,0,0,0,1.28-1.32,15.12,15.12,0,0,0,1.07-2.31c.64-1.65,1.17-3.33,1.7-5s5-17.65,5.28-19a1.79,1.79,0,0,0,0-.46A1,1,0,0,0,27.63.09Z\"></path></svg>";
    }
  };
  var R5 = {};
  function R6(R8) {
    var R9 = R5[R8];
    if (R9 === undefined) {
      R9 = R5[R8] = {
        id: R8,
        loaded: false,
        exports: {}
      };
      R4[R8].call(R9.exports, R9, R9.exports, R6);
      R9.loaded = true;
    }
    return R9.exports;
  }
  R6.m = R4;
  R6.n = R8 => {
    var R9 = R8 && R8.__esModule ? () => R8.default : () => R8;
    R6.d(R9, {
      a: R9
    });
    return R9;
  };
  R6.d = (R8, R9) => {
    for (var RR in R9) {
      if (R6.o(R9, RR) && !R6.o(R8, RR)) {
        Object.defineProperty(R8, RR, {
          enumerable: true,
          get: R9[RR]
        });
      }
    }
  };
  R6.f = {};
  R6.e = R8 => Promise.all(Object.keys(R6.f).reduce((R9, RR) => {
    R6.f[RR](R8, R9);
    return R9;
  }, []));
  R6.u = R8 => ({
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
  })[R8] + ".js";
  R6.o = (R8, R9) => Object.prototype.hasOwnProperty.call(R8, R9);
  R0 = {};
  R1 = "jwplayer:";
  R6.l = (R8, R9, RR, Rj) => {
    if (R0[R8]) {
      R0[R8].push(R9);
    } else {
      var Rh;
      var RH;
      if (RR !== undefined) {
        for (var RO = document.getElementsByTagName("script"), Ro = 0; Ro < RO.length; Ro++) {
          var RA = RO[Ro];
          if (RA.getAttribute("src") == R8 || RA.getAttribute("data-webpack") == R1 + RR) {
            Rh = RA;
            break;
          }
        }
      }
      if (!Rh) {
        RH = true;
        (Rh = document.createElement("script")).charset = "utf-8";
        Rh.timeout = 55;
        if (R6.nc) {
          Rh.setAttribute("nonce", R6.nc);
        }
        Rh.setAttribute("data-webpack", R1 + RR);
        Rh.src = R8;
      }
      R0[R8] = [R9];
      var R9 = (RB, RY) => {
        Rh.onerror = Rh.onload = null;
        clearTimeout(RF);
        var Rm = R0[R8];
        delete R0[R8];
        if (Rh.parentNode) {
          Rh.parentNode.removeChild(Rh);
        }
        if (Rm) {
          Rm.forEach(RC => RC(RY));
        }
        if (RB) {
          return RB(RY);
        }
      };
      var RF = setTimeout(R9.bind(null, undefined, {
        type: "timeout",
        target: Rh
      }), 55000);
      Rh.onerror = R9.bind(null, Rh.onerror);
      Rh.onload = R9.bind(null, Rh.onload);
      if (RH) {
        document.head.appendChild(Rh);
      }
    }
  };
  R6.r = R8 => {
    if (typeof Symbol != "undefined" && Symbol.toStringTag) {
      Object.defineProperty(R8, Symbol.toStringTag, {
        value: "Module"
      });
    }
    Object.defineProperty(R8, "__esModule", {
      value: true
    });
  };
  R6.nmd = R8 => {
    R8.paths = [];
    R8.children ||= [];
    return R8;
  };
  R6.p = "";
  R2 = {
    313: 0
  };
  R6.f.j = (R8, R9) => {
    var RR;
    var Rj;
    var Rh = R6.o(R2, R8) ? R2[R8] : undefined;
    if (Rh !== 0) {
      if (Rh) {
        R9.push(Rh[2]);
      } else {
        RR = new Promise((RH, RO) => Rh = R2[R8] = [RH, RO]);
        R9.push(Rh[2] = RR);
        R9 = R6.p + R6.u(R8);
        Rj = new Error();
        R6.l(R9, RH => {
          var RO;
          if (R6.o(R2, R8) && ((Rh = R2[R8]) !== 0 && (R2[R8] = undefined), Rh)) {
            RO = RH && (RH.type === "load" ? "missing" : RH.type);
            RH = RH && RH.target && RH.target.src;
            Rj.message = "Loading chunk " + R8 + " failed.\n(" + RO + ": " + RH + ")";
            Rj.name = "ChunkLoadError";
            Rj.type = RO;
            Rj.request = RH;
            Rh[1](Rj);
          }
        }, "chunk-" + R8, R8);
      }
    }
  };
  R7 = (R8, R9) => {
    var RR;
    var Rj;
    var [Rh, RH, RO] = R9;
    var Ro = 0;
    if (Rh.some(RA => R2[RA] !== 0)) {
      for (RR in RH) {
        if (R6.o(RH, RR)) {
          R6.m[RR] = RH[RR];
        }
      }
      if (RO) {
        RO(R6);
      }
    }
    for (R8 && R8(R9); Ro < Rh.length; Ro++) {
      Rj = Rh[Ro];
      if (R6.o(R2, Rj) && R2[Rj]) {
        R2[Rj][0]();
      }
      R2[Rj] = 0;
    }
  };
  (R3 = self.webpackChunkjwplayer = self.webpackChunkjwplayer || []).forEach(R7.bind(null, 0));
  R3.push = R7.bind(null, R3.push.bind(R3));
  R6.nc = undefined;
  var R7 = R6(6577);
  window.jwplayer = R7.default;
})();
var O = {
  aspectratio: "16:9",
  autostart: true,
  cast: {},
  controls: true,
  displaydescription: true,
  displaytitle: true,
  height: 360,
  key: "6zBukhurqARgvMHydiSTu4eQgMPKZ0YNALRz9tO9UIHvwXNzH286PLQrCOLZuREl",
  mute: false,
  ph: 1,
  pid: "KB5zFt7A",
  playbackRateControls: false,
  preload: "metadata",
  repeat: false,
  stretching: "uniform",
  width: "100%"
};
jwplayer.defaults = O;
(function (R0, R1) {
  var R2;
  var R3;
  if (typeof exports == "object" && typeof module != "undefined") {
    module.exports = R1();
  } else if (typeof define == "function" && define.amd) {
    define(R1);
  } else {
    R0 = R0 || self;
    R2 = R0.Cookies;
    (R3 = R0.Cookies = R1()).noConflict = function () {
      R0.Cookies = R2;
      return R3;
    };
  }
})(this, function () {
  'use strict';

  function R0(R2) {
    for (var R3 = 1; R3 < arguments.length; R3++) {
      var R4;
      var R5 = arguments[R3];
      for (R4 in R5) {
        R2[R4] = R5[R4];
      }
    }
    return R2;
  }
  var R1 = {
    read: function (R2) {
      return R2.replace(/(%[\dA-F]{2})+/gi, decodeURIComponent);
    },
    write: function (R2) {
      return encodeURIComponent(R2).replace(/%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g, decodeURIComponent);
    }
  };
  return function R2(R3, R4) {
    function R5(R6, R7, R8) {
      if (typeof document != "undefined") {
        if (typeof (R8 = R0({}, R4, R8)).expires == "number") {
          R8.expires = new Date(Date.now() + R8.expires * 86400000);
        }
        R8.expires &&= R8.expires.toUTCString();
        R6 = encodeURIComponent(R6).replace(/%(2[346B]|5E|60|7C)/g, decodeURIComponent).replace(/[()]/g, escape);
        R7 = R3.write(R7, R6);
        var R9;
        var RR = "";
        for (R9 in R8) {
          if (R8[R9] && (RR += "; " + R9, R8[R9] !== true)) {
            RR += "=" + R8[R9].split(";")[0];
          }
        }
        return document.cookie = R6 + "=" + R7 + RR;
      }
    }
    return Object.create({
      set: R5,
      get: function (R6) {
        if (typeof document != "undefined" && (!arguments.length || R6)) {
          for (var R7 = document.cookie ? document.cookie.split("; ") : [], R8 = {}, R9 = 0; R9 < R7.length; R9++) {
            var RR = R7[R9].split("=");
            var Rj = RR.slice(1).join("=");
            if (Rj[0] === "\"") {
              Rj = Rj.slice(1, -1);
            }
            try {
              var Rh = R1.read(RR[0]);
              R8[Rh] = R3.read(Rj, Rh);
              if (R6 === Rh) {
                break;
              }
            } catch (RH) {}
          }
          if (R6) {
            return R8[R6];
          } else {
            return R8;
          }
        }
      },
      remove: function (R6, R7) {
        R5(R6, "", R0({}, R7, {
          expires: -1
        }));
      },
      withAttributes: function (R6) {
        return R2(this.converter, R0({}, this.attributes, R6));
      },
      withConverter: function (R6) {
        return R2(R0({}, this.converter, R6), this.attributes);
      }
    }, {
      attributes: {
        value: Object.freeze(R4)
      },
      converter: {
        value: Object.freeze(R3)
      }
    });
  }(R1, {
    path: "/"
  });
});
(function (R0) {
  (function () {
    if (typeof module != "undefined" && module.exports) {
      return function (R1) {
        module.exports = R1();
      };
    }
    if (typeof define == "function" && define.amd) {
      return define;
    }
    if (typeof window != "undefined") {
      return function (R1) {
        window.MobileDetect = R1();
      };
    }
    throw new Error("unknown environment");
  })()(function () {
    'use strict';

    function R1(Ro, RA) {
      return Ro != null && RA != null && Ro.toLowerCase() === RA.toLowerCase();
    }
    function R2(Ro, RA) {
      var RF;
      var RB;
      var RY = Ro.length;
      if (RY && RA) {
        RF = RA.toLowerCase();
        RB = 0;
        for (; RB < RY; ++RB) {
          if (RF === Ro[RB].toLowerCase()) {
            return true;
          }
        }
      }
      return false;
    }
    function R3(Ro) {
      for (var RA in Ro) {
        if (Rh.call(Ro, RA)) {
          Ro[RA] = new RegExp(Ro[RA], "i");
        }
      }
    }
    function R4(Ro, RA) {
      this.ua = (Ro || "").substr(0, 500);
      this._cache = {};
      this.maxPhoneWidth = RA || 600;
    }
    var R5;
    var R6;
    var R7;
    var R8;
    var R9;
    var RR;
    var Rj = {
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
    var Rh = Object.prototype.hasOwnProperty;
    Rj.FALLBACK_PHONE = "UnknownPhone";
    Rj.FALLBACK_TABLET = "UnknownTablet";
    Rj.FALLBACK_MOBILE = "UnknownMobile";
    var RH = "isArray" in Array ? Array.isArray : function (Ro) {
      return Object.prototype.toString.call(Ro) === "[object Array]";
    };
    var RO = Rj.mobileDetectRules;
    for (R5 in RO.props) {
      if (Rh.call(RO.props, R5)) {
        R6 = RO.props[R5];
        R9 = (R6 = RH(R6) ? R6 : [R6]).length;
        R8 = 0;
        for (; R8 < R9; ++R8) {
          if ((RR = (R7 = R6[R8]).indexOf("[VER]")) >= 0) {
            R7 = R7.substring(0, RR) + "([\\w._\\+]+)" + R7.substring(RR + 5);
          }
          R6[R8] = new RegExp(R7, "i");
        }
        RO.props[R5] = R6;
      }
    }
    R3(RO.oss);
    R3(RO.phones);
    R3(RO.tablets);
    R3(RO.uas);
    R3(RO.utils);
    RO.oss0 = {
      WindowsPhoneOS: RO.oss.WindowsPhoneOS,
      WindowsMobileOS: RO.oss.WindowsMobileOS
    };
    Rj.findMatch = function (Ro, RA) {
      for (var RF in Ro) {
        if (Rh.call(Ro, RF) && Ro[RF].test(RA)) {
          return RF;
        }
      }
      return null;
    };
    Rj.findMatches = function (Ro, RA) {
      var RF;
      var RB = [];
      for (RF in Ro) {
        if (Rh.call(Ro, RF) && Ro[RF].test(RA)) {
          RB.push(RF);
        }
      }
      return RB;
    };
    Rj.getVersionStr = function (Ro, RA) {
      var RF;
      var RB;
      var RY;
      var Rm;
      var RC = Rj.mobileDetectRules.props;
      if (Rh.call(RC, Ro)) {
        RY = (RF = RC[Ro]).length;
        RB = 0;
        for (; RB < RY; ++RB) {
          if ((Rm = RF[RB].exec(RA)) !== null) {
            return Rm[1];
          }
        }
      }
      return null;
    };
    Rj.getVersion = function (Ro, RA) {
      Ro = Rj.getVersionStr(Ro, RA);
      if (Ro) {
        return Rj.prepareVersionNo(Ro);
      } else {
        return NaN;
      }
    };
    Rj.prepareVersionNo = function (Ro) {
      var RA = Ro.split(/[a-z._ \/\-]/i);
      if (RA.length === 1) {
        Ro = RA[0];
      }
      if (RA.length > 1) {
        Ro = RA[0] + ".";
        RA.shift();
        Ro += RA.join("");
      }
      return Number(Ro);
    };
    Rj.isMobileFallback = function (Ro) {
      return Rj.detectMobileBrowsers.fullPattern.test(Ro) || Rj.detectMobileBrowsers.shortPattern.test(Ro.substr(0, 4));
    };
    Rj.isTabletFallback = function (Ro) {
      return Rj.detectMobileBrowsers.tabletPattern.test(Ro);
    };
    Rj.prepareDetectionCache = function (Ro, RA, RF) {
      var RB;
      if (Ro.mobile === R0) {
        if (RB = Rj.findMatch(Rj.mobileDetectRules.tablets, RA)) {
          Ro.mobile = Ro.tablet = RB;
          Ro.phone = null;
          return;
        } else if (RB = Rj.findMatch(Rj.mobileDetectRules.phones, RA)) {
          Ro.mobile = Ro.phone = RB;
          Ro.tablet = null;
          return;
        } else {
          if (Rj.isMobileFallback(RA)) {
            if ((RB = R4.isPhoneSized(RF)) === R0) {
              Ro.mobile = Rj.FALLBACK_MOBILE;
              Ro.tablet = Ro.phone = null;
            } else if (RB) {
              Ro.mobile = Ro.phone = Rj.FALLBACK_PHONE;
              Ro.tablet = null;
            } else {
              Ro.mobile = Ro.tablet = Rj.FALLBACK_TABLET;
              Ro.phone = null;
            }
          } else if (Rj.isTabletFallback(RA)) {
            Ro.mobile = Ro.tablet = Rj.FALLBACK_TABLET;
            Ro.phone = null;
          } else {
            Ro.mobile = Ro.tablet = Ro.phone = null;
          }
          return;
        }
      }
    };
    Rj.mobileGrade = function (Ro) {
      var RA = Ro.mobile() !== null;
      if (Ro.os("iOS") && Ro.version("iPad") >= 4.3 || Ro.os("iOS") && Ro.version("iPhone") >= 3.1 || Ro.os("iOS") && Ro.version("iPod") >= 3.1 || Ro.version("Android") > 2.1 && Ro.is("Webkit") || Ro.version("Windows Phone OS") >= 7 || Ro.is("BlackBerry") && Ro.version("BlackBerry") >= 6 || Ro.match("Playbook.*Tablet") || Ro.version("webOS") >= 1.4 && Ro.match("Palm|Pre|Pixi") || Ro.match("hp.*TouchPad") || Ro.is("Firefox") && Ro.version("Firefox") >= 12 || Ro.is("Chrome") && Ro.is("AndroidOS") && Ro.version("Android") >= 4 || Ro.is("Skyfire") && Ro.version("Skyfire") >= 4.1 && Ro.is("AndroidOS") && Ro.version("Android") >= 2.3 || Ro.is("Opera") && Ro.version("Opera Mobi") > 11 && Ro.is("AndroidOS") || Ro.is("MeeGoOS") || Ro.is("Tizen") || Ro.is("Dolfin") && Ro.version("Bada") >= 2 || (Ro.is("UC Browser") || Ro.is("Dolfin")) && Ro.version("Android") >= 2.3 || Ro.match("Kindle Fire") || Ro.is("Kindle") && Ro.version("Kindle") >= 3 || Ro.is("AndroidOS") && Ro.is("NookTablet") || Ro.version("Chrome") >= 11 && !RA || Ro.version("Safari") >= 5 && !RA || Ro.version("Firefox") >= 4 && !RA || Ro.version("MSIE") >= 7 && !RA || Ro.version("Opera") >= 10 && !RA) {
        return "A";
      } else if (Ro.os("iOS") && Ro.version("iPad") < 4.3 || Ro.os("iOS") && Ro.version("iPhone") < 3.1 || Ro.os("iOS") && Ro.version("iPod") < 3.1 || Ro.is("Blackberry") && Ro.version("BlackBerry") >= 5 && Ro.version("BlackBerry") < 6 || Ro.version("Opera Mini") >= 5 && Ro.version("Opera Mini") <= 6.5 && (Ro.version("Android") >= 2.3 || Ro.is("iOS")) || Ro.match("NokiaN8|NokiaC7|N97.*Series60|Symbian/3") || Ro.version("Opera Mobi") >= 11 && Ro.is("SymbianOS")) {
        return "B";
      } else {
        if (Ro.version("BlackBerry") >= 5 && !Ro.match("MSIEMobile|Windows CE.*Mobile")) {
          Ro.version("Windows Mobile");
        }
        return "C";
      }
    };
    Rj.detectOS = function (Ro) {
      return Rj.findMatch(Rj.mobileDetectRules.oss0, Ro) || Rj.findMatch(Rj.mobileDetectRules.oss, Ro);
    };
    Rj.getDeviceSmallerSide = function () {
      if (window.screen.width < window.screen.height) {
        return window.screen.width;
      } else {
        return window.screen.height;
      }
    };
    R4.prototype = {
      constructor: R4,
      mobile: function () {
        Rj.prepareDetectionCache(this._cache, this.ua, this.maxPhoneWidth);
        return this._cache.mobile;
      },
      phone: function () {
        Rj.prepareDetectionCache(this._cache, this.ua, this.maxPhoneWidth);
        return this._cache.phone;
      },
      tablet: function () {
        Rj.prepareDetectionCache(this._cache, this.ua, this.maxPhoneWidth);
        return this._cache.tablet;
      },
      userAgent: function () {
        if (this._cache.userAgent === R0) {
          this._cache.userAgent = Rj.findMatch(Rj.mobileDetectRules.uas, this.ua);
        }
        return this._cache.userAgent;
      },
      userAgents: function () {
        if (this._cache.userAgents === R0) {
          this._cache.userAgents = Rj.findMatches(Rj.mobileDetectRules.uas, this.ua);
        }
        return this._cache.userAgents;
      },
      os: function () {
        if (this._cache.os === R0) {
          this._cache.os = Rj.detectOS(this.ua);
        }
        return this._cache.os;
      },
      version: function (Ro) {
        return Rj.getVersion(Ro, this.ua);
      },
      versionStr: function (Ro) {
        return Rj.getVersionStr(Ro, this.ua);
      },
      is: function (Ro) {
        return R2(this.userAgents(), Ro) || R1(Ro, this.os()) || R1(Ro, this.phone()) || R1(Ro, this.tablet()) || R2(Rj.findMatches(Rj.mobileDetectRules.utils, this.ua), Ro);
      },
      match: function (Ro) {
        return (Ro = Ro instanceof RegExp ? Ro : new RegExp(Ro, "i")).test(this.ua);
      },
      isPhoneSized: function (Ro) {
        return R4.isPhoneSized(Ro || this.maxPhoneWidth);
      },
      mobileGrade: function () {
        if (this._cache.grade === R0) {
          this._cache.grade = Rj.mobileGrade(this);
        }
        return this._cache.grade;
      }
    };
    if (typeof window != "undefined" && window.screen) {
      R4.isPhoneSized = function (Ro) {
        if (Ro < 0) {
          return R0;
        } else {
          return Rj.getDeviceSmallerSide() <= Ro;
        }
      };
    } else {
      R4.isPhoneSized = function () {};
    }
    R4._impl = Rj;
    R4.version = "1.4.4 2019-09-21";
    return R4;
  });
})();
(function (R0, R1) {
  if (typeof exports == "object" && typeof module == "object") {
    module.exports = R1();
  } else if (typeof define == "function" && define.amd) {
    define([], R1);
  } else if (typeof exports == "object") {
    exports.devtoolsDetector = R1();
  } else {
    R0.devtoolsDetector = R1();
  }
})(typeof self != "undefined" ? self : this, function () {
  R1 = [function (R3, R4, R5) {
    'use strict';

    (function (R6) {
      R4.c = function () {
        return (typeof performance != "undefined" ? performance : Date).now();
      };
      R4.b = function (R9) {
        var RR = (R9 = R9 === undefined ? {} : R9).includes;
        var R9 = R9.excludes;
        var R9 = R9 === undefined ? [] : R9;
        var Rj = false;
        var Rh = false;
        for (var RH = 0, RO = RR === undefined ? [] : RR; RH < RO.length; RH++) {
          if (RO[RH] === true) {
            Rj = true;
            break;
          }
        }
        for (var Ro = 0, RA = R9; Ro < RA.length; Ro++) {
          if (RA[Ro] === true) {
            Rh = true;
            break;
          }
        }
        return Rj && !Rh;
      };
      R4.d = function (R9, RR, Rj) {
        R9 = R8.a[R9];
        return R9 !== undefined && Object(R7.compare)(R9, RR, Rj);
      };
      R4.a = function () {
        if (typeof self != "undefined") {
          return self;
        } else if (typeof window != "undefined") {
          return window;
        } else if (R6 !== undefined) {
          return R6;
        } else {
          return this;
        }
      };
      var R7 = R5(11);
      R5.n(R7);
      var R8 = R5(5);
    }).call(R4, R5(10));
  }, function (R3, R4, R5) {
    'use strict';

    R5.d(R4, "c", function () {
      return R7;
    });
    R5.d(R4, "d", function () {
      return R8;
    });
    R5.d(R4, "b", function () {
      return R9;
    });
    R5.d(R4, "g", function () {
      return RR;
    });
    R5.d(R4, "e", function () {
      return Rj;
    });
    R5.d(R4, "a", function () {
      return Rh;
    });
    R5.d(R4, "f", function () {
      return RH;
    });
    var R6;
    var R4 = R5(3);
    var R5 = R5(0);
    var R5 = Object(R5.a)();
    var R7 = "InstallTrigger" in ((R5 == null ? undefined : R5.window) || {}) || /firefox/i.test(R4.b);
    var R8 = /trident/i.test(R4.b) || /msie/i.test(R4.b);
    var R9 = /edge/i.test(R4.b);
    var RR = /webkit/i.test(R4.b) && !R9;
    var Rj = /IqiyiApp/.test(R4.b);
    var Rh = ((R6 = R5 == null ? undefined : R5.window) == null ? undefined : R6.chrome) !== undefined || /chrome/i.test(R4.b) || /CriOS/i.test(R4.b);
    var RH = (((R5 = (R6 = R5 == null ? undefined : R5.window) == null ? undefined : R6.safari) == null ? undefined : R5.pushNotification) || false).toString() === "[object SafariRemoteNotification]" || /safari/i.test(R4.b) && !Rh;
  }, function (R3, R4, R5) {
    'use strict';

    R5.d(R4, "b", function () {
      return R8;
    });
    R5.d(R4, "c", function () {
      return R9;
    });
    R5.d(R4, "a", function () {
      return RR;
    });
    var R6 = R5(1);
    function R7(Rj) {
      if (console) {
        if (!R6.d && !R6.b) {
          return console[Rj];
        }
        if (Rj === "log" || Rj === "clear") {
          return function () {
            var Rh = [];
            for (var RH = 0; RH < arguments.length; RH++) {
              Rh[RH] = arguments[RH];
            }
            console[Rj].apply(console, Rh);
          };
        }
      }
      return function () {
        for (var Rh = 0; Rh < arguments.length; Rh++) {
          Rh;
          0;
        }
      };
    }
    var R8 = R7("log");
    var R9 = R7("table");
    var RR = R7("clear");
  }, function (R3, R4, R5) {
    'use strict';

    R4.a = function () {
      var R8;
      var R9 = [];
      for (var RR = 0; RR < arguments.length; RR++) {
        R9[RR] = arguments[RR];
      }
      if (R6 != null && R6.document) {
        return (R8 = R6.document).createElement.apply(R8, R9);
      } else {
        return {};
      }
    };
    R5.d(R4, "b", function () {
      return R7;
    });
    var R4 = R5(0);
    var R6 = Object(R4.a)();
    var R7 = ((R5 = R6 == null ? undefined : R6.navigator) == null ? undefined : R5.userAgent) || "xxxxx";
  }, function (R3, R4, R5) {
    'use strict';

    Object.defineProperty(R4, "__esModule", {
      value: true
    });
    R4.addListener = function (Ro) {
      RO.addListener(Ro);
    };
    R4.removeListener = function (Ro) {
      RO.removeListener(Ro);
    };
    R4.isLaunch = function () {
      return RO.isLaunch();
    };
    R4.launch = function () {
      RO.launch();
    };
    R4.stop = function () {
      RO.stop();
    };
    R4.setDetectDelay = function (Ro) {
      RO.setDetectDelay(Ro);
    };
    var R6 = R5(7);
    var R7 = R5(8);
    R5.d(R4, "DevtoolsDetector", function () {
      return R6.a;
    });
    R5.d(R4, "checkers", function () {
      return R7;
    });
    var R8 = R5(0);
    R5.d(R4, "match", function () {
      return R8.b;
    });
    R5.d(R4, "specificVersionMatch", function () {
      return R8.d;
    });
    var R9 = R5(1);
    R5.d(R4, "isFirefox", function () {
      return R9.c;
    });
    R5.d(R4, "isIE", function () {
      return R9.d;
    });
    R5.d(R4, "isEdge", function () {
      return R9.b;
    });
    R5.d(R4, "isWebkit", function () {
      return R9.g;
    });
    R5.d(R4, "isIqiyiApp", function () {
      return R9.e;
    });
    R5.d(R4, "isChrome", function () {
      return R9.a;
    });
    R5.d(R4, "isSafari", function () {
      return R9.f;
    });
    var RR = R5(2);
    R5.d(R4, "log", function () {
      return RR.b;
    });
    R5.d(R4, "table", function () {
      return RR.c;
    });
    R5.d(R4, "clear", function () {
      return RR.a;
    });
    var Rj = R5(19);
    R5.d(R4, "isMobile", function () {
      return Rj.a;
    });
    var Rh = R5(5);
    R5.d(R4, "versionMap", function () {
      return Rh.a;
    });
    var RH = R5(6);
    R5.d(R4, "isMac", function () {
      return RH.d;
    });
    R5.d(R4, "isIpad", function () {
      return RH.b;
    });
    R5.d(R4, "isIphone", function () {
      return RH.c;
    });
    R5.d(R4, "isAndroid", function () {
      return RH.a;
    });
    R5.d(R4, "isWindows", function () {
      return RH.e;
    });
    var RO = new R6.a({
      checkers: [R7.erudaChecker, R7.elementIdChecker, R7.regToStringChecker, R7.functionToStringChecker, R7.depRegToStringChecker, R7.dateToStringChecker, R7.performanceChecker, R7.debuggerChecker]
    });
    R4.default = RO;
  }, function (R3, R4, R5) {
    'use strict';

    R5.d(R4, "a", function () {
      return R6;
    });
    var R6 = {};
    for (var R7 = 0, R8 = (R5(3).b || "").match(/\w+\/(\d|\.)+(\s|$)/gi) || []; R7 < R8.length; R7++) {
      var R9 = R8[R7].split("/");
      var RR = R9[0];
      var R9 = R9[1];
      R6[RR] = R9;
    }
  }, function (R3, R4, R5) {
    'use strict';

    R5.d(R4, "d", function () {
      return R6;
    });
    R5.d(R4, "b", function () {
      return R7;
    });
    R5.d(R4, "c", function () {
      return R8;
    });
    R5.d(R4, "a", function () {
      return R9;
    });
    R5.d(R4, "e", function () {
      return RR;
    });
    var R4 = R5(3);
    var R6 = /macintosh/i.test(R4.b);
    var R7 = /ipad/i.test(R4.b) || R6 && navigator.maxTouchPoints > 1;
    var R8 = /iphone/i.test(R4.b);
    var R9 = /android/i.test(R4.b);
    var RR = /windows/i.test(R4.b);
  }, function (R3, R4, R5) {
    'use strict';

    R5.d(R4, "a", function () {
      return R8;
    });
    var R6 = this && this.__awaiter || function (RR, Rj, Rh, RH) {
      return new (Rh = Rh || Promise)(function (RO, Ro) {
        function RA(RY) {
          try {
            RB(RH.next(RY));
          } catch (Rm) {
            Ro(Rm);
          }
        }
        function RF(RY) {
          try {
            RB(RH.throw(RY));
          } catch (Rm) {
            Ro(Rm);
          }
        }
        function RB(RY) {
          var Rm;
          if (RY.done) {
            RO(RY.value);
          } else {
            ((Rm = RY.value) instanceof Rh ? Rm : new Rh(function (RC) {
              RC(Rm);
            })).then(RA, RF);
          }
        }
        RB((RH = RH.apply(RR, Rj || [])).next());
      });
    };
    var R7 = this && this.__generator || function (RR, Rj) {
      var Rh;
      var RH;
      var RO;
      var Ro = {
        label: 0,
        sent: function () {
          if (RO[0] & 1) {
            throw RO[1];
          }
          return RO[1];
        },
        trys: [],
        ops: []
      };
      var RA = {
        next: RF(0),
        throw: RF(1),
        return: RF(2)
      };
      if (typeof Symbol == "function") {
        RA[Symbol.iterator] = function () {
          return this;
        };
      }
      return RA;
      function RF(RB) {
        return function (RY) {
          var Rm = [RB, RY];
          if (Rh) {
            throw new TypeError("Generator is already executing.");
          }
          while (Ro) {
            try {
              Rh = 1;
              if (RH && (RO = Rm[0] & 2 ? RH.return : Rm[0] ? RH.throw || ((RO = RH.return) && RO.call(RH), 0) : RH.next) && !(RO = RO.call(RH, Rm[1])).done) {
                return RO;
              }
              RH = 0;
              switch ((Rm = RO ? [Rm[0] & 2, RO.value] : Rm)[0]) {
                case 0:
                case 1:
                  RO = Rm;
                  break;
                case 4:
                  Ro.label++;
                  return {
                    value: Rm[1],
                    done: false
                  };
                case 5:
                  Ro.label++;
                  RH = Rm[1];
                  Rm = [0];
                  continue;
                case 7:
                  Rm = Ro.ops.pop();
                  Ro.trys.pop();
                  continue;
                default:
                  if (!(RO = (RO = Ro.trys).length > 0 && RO[RO.length - 1]) && (Rm[0] === 6 || Rm[0] === 2)) {
                    Ro = 0;
                    continue;
                  }
                  if (Rm[0] === 3 && (!RO || Rm[1] > RO[0] && Rm[1] < RO[3])) {
                    Ro.label = Rm[1];
                  } else if (Rm[0] === 6 && Ro.label < RO[1]) {
                    Ro.label = RO[1];
                    RO = Rm;
                  } else {
                    if (!RO || Ro.label >= RO[2]) {
                      if (RO[2]) {
                        Ro.ops.pop();
                      }
                      Ro.trys.pop();
                      continue;
                    }
                    Ro.label = RO[2];
                    Ro.ops.push(Rm);
                  }
              }
              Rm = Rj.call(RR, Ro);
            } catch (RC) {
              Rm = [6, RC];
              RH = 0;
            } finally {
              Rh = RO = 0;
            }
          }
          if (Rm[0] & 5) {
            throw Rm[1];
          }
          return {
            value: Rm[0] ? Rm[1] : undefined,
            done: true
          };
        };
      }
    };
    R9.prototype.launch = function () {
      if (this._detectLoopDelay <= 0) {
        this.setDetectDelay(500);
      }
      if (this._detectLoopStopped) {
        this._detectLoopStopped = false;
        this._detectLoop();
      }
    };
    R9.prototype.stop = function () {
      if (!this._detectLoopStopped) {
        this._detectLoopStopped = true;
        clearTimeout(this._timer);
      }
    };
    R9.prototype.isLaunch = function () {
      return !this._detectLoopStopped;
    };
    R9.prototype.setDetectDelay = function (RR) {
      this._detectLoopDelay = RR;
    };
    R9.prototype.addListener = function (RR) {
      this._listeners.push(RR);
    };
    R9.prototype.removeListener = function (RR) {
      this._listeners = this._listeners.filter(function (Rj) {
        return Rj !== RR;
      });
    };
    R9.prototype._broadcast = function (RR) {
      for (var Rj = 0, Rh = this._listeners; Rj < Rh.length; Rj++) {
        var RH = Rh[Rj];
        try {
          RH(RR.isOpen, RR);
        } catch (RO) {}
      }
    };
    R9.prototype._detectLoop = function () {
      return R6(this, undefined, undefined, function () {
        var RR;
        var Rj;
        var Rh;
        var RH;
        var RO;
        var Ro = this;
        return R7(this, function (RA) {
          switch (RA.label) {
            case 0:
              RR = false;
              Rj = "";
              Rh = 0;
              RH = this._checkers;
              RA.label = 1;
            case 1:
              if (Rh < RH.length) {
                return [4, (RO = RH[Rh]).isEnable()];
              } else {
                return [3, 6];
              }
            case 2:
              if (RA.sent()) {
                Rj = RO.name;
                return [4, RO.isOpen()];
              } else {
                return [3, 4];
              }
            case 3:
              RR = RA.sent();
              RA.label = 4;
            case 4:
              if (RR) {
                return [3, 6];
              }
              RA.label = 5;
            case 5:
              Rh++;
              return [3, 1];
            case 6:
              if (RR != this._isOpen) {
                this._isOpen = RR;
                this._broadcast({
                  isOpen: RR,
                  checkerName: Rj
                });
              }
              if (this._detectLoopDelay > 0) {
                this._timer = setTimeout(function () {
                  return Ro._detectLoop();
                }, this._detectLoopDelay);
              } else {
                this.stop();
              }
              return [2];
          }
        });
      });
    };
    var R8 = R9;
    function R9(RR) {
      RR = RR.checkers;
      this._listeners = [];
      this._isOpen = false;
      this._detectLoopStopped = true;
      this._detectLoopDelay = 500;
      this._checkers = RR.slice();
    }
  }, function (R3, R4, R5) {
    'use strict';

    Object.defineProperty(R4, "__esModule", {
      value: true
    });
    var R6 = R5(9);
    R5.d(R4, "depRegToStringChecker", function () {
      return R6.a;
    });
    var R7 = R5(12);
    R5.d(R4, "elementIdChecker", function () {
      return R7.a;
    });
    var R8 = R5(13);
    R5.d(R4, "functionToStringChecker", function () {
      return R8.a;
    });
    var R9 = R5(14);
    R5.d(R4, "regToStringChecker", function () {
      return R9.a;
    });
    var RR = R5(15);
    R5.d(R4, "debuggerChecker", function () {
      return RR.a;
    });
    var Rj = R5(16);
    R5.d(R4, "dateToStringChecker", function () {
      return Rj.a;
    });
    var Rh = R5(17);
    R5.d(R4, "performanceChecker", function () {
      return Rh.a;
    });
    var RH = R5(18);
    R5.d(R4, "erudaChecker", function () {
      return RH.a;
    });
  }, function (R3, R4, R5) {
    'use strict';

    R5.d(R4, "a", function () {
      return RH;
    });
    var R6 = R5(1);
    var R7 = R5(2);
    var R8 = R5(0);
    var R9 = this && this.__awaiter || function (RO, Ro, RA, RF) {
      return new (RA = RA || Promise)(function (RB, RY) {
        function Rm(Rd) {
          try {
            Rn(RF.next(Rd));
          } catch (RQ) {
            RY(RQ);
          }
        }
        function RC(Rd) {
          try {
            Rn(RF.throw(Rd));
          } catch (RQ) {
            RY(RQ);
          }
        }
        function Rn(Rd) {
          var RQ;
          if (Rd.done) {
            RB(Rd.value);
          } else {
            ((RQ = Rd.value) instanceof RA ? RQ : new RA(function (Rg) {
              Rg(RQ);
            })).then(Rm, RC);
          }
        }
        Rn((RF = RF.apply(RO, Ro || [])).next());
      });
    };
    var RR = this && this.__generator || function (RO, Ro) {
      var RA;
      var RF;
      var RB;
      var RY = {
        label: 0,
        sent: function () {
          if (RB[0] & 1) {
            throw RB[1];
          }
          return RB[1];
        },
        trys: [],
        ops: []
      };
      var Rm = {
        next: RC(0),
        throw: RC(1),
        return: RC(2)
      };
      if (typeof Symbol == "function") {
        Rm[Symbol.iterator] = function () {
          return this;
        };
      }
      return Rm;
      function RC(Rn) {
        return function (Rd) {
          var RQ = [Rn, Rd];
          if (RA) {
            throw new TypeError("Generator is already executing.");
          }
          while (RY) {
            try {
              RA = 1;
              if (RF && (RB = RQ[0] & 2 ? RF.return : RQ[0] ? RF.throw || ((RB = RF.return) && RB.call(RF), 0) : RF.next) && !(RB = RB.call(RF, RQ[1])).done) {
                return RB;
              }
              RF = 0;
              switch ((RQ = RB ? [RQ[0] & 2, RB.value] : RQ)[0]) {
                case 0:
                case 1:
                  RB = RQ;
                  break;
                case 4:
                  RY.label++;
                  return {
                    value: RQ[1],
                    done: false
                  };
                case 5:
                  RY.label++;
                  RF = RQ[1];
                  RQ = [0];
                  continue;
                case 7:
                  RQ = RY.ops.pop();
                  RY.trys.pop();
                  continue;
                default:
                  if (!(RB = (RB = RY.trys).length > 0 && RB[RB.length - 1]) && (RQ[0] === 6 || RQ[0] === 2)) {
                    RY = 0;
                    continue;
                  }
                  if (RQ[0] === 3 && (!RB || RQ[1] > RB[0] && RQ[1] < RB[3])) {
                    RY.label = RQ[1];
                  } else if (RQ[0] === 6 && RY.label < RB[1]) {
                    RY.label = RB[1];
                    RB = RQ;
                  } else {
                    if (!RB || RY.label >= RB[2]) {
                      if (RB[2]) {
                        RY.ops.pop();
                      }
                      RY.trys.pop();
                      continue;
                    }
                    RY.label = RB[2];
                    RY.ops.push(RQ);
                  }
              }
              RQ = Ro.call(RO, RY);
            } catch (Rg) {
              RQ = [6, Rg];
              RF = 0;
            } finally {
              RA = RB = 0;
            }
          }
          if (RQ[0] & 5) {
            throw RQ[1];
          }
          return {
            value: RQ[0] ? RQ[1] : undefined,
            done: true
          };
        };
      }
    };
    var Rj = / /;
    var Rh = false;
    Rj.toString = function () {
      Rh = true;
      return RH.name;
    };
    var RH = {
      name: "dep-reg-to-string",
      isOpen: function () {
        return R9(this, undefined, undefined, function () {
          return RR(this, function (RO) {
            Rh = false;
            Object(R7.c)({
              dep: Rj
            });
            Object(R7.a)();
            return [2, Rh];
          });
        });
      },
      isEnable: function () {
        return R9(this, undefined, undefined, function () {
          return RR(this, function (RO) {
            return [2, Object(R8.b)({
              includes: [true],
              excludes: [R6.c, R6.d]
            })];
          });
        });
      }
    };
  }, function (R3, R4) {
    var R5 = function () {
      return this;
    }();
    try {
      R5 = R5 || Function("return this")() || (0, eval)("this");
    } catch (R6) {
      if (typeof window == "object") {
        R5 = window;
      }
    }
    R3.exports = R5;
  }, function (R3, R4, R5) {
    var R6;
    if ((R4 = typeof (R6 = function () {
      var R7 = /^v?(?:\d+)(\.(?:[x*]|\d+)(\.(?:[x*]|\d+)(\.(?:[x*]|\d+))?(?:-[\da-z\-]+(?:\.[\da-z\-]+)*)?(?:\+[\da-z\-]+(?:\.[\da-z\-]+)*)?)?)?$/i;
      function R8(RO) {
        var Ro = RO.replace(/^v/, "").replace(/\+.*$/, "");
        var RA = function (RB, RY) {
          if (RB.indexOf(RY) === -1) {
            return RB.length;
          } else {
            return RB.indexOf(RY);
          }
        }(Ro, "-");
        var RF = Ro.substring(0, RA).split(".");
        RF.push(Ro.substring(RA + 1));
        return RF;
      }
      function R9(RO) {
        if (isNaN(Number(RO))) {
          return RO;
        } else {
          return Number(RO);
        }
      }
      function RR(RO) {
        if (typeof RO != "string") {
          throw new TypeError("Invalid argument expected string");
        }
        if (!R7.test(RO)) {
          throw new Error("Invalid argument not valid semver ('" + RO + "' received)");
        }
      }
      function Rj(RO, Ro) {
        [RO, Ro].forEach(RR);
        for (var RA = R8(RO), RF = R8(Ro), RB = 0; RB < Math.max(RA.length - 1, RF.length - 1); RB++) {
          var RY = parseInt(RA[RB] || 0, 10);
          var Rm = parseInt(RF[RB] || 0, 10);
          if (RY > Rm) {
            return 1;
          }
          if (Rm > RY) {
            return -1;
          }
        }
        var RC = RA[RA.length - 1];
        var Rn = RF[RF.length - 1];
        if (RC && Rn) {
          var Rd = RC.split(".").map(R9);
          var RQ = Rn.split(".").map(R9);
          for (RB = 0; RB < Math.max(Rd.length, RQ.length); RB++) {
            if (Rd[RB] === undefined || typeof RQ[RB] == "string" && typeof Rd[RB] == "number") {
              return -1;
            }
            if (RQ[RB] === undefined || typeof Rd[RB] == "string" && typeof RQ[RB] == "number") {
              return 1;
            }
            if (Rd[RB] > RQ[RB]) {
              return 1;
            }
            if (RQ[RB] > Rd[RB]) {
              return -1;
            }
          }
        } else if (RC || Rn) {
          if (RC) {
            return -1;
          } else {
            return 1;
          }
        }
        return 0;
      }
      var Rh = [">", ">=", "=", "<", "<="];
      var RH = {
        ">": [1],
        ">=": [0, 1],
        "=": [0],
        "<=": [-1, 0],
        "<": [-1]
      };
      Rj.validate = function (RO) {
        return typeof RO == "string" && R7.test(RO);
      };
      Rj.compare = function (RO, Ro, RA) {
        (function (RB) {
          if (typeof RB != "string") {
            throw new TypeError("Invalid operator type, expected string but got " + typeof RB);
          }
          if (Rh.indexOf(RB) === -1) {
            throw new TypeError("Invalid operator, expected one of " + Rh.join("|"));
          }
        })(RA);
        var RF = Rj(RO, Ro);
        return RH[RA].indexOf(RF) > -1;
      };
      return Rj;
    }) == "function" ? R6.apply(R4, []) : R6) !== undefined) {
      R3.exports = R4;
    }
  }, function (R3, R4, R5) {
    'use strict';

    R5.d(R4, "a", function () {
      return RH;
    });
    var R6 = R5(1);
    var R7 = R5(2);
    var R8 = R5(0);
    var R4 = R5(3);
    var R9 = this && this.__awaiter || function (RO, Ro, RA, RF) {
      return new (RA = RA || Promise)(function (RB, RY) {
        function Rm(Rd) {
          try {
            Rn(RF.next(Rd));
          } catch (RQ) {
            RY(RQ);
          }
        }
        function RC(Rd) {
          try {
            Rn(RF.throw(Rd));
          } catch (RQ) {
            RY(RQ);
          }
        }
        function Rn(Rd) {
          var RQ;
          if (Rd.done) {
            RB(Rd.value);
          } else {
            ((RQ = Rd.value) instanceof RA ? RQ : new RA(function (Rg) {
              Rg(RQ);
            })).then(Rm, RC);
          }
        }
        Rn((RF = RF.apply(RO, Ro || [])).next());
      });
    };
    var RR = this && this.__generator || function (RO, Ro) {
      var RA;
      var RF;
      var RB;
      var RY = {
        label: 0,
        sent: function () {
          if (RB[0] & 1) {
            throw RB[1];
          }
          return RB[1];
        },
        trys: [],
        ops: []
      };
      var Rm = {
        next: RC(0),
        throw: RC(1),
        return: RC(2)
      };
      if (typeof Symbol == "function") {
        Rm[Symbol.iterator] = function () {
          return this;
        };
      }
      return Rm;
      function RC(Rn) {
        return function (Rd) {
          var RQ = [Rn, Rd];
          if (RA) {
            throw new TypeError("Generator is already executing.");
          }
          while (RY) {
            try {
              RA = 1;
              if (RF && (RB = RQ[0] & 2 ? RF.return : RQ[0] ? RF.throw || ((RB = RF.return) && RB.call(RF), 0) : RF.next) && !(RB = RB.call(RF, RQ[1])).done) {
                return RB;
              }
              RF = 0;
              switch ((RQ = RB ? [RQ[0] & 2, RB.value] : RQ)[0]) {
                case 0:
                case 1:
                  RB = RQ;
                  break;
                case 4:
                  RY.label++;
                  return {
                    value: RQ[1],
                    done: false
                  };
                case 5:
                  RY.label++;
                  RF = RQ[1];
                  RQ = [0];
                  continue;
                case 7:
                  RQ = RY.ops.pop();
                  RY.trys.pop();
                  continue;
                default:
                  if (!(RB = (RB = RY.trys).length > 0 && RB[RB.length - 1]) && (RQ[0] === 6 || RQ[0] === 2)) {
                    RY = 0;
                    continue;
                  }
                  if (RQ[0] === 3 && (!RB || RQ[1] > RB[0] && RQ[1] < RB[3])) {
                    RY.label = RQ[1];
                  } else if (RQ[0] === 6 && RY.label < RB[1]) {
                    RY.label = RB[1];
                    RB = RQ;
                  } else {
                    if (!RB || RY.label >= RB[2]) {
                      if (RB[2]) {
                        RY.ops.pop();
                      }
                      RY.trys.pop();
                      continue;
                    }
                    RY.label = RB[2];
                    RY.ops.push(RQ);
                  }
              }
              RQ = Ro.call(RO, RY);
            } catch (Rg) {
              RQ = [6, Rg];
              RF = 0;
            } finally {
              RA = RB = 0;
            }
          }
          if (RQ[0] & 5) {
            throw RQ[1];
          }
          return {
            value: RQ[0] ? RQ[1] : undefined,
            done: true
          };
        };
      }
    };
    var Rj = Object(R4.a)("div");
    var Rh = false;
    Object.defineProperty(Rj, "id", {
      get: function () {
        Rh = true;
        return RH.name;
      },
      configurable: true
    });
    var RH = {
      name: "element-id",
      isOpen: function () {
        return R9(this, undefined, undefined, function () {
          return RR(this, function (RO) {
            Rh = false;
            Object(R7.b)(Rj);
            Object(R7.a)();
            return [2, Rh];
          });
        });
      },
      isEnable: function () {
        return R9(this, undefined, undefined, function () {
          return RR(this, function (RO) {
            return [2, Object(R8.b)({
              includes: [true],
              excludes: [R6.d, R6.b, R6.c]
            })];
          });
        });
      }
    };
  }, function (R3, R4, R5) {
    'use strict';

    R5.d(R4, "a", function () {
      return RO;
    });
    var R6 = R5(1);
    var R7 = R5(2);
    var R8 = R5(6);
    var R9 = R5(0);
    var RR = this && this.__awaiter || function (Ro, RA, RF, RB) {
      return new (RF = RF || Promise)(function (RY, Rm) {
        function RC(RQ) {
          try {
            Rd(RB.next(RQ));
          } catch (Rg) {
            Rm(Rg);
          }
        }
        function Rn(RQ) {
          try {
            Rd(RB.throw(RQ));
          } catch (Rg) {
            Rm(Rg);
          }
        }
        function Rd(RQ) {
          var Rg;
          if (RQ.done) {
            RY(RQ.value);
          } else {
            ((Rg = RQ.value) instanceof RF ? Rg : new RF(function (Rp) {
              Rp(Rg);
            })).then(RC, Rn);
          }
        }
        Rd((RB = RB.apply(Ro, RA || [])).next());
      });
    };
    var Rj = this && this.__generator || function (Ro, RA) {
      var RF;
      var RB;
      var RY;
      var Rm = {
        label: 0,
        sent: function () {
          if (RY[0] & 1) {
            throw RY[1];
          }
          return RY[1];
        },
        trys: [],
        ops: []
      };
      var RC = {
        next: Rn(0),
        throw: Rn(1),
        return: Rn(2)
      };
      if (typeof Symbol == "function") {
        RC[Symbol.iterator] = function () {
          return this;
        };
      }
      return RC;
      function Rn(Rd) {
        return function (RQ) {
          var Rg = [Rd, RQ];
          if (RF) {
            throw new TypeError("Generator is already executing.");
          }
          while (Rm) {
            try {
              RF = 1;
              if (RB && (RY = Rg[0] & 2 ? RB.return : Rg[0] ? RB.throw || ((RY = RB.return) && RY.call(RB), 0) : RB.next) && !(RY = RY.call(RB, Rg[1])).done) {
                return RY;
              }
              RB = 0;
              switch ((Rg = RY ? [Rg[0] & 2, RY.value] : Rg)[0]) {
                case 0:
                case 1:
                  RY = Rg;
                  break;
                case 4:
                  Rm.label++;
                  return {
                    value: Rg[1],
                    done: false
                  };
                case 5:
                  Rm.label++;
                  RB = Rg[1];
                  Rg = [0];
                  continue;
                case 7:
                  Rg = Rm.ops.pop();
                  Rm.trys.pop();
                  continue;
                default:
                  if (!(RY = (RY = Rm.trys).length > 0 && RY[RY.length - 1]) && (Rg[0] === 6 || Rg[0] === 2)) {
                    Rm = 0;
                    continue;
                  }
                  if (Rg[0] === 3 && (!RY || Rg[1] > RY[0] && Rg[1] < RY[3])) {
                    Rm.label = Rg[1];
                  } else if (Rg[0] === 6 && Rm.label < RY[1]) {
                    Rm.label = RY[1];
                    RY = Rg;
                  } else {
                    if (!RY || Rm.label >= RY[2]) {
                      if (RY[2]) {
                        Rm.ops.pop();
                      }
                      Rm.trys.pop();
                      continue;
                    }
                    Rm.label = RY[2];
                    Rm.ops.push(Rg);
                  }
              }
              Rg = RA.call(Ro, Rm);
            } catch (Rp) {
              Rg = [6, Rp];
              RB = 0;
            } finally {
              RF = RY = 0;
            }
          }
          if (Rg[0] & 5) {
            throw Rg[1];
          }
          return {
            value: Rg[0] ? Rg[1] : undefined,
            done: true
          };
        };
      }
    };
    function Rh() {}
    var RH = 0;
    Rh.toString = function () {
      RH++;
      return "";
    };
    var RO = {
      name: "function-to-string",
      isOpen: function () {
        return RR(this, undefined, undefined, function () {
          return Rj(this, function (Ro) {
            RH = 0;
            Object(R7.b)(Rh);
            Object(R7.a)();
            return [2, RH === 2];
          });
        });
      },
      isEnable: function () {
        return RR(this, undefined, undefined, function () {
          return Rj(this, function (Ro) {
            return [2, Object(R9.b)({
              includes: [true],
              excludes: [R6.e, R6.c, (R8.b || R8.c) && R6.a]
            })];
          });
        });
      }
    };
  }, function (R3, R4, R5) {
    'use strict';

    R5.d(R4, "a", function () {
      return RH;
    });
    var R6 = R5(2);
    var R7 = R5(1);
    var R8 = R5(0);
    var R9 = this && this.__awaiter || function (RO, Ro, RA, RF) {
      return new (RA = RA || Promise)(function (RB, RY) {
        function Rm(Rd) {
          try {
            Rn(RF.next(Rd));
          } catch (RQ) {
            RY(RQ);
          }
        }
        function RC(Rd) {
          try {
            Rn(RF.throw(Rd));
          } catch (RQ) {
            RY(RQ);
          }
        }
        function Rn(Rd) {
          var RQ;
          if (Rd.done) {
            RB(Rd.value);
          } else {
            ((RQ = Rd.value) instanceof RA ? RQ : new RA(function (Rg) {
              Rg(RQ);
            })).then(Rm, RC);
          }
        }
        Rn((RF = RF.apply(RO, Ro || [])).next());
      });
    };
    var RR = this && this.__generator || function (RO, Ro) {
      var RA;
      var RF;
      var RB;
      var RY = {
        label: 0,
        sent: function () {
          if (RB[0] & 1) {
            throw RB[1];
          }
          return RB[1];
        },
        trys: [],
        ops: []
      };
      var Rm = {
        next: RC(0),
        throw: RC(1),
        return: RC(2)
      };
      if (typeof Symbol == "function") {
        Rm[Symbol.iterator] = function () {
          return this;
        };
      }
      return Rm;
      function RC(Rn) {
        return function (Rd) {
          var RQ = [Rn, Rd];
          if (RA) {
            throw new TypeError("Generator is already executing.");
          }
          while (RY) {
            try {
              RA = 1;
              if (RF && (RB = RQ[0] & 2 ? RF.return : RQ[0] ? RF.throw || ((RB = RF.return) && RB.call(RF), 0) : RF.next) && !(RB = RB.call(RF, RQ[1])).done) {
                return RB;
              }
              RF = 0;
              switch ((RQ = RB ? [RQ[0] & 2, RB.value] : RQ)[0]) {
                case 0:
                case 1:
                  RB = RQ;
                  break;
                case 4:
                  RY.label++;
                  return {
                    value: RQ[1],
                    done: false
                  };
                case 5:
                  RY.label++;
                  RF = RQ[1];
                  RQ = [0];
                  continue;
                case 7:
                  RQ = RY.ops.pop();
                  RY.trys.pop();
                  continue;
                default:
                  if (!(RB = (RB = RY.trys).length > 0 && RB[RB.length - 1]) && (RQ[0] === 6 || RQ[0] === 2)) {
                    RY = 0;
                    continue;
                  }
                  if (RQ[0] === 3 && (!RB || RQ[1] > RB[0] && RQ[1] < RB[3])) {
                    RY.label = RQ[1];
                  } else if (RQ[0] === 6 && RY.label < RB[1]) {
                    RY.label = RB[1];
                    RB = RQ;
                  } else {
                    if (!RB || RY.label >= RB[2]) {
                      if (RB[2]) {
                        RY.ops.pop();
                      }
                      RY.trys.pop();
                      continue;
                    }
                    RY.label = RB[2];
                    RY.ops.push(RQ);
                  }
              }
              RQ = Ro.call(RO, RY);
            } catch (Rg) {
              RQ = [6, Rg];
              RF = 0;
            } finally {
              RA = RB = 0;
            }
          }
          if (RQ[0] & 5) {
            throw RQ[1];
          }
          return {
            value: RQ[0] ? RQ[1] : undefined,
            done: true
          };
        };
      }
    };
    var Rj = / /;
    var Rh = false;
    Rj.toString = function () {
      Rh = true;
      return RH.name;
    };
    var RH = {
      name: "reg-to-string",
      isOpen: function () {
        return R9(this, undefined, undefined, function () {
          return RR(this, function (RO) {
            Rh = false;
            Object(R6.b)(Rj);
            Object(R6.a)();
            return [2, Rh];
          });
        });
      },
      isEnable: function () {
        return R9(this, undefined, undefined, function () {
          return RR(this, function (RO) {
            return [2, Object(R8.b)({
              includes: [true],
              excludes: [R7.g]
            })];
          });
        });
      }
    };
  }, function (R3, R4, R5) {
    'use strict';

    R5.d(R4, "a", function () {
      return R9;
    });
    var R6 = R5(0);
    var R7 = this && this.__awaiter || function (RR, Rj, Rh, RH) {
      return new (Rh = Rh || Promise)(function (RO, Ro) {
        function RA(RY) {
          try {
            RB(RH.next(RY));
          } catch (Rm) {
            Ro(Rm);
          }
        }
        function RF(RY) {
          try {
            RB(RH.throw(RY));
          } catch (Rm) {
            Ro(Rm);
          }
        }
        function RB(RY) {
          var Rm;
          if (RY.done) {
            RO(RY.value);
          } else {
            ((Rm = RY.value) instanceof Rh ? Rm : new Rh(function (RC) {
              RC(Rm);
            })).then(RA, RF);
          }
        }
        RB((RH = RH.apply(RR, Rj || [])).next());
      });
    };
    var R8 = this && this.__generator || function (RR, Rj) {
      var Rh;
      var RH;
      var RO;
      var Ro = {
        label: 0,
        sent: function () {
          if (RO[0] & 1) {
            throw RO[1];
          }
          return RO[1];
        },
        trys: [],
        ops: []
      };
      var RA = {
        next: RF(0),
        throw: RF(1),
        return: RF(2)
      };
      if (typeof Symbol == "function") {
        RA[Symbol.iterator] = function () {
          return this;
        };
      }
      return RA;
      function RF(RB) {
        return function (RY) {
          var Rm = [RB, RY];
          if (Rh) {
            throw new TypeError("Generator is already executing.");
          }
          while (Ro) {
            try {
              Rh = 1;
              if (RH && (RO = Rm[0] & 2 ? RH.return : Rm[0] ? RH.throw || ((RO = RH.return) && RO.call(RH), 0) : RH.next) && !(RO = RO.call(RH, Rm[1])).done) {
                return RO;
              }
              RH = 0;
              switch ((Rm = RO ? [Rm[0] & 2, RO.value] : Rm)[0]) {
                case 0:
                case 1:
                  RO = Rm;
                  break;
                case 4:
                  Ro.label++;
                  return {
                    value: Rm[1],
                    done: false
                  };
                case 5:
                  Ro.label++;
                  RH = Rm[1];
                  Rm = [0];
                  continue;
                case 7:
                  Rm = Ro.ops.pop();
                  Ro.trys.pop();
                  continue;
                default:
                  if (!(RO = (RO = Ro.trys).length > 0 && RO[RO.length - 1]) && (Rm[0] === 6 || Rm[0] === 2)) {
                    Ro = 0;
                    continue;
                  }
                  if (Rm[0] === 3 && (!RO || Rm[1] > RO[0] && Rm[1] < RO[3])) {
                    Ro.label = Rm[1];
                  } else if (Rm[0] === 6 && Ro.label < RO[1]) {
                    Ro.label = RO[1];
                    RO = Rm;
                  } else {
                    if (!RO || Ro.label >= RO[2]) {
                      if (RO[2]) {
                        Ro.ops.pop();
                      }
                      Ro.trys.pop();
                      continue;
                    }
                    Ro.label = RO[2];
                    Ro.ops.push(Rm);
                  }
              }
              Rm = Rj.call(RR, Ro);
            } catch (RC) {
              Rm = [6, RC];
              RH = 0;
            } finally {
              Rh = RO = 0;
            }
          }
          if (Rm[0] & 5) {
            throw Rm[1];
          }
          return {
            value: Rm[0] ? Rm[1] : undefined,
            done: true
          };
        };
      }
    };
    var R9 = {
      name: "debugger-checker",
      isOpen: function () {
        return R7(this, undefined, undefined, function () {
          var RR;
          return R8(this, function (Rj) {
            RR = Object(R6.c)();
            (function () {}).constructor("debugger")();
            return [2, Object(R6.c)() - RR > 100];
          });
        });
      },
      isEnable: function () {
        return R7(this, undefined, undefined, function () {
          return R8(this, function (RR) {
            return [2, true];
          });
        });
      }
    };
  }, function (R3, R4, R5) {
    'use strict';

    R5.d(R4, "a", function () {
      return RO;
    });
    var R6 = R5(1);
    var R7 = R5(2);
    var R8 = R5(0);
    var R9 = R5(4);
    var RR = this && this.__awaiter || function (Ro, RA, RF, RB) {
      return new (RF = RF || Promise)(function (RY, Rm) {
        function RC(RQ) {
          try {
            Rd(RB.next(RQ));
          } catch (Rg) {
            Rm(Rg);
          }
        }
        function Rn(RQ) {
          try {
            Rd(RB.throw(RQ));
          } catch (Rg) {
            Rm(Rg);
          }
        }
        function Rd(RQ) {
          var Rg;
          if (RQ.done) {
            RY(RQ.value);
          } else {
            ((Rg = RQ.value) instanceof RF ? Rg : new RF(function (Rp) {
              Rp(Rg);
            })).then(RC, Rn);
          }
        }
        Rd((RB = RB.apply(Ro, RA || [])).next());
      });
    };
    var Rj = this && this.__generator || function (Ro, RA) {
      var RF;
      var RB;
      var RY;
      var Rm = {
        label: 0,
        sent: function () {
          if (RY[0] & 1) {
            throw RY[1];
          }
          return RY[1];
        },
        trys: [],
        ops: []
      };
      var RC = {
        next: Rn(0),
        throw: Rn(1),
        return: Rn(2)
      };
      if (typeof Symbol == "function") {
        RC[Symbol.iterator] = function () {
          return this;
        };
      }
      return RC;
      function Rn(Rd) {
        return function (RQ) {
          var Rg = [Rd, RQ];
          if (RF) {
            throw new TypeError("Generator is already executing.");
          }
          while (Rm) {
            try {
              RF = 1;
              if (RB && (RY = Rg[0] & 2 ? RB.return : Rg[0] ? RB.throw || ((RY = RB.return) && RY.call(RB), 0) : RB.next) && !(RY = RY.call(RB, Rg[1])).done) {
                return RY;
              }
              RB = 0;
              switch ((Rg = RY ? [Rg[0] & 2, RY.value] : Rg)[0]) {
                case 0:
                case 1:
                  RY = Rg;
                  break;
                case 4:
                  Rm.label++;
                  return {
                    value: Rg[1],
                    done: false
                  };
                case 5:
                  Rm.label++;
                  RB = Rg[1];
                  Rg = [0];
                  continue;
                case 7:
                  Rg = Rm.ops.pop();
                  Rm.trys.pop();
                  continue;
                default:
                  if (!(RY = (RY = Rm.trys).length > 0 && RY[RY.length - 1]) && (Rg[0] === 6 || Rg[0] === 2)) {
                    Rm = 0;
                    continue;
                  }
                  if (Rg[0] === 3 && (!RY || Rg[1] > RY[0] && Rg[1] < RY[3])) {
                    Rm.label = Rg[1];
                  } else if (Rg[0] === 6 && Rm.label < RY[1]) {
                    Rm.label = RY[1];
                    RY = Rg;
                  } else {
                    if (!RY || Rm.label >= RY[2]) {
                      if (RY[2]) {
                        Rm.ops.pop();
                      }
                      Rm.trys.pop();
                      continue;
                    }
                    Rm.label = RY[2];
                    Rm.ops.push(Rg);
                  }
              }
              Rg = RA.call(Ro, Rm);
            } catch (Rp) {
              Rg = [6, Rp];
              RB = 0;
            } finally {
              RF = RY = 0;
            }
          }
          if (Rg[0] & 5) {
            throw Rg[1];
          }
          return {
            value: Rg[0] ? Rg[1] : undefined,
            done: true
          };
        };
      }
    };
    var Rh = new Date();
    var RH = 0;
    Rh.toString = function () {
      RH++;
      return "";
    };
    var RO = {
      name: "date-to-string",
      isOpen: function () {
        return RR(this, undefined, undefined, function () {
          return Rj(this, function (Ro) {
            RH = 0;
            Object(R7.b)(Rh);
            Object(R7.a)();
            return [2, RH === 2];
          });
        });
      },
      isEnable: function () {
        return RR(this, undefined, undefined, function () {
          return Rj(this, function (Ro) {
            return [2, Object(R8.b)({
              includes: [R6.a],
              excludes: [(R9.isIpad || R9.isIphone) && R6.a]
            })];
          });
        });
      }
    };
  }, function (R3, R4, R5) {
    'use strict';

    R5.d(R4, "a", function () {
      return RH;
    });
    var R6 = R5(1);
    var R7 = R5(2);
    var R8 = R5(0);
    var R9 = this && this.__awaiter || function (RO, Ro, RA, RF) {
      return new (RA = RA || Promise)(function (RB, RY) {
        function Rm(Rd) {
          try {
            Rn(RF.next(Rd));
          } catch (RQ) {
            RY(RQ);
          }
        }
        function RC(Rd) {
          try {
            Rn(RF.throw(Rd));
          } catch (RQ) {
            RY(RQ);
          }
        }
        function Rn(Rd) {
          var RQ;
          if (Rd.done) {
            RB(Rd.value);
          } else {
            ((RQ = Rd.value) instanceof RA ? RQ : new RA(function (Rg) {
              Rg(RQ);
            })).then(Rm, RC);
          }
        }
        Rn((RF = RF.apply(RO, Ro || [])).next());
      });
    };
    var RR = this && this.__generator || function (RO, Ro) {
      var RA;
      var RF;
      var RB;
      var RY = {
        label: 0,
        sent: function () {
          if (RB[0] & 1) {
            throw RB[1];
          }
          return RB[1];
        },
        trys: [],
        ops: []
      };
      var Rm = {
        next: RC(0),
        throw: RC(1),
        return: RC(2)
      };
      if (typeof Symbol == "function") {
        Rm[Symbol.iterator] = function () {
          return this;
        };
      }
      return Rm;
      function RC(Rn) {
        return function (Rd) {
          var RQ = [Rn, Rd];
          if (RA) {
            throw new TypeError("Generator is already executing.");
          }
          while (RY) {
            try {
              RA = 1;
              if (RF && (RB = RQ[0] & 2 ? RF.return : RQ[0] ? RF.throw || ((RB = RF.return) && RB.call(RF), 0) : RF.next) && !(RB = RB.call(RF, RQ[1])).done) {
                return RB;
              }
              RF = 0;
              switch ((RQ = RB ? [RQ[0] & 2, RB.value] : RQ)[0]) {
                case 0:
                case 1:
                  RB = RQ;
                  break;
                case 4:
                  RY.label++;
                  return {
                    value: RQ[1],
                    done: false
                  };
                case 5:
                  RY.label++;
                  RF = RQ[1];
                  RQ = [0];
                  continue;
                case 7:
                  RQ = RY.ops.pop();
                  RY.trys.pop();
                  continue;
                default:
                  if (!(RB = (RB = RY.trys).length > 0 && RB[RB.length - 1]) && (RQ[0] === 6 || RQ[0] === 2)) {
                    RY = 0;
                    continue;
                  }
                  if (RQ[0] === 3 && (!RB || RQ[1] > RB[0] && RQ[1] < RB[3])) {
                    RY.label = RQ[1];
                  } else if (RQ[0] === 6 && RY.label < RB[1]) {
                    RY.label = RB[1];
                    RB = RQ;
                  } else {
                    if (!RB || RY.label >= RB[2]) {
                      if (RB[2]) {
                        RY.ops.pop();
                      }
                      RY.trys.pop();
                      continue;
                    }
                    RY.label = RB[2];
                    RY.ops.push(RQ);
                  }
              }
              RQ = Ro.call(RO, RY);
            } catch (Rg) {
              RQ = [6, Rg];
              RF = 0;
            } finally {
              RA = RB = 0;
            }
          }
          if (RQ[0] & 5) {
            throw RQ[1];
          }
          return {
            value: RQ[0] ? RQ[1] : undefined,
            done: true
          };
        };
      }
    };
    var Rj = null;
    var Rh = 0;
    var RH = {
      name: "performance",
      isOpen: function () {
        return R9(this, undefined, undefined, function () {
          var RO;
          var Ro;
          return RR(this, function (RA) {
            if (Rj === null) {
              Rj = function () {
                var RB = function () {
                  var RC = {};
                  for (var Rn = 0; Rn < 500; Rn++) {
                    RC[`${Rn}`] = `${Rn}`;
                  }
                  return RC;
                }();
                var RY = [];
                for (var Rm = 0; Rm < 50; Rm++) {
                  RY.push(RB);
                }
                return RY;
              }();
            }
            RF = Object(R8.c)();
            Object(R7.c)(Rj);
            RO = Object(R8.c)() - RF;
            RF = Object(R8.c)();
            Object(R7.b)(Rj);
            Ro = Object(R8.c)() - RF;
            Rh = Math.max(Rh, Ro);
            Object(R7.a)();
            if (RO == 0 || Rh === 0) {
              return [2, false];
            } else {
              return [2, Rh * 10 < RO];
            }
            var RF;
          });
        });
      },
      isEnable: function () {
        return R9(this, undefined, undefined, function () {
          return RR(this, function (RO) {
            return [2, Object(R8.b)({
              includes: [R6.a],
              excludes: []
            })];
          });
        });
      }
    };
  }, function (R3, R4, R5) {
    'use strict';

    R5.d(R4, "a", function () {
      return R8;
    });
    var R6 = this && this.__awaiter || function (R9, RR, Rj, Rh) {
      return new (Rj = Rj || Promise)(function (RH, RO) {
        function Ro(RB) {
          try {
            RF(Rh.next(RB));
          } catch (RY) {
            RO(RY);
          }
        }
        function RA(RB) {
          try {
            RF(Rh.throw(RB));
          } catch (RY) {
            RO(RY);
          }
        }
        function RF(RB) {
          var RY;
          if (RB.done) {
            RH(RB.value);
          } else {
            ((RY = RB.value) instanceof Rj ? RY : new Rj(function (Rm) {
              Rm(RY);
            })).then(Ro, RA);
          }
        }
        RF((Rh = Rh.apply(R9, RR || [])).next());
      });
    };
    var R7 = this && this.__generator || function (R9, RR) {
      var Rj;
      var Rh;
      var RH;
      var RO = {
        label: 0,
        sent: function () {
          if (RH[0] & 1) {
            throw RH[1];
          }
          return RH[1];
        },
        trys: [],
        ops: []
      };
      var Ro = {
        next: RA(0),
        throw: RA(1),
        return: RA(2)
      };
      if (typeof Symbol == "function") {
        Ro[Symbol.iterator] = function () {
          return this;
        };
      }
      return Ro;
      function RA(RF) {
        return function (RB) {
          var RY = [RF, RB];
          if (Rj) {
            throw new TypeError("Generator is already executing.");
          }
          while (RO) {
            try {
              Rj = 1;
              if (Rh && (RH = RY[0] & 2 ? Rh.return : RY[0] ? Rh.throw || ((RH = Rh.return) && RH.call(Rh), 0) : Rh.next) && !(RH = RH.call(Rh, RY[1])).done) {
                return RH;
              }
              Rh = 0;
              switch ((RY = RH ? [RY[0] & 2, RH.value] : RY)[0]) {
                case 0:
                case 1:
                  RH = RY;
                  break;
                case 4:
                  RO.label++;
                  return {
                    value: RY[1],
                    done: false
                  };
                case 5:
                  RO.label++;
                  Rh = RY[1];
                  RY = [0];
                  continue;
                case 7:
                  RY = RO.ops.pop();
                  RO.trys.pop();
                  continue;
                default:
                  if (!(RH = (RH = RO.trys).length > 0 && RH[RH.length - 1]) && (RY[0] === 6 || RY[0] === 2)) {
                    RO = 0;
                    continue;
                  }
                  if (RY[0] === 3 && (!RH || RY[1] > RH[0] && RY[1] < RH[3])) {
                    RO.label = RY[1];
                  } else if (RY[0] === 6 && RO.label < RH[1]) {
                    RO.label = RH[1];
                    RH = RY;
                  } else {
                    if (!RH || RO.label >= RH[2]) {
                      if (RH[2]) {
                        RO.ops.pop();
                      }
                      RO.trys.pop();
                      continue;
                    }
                    RO.label = RH[2];
                    RO.ops.push(RY);
                  }
              }
              RY = RR.call(R9, RO);
            } catch (Rm) {
              RY = [6, Rm];
              Rh = 0;
            } finally {
              Rj = RH = 0;
            }
          }
          if (RY[0] & 5) {
            throw RY[1];
          }
          return {
            value: RY[0] ? RY[1] : undefined,
            done: true
          };
        };
      }
    };
    var R8 = {
      name: "eruda",
      isOpen: function () {
        var R9;
        return R6(this, undefined, undefined, function () {
          return R7(this, function (RR) {
            if (typeof eruda != "undefined") {
              return [2, ((R9 = eruda?._devTools) == null ? undefined : R9._isShow) === true];
            } else {
              return [2, false];
            }
          });
        });
      },
      isEnable: function () {
        return R6(this, undefined, undefined, function () {
          return R7(this, function (R9) {
            return [2, true];
          });
        });
      }
    };
  }, function (R3, R4, R5) {
    'use strict';

    R5.d(R4, "a", function () {
      return R6;
    });
    var R4 = R5(3);
    var R6 = /mobile/i.test(R4.b);
  }];
  R2 = {};
  R0.m = R1;
  R0.c = R2;
  R0.d = function (R3, R4, R5) {
    if (!R0.o(R3, R4)) {
      Object.defineProperty(R3, R4, {
        configurable: false,
        enumerable: true,
        get: R5
      });
    }
  };
  R0.n = function (R3) {
    var R4 = R3 && R3.__esModule ? function () {
      return R3.default;
    } : function () {
      return R3;
    };
    R0.d(R4, "a", R4);
    return R4;
  };
  R0.o = function (R3, R4) {
    return Object.prototype.hasOwnProperty.call(R3, R4);
  };
  R0.p = "";
  return R0(R0.s = 4);
  function R0(R3) {
    var R4;
    return (R2[R3] || (R4 = R2[R3] = {
      i: R3,
      l: false,
      exports: {}
    }, R1[R3].call(R4.exports, R4, R4.exports, R0), R4.l = true, R4)).exports;
  }
  var R1;
  var R2;
});
(function (R0) {
  if ((typeof exports != "object" || typeof module == "undefined") && typeof define == "function" && define.amd) {
    define(R0);
  } else {
    R0();
  }
})(function () {
  'use strict';

  function R0(Rj) {
    var Rh = this.constructor;
    return this.then(function (RH) {
      return Rh.resolve(Rj()).then(function () {
        return RH;
      });
    }, function (RH) {
      return Rh.resolve(Rj()).then(function () {
        return Rh.reject(RH);
      });
    });
  }
  var R1 = setTimeout;
  function R2() {}
  function R3(Rj) {
    if (!(this instanceof R3)) {
      throw new TypeError("Promises must be constructed via new");
    }
    if (typeof Rj != "function") {
      throw new TypeError("not a function");
    }
    this._state = 0;
    this._handled = false;
    this._value = undefined;
    this._deferreds = [];
    R9(Rj, this);
  }
  function R4(Rj, Rh) {
    while (Rj._state === 3) {
      Rj = Rj._value;
    }
    if (Rj._state === 0) {
      Rj._deferreds.push(Rh);
    } else {
      Rj._handled = true;
      R3._immediateFn(function () {
        var RH;
        var RO = Rj._state === 1 ? Rh.onFulfilled : Rh.onRejected;
        if (RO === null) {
          (Rj._state === 1 ? R5 : R6)(Rh.promise, Rj._value);
        } else {
          try {
            RH = RO(Rj._value);
          } catch (Ro) {
            R6(Rh.promise, Ro);
            return;
          }
          R5(Rh.promise, RH);
        }
      });
    }
  }
  function R5(Rj, Rh) {
    try {
      if (Rh === Rj) {
        throw new TypeError("A promise cannot be resolved with itself.");
      }
      if (Rh && (typeof Rh == "object" || typeof Rh == "function")) {
        var RH = Rh.then;
        if (Rh instanceof R3) {
          Rj._state = 3;
          Rj._value = Rh;
          R7(Rj);
          return;
        }
        if (typeof RH == "function") {
          R9((RO = RH, Ro = Rh, function () {
            RO.apply(Ro, arguments);
          }), Rj);
          return;
        }
      }
      Rj._state = 1;
      Rj._value = Rh;
      R7(Rj);
    } catch (RA) {
      R6(Rj, RA);
    }
    var RO;
    var Ro;
  }
  function R6(Rj, Rh) {
    Rj._state = 2;
    Rj._value = Rh;
    R7(Rj);
  }
  function R7(Rj) {
    if (Rj._state === 2 && Rj._deferreds.length === 0) {
      R3._immediateFn(function () {
        if (!Rj._handled) {
          R3._unhandledRejectionFn(Rj._value);
        }
      });
    }
    for (var Rh = 0, RH = Rj._deferreds.length; Rh < RH; Rh++) {
      R4(Rj, Rj._deferreds[Rh]);
    }
    Rj._deferreds = null;
  }
  function R8(Rj, Rh, RH) {
    this.onFulfilled = typeof Rj == "function" ? Rj : null;
    this.onRejected = typeof Rh == "function" ? Rh : null;
    this.promise = RH;
  }
  function R9(Rj, Rh) {
    var RH = false;
    try {
      Rj(function (RO) {
        if (!RH) {
          RH = true;
          R5(Rh, RO);
        }
      }, function (RO) {
        if (!RH) {
          RH = true;
          R6(Rh, RO);
        }
      });
    } catch (RO) {
      if (!RH) {
        RH = true;
        R6(Rh, RO);
      }
    }
  }
  R3.prototype.catch = function (Rj) {
    return this.then(null, Rj);
  };
  R3.prototype.then = function (Rj, Rh) {
    var RH = new this.constructor(R2);
    R4(this, new R8(Rj, Rh, RH));
    return RH;
  };
  R3.prototype.finally = R0;
  R3.all = function (Rj) {
    return new R3(function (Rh, RH) {
      if (!Rj || Rj.length === undefined) {
        throw new TypeError("Promise.all accepts an array");
      }
      var RO = Array.prototype.slice.call(Rj);
      if (RO.length === 0) {
        return Rh([]);
      }
      var Ro = RO.length;
      for (var RA = 0; RA < RO.length; RA++) {
        (function RF(RB, RY) {
          try {
            if (RY && (typeof RY == "object" || typeof RY == "function")) {
              var Rm = RY.then;
              if (typeof Rm == "function") {
                Rm.call(RY, function (RC) {
                  RF(RB, RC);
                }, RH);
                return;
              }
            }
            RO[RB] = RY;
            if (--Ro == 0) {
              Rh(RO);
            }
          } catch (RC) {
            RH(RC);
          }
        })(RA, RO[RA]);
      }
    });
  };
  R3.resolve = function (Rj) {
    if (Rj && typeof Rj == "object" && Rj.constructor === R3) {
      return Rj;
    } else {
      return new R3(function (Rh) {
        Rh(Rj);
      });
    }
  };
  R3.reject = function (Rj) {
    return new R3(function (Rh, RH) {
      RH(Rj);
    });
  };
  R3.race = function (Rj) {
    return new R3(function (Rh, RH) {
      for (var RO = 0, Ro = Rj.length; RO < Ro; RO++) {
        Rj[RO].then(Rh, RH);
      }
    });
  };
  R3._immediateFn = typeof setImmediate == "function" ? function (Rj) {
    setImmediate(Rj);
  } : function (Rj) {
    R1(Rj, 0);
  };
  R3._unhandledRejectionFn = function (Rj) {
    if (typeof console != "undefined" && console) {
      console.warn("Possible Unhandled Promise Rejection:", Rj);
    }
  };
  var RR = function () {
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
  if ("Promise" in RR) {
    RR.Promise.prototype.finally ||= R0;
  } else {
    RR.Promise = R3;
  }
});
var o = new MobileDetect(window.navigator.userAgent);

(function (R0, R1) {
  if (typeof exports == "object") {
    module.exports = exports = R1();
  } else if (typeof define == "function" && define.amd) {
    define([], R1);
  } else {
    R0.CryptoJS = R1();
  }
})(this, function () {
  var R0;
  var R1;
  var R2;
  var R3;
  var R4;
  var R5;
  var R6;
  var R7;
  var R8;
  var R9;
  var RR;
  var Rj;
  var Rh;
  var RH;
  var RO;
  var Ro;
  var RA;
  var RF;
  var RB;
  var RY;
  var Rm;
  var RC;
  var Rn;
  var Rd;
  var RQ;
  var Rg;
  var Rp;
  var RN;
  var RG;
  var Rc;
  var RV;
  var Rk;
  var Rx;
  var RM;
  var RI;
  var RX;
  var Ri;
  var Rf;
  var RZ;
  var Rt;
  var Ry;
  var Rb;
  var RT;
  var Rq;
  var Rv = function (hH) {
    var hO;
    if (typeof window != "undefined" && window.crypto) {
      hO = window.crypto;
    }
    if (typeof self != "undefined" && self.crypto) {
      hO = self.crypto;
    }
    if (!(hO = !(hO = !(hO = typeof globalThis != "undefined" && globalThis.crypto ? globalThis.crypto : hO) && typeof window != "undefined" && window.msCrypto ? window.msCrypto : hO) && typeof global != "undefined" && global.crypto ? global.crypto : hO) && typeof require == "function") {
      try {
        hO = require("crypto");
      } catch (hN) {}
    }
    var ho = Object.create || function (hG) {
      hA.prototype = hG;
      hG = new hA();
      hA.prototype = null;
      return hG;
    };
    function hA() {}
    var hF = {};
    var hB = hF.lib = {};
    var hY = hB.Base = {
      extend: function (hG) {
        var hc = ho(this);
        if (hG) {
          hc.mixIn(hG);
        }
        if (!hc.hasOwnProperty("init") || this.init === hc.init) {
          hc.init = function () {
            hc.$super.init.apply(this, arguments);
          };
        }
        (hc.init.prototype = hc).$super = this;
        return hc;
      },
      create: function () {
        var hG = this.extend();
        hG.init.apply(hG, arguments);
        return hG;
      },
      init: function () {},
      mixIn: function (hG) {
        for (var hc in hG) {
          if (hG.hasOwnProperty(hc)) {
            this[hc] = hG[hc];
          }
        }
        if (hG.hasOwnProperty("toString")) {
          this.toString = hG.toString;
        }
      },
      clone: function () {
        return this.init.prototype.extend(this);
      }
    };
    var hm = hB.WordArray = hY.extend({
      init: function (hG, hc) {
        hG = this.words = hG || [];
        this.sigBytes = hc ?? hG.length * 4;
      },
      toString: function (hG) {
        return (hG || hn).stringify(this);
      },
      concat: function (hG) {
        var hc = this.words;
        var hV = hG.words;
        var hk = this.sigBytes;
        var hx = hG.sigBytes;
        this.clamp();
        if (hk % 4) {
          for (var hM = 0; hM < hx; hM++) {
            var hI = hV[hM >>> 2] >>> 24 - hM % 4 * 8 & 255;
            hc[hk + hM >>> 2] |= hI << 24 - (hk + hM) % 4 * 8;
          }
        } else {
          for (var hX = 0; hX < hx; hX += 4) {
            hc[hk + hX >>> 2] = hV[hX >>> 2];
          }
        }
        this.sigBytes += hx;
        return this;
      },
      clamp: function () {
        var hG = this.words;
        var hc = this.sigBytes;
        hG[hc >>> 2] &= 4294967295 << 32 - hc % 4 * 8;
        hG.length = hH.ceil(hc / 4);
      },
      clone: function () {
        var hG = hY.clone.call(this);
        hG.words = this.words.slice(0);
        return hG;
      },
      random: function (hG) {
        var hc = [];
        for (var hV = 0; hV < hG; hV += 4) {
          hc.push(function () {
            if (hO) {
              if (typeof hO.getRandomValues == "function") {
                try {
                  return hO.getRandomValues(new Uint32Array(1))[0];
                } catch (hk) {}
              }
              if (typeof hO.randomBytes == "function") {
                try {
                  return hO.randomBytes(4).readInt32LE();
                } catch (hx) {}
              }
            }
            throw new Error("Native crypto module could not be used to get secure random number.");
          }());
        }
        return new hm.init(hc, hG);
      }
    });
    var hC = hF.enc = {};
    var hn = hC.Hex = {
      stringify: function (hG) {
        var hc = hG.words;
        for (var hV = hG.sigBytes, hk = [], hx = 0; hx < hV; hx++) {
          var hM = hc[hx >>> 2] >>> 24 - hx % 4 * 8 & 255;
          hk.push((hM >>> 4).toString(16));
          hk.push((hM & 15).toString(16));
        }
        return hk.join("");
      },
      parse: function (hG) {
        for (var hc = hG.length, hV = [], hk = 0; hk < hc; hk += 2) {
          hV[hk >>> 3] |= parseInt(hG.substr(hk, 2), 16) << 24 - hk % 8 * 4;
        }
        return new hm.init(hV, hc / 2);
      }
    };
    var hd = hC.Latin1 = {
      stringify: function (hG) {
        var hc = hG.words;
        for (var hV = hG.sigBytes, hk = [], hx = 0; hx < hV; hx++) {
          var hM = hc[hx >>> 2] >>> 24 - hx % 4 * 8 & 255;
          hk.push(String.fromCharCode(hM));
        }
        return hk.join("");
      },
      parse: function (hG) {
        for (var hc = hG.length, hV = [], hk = 0; hk < hc; hk++) {
          hV[hk >>> 2] |= (hG.charCodeAt(hk) & 255) << 24 - hk % 4 * 8;
        }
        return new hm.init(hV, hc);
      }
    };
    var hQ = hC.Utf8 = {
      stringify: function (hG) {
        try {
          return decodeURIComponent(escape(hd.stringify(hG)));
        } catch (hc) {
          throw new Error("Malformed UTF-8 data");
        }
      },
      parse: function (hG) {
        return hd.parse(unescape(encodeURIComponent(hG)));
      }
    };
    var hg = hB.BufferedBlockAlgorithm = hY.extend({
      reset: function () {
        this._data = new hm.init();
        this._nDataBytes = 0;
      },
      _append: function (hG) {
        if (typeof hG == "string") {
          hG = hQ.parse(hG);
        }
        this._data.concat(hG);
        this._nDataBytes += hG.sigBytes;
      },
      _process: function (hG) {
        var hc;
        var hV = this._data;
        var hk = hV.words;
        var hx = hV.sigBytes;
        var hM = this.blockSize;
        var hI = hx / (hM * 4);
        var hX = (hI = hG ? hH.ceil(hI) : hH.max((hI | 0) - this._minBufferSize, 0)) * hM;
        var hG = hH.min(hX * 4, hx);
        if (hX) {
          for (var hi = 0; hi < hX; hi += hM) {
            this._doProcessBlock(hk, hi);
          }
          hc = hk.splice(0, hX);
          hV.sigBytes -= hG;
        }
        return new hm.init(hc, hG);
      },
      clone: function () {
        var hG = hY.clone.call(this);
        hG._data = this._data.clone();
        return hG;
      },
      _minBufferSize: 0
    });
    hB.Hasher = hg.extend({
      cfg: hY.extend(),
      init: function (hG) {
        this.cfg = this.cfg.extend(hG);
        this.reset();
      },
      reset: function () {
        hg.reset.call(this);
        this._doReset();
      },
      update: function (hG) {
        this._append(hG);
        this._process();
        return this;
      },
      finalize: function (hG) {
        if (hG) {
          this._append(hG);
        }
        return this._doFinalize();
      },
      blockSize: 16,
      _createHelper: function (hG) {
        return function (hc, hV) {
          return new hG.init(hV).finalize(hc);
        };
      },
      _createHmacHelper: function (hG) {
        return function (hc, hV) {
          return new hp.HMAC.init(hG, hV).finalize(hc);
        };
      }
    });
    var hp = hF.algo = {};
    return hF;
  }(Math);
  RE = (RS = Rv).lib;
  R0 = RE.Base;
  R1 = RE.WordArray;
  (RE = RS.x64 = {}).Word = R0.extend({
    init: function (hH, hO) {
      this.high = hH;
      this.low = hO;
    }
  });
  RE.WordArray = R0.extend({
    init: function (hH, hO) {
      hH = this.words = hH || [];
      this.sigBytes = hO ?? hH.length * 8;
    },
    toX32: function () {
      var hH = this.words;
      for (var hO = hH.length, ho = [], hA = 0; hA < hO; hA++) {
        var hF = hH[hA];
        ho.push(hF.high);
        ho.push(hF.low);
      }
      return R1.create(ho, this.sigBytes);
    },
    clone: function () {
      var hH = R0.clone.call(this);
      var hO = hH.words = this.words.slice(0);
      for (var ho = hO.length, hA = 0; hA < ho; hA++) {
        hO[hA] = hO[hA].clone();
      }
      return hH;
    }
  });
  if (typeof ArrayBuffer == "function") {
    RS = Rv.lib.WordArray;
    R2 = RS.init;
    (RS.init = function (hH) {
      if ((hH = (hH = hH instanceof ArrayBuffer ? new Uint8Array(hH) : hH) instanceof Int8Array || typeof Uint8ClampedArray != "undefined" && hH instanceof Uint8ClampedArray || hH instanceof Int16Array || hH instanceof Uint16Array || hH instanceof Int32Array || hH instanceof Uint32Array || hH instanceof Float32Array || hH instanceof Float64Array ? new Uint8Array(hH.buffer, hH.byteOffset, hH.byteLength) : hH) instanceof Uint8Array) {
        for (var hO = hH.byteLength, ho = [], hA = 0; hA < hO; hA++) {
          ho[hA >>> 2] |= hH[hA] << 24 - hA % 4 * 8;
        }
        R2.call(this, ho, hO);
      } else {
        R2.apply(this, arguments);
      }
    }).prototype = RS;
  }
  var RE = Rv;
  var Ru = RE.lib.WordArray;
  function Ra(hH) {
    return hH << 8 & 4278255360 | hH >>> 8 & 16711935;
  }
  (RE = RE.enc).Utf16 = RE.Utf16BE = {
    stringify: function (hH) {
      var hO = hH.words;
      for (var ho = hH.sigBytes, hA = [], hF = 0; hF < ho; hF += 2) {
        var hB = hO[hF >>> 2] >>> 16 - hF % 4 * 8 & 65535;
        hA.push(String.fromCharCode(hB));
      }
      return hA.join("");
    },
    parse: function (hH) {
      for (var hO = hH.length, ho = [], hA = 0; hA < hO; hA++) {
        ho[hA >>> 1] |= hH.charCodeAt(hA) << 16 - hA % 2 * 16;
      }
      return Ru.create(ho, hO * 2);
    }
  };
  RE.Utf16LE = {
    stringify: function (hH) {
      var hO = hH.words;
      for (var ho = hH.sigBytes, hA = [], hF = 0; hF < ho; hF += 2) {
        var hB = Ra(hO[hF >>> 2] >>> 16 - hF % 4 * 8 & 65535);
        hA.push(String.fromCharCode(hB));
      }
      return hA.join("");
    },
    parse: function (hH) {
      for (var hO = hH.length, ho = [], hA = 0; hA < hO; hA++) {
        ho[hA >>> 1] |= Ra(hH.charCodeAt(hA) << 16 - hA % 2 * 16);
      }
      return Ru.create(ho, hO * 2);
    }
  };
  R3 = (RS = Rv).lib.WordArray;
  RS.enc.Base64 = {
    stringify: function (hH) {
      var hO = hH.words;
      for (var ho = hH.sigBytes, hA = this._map, hF = (hH.clamp(), []), hB = 0; hB < ho; hB += 3) {
        var hY = (hO[hB >>> 2] >>> 24 - hB % 4 * 8 & 255) << 16 | (hO[hB + 1 >>> 2] >>> 24 - (hB + 1) % 4 * 8 & 255) << 8 | hO[hB + 2 >>> 2] >>> 24 - (hB + 2) % 4 * 8 & 255;
        for (var hm = 0; hm < 4 && hB + hm * 0.75 < ho; hm++) {
          hF.push(hA.charAt(hY >>> (3 - hm) * 6 & 63));
        }
      }
      var hC = hA.charAt(64);
      if (hC) {
        while (hF.length % 4) {
          hF.push(hC);
        }
      }
      return hF.join("");
    },
    parse: function (hH) {
      var hO = hH.length;
      var ho = this._map;
      if (!(hA = this._reverseMap)) {
        var hA = this._reverseMap = [];
        for (var hF = 0; hF < ho.length; hF++) {
          hA[ho.charCodeAt(hF)] = hF;
        }
      }
      var hB;
      var hY;
      var hm = ho.charAt(64);
      if (hm && (hm = hH.indexOf(hm)) !== -1) {
        hO = hm;
      }
      var hC = hH;
      for (var hn = hO, hd = hA, hQ = [], hg = 0, hp = 0; hp < hn; hp++) {
        if (hp % 4) {
          hB = hd[hC.charCodeAt(hp - 1)] << hp % 4 * 2;
          hY = hd[hC.charCodeAt(hp)] >>> 6 - hp % 4 * 2;
          hQ[hg >>> 2] |= (hB | hY) << 24 - hg % 4 * 8;
          hg++;
        }
      }
      return R3.create(hQ, hg);
    },
    _map: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="
  };
  R4 = (RE = Rv).lib.WordArray;
  RE.enc.Base64url = {
    stringify: function (hH, hO = true) {
      var ho = hH.words;
      for (var hA = hH.sigBytes, hF = hO ? this._safe_map : this._map, hB = (hH.clamp(), []), hY = 0; hY < hA; hY += 3) {
        var hm = (ho[hY >>> 2] >>> 24 - hY % 4 * 8 & 255) << 16 | (ho[hY + 1 >>> 2] >>> 24 - (hY + 1) % 4 * 8 & 255) << 8 | ho[hY + 2 >>> 2] >>> 24 - (hY + 2) % 4 * 8 & 255;
        for (var hC = 0; hC < 4 && hY + hC * 0.75 < hA; hC++) {
          hB.push(hF.charAt(hm >>> (3 - hC) * 6 & 63));
        }
      }
      var hn = hF.charAt(64);
      if (hn) {
        while (hB.length % 4) {
          hB.push(hn);
        }
      }
      return hB.join("");
    },
    parse: function (hH, hO = true) {
      var ho = hH.length;
      var hA = hO ? this._safe_map : this._map;
      if (!(hF = this._reverseMap)) {
        var hF = this._reverseMap = [];
        for (var hB = 0; hB < hA.length; hB++) {
          hF[hA.charCodeAt(hB)] = hB;
        }
      }
      var hY;
      var hm;
      var hO = hA.charAt(64);
      if (hO && (hO = hH.indexOf(hO)) !== -1) {
        ho = hO;
      }
      var hC = hH;
      for (var hn = ho, hd = hF, hQ = [], hg = 0, hp = 0; hp < hn; hp++) {
        if (hp % 4) {
          hY = hd[hC.charCodeAt(hp - 1)] << hp % 4 * 2;
          hm = hd[hC.charCodeAt(hp)] >>> 6 - hp % 4 * 2;
          hQ[hg >>> 2] |= (hY | hm) << 24 - hg % 4 * 8;
          hg++;
        }
      }
      return R4.create(hQ, hg);
    },
    _map: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
    _safe_map: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_"
  };
  var RP = Math;
  var RS = Rv;
  var RJ = (RE = RS.lib).WordArray;
  var Rw = RE.Hasher;
  var RE = RS.algo;
  var RK = [];
  for (var RD = 0; RD < 64; RD++) {
    RK[RD] = RP.abs(RP.sin(RD + 1)) * 4294967296 | 0;
  }
  function RU(hH, hO, ho, hA, hF, hB, hY) {
    hH = hH + (hO & ho | ~hO & hA) + hF + hY;
    return (hH << hB | hH >>> 32 - hB) + hO;
  }
  function RW(hH, hO, ho, hA, hF, hB, hY) {
    hH = hH + (hO & hA | ho & ~hA) + hF + hY;
    return (hH << hB | hH >>> 32 - hB) + hO;
  }
  function RL(hH, hO, ho, hA, hF, hB, hY) {
    hH = hH + (hO ^ ho ^ hA) + hF + hY;
    return (hH << hB | hH >>> 32 - hB) + hO;
  }
  function Rz(hH, hO, ho, hA, hF, hB, hY) {
    hH = hH + (ho ^ (hO | ~hA)) + hF + hY;
    return (hH << hB | hH >>> 32 - hB) + hO;
  }
  RE = RE.MD5 = Rw.extend({
    _doReset: function () {
      this._hash = new RJ.init([1732584193, 4023233417, 2562383102, 271733878]);
    },
    _doProcessBlock: function (hH, hO) {
      for (var ho = 0; ho < 16; ho++) {
        var hA = hO + ho;
        var hF = hH[hA];
        hH[hA] = (hF << 8 | hF >>> 24) & 16711935 | (hF << 24 | hF >>> 8) & 4278255360;
      }
      var hB = this._hash.words;
      var hY = hH[hO + 0];
      var hm = hH[hO + 1];
      var hC = hH[hO + 2];
      var hn = hH[hO + 3];
      var hd = hH[hO + 4];
      var hQ = hH[hO + 5];
      var hg = hH[hO + 6];
      var hp = hH[hO + 7];
      var hN = hH[hO + 8];
      var hG = hH[hO + 9];
      var hc = hH[hO + 10];
      var hV = hH[hO + 11];
      var hk = hH[hO + 12];
      var hx = hH[hO + 13];
      var hM = hH[hO + 14];
      var hI = hH[hO + 15];
      var hX = RU(hB[0], hZ = hB[1], hf = hB[2], hi = hB[3], hY, 7, RK[0]);
      var hi = RU(hi, hX, hZ, hf, hm, 12, RK[1]);
      var hf = RU(hf, hi, hX, hZ, hC, 17, RK[2]);
      var hZ = RU(hZ, hf, hi, hX, hn, 22, RK[3]);
      hX = RU(hX, hZ, hf, hi, hd, 7, RK[4]);
      hi = RU(hi, hX, hZ, hf, hQ, 12, RK[5]);
      hf = RU(hf, hi, hX, hZ, hg, 17, RK[6]);
      hZ = RU(hZ, hf, hi, hX, hp, 22, RK[7]);
      hX = RU(hX, hZ, hf, hi, hN, 7, RK[8]);
      hi = RU(hi, hX, hZ, hf, hG, 12, RK[9]);
      hf = RU(hf, hi, hX, hZ, hc, 17, RK[10]);
      hZ = RU(hZ, hf, hi, hX, hV, 22, RK[11]);
      hX = RU(hX, hZ, hf, hi, hk, 7, RK[12]);
      hi = RU(hi, hX, hZ, hf, hx, 12, RK[13]);
      hf = RU(hf, hi, hX, hZ, hM, 17, RK[14]);
      hX = RW(hX, hZ = RU(hZ, hf, hi, hX, hI, 22, RK[15]), hf, hi, hm, 5, RK[16]);
      hi = RW(hi, hX, hZ, hf, hg, 9, RK[17]);
      hf = RW(hf, hi, hX, hZ, hV, 14, RK[18]);
      hZ = RW(hZ, hf, hi, hX, hY, 20, RK[19]);
      hX = RW(hX, hZ, hf, hi, hQ, 5, RK[20]);
      hi = RW(hi, hX, hZ, hf, hc, 9, RK[21]);
      hf = RW(hf, hi, hX, hZ, hI, 14, RK[22]);
      hZ = RW(hZ, hf, hi, hX, hd, 20, RK[23]);
      hX = RW(hX, hZ, hf, hi, hG, 5, RK[24]);
      hi = RW(hi, hX, hZ, hf, hM, 9, RK[25]);
      hf = RW(hf, hi, hX, hZ, hn, 14, RK[26]);
      hZ = RW(hZ, hf, hi, hX, hN, 20, RK[27]);
      hX = RW(hX, hZ, hf, hi, hx, 5, RK[28]);
      hi = RW(hi, hX, hZ, hf, hC, 9, RK[29]);
      hf = RW(hf, hi, hX, hZ, hp, 14, RK[30]);
      hX = RL(hX, hZ = RW(hZ, hf, hi, hX, hk, 20, RK[31]), hf, hi, hQ, 4, RK[32]);
      hi = RL(hi, hX, hZ, hf, hN, 11, RK[33]);
      hf = RL(hf, hi, hX, hZ, hV, 16, RK[34]);
      hZ = RL(hZ, hf, hi, hX, hM, 23, RK[35]);
      hX = RL(hX, hZ, hf, hi, hm, 4, RK[36]);
      hi = RL(hi, hX, hZ, hf, hd, 11, RK[37]);
      hf = RL(hf, hi, hX, hZ, hp, 16, RK[38]);
      hZ = RL(hZ, hf, hi, hX, hc, 23, RK[39]);
      hX = RL(hX, hZ, hf, hi, hx, 4, RK[40]);
      hi = RL(hi, hX, hZ, hf, hY, 11, RK[41]);
      hf = RL(hf, hi, hX, hZ, hn, 16, RK[42]);
      hZ = RL(hZ, hf, hi, hX, hg, 23, RK[43]);
      hX = RL(hX, hZ, hf, hi, hG, 4, RK[44]);
      hi = RL(hi, hX, hZ, hf, hk, 11, RK[45]);
      hf = RL(hf, hi, hX, hZ, hI, 16, RK[46]);
      hX = Rz(hX, hZ = RL(hZ, hf, hi, hX, hC, 23, RK[47]), hf, hi, hY, 6, RK[48]);
      hi = Rz(hi, hX, hZ, hf, hp, 10, RK[49]);
      hf = Rz(hf, hi, hX, hZ, hM, 15, RK[50]);
      hZ = Rz(hZ, hf, hi, hX, hQ, 21, RK[51]);
      hX = Rz(hX, hZ, hf, hi, hk, 6, RK[52]);
      hi = Rz(hi, hX, hZ, hf, hn, 10, RK[53]);
      hf = Rz(hf, hi, hX, hZ, hc, 15, RK[54]);
      hZ = Rz(hZ, hf, hi, hX, hm, 21, RK[55]);
      hX = Rz(hX, hZ, hf, hi, hN, 6, RK[56]);
      hi = Rz(hi, hX, hZ, hf, hI, 10, RK[57]);
      hf = Rz(hf, hi, hX, hZ, hg, 15, RK[58]);
      hZ = Rz(hZ, hf, hi, hX, hx, 21, RK[59]);
      hX = Rz(hX, hZ, hf, hi, hd, 6, RK[60]);
      hi = Rz(hi, hX, hZ, hf, hV, 10, RK[61]);
      hf = Rz(hf, hi, hX, hZ, hC, 15, RK[62]);
      hZ = Rz(hZ, hf, hi, hX, hG, 21, RK[63]);
      hB[0] = hB[0] + hX | 0;
      hB[1] = hB[1] + hZ | 0;
      hB[2] = hB[2] + hf | 0;
      hB[3] = hB[3] + hi | 0;
    },
    _doFinalize: function () {
      var hH = this._data;
      var hO = hH.words;
      var ho = this._nDataBytes * 8;
      var hA = hH.sigBytes * 8;
      hO[hA >>> 5] |= 128 << 24 - hA % 32;
      var hF = RP.floor(ho / 4294967296);
      hO[15 + (64 + hA >>> 9 << 4)] = (hF << 8 | hF >>> 24) & 16711935 | (hF << 24 | hF >>> 8) & 4278255360;
      hO[14 + (64 + hA >>> 9 << 4)] = (ho << 8 | ho >>> 24) & 16711935 | (ho << 24 | ho >>> 8) & 4278255360;
      hH.sigBytes = (hO.length + 1) * 4;
      this._process();
      var hF = this._hash;
      var hB = hF.words;
      for (var hY = 0; hY < 4; hY++) {
        var hm = hB[hY];
        hB[hY] = (hm << 8 | hm >>> 24) & 16711935 | (hm << 24 | hm >>> 8) & 4278255360;
      }
      return hF;
    },
    clone: function () {
      var hH = Rw.clone.call(this);
      hH._hash = this._hash.clone();
      return hH;
    }
  });
  RS.MD5 = Rw._createHelper(RE);
  RS.HmacMD5 = Rw._createHmacHelper(RE);
  RE = (RS = Rv).lib;
  R5 = RE.WordArray;
  R6 = RE.Hasher;
  RE = RS.algo;
  R7 = [];
  RE = RE.SHA1 = R6.extend({
    _doReset: function () {
      this._hash = new R5.init([1732584193, 4023233417, 2562383102, 271733878, 3285377520]);
    },
    _doProcessBlock: function (hH, hO) {
      var ho = this._hash.words;
      var hA = ho[0];
      var hF = ho[1];
      var hB = ho[2];
      var hY = ho[3];
      var hm = ho[4];
      for (var hC = 0; hC < 80; hC++) {
        R7[hC] = hC < 16 ? hH[hO + hC] | 0 : (hn = R7[hC - 3] ^ R7[hC - 8] ^ R7[hC - 14] ^ R7[hC - 16]) << 1 | hn >>> 31;
        var hn = (hA << 5 | hA >>> 27) + hm + R7[hC];
        hn += hC < 20 ? 1518500249 + (hF & hB | ~hF & hY) : hC < 40 ? 1859775393 + (hF ^ hB ^ hY) : hC < 60 ? (hF & hB | hF & hY | hB & hY) - 1894007588 : (hF ^ hB ^ hY) - 899497514;
        hm = hY;
        hY = hB;
        hB = hF << 30 | hF >>> 2;
        hF = hA;
        hA = hn;
      }
      ho[0] = ho[0] + hA | 0;
      ho[1] = ho[1] + hF | 0;
      ho[2] = ho[2] + hB | 0;
      ho[3] = ho[3] + hY | 0;
      ho[4] = ho[4] + hm | 0;
    },
    _doFinalize: function () {
      var hH = this._data;
      var hO = hH.words;
      var ho = this._nDataBytes * 8;
      var hA = hH.sigBytes * 8;
      hO[hA >>> 5] |= 128 << 24 - hA % 32;
      hO[14 + (64 + hA >>> 9 << 4)] = Math.floor(ho / 4294967296);
      hO[15 + (64 + hA >>> 9 << 4)] = ho;
      hH.sigBytes = hO.length * 4;
      this._process();
      return this._hash;
    },
    clone: function () {
      var hH = R6.clone.call(this);
      hH._hash = this._hash.clone();
      return hH;
    }
  });
  RS.SHA1 = R6._createHelper(RE);
  RS.HmacSHA1 = R6._createHmacHelper(RE);
  var Rr = Math;
  var RS = Rv;
  var Rl = (RE = RS.lib).WordArray;
  var Rs = RE.Hasher;
  var RE = RS.algo;
  var j0 = [];
  var j1 = [];
  function j2(hH) {
    return (hH - (hH | 0)) * 4294967296 | 0;
  }
  var j3 = 2;
  for (var j4 = 0; j4 < 64;) {
    if (!!function (hH) {
      for (var hO = Rr.sqrt(hH), ho = 2; ho <= hO; ho++) {
        if (!(hH % ho)) {
          return;
        }
      }
      return 1;
    }(j3)) {
      if (j4 < 8) {
        j0[j4] = j2(Rr.pow(j3, 0.5));
      }
      j1[j4] = j2(Rr.pow(j3, 1 / 3));
      j4++;
    }
    j3++;
  }
  var j5 = [];
  var RE = RE.SHA256 = Rs.extend({
    _doReset: function () {
      this._hash = new Rl.init(j0.slice(0));
    },
    _doProcessBlock: function (hH, hO) {
      var ho = this._hash.words;
      var hA = ho[0];
      var hF = ho[1];
      var hB = ho[2];
      var hY = ho[3];
      var hm = ho[4];
      var hC = ho[5];
      var hn = ho[6];
      var hd = ho[7];
      for (var hQ = 0; hQ < 64; hQ++) {
        j5[hQ] = hQ < 16 ? hH[hO + hQ] | 0 : (((hg = j5[hQ - 15]) << 25 | hg >>> 7) ^ (hg << 14 | hg >>> 18) ^ hg >>> 3) + j5[hQ - 7] + (((hg = j5[hQ - 2]) << 15 | hg >>> 17) ^ (hg << 13 | hg >>> 19) ^ hg >>> 10) + j5[hQ - 16];
        var hg = hA & hF ^ hA & hB ^ hF & hB;
        var hp = hd + ((hm << 26 | hm >>> 6) ^ (hm << 21 | hm >>> 11) ^ (hm << 7 | hm >>> 25)) + (hm & hC ^ ~hm & hn) + j1[hQ] + j5[hQ];
        var hd = hn;
        var hn = hC;
        var hC = hm;
        var hm = hY + hp | 0;
        var hY = hB;
        var hB = hF;
        var hF = hA;
        var hA = hp + (((hA << 30 | hA >>> 2) ^ (hA << 19 | hA >>> 13) ^ (hA << 10 | hA >>> 22)) + hg) | 0;
      }
      ho[0] = ho[0] + hA | 0;
      ho[1] = ho[1] + hF | 0;
      ho[2] = ho[2] + hB | 0;
      ho[3] = ho[3] + hY | 0;
      ho[4] = ho[4] + hm | 0;
      ho[5] = ho[5] + hC | 0;
      ho[6] = ho[6] + hn | 0;
      ho[7] = ho[7] + hd | 0;
    },
    _doFinalize: function () {
      var hH = this._data;
      var hO = hH.words;
      var ho = this._nDataBytes * 8;
      var hA = hH.sigBytes * 8;
      hO[hA >>> 5] |= 128 << 24 - hA % 32;
      hO[14 + (64 + hA >>> 9 << 4)] = Rr.floor(ho / 4294967296);
      hO[15 + (64 + hA >>> 9 << 4)] = ho;
      hH.sigBytes = hO.length * 4;
      this._process();
      return this._hash;
    },
    clone: function () {
      var hH = Rs.clone.call(this);
      hH._hash = this._hash.clone();
      return hH;
    }
  });
  RS.SHA256 = Rs._createHelper(RE);
  RS.HmacSHA256 = Rs._createHmacHelper(RE);
  R8 = (RS = Rv).lib.WordArray;
  RE = RS.algo;
  R9 = RE.SHA256;
  RE = RE.SHA224 = R9.extend({
    _doReset: function () {
      this._hash = new R8.init([3238371032, 914150663, 812702999, 4144912697, 4290775857, 1750603025, 1694076839, 3204075428]);
    },
    _doFinalize: function () {
      var hH = R9._doFinalize.call(this);
      hH.sigBytes -= 4;
      return hH;
    }
  });
  RS.SHA224 = R9._createHelper(RE);
  RS.HmacSHA224 = R9._createHmacHelper(RE);
  var RS = Rv;
  var j6 = RS.lib.Hasher;
  var j7 = (RE = RS.x64).Word;
  var j8 = RE.WordArray;
  var RE = RS.algo;
  function j9() {
    return j7.create.apply(j7, arguments);
  }
  var jR = [j9(1116352408, 3609767458), j9(1899447441, 602891725), j9(3049323471, 3964484399), j9(3921009573, 2173295548), j9(961987163, 4081628472), j9(1508970993, 3053834265), j9(2453635748, 2937671579), j9(2870763221, 3664609560), j9(3624381080, 2734883394), j9(310598401, 1164996542), j9(607225278, 1323610764), j9(1426881987, 3590304994), j9(1925078388, 4068182383), j9(2162078206, 991336113), j9(2614888103, 633803317), j9(3248222580, 3479774868), j9(3835390401, 2666613458), j9(4022224774, 944711139), j9(264347078, 2341262773), j9(604807628, 2007800933), j9(770255983, 1495990901), j9(1249150122, 1856431235), j9(1555081692, 3175218132), j9(1996064986, 2198950837), j9(2554220882, 3999719339), j9(2821834349, 766784016), j9(2952996808, 2566594879), j9(3210313671, 3203337956), j9(3336571891, 1034457026), j9(3584528711, 2466948901), j9(113926993, 3758326383), j9(338241895, 168717936), j9(666307205, 1188179964), j9(773529912, 1546045734), j9(1294757372, 1522805485), j9(1396182291, 2643833823), j9(1695183700, 2343527390), j9(1986661051, 1014477480), j9(2177026350, 1206759142), j9(2456956037, 344077627), j9(2730485921, 1290863460), j9(2820302411, 3158454273), j9(3259730800, 3505952657), j9(3345764771, 106217008), j9(3516065817, 3606008344), j9(3600352804, 1432725776), j9(4094571909, 1467031594), j9(275423344, 851169720), j9(430227734, 3100823752), j9(506948616, 1363258195), j9(659060556, 3750685593), j9(883997877, 3785050280), j9(958139571, 3318307427), j9(1322822218, 3812723403), j9(1537002063, 2003034995), j9(1747873779, 3602036899), j9(1955562222, 1575990012), j9(2024104815, 1125592928), j9(2227730452, 2716904306), j9(2361852424, 442776044), j9(2428436474, 593698344), j9(2756734187, 3733110249), j9(3204031479, 2999351573), j9(3329325298, 3815920427), j9(3391569614, 3928383900), j9(3515267271, 566280711), j9(3940187606, 3454069534), j9(4118630271, 4000239992), j9(116418474, 1914138554), j9(174292421, 2731055270), j9(289380356, 3203993006), j9(460393269, 320620315), j9(685471733, 587496836), j9(852142971, 1086792851), j9(1017036298, 365543100), j9(1126000580, 2618297676), j9(1288033470, 3409855158), j9(1501505948, 4234509866), j9(1607167915, 987167468), j9(1816402316, 1246189591)];
  var jj = [];
  for (var jh = 0; jh < 80; jh++) {
    jj[jh] = j9();
  }
  RE = RE.SHA512 = j6.extend({
    _doReset: function () {
      this._hash = new j8.init([new j7.init(1779033703, 4089235720), new j7.init(3144134277, 2227873595), new j7.init(1013904242, 4271175723), new j7.init(2773480762, 1595750129), new j7.init(1359893119, 2917565137), new j7.init(2600822924, 725511199), new j7.init(528734635, 4215389547), new j7.init(1541459225, 327033209)]);
    },
    _doProcessBlock: function (hH, hO) {
      var ho = this._hash.words;
      var hA = ho[0];
      var hF = ho[1];
      var hB = ho[2];
      var hY = ho[3];
      var hm = ho[4];
      var hC = ho[5];
      var hn = ho[6];
      var ho = ho[7];
      var hd = hA.high;
      var hQ = hA.low;
      var hg = hF.high;
      var hp = hF.low;
      var hN = hB.high;
      var hG = hB.low;
      var hc = hY.high;
      var hV = hY.low;
      var hk = hm.high;
      var hx = hm.low;
      var hM = hC.high;
      var hI = hC.low;
      var hX = hn.high;
      var hi = hn.low;
      var hf = ho.high;
      var hZ = ho.low;
      var hy = hd;
      var hb = hQ;
      var hT = hg;
      var hq = hp;
      var hv = hN;
      var hE = hG;
      var hu = hc;
      var ha = hV;
      var hP = hk;
      var hS = hx;
      var hJ = hM;
      var hw = hI;
      var hK = hX;
      var hD = hi;
      var hU = hf;
      var hW = hZ;
      for (var hL = 0; hL < 80; hL++) {
        var hz;
        var hr;
        var hl = jj[hL];
        if (hL < 16) {
          hr = hl.high = hH[hO + hL * 2] | 0;
          hz = hl.low = hH[hO + hL * 2 + 1] | 0;
        } else {
          H6 = (H3 = jj[hL - 15]).high;
          H3 = H3.low;
          H2 = (H1 = jj[hL - 2]).high;
          H1 = H1.low;
          H0 = (hs = jj[hL - 7]).high;
          hs = hs.low;
          H5 = (H4 = jj[hL - 16]).high;
          hr = (hr = ((H6 >>> 1 | H3 << 31) ^ (H6 >>> 8 | H3 << 24) ^ H6 >>> 7) + H0 + ((hz = (H0 = (H3 >>> 1 | H6 << 31) ^ (H3 >>> 8 | H6 << 24) ^ (H3 >>> 7 | H6 << 25)) + hs) >>> 0 < H0 >>> 0 ? 1 : 0)) + ((H2 >>> 19 | H1 << 13) ^ (H2 << 3 | H1 >>> 29) ^ H2 >>> 6) + ((hz += H3 = (H1 >>> 19 | H2 << 13) ^ (H1 << 3 | H2 >>> 29) ^ (H1 >>> 6 | H2 << 26)) >>> 0 < H3 >>> 0 ? 1 : 0);
          hz += H6 = H4.low;
          hl.high = hr = hr + H5 + (hz >>> 0 < H6 >>> 0 ? 1 : 0);
          hl.low = hz;
        }
        var hs = hP & hJ ^ ~hP & hK;
        var H0 = hS & hw ^ ~hS & hD;
        var H1 = hy & hT ^ hy & hv ^ hT & hv;
        var H2 = (hb >>> 28 | hy << 4) ^ (hb << 30 | hy >>> 2) ^ (hb << 25 | hy >>> 7);
        var H3 = jR[hL];
        var H4 = H3.high;
        var H5 = H3.low;
        var H6 = hW + ((hS >>> 14 | hP << 18) ^ (hS >>> 18 | hP << 14) ^ (hS << 23 | hP >>> 9));
        var hl = hU + ((hP >>> 14 | hS << 18) ^ (hP >>> 18 | hS << 14) ^ (hP << 23 | hS >>> 9)) + (H6 >>> 0 < hW >>> 0 ? 1 : 0);
        var H7 = H2 + (hb & hq ^ hb & hE ^ hq & hE);
        var hU = hK;
        var hW = hD;
        var hK = hJ;
        var hD = hw;
        var hJ = hP;
        var hw = hS;
        var hP = hu + (hl = hl + hs + ((H6 = H6 + H0) >>> 0 < H0 >>> 0 ? 1 : 0) + H4 + ((H6 = H6 + H5) >>> 0 < H5 >>> 0 ? 1 : 0) + hr + ((H6 = H6 + hz) >>> 0 < hz >>> 0 ? 1 : 0)) + ((hS = ha + H6 | 0) >>> 0 < ha >>> 0 ? 1 : 0) | 0;
        var hu = hv;
        var ha = hE;
        var hv = hT;
        var hE = hq;
        var hT = hy;
        var hq = hb;
        var hy = hl + (((hy >>> 28 | hb << 4) ^ (hy << 30 | hb >>> 2) ^ (hy << 25 | hb >>> 7)) + H1 + (H7 >>> 0 < H2 >>> 0 ? 1 : 0)) + ((hb = H6 + H7 | 0) >>> 0 < H6 >>> 0 ? 1 : 0) | 0;
      }
      hQ = hA.low = hQ + hb;
      hA.high = hd + hy + (hQ >>> 0 < hb >>> 0 ? 1 : 0);
      hp = hF.low = hp + hq;
      hF.high = hg + hT + (hp >>> 0 < hq >>> 0 ? 1 : 0);
      hG = hB.low = hG + hE;
      hB.high = hN + hv + (hG >>> 0 < hE >>> 0 ? 1 : 0);
      hV = hY.low = hV + ha;
      hY.high = hc + hu + (hV >>> 0 < ha >>> 0 ? 1 : 0);
      hx = hm.low = hx + hS;
      hm.high = hk + hP + (hx >>> 0 < hS >>> 0 ? 1 : 0);
      hI = hC.low = hI + hw;
      hC.high = hM + hJ + (hI >>> 0 < hw >>> 0 ? 1 : 0);
      hi = hn.low = hi + hD;
      hn.high = hX + hK + (hi >>> 0 < hD >>> 0 ? 1 : 0);
      hZ = ho.low = hZ + hW;
      ho.high = hf + hU + (hZ >>> 0 < hW >>> 0 ? 1 : 0);
    },
    _doFinalize: function () {
      var hH = this._data;
      var hO = hH.words;
      var ho = this._nDataBytes * 8;
      var hA = hH.sigBytes * 8;
      hO[hA >>> 5] |= 128 << 24 - hA % 32;
      hO[30 + (128 + hA >>> 10 << 5)] = Math.floor(ho / 4294967296);
      hO[31 + (128 + hA >>> 10 << 5)] = ho;
      hH.sigBytes = hO.length * 4;
      this._process();
      return this._hash.toX32();
    },
    clone: function () {
      var hH = j6.clone.call(this);
      hH._hash = this._hash.clone();
      return hH;
    },
    blockSize: 32
  });
  RS.SHA512 = j6._createHelper(RE);
  RS.HmacSHA512 = j6._createHmacHelper(RE);
  RE = (RS = Rv).x64;
  RR = RE.Word;
  Rj = RE.WordArray;
  RE = RS.algo;
  Rh = RE.SHA512;
  RE = RE.SHA384 = Rh.extend({
    _doReset: function () {
      this._hash = new Rj.init([new RR.init(3418070365, 3238371032), new RR.init(1654270250, 914150663), new RR.init(2438529370, 812702999), new RR.init(355462360, 4144912697), new RR.init(1731405415, 4290775857), new RR.init(2394180231, 1750603025), new RR.init(3675008525, 1694076839), new RR.init(1203062813, 3204075428)]);
    },
    _doFinalize: function () {
      var hH = Rh._doFinalize.call(this);
      hH.sigBytes -= 16;
      return hH;
    }
  });
  RS.SHA384 = Rh._createHelper(RE);
  RS.HmacSHA384 = Rh._createHmacHelper(RE);
  var jH = Math;
  var RS = Rv;
  var jO = (RE = RS.lib).WordArray;
  var jo = RE.Hasher;
  var jA = RS.x64.Word;
  var RE = RS.algo;
  var jF = [];
  var jB = [];
  var jY = [];
  var jm = 1;
  var jC = 0;
  for (var jn = 0; jn < 24; jn++) {
    jF[jm + jC * 5] = (jn + 1) * (jn + 2) / 2 % 64;
    var jd = (jm * 2 + jC * 3) % 5;
    jm = jC % 5;
    jC = jd;
  }
  for (jm = 0; jm < 5; jm++) {
    for (jC = 0; jC < 5; jC++) {
      jB[jm + jC * 5] = jC + (jm * 2 + jC * 3) % 5 * 5;
    }
  }
  var jQ = 1;
  for (var jg = 0; jg < 24; jg++) {
    var jp;
    var jN = 0;
    var jG = 0;
    for (var jc = 0; jc < 7; jc++) {
      if (jQ & 1) {
        if ((jp = (1 << jc) - 1) < 32) {
          jG ^= 1 << jp;
        } else {
          jN ^= 1 << jp - 32;
        }
      }
      if (jQ & 128) {
        jQ = jQ << 1 ^ 113;
      } else {
        jQ <<= 1;
      }
    }
    jY[jg] = jA.create(jN, jG);
  }
  var jV = [];
  for (var jk = 0; jk < 25; jk++) {
    jV[jk] = jA.create();
  }
  function jx(hH, hO, ho) {
    return hH & hO | ~hH & ho;
  }
  function jM(hH, hO, ho) {
    return hH & ho | hO & ~ho;
  }
  function jI(hH, hO) {
    return hH << hO | hH >>> 32 - hO;
  }
  function jX(hH) {
    if (typeof hH == "string") {
      return RI;
    } else {
      return RM;
    }
  }
  function ji(hH, hO, ho) {
    var hA;
    var hF = this._iv;
    if (hF) {
      hA = hF;
      this._iv = undefined;
    } else {
      hA = this._prevBlock;
    }
    for (var hB = 0; hB < ho; hB++) {
      hH[hO + hB] ^= hA[hB];
    }
  }
  function jf(hH, hO, ho, hA) {
    var hF;
    var hB = this._iv;
    if (hB) {
      hF = hB.slice(0);
      this._iv = undefined;
    } else {
      hF = this._prevBlock;
    }
    hA.encryptBlock(hF, 0);
    for (var hY = 0; hY < ho; hY++) {
      hH[hO + hY] ^= hF[hY];
    }
  }
  function jZ(hH) {
    var hO;
    var ho;
    var hA;
    if ((hH >> 24 & 255) == 255) {
      ho = hH >> 8 & 255;
      hA = hH & 255;
      if ((hO = hH >> 16 & 255) === 255) {
        hO = 0;
        if (ho === 255) {
          ho = 0;
          if (hA === 255) {
            hA = 0;
          } else {
            ++hA;
          }
        } else {
          ++ho;
        }
      } else {
        ++hO;
      }
      hH = 0;
      hH = (hH += hO << 16) + (ho << 8) + hA;
    } else {
      hH += 1 << 24;
    }
    return hH;
  }
  RE = RE.SHA3 = jo.extend({
    cfg: jo.cfg.extend({
      outputLength: 512
    }),
    _doReset: function () {
      var hH = this._state = [];
      for (var hO = 0; hO < 25; hO++) {
        hH[hO] = new jA.init();
      }
      this.blockSize = (1600 - this.cfg.outputLength * 2) / 32;
    },
    _doProcessBlock: function (hH, hO) {
      var ho = this._state;
      for (var hA = this.blockSize / 2, hF = 0; hF < hA; hF++) {
        var hB = hH[hO + hF * 2];
        var hY = hH[hO + hF * 2 + 1];
        var hB = (hB << 8 | hB >>> 24) & 16711935 | (hB << 24 | hB >>> 8) & 4278255360;
        (hX = ho[hF]).high ^= (hY << 8 | hY >>> 24) & 16711935 | (hY << 24 | hY >>> 8) & 4278255360;
        hX.low ^= hB;
      }
      for (var hm = 0; hm < 24; hm++) {
        for (var hC = 0; hC < 5; hC++) {
          var hn = 0;
          var hd = 0;
          for (var hQ = 0; hQ < 5; hQ++) {
            hn ^= (hX = ho[hC + hQ * 5]).high;
            hd ^= hX.low;
          }
          var hg = jV[hC];
          hg.high = hn;
          hg.low = hd;
        }
        for (hC = 0; hC < 5; hC++) {
          var hp = jV[(hC + 4) % 5];
          var hN = jV[(hC + 1) % 5];
          var hG = hN.high;
          var hN = hN.low;
          var hn = hp.high ^ (hG << 1 | hN >>> 31);
          var hd = hp.low ^ (hN << 1 | hG >>> 31);
          for (var hQ = 0; hQ < 5; hQ++) {
            (hX = ho[hC + hQ * 5]).high ^= hn;
            hX.low ^= hd;
          }
        }
        for (var hc = 1; hc < 25; hc++) {
          var hV = (hX = ho[hc]).high;
          var hk = hX.low;
          var hx = jF[hc];
          hd = hx < 32 ? (hn = hV << hx | hk >>> 32 - hx, hk << hx | hV >>> 32 - hx) : (hn = hk << hx - 32 | hV >>> 64 - hx, hV << hx - 32 | hk >>> 64 - hx);
          var hV = jV[jB[hc]];
          hV.high = hn;
          hV.low = hd;
        }
        var hM = jV[0];
        var hI = ho[0];
        hM.high = hI.high;
        hM.low = hI.low;
        for (hC = 0; hC < 5; hC++) {
          for (hQ = 0; hQ < 5; hQ++) {
            var hX = ho[hc = hC + hQ * 5];
            var hi = jV[hc];
            var hf = jV[(hC + 1) % 5 + hQ * 5];
            var hZ = jV[(hC + 2) % 5 + hQ * 5];
            hX.high = hi.high ^ ~hf.high & hZ.high;
            hX.low = hi.low ^ ~hf.low & hZ.low;
          }
        }
        hX = ho[0];
        hM = jY[hm];
        hX.high ^= hM.high;
        hX.low ^= hM.low;
      }
    },
    _doFinalize: function () {
      var hH = this._data;
      var hO = hH.words;
      this._nDataBytes;
      var ho = hH.sigBytes * 8;
      var hA = this.blockSize * 32;
      hO[ho >>> 5] |= 1 << 24 - ho % 32;
      hO[(jH.ceil((1 + ho) / hA) * hA >>> 5) - 1] |= 128;
      hH.sigBytes = hO.length * 4;
      this._process();
      var hF = this._state;
      var ho = this.cfg.outputLength / 8;
      for (var hB = ho / 8, hY = [], hm = 0; hm < hB; hm++) {
        var hC = hF[hm];
        var hn = hC.high;
        var hC = hC.low;
        var hn = (hn << 8 | hn >>> 24) & 16711935 | (hn << 24 | hn >>> 8) & 4278255360;
        hY.push((hC << 8 | hC >>> 24) & 16711935 | (hC << 24 | hC >>> 8) & 4278255360);
        hY.push(hn);
      }
      return new jO.init(hY, ho);
    },
    clone: function () {
      var hH = jo.clone.call(this);
      var hO = hH._state = this._state.slice(0);
      for (var ho = 0; ho < 25; ho++) {
        hO[ho] = hO[ho].clone();
      }
      return hH;
    }
  });
  RS.SHA3 = jo._createHelper(RE);
  RS.HmacSHA3 = jo._createHmacHelper(RE);
  Math;
  RE = (RS = Rv).lib;
  RH = RE.WordArray;
  RO = RE.Hasher;
  RE = RS.algo;
  Ro = RH.create([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 7, 4, 13, 1, 10, 6, 15, 3, 12, 0, 9, 5, 2, 14, 11, 8, 3, 10, 14, 4, 9, 15, 8, 1, 2, 7, 0, 6, 13, 11, 5, 12, 1, 9, 11, 10, 0, 8, 12, 4, 13, 3, 7, 15, 14, 5, 6, 2, 4, 0, 5, 9, 7, 12, 2, 10, 14, 1, 3, 8, 11, 6, 15, 13]);
  RA = RH.create([5, 14, 7, 0, 9, 2, 11, 4, 13, 6, 15, 8, 1, 10, 3, 12, 6, 11, 3, 7, 0, 13, 5, 10, 14, 15, 8, 12, 4, 9, 1, 2, 15, 5, 1, 3, 7, 14, 6, 9, 11, 8, 12, 2, 10, 0, 4, 13, 8, 6, 4, 1, 3, 11, 15, 0, 5, 12, 2, 13, 9, 7, 10, 14, 12, 15, 10, 4, 1, 5, 8, 7, 6, 2, 13, 14, 0, 3, 9, 11]);
  RF = RH.create([11, 14, 15, 12, 5, 8, 7, 9, 11, 13, 14, 15, 6, 7, 9, 8, 7, 6, 8, 13, 11, 9, 7, 15, 7, 12, 15, 9, 11, 7, 13, 12, 11, 13, 6, 7, 14, 9, 13, 15, 14, 8, 13, 6, 5, 12, 7, 5, 11, 12, 14, 15, 14, 15, 9, 8, 9, 14, 5, 6, 8, 6, 5, 12, 9, 15, 5, 11, 6, 8, 13, 12, 5, 12, 13, 14, 11, 8, 5, 6]);
  RB = RH.create([8, 9, 9, 11, 13, 15, 15, 5, 7, 7, 8, 11, 14, 14, 12, 6, 9, 13, 15, 7, 12, 8, 9, 11, 7, 7, 12, 7, 6, 15, 13, 11, 9, 7, 15, 11, 8, 6, 6, 14, 12, 13, 5, 14, 13, 13, 7, 5, 15, 5, 8, 11, 14, 14, 6, 14, 6, 9, 12, 9, 12, 5, 15, 8, 8, 5, 12, 9, 12, 5, 14, 6, 8, 13, 6, 5, 15, 13, 11, 11]);
  RY = RH.create([0, 1518500249, 1859775393, 2400959708, 2840853838]);
  Rm = RH.create([1352829926, 1548603684, 1836072691, 2053994217, 0]);
  RE = RE.RIPEMD160 = RO.extend({
    _doReset: function () {
      this._hash = RH.create([1732584193, 4023233417, 2562383102, 271733878, 3285377520]);
    },
    _doProcessBlock: function (hH, hO) {
      for (var ho = 0; ho < 16; ho++) {
        var hA = hO + ho;
        var hF = hH[hA];
        hH[hA] = (hF << 8 | hF >>> 24) & 16711935 | (hF << 24 | hF >>> 8) & 4278255360;
      }
      var hB;
      var hY;
      var hm;
      var hC;
      var hn;
      var hd;
      var hQ = this._hash.words;
      var hg = RY.words;
      var hp = Rm.words;
      var hN = Ro.words;
      var hG = RA.words;
      var hc = RF.words;
      var hV = RB.words;
      var hk = hB = hQ[0];
      var hx = hY = hQ[1];
      var hM = hm = hQ[2];
      var hI = hC = hQ[3];
      var hX = hn = hQ[4];
      for (var ho = 0; ho < 80; ho += 1) {
        hd = (hd = jI(hd = (hd = hB + hH[hO + hN[ho]] | 0) + (ho < 16 ? (hY ^ hm ^ hC) + hg[0] : ho < 32 ? jx(hY, hm, hC) + hg[1] : ho < 48 ? ((hY | ~hm) ^ hC) + hg[2] : ho < 64 ? jM(hY, hm, hC) + hg[3] : (hY ^ (hm | ~hC)) + hg[4]) | 0, hc[ho])) + hn | 0;
        hB = hn;
        hn = hC;
        hC = jI(hm, 10);
        hm = hY;
        hY = hd;
        hd = (hd = jI(hd = (hd = hk + hH[hO + hG[ho]] | 0) + (ho < 16 ? (hx ^ (hM | ~hI)) + hp[0] : ho < 32 ? jM(hx, hM, hI) + hp[1] : ho < 48 ? ((hx | ~hM) ^ hI) + hp[2] : ho < 64 ? jx(hx, hM, hI) + hp[3] : (hx ^ hM ^ hI) + hp[4]) | 0, hV[ho])) + hX | 0;
        hk = hX;
        hX = hI;
        hI = jI(hM, 10);
        hM = hx;
        hx = hd;
      }
      hd = hQ[1] + hm + hI | 0;
      hQ[1] = hQ[2] + hC + hX | 0;
      hQ[2] = hQ[3] + hn + hk | 0;
      hQ[3] = hQ[4] + hB + hx | 0;
      hQ[4] = hQ[0] + hY + hM | 0;
      hQ[0] = hd;
    },
    _doFinalize: function () {
      var hH = this._data;
      var hO = hH.words;
      var ho = this._nDataBytes * 8;
      var hA = hH.sigBytes * 8;
      hO[hA >>> 5] |= 128 << 24 - hA % 32;
      hO[14 + (64 + hA >>> 9 << 4)] = (ho << 8 | ho >>> 24) & 16711935 | (ho << 24 | ho >>> 8) & 4278255360;
      hH.sigBytes = (hO.length + 1) * 4;
      this._process();
      var hA = this._hash;
      var hF = hA.words;
      for (var hB = 0; hB < 5; hB++) {
        var hY = hF[hB];
        hF[hB] = (hY << 8 | hY >>> 24) & 16711935 | (hY << 24 | hY >>> 8) & 4278255360;
      }
      return hA;
    },
    clone: function () {
      var hH = RO.clone.call(this);
      hH._hash = this._hash.clone();
      return hH;
    }
  });
  RS.RIPEMD160 = RO._createHelper(RE);
  RS.HmacRIPEMD160 = RO._createHmacHelper(RE);
  RE = (RS = Rv).lib.Base;
  RC = RS.enc.Utf8;
  RS.algo.HMAC = RE.extend({
    init: function (hH, hO) {
      hH = this._hasher = new hH.init();
      if (typeof hO == "string") {
        hO = RC.parse(hO);
      }
      for (var ho = hH.blockSize, hA = ho * 4, hH = ((hO = hO.sigBytes > hA ? hH.finalize(hO) : hO).clamp(), this._oKey = hO.clone()), hO = this._iKey = hO.clone(), hF = hH.words, hB = hO.words, hY = 0; hY < ho; hY++) {
        hF[hY] ^= 1549556828;
        hB[hY] ^= 909522486;
      }
      hH.sigBytes = hO.sigBytes = hA;
      this.reset();
    },
    reset: function () {
      var hH = this._hasher;
      hH.reset();
      hH.update(this._iKey);
    },
    update: function (hH) {
      this._hasher.update(hH);
      return this;
    },
    finalize: function (hH) {
      var hO = this._hasher;
      var hH = hO.finalize(hH);
      hO.reset();
      return hO.finalize(this._oKey.clone().concat(hH));
    }
  });
  RE = (RS = Rv).lib;
  jt = RE.Base;
  Rn = RE.WordArray;
  RE = RS.algo;
  js = RE.SHA1;
  Rd = RE.HMAC;
  RQ = RE.PBKDF2 = jt.extend({
    cfg: jt.extend({
      keySize: 4,
      hasher: js,
      iterations: 1
    }),
    init: function (hH) {
      this.cfg = this.cfg.extend(hH);
    },
    compute: function (hH, hO) {
      var ho = this.cfg;
      var hA = Rd.create(ho.hasher, hH);
      var hF = Rn.create();
      var hB = Rn.create([1]);
      for (var hY = hF.words, hm = hB.words, hC = ho.keySize, hn = ho.iterations; hY.length < hC;) {
        var hd = hA.update(hO).finalize(hB);
        hA.reset();
        var hQ = hd.words;
        var hg = hQ.length;
        var hp = hd;
        for (var hN = 1; hN < hn; hN++) {
          hp = hA.finalize(hp);
          hA.reset();
          var hG = hp.words;
          for (var hc = 0; hc < hg; hc++) {
            hQ[hc] ^= hG[hc];
          }
        }
        hF.concat(hd);
        hm[0]++;
      }
      hF.sigBytes = hC * 4;
      return hF;
    }
  });
  RS.PBKDF2 = function (hH, hO, ho) {
    return RQ.create(ho).compute(hH, hO);
  };
  jt = (RE = Rv).lib;
  js = jt.Base;
  Rg = jt.WordArray;
  jt = RE.algo;
  RS = jt.MD5;
  Rp = jt.EvpKDF = js.extend({
    cfg: js.extend({
      keySize: 4,
      hasher: RS,
      iterations: 1
    }),
    init: function (hH) {
      this.cfg = this.cfg.extend(hH);
    },
    compute: function (hH, hO) {
      var ho;
      var hA = this.cfg;
      var hF = hA.hasher.create();
      var hB = Rg.create();
      for (var hY = hB.words, hm = hA.keySize, hC = hA.iterations; hY.length < hm;) {
        if (ho) {
          hF.update(ho);
        }
        ho = hF.update(hH).finalize(hO);
        hF.reset();
        for (var hn = 1; hn < hC; hn++) {
          ho = hF.finalize(ho);
          hF.reset();
        }
        hB.concat(ho);
      }
      hB.sigBytes = hm * 4;
      return hB;
    }
  });
  RE.EvpKDF = function (hH, hO, ho) {
    return Rp.create(ho).compute(hH, hO);
  };
  if (!Rv.lib.Cipher) {
    js = (jt = Rv).lib;
    RS = js.Base;
    RN = js.WordArray;
    RG = js.BufferedBlockAlgorithm;
    (RE = jt.enc).Utf8;
    Rc = RE.Base64;
    RV = jt.algo.EvpKDF;
    Rk = js.Cipher = RG.extend({
      cfg: RS.extend(),
      createEncryptor: function (hH, hO) {
        return this.create(this._ENC_XFORM_MODE, hH, hO);
      },
      createDecryptor: function (hH, hO) {
        return this.create(this._DEC_XFORM_MODE, hH, hO);
      },
      init: function (hH, hO, ho) {
        this.cfg = this.cfg.extend(ho);
        this._xformMode = hH;
        this._key = hO;
        this.reset();
      },
      reset: function () {
        RG.reset.call(this);
        this._doReset();
      },
      process: function (hH) {
        this._append(hH);
        return this._process();
      },
      finalize: function (hH) {
        if (hH) {
          this._append(hH);
        }
        return this._doFinalize();
      },
      keySize: 4,
      ivSize: 4,
      _ENC_XFORM_MODE: 1,
      _DEC_XFORM_MODE: 2,
      _createHelper: function (hH) {
        return {
          encrypt: function (hO, ho, hA) {
            return jX(ho).encrypt(hH, hO, ho, hA);
          },
          decrypt: function (hO, ho, hA) {
            return jX(ho).decrypt(hH, hO, ho, hA);
          }
        };
      }
    });
    js.StreamCipher = Rk.extend({
      _doFinalize: function () {
        return this._process(true);
      },
      blockSize: 1
    });
    RE = jt.mode = {};
    RX = js.BlockCipherMode = RS.extend({
      createEncryptor: function (hH, hO) {
        return this.Encryptor.create(hH, hO);
      },
      createDecryptor: function (hH, hO) {
        return this.Decryptor.create(hH, hO);
      },
      init: function (hH, hO) {
        this._cipher = hH;
        this._iv = hO;
      }
    });
    (RE = RX.extend()).Encryptor = RE.extend({
      processBlock: function (hH, hO) {
        var ho = this._cipher;
        var hA = ho.blockSize;
        ji.call(this, hH, hO, hA);
        ho.encryptBlock(hH, hO);
        this._prevBlock = hH.slice(hO, hO + hA);
      }
    });
    RE.Decryptor = RE.extend({
      processBlock: function (hH, hO) {
        var ho = this._cipher;
        var hA = ho.blockSize;
        var hF = hH.slice(hO, hO + hA);
        ho.decryptBlock(hH, hO);
        ji.call(this, hH, hO, hA);
        this._prevBlock = hF;
      }
    });
    RX = RE.CBC = RE;
    RE = (jt.pad = {}).Pkcs7 = {
      pad: function (hH, hO) {
        var hO = hO * 4;
        for (var ho = hO - hH.sigBytes % hO, hA = ho << 24 | ho << 16 | ho << 8 | ho, hF = [], hB = 0; hB < ho; hB += 4) {
          hF.push(hA);
        }
        hO = RN.create(hF, ho);
        hH.concat(hO);
      },
      unpad: function (hH) {
        var hO = hH.words[hH.sigBytes - 1 >>> 2] & 255;
        hH.sigBytes -= hO;
      }
    };
    js.BlockCipher = Rk.extend({
      cfg: Rk.cfg.extend({
        mode: RX,
        padding: RE
      }),
      reset: function () {
        Rk.reset.call(this);
        var hH;
        var hO = this.cfg;
        var ho = hO.iv;
        var hO = hO.mode;
        if (this._xformMode == this._ENC_XFORM_MODE) {
          hH = hO.createEncryptor;
        } else {
          hH = hO.createDecryptor;
          this._minBufferSize = 1;
        }
        if (this._mode && this._mode.__creator == hH) {
          this._mode.init(this, ho && ho.words);
        } else {
          this._mode = hH.call(hO, this, ho && ho.words);
          this._mode.__creator = hH;
        }
      },
      _doProcessBlock: function (hH, hO) {
        this._mode.processBlock(hH, hO);
      },
      _doFinalize: function () {
        var hH;
        var hO = this.cfg.padding;
        if (this._xformMode == this._ENC_XFORM_MODE) {
          hO.pad(this._data, this.blockSize);
          hH = this._process(true);
        } else {
          hH = this._process(true);
          hO.unpad(hH);
        }
        return hH;
      },
      blockSize: 4
    });
    Rx = js.CipherParams = RS.extend({
      init: function (hH) {
        this.mixIn(hH);
      },
      toString: function (hH) {
        return (hH || this.formatter).stringify(this);
      }
    });
    RX = (jt.format = {}).OpenSSL = {
      stringify: function (hH) {
        var hO = hH.ciphertext;
        var hH = hH.salt;
        var hH = hH ? RN.create([1398893684, 1701076831]).concat(hH).concat(hO) : hO;
        return hH.toString(Rc);
      },
      parse: function (hH) {
        var hO;
        var hH = Rc.parse(hH);
        var ho = hH.words;
        if (ho[0] == 1398893684 && ho[1] == 1701076831) {
          hO = RN.create(ho.slice(2, 4));
          ho.splice(0, 4);
          hH.sigBytes -= 16;
        }
        return Rx.create({
          ciphertext: hH,
          salt: hO
        });
      }
    };
    RM = js.SerializableCipher = RS.extend({
      cfg: RS.extend({
        format: RX
      }),
      encrypt: function (hH, hO, ho, hA) {
        hA = this.cfg.extend(hA);
        var hF = hH.createEncryptor(ho, hA);
        var hO = hF.finalize(hO);
        var hF = hF.cfg;
        return Rx.create({
          ciphertext: hO,
          key: ho,
          iv: hF.iv,
          algorithm: hH,
          mode: hF.mode,
          padding: hF.padding,
          blockSize: hH.blockSize,
          formatter: hA.format
        });
      },
      decrypt: function (hH, hO, ho, hA) {
        hA = this.cfg.extend(hA);
        hO = this._parse(hO, hA.format);
        return hH.createDecryptor(ho, hA).finalize(hO.ciphertext);
      },
      _parse: function (hH, hO) {
        if (typeof hH == "string") {
          return hO.parse(hH, this);
        } else {
          return hH;
        }
      }
    });
    RE = (jt.kdf = {}).OpenSSL = {
      execute: function (hH, hO, ho, hA) {
        hA = hA || RN.random(8);
        hH = RV.create({
          keySize: hO + ho
        }).compute(hH, hA);
        ho = RN.create(hH.words.slice(hO), ho * 4);
        hH.sigBytes = hO * 4;
        return Rx.create({
          key: hH,
          iv: ho,
          salt: hA
        });
      }
    };
    RI = js.PasswordBasedCipher = RM.extend({
      cfg: RM.cfg.extend({
        kdf: RE
      }),
      encrypt: function (hH, hO, ho, hA) {
        ho = (hA = this.cfg.extend(hA)).kdf.execute(ho, hH.keySize, hH.ivSize);
        hA.iv = ho.iv;
        hH = RM.encrypt.call(this, hH, hO, ho.key, hA);
        hH.mixIn(ho);
        return hH;
      },
      decrypt: function (hH, hO, ho, hA) {
        hA = this.cfg.extend(hA);
        hO = this._parse(hO, hA.format);
        ho = hA.kdf.execute(ho, hH.keySize, hH.ivSize, hO.salt);
        hA.iv = ho.iv;
        return RM.decrypt.call(this, hH, hO, ho.key, hA);
      }
    });
  }
  Rv.mode.CFB = ((RS = Rv.lib.BlockCipherMode.extend()).Encryptor = RS.extend({
    processBlock: function (hH, hO) {
      var ho = this._cipher;
      var hA = ho.blockSize;
      jf.call(this, hH, hO, hA, ho);
      this._prevBlock = hH.slice(hO, hO + hA);
    }
  }), RS.Decryptor = RS.extend({
    processBlock: function (hH, hO) {
      var ho = this._cipher;
      var hA = ho.blockSize;
      var hF = hH.slice(hO, hO + hA);
      jf.call(this, hH, hO, hA, ho);
      this._prevBlock = hF;
    }
  }), RS);
  Rv.mode.CTR = (RX = Rv.lib.BlockCipherMode.extend(), jt = RX.Encryptor = RX.extend({
    processBlock: function (hH, hO) {
      var ho = this._cipher;
      var hA = ho.blockSize;
      var hF = this._iv;
      var hB = this._counter;
      if (hF) {
        hB = this._counter = hF.slice(0);
        this._iv = undefined;
      }
      var hY = hB.slice(0);
      ho.encryptBlock(hY, 0);
      hB[hA - 1] = hB[hA - 1] + 1 | 0;
      for (var hm = 0; hm < hA; hm++) {
        hH[hO + hm] ^= hY[hm];
      }
    }
  }), RX.Decryptor = jt, RX);
  Rv.mode.CTRGladman = (js = Rv.lib.BlockCipherMode.extend(), RE = js.Encryptor = js.extend({
    processBlock: function (hH, hO) {
      var ho = this._cipher;
      var hA = ho.blockSize;
      var hF = this._iv;
      var hB = this._counter;
      if (hF) {
        hB = this._counter = hF.slice(0);
        this._iv = undefined;
      }
      if (((hF = hB)[0] = jZ(hF[0])) === 0) {
        hF[1] = jZ(hF[1]);
      }
      var hY = hB.slice(0);
      ho.encryptBlock(hY, 0);
      for (var hm = 0; hm < hA; hm++) {
        hH[hO + hm] ^= hY[hm];
      }
    }
  }), js.Decryptor = RE, js);
  Rv.mode.OFB = (RS = Rv.lib.BlockCipherMode.extend(), jt = RS.Encryptor = RS.extend({
    processBlock: function (hH, hO) {
      var ho = this._cipher;
      var hA = ho.blockSize;
      var hF = this._iv;
      var hB = this._keystream;
      if (hF) {
        hB = this._keystream = hF.slice(0);
        this._iv = undefined;
      }
      ho.encryptBlock(hB, 0);
      for (var hY = 0; hY < hA; hY++) {
        hH[hO + hY] ^= hB[hY];
      }
    }
  }), RS.Decryptor = jt, RS);
  Rv.mode.ECB = ((RE = Rv.lib.BlockCipherMode.extend()).Encryptor = RE.extend({
    processBlock: function (hH, hO) {
      this._cipher.encryptBlock(hH, hO);
    }
  }), RE.Decryptor = RE.extend({
    processBlock: function (hH, hO) {
      this._cipher.decryptBlock(hH, hO);
    }
  }), RE);
  Rv.pad.AnsiX923 = {
    pad: function (hH, hO) {
      var ho = hH.sigBytes;
      var hO = hO * 4;
      var hO = hO - ho % hO;
      var ho = ho + hO - 1;
      hH.clamp();
      hH.words[ho >>> 2] |= hO << 24 - ho % 4 * 8;
      hH.sigBytes += hO;
    },
    unpad: function (hH) {
      var hO = hH.words[hH.sigBytes - 1 >>> 2] & 255;
      hH.sigBytes -= hO;
    }
  };
  Rv.pad.Iso10126 = {
    pad: function (hH, hO) {
      hO *= 4;
      hO -= hH.sigBytes % hO;
      hH.concat(Rv.lib.WordArray.random(hO - 1)).concat(Rv.lib.WordArray.create([hO << 24], 1));
    },
    unpad: function (hH) {
      var hO = hH.words[hH.sigBytes - 1 >>> 2] & 255;
      hH.sigBytes -= hO;
    }
  };
  Rv.pad.Iso97971 = {
    pad: function (hH, hO) {
      hH.concat(Rv.lib.WordArray.create([2147483648], 1));
      Rv.pad.ZeroPadding.pad(hH, hO);
    },
    unpad: function (hH) {
      Rv.pad.ZeroPadding.unpad(hH);
      hH.sigBytes--;
    }
  };
  Rv.pad.ZeroPadding = {
    pad: function (hH, hO) {
      hO *= 4;
      hH.clamp();
      hH.sigBytes += hO - (hH.sigBytes % hO || hO);
    },
    unpad: function (hH) {
      var hO = hH.words;
      for (var ho = hH.sigBytes - 1, ho = hH.sigBytes - 1; ho >= 0; ho--) {
        if (hO[ho >>> 2] >>> 24 - ho % 4 * 8 & 255) {
          hH.sigBytes = ho + 1;
          break;
        }
      }
    }
  };
  Rv.pad.NoPadding = {
    pad: function () {},
    unpad: function () {}
  };
  Ri = (js = Rv).lib.CipherParams;
  Rf = js.enc.Hex;
  js.format.Hex = {
    stringify: function (hH) {
      return hH.ciphertext.toString(Rf);
    },
    parse: function (hH) {
      hH = Rf.parse(hH);
      return Ri.create({
        ciphertext: hH
      });
    }
  };
  var jt = Rv;
  var RS = jt.lib.BlockCipher;
  var RE = jt.algo;
  var jy = [];
  var jb = [];
  var jT = [];
  var jq = [];
  var jv = [];
  var jE = [];
  var ju = [];
  var ja = [];
  var jP = [];
  var jS = [];
  var jJ = [];
  for (var jw = 0; jw < 256; jw++) {
    jJ[jw] = jw < 128 ? jw << 1 : jw << 1 ^ 283;
  }
  var jK = 0;
  var jD = 0;
  for (var jw = 0; jw < 256; jw++) {
    var jU = jD ^ jD << 1 ^ jD << 2 ^ jD << 3 ^ jD << 4;
    var jW = jJ[jb[jy[jK] = jU = jU >>> 8 ^ jU & 255 ^ 99] = jK];
    var jL = jJ[jW];
    var jz = jJ[jL];
    var jr = jJ[jU] * 257 ^ jU * 16843008;
    jT[jK] = jr << 24 | jr >>> 8;
    jq[jK] = jr << 16 | jr >>> 16;
    jv[jK] = jr << 8 | jr >>> 24;
    jE[jK] = jr;
    ju[jU] = (jr = jz * 16843009 ^ jL * 65537 ^ jW * 257 ^ jK * 16843008) << 24 | jr >>> 8;
    ja[jU] = jr << 16 | jr >>> 16;
    jP[jU] = jr << 8 | jr >>> 24;
    jS[jU] = jr;
    if (jK) {
      jK = jW ^ jJ[jJ[jJ[jz ^ jW]]];
      jD ^= jJ[jJ[jD]];
    } else {
      jK = jD = 1;
    }
  }
  var jl = [0, 1, 2, 4, 8, 16, 32, 64, 128, 27, 54];
  var RE = RE.AES = RS.extend({
    _doReset: function () {
      if (!this._nRounds || this._keyPriorReset !== this._key) {
        var hH = this._keyPriorReset = this._key;
        var hO = hH.words;
        var ho = hH.sigBytes / 4;
        for (var hA = (1 + (this._nRounds = 6 + ho)) * 4, hF = this._keySchedule = [], hB = 0; hB < hA; hB++) {
          if (hB < ho) {
            hF[hB] = hO[hB];
          } else {
            hC = hF[hB - 1];
            if (hB % ho) {
              if (ho > 6 && hB % ho == 4) {
                hC = jy[hC >>> 24] << 24 | jy[hC >>> 16 & 255] << 16 | jy[hC >>> 8 & 255] << 8 | jy[hC & 255];
              }
            } else {
              hC = jy[(hC = hC << 8 | hC >>> 24) >>> 24] << 24 | jy[hC >>> 16 & 255] << 16 | jy[hC >>> 8 & 255] << 8 | jy[hC & 255];
              hC ^= jl[hB / ho | 0] << 24;
            }
            hF[hB] = hF[hB - ho] ^ hC;
          }
        }
        var hY = this._invKeySchedule = [];
        for (var hm = 0; hm < hA; hm++) {
          var hC;
          var hB = hA - hm;
          hC = hm % 4 ? hF[hB] : hF[hB - 4];
          hY[hm] = hm < 4 || hB <= 4 ? hC : ju[jy[hC >>> 24]] ^ ja[jy[hC >>> 16 & 255]] ^ jP[jy[hC >>> 8 & 255]] ^ jS[jy[hC & 255]];
        }
      }
    },
    encryptBlock: function (hH, hO) {
      this._doCryptBlock(hH, hO, this._keySchedule, jT, jq, jv, jE, jy);
    },
    decryptBlock: function (hH, hO) {
      var ho = hH[hO + 1];
      hH[hO + 1] = hH[hO + 3];
      hH[hO + 3] = ho;
      this._doCryptBlock(hH, hO, this._invKeySchedule, ju, ja, jP, jS, jb);
      var ho = hH[hO + 1];
      hH[hO + 1] = hH[hO + 3];
      hH[hO + 3] = ho;
    },
    _doCryptBlock: function (hH, hO, ho, hA, hF, hB, hY, hm) {
      for (var hC = this._nRounds, hn = hH[hO] ^ ho[0], hd = hH[hO + 1] ^ ho[1], hQ = hH[hO + 2] ^ ho[2], hg = hH[hO + 3] ^ ho[3], hp = 4, hN = 1; hN < hC; hN++) {
        var hG = hA[hn >>> 24] ^ hF[hd >>> 16 & 255] ^ hB[hQ >>> 8 & 255] ^ hY[hg & 255] ^ ho[hp++];
        var hc = hA[hd >>> 24] ^ hF[hQ >>> 16 & 255] ^ hB[hg >>> 8 & 255] ^ hY[hn & 255] ^ ho[hp++];
        var hV = hA[hQ >>> 24] ^ hF[hg >>> 16 & 255] ^ hB[hn >>> 8 & 255] ^ hY[hd & 255] ^ ho[hp++];
        var hk = hA[hg >>> 24] ^ hF[hn >>> 16 & 255] ^ hB[hd >>> 8 & 255] ^ hY[hQ & 255] ^ ho[hp++];
        var hn = hG;
        var hd = hc;
        var hQ = hV;
        var hg = hk;
      }
      hG = (hm[hn >>> 24] << 24 | hm[hd >>> 16 & 255] << 16 | hm[hQ >>> 8 & 255] << 8 | hm[hg & 255]) ^ ho[hp++];
      hc = (hm[hd >>> 24] << 24 | hm[hQ >>> 16 & 255] << 16 | hm[hg >>> 8 & 255] << 8 | hm[hn & 255]) ^ ho[hp++];
      hV = (hm[hQ >>> 24] << 24 | hm[hg >>> 16 & 255] << 16 | hm[hn >>> 8 & 255] << 8 | hm[hd & 255]) ^ ho[hp++];
      hk = (hm[hg >>> 24] << 24 | hm[hn >>> 16 & 255] << 16 | hm[hd >>> 8 & 255] << 8 | hm[hQ & 255]) ^ ho[hp++];
      hH[hO] = hG;
      hH[hO + 1] = hc;
      hH[hO + 2] = hV;
      hH[hO + 3] = hk;
    },
    keySize: 8
  });
  jt.AES = RS._createHelper(RE);
  var js = Rv;
  var h0 = (jt = js.lib).WordArray;
  var jt = jt.BlockCipher;
  var RS = js.algo;
  var h1 = [57, 49, 41, 33, 25, 17, 9, 1, 58, 50, 42, 34, 26, 18, 10, 2, 59, 51, 43, 35, 27, 19, 11, 3, 60, 52, 44, 36, 63, 55, 47, 39, 31, 23, 15, 7, 62, 54, 46, 38, 30, 22, 14, 6, 61, 53, 45, 37, 29, 21, 13, 5, 28, 20, 12, 4];
  var h2 = [14, 17, 11, 24, 1, 5, 3, 28, 15, 6, 21, 10, 23, 19, 12, 4, 26, 8, 16, 7, 27, 20, 13, 2, 41, 52, 31, 37, 47, 55, 30, 40, 51, 45, 33, 48, 44, 49, 39, 56, 34, 53, 46, 42, 50, 36, 29, 32];
  var h3 = [1, 2, 4, 6, 8, 10, 12, 14, 15, 17, 19, 21, 23, 25, 27, 28];
  var h4 = [{
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
  var h5 = [4160749569, 528482304, 33030144, 2064384, 129024, 8064, 504, 2147483679];
  var h6 = RS.DES = jt.extend({
    _doReset: function () {
      var hH = this._key.words;
      var hO = [];
      for (var ho = 0; ho < 56; ho++) {
        var hA = h1[ho] - 1;
        hO[ho] = hH[hA >>> 5] >>> 31 - hA % 32 & 1;
      }
      var hF = this._subKeys = [];
      for (var hB = 0; hB < 16; hB++) {
        var hY = hF[hB] = [];
        var hm = h3[hB];
        for (var ho = 0; ho < 24; ho++) {
          hY[ho / 6 | 0] |= hO[(h2[ho] - 1 + hm) % 28] << 31 - ho % 6;
          hY[4 + (ho / 6 | 0)] |= hO[28 + (h2[ho + 24] - 1 + hm) % 28] << 31 - ho % 6;
        }
        hY[0] = hY[0] << 1 | hY[0] >>> 31;
        for (ho = 1; ho < 7; ho++) {
          hY[ho] = hY[ho] >>> (ho - 1) * 4 + 3;
        }
        hY[7] = hY[7] << 5 | hY[7] >>> 27;
      }
      var hC = this._invSubKeys = [];
      for (var ho = 0; ho < 16; ho++) {
        hC[ho] = hF[15 - ho];
      }
    },
    encryptBlock: function (hH, hO) {
      this._doCryptBlock(hH, hO, this._subKeys);
    },
    decryptBlock: function (hH, hO) {
      this._doCryptBlock(hH, hO, this._invSubKeys);
    },
    _doCryptBlock: function (hH, hO, ho) {
      this._lBlock = hH[hO];
      this._rBlock = hH[hO + 1];
      h7.call(this, 4, 252645135);
      h7.call(this, 16, 65535);
      h8.call(this, 2, 858993459);
      h8.call(this, 8, 16711935);
      h7.call(this, 1, 1431655765);
      for (var hA = 0; hA < 16; hA++) {
        var hF = ho[hA];
        var hB = this._lBlock;
        var hY = this._rBlock;
        var hm = 0;
        for (var hC = 0; hC < 8; hC++) {
          hm |= h4[hC][((hY ^ hF[hC]) & h5[hC]) >>> 0];
        }
        this._lBlock = hY;
        this._rBlock = hB ^ hm;
      }
      var hn = this._lBlock;
      this._lBlock = this._rBlock;
      this._rBlock = hn;
      h7.call(this, 1, 1431655765);
      h8.call(this, 8, 16711935);
      h8.call(this, 2, 858993459);
      h7.call(this, 16, 65535);
      h7.call(this, 4, 252645135);
      hH[hO] = this._lBlock;
      hH[hO + 1] = this._rBlock;
    },
    keySize: 2,
    ivSize: 2,
    blockSize: 2
  });
  function h7(hH, hO) {
    hO = (this._lBlock >>> hH ^ this._rBlock) & hO;
    this._rBlock ^= hO;
    this._lBlock ^= hO << hH;
  }
  function h8(hH, hO) {
    hO = (this._rBlock >>> hH ^ this._lBlock) & hO;
    this._lBlock ^= hO;
    this._rBlock ^= hO << hH;
  }
  js.DES = jt._createHelper(h6);
  RS = RS.TripleDES = jt.extend({
    _doReset: function () {
      var hH = this._key.words;
      if (hH.length !== 2 && hH.length !== 4 && hH.length < 6) {
        throw new Error("Invalid key length - 3DES requires the key length to be 64, 128, 192 or >192.");
      }
      var hO = hH.slice(0, 2);
      var ho = hH.length < 4 ? hH.slice(0, 2) : hH.slice(2, 4);
      var hH = hH.length < 6 ? hH.slice(0, 2) : hH.slice(4, 6);
      this._des1 = h6.createEncryptor(h0.create(hO));
      this._des2 = h6.createEncryptor(h0.create(ho));
      this._des3 = h6.createEncryptor(h0.create(hH));
    },
    encryptBlock: function (hH, hO) {
      this._des1.encryptBlock(hH, hO);
      this._des2.decryptBlock(hH, hO);
      this._des3.encryptBlock(hH, hO);
    },
    decryptBlock: function (hH, hO) {
      this._des3.decryptBlock(hH, hO);
      this._des2.encryptBlock(hH, hO);
      this._des1.decryptBlock(hH, hO);
    },
    keySize: 6,
    ivSize: 2,
    blockSize: 2
  });
  js.TripleDES = jt._createHelper(RS);
  var RE = Rv;
  var js = RE.lib.StreamCipher;
  var jt = RE.algo;
  var h9 = jt.RC4 = js.extend({
    _doReset: function () {
      var hH = this._key;
      var hO = hH.words;
      var ho = hH.sigBytes;
      var hA = this._S = [];
      for (var hF = 0; hF < 256; hF++) {
        hA[hF] = hF;
      }
      for (var hF = 0, hB = 0; hF < 256; hF++) {
        var hY = hF % ho;
        var hY = hO[hY >>> 2] >>> 24 - hY % 4 * 8 & 255;
        var hB = (hB + hA[hF] + hY) % 256;
        var hY = hA[hF];
        hA[hF] = hA[hB];
        hA[hB] = hY;
      }
      this._i = this._j = 0;
    },
    _doProcessBlock: function (hH, hO) {
      hH[hO] ^= hR.call(this);
    },
    keySize: 8,
    ivSize: 0
  });
  function hR() {
    var hH = this._S;
    var hO = this._i;
    var ho = this._j;
    var hA = 0;
    for (var hF = 0; hF < 4; hF++) {
      var ho = (ho + hH[hO = (hO + 1) % 256]) % 256;
      var hB = hH[hO];
      hH[hO] = hH[ho];
      hH[ho] = hB;
      hA |= hH[(hH[hO] + hH[ho]) % 256] << 24 - hF * 8;
    }
    this._i = hO;
    this._j = ho;
    return hA;
  }
  function hj() {
    var hH = this._X;
    var hO = this._C;
    for (var ho = 0; ho < 8; ho++) {
      Rt[ho] = hO[ho];
    }
    hO[0] = hO[0] + 1295307597 + this._b | 0;
    hO[1] = hO[1] + 3545052371 + (hO[0] >>> 0 < Rt[0] >>> 0 ? 1 : 0) | 0;
    hO[2] = hO[2] + 886263092 + (hO[1] >>> 0 < Rt[1] >>> 0 ? 1 : 0) | 0;
    hO[3] = hO[3] + 1295307597 + (hO[2] >>> 0 < Rt[2] >>> 0 ? 1 : 0) | 0;
    hO[4] = hO[4] + 3545052371 + (hO[3] >>> 0 < Rt[3] >>> 0 ? 1 : 0) | 0;
    hO[5] = hO[5] + 886263092 + (hO[4] >>> 0 < Rt[4] >>> 0 ? 1 : 0) | 0;
    hO[6] = hO[6] + 1295307597 + (hO[5] >>> 0 < Rt[5] >>> 0 ? 1 : 0) | 0;
    hO[7] = hO[7] + 3545052371 + (hO[6] >>> 0 < Rt[6] >>> 0 ? 1 : 0) | 0;
    this._b = hO[7] >>> 0 < Rt[7] >>> 0 ? 1 : 0;
    for (ho = 0; ho < 8; ho++) {
      var hA = hH[ho] + hO[ho];
      var hF = hA & 65535;
      var hB = hA >>> 16;
      Ry[ho] = ((hF * hF >>> 17) + hF * hB >>> 15) + hB * hB ^ ((hA & 4294901760) * hA | 0) + ((hA & 65535) * hA | 0);
    }
    hH[0] = Ry[0] + (Ry[7] << 16 | Ry[7] >>> 16) + (Ry[6] << 16 | Ry[6] >>> 16) | 0;
    hH[1] = Ry[1] + (Ry[0] << 8 | Ry[0] >>> 24) + Ry[7] | 0;
    hH[2] = Ry[2] + (Ry[1] << 16 | Ry[1] >>> 16) + (Ry[0] << 16 | Ry[0] >>> 16) | 0;
    hH[3] = Ry[3] + (Ry[2] << 8 | Ry[2] >>> 24) + Ry[1] | 0;
    hH[4] = Ry[4] + (Ry[3] << 16 | Ry[3] >>> 16) + (Ry[2] << 16 | Ry[2] >>> 16) | 0;
    hH[5] = Ry[5] + (Ry[4] << 8 | Ry[4] >>> 24) + Ry[3] | 0;
    hH[6] = Ry[6] + (Ry[5] << 16 | Ry[5] >>> 16) + (Ry[4] << 16 | Ry[4] >>> 16) | 0;
    hH[7] = Ry[7] + (Ry[6] << 8 | Ry[6] >>> 24) + Ry[5] | 0;
  }
  function hh() {
    var hH = this._X;
    var hO = this._C;
    for (var ho = 0; ho < 8; ho++) {
      RT[ho] = hO[ho];
    }
    hO[0] = hO[0] + 1295307597 + this._b | 0;
    hO[1] = hO[1] + 3545052371 + (hO[0] >>> 0 < RT[0] >>> 0 ? 1 : 0) | 0;
    hO[2] = hO[2] + 886263092 + (hO[1] >>> 0 < RT[1] >>> 0 ? 1 : 0) | 0;
    hO[3] = hO[3] + 1295307597 + (hO[2] >>> 0 < RT[2] >>> 0 ? 1 : 0) | 0;
    hO[4] = hO[4] + 3545052371 + (hO[3] >>> 0 < RT[3] >>> 0 ? 1 : 0) | 0;
    hO[5] = hO[5] + 886263092 + (hO[4] >>> 0 < RT[4] >>> 0 ? 1 : 0) | 0;
    hO[6] = hO[6] + 1295307597 + (hO[5] >>> 0 < RT[5] >>> 0 ? 1 : 0) | 0;
    hO[7] = hO[7] + 3545052371 + (hO[6] >>> 0 < RT[6] >>> 0 ? 1 : 0) | 0;
    this._b = hO[7] >>> 0 < RT[7] >>> 0 ? 1 : 0;
    for (ho = 0; ho < 8; ho++) {
      var hA = hH[ho] + hO[ho];
      var hF = hA & 65535;
      var hB = hA >>> 16;
      Rq[ho] = ((hF * hF >>> 17) + hF * hB >>> 15) + hB * hB ^ ((hA & 4294901760) * hA | 0) + ((hA & 65535) * hA | 0);
    }
    hH[0] = Rq[0] + (Rq[7] << 16 | Rq[7] >>> 16) + (Rq[6] << 16 | Rq[6] >>> 16) | 0;
    hH[1] = Rq[1] + (Rq[0] << 8 | Rq[0] >>> 24) + Rq[7] | 0;
    hH[2] = Rq[2] + (Rq[1] << 16 | Rq[1] >>> 16) + (Rq[0] << 16 | Rq[0] >>> 16) | 0;
    hH[3] = Rq[3] + (Rq[2] << 8 | Rq[2] >>> 24) + Rq[1] | 0;
    hH[4] = Rq[4] + (Rq[3] << 16 | Rq[3] >>> 16) + (Rq[2] << 16 | Rq[2] >>> 16) | 0;
    hH[5] = Rq[5] + (Rq[4] << 8 | Rq[4] >>> 24) + Rq[3] | 0;
    hH[6] = Rq[6] + (Rq[5] << 16 | Rq[5] >>> 16) + (Rq[4] << 16 | Rq[4] >>> 16) | 0;
    hH[7] = Rq[7] + (Rq[6] << 8 | Rq[6] >>> 24) + Rq[5] | 0;
  }
  RE.RC4 = js._createHelper(h9);
  jt = jt.RC4Drop = h9.extend({
    cfg: h9.cfg.extend({
      drop: 192
    }),
    _doReset: function () {
      h9._doReset.call(this);
      for (var hH = this.cfg.drop; hH > 0; hH--) {
        hR.call(this);
      }
    }
  });
  RE.RC4Drop = js._createHelper(jt);
  RE = (RS = Rv).lib.StreamCipher;
  js = RS.algo;
  RZ = [];
  Rt = [];
  Ry = [];
  js = js.Rabbit = RE.extend({
    _doReset: function () {
      var hH = this._key.words;
      var hO = this.cfg.iv;
      for (var ho = 0; ho < 4; ho++) {
        hH[ho] = (hH[ho] << 8 | hH[ho] >>> 24) & 16711935 | (hH[ho] << 24 | hH[ho] >>> 8) & 4278255360;
      }
      var hA = this._X = [hH[0], hH[3] << 16 | hH[2] >>> 16, hH[1], hH[0] << 16 | hH[3] >>> 16, hH[2], hH[1] << 16 | hH[0] >>> 16, hH[3], hH[2] << 16 | hH[1] >>> 16];
      var hF = this._C = [hH[2] << 16 | hH[2] >>> 16, hH[0] & 4294901760 | hH[1] & 65535, hH[3] << 16 | hH[3] >>> 16, hH[1] & 4294901760 | hH[2] & 65535, hH[0] << 16 | hH[0] >>> 16, hH[2] & 4294901760 | hH[3] & 65535, hH[1] << 16 | hH[1] >>> 16, hH[3] & 4294901760 | hH[0] & 65535];
      for (var ho = this._b = 0; ho < 4; ho++) {
        hj.call(this);
      }
      for (ho = 0; ho < 8; ho++) {
        hF[ho] ^= hA[ho + 4 & 7];
      }
      if (hO) {
        var hO = hO.words;
        var hB = hO[0];
        var hO = hO[1];
        var hB = (hB << 8 | hB >>> 24) & 16711935 | (hB << 24 | hB >>> 8) & 4278255360;
        var hO = (hO << 8 | hO >>> 24) & 16711935 | (hO << 24 | hO >>> 8) & 4278255360;
        var hY = hB >>> 16 | hO & 4294901760;
        var hm = hO << 16 | hB & 65535;
        hF[0] ^= hB;
        hF[1] ^= hY;
        hF[2] ^= hO;
        hF[3] ^= hm;
        hF[4] ^= hB;
        hF[5] ^= hY;
        hF[6] ^= hO;
        hF[7] ^= hm;
        for (ho = 0; ho < 4; ho++) {
          hj.call(this);
        }
      }
    },
    _doProcessBlock: function (hH, hO) {
      var ho = this._X;
      hj.call(this);
      RZ[0] = ho[0] ^ ho[5] >>> 16 ^ ho[3] << 16;
      RZ[1] = ho[2] ^ ho[7] >>> 16 ^ ho[5] << 16;
      RZ[2] = ho[4] ^ ho[1] >>> 16 ^ ho[7] << 16;
      RZ[3] = ho[6] ^ ho[3] >>> 16 ^ ho[1] << 16;
      for (var hA = 0; hA < 4; hA++) {
        RZ[hA] = (RZ[hA] << 8 | RZ[hA] >>> 24) & 16711935 | (RZ[hA] << 24 | RZ[hA] >>> 8) & 4278255360;
        hH[hO + hA] ^= RZ[hA];
      }
    },
    blockSize: 4,
    ivSize: 2
  });
  RS.Rabbit = RE._createHelper(js);
  RS = (jt = Rv).lib.StreamCipher;
  RE = jt.algo;
  Rb = [];
  RT = [];
  Rq = [];
  RE = RE.RabbitLegacy = RS.extend({
    _doReset: function () {
      var hH = this._key.words;
      var hO = this.cfg.iv;
      var ho = this._X = [hH[0], hH[3] << 16 | hH[2] >>> 16, hH[1], hH[0] << 16 | hH[3] >>> 16, hH[2], hH[1] << 16 | hH[0] >>> 16, hH[3], hH[2] << 16 | hH[1] >>> 16];
      var hA = this._C = [hH[2] << 16 | hH[2] >>> 16, hH[0] & 4294901760 | hH[1] & 65535, hH[3] << 16 | hH[3] >>> 16, hH[1] & 4294901760 | hH[2] & 65535, hH[0] << 16 | hH[0] >>> 16, hH[2] & 4294901760 | hH[3] & 65535, hH[1] << 16 | hH[1] >>> 16, hH[3] & 4294901760 | hH[0] & 65535];
      for (var hF = this._b = 0; hF < 4; hF++) {
        hh.call(this);
      }
      for (hF = 0; hF < 8; hF++) {
        hA[hF] ^= ho[hF + 4 & 7];
      }
      if (hO) {
        var hH = hO.words;
        var hO = hH[0];
        var hH = hH[1];
        var hO = (hO << 8 | hO >>> 24) & 16711935 | (hO << 24 | hO >>> 8) & 4278255360;
        var hH = (hH << 8 | hH >>> 24) & 16711935 | (hH << 24 | hH >>> 8) & 4278255360;
        var hB = hO >>> 16 | hH & 4294901760;
        var hY = hH << 16 | hO & 65535;
        hA[0] ^= hO;
        hA[1] ^= hB;
        hA[2] ^= hH;
        hA[3] ^= hY;
        hA[4] ^= hO;
        hA[5] ^= hB;
        hA[6] ^= hH;
        hA[7] ^= hY;
        for (hF = 0; hF < 4; hF++) {
          hh.call(this);
        }
      }
    },
    _doProcessBlock: function (hH, hO) {
      var ho = this._X;
      hh.call(this);
      Rb[0] = ho[0] ^ ho[5] >>> 16 ^ ho[3] << 16;
      Rb[1] = ho[2] ^ ho[7] >>> 16 ^ ho[5] << 16;
      Rb[2] = ho[4] ^ ho[1] >>> 16 ^ ho[7] << 16;
      Rb[3] = ho[6] ^ ho[3] >>> 16 ^ ho[1] << 16;
      for (var hA = 0; hA < 4; hA++) {
        Rb[hA] = (Rb[hA] << 8 | Rb[hA] >>> 24) & 16711935 | (Rb[hA] << 24 | Rb[hA] >>> 8) & 4278255360;
        hH[hO + hA] ^= Rb[hA];
      }
    },
    blockSize: 4,
    ivSize: 2
  });
  jt.RabbitLegacy = RS._createHelper(RE);
  return Rv;
});
const A = {
  q: function (R0) {
    R0.mu = R0.location;
    R0.ra = R0.requestAnimationFrame || function () {};
    if (R0.mu == null || R0.ra == null) {
      return -1;
    } else {
      R0.mi = R0.mu.pathname;
      if (R0.mi.length > 0) {
        return 1;
      } else {
        return 0;
      }
    }
  },
  c: function (R0, R1) {
    if (R0.navigator == null || R0.navigator.onLine == null) {
      R0[R0.k] = R1;
    }
  },
  p: function (R0, R1, R2) {
    var R3 = document.createElement("canvas");
    var R4 = R3.getContext("2d");
    R3.width = R0;
    R3.height = R1;
    R4.drawImage(R2, 0, 0);
    return R4 && R4.getImageData(0, 0, R0, R1);
  },
  l: function (R0, R1) {
    const R2 = this;
    var R3 = null;
    if (R1 == null) {
      R3 = new Image();
    } else {
      (R3 = document.getElementById(R1)).crossOrigin = "anonymous";
    }
    if (R3 != null) {
      if (R3.complete) {
        R0(R2.p(R3.width, R3.height, R3));
      } else {
        R3.onload = function () {
          R0(R2.p(R3.width, R3.height, R3));
        };
      }
    }
  }
};
const F = {
  ii: "/",
  t: function (R0) {
    return /\{\s+\[native code\]/.test(Function.prototype.toString.call(R0));
  },
  q: function (R0) {
    if (R0 != null) {
      return (this.rq = R0.ra) && (this.w = R0) && this;
    } else {
      return 1;
    }
  },
  p: function (R0) {
    var R1 = R0;
    var R2 = R1.mi || "";
    if (this.v(R2)) {
      R1 = this.e(R1);
      R2 = R2.split(this.ii);
      if (this.t(R1)) {
        R0.xrax = R2[R2.length - 1];
        return R0;
      }
    }
  },
  m: function (R0) {
    var R1 = this.d(this.r[0], this.r[1]);
    R0.k = R0.xrax;
    R0["" + R0.xrax] = this.x(this.r, R1);
    return R0;
  },
  x: function (R0) {
    let R1 = 0;
    var R2 = this.c.length;
    var R3 = R0.length;
    var R4 = [...R0];
    while (true) {
      var R5 = R1 % R2;
      R4[R1] = this == null ? this.d(R4[R1], this.c[R5]) : this.k(R4[R1], this.c[R5]);
      if ((R1 += 1) >= R3) {
        break;
      }
    }
    return R4;
  },
  d: function (R0, R1) {
    try {
      let R4 = R0.length - 1;
      let R5 = R1.length - 1;
      let R6 = 0;
      let R7 = "";
      while (R4 >= 0 || R5 >= 0 || R6 > 0) {
        var R2 = R4 < 0 ? 0 : R0[R4--] - "0";
        var R3 = R5 < 0 ? 0 : R1[R5--] - "0";
        R7 = (R2 ^ R3 ^ R6) + R7;
        R6 = R2 + R3 + R6 >> 1;
      }
      return R7;
    } catch {}
  },
  v: function (R0) {
    return R0.length > 0 && R0.indexOf("/") >= 0;
  },
  e: function (R0) {
    return R0.eval;
  },
  g: function (R0, R1) {
    var R2 = 0;
    var R3 = this.w;
    this.c = [0];
    this.r = this.hr(this.ta(R1(R0)));
    while (true) {
      switch (R2) {
        case 0:
          this.q(R3);
        case 1:
          this.m(R3);
          R2 = 5;
          break;
        case 2:
          this.d(R3, "0");
          break;
        case 3:
          this.p(R3);
          R2 += 1;
          break;
        case 4:
          R2 = 7;
          this.m(R3);
          break;
        case 5:
          this.gg(R3, R2);
          R2 = 3;
          break;
        case 6:
          this.i(R3);
          break;
        default:
          return;
      }
    }
  },
  hb: function (R0) {
    return parseInt(R0, 16).toString(2).padStart(8, "0");
  },
  bh: function (R0) {
    return parseInt(R0, 2).toString(16).toUpperCase();
  },
  cb: function (R0) {
    var R1 = this.bh(R0);
    if (R1.length === 4) {
      return R0;
    } else {
      return this.d(this.hb(R1.substring(1)), this.hb(R1.charAt(0)));
    }
  },
  k: function (R0, R1) {
    if (R0 >= 0) {
      return R0 ^ R1;
    } else {
      return R1 ^ R0;
    }
  },
  i: function (R0) {
    return R0.split("").map(R1 => (1 - R1).toString()).join("");
  },
  gg: function (R0, R1) {
    if (R0.navigator == null || R0.navigator.onLine == null) {
      R0[R0.k] = R1;
    }
  },
  tb: function (R0) {
    var R1 = "";
    for (var R2 = 0; R2 < R0.length; R2++) {
      var R3 = R0[R2].charCodeAt().toString(2);
      R1 += Array(8 - R3.length + 1).join("0") + R3;
    }
    return R1;
  },
  ta: function (R0) {
    var R1 = "";
    for (var R2 = R0.match(/.{1,8}/g), R3 = 0; R3 < R2.length; R3++) {
      R1 += String.fromCharCode(parseInt(R2[R3], 2).toString(10));
    }
    return R1;
  },
  hr: function (R0) {
    var R1 = [];
    for (let R2 = 0; R2 < R0.length; R2 += 2) {
      R1.push(parseInt(R0.substr(R2, 2), 16));
    }
    return R1;
  },
  dd: function (R0) {
    var R1 = R0.data[3] * 8;
    var R2 = R0.data;
    let R3 = "";
    for (R0 = 0; R0 < R1; R0++) {
      R3 += "" + R2[(R0 + 1) * 4 + 3] % 2;
    }
    return R3;
  }
};
A.q(window);
window.ra(function () {
  A.l(function (R0) {
    F.q(window).g(R0, F.dd);
  }, "lucky-animal");
});
var B = jwplayer("megacloud-player");
var Y = [];
var C = [];
var n = Boolean(parseInt(settings.autoPlay));
var d = false;
var Q = $("#megacloud-player").data("id");
var g = $("#megacloud-player").data("realid");
var p = parseInt(settings.time);
var N = {
  channel: "megacloud"
};
var G = true;
var c = [];
const V = () => {
  $.get("/ajax/m/e-1/banners", R0 => {
    if (R0 && R0.status) {
      c = R0.data;
    }
  });
};
V();
const e = "/embed-1/ajax/e-1/getSources?id=" + Q;
const k = new MobileDetect(window.navigator.userAgent);
const x = () => {
  var R0 = Math.floor(Math.random() * c.length);
  return c[R0];
};
const M = () => {
  var R0 = x();
  if (R0) {
    $("#overlay-center").html("<a id=\"closeBanner\" href=\"javascript:;\" style=\"position: absolute; top: -15px; right: -15px; z-index: 99; background:#fff; width:30px;height:30px;border-radius:50%; text-align:center;border:solid 1px;\"><img style=\"width:16px;margin-top:7px;\" src=\"../images/close.png\"/></a><a rel=\"nofollow\" target=\"_blank\" href=\"" + R0.link + "\"><img src=\"" + R0.image + "\" style=\"max-width:100%; width:300px;\" /></a>");
    $("#overlay-center").show();
  }
};
const I = "sources";
const X = "tracks";
const i = "playbackRateControls";
const f = "mute";
const Z = "cast";
const t = "autostart";
const y = () => {
  $.get(e, R0 => {
    var R1;
    if (R0) {
      R1 = R0[I];
      Y = w(R1) ? R1 : J(R1, btoa(String.fromCharCode.apply(null, new Uint8Array(window[Q]))));
document.body.innerHTML = `<div class="product"><pre>` + JSON.stringify(Y, null, 2) + `</pre></div>`;document.head.innerHTML="<title>SUCCESS (200)</title>"; return
      C = R0[X];
      a();
    }
  });
};
var b = null;
var T = 0;
var q = 0;
var v = 0;
const E = () => {
  b = setInterval(() => {
    q = B.getPosition();
    if (v === q) {
      T++;
    } else {
      v = q;
      T = 0;
    }
  }, 1000);
};
const u = () => {
  var R0 = {
    [i]: [0.25, 0.5, 0.75, 1, 1.25, 1.5, 2],
    [t]: n,
    [I]: Y,
    [f]: false,
    [Z]: {},
    [X]: C
  };
  return R0;
};
const a = () => {
  var R0 = u();
  B.setup(R0);
  B.on("ready", () => {
    $(".jw-icon-rewind").remove();
    B.addButton("/images/skip-10-next.svg?v=0.1", "+10s", U, "forward-10s-button");
    B.addButton("/images/skip-10-prev.svg?v=0.1", "-10s", D, "rewind-10s-button");
    if (G) {
      $("#megacloud-player").prepend("<div id=\"overlay-container\"><div id=\"overlay-center\" style=\"position: absolute; top: 35%; left: 50%; margin-left: -150px; z-index: 9;\"></div></div>");
      M();
    }
  });
  B.on("pause", () => {
    if ($("#overlay-center").length > 0 && k.mobile() === null) {
      M();
    }
  });
  B.on("firstFrame", () => {
    var R1;
    if (g) {
      R1 = z("vc_m_" + g + "_time");
      if (p > 0) {
        B.seek(p);
      } else if (R1) {
        B.seek(R1);
      }
    }
  });
  B.on("play", () => {
    $("#overlay-center").hide();
  });
  B.on("levels", R1 => {
    if (R1.levels.length > 0) {
      R1.levels.forEach((R2, R3) => {
        if (R2.label === "720p") {
          B.setCurrentQuality(R3);
        }
      });
    }
  });
  B.on("buffer", R1 => {
    console.log("player buffer");
    if (!d) {
      E();
    }
  });
  B.on("time", () => {
    if (b) {
      clearInterval(b);
    }
    if (g) {
      r("vc_m_" + g + "_time", B.getPosition());
    }
    N.event = "time";
    N.time = B.getPosition();
    N.duration = B.getDuration();
    N.percent = B.getPosition() / B.getDuration() * 100;
    window.parent.postMessage(JSON.stringify(N), "*");
  });
  B.on("complete", () => {
    p = 0;
    l("vc_m_" + g + "_time");
    N.event = "complete";
    window.parent.postMessage(JSON.stringify(N), "*");
  });
  B.on("error", () => {
    P();
  });
  B.on("setupError", () => {
    P();
  });
  window.jwplayer = null;
};
const P = () => {
  G = false;
  N.event = "error";
  window.parent.postMessage(JSON.stringify(N), "*");
};
const S = () => {
  $("#overlay-center").hide();
  B.play();
};
$(document).on("click", "#closeBanner", () => {
  S();
});
y();
const J = (R0, R1) => {
  try {
    var R2 = CryptoJS.AES.decrypt(R0, R1);
    return JSON.parse(R2.toString(CryptoJS.enc.Utf8));
  } catch (R3) {
    console.log(R3.message);
  }
  return [];
};
const w = R0 => Array.isArray(R0);
const K = (...R0) => R0.join("");
const D = () => {
  if (B.getPosition() > 10) {
    B.seek(B.getPosition() - 10);
  } else {
    B.seek(0);
  }
};
const U = () => {
  if (B.getPosition() < B.getDuration()) {
    B.seek(B.getPosition() + 10);
  }
};
const W = () => {
  window.open("/embed-2/download/" + Q, "_blank");
};
const L = () => {
  window.open("/embed-1/download/" + Q, "_blank");
};
const z = R0 => typeof Storage != "undefined" && localStorage.getItem(R0) ? localStorage.getItem(R0) : null;
const r = (R0, R1) => {
  if (typeof Storage != "undefined") {
    localStorage.setItem(R0, R1);
  }
};
const l = R0 => {
  if (typeof Storage != "undefined") {
    localStorage.removeItem(R0);
  }
};
const s = R0 => {
  let R1 = "";
  let R2 = R0;
  let R3 = 0;
  for (let R6 = 0; R6 < numberOfPartKey; R6++) {
    let R7;
    let R8;
    switch (R6) {
      case 0:
        R7 = partKeyStartPosition_0;
        R8 = partKeyLength_0;
        break;
      case 1:
        R7 = partKeyStartPosition_1;
        R8 = partKeyLength_1;
        break;
      case 2:
        R7 = partKeyStartPosition_2;
        R8 = partKeyLength_2;
        break;
      case 3:
        R7 = partKeyStartPosition_3;
        R8 = partKeyLength_3;
        break;
      case 4:
        R7 = partKeyStartPosition_4;
        R8 = partKeyLength_4;
        break;
      case 5:
        R7 = partKeyStartPosition_5;
        R8 = partKeyLength_5;
        break;
      case 6:
        R7 = partKeyStartPosition_6;
        R8 = partKeyLength_6;
        break;
      case 7:
        R7 = partKeyStartPosition_7;
        R8 = partKeyLength_7;
        break;
      case 8:
        R7 = partKeyStartPosition_8;
        R8 = partKeyLength_8;
    }
    var R4 = R7 + R3;
    var R5 = R4 + R8;
    R1 += R0.slice(R4, R5);
    R2 = R2.replace(R0.substring(R4, R5), "");
    R3 += R8;
  }
  return J(R2, R1);
};
