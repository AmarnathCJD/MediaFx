(function (N, n) {
  "use strict";

  if (typeof module == "object" && typeof module.exports == "object") {
    module.exports = N.document
      ? n(N, true)
      : function (y) {
          if (y.document) {
            return n(y);
          }
          throw new Error("jQuery requires a window with a document");
        };
  } else {
    n(N);
  }
})(typeof window != "undefined" ? window : this, function (S0, S1) {
  "use strict";

  function S2(zo) {
    return typeof zo == "function" && typeof zo.nodeType != "number";
  }
  function S3(zo) {
    return zo != null && zo === zo.window;
  }
  var S4 = [];
  var S5 = S0.document;
  var S6 = Object.getPrototypeOf;
  var S7 = S4.slice;
  var S8 = S4.concat;
  var S9 = S4.push;
  var SS = S4.indexOf;
  var SX = {};
  var Sz = SX.toString;
  var SA = SX.hasOwnProperty;
  var Sx = SA.toString;
  var SO = Sx.call(Object);
  var SY = {};
  var Sp = {
    type: true,
    src: true,
    noModule: true,
  };
  function SE(zo, zm, zT) {
    var zk;
    var zF = (zm = zm || S5).createElement("script");
    zF.text = zo;
    if (zT) {
      for (zk in Sp) {
        if (zT[zk]) {
          zF[zk] = zT[zk];
        }
      }
    }
    zm.head.appendChild(zF).parentNode.removeChild(zF);
  }
  function SG(zo) {
    if (zo == null) {
      return zo + "";
    } else if (typeof zo == "object" || typeof zo == "function") {
      return SX[Sz.call(zo)] || "object";
    } else {
      return typeof zo;
    }
  }
  function SR(zo, zm) {
    return new SR.fn.init(zo, zm);
  }
  var Sa = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
  function SV(zo) {
    var zm = !!zo && "length" in zo && zo.length;
    var zT = SG(zo);
    return (
      !S2(zo) &&
      !S3(zo) &&
      (zT === "array" ||
        zm === 0 ||
        (typeof zm == "number" && zm > 0 && zm - 1 in zo))
    );
  }
  SR.fn = SR.prototype = {
    jquery: "3.3.1",
    constructor: SR,
    length: 0,
    toArray: function () {
      return S7.call(this);
    },
    get: function (zo) {
      if (zo == null) {
        return S7.call(this);
      } else if (zo < 0) {
        return this[zo + this.length];
      } else {
        return this[zo];
      }
    },
    pushStack: function (zo) {
      zo = SR.merge(this.constructor(), zo);
      zo.prevObject = this;
      return zo;
    },
    each: function (zo) {
      return SR.each(this, zo);
    },
    map: function (zo) {
      return this.pushStack(
        SR.map(this, function (zm, zT) {
          return zo.call(zm, zT, zm);
        })
      );
    },
    slice: function () {
      return this.pushStack(S7.apply(this, arguments));
    },
    first: function () {
      return this.eq(0);
    },
    last: function () {
      return this.eq(-1);
    },
    eq: function (zo) {
      var zm = this.length;
      var zo = +zo + (zo < 0 ? zm : 0);
      return this.pushStack(zo >= 0 && zo < zm ? [this[zo]] : []);
    },
    end: function () {
      return this.prevObject || this.constructor();
    },
    push: S9,
    sort: S4.sort,
    splice: S4.splice,
  };
  SR.extend = SR.fn.extend = function () {
    var zo;
    var zm;
    var zT;
    var zk;
    var zF;
    var zl = arguments[0] || {};
    var zw = 1;
    var zj = arguments.length;
    var zi = false;
    if (typeof zl == "boolean") {
      zi = zl;
      zl = arguments[zw] || {};
      zw++;
    }
    if (typeof zl != "object" && !S2(zl)) {
      zl = {};
    }
    if (zw === zj) {
      zl = this;
      zw--;
    }
    for (; zw < zj; zw++) {
      if ((zo = arguments[zw]) != null) {
        for (zm in zo) {
          zF = zl[zm];
          if (zl !== (zT = zo[zm])) {
            if (
              zi &&
              zT &&
              (SR.isPlainObject(zT) || (zk = Array.isArray(zT)))
            ) {
              zF = zk
                ? ((zk = false), zF && Array.isArray(zF) ? zF : [])
                : zF && SR.isPlainObject(zF)
                ? zF
                : {};
              zl[zm] = SR.extend(zi, zF, zT);
            } else if (zT !== undefined) {
              zl[zm] = zT;
            }
          }
        }
      }
    }
    return zl;
  };
  SR.extend({
    expando: "jQuery" + ("3.3.1" + Math.random()).replace(/\D/g, ""),
    isReady: true,
    error: function (zo) {
      throw new Error(zo);
    },
    noop: function () {},
    isPlainObject: function (zo) {
      return (
        !!zo &&
        Sz.call(zo) === "[object Object]" &&
        (!(zo = S6(zo)) ||
          (typeof (zo = SA.call(zo, "constructor") && zo.constructor) ==
            "function" &&
            Sx.call(zo) === SO))
      );
    },
    isEmptyObject: function (zo) {
      for (var zm in zo) {
        return false;
      }
      return true;
    },
    globalEval: function (zo) {
      SE(zo);
    },
    each: function (zo, zm) {
      var zT;
      var zk = 0;
      if (SV(zo)) {
        for (
          zT = zo.length;
          zk < zT && zm.call(zo[zk], zk, zo[zk]) !== false;
          zk++
        );
      } else {
        for (zk in zo) {
          if (zm.call(zo[zk], zk, zo[zk]) === false) {
            break;
          }
        }
      }
      return zo;
    },
    trim: function (zo) {
      if (zo == null) {
        return "";
      } else {
        return (zo + "").replace(Sa, "");
      }
    },
    makeArray: function (zo, zm) {
      zm = zm || [];
      if (zo != null) {
        if (SV(Object(zo))) {
          SR.merge(zm, typeof zo == "string" ? [zo] : zo);
        } else {
          S9.call(zm, zo);
        }
      }
      return zm;
    },
    inArray: function (zo, zm, zT) {
      if (zm == null) {
        return -1;
      } else {
        return SS.call(zm, zo, zT);
      }
    },
    merge: function (zo, zm) {
      for (var zT = +zm.length, zk = 0, zF = zo.length; zk < zT; zk++) {
        zo[zF++] = zm[zk];
      }
      zo.length = zF;
      return zo;
    },
    grep: function (zo, zm, zT) {
      var zk = [];
      for (var zF = 0, zl = zo.length, zw = !zT; zF < zl; zF++) {
        if (!zm(zo[zF], zF) != zw) {
          zk.push(zo[zF]);
        }
      }
      return zk;
    },
    map: function (zo, zm, zT) {
      var zk;
      var zF;
      var zl = 0;
      var zw = [];
      if (SV(zo)) {
        for (zk = zo.length; zl < zk; zl++) {
          if ((zF = zm(zo[zl], zl, zT)) != null) {
            zw.push(zF);
          }
        }
      } else {
        for (zl in zo) {
          if ((zF = zm(zo[zl], zl, zT)) != null) {
            zw.push(zF);
          }
        }
      }
      return S8.apply([], zw);
    },
    guid: 1,
    support: SY,
  });
  if (typeof Symbol == "function") {
    SR.fn[Symbol.iterator] = S4[Symbol.iterator];
  }
  SR.each(
    "Boolean Number String Function Array Date RegExp Object Error Symbol".split(
      " "
    ),
    function (zo, zm) {
      SX["[object " + zm + "]"] = zm.toLowerCase();
    }
  );
  function Sq(zo, zm, zT) {
    var zk = [];
    var zF = zT !== undefined;
    while ((zo = zo[zm]) && zo.nodeType !== 9) {
      if (zo.nodeType === 1) {
        if (zF && SR(zo).is(zT)) {
          break;
        }
        zk.push(zo);
      }
    }
    return zk;
  }
  function SI(zo, zm) {
    var zT = [];
    for (; zo; zo = zo.nextSibling) {
      if (zo.nodeType === 1 && zo !== zm) {
        zT.push(zo);
      }
    }
    return zT;
  }
  var S4 = (function (zo) {
    function zm(Af, Ac, AK) {
      var AP = "0x" + Ac - 65536;
      if (AP != AP || AK) {
        return Ac;
      } else if (AP < 0) {
        return String.fromCharCode(65536 + AP);
      } else {
        return String.fromCharCode((AP >> 10) | 55296, (AP & 1023) | 56320);
      }
    }
    function zT(Af, Ac) {
      if (Ac) {
        if (Af === "\0") {
          return "∩┐╜";
        } else {
          return (
            Af.slice(0, -1) +
            "\\" +
            Af.charCodeAt(Af.length - 1).toString(16) +
            " "
          );
        }
      } else {
        return "\\" + Af;
      }
    }
    function zk() {
      zf();
    }
    var zF;
    var zl;
    var zw;
    var zj;
    var zi;
    var zZ;
    var zb;
    var zJ;
    var zB;
    var zv;
    var zC;
    var zf;
    var zc;
    var zK;
    var zP;
    var zN;
    var zn;
    var zy;
    var A0;
    var A1 = "sizzle" + +new Date();
    var A2 = zo.document;
    var A3 = 0;
    var A4 = 0;
    var A5 = Ao();
    var A6 = Ao();
    var A7 = Ao();
    function A8(Af, Ac) {
      if (Af === Ac) {
        zC = true;
      }
      return 0;
    }
    var A9 = {}.hasOwnProperty;
    var AS = [];
    var AX = AS.pop;
    var Az = AS.push;
    var AA = AS.push;
    var Ax = AS.slice;
    function AO(Af, Ac) {
      for (var AK = 0, AP = Af.length; AK < AP; AK++) {
        if (Af[AK] === Ac) {
          return AK;
        }
      }
      return -1;
    }
    var AY =
      "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped";
    var Ap = "[\\x20\\t\\r\\n\\f]";
    var AE = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+";
    var AG =
      "\\[" +
      Ap +
      "*(" +
      AE +
      ")(?:" +
      Ap +
      "*([*^$|!~]?=)" +
      Ap +
      "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" +
      AE +
      "))|)" +
      Ap +
      "*\\]";
    var AR =
      ":(" +
      AE +
      ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" +
      AG +
      ")*)|.*)\\)|)";
    var Aa = new RegExp(Ap + "+", "g");
    var AV = new RegExp(
      "^" + Ap + "+|((?:^|[^\\\\])(?:\\\\.)*)" + Ap + "+$",
      "g"
    );
    var Aq = new RegExp("^" + Ap + "*," + Ap + "*");
    var AI = new RegExp("^" + Ap + "*([>+~]|" + Ap + ")" + Ap + "*");
    var AH = new RegExp("=" + Ap + "*([^\\]'\"]*?)" + Ap + "*\\]", "g");
    var AU = new RegExp(AR);
    var Ad = new RegExp("^" + AE + "$");
    var AW = {
      ID: new RegExp("^#(" + AE + ")"),
      CLASS: new RegExp("^\\.(" + AE + ")"),
      TAG: new RegExp("^(" + AE + "|[*])"),
      ATTR: new RegExp("^" + AG),
      PSEUDO: new RegExp("^" + AR),
      CHILD: new RegExp(
        "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" +
          Ap +
          "*(even|odd|(([+-]|)(\\d*)n|)" +
          Ap +
          "*(?:([+-]|)" +
          Ap +
          "*(\\d+)|))" +
          Ap +
          "*\\)|)",
        "i"
      ),
      bool: new RegExp("^(?:" + AY + ")$", "i"),
      needsContext: new RegExp(
        "^" +
          Ap +
          "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
          Ap +
          "*((?:-\\d)?\\d*)" +
          Ap +
          "*\\)|)(?=[^-]|$)",
        "i"
      ),
    };
    var Ag = /^(?:input|select|textarea|button)$/i;
    var Ah = /^h\d$/i;
    var AD = /^[^{]+\{\s*\[native \w/;
    var Au = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/;
    var Ar = /[+~]/;
    var AM = new RegExp("\\\\([\\da-f]{1,6}" + Ap + "?|(" + Ap + ")|.)", "ig");
    var AQ = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g;
    var As = Ab(
      function (Af) {
        return Af.disabled === true && ("form" in Af || "label" in Af);
      },
      {
        dir: "parentNode",
        next: "legend",
      }
    );
    try {
      AA.apply((AS = Ax.call(A2.childNodes)), A2.childNodes);
      AS[A2.childNodes.length].nodeType;
    } catch (Af) {
      AA = {
        apply: AS.length
          ? function (Ac, AK) {
              Az.apply(Ac, Ax.call(AK));
            }
          : function (Ac, AK) {
              for (var AP = Ac.length, AN = 0; (Ac[AP++] = AK[AN++]); );
              Ac.length = AP - 1;
            },
      };
    }
    function AL(Ac, AK, AP, AN) {
      var An;
      var Ay;
      var x0;
      var x1;
      var x2;
      var x3;
      var x4;
      var x5 = AK && AK.ownerDocument;
      var x6 = AK ? AK.nodeType : 9;
      AP = AP || [];
      if (typeof Ac != "string" || !Ac || (x6 !== 1 && x6 !== 9 && x6 !== 11)) {
        return AP;
      }
      if (
        !AN &&
        ((AK ? AK.ownerDocument || AK : A2) !== zc && zf(AK),
        (AK = AK || zc),
        zP)
      ) {
        if (x6 !== 11 && (x2 = Au.exec(Ac))) {
          if ((An = x2[1])) {
            if (x6 === 9) {
              if (!(x0 = AK.getElementById(An))) {
                return AP;
              }
              if (x0.id === An) {
                AP.push(x0);
                return AP;
              }
            } else if (
              x5 &&
              (x0 = x5.getElementById(An)) &&
              A0(AK, x0) &&
              x0.id === An
            ) {
              AP.push(x0);
              return AP;
            }
          } else {
            if (x2[2]) {
              AA.apply(AP, AK.getElementsByTagName(Ac));
              return AP;
            }
            if (
              (An = x2[3]) &&
              zl.getElementsByClassName &&
              AK.getElementsByClassName
            ) {
              AA.apply(AP, AK.getElementsByClassName(An));
              return AP;
            }
          }
        }
        if (zl.qsa && !A7[Ac + " "] && (!zN || !zN.test(Ac))) {
          if (x6 !== 1) {
            x5 = AK;
            x4 = Ac;
          } else if (AK.nodeName.toLowerCase() !== "object") {
            if ((x1 = AK.getAttribute("id"))) {
              x1 = x1.replace(AQ, zT);
            } else {
              AK.setAttribute("id", (x1 = A1));
            }
            Ay = (x3 = zZ(Ac)).length;
            while (Ay--) {
              x3[Ay] = "#" + x1 + " " + AZ(x3[Ay]);
            }
            x4 = x3.join(",");
            x5 = (Ar.test(Ac) && Aj(AK.parentNode)) || AK;
          }
          if (x4) {
            try {
              AA.apply(AP, x5.querySelectorAll(x4));
              return AP;
            } catch (x7) {
            } finally {
              if (x1 === A1) {
                AK.removeAttribute("id");
              }
            }
          }
        }
      }
      return zJ(Ac.replace(AV, "$1"), AK, AP, AN);
    }
    function Ao() {
      var Ac = [];
      function AK(AP, AN) {
        if (Ac.push(AP + " ") > zw.cacheLength) {
          delete AK[Ac.shift()];
        }
        return (AK[AP + " "] = AN);
      }
      return AK;
    }
    function Am(Ac) {
      Ac[A1] = true;
      return Ac;
    }
    function AT(Ac) {
      var AK = zc.createElement("fieldset");
      try {
        return !!Ac(AK);
      } catch (AP) {
        return false;
      } finally {
        if (AK.parentNode) {
          AK.parentNode.removeChild(AK);
        }
      }
    }
    function Ak(Ac, AK) {
      var AP = Ac.split("|");
      for (var AN = AP.length; AN--; ) {
        zw.attrHandle[AP[AN]] = AK;
      }
    }
    function AF(Ac, AK) {
      var AP = AK && Ac;
      var AN =
        AP &&
        Ac.nodeType === 1 &&
        AK.nodeType === 1 &&
        Ac.sourceIndex - AK.sourceIndex;
      if (AN) {
        return AN;
      }
      if (AP) {
        while ((AP = AP.nextSibling)) {
          if (AP === AK) {
            return -1;
          }
        }
      }
      if (Ac) {
        return 1;
      } else {
        return -1;
      }
    }
    function Al(Ac) {
      return function (AK) {
        if ("form" in AK) {
          if (AK.parentNode && AK.disabled === false) {
            if ("label" in AK) {
              if ("label" in AK.parentNode) {
                return AK.parentNode.disabled === Ac;
              } else {
                return AK.disabled === Ac;
              }
            } else {
              return (
                AK.isDisabled === Ac || (AK.isDisabled !== !Ac && As(AK) === Ac)
              );
            }
          } else {
            return AK.disabled === Ac;
          }
        } else {
          return "label" in AK && AK.disabled === Ac;
        }
      };
    }
    function Aw(Ac) {
      return Am(function (AK) {
        AK = +AK;
        return Am(function (AP, AN) {
          var An;
          var Ay = Ac([], AP.length, AK);
          for (var x0 = Ay.length; x0--; ) {
            if (AP[(An = Ay[x0])]) {
              AP[An] = !(AN[An] = AP[An]);
            }
          }
        });
      });
    }
    function Aj(Ac) {
      return Ac && Ac.getElementsByTagName !== undefined && Ac;
    }
    zl = AL.support = {};
    zi = AL.isXML = function (Ac) {
      Ac = Ac && (Ac.ownerDocument || Ac).documentElement;
      return !!Ac && Ac.nodeName !== "HTML";
    };
    zf = AL.setDocument = function (Ac) {
      var Ac = Ac ? Ac.ownerDocument || Ac : A2;
      if (Ac !== zc && Ac.nodeType === 9 && Ac.documentElement) {
        zK = (zc = Ac).documentElement;
        zP = !zi(zc);
        if (A2 !== zc && (Ac = zc.defaultView) && Ac.top !== Ac) {
          if (Ac.addEventListener) {
            Ac.addEventListener("unload", zk, false);
          } else if (Ac.attachEvent) {
            Ac.attachEvent("onunload", zk);
          }
        }
        zl.attributes = AT(function (AK) {
          AK.className = "i";
          return !AK.getAttribute("className");
        });
        zl.getElementsByTagName = AT(function (AK) {
          AK.appendChild(zc.createComment(""));
          return !AK.getElementsByTagName("*").length;
        });
        zl.getElementsByClassName = AD.test(zc.getElementsByClassName);
        zl.getById = AT(function (AK) {
          zK.appendChild(AK).id = A1;
          return !zc.getElementsByName || !zc.getElementsByName(A1).length;
        });
        if (zl.getById) {
          zw.filter.ID = function (AK) {
            var AP = AK.replace(AM, zm);
            return function (AN) {
              return AN.getAttribute("id") === AP;
            };
          };
          zw.find.ID = function (AK, AP) {
            if (AP.getElementById !== undefined && zP) {
              if ((AP = AP.getElementById(AK))) {
                return [AP];
              } else {
                return [];
              }
            }
          };
        } else {
          zw.filter.ID = function (AK) {
            var AP = AK.replace(AM, zm);
            return function (AN) {
              AN =
                AN.getAttributeNode !== undefined && AN.getAttributeNode("id");
              return AN && AN.value === AP;
            };
          };
          zw.find.ID = function (AK, AP) {
            if (AP.getElementById !== undefined && zP) {
              var AN;
              var An;
              var Ay;
              var x0 = AP.getElementById(AK);
              if (x0) {
                if ((AN = x0.getAttributeNode("id")) && AN.value === AK) {
                  return [x0];
                }
                Ay = AP.getElementsByName(AK);
                An = 0;
                while ((x0 = Ay[An++])) {
                  if ((AN = x0.getAttributeNode("id")) && AN.value === AK) {
                    return [x0];
                  }
                }
              }
              return [];
            }
          };
        }
        zw.find.TAG = zl.getElementsByTagName
          ? function (AK, AP) {
              if (AP.getElementsByTagName !== undefined) {
                return AP.getElementsByTagName(AK);
              } else if (zl.qsa) {
                return AP.querySelectorAll(AK);
              } else {
                return undefined;
              }
            }
          : function (AK, AP) {
              var AN;
              var An = [];
              var Ay = 0;
              var x0 = AP.getElementsByTagName(AK);
              if (AK !== "*") {
                return x0;
              }
              while ((AN = x0[Ay++])) {
                if (AN.nodeType === 1) {
                  An.push(AN);
                }
              }
              return An;
            };
        zw.find.CLASS =
          zl.getElementsByClassName &&
          function (AK, AP) {
            if (AP.getElementsByClassName !== undefined && zP) {
              return AP.getElementsByClassName(AK);
            }
          };
        zn = [];
        zN = [];
        if ((zl.qsa = AD.test(zc.querySelectorAll))) {
          AT(function (AK) {
            zK.appendChild(AK).innerHTML =
              "<a id='" +
              A1 +
              "'></a><select id='" +
              A1 +
              "-\r\\' msallowcapture=''><option selected=''></option></select>";
            if (AK.querySelectorAll("[msallowcapture^='']").length) {
              zN.push("[*^$]=" + Ap + "*(?:''|\"\")");
            }
            if (!AK.querySelectorAll("[selected]").length) {
              zN.push("\\[" + Ap + "*(?:value|" + AY + ")");
            }
            if (!AK.querySelectorAll("[id~=" + A1 + "-]").length) {
              zN.push("~=");
            }
            if (!AK.querySelectorAll(":checked").length) {
              zN.push(":checked");
            }
            if (!AK.querySelectorAll("a#" + A1 + "+*").length) {
              zN.push(".#.+[+~]");
            }
          });
          AT(function (AK) {
            AK.innerHTML =
              "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
            var AP = zc.createElement("input");
            AP.setAttribute("type", "hidden");
            AK.appendChild(AP).setAttribute("name", "D");
            if (AK.querySelectorAll("[name=d]").length) {
              zN.push("name" + Ap + "*[*^$|!~]?=");
            }
            if (AK.querySelectorAll(":enabled").length !== 2) {
              zN.push(":enabled", ":disabled");
            }
            zK.appendChild(AK).disabled = true;
            if (AK.querySelectorAll(":disabled").length !== 2) {
              zN.push(":enabled", ":disabled");
            }
            AK.querySelectorAll("*,:x");
            zN.push(",.*:");
          });
        }
        if (
          (zl.matchesSelector = AD.test(
            (zy =
              zK.matches ||
              zK.webkitMatchesSelector ||
              zK.mozMatchesSelector ||
              zK.oMatchesSelector ||
              zK.msMatchesSelector)
          ))
        ) {
          AT(function (AK) {
            zl.disconnectedMatch = zy.call(AK, "*");
            zy.call(AK, "[s!='']:x");
            zn.push("!=", AR);
          });
        }
        zN = zN.length && new RegExp(zN.join("|"));
        zn = zn.length && new RegExp(zn.join("|"));
        Ac = AD.test(zK.compareDocumentPosition);
        A0 =
          Ac || AD.test(zK.contains)
            ? function (AK, AP) {
                var AN = AK.nodeType === 9 ? AK.documentElement : AK;
                var AP = AP && AP.parentNode;
                return (
                  AK === AP ||
                  (!!AP &&
                    AP.nodeType === 1 &&
                    !!(AN.contains
                      ? AN.contains(AP)
                      : AK.compareDocumentPosition &&
                        AK.compareDocumentPosition(AP) & 16))
                );
              }
            : function (AK, AP) {
                if (AP) {
                  while ((AP = AP.parentNode)) {
                    if (AP === AK) {
                      return true;
                    }
                  }
                }
                return false;
              };
        A8 = Ac
          ? function (AK, AP) {
              var AN;
              if (AK === AP) {
                zC = true;
                return 0;
              } else {
                return (
                  !AK.compareDocumentPosition - !AP.compareDocumentPosition ||
                  ((AN =
                    (AK.ownerDocument || AK) === (AP.ownerDocument || AP)
                      ? AK.compareDocumentPosition(AP)
                      : 1) & 1 ||
                  (!zl.sortDetached && AP.compareDocumentPosition(AK) === AN)
                    ? AK === zc || (AK.ownerDocument === A2 && A0(A2, AK))
                      ? -1
                      : AP === zc || (AP.ownerDocument === A2 && A0(A2, AP))
                      ? 1
                      : zv
                      ? AO(zv, AK) - AO(zv, AP)
                      : 0
                    : AN & 4
                    ? -1
                    : 1)
                );
              }
            }
          : function (AK, AP) {
              if (AK === AP) {
                zC = true;
                return 0;
              }
              var AN;
              var An = 0;
              var Ay = AK.parentNode;
              var x0 = AP.parentNode;
              var x1 = [AK];
              var x2 = [AP];
              if (!Ay || !x0) {
                if (AK === zc) {
                  return -1;
                } else if (AP === zc) {
                  return 1;
                } else if (Ay) {
                  return -1;
                } else if (x0) {
                  return 1;
                } else if (zv) {
                  return AO(zv, AK) - AO(zv, AP);
                } else {
                  return 0;
                }
              }
              if (Ay === x0) {
                return AF(AK, AP);
              }
              for (AN = AK; (AN = AN.parentNode); ) {
                x1.unshift(AN);
              }
              for (AN = AP; (AN = AN.parentNode); ) {
                x2.unshift(AN);
              }
              while (x1[An] === x2[An]) {
                An++;
              }
              if (An) {
                return AF(x1[An], x2[An]);
              } else if (x1[An] === A2) {
                return -1;
              } else if (x2[An] === A2) {
                return 1;
              } else {
                return 0;
              }
            };
      }
      return zc;
    };
    AL.matches = function (Ac, AK) {
      return AL(Ac, null, null, AK);
    };
    AL.matchesSelector = function (Ac, AK) {
      if ((Ac.ownerDocument || Ac) !== zc) {
        zf(Ac);
      }
      AK = AK.replace(AH, "='$1']");
      if (
        zl.matchesSelector &&
        zP &&
        !A7[AK + " "] &&
        (!zn || !zn.test(AK)) &&
        (!zN || !zN.test(AK))
      ) {
        try {
          var AP = zy.call(Ac, AK);
          if (
            AP ||
            zl.disconnectedMatch ||
            (Ac.document && Ac.document.nodeType !== 11)
          ) {
            return AP;
          }
        } catch (AN) {}
      }
      return AL(AK, zc, null, [Ac]).length > 0;
    };
    AL.contains = function (Ac, AK) {
      if ((Ac.ownerDocument || Ac) !== zc) {
        zf(Ac);
      }
      return A0(Ac, AK);
    };
    AL.attr = function (Ac, AK) {
      if ((Ac.ownerDocument || Ac) !== zc) {
        zf(Ac);
      }
      var AP = zw.attrHandle[AK.toLowerCase()];
      var AP =
        AP && A9.call(zw.attrHandle, AK.toLowerCase())
          ? AP(Ac, AK, !zP)
          : undefined;
      if (AP !== undefined) {
        return AP;
      } else if (zl.attributes || !zP) {
        return Ac.getAttribute(AK);
      } else if ((AP = Ac.getAttributeNode(AK)) && AP.specified) {
        return AP.value;
      } else {
        return null;
      }
    };
    AL.escape = function (Ac) {
      return (Ac + "").replace(AQ, zT);
    };
    AL.error = function (Ac) {
      throw new Error("Syntax error, unrecognized expression: " + Ac);
    };
    AL.uniqueSort = function (Ac) {
      var AK;
      var AP = [];
      var AN = 0;
      var An = 0;
      zC = !zl.detectDuplicates;
      zv = !zl.sortStable && Ac.slice(0);
      Ac.sort(A8);
      if (zC) {
        while ((AK = Ac[An++])) {
          if (AK === Ac[An]) {
            AN = AP.push(An);
          }
        }
        while (AN--) {
          Ac.splice(AP[AN], 1);
        }
      }
      zv = null;
      return Ac;
    };
    zj = AL.getText = function (Ac) {
      var AK;
      var AP = "";
      var AN = 0;
      var An = Ac.nodeType;
      if (An) {
        if (An === 1 || An === 9 || An === 11) {
          if (typeof Ac.textContent == "string") {
            return Ac.textContent;
          }
          for (Ac = Ac.firstChild; Ac; Ac = Ac.nextSibling) {
            AP += zj(Ac);
          }
        } else if (An === 3 || An === 4) {
          return Ac.nodeValue;
        }
      } else {
        while ((AK = Ac[AN++])) {
          AP += zj(AK);
        }
      }
      return AP;
    };
    (zw = AL.selectors =
      {
        cacheLength: 50,
        createPseudo: Am,
        match: AW,
        attrHandle: {},
        find: {},
        relative: {
          ">": {
            dir: "parentNode",
            first: true,
          },
          " ": {
            dir: "parentNode",
          },
          "+": {
            dir: "previousSibling",
            first: true,
          },
          "~": {
            dir: "previousSibling",
          },
        },
        preFilter: {
          ATTR: function (Ac) {
            Ac[1] = Ac[1].replace(AM, zm);
            Ac[3] = (Ac[3] || Ac[4] || Ac[5] || "").replace(AM, zm);
            if (Ac[2] === "~=") {
              Ac[3] = " " + Ac[3] + " ";
            }
            return Ac.slice(0, 4);
          },
          CHILD: function (Ac) {
            Ac[1] = Ac[1].toLowerCase();
            if (Ac[1].slice(0, 3) === "nth") {
              if (!Ac[3]) {
                AL.error(Ac[0]);
              }
              Ac[4] = +(Ac[4]
                ? Ac[5] + (Ac[6] || 1)
                : (Ac[3] === "even" || Ac[3] === "odd") * 2);
              Ac[5] = +(Ac[7] + Ac[8] || Ac[3] === "odd");
            } else if (Ac[3]) {
              AL.error(Ac[0]);
            }
            return Ac;
          },
          PSEUDO: function (Ac) {
            var AK;
            var AP = !Ac[6] && Ac[2];
            if (AW.CHILD.test(Ac[0])) {
              return null;
            } else {
              if (Ac[3]) {
                Ac[2] = Ac[4] || Ac[5] || "";
              } else if (
                AP &&
                AU.test(AP) &&
                (AK =
                  (AK = zZ(AP, true)) &&
                  AP.indexOf(")", AP.length - AK) - AP.length)
              ) {
                Ac[0] = Ac[0].slice(0, AK);
                Ac[2] = AP.slice(0, AK);
              }
              return Ac.slice(0, 3);
            }
          },
        },
        filter: {
          TAG: function (Ac) {
            var AK = Ac.replace(AM, zm).toLowerCase();
            if (Ac === "*") {
              return function () {
                return true;
              };
            } else {
              return function (AP) {
                return AP.nodeName && AP.nodeName.toLowerCase() === AK;
              };
            }
          },
          CLASS: function (Ac) {
            var AK = A5[Ac + " "];
            return (
              AK ||
              ((AK = new RegExp("(^|" + Ap + ")" + Ac + "(" + Ap + "|$)")) &&
                A5(Ac, function (AP) {
                  return AK.test(
                    (typeof AP.className == "string" && AP.className) ||
                      (AP.getAttribute !== undefined &&
                        AP.getAttribute("class")) ||
                      ""
                  );
                }))
            );
          },
          ATTR: function (Ac, AK, AP) {
            return function (AN) {
              AN = AL.attr(AN, Ac);
              if (AN == null) {
                return AK === "!=";
              } else {
                return (
                  !AK ||
                  ((AN += ""),
                  AK === "="
                    ? AN === AP
                    : AK === "!="
                    ? AN !== AP
                    : AK === "^="
                    ? AP && AN.indexOf(AP) === 0
                    : AK === "*="
                    ? AP && AN.indexOf(AP) > -1
                    : AK === "$="
                    ? AP && AN.slice(-AP.length) === AP
                    : AK === "~="
                    ? (" " + AN.replace(Aa, " ") + " ").indexOf(AP) > -1
                    : AK === "|=" &&
                      (AN === AP || AN.slice(0, AP.length + 1) === AP + "-"))
                );
              }
            };
          },
          CHILD: function (Ac, AK, AP, AN, An) {
            var Ay = Ac.slice(0, 3) !== "nth";
            var x0 = Ac.slice(-4) !== "last";
            var x1 = AK === "of-type";
            if (AN === 1 && An === 0) {
              return function (x2) {
                return !!x2.parentNode;
              };
            } else {
              return function (x2, x3, x4) {
                var x5;
                var x6;
                var x7;
                var x8;
                var x9;
                var xS;
                var xX = Ay != x0 ? "nextSibling" : "previousSibling";
                var xz = x2.parentNode;
                var xA = x1 && x2.nodeName.toLowerCase();
                var xx = !x4 && !x1;
                var xO = false;
                if (xz) {
                  if (Ay) {
                    while (xX) {
                      for (x8 = x2; (x8 = x8[xX]); ) {
                        if (
                          x1
                            ? x8.nodeName.toLowerCase() === xA
                            : x8.nodeType === 1
                        ) {
                          return false;
                        }
                      }
                      xS = xX = Ac === "only" && !xS && "nextSibling";
                    }
                    return true;
                  }
                  xS = [x0 ? xz.firstChild : xz.lastChild];
                  if (x0 && xx) {
                    xO =
                      (x9 =
                        (x5 =
                          (x6 =
                            (x7 = (x8 = xz)[A1] || (x8[A1] = {}))[
                              x8.uniqueID
                            ] || (x7[x8.uniqueID] = {}))[Ac] || [])[0] === A3 &&
                        x5[1]) && x5[2];
                    x8 = x9 && xz.childNodes[x9];
                    while (
                      (x8 = (++x9 && x8 && x8[xX]) || ((xO = x9 = 0), xS.pop()))
                    ) {
                      if (x8.nodeType === 1 && ++xO && x8 === x2) {
                        x6[Ac] = [A3, x9, xO];
                        break;
                      }
                    }
                  } else if (
                    (xO = xx
                      ? (x9 =
                          (x5 =
                            (x6 =
                              (x7 = (x8 = x2)[A1] || (x8[A1] = {}))[
                                x8.uniqueID
                              ] || (x7[x8.uniqueID] = {}))[Ac] || [])[0] ===
                            A3 && x5[1])
                      : xO) === false
                  ) {
                    while (
                      (x8 =
                        (++x9 && x8 && x8[xX]) || ((xO = x9 = 0), xS.pop())) &&
                      ((x1
                        ? x8.nodeName.toLowerCase() !== xA
                        : x8.nodeType !== 1) ||
                        !++xO ||
                        (xx &&
                          ((x6 =
                            (x7 = x8[A1] ||= {})[x8.uniqueID] ||
                            (x7[x8.uniqueID] = {}))[Ac] = [A3, xO]),
                        x8 !== x2))
                    );
                  }
                  return (xO -= An) === AN || (xO % AN == 0 && xO / AN >= 0);
                }
              };
            }
          },
          PSEUDO: function (Ac, AK) {
            var AP;
            var AN =
              zw.pseudos[Ac] ||
              zw.setFilters[Ac.toLowerCase()] ||
              AL.error("unsupported pseudo: " + Ac);
            if (AN[A1]) {
              return AN(AK);
            } else if (AN.length > 1) {
              AP = [Ac, Ac, "", AK];
              if (zw.setFilters.hasOwnProperty(Ac.toLowerCase())) {
                return Am(function (An, Ay) {
                  var x0;
                  var x1 = AN(An, AK);
                  for (var x2 = x1.length; x2--; ) {
                    An[(x0 = AO(An, x1[x2]))] = !(Ay[x0] = x1[x2]);
                  }
                });
              } else {
                return function (An) {
                  return AN(An, 0, AP);
                };
              }
            } else {
              return AN;
            }
          },
        },
        pseudos: {
          not: Am(function (Ac) {
            var AK = [];
            var AP = [];
            var AN = zb(Ac.replace(AV, "$1"));
            if (AN[A1]) {
              return Am(function (An, Ay, x0, x1) {
                var x2;
                var x3 = AN(An, null, x1, []);
                for (var x4 = An.length; x4--; ) {
                  if ((x2 = x3[x4])) {
                    An[x4] = !(Ay[x4] = x2);
                  }
                }
              });
            } else {
              return function (An, Ay, x0) {
                AK[0] = An;
                AN(AK, null, x0, AP);
                AK[0] = null;
                return !AP.pop();
              };
            }
          }),
          has: Am(function (Ac) {
            return function (AK) {
              return AL(Ac, AK).length > 0;
            };
          }),
          contains: Am(function (Ac) {
            Ac = Ac.replace(AM, zm);
            return function (AK) {
              return (
                (AK.textContent || AK.innerText || zj(AK)).indexOf(Ac) > -1
              );
            };
          }),
          lang: Am(function (Ac) {
            if (!Ad.test(Ac || "")) {
              AL.error("unsupported lang: " + Ac);
            }
            Ac = Ac.replace(AM, zm).toLowerCase();
            return function (AK) {
              var AP;
              do {
                if (
                  (AP = zP
                    ? AK.lang
                    : AK.getAttribute("xml:lang") || AK.getAttribute("lang"))
                ) {
                  return (
                    (AP = AP.toLowerCase()) === Ac || AP.indexOf(Ac + "-") === 0
                  );
                }
              } while ((AK = AK.parentNode) && AK.nodeType === 1);
              return false;
            };
          }),
          target: function (Ac) {
            var AK = zo.location && zo.location.hash;
            return AK && AK.slice(1) === Ac.id;
          },
          root: function (Ac) {
            return Ac === zK;
          },
          focus: function (Ac) {
            return (
              Ac === zc.activeElement &&
              (!zc.hasFocus || zc.hasFocus()) &&
              (!!Ac.type || !!Ac.href || !!~Ac.tabIndex)
            );
          },
          enabled: Al(false),
          disabled: Al(true),
          checked: function (Ac) {
            var AK = Ac.nodeName.toLowerCase();
            return (
              (AK === "input" && !!Ac.checked) ||
              (AK === "option" && !!Ac.selected)
            );
          },
          selected: function (Ac) {
            if (Ac.parentNode) {
              Ac.parentNode.selectedIndex;
            }
            return Ac.selected === true;
          },
          empty: function (Ac) {
            for (Ac = Ac.firstChild; Ac; Ac = Ac.nextSibling) {
              if (Ac.nodeType < 6) {
                return false;
              }
            }
            return true;
          },
          parent: function (Ac) {
            return !zw.pseudos.empty(Ac);
          },
          header: function (Ac) {
            return Ah.test(Ac.nodeName);
          },
          input: function (Ac) {
            return Ag.test(Ac.nodeName);
          },
          button: function (Ac) {
            var AK = Ac.nodeName.toLowerCase();
            return (AK === "input" && Ac.type === "button") || AK === "button";
          },
          text: function (Ac) {
            return (
              Ac.nodeName.toLowerCase() === "input" &&
              Ac.type === "text" &&
              ((Ac = Ac.getAttribute("type")) == null ||
                Ac.toLowerCase() === "text")
            );
          },
          first: Aw(function () {
            return [0];
          }),
          last: Aw(function (Ac, AK) {
            return [AK - 1];
          }),
          eq: Aw(function (Ac, AK, AP) {
            return [AP < 0 ? AP + AK : AP];
          }),
          even: Aw(function (Ac, AK) {
            for (var AP = 0; AP < AK; AP += 2) {
              Ac.push(AP);
            }
            return Ac;
          }),
          odd: Aw(function (Ac, AK) {
            for (var AP = 1; AP < AK; AP += 2) {
              Ac.push(AP);
            }
            return Ac;
          }),
          lt: Aw(function (Ac, AK, AP) {
            for (var AN = AP < 0 ? AP + AK : AP; --AN >= 0; ) {
              Ac.push(AN);
            }
            return Ac;
          }),
          gt: Aw(function (Ac, AK, AP) {
            for (var AN = AP < 0 ? AP + AK : AP; ++AN < AK; ) {
              Ac.push(AN);
            }
            return Ac;
          }),
        },
      }).pseudos.nth = zw.pseudos.eq;
    for (zF in {
      radio: true,
      checkbox: true,
      file: true,
      password: true,
      image: true,
    }) {
      zw.pseudos[zF] = (function (Ac) {
        return function (AK) {
          return AK.nodeName.toLowerCase() === "input" && AK.type === Ac;
        };
      })(zF);
    }
    for (zF in {
      submit: true,
      reset: true,
    }) {
      zw.pseudos[zF] = (function (Ac) {
        return function (AK) {
          var AP = AK.nodeName.toLowerCase();
          return (AP === "input" || AP === "button") && AK.type === Ac;
        };
      })(zF);
    }
    function Ai() {}
    function AZ(Ac) {
      for (var AK = 0, AP = Ac.length, AN = ""; AK < AP; AK++) {
        AN += Ac[AK].value;
      }
      return AN;
    }
    function Ab(Ac, AK, AP) {
      var AN = AK.dir;
      var An = AK.next;
      var Ay = An || AN;
      var x0 = AP && Ay === "parentNode";
      var x1 = A4++;
      if (AK.first) {
        return function (x2, x3, x4) {
          while ((x2 = x2[AN])) {
            if (x2.nodeType === 1 || x0) {
              return Ac(x2, x3, x4);
            }
          }
          return false;
        };
      } else {
        return function (x2, x3, x4) {
          var x5;
          var x6;
          var x7 = [A3, x1];
          if (x4) {
            while ((x2 = x2[AN])) {
              if ((x2.nodeType === 1 || x0) && Ac(x2, x3, x4)) {
                return true;
              }
            }
          } else {
            while ((x2 = x2[AN])) {
              if (x2.nodeType === 1 || x0) {
                x6 =
                  (x6 = x2[A1] ||= {})[x2.uniqueID] || (x6[x2.uniqueID] = {});
                if (An && An === x2.nodeName.toLowerCase()) {
                  x2 = x2[AN] || x2;
                } else {
                  if ((x5 = x6[Ay]) && x5[0] === A3 && x5[1] === x1) {
                    return (x7[2] = x5[2]);
                  }
                  if (((x6[Ay] = x7)[2] = Ac(x2, x3, x4))) {
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
    function AJ(Ac) {
      if (Ac.length > 1) {
        return function (AK, AP, AN) {
          for (var An = Ac.length; An--; ) {
            if (!Ac[An](AK, AP, AN)) {
              return false;
            }
          }
          return true;
        };
      } else {
        return Ac[0];
      }
    }
    function AB(Ac, AK, AP, AN, An) {
      var Ay;
      var x0 = [];
      for (var x1 = 0, x2 = Ac.length, x3 = AK != null; x1 < x2; x1++) {
        if (!!(Ay = Ac[x1]) && (!AP || !!AP(Ay, AN, An))) {
          x0.push(Ay);
          if (x3) {
            AK.push(x1);
          }
        }
      }
      return x0;
    }
    function Av(Ac, AK, AP, AN, An, Ay) {
      if (AN && !AN[A1]) {
        AN = Av(AN);
      }
      if (An && !An[A1]) {
        An = Av(An, Ay);
      }
      return Am(function (x0, x1, x2, x3) {
        var x4;
        var x5;
        var x6;
        var x7 = [];
        var x8 = [];
        var x9 = x1.length;
        var xS =
          x0 ||
          (function (xA, xx, xO) {
            for (var xY = 0, xp = xx.length; xY < xp; xY++) {
              AL(xA, xx[xY], xO);
            }
            return xO;
          })(AK || "*", x2.nodeType ? [x2] : x2, []);
        var xX = !Ac || (!x0 && AK) ? xS : AB(xS, x7, Ac, x2, x3);
        var xz = AP ? (An || (x0 ? Ac : x9 || AN) ? [] : x1) : xX;
        if (AP) {
          AP(xX, xz, x2, x3);
        }
        if (AN) {
          x4 = AB(xz, x8);
          AN(x4, [], x2, x3);
          x5 = x4.length;
          while (x5--) {
            if ((x6 = x4[x5])) {
              xz[x8[x5]] = !(xX[x8[x5]] = x6);
            }
          }
        }
        if (x0) {
          if (An || Ac) {
            if (An) {
              x4 = [];
              x5 = xz.length;
              while (x5--) {
                if ((x6 = xz[x5])) {
                  x4.push((xX[x5] = x6));
                }
              }
              An(null, (xz = []), x4, x3);
            }
            for (x5 = xz.length; x5--; ) {
              if ((x6 = xz[x5]) && (x4 = An ? AO(x0, x6) : x7[x5]) > -1) {
                x0[x4] = !(x1[x4] = x6);
              }
            }
          }
        } else {
          xz = AB(xz === x1 ? xz.splice(x9, xz.length) : xz);
          if (An) {
            An(null, x1, xz, x3);
          } else {
            AA.apply(x1, xz);
          }
        }
      });
    }
    function AC(Ac, AK) {
      function AP(Ay, x0, x1, x2, x3) {
        var x4;
        var x5;
        var x6;
        var x7 = 0;
        var x8 = "0";
        var x9 = Ay && [];
        var xS = [];
        var xX = zB;
        var xz = Ay || (An && zw.find.TAG("*", x3));
        var xA = (A3 += xX == null ? 1 : Math.random() || 0.1);
        var xx = xz.length;
        for (
          x3 && (zB = x0 === zc || x0 || x3);
          x8 !== xx && (x4 = xz[x8]) != null;
          x8++
        ) {
          if (An && x4) {
            x5 = 0;
            if (!x0 && x4.ownerDocument !== zc) {
              zf(x4);
              x1 = !zP;
            }
            while ((x6 = Ac[x5++])) {
              if (x6(x4, x0 || zc, x1)) {
                x2.push(x4);
                break;
              }
            }
            if (x3) {
              A3 = xA;
            }
          }
          if (AN && ((x4 = !x6 && x4) && x7--, Ay)) {
            x9.push(x4);
          }
        }
        x7 += x8;
        if (AN && x8 !== x7) {
          for (x5 = 0; (x6 = AK[x5++]); ) {
            x6(x9, xS, x0, x1);
          }
          if (Ay) {
            if (x7 > 0) {
              while (x8--) {
                if (!x9[x8] && !xS[x8]) {
                  xS[x8] = AX.call(x2);
                }
              }
            }
            xS = AB(xS);
          }
          AA.apply(x2, xS);
          if (x3 && !Ay && xS.length > 0 && x7 + AK.length > 1) {
            AL.uniqueSort(x2);
          }
        }
        if (x3) {
          A3 = xA;
          zB = xX;
        }
        return x9;
      }
      var AN = AK.length > 0;
      var An = Ac.length > 0;
      if (AN) {
        return Am(AP);
      } else {
        return AP;
      }
    }
    Ai.prototype = zw.filters = zw.pseudos;
    zw.setFilters = new Ai();
    zZ = AL.tokenize = function (Ac, AK) {
      var AP;
      var AN;
      var An;
      var Ay;
      var x0;
      var x1;
      var x2;
      var x3 = A6[Ac + " "];
      if (x3) {
        if (AK) {
          return 0;
        } else {
          return x3.slice(0);
        }
      }
      x0 = Ac;
      x1 = [];
      x2 = zw.preFilter;
      while (x0) {
        if (!AP || !!(AN = Aq.exec(x0))) {
          if (AN) {
            x0 = x0.slice(AN[0].length) || x0;
          }
          x1.push((An = []));
        }
        AP = false;
        if ((AN = AI.exec(x0))) {
          AP = AN.shift();
          An.push({
            value: AP,
            type: AN[0].replace(AV, " "),
          });
          x0 = x0.slice(AP.length);
        }
        for (Ay in zw.filter) {
          if (!!(AN = AW[Ay].exec(x0)) && (!x2[Ay] || !!(AN = x2[Ay](AN)))) {
            AP = AN.shift();
            An.push({
              value: AP,
              type: Ay,
              matches: AN,
            });
            x0 = x0.slice(AP.length);
          }
        }
        if (!AP) {
          break;
        }
      }
      if (AK) {
        return x0.length;
      } else if (x0) {
        return AL.error(Ac);
      } else {
        return A6(Ac, x1).slice(0);
      }
    };
    zb = AL.compile = function (Ac, AK) {
      var AP;
      var AN = [];
      var An = [];
      var Ay = A7[Ac + " "];
      if (!Ay) {
        for (AP = (AK = AK || zZ(Ac)).length; AP--; ) {
          ((Ay = (function x0(x1) {
            var x2;
            var x3;
            var x4;
            for (
              var x5 = x1.length,
                x6 = zw.relative[x1[0].type],
                x7 = x6 || zw.relative[" "],
                x8 = x6 ? 1 : 0,
                x9 = Ab(
                  function (xz) {
                    return xz === x2;
                  },
                  x7,
                  true
                ),
                xS = Ab(
                  function (xz) {
                    return AO(x2, xz) > -1;
                  },
                  x7,
                  true
                ),
                xX = [
                  function (xz, xA, xx) {
                    xz =
                      (!x6 && (xx || xA !== zB)) ||
                      ((x2 = xA).nodeType ? x9 : xS)(xz, xA, xx);
                    x2 = null;
                    return xz;
                  },
                ];
              x8 < x5;
              x8++
            ) {
              if ((x3 = zw.relative[x1[x8].type])) {
                xX = [Ab(AJ(xX), x3)];
              } else {
                if (
                  (x3 = zw.filter[x1[x8].type].apply(null, x1[x8].matches))[A1]
                ) {
                  for (x4 = ++x8; x4 < x5 && !zw.relative[x1[x4].type]; x4++);
                  return Av(
                    x8 > 1 && AJ(xX),
                    x8 > 1 &&
                      AZ(
                        x1.slice(0, x8 - 1).concat({
                          value: x1[x8 - 2].type === " " ? "*" : "",
                        })
                      ).replace(AV, "$1"),
                    x3,
                    x8 < x4 && x0(x1.slice(x8, x4)),
                    x4 < x5 && x0((x1 = x1.slice(x4))),
                    x4 < x5 && AZ(x1)
                  );
                }
                xX.push(x3);
              }
            }
            return AJ(xX);
          })(AK[AP]))[A1]
            ? AN
            : An
          ).push(Ay);
        }
        (Ay = A7(Ac, AC(An, AN))).selector = Ac;
      }
      return Ay;
    };
    zJ = AL.select = function (Ac, AK, AP, AN) {
      var An;
      var Ay;
      var x0;
      var x1;
      var x2;
      var x3 = typeof Ac == "function" && Ac;
      var x4 = !AN && zZ((Ac = x3.selector || Ac));
      AP = AP || [];
      if (x4.length === 1) {
        if (
          (Ay = x4[0] = x4[0].slice(0)).length > 2 &&
          (x0 = Ay[0]).type === "ID" &&
          AK.nodeType === 9 &&
          zP &&
          zw.relative[Ay[1].type]
        ) {
          if (
            !(AK = (zw.find.ID(x0.matches[0].replace(AM, zm), AK) || [])[0])
          ) {
            return AP;
          }
          if (x3) {
            AK = AK.parentNode;
          }
          Ac = Ac.slice(Ay.shift().value.length);
        }
        for (
          An = AW.needsContext.test(Ac) ? 0 : Ay.length;
          An-- && ((x0 = Ay[An]), !zw.relative[(x1 = x0.type)]);

        ) {
          if (
            (x2 = zw.find[x1]) &&
            (AN = x2(
              x0.matches[0].replace(AM, zm),
              (Ar.test(Ay[0].type) && Aj(AK.parentNode)) || AK
            ))
          ) {
            Ay.splice(An, 1);
            if ((Ac = AN.length && AZ(Ay))) {
              break;
            }
            AA.apply(AP, AN);
            return AP;
          }
        }
      }
      (x3 || zb(Ac, x4))(
        AN,
        AK,
        !zP,
        AP,
        !AK || (Ar.test(Ac) && Aj(AK.parentNode)) || AK
      );
      return AP;
    };
    zl.sortStable = A1.split("").sort(A8).join("") === A1;
    zl.detectDuplicates = !!zC;
    zf();
    zl.sortDetached = AT(function (Ac) {
      return Ac.compareDocumentPosition(zc.createElement("fieldset")) & 1;
    });
    if (
      !AT(function (Ac) {
        Ac.innerHTML = "<a href='#'></a>";
        return Ac.firstChild.getAttribute("href") === "#";
      })
    ) {
      Ak("type|href|height|width", function (Ac, AK, AP) {
        if (!AP) {
          return Ac.getAttribute(AK, AK.toLowerCase() === "type" ? 1 : 2);
        }
      });
    }
    if (
      !zl.attributes ||
      !AT(function (Ac) {
        Ac.innerHTML = "<input/>";
        Ac.firstChild.setAttribute("value", "");
        return Ac.firstChild.getAttribute("value") === "";
      })
    ) {
      Ak("value", function (Ac, AK, AP) {
        if (!AP && Ac.nodeName.toLowerCase() === "input") {
          return Ac.defaultValue;
        }
      });
    }
    if (
      !AT(function (Ac) {
        return Ac.getAttribute("disabled") == null;
      })
    ) {
      Ak(AY, function (Ac, AK, AP) {
        if (!AP) {
          if (Ac[AK] === true) {
            return AK.toLowerCase();
          } else if ((AP = Ac.getAttributeNode(AK)) && AP.specified) {
            return AP.value;
          } else {
            return null;
          }
        }
      });
    }
    return AL;
  })(S0);
  SR.find = S4;
  SR.expr = S4.selectors;
  SR.expr[":"] = SR.expr.pseudos;
  SR.uniqueSort = SR.unique = S4.uniqueSort;
  SR.text = S4.getText;
  SR.isXMLDoc = S4.isXML;
  SR.contains = S4.contains;
  SR.escapeSelector = S4.escape;
  var SH = SR.expr.match.needsContext;
  function SU(zo, zm) {
    return zo.nodeName && zo.nodeName.toLowerCase() === zm.toLowerCase();
  }
  var Sd = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
  function SW(zo, zm, zT) {
    if (S2(zm)) {
      return SR.grep(zo, function (zk, zF) {
        return !!zm.call(zk, zF, zk) !== zT;
      });
    } else if (zm.nodeType) {
      return SR.grep(zo, function (zk) {
        return (zk === zm) !== zT;
      });
    } else if (typeof zm != "string") {
      return SR.grep(zo, function (zk) {
        return SS.call(zm, zk) > -1 !== zT;
      });
    } else {
      return SR.filter(zm, zo, zT);
    }
  }
  SR.filter = function (zo, zm, zT) {
    var zk = zm[0];
    if (zT) {
      zo = ":not(" + zo + ")";
    }
    if (zm.length === 1 && zk.nodeType === 1) {
      if (SR.find.matchesSelector(zk, zo)) {
        return [zk];
      } else {
        return [];
      }
    } else {
      return SR.find.matches(
        zo,
        SR.grep(zm, function (zF) {
          return zF.nodeType === 1;
        })
      );
    }
  };
  SR.fn.extend({
    find: function (zo) {
      var zm;
      var zT;
      var zk = this.length;
      var zF = this;
      if (typeof zo != "string") {
        return this.pushStack(
          SR(zo).filter(function () {
            for (zm = 0; zm < zk; zm++) {
              if (SR.contains(zF[zm], this)) {
                return true;
              }
            }
          })
        );
      }
      zT = this.pushStack([]);
      zm = 0;
      for (; zm < zk; zm++) {
        SR.find(zo, zF[zm], zT);
      }
      if (zk > 1) {
        return SR.uniqueSort(zT);
      } else {
        return zT;
      }
    },
    filter: function (zo) {
      return this.pushStack(SW(this, zo || [], false));
    },
    not: function (zo) {
      return this.pushStack(SW(this, zo || [], true));
    },
    is: function (zo) {
      return !!SW(
        this,
        typeof zo == "string" && SH.test(zo) ? SR(zo) : zo || [],
        false
      ).length;
    },
  });
  var Sg;
  var Sh = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
  (SR.fn.init = function (zo, zm, zT) {
    if (zo) {
      zT = zT || Sg;
      if (typeof zo != "string") {
        if (zo.nodeType) {
          this[0] = zo;
          this.length = 1;
          return this;
        } else if (S2(zo)) {
          if (zT.ready !== undefined) {
            return zT.ready(zo);
          } else {
            return zo(SR);
          }
        } else {
          return SR.makeArray(zo, this);
        }
      }
      if (
        !(zk =
          zo[0] === "<" && zo[zo.length - 1] === ">" && zo.length >= 3
            ? [null, zo, null]
            : Sh.exec(zo)) ||
        (!zk[1] && zm)
      ) {
        return (!zm || zm.jquery ? zm || zT : this.constructor(zm)).find(zo);
      }
      if (zk[1]) {
        zm = zm instanceof SR ? zm[0] : zm;
        SR.merge(
          this,
          SR.parseHTML(
            zk[1],
            zm && zm.nodeType ? zm.ownerDocument || zm : S5,
            true
          )
        );
        if (Sd.test(zk[1]) && SR.isPlainObject(zm)) {
          for (var zk in zm) {
            if (S2(this[zk])) {
              this[zk](zm[zk]);
            } else {
              this.attr(zk, zm[zk]);
            }
          }
        }
      } else if ((zT = S5.getElementById(zk[2]))) {
        this[0] = zT;
        this.length = 1;
      }
    }
    return this;
  }).prototype = SR.fn;
  Sg = SR(S5);
  var SD = /^(?:parents|prev(?:Until|All))/;
  var Su = {
    children: true,
    contents: true,
    next: true,
    prev: true,
  };
  function Sr(zo, zm) {
    while ((zo = zo[zm]) && zo.nodeType !== 1);
    return zo;
  }
  SR.fn.extend({
    has: function (zo) {
      var zm = SR(zo, this);
      var zT = zm.length;
      return this.filter(function () {
        for (var zk = 0; zk < zT; zk++) {
          if (SR.contains(this, zm[zk])) {
            return true;
          }
        }
      });
    },
    closest: function (zo, zm) {
      var zT;
      var zk = 0;
      var zF = this.length;
      var zl = [];
      var zw = typeof zo != "string" && SR(zo);
      if (!SH.test(zo)) {
        for (; zk < zF; zk++) {
          for (zT = this[zk]; zT && zT !== zm; zT = zT.parentNode) {
            if (
              zT.nodeType < 11 &&
              (zw
                ? zw.index(zT) > -1
                : zT.nodeType === 1 && SR.find.matchesSelector(zT, zo))
            ) {
              zl.push(zT);
              break;
            }
          }
        }
      }
      return this.pushStack(zl.length > 1 ? SR.uniqueSort(zl) : zl);
    },
    index: function (zo) {
      if (zo) {
        if (typeof zo == "string") {
          return SS.call(SR(zo), this[0]);
        } else {
          return SS.call(this, zo.jquery ? zo[0] : zo);
        }
      } else if (this[0] && this[0].parentNode) {
        return this.first().prevAll().length;
      } else {
        return -1;
      }
    },
    add: function (zo, zm) {
      return this.pushStack(SR.uniqueSort(SR.merge(this.get(), SR(zo, zm))));
    },
    addBack: function (zo) {
      return this.add(
        zo == null ? this.prevObject : this.prevObject.filter(zo)
      );
    },
  });
  SR.each(
    {
      parent: function (zo) {
        zo = zo.parentNode;
        if (zo && zo.nodeType !== 11) {
          return zo;
        } else {
          return null;
        }
      },
      parents: function (zo) {
        return Sq(zo, "parentNode");
      },
      parentsUntil: function (zo, zm, zT) {
        return Sq(zo, "parentNode", zT);
      },
      next: function (zo) {
        return Sr(zo, "nextSibling");
      },
      prev: function (zo) {
        return Sr(zo, "previousSibling");
      },
      nextAll: function (zo) {
        return Sq(zo, "nextSibling");
      },
      prevAll: function (zo) {
        return Sq(zo, "previousSibling");
      },
      nextUntil: function (zo, zm, zT) {
        return Sq(zo, "nextSibling", zT);
      },
      prevUntil: function (zo, zm, zT) {
        return Sq(zo, "previousSibling", zT);
      },
      siblings: function (zo) {
        return SI((zo.parentNode || {}).firstChild, zo);
      },
      children: function (zo) {
        return SI(zo.firstChild);
      },
      contents: function (zo) {
        if (SU(zo, "iframe")) {
          return zo.contentDocument;
        } else {
          if (SU(zo, "template")) {
            zo = zo.content || zo;
          }
          return SR.merge([], zo.childNodes);
        }
      },
    },
    function (zo, zm) {
      SR.fn[zo] = function (zT, zk) {
        var zF = SR.map(this, zm, zT);
        if (
          (zk = zo.slice(-5) !== "Until" ? zT : zk) &&
          typeof zk == "string"
        ) {
          zF = SR.filter(zk, zF);
        }
        if (this.length > 1 && (Su[zo] || SR.uniqueSort(zF), SD.test(zo))) {
          zF.reverse();
        }
        return this.pushStack(zF);
      };
    }
  );
  var SM = /[^\x20\t\r\n\f]+/g;
  function SQ(zo) {
    return zo;
  }
  function Ss(zo) {
    throw zo;
  }
  function SL(zo, zm, zT, zk) {
    var zF;
    try {
      if (zo && S2((zF = zo.promise))) {
        zF.call(zo).done(zm).fail(zT);
      } else if (zo && S2((zF = zo.then))) {
        zF.call(zo, zm, zT);
      } else {
        zm.apply(undefined, [zo].slice(zk));
      }
    } catch (zl) {
      zT.apply(undefined, [zl]);
    }
  }
  SR.Callbacks = function (zo) {
    var zm;
    var zT;
    zo =
      typeof zo == "string"
        ? ((zm = zo),
          (zT = {}),
          SR.each(zm.match(SM) || [], function (zB, zv) {
            zT[zv] = true;
          }),
          zT)
        : SR.extend({}, zo);
    function zk() {
      zj = zj || zo.once;
      zw = zF = true;
      for (; zZ.length; zb = -1) {
        for (zl = zZ.shift(); ++zb < zi.length; ) {
          if (zi[zb].apply(zl[0], zl[1]) === false && zo.stopOnFalse) {
            zb = zi.length;
            zl = false;
          }
        }
      }
      if (!zo.memory) {
        zl = false;
      }
      zF = false;
      if (zj) {
        zi = zl ? [] : "";
      }
    }
    var zF;
    var zl;
    var zw;
    var zj;
    var zi = [];
    var zZ = [];
    var zb = -1;
    var zJ = {
      add: function () {
        if (
          zi &&
          (zl && !zF && ((zb = zi.length - 1), zZ.push(zl)),
          (function zB(zv) {
            SR.each(zv, function (zC, zf) {
              if (S2(zf)) {
                if (!zo.unique || !zJ.has(zf)) {
                  zi.push(zf);
                }
              } else if (zf && zf.length && SG(zf) !== "string") {
                zB(zf);
              }
            });
          })(arguments),
          zl) &&
          !zF
        ) {
          zk();
        }
        return this;
      },
      remove: function () {
        SR.each(arguments, function (zB, zv) {
          for (var zC; (zC = SR.inArray(zv, zi, zC)) > -1; ) {
            zi.splice(zC, 1);
            if (zC <= zb) {
              zb--;
            }
          }
        });
        return this;
      },
      has: function (zB) {
        if (zB) {
          return SR.inArray(zB, zi) > -1;
        } else {
          return zi.length > 0;
        }
      },
      empty: function () {
        zi = zi && [];
        return this;
      },
      disable: function () {
        zj = zZ = [];
        zi = zl = "";
        return this;
      },
      disabled: function () {
        return !zi;
      },
      lock: function () {
        zj = zZ = [];
        if (!zl && !zF) {
          zi = zl = "";
        }
        return this;
      },
      locked: function () {
        return !!zj;
      },
      fireWith: function (zB, zv) {
        if (
          !zj &&
          !((zv = [zB, (zv = zv || []).slice ? zv.slice() : zv]),
          zZ.push(zv),
          zF)
        ) {
          zk();
        }
        return this;
      },
      fire: function () {
        zJ.fireWith(this, arguments);
        return this;
      },
      fired: function () {
        return !!zw;
      },
    };
    return zJ;
  };
  SR.extend({
    Deferred: function (zo) {
      var zm = [
        [
          "notify",
          "progress",
          SR.Callbacks("memory"),
          SR.Callbacks("memory"),
          2,
        ],
        [
          "resolve",
          "done",
          SR.Callbacks("once memory"),
          SR.Callbacks("once memory"),
          0,
          "resolved",
        ],
        [
          "reject",
          "fail",
          SR.Callbacks("once memory"),
          SR.Callbacks("once memory"),
          1,
          "rejected",
        ],
      ];
      var zT = "pending";
      var zk = {
        state: function () {
          return zT;
        },
        always: function () {
          zF.done(arguments).fail(arguments);
          return this;
        },
        catch: function (zl) {
          return zk.then(null, zl);
        },
        pipe: function () {
          var zl = arguments;
          return SR.Deferred(function (zw) {
            SR.each(zm, function (zj, zi) {
              var zZ = S2(zl[zi[4]]) && zl[zi[4]];
              zF[zi[1]](function () {
                var zb = zZ && zZ.apply(this, arguments);
                if (zb && S2(zb.promise)) {
                  zb.promise()
                    .progress(zw.notify)
                    .done(zw.resolve)
                    .fail(zw.reject);
                } else {
                  zw[zi[0] + "With"](this, zZ ? [zb] : arguments);
                }
              });
            });
            zl = null;
          }).promise();
        },
        then: function (zl, zw, zj) {
          var zi = 0;
          function zZ(zb, zJ, zB, zv) {
            return function () {
              function zC() {
                var zP;
                var zN;
                if (zb >= zi) {
                  if ((zP = zB.apply(zf, zc)) === zJ.promise()) {
                    throw new TypeError("Thenable self-resolution");
                  }
                  zN =
                    zP &&
                    (typeof zP == "object" || typeof zP == "function") &&
                    zP.then;
                  if (S2(zN)) {
                    if (zv) {
                      zN.call(zP, zZ(zi, zJ, SQ, zv), zZ(zi, zJ, Ss, zv));
                    } else {
                      zi++;
                      zN.call(
                        zP,
                        zZ(zi, zJ, SQ, zv),
                        zZ(zi, zJ, Ss, zv),
                        zZ(zi, zJ, SQ, zJ.notifyWith)
                      );
                    }
                  } else {
                    if (zB !== SQ) {
                      zf = undefined;
                      zc = [zP];
                    }
                    (zv || zJ.resolveWith)(zf, zc);
                  }
                }
              }
              var zf = this;
              var zc = arguments;
              var zK = zv
                ? zC
                : function () {
                    try {
                      zC();
                    } catch (zP) {
                      if (SR.Deferred.exceptionHook) {
                        SR.Deferred.exceptionHook(zP, zK.stackTrace);
                      }
                      if (zi <= zb + 1) {
                        if (zB !== Ss) {
                          zf = undefined;
                          zc = [zP];
                        }
                        zJ.rejectWith(zf, zc);
                      }
                    }
                  };
              if (zb) {
                zK();
              } else {
                if (SR.Deferred.getStackHook) {
                  zK.stackTrace = SR.Deferred.getStackHook();
                }
                S0.setTimeout(zK);
              }
            };
          }
          return SR.Deferred(function (zb) {
            zm[0][3].add(zZ(0, zb, S2(zj) ? zj : SQ, zb.notifyWith));
            zm[1][3].add(zZ(0, zb, S2(zl) ? zl : SQ));
            zm[2][3].add(zZ(0, zb, S2(zw) ? zw : Ss));
          }).promise();
        },
        promise: function (zl) {
          if (zl != null) {
            return SR.extend(zl, zk);
          } else {
            return zk;
          }
        },
      };
      var zF = {};
      SR.each(zm, function (zl, zw) {
        var zj = zw[2];
        var zi = zw[5];
        zk[zw[1]] = zj.add;
        if (zi) {
          zj.add(
            function () {
              zT = zi;
            },
            zm[3 - zl][2].disable,
            zm[3 - zl][3].disable,
            zm[0][2].lock,
            zm[0][3].lock
          );
        }
        zj.add(zw[3].fire);
        zF[zw[0]] = function () {
          zF[zw[0] + "With"](this === zF ? undefined : this, arguments);
          return this;
        };
        zF[zw[0] + "With"] = zj.fireWith;
      });
      zk.promise(zF);
      if (zo) {
        zo.call(zF, zF);
      }
      return zF;
    },
    when: function (zo) {
      function zm(zj) {
        return function (zi) {
          zF[zj] = this;
          zl[zj] = arguments.length > 1 ? S7.call(arguments) : zi;
          if (!--zT) {
            zw.resolveWith(zF, zl);
          }
        };
      }
      var zT = arguments.length;
      var zk = zT;
      var zF = Array(zk);
      var zl = S7.call(arguments);
      var zw = SR.Deferred();
      if (
        zT <= 1 &&
        (SL(zo, zw.done(zm(zk)).resolve, zw.reject, !zT),
        zw.state() === "pending" || S2(zl[zk] && zl[zk].then))
      ) {
        return zw.then();
      }
      while (zk--) {
        SL(zl[zk], zm(zk), zw.reject);
      }
      return zw.promise();
    },
  });
  var So = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
  SR.Deferred.exceptionHook = function (zo, zm) {
    if (S0.console && S0.console.warn && zo && So.test(zo.name)) {
      S0.console.warn("jQuery.Deferred exception: " + zo.message, zo.stack, zm);
    }
  };
  SR.readyException = function (zo) {
    S0.setTimeout(function () {
      throw zo;
    });
  };
  var Sm = SR.Deferred();
  function ST() {
    S5.removeEventListener("DOMContentLoaded", ST);
    S0.removeEventListener("load", ST);
    SR.ready();
  }
  SR.fn.ready = function (zo) {
    Sm.then(zo).catch(function (zm) {
      SR.readyException(zm);
    });
    return this;
  };
  SR.extend({
    isReady: false,
    readyWait: 1,
    ready: function (zo) {
      if (
        !(zo === true ? --SR.readyWait : SR.isReady) &&
        ((SR.isReady = true) === zo || --SR.readyWait <= 0)
      ) {
        Sm.resolveWith(S5, [SR]);
      }
    },
  });
  SR.ready.then = Sm.then;
  if (
    S5.readyState === "complete" ||
    (S5.readyState !== "loading" && !S5.documentElement.doScroll)
  ) {
    S0.setTimeout(SR.ready);
  } else {
    S5.addEventListener("DOMContentLoaded", ST);
    S0.addEventListener("load", ST);
  }
  function Sk(zo, zm, zT, zk, zF, zl, zw) {
    var zj = 0;
    var zi = zo.length;
    var zZ = zT == null;
    if (SG(zT) === "object") {
      zF = true;
      for (zj in zT) {
        Sk(zo, zm, zj, zT[zj], true, zl, zw);
      }
    } else if (
      zk !== undefined &&
      ((zF = true),
      S2(zk) || (zw = true),
      (zm = zZ
        ? zw
          ? (zm.call(zo, zk), null)
          : ((zZ = zm),
            function (zb, zJ, zB) {
              return zZ.call(SR(zb), zB);
            })
        : zm))
    ) {
      for (; zj < zi; zj++) {
        zm(zo[zj], zT, zw ? zk : zk.call(zo[zj], zj, zm(zo[zj], zT)));
      }
    }
    if (zF) {
      return zo;
    } else if (zZ) {
      return zm.call(zo);
    } else if (zi) {
      return zm(zo[0], zT);
    } else {
      return zl;
    }
  }
  var SF = /^-ms-/;
  var Sl = /-([a-z])/g;
  function Sw(zo, zm) {
    return zm.toUpperCase();
  }
  function Sj(zo) {
    return zo.replace(SF, "ms-").replace(Sl, Sw);
  }
  function Si(zo) {
    return zo.nodeType === 1 || zo.nodeType === 9 || !+zo.nodeType;
  }
  function SZ() {
    this.expando = SR.expando + SZ.uid++;
  }
  SZ.uid = 1;
  SZ.prototype = {
    cache: function (zo) {
      var zm = zo[this.expando];
      if (!zm) {
        zm = {};
        if (Si(zo)) {
          if (zo.nodeType) {
            zo[this.expando] = zm;
          } else {
            Object.defineProperty(zo, this.expando, {
              value: zm,
              configurable: true,
            });
          }
        }
      }
      return zm;
    },
    set: function (zo, zm, zT) {
      var zk;
      var zF = this.cache(zo);
      if (typeof zm == "string") {
        zF[Sj(zm)] = zT;
      } else {
        for (zk in zm) {
          zF[Sj(zk)] = zm[zk];
        }
      }
      return zF;
    },
    get: function (zo, zm) {
      if (zm === undefined) {
        return this.cache(zo);
      } else {
        return zo[this.expando] && zo[this.expando][Sj(zm)];
      }
    },
    access: function (zo, zm, zT) {
      if (
        zm === undefined ||
        (zm && typeof zm == "string" && zT === undefined)
      ) {
        return this.get(zo, zm);
      } else {
        this.set(zo, zm, zT);
        if (zT !== undefined) {
          return zT;
        } else {
          return zm;
        }
      }
    },
    remove: function (zo, zm) {
      var zT;
      var zk = zo[this.expando];
      if (zk !== undefined) {
        if (zm !== undefined) {
          zT = (zm = Array.isArray(zm)
            ? zm.map(Sj)
            : (zm = Sj(zm)) in zk
            ? [zm]
            : zm.match(SM) || []).length;
          while (zT--) {
            delete zk[zm[zT]];
          }
        }
        if (zm === undefined || !!SR.isEmptyObject(zk)) {
          if (zo.nodeType) {
            zo[this.expando] = undefined;
          } else {
            delete zo[this.expando];
          }
        }
      }
    },
    hasData: function (zo) {
      zo = zo[this.expando];
      return zo !== undefined && !SR.isEmptyObject(zo);
    },
  };
  var Sb = new SZ();
  var SJ = new SZ();
  var SB = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/;
  var Sv = /[A-Z]/g;
  function SC(zo, zm, zT) {
    var zk;
    var zF;
    if (zT === undefined && zo.nodeType === 1) {
      zk = "data-" + zm.replace(Sv, "-$&").toLowerCase();
      if (typeof (zT = zo.getAttribute(zk)) == "string") {
        try {
          zT =
            (zF = zT) === "true" ||
            (zF !== "false" &&
              (zF === "null"
                ? null
                : zF === +zF + ""
                ? +zF
                : SB.test(zF)
                ? JSON.parse(zF)
                : zF));
        } catch (zl) {}
        SJ.set(zo, zm, zT);
      } else {
        zT = undefined;
      }
    }
    return zT;
  }
  SR.extend({
    hasData: function (zo) {
      return SJ.hasData(zo) || Sb.hasData(zo);
    },
    data: function (zo, zm, zT) {
      return SJ.access(zo, zm, zT);
    },
    removeData: function (zo, zm) {
      SJ.remove(zo, zm);
    },
    _data: function (zo, zm, zT) {
      return Sb.access(zo, zm, zT);
    },
    _removeData: function (zo, zm) {
      Sb.remove(zo, zm);
    },
  });
  SR.fn.extend({
    data: function (zo, zm) {
      var zT;
      var zk;
      var zF;
      var zl = this[0];
      var zw = zl && zl.attributes;
      if (zo !== undefined) {
        if (typeof zo == "object") {
          return this.each(function () {
            SJ.set(this, zo);
          });
        } else {
          return Sk(
            this,
            function (zj) {
              var zi;
              if (zl && zj === undefined) {
                if (
                  (zi = SJ.get(zl, zo)) !== undefined ||
                  (zi = SC(zl, zo)) !== undefined
                ) {
                  return zi;
                } else {
                  return undefined;
                }
              }
              this.each(function () {
                SJ.set(this, zo, zj);
              });
            },
            null,
            zm,
            arguments.length > 1,
            null,
            true
          );
        }
      }
      if (
        this.length &&
        ((zF = SJ.get(zl)), zl.nodeType === 1) &&
        !Sb.get(zl, "hasDataAttrs")
      ) {
        for (zT = zw.length; zT--; ) {
          if (zw[zT] && (zk = zw[zT].name).indexOf("data-") === 0) {
            zk = Sj(zk.slice(5));
            SC(zl, zk, zF[zk]);
          }
        }
        Sb.set(zl, "hasDataAttrs", true);
      }
      return zF;
    },
    removeData: function (zo) {
      return this.each(function () {
        SJ.remove(this, zo);
      });
    },
  });
  SR.extend({
    queue: function (zo, zm, zT) {
      var zk;
      if (zo) {
        zk = Sb.get(zo, (zm = (zm || "fx") + "queue"));
        if (zT) {
          if (!zk || Array.isArray(zT)) {
            zk = Sb.access(zo, zm, SR.makeArray(zT));
          } else {
            zk.push(zT);
          }
        }
        return zk || [];
      }
    },
    dequeue: function (zo, zm) {
      zm = zm || "fx";
      var zT = SR.queue(zo, zm);
      var zk = zT.length;
      var zF = zT.shift();
      var zl = SR._queueHooks(zo, zm);
      if (zF === "inprogress") {
        zF = zT.shift();
        zk--;
      }
      if (zF) {
        if (zm === "fx") {
          zT.unshift("inprogress");
        }
        delete zl.stop;
        zF.call(
          zo,
          function () {
            SR.dequeue(zo, zm);
          },
          zl
        );
      }
      if (!zk && zl) {
        zl.empty.fire();
      }
    },
    _queueHooks: function (zo, zm) {
      var zT = zm + "queueHooks";
      return (
        Sb.get(zo, zT) ||
        Sb.access(zo, zT, {
          empty: SR.Callbacks("once memory").add(function () {
            Sb.remove(zo, [zm + "queue", zT]);
          }),
        })
      );
    },
  });
  SR.fn.extend({
    queue: function (zo, zm) {
      var zT = 2;
      if (typeof zo != "string") {
        zm = zo;
        zo = "fx";
        zT--;
      }
      if (arguments.length < zT) {
        return SR.queue(this[0], zo);
      } else if (zm === undefined) {
        return this;
      } else {
        return this.each(function () {
          var zk = SR.queue(this, zo, zm);
          SR._queueHooks(this, zo);
          if (zo === "fx" && zk[0] !== "inprogress") {
            SR.dequeue(this, zo);
          }
        });
      }
    },
    dequeue: function (zo) {
      return this.each(function () {
        SR.dequeue(this, zo);
      });
    },
    clearQueue: function (zo) {
      return this.queue(zo || "fx", []);
    },
    promise: function (zo, zm) {
      function zT() {
        if (!--zF) {
          zl.resolveWith(zw, [zw]);
        }
      }
      var zk;
      var zF = 1;
      var zl = SR.Deferred();
      var zw = this;
      var zj = this.length;
      if (typeof zo != "string") {
        zm = zo;
        zo = undefined;
      }
      zo = zo || "fx";
      while (zj--) {
        if ((zk = Sb.get(zw[zj], zo + "queueHooks")) && zk.empty) {
          zF++;
          zk.empty.add(zT);
        }
      }
      zT();
      return zl.promise(zm);
    },
  });
  function Sf(zo, zm) {
    return (
      (zo = zm || zo).style.display === "none" ||
      (zo.style.display === "" &&
        SR.contains(zo.ownerDocument, zo) &&
        SR.css(zo, "display") === "none")
    );
  }
  function Sc(zo, zm, zT, zk) {
    var zF;
    var zl = {};
    for (zF in zm) {
      zl[zF] = zo.style[zF];
      zo.style[zF] = zm[zF];
    }
    zT = zT.apply(zo, zk || []);
    for (zF in zm) {
      zo.style[zF] = zl[zF];
    }
    return zT;
  }
  var S4 = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source;
  var SK = new RegExp("^(?:([+-])=|)(" + S4 + ")([a-z%]*)$", "i");
  var SP = ["Top", "Right", "Bottom", "Left"];
  function SN(zo, zm, zT, zk) {
    var zF;
    var zl;
    var zw = 20;
    var zj = zk
      ? function () {
          return zk.cur();
        }
      : function () {
          return SR.css(zo, zm, "");
        };
    var zi = zj();
    var zZ = (zT && zT[3]) || (SR.cssNumber[zm] ? "" : "px");
    var zb =
      (SR.cssNumber[zm] || (zZ !== "px" && +zi)) && SK.exec(SR.css(zo, zm));
    if (zb && zb[3] !== zZ) {
      zZ = zZ || zb[3];
      zb = +(zi /= 2) || 1;
      while (zw--) {
        SR.style(zo, zm, zb + zZ);
        if ((1 - zl) * (1 - (zl = zj() / zi || 0.5)) <= 0) {
          zw = 0;
        }
        zb /= zl;
      }
      SR.style(zo, zm, (zb *= 2) + zZ);
      zT = zT || [];
    }
    if (
      zT &&
      ((zb = +zb || +zi || 0),
      (zF = zT[1] ? zb + (zT[1] + 1) * zT[2] : +zT[2]),
      zk)
    ) {
      zk.unit = zZ;
      zk.start = zb;
      zk.end = zF;
    }
    return zF;
  }
  var Sn = {};
  function Sy(zo, zm) {
    var zT;
    var zk;
    var zF;
    var zl;
    var zw;
    var zj = [];
    for (var zi = 0, zZ = zo.length; zi < zZ; zi++) {
      if ((zk = zo[zi]).style) {
        zT = zk.style.display;
        if (zm) {
          if (zT === "none") {
            zj[zi] = Sb.get(zk, "display") || null;
            if (!zj[zi]) {
              zk.style.display = "";
            }
          }
          if (zk.style.display === "" && Sf(zk)) {
            zw = zl = undefined;
            zl = (zF = zk).ownerDocument;
            zF = zF.nodeName;
            zj[zi] =
              (zw = Sn[zF]) ||
              ((zl = zl.body.appendChild(zl.createElement(zF))),
              (zw = SR.css(zl, "display")),
              zl.parentNode.removeChild(zl),
              (Sn[zF] = zw = zw === "none" ? "block" : zw));
          }
        } else if (zT !== "none") {
          zj[zi] = "none";
          Sb.set(zk, "display", zT);
        }
      }
    }
    for (zi = 0; zi < zZ; zi++) {
      if (zj[zi] != null) {
        zo[zi].style.display = zj[zi];
      }
    }
    return zo;
  }
  SR.fn.extend({
    show: function () {
      return Sy(this, true);
    },
    hide: function () {
      return Sy(this);
    },
    toggle: function (zo) {
      if (typeof zo == "boolean") {
        if (zo) {
          return this.show();
        } else {
          return this.hide();
        }
      } else {
        return this.each(function () {
          if (Sf(this)) {
            SR(this).show();
          } else {
            SR(this).hide();
          }
        });
      }
    },
  });
  var X0 = /^(?:checkbox|radio)$/i;
  var X1 = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i;
  var X2 = /^$|^module$|\/(?:java|ecma)script/i;
  var X3 = {
    option: [1, "<select multiple='multiple'>", "</select>"],
    thead: [1, "<table>", "</table>"],
    col: [2, "<table><colgroup>", "</colgroup></table>"],
    tr: [2, "<table><tbody>", "</tbody></table>"],
    td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
    _default: [0, "", ""],
  };
  function X4(zo, zm) {
    var zT =
      zo.getElementsByTagName !== undefined
        ? zo.getElementsByTagName(zm || "*")
        : zo.querySelectorAll !== undefined
        ? zo.querySelectorAll(zm || "*")
        : [];
    if (zm === undefined || (zm && SU(zo, zm))) {
      return SR.merge([zo], zT);
    } else {
      return zT;
    }
  }
  function X5(zo, zm) {
    for (var zT = 0, zk = zo.length; zT < zk; zT++) {
      Sb.set(zo[zT], "globalEval", !zm || Sb.get(zm[zT], "globalEval"));
    }
  }
  X3.optgroup = X3.option;
  X3.tbody = X3.tfoot = X3.colgroup = X3.caption = X3.thead;
  X3.th = X3.td;
  var X6 = /<|&#?\w+;/;
  function X7(zo, zm, zT, zk, zF) {
    var zl;
    var zw;
    var zj;
    var zi;
    var zZ;
    var zb = zm.createDocumentFragment();
    var zJ = [];
    for (var zB = 0, zv = zo.length; zB < zv; zB++) {
      if ((zl = zo[zB]) || zl === 0) {
        if (SG(zl) === "object") {
          SR.merge(zJ, zl.nodeType ? [zl] : zl);
        } else if (X6.test(zl)) {
          zw = zw || zb.appendChild(zm.createElement("div"));
          zj = (X1.exec(zl) || ["", ""])[1].toLowerCase();
          zj = X3[zj] || X3._default;
          zw.innerHTML = zj[1] + SR.htmlPrefilter(zl) + zj[2];
          zZ = zj[0];
          while (zZ--) {
            zw = zw.lastChild;
          }
          SR.merge(zJ, zw.childNodes);
          (zw = zb.firstChild).textContent = "";
        } else {
          zJ.push(zm.createTextNode(zl));
        }
      }
    }
    zb.textContent = "";
    zB = 0;
    while ((zl = zJ[zB++])) {
      if (zk && SR.inArray(zl, zk) > -1) {
        if (zF) {
          zF.push(zl);
        }
      } else {
        zi = SR.contains(zl.ownerDocument, zl);
        zw = X4(zb.appendChild(zl), "script");
        if (zi) {
          X5(zw);
        }
        if (zT) {
          for (zZ = 0; (zl = zw[zZ++]); ) {
            if (X2.test(zl.type || "")) {
              zT.push(zl);
            }
          }
        }
      }
    }
    return zb;
  }
  Xc = S5.createDocumentFragment().appendChild(S5.createElement("div"));
  (Xf = S5.createElement("input")).setAttribute("type", "radio");
  Xf.setAttribute("checked", "checked");
  Xf.setAttribute("name", "t");
  Xc.appendChild(Xf);
  SY.checkClone = Xc.cloneNode(true).cloneNode(true).lastChild.checked;
  Xc.innerHTML = "<textarea>x</textarea>";
  SY.noCloneChecked = !!Xc.cloneNode(true).lastChild.defaultValue;
  var X8 = S5.documentElement;
  var X9 = /^key/;
  var XS = /^(?:mouse|pointer|contextmenu|drag|drop)|click/;
  var XX = /^([^.]*)(?:\.(.+)|)/;
  function Xz() {
    return true;
  }
  function XA() {
    return false;
  }
  function Xx() {
    try {
      return S5.activeElement;
    } catch (zo) {}
  }
  function XO(zo, zm, zT, zk, zF, zl) {
    var zw;
    var zj;
    if (typeof zm == "object") {
      if (typeof zT != "string") {
        zk = zk || zT;
        zT = undefined;
      }
      for (zj in zm) {
        XO(zo, zj, zT, zk, zm[zj], zl);
      }
      return zo;
    }
    if (zk == null && zF == null) {
      zF = zT;
      zk = zT = undefined;
    } else if (zF == null) {
      if (typeof zT == "string") {
        zF = zk;
        zk = undefined;
      } else {
        zF = zk;
        zk = zT;
        zT = undefined;
      }
    }
    if (zF === false) {
      zF = XA;
    } else if (!zF) {
      return zo;
    }
    if (zl === 1) {
      zw = zF;
      (zF = function (zi) {
        SR().off(zi);
        return zw.apply(this, arguments);
      }).guid = zw.guid ||= SR.guid++;
    }
    return zo.each(function () {
      SR.event.add(this, zm, zF, zk, zT);
    });
  }
  SR.event = {
    global: {},
    add: function (zo, zm, zT, zk, zF) {
      var zl;
      var zw;
      var zj;
      var zi;
      var zZ;
      var zb;
      var zJ;
      var zB;
      var zv;
      var zC = Sb.get(zo);
      if (zC) {
        if (zT.handler) {
          zT = (zl = zT).handler;
          zF = zl.selector;
        }
        if (zF) {
          SR.find.matchesSelector(X8, zF);
        }
        zT.guid ||= SR.guid++;
        zj = (zj = zC.events) || (zC.events = {});
        zw =
          (zw = zC.handle) ||
          (zC.handle = function (zf) {
            if (SR !== undefined && SR.event.triggered !== zf.type) {
              return SR.event.dispatch.apply(zo, arguments);
            } else {
              return undefined;
            }
          });
        zi = (zm = (zm || "").match(SM) || [""]).length;
        while (zi--) {
          zJ = zv = (zB = XX.exec(zm[zi]) || [])[1];
          zB = (zB[2] || "").split(".").sort();
          if (zJ) {
            zZ = SR.event.special[zJ] || {};
            zJ = (zF ? zZ.delegateType : zZ.bindType) || zJ;
            zZ = SR.event.special[zJ] || {};
            zv = SR.extend(
              {
                type: zJ,
                origType: zv,
                data: zk,
                handler: zT,
                guid: zT.guid,
                selector: zF,
                needsContext: zF && SR.expr.match.needsContext.test(zF),
                namespace: zB.join("."),
              },
              zl
            );
            if (
              !(zb = zj[zJ]) &&
              !(((zb = zj[zJ] = []).delegateCount = 0),
              zZ.setup && zZ.setup.call(zo, zk, zB, zw) !== false)
            ) {
              if (zo.addEventListener) {
                zo.addEventListener(zJ, zw);
              }
            }
            if (zZ.add) {
              zZ.add.call(zo, zv);
              zv.handler.guid ||= zT.guid;
            }
            if (zF) {
              zb.splice(zb.delegateCount++, 0, zv);
            } else {
              zb.push(zv);
            }
            SR.event.global[zJ] = true;
          }
        }
      }
    },
    remove: function (zo, zm, zT, zk, zF) {
      var zl;
      var zw;
      var zj;
      var zi;
      var zZ;
      var zb;
      var zJ;
      var zB;
      var zv;
      var zC;
      var zf;
      var zc = Sb.hasData(zo) && Sb.get(zo);
      if (zc && (zi = zc.events)) {
        for (zZ = (zm = (zm || "").match(SM) || [""]).length; zZ--; ) {
          zv = zf = (zj = XX.exec(zm[zZ]) || [])[1];
          zC = (zj[2] || "").split(".").sort();
          if (zv) {
            zJ = SR.event.special[zv] || {};
            zB = zi[(zv = (zk ? zJ.delegateType : zJ.bindType) || zv)] || [];
            zj =
              zj[2] &&
              new RegExp("(^|\\.)" + zC.join("\\.(?:.*\\.|)") + "(\\.|$)");
            zw = zl = zB.length;
            while (zl--) {
              zb = zB[zl];
              if (
                (!!zF || zf === zb.origType) &&
                (!zT || zT.guid === zb.guid) &&
                (!zj || !!zj.test(zb.namespace)) &&
                (!zk || zk === zb.selector || (zk === "**" && !!zb.selector))
              ) {
                zB.splice(zl, 1);
                if (zb.selector) {
                  zB.delegateCount--;
                }
                if (zJ.remove) {
                  zJ.remove.call(zo, zb);
                }
              }
            }
            if (zw && !zB.length) {
              if (
                !zJ.teardown ||
                zJ.teardown.call(zo, zC, zc.handle) === false
              ) {
                SR.removeEvent(zo, zv, zc.handle);
              }
              delete zi[zv];
            }
          } else {
            for (zv in zi) {
              SR.event.remove(zo, zv + zm[zZ], zT, zk, true);
            }
          }
        }
        if (SR.isEmptyObject(zi)) {
          Sb.remove(zo, "handle events");
        }
      }
    },
    dispatch: function (zo) {
      var zm;
      var zT;
      var zk;
      var zF;
      var zl;
      var zw = SR.event.fix(zo);
      var zj = new Array(arguments.length);
      var zo = (Sb.get(this, "events") || {})[zw.type] || [];
      var zi = SR.event.special[zw.type] || {};
      zj[0] = zw;
      zm = 1;
      for (; zm < arguments.length; zm++) {
        zj[zm] = arguments[zm];
      }
      zw.delegateTarget = this;
      if (!zi.preDispatch || zi.preDispatch.call(this, zw) !== false) {
        zl = SR.event.handlers.call(this, zw, zo);
        zm = 0;
        while ((zk = zl[zm++]) && !zw.isPropagationStopped()) {
          zw.currentTarget = zk.elem;
          zT = 0;
          while (
            (zF = zk.handlers[zT++]) &&
            !zw.isImmediatePropagationStopped()
          ) {
            if (!zw.rnamespace || !!zw.rnamespace.test(zF.namespace)) {
              zw.handleObj = zF;
              zw.data = zF.data;
              if (
                (zF = (
                  (SR.event.special[zF.origType] || {}).handle || zF.handler
                ).apply(zk.elem, zj)) !== undefined &&
                (zw.result = zF) === false
              ) {
                zw.preventDefault();
                zw.stopPropagation();
              }
            }
          }
        }
        if (zi.postDispatch) {
          zi.postDispatch.call(this, zw);
        }
        return zw.result;
      }
    },
    handlers: function (zo, zm) {
      var zT;
      var zk;
      var zF;
      var zl;
      var zw;
      var zj = [];
      var zi = zm.delegateCount;
      var zZ = zo.target;
      if (zi && zZ.nodeType && (zo.type !== "click" || zo.button < 1)) {
        for (; zZ !== this; zZ = zZ.parentNode || this) {
          if (
            zZ.nodeType === 1 &&
            (zo.type !== "click" || zZ.disabled !== true)
          ) {
            zl = [];
            zw = {};
            zT = 0;
            for (; zT < zi; zT++) {
              if (zw[(zF = (zk = zm[zT]).selector + " ")] === undefined) {
                zw[zF] = zk.needsContext
                  ? SR(zF, this).index(zZ) > -1
                  : SR.find(zF, this, null, [zZ]).length;
              }
              if (zw[zF]) {
                zl.push(zk);
              }
            }
            if (zl.length) {
              zj.push({
                elem: zZ,
                handlers: zl,
              });
            }
          }
        }
      }
      zZ = this;
      if (zi < zm.length) {
        zj.push({
          elem: zZ,
          handlers: zm.slice(zi),
        });
      }
      return zj;
    },
    addProp: function (zo, zm) {
      Object.defineProperty(SR.Event.prototype, zo, {
        enumerable: true,
        configurable: true,
        get: S2(zm)
          ? function () {
              if (this.originalEvent) {
                return zm(this.originalEvent);
              }
            }
          : function () {
              if (this.originalEvent) {
                return this.originalEvent[zo];
              }
            },
        set: function (zT) {
          Object.defineProperty(this, zo, {
            enumerable: true,
            configurable: true,
            writable: true,
            value: zT,
          });
        },
      });
    },
    fix: function (zo) {
      if (zo[SR.expando]) {
        return zo;
      } else {
        return new SR.Event(zo);
      }
    },
    special: {
      load: {
        noBubble: true,
      },
      focus: {
        trigger: function () {
          if (this !== Xx() && this.focus) {
            this.focus();
            return false;
          }
        },
        delegateType: "focusin",
      },
      blur: {
        trigger: function () {
          if (this === Xx() && this.blur) {
            this.blur();
            return false;
          }
        },
        delegateType: "focusout",
      },
      click: {
        trigger: function () {
          if (this.type === "checkbox" && this.click && SU(this, "input")) {
            this.click();
            return false;
          }
        },
        _default: function (zo) {
          return SU(zo.target, "a");
        },
      },
      beforeunload: {
        postDispatch: function (zo) {
          if (zo.result !== undefined && zo.originalEvent) {
            zo.originalEvent.returnValue = zo.result;
          }
        },
      },
    },
  };
  SR.removeEvent = function (zo, zm, zT) {
    if (zo.removeEventListener) {
      zo.removeEventListener(zm, zT);
    }
  };
  SR.Event = function (zo, zm) {
    if (!(this instanceof SR.Event)) {
      return new SR.Event(zo, zm);
    }
    if (zo && zo.type) {
      this.originalEvent = zo;
      this.type = zo.type;
      this.isDefaultPrevented =
        zo.defaultPrevented ||
        (zo.defaultPrevented === undefined && zo.returnValue === false)
          ? Xz
          : XA;
      this.target =
        zo.target && zo.target.nodeType === 3
          ? zo.target.parentNode
          : zo.target;
      this.currentTarget = zo.currentTarget;
      this.relatedTarget = zo.relatedTarget;
    } else {
      this.type = zo;
    }
    if (zm) {
      SR.extend(this, zm);
    }
    this.timeStamp = (zo && zo.timeStamp) || Date.now();
    this[SR.expando] = true;
  };
  SR.Event.prototype = {
    constructor: SR.Event,
    isDefaultPrevented: XA,
    isPropagationStopped: XA,
    isImmediatePropagationStopped: XA,
    isSimulated: false,
    preventDefault: function () {
      var zo = this.originalEvent;
      this.isDefaultPrevented = Xz;
      if (zo && !this.isSimulated) {
        zo.preventDefault();
      }
    },
    stopPropagation: function () {
      var zo = this.originalEvent;
      this.isPropagationStopped = Xz;
      if (zo && !this.isSimulated) {
        zo.stopPropagation();
      }
    },
    stopImmediatePropagation: function () {
      var zo = this.originalEvent;
      this.isImmediatePropagationStopped = Xz;
      if (zo && !this.isSimulated) {
        zo.stopImmediatePropagation();
      }
      this.stopPropagation();
    },
  };
  SR.each(
    {
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
      which: function (zo) {
        var zm = zo.button;
        if (zo.which == null && X9.test(zo.type)) {
          return zo.charCode ?? zo.keyCode;
        } else if (!zo.which && zm !== undefined && XS.test(zo.type)) {
          if (zm & 1) {
            return 1;
          } else if (zm & 2) {
            return 3;
          } else if (zm & 4) {
            return 2;
          } else {
            return 0;
          }
        } else {
          return zo.which;
        }
      },
    },
    SR.event.addProp
  );
  SR.each(
    {
      mouseenter: "mouseover",
      mouseleave: "mouseout",
      pointerenter: "pointerover",
      pointerleave: "pointerout",
    },
    function (zo, zm) {
      SR.event.special[zo] = {
        delegateType: zm,
        bindType: zm,
        handle: function (zT) {
          var zk;
          var zF = zT.relatedTarget;
          var zl = zT.handleObj;
          if (!zF || (zF !== this && !SR.contains(this, zF))) {
            zT.type = zl.origType;
            zk = zl.handler.apply(this, arguments);
            zT.type = zm;
          }
          return zk;
        },
      };
    }
  );
  SR.fn.extend({
    on: function (zo, zm, zT, zk) {
      return XO(this, zo, zm, zT, zk);
    },
    one: function (zo, zm, zT, zk) {
      return XO(this, zo, zm, zT, zk, 1);
    },
    off: function (zo, zm, zT) {
      var zk;
      var zF;
      if (zo && zo.preventDefault && zo.handleObj) {
        zk = zo.handleObj;
        SR(zo.delegateTarget).off(
          zk.namespace ? zk.origType + "." + zk.namespace : zk.origType,
          zk.selector,
          zk.handler
        );
      } else {
        if (typeof zo != "object") {
          if (zm === false || typeof zm == "function") {
            zT = zm;
            zm = undefined;
          }
          if (zT === false) {
            zT = XA;
          }
          return this.each(function () {
            SR.event.remove(this, zo, zT, zm);
          });
        }
        for (zF in zo) {
          this.off(zF, zm, zo[zF]);
        }
      }
      return this;
    },
  });
  var XY =
    /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi;
  var Xp = /<script|<style|<link/i;
  var XE = /checked\s*(?:[^=]|=\s*.checked.)/i;
  var XG = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
  function XR(zo, zm) {
    return (
      (SU(zo, "table") &&
        SU(zm.nodeType !== 11 ? zm : zm.firstChild, "tr") &&
        SR(zo).children("tbody")[0]) ||
      zo
    );
  }
  function Xa(zo) {
    zo.type = (zo.getAttribute("type") !== null) + "/" + zo.type;
    return zo;
  }
  function XV(zo) {
    if ((zo.type || "").slice(0, 5) === "true/") {
      zo.type = zo.type.slice(5);
    } else {
      zo.removeAttribute("type");
    }
    return zo;
  }
  function Xq(zo, zm) {
    var zT;
    var zk;
    var zF;
    var zl;
    var zw;
    var zj;
    if (zm.nodeType === 1) {
      if (
        Sb.hasData(zo) &&
        ((zl = Sb.access(zo)), (zw = Sb.set(zm, zl)), (zj = zl.events))
      ) {
        delete zw.handle;
        zw.events = {};
        for (zF in zj) {
          zT = 0;
          zk = zj[zF].length;
          for (; zT < zk; zT++) {
            SR.event.add(zm, zF, zj[zF][zT]);
          }
        }
      }
      if (SJ.hasData(zo)) {
        zl = SJ.access(zo);
        zw = SR.extend({}, zl);
        SJ.set(zm, zw);
      }
    }
  }
  function XI(zo, zm, zT, zk) {
    zm = S8.apply([], zm);
    var zF;
    var zl;
    var zw;
    var zj;
    var zi;
    var zZ;
    var zb = 0;
    var zJ = zo.length;
    var zB = zJ - 1;
    var zv = zm[0];
    var zC = S2(zv);
    if (
      zC ||
      (zJ > 1 && typeof zv == "string" && !SY.checkClone && XE.test(zv))
    ) {
      return zo.each(function (zf) {
        var zc = zo.eq(zf);
        if (zC) {
          zm[0] = zv.call(this, zf, zc.html());
        }
        XI(zc, zm, zT, zk);
      });
    }
    if (
      zJ &&
      ((zl = (zF = X7(zm, zo[0].ownerDocument, false, zo, zk)).firstChild),
      zF.childNodes.length === 1 && (zF = zl),
      zl || zk)
    ) {
      for (zj = (zw = SR.map(X4(zF, "script"), Xa)).length; zb < zJ; zb++) {
        zi = zF;
        if (zb !== zB && ((zi = SR.clone(zi, true, true)), zj)) {
          SR.merge(zw, X4(zi, "script"));
        }
        zT.call(zo[zb], zi, zb);
      }
      if (zj) {
        zZ = zw[zw.length - 1].ownerDocument;
        SR.map(zw, XV);
        zb = 0;
        for (; zb < zj; zb++) {
          zi = zw[zb];
          if (
            X2.test(zi.type || "") &&
            !Sb.access(zi, "globalEval") &&
            SR.contains(zZ, zi)
          ) {
            if (zi.src && (zi.type || "").toLowerCase() !== "module") {
              if (SR._evalUrl) {
                SR._evalUrl(zi.src);
              }
            } else {
              SE(zi.textContent.replace(XG, ""), zZ, zi);
            }
          }
        }
      }
    }
    return zo;
  }
  function XH(zo, zm, zT) {
    for (
      var zk, zF = zm ? SR.filter(zm, zo) : zo, zl = 0;
      (zk = zF[zl]) != null;
      zl++
    ) {
      if (!zT && zk.nodeType === 1) {
        SR.cleanData(X4(zk));
      }
      if (zk.parentNode) {
        if (zT && SR.contains(zk.ownerDocument, zk)) {
          X5(X4(zk, "script"));
        }
        zk.parentNode.removeChild(zk);
      }
    }
    return zo;
  }
  SR.extend({
    htmlPrefilter: function (zo) {
      return zo.replace(XY, "<$1></$2>");
    },
    clone: function (zo, zm, zT) {
      var zk;
      var zF;
      var zl;
      var zw;
      var zj;
      var zi;
      var zZ;
      var zb = zo.cloneNode(true);
      var zJ = SR.contains(zo.ownerDocument, zo);
      if (
        !SY.noCloneChecked &&
        (zo.nodeType === 1 || zo.nodeType === 11) &&
        !SR.isXMLDoc(zo)
      ) {
        zw = X4(zb);
        zk = 0;
        zF = (zl = X4(zo)).length;
        for (; zk < zF; zk++) {
          zj = zl[zk];
          zi = zw[zk];
          zZ = undefined;
          if (
            (zZ = zi.nodeName.toLowerCase()) === "input" &&
            X0.test(zj.type)
          ) {
            zi.checked = zj.checked;
          } else if (zZ === "input" || zZ === "textarea") {
            zi.defaultValue = zj.defaultValue;
          }
        }
      }
      if (zm) {
        if (zT) {
          zl = zl || X4(zo);
          zw = zw || X4(zb);
          zk = 0;
          zF = zl.length;
          for (; zk < zF; zk++) {
            Xq(zl[zk], zw[zk]);
          }
        } else {
          Xq(zo, zb);
        }
      }
      if ((zw = X4(zb, "script")).length > 0) {
        X5(zw, !zJ && X4(zo, "script"));
      }
      return zb;
    },
    cleanData: function (zo) {
      var zm;
      for (
        var zT, zk, zF = SR.event.special, zl = 0;
        (zT = zo[zl]) !== undefined;
        zl++
      ) {
        if (Si(zT)) {
          if ((zm = zT[Sb.expando])) {
            if (zm.events) {
              for (zk in zm.events) {
                if (zF[zk]) {
                  SR.event.remove(zT, zk);
                } else {
                  SR.removeEvent(zT, zk, zm.handle);
                }
              }
            }
            zT[Sb.expando] = undefined;
          }
          zT[SJ.expando] &&= undefined;
        }
      }
    },
  });
  SR.fn.extend({
    detach: function (zo) {
      return XH(this, zo, true);
    },
    remove: function (zo) {
      return XH(this, zo);
    },
    text: function (zo) {
      return Sk(
        this,
        function (zm) {
          if (zm === undefined) {
            return SR.text(this);
          } else {
            return this.empty().each(function () {
              if (
                this.nodeType === 1 ||
                this.nodeType === 11 ||
                this.nodeType === 9
              ) {
                this.textContent = zm;
              }
            });
          }
        },
        null,
        zo,
        arguments.length
      );
    },
    append: function () {
      return XI(this, arguments, function (zo) {
        if (
          this.nodeType === 1 ||
          this.nodeType === 11 ||
          this.nodeType === 9
        ) {
          XR(this, zo).appendChild(zo);
        }
      });
    },
    prepend: function () {
      return XI(this, arguments, function (zo) {
        var zm;
        if (
          this.nodeType === 1 ||
          this.nodeType === 11 ||
          this.nodeType === 9
        ) {
          (zm = XR(this, zo)).insertBefore(zo, zm.firstChild);
        }
      });
    },
    before: function () {
      return XI(this, arguments, function (zo) {
        if (this.parentNode) {
          this.parentNode.insertBefore(zo, this);
        }
      });
    },
    after: function () {
      return XI(this, arguments, function (zo) {
        if (this.parentNode) {
          this.parentNode.insertBefore(zo, this.nextSibling);
        }
      });
    },
    empty: function () {
      for (var zo, zm = 0; (zo = this[zm]) != null; zm++) {
        if (zo.nodeType === 1) {
          SR.cleanData(X4(zo, false));
          zo.textContent = "";
        }
      }
      return this;
    },
    clone: function (zo, zm) {
      zo = zo != null && zo;
      zm = zm == null ? zo : zm;
      return this.map(function () {
        return SR.clone(this, zo, zm);
      });
    },
    html: function (zo) {
      return Sk(
        this,
        function (zm) {
          var zT = this[0] || {};
          var zk = 0;
          var zF = this.length;
          if (zm === undefined && zT.nodeType === 1) {
            return zT.innerHTML;
          }
          if (
            typeof zm == "string" &&
            !Xp.test(zm) &&
            !X3[(X1.exec(zm) || ["", ""])[1].toLowerCase()]
          ) {
            zm = SR.htmlPrefilter(zm);
            try {
              for (; zk < zF; zk++) {
                if ((zT = this[zk] || {}).nodeType === 1) {
                  SR.cleanData(X4(zT, false));
                  zT.innerHTML = zm;
                }
              }
              zT = 0;
            } catch (zl) {}
          }
          if (zT) {
            this.empty().append(zm);
          }
        },
        null,
        zo,
        arguments.length
      );
    },
    replaceWith: function () {
      var zo = [];
      return XI(
        this,
        arguments,
        function (zm) {
          var zT = this.parentNode;
          if (SR.inArray(this, zo) < 0 && (SR.cleanData(X4(this)), zT)) {
            zT.replaceChild(zm, this);
          }
        },
        zo
      );
    },
  });
  SR.each(
    {
      appendTo: "append",
      prependTo: "prepend",
      insertBefore: "before",
      insertAfter: "after",
      replaceAll: "replaceWith",
    },
    function (zo, zm) {
      SR.fn[zo] = function (zT) {
        var zk;
        var zF = [];
        var zl = SR(zT);
        for (var zw = zl.length - 1, zj = 0; zj <= zw; zj++) {
          zk = zj === zw ? this : this.clone(true);
          SR(zl[zj])[zm](zk);
          S9.apply(zF, zk.get());
        }
        return this.pushStack(zF);
      };
    }
  );
  function XU(zo) {
    var zm = zo.ownerDocument.defaultView;
    return (zm = zm && zm.opener ? zm : S0).getComputedStyle(zo);
  }
  var Xd;
  var XW;
  var Xg;
  var Xh;
  var XD;
  var Xu;
  var Xr;
  var XM = new RegExp("^(" + S4 + ")(?!px)[a-z%]+$", "i");
  var XQ = new RegExp(SP.join("|"), "i");
  function Xs() {
    var zo;
    if (Xr) {
      Xu.style.cssText =
        "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0";
      Xr.style.cssText =
        "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%";
      X8.appendChild(Xu).appendChild(Xr);
      zo = S0.getComputedStyle(Xr);
      Xd = zo.top !== "1%";
      XD = XL(zo.marginLeft) === 12;
      Xr.style.right = "60%";
      Xh = XL(zo.right) === 36;
      XW = XL(zo.width) === 36;
      Xr.style.position = "absolute";
      Xg = Xr.offsetWidth === 36 || "absolute";
      X8.removeChild(Xu);
      Xr = null;
    }
  }
  function XL(zo) {
    return Math.round(parseFloat(zo));
  }
  function Xo(zo, zm, zT) {
    var zk;
    var zF;
    var zl = zo.style;
    if (
      (zT = zT || XU(zo)) &&
      ((zF = zT.getPropertyValue(zm) || zT[zm]) !== "" ||
        SR.contains(zo.ownerDocument, zo) ||
        (zF = SR.style(zo, zm)),
      !SY.pixelBoxStyles()) &&
      XM.test(zF) &&
      XQ.test(zm)
    ) {
      zo = zl.width;
      zm = zl.minWidth;
      zk = zl.maxWidth;
      zl.minWidth = zl.maxWidth = zl.width = zF;
      zF = zT.width;
      zl.width = zo;
      zl.minWidth = zm;
      zl.maxWidth = zk;
    }
    if (zF !== undefined) {
      return zF + "";
    } else {
      return zF;
    }
  }
  function Xm(zo, zm) {
    return {
      get: function () {
        if (!zo()) {
          return (this.get = zm).apply(this, arguments);
        }
        delete this.get;
      },
    };
  }
  Xu = S5.createElement("div");
  if ((Xr = S5.createElement("div")).style) {
    Xr.style.backgroundClip = "content-box";
    Xr.cloneNode(true).style.backgroundClip = "";
    SY.clearCloneStyle = Xr.style.backgroundClip === "content-box";
    SR.extend(SY, {
      boxSizingReliable: function () {
        Xs();
        return XW;
      },
      pixelBoxStyles: function () {
        Xs();
        return Xh;
      },
      pixelPosition: function () {
        Xs();
        return Xd;
      },
      reliableMarginLeft: function () {
        Xs();
        return XD;
      },
      scrollboxSize: function () {
        Xs();
        return Xg;
      },
    });
  }
  var XT = /^(none|table(?!-c[ea]).+)/;
  var Xk = /^--/;
  var XF = {
    position: "absolute",
    visibility: "hidden",
    display: "block",
  };
  var Xl = {
    letterSpacing: "0",
    fontWeight: "400",
  };
  var Xw = ["Webkit", "Moz", "ms"];
  var Xj = S5.createElement("div").style;
  function Xi(zo) {
    return (SR.cssProps[zo] ||=
      (function (zm) {
        if (zm in Xj) {
          return zm;
        }
        var zT = zm[0].toUpperCase() + zm.slice(1);
        for (var zk = Xw.length; zk--; ) {
          if ((zm = Xw[zk] + zT) in Xj) {
            return zm;
          }
        }
      })(zo) || zo);
  }
  function XZ(zo, zm, zT) {
    var zk = SK.exec(zm);
    if (zk) {
      return Math.max(0, zk[2] - (zT || 0)) + (zk[3] || "px");
    } else {
      return zm;
    }
  }
  function Xb(zo, zm, zT, zk, zF, zl) {
    var zw = zm === "width" ? 1 : 0;
    var zj = 0;
    var zi = 0;
    if (zT === (zk ? "border" : "content")) {
      return 0;
    }
    for (; zw < 4; zw += 2) {
      if (zT === "margin") {
        zi += SR.css(zo, zT + SP[zw], true, zF);
      }
      if (zk) {
        if (zT === "content") {
          zi -= SR.css(zo, "padding" + SP[zw], true, zF);
        }
        if (zT !== "margin") {
          zi -= SR.css(zo, "border" + SP[zw] + "Width", true, zF);
        }
      } else {
        zi += SR.css(zo, "padding" + SP[zw], true, zF);
        if (zT !== "padding") {
          zi += SR.css(zo, "border" + SP[zw] + "Width", true, zF);
        } else {
          zj += SR.css(zo, "border" + SP[zw] + "Width", true, zF);
        }
      }
    }
    if (!zk && zl >= 0) {
      zi += Math.max(
        0,
        Math.ceil(
          zo["offset" + zm[0].toUpperCase() + zm.slice(1)] - zl - zi - zj - 0.5
        )
      );
    }
    return zi;
  }
  function XJ(zo, zm, zT) {
    var zk = XU(zo);
    var zF = Xo(zo, zm, zk);
    var zl = SR.css(zo, "boxSizing", false, zk) === "border-box";
    var zw = zl;
    if (XM.test(zF)) {
      if (!zT) {
        return zF;
      }
      zF = "auto";
    }
    zw = zw && (SY.boxSizingReliable() || zF === zo.style[zm]);
    if (
      zF === "auto" ||
      (!parseFloat(zF) && SR.css(zo, "display", false, zk) === "inline")
    ) {
      zF = zo["offset" + zm[0].toUpperCase() + zm.slice(1)];
      zw = true;
    }
    return (
      (zF = parseFloat(zF) || 0) +
      Xb(zo, zm, zT || (zl ? "border" : "content"), zw, zk, zF) +
      "px"
    );
  }
  function XB(zo, zm, zT, zk, zF) {
    return new XB.prototype.init(zo, zm, zT, zk, zF);
  }
  SR.extend({
    cssHooks: {
      opacity: {
        get: function (zo, zm) {
          if (zm) {
            if ((zm = Xo(zo, "opacity")) === "") {
              return "1";
            } else {
              return zm;
            }
          }
        },
      },
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
      zoom: true,
    },
    cssProps: {},
    style: function (zo, zm, zT, zk) {
      if (zo && zo.nodeType !== 3 && zo.nodeType !== 8 && zo.style) {
        var zF;
        var zl;
        var zw;
        var zj = Sj(zm);
        var zi = Xk.test(zm);
        var zZ = zo.style;
        if (!zi) {
          zm = Xi(zj);
        }
        zw = SR.cssHooks[zm] || SR.cssHooks[zj];
        if (zT === undefined) {
          if (zw && "get" in zw && (zF = zw.get(zo, false, zk)) !== undefined) {
            return zF;
          } else {
            return zZ[zm];
          }
        }
        if ((zl = typeof zT) == "string" && (zF = SK.exec(zT)) && zF[1]) {
          zT = SN(zo, zm, zF);
          zl = "number";
        }
        if (zT != null && zT == zT) {
          if (zl === "number") {
            zT += (zF && zF[3]) || (SR.cssNumber[zj] ? "" : "px");
          }
          if (
            !SY.clearCloneStyle &&
            zT === "" &&
            zm.indexOf("background") === 0
          ) {
            zZ[zm] = "inherit";
          }
          if (
            !zw ||
            !("set" in zw) ||
            (zT = zw.set(zo, zT, zk)) !== undefined
          ) {
            if (zi) {
              zZ.setProperty(zm, zT);
            } else {
              zZ[zm] = zT;
            }
          }
        }
      }
    },
    css: function (zo, zm, zT, zk) {
      var zF;
      var zl = Sj(zm);
      if (!Xk.test(zm)) {
        zm = Xi(zl);
      }
      if (
        (zF =
          (zF =
            (zl = SR.cssHooks[zm] || SR.cssHooks[zl]) && "get" in zl
              ? zl.get(zo, true, zT)
              : zF) === undefined
            ? Xo(zo, zm, zk)
            : zF) === "normal" &&
        zm in Xl
      ) {
        zF = Xl[zm];
      }
      if (
        (zT === "" || zT) &&
        ((zl = parseFloat(zF)), zT === true || isFinite(zl))
      ) {
        return zl || 0;
      } else {
        return zF;
      }
    },
  });
  SR.each(["height", "width"], function (zo, zm) {
    SR.cssHooks[zm] = {
      get: function (zT, zk, zF) {
        if (zk) {
          if (
            !XT.test(SR.css(zT, "display")) ||
            (zT.getClientRects().length && zT.getBoundingClientRect().width)
          ) {
            return XJ(zT, zm, zF);
          } else {
            return Sc(zT, XF, function () {
              return XJ(zT, zm, zF);
            });
          }
        }
      },
      set: function (zT, zk, zF) {
        var zl = XU(zT);
        var zw = SR.css(zT, "boxSizing", false, zl) === "border-box";
        var zF = zF && Xb(zT, zm, zF, zw, zl);
        if (zw && SY.scrollboxSize() === zl.position) {
          zF -= Math.ceil(
            zT["offset" + zm[0].toUpperCase() + zm.slice(1)] -
              parseFloat(zl[zm]) -
              Xb(zT, zm, "border", false, zl) -
              0.5
          );
        }
        if (zF && (zw = SK.exec(zk)) && (zw[3] || "px") !== "px") {
          zT.style[zm] = zk;
          zk = SR.css(zT, zm);
        }
        return XZ(0, zk, zF);
      },
    };
  });
  SR.cssHooks.marginLeft = Xm(SY.reliableMarginLeft, function (zo, zm) {
    if (zm) {
      return (
        (parseFloat(Xo(zo, "marginLeft")) ||
          zo.getBoundingClientRect().left -
            Sc(
              zo,
              {
                marginLeft: 0,
              },
              function () {
                return zo.getBoundingClientRect().left;
              }
            )) + "px"
      );
    }
  });
  SR.each(
    {
      margin: "",
      padding: "",
      border: "Width",
    },
    function (zo, zm) {
      SR.cssHooks[zo + zm] = {
        expand: function (zT) {
          for (
            var zk = 0,
              zF = {},
              zl = typeof zT == "string" ? zT.split(" ") : [zT];
            zk < 4;
            zk++
          ) {
            zF[zo + SP[zk] + zm] = zl[zk] || zl[zk - 2] || zl[0];
          }
          return zF;
        },
      };
      if (zo !== "margin") {
        SR.cssHooks[zo + zm].set = XZ;
      }
    }
  );
  SR.fn.extend({
    css: function (zo, zm) {
      return Sk(
        this,
        function (zT, zk, zF) {
          var zl;
          var zw;
          var zj = {};
          var zi = 0;
          if (Array.isArray(zk)) {
            zl = XU(zT);
            zw = zk.length;
            for (; zi < zw; zi++) {
              zj[zk[zi]] = SR.css(zT, zk[zi], false, zl);
            }
            return zj;
          }
          if (zF !== undefined) {
            return SR.style(zT, zk, zF);
          } else {
            return SR.css(zT, zk);
          }
        },
        zo,
        zm,
        arguments.length > 1
      );
    },
  });
  ((SR.Tween = XB).prototype = {
    constructor: XB,
    init: function (zo, zm, zT, zk, zF, zl) {
      this.elem = zo;
      this.prop = zT;
      this.easing = zF || SR.easing._default;
      this.options = zm;
      this.start = this.now = this.cur();
      this.end = zk;
      this.unit = zl || (SR.cssNumber[zT] ? "" : "px");
    },
    cur: function () {
      var zo = XB.propHooks[this.prop];
      return (zo && zo.get ? zo : XB.propHooks._default).get(this);
    },
    run: function (zo) {
      var zm;
      var zT = XB.propHooks[this.prop];
      if (this.options.duration) {
        this.pos = zm = SR.easing[this.easing](
          zo,
          this.options.duration * zo,
          0,
          1,
          this.options.duration
        );
      } else {
        this.pos = zm = zo;
      }
      this.now = (this.end - this.start) * zm + this.start;
      if (this.options.step) {
        this.options.step.call(this.elem, this.now, this);
      }
      (zT && zT.set ? zT : XB.propHooks._default).set(this);
      return this;
    },
  }).init.prototype = XB.prototype;
  (XB.propHooks = {
    _default: {
      get: function (zo) {
        if (
          zo.elem.nodeType !== 1 ||
          (zo.elem[zo.prop] != null && zo.elem.style[zo.prop] == null)
        ) {
          return zo.elem[zo.prop];
        } else if ((zo = SR.css(zo.elem, zo.prop, "")) && zo !== "auto") {
          return zo;
        } else {
          return 0;
        }
      },
      set: function (zo) {
        if (SR.fx.step[zo.prop]) {
          SR.fx.step[zo.prop](zo);
        } else if (
          zo.elem.nodeType !== 1 ||
          (zo.elem.style[SR.cssProps[zo.prop]] == null && !SR.cssHooks[zo.prop])
        ) {
          zo.elem[zo.prop] = zo.now;
        } else {
          SR.style(zo.elem, zo.prop, zo.now + zo.unit);
        }
      },
    },
  }).scrollTop = XB.propHooks.scrollLeft = {
    set: function (zo) {
      if (zo.elem.nodeType && zo.elem.parentNode) {
        zo.elem[zo.prop] = zo.now;
      }
    },
  };
  SR.easing = {
    linear: function (zo) {
      return zo;
    },
    swing: function (zo) {
      return 0.5 - Math.cos(zo * Math.PI) / 2;
    },
    _default: "swing",
  };
  SR.fx = XB.prototype.init;
  SR.fx.step = {};
  var Xv;
  var XC;
  var Xf;
  var Xc;
  var XK = /^(?:toggle|show|hide)$/;
  var XP = /queueHooks$/;
  function XN() {
    if (XC) {
      if (S5.hidden === false && S0.requestAnimationFrame) {
        S0.requestAnimationFrame(XN);
      } else {
        S0.setTimeout(XN, SR.fx.interval);
      }
      SR.fx.tick();
    }
  }
  function Xn() {
    S0.setTimeout(function () {
      Xv = undefined;
    });
    return (Xv = Date.now());
  }
  function Xy(zo, zm) {
    var zT;
    var zk = 0;
    var zF = {
      height: zo,
    };
    for (zm = zm ? 1 : 0; zk < 4; zk += 2 - zm) {
      zF["margin" + (zT = SP[zk])] = zF["padding" + zT] = zo;
    }
    if (zm) {
      zF.opacity = zF.width = zo;
    }
    return zF;
  }
  function z0(zo, zm, zT) {
    var zk;
    var zF = (z1.tweeners[zm] || []).concat(z1.tweeners["*"]);
    for (var zl = 0, zw = zF.length; zl < zw; zl++) {
      if ((zk = zF[zl].call(zT, zm, zo))) {
        return zk;
      }
    }
  }
  function z1(zo, zm, zT) {
    var zk;
    var zF;
    var zl;
    var zw;
    var zj;
    var zi;
    var zZ;
    var zb = 0;
    var zJ = z1.prefilters.length;
    var zB = SR.Deferred().always(function () {
      delete zv.elem;
    });
    function zv() {
      if (zF) {
        return false;
      }
      var zP = Xv || Xn();
      var zP = Math.max(0, zC.startTime + zC.duration - zP);
      var zN = 1 - (zP / zC.duration || 0);
      for (var zn = 0, zy = zC.tweens.length; zn < zy; zn++) {
        zC.tweens[zn].run(zN);
      }
      zB.notifyWith(zo, [zC, zN, zP]);
      if (zN < 1 && zy) {
        return zP;
      } else {
        if (!zy) {
          zB.notifyWith(zo, [zC, 1, 0]);
        }
        zB.resolveWith(zo, [zC]);
        return false;
      }
    }
    var zC = zB.promise({
      elem: zo,
      props: SR.extend({}, zm),
      opts: SR.extend(
        true,
        {
          specialEasing: {},
          easing: SR.easing._default,
        },
        zT
      ),
      originalProperties: zm,
      originalOptions: zT,
      startTime: Xv || Xn(),
      duration: zT.duration,
      tweens: [],
      createTween: function (zP, zN) {
        zN = SR.Tween(
          zo,
          zC.opts,
          zP,
          zN,
          zC.opts.specialEasing[zP] || zC.opts.easing
        );
        zC.tweens.push(zN);
        return zN;
      },
      stop: function (zP) {
        var zN = 0;
        var zn = zP ? zC.tweens.length : 0;
        if (!zF) {
          for (zF = true; zN < zn; zN++) {
            zC.tweens[zN].run(1);
          }
          if (zP) {
            zB.notifyWith(zo, [zC, 1, 0]);
            zB.resolveWith(zo, [zC, zP]);
          } else {
            zB.rejectWith(zo, [zC, zP]);
          }
        }
        return this;
      },
    });
    var zf = zC.props;
    var zc = zf;
    var zK = zC.opts.specialEasing;
    for (zl in zc) {
      zw = Sj(zl);
      zj = zK[zw];
      zi = zc[zl];
      if (Array.isArray(zi)) {
        zj = zi[1];
        zi = zc[zl] = zi[0];
      }
      if (zl !== zw) {
        zc[zw] = zi;
        delete zc[zl];
      }
      if ((zZ = SR.cssHooks[zw]) && "expand" in zZ) {
        zi = zZ.expand(zi);
        delete zc[zw];
        for (zl in zi) {
          if (!(zl in zc)) {
            zc[zl] = zi[zl];
            zK[zl] = zj;
          }
        }
      } else {
        zK[zw] = zj;
      }
    }
    for (; zb < zJ; zb++) {
      if ((zk = z1.prefilters[zb].call(zC, zo, zf, zC.opts))) {
        if (S2(zk.stop)) {
          SR._queueHooks(zC.elem, zC.opts.queue).stop = zk.stop.bind(zk);
        }
        return zk;
      }
    }
    SR.map(zf, z0, zC);
    if (S2(zC.opts.start)) {
      zC.opts.start.call(zo, zC);
    }
    zC.progress(zC.opts.progress)
      .done(zC.opts.done, zC.opts.complete)
      .fail(zC.opts.fail)
      .always(zC.opts.always);
    SR.fx.timer(
      SR.extend(zv, {
        elem: zo,
        anim: zC,
        queue: zC.opts.queue,
      })
    );
    return zC;
  }
  SR.Animation = SR.extend(z1, {
    tweeners: {
      "*": [
        function (zo, zm) {
          var zT = this.createTween(zo, zm);
          SN(zT.elem, zo, SK.exec(zm), zT);
          return zT;
        },
      ],
    },
    tweener: function (zo, zm) {
      var zT;
      for (
        var zk = 0,
          zF = (zo = S2(zo) ? ((zm = zo), ["*"]) : zo.match(SM)).length;
        zk < zF;
        zk++
      ) {
        zT = zo[zk];
        z1.tweeners[zT] = z1.tweeners[zT] || [];
        z1.tweeners[zT].unshift(zm);
      }
    },
    prefilters: [
      function (zo, zm, zT) {
        var zk;
        var zF;
        var zl;
        var zw;
        var zj;
        var zi;
        var zZ;
        var zb = "width" in zm || "height" in zm;
        var zJ = this;
        var zB = {};
        var zv = zo.style;
        var zC = zo.nodeType && Sf(zo);
        var zf = Sb.get(zo, "fxshow");
        if (!zT.queue) {
          if ((zw = SR._queueHooks(zo, "fx")).unqueued == null) {
            zw.unqueued = 0;
            zj = zw.empty.fire;
            zw.empty.fire = function () {
              if (!zw.unqueued) {
                zj();
              }
            };
          }
          zw.unqueued++;
          zJ.always(function () {
            zJ.always(function () {
              zw.unqueued--;
              if (!SR.queue(zo, "fx").length) {
                zw.empty.fire();
              }
            });
          });
        }
        for (zk in zm) {
          zF = zm[zk];
          if (XK.test(zF)) {
            delete zm[zk];
            zl = zl || zF === "toggle";
            if (zF === (zC ? "hide" : "show")) {
              if (zF !== "show" || !zf || zf[zk] === undefined) {
                continue;
              }
              zC = true;
            }
            zB[zk] = (zf && zf[zk]) || SR.style(zo, zk);
          }
        }
        if ((zi = !SR.isEmptyObject(zm)) || !SR.isEmptyObject(zB)) {
          if (
            zb &&
            zo.nodeType === 1 &&
            ((zT.overflow = [zv.overflow, zv.overflowX, zv.overflowY]),
            (zZ = zf && zf.display) == null && (zZ = Sb.get(zo, "display")),
            (zb = SR.css(zo, "display")) === "none" &&
              (zZ
                ? (zb = zZ)
                : (Sy([zo], true),
                  (zZ = zo.style.display || zZ),
                  (zb = SR.css(zo, "display")),
                  Sy([zo]))),
            zb === "inline" || (zb === "inline-block" && zZ != null)) &&
            SR.css(zo, "float") === "none"
          ) {
            if (!zi) {
              zJ.done(function () {
                zv.display = zZ;
              });
              if (zZ == null) {
                zb = zv.display;
                zZ = zb === "none" ? "" : zb;
              }
            }
            zv.display = "inline-block";
          }
          if (zT.overflow) {
            zv.overflow = "hidden";
            zJ.always(function () {
              zv.overflow = zT.overflow[0];
              zv.overflowX = zT.overflow[1];
              zv.overflowY = zT.overflow[2];
            });
          }
          zi = false;
          for (zk in zB) {
            if (!zi) {
              if (zf) {
                if ("hidden" in zf) {
                  zC = zf.hidden;
                }
              } else {
                zf = Sb.access(zo, "fxshow", {
                  display: zZ,
                });
              }
              if (zl) {
                zf.hidden = !zC;
              }
              if (zC) {
                Sy([zo], true);
              }
              zJ.done(function () {
                if (!zC) {
                  Sy([zo]);
                }
                Sb.remove(zo, "fxshow");
                for (zk in zB) {
                  SR.style(zo, zk, zB[zk]);
                }
              });
            }
            zi = z0(zC ? zf[zk] : 0, zk, zJ);
            if (!(zk in zf)) {
              zf[zk] = zi.start;
              if (zC) {
                zi.end = zi.start;
                zi.start = 0;
              }
            }
          }
        }
      },
    ],
    prefilter: function (zo, zm) {
      if (zm) {
        z1.prefilters.unshift(zo);
      } else {
        z1.prefilters.push(zo);
      }
    },
  });
  SR.speed = function (zo, zm, zT) {
    var zk =
      zo && typeof zo == "object"
        ? SR.extend({}, zo)
        : {
            complete: zT || (!zT && zm) || (S2(zo) && zo),
            duration: zo,
            easing: (zT && zm) || (zm && !S2(zm) && zm),
          };
    if (SR.fx.off) {
      zk.duration = 0;
    } else if (typeof zk.duration != "number") {
      if (zk.duration in SR.fx.speeds) {
        zk.duration = SR.fx.speeds[zk.duration];
      } else {
        zk.duration = SR.fx.speeds._default;
      }
    }
    if (zk.queue == null || zk.queue === true) {
      zk.queue = "fx";
    }
    zk.old = zk.complete;
    zk.complete = function () {
      if (S2(zk.old)) {
        zk.old.call(this);
      }
      if (zk.queue) {
        SR.dequeue(this, zk.queue);
      }
    };
    return zk;
  };
  SR.fn.extend({
    fadeTo: function (zo, zm, zT, zk) {
      return this.filter(Sf).css("opacity", 0).show().end().animate(
        {
          opacity: zm,
        },
        zo,
        zT,
        zk
      );
    },
    animate: function (zo, zm, zT, zk) {
      function zF() {
        var zj = z1(this, SR.extend({}, zo), zw);
        if (zl || Sb.get(this, "finish")) {
          zj.stop(true);
        }
      }
      var zl = SR.isEmptyObject(zo);
      var zw = SR.speed(zm, zT, zk);
      zF.finish = zF;
      if (zl || zw.queue === false) {
        return this.each(zF);
      } else {
        return this.queue(zw.queue, zF);
      }
    },
    stop: function (zo, zm, zT) {
      function zk(zF) {
        var zl = zF.stop;
        delete zF.stop;
        zl(zT);
      }
      if (typeof zo != "string") {
        zT = zm;
        zm = zo;
        zo = undefined;
      }
      if (zm && zo !== false) {
        this.queue(zo || "fx", []);
      }
      return this.each(function () {
        var zF = true;
        var zl = zo != null && zo + "queueHooks";
        var zw = SR.timers;
        var zj = Sb.get(this);
        if (zl) {
          if (zj[zl] && zj[zl].stop) {
            zk(zj[zl]);
          }
        } else {
          for (zl in zj) {
            if (zj[zl] && zj[zl].stop && XP.test(zl)) {
              zk(zj[zl]);
            }
          }
        }
        for (zl = zw.length; zl--; ) {
          if (zw[zl].elem === this && (zo == null || zw[zl].queue === zo)) {
            zw[zl].anim.stop(zT);
            zF = false;
            zw.splice(zl, 1);
          }
        }
        if (!!zF || !zT) {
          SR.dequeue(this, zo);
        }
      });
    },
    finish: function (zo) {
      if (zo !== false) {
        zo = zo || "fx";
      }
      return this.each(function () {
        var zm;
        var zT = Sb.get(this);
        var zk = zT[zo + "queue"];
        var zF = zT[zo + "queueHooks"];
        var zl = SR.timers;
        var zw = zk ? zk.length : 0;
        zT.finish = true;
        SR.queue(this, zo, []);
        if (zF && zF.stop) {
          zF.stop.call(this, true);
        }
        zm = zl.length;
        while (zm--) {
          if (zl[zm].elem === this && zl[zm].queue === zo) {
            zl[zm].anim.stop(true);
            zl.splice(zm, 1);
          }
        }
        for (zm = 0; zm < zw; zm++) {
          if (zk[zm] && zk[zm].finish) {
            zk[zm].finish.call(this);
          }
        }
        delete zT.finish;
      });
    },
  });
  SR.each(["toggle", "show", "hide"], function (zo, zm) {
    var zT = SR.fn[zm];
    SR.fn[zm] = function (zk, zF, zl) {
      if (zk == null || typeof zk == "boolean") {
        return zT.apply(this, arguments);
      } else {
        return this.animate(Xy(zm, true), zk, zF, zl);
      }
    };
  });
  SR.each(
    {
      slideDown: Xy("show"),
      slideUp: Xy("hide"),
      slideToggle: Xy("toggle"),
      fadeIn: {
        opacity: "show",
      },
      fadeOut: {
        opacity: "hide",
      },
      fadeToggle: {
        opacity: "toggle",
      },
    },
    function (zo, zm) {
      SR.fn[zo] = function (zT, zk, zF) {
        return this.animate(zm, zT, zk, zF);
      };
    }
  );
  SR.timers = [];
  SR.fx.tick = function () {
    var zo;
    var zm = 0;
    var zT = SR.timers;
    for (Xv = Date.now(); zm < zT.length; zm++) {
      if (!(zo = zT[zm])() && zT[zm] === zo) {
        zT.splice(zm--, 1);
      }
    }
    if (!zT.length) {
      SR.fx.stop();
    }
    Xv = undefined;
  };
  SR.fx.timer = function (zo) {
    SR.timers.push(zo);
    SR.fx.start();
  };
  SR.fx.interval = 13;
  SR.fx.start = function () {
    if (!XC) {
      XC = true;
      XN();
    }
  };
  SR.fx.stop = function () {
    XC = null;
  };
  SR.fx.speeds = {
    slow: 600,
    fast: 200,
    _default: 400,
  };
  SR.fn.delay = function (zo, zm) {
    zo = (SR.fx && SR.fx.speeds[zo]) || zo;
    return this.queue((zm = zm || "fx"), function (zT, zk) {
      var zF = S0.setTimeout(zT, zo);
      zk.stop = function () {
        S0.clearTimeout(zF);
      };
    });
  };
  Xf = S5.createElement("input");
  Xc = S5.createElement("select").appendChild(S5.createElement("option"));
  Xf.type = "checkbox";
  SY.checkOn = Xf.value !== "";
  SY.optSelected = Xc.selected;
  (Xf = S5.createElement("input")).value = "t";
  Xf.type = "radio";
  SY.radioValue = Xf.value === "t";
  var z2;
  var z3 = SR.expr.attrHandle;
  SR.fn.extend({
    attr: function (zo, zm) {
      return Sk(this, SR.attr, zo, zm, arguments.length > 1);
    },
    removeAttr: function (zo) {
      return this.each(function () {
        SR.removeAttr(this, zo);
      });
    },
  });
  SR.extend({
    attr: function (zo, zm, zT) {
      var zk;
      var zF;
      var zl = zo.nodeType;
      if (zl !== 3 && zl !== 8 && zl !== 2) {
        if (zo.getAttribute === undefined) {
          return SR.prop(zo, zm, zT);
        } else {
          if (zl !== 1 || !SR.isXMLDoc(zo)) {
            zF =
              SR.attrHooks[zm.toLowerCase()] ||
              (SR.expr.match.bool.test(zm) ? z2 : undefined);
          }
          if (zT !== undefined) {
            if (zT === null) {
              SR.removeAttr(zo, zm);
              return;
            } else if (
              zF &&
              "set" in zF &&
              (zk = zF.set(zo, zT, zm)) !== undefined
            ) {
              return zk;
            } else {
              zo.setAttribute(zm, zT + "");
              return zT;
            }
          } else if (
            (!zF || !("get" in zF) || (zk = zF.get(zo, zm)) === null) &&
            (zk = SR.find.attr(zo, zm)) == null
          ) {
            return undefined;
          } else {
            return zk;
          }
        }
      }
    },
    attrHooks: {
      type: {
        set: function (zo, zm) {
          var zT;
          if (!SY.radioValue && zm === "radio" && SU(zo, "input")) {
            zT = zo.value;
            zo.setAttribute("type", zm);
            if (zT) {
              zo.value = zT;
            }
            return zm;
          }
        },
      },
    },
    removeAttr: function (zo, zm) {
      var zT;
      var zk = 0;
      var zF = zm && zm.match(SM);
      if (zF && zo.nodeType === 1) {
        while ((zT = zF[zk++])) {
          zo.removeAttribute(zT);
        }
      }
    },
  });
  z2 = {
    set: function (zo, zm, zT) {
      if (zm === false) {
        SR.removeAttr(zo, zT);
      } else {
        zo.setAttribute(zT, zT);
      }
      return zT;
    },
  };
  SR.each(SR.expr.match.bool.source.match(/\w+/g), function (zo, zm) {
    var zT = z3[zm] || SR.find.attr;
    z3[zm] = function (zk, zF, zl) {
      var zw;
      var zj;
      var zi = zF.toLowerCase();
      if (!zl) {
        zj = z3[zi];
        z3[zi] = zw;
        zw = zT(zk, zF, zl) != null ? zi : null;
        z3[zi] = zj;
      }
      return zw;
    };
  });
  var z4 = /^(?:input|select|textarea|button)$/i;
  var z5 = /^(?:a|area)$/i;
  function z6(zo) {
    return (zo.match(SM) || []).join(" ");
  }
  function z7(zo) {
    return (zo.getAttribute && zo.getAttribute("class")) || "";
  }
  function z8(zo) {
    if (Array.isArray(zo)) {
      return zo;
    } else {
      return (typeof zo == "string" && zo.match(SM)) || [];
    }
  }
  SR.fn.extend({
    prop: function (zo, zm) {
      return Sk(this, SR.prop, zo, zm, arguments.length > 1);
    },
    removeProp: function (zo) {
      return this.each(function () {
        delete this[SR.propFix[zo] || zo];
      });
    },
  });
  SR.extend({
    prop: function (zo, zm, zT) {
      var zk;
      var zF;
      var zl = zo.nodeType;
      if (zl !== 3 && zl !== 8 && zl !== 2) {
        if (zl !== 1 || !SR.isXMLDoc(zo)) {
          zm = SR.propFix[zm] || zm;
          zF = SR.propHooks[zm];
        }
        if (zT !== undefined) {
          if (zF && "set" in zF && (zk = zF.set(zo, zT, zm)) !== undefined) {
            return zk;
          } else {
            return (zo[zm] = zT);
          }
        } else if (zF && "get" in zF && (zk = zF.get(zo, zm)) !== null) {
          return zk;
        } else {
          return zo[zm];
        }
      }
    },
    propHooks: {
      tabIndex: {
        get: function (zo) {
          var zm = SR.find.attr(zo, "tabindex");
          if (zm) {
            return parseInt(zm, 10);
          } else if (
            z4.test(zo.nodeName) ||
            (z5.test(zo.nodeName) && zo.href)
          ) {
            return 0;
          } else {
            return -1;
          }
        },
      },
    },
    propFix: {
      for: "htmlFor",
      class: "className",
    },
  });
  if (!SY.optSelected) {
    SR.propHooks.selected = {
      get: function (zo) {
        zo = zo.parentNode;
        if (zo && zo.parentNode) {
          zo.parentNode.selectedIndex;
        }
        return null;
      },
      set: function (zo) {
        zo = zo.parentNode;
        if (zo && (zo.selectedIndex, zo.parentNode)) {
          zo.parentNode.selectedIndex;
        }
      },
    };
  }
  SR.each(
    [
      "tabIndex",
      "readOnly",
      "maxLength",
      "cellSpacing",
      "cellPadding",
      "rowSpan",
      "colSpan",
      "useMap",
      "frameBorder",
      "contentEditable",
    ],
    function () {
      SR.propFix[this.toLowerCase()] = this;
    }
  );
  SR.fn.extend({
    addClass: function (zo) {
      var zm;
      var zT;
      var zk;
      var zF;
      var zl;
      var zw;
      var zj = 0;
      if (S2(zo)) {
        return this.each(function (zi) {
          SR(this).addClass(zo.call(this, zi, z7(this)));
        });
      }
      if ((zm = z8(zo)).length) {
        while ((zT = this[zj++])) {
          zw = z7(zT);
          if ((zk = zT.nodeType === 1 && " " + z6(zw) + " ")) {
            for (zl = 0; (zF = zm[zl++]); ) {
              if (zk.indexOf(" " + zF + " ") < 0) {
                zk += zF + " ";
              }
            }
            if (zw !== (zw = z6(zk))) {
              zT.setAttribute("class", zw);
            }
          }
        }
      }
      return this;
    },
    removeClass: function (zo) {
      var zm;
      var zT;
      var zk;
      var zF;
      var zl;
      var zw;
      var zj = 0;
      if (S2(zo)) {
        return this.each(function (zi) {
          SR(this).removeClass(zo.call(this, zi, z7(this)));
        });
      }
      if (!arguments.length) {
        return this.attr("class", "");
      }
      if ((zm = z8(zo)).length) {
        while ((zT = this[zj++])) {
          zw = z7(zT);
          if ((zk = zT.nodeType === 1 && " " + z6(zw) + " ")) {
            for (zl = 0; (zF = zm[zl++]); ) {
              while (zk.indexOf(" " + zF + " ") > -1) {
                zk = zk.replace(" " + zF + " ", " ");
              }
            }
            if (zw !== (zw = z6(zk))) {
              zT.setAttribute("class", zw);
            }
          }
        }
      }
      return this;
    },
    toggleClass: function (zo, zm) {
      var zT = typeof zo;
      var zk = zT == "string" || Array.isArray(zo);
      if (typeof zm == "boolean" && zk) {
        if (zm) {
          return this.addClass(zo);
        } else {
          return this.removeClass(zo);
        }
      } else if (S2(zo)) {
        return this.each(function (zF) {
          SR(this).toggleClass(zo.call(this, zF, z7(this), zm), zm);
        });
      } else {
        return this.each(function () {
          var zF;
          var zl;
          var zw;
          var zj;
          if (zk) {
            zl = 0;
            zw = SR(this);
            zj = z8(zo);
            while ((zF = zj[zl++])) {
              if (zw.hasClass(zF)) {
                zw.removeClass(zF);
              } else {
                zw.addClass(zF);
              }
            }
          } else if (zo === undefined || zT == "boolean") {
            if ((zF = z7(this))) {
              Sb.set(this, "__className__", zF);
            }
            if (this.setAttribute) {
              this.setAttribute(
                "class",
                (!zF && zo !== false && Sb.get(this, "__className__")) || ""
              );
            }
          }
        });
      }
    },
    hasClass: function (zo) {
      for (var zm, zT = 0, zk = " " + zo + " "; (zm = this[zT++]); ) {
        if (zm.nodeType === 1 && (" " + z6(z7(zm)) + " ").indexOf(zk) > -1) {
          return true;
        }
      }
      return false;
    },
  });
  function z9(zo) {
    zo.stopPropagation();
  }
  var zS = /\r/g;
  SR.fn.extend({
    val: function (zo) {
      var zm;
      var zT;
      var zk;
      var zF = this[0];
      if (arguments.length) {
        zk = S2(zo);
        return this.each(function (zl) {
          if (this.nodeType === 1) {
            if ((zl = zk ? zo.call(this, zl, SR(this).val()) : zo) == null) {
              zl = "";
            } else if (typeof zl == "number") {
              zl += "";
            } else if (Array.isArray(zl)) {
              zl = SR.map(zl, function (zw) {
                if (zw == null) {
                  return "";
                } else {
                  return zw + "";
                }
              });
            }
            if (
              !(zm =
                SR.valHooks[this.type] ||
                SR.valHooks[this.nodeName.toLowerCase()]) ||
              !("set" in zm) ||
              zm.set(this, zl, "value") === undefined
            ) {
              this.value = zl;
            }
          }
        });
      } else if (zF) {
        if (
          (zm =
            SR.valHooks[zF.type] || SR.valHooks[zF.nodeName.toLowerCase()]) &&
          "get" in zm &&
          (zT = zm.get(zF, "value")) !== undefined
        ) {
          return zT;
        } else if (typeof (zT = zF.value) == "string") {
          return zT.replace(zS, "");
        } else if (zT == null) {
          return "";
        } else {
          return zT;
        }
      } else {
        return undefined;
      }
    },
  });
  SR.extend({
    valHooks: {
      option: {
        get: function (zo) {
          var zm = SR.find.attr(zo, "value");
          return zm ?? z6(SR.text(zo));
        },
      },
      select: {
        get: function (zo) {
          var zm;
          var zT = zo.options;
          var zk = zo.selectedIndex;
          var zF = zo.type === "select-one";
          var zl = zF ? null : [];
          for (
            var zw = zF ? zk + 1 : zT.length, zj = zk < 0 ? zw : zF ? zk : 0;
            zj < zw;
            zj++
          ) {
            if (
              ((zm = zT[zj]).selected || zj === zk) &&
              !zm.disabled &&
              (!zm.parentNode.disabled || !SU(zm.parentNode, "optgroup"))
            ) {
              zm = SR(zm).val();
              if (zF) {
                return zm;
              }
              zl.push(zm);
            }
          }
          return zl;
        },
        set: function (zo, zm) {
          var zT;
          var zk;
          var zF = zo.options;
          var zl = SR.makeArray(zm);
          for (var zw = zF.length; zw--; ) {
            if (
              ((zk = zF[zw]).selected =
                SR.inArray(SR.valHooks.option.get(zk), zl) > -1)
            ) {
              zT = true;
            }
          }
          if (!zT) {
            zo.selectedIndex = -1;
          }
          return zl;
        },
      },
    },
  });
  SR.each(["radio", "checkbox"], function () {
    SR.valHooks[this] = {
      set: function (zo, zm) {
        if (Array.isArray(zm)) {
          return (zo.checked = SR.inArray(SR(zo).val(), zm) > -1);
        }
      },
    };
    if (!SY.checkOn) {
      SR.valHooks[this].get = function (zo) {
        if (zo.getAttribute("value") === null) {
          return "on";
        } else {
          return zo.value;
        }
      };
    }
  });
  SY.focusin = "onfocusin" in S0;
  var zX = /^(?:focusinfocus|focusoutblur)$/;
  SR.extend(SR.event, {
    trigger: function (zo, zm, zT, zk) {
      var zF;
      var zl;
      var zw;
      var zj;
      var zi;
      var zZ;
      var zb;
      var zJ = [zT || S5];
      var zB = SA.call(zo, "type") ? zo.type : zo;
      var zv = SA.call(zo, "namespace") ? zo.namespace.split(".") : [];
      var zC = (zb = zl = zT = zT || S5);
      if (
        zT.nodeType !== 3 &&
        zT.nodeType !== 8 &&
        !zX.test(zB + SR.event.triggered) &&
        (zB.indexOf(".") > -1 &&
          ((zB = (zv = zB.split(".")).shift()), zv.sort()),
        (zj = zB.indexOf(":") < 0 && "on" + zB),
        ((zo = zo[SR.expando]
          ? zo
          : new SR.Event(zB, typeof zo == "object" && zo)).isTrigger = zk
          ? 2
          : 3),
        (zo.namespace = zv.join(".")),
        (zo.rnamespace = zo.namespace
          ? new RegExp("(^|\\.)" + zv.join("\\.(?:.*\\.|)") + "(\\.|$)")
          : null),
        (zo.result = undefined),
        (zo.target ||= zT),
        (zm = zm == null ? [zo] : SR.makeArray(zm, [zo])),
        (zZ = SR.event.special[zB] || {}),
        zk || !zZ.trigger || zZ.trigger.apply(zT, zm) !== false)
      ) {
        if (!zk && !zZ.noBubble && !S3(zT)) {
          zw = zZ.delegateType || zB;
          if (!zX.test(zw + zB)) {
            zC = zC.parentNode;
          }
          for (; zC; zC = zC.parentNode) {
            zJ.push(zC);
            zl = zC;
          }
          if (zl === (zT.ownerDocument || S5)) {
            zJ.push(zl.defaultView || zl.parentWindow || S0);
          }
        }
        for (zF = 0; (zC = zJ[zF++]) && !zo.isPropagationStopped(); ) {
          zb = zC;
          zo.type = zF > 1 ? zw : zZ.bindType || zB;
          if (
            (zi = (Sb.get(zC, "events") || {})[zo.type] && Sb.get(zC, "handle"))
          ) {
            zi.apply(zC, zm);
          }
          if (
            (zi = zj && zC[zj]) &&
            zi.apply &&
            Si(zC) &&
            ((zo.result = zi.apply(zC, zm)), zo.result === false)
          ) {
            zo.preventDefault();
          }
        }
        zo.type = zB;
        if (
          !zk &&
          !zo.isDefaultPrevented() &&
          (!zZ._default || zZ._default.apply(zJ.pop(), zm) === false) &&
          !!Si(zT)
        ) {
          if (
            zj &&
            S2(zT[zB]) &&
            !S3(zT) &&
            ((zl = zT[zj]) && (zT[zj] = null),
            (SR.event.triggered = zB),
            zo.isPropagationStopped() && zb.addEventListener(zB, z9),
            zT[zB](),
            zo.isPropagationStopped() && zb.removeEventListener(zB, z9),
            (SR.event.triggered = undefined),
            zl)
          ) {
            zT[zj] = zl;
          }
        }
        return zo.result;
      }
    },
    simulate: function (zo, zm, zT) {
      zT = SR.extend(new SR.Event(), zT, {
        type: zo,
        isSimulated: true,
      });
      SR.event.trigger(zT, null, zm);
    },
  });
  SR.fn.extend({
    trigger: function (zo, zm) {
      return this.each(function () {
        SR.event.trigger(zo, zm, this);
      });
    },
    triggerHandler: function (zo, zm) {
      var zT = this[0];
      if (zT) {
        return SR.event.trigger(zo, zm, zT, true);
      }
    },
  });
  if (!SY.focusin) {
    SR.each(
      {
        focus: "focusin",
        blur: "focusout",
      },
      function (zo, zm) {
        function zT(zk) {
          SR.event.simulate(zm, zk.target, SR.event.fix(zk));
        }
        SR.event.special[zm] = {
          setup: function () {
            var zk = this.ownerDocument || this;
            var zF = Sb.access(zk, zm);
            if (!zF) {
              zk.addEventListener(zo, zT, true);
            }
            Sb.access(zk, zm, (zF || 0) + 1);
          },
          teardown: function () {
            var zk = this.ownerDocument || this;
            var zF = Sb.access(zk, zm) - 1;
            if (zF) {
              Sb.access(zk, zm, zF);
            } else {
              zk.removeEventListener(zo, zT, true);
              Sb.remove(zk, zm);
            }
          },
        };
      }
    );
  }
  var zz = S0.location;
  var zA = Date.now();
  var zx = /\?/;
  SR.parseXML = function (zo) {
    var zm;
    if (!zo || typeof zo != "string") {
      return null;
    }
    try {
      zm = new S0.DOMParser().parseFromString(zo, "text/xml");
    } catch (zT) {
      zm = undefined;
    }
    if (!zm || !!zm.getElementsByTagName("parsererror").length) {
      SR.error("Invalid XML: " + zo);
    }
    return zm;
  };
  var zO = /\[\]$/;
  var zY = /\r?\n/g;
  var zp = /^(?:submit|button|image|reset|file)$/i;
  var zE = /^(?:input|select|textarea|keygen)/i;
  SR.param = function (zo, zm) {
    function zT(zl, zw) {
      zw = S2(zw) ? zw() : zw;
      zF[zF.length] =
        encodeURIComponent(zl) + "=" + encodeURIComponent(zw == null ? "" : zw);
    }
    var zk;
    var zF = [];
    if (Array.isArray(zo) || (zo.jquery && !SR.isPlainObject(zo))) {
      SR.each(zo, function () {
        zT(this.name, this.value);
      });
    } else {
      for (zk in zo) {
        (function zl(zw, zj, zi, zZ) {
          if (Array.isArray(zj)) {
            SR.each(zj, function (zJ, zB) {
              if (zi || zO.test(zw)) {
                zZ(zw, zB);
              } else {
                zl(
                  zw +
                    "[" +
                    (typeof zB == "object" && zB != null ? zJ : "") +
                    "]",
                  zB,
                  zi,
                  zZ
                );
              }
            });
          } else if (zi || SG(zj) !== "object") {
            zZ(zw, zj);
          } else {
            for (var zb in zj) {
              zl(zw + "[" + zb + "]", zj[zb], zi, zZ);
            }
          }
        })(zk, zo[zk], zm, zT);
      }
    }
    return zF.join("&");
  };
  SR.fn.extend({
    serialize: function () {
      return SR.param(this.serializeArray());
    },
    serializeArray: function () {
      return this.map(function () {
        var zo = SR.prop(this, "elements");
        if (zo) {
          return SR.makeArray(zo);
        } else {
          return this;
        }
      })
        .filter(function () {
          var zo = this.type;
          return (
            this.name &&
            !SR(this).is(":disabled") &&
            zE.test(this.nodeName) &&
            !zp.test(zo) &&
            (this.checked || !X0.test(zo))
          );
        })
        .map(function (zo, zm) {
          var zT = SR(this).val();
          if (zT == null) {
            return null;
          } else if (Array.isArray(zT)) {
            return SR.map(zT, function (zk) {
              return {
                name: zm.name,
                value: zk.replace(zY, "\r\n"),
              };
            });
          } else {
            return {
              name: zm.name,
              value: zT.replace(zY, "\r\n"),
            };
          }
        })
        .get();
    },
  });
  var zG = /%20/g;
  var zR = /#.*$/;
  var za = /([?&])_=[^&]*/;
  var zV = /^(.*?):[ \t]*([^\r\n]*)$/gm;
  var zq = /^(?:GET|HEAD)$/;
  var zI = /^\/\//;
  var zH = {};
  var zU = {};
  var zd = `*/*`;
  var zW = S5.createElement("a");
  function zg(zo) {
    return function (zm, zT) {
      if (typeof zm != "string") {
        zT = zm;
        zm = "*";
      }
      var zk;
      var zF = 0;
      var zl = zm.toLowerCase().match(SM) || [];
      if (S2(zT)) {
        while ((zk = zl[zF++])) {
          if (zk[0] === "+") {
            zk = zk.slice(1) || "*";
            (zo[zk] = zo[zk] || []).unshift(zT);
          } else {
            (zo[zk] = zo[zk] || []).push(zT);
          }
        }
      }
    };
  }
  function zh(zo, zm, zT, zk) {
    var zF = {};
    var zl = zo === zU;
    function zw(zj) {
      var zi;
      zF[zj] = true;
      SR.each(zo[zj] || [], function (zZ, zb) {
        zb = zb(zm, zT, zk);
        if (typeof zb != "string" || zl || zF[zb]) {
          if (zl) {
            return !(zi = zb);
          } else {
            return undefined;
          }
        } else {
          zm.dataTypes.unshift(zb);
          zw(zb);
          return false;
        }
      });
      return zi;
    }
    return zw(zm.dataTypes[0]) || (!zF["*"] && zw("*"));
  }
  function zD(zo, zm) {
    var zT;
    var zk;
    var zF = SR.ajaxSettings.flatOptions || {};
    for (zT in zm) {
      if (zm[zT] !== undefined) {
        (zF[zT] ? zo : (zk = zk || {}))[zT] = zm[zT];
      }
    }
    if (zk) {
      SR.extend(true, zo, zk);
    }
    return zo;
  }
  zW.href = zz.href;
  SR.extend({
    active: 0,
    lastModified: {},
    etag: {},
    ajaxSettings: {
      url: zz.href,
      type: "GET",
      isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(
        zz.protocol
      ),
      global: true,
      processData: true,
      async: true,
      contentType: "application/x-www-form-urlencoded; charset=UTF-8",
      accepts: {
        "*": zd,
        text: "text/plain",
        html: "text/html",
        xml: "application/xml, text/xml",
        json: "application/json, text/javascript",
      },
      contents: {
        xml: /\bxml\b/,
        html: /\bhtml/,
        json: /\bjson\b/,
      },
      responseFields: {
        xml: "responseXML",
        text: "responseText",
        json: "responseJSON",
      },
      converters: {
        "* text": String,
        "text html": true,
        "text json": JSON.parse,
        "text xml": SR.parseXML,
      },
      flatOptions: {
        url: true,
        context: true,
      },
    },
    ajaxSetup: function (zo, zm) {
      if (zm) {
        return zD(zD(zo, SR.ajaxSettings), zm);
      } else {
        return zD(SR.ajaxSettings, zo);
      }
    },
    ajaxPrefilter: zg(zH),
    ajaxTransport: zg(zU),
    ajax: function (zo, zm) {
      if (typeof zo == "object") {
        zm = zo;
        zo = undefined;
      }
      var zT;
      var zk;
      var zF;
      var zl;
      var zw;
      var zj;
      var zi;
      var zZ;
      var zb = SR.ajaxSetup({}, (zm = zm || {}));
      var zJ = zb.context || zb;
      var zB = zb.context && (zJ.nodeType || zJ.jquery) ? SR(zJ) : SR.event;
      var zv = SR.Deferred();
      var zC = SR.Callbacks("once memory");
      var zf = zb.statusCode || {};
      var zc = {};
      var zK = {};
      var zP = "canceled";
      var zN = {
        readyState: 0,
        getResponseHeader: function (zy) {
          var A0;
          if (zj) {
            if (!zl) {
              for (zl = {}; (A0 = zV.exec(zF)); ) {
                zl[A0[1].toLowerCase()] = A0[2];
              }
            }
            A0 = zl[zy.toLowerCase()];
          }
          if (A0 == null) {
            return null;
          } else {
            return A0;
          }
        },
        getAllResponseHeaders: function () {
          if (zj) {
            return zF;
          } else {
            return null;
          }
        },
        setRequestHeader: function (zy, A0) {
          if (zj == null) {
            zy = zK[zy.toLowerCase()] = zK[zy.toLowerCase()] || zy;
            zc[zy] = A0;
          }
          return this;
        },
        overrideMimeType: function (zy) {
          if (zj == null) {
            zb.mimeType = zy;
          }
          return this;
        },
        statusCode: function (zy) {
          if (zy) {
            if (zj) {
              zN.always(zy[zN.status]);
            } else {
              for (var A0 in zy) {
                zf[A0] = [zf[A0], zy[A0]];
              }
            }
          }
          return this;
        },
        abort: function (zy) {
          zy = zy || zP;
          if (zT) {
            zT.abort(zy);
          }
          zn(0, zy);
          return this;
        },
      };
      zv.promise(zN);
      zb.url = ((zo || zb.url || zz.href) + "").replace(zI, zz.protocol + "//");
      zb.type = zm.method || zm.type || zb.method || zb.type;
      zb.dataTypes = (zb.dataType || "*").toLowerCase().match(SM) || [""];
      if (zb.crossDomain == null) {
        zo = S5.createElement("a");
        try {
          zo.href = zb.url;
          zo.href = zo.href;
          zb.crossDomain =
            zW.protocol + "//" + zW.host != zo.protocol + "//" + zo.host;
        } catch (zy) {
          zb.crossDomain = true;
        }
      }
      if (zb.data && zb.processData && typeof zb.data != "string") {
        zb.data = SR.param(zb.data, zb.traditional);
      }
      zh(zH, zb, zm, zN);
      if (!zj) {
        if ((zi = SR.event && zb.global) && SR.active++ == 0) {
          SR.event.trigger("ajaxStart");
        }
        zb.type = zb.type.toUpperCase();
        zb.hasContent = !zq.test(zb.type);
        zk = zb.url.replace(zR, "");
        if (zb.hasContent) {
          if (
            zb.data &&
            zb.processData &&
            (zb.contentType || "").indexOf(
              "application/x-www-form-urlencoded"
            ) === 0
          ) {
            zb.data = zb.data.replace(zG, "+");
          }
        } else {
          zo = zb.url.slice(zk.length);
          if (zb.data && (zb.processData || typeof zb.data == "string")) {
            zk += (zx.test(zk) ? "&" : "?") + zb.data;
            delete zb.data;
          }
          if (zb.cache === false) {
            zk = zk.replace(za, "$1");
            zo = (zx.test(zk) ? "&" : "?") + "_=" + zA++ + zo;
          }
          zb.url = zk + zo;
        }
        if (
          zb.ifModified &&
          (SR.lastModified[zk] &&
            zN.setRequestHeader("If-Modified-Since", SR.lastModified[zk]),
          SR.etag[zk])
        ) {
          zN.setRequestHeader("If-None-Match", SR.etag[zk]);
        }
        if (
          (zb.data && zb.hasContent && zb.contentType !== false) ||
          zm.contentType
        ) {
          zN.setRequestHeader("Content-Type", zb.contentType);
        }
        zN.setRequestHeader(
          "Accept",
          zb.dataTypes[0] && zb.accepts[zb.dataTypes[0]]
            ? zb.accepts[zb.dataTypes[0]] +
                (zb.dataTypes[0] !== "*" ? ", " + zd + "; q=0.01" : "")
            : zb.accepts["*"]
        );
        for (zZ in zb.headers) {
          zN.setRequestHeader(zZ, zb.headers[zZ]);
        }
        if (zb.beforeSend && (zb.beforeSend.call(zJ, zN, zb) === false || zj)) {
          return zN.abort();
        }
        zP = "abort";
        zC.add(zb.complete);
        zN.done(zb.success);
        zN.fail(zb.error);
        if ((zT = zh(zU, zb, zm, zN))) {
          zN.readyState = 1;
          if (zi) {
            zB.trigger("ajaxSend", [zN, zb]);
          }
          if (zj) {
            return zN;
          }
          if (zb.async && zb.timeout > 0) {
            zw = S0.setTimeout(function () {
              zN.abort("timeout");
            }, zb.timeout);
          }
          try {
            zj = false;
            zT.send(zc, zn);
          } catch (A0) {
            if (zj) {
              throw A0;
            }
            zn(-1, A0);
          }
        } else {
          zn(-1, "No Transport");
        }
      }
      return zN;
      function zn(A1, A2, A3, A4) {
        var A5;
        var A6;
        var A7;
        var A8 = A2;
        if (!zj) {
          zj = true;
          if (zw) {
            S0.clearTimeout(zw);
          }
          zT = undefined;
          zF = A4 || "";
          zN.readyState = A1 > 0 ? 4 : 0;
          A4 = (A1 >= 200 && A1 < 300) || A1 === 304;
          if (A3) {
            A7 = (function (A9, AS, AX) {
              var Az;
              var AA;
              var Ax;
              var AO;
              var AY = A9.contents;
              for (var Ap = A9.dataTypes; Ap[0] === "*"; ) {
                Ap.shift();
                if (Az === undefined) {
                  Az = A9.mimeType || AS.getResponseHeader("Content-Type");
                }
              }
              if (Az) {
                for (AA in AY) {
                  if (AY[AA] && AY[AA].test(Az)) {
                    Ap.unshift(AA);
                    break;
                  }
                }
              }
              if (Ap[0] in AX) {
                Ax = Ap[0];
              } else {
                for (AA in AX) {
                  if (!Ap[0] || A9.converters[AA + " " + Ap[0]]) {
                    Ax = AA;
                    break;
                  }
                  AO = AO || AA;
                }
                Ax = Ax || AO;
              }
              if (Ax) {
                if (Ax !== Ap[0]) {
                  Ap.unshift(Ax);
                }
                return AX[Ax];
              }
            })(zb, zN, A3);
          }
          A7 = (function (A9, AS, AX, Az) {
            var AA;
            var Ax;
            var AO;
            var AY;
            var Ap;
            var AE = {};
            var AG = A9.dataTypes.slice();
            if (AG[1]) {
              for (AO in A9.converters) {
                AE[AO.toLowerCase()] = A9.converters[AO];
              }
            }
            for (Ax = AG.shift(); Ax; ) {
              if (A9.responseFields[Ax]) {
                AX[A9.responseFields[Ax]] = AS;
              }
              if (!Ap && Az && A9.dataFilter) {
                AS = A9.dataFilter(AS, A9.dataType);
              }
              Ap = Ax;
              if ((Ax = AG.shift())) {
                if (Ax === "*") {
                  Ax = Ap;
                } else if (Ap !== "*" && Ap !== Ax) {
                  if (!(AO = AE[Ap + " " + Ax] || AE["* " + Ax])) {
                    for (AA in AE) {
                      if (
                        (AY = AA.split(" "))[1] === Ax &&
                        (AO = AE[Ap + " " + AY[0]] || AE["* " + AY[0]])
                      ) {
                        if (AO === true) {
                          AO = AE[AA];
                        } else if (AE[AA] !== true) {
                          Ax = AY[0];
                          AG.unshift(AY[1]);
                        }
                        break;
                      }
                    }
                  }
                  if (AO !== true) {
                    if (AO && A9.throws) {
                      AS = AO(AS);
                    } else {
                      try {
                        AS = AO(AS);
                      } catch (AR) {
                        return {
                          state: "parsererror",
                          error: AO
                            ? AR
                            : "No conversion from " + Ap + " to " + Ax,
                        };
                      }
                    }
                  }
                }
              }
            }
            return {
              state: "success",
              data: AS,
            };
          })(zb, A7, zN, A4);
          if (A4) {
            if (
              zb.ifModified &&
              ((A3 = zN.getResponseHeader("Last-Modified")) &&
                (SR.lastModified[zk] = A3),
              (A3 = zN.getResponseHeader("etag")))
            ) {
              SR.etag[zk] = A3;
            }
            if (A1 === 204 || zb.type === "HEAD") {
              A8 = "nocontent";
            } else if (A1 === 304) {
              A8 = "notmodified";
            } else {
              A8 = A7.state;
              A5 = A7.data;
              A4 = !(A6 = A7.error);
            }
          } else {
            A6 = A8;
            if (!!A1 || !A8) {
              A8 = "error";
              if (A1 < 0) {
                A1 = 0;
              }
            }
          }
          zN.status = A1;
          zN.statusText = (A2 || A8) + "";
          if (A4) {
            zv.resolveWith(zJ, [A5, A8, zN]);
          } else {
            zv.rejectWith(zJ, [zN, A8, A6]);
          }
          zN.statusCode(zf);
          zf = undefined;
          if (zi) {
            zB.trigger(A4 ? "ajaxSuccess" : "ajaxError", [
              zN,
              zb,
              A4 ? A5 : A6,
            ]);
          }
          zC.fireWith(zJ, [zN, A8]);
          if (zi) {
            zB.trigger("ajaxComplete", [zN, zb]);
            if (!--SR.active) {
              SR.event.trigger("ajaxStop");
            }
          }
        }
      }
    },
    getJSON: function (zo, zm, zT) {
      return SR.get(zo, zm, zT, "json");
    },
    getScript: function (zo, zm) {
      return SR.get(zo, undefined, zm, "script");
    },
  });
  SR.each(["get", "post"], function (zo, zm) {
    SR[zm] = function (zT, zk, zF, zl) {
      if (S2(zk)) {
        zl = zl || zF;
        zF = zk;
        zk = undefined;
      }
      return SR.ajax(
        SR.extend(
          {
            url: zT,
            type: zm,
            dataType: zl,
            data: zk,
            success: zF,
          },
          SR.isPlainObject(zT) && zT
        )
      );
    };
  });
  SR._evalUrl = function (zo) {
    return SR.ajax({
      url: zo,
      type: "GET",
      dataType: "script",
      cache: true,
      async: false,
      global: false,
      throws: true,
    });
  };
  SR.fn.extend({
    wrapAll: function (zo) {
      if (this[0]) {
        if (S2(zo)) {
          zo = zo.call(this[0]);
        }
        zo = SR(zo, this[0].ownerDocument).eq(0).clone(true);
        if (this[0].parentNode) {
          zo.insertBefore(this[0]);
        }
        zo.map(function () {
          for (var zm = this; zm.firstElementChild; ) {
            zm = zm.firstElementChild;
          }
          return zm;
        }).append(this);
      }
      return this;
    },
    wrapInner: function (zo) {
      if (S2(zo)) {
        return this.each(function (zm) {
          SR(this).wrapInner(zo.call(this, zm));
        });
      } else {
        return this.each(function () {
          var zm = SR(this);
          var zT = zm.contents();
          if (zT.length) {
            zT.wrapAll(zo);
          } else {
            zm.append(zo);
          }
        });
      }
    },
    wrap: function (zo) {
      var zm = S2(zo);
      return this.each(function (zT) {
        SR(this).wrapAll(zm ? zo.call(this, zT) : zo);
      });
    },
    unwrap: function (zo) {
      this.parent(zo)
        .not("body")
        .each(function () {
          SR(this).replaceWith(this.childNodes);
        });
      return this;
    },
  });
  SR.expr.pseudos.hidden = function (zo) {
    return !SR.expr.pseudos.visible(zo);
  };
  SR.expr.pseudos.visible = function (zo) {
    return (
      !!zo.offsetWidth || !!zo.offsetHeight || !!zo.getClientRects().length
    );
  };
  SR.ajaxSettings.xhr = function () {
    try {
      return new S0.XMLHttpRequest();
    } catch (zo) {}
  };
  var zu = {
    0: 200,
    1223: 204,
  };
  var zr = SR.ajaxSettings.xhr();
  SY.cors = !!zr && "withCredentials" in zr;
  SY.ajax = zr = !!zr;
  SR.ajaxTransport(function (zo) {
    var zm;
    var zT;
    if (SY.cors || (zr && !zo.crossDomain)) {
      return {
        send: function (zk, zF) {
          var zl;
          var zw = zo.xhr();
          zw.open(zo.type, zo.url, zo.async, zo.username, zo.password);
          if (zo.xhrFields) {
            for (zl in zo.xhrFields) {
              zw[zl] = zo.xhrFields[zl];
            }
          }
          if (zo.mimeType && zw.overrideMimeType) {
            zw.overrideMimeType(zo.mimeType);
          }
          if (!zo.crossDomain && !zk["X-Requested-With"]) {
            zk["X-Requested-With"] = "XMLHttpRequest";
          }
          for (zl in zk) {
            zw.setRequestHeader(zl, zk[zl]);
          }
          zm = function (zj) {
            return function () {
              if (zm) {
                zm =
                  zT =
                  zw.onload =
                  zw.onerror =
                  zw.onabort =
                  zw.ontimeout =
                  zw.onreadystatechange =
                    null;
                if (zj === "abort") {
                  zw.abort();
                } else if (zj === "error") {
                  if (typeof zw.status != "number") {
                    zF(0, "error");
                  } else {
                    zF(zw.status, zw.statusText);
                  }
                } else {
                  zF(
                    zu[zw.status] || zw.status,
                    zw.statusText,
                    (zw.responseType || "text") !== "text" ||
                      typeof zw.responseText != "string"
                      ? {
                          binary: zw.response,
                        }
                      : {
                          text: zw.responseText,
                        },
                    zw.getAllResponseHeaders()
                  );
                }
              }
            };
          };
          zw.onload = zm();
          zT = zw.onerror = zw.ontimeout = zm("error");
          if (zw.onabort !== undefined) {
            zw.onabort = zT;
          } else {
            zw.onreadystatechange = function () {
              if (zw.readyState === 4) {
                S0.setTimeout(function () {
                  if (zm) {
                    zT();
                  }
                });
              }
            };
          }
          zm = zm("abort");
          try {
            zw.send((zo.hasContent && zo.data) || null);
          } catch (zj) {
            if (zm) {
              throw zj;
            }
          }
        },
        abort: function () {
          if (zm) {
            zm();
          }
        },
      };
    }
  });
  SR.ajaxPrefilter(function (zo) {
    if (zo.crossDomain) {
      zo.contents.script = false;
    }
  });
  SR.ajaxSetup({
    accepts: {
      script:
        "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript",
    },
    contents: {
      script: /\b(?:java|ecma)script\b/,
    },
    converters: {
      "text script": function (zo) {
        SR.globalEval(zo);
        return zo;
      },
    },
  });
  SR.ajaxPrefilter("script", function (zo) {
    if (zo.cache === undefined) {
      zo.cache = false;
    }
    if (zo.crossDomain) {
      zo.type = "GET";
    }
  });
  SR.ajaxTransport("script", function (zo) {
    var zm;
    var zT;
    if (zo.crossDomain) {
      return {
        send: function (zk, zF) {
          zm = SR("<script>")
            .prop({
              charset: zo.scriptCharset,
              src: zo.url,
            })
            .on(
              "load error",
              (zT = function (zl) {
                zm.remove();
                zT = null;
                if (zl) {
                  zF(zl.type === "error" ? 404 : 200, zl.type);
                }
              })
            );
          S5.head.appendChild(zm[0]);
        },
        abort: function () {
          if (zT) {
            zT();
          }
        },
      };
    }
  });
  var zM = [];
  var zQ = /(=)\?(?=&|$)|\?\?/;
  SR.ajaxSetup({
    jsonp: "callback",
    jsonpCallback: function () {
      var zo = zM.pop() || SR.expando + "_" + zA++;
      this[zo] = true;
      return zo;
    },
  });
  SR.ajaxPrefilter("json jsonp", function (zo, zm, zT) {
    var zk;
    var zF;
    var zl;
    var zw =
      zo.jsonp !== false &&
      (zQ.test(zo.url)
        ? "url"
        : typeof zo.data == "string" &&
          (zo.contentType || "").indexOf(
            "application/x-www-form-urlencoded"
          ) === 0 &&
          zQ.test(zo.data) &&
          "data");
    if (zw || zo.dataTypes[0] === "jsonp") {
      zk = zo.jsonpCallback = S2(zo.jsonpCallback)
        ? zo.jsonpCallback()
        : zo.jsonpCallback;
      if (zw) {
        zo[zw] = zo[zw].replace(zQ, "$1" + zk);
      } else if (zo.jsonp !== false) {
        zo.url += (zx.test(zo.url) ? "&" : "?") + zo.jsonp + "=" + zk;
      }
      zo.converters["script json"] = function () {
        if (!zl) {
          SR.error(zk + " was not called");
        }
        return zl[0];
      };
      zo.dataTypes[0] = "json";
      zF = S0[zk];
      S0[zk] = function () {
        zl = arguments;
      };
      zT.always(function () {
        if (zF === undefined) {
          SR(S0).removeProp(zk);
        } else {
          S0[zk] = zF;
        }
        if (zo[zk]) {
          zo.jsonpCallback = zm.jsonpCallback;
          zM.push(zk);
        }
        if (zl && S2(zF)) {
          zF(zl[0]);
        }
        zl = zF = undefined;
      });
      return "script";
    }
  });
  (S4 = S5.implementation.createHTMLDocument("").body).innerHTML =
    "<form></form><form></form>";
  SY.createHTMLDocument = S4.childNodes.length === 2;
  SR.parseHTML = function (zo, zm, zT) {
    var zk;
    if (typeof zo != "string") {
      return [];
    } else {
      if (typeof zm == "boolean") {
        zT = zm;
        zm = false;
      }
      if (!zm) {
        if (SY.createHTMLDocument) {
          (zk = (zm = S5.implementation.createHTMLDocument("")).createElement(
            "base"
          )).href = S5.location.href;
          zm.head.appendChild(zk);
        } else {
          zm = S5;
        }
      }
      zk = !zT && [];
      if ((zT = Sd.exec(zo))) {
        return [zm.createElement(zT[1])];
      } else {
        zT = X7([zo], zm, zk);
        if (zk && zk.length) {
          SR(zk).remove();
        }
        return SR.merge([], zT.childNodes);
      }
    }
  };
  SR.fn.load = function (zo, zm, zT) {
    var zk;
    var zF;
    var zl;
    var zw = this;
    var zj = zo.indexOf(" ");
    if (zj > -1) {
      zk = z6(zo.slice(zj));
      zo = zo.slice(0, zj);
    }
    if (S2(zm)) {
      zT = zm;
      zm = undefined;
    } else if (zm && typeof zm == "object") {
      zF = "POST";
    }
    if (zw.length > 0) {
      SR.ajax({
        url: zo,
        type: zF || "GET",
        dataType: "html",
        data: zm,
      })
        .done(function (zi) {
          zl = arguments;
          zw.html(zk ? SR("<div>").append(SR.parseHTML(zi)).find(zk) : zi);
        })
        .always(
          zT &&
            function (zi, zZ) {
              zw.each(function () {
                zT.apply(this, zl || [zi.responseText, zZ, zi]);
              });
            }
        );
    }
    return this;
  };
  SR.each(
    [
      "ajaxStart",
      "ajaxStop",
      "ajaxComplete",
      "ajaxError",
      "ajaxSuccess",
      "ajaxSend",
    ],
    function (zo, zm) {
      SR.fn[zm] = function (zT) {
        return this.on(zm, zT);
      };
    }
  );
  SR.expr.pseudos.animated = function (zo) {
    return SR.grep(SR.timers, function (zm) {
      return zo === zm.elem;
    }).length;
  };
  SR.offset = {
    setOffset: function (zo, zm, zT) {
      var zk;
      var zF;
      var zl;
      var zw;
      var zj = SR.css(zo, "position");
      var zi = SR(zo);
      var zZ = {};
      if (zj === "static") {
        zo.style.position = "relative";
      }
      zl = zi.offset();
      zk = SR.css(zo, "top");
      zw = SR.css(zo, "left");
      zj =
        (zj === "absolute" || zj === "fixed") && (zk + zw).indexOf("auto") > -1
          ? ((zF = (zj = zi.position()).top), zj.left)
          : ((zF = parseFloat(zk) || 0), parseFloat(zw) || 0);
      if ((zm = S2(zm) ? zm.call(zo, zT, SR.extend({}, zl)) : zm).top != null) {
        zZ.top = zm.top - zl.top + zF;
      }
      if (zm.left != null) {
        zZ.left = zm.left - zl.left + zj;
      }
      if ("using" in zm) {
        zm.using.call(zo, zZ);
      } else {
        zi.css(zZ);
      }
    },
  };
  SR.fn.extend({
    offset: function (zo) {
      var zm;
      var zT;
      if (arguments.length) {
        if (zo === undefined) {
          return this;
        } else {
          return this.each(function (zk) {
            SR.offset.setOffset(this, zo, zk);
          });
        }
      } else if ((zT = this[0])) {
        if (zT.getClientRects().length) {
          zm = zT.getBoundingClientRect();
          zT = zT.ownerDocument.defaultView;
          return {
            top: zm.top + zT.pageYOffset,
            left: zm.left + zT.pageXOffset,
          };
        } else {
          return {
            top: 0,
            left: 0,
          };
        }
      } else {
        return undefined;
      }
    },
    position: function () {
      if (this[0]) {
        var zo;
        var zm;
        var zT;
        var zk = this[0];
        var zF = {
          top: 0,
          left: 0,
        };
        if (SR.css(zk, "position") === "fixed") {
          zm = zk.getBoundingClientRect();
        } else {
          zm = this.offset();
          zT = zk.ownerDocument;
          zo = zk.offsetParent || zT.documentElement;
          while (
            zo &&
            (zo === zT.body || zo === zT.documentElement) &&
            SR.css(zo, "position") === "static"
          ) {
            zo = zo.parentNode;
          }
          if (zo && zo !== zk && zo.nodeType === 1) {
            (zF = SR(zo).offset()).top += SR.css(zo, "borderTopWidth", true);
            zF.left += SR.css(zo, "borderLeftWidth", true);
          }
        }
        return {
          top: zm.top - zF.top - SR.css(zk, "marginTop", true),
          left: zm.left - zF.left - SR.css(zk, "marginLeft", true),
        };
      }
    },
    offsetParent: function () {
      return this.map(function () {
        for (
          var zo = this.offsetParent;
          zo && SR.css(zo, "position") === "static";

        ) {
          zo = zo.offsetParent;
        }
        return zo || X8;
      });
    },
  });
  SR.each(
    {
      scrollLeft: "pageXOffset",
      scrollTop: "pageYOffset",
    },
    function (zo, zm) {
      var zT = zm === "pageYOffset";
      SR.fn[zo] = function (zk) {
        return Sk(
          this,
          function (zF, zl, zw) {
            var zj;
            if (S3(zF)) {
              zj = zF;
            } else if (zF.nodeType === 9) {
              zj = zF.defaultView;
            }
            if (zw === undefined) {
              if (zj) {
                return zj[zm];
              } else {
                return zF[zl];
              }
            }
            if (zj) {
              zj.scrollTo(zT ? zj.pageXOffset : zw, zT ? zw : zj.pageYOffset);
            } else {
              zF[zl] = zw;
            }
          },
          zo,
          zk,
          arguments.length
        );
      };
    }
  );
  SR.each(["top", "left"], function (zo, zm) {
    SR.cssHooks[zm] = Xm(SY.pixelPosition, function (zT, zk) {
      if (zk) {
        zk = Xo(zT, zm);
        if (XM.test(zk)) {
          return SR(zT).position()[zm] + "px";
        } else {
          return zk;
        }
      }
    });
  });
  SR.each(
    {
      Height: "height",
      Width: "width",
    },
    function (zo, zm) {
      SR.each(
        {
          padding: "inner" + zo,
          content: zm,
          "": "outer" + zo,
        },
        function (zT, zk) {
          SR.fn[zk] = function (zF, zl) {
            var zw = arguments.length && (zT || typeof zF != "boolean");
            var zj = zT || (zF === true || zl === true ? "margin" : "border");
            return Sk(
              this,
              function (zi, zZ, zb) {
                var zJ;
                if (S3(zi)) {
                  if (zk.indexOf("outer") === 0) {
                    return zi["inner" + zo];
                  } else {
                    return zi.document.documentElement["client" + zo];
                  }
                } else if (zi.nodeType === 9) {
                  zJ = zi.documentElement;
                  return Math.max(
                    zi.body["scroll" + zo],
                    zJ["scroll" + zo],
                    zi.body["offset" + zo],
                    zJ["offset" + zo],
                    zJ["client" + zo]
                  );
                } else if (zb === undefined) {
                  return SR.css(zi, zZ, zj);
                } else {
                  return SR.style(zi, zZ, zb, zj);
                }
              },
              zm,
              zw ? zF : undefined,
              zw
            );
          };
        }
      );
    }
  );
  SR.each(
    "blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(
      " "
    ),
    function (zo, zm) {
      SR.fn[zm] = function (zT, zk) {
        if (arguments.length > 0) {
          return this.on(zm, null, zT, zk);
        } else {
          return this.trigger(zm);
        }
      };
    }
  );
  SR.fn.extend({
    hover: function (zo, zm) {
      return this.mouseenter(zo).mouseleave(zm || zo);
    },
  });
  SR.fn.extend({
    bind: function (zo, zm, zT) {
      return this.on(zo, null, zm, zT);
    },
    unbind: function (zo, zm) {
      return this.off(zo, null, zm);
    },
    delegate: function (zo, zm, zT, zk) {
      return this.on(zm, zo, zT, zk);
    },
    undelegate: function (zo, zm, zT) {
      if (arguments.length === 1) {
        return this.off(zo, "**");
      } else {
        return this.off(zm, zo || "**", zT);
      }
    },
  });
  SR.proxy = function (zo, zm) {
    var zT;
    var zk;
    if (typeof zm == "string") {
      zk = zo[zm];
      zm = zo;
      zo = zk;
    }
    if (S2(zo)) {
      zT = S7.call(arguments, 2);
      (zk = function () {
        return zo.apply(zm || this, zT.concat(S7.call(arguments)));
      }).guid = zo.guid = zo.guid || SR.guid++;
      return zk;
    }
  };
  SR.holdReady = function (zo) {
    if (zo) {
      SR.readyWait++;
    } else {
      SR.ready(true);
    }
  };
  SR.isArray = Array.isArray;
  SR.parseJSON = JSON.parse;
  SR.nodeName = SU;
  SR.isFunction = S2;
  SR.isWindow = S3;
  SR.camelCase = Sj;
  SR.type = SG;
  SR.now = Date.now;
  SR.isNumeric = function (zo) {
    var zm = SR.type(zo);
    return (zm === "number" || zm === "string") && !isNaN(zo - parseFloat(zo));
  };
  if (typeof define == "function" && define.amd) {
    define("jquery", [], function () {
      return SR;
    });
  }
  var zs = S0.jQuery;
  var zL = S0.$;
  SR.noConflict = function (zo) {
    if (S0.$ === SR) {
      S0.$ = zL;
    }
    if (zo && S0.jQuery === SR) {
      S0.jQuery = zs;
    }
    return SR;
  };
  if (!S1) {
    S0.jQuery = S0.$ = SR;
  }
  return SR;
});
(() => {
  var N;
  var y;
  var S0;
  var S1;
  var S2 = {
    696: (S6, S7, S8) => {
      "use strict";

      S8.d(S7, {
        Z: () => S9,
      });
      const S9 = {
        advertising: {
          admessage: "This ad will end in xx",
          cuetext: "Advertisement",
          displayHeading: "Advertisement",
          loadingAd: "Loading ad",
          podmessage: "Ad __AD_POD_CURRENT__ of __AD_POD_LENGTH__.",
          skipmessage: "Skip ad in xx",
          skiptext: "Skip",
        },
        airplay: "AirPlay",
        audioTracks: "Audio Tracks",
        auto: "Auto",
        buffer: "Loading",
        cast: "Chromecast",
        cc: "Closed Captions",
        close: "Close",
        errors: {
          badConnection:
            "This video cannot be played because of a problem with your internet connection.",
          cantLoadPlayer: "Sorry, the video player failed to load.",
          cantPlayInBrowser: "The video cannot be played in this browser.",
          cantPlayVideo: "This video file cannot be played.",
          errorCode: "Error Code",
          liveStreamDown: "The live stream is either down or has ended.",
          protectedContent:
            "There was a problem providing access to protected content.",
          technicalError:
            "This video cannot be played because of a technical error.",
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
          heading: "More Videos",
        },
        replay: "Replay",
        rewind: "Rewind 10 Seconds",
        settings: "Settings",
        sharing: {
          copied: "Copied",
          email: "Email",
          embed: "Embed",
          heading: "Share",
          link: "Link",
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
          shortcutsToggle: "Shortcuts Open/Close",
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
          dropShadow: "Drop Shadow",
        },
        disabled: "Disabled",
        enabled: "Enabled",
        reset: "Reset",
      };
    },
    9128: (S6, S7, S8) => {
      "use strict";

      function S9(SS, SX, Sz) {
        function SA() {
          while (Sx.length > 0) {
            var { command: SY, args: Sp } = Sx.shift();
            (SO[SY] || SS[SY]).apply(SS, Sp);
          }
        }
        const Sx = [];
        const SO = {};
        SX.forEach((SY) => {
          const Sp = SS[SY];
          SO[SY] = Sp;
          SS[SY] = function (...SE) {
            if (Sz()) {
              Sx.push({
                command: SY,
                args: SE,
              });
            } else {
              SA();
              if (Sp) {
                Sp.apply(this, SE);
              }
            }
          };
        });
        Object.defineProperty(this, "queue", {
          enumerable: true,
          get: () => Sx,
        });
        this.flush = SA;
        this.empty = function () {
          Sx.length = 0;
        };
        this.off = function () {
          SX.forEach((SY) => {
            var Sp = SO[SY];
            if (Sp) {
              SS[SY] = Sp;
              delete SO[SY];
            }
          });
        };
        this.destroy = function () {
          this.off();
          this.empty();
        };
      }
      S8.d(S7, {
        Z: () => S9,
      });
    },
    4742: (S6, S7, S8) => {
      "use strict";

      S8.d(S7, {
        Z: () => S9,
      });
      const S9 = {
        debug: false,
      };
    },
    5191: (S6, S7, S8) => {
      "use strict";

      S8.d(S7, {
        R: () => SS,
        a: () => S9,
      });
      const S9 = function (SX) {
        return (SX = SX.slice && SX.slice(-2) === "px" ? SX.slice(0, -2) : SX);
      };
      const SS = function (SX, Sz) {
        var SA;
        if (Sz.toString().indexOf("%") !== -1 && typeof SX == "string" && SX) {
          if (/^\d*\.?\d+%$/.test(SX)) {
            return SX;
          } else if (
            (Sz = SX.indexOf(":")) === -1 ||
            ((SA = parseFloat(SX.substr(0, Sz))),
            (SX = parseFloat(SX.substr(Sz + 1))),
            SA <= 0) ||
            SX <= 0
          ) {
            return 0;
          } else {
            return (SX / SA) * 100 + "%";
          }
        } else {
          return 0;
        }
      };
    },
    5083: (S6, S7, S8) => {
      "use strict";

      S8.d(S7, {
        G0: () => Sp,
        ZP: () => SE,
        ke: () => SY,
      });
      var S9 = S8(5191);
      var SS = S8(1569);
      var SX = S8(9888);
      var Sz = S8(6042);
      var SA = S8(8348);
      var Sx = S8(696);
      var SO = S8(8518);
      const SY = {
        autoPause: {
          viewability: false,
          pauseAds: false,
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
        enableAdLoadingUI: true,
        enableShortcuts: true,
        floating: {
          mode: "never",
        },
        height: 360,
        intl: {},
        item: 0,
        language: "en",
        liveTimeout: null,
        localization: Sx.Z,
        mute: false,
        nextUpDisplay: true,
        playbackRateControls: false,
        playbackRates: [0.5, 1, 1.25, 1.5, 2],
        renderCaptionsNatively: false,
        repeat: false,
        showUIWhen: "onReady",
        stretching: "uniform",
        volume: 90,
        width: 640,
      };
      const Sp = function (SG) {
        if (SG < 5) {
          return 5;
        } else {
          return SG;
        }
      };
      const SE = function (SG, SR) {
        var Sa;
        var SV = {};
        if (
          SR &&
          (function (SH) {
            if (SH == null) {
              throw new TypeError("Cannot convert undefined or null to object");
            }
            return Object.prototype.hasOwnProperty.call(Object(SH), "mute");
          })(SR)
        ) {
          if (typeof SR.mute == "boolean") {
            SV.mute = SR.mute;
          }
          delete SR.mute;
        }
        var SV = Object.assign(
          {},
          SV,
          (SV = window) == null || (SV = SV.jwplayer) == null
            ? undefined
            : SV.defaults,
          SR,
          SG
        );
        Sa = SV;
        Object.keys(Sa).forEach((SH) => {
          if (SH !== "id") {
            Sa[SH] = (0, SX.serialize)(Sa[SH]);
          }
        });
        var SR = SV.forceLocalizationDefaults ? SY.language : (0, SO.G3)();
        var SG = (0, SO.tK)(SV.intl);
        SV.localization = (0, SO.Mh)(Sx.Z, (0, SO.Pm)(SV, SG, SR));
        var Sq = Object.assign({}, SY, SV);
        if (Sq.base === ".") {
          Sq.base = (0, SS.getScriptPath)("jwplayer.js");
        }
        Sq.base = (Sq.base || (0, SS.loadFrom)()).replace(/\/?$/, "/");
        S8.p = Sq.base;
        Sq.width = (0, S9.a)(Sq.width);
        Sq.height = (0, S9.a)(Sq.height);
        Sq.aspectratio = (0, S9.R)(Sq.aspectratio, Sq.width);
        if (typeof Sq.volume == "string") {
          Sq.volume = parseFloat(Sq.volume);
        }
        Sq.volume = (0, Sz.qh)(Sq.volume)
          ? Math.min(Math.max(0, Sq.volume), 100)
          : SY.volume;
        Sq.mute = Boolean(Sq.mute);
        Sq.language = SR;
        Sq.intl = SG;
        var SR = Sq.playlistIndex;
        if (SR) {
          Sq.item = SR;
        }
        if (!(0, Sz.hj)(Sq.item)) {
          Sq.item = 0;
        }
        var SG = SV.autoPause;
        if (SG) {
          Sq.autoPause.viewability =
            !("viewability" in SG) || Boolean(SG.viewability);
        }
        var SR = Sq.playbackRateControls;
        if (SR) {
          let SH = Sq.playbackRates;
          if (
            (SH = (SH = Array.isArray(SR) ? SR : SH)
              .filter((SU) => (0, Sz.hj)(SU) && SU >= 0.25 && SU <= 4)
              .map((SU) => Math.round(SU * 100) / 100)).indexOf(1) < 0
          ) {
            SH.push(1);
          }
          SH.sort();
          Sq.playbackRateControls = true;
          Sq.playbackRates = SH;
        }
        if (
          !Sq.playbackRateControls ||
          Sq.playbackRates.indexOf(Sq.defaultPlaybackRate) < 0
        ) {
          Sq.defaultPlaybackRate = 1;
        }
        Sq.playbackRate = Sq.defaultPlaybackRate;
        if (!Sq.aspectratio) {
          delete Sq.aspectratio;
        }
        SV = Sq.playlist;
        if (SV) {
          if (Array.isArray(SV.playlist)) {
            Sq.feedData = SV;
            Sq.playlist = SV.playlist;
          }
        } else {
          const SU = (0, Sz.ei)(Sq, [
            "title",
            "description",
            "type",
            "mediaid",
            "image",
            "images",
            "file",
            "sources",
            "tracks",
            "preload",
            "duration",
            "chapters",
          ]);
          Sq.playlist = [SU];
        }
        Sq.qualityLabels = Sq.qualityLabels || Sq.hlslabels;
        delete Sq.duration;
        let SI = Sq.liveTimeout;
        if (SI !== null) {
          if ((0, Sz.qh)(SI)) {
            if (SI !== 0) {
              SI = Math.max(30, SI);
            }
          } else {
            SI = null;
          }
          Sq.liveTimeout = SI;
        }
        SG = parseFloat(Sq.bandwidthEstimate);
        SR = parseFloat(Sq.bitrateSelection);
        Sq.bandwidthEstimate = (0, Sz.qh)(SG)
          ? SG
          : (function (Sd) {
              Sd = parseFloat(Sd);
              if ((0, Sz.qh)(Sd)) {
                return Math.max(Sd, 1);
              } else {
                return SY.bandwidthEstimate;
              }
            })(Sq.defaultBandwidthEstimate);
        Sq.bitrateSelection = (0, Sz.qh)(SR) ? SR : SY.bitrateSelection;
        Sq.liveSyncDuration = Sp(Sq.liveSyncDuration);
        Sq.backgroundLoading = (
          (0, Sz.jn)(Sq.backgroundLoading) ? Sq : SA.Features
        ).backgroundLoading;
        Sq.enableAdLoadingUI =
          !SA.Features.enableAdLoadingUI || Boolean(Sq.enableAdLoadingUI);
        return Sq;
      };
    },
    2894: (S6, S7, S8) => {
      "use strict";

      S8.d(S7, {
        Ep: () => SX,
        Jt: () => Sz,
        Tr: () => SS,
        Zq: () => SA,
      });
      var S9 = S8(4446);
      const SS = {};
      const SX = function (Sx, SO) {
        return () => {
          throw new S9.rG(S9.pJ, Sx, SO);
        };
      };
      const Sz = function (Sx, SO) {
        return () => {
          throw new S9.rG(null, Sx, SO);
        };
      };
      const SA = function () {
        return S8.e(681)
          .then(
            function (Sx) {
              return S8(7047).default;
            }.bind(null, S8)
          )
          .catch(SX(S9.fU + 101));
      };
    },
    623: (S6, S7, S8) => {
      "use strict";

      S8.d(S7, {
        ZP: () => SN,
        c2: () => SP,
      });
      var S9 = S8(9128);
      var SS = S8(2445);
      var SX = S8(2894);
      var Sz = S8(393);
      var SA = S8(8320);
      var Sx = S8(2963);
      var SO = S8(670);
      var SY = S8(4601);
      var Sp = S8(4446);
      var SE = S8(8348);
      let SG = null;
      function SR() {
        var Sn = window.IntersectionObserverEntry;
        return (
          !Sn ||
          !("IntersectionObserver" in window) ||
          !("intersectionRatio" in Sn.prototype)
        );
      }
      function Sa() {
        return (
          SR()
            ? S8.e(943)
                .then(
                  function (Sn) {
                    return S8(6337);
                  }.bind(null, S8)
                )
                .catch((0, SX.Ep)(Sp.fU + 120))
            : Promise.resolve()
        ).then(SX.Zq);
      }
      const SV = function (Sn) {
        var Sy;
        var X0 = Sn.get("controls");
        var X1 = SR();
        var Sn = (function (X2) {
          const X3 = X2.get("playlist");
          if (Array.isArray(X3) && X3.length) {
            var X4 = (0, SA.bx)(X2.get("item"), X3.length);
            var X5 = (0, SA.T5)((0, Sz.Z)(X3[X4]), X2);
            for (let X8 = 0; X8 < X5.length; X8++) {
              var X6 = X5[X8];
              var X7 = X2.getProviders();
              for (let X9 = 0; X9 < Sx.B.length; X9++) {
                const XS = Sx.B[X9];
                if (X7.providerSupports(XS, X6)) {
                  return XS.name === "html5";
                }
              }
            }
          }
          return false;
        })(Sn);
        if (SE.OS.tizen) {
          return Sa();
        } else if (X0 && X1 && Sn) {
          Sy = S8.e(605)
            .then(
              function (X2) {
                S8(6337);
                var X3 = S8(7047).default;
                SY.v.controls = S8(5827).default;
                (0, SO.Z)(S8(9181).default);
                return X3;
              }.bind(null, S8)
            )
            .catch((0, SX.Ep)(Sp.fU + 105));
          return (SX.Tr.html5 = Sy);
        } else if (X0 && Sn) {
          Sy = S8.e(207)
            .then(
              function (X2) {
                var X3 = S8(7047).default;
                SY.v.controls = S8(5827).default;
                (0, SO.Z)(S8(9181).default);
                return X3;
              }.bind(null, S8)
            )
            .catch((0, SX.Ep)(Sp.fU + 104));
          return (SX.Tr.html5 = Sy);
        } else if (X0 && X1) {
          return S8.e(493)
            .then(
              function (X2) {
                S8(6337);
                var X3 = S8(7047).default;
                SY.v.controls = S8(5827).default;
                return X3;
              }.bind(null, S8)
            )
            .catch((0, SX.Ep)(Sp.fU + 103));
        } else if (X0) {
          return S8.e(581)
            .then(
              function (X2) {
                var X3 = S8(7047).default;
                SY.v.controls = S8(5827).default;
                return X3;
              }.bind(null, S8)
            )
            .catch((0, SX.Ep)(Sp.fU + 102));
        } else {
          return Sa();
        }
      };
      var Sq = S8(1643);
      var SI = S8(7263);
      var SH = S8(676);
      var SU = S8(8518);
      var Sd = S8(8675);
      var SW = S8(8381);
      function Sg(Sn, Sy, X0) {
        (Sn = Sn.attributes).playlist = (0, SA.ZP)(Sy);
        Sn.feedData = X0;
      }
      function Sh(Sn) {
        const Sy = Sn.get("playlist");
        return new Promise((X0, X1) => {
          if (typeof Sy != "string") {
            const X3 = Sn.get("feedData") || {};
            Sg(Sn, Sy, X3);
            return X0();
          }
          var X2 = new SI.Z();
          X2.on(Sq.Ow, function (X4) {
            var X5 = X4.playlist;
            delete X4.playlist;
            Sg(Sn, X5, X4);
            X0();
          });
          X2.on(Sq.pn, (X4) => {
            Sg(Sn, [], {});
            X1((0, Sp.l9)(X4, Sp.xk));
          });
          X2.load(Sy);
        });
      }
      function SD(Sn) {
        return Sn.attributes._destroyed;
      }
      var Su = S8(1918);
      var Sr = S8(6599);
      var SM = S8(7010);
      function SQ(Sn) {
        let Sy;
        this.start = function (X0) {
          const X1 = Sm(Sn, X0);
          const X2 = Promise.all([
            ((X0 = Sn), (SG = SG || SV(X0))),
            Sk(Sn),
            X1,
            So(Sn),
            Se(Sn),
            Ss(Sn),
            ST(Sn),
          ]);
          X0 = new Promise((X3, X4) => {
            Sy = setTimeout(() => {
              X4(new Sp.rG(Sp.pJ, Sp.T6));
            }, 60000);
            var X5 = () => {
              clearTimeout(Sy);
              setTimeout(X3, 60000);
            };
            X2.then(X5).catch(X5);
          });
          return Promise.race([X2, X0])
            .catch((X3) => {
              var X4 = () => {
                throw X3;
              };
              return X1.then(X4).catch(X4);
            })
            .then((X3) => {
              if ((X3 = X3) && X3.length) {
                X4 = X3.reduce((X5, X6) => X5.concat(X6), []).filter((X5) =>
                  X5 == null ? undefined : X5.code
                );
                return {
                  core: X3[0],
                  warnings: X4,
                };
              } else {
                return {
                  core: null,
                  warnings: [],
                };
              }
              var X4;
            });
        };
        this.destroy = function () {
          clearTimeout(Sy);
          Sn.set("_destroyed", true);
          Sn = null;
        };
      }
      const Ss = function (Sn) {
        var Sy = Sn.get("skin") ? Sn.get("skin").url : undefined;
        if (
          typeof Sy != "string" ||
          (function (X0) {
            var X1 = document.styleSheets;
            for (let X2 = 0, X3 = X1.length; X2 < X3; X2++) {
              if (X1[X2].href === X0) {
                return 1;
              }
            }
          })(Sy)
        ) {
          return Promise.resolve();
        }
        {
          const X0 = true;
          return new SH.ZP(Sy, true).load().catch((X1) => X1);
        }
      };
      const SL = (Sn) => {
        Sn = Sn.get("advertising");
        return Boolean(Sn == null ? undefined : Sn.outstream);
      };
      const So = (Sn) =>
        SL(Sn)
          ? Promise.resolve()
          : Sh(Sn)
              .then(() => {
                if (Sn.get("drm") || (0, Su.w0)(Sn.get("playlist"))) {
                  return (0, Su.lD)(Sn.get("edition"));
                }
              })
              .then(() => {
                return Sh((Sy = Sn)).then(() => {
                  if (!SD(Sy)) {
                    var X0 = (0, SA.s7)(Sy.get("playlist"), Sy);
                    Sy.attributes.playlist = X0;
                    try {
                      (0, SA._)(X0);
                    } catch (X4) {
                      X4.code += Sp.xk;
                      throw X4;
                    }
                    var X1 = Sy.getProviders();
                    var X2 = (0, SA.bx)(Sy.get("item"), X0.length);
                    var { provider: X2, name: X3 } = X1.choose(
                      X0[X2].sources[0]
                    );
                    if (typeof X2 == "function") {
                      return X2;
                    } else if (SX.Tr.html5 && X3 === "html5") {
                      return SX.Tr.html5;
                    } else {
                      return X1.load(X3).catch((X5) => {
                        throw (0, Sp.l9)(X5, Sp.y4);
                      });
                    }
                  }
                });
                var Sy;
              });
      const Se = (Sn, Sy) => {
        var X0 = [
          ((X1) => {
            const X2 = X1.attributes;
            const X3 = X2.error;
            if (X3 && X3.code === Sr.u5) {
              const X4 = X2.pid;
              const X5 = X2.ph;
              const X6 = new Sr.ZP(X2.key);
              if (X5 > 0 && X5 < 4 && X4 && X6.duration() > -7776000000) {
                return new SH.ZP(
                  "//content.jwplatform.com/libraries/" + X4 + ".js"
                )
                  .load()
                  .then(() => {
                    var X7 = window.jwplayer.defaults.key;
                    var X8 = new Sr.ZP(X7);
                    if (!X8.error() && X8.token() === X6.token()) {
                      X2.key = X7;
                      X2.edition = X8.edition();
                      X2.error = X8.error();
                    }
                  })
                  .catch(() => {});
              }
            }
            return Promise.resolve();
          })(Sn),
        ];
        if (!SL(Sn)) {
          X0.push(Promise.resolve());
        }
        return Promise.all(X0);
      };
      const Sm = (Sn, Sy) => {
        var X0;
        var X1;
        var X2;
        var X3 = () => (0, Sd.ZP)(Sn, Sy);
        if ((0, SM.Z)()) {
          X1 = X0 = Sn;
          X2 = Sy;
          return S8.e(168)
            .then(((X4) => new (S8(5545).default)(X2).setup(X1)).bind(null, S8))
            .catch((0, SX.Ep)(Sp.fU + 130))
            .then(() => Ss(X0))
            .then(X3)
            .catch(X3);
        } else {
          return X3();
        }
      };
      const ST = function (Sn) {
        const Sy = Sn.attributes;
        const { language: X0, base: X1, setupConfig: X2, intl: X3 } = Sy;
        const X4 = (0, SU.Pm)(X2, X3, X0);
        if (!(0, SU.q2)(X0) || (0, SU.dl)(X4)) {
          return Promise.resolve();
        } else {
          return new Promise((X5) =>
            (0, SU.Dq)(X1, X0)
              .then(({ response: X6 }) => {
                if (!SD(Sn)) {
                  if (!X6) {
                    throw new Sp.rG(null, Sp.wH);
                  }
                  Sy.localization = (0, SU.Mh)(X6, X4);
                  X5();
                }
              })
              .catch((X6) => {
                X5(X6.code === Sp.wH ? X6 : (0, Sp.l9)(X6, Sp.A6));
              })
          );
        }
      };
      const Sk = (Sn) =>
        new Promise((Sy) => {
          var X0;
          if (Sn.attributes.liveSyncDuration > 45) {
            return Sy((0, Sp.l9)(new Error(), Sp.wM));
          } else if (
            (X0 =
              Array.isArray(Sn.attributes.playlist) &&
              Sn.attributes.playlist.map((X1) => X1.chapters)) != null &&
            X0.length
          ) {
            return (0, SW.T2)(X0, Sy);
          } else {
            return Sy();
          }
        });
      var SF = S8(2303);
      var Sl = S8(7411);
      var St = S8(9888);
      var Sw = S8(4742);
      let Sj = {
        removeItem(Sn) {},
      };
      try {
        Sj = window.localStorage || Sj;
      } catch (Sn) {}
      const Si = class {
        constructor(Sy, X0) {
          this.namespace = Sy;
          this.items = X0;
        }
        getAllItems() {
          return this.items.reduce((Sy, X0) => {
            var X1 = Sj[this.namespace + "." + X0];
            if (X1) {
              Sy[X0] =
                X0 !== "captions" ? (0, St.serialize)(X1) : JSON.parse(X1);
            }
            return Sy;
          }, {});
        }
        track(Sy) {
          this.items.forEach((X0) => {
            Sy.on("change:" + X0, (X1, X2) => {
              try {
                if (X0 === "captions") {
                  X2 = JSON.stringify(X2);
                }
                Sj[this.namespace + "." + X0] = X2;
              } catch (X3) {
                if (Sw.Z.debug) {
                  console.error(X3);
                }
              }
            });
          });
        }
        clear() {
          this.items.forEach((Sy) => {
            Sj.removeItem(this.namespace + "." + Sy);
          });
        }
      };
      var SZ = S8(7753);
      var Sb = S8(9918);
      var S7 = S8(328);
      var SJ = S8(4225);
      var SB = S8(7683);
      var Sv = S8(4609);
      var SC = S8(5882);
      S8(4671);
      S8(9926);
      function Sf(Sy, X0) {
        if (X0 && X0.code) {
          if (X0.sourceError) {
            console.error(X0.sourceError);
          }
          console.error(Sp.rG.logMessage(X0.code));
        }
      }
      function Sc(Sy) {
        if (Sy && Sy.code) {
          console.warn(Sp.rG.logMessage(Sy.code));
        }
      }
      function SK(Sy) {
        this._events = {};
        this.modelShim = new SZ.Z();
        this.modelShim._qoeItem = new Sl.Z();
        this.mediaShim = {};
        this.setup = new SQ(this.modelShim);
        this.currentContainer = this.originalContainer = Sy;
        this.apiQueue = new S9.Z(
          this,
          [
            "load",
            "play",
            "pause",
            "seek",
            "stop",
            "playlistItem",
            "playlistNext",
            "playlistPrev",
            "next",
            "preload",
            "setAllowFullscreen",
            "setConfig",
            "setCurrentAudioTrack",
            "setCurrentCaptions",
            "setCurrentQuality",
            "setFullscreen",
            "setPip",
            "requestPip",
            "addButton",
            "removeButton",
            "castToggle",
            "requestCast",
            "setMute",
            "setVolume",
            "setPlaybackRate",
            "addCues",
            "setCues",
            "getCues",
            "setPlaylistItem",
            "stopCasting",
            "getChapters",
            "getCurrentChapter",
            "setChapter",
            "resize",
            "setCaptions",
            "setControls",
          ],
          () => true
        );
      }
      const SP = function (Sy, X0) {
        if (!document.body.contains(Sy.currentContainer)) {
          const X1 = document.getElementById(Sy.get("id"));
          if (X1) {
            Sy.currentContainer = X1;
          }
        }
        if (Sy.currentContainer.parentElement) {
          Sy.currentContainer.parentElement.replaceChild(
            X0,
            Sy.currentContainer
          );
        }
        Sy.currentContainer = X0;
      };
      Object.assign(SK.prototype, {
        on: S7.ZP.on,
        once: S7.ZP.once,
        off: S7.ZP.off,
        trigger: S7.ZP.trigger,
        init(Sy, X0) {
          const X1 = this.modelShim;
          const X2 = new Si("jwplayer", [
            "volume",
            "mute",
            "captionLabel",
            "captions",
            "bandwidthEstimate",
            "bitrateSelection",
            "qualityLabel",
            "enableShortcuts",
          ]);
          const X3 = X2 == null ? undefined : X2.getAllItems();
          X1.attributes = X1.attributes || {};
          Object.assign(this.mediaShim, Sb.L4);
          const X4 = Sy;
          const X5 = (0, SS.ZP)(Object.assign({}, Sy), X3);
          X5.id = X0.id;
          X5.setupConfig = X4;
          Object.assign(X1.attributes, X5, Sb.bv);
          X1.getProviders = function () {
            return new SF.Z(X5);
          };
          X1.setProvider = function () {};
          let X6 = (0, SB.Z)();
          {
            if (!X1.get("backgroundLoading")) {
              X6 = (0, Sv.Z)(X6.getPrimedElement(), X6);
            }
            const X7 = (this.primeUi = new SC.ZP(
              (0, SC.GU)(this.originalContainer)
            ).once("gesture", () => {
              X6.prime();
              this.preload();
              X7.destroy();
            }));
          }
          X1.on("change:errorEvent", Sf);
          return this.setup
            .start(X0)
            .then((X8) => {
              var X9 = X8.core;
              if (!X9) {
                throw (0, Sp.l9)(null, Sp.y7);
              }
              if (this.setup) {
                this.on(Sq.cM, Sc);
                X8.warnings.forEach((XX) => {
                  this.trigger(Sq.cM, XX);
                });
                X8 = this.modelShim.clone();
                if (X8.error) {
                  throw X8.error;
                }
                var XS = this.apiQueue.queue.slice(0);
                this.apiQueue.destroy();
                Object.assign(this, X9.prototype);
                this.playerSetup(
                  X8,
                  X0,
                  this.originalContainer,
                  this._events,
                  XS,
                  X6
                );
                var X9 = this._model;
                X1.off("change:errorEvent", Sf);
                X9.on("change:errorEvent", Sf);
                X2.track(X9);
                return this.updatePlaylist(
                  X9.get("playlist"),
                  X9.get("feedData")
                ).catch((XX) => {
                  var Xz = XX.code === Sp._M ? Sp.IB : Sp.xk;
                  throw (0, Sp.l9)(XX, Xz);
                });
              }
            })
            .then(() => {
              if (this.setup) {
                this.playerReady();
              }
            })
            .catch((X8) => {
              var X9;
              var XS;
              var XX;
              if (this.setup) {
                X9 = this;
                XS = X0;
                XX = X8;
                Promise.resolve().then(() => {
                  var Xz = (0, Sp.Mm)(Sp.ud, Sp.nk, XX);
                  var XA = X9._model || X9.modelShim;
                  Xz.message =
                    Xz.message || XA.get("localization").errors[Xz.key];
                  delete Xz.key;
                  var Xx = XA.get("contextual");
                  if (!Xx) {
                    const XO = (0, SJ.Z)(X9, Xz);
                    if (SJ.Z.cloneIcon) {
                      XO.querySelector(".jw-icon").appendChild(
                        SJ.Z.cloneIcon("error")
                      );
                    }
                    SP(X9, XO);
                  }
                  XA.set("errorEvent", Xz);
                  XA.set("state", Sq.Vy);
                  X9.trigger(Sq.HH, Xz);
                  if (Xx) {
                    XS.remove();
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
            SP(this, this.originalContainer);
          }
          this.off();
          this._events =
            this._model =
            this.modelShim =
            this.apiQueue =
            this.primeUi =
            this.setup =
              null;
        },
        getContainer() {
          return this.currentContainer;
        },
        get(Sy) {
          if (this.modelShim) {
            if (Sy in this.mediaShim) {
              return this.mediaShim[Sy];
            } else {
              return this.modelShim.get(Sy);
            }
          }
        },
        getItemQoe() {
          return this.modelShim._qoeItem;
        },
        getItemPromise: () => null,
        setItemCallback(Sy) {
          if (this.modelShim) {
            this.modelShim.attributes.playlistItemCallback = Sy;
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
          height: 0,
        }),
        isBeforeComplete: () => false,
        isBeforePlay: () => false,
        createInstream: () => null,
        skipAd() {},
        getMediaElement() {},
        attachMedia() {},
        detachMedia() {},
        isReady() {
          var Sy;
          return (
            ((Sy = this._model) == null ? undefined : Sy.get("isReady")) ||
            false
          );
        },
      });
      const SN = SK;
    },
    4446: (S6, S7, S8) => {
      "use strict";

      S8.d(S7, {
        A6: () => SU,
        DD: () => Sp,
        EY: () => SV,
        H4: () => Sr,
        IB: () => SO,
        MD: () => Sg,
        Mm: () => Ss,
        Sp: () => Su,
        T6: () => SX,
        Y7: () => SH,
        YQ: () => SY,
        _M: () => Sa,
        aD: () => SI,
        fU: () => SA,
        l9: () => SL,
        nk: () => SS,
        nm: () => So,
        o2: () => SR,
        pJ: () => Sh,
        rG: () => SQ,
        tJ: () => SG,
        ud: () => SM,
        ul: () => SW,
        wH: () => Sd,
        wM: () => Sq,
        xk: () => Sx,
        y4: () => SE,
        y7: () => Sz,
        zO: () => SD,
      });
      var S9 = S8(6042);
      const SS = 100000;
      const SX = 100001;
      const Sz = 100002;
      const SA = 101000;
      const Sx = 102000;
      const SO = 102700;
      const SY = 200001;
      const Sp = 202000;
      const SE = 104000;
      const SG = 203000;
      const SR = 203640;
      const Sa = 203700;
      const SV = 204000;
      const Sq = 300100;
      const SI = 300200;
      const SH = 306000;
      const SU = 308000;
      const Sd = 308640;
      const SW = "cantPlayVideo";
      const Sg = "badConnection";
      const Sh = "cantLoadPlayer";
      const SD = "cantPlayInBrowser";
      const Su = "liveStreamDown";
      const Sr = "protectedContent";
      const SM = "technicalError";
      class SQ {
        constructor(Se, Sm, ST) {
          this.code = (0, S9.qh)(Sm) ? Sm : 0;
          this.sourceError = ST || null;
          if (Se) {
            this.key = Se;
          } else {
            delete this.key;
          }
        }
        static logMessage(Se) {
          var Sm = Se % 1000;
          var ST = Math.floor((Se - Sm) / 1000);
          let Sk = Se.toString();
          return (
            "JW Player " +
            (Se > 299999 && Se < 400000 ? "Warning" : "Error") +
            " " +
            Se +
            ". For more information see https://developer.jwplayer.com/jw-player/docs/developer-guide/api/errors-reference#" +
            (Sk = Sm >= 400 && Sm < 600 ? ST + ("400-" + ST + "599") : Sk)
          );
        }
      }
      const Ss = function (Se, Sm, ST) {
        if (ST instanceof SQ && ST.code) {
          return ST;
        } else {
          return new SQ(Se, Sm, ST);
        }
      };
      const SL = function (Se, Sm) {
        var ST = Ss(SM, Sm, Se);
        ST.code = ((Se && Se instanceof SQ && Se.code) || 0) + Sm;
        return ST;
      };
      const So = function (Se) {
        var { name: Se, message: Sm } = Se;
        switch (Se) {
          case "AbortError":
            if (/pause/.test(Sm)) {
              return 303213;
            } else if (/load/.test(Sm)) {
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
    6391: (S6, S7, S8) => {
      "use strict";

      S8.d(S7, {
        Z: () => S9,
      });
      const S9 = [];
    },
    7411: (S6, S7, S8) => {
      "use strict";

      S8.d(S7, {
        Z: () => SA,
      });
      var S9 = S8(5004);
      const SS = window.performance || {
        timing: {},
      };
      const SX = SS.timing.navigationStart || (0, S9.z)();
      if (!("now" in SS)) {
        SS.now = () => (0, S9.z)() - SX;
      }
      const Sz = () => SX + SS.now();
      const SA = class {
        constructor() {
          this.startTimes = {};
          this.sum = {};
          this.counts = {};
          this.ticks = {};
        }
        start(Sx) {
          this.startTimes[Sx] = Sz();
          this.counts[Sx] = this.counts[Sx] + 1 || 1;
        }
        end(Sx) {
          var SO;
          if (this.startTimes[Sx]) {
            SO = Sz() - this.startTimes[Sx];
            delete this.startTimes[Sx];
            this.sum[Sx] = this.sum[Sx] + SO || SO;
          }
        }
        dump() {
          var Sx;
          var SO = Object.assign({}, this.sum);
          for (const SY in this.startTimes) {
            if (
              !!(function (Sp, SE) {
                if (Sp == null) {
                  throw new TypeError(
                    "Cannot convert undefined or null to object"
                  );
                }
                return Object.prototype.hasOwnProperty.call(Object(Sp), SE);
              })(this.startTimes, SY)
            ) {
              Sx = Sz() - this.startTimes[SY];
              SO[SY] = SO[SY] + Sx || Sx;
            }
          }
          return {
            counts: Object.assign({}, this.counts),
            sums: SO,
            events: Object.assign({}, this.ticks),
          };
        }
        tick(Sx) {
          this.ticks[Sx] = Sz();
        }
        clear(Sx) {
          delete this.ticks[Sx];
        }
        between(Sx, SO) {
          if (this.ticks[SO] && this.ticks[Sx]) {
            return this.ticks[SO] - this.ticks[Sx];
          } else {
            return null;
          }
        }
      };
    },
    4601: (S6, S7, S8) => {
      "use strict";

      S8.d(S7, {
        v: () => Sz,
        z: () => SA,
      });
      var S9 = S8(2894);
      var SS = S8(8348);
      let SX = null;
      const Sz = {};
      const SA = function () {
        return (SX =
          SX ||
          (SS.OS.tizenApp
            ? S8.e(74)
                .then(
                  function (Sx) {
                    var SO = S8(3112).default;
                    return (Sz.controls = SO);
                  }.bind(null, S8)
                )
                .catch(function () {
                  ((SX = null), S9.Jt)(301133)();
                })
            : S8.e(716)
                .then(
                  function (Sx) {
                    var SO = S8(5827).default;
                    return (Sz.controls = SO);
                  }.bind(null, S8)
                )
                .catch(function () {
                  ((SX = null), S9.Jt)(301130)();
                })));
      };
    },
    8348: (S6, S7, S8) => {
      "use strict";

      S8.r(S7);
      S8.d(S7, {
        Browser: () => SA,
        Features: () => SO,
        OS: () => Sx,
      });
      var S9 = S8(2268);
      const SS = (SY, Sp) => {
        SY = SY.exec(Sp);
        if (SY && SY.length > 1) {
          return SY[1];
        }
      };
      const SX = navigator.userAgent;
      const Sz = () => {};
      const SA = {
        get androidNative() {
          return (0, S9.O7)();
        },
        get chrome() {
          return (0, S9.i7)();
        },
        get edge() {
          return (0, S9.un)();
        },
        get facebook() {
          return (0, S9.DF)();
        },
        get firefox() {
          return (0, S9.pZ)();
        },
        get ie() {
          return (0, S9.w1)();
        },
        get msie() {
          return (0, S9.A)();
        },
        get safari() {
          return (0, S9.G6)();
        },
        get version() {
          {
            var SY = this;
            var Sp = SX;
            let SE;
            let SG;
            let SR;
            let Sa;
            if (SY.chrome) {
              SE =
                Sp.indexOf("Chrome") !== -1
                  ? Sp.substring(Sp.indexOf("Chrome") + 7)
                  : Sp.substring(Sp.indexOf("CriOS") + 6);
            } else if (SY.safari) {
              SE = Sp.substring(Sp.indexOf("Version") + 8);
            } else if (SY.firefox) {
              SE = Sp.substring(Sp.indexOf("Firefox") + 8);
            } else if (SY.edge) {
              let SV = Sp.indexOf("Edge");
              if (SV === -1) {
                SV = Sp.indexOf("Edg") + 4;
              } else {
                SV += 5;
              }
              SE = Sp.substring(SV);
            } else if (SY.ie) {
              if (Sp.indexOf("rv:") !== -1) {
                SE = Sp.substring(Sp.indexOf("rv:") + 3);
              } else if (Sp.indexOf("MSIE") !== -1) {
                SE = Sp.substring(Sp.indexOf("MSIE") + 5);
              }
            }
            if (SE) {
              if (
                (Sa = (SE =
                  (Sa = (SE =
                    (Sa = SE.indexOf(";")) !== -1
                      ? SE.substring(0, Sa)
                      : SE).indexOf(" ")) !== -1
                    ? SE.substring(0, Sa)
                    : SE).indexOf(")")) !== -1
              ) {
                SE = SE.substring(0, Sa);
              }
              SG = parseInt(SE, 10);
              SR = parseInt(SE.split(".")[1], 10);
            }
            return {
              version: SE,
              major: SG,
              minor: SR,
            };
          }
        },
      };
      const Sx = {
        get android() {
          return (0, S9.Dt)();
        },
        get iOS() {
          return (0, S9.gn)();
        },
        get mobile() {
          return (0, S9.tq)();
        },
        get mac() {
          return (0, S9.id)();
        },
        get iPad() {
          return (0, S9.zc)();
        },
        get iPhone() {
          return (0, S9.xb)();
        },
        get windows() {
          return SX.indexOf("Windows") > -1;
        },
        get tizen() {
          return (0, S9.yS)();
        },
        get tizenApp() {
          return (0, S9.Q6)();
        },
        get version() {
          {
            var SY = this;
            var Sp = SX;
            let SE;
            let SG;
            let SR;
            if (SY.windows) {
              SE = SS(/Windows(?: NT|)? ([._\d]+)/, Sp);
              switch (SE) {
                case "6.1":
                  SE = "7.0";
                  break;
                case "6.2":
                  SE = "8.0";
                  break;
                case "6.3":
                  SE = "8.1";
              }
            } else if (SY.android) {
              SE = SS(/Android ([._\d]+)/, Sp);
            } else if (SY.iOS) {
              SE = SS(/OS ([._\d]+)/, Sp);
            } else if (SY.mac) {
              SE = SS(/Mac OS X ([._\d]+)/, Sp);
            } else if (SY.tizen) {
              SE = SS(/Tizen ([._\d]+)/, Sp);
            }
            if (SE) {
              SG = parseInt(SE, 10);
              const Sa = SE.split(/[._]/);
              if (Sa) {
                SR = parseInt(Sa[1], 10);
              }
            }
            return {
              version: SE,
              major: SG,
              minor: SR,
            };
          }
        },
      };
      const SO = {
        get flash() {
          return (0, S9.NO)();
        },
        get flashVersion() {
          return (0, S9.dI)();
        },
        get iframe() {
          return (0, S9.cL)();
        },
        get passiveEvents() {
          {
            let Sp = false;
            try {
              var SY = Object.defineProperty({}, "passive", {
                get: () => (Sp = true),
              });
              window.addEventListener("testPassive", Sz, SY);
              window.removeEventListener("testPassive", Sz, SY);
            } catch (SE) {}
            return Sp;
          }
        },
        get backgroundLoading() {
          return !Sx.iOS && !SA.safari && !Sx.tizen;
        },
        get enableAdLoadingUI() {
          return !Sx.iOS && !Sx.tizen;
        },
      };
    },
    1643: (S6, S7, S8) => {
      "use strict";

      S8.d(S7, {
        $_: () => Sg,
        $j: () => So,
        AQ: () => Sk,
        Ax: () => Sh,
        B1: () => SV,
        Bs: () => XE,
        Ew: () => Sw,
        FU: () => Sj,
        Gj: () => XO,
        HH: () => SJ,
        Hy: () => X2,
        Ib: () => Xz,
        Je: () => SZ,
        Jl: () => ST,
        K5: () => SI,
        Kb: () => S9,
        Ms: () => SQ,
        NZ: () => SL,
        O1: () => SN,
        Ow: () => X6,
        P: () => Sa,
        QF: () => XX,
        R2: () => SC,
        RF: () => Xa,
        Rc: () => Ss,
        Rt: () => SW,
        SL: () => XA,
        Sv: () => SG,
        TJ: () => Sf,
        U3: () => SH,
        UF: () => XS,
        UW: () => X3,
        UZ: () => Sy,
        V$: () => Sl,
        Vy: () => Sx,
        WE: () => SD,
        Wp: () => Sp,
        Z_: () => Xx,
        _5: () => Sz,
        _B: () => X8,
        aM: () => X0,
        aQ: () => Sb,
        bc: () => SS,
        cM: () => Sd,
        cq: () => Si,
        cy: () => SF,
        gO: () => X5,
        gy: () => SP,
        h7: () => XG,
        ik: () => SO,
        j0: () => X7,
        jt: () => X9,
        k3: () => Su,
        l5: () => Xp,
        nQ: () => SY,
        nv: () => SE,
        oZ: () => Sc,
        ot: () => SR,
        pi: () => St,
        pn: () => SU,
        qG: () => XR,
        r0: () => SA,
        rx: () => Sn,
        s$: () => Sm,
        sF: () => X4,
        t6: () => XV,
        tP: () => Sq,
        uL: () => Sr,
        uT: () => Sv,
        uc: () => SB,
        ug: () => X1,
        wh: () => SM,
        xQ: () => SX,
        xf: () => XY,
        yH: () => SK,
      });
      const S9 = "buffering";
      const SS = "idle";
      const SX = "complete";
      const Sz = "paused";
      const SA = "playing";
      const Sx = "error";
      const SO = "loading";
      const SY = "stalled";
      const Sp = "drag";
      const SE = "dragStart";
      const SG = "dragEnd";
      const SR = "click";
      const Sa = "doubleClick";
      const SV = "over";
      const Sq = "move";
      const SI = "enter";
      const SH = "out";
      const SU = Sx;
      const Sd = "warning";
      const SW = "adClick";
      const Sg = "mediaLoaded";
      const Sh = "adPause";
      const SD = "adPlay";
      const Su = "adSkipped";
      const Sr = "adTime";
      const SM = "autostartNotAllowed";
      const SQ = SX;
      const Ss = "ready";
      const SL = "seek";
      const So = "beforePlay";
      const Sm = "beforeComplete";
      const ST = "bufferFull";
      const Sk = "absolutePositionReady";
      const SF = "displayClick";
      const Sl = "playlistComplete";
      const St = "cast";
      const Sw = "mediaError";
      const Sj = "firstFrame";
      const Si = "playAttempt";
      const SZ = "playAttemptFailed";
      const Sb = "seeked";
      const SJ = "setupError";
      const SB = "state";
      const Sv = "bufferChange";
      const SC = "time";
      const Sf = "ratechange";
      const Sc = "mediaType";
      const SK = "volume";
      const SP = "mute";
      const SN = "metadataCueParsed";
      const Sn = "meta";
      const Sy = "levels";
      const X0 = "levelsChanged";
      const X1 = "visualQuality";
      const X2 = "controls";
      const X3 = "fullscreen";
      const X4 = "resize";
      const X5 = "playlistItem";
      const X6 = "playlist";
      const X7 = "audioTracks";
      const X8 = "audioTrackChanged";
      const X9 = "subtitlesTracks";
      const XS = "subtitlesTrackChanged";
      const XX = "playbackRateChanged";
      const Xz = "logoClick";
      const XA = "captionsList";
      const Xx = "captionsChanged";
      const XO = "providerFirstFrame";
      const XY = "userAction";
      const Xp = "instreamClick";
      const XE = "breakpoint";
      const XG = "fullscreenchange";
      const XR = "bandwidthEstimate";
      const Xa = "float";
      const XV = "chapter";
    },
    9918: (S6, S7, S8) => {
      "use strict";

      S8.d(S7, {
        L4: () => SS,
        OG: () => Sz,
        bv: () => S9,
        ni: () => SX,
      });
      const S9 = {
        audioMode: false,
        itemMeta: {},
        playbackRate: 1,
        playRejected: false,
        state: S8(1643).bc,
        itemReady: false,
        controlsEnabled: false,
      };
      const SS = {
        position: 0,
        duration: 0,
        buffer: 0,
        currentTime: 0,
      };
      const SX = 120;
      const Sz = 25;
    },
    7753: (S6, S7, S8) => {
      "use strict";

      S8.d(S7, {
        Z: () => S9,
      });
      class S9 extends S8(328).ZP {
        constructor() {
          super();
          this.attributes = Object.create(null);
        }
        addAttributes(SS) {
          Object.keys(SS).forEach((SX) => {
            this.add(SX, SS[SX]);
          });
        }
        add(SS, SX) {
          Object.defineProperty(this, SS, {
            get: () => this.attributes[SS],
            set: (Sz) => {
              this.set(SS, Sz);
            },
            enumerable: false,
          });
          this.attributes[SS] = SX;
        }
        get(SS) {
          return this.attributes[SS];
        }
        set(SS, SX) {
          var Sz;
          if (this.attributes[SS] !== SX) {
            Sz = this.attributes[SS];
            this.attributes[SS] = SX;
            this.trigger("change:" + SS, this, SX, Sz);
          }
        }
        clone() {
          var SS = {};
          var SX = this.attributes;
          if (SX) {
            for (const Sz in SX) {
              SS[Sz] = SX[Sz];
            }
          }
          return SS;
        }
        change(SS, SX, Sz) {
          this.on("change:" + SS, SX, Sz);
          SS = this.get(SS);
          SX.call(Sz, this, SS, SS);
          return this;
        }
      }
    },
    7941: (S6, S7, S8) => {
      "use strict";

      S8.d(S7, {
        dZ: () => SX,
        my: () => SA,
        qk: () => Sz,
        r1: () => SS,
      });
      var S9 = S8(2957);
      const SS = (Sx) => {
        let SO = "";
        if (Sx) {
          if (Sx.localName) {
            SO = Sx.localName;
          } else if (Sx.baseName) {
            SO = Sx.baseName;
          }
        }
        return SO;
      };
      const SX = (Sx) => {
        let SO = "";
        if (Sx) {
          if (Sx.textContent) {
            SO = (0, S9.fy)(Sx.textContent);
          } else if (Sx.text) {
            SO = (0, S9.fy)(Sx.text);
          }
        }
        return SO;
      };
      const Sz = (Sx, SO) => Sx.childNodes[SO];
      const SA = (Sx) => (Sx.childNodes ? Sx.childNodes.length : 0);
    },
    6769: (S6, S7, S8) => {
      "use strict";

      S8.d(S7, {
        Z: () =>
          function (SY) {
            var Sp = [];
            Sp.feedData = {};
            for (let Sa = 0; Sa < (0, S9.my)(SY); Sa++) {
              var SE = (0, S9.qk)(SY, Sa);
              if ((0, S9.r1)(SE).toLowerCase() === "channel") {
                for (let SV = 0; SV < (0, S9.my)(SE); SV++) {
                  var SG = (0, S9.qk)(SE, SV);
                  var SR = (0, S9.r1)(SG).toLowerCase();
                  if (SR === "item") {
                    Sp.push(SO(SG));
                  } else if (SR) {
                    Sp.feedData[SR] = (0, S9.dZ)(SG);
                  }
                }
              }
            }
            return Sp;
          },
      });
      var S9 = S8(7941);
      var SS = S8(2957);
      function SX(SY, Sp) {
        const SE = [];
        for (let Sa = 0; Sa < (0, S9.my)(SY); Sa++) {
          var SG = SY.childNodes[Sa];
          if (SG.prefix === "media" && (0, S9.r1)(SG)) {
            switch ((0, S9.r1)(SG).toLowerCase()) {
              case "content":
                if ((0, SS.Dc)(SG, "duration")) {
                  Sp.duration = (0, SS.m9)((0, SS.Dc)(SG, "duration"));
                }
                if ((0, SS.Dc)(SG, "url")) {
                  Sp.sources ||= [];
                  const SV = {
                    file: (0, SS.Dc)(SG, "url"),
                    type: (0, SS.Dc)(SG, "type"),
                    width: (0, SS.Dc)(SG, "width"),
                    label: (0, SS.Dc)(SG, "label"),
                  };
                  const Sq = ((SI) => {
                    var SH = [];
                    for (let Sd = 0; Sd < (0, S9.my)(SI); Sd++) {
                      var SU = SI.childNodes[Sd];
                      if (
                        SU.prefix === "jwplayer" &&
                        (0, S9.r1)(SU).toLowerCase() === "mediatypes"
                      ) {
                        SH.push((0, S9.dZ)(SU));
                      }
                    }
                    return SH;
                  })(SG);
                  if (Sq.length) {
                    SV.mediaTypes = Sq;
                  }
                  Sp.sources.push(SV);
                }
                if ((0, S9.my)(SG) > 0) {
                  Sp = SX(SG, Sp);
                }
                break;
              case "title":
                Sp.title = (0, S9.dZ)(SG);
                break;
              case "description":
                Sp.description = (0, S9.dZ)(SG);
                break;
              case "guid":
                Sp.mediaid = (0, S9.dZ)(SG);
                break;
              case "thumbnail":
                Sp.image ||= (0, SS.Dc)(SG, "url");
                break;
              case "group":
                SX(SG, Sp);
                break;
              case "subtitle": {
                const SI = {
                  file: (0, SS.Dc)(SG, "url"),
                  kind: "captions",
                };
                if ((0, SS.Dc)(SG, "lang").length > 0) {
                  SR = (0, SS.Dc)(SG, "lang");
                  undefined;
                  SI.label =
                    {
                      zh: "Chinese",
                      nl: "Dutch",
                      en: "English",
                      fr: "French",
                      de: "German",
                      it: "Italian",
                      ja: "Japanese",
                      pt: "Portuguese",
                      ru: "Russian",
                      es: "Spanish",
                    }[SR] || SR;
                }
                SE.push(SI);
                break;
              }
            }
          }
        }
        var SR;
        Sp.tracks ||= [];
        for (let SH = 0; SH < SE.length; SH++) {
          Sp.tracks.push(SE[SH]);
        }
        return Sp;
      }
      const Sz = SX;
      var SA = S8(9888);
      var Sx = S8(393);
      const SO = (SY) => {
        var Sp = {};
        for (let SR = 0; SR < SY.childNodes.length; SR++) {
          var SE = SY.childNodes[SR];
          var SG = (0, S9.r1)(SE);
          if (SG) {
            switch (SG.toLowerCase()) {
              case "enclosure":
                Sp.file = (0, SS.Dc)(SE, "url");
                break;
              case "title":
                Sp.title = (0, S9.dZ)(SE);
                break;
              case "guid":
                Sp.mediaid = (0, S9.dZ)(SE);
                break;
              case "pubdate":
                Sp.date = (0, S9.dZ)(SE);
                break;
              case "description":
                Sp.description = (0, S9.dZ)(SE);
                break;
              case "link":
                Sp.link = (0, S9.dZ)(SE);
                break;
              case "category":
                if (Sp.tags) {
                  Sp.tags += (0, S9.dZ)(SE);
                } else {
                  Sp.tags = (0, S9.dZ)(SE);
                }
            }
          }
        }
        return new Sx.Z(
          (function (Sa, SV) {
            var Sq = "default";
            var SI = "file";
            var SH = [];
            var SU = [];
            var Sd = SV;
            for (let Sg = 0; Sg < Sa.childNodes.length; Sg++) {
              var SW = Sa.childNodes[Sg];
              if (SW.prefix === "jwplayer") {
                const Sh = (0, S9.r1)(SW);
                if (Sh === "source") {
                  delete SV.sources;
                  SH.push({
                    file: (0, SS.Dc)(SW, SI),
                    default: (0, SS.Dc)(SW, Sq),
                    label: (0, SS.Dc)(SW, "label"),
                    type: (0, SS.Dc)(SW, "type"),
                  });
                } else if (Sh === "track") {
                  delete SV.tracks;
                  SU.push({
                    file: (0, SS.Dc)(SW, SI),
                    default: (0, SS.Dc)(SW, Sq),
                    kind: (0, SS.Dc)(SW, "kind"),
                    label: (0, SS.Dc)(SW, "label"),
                  });
                } else {
                  SV[Sh] = (0, SA.serialize)((0, S9.dZ)(SW));
                  if (Sh === "file" && SV.sources) {
                    delete SV.sources;
                  }
                }
              }
              SV[SI] ||= SV.link;
            }
            if (SH.length) {
              SV.sources = [];
              for (let SD = 0; SD < SH.length; SD++) {
                const Su = SH[SD];
                if (Su.file.length > 0) {
                  Su[Sq] = SH[SD][Sq] === "true";
                  if (!Su.label) {
                    delete Su.label;
                  }
                  Sd.sources.push(Su);
                }
              }
            }
            if (SU.length) {
              SV.tracks = [];
              for (let Sr = 0; Sr < SU.length; Sr++) {
                const SM = SU[Sr];
                if (SM.file && SM.file.length > 0) {
                  SM[Sq] = SU[Sr][Sq] === "true";
                  SM.kind = SU[Sr].kind.length ? SU[Sr].kind : "captions";
                  if (!SM.label) {
                    delete SM.label;
                  }
                  Sd.tracks.push(SM);
                }
              }
            }
            return Sd;
          })(SY, Sz(SY, Sp))
        );
      };
    },
    2557: (S6, S7, S8) => {
      "use strict";

      S8.d(S7, {
        t: () => S9,
        u: () => SS,
      });
      class S9 {
        constructor(SX, Sz) {
          this.defaultLanguage = SX;
          this.timestamps = Sz;
        }
      }
      class SS {
        constructor({ title: SX = {}, group: Sz, time: SA, image: Sx }) {
          this.title = {};
          this.time = SA;
          this.group = Sz;
          this.image = Sx;
          Object.keys(SX).forEach((SO) => {
            var SY = SX[SO];
            this.addTitle(SO, SY);
          });
        }
        addTitle(SX, Sz) {
          this.title[SX] = Sz;
        }
      }
    },
    393: (S6, S7, S8) => {
      "use strict";

      S8.d(S7, {
        Z: () => Sx,
      });
      var S9 = S8(6053);
      function SS(SO) {
        var SY;
        if (SO && SO.file) {
          (SO = Object.assign(
            {},
            {
              kind: "captions",
              default: false,
            },
            SO
          )).kind =
            ((SY = SO.kind), SX.indexOf(SY) !== -1 ? SO.kind : "captions");
          SO.default = Boolean(SO.default);
          return SO;
        }
      }
      const SX = ["captions", "metadata", "thumbnails", "chapters"];
      var Sz = S8(9918);
      const SA = Array.isArray;
      const Sx = function (SO) {
        if (!SA((SO = SO || {}).tracks)) {
          delete SO.tracks;
        }
        var SY = Object.assign(
          {},
          {
            sources: [],
            tracks: [],
            minDvrWindow: Sz.ni,
          },
          SO
        );
        if (SY.sources === Object(SY.sources) && !SA(SY.sources)) {
          SY.sources = [(0, S9.Z)(SY.sources)];
        }
        if (!SA(SY.sources) || SY.sources.length === 0) {
          if (SO.levels) {
            SY.sources = SO.levels;
          } else {
            SY.sources = [(0, S9.Z)(SO)];
          }
        }
        for (let SG = 0; SG < SY.sources.length; SG++) {
          var Sp;
          var SE = SY.sources[SG];
          if (SE) {
            Sp = SE.default;
            SE.default = !!Sp && Sp.toString() === "true";
            SY.sources[SG].label ||= SG.toString();
            SY.sources[SG] = (0, S9.Z)(SY.sources[SG]);
          }
        }
        SY.sources = SY.sources.filter(Boolean);
        if (!SA(SY.tracks)) {
          SY.tracks = [];
        }
        if (SA(SY.captions)) {
          SY.tracks = SY.tracks.concat(SY.captions);
          delete SY.captions;
        }
        SY.tracks = SY.tracks.map(SS).filter(Boolean);
        return SY;
      };
    },
    7263: (S6, S7, S8) => {
      "use strict";

      S8.d(S7, {
        Z: () => SO,
      });
      var S9 = S8(1643);
      var SS = S8(7941);
      var SX = S8(6769);
      var Sz = S8(6886);
      var SA = S8(328);
      var Sx = S8(4446);
      const SO = function () {
        function SY(SG) {
          try {
            const SR = SG.responseXML ? SG.responseXML.childNodes : null;
            let Sa;
            let SV = null;
            if (SR) {
              for (
                let Sq = 0;
                Sq < SR.length && (SV = SR[Sq]).nodeType === 8;
                Sq++
              );
              if (
                (SV = SV && (0, SS.r1)(SV) === "xml" ? SV.nextSibling : SV) &&
                (0, SS.r1)(SV) === "rss"
              ) {
                const SI = (0, SX.Z)(SV);
                Sa = Object.assign(
                  {
                    playlist: SI,
                  },
                  SI.feedData
                );
              }
            }
            if (!Sa) {
              try {
                const SH = JSON.parse(SG.responseText);
                if (Array.isArray(SH)) {
                  Sa = {
                    playlist: SH,
                  };
                } else {
                  if (!Array.isArray(SH.playlist)) {
                    throw Error("Playlist is not an array");
                  }
                  Sa = SH;
                }
              } catch (SU) {
                throw new Sx.rG(Sx.ul, 621, SU);
              }
            }
            Sp.trigger(S9.Ow, Sa);
          } catch (Sd) {
            SE(Sd);
          }
        }
        const Sp = Object.assign(this, SA.ZP);
        const SE = function (SG) {
          if (SG instanceof Sx.rG && !SG.code) {
            SG = new Sx.rG(Sx.ul, 0);
          }
          Sp.trigger(S9.pn, SG);
        };
        this.load = function (SG) {
          (0, Sz.h)(SG, SY, (SR, Sa, SV, Sq) => {
            SE(Sq);
          });
        };
        this.destroy = function () {
          this.off();
        };
      };
    },
    8320: (S6, S7, S8) => {
      "use strict";

      S8.d(S7, {
        ZP: () => SI,
        s7: () => SR,
        T5: () => Sq,
        YF: () => SG,
        _: () => Sa,
        bx: () => SV,
      });
      const S9 = {
        none: true,
        metadata: true,
        auto: true,
      };
      const SS = (SH, SU) => (S9[SH] ? SH : S9[SU] ? SU : "metadata");
      var SX = S8(393);
      var Sz = S8(6053);
      var SA = S8(2303);
      var Sx = S8(4446);
      const SO = (SH, SU) => (SH === undefined ? SU : SH);
      const SY = (SH, SU, Sd) => {
        if (Sd in SU) {
          SH[Sd] = SU[Sd];
        }
      };
      const Sp = (SH, SU) => {
        const Sd = SU.attributes;
        const { sources: SW, allSources: Sg, preload: Sh, drm: SD } = SH;
        const Su = SO(SH.withCredentials, Sd.withCredentials);
        return (Sg || SW)
          .map(function (Sr) {
            var SM;
            var SQ;
            var Ss;
            if (Sr !== Object(Sr)) {
              return null;
            } else {
              SY(Sr, Sd, "androidhls");
              SY(Sr, Sd, "hlsjsdefault");
              SY(Sr, Sd, "safarihlsjs");
              Ss = Sr;
              SM = SH;
              SQ = Sd;
              if (!Ss.liveSyncDuration) {
                SM = SM.liveSyncDuration ? SM : SQ;
                SY(Ss, SM, "liveSyncDuration");
              }
              SY(Sr, Sd, "_hlsjsProgressive");
              Sr.preload = SS(Sr.preload, Sh);
              if ((SQ = Sr.drm || SD || Sd.drm)) {
                Sr.drm = SQ;
              }
              if ((Ss = SO(Sr.withCredentials, Su)) !== undefined) {
                Sr.withCredentials = Ss;
              }
              return (0, Sz.Z)(Sr);
            }
          })
          .filter(Boolean);
      };
      const SE = (SH, SU) => {
        var Sd = ((Sh, SD) => {
          for (let SM = 0; SM < Sh.length; SM++) {
            var Su = Sh[SM];
            var Sr = SD.choose(Su).providerToCheck;
            if (Sr) {
              return {
                type: Su.type,
                provider: Sr,
              };
            }
          }
          return null;
        })(SH, (SU = SU && SU.choose ? SU : new SA.Z()));
        if (!Sd) {
          return [];
        }
        const SW = Sd.provider;
        const Sg = Sd.type;
        return SH.filter(function (Sh) {
          return Sh.type === Sg && SU.providerSupports(SW, Sh);
        });
      };
      const SG = (SH, SU, Sd) => {
        var SW = SH.getProviders();
        var Sg = SH.get("preload");
        var Sh = SH.get("jwStart");
        var SD = Object.assign({}, SU);
        SD.preload = SS(SU.preload, Sg);
        SD.allSources = Sp(SD, SH);
        SD.sources = SE(SD.allSources, SW);
        if (SD.sources.length) {
          SD.file = SD.sources[0].file;
          SD.feedData = Sd;
          if (Sh && Sh !== -1 && SH.get("generateSEOMetadata")) {
            SD.starttime = Sh;
          }
          if ((Sg = (SU = SD).sources[0].liveSyncDuration)) {
            SU.liveSyncDuration = SU.dvrSeekLimit = Sg;
          }
          return SU;
        }
      };
      const SR = (SH, SU, Sd) => {
        const SW = Object.assign({}, Sd);
        delete SW.playlist;
        return SH.map((Sg) => SG(SU, Sg, SW)).filter(Boolean);
      };
      const Sa = (SH) => {
        if (!Array.isArray(SH) || SH.length === 0) {
          throw new Sx.rG(Sx.ul, 630);
        }
      };
      const SV = (SH, SU) => {
        let Sd = (parseInt(SH, 10) || 0) % SU;
        if (Sd < 0) {
          Sd += SU;
        }
        return Sd;
      };
      const Sq = (SH, SU) => SE(Sp(SH, SU), SU.getProviders());
      const SI = function (SH) {
        return (Array.isArray(SH) ? SH : [SH]).map(SX.Z);
      };
    },
    6053: (S6, S7, S8) => {
      "use strict";

      S8.d(S7, {
        Z: () => SX,
      });
      var S9 = S8(7034);
      var SS = S8(2957);
      const SX = function (Sz) {
        if (Sz && Sz.file) {
          const Sx = Object.assign(
            {},
            {
              default: false,
              type: "",
            },
            Sz
          );
          Sx.file = (0, SS.fy)("" + Sx.file);
          var Sz = /^[^/]+\/(?:x-)?([^/]+)$/;
          var SA = Sx.type;
          if (Sz.test(SA)) {
            Sx.mimeType = SA;
            Sx.type = SA.replace(Sz, "$1");
          }
          if ((0, S9.isYouTube)(Sx.file)) {
            Sx.type = "youtube";
          } else if ((0, S9.isRtmp)(Sx.file)) {
            Sx.type = "rtmp";
          } else {
            Sx.type ||= (0, SS.AO)(Sx.file);
          }
          if (Sx.type) {
            switch (Sx.type) {
              case "m3u8":
              case "vnd.apple.mpegurl":
                Sx.type = "hls";
                break;
              case "dash+xml":
                Sx.type = "dash";
                break;
              case "m4a":
                Sx.type = "aac";
                break;
              case "smil":
                Sx.type = "rtmp";
            }
            Object.keys(Sx).forEach(function (SO) {
              if (Sx[SO] === "") {
                delete Sx[SO];
              }
            });
            return Sx;
          }
        }
      };
    },
    4101: (S6, S7, S8) => {
      "use strict";

      S8.d(S7, {
        Z: () => SY,
      });
      var S9 = S8(676);
      var SS = S8(9888);
      var SX = S8(2957);
      var Sz = S8(4446);
      var SA = S8(3487);
      function Sx(Sp) {
        var SE;
        var SG;
        if (typeof Sp == "string") {
          if ((SE = (Sp = Sp.split("?")[0]).indexOf("://")) > 0) {
            return 0;
          } else {
            SG = Sp.indexOf("/");
            Sp = (0, SX.AO)(Sp);
            if (SE >= 0 || SG >= 0 || (Sp && isNaN(Sp))) {
              return 1;
            } else {
              return 2;
            }
          }
        }
      }
      function SO(Sp) {
        this.url = Sp;
        this.promise_ = null;
      }
      Object.defineProperties(SO.prototype, {
        promise: {
          get() {
            return this.load();
          },
          set() {},
        },
      });
      Object.assign(SO.prototype, {
        load() {
          let Sp = this.promise_;
          if (!Sp) {
            if (Sx(this.url) === 2) {
              return Promise.resolve(this);
            }
            var SE = new S9.ZP(
              ((SG) => {
                switch (Sx(SG)) {
                  case 0:
                    return SG;
                  case 1:
                    return (0, SS.getAbsolutePath)(SG, window.location.href);
                }
              })(this.url)
            );
            this.loader = SE;
            Sp = SE.load().then(() => this);
            this.promise_ = Sp;
          }
          return Sp;
        },
        registerPlugin(Sp, SE, SG) {
          this.name = Sp;
          this.target = SE;
          this.js = SG;
        },
        getNewInstance(Sp, SE, SG) {
          var SR = this.js;
          if (typeof SR != "function") {
            throw new Sz.rG(null, (0, SA.bX)(this.url) + 100);
          }
          const Sa = new SR(Sp, SE, SG);
          const SV = {
            type: "pluginInitialized",
            name: this.name,
            config: SE,
          };
          Sa.addToPlayer = function (Sq = false) {
            var SI = this.getContainer().querySelector(".jw-overlays");
            if (SI) {
              SG.left = SI.style.left;
              SG.top = SI.style.top;
              SI.appendChild(SG);
              if (Sq) {
                this.trigger("pluginInitialized", SV);
              } else {
                setTimeout(() => this.trigger("pluginInitialized", SV), 0);
              }
              return Sa;
            }
          };
          Sa.resizeHandler = function () {
            var Sq = this.getContainer().querySelector(".jw-overlays");
            if (Sq) {
              Sa.resize(Sq.clientWidth, Sq.clientHeight);
            }
          };
          return Sa;
        },
      });
      const SY = SO;
    },
    1241: (S6, S7, S8) => {
      "use strict";

      S8.d(S7, {
        ZP: () =>
          function (SE, SG) {
            var SR = SE.get("plugins");
            window.jwplayerPluginJsonp = SY;
            return (SE.pluginLoader = SE.pluginLoader || new SX())
              .load(SG, SO, SR, SE)
              .then((Sa) => {
                if (!SE.attributes._destroyed) {
                  delete window.jwplayerPluginJsonp;
                  return Sa;
                }
              });
          },
        fo: () => SY,
        Ve: () => Sp,
      });
      var S9 = S8(4446);
      var SS = S8(3487);
      const SX = function () {
        this.load = function (SE, SG, SR, Sa) {
          if (SR && typeof SR == "object") {
            return Promise.all(
              Object.keys(SR)
                .filter((SV) => SV)
                .map((SV) => {
                  const Sq = SR[SV];
                  return SG.setupPlugin(SV)
                    .then((SI) => {
                      if (!Sa.attributes._destroyed) {
                        return (0, SS.MK)(SI, Sq, SE);
                      }
                    })
                    .catch((SI) => {
                      SG.removePlugin(SV);
                      if (SI.code) {
                        return SI;
                      } else {
                        return new S9.rG(null, (0, SS.bX)(SV), SI);
                      }
                    });
                })
            );
          } else {
            return Promise.resolve();
          }
        };
      };
      var Sz = S8(4101);
      var SA = S8(5499);
      const Sx = {};
      const SO = new (class {
        setupPlugin(SE) {
          var SG = this.getPlugin(SE);
          if (SG) {
            if (SG.url !== SE) {
              (0, SA.c)(
                'JW Plugin "' +
                  (0, SS.Nq)(SE) +
                  '" already loaded from "' +
                  SG.url +
                  '". Ignoring "' +
                  SE +
                  '."'
              );
            }
            return SG.promise;
          } else {
            return this.addPlugin(SE).load();
          }
        }
        addPlugin(SE) {
          var SG = (0, SS.Nq)(SE);
          let SR = Sx[SG];
          if (!SR) {
            SR = new Sz.Z(SE);
            Sx[SG] = SR;
          }
          return SR;
        }
        getPlugin(SE) {
          return Sx[(0, SS.Nq)(SE)];
        }
        removePlugin(SE) {
          delete Sx[(0, SS.Nq)(SE)];
        }
        getPlugins() {
          return Sx;
        }
      })();
      const SY = function (SE, SG, SR) {
        var Sa = SO.addPlugin(SE);
        if (!Sa.js) {
          Sa.registerPlugin(SE, SG, SR);
        }
      };
      const Sp = async (SE, SG, SR) => {
        var Sa = (0, SS.Nq)(SE);
        var SV = SO.getPlugin(Sa);
        if (SV) {
          return (0, SS.MK)(SV, SG, SR);
        }
        let Sq = Sa === SE ? SE : SE;
        return SO.setupPlugin(Sq).then((SI) => (0, SS.MK)(SI, SG, SR));
      };
    },
    7164: (S6, S7, S8) => {
      "use strict";

      S8.d(S7, {
        MK: () => Sz,
        Nq: () => SS,
        bX: () => SX,
      });
      var S9 = S8(5950);
      const SS = function (SA) {
        var Sx = /\/((.(?!\/))+?)\.js/i.exec(SA);
        var Sx = (Sx == null ? undefined : Sx[1]) || SA;
        if (Sx && Sx === "jwpsrv-dnt") {
          return "jwpsrv";
        } else {
          return Sx;
        }
      };
      const SX = (SA) => 305000;
      const Sz = (SA, Sx, SO) => {
        var SY = SA.name;
        var Sx = Object.assign({}, Sx, (0, S9.vl)(SA.url));
        var Sp = document.createElement("div");
        Sp.id = SO.id + "_" + SY;
        Sp.className = "jw-plugin jw-reset";
        var SA = SA.getNewInstance(SO, Sx, Sp);
        SO.addPlugin(SY, SA);
        return SA;
      };
    },
    7683: (S6, S7, S8) => {
      "use strict";

      S8.d(S7, {
        V: () => SX,
        Z: () =>
          function () {
            const Sz = S9.Jx;
            const SA = [];
            const Sx = [];
            for (let SE = 0; SE < Sz; SE++) {
              const SG = SX();
              SA.push(SG);
              Sx.push(SG);
              SS(SG);
            }
            const SO = Sx.shift();
            const SY = Sx.shift();
            let Sp = false;
            return {
              primed: () => Sp,
              prime() {
                SA.forEach(SS);
                Sp = true;
              },
              played() {
                Sp = true;
              },
              getPrimedElement: () => Sx.shift() || null,
              getAdElement: () => SO,
              getTestElement: () => SY,
              clean(SR) {
                if (SR.src) {
                  SR.removeAttribute("src");
                  try {
                    SR.load();
                  } catch (Sa) {}
                }
              },
              recycle(SR) {
                if (SR && !Sx.some((Sa) => Sa === SR)) {
                  this.clean(SR);
                  Sx.push(SR);
                }
              },
              syncVolume(SR) {
                const Sa = Math.min(Math.max(0, SR / 100), 1);
                SA.forEach((SV) => {
                  SV.volume = Sa;
                });
              },
              syncMute(SR) {
                SA.forEach((Sa) => {
                  Sa.muted = SR;
                });
              },
            };
          },
      });
      var S9 = S8(658);
      const SS = (Sz) => {
        if (!Sz.src) {
          Sz.load();
        }
      };
      const SX = (Sz) => {
        const SA = document.createElement("video");
        SA.className = "jw-video jw-reset";
        SA.setAttribute("tabindex", "-1");
        SA.setAttribute("disableRemotePlayback", "");
        SA.setAttribute("webkit-playsinline", "");
        SA.setAttribute("playsinline", "");
        if (Sz) {
          Object.keys(Sz).forEach((Sx) => {
            SA.setAttribute(Sx, Sz[Sx]);
          });
        }
        return SA;
      };
    },
    658: (S6, S7, S8) => {
      "use strict";

      S8.d(S7, {
        HB: () => SX,
        Jx: () => S9,
        l_: () => SS,
      });
      const S9 = 4;
      const SS = 5;
      const SX = 1;
    },
    4609: (S6, S7, S8) => {
      "use strict";

      S8.d(S7, {
        Z: () =>
          function (S9, SS) {
            return Object.assign({}, SS, {
              prime() {
                if (!S9.src) {
                  S9.load();
                }
              },
              getPrimedElement: () => S9,
              clean() {
                SS.clean(S9);
              },
              recycle() {
                SS.clean(S9);
              },
            });
          },
      });
    },
    6528: (S6, S7, S8) => {
      "use strict";

      S8.d(S7, {
        Z: () => Sx,
      });
      var S9 = S8(1643);
      var SS = S8(1384);
      function SX() {}
      const Sz = () => false;
      const SA = {
        name: "default",
      };
      const Sx = {
        supports: Sz,
        play: SX,
        pause: SX,
        preload: SX,
        load: SX,
        stop: SX,
        volume: SX,
        mute: SX,
        seek: SX,
        resize: SX,
        remove: SX,
        destroy: SX,
        setVisibility: SX,
        setFullscreen(SO) {
          return (0, SS.CX)(this, SO);
        },
        getFullscreen: Sz,
        supportsFullscreen: Sz,
        getContainer: SX,
        setContainer: SX,
        getName: () => SA,
        getQualityLevels: SX,
        getCurrentQuality: SX,
        setCurrentQuality: SX,
        getAudioTracks: SX,
        getCurrentAudioTrack: SX,
        setCurrentAudioTrack: SX,
        getSeekRange() {
          return {
            start: 0,
            end: this.getDuration(),
          };
        },
        setPlaybackRate: SX,
        getPlaybackRate: () => 1,
        getBandwidthEstimate: () => null,
        getLiveLatency: () => null,
        attachMedia: SX,
        detachMedia: SX,
        init: SX,
        setState(SO) {
          this.state = SO;
          this.trigger(S9.uc, {
            newstate: SO,
          });
        },
        sendMediaType(SO) {
          var { type: SO, mimeType: SY } = SO[0];
          var SO =
            SO === "aac" ||
            SO === "mp3" ||
            SO === "mpeg" ||
            (SY && SY.indexOf("audio/") === 0);
          this.trigger(S9.oZ, {
            mediaType: SO ? "audio" : "video",
          });
        },
        getDuration: () => 0,
        trigger: SX,
      };
    },
    1628: (S6, S7, S8) => {
      "use strict";

      S8.d(S7, {
        V: () => SS,
      });
      var S9 = S8(8348);
      const SS = (SX) =>
        SX.type === "hls" && S9.OS.android
          ? SX.androidhls !== false &&
            !S9.Browser.firefox &&
            parseFloat(S9.OS.version.version || "0") >= 4.4
          : null;
    },
    12: (S6, S7, S8) => {
      "use strict";

      S8.d(S7, {
        U: () => S9,
      });
      const S9 = {};
    },
    670: (S6, S7, S8) => {
      "use strict";

      S8.d(S7, {
        Z: () =>
          function (SA) {
            var Sx = SA.getName().name;
            if (!S9.U[Sx]) {
              if (
                !(0, Sz.sE)(
                  SS.B,
                  (0, Sz.wB)({
                    name: Sx,
                  })
                )
              ) {
                if (!(0, Sz.mf)(SA.supports)) {
                  throw new Error(
                    "Tried to register a provider with an invalid object"
                  );
                }
                SS.B.unshift({
                  name: Sx,
                  supports: SA.supports,
                });
              }
              (0, Sz.ce)(SA.prototype, SX.Z);
              S9.U[Sx] = SA;
            }
          },
      });
      var S9 = S8(12);
      var SS = S8(2963);
      var SX = S8(6528);
      var Sz = S8(6042);
      S8(328);
    },
    6593: (S6, S7, S8) => {
      "use strict";

      S8.d(S7, {
        B: () => Sx,
        H: () => SA,
      });
      var S9 = S8(1628);
      var SS = S8(7034);
      var SX = S8(9025);
      const Sz = {
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
        hls: "application/vnd.apple.mpegurl",
      };
      const SA = (SO) => {
        if (!SX.Z || !SX.Z.canPlayType) {
          return false;
        }
        if ((0, S9.V)(SO) === false) {
          return false;
        }
        var SY = SO.file;
        var Sp = SO.type;
        if ((0, SS.isRtmp)(SY, Sp)) {
          return false;
        }
        let SE = SO.mimeType || Sz[Sp];
        return (
          !!SE &&
          ((SY = SO.mediaTypes) != null &&
            SY.length &&
            (SE = [SE].concat(SY.slice()).join("; ")),
          Boolean(SX.Z.canPlayType(SE)))
        );
      };
      const Sx = [
        {
          name: "html5",
          supports: SA,
        },
      ];
    },
    1384: (S6, S7, S8) => {
      "use strict";

      S8.d(S7, {
        CX: () => SO,
        IP: () => Sp,
        If: () => Sx,
        Nm: () => SY,
      });
      var S9 = S8(1643);
      let SS;
      let SX;
      let Sz = false;
      function SA(SE, SG, SR) {
        Sz = SR;
        SE.trigger(S9.h7, {
          target: SG.target,
          jwstate: SR,
        });
      }
      const Sx = () => Sz;
      const SO = function (SE, SG) {
        if ((SG = Boolean(SG))) {
          try {
            const Sa =
              SE.video.webkitEnterFullscreen || SE.video.webkitEnterFullScreen;
            if (Sa) {
              Sa.apply(SE.video);
            }
          } catch (SV) {
            return false;
          }
          return SE.getFullscreen();
        }
        var SR = SE.video.webkitExitFullscreen || SE.video.webkitExitFullScreen;
        if (SR) {
          SR.apply(SE.video);
        }
        return SG;
      };
      const SY = function (SE, SG) {
        SS = (SR) => SA(SE, SR, true);
        SX = (SR) => SA(SE, SR, false);
        SG.addEventListener("webkitbeginfullscreen", SS);
        SG.addEventListener("webkitendfullscreen", SX);
      };
      const Sp = (SE) => {
        SE.removeEventListener("webkitbeginfullscreen", SS);
        SE.removeEventListener("webkitendfullscreen", SX);
      };
    },
    6875: (S6, S7, S8) => {
      "use strict";

      S8.d(S7, {
        Z: () => S9,
      });
      const S9 =
        "hidden" in document
          ? function () {
              return !document.hidden;
            }
          : "webkitHidden" in document
          ? function () {
              return !document.webkitHidden;
            }
          : function () {
              return true;
            };
    },
    6886: (S6, S7, S8) => {
      "use strict";

      S8.d(S7, {
        E: () => SA,
        h: () => SE,
      });
      var S9 = S8(9888);
      var SS = S8(7034);
      var SX = S8(4446);
      function Sz() {}
      const SA = (SG) => {
        SG.onload = null;
        SG.onprogress = null;
        SG.onreadystatechange = null;
        SG.onerror = null;
        if ("abort" in SG) {
          SG.abort();
        }
      };
      const Sx = (SG, SR, Sa, SV) => {
        SG.onerror(SR, SG.url, SG.xhr, new SX.rG(SR, Sa, SV));
      };
      const SO = (SG, SR, Sa) => {
        var SV = SR.documentElement;
        if (
          !Sa.requireValidXML ||
          (SV.nodeName !== "parsererror" &&
            !SV.getElementsByTagName("parsererror").length)
        ) {
          if (!SG.responseXML) {
            SG = Object.assign({}, SG, {
              responseXML: SR,
            });
          }
          return Sa.oncomplete(SG);
        }
        Sx(Sa, SX.ul, 601);
      };
      const SY = (SG) =>
        function (SR) {
          SR = SR.currentTarget || SG.xhr;
          clearTimeout(SG.timeoutId);
          if (SG.responseType) {
            if (SG.responseType === "json") {
              var Sa = SR;
              var SV = SG;
              if (
                !Sa.response ||
                (typeof Sa.response == "string" &&
                  Sa.responseText.substr(1) !== '"')
              ) {
                try {
                  Sa = Object.assign({}, Sa, {
                    response: JSON.parse(Sa.responseText),
                  });
                } catch (Sq) {
                  Sx(SV, SX.ul, 611, Sq);
                  return;
                }
              }
              return SV.oncomplete(Sa);
              return;
            }
          } else {
            let SI;
            let SH = SR.responseXML;
            if (SH) {
              try {
                SI = SH.firstChild;
              } catch (SU) {}
            }
            if (SH && SI) {
              return SO(SR, SH, SG);
            }
            if (
              SG.useDomParser &&
              SR.responseText &&
              !SH &&
              (SH = (0, S9.parseXML)(SR.responseText)) != null &&
              SH.firstChild
            ) {
              return SO(SR, SH, SG);
            }
            if (SG.requireValidXML) {
              Sx(SG, SX.ul, 602);
              return;
            }
          }
          SG.oncomplete(SR);
        };
      let Sp;
      const SE = (SG, SR, Sa, SV) => {
        var Sq;
        let SI;
        if (SG === Object(SG)) {
          SG = (SV = SG).url;
        }
        const SH = Object.assign(
          {
            xhr: null,
            url: SG,
            withCredentials: false,
            retryWithoutCredentials: false,
            timeout: 60000,
            timeoutId: -1,
            oncomplete: SR || Sz,
            onerror: Sa || Sz,
            mimeType: SV && !SV.responseType ? "text/xml" : "",
            requireValidXML: false,
            responseType: SV != null && SV.plainText ? "text" : "",
            useDomParser: false,
            requestFilter: null,
          },
          SV
        );
        const SU = Sp("Error loading file", SH);
        if ("XMLHttpRequest" in window) {
          SI = SH.xhr = SH.xhr || new window.XMLHttpRequest();
          if (typeof SH.requestFilter == "function") {
            let Sd;
            try {
              Sd = SH.requestFilter({
                url: SG,
                xhr: SI,
              });
            } catch (SW) {
              SU(SW, 5);
              return SI;
            }
            if (Sd && "open" in Sd && "send" in Sd) {
              SI = SH.xhr = Sd;
            }
          }
          Sq = SH;
          SI.onreadystatechange = function (Sg) {
            var Sh = Sg.currentTarget || Sq.xhr;
            if (Sh.readyState === 4) {
              clearTimeout(Sq.timeoutId);
              Sh = Sh.status;
              if (Sh < 400) {
                if (Sh === 200) {
                  return SY(Sq)(Sg);
                } else {
                  if (
                    Sh === 0 &&
                    (0, SS.isFileProtocol)() &&
                    !/^[a-z][a-z0-9+.-]*:/.test(Sq.url)
                  ) {
                    Sx(Sq, SX.ul, 7);
                  }
                  return;
                }
              }
              Sx(Sq, SX.ul, Sh < 600 ? Sh : 6);
            }
          };
          SI.onerror = SU;
          if ("overrideMimeType" in SI) {
            if (SH.mimeType) {
              SI.overrideMimeType(SH.mimeType);
            }
          } else {
            SH.useDomParser = true;
          }
          try {
            SG = SG.replace(/#.*$/, "");
            SI.open("GET", SG, true);
          } catch (Sg) {
            SU(Sg, 3);
            return SI;
          }
          if (SH.responseType) {
            try {
              SI.responseType = SH.responseType;
            } catch (Sh) {}
          }
          if (SH.timeout) {
            SH.timeoutId = setTimeout(function () {
              SA(SI);
              Sx(SH, SX.ud, 1);
            }, SH.timeout);
            SI.onabort = function () {
              clearTimeout(SH.timeoutId);
            };
          }
          try {
            if (SH.withCredentials && "withCredentials" in SI) {
              SI.withCredentials = true;
            }
            SI.send();
          } catch (SD) {
            SU(SD, 4);
          }
          return SI;
        }
        Sx(SH, SX.ud, 2);
      };
      Sp = (SG, SR) =>
        function (Sa, SV) {
          var Sq = Sa.currentTarget || SR.xhr;
          clearTimeout(SR.timeoutId);
          if (SR.retryWithoutCredentials && SR.xhr.withCredentials) {
            SA(Sq);
            const SI = Object.assign({}, SR, {
              xhr: null,
              withCredentials: false,
              retryWithoutCredentials: false,
            });
            SE(SI);
          } else {
            if (!SV && Sq.status >= 400 && Sq.status < 600) {
              SV = Sq.status;
            }
            Sx(SR, SV ? SX.ul : SX.ud, SV || 6, Sa);
          }
        };
    },
    328: (S6, S7, S8) => {
      "use strict";

      S8.d(S7, {
        IH: () => SO,
        S1: () => SY,
        X$: () => Sp,
        ZP: () => SA,
        on: () => Sx,
        wj: () => SE,
      });
      function S9(SG, SR) {
        if (SG == null) {
          throw new TypeError("Cannot convert undefined or null to object");
        }
        return Object.prototype.hasOwnProperty.call(Object(SG), SR);
      }
      const SS = (SG, SR, Sa, SV) => {
        let Sq = -1;
        const SI = SG.length;
        while (++Sq < SI) {
          const SH = SG[Sq];
          if (SV) {
            try {
              SH.callback.apply(SH.context || Sa, SR);
            } catch (SU) {
              console.log('Error in "' + SV + '" event handler:', SU);
            }
          } else {
            SH.callback.apply(SH.context || Sa, SR);
          }
        }
      };
      const SX = /\s+/;
      const Sz = (SG, SR, Sa, SV) => {
        if (Sa) {
          if (typeof Sa == "object") {
            for (const Sq in Sa) {
              if (S9(Sa, Sq)) {
                SG[SR].apply(SG, [Sq, Sa[Sq]].concat(SV));
              }
            }
            return false;
          }
          if (SX.test(Sa)) {
            const SI = Sa.split(SX);
            for (let SH = 0, SU = SI.length; SH < SU; SH++) {
              SG[SR].apply(SG, [SI[SH]].concat(SV));
            }
            return false;
          }
        }
        return true;
      };
      class SA {
        on(SG, SR, Sa) {
          if (Sz(this, "on", SG, [SR, Sa]) && SR) {
            ((this._events ||= {})[SG] ||= []).push({
              callback: SR,
              context: Sa,
            });
          }
          return this;
        }
        once(SG, SR, Sa) {
          if (!Sz(this, "once", SG, [SR, Sa]) || !SR) {
            return this;
          }
          let SV = 0;
          function Sq() {
            if (!SV++) {
              SI.off(SG, Sq);
              SR.apply(this, arguments);
            }
          }
          const SI = this;
          Sq._callback = SR;
          return this.on(SG, Sq, Sa);
        }
        off(SG, SR, Sa) {
          if (this._events && Sz(this, "off", SG, [SR, Sa])) {
            if (SG || SR || Sa) {
              const SI = SG ? [SG] : Object.keys(this._events);
              for (let SH = 0, SU = SI.length; SH < SU; SH++) {
                SG = SI[SH];
                var SV = this._events[SG];
                if (SV) {
                  const Sd = (this._events[SG] = []);
                  if (SR || Sa) {
                    for (let SW = 0, Sg = SV.length; SW < Sg; SW++) {
                      var Sq = SV[SW];
                      if (
                        (SR &&
                          SR !== Sq.callback &&
                          SR !== Sq.callback._callback) ||
                        (Sa && Sa !== Sq.context)
                      ) {
                        Sd.push(Sq);
                      }
                    }
                  }
                  if (!Sd.length) {
                    delete this._events[SG];
                  }
                }
              }
            } else {
              delete this._events;
            }
          }
          return this;
        }
        trigger(SG, ...SR) {
          var Sa;
          if (
            this._events &&
            Sz(this, "trigger", SG, SR) &&
            ((SG = this._events[SG]),
            (Sa = this._events.all),
            SG && SS(SG, SR, this),
            Sa)
          ) {
            SS(Sa, arguments, this);
          }
          return this;
        }
        triggerSafe(SG, ...SR) {
          var Sa;
          var SV;
          if (
            this._events &&
            Sz(this, "trigger", SG, SR) &&
            ((Sa = this._events[SG]),
            (SV = this._events.all),
            Sa && SS(Sa, SR, this, SG),
            SV)
          ) {
            SS(SV, arguments, this, SG);
          }
          return this;
        }
      }
      const Sx = SA.prototype.on;
      const SO = SA.prototype.once;
      const SY = SA.prototype.off;
      const Sp = SA.prototype.trigger;
      const SE = SA.prototype.triggerSafe;
      SA.on = Sx;
      SA.once = SO;
      SA.off = SY;
      SA.trigger = Sp;
    },
    2268: (S6, S7, S8) => {
      "use strict";

      S8.d(S7, {
        A: () => Sp,
        DF: () => SO,
        Dt: () => SI,
        G6: () => SV,
        NO: () => SW,
        O7: () => SH,
        Q6: () => SG,
        cL: () => Sd,
        dI: () => Sg,
        gn: () => Sq,
        i7: () => SR,
        id: () => Sx,
        pZ: () => SX,
        tq: () => SU,
        un: () => SY,
        w1: () => Sa,
        xb: () => Sz,
        yS: () => SE,
        zc: () => SA,
      });
      const S9 = (Sh) => navigator.userAgent.match(Sh) !== null;
      const SS = () =>
        navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1;
      const SX = () => S9(/firefox\//i);
      const Sz = () => S9(/iP(hone|od)/i);
      const SA = () => S9(/iPad/i) || SS();
      const Sx = () => S9(/Macintosh/i) && !SS();
      const SO = () => S9(/FBAV/i);
      const SY = () => S9(/\sEdge?\/\d+/i);
      const Sp = () => S9(/msie/i);
      const SE = () => S9(/SMART-TV/);
      const SG = () => SE() && !S9(/SamsungBrowser/);
      const SR = () =>
        S9(/\s(?:(?:Headless)?Chrome|CriOS)\//i) && !SY() && !S9(/UCBrowser/i);
      const Sa = () =>
        !S9(/\sEdg\/\d+/i) && (SY() || S9(/trident\/.+rv:\s*11/i) || Sp());
      const SV = () =>
        S9(/safari/i) &&
        !S9(/(?:Chrome|CriOS|chromium|android|phantom)/i) &&
        !SE();
      const Sq = () => S9(/iP(hone|ad|od)/i) || SS();
      const SI = function () {
        if (typeof SI.mock_ == "boolean") {
          return SI.mock_;
        } else {
          return S9(/Android/i) && !S9(/Windows Phone/i);
        }
      };
      const SH = () =>
        (!S9(/chrome\/[123456789]/i) || !!S9(/chrome\/18/i) || !!SX()) && SI();
      SI.mock_ = null;
      const SU = () => Sq() || SI() || S9(/Windows Phone/i);
      const Sd = function () {
        if (typeof Sd.mock_ == "boolean") {
          return Sd.mock_;
        }
        try {
          return window.self !== window.top;
        } catch (Sh) {
          return true;
        }
      };
      Sd.mock_ = null;
      const SW = () => false;
      const Sg = () => 0;
    },
    8381: (S6, S7, S8) => {
      "use strict";

      S8.d(S7, {
        $W: () => Sz,
        Mf: () => Sx,
        T2: () => SO,
        _b: () => SA,
      });
      var S9 = S8(8518);
      var SS = S8(2557);
      var SX = S8(4446);
      const Sz = function (SY, Sp) {
        const SE = [];
        if (SY && SY.timestamps && SY.timestamps.length) {
          const SG = SY.timestamps.sort((SR, Sa) => SR.begin - Sa.begin);
          SG.forEach((SR, Sa) => {
            var SV = ((SH, SU = "en") => {
              let Sd = (0, S9.G3)();
              var SW = Object.keys(SH.title);
              var Sg = SW[0];
              for (; !SH.title[Sd]; ) {
                const Sh = SW.find(
                  (
                    (Su) => (Sr) =>
                      Sr.indexOf(Su) === 0
                  )(Sd)
                );
                if (Sh) {
                  Sd = Sh;
                  break;
                }
                const SD = Sd.lastIndexOf("-");
                if (SD <= 0) {
                  Sd = null;
                  break;
                }
                Sd = Sd.slice(0, SD);
              }
              return Sd || (SW.indexOf(SU) >= 0 ? SU : Sg);
            })(SR, SY.defaultLanguage);
            var SV = SR.title[SV];
            var Sq = SR.time;
            var SR = SR.image;
            let SI = Sp;
            Sq = {
              begin: Sq,
              end: (SI = Sa + 1 < SG.length ? SG[Sa + 1].time : SI),
              text: SV,
              cueType: "chapters",
            };
            if (SR) {
              Sq.image = SR;
            }
            SE.push(Sq);
          });
        }
        return SE;
      };
      const SA = function (SY, Sp) {
        const SE = (0, S9.G3)();
        const SG = SY.reduce(function (SR, Sa) {
          var SV;
          if (!Sa || !Sa.cueType || Sa.cueType === "chapters") {
            (SV = new SS.u({
              time: Sa.begin,
              image: Sa.image,
            })).addTitle(SE, Sa.text);
            SR.push(SV);
          }
          return SR;
        }, []);
        if (Sp) {
          Sp.timestamps = SG;
          return Sp;
        } else {
          return new SS.t(SE, SG);
        }
      };
      const Sx = function (SY, Sp) {
        if (typeof SY != "number" || SY < 0 || !Sp || !Sp.length) {
          return null;
        }
        let SE = null;
        for (let SR = 0; SR < Sp.length; SR++) {
          var SG = Sp[SR];
          if (SG.time <= SY) {
            if (!SE || SG.time > SE.time) {
              SE = SG;
            }
          }
        }
        return SE;
      };
      const SO = function (SY, Sp) {
        let SE = true;
        SY.forEach((SG) => {
          if (
            !!SG &&
            (!SG.defaultLanguage ||
              !SG.timestamps ||
              !!SG.timestamps.some(
                (SR) => !SR.title || SR.time === null || SR.time === undefined
              ))
          ) {
            SE = false;
          }
        });
        return Sp(SE ? null : (0, SX.l9)(new Error(), SX.aD));
      };
    },
    974: (S6, S7, S8) => {
      "use strict";

      S8.d(S7, {
        HY: () => Sp,
        iv: () => Sx,
        oB: () => SA,
        oI: () => Sz,
        vs: () => SO,
      });
      function S9(SE, SG) {
        if (SE == null) {
          throw new TypeError("Cannot convert undefined or null to object");
        }
        return Object.prototype.hasOwnProperty.call(Object(SE), SG);
      }
      var SS = S8(2957);
      var S7 = S8(9563);
      var SX = S8.n(S7);
      const Sz = SX().clear;
      const SA = (SE, SG) => {
        if (SE != null) {
          let SH;
          if (SE.length === undefined) {
            SE = [SE];
          }
          var SR;
          var Sa;
          var SV = {};
          for (SH in SG) {
            if (S9(SG, SH)) {
              SR = SH;
              Sa = SG[SH];
              SV[SH] =
                Sa === "" || Sa == null
                  ? ""
                  : typeof Sa == "string" && isNaN(Sa)
                  ? /png|gif|jpe?g/i.test(Sa) && Sa.indexOf("url") < 0
                    ? "url(" + Sa + ")"
                    : Sa
                  : Sa === 0 || SR === "z-index" || SR === "opacity"
                  ? "" + Sa
                  : /color/i.test(SR)
                  ? "#" + (0, SS.vk)(Sa.toString(16).replace(/^0x/i, ""), 6)
                  : Math.ceil(Sa) + "px";
            }
          }
          for (let SU = 0; SU < SE.length; SU++) {
            var Sq;
            var SI = SE[SU];
            if (SI != null) {
              for (SH in SV) {
                if (
                  S9(SV, SH) &&
                  ((Sq = ((Sd) => {
                    Sd = Sd.split("-");
                    for (let SW = 1; SW < Sd.length; SW++) {
                      Sd[SW] = Sd[SW].charAt(0).toUpperCase() + Sd[SW].slice(1);
                    }
                    return Sd.join("");
                  })(SH)),
                  SI.style[Sq] !== SV[SH])
                ) {
                  SI.style[Sq] = SV[SH];
                }
              }
            }
          }
        }
      };
      const Sx = (SE, SG, SR, Sa) => {
        SR = SR || "all-players";
        let SV = "";
        if (typeof SG == "object") {
          const Sq = document.createElement("div");
          SA(Sq, SG);
          let SI = Sq.style.cssText;
          if (S9(SG, "content")) {
            SI = SI && SI + ' content: "' + SG.content + '";';
          }
          if (Sa) {
            SI = SI && SI.replace(/;/g, " !important;");
          }
          SV = "{" + SI + "}";
        } else if (typeof SG == "string") {
          SV = SG;
        }
        if (SV !== "" && SV !== "{}") {
          SX().style([[SE, SE + SV]], SR);
        } else {
          SX().clear(SR, SE);
        }
      };
      const SO = (SE, SG) => {
        SA(SE, {
          transform: SG,
        });
      };
      let SY;
      const Sp = (SE, SG) => {
        let SR = "rgb";
        var Sa = SG !== undefined && SG !== 100;
        if (Sa) {
          SR += "a";
        }
        if (!SY) {
          const SV = document.createElement("canvas");
          SV.height = 1;
          SV.width = 1;
          SY = SV.getContext("2d", {
            willReadFrequently: true,
          });
        }
        if (SE) {
          if (!isNaN(parseInt(SE, 16))) {
            SE = "#" + SE;
          }
        } else {
          SE = "#000000";
        }
        SY.clearRect(0, 0, 1, 1);
        SY.fillStyle = SE;
        SY.fillRect(0, 0, 1, 1);
        SE = SY.getImageData(0, 0, 1, 1).data;
        SR += "(" + SE[0] + ", " + SE[1] + ", " + SE[2];
        if (Sa) {
          SR += ", " + SG / 100;
        }
        return SR + ")";
      };
    },
    5004: (S6, S7, S8) => {
      "use strict";

      S8.d(S7, {
        z: () => S9,
      });
      const S9 =
        Date.now ||
        function () {
          return new Date().getTime();
        };
    },
    2799: (S6, S7, S8) => {
      "use strict";

      S8.d(S7, {
        A8: () => SM,
        AH: () => Ss,
        EU: () => Sa,
        FK: () => Sq,
        IV: () => SW,
        L_: () => Sg,
        P$: () => SD,
        SH: () => SQ,
        UM: () => Se,
        Ww: () => Sm,
        az: () => SR,
        bJ: () => SG,
        cS: () => Sr,
        cn: () => Sd,
        gB: () => SE,
        i3: () => SL,
        kq: () => Su,
        nG: () => So,
        nh: () => SV,
        oH: () => SY,
        og: () => Sh,
        pv: () => SO,
        s1: () => SU,
      });
      var S9 = S8(2957);
      var SS = S8(6042);
      var SX = S8(8348);
      const Sz = window.DOMParser;
      let SA;
      let Sx = true;
      const SO = (ST, Sk) => ST.classList.contains(Sk);
      const SY = (ST) => {
        var Sk = ST.querySelectorAll("script,object,iframe,meta");
        for (let Sl = Sk.length; Sl--; ) {
          var SF = Sk[Sl];
          SF.parentNode.removeChild(SF);
        }
        return ST;
      };
      const Sp =
        /^((((https?):\/\/)|(mailto:))(%[0-9A-Fa-f]{2}|[-()_.!~*';/?:@&=+$,A-Za-z0-9])+)([).!';/?:,][[:blank:|:blank:]])?$/;
      const SE = (ST) => {
        var Sk = ST.attributes;
        for (let St = Sk.length; St--; ) {
          var SF;
          var Sl = Sk[St].name;
          if (/^on/.test(Sl)) {
            ST.removeAttribute(Sl);
          }
          if (/href/.test(Sl)) {
            SF = Sk[St].value;
            if (!!/javascript:|javascript&colon;/.test(SF) || !Sp.test(SF)) {
              ST.removeAttribute(Sl);
              console.warn("Invalid or unsafe URL");
            }
          }
        }
        return ST;
      };
      const SG = (ST) => {
        ST = ST;
        if (!SA) {
          SA = new Sz();
          Sx = (() => {
            try {
              if (SA.parseFromString("", "text/html")) {
                return true;
              }
            } catch (St) {}
            return false;
          })();
        }
        const Sk = (
          Sx
            ? SA.parseFromString(ST, "text/html")
            : ((SF = document.implementation.createHTMLDocument("")),
              ST.toLowerCase().indexOf("<!doctype") > -1
                ? (SF.documentElement.innerHTML = ST)
                : (SF.body.innerHTML = ST),
              SF)
        ).body;
        SY(Sk);
        var SF;
        var Sl = Sk.querySelectorAll("*");
        for (let St = Sl.length; St--; ) {
          const Sw = Sl[St];
          SE(Sw);
        }
        return Sk;
      };
      const SR = (ST) => SG(ST).firstChild;
      const Sa = (ST) => {
        while (ST.firstChild) {
          ST.removeChild(ST.firstChild);
        }
      };
      const SV = (ST, Sk) => {
        Sa(ST);
        if (Sk) {
          var SF = document.createDocumentFragment();
          var Sl = SG(Sk).childNodes;
          for (let St = 0; St < Sl.length; St++) {
            SF.appendChild(Sl[St].cloneNode(true));
          }
          ST.appendChild(SF);
        }
      };
      const Sq = (ST) => ST + (ST.toString().indexOf("%") > 0 ? "" : "px");
      const SI = (ST) =>
        (0, SS.HD)(ST.className) ? ST.className.split(" ") : [];
      const SH = (ST, Sk) => {
        Sk = (0, S9.fy)(Sk);
        if (ST.className !== Sk) {
          ST.className = Sk;
        }
      };
      const SU = (ST) => ST.classList || SI(ST);
      const Sd = (ST, Sk) => {
        const SF = SI(ST);
        (Array.isArray(Sk) ? Sk : Sk.split(" ")).forEach(function (Sl) {
          if (!(0, SS.r3)(SF, Sl)) {
            SF.push(Sl);
          }
        });
        SH(ST, SF.join(" "));
      };
      const SW = (ST, Sk) => {
        var SF = SI(ST);
        var Sk = Array.isArray(Sk) ? Sk : Sk.split(" ");
        SH(ST, (0, SS.e5)(SF, Sk).join(" "));
      };
      const Sg = (ST, Sk, SF) => {
        let Sl = ST.className || "";
        if (Sk.test(Sl)) {
          Sl = Sl.replace(Sk, SF);
        } else if (SF) {
          Sl += " " + SF;
        }
        SH(ST, Sl);
      };
      const Sh = (ST, Sk, SF) => {
        var Sl = SO(ST, Sk);
        if ((SF = (0, SS.jn)(SF) ? SF : !Sl) !== Sl) {
          (SF ? Sd : SW)(ST, Sk);
        }
      };
      const SD = (ST, Sk, SF) => {
        ST.setAttribute(Sk, SF);
      };
      const Su = (ST) => {
        var Sk = document.createElement("link");
        Sk.rel = "stylesheet";
        Sk.href = ST;
        document.getElementsByTagName("head")[0].appendChild(Sk);
      };
      const Sr = (ST) => {
        if (ST) {
          Sa(ST);
        }
      };
      const SM = (ST) => {
        var Sk;
        var SF;
        var Sl = {
          left: 0,
          right: 0,
          width: 0,
          height: 0,
          top: 0,
          bottom: 0,
        };
        if (
          ST &&
          document.body.contains(ST) &&
          ((ST = ST.getBoundingClientRect()),
          (Sk = window.pageYOffset),
          (SF = window.pageXOffset),
          ST.width || ST.height || ST.left || ST.top)
        ) {
          Sl.left = ST.left + SF;
          Sl.right = ST.right + SF;
          Sl.top = ST.top + Sk;
          Sl.bottom = ST.bottom + Sk;
          Sl.width = ST.right - ST.left;
          Sl.height = ST.bottom - ST.top;
        }
        return Sl;
      };
      const SQ = (ST, Sk) => {
        ST.insertBefore(Sk, ST.firstChild);
      };
      const Ss = (ST) => ST.nextElementSibling;
      const SL = (ST) => ST.previousElementSibling;
      const So = (ST, Sk, SF = {}, Sl = document) => {
        if (Sp.test(ST)) {
          let St = Sl.createElement("a");
          St.href = ST;
          St.target = Sk;
          St = SE(Object.assign(St, SF));
          if (SX.Browser.firefox) {
            St.dispatchEvent(
              new MouseEvent("click", {
                bubbles: true,
                cancelable: true,
                view: window,
              })
            );
          } else {
            St.click();
          }
        }
      };
      const Se = () => {
        var ST = window.screen.orientation;
        return (
          (!!ST &&
            (ST.type === "landscape-primary" ||
              ST.type === "landscape-secondary")) ||
          window.orientation === 90 ||
          window.orientation === -90
        );
      };
      const Sm = (ST) => {
        ST = ST;
        (Sk = document.createElement("textarea")).innerHTML = ST;
        return Sk.value
          .replace(/&|<|>|"|''/gm, function (SF) {
            return "&#" + SF.charCodeAt(0) + ";";
          })
          .replace(
            /&#60;(\/?)(b|strong|i|em|p|br|ul|ol|li|h.)&#62;/gim,
            "<$1$2>"
          );
        var Sk;
      };
    },
    4429: (S6, S7, S8) => {
      "use strict";

      S8.d(S7, {
        Z: () => SV,
      });
      var S7 = S8(1569);
      var S9 = S8(7034);
      var SS = S8(9888);
      var SX = S8(2957);
      var Sz = S8(7411);
      var SA = S8(4742);
      function Sx(Sq, SI) {
        this.name = Sq;
        this.message = SI.message || SI.toString();
        this.error = SI;
      }
      var SO = S8(6042);
      var SY = S8(2268);
      var Sp = S8(2799);
      var SE = S8(974);
      var SG = S8(6886);
      var SR = S8(1261);
      var Sa = S8(5499);
      var S8 = S8(6234);
      const SV = Object.assign({}, SS, S9, S7, {
        addClass: Sp.cn,
        hasClass: Sp.pv,
        removeClass: Sp.IV,
        replaceClass: Sp.L_,
        toggleClass: Sp.og,
        classList: Sp.s1,
        styleDimension: Sp.FK,
        createElement: Sp.az,
        emptyElement: Sp.EU,
        addStyleSheet: Sp.kq,
        bounds: Sp.A8,
        openLink: Sp.nG,
        replaceInnerHtml: Sp.nh,
        css: SE.iv,
        clearCss: SE.oI,
        style: SE.oB,
        transform: SE.vs,
        getRgba: SE.HY,
        ajax: SG.h,
        crossdomain: (Sq) => {
          var SI = window.URL;
          try {
            var SH = new SI(Sq, location.origin);
            return (
              location.protocol + "//" + location.host !=
              SH.protocol + "//" + SH.host
            );
          } catch (SU) {}
          return true;
        },
        tryCatch: function (Sq, SI, SH = []) {
          if (SA.Z.debug) {
            return Sq.apply(SI || this, SH);
          }
          try {
            return Sq.apply(SI || this, SH);
          } catch (SU) {
            return new Sx(Sq.name, SU);
          }
        },
        Error: Sx,
        Timer: Sz.Z,
        log: Sa.c,
        genId: S8.B,
        between: SR.v,
        foreach: function (Sq, SI) {
          for (const SH in Sq) {
            if (
              !!(function (SU, Sd) {
                if (SU == null) {
                  throw new TypeError(
                    "Cannot convert undefined or null to object"
                  );
                }
                return Object.prototype.hasOwnProperty.call(Object(SU), Sd);
              })(Sq, SH)
            ) {
              SI(SH, Sq[SH]);
            }
          }
        },
        flashVersion: SY.dI,
        isIframe: SY.cL,
        indexOf: SO.cq,
        trim: SX.fy,
        pad: SX.vk,
        extension: SX.AO,
        hms: SX.WZ,
        seconds: SX.m9,
        prefix: SX.O4,
        suffix: SX.uA,
        noop: () => {},
      });
    },
    7543: (S6, S7, S8) => {
      "use strict";

      S8.d(S7, {
        C: () => S9,
      });
      const S9 = (SS) =>
        !!(SS = SS || window.event) &&
        Boolean(SS) &&
        /^(?:mouse|pointer|touch|gesture|click|key)/.test(SS.type);
    },
    8518: (S6, S7, S8) => {
      "use strict";

      S8.d(S7, {
        Cq: () => SR,
        Dq: () => Sg,
        G3: () => SV,
        Mh: () => SD,
        Pm: () => Sd,
        dl: () => SW,
        id: () => SG,
        q2: () => SH,
        t6: () => SI,
        tK: () => SE,
      });
      var S7 = S8(6042);
      var S9 = S8(2268);
      var SS = S8(6886);
      var SX = S8(7034);
      var Sz = S8(696);
      const SA = {};
      const Sx = {
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
        nb: "Bokm├Ñl",
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
        vo: "Volap├╝k",
        wa: "Walloon",
        wo: "Wolof",
        xh: "Xhosa",
        yi: "Yiddish",
        yo: "Yoruba",
        za: "Zhuang",
        zh: "Chinese",
        zu: "Zulu",
      };
      const SO = (0, S7.U_)(Sx);
      const SY = (Su) => Su.toLowerCase().replace("-", "_");
      const Sp = (Su) => {
        var Su = SY(Su);
        var Sr = Su.indexOf("_");
        if (Sr === -1) {
          return Su;
        } else {
          return Su.substring(0, Sr);
        }
      };
      const SE = (Su) =>
        Su
          ? Object.keys(Su).reduce((Sr, SM) => {
              Sr[SY(SM)] = Su[SM];
              return Sr;
            }, {})
          : {};
      const SG = (Su) => {
        if (Su) {
          return (Su.length !== 3 && Sx[Sp(Su)]) || Su;
        }
      };
      const SR = (Su) => SO[Su] || "";
      const Sa = (Su) => {
        Su = Su.querySelector("html");
        if (Su) {
          return Su.getAttribute("lang");
        } else {
          return null;
        }
      };
      const SV = function () {
        if (typeof SV.mock_ == "string") {
          return SV.mock_;
        }
        let Su = Sa(document);
        if (!Su && (0, S9.cL)()) {
          try {
            Su = Sa(window.top.document);
          } catch (Sr) {}
        }
        return Su || navigator.language || "en";
      };
      SV.mock_ = null;
      const Sq = [
        "ar",
        "da",
        "de",
        "el",
        "es",
        "fi",
        "fr",
        "he",
        "id",
        "it",
        "ja",
        "ko",
        "nb",
        "nl",
        "nn",
        "no",
        "oc",
        "pt",
        "ro",
        "ru",
        "sl",
        "sv",
        "th",
        "tr",
        "vi",
        "zh",
      ];
      const SI = (Su) =>
        Su.charCodeAt(0) === 8207 ||
        /^[\u0591-\u07FF\uFB1D-\uFDFD\uFE70-\uFEFC]/.test(Su);
      const SH = function (Su) {
        if (typeof SH.mock_ == "boolean") {
          return SH.mock_;
        } else {
          return Sq.indexOf(Sp(Su)) >= 0;
        }
      };
      SH.mock_ = null;
      const SU = (Su, Sr, SM) => {
        Sr = Su[SM] || Sr[SM];
        if (Sr) {
          Su[SM] = Sr;
        }
      };
      const Sd = (Su, Sr, SM) =>
        Object.assign(
          {},
          ((SQ) => {
            var {
              advertising: Ss,
              related: SL,
              sharing: So,
              abouttext: Se,
            } = SQ;
            var Sm = Object.assign({}, SQ.localization);
            if (Ss) {
              Sm.advertising = Sm.advertising || {};
              SU(Sm.advertising, Ss, "admessage");
              SU(Sm.advertising, Ss, "cuetext");
              SU(Sm.advertising, Ss, "loadingAd");
              SU(Sm.advertising, Ss, "podmessage");
              SU(Sm.advertising, Ss, "skipmessage");
              SU(Sm.advertising, Ss, "skiptext");
            }
            if (typeof Sm.related == "string") {
              Sm.related = {
                heading: Sm.related,
              };
            } else {
              Sm.related = Sm.related || {};
            }
            if (SL) {
              SU(Sm.related, SL, "autoplaymessage");
            }
            if (So) {
              Sm.sharing = Sm.sharing || {};
              SU(Sm.sharing, So, "heading");
              SU(Sm.sharing, So, "copied");
            }
            if (Se) {
              SU(Sm, SQ, "abouttext");
            }
            var Ss = Sm.close || Sm.nextUpClose;
            if (Ss) {
              Sm.close = Ss;
            }
            return Sm;
          })(Su),
          Sr[Sp(SM)],
          Sr[SY(SM)]
        );
      const SW = function (Su) {
        if (typeof SW.mock_ == "boolean") {
          return SW.mock_;
        } else {
          return (0, SX.isDeepKeyCompliant)(
            Sz.Z,
            Su,
            (Sr, SM) => typeof SM[Sr] == "string"
          );
        }
      };
      SW.mock_ = null;
      const Sg = function (Su, Sr) {
        if (typeof Sg.mock_ == "function") {
          return Sg.mock_;
        }
        let SM = SA[Sr];
        if (!SM) {
          const SQ =
            Su +
            "translations/" +
            ((Su = Sp(Sr)), /^n[bn]$/.test(Su) ? "no" : Su) +
            ".json";
          SA[Sr] = SM = new Promise((Ss, SL) => {
            (0, SS.h)({
              url: SQ,
              oncomplete: Ss,
              onerror: (So, Se, Sm, ST) => {
                SA[Sr] = null;
                SL(ST);
              },
              responseType: "json",
            });
          });
        }
        return SM;
      };
      Sg.mock_ = null;
      const Sh = (Su, Sr, SM, SQ) => {
        Su[Sr] = Object.assign({}, SM[Sr], SQ[Sr]);
      };
      const SD = (Su, Sr) => {
        var SM = Object.assign({}, Su, Sr);
        Sh(SM, "errors", Su, Sr);
        Sh(SM, "related", Su, Sr);
        Sh(SM, "sharing", Su, Sr);
        Sh(SM, "advertising", Su, Sr);
        Sh(SM, "shortcuts", Su, Sr);
        Sh(SM, "captionsStyles", Su, Sr);
        return SM;
      };
    },
    5499: (S6, S7, S8) => {
      "use strict";

      S8.d(S7, {
        c: () => S9,
      });
      const S9 =
        typeof console.log == "function" ? console.log.bind(console) : () => {};
    },
    1261: (S6, S7, S8) => {
      "use strict";

      S8.d(S7, {
        v: () => S9,
      });
      const S9 = function (SS, SX, Sz) {
        return Math.max(Math.min(SS, Sz), SX);
      };
    },
    9888: (S6, S7, S8) => {
      "use strict";

      S8.r(S7);
      S8.d(S7, {
        getAbsolutePath: () => Sz,
        isAbsolutePath: () => SX,
        parseDimension: () => SO,
        parseXML: () => SA,
        serialize: () => Sx,
        timeFormat: () => SY,
        timeFormatAria: () => Sp,
      });
      var S9 = S8(6042);
      var SS = S8(5950);
      const SX = (SE) => /^(?:(?:https?|file):)?\/\//.test(SE);
      const Sz = (SE, SG) => (0, SS.kd)(SE, SG);
      const SA = (SE) => {
        let SG = null;
        try {
          if (
            (SG = new window.DOMParser().parseFromString(
              SE,
              "text/xml"
            )).querySelector("parsererror")
          ) {
            SG = null;
          }
        } catch (SR) {}
        return SG;
      };
      const Sx = (SE) => {
        if (SE === undefined) {
          return null;
        }
        if (typeof SE == "string" && SE.length < 6) {
          var SG = SE.toLowerCase();
          if (SG === "true") {
            return true;
          }
          if (SG === "false") {
            return false;
          }
          if (!(0, S9.i2)(Number(SE)) && !(0, S9.i2)(parseFloat(SE))) {
            return Number(SE);
          }
        }
        return SE;
      };
      const SO = (SE) =>
        (0, S9.qh)(SE)
          ? SE
          : SE === ""
          ? 0
          : SE.lastIndexOf("%") > -1
          ? SE
          : parseInt(SE.replace("px", ""), 10);
      const SY = (SE, SG) => {
        if ((0, S9.i2)(SE)) {
          SE = parseInt(SE.toString(), 10);
        }
        if ((0, S9.i2)(SE) || !isFinite(SE) || (SE <= 0 && !SG)) {
          return "00:00";
        } else {
          SG = SE < 0 ? "-" : "";
          SE = Math.abs(SE);
          return (
            SG +
            ((SG = Math.floor(SE / 3600)) ? SG + ":" : "") +
            ((SG = Math.floor((SE - SG * 3600) / 60)) < 10 ? "0" : "") +
            SG +
            ":" +
            ((SG = Math.floor(SE % 60)) < 10 ? "0" : "") +
            SG
          );
        }
      };
      const Sp = (SE) => {
        var SG;
        if ((0, S9.i2)(SE)) {
          SE = parseInt(SE.toString(), 10);
        }
        if ((0, S9.i2)(SE) || !isFinite(SE) || SE <= 0) {
          return "0 seconds";
        } else {
          return (
            ((SG = Math.floor(SE / 3600))
              ? SG + (SG >= 1 ? " hour" + (SG > 1 ? "s" : "") + ", " : "")
              : "") +
            ((SG = Math.floor((SE - SG * 3600) / 60))
              ? SG + (SG >= 1 ? " minute" + (SG > 1 ? "s" : "") + ", " : "")
              : "") +
            (SG = Math.floor(SE % 60)) +
            (SG >= 1 ? " second" + (SG > 1 ? "s" : "") : "")
          );
        }
      };
    },
    1569: (S6, S7, S8) => {
      "use strict";

      S8.r(S7);
      S8.d(S7, {
        getScriptPath: () => SX,
        loadFrom: () => Sx,
        repo: () => Sz,
        versionCheck: () => SA,
      });
      var S9 = S8(6601);
      var SS = S8(7034);
      const SX = function (SO) {
        var SY = document.getElementsByTagName("script");
        for (let SG = 0; SG < SY.length; SG++) {
          var Sp = SY[SG].src;
          if (Sp) {
            var SE = Sp.lastIndexOf("/" + SO);
            if (SE >= 0) {
              return Sp.substr(0, SE + 1);
            }
          }
        }
        return "";
      };
      const Sz = function () {
        var SO = "//ssl.p.jwpcdn.com/player/v/8.33.2";
        return ((0, SS.isFileProtocol)() ? "https:" : "") + SO;
      };
      const SA = function (SO) {
        var SO = ("0" + SO).split(/\W/);
        var SY = S9.i.split(/\W/);
        var Sp = parseFloat(SO[0]);
        var SE = parseFloat(SY[0]);
        return (
          SE >= Sp &&
          (Sp !== SE || parseFloat("0" + SO[1]) <= parseFloat(SY[1]))
        );
      };
      const Sx = function () {
        return Sz();
      };
    },
    6234: (S6, S7, S8) => {
      "use strict";

      S8.d(S7, {
        B: () => SS,
        F: () => S9,
      });
      const S9 = 12;
      const SS = (SX) => {
        let Sz = "";
        while (Sz.length < SX) {
          Sz += (() => {
            try {
              var SA = window.crypto || window.msCrypto;
              if (SA != null && SA.getRandomValues) {
                return SA.getRandomValues(new Uint32Array(1))[0].toString(36);
              }
            } catch (Sx) {}
            return Math.random().toString(36).slice(2, 9);
          })();
        }
        return Sz.slice(0, SX);
      };
    },
    1776: (S6, S7, S8) => {
      "use strict";

      S8.d(S7, {
        U: () => S9,
        W: () => SS,
      });
      const S9 = window.requestAnimationFrame || ((SX) => setTimeout(SX, 17));
      const SS = window.cancelAnimationFrame || clearTimeout;
    },
    676: (S6, S7, S8) => {
      "use strict";

      S8.d(S7, {
        ZP: () => Sz,
      });
      var S7 = S8(328);
      var S9 = S8(1643);
      function SS(SA, Sx, SO) {
        const SY = this;
        let Sp = 0;
        const SE = (SR) => {
          Sp = 2;
          SY.trigger(S9.pn, SR).off();
        };
        const SG = (SR) => {
          Sp = 3;
          SY.trigger(S9.xQ, SR).off();
        };
        this.getStatus = function () {
          return Sp;
        };
        this.load = function () {
          let SR = SX[SA];
          if (Sp === 0) {
            if (SR) {
              SR.then(SG).catch(SE);
            }
            Sp = 1;
            SR = new Promise((Sa, SV) => {
              const Sq = (
                Sx
                  ? (SW) => {
                      var Sg = document.createElement("link");
                      Sg.type = "text/css";
                      Sg.rel = "stylesheet";
                      Sg.href = SW;
                      return Sg;
                    }
                  : (SW, Sg) => {
                      var Sh = document.createElement("script");
                      Sh.type = "text/javascript";
                      Sh.charset = "utf-8";
                      Sh.async = true;
                      Sh.timeout = Sg || 45000;
                      Sh.src = SW;
                      return Sh;
                    }
              )(SA, SO);
              let SI;
              function SH(SW) {
                SU();
                SE(SW);
                SV(SW);
              }
              const SU = function () {
                Sq.onerror = Sq.onload = null;
                clearTimeout(SI);
              };
              SI = setTimeout(() => {
                SH(new Error("Network timeout " + SA));
              }, 45000);
              Sq.onerror = function () {
                SH(new Error("Failed to load " + SA));
              };
              Sq.onload = function (SW) {
                SU();
                SG(SW);
                Sa(SW);
              };
              var Sd =
                document.getElementsByTagName("head")[0] ||
                document.documentElement;
              Sd.insertBefore(Sq, Sd.firstChild);
            });
            SX[SA] = SR;
          }
          return SR;
        };
      }
      const SX = {};
      Object.assign(SS.prototype, S7.ZP);
      const Sz = SS;
    },
    2957: (S6, S7, S8) => {
      "use strict";

      S8.d(S7, {
        AO: () => Sx,
        Dc: () => SA,
        O4: () => SE,
        U5: () => Sp,
        WZ: () => SO,
        fy: () => SX,
        m9: () => SY,
        uA: () => SG,
        vk: () => Sz,
        zz: () => SR,
      });
      var S9 = S8(6042);
      const SS = window.parseFloat;
      const SX = (Sa) => Sa.replace(/^\s+|\s+$/g, "");
      const Sz = (Sa, SV, Sq) => {
        Sa = "" + Sa;
        Sq = Sq || "0";
        while (Sa.length < SV) {
          Sa = Sq + Sa;
        }
        return Sa;
      };
      const SA = (Sa, SV) => {
        var Sq = Sa.attributes;
        for (let SI = 0; SI < Sq.length; SI++) {
          if (Sq[SI].name && Sq[SI].name.toLowerCase() === SV.toLowerCase()) {
            return Sq[SI].value.toString();
          }
        }
        return "";
      };
      const Sx = (Sa) => {
        var SV;
        if (Sa && Sa.substr(0, 4) !== "rtmp") {
          if ((SV = /[(,]format=(m3u8|mpd)-/i.exec(Sa))) {
            return SV[1];
          } else if (
            (SV = Sa.replace(/^.+?\.(\w+)(?:[;].*)?(?:[?#].*)?$/, "$1")) !== Sa
          ) {
            return SV.toLowerCase();
          } else if (
            (Sa = Sa.split("?")[0].split("#")[0]).lastIndexOf(".") > -1
          ) {
            return Sa.substr(Sa.lastIndexOf(".") + 1, Sa.length).toLowerCase();
          } else {
            return "";
          }
        } else {
          return "";
        }
      };
      const SO = (Sa) => {
        var SV = ((Sa / 60) | 0) % 60;
        var Sq = Sa % 60;
        return (
          Sz(((Sa / 3600) | 0).toString(), 2) +
          ":" +
          Sz(SV.toString(), 2) +
          ":" +
          Sz(Sq.toFixed(3), 6)
        );
      };
      const SY = (Sa, SV) => {
        if (!Sa) {
          return 0;
        }
        if ((0, S9.qh)(Sa)) {
          return Sa;
        }
        var Sa = Sa.replace(",", ".");
        var Sq = Sa.slice(-1);
        var SI = Sa.split(":");
        var SH = SI.length;
        let SU = 0;
        if (Sq === "s") {
          SU = SS(Sa);
        } else if (Sq === "m") {
          SU = SS(Sa) * 60;
        } else if (Sq === "h") {
          SU = SS(Sa) * 3600;
        } else if (SH > 1) {
          let Sd = SH - 1;
          if (SH === 4) {
            if (SV) {
              SU = SS(SI[Sd]) / SV;
            }
            --Sd;
          }
          SU = (SU += SS(SI[Sd])) + SS(SI[Sd - 1]) * 60;
          if (SH >= 3) {
            SU += SS(SI[Sd - 2]) * 3600;
          }
        } else {
          SU = SS(Sa);
        }
        if ((0, S9.qh)(SU)) {
          return SU;
        } else {
          return 0;
        }
      };
      const Sp = (Sa, SV, Sq) => {
        if ((0, S9.HD)(Sa) && Sa.slice(-1) === "%") {
          const SI = SS(Sa);
          if (SV && (0, S9.qh)(SV) && (0, S9.qh)(SI)) {
            return (SV * SI) / 100;
          } else {
            return null;
          }
        }
        return SY(Sa, Sq);
      };
      const SE = (Sa, SV) => Sa.map((Sq) => SV + Sq);
      const SG = (Sa, SV) => Sa.map((Sq) => Sq + SV);
      const SR = (Sa) => Boolean(Sa) && (0, S9.HD)(Sa) && Sa.slice(-1) === "%";
    },
    5882: (S6, S7, S8) => {
      "use strict";

      S8.d(S7, {
        GU: () => SU,
        ZP: () => Se,
        dO: () => Sh,
      });
      var S9 = S8(8348);
      var SS = S8(1643);
      var S7 = S8(328);
      var SX = S8(5004);
      var Sz = S8(2799);
      const SA = "ontouchstart" in window;
      const Sx = "PointerEvent" in window && !S9.OS.android;
      const SO = !Sx && (!SA || !S9.OS.mobile);
      const SY = "window";
      const Sp = "init";
      const SE = "select";
      const SG = "keydown";
      const SR = S9.Features.passiveEvents;
      const Sa = !!SR && {
        passive: true,
      };
      let SV;
      let Sq;
      const SI = (Sm, ST, Sk) => {
        const SF = Sm.el;
        const Sl = (() => {
          var { target: St, touches: Sw, changedTouches: Sj } = Sk;
          let Si;
          let SZ = Sk.pointerType;
          SZ =
            Sw || Sj
              ? ((Si = (Sw != null && Sw.length ? Sw : Sj)[0]), SZ || "touch")
              : ((Si = Sk), SZ || "mouse");
          var { pageX: Sw, pageY: Sj } = Si;
          return {
            type: ST,
            pointerType: SZ,
            pageX: Sw,
            pageY: Sj,
            sourceEvent: Sk,
            currentTarget: SF,
            target: St,
          };
        })();
        Sm.trigger(ST, Sl);
      };
      const SH = (Sm, ST, Sk) => {
        var SF = Sm.el;
        var Sl = Sk.target;
        Sm.trigger(ST, {
          type: ST,
          sourceEvent: Sk,
          currentTarget: SF,
          target: Sl,
        });
      };
      const SU = (Sm) => {
        Sm = Sm.ownerDocument || Sm;
        return Sm.defaultView || Sm.parentWindow || window;
      };
      const Sd = (Sm, ST, Sk, SF, Sl = Sa) => {
        let St = Sm.handlers[ST];
        let Sw = Sm.options[ST];
        if (!St) {
          St = Sm.handlers[ST] = {};
          Sw = Sm.options[ST] = {};
        }
        if (St[Sk]) {
          throw new Error(ST + (" " + Sk + " already registered"));
        }
        St[Sk] = SF;
        Sw[Sk] = Sl;
        Sm = Sm.el;
        ST = ST === SY ? SU(Sm) : Sm;
        if (ST) {
          ST.addEventListener(Sk, SF, Sl);
        }
      };
      const SW = (Sm) => {
        var ST = Sm.el;
        if (Sm.pointerId !== null) {
          ST.releasePointerCapture(Sm.pointerId);
          Sm.pointerId = null;
        }
      };
      const Sg = (Sm, ST) => {
        const { el: Sk, handlers: SF, options: Sl } = Sm;
        const St = ST === SY ? SU(Sk) : Sk;
        const Sw = SF[ST];
        const Sj = Sl[ST];
        if (Sw) {
          Object.keys(Sw).forEach((Si) => {
            var SZ = Sj[Si];
            if (typeof SZ == "boolean") {
              St.removeEventListener(Si, Sw[Si], SZ);
            } else {
              St.removeEventListener(Si, Sw[Si]);
            }
          });
          SF[ST] = null;
          Sl[ST] = null;
        }
      };
      const Sh = (Sm) =>
        (!!Boolean(Sm.ctrlKey) && Sm.type === "click") ||
        ("which" in Sm ? Sm.which === 3 : "button" in Sm && Sm.button === 2);
      const SD = (Sm, ST) => {
        Sq = Sq || new Se(document).on("interaction");
        if (!Sm.handlers[Sp] && !Sm.handlers[SE]) {
          const Sk = Sm.el;
          Sd(Sm, ST, "blur", () => {
            (0, Sz.IV)(Sk, "jw-tab-focus");
            Sm.clicking = false;
          });
          Sd(Sm, ST, "focus", () => {
            if (Sq.event && Sq.event.type === SG) {
              (0, Sz.cn)(Sk, "jw-tab-focus");
            }
          });
        }
      };
      const Su = (Sm, ST, Sk, SF) => {
        if (Sx) {
          Sd(Sm, ST, "pointerdown", Sk, SF);
        } else {
          if (SO) {
            Sd(Sm, ST, "mousedown", Sk, SF);
          }
          Sd(Sm, ST, "touchstart", Sk, SF);
        }
      };
      const Sr = (Sm) => {
        if (!Sm.handlers[SE]) {
          const ST = Sm.el;
          SD(Sm, SE);
          Su(Sm, SE, (Sk) => {
            var SF = Sk.target;
            if (!Sh(Sk) && (!Boolean(Sm.directSelect) || SF === ST)) {
              if (Sk.isPrimary && SF.tagName === "BUTTON") {
                SF.focus();
              }
              Sm.lastStart = (0, SX.z)();
              Sm.clicking = true;
            }
          });
          Sd(Sm, SE, "click", (Sk) => {
            var SF;
            var Sl;
            if (!Sh(Sk) && (!Boolean(Sm.directSelect) || Sk.target === ST)) {
              if ((0, SX.z)() - Sm.lastStart <= 500 || Sm.clicking !== true) {
                Sl = Sk;
                if ((SF = Sm).enableDoubleClick) {
                  if ((0, SX.z)() - SF.lastClick < 300) {
                    SI(SF, SS.P, Sl);
                    SF.lastClick = 0;
                  } else {
                    SF.lastClick = (0, SX.z)();
                  }
                }
                SI(Sm, SS.ot, Sk);
              }
              Sm.clicking = false;
            }
          });
        }
      };
      const SM = (Sm) =>
        Sm.type.indexOf("touch") === 0
          ? (Sm.originalEvent || Sm).changedTouches[0]
          : Sm;
      const SQ = (Sm) => {
        if (!Sm.handlers[Sp]) {
          const { el: ST, passive: Sk } = Sm;
          const SF = !!SR && {
            passive: Sk,
          };
          const Sl = (Sw) => {
            if (Sm.dragged) {
              SI(Sm, SS.Wp, Sw);
            } else {
              const { pageX: Si, pageY: SZ } = SM(Sw);
              const Sb = Si - Sm.startX;
              const SJ = SZ - Sm.startY;
              if (Sb * Sb + SJ * SJ > 36) {
                SI(Sm, SS.nv, Sw);
                Sm.dragged = true;
                SI(Sm, SS.Wp, Sw);
              }
            }
            var Sj;
            if (!Sk && Sw.type === "touchmove") {
              if (Sw.preventDefault) {
                Sw.preventDefault();
              }
            }
          };
          const St = (Sw) => {
            clearTimeout(SV);
            if (Sm.el && (SW(Sm), Sg(Sm, SY), Sm.dragged)) {
              Sm.dragged = false;
              SI(Sm, SS.Sv, Sw);
            }
          };
          SD(Sm, Sp);
          Su(
            Sm,
            Sp,
            (Sw) => {
              (0, Sz.IV)(ST, "jw-tab-focus");
              if (!Sh(Sw)) {
                var { target: Sj, type: Si } = Sw;
                if (!Sm.directSelect || Sj === ST) {
                  var { pageX: Sj, pageY: SZ } = SM(Sw);
                  Sm.dragged = false;
                  Sm.startX = Sj;
                  Sm.startY = SZ;
                  Sg(Sm, SY);
                  if (Si === "pointerdown" && Sw.isPrimary) {
                    if (!Sk) {
                      const Sb = Sw.pointerId;
                      Sm.pointerId = Sb;
                      ST.setPointerCapture(Sb);
                    }
                    Sd(Sm, SY, "pointermove", Sl, SF);
                    Sd(Sm, SY, "pointercancel", St);
                    Sd(Sm, SY, "pointerup", St);
                  } else if (Si === "mousedown") {
                    Sd(Sm, SY, "mousemove", Sl, SF);
                    Sd(Sm, SY, "mouseup", St);
                  } else if (Si === "touchstart") {
                    Sd(Sm, SY, "touchmove", Sl, SF);
                    Sd(Sm, SY, "touchcancel", St);
                    Sd(Sm, SY, "touchend", St);
                  }
                }
              }
            },
            SF
          );
        }
      };
      const Ss = {
        drag(Sm) {
          SQ(Sm);
        },
        dragStart(Sm) {
          SQ(Sm);
        },
        dragEnd(Sm) {
          SQ(Sm);
        },
        click(Sm) {
          Sr(Sm);
        },
        doubleClick(Sm) {
          Sm.enableDoubleClick = true;
          Sr(Sm);
        },
        longPress(Sm) {
          const ST = "longPress";
          if (S9.OS.iOS) {
            const Sk = () => {
              clearTimeout(SV);
            };
            Sd(Sm, ST, "touchstart", (SF) => {
              Sk();
              SV = setTimeout(() => {
                SI(Sm, ST, SF);
              }, 500);
            });
            Sd(Sm, ST, "touchmove", Sk);
            Sd(Sm, ST, "touchcancel", Sk);
            Sd(Sm, ST, "touchend", Sk);
          } else {
            Sm.el.oncontextmenu = (SF) => {
              SI(Sm, ST, SF);
              return false;
            };
          }
        },
        focus(Sm) {
          const ST = "focus";
          Sd(Sm, ST, ST, (Sk) => {
            SH(Sm, ST, Sk);
          });
        },
        blur(Sm) {
          const ST = "blur";
          Sd(Sm, ST, ST, (Sk) => {
            SH(Sm, ST, Sk);
          });
        },
        over(Sm) {
          if (Sx || SO) {
            Sd(Sm, SS.B1, Sx ? "pointerover" : "mouseover", (ST) => {
              if (ST.pointerType !== "touch") {
                SI(Sm, SS.B1, ST);
              }
            });
          }
        },
        out(Sm) {
          if (Sx) {
            const ST = Sm.el;
            Sd(Sm, SS.U3, "pointerout", (Sk) => {
              var SF;
              if (Sk.pointerType !== "touch" && "clientX" in Sk) {
                SF = document.elementFromPoint(Sk.clientX, Sk.clientY);
                if (!ST.contains(SF)) {
                  SI(Sm, SS.U3, Sk);
                }
              }
            });
          } else if (SO) {
            Sd(Sm, SS.U3, "mouseout", (Sk) => {
              SI(Sm, SS.U3, Sk);
            });
          }
        },
        move(Sm) {
          if (Sx || SO) {
            Sd(Sm, SS.tP, Sx ? "pointermove" : "mousemove", (ST) => {
              if (ST.pointerType !== "touch") {
                SI(Sm, SS.tP, ST);
              }
            });
          }
        },
        enter(Sm) {
          Sd(Sm, SS.K5, SG, (ST) => {
            if (ST.key === "Enter" || ST.keyCode === 13) {
              ST.stopPropagation();
              SH(Sm, SS.K5, ST);
            }
          });
        },
        keydown(Sm) {
          Sd(
            Sm,
            SG,
            SG,
            (ST) => {
              SH(Sm, SG, ST);
            },
            false
          );
        },
        gesture(Sm) {
          const ST = "gesture";
          const Sk = (SF) => SI(Sm, ST, SF);
          Sd(Sm, ST, "click", Sk);
          Sd(Sm, ST, SG, Sk);
        },
        interaction(Sm) {
          var ST = "interaction";
          var Sk = (SF) => {
            Sm.event = SF;
          };
          Sd(Sm, ST, "mousedown", Sk, true);
          Sd(Sm, ST, SG, Sk, true);
        },
        tap() {},
        doubleTap() {},
      };
      const SL = /\s+/;
      const So = (Sm) => Sm && !SL.test(Sm) && typeof Sm != "object";
      class Se extends S7.ZP {
        constructor(Sm, ST) {
          super();
          var Sk = !(ST = ST || {}).preventScrolling;
          this.directSelect = Boolean(ST.directSelect);
          this.dragged = false;
          this.enableDoubleClick = false;
          this.el = Sm;
          this.handlers = {};
          this.options = {};
          this.lastClick = 0;
          this.lastStart = 0;
          this.passive = Sk;
          this.pointerId = null;
          this.startX = 0;
          this.startY = 0;
          this.event = null;
          this.clicking = false;
        }
        on(Sm, ST, Sk) {
          if (!!So(Sm) && !this.handlers[Sm]) {
            Ss[Sm](this);
          }
          return super.on(Sm, ST, Sk);
        }
        off(Sm, ST, Sk) {
          if (So(Sm)) {
            Sg(this, Sm);
          } else if (!Sm) {
            const SF = this.handlers;
            Object.keys(SF).forEach((Sl) => {
              Sg(this, Sl);
            });
          }
          return super.off(Sm, ST, Sk);
        }
        destroy() {
          if (this.el) {
            this.off();
            if (Sx) {
              SW(this);
            }
            this.el = null;
          }
        }
      }
    },
    6042: (S6, S7, S8) => {
      "use strict";

      S8.d(S7, {
        Cb: () => X5,
        HD: () => Sw,
        Kn: () => SL,
        P2: () => XG,
        S6: () => So,
        UI: () => SZ,
        U_: () => XR,
        Yj: () => Sc,
        ZP: () => XU,
        _e: () => Xx,
        a9: () => XI,
        ar: () => XA,
        ce: () => Xa,
        cq: () => X9,
        dp: () => X1,
        e1: () => X8,
        e5: () => XO,
        ei: () => Xq,
        hX: () => Sn,
        hj: () => St,
        i2: () => Si,
        jn: () => X3,
        l7: () => XV,
        mf: () => Sl,
        o8: () => X4,
        qh: () => XH,
        r3: () => XS,
        sE: () => SP,
        u4: () => SB,
        vM: () => X6,
        wB: () => Xz,
        xV: () => X2,
        yR: () => Sf,
      });
      S7 = S8(5004);
      function S9(Xd) {
        if (!SL(Xd)) {
          return [];
        }
        if (Sr) {
          return Sr(Xd);
        }
        var XW = [];
        for (const Xg in Xd) {
          if (Ss(Xd, Xg)) {
            XW.push(Xg);
          }
        }
        return XW;
      }
      function SS(Xd, XW, ...Xg) {
        if (SM && Xd.bind === SM) {
          return SM.apply(Xd, [XW].concat(Xg));
        }
        if (Sl(Xd)) {
          return Xh;
        }
        throw new TypeError();
        function Xh(...XD) {
          if (!(this instanceof Xh)) {
            return Xd.apply(XW, Xg.concat(XD));
          }
          SJ.prototype = Xd.prototype;
          var Xu = new SJ();
          SJ.prototype = null;
          var XD = Xd.apply(Xu, Xg.concat(XD));
          if (Object(XD) === XD) {
            return XD;
          } else {
            return Xu;
          }
        }
      }
      function SX(Xd, XW, Xg) {
        XW = XW || Sf;
        let Xh = true;
        if (Xd == null) {
          return Xh;
        } else if (Sg && Xd.every === Sg) {
          return Xd.every(XW, Xg);
        } else {
          So(Xd, function (XD, Xu, Xr) {
            if (!(Xh = Xh && XW.call(Xg, XD, Xu, Xr))) {
              return Sp;
            }
          });
          return Boolean(Xh);
        }
      }
      function Sz(Xd, XW) {
        let Xg;
        return function (...Xh) {
          if (--Xd > 0) {
            Xg = XW.apply(this, Xh);
          }
          if (Xd <= 1) {
            XW = null;
          }
          return Xg;
        };
      }
      function SA(Xd) {
        if (Xd == null) {
          return Sf;
        } else if (Sl(Xd)) {
          return Xd;
        } else {
          return X5(Xd);
        }
      }
      function Sx(Xd) {
        return function (XW, Xg, Xh) {
          const XD = {};
          Xg = SA(Xg);
          So(XW, function (Xu, Xr) {
            Xr = Xg.call(Xh, Xu, Xr, XW);
            Xd(XD, Xr, Xu);
          });
          return XD;
        };
      }
      function SO(Xd, ...XW) {
        return function (...Xg) {
          let Xh = 0;
          var XD = XW.slice();
          for (let Xu = 0, Xr = XD.length; Xu < Xr; Xu++) {
            if (Ss(XD[Xu], "partial")) {
              XD[Xu] = Xg[Xh++];
            }
          }
          while (Xh < arguments.length) {
            XD.push(Xg[Xh++]);
          }
          return Xd.apply(this, XD);
        };
      }
      function SY(Xd, XW, ...Xg) {
        return setTimeout(function () {
          return Xd.apply(null, Xg);
        }, XW);
      }
      const Sp = {};
      const SE = Array.prototype;
      const SG = Object.prototype;
      const SR = Function.prototype;
      const Sa = SE.slice;
      const SV = SE.concat;
      const Sq = SG.toString;
      const SI = SG.hasOwnProperty;
      const SH = SE.map;
      const SU = SE.reduce;
      const Sd = SE.forEach;
      const SW = SE.filter;
      const Sg = SE.every;
      const Sh = SE.some;
      const SD = SE.indexOf;
      const Su = Array.isArray;
      const Sr = Object.keys;
      const SM = SR.bind;
      const SQ = window.isFinite;
      const Ss = function (Xd, XW) {
        return SI.call(Xd, XW);
      };
      const SL = function (Xd) {
        return Xd === Object(Xd);
      };
      const So = function (Xd, XW, Xg) {
        let Xh;
        let XD;
        if (Xd != null) {
          if (Sd && Xd.forEach === Sd) {
            Xd.forEach(XW, Xg);
          } else if (Xd.length === Number(Xd.length)) {
            Xh = 0;
            XD = Xd.length;
            for (; Xh < XD; Xh++) {
              if (XW.call(Xg, Xd[Xh], Xh, Xd) === Sp) {
                return;
              }
            }
          } else {
            var Xu = S9(Xd);
            Xh = 0;
            XD = Xu.length;
            for (; Xh < XD; Xh++) {
              if (XW.call(Xg, Xd[Xu[Xh]], Xu[Xh], Xd) === Sp) {
                return;
              }
            }
          }
        }
        return Xd;
      };
      const Sm = So;
      const ST = [];
      So(["Function", "String", "Number", "Date", "RegExp"], function (Xd) {
        ST[Xd] = function (XW) {
          return Sq.call(XW) == "[object " + Xd + "]";
        };
      });
      const Sk = ST.Date;
      const SF = ST.RegExp;
      const Sl = ST.Function;
      const St = ST.Number;
      const Sw = ST.String;
      const Sj =
        Su ||
        function (Xd) {
          return Sq.call(Xd) == "[object Array]";
        };
      const Si = function (Xd) {
        return St(Xd) && Xd != Number(Xd);
      };
      const SZ = function (Xd, XW, Xg) {
        const Xh = [];
        if (Xd == null) {
          return Xh;
        } else if (SH && Xd.map === SH) {
          return Xd.map(XW, Xg);
        } else {
          So(Xd, function (XD, Xu, Xr) {
            Xh.push(XW.call(Xg, XD, Xu, Xr));
          });
          return Xh;
        }
      };
      const Sb = SZ;
      const SJ = function () {};
      const SB = function (Xd, XW, Xg, Xh) {
        let XD = arguments.length > 2;
        if (Xd == null) {
          Xd = [];
        }
        if (SU && Xd.reduce === SU) {
          if (Xh) {
            XW = SS(XW, Xh);
          }
          if (XD) {
            return Xd.reduce(XW, Xg);
          } else {
            return Xd.reduce(XW);
          }
        }
        So(Xd, function (Xu, Xr, XM) {
          if (XD) {
            Xg = XW.call(Xh, Xg, Xu, Xr, XM);
          } else {
            Xg = Xu;
            XD = true;
          }
        });
        if (XD) {
          return Xg;
        }
        throw new TypeError("Reduce of empty array with no initial value");
      };
      const Sv = SB;
      const SC = SB;
      const Sf = function (Xd) {
        return Xd;
      };
      const Sc = function (Xd, XW, Xg) {
        XW = XW || Sf;
        let Xh = false;
        if (Xd == null) {
          return Xh;
        } else if (Sh && Xd.some === Sh) {
          return Xd.some(XW, Xg);
        } else {
          So(Xd, function (XD, Xu, Xr) {
            if ((Xh = Xh || XW.call(Xg, XD, Xu, Xr))) {
              return Sp;
            }
          });
          return Boolean(Xh);
        }
      };
      const SK = Sc;
      const SP = function (Xd, XW, Xg) {
        let Xh;
        Sc(Xd, function (XD, Xu, Xr) {
          if (XW.call(Xg, XD, Xu, Xr)) {
            Xh = XD;
            return true;
          }
        });
        return Xh;
      };
      const SN = SP;
      const Sn = function (Xd, XW, Xg) {
        const Xh = [];
        if (Xd == null) {
          return Xh;
        } else if (SW && Xd.filter === SW) {
          return Xd.filter(XW, Xg);
        } else {
          So(Xd, function (XD, Xu, Xr) {
            if (XW.call(Xg, XD, Xu, Xr)) {
              Xh.push(XD);
            }
          });
          return Xh;
        }
      };
      const Sy = Sn;
      const X0 = SX;
      const X1 = function (Xd) {
        if (Xd == null) {
          return 0;
        } else {
          return (Xd.length === Number(Xd.length) ? Xd : S9(Xd)).length;
        }
      };
      ST.Function = function (Xd) {
        return typeof Xd == "function";
      };
      const X2 = function (Xd) {
        return SQ(Xd) && !Si(parseFloat(Xd));
      };
      const X3 = function (Xd) {
        return Xd === true || Xd === false || Sq.call(Xd) == "[object Boolean]";
      };
      const X4 = function (Xd) {
        return Xd === undefined;
      };
      const X5 = function (Xd) {
        return function (XW) {
          return XW[Xd];
        };
      };
      const X6 = Sx(function (Xd, XW, Xg) {
        if (Ss(Xd, XW)) {
          Xd[XW].push(Xg);
        } else {
          Xd[XW] = [Xg];
        }
      });
      const X7 = Sx(function (Xd, XW, Xg) {
        Xd[XW] = Xg;
      });
      const X8 = function (Xd, XW, Xg, Xh) {
        var XD = (Xg = SA(Xg)).call(Xh, XW);
        let Xu = 0;
        let Xr = Xd.length;
        while (Xu < Xr) {
          const XM = (Xu + Xr) >>> 1;
          if (Xg.call(Xh, Xd[XM]) < XD) {
            Xu = 1 + XM;
          } else {
            Xr = XM;
          }
        }
        return Xu;
      };
      const X9 = function (Xd, XW, Xg) {
        if (Xd != null) {
          let XD = 0;
          var Xh = Xd.length;
          if (Xg) {
            if (typeof Xg != "number") {
              if (Xd[(XD = X8(Xd, XW))] === XW) {
                return XD;
              } else {
                return -1;
              }
            }
            XD = Xg < 0 ? Math.max(0, Xh + Xg) : Xg;
          }
          if (SD && Xd.indexOf === SD) {
            return Xd.indexOf(XW, Xg);
          }
          for (; XD < Xh; XD++) {
            if (Xd[XD] === XW) {
              return XD;
            }
          }
        }
        return -1;
      };
      const XS = function (Xd, XW) {
        return (
          Xd != null &&
          (Xd.length !== Number(Xd.length) &&
            (Xd = (function (Xg) {
              var Xh = S9(Xg);
              var XD = S9.length;
              var Xu = Array(XD);
              for (let Xr = 0; Xr < XD; Xr++) {
                Xu[Xr] = Xg[Xh[Xr]];
              }
              return Xu;
            })(Xd)),
          X9(Xd, XW) >= 0)
        );
      };
      const XX = XS;
      const Xz = function (Xd) {
        return function (XW) {
          if (XW !== Xd) {
            for (const Xg in Xd) {
              if (Xd[Xg] !== XW[Xg]) {
                return false;
              }
            }
          }
          return true;
        };
      };
      const XA = function (Xd, XW) {
        return Sn(Xd, Xz(XW));
      };
      const Xx = function (Xd, XW) {
        return SP(Xd, Xz(XW));
      };
      const XO = function (Xd, ...XW) {
        const Xg = SV.apply(SE, XW);
        return Sn(Xd, function (Xh) {
          return !XS(Xg, Xh);
        });
      };
      const XY = SO(Sz, 2);
      const Xp = SO(
        SY,
        {
          partial: SO,
        },
        1
      );
      const XE = S7.z;
      const XG = function (Xd, XW, Xg) {
        let Xh;
        let XD;
        let Xu;
        let Xr = null;
        let XM = 0;
        Xg = Xg || {};
        function XQ() {
          XM = Xg.leading === false ? 0 : XE();
          Xr = null;
          Xu = Xd.apply(Xh, XD);
          Xh = XD = null;
        }
        return function (...Xs) {
          var XL = XE();
          if (!XM && Xg.leading === false) {
            XM = XL;
          }
          var Xo = XW - (XL - XM);
          Xh = this;
          XD = Xs;
          if (Xo <= 0) {
            clearTimeout(Xr);
            Xr = null;
            XM = XL;
            Xu = Xd.apply(Xh, XD);
            Xh = XD = null;
          } else if (!Xr && Xg.trailing !== false) {
            Xr = setTimeout(XQ, Xo);
          }
          return Xu;
        };
      };
      const XR = function (Xd) {
        var XW = {};
        var Xg = S9(Xd);
        for (let Xh = 0, XD = Xg.length; Xh < XD; Xh++) {
          XW[Xd[Xg[Xh]]] = Xg[Xh];
        }
        return XW;
      };
      const Xa = function (Xd, ...XW) {
        So(XW, function (Xg) {
          if (Xg) {
            for (const Xh in Xg) {
              if (Xd[Xh] === undefined) {
                Xd[Xh] = Xg[Xh];
              }
            }
          }
        });
        return Xd;
      };
      const XV =
        Object.assign ||
        function (Xd, ...XW) {
          So(XW, function (Xg) {
            if (Xg) {
              for (const Xh in Xg) {
                if (
                  !!(function (XD, Xu) {
                    if (XD == null) {
                      throw new TypeError(
                        "Cannot convert undefined or null to object"
                      );
                    }
                    return Object.prototype.hasOwnProperty.call(Object(XD), Xu);
                  })(Xg, Xh)
                ) {
                  Xd[Xh] = Xg[Xh];
                }
              }
            }
          });
          return Xd;
        };
      const Xq = function (Xd, ...XW) {
        const Xg = {};
        XW = [].concat(...XW);
        So(XW, function (Xh) {
          if (Xh in Xd) {
            Xg[Xh] = Xd[Xh];
          }
        });
        return Xg;
      };
      const XI = function (Xd) {
        return function () {
          return Xd;
        };
      };
      const XH = (Xd) => St(Xd) && !Si(Xd);
      const XU = {
        after: function (Xd, XW) {
          return function (...Xg) {
            if (--Xd < 1) {
              return XW.apply(this, Xg);
            }
          };
        },
        all: SX,
        any: Sc,
        before: Sz,
        bind: SS,
        clone: function (Xd) {
          if (SL(Xd)) {
            if (Sj(Xd)) {
              return Xd.slice();
            } else {
              return XV({}, Xd);
            }
          } else {
            return Xd;
          }
        },
        collect: Sb,
        compact: function (Xd) {
          return Sn(Xd, Sf);
        },
        constant: XI,
        contains: XS,
        debounce: (Xd, XW = 100) => {
          let Xg;
          return function (...Xh) {
            clearTimeout(Xg);
            Xg = setTimeout(() => {
              Xd.apply(this, Xh);
            }, XW);
          };
        },
        defaults: Xa,
        defer: Xp,
        delay: SY,
        detect: SN,
        difference: XO,
        each: So,
        every: X0,
        extend: XV,
        filter: Sn,
        find: SP,
        findWhere: Xx,
        foldl: Sv,
        forEach: Sm,
        groupBy: X6,
        has: Ss,
        identity: Sf,
        include: XX,
        indexBy: X7,
        indexOf: X9,
        inject: SC,
        invert: XR,
        isArray: Sj,
        isBoolean: X3,
        isDate: Sk,
        isFinite: X2,
        isFunction: Sl,
        isNaN: Si,
        isNull: function (Xd) {
          return Xd === null;
        },
        isNumber: St,
        isObject: SL,
        isRegExp: SF,
        isString: Sw,
        isUndefined: X4,
        isValidNumber: XH,
        keys: S9,
        last: function (Xd, XW, Xg) {
          if (Xd != null) {
            if (XW == null || Xg) {
              return Xd[Xd.length - 1];
            } else {
              return Sa.call(Xd, Math.max(Xd.length - XW, 0));
            }
          }
        },
        map: SZ,
        matches: Xz,
        max: function (Xd, XW, Xg) {
          if (!XW && Sj(Xd) && Xd[0] === Number(Xd[0]) && Xd.length < 65535) {
            return Math.max(...Xd);
          }
          let Xh = -Infinity;
          let XD = -Infinity;
          So(Xd, function (Xu, Xr, XM) {
            Xr = XW ? XW.call(Xg, Xu, Xr, XM) : Xu;
            if (Xr > XD) {
              Xh = Xu;
              XD = Xr;
            }
          });
          return Xh;
        },
        memoize: function (Xd, XW) {
          const Xg = {};
          XW = XW || Sf;
          return function (...Xh) {
            var XD = XW.apply(this, Xh);
            if (Ss(Xg, XD)) {
              return Xg[XD];
            } else {
              return (Xg[XD] = Xd.apply(this, Xh));
            }
          };
        },
        now: XE,
        omit: function (Xd, ...XW) {
          var Xg = {};
          for (const Xh in Xd) {
            if (!XS(XW, Xh)) {
              Xg[Xh] = Xd[Xh];
            }
          }
          return Xg;
        },
        once: XY,
        partial: SO,
        pick: Xq,
        pluck: function (Xd, XW) {
          return SZ(Xd, X5(XW));
        },
        property: X5,
        propertyOf: function (Xd) {
          if (Xd == null) {
            return function () {};
          } else {
            return function (XW) {
              return Xd[XW];
            };
          }
        },
        reduce: SB,
        reject: function (Xd, XW, Xg) {
          return Sn(
            Xd,
            function (Xh, XD, Xu) {
              return !XW.call(Xg, Xh, XD, Xu);
            },
            Xg
          );
        },
        result: function (Xd, XW) {
          if (Xd != null) {
            XW = Xd[XW];
            if (Sl(XW)) {
              return XW.call(Xd);
            } else {
              return XW;
            }
          }
        },
        select: Sy,
        size: X1,
        some: SK,
        sortedIndex: X8,
        throttle: XG,
        where: XA,
        without: function (Xd, ...XW) {
          return XO(Xd, XW);
        },
      };
    },
    5950: (S6, S7, S8) => {
      "use strict";

      S8.d(S7, {
        O9: () => Sz,
        _N: () => SX,
        kd: () => SO,
        ke: () => SA,
        vl: () => SS,
      });
      const S9 = /^[^:/?#]+:?\/\/[^/?#]+/;
      const SS = function (SY) {
        if (!SY) {
          return {};
        }
        var Sp;
        var SE = ((SR) => {
          if (SR) {
            return new URL(SR, window.location);
          }
        })(SY);
        var SG = {};
        for (const SR of SE.searchParams.keys()) {
          if (!SG[SR]) {
            Sp = SE.searchParams.getAll(SR);
            SG[SR] = Sp.length === 1 ? Sp[0] : Sp;
          }
        }
        return SG;
      };
      const SX = function (SY) {
        if (
          !SY ||
          ((SY = new URLSearchParams(SY).get("jw_start") || -1), isNaN(SY)) ||
          SY < -1
        ) {
          return -1;
        } else {
          return Number(SY);
        }
      };
      const Sz = function (SY, Sp = "{seek_to_second_number}") {
        if (SY) {
          SY = new URL(SY);
          SY.searchParams.set("jw_start", "");
          let SE = SY.toString();
          return (SE = SE.replace(/jw_start=?/i, "jw_start=" + Sp));
        }
      };
      const SA = (SY, Sp) => {
        if (SY) {
          return new URLSearchParams(SY).has(Sp);
        }
      };
      const Sx = (SY) => !!SY && SY.match(S9) !== null;
      const SO = (SY, Sp) => {
        Sp = Sp || document.location.href;
        if (SY && Sx(Sp)) {
          if (Sx(SY)) {
            return SY;
          } else {
            return new URL(SY, Sp).toString();
          }
        } else {
          return "";
        }
      };
    },
    7034: (S6, S7, S8) => {
      "use strict";

      S8.r(S7);
      S8.d(S7, {
        exists: () => SS,
        isDeepKeyCompliant: () => SY,
        isFileProtocol: () => Sz,
        isHTTPS: () => SX,
        isRtmp: () => SA,
        isYouTube: () => Sx,
        typeOf: () => SO,
      });
      const S9 = window.location.protocol;
      const SS = (Sp) => {
        switch (typeof Sp) {
          case "string":
            return Sp.length > 0;
          case "object":
            return Sp !== null;
          case "undefined":
            return false;
          default:
            return true;
        }
      };
      const SX = () => S9 === "https:";
      const Sz = () => S9 === "file:";
      const SA = (Sp, SE) => Sp.indexOf("rtmp:") === 0 || SE === "rtmp";
      const Sx = (Sp, SE) =>
        SE === "youtube" ||
        /^(http|\/\/).*(youtube\.com|youtu\.be)\/.+/.test(Sp);
      const SO = (Sp) => {
        var SE;
        if (Sp === null) {
          return "null";
        } else if ((SE = typeof Sp) == "object" && Array.isArray(Sp)) {
          return "array";
        } else {
          return SE;
        }
      };
      const SY = (Sp, SE, SG) => {
        var SR = Object.keys(Sp);
        return (
          Object.keys(SE).length >= SR.length &&
          SR.every((Sa) => {
            var SV = Sp[Sa];
            var Sq = SE[Sa];
            if (SV && typeof SV == "object") {
              return !!Sq && typeof Sq == "object" && SY(SV, Sq, SG);
            } else {
              return SG(Sa, Sp);
            }
          })
        );
      };
    },
    9025: (S6, S7, S8) => {
      "use strict";

      S8.d(S7, {
        Z: () => S9,
      });
      const S9 = document.createElement("video");
    },
    6601: (S6, S7, S8) => {
      "use strict";

      S8.d(S7, {
        i: () => S9,
      });
      const S9 =
        "8.33.2+commercial_master.561.ads-dai@mono.ads-freewheel@mono.ads-googima@mono.ads-vast@mono.hls.js@1.4.10.jwplayer@mono.jwplayer-ads-header-bidding@github:jwplayer/jwplayer-ads-header-bidding#v7.7.0.jwplayer-analytics@github:jwplayer/jwplayer-analytics#v4.0.3.jwplayer-analytics-kraken@v0.0.4.plugin-gapro@mono";
    },
    4225: (S6, S7, S8) => {
      "use strict";

      S8.d(S7, {
        Z: () =>
          function (Sz, SA) {
            var { message: SA, code: Sx } = SA;
            var SA = S9(
              Sz.get("id"),
              SA,
              Sz.get("localization").errors.errorCode,
              Sx.toString()
            );
            var Sx = Sz.get("width");
            var Sz = Sz.get("height");
            var SA = (0, SS.az)(SA);
            (0, SX.oB)(SA, {
              width: Sx.toString().indexOf("%") > 0 ? Sx : Sx + "px",
              height: Sz.toString().indexOf("%") > 0 ? Sz : Sz + "px",
            });
            return SA;
          },
      });
      const S9 = (Sz, SA, Sx, SO) =>
        '<div id="' +
        Sz +
        '" class="jw-error jw-reset"><div class="jw-error-msg jw-info-overlay jw-reset"><style>[id="' +
        Sz +
        '"].jw-error{background:#000;overflow:hidden;position:relative}[id="' +
        Sz +
        '"] .jw-error-msg{top:50%;left:50%;position:absolute;transform:translate(-50%,-50%)}[id="' +
        Sz +
        '"] .jw-error-text{text-align:start;color:#FFF;font:14px/1.35 Arial,Helvetica,sans-serif}</style><div class="jw-icon jw-reset"></div><div class="jw-info-container jw-reset"><div class="jw-error-text jw-reset-text" dir="auto" data-nosnippet>' +
        (SA || "") +
        '<span class="jw-break jw-reset"></span>' +
        (SO ? ("(" + Sx + ": " + SO + ")").replace(/\s+/g, "&nbsp;") : "") +
        "</div></div></div></div>";
      var SS = S8(2799);
      var SX = S8(974);
    },
    9926: (S6, S7, S8) => {
      "use strict";

      S8.d(S7, {
        Z: () => SO,
      });
      var S9 = S8(1776);
      var SS = S8(2799);
      var SX = S8(974);
      const Sz = [];
      let SA = -1;
      const Sx = () => {
        (0, S9.W)(SA);
        SA = (0, S9.U)(() => {
          Sz.forEach((SY) => {
            SY.view.updateBounds();
            var Sp = SY.view.model.get("containerWidth");
            SY.resized = SY.width !== Sp;
            SY.width = Sp;
          });
          Sz.forEach((SY) => {
            SY.contractElement.scrollLeft = SY.width * 2;
          });
          Sz.forEach((SY) => {
            (0, SX.oB)(SY.expandChild, {
              width: SY.width + 1,
            });
            if (SY.resized && SY.view.model.get("visibility")) {
              SY.view.updateStyles();
            }
          });
          Sz.forEach((SY) => {
            SY.expandElement.scrollLeft = SY.width + 1;
          });
          Sz.forEach((SY) => {
            if (SY.resized) {
              SY.view.checkResized();
            }
          });
        });
      };
      class SO {
        constructor(SY, Sp, SE) {
          var SG = {
            display: "block",
            position: "absolute",
            top: 0,
            left: 0,
          };
          var SR = {
            width: "100%",
            height: "100%",
          };
          var Sa = (0, SS.az)(
            '<div style="opacity:0;visibility:hidden;overflow:hidden;"><div><div style="height:1px;"></div></div><div class="jw-contract-trigger"></div></div>'
          );
          var SV = Sa.firstChild;
          var Sq = SV.firstChild;
          var SI = SV.nextSibling;
          (0, SX.oB)(
            [SV, SI],
            Object.assign(
              {
                overflow: "auto",
              },
              SG,
              SR
            )
          );
          (0, SX.oB)(Sa, Object.assign({}, SG, SR));
          this.expandElement = SV;
          this.expandChild = Sq;
          this.contractElement = SI;
          this.hiddenElement = Sa;
          this.element = SY;
          this.view = Sp;
          this.model = SE;
          this.width = 0;
          this.resized = false;
          if (SY.firstChild) {
            SY.insertBefore(Sa, SY.firstChild);
          } else {
            SY.appendChild(Sa);
          }
          SY.addEventListener("scroll", Sx, true);
          Sz.push(this);
          Sx();
        }
        destroy() {
          var SY;
          if (this.view) {
            if ((SY = Sz.indexOf(this)) !== -1) {
              Sz.splice(SY, 1);
            }
            this.element.removeEventListener("scroll", Sx, true);
            this.element.removeChild(this.hiddenElement);
            this.view = this.model = null;
          }
        }
      }
    },
    4671: (S6, S7, S8) => {
      "use strict";

      S8.d(S7, {
        Z: () => SR,
      });
      var S9 = S8(6875);
      const SS = [];
      const SX = [];
      const Sz = [];
      const SA = {};
      let Sx;
      let SO = false;
      const SY = (Sa, SV) => {
        for (let SI = SV.length; SI--; ) {
          var Sq = SV[SI];
          if (Sa.target === Sq.getContainer()) {
            Sq.setIntersection(Sa);
            break;
          }
        }
      };
      const Sp = () => {
        SS.forEach((Sa) => {
          Sa.model.set("activeTab", (0, S9.Z)());
        });
      };
      const SE = (Sa, SV) => {
        Sa = SV.indexOf(Sa);
        if (Sa !== -1) {
          SV.splice(Sa, 1);
        }
      };
      const SG = (Sa) => {
        Sz.forEach((SV) => {
          SV(Sa);
        });
      };
      document.addEventListener("visibilitychange", Sp);
      document.addEventListener("webkitvisibilitychange", Sp);
      const SR = {
        add(Sa) {
          SS.push(Sa);
        },
        remove(Sa) {
          SE(Sa, SS);
          document.removeEventListener("visibilitychange", Sp);
          document.removeEventListener("webkitvisibilitychange", Sp);
          window.removeEventListener("scroll", SG);
        },
        addScrollHandler(Sa) {
          if (!SO) {
            SO = true;
            window.addEventListener("scroll", SG);
          }
          Sz.push(Sa);
        },
        removeScrollHandler(Sa) {
          Sa = Sz.indexOf(Sa);
          if (Sa !== -1) {
            Sz.splice(Sa, 1);
          }
        },
        addWidget(Sa) {
          SX.push(Sa);
        },
        removeWidget(Sa) {
          SE(Sa, SX);
        },
        size: () => SS.length,
        observe(Sa) {
          var SV;
          SV = window.IntersectionObserver;
          Sx =
            Sx ||
            new SV(
              (Sq) => {
                if (Sq != null && Sq.length) {
                  for (let SH = Sq.length; SH--; ) {
                    var SI = Sq[SH];
                    SY(SI, SS);
                    SY(SI, SX);
                  }
                }
              },
              {
                threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1],
              }
            );
          if (!SA[Sa.id]) {
            SA[Sa.id] = true;
            Sx.observe(Sa);
          }
        },
        unobserve(Sa) {
          if (Sx && SA[Sa.id]) {
            delete SA[Sa.id];
            Sx.unobserve(Sa);
          }
        },
      };
    },
    2445: (S6, S7, S8) => {
      "use strict";

      S8.d(S7, {
        ZP: () => SH,
        qG: () => SI,
      });
      var S9 = S8(5083);
      var SS = S8(1569);
      var SX = S8(6042);
      var Sz = S8(7034);
      var SA = S8(6577);
      var Sx = S8(6599);
      var SO = S8(386);
      const SY = "__CONTEXTUAL__";
      const Sp = (SU, Sd) => {
        SU = SU.querySelector(Sd);
        if (SU) {
          return SU.getAttribute("content");
        }
      };
      var S7 = S8(4737);
      var SE = S8.n(S7);
      var SG = S8(67);
      var SR = S8(3487);
      const Sa = (SU) =>
        typeof SU == "string" &&
        /^\/\/(?:content\.jwplatform|cdn\.jwplayer)\.com\//.test(SU);
      const SV = (SU) => "https:" + SU;
      const Sq = (SU, Sd, SW) => {
        if (Sd) {
          delete (SU[Sd.client || (0, SR.sb)(SW)] = Sd).client;
        }
      };
      const SI = (SU) => {
        const Sd = Object.assign({}, SU.plugins);
        const SW = (0, SO.Z)(SU.edition);
        if (SW("ads")) {
          const Sg = Object.assign({}, SU.advertising);
          const Sh = Sg.client;
          if (Sh) {
            delete (Sd[(0, SR.sb)(Sh) || Sh] = Sg).client;
          }
          if (Sg.bids) {
            Sq(Sd, Sg.bids, "bidding");
          }
        }
        if (SW("jwpsrv")) {
          let SD = SU.analytics;
          if (SD !== Object(SD)) {
            SD = {};
          }
          Sq(Sd, SD, "jwpsrv");
        }
        Sq(Sd, SU.ga, "gapro");
        Sq(Sd, SU.interactive, "interactive");
        Sq(Sd, SU.keepWatching, "keepWatching");
        return Sd;
      };
      const SH = function (SU, Sd) {
        let SW = (0, S9.ZP)(SU, Sd);
        var SU = SW.key || SA.default.key;
        var Sd = new Sx.ZP(SU);
        var Sg = Sd.edition();
        (SW =
          Sd.edition() === "free"
            ? Object.assign(
                {
                  skin: {
                    active: "#ff0046",
                    timeslider: {
                      progress: "none",
                    },
                  },
                  logo: {
                    position: "control-bar",
                    file: SE(),
                  },
                },
                S9.ke,
                (0, SX.ei)(SW, [
                  "analytics",
                  "aspectratio",
                  "base",
                  "file",
                  "height",
                  "playlist",
                  "sources",
                  "timeSlider",
                  "width",
                ])
              )
            : SW).key = SU;
        SW.edition = Sg;
        SW.error = Sd.error();
        SW.generateSEOMetadata = SW.generateSEOMetadata || false;
        if (Sg === "unlimited") {
          const Sh = (0, SS.getScriptPath)("jwplayer.js");
          if (!Sh) {
            throw new Error(
              "Error setting up player: Could not locate jwplayer.js script tag"
            );
          }
          S8.p = Sh;
        }
        SW.related = ((SD) => {
          var Su = (0, SO.Z)(SD.edition);
          var Sr = SD.related;
          var Su = !Su("discovery") || Sr !== Object(Sr);
          var SM = !Sr || Sr.displayMode !== "none";
          var SQ = Sr || {};
          let Ss = SQ.oncomplete === undefined ? "none" : SQ.oncomplete;
          let SL = SQ.autoplaytimer;
          if (Ss === false || SD.repeat) {
            Ss = "hide";
          } else if (Ss === "none") {
            SL = 0;
          }
          SQ = (Ss === "autoplay" && SL <= 0) || Ss === "none";
          return Object.assign({}, Sr, {
            disableRelated: Su,
            showButton: SM,
            oncomplete: Ss,
            autoplaytimer: SL,
            shouldAutoAdvance: SQ,
          });
        })(SW);
        SW.ab &&= ((SD) => {
          let Su = SD.ab;
          if (Su.clone) {
            Su = Su.clone();
          }
          Object.keys(Su.tests).forEach((Sr) => {
            Su.tests[Sr].forEach((SM) => {
              if (SM.addConfig) {
                SM.addConfig(SD, SM.selection);
              }
            });
          });
          return Su;
        })(SW);
        SW.plugins = SI(SW);
        SU = SW.playlist;
        if ((0, SX.HD)(SU) && SU.indexOf(SY) > -1) {
          SW.playlist = ((SD, Su) => {
            var Sr =
              SD == null ||
              SD.querySelector == null ||
              (Sr = SD.querySelector("title")) == null
                ? undefined
                : Sr.textContent;
            var SM = Sp(SD, 'meta[property="og:title"]');
            let SQ = encodeURIComponent(SM || Sr || "");
            SM =
              Sp(SD, 'meta[property="og:description"]') ||
              Sp(SD, 'meta[name="description"]');
            if (SM) {
              SQ += "&page_description=" + encodeURIComponent(SM);
            }
            return Su.replace(SY, SQ);
          })(document, SW.playlist);
          SW.contextual = true;
        }
        if ((0, Sz.isFileProtocol)()) {
          const { playlist: SD, related: Su } = SW;
          if (Sa(SD)) {
            SW.playlist = SV(SD);
          }
          if (Su && Sa(Su.file)) {
            Su.file = SV(Su.file);
          }
        }
        if (
          SW.__abSendDomainToFeeds &&
          ((Sd = SW.playlist), /\.jwplatform.com|\.jwplayer.com/.test(Sd))
        ) {
          SW.playlist =
            (Sg = SW.playlist) +
            ((Sg.indexOf("?") !== -1 ? "&" : "?") +
              "page_domain=" +
              encodeURIComponent((0, SG.X)()));
        }
        return SW;
      };
    },
    6577: (S6, S7, S8) => {
      "use strict";

      S8.d(S7, {
        default: () => Sv,
      });
      var S7 = S8(1096);
      var S7 = S8.n(S7);
      window.Promise ||= S7();
      var S7 = S8(1569);
      var S9 = S8(6391);
      var SS = S8(2963);
      var SX = S8(670);
      var SS = {
        availableProviders: SS.B,
        registerProvider: SX.Z,
      };
      var Sz = S8(1241);
      SS.registerPlugin = function (SC, Sf, Sc) {
        if (SC !== "jwpsrv") {
          (0, Sz.fo)(SC, Sf, Sc);
        }
      };
      const SA = SS;
      var Sx = S8(8675);
      var SO = S8(6601);
      var SY = S8(4742);
      var Sp = S8(8348);
      var SE = S8(623);
      var SG = S8(1643);
      var SR = S8(7411);
      var Sa = S8(328);
      var SV = S8(3487);
      const Sq = [["vastxml", "adtag", "schedules"]];
      const SI = {
        googima: Sq,
        vast: Sq,
      };
      const SH = (SC, Sf) => {
        var Sc = SC.getPlugin(Sf);
        var SK = Object.keys(SI);
        if (SK.indexOf(Sf) === -1) {
          throw new Error(
            "destroyDynamicPlugin must be called with plugins with one of the following plugins: " +
              SK.toString()
          );
        }
        if (Sc) {
          if (Sc.resize) {
            SC.off("resize", Sc.resizeHandler);
          }
          delete SC.plugins[Sf];
          if (Sc.destroy) {
            try {
              Sc.destroy();
            } catch (SP) {}
          }
          SK = Sc.div;
          if (SK != null && SK.parentElement) {
            SK.parentElement.removeChild(SK);
          }
          SC.trigger("pluginDestroyed", {
            type: "pluginDestroyed",
            name: Sf,
          });
        }
      };
      const SU = (SC, Sf, Sc, SK) => {
        var SP = (0, SV.Nq)(Sf);
        var SN = Object.keys(SI);
        var SK =
          (SK = SK)[(Sn = Sf)] ||
          SK[(0, SV.sb)(Sn)] ||
          SK[(0, SV.Nq)(Sn)] ||
          {};
        if (SN.indexOf(SP) === -1) {
          throw new Error(
            "setupDynamicPlugin must be called with plugins with one of the following plugins: " +
              SN.toString()
          );
        }
        SH(SC, SP);
        var Sn = ((Sy, X0, X1) => {
          const X2 = Object.assign({}, Sy);
          const X3 = Object.assign({}, X0);
          const X4 = Object.keys(X3).filter((X5) => X5 === null);
          X4.forEach((X5) => delete X2[X5]);
          X4.forEach((X5) => delete X3[X5]);
          X1.forEach((X5) => {
            if (X5.some((X6) => X3[X6])) {
              X5.forEach((X6) => delete X2[X6]);
            }
          });
          return Object.assign({}, X2, X3);
        })(SK, Sc, SI[SP]);
        return (0, Sx.Ve)(Sf, Sn, SC);
      };
      var Sd = S8(4429);
      var SW = S8(6042);
      let Sg = 0;
      function Sh(SC, Sf) {
        (Sf = new SE.ZP(Sf)).on(SG.Rc, (Sc) => {
          SC._qoe.tick("ready");
          Sc.setupTime = SC._qoe.between("setup", "ready");
        });
        Sf.on("all", (Sc, SK) => {
          SC.trigger(Sc, SK);
        });
        return Sf;
      }
      function SD(SC, Sf) {
        const Sc = SC.plugins;
        const SK = Object.keys(Sc).map((SP) => {
          var SN = Sc[SP];
          delete Sc[SP];
          return SN;
        });
        if (Sf.get("setupConfig")) {
          SC.trigger("remove");
        }
        SC.off();
        Sf.playerDestroy();
        SK.forEach((SP) => {
          if (SP.reset) {
            try {
              SP.reset();
            } catch (SN) {}
          } else if (SP.destroy) {
            try {
              SP.destroy();
            } catch (Sn) {}
          }
        });
        Sf.getContainer().removeAttribute("data-jwplayer-id");
      }
      function Su(SC) {
        const Sf = ++Sg;
        const Sc = SC.id || "player-" + Sf;
        const SK = new SR.Z();
        const SP = {};
        let SN = Sh(this, SC);
        SK.tick("init");
        SC.setAttribute("data-jwplayer-id", Sc);
        Object.defineProperties(this, {
          id: {
            enumerable: true,
            get: () => Sc,
          },
          uniqueId: {
            enumerable: true,
            get: () => Sf,
          },
          plugins: {
            enumerable: true,
            get: () => SP,
          },
          _qoe: {
            enumerable: true,
            get: () => SK,
          },
          version: {
            enumerable: true,
            get: () => SO.i,
          },
          Events: {
            enumerable: true,
            get: () => Sa.ZP,
          },
          utils: {
            enumerable: true,
            get: () => Sd.Z,
          },
          _: {
            enumerable: true,
            get: () => SW.ZP,
          },
        });
        Object.assign(this, {
          _events: {},
          setup(Sn) {
            SK.clear("ready");
            SK.tick("setup");
            if (SN) {
              SD(this, SN);
            }
            (SN = Sh(this, SC)).init(Sn, this);
            return this.on(Sn.events, null, this);
          },
          remove() {
            if (this.getPip()) {
              this.setPip(false);
            }
            var Sn = this;
            for (let Sy = S9.Z.length; Sy--; ) {
              if (S9.Z[Sy].uniqueId === Sn.uniqueId) {
                S9.Z.splice(Sy, 1);
                break;
              }
            }
            if (SN) {
              SD(this, SN);
            }
            Object.keys(SP).forEach((X0) => {
              delete SP[X0];
            });
            return this;
          },
          qoe() {
            var Sn = SN.getItemQoe();
            return {
              setupTime: this._qoe.between("setup", "ready"),
              firstFrame: Sn.getFirstFrame ? Sn.getFirstFrame() : null,
              player: this._qoe.dump(),
              item: Sn.dump(),
            };
          },
          addCues(Sn) {
            if (Array.isArray(Sn)) {
              SN.addCues(Sn);
            }
            return this;
          },
          getAudioTracks: () => SN.getAudioTracks(),
          getBuffer: () => SN.get("buffer"),
          getCaptions: () => SN.get("captions"),
          getCaptionsList: () => SN.getCaptionsList(),
          getConfig: () => SN.getConfig(),
          getContainer: () => SN.getContainer(),
          getControls: () => SN.get("controls"),
          getCues: () => SN.getCues(),
          getCurrentAudioTrack: () => SN.getCurrentAudioTrack(),
          getCurrentCaptions: () => SN.getCurrentCaptions(),
          getCurrentQuality: () => SN.getCurrentQuality(),
          getCurrentTime: () => SN.get("currentTime"),
          getAbsolutePosition: () => SN.getAbsolutePosition(),
          getDuration: () => SN.get("duration"),
          getEnvironment: () => Sp,
          getFullscreen: () => SN.get("fullscreen"),
          getHeight: () => SN.getHeight(),
          getItemMeta: () => SN.get("itemMeta") || {},
          getMute: () => SN.getMute(),
          getContainerPercentViewable: () => SN.get("intersectionRatio"),
          getPercentViewable: () => SN.get("visibility"),
          getPip: () => SN.get("pip"),
          getPlaybackRate: () => SN.get("playbackRate"),
          getPlaylist: () => SN.get("playlist"),
          getPlaylistIndex: () => SN.get("item"),
          getPlaylistItem(Sn) {
            var Sy;
            if (Sd.Z.exists(Sn)) {
              if ((Sy = this.getPlaylist())) {
                return Sy[Sn];
              } else {
                return null;
              }
            } else {
              return SN.get("playlistItem");
            }
          },
          getPosition: () => SN.get("position"),
          getProvider: () => SN.getProvider(),
          getQualityLevels: () => SN.getQualityLevels(),
          getSafeRegion: (Sn = true) => SN.getSafeRegion(Sn),
          getState: () => SN.getState(),
          getStretching: () => SN.get("stretching"),
          getContainerViewable: () => SN.get("containerViewable"),
          getViewable: () => SN.get("viewable"),
          getVisualQuality: () => SN.getVisualQuality(),
          getVolume: () => SN.get("volume"),
          getWidth: () => SN.getWidth(),
          isReady: () => SN.isReady(),
          setCaptions(Sn) {
            SN.setCaptions(Sn);
            return this;
          },
          setConfig(Sn) {
            SN.setConfig(Sn);
            return this;
          },
          setControls(Sn) {
            SN.setControls(Sn);
            return this;
          },
          setCurrentAudioTrack(Sn) {
            SN.setCurrentAudioTrack(Sn);
          },
          setCurrentCaptions(Sn) {
            SN.setCurrentCaptions(Sn);
          },
          setCurrentQuality(Sn) {
            SN.setCurrentQuality(Sn);
          },
          setFullscreen(Sn) {
            SN.setFullscreen(Sn);
            return this;
          },
          setAllowFullscreen(Sn) {
            SN.setAllowFullscreen(Sn);
            return this;
          },
          setMute(Sn) {
            SN.setMute(Sn);
            return this;
          },
          setPip(Sn) {
            SN.setPip(Sn);
            return this;
          },
          setPlaybackRate(Sn) {
            SN.setPlaybackRate(Sn);
            return this;
          },
          setPlaylistItem(Sn, Sy) {
            SN.setPlaylistItem(Sn, Sy);
            return this;
          },
          setCues(Sn) {
            if (Array.isArray(Sn)) {
              SN.setCues(Sn);
            }
            return this;
          },
          setVolume(Sn) {
            SN.setVolume(Sn);
            return this;
          },
          load(Sn, Sy) {
            SN.load(Sn, Sy);
            return this;
          },
          play(Sn) {
            SN.play(Sn);
            return this;
          },
          pause(Sn) {
            SN.pause(Sn);
            return this;
          },
          playToggle(Sn) {
            switch (this.getState()) {
              case SG.r0:
              case SG.Kb:
                return this.pause(Sn);
              default:
                return this.play(Sn);
            }
          },
          seek(Sn, Sy) {
            SN.seek(Sn, Sy);
            return this;
          },
          playlistItem(Sn, Sy) {
            SN.playlistItem(Sn, Sy);
            return this;
          },
          playlistNext(Sn) {
            SN.playlistNext(Sn);
            return this;
          },
          playlistPrev(Sn) {
            SN.playlistPrev(Sn);
            return this;
          },
          next(Sn) {
            SN.next(Sn);
            return this;
          },
          requestPip(Sn) {
            SN.requestPip(Sn);
            return this;
          },
          castToggle() {
            SN.castToggle();
            return this;
          },
          stopCasting() {
            SN.stopCasting();
            return this;
          },
          requestCast(Sn) {
            SN.requestCast(Sn);
            return this;
          },
          createInstream: () => SN.createInstream(),
          stop() {
            SN.stop();
            return this;
          },
          resize(Sn, Sy) {
            SN.resize(Sn, Sy);
            return this;
          },
          addButton(Sn, Sy, X0, X1, X2) {
            SN.addButton(Sn, Sy, X0, X1, X2);
            return this;
          },
          removeButton(Sn) {
            SN.removeButton(Sn);
            return this;
          },
          getMediaElement: () => SN.getMediaElement(),
          attachMedia() {
            SN.attachMedia();
            return this;
          },
          detachMedia() {
            SN.detachMedia();
            return this;
          },
          isBeforeComplete: () => SN.isBeforeComplete(),
          isBeforePlay: () => SN.isBeforePlay(),
          setPlaylistItemCallback(Sn, Sy) {
            SN.setItemCallback(Sn, Sy);
          },
          removePlaylistItemCallback() {
            SN.setItemCallback(null);
          },
          getPlaylistItemPromise: (Sn) => SN.getItemPromise(Sn),
          getFloating: () => Boolean(SN.get("isFloating")),
          setFloating(Sn) {
            SN.setConfig({
              floating: {
                mode: Sn ? "always" : "never",
              },
            });
          },
          getChapters: () => SN.getChapters(),
          getCurrentChapter: () => SN.getCurrentChapter(),
          setChapter: (Sn) => SN.setChapter(Sn),
          setupDynamicPlugin(Sn, Sy) {
            if (Sn) {
              return SU(this, Sn, Sy, SN.get("plugins"));
            } else {
              return Promise.resolve();
            }
          },
          destroyDynamicPlugin(Sn) {
            if (Sn) {
              return SH(this, Sn);
            }
          },
        });
      }
      Object.assign(Su.prototype, {
        on(SC, Sf, Sc) {
          return Sa.on.call(this, SC, Sf, Sc);
        },
        once(SC, Sf, Sc) {
          return Sa.IH.call(this, SC, Sf, Sc);
        },
        off(SC, Sf, Sc) {
          return Sa.S1.call(this, SC, Sf, Sc);
        },
        trigger(SC, Sf) {
          (Sf = SW.ZP.isObject(Sf) ? Object.assign({}, Sf) : {}).type = SC;
          return (SY.Z.debug ? Sa.X$ : Sa.wj).call(this, SC, Sf);
        },
        getPlugin(SC) {
          return this.plugins[SC];
        },
        addPlugin(SC, Sf) {
          if (typeof (this.plugins[SC] = Sf).addToPlayer == "function") {
            if (this.isReady()) {
              Sf.addToPlayer.call(this, true);
            } else {
              this.on("ready", function () {
                Sf.addToPlayer.call(this, false);
              });
            }
          }
          if (Sf.resize) {
            this.on("resize", Sf.resizeHandler);
          }
        },
        registerPlugin(SC, Sf, Sc) {
          (0, Sx.fo)(SC, Sf, Sc);
        },
        getAdBlock: () => false,
        playAd(SC) {},
        pauseAd(SC) {},
        skipAd() {},
      });
      S8.p = (0, S7.loadFrom)();
      function Sr(SC) {
        let Sf;
        let Sc;
        if (SC) {
          if (typeof SC == "string") {
            if (!(Sf = SM(SC))) {
              Sc = document.getElementById(SC);
            }
          } else if (typeof SC == "number") {
            Sf = S9.Z[SC];
          } else if (SC.nodeType) {
            Sc = SC;
            Sf = SM(Sc.id || Sc.getAttribute("data-jwplayer-id"));
          }
        } else {
          Sf = S9.Z[0];
        }
        if (Sf) {
          return Sf;
        }
        if (Sc) {
          const SK = new Su(Sc);
          S9.Z.push(SK);
          return SK;
        }
        return {
          registerPlugin: Sx.fo,
        };
      }
      const SM = (SC) => {
        for (let Sf = 0; Sf < S9.Z.length; Sf++) {
          if (S9.Z[Sf].id === SC) {
            return S9.Z[Sf];
          }
        }
        return null;
      };
      const SQ = (SC) => {
        Object.defineProperties(SC, {
          api: {
            get: () => SA,
            set() {},
          },
          version: {
            get: () => SO.i,
            set() {},
          },
          debug: {
            get: () => SY.Z.debug,
            set(Sf) {
              SY.Z.debug = Boolean(Sf);
            },
          },
        });
      };
      SQ(Sr);
      const Ss = Sr;
      var SX = S8(5882);
      var SS = S8(6599);
      var S7 = S8(676);
      var SL = S8(5592);
      var So = S8(6769);
      var Se = S8(9025);
      var Sm = SW.ZP.extend;
      var ST = {
        _: SW.ZP,
      };
      ST.utils = Object.assign(Sd.Z, {
        key: SS.ZP,
        extend: Sm,
        scriptloader: S7.ZP,
        rssparser: {
          parse: So.Z,
        },
        tea: SL.p,
        UI: SX.ZP,
      });
      ST.utils.css.style = ST.utils.style;
      ST.vid = Se.Z;
      var SS = ST;
      var Sk = S8(7543);
      function SF(SC) {
        var Sf = {};
        Sb(this, SC, SC, Sf);
        Sb(this, SC, Su.prototype, Sf);
      }
      function Sl(SC) {
        if ((SC = Ss(SC)).uniqueId) {
          return (SC._publicApi ||= new SF(SC));
        } else {
          return SC;
        }
      }
      const St = /^(?:on(?:ce)?|off|trigger)$/;
      const Sw = (SC) => {
        console.warn(
          "The API method jwplayer()." +
            SC +
            "() is disabled in the free edition of JW Player."
        );
      };
      const Sj = (SC, Sf) => {
        if (Sf.length) {
          const Sc = SC.getPlugin("jwpsrv");
          if (Sc != null && Sc.trackExternalAPIUsage) {
            Sf.forEach((SK) => {
              var SP = Sc;
              var SN = SK[0];
              var SK = SK[1];
              try {
                var Sn = ((Sy) => {
                  switch (SN) {
                    case "setup":
                      return Boolean(Sy);
                    case "getSafeRegion":
                    case "pauseAd":
                    case "setControls":
                    case "setFullscreen":
                    case "setMute":
                      if (Boolean(Sy) === Sy) {
                        return Sy;
                      } else {
                        return undefined;
                      }
                    case "setPlaylistItem":
                    case "getPlaylistItem":
                      if ((Sy | 0) === Sy) {
                        return Sy;
                      } else {
                        return undefined;
                      }
                    case "setPlaybackRate":
                    case "setVolume":
                      return Number(Sy);
                    case "setConfig":
                      return Object.keys(Object(Sy)).join(",");
                    case "on":
                    case "once":
                    case "off":
                    case "trigger":
                    case "getPlugin":
                    case "addPlugin":
                    case "registerPlugin":
                      return "" + Sy;
                  }
                  return null;
                })(SK);
                SP.trackExternalAPIUsage(SN, Sn);
              } catch (Sy) {
                if (SY.Z.debug) {
                  console.warn(Sy);
                }
              }
            });
            Sf.length = 0;
          }
        }
      };
      const Si = (SC, Sf, Sc, SK, SP) =>
        function (...SN) {
          const Sn = SN[0];
          const Sy = (Sf._trackCallQueue ||= []);
          const X0 = St.test(Sc);
          const X1 = X0 && SN[1] && SN[1]._callback;
          const X2 =
            SP.edition ||
            ((X3 = SP), (X6 = Sf.getConfig().edition), (X3.edition = X6));
          if (X2 === "free") {
            if (
              [
                "addButton",
                "addCues",
                "detachMedia",
                "load",
                "next",
                "pause",
                "play",
                "playlistItem",
                "playlistNext",
                "playlistPrev",
                "playToggle",
                "resize",
                "seek",
                "setCaptions",
                "setConfig",
                "setControls",
                "setCues",
                "setFullscreen",
                "setMute",
                "setPlaybackRate",
                "setPlaylistItem",
                "setVolume",
                "stop",
              ].indexOf(Sc) > -1
            ) {
              Sw(Sc);
              return SC;
            }
            if (
              [
                "createInstream",
                "setCurrentAudioTrack",
                "setCurrentCaptions",
                "setCurrentQuality",
              ].indexOf(Sc) > -1
            ) {
              Sw(Sc);
              return null;
            }
          }
          if (!X1) {
            Sy.push([Sc, Sn]);
          }
          if (X0) {
            Sj(Sf, Sy);
            return Sf[Sc].apply(SC, SN);
          }
          var X3 = Sc;
          var X4 = SN;
          var X5 = {
            reason:
              X3 !== "play" && X3 !== "seek" && X3 !== "pause" && (0, Sk.C)()
                ? "interaction"
                : "external",
          };
          switch (X3) {
            case "play":
            case "pause":
            case "playToggle":
            case "playlistNext":
            case "playlistPrev":
            case "next":
              X4[0] = X5;
              break;
            case "seek":
            case "playlistItem":
              X4[1] = X5;
          }
          var X6 = Sf[Sc](...SN);
          if (Sc === "remove") {
            Sf.off.call(SC);
          } else if (Sc === "setup") {
            Sf.off.call(SC);
            Sf.off(Sn.events, null, Sf);
            Sf.on.call(SC, Sn.events, null, SC);
            Sf.on("all", (X7, X8) => {
              if (X7 === "ready") {
                const X9 = Object.keys(Sf).filter(
                  (XX) =>
                    XX[0] !== "_" &&
                    SK.indexOf(XX) === -1 &&
                    typeof Sf[XX] == "function"
                );
                const XS = SK.concat(X9);
                X9.forEach((XX) => {
                  SC[XX] = Si(SC, Sf, XX, XS, SP);
                });
              }
              Sf.trigger.call(SC, X7, X8);
              Sj(Sf, Sy);
            });
          }
          Sj(Sf, Sy);
          if (X6 === Sf) {
            return SC;
          } else {
            return X6;
          }
        };
      const SZ = ["getMediaElement"];
      const Sb = (SC, Sf, Sc, SK) => {
        const SP = Object.keys(Sc);
        SP.forEach((SN) => {
          var Sn = Sc[SN];
          if (SZ.indexOf(SN) === -1) {
            if (typeof Sn == "function" && SN !== "Events") {
              SC[SN] = Si(SC, Sf, SN, SP, SK);
            } else if (SN === "_events") {
              SC._events = {};
            } else {
              Object.defineProperty(SC, SN, {
                enumerable: true,
                get: () => Sc[SN],
              });
            }
          }
        });
      };
      const SJ = window;
      Object.assign(Ss, SS);
      Object.assign(Sl, SS);
      SQ(Sl);
      if (typeof SJ.define == "function" && SJ.define.amd) {
        SJ.define([], function () {
          return Sl;
        });
      }
      let SB = Sl;
      const Sv = (SB = SJ.jwplayer ? SJ.jwplayer : SB);
    },
    8675: (S6, S7, S8) => {
      "use strict";

      S8.d(S7, {
        Ve: () => S9.Ve,
        ZP: () => SS,
        fo: () => S9.fo,
      });
      S8(3487);
      var S9 = S8(1241);
      const SS = S9.ZP;
    },
    3487: (S6, S7, S8) => {
      "use strict";

      S8.d(S7, {
        MK: () => S9.MK,
        Nq: () => S9.Nq,
        bX: () => SS,
        sb: () => SX,
      });
      S8(1569);
      var S9 = S8(7164);
      const SS = function (Sz) {
        let SA = (0, S9.bX)(Sz);
        if (Sz) {
          switch ((0, S9.Nq)(Sz)) {
            case "jwpsrv":
              SA = 305001;
              break;
            case "googima":
              SA = 305002;
              break;
            case "vast":
              SA = 305003;
              break;
            case "freewheel":
              SA = 305004;
              break;
            case "dai":
              SA = 305005;
              break;
            case "gapro":
              SA = 305006;
              break;
            case "bidding":
              SA = 305007;
          }
        }
        return SA;
      };
      const SX = (Sz) => {
        let SA = "";
        if (
          window.location.protocol !== "https:" &&
          window.location.protocol !== "http:"
        ) {
          SA = "https:";
        }
        Sz = {
          bidding: "//ssl.p.jwpcdn.com/player/v/8.33.2/bidding.js",
          jwpsrv: "//ssl.p.jwpcdn.com/player/v/8.33.2/jwpsrv.js",
          dai: "//ssl.p.jwpcdn.com/player/v/8.33.2/dai.js",
          vast: "//ssl.p.jwpcdn.com/player/v/8.33.2/vast.js",
          googima: "//ssl.p.jwpcdn.com/player/v/8.33.2/googima.js",
          freewheel: "//ssl.p.jwpcdn.com/player/v/8.33.2/freewheel.js",
          gapro: "//ssl.p.jwpcdn.com/player/v/8.33.2/gapro.js",
          interactive: "//ssl.p.jwpcdn.com/player/v/8.33.2/interactive.js",
          keepWatching: "//ssl.p.jwpcdn.com/player/v/8.33.2/keepWatching.js",
        }[Sz];
        if (Sz) {
          return SA + Sz;
        } else {
          return "";
        }
      };
    },
    1918: (S6, S7, S8) => {
      "use strict";

      S8.d(S7, {
        Gb: () => SY,
        d3: () => Sp,
        lD: () => SO,
        w0: () => Sx,
      });
      var S9 = S8(386);
      const SS = [
        {
          configName: "clearkey",
          keyName: "org.w3.clearkey",
        },
        {
          configName: "widevine",
          keyName: "com.widevine.alpha",
        },
        {
          configName: "playready",
          keyName: "com.microsoft.playready",
        },
      ];
      const SX = [];
      const Sz = {};
      let SA;
      const Sx = (SE) =>
        SE.some(
          (SG) => Boolean(SG.drm) || SG.sources.some((SR) => Boolean(SR.drm))
        );
      const SO = (SE) =>
        SA ||
        (((Boolean(navigator.requestMediaKeySystemAccess) &&
          Boolean(window.MediaKeySystemAccess.prototype.getConfiguration)) ||
          Boolean(window.MSMediaKeys)) &&
        (0, S9.Z)(SE)("drm")
          ? (SS.forEach((SG) => {
              SR = SG.keyName;
              var SR;
              var Sa = (
                navigator.requestMediaKeySystemAccess
                  ? navigator.requestMediaKeySystemAccess(SR, [
                      {
                        initDataTypes: ["cenc"],
                        videoCapabilities: [
                          {
                            contentType: 'video/mp4;codecs="avc1.4d401e"',
                          },
                        ],
                        audioCapabilities: [
                          {
                            contentType: 'audio/mp4;codecs="mp4a.40.2"',
                          },
                        ],
                      },
                    ])
                  : new Promise((SV, Sq) => {
                      let SI;
                      try {
                        SI = new window.MSMediaKeys(SR);
                      } catch (SH) {
                        Sq(SH);
                        return;
                      }
                      SV(SI);
                    })
              )
                .then(function () {
                  Sz[SG.configName] = true;
                })
                .catch(function () {
                  Sz[SG.configName] = false;
                });
              SX.push(Sa);
            }),
            (SA = Promise.all(SX)))
          : Promise.resolve());
      const SY = (SE) => Sz[SE];
      const Sp = (SE) => {
        if (SA) {
          return Object.keys(SE).some((SG) => SY(SG));
        }
      };
    },
    2963: (S6, S7, S8) => {
      "use strict";

      S8.d(S7, {
        B: () => SE,
      });
      var S7 = S8(6593);
      var S9 = S8(8348);
      var SS = S8(386);
      var SX = S8(1918);
      var Sz = S8(9025);
      const SA = (SG) => {
        if (SG == null || !SG.length || !Array.isArray(SG)) {
          SG = ['video/mp4;codecs="avc1.4d400d,mp4a.40.2"'];
        }
        const SR = window.MediaSource;
        return (
          !!SR &&
          !!SR.isTypeSupported &&
          SG.every((Sa) => SR.isTypeSupported(Sa))
        );
      };
      const Sx = (SG) =>
        /hls|m3u8/.test(
          ((SG == null ? undefined : SG.type) || "").toLowerCase()
        ) ||
        ((SG == null ? undefined : SG.file) || "")
          .toLowerCase()
          .indexOf(".m3u8") > -1;
      const SO = (SG) =>
        /mpd|dash/.test(
          ((SG == null ? undefined : SG.type) || "").toLowerCase()
        ) ||
        ((SG == null ? undefined : SG.file) || "")
          .toLowerCase()
          .indexOf("mpd-time-csf") > -1;
      const SY = S7.B.find((SG) => SG.name === "html5");
      const Sp = SY.supports;
      SY.supports = function (...SG) {
        var [SR, Sa] = SG;
        var SG = Sp.apply(this, SG);
        if (SO(SR)) {
          return false;
        }
        if (SG && SR.drm && Sx(SR)) {
          const SV = (0, SS.Z)(Sa)("drm");
          if (SV && SR.drm.fairplay) {
            const Sq = window.WebKitMediaKeys;
            if (Sq == null || Sq.isTypeSupported == null) {
              return undefined;
            } else {
              return Sq.isTypeSupported("com.apple.fps.1_0", "video/mp4");
            }
          }
          return SV;
        }
        return SG;
      };
      S7.B.push({
        name: "shaka",
        supports: (SG) =>
          (!SG.drm || !!(0, SX.d3)(SG.drm)) &&
          SA(SG.mediaTypes) &&
          (SO(SG) || Sx(SG)),
      });
      S7.B.unshift({
        name: "hlsjs",
        supports: (SG) => {
          var SR;
          var Sa;
          return (
            !SG.drm &&
            !!Sx(SG) &&
            !((SR = Boolean(
              Sz.Z == null || Sz.Z.canPlayType == null
                ? undefined
                : Sz.Z.canPlayType("application/vnd.apple.mpegURL")
            )),
            (Sa =
              typeof (SG == null ? undefined : SG.safarihlsjs) == "boolean" &&
              SG.safarihlsjs),
            typeof (SG == null ? undefined : SG.hlsjsdefault) == "boolean" &&
              SG.hlsjsdefault,
            typeof (SG == null ? undefined : SG.androidhls) == "boolean" &&
              SG.androidhls,
            SR && S9.Browser.safari && !Sa) &&
            (!SR ||
              !S9.OS.android ||
              SG.androidhls === false ||
              SG.hlsjsdefault !== false) &&
            SA(SG.mediaTypes)
          );
        },
      });
      const SE = S7.B;
    },
    2303: (S6, S7, S8) => {
      "use strict";

      S8.d(S7, {
        Z: () => SO,
      });
      var S9 = S8(2963);
      var SS = S8(12);
      var SX = S8(670);
      var Sz = S8(2894);
      var S7 = {
        html5: () =>
          S8.e(250)
            .then(
              function (SY) {
                var Sp = S8(9181).default;
                (0, SX.Z)(Sp);
                return Sp;
              }.bind(null, S8)
            )
            .catch((0, Sz.Ep)(152)),
      };
      Object.assign(S7, {
        shaka: () =>
          S8.e(371)
            .then(
              function (SY) {
                var Sp = S8(2287).default;
                (0, SX.Z)(Sp);
                return Sp;
              }.bind(null, S8)
            )
            .catch((0, Sz.Ep)(154)),
        hlsjs: () =>
          S8.e(98)
            .then(
              function (SY) {
                var Sp = S8(9054).default;
                (0, SX.Z)(Sp);
                return Sp;
              }.bind(null, S8)
            )
            .catch((0, Sz.Ep)(153)),
      });
      function SA(SY) {
        this.config = SY || {};
      }
      const Sx = S7;
      Object.assign(SA.prototype, {
        load(SY) {
          const Sp = Sx[SY];
          const SE = () => Promise.reject(new Error("Failed to load media"));
          if (Sp) {
            return Sp().then(() => {
              return SS.U[SY] || SE();
            });
          } else {
            return SE();
          }
        },
        providerSupports: (SY, Sp) => SY.supports(Sp),
        choose(SY) {
          if (SY === Object(SY)) {
            var Sp = S9.B.length;
            for (let SG = 0; SG < Sp; SG++) {
              var SE = S9.B[SG];
              if (this.providerSupports(SE, SY)) {
                return {
                  priority: Sp - SG - 1,
                  name: SE.name,
                  type: SY.type,
                  providerToCheck: SE,
                  provider: SS.U[SE.name],
                };
              }
            }
          }
          return {};
        },
      });
      S7 = SA;
      S7.prototype.providerSupports = function (SY, Sp) {
        return SY.supports(Sp, this.config.edition);
      };
      const SO = S7;
    },
    5140: (S6, S7, S8) => {
      "use strict";

      S8.d(S7, {
        t: () => S9,
      });
      const S9 = window.atob;
      window.btoa;
    },
    386: (S6, S7, S8) => {
      "use strict";

      S8.d(S7, {
        Z: () =>
          function (SR) {
            const Sa = {
              setup: [S9, SS, SX, Sz, SA, Sx, SY, Sp, SE, SO],
              drm: [SA, Sx, SY, Sp, SE],
              ads: [SY, Sp, SE, SO, SA, Sx, SX],
              jwpsrv: [S9, SS, SX, Sz, SA, Sx, SY, SE, SO, SG],
              discovery: [SY, SA, Sx, SE, Sp],
            };
            return function (SV) {
              return Sa[SV] && Sa[SV].indexOf(SR) > -1;
            };
          },
      });
      const S9 = "free";
      const SS = "starter";
      const SX = "business";
      const Sz = "premium";
      const SA = "enterprise";
      const Sx = "developer";
      const SO = "platinum";
      const SY = "ads";
      const Sp = "unlimited";
      const SE = "trial";
      const SG = "invalid";
    },
    7010: (S6, S7, S8) => {
      "use strict";

      S8.d(S7, {
        Z: () =>
          function () {
            return SS(window, document.location.search);
          },
      });
      var S9 = S8(5950);
      const SS = function (SX, Sz) {
        return SX.location !== SX.parent.location && (0, S9.ke)(Sz, "isAMP");
      };
    },
    560: (S6, S7, S8) => {
      "use strict";

      S8.d(S7, {
        Z: () => SS,
      });
      const S9 = () => S9._iframe;
      S9.mock = (SX) => {
        S9._iframe = SX;
      };
      S9.unmock = () => {
        S9._iframe = S9._original;
      };
      S9._iframe = window.top !== window.self;
      S9._original = S9._iframe;
      const SS = S9;
    },
    6599: (S6, S7, S8) => {
      "use strict";

      S8.d(S7, {
        ZP: () => SO,
        u5: () => SA,
      });
      var S9 = S8(5592);
      var SS = S8(386);
      var SX = S8(5140);
      var Sz = S8(4446);
      const SA = 100013;
      const Sx = "invalid";
      const SO = class {
        constructor(SY) {
          this.keyData = ((Sp) => {
            let SE;
            let SG;
            let SR;
            try {
              var Sa = (0, S9.p)(
                Sp || "",
                (0, SX.t)("NDh2aU1Cb0NHRG5hcDFRZQ==")
              ).split("/");
              if ((SE = Sa[0]) === "pro") {
                SE = "premium";
              }
              if (!(0, SS.Z)(SE)("setup")) {
                SE = Sx;
              }
              if (Sa.length > 2) {
                SG = Sa[1];
                const SV = parseInt(Sa[2], 10);
                if (SV > 0) {
                  (SR = new Date()).setTime(SV);
                }
              }
            } catch (Sq) {
              SE = Sx;
            }
            return {
              edition: SE,
              token: SG,
              expiration: SR,
            };
          })(SY);
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
            let Sp;
            if (SY === undefined) {
              Sp = 100011;
            } else if (this.keyData.edition !== Sx && this.keyData.token) {
              if (this.duration() < 0) {
                Sp = SA;
              }
            } else {
              Sp = 100012;
            }
            if (Sp) {
              return new Sz.rG(Sz.pJ, Sp);
            } else {
              return null;
            }
          };
        }
      };
    },
    67: (S6, S7, S8) => {
      "use strict";

      S8.d(S7, {
        X: () => SS,
      });
      var S9 = S8(560);
      const SS = () => {
        let SX = window.location.host;
        if ((0, S9.Z)()) {
          SX = (
            document.referrer
              ? ((Sz = document.referrer),
                ((SA = document.createElement("a")).href = Sz),
                SA)
              : {}
          ).host;
          try {
            SX = SX || window.top.location.host;
          } catch (Sx) {}
        }
        var Sz;
        var SA;
        return SX;
      };
    },
    5592: (S6, S7, S8) => {
      "use strict";

      S8.d(S7, {
        p: () => SX,
      });
      var S9 = S8(5140);
      const SS = (Sz) => {
        var SA = new Array(Math.ceil(Sz.length / 4));
        for (let Sx = 0; Sx < SA.length; Sx++) {
          SA[Sx] =
            Sz.charCodeAt(Sx * 4) +
            (Sz.charCodeAt(Sx * 4 + 1) << 8) +
            (Sz.charCodeAt(Sx * 4 + 2) << 16) +
            (Sz.charCodeAt(Sx * 4 + 3) << 24);
        }
        return SA;
      };
      const SX = function (Sz, SA) {
        Sz = String(Sz);
        SA = String(SA);
        if (Sz.length === 0) {
          return "";
        }
        var Sx = SS((0, S9.t)(Sz));
        var SO = SS(unescape(encodeURIComponent(SA)).slice(0, 16));
        var SY = Sx.length;
        let Sp;
        let SE;
        let SG = void Sx[SY - 1];
        let SR = Sx[0];
        let Sa = Math.floor(6 + 52 / SY) * 2654435769;
        while (Sa) {
          SE = (Sa >>> 2) & 3;
          for (let SV = SY - 1; SV >= 0; SV--) {
            Sp =
              ((((SG = Sx[SV > 0 ? SV - 1 : SY - 1]) >>> 5) ^ (SR << 2)) +
                ((SR >>> 3) ^ (SG << 4))) ^
              ((Sa ^ SR) + (SO[(SV & 3) ^ SE] ^ SG));
            SR = Sx[SV] -= Sp;
          }
          Sa -= 2654435769;
        }
        Sz = ((Sq) => {
          var SI = new Array(Sq.length);
          for (let SH = 0; SH < Sq.length; SH++) {
            SI[SH] = String.fromCharCode(
              Sq[SH] & 255,
              (Sq[SH] >>> 8) & 255,
              (Sq[SH] >>> 16) & 255,
              (Sq[SH] >>> 24) & 255
            );
          }
          return SI.join("");
        })(Sx).replace(/\0+$/, "");
        try {
          return decodeURIComponent(escape(Sz));
        } catch (Sq) {
          return Sz;
        }
      };
    },
    1096: function (S6) {
      S6.exports = (function () {
        "use strict";

        function S7() {}
        function S8(SO) {
          if (!(this instanceof S8)) {
            throw new TypeError("Promises must be constructed via new");
          }
          if (typeof SO != "function") {
            throw new TypeError("not a function");
          }
          this._state = 0;
          this._handled = false;
          this._value = undefined;
          this._deferreds = [];
          SA(SO, this);
        }
        function S9(SO, SY) {
          while (SO._state === 3) {
            SO = SO._value;
          }
          if (SO._state !== 0) {
            SO._handled = true;
            S8._immediateFn(function () {
              var Sp;
              var SE = SO._state === 1 ? SY.onFulfilled : SY.onRejected;
              if (SE !== null) {
                try {
                  Sp = SE(SO._value);
                } catch (SG) {
                  SX(SY.promise, SG);
                  return;
                }
                SS(SY.promise, Sp);
              } else {
                (SO._state === 1 ? SS : SX)(SY.promise, SO._value);
              }
            });
          } else {
            SO._deferreds.push(SY);
          }
        }
        function SS(SO, SY) {
          try {
            if (SY === SO) {
              throw new TypeError("A promise cannot be resolved with itself.");
            }
            if (SY && (typeof SY == "object" || typeof SY == "function")) {
              var Sp = SY.then;
              if (SY instanceof S8) {
                SO._state = 3;
                SO._value = SY;
                return Sz(SO);
              }
              if (typeof Sp == "function") {
                return SA(
                  ((SE = Sp),
                  (SG = SY),
                  function () {
                    SE.apply(SG, arguments);
                  }),
                  SO
                );
              }
            }
            SO._state = 1;
            SO._value = SY;
            Sz(SO);
          } catch (SR) {
            SX(SO, SR);
          }
          var SE;
          var SG;
        }
        function SX(SO, SY) {
          SO._state = 2;
          SO._value = SY;
          Sz(SO);
        }
        function Sz(SO) {
          if (SO._state === 2 && SO._deferreds.length === 0) {
            S8._immediateFn(function () {
              if (!SO._handled) {
                S8._unhandledRejectionFn(SO._value);
              }
            });
          }
          for (var SY = 0, Sp = SO._deferreds.length; SY < Sp; SY++) {
            S9(SO, SO._deferreds[SY]);
          }
          SO._deferreds = null;
        }
        function SA(SO, SY) {
          var Sp = false;
          try {
            SO(
              function (SE) {
                if (!Sp) {
                  Sp = true;
                  SS(SY, SE);
                }
              },
              function (SE) {
                if (!Sp) {
                  Sp = true;
                  SX(SY, SE);
                }
              }
            );
          } catch (SE) {
            if (!Sp) {
              Sp = true;
              SX(SY, SE);
            }
          }
        }
        var Sx = setTimeout;
        S8.prototype.catch = function (SO) {
          return this.then(null, SO);
        };
        S8.prototype.then = function (SO, SY) {
          var Sp = new this.constructor(S7);
          S9(
            this,
            new (function (SE, SG, SR) {
              this.onFulfilled = typeof SO == "function" ? SO : null;
              this.onRejected = typeof SG == "function" ? SG : null;
              this.promise = SR;
            })(0, SY, Sp)
          );
          return Sp;
        };
        S8.prototype.finally = function (SO) {
          var SY = this.constructor;
          return this.then(
            function (Sp) {
              return SY.resolve(SO()).then(function () {
                return Sp;
              });
            },
            function (Sp) {
              return SY.resolve(SO()).then(function () {
                return SY.reject(Sp);
              });
            }
          );
        };
        S8.all = function (SO) {
          return new S8(function (SY, Sp) {
            if (!SO || SO.length === undefined) {
              throw new TypeError("Promise.all accepts an array");
            }
            var SE = Array.prototype.slice.call(SO);
            if (SE.length === 0) {
              return SY([]);
            }
            var SG = SE.length;
            for (var SR = 0; SE.length > SR; SR++) {
              (function Sa(SV, Sq) {
                try {
                  if (
                    Sq &&
                    (typeof Sq == "object" || typeof Sq == "function")
                  ) {
                    var SI = Sq.then;
                    if (typeof SI == "function") {
                      return SI.call(
                        Sq,
                        function (SH) {
                          Sa(SV, SH);
                        },
                        Sp
                      );
                    }
                  }
                  SE[SV] = Sq;
                  if (--SG == 0) {
                    SY(SE);
                  }
                } catch (SH) {
                  Sp(SH);
                }
              })(SR, SE[SR]);
            }
          });
        };
        S8.resolve = function (SO) {
          if (SO && typeof SO == "object" && SO.constructor === S8) {
            return SO;
          } else {
            return new S8(function (SY) {
              SY(SO);
            });
          }
        };
        S8.reject = function (SO) {
          return new S8(function (SY, Sp) {
            Sp(SO);
          });
        };
        S8.race = function (SO) {
          return new S8(function (SY, Sp) {
            for (var SE = 0, SG = SO.length; SE < SG; SE++) {
              SO[SE].then(SY, Sp);
            }
          });
        };
        S8._immediateFn =
          typeof setImmediate == "function"
            ? function (SO) {
                setImmediate(SO);
              }
            : function (SO) {
                Sx(SO, 0);
              };
        S8._unhandledRejectionFn = function (SO) {
          if (console !== undefined && console) {
            console.warn("Possible Unhandled Promise Rejection:", SO);
          }
        };
        return S8;
      })();
    },
    9563: (S6) => {
      var S7;
      var S8;
      var S9 = {};
      var SS = {};
      S7 = function () {
        return document.head || document.getElementsByTagName("head")[0];
      };
      function SX() {
        return (S8 = S8 === undefined ? S7.apply(this, arguments) : S8);
      }
      function Sz(SY, Sp) {
        var SE;
        var SG;
        var SR = SS[SY];
        var Sa = (SR =
          SR ||
          (SS[SY] = {
            element:
              ((SY = SY),
              ((SG = document.createElement("style")).type = "text/css"),
              SG.setAttribute("data-jwplayer-id", SY),
              (SY = SG),
              SX().appendChild(SY),
              SG),
            counter: 0,
          })).counter++;
        var SV = SR.element;
        function Sq() {
          SO(SV, Sa, "");
        }
        (SE = function (SI) {
          SO(SV, Sa, SI);
        })(Sp.css);
        return function (SI) {
          if (SI) {
            if (SI.css !== Sp.css || SI.media !== Sp.media) {
              SE((Sp = SI).css);
            }
          } else {
            Sq();
          }
        };
      }
      S6.exports = {
        style: function (SY, Sp) {
          var SE = Sp;
          for (
            var SG = (function (SH) {
                var SU = [];
                var Sd = {};
                for (var SW = 0; SW < SH.length; SW++) {
                  var Sg = SH[SW];
                  var Sh = Sg[0];
                  var Sg = {
                    css: Sg[1],
                    media: Sg[2],
                  };
                  if (Sd[Sh]) {
                    Sd[Sh].parts.push(Sg);
                  } else {
                    SU.push(
                      (Sd[Sh] = {
                        id: Sh,
                        parts: [Sg],
                      })
                    );
                  }
                }
                return SU;
              })(SY),
              SR = 0;
            SR < SG.length;
            SR++
          ) {
            var Sa = SG[SR];
            var SV = (S9[SE] || {})[Sa.id];
            if (SV) {
              for (var Sq = 0; Sq < SV.parts.length; Sq++) {
                SV.parts[Sq](Sa.parts[Sq]);
              }
              for (; Sq < Sa.parts.length; Sq++) {
                SV.parts.push(Sz(SE, Sa.parts[Sq]));
              }
            } else {
              var SI = [];
              for (var Sq = 0; Sq < Sa.parts.length; Sq++) {
                SI.push(Sz(SE, Sa.parts[Sq]));
              }
              S9[SE] = S9[SE] || {};
              S9[SE][Sa.id] = {
                id: Sa.id,
                parts: SI,
              };
            }
          }
        },
        clear: function (SY, Sp) {
          var SE = S9[SY];
          if (SE) {
            if (Sp) {
              var SG = SE[Sp];
              if (SG) {
                for (var SR = 0; SR < SG.parts.length; SR += 1) {
                  SG.parts[SR]();
                }
              }
            } else {
              for (var Sa = Object.keys(SE), SV = 0; SV < Sa.length; SV += 1) {
                for (
                  var Sq = SE[Sa[SV]], SI = 0;
                  SI < Sq.parts.length;
                  SI += 1
                ) {
                  Sq.parts[SI]();
                }
              }
              delete S9[SY];
            }
          }
        },
      };
      SA = [];
      var SA;
      function Sx(SY, Sp) {
        SA[SY] = Sp;
        return SA.filter(Boolean).join("\n");
      }
      function SO(SY, Sp, SE) {
        if (SY.styleSheet) {
          SY.styleSheet.cssText = Sx(Sp, SE);
        } else {
          SE = document.createTextNode(SE);
          if ((Sp = SY.childNodes[Sp])) {
            SY.replaceChild(SE, Sp);
          } else {
            SY.appendChild(SE);
          }
        }
      }
    },
    4737: (S6) => {
      S6.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 150 29.3" class="jw-svg-icon jw-svg-icon-watermark" focusable="false"><path d="M37,16.68c0,2.4-.59,3.43-2.4,3.43a5.75,5.75,0,0,1-3.38-1.23v3.58a7.39,7.39,0,0,0,3.67,1c3.67,0,5.73-1.91,5.73-6.32V5.86H37Z"></path><polygon points="58.33 17.61 55.39 6.01 52.55 6.01 49.52 17.61 46.73 6.01 43.06 6.01 47.56 23.29 50.89 23.29 53.92 11.88 56.96 23.29 60.24 23.29 64.74 6.01 61.17 6.01 58.33 17.61"></polygon><path d="M73.84,6H67.47V23.29h2.2v-6.9h4.17c3.47,0,5.77-1.77,5.77-5.19S77.31,6,73.84,6Zm0,8.47H69.72V8h4.12c2.3,0,3.57,1.22,3.62,3.28C77.46,13.21,76.19,14.48,73.84,14.48Z"></path><path d="M99.2,6l-6,15.27H85V6H82.8V23.29H94.7l2-5.19h7.09l2,5.19H108L101.26,6ZM97.39,16.14l2.84-7.39L103,16.14Z"></path><polygon points="113.98 14.18 108.99 6.01 106.59 6.01 112.81 16.14 112.81 23.29 115.01 23.29 115.01 16.14 121.33 6.01 118.98 6.01 113.98 14.18"></polygon><polygon points="123.14 23.29 134.1 23.29 134.1 21.28 125.29 21.28 125.29 15.41 133.32 15.41 133.32 13.45 125.29 13.45 125.29 7.97 134.1 7.97 134.1 6.01 123.14 6.01 123.14 23.29"></polygon><path d="M144.86,15.85c2.74-.39,4.41-2,4.41-4.85,0-3.23-2.26-5-5.73-5h-6.32V23.29h2.22V16h3.08l4.94,7.29H150Zm-5.42-1.71V8h4.06c2.3,0,3.62,1.17,3.62,3.08s-1.32,3.09-3.62,3.09Z"></path><path d="M27.63.09a1,1,0,0,0-1.32.48c-.24.51-6.35,15.3-6.35,15.3-.2.46-.33.41-.33-.07,0,0,0-5.15,0-9.39,0-2.31-1.12-3.61-2.73-3.88A3.12,3.12,0,0,0,14.83,3a4.57,4.57,0,0,0-1.5,1.79c-.48.94-3.47,9.66-3.47,9.66-.16.46-.31.44-.31,0,0,0-.09-3.76-.18-4.64-.13-1.36-.44-3.59-2.2-3.7S4.77,8,4.36,9.24c-.29.84-1.65,5.35-1.65,5.35l-.2.46h0c-.06.24-.17.24-.24,0l-.11-.42Q2,14,1.74,13.31a1.71,1.71,0,0,0-.33-.66.83.83,0,0,0-.88-.22.82.82,0,0,0-.53.69,4.22,4.22,0,0,0,.07.79,29,29,0,0,0,1,4.6,1.31,1.31,0,0,0,1.8.66,3.43,3.43,0,0,0,1.24-1.81c.33-.81,2-5.48,2-5.48.18-.46.31-.44.29,0,0,0-.09,4.57-.09,6.64a13.11,13.11,0,0,0,.28,2.93,2.41,2.41,0,0,0,.82,1.27,2,2,0,0,0,1.41.4,2,2,0,0,0,.7-.24,3.15,3.15,0,0,0,.79-.71,12.52,12.52,0,0,0,1.26-2.11c.81-1.6,2.92-6.58,2.92-6.58.2-.46.33-.41.33.07,0,0-.26,8.36-.26,11.55a6.39,6.39,0,0,0,.44,2.33,2.8,2.8,0,0,0,1.45,1.61A2.57,2.57,0,0,0,18.79,29a3.76,3.76,0,0,0,1.28-1.32,15.12,15.12,0,0,0,1.07-2.31c.64-1.65,1.17-3.33,1.7-5s5-17.65,5.28-19a1.79,1.79,0,0,0,0-.46A1,1,0,0,0,27.63.09Z"></path></svg>';
    },
  };
  var S3 = {};
  function S4(S6) {
    var S7 = S3[S6];
    if (S7 === undefined) {
      S7 = S3[S6] = {
        id: S6,
        loaded: false,
        exports: {},
      };
      S2[S6].call(S7.exports, S7, S7.exports, S4);
      S7.loaded = true;
    }
    return S7.exports;
  }
  S4.m = S2;
  S4.n = (S6) => {
    var S7 = S6 && S6.__esModule ? () => S6.default : () => S6;
    S4.d(S7, {
      a: S7,
    });
    return S7;
  };
  S4.d = (S6, S7) => {
    for (var S8 in S7) {
      if (S4.o(S7, S8) && !S4.o(S6, S8)) {
        Object.defineProperty(S6, S8, {
          enumerable: true,
          get: S7[S8],
        });
      }
    }
  };
  S4.f = {};
  S4.e = (S6) =>
    Promise.all(
      Object.keys(S4.f).reduce((S7, S8) => {
        S4.f[S8](S6, S7);
        return S7;
      }, [])
    );
  S4.u = (S6) =>
    ({
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
      977: "provider.cast",
    }[S6] + ".js");
  S4.o = (S6, S7) => Object.prototype.hasOwnProperty.call(S6, S7);
  N = {};
  y = "jwplayer:";
  S4.l = (S6, S7, S8, S9) => {
    if (N[S6]) {
      N[S6].push(S7);
    } else {
      var SS;
      var SX;
      if (S8 !== undefined) {
        for (
          var Sz = document.getElementsByTagName("script"), SA = 0;
          SA < Sz.length;
          SA++
        ) {
          var Sx = Sz[SA];
          if (
            Sx.getAttribute("src") == S6 ||
            Sx.getAttribute("data-webpack") == y + S8
          ) {
            SS = Sx;
            break;
          }
        }
      }
      if (!SS) {
        SX = true;
        (SS = document.createElement("script")).charset = "utf-8";
        SS.timeout = 55;
        if (S4.nc) {
          SS.setAttribute("nonce", S4.nc);
        }
        SS.setAttribute("data-webpack", y + S8);
        SS.src = S6;
      }
      N[S6] = [S7];
      var S7 = (SY, Sp) => {
        SS.onerror = SS.onload = null;
        clearTimeout(SO);
        var SE = N[S6];
        delete N[S6];
        if (SS.parentNode) {
          SS.parentNode.removeChild(SS);
        }
        if (SE) {
          SE.forEach((SG) => SG(Sp));
        }
        if (SY) {
          return SY(Sp);
        }
      };
      var SO = setTimeout(
        S7.bind(null, undefined, {
          type: "timeout",
          target: SS,
        }),
        55000
      );
      SS.onerror = S7.bind(null, SS.onerror);
      SS.onload = S7.bind(null, SS.onload);
      if (SX) {
        document.head.appendChild(SS);
      }
    }
  };
  S4.r = (S6) => {
    if (typeof Symbol != "undefined" && Symbol.toStringTag) {
      Object.defineProperty(S6, Symbol.toStringTag, {
        value: "Module",
      });
    }
    Object.defineProperty(S6, "__esModule", {
      value: true,
    });
  };
  S4.nmd = (S6) => {
    S6.paths = [];
    S6.children ||= [];
    return S6;
  };
  S4.p = "";
  S0 = {
    313: 0,
  };
  S4.f.j = (S6, S7) => {
    var S8;
    var S9;
    var SS = S4.o(S0, S6) ? S0[S6] : undefined;
    if (SS !== 0) {
      if (SS) {
        S7.push(SS[2]);
      } else {
        S8 = new Promise((SX, Sz) => (SS = S0[S6] = [SX, Sz]));
        S7.push((SS[2] = S8));
        S7 = S4.p + S4.u(S6);
        S9 = new Error();
        S4.l(
          S7,
          (SX) => {
            var Sz;
            if (
              S4.o(S0, S6) &&
              ((SS = S0[S6]) !== 0 && (S0[S6] = undefined), SS)
            ) {
              Sz = SX && (SX.type === "load" ? "missing" : SX.type);
              SX = SX && SX.target && SX.target.src;
              S9.message =
                "Loading chunk " + S6 + " failed.\n(" + Sz + ": " + SX + ")";
              S9.name = "ChunkLoadError";
              S9.type = Sz;
              S9.request = SX;
              SS[1](S9);
            }
          },
          "chunk-" + S6,
          S6
        );
      }
    }
  };
  S5 = (S6, S7) => {
    var S8;
    var S9;
    var [SS, SX, Sz] = S7;
    var SA = 0;
    if (SS.some((Sx) => S0[Sx] !== 0)) {
      for (S8 in SX) {
        if (S4.o(SX, S8)) {
          S4.m[S8] = SX[S8];
        }
      }
      if (Sz) {
        Sz(S4);
      }
    }
    for (S6 && S6(S7); SA < SS.length; SA++) {
      S9 = SS[SA];
      if (S4.o(S0, S9) && S0[S9]) {
        S0[S9][0]();
      }
      S0[S9] = 0;
    }
  };
  (S1 = self.webpackChunkjwplayer = self.webpackChunkjwplayer || []).forEach(
    S5.bind(null, 0)
  );
  S1.push = S5.bind(null, S1.push.bind(S1));
  S4.nc = undefined;
  var S5 = S4(6577);
  window.jwplayer = S5.default;
})();
(function (N, y) {
  var S0;
  var S1;
  if (typeof exports == "object" && typeof module != "undefined") {
    module.exports = y();
  } else if (typeof define == "function" && define.amd) {
    define(y);
  } else {
    N = N || self;
    S0 = N.Cookies;
    (S1 = N.Cookies = y()).noConflict = function () {
      N.Cookies = S0;
      return S1;
    };
  }
})(this, function () {
  "use strict";

  function N(y) {
    for (var S0 = 1; S0 < arguments.length; S0++) {
      var S1;
      var S2 = arguments[S0];
      for (S1 in S2) {
        y[S1] = S2[S1];
      }
    }
    return y;
  }
  var n = {
    read: function (y) {
      return y.replace(/(%[\dA-F]{2})+/gi, decodeURIComponent);
    },
    write: function (y) {
      return encodeURIComponent(y).replace(
        /%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g,
        decodeURIComponent
      );
    },
  };
  return (function y(S0, S1) {
    function S2(S3, S4, S5) {
      if (typeof document != "undefined") {
        if (typeof (S5 = N({}, S1, S5)).expires == "number") {
          S5.expires = new Date(Date.now() + S5.expires * 86400000);
        }
        S5.expires &&= S5.expires.toUTCString();
        S3 = encodeURIComponent(S3)
          .replace(/%(2[346B]|5E|60|7C)/g, decodeURIComponent)
          .replace(/[()]/g, escape);
        S4 = S0.write(S4, S3);
        var S6;
        var S7 = "";
        for (S6 in S5) {
          if (S5[S6] && ((S7 += "; " + S6), S5[S6] !== true)) {
            S7 += "=" + S5[S6].split(";")[0];
          }
        }
        return (document.cookie = S3 + "=" + S4 + S7);
      }
    }
    return Object.create(
      {
        set: S2,
        get: function (S3) {
          if (typeof document != "undefined" && (!arguments.length || S3)) {
            for (
              var S4 = document.cookie ? document.cookie.split("; ") : [],
                S5 = {},
                S6 = 0;
              S6 < S4.length;
              S6++
            ) {
              var S7 = S4[S6].split("=");
              var S8 = S7.slice(1).join("=");
              if (S8[0] === '"') {
                S8 = S8.slice(1, -1);
              }
              try {
                var S9 = n.read(S7[0]);
                S5[S9] = S0.read(S8, S9);
                if (S3 === S9) {
                  break;
                }
              } catch (SS) {}
            }
            if (S3) {
              return S5[S3];
            } else {
              return S5;
            }
          }
        },
        remove: function (S3, S4) {
          S2(
            S3,
            "",
            N({}, S4, {
              expires: -1,
            })
          );
        },
        withAttributes: function (S3) {
          return y(this.converter, N({}, this.attributes, S3));
        },
        withConverter: function (S3) {
          return y(N({}, this.converter, S3), this.attributes);
        },
      },
      {
        attributes: {
          value: Object.freeze(S1),
        },
        converter: {
          value: Object.freeze(S0),
        },
      }
    );
  })(n, {
    path: "/",
  });
});
(function (N) {
  (function () {
    if (typeof module != "undefined" && module.exports) {
      return function (n) {
        module.exports = n();
      };
    }
    if (typeof define == "function" && define.amd) {
      return define;
    }
    if (typeof window != "undefined") {
      return function (n) {
        window.MobileDetect = n();
      };
    }
    throw new Error("unknown environment");
  })()(function () {
    "use strict";

    function y(SA, Sx) {
      return SA != null && Sx != null && SA.toLowerCase() === Sx.toLowerCase();
    }
    function S0(SA, Sx) {
      var SO;
      var SY;
      var Sp = SA.length;
      if (Sp && Sx) {
        SO = Sx.toLowerCase();
        SY = 0;
        for (; SY < Sp; ++SY) {
          if (SO === SA[SY].toLowerCase()) {
            return true;
          }
        }
      }
      return false;
    }
    function S1(SA) {
      for (var Sx in SA) {
        if (SS.call(SA, Sx)) {
          SA[Sx] = new RegExp(SA[Sx], "i");
        }
      }
    }
    function S2(SA, Sx) {
      this.ua = (SA || "").substr(0, 500);
      this._cache = {};
      this.maxPhoneWidth = Sx || 600;
    }
    var S3;
    var S4;
    var S5;
    var S6;
    var S7;
    var S8;
    var S9 = {
      mobileDetectRules: {
        phones: {
          iPhone: "\\biPhone\\b|\\biPod\\b",
          BlackBerry:
            "BlackBerry|\\bBB10\\b|rim[0-9]+|\\b(BBA100|BBB100|BBD100|BBE100|BBF100|STH100)\\b-[0-9]+",
          HTC: "HTC|HTC.*(Sensation|Evo|Vision|Explorer|6800|8100|8900|A7272|S510e|C110e|Legend|Desire|T8282)|APX515CKT|Qtek9090|APA9292KT|HD_mini|Sensation.*Z710e|PG86100|Z715e|Desire.*(A8181|HD)|ADR6200|ADR6400L|ADR6425|001HT|Inspire 4G|Android.*\\bEVO\\b|T-Mobile G1|Z520m|Android [0-9.]+; Pixel",
          Nexus:
            "Nexus One|Nexus S|Galaxy.*Nexus|Android.*Nexus.*Mobile|Nexus 4|Nexus 5|Nexus 6",
          Dell: "Dell[;]? (Streak|Aero|Venue|Venue Pro|Flash|Smoke|Mini 3iX)|XCD28|XCD35|\\b001DL\\b|\\b101DL\\b|\\bGS01\\b",
          Motorola:
            "Motorola|DROIDX|DROID BIONIC|\\bDroid\\b.*Build|Android.*Xoom|HRI39|MOT-|A1260|A1680|A555|A853|A855|A953|A955|A956|Motorola.*ELECTRIFY|Motorola.*i1|i867|i940|MB200|MB300|MB501|MB502|MB508|MB511|MB520|MB525|MB526|MB611|MB612|MB632|MB810|MB855|MB860|MB861|MB865|MB870|ME501|ME502|ME511|ME525|ME600|ME632|ME722|ME811|ME860|ME863|ME865|MT620|MT710|MT716|MT720|MT810|MT870|MT917|Motorola.*TITANIUM|WX435|WX445|XT300|XT301|XT311|XT316|XT317|XT319|XT320|XT390|XT502|XT530|XT531|XT532|XT535|XT603|XT610|XT611|XT615|XT681|XT701|XT702|XT711|XT720|XT800|XT806|XT860|XT862|XT875|XT882|XT883|XT894|XT901|XT907|XT909|XT910|XT912|XT928|XT926|XT915|XT919|XT925|XT1021|\\bMoto E\\b|XT1068|XT1092|XT1052",
          Samsung:
            "\\bSamsung\\b|SM-G950F|SM-G955F|SM-G9250|GT-19300|SGH-I337|BGT-S5230|GT-B2100|GT-B2700|GT-B2710|GT-B3210|GT-B3310|GT-B3410|GT-B3730|GT-B3740|GT-B5510|GT-B5512|GT-B5722|GT-B6520|GT-B7300|GT-B7320|GT-B7330|GT-B7350|GT-B7510|GT-B7722|GT-B7800|GT-C3010|GT-C3011|GT-C3060|GT-C3200|GT-C3212|GT-C3212I|GT-C3262|GT-C3222|GT-C3300|GT-C3300K|GT-C3303|GT-C3303K|GT-C3310|GT-C3322|GT-C3330|GT-C3350|GT-C3500|GT-C3510|GT-C3530|GT-C3630|GT-C3780|GT-C5010|GT-C5212|GT-C6620|GT-C6625|GT-C6712|GT-E1050|GT-E1070|GT-E1075|GT-E1080|GT-E1081|GT-E1085|GT-E1087|GT-E1100|GT-E1107|GT-E1110|GT-E1120|GT-E1125|GT-E1130|GT-E1160|GT-E1170|GT-E1175|GT-E1180|GT-E1182|GT-E1200|GT-E1210|GT-E1225|GT-E1230|GT-E1390|GT-E2100|GT-E2120|GT-E2121|GT-E2152|GT-E2220|GT-E2222|GT-E2230|GT-E2232|GT-E2250|GT-E2370|GT-E2550|GT-E2652|GT-E3210|GT-E3213|GT-I5500|GT-I5503|GT-I5700|GT-I5800|GT-I5801|GT-I6410|GT-I6420|GT-I7110|GT-I7410|GT-I7500|GT-I8000|GT-I8150|GT-I8160|GT-I8190|GT-I8320|GT-I8330|GT-I8350|GT-I8530|GT-I8700|GT-I8703|GT-I8910|GT-I9000|GT-I9001|GT-I9003|GT-I9010|GT-I9020|GT-I9023|GT-I9070|GT-I9082|GT-I9100|GT-I9103|GT-I9220|GT-I9250|GT-I9300|GT-I9305|GT-I9500|GT-I9505|GT-M3510|GT-M5650|GT-M7500|GT-M7600|GT-M7603|GT-M8800|GT-M8910|GT-N7000|GT-S3110|GT-S3310|GT-S3350|GT-S3353|GT-S3370|GT-S3650|GT-S3653|GT-S3770|GT-S3850|GT-S5210|GT-S5220|GT-S5229|GT-S5230|GT-S5233|GT-S5250|GT-S5253|GT-S5260|GT-S5263|GT-S5270|GT-S5300|GT-S5330|GT-S5350|GT-S5360|GT-S5363|GT-S5369|GT-S5380|GT-S5380D|GT-S5560|GT-S5570|GT-S5600|GT-S5603|GT-S5610|GT-S5620|GT-S5660|GT-S5670|GT-S5690|GT-S5750|GT-S5780|GT-S5830|GT-S5839|GT-S6102|GT-S6500|GT-S7070|GT-S7200|GT-S7220|GT-S7230|GT-S7233|GT-S7250|GT-S7500|GT-S7530|GT-S7550|GT-S7562|GT-S7710|GT-S8000|GT-S8003|GT-S8500|GT-S8530|GT-S8600|SCH-A310|SCH-A530|SCH-A570|SCH-A610|SCH-A630|SCH-A650|SCH-A790|SCH-A795|SCH-A850|SCH-A870|SCH-A890|SCH-A930|SCH-A950|SCH-A970|SCH-A990|SCH-I100|SCH-I110|SCH-I400|SCH-I405|SCH-I500|SCH-I510|SCH-I515|SCH-I600|SCH-I730|SCH-I760|SCH-I770|SCH-I830|SCH-I910|SCH-I920|SCH-I959|SCH-LC11|SCH-N150|SCH-N300|SCH-R100|SCH-R300|SCH-R351|SCH-R400|SCH-R410|SCH-T300|SCH-U310|SCH-U320|SCH-U350|SCH-U360|SCH-U365|SCH-U370|SCH-U380|SCH-U410|SCH-U430|SCH-U450|SCH-U460|SCH-U470|SCH-U490|SCH-U540|SCH-U550|SCH-U620|SCH-U640|SCH-U650|SCH-U660|SCH-U700|SCH-U740|SCH-U750|SCH-U810|SCH-U820|SCH-U900|SCH-U940|SCH-U960|SCS-26UC|SGH-A107|SGH-A117|SGH-A127|SGH-A137|SGH-A157|SGH-A167|SGH-A177|SGH-A187|SGH-A197|SGH-A227|SGH-A237|SGH-A257|SGH-A437|SGH-A517|SGH-A597|SGH-A637|SGH-A657|SGH-A667|SGH-A687|SGH-A697|SGH-A707|SGH-A717|SGH-A727|SGH-A737|SGH-A747|SGH-A767|SGH-A777|SGH-A797|SGH-A817|SGH-A827|SGH-A837|SGH-A847|SGH-A867|SGH-A877|SGH-A887|SGH-A897|SGH-A927|SGH-B100|SGH-B130|SGH-B200|SGH-B220|SGH-C100|SGH-C110|SGH-C120|SGH-C130|SGH-C140|SGH-C160|SGH-C170|SGH-C180|SGH-C200|SGH-C207|SGH-C210|SGH-C225|SGH-C230|SGH-C417|SGH-C450|SGH-D307|SGH-D347|SGH-D357|SGH-D407|SGH-D415|SGH-D780|SGH-D807|SGH-D980|SGH-E105|SGH-E200|SGH-E315|SGH-E316|SGH-E317|SGH-E335|SGH-E590|SGH-E635|SGH-E715|SGH-E890|SGH-F300|SGH-F480|SGH-I200|SGH-I300|SGH-I320|SGH-I550|SGH-I577|SGH-I600|SGH-I607|SGH-I617|SGH-I627|SGH-I637|SGH-I677|SGH-I700|SGH-I717|SGH-I727|SGH-i747M|SGH-I777|SGH-I780|SGH-I827|SGH-I847|SGH-I857|SGH-I896|SGH-I897|SGH-I900|SGH-I907|SGH-I917|SGH-I927|SGH-I937|SGH-I997|SGH-J150|SGH-J200|SGH-L170|SGH-L700|SGH-M110|SGH-M150|SGH-M200|SGH-N105|SGH-N500|SGH-N600|SGH-N620|SGH-N625|SGH-N700|SGH-N710|SGH-P107|SGH-P207|SGH-P300|SGH-P310|SGH-P520|SGH-P735|SGH-P777|SGH-Q105|SGH-R210|SGH-R220|SGH-R225|SGH-S105|SGH-S307|SGH-T109|SGH-T119|SGH-T139|SGH-T209|SGH-T219|SGH-T229|SGH-T239|SGH-T249|SGH-T259|SGH-T309|SGH-T319|SGH-T329|SGH-T339|SGH-T349|SGH-T359|SGH-T369|SGH-T379|SGH-T409|SGH-T429|SGH-T439|SGH-T459|SGH-T469|SGH-T479|SGH-T499|SGH-T509|SGH-T519|SGH-T539|SGH-T559|SGH-T589|SGH-T609|SGH-T619|SGH-T629|SGH-T639|SGH-T659|SGH-T669|SGH-T679|SGH-T709|SGH-T719|SGH-T729|SGH-T739|SGH-T746|SGH-T749|SGH-T759|SGH-T769|SGH-T809|SGH-T819|SGH-T839|SGH-T919|SGH-T929|SGH-T939|SGH-T959|SGH-T989|SGH-U100|SGH-U200|SGH-U800|SGH-V205|SGH-V206|SGH-X100|SGH-X105|SGH-X120|SGH-X140|SGH-X426|SGH-X427|SGH-X475|SGH-X495|SGH-X497|SGH-X507|SGH-X600|SGH-X610|SGH-X620|SGH-X630|SGH-X700|SGH-X820|SGH-X890|SGH-Z130|SGH-Z150|SGH-Z170|SGH-ZX10|SGH-ZX20|SHW-M110|SPH-A120|SPH-A400|SPH-A420|SPH-A460|SPH-A500|SPH-A560|SPH-A600|SPH-A620|SPH-A660|SPH-A700|SPH-A740|SPH-A760|SPH-A790|SPH-A800|SPH-A820|SPH-A840|SPH-A880|SPH-A900|SPH-A940|SPH-A960|SPH-D600|SPH-D700|SPH-D710|SPH-D720|SPH-I300|SPH-I325|SPH-I330|SPH-I350|SPH-I500|SPH-I600|SPH-I700|SPH-L700|SPH-M100|SPH-M220|SPH-M240|SPH-M300|SPH-M305|SPH-M320|SPH-M330|SPH-M350|SPH-M360|SPH-M370|SPH-M380|SPH-M510|SPH-M540|SPH-M550|SPH-M560|SPH-M570|SPH-M580|SPH-M610|SPH-M620|SPH-M630|SPH-M800|SPH-M810|SPH-M850|SPH-M900|SPH-M910|SPH-M920|SPH-M930|SPH-N100|SPH-N200|SPH-N240|SPH-N300|SPH-N400|SPH-Z400|SWC-E100|SCH-i909|GT-N7100|GT-N7105|SCH-I535|SM-N900A|SGH-I317|SGH-T999L|GT-S5360B|GT-I8262|GT-S6802|GT-S6312|GT-S6310|GT-S5312|GT-S5310|GT-I9105|GT-I8510|GT-S6790N|SM-G7105|SM-N9005|GT-S5301|GT-I9295|GT-I9195|SM-C101|GT-S7392|GT-S7560|GT-B7610|GT-I5510|GT-S7582|GT-S7530E|GT-I8750|SM-G9006V|SM-G9008V|SM-G9009D|SM-G900A|SM-G900D|SM-G900F|SM-G900H|SM-G900I|SM-G900J|SM-G900K|SM-G900L|SM-G900M|SM-G900P|SM-G900R4|SM-G900S|SM-G900T|SM-G900V|SM-G900W8|SHV-E160K|SCH-P709|SCH-P729|SM-T2558|GT-I9205|SM-G9350|SM-J120F|SM-G920F|SM-G920V|SM-G930F|SM-N910C|SM-A310F|GT-I9190|SM-J500FN|SM-G903F|SM-J330F",
          LG: "\\bLG\\b;|LG[- ]?(C800|C900|E400|E610|E900|E-900|F160|F180K|F180L|F180S|730|855|L160|LS740|LS840|LS970|LU6200|MS690|MS695|MS770|MS840|MS870|MS910|P500|P700|P705|VM696|AS680|AS695|AX840|C729|E970|GS505|272|C395|E739BK|E960|L55C|L75C|LS696|LS860|P769BK|P350|P500|P509|P870|UN272|US730|VS840|VS950|LN272|LN510|LS670|LS855|LW690|MN270|MN510|P509|P769|P930|UN200|UN270|UN510|UN610|US670|US740|US760|UX265|UX840|VN271|VN530|VS660|VS700|VS740|VS750|VS910|VS920|VS930|VX9200|VX11000|AX840A|LW770|P506|P925|P999|E612|D955|D802|MS323|M257)|LM-G710",
          Sony: "SonyST|SonyLT|SonyEricsson|SonyEricssonLT15iv|LT18i|E10i|LT28h|LT26w|SonyEricssonMT27i|C5303|C6902|C6903|C6906|C6943|D2533",
          Asus: "Asus.*Galaxy|PadFone.*Mobile",
          NokiaLumia: "Lumia [0-9]{3,4}",
          Micromax:
            "Micromax.*\\b(A210|A92|A88|A72|A111|A110Q|A115|A116|A110|A90S|A26|A51|A35|A54|A25|A27|A89|A68|A65|A57|A90)\\b",
          Palm: "PalmSource|Palm",
          Vertu:
            "Vertu|Vertu.*Ltd|Vertu.*Ascent|Vertu.*Ayxta|Vertu.*Constellation(F|Quest)?|Vertu.*Monika|Vertu.*Signature",
          Pantech:
            "PANTECH|IM-A850S|IM-A840S|IM-A830L|IM-A830K|IM-A830S|IM-A820L|IM-A810K|IM-A810S|IM-A800S|IM-T100K|IM-A725L|IM-A780L|IM-A775C|IM-A770K|IM-A760S|IM-A750K|IM-A740S|IM-A730S|IM-A720L|IM-A710K|IM-A690L|IM-A690S|IM-A650S|IM-A630K|IM-A600S|VEGA PTL21|PT003|P8010|ADR910L|P6030|P6020|P9070|P4100|P9060|P5000|CDM8992|TXT8045|ADR8995|IS11PT|P2030|P6010|P8000|PT002|IS06|CDM8999|P9050|PT001|TXT8040|P2020|P9020|P2000|P7040|P7000|C790",
          Fly: "IQ230|IQ444|IQ450|IQ440|IQ442|IQ441|IQ245|IQ256|IQ236|IQ255|IQ235|IQ245|IQ275|IQ240|IQ285|IQ280|IQ270|IQ260|IQ250",
          Wiko: "KITE 4G|HIGHWAY|GETAWAY|STAIRWAY|DARKSIDE|DARKFULL|DARKNIGHT|DARKMOON|SLIDE|WAX 4G|RAINBOW|BLOOM|SUNSET|GOA(?!nna)|LENNY|BARRY|IGGY|OZZY|CINK FIVE|CINK PEAX|CINK PEAX 2|CINK SLIM|CINK SLIM 2|CINK +|CINK KING|CINK PEAX|CINK SLIM|SUBLIM",
          iMobile: "i-mobile (IQ|i-STYLE|idea|ZAA|Hitz)",
          SimValley:
            "\\b(SP-80|XT-930|SX-340|XT-930|SX-310|SP-360|SP60|SPT-800|SP-120|SPT-800|SP-140|SPX-5|SPX-8|SP-100|SPX-8|SPX-12)\\b",
          Wolfgang:
            "AT-B24D|AT-AS50HD|AT-AS40W|AT-AS55HD|AT-AS45q2|AT-B26D|AT-AS50Q",
          Alcatel: "Alcatel",
          Nintendo: "Nintendo (3DS|Switch)",
          Amoi: "Amoi",
          INQ: "INQ",
          OnePlus: "ONEPLUS",
          GenericPhone:
            "Tapatalk|PDA;|SAGEM|\\bmmp\\b|pocket|\\bpsp\\b|symbian|Smartphone|smartfon|treo|up.browser|up.link|vodafone|\\bwap\\b|nokia|Series40|Series60|S60|SonyEricsson|N900|MAUI.*WAP.*Browser",
        },
        tablets: {
          iPad: "iPad|iPad.*Mobile",
          NexusTablet: "Android.*Nexus[\\s]+(7|9|10)",
          GoogleTablet: "Android.*Pixel C",
          SamsungTablet:
            "SAMSUNG.*Tablet|Galaxy.*Tab|SC-01C|GT-P1000|GT-P1003|GT-P1010|GT-P3105|GT-P6210|GT-P6800|GT-P6810|GT-P7100|GT-P7300|GT-P7310|GT-P7500|GT-P7510|SCH-I800|SCH-I815|SCH-I905|SGH-I957|SGH-I987|SGH-T849|SGH-T859|SGH-T869|SPH-P100|GT-P3100|GT-P3108|GT-P3110|GT-P5100|GT-P5110|GT-P6200|GT-P7320|GT-P7511|GT-N8000|GT-P8510|SGH-I497|SPH-P500|SGH-T779|SCH-I705|SCH-I915|GT-N8013|GT-P3113|GT-P5113|GT-P8110|GT-N8010|GT-N8005|GT-N8020|GT-P1013|GT-P6201|GT-P7501|GT-N5100|GT-N5105|GT-N5110|SHV-E140K|SHV-E140L|SHV-E140S|SHV-E150S|SHV-E230K|SHV-E230L|SHV-E230S|SHW-M180K|SHW-M180L|SHW-M180S|SHW-M180W|SHW-M300W|SHW-M305W|SHW-M380K|SHW-M380S|SHW-M380W|SHW-M430W|SHW-M480K|SHW-M480S|SHW-M480W|SHW-M485W|SHW-M486W|SHW-M500W|GT-I9228|SCH-P739|SCH-I925|GT-I9200|GT-P5200|GT-P5210|GT-P5210X|SM-T311|SM-T310|SM-T310X|SM-T210|SM-T210R|SM-T211|SM-P600|SM-P601|SM-P605|SM-P900|SM-P901|SM-T217|SM-T217A|SM-T217S|SM-P6000|SM-T3100|SGH-I467|XE500|SM-T110|GT-P5220|GT-I9200X|GT-N5110X|GT-N5120|SM-P905|SM-T111|SM-T2105|SM-T315|SM-T320|SM-T320X|SM-T321|SM-T520|SM-T525|SM-T530NU|SM-T230NU|SM-T330NU|SM-T900|XE500T1C|SM-P605V|SM-P905V|SM-T337V|SM-T537V|SM-T707V|SM-T807V|SM-P600X|SM-P900X|SM-T210X|SM-T230|SM-T230X|SM-T325|GT-P7503|SM-T531|SM-T330|SM-T530|SM-T705|SM-T705C|SM-T535|SM-T331|SM-T800|SM-T700|SM-T537|SM-T807|SM-P907A|SM-T337A|SM-T537A|SM-T707A|SM-T807A|SM-T237|SM-T807P|SM-P607T|SM-T217T|SM-T337T|SM-T807T|SM-T116NQ|SM-T116BU|SM-P550|SM-T350|SM-T550|SM-T9000|SM-P9000|SM-T705Y|SM-T805|GT-P3113|SM-T710|SM-T810|SM-T815|SM-T360|SM-T533|SM-T113|SM-T335|SM-T715|SM-T560|SM-T670|SM-T677|SM-T377|SM-T567|SM-T357T|SM-T555|SM-T561|SM-T713|SM-T719|SM-T813|SM-T819|SM-T580|SM-T355Y?|SM-T280|SM-T817A|SM-T820|SM-W700|SM-P580|SM-T587|SM-P350|SM-P555M|SM-P355M|SM-T113NU|SM-T815Y|SM-T585|SM-T285|SM-T825|SM-W708|SM-T835|SM-T830|SM-T837V|SM-T720|SM-T510|SM-T387V",
          Kindle:
            "Kindle|Silk.*Accelerated|Android.*\\b(KFOT|KFTT|KFJWI|KFJWA|KFOTE|KFSOWI|KFTHWI|KFTHWA|KFAPWI|KFAPWA|WFJWAE|KFSAWA|KFSAWI|KFASWI|KFARWI|KFFOWI|KFGIWI|KFMEWI)\\b|Android.*Silk/[0-9.]+ like Chrome/[0-9.]+ (?!Mobile)",
          SurfaceTablet: "Windows NT [0-9.]+; ARM;.*(Tablet|ARMBJS)",
          HPTablet:
            "HP Slate (7|8|10)|HP ElitePad 900|hp-tablet|EliteBook.*Touch|HP 8|Slate 21|HP SlateBook 10",
          AsusTablet:
            "^.*PadFone((?!Mobile).)*$|Transformer|TF101|TF101G|TF300T|TF300TG|TF300TL|TF700T|TF700KL|TF701T|TF810C|ME171|ME301T|ME302C|ME371MG|ME370T|ME372MG|ME172V|ME173X|ME400C|Slider SL101|\\bK00F\\b|\\bK00C\\b|\\bK00E\\b|\\bK00L\\b|TX201LA|ME176C|ME102A|\\bM80TA\\b|ME372CL|ME560CG|ME372CG|ME302KL| K010 | K011 | K017 | K01E |ME572C|ME103K|ME170C|ME171C|\\bME70C\\b|ME581C|ME581CL|ME8510C|ME181C|P01Y|PO1MA|P01Z|\\bP027\\b|\\bP024\\b|\\bP00C\\b",
          BlackBerryTablet: "PlayBook|RIM Tablet",
          HTCtablet:
            "HTC_Flyer_P512|HTC Flyer|HTC Jetstream|HTC-P715a|HTC EVO View 4G|PG41200|PG09410",
          MotorolaTablet:
            "xoom|sholest|MZ615|MZ605|MZ505|MZ601|MZ602|MZ603|MZ604|MZ606|MZ607|MZ608|MZ609|MZ615|MZ616|MZ617",
          NookTablet:
            "Android.*Nook|NookColor|nook browser|BNRV200|BNRV200A|BNTV250|BNTV250A|BNTV400|BNTV600|LogicPD Zoom2",
          AcerTablet:
            "Android.*; \\b(A100|A101|A110|A200|A210|A211|A500|A501|A510|A511|A700|A701|W500|W500P|W501|W501P|W510|W511|W700|G100|G100W|B1-A71|B1-710|B1-711|A1-810|A1-811|A1-830)\\b|W3-810|\\bA3-A10\\b|\\bA3-A11\\b|\\bA3-A20\\b|\\bA3-A30",
          ToshibaTablet:
            "Android.*(AT100|AT105|AT200|AT205|AT270|AT275|AT300|AT305|AT1S5|AT500|AT570|AT700|AT830)|TOSHIBA.*FOLIO",
          LGTablet:
            "\\bL-06C|LG-V909|LG-V900|LG-V700|LG-V510|LG-V500|LG-V410|LG-V400|LG-VK810\\b",
          FujitsuTablet: "Android.*\\b(F-01D|F-02F|F-05E|F-10D|M532|Q572)\\b",
          PrestigioTablet:
            "PMP3170B|PMP3270B|PMP3470B|PMP7170B|PMP3370B|PMP3570C|PMP5870C|PMP3670B|PMP5570C|PMP5770D|PMP3970B|PMP3870C|PMP5580C|PMP5880D|PMP5780D|PMP5588C|PMP7280C|PMP7280C3G|PMP7280|PMP7880D|PMP5597D|PMP5597|PMP7100D|PER3464|PER3274|PER3574|PER3884|PER5274|PER5474|PMP5097CPRO|PMP5097|PMP7380D|PMP5297C|PMP5297C_QUAD|PMP812E|PMP812E3G|PMP812F|PMP810E|PMP880TD|PMT3017|PMT3037|PMT3047|PMT3057|PMT7008|PMT5887|PMT5001|PMT5002",
          LenovoTablet:
            "Lenovo TAB|Idea(Tab|Pad)( A1|A10| K1|)|ThinkPad([ ]+)?Tablet|YT3-850M|YT3-X90L|YT3-X90F|YT3-X90X|Lenovo.*(S2109|S2110|S5000|S6000|K3011|A3000|A3500|A1000|A2107|A2109|A1107|A5500|A7600|B6000|B8000|B8080)(-|)(FL|F|HV|H|)|TB-X103F|TB-X304X|TB-X304F|TB-X304L|TB-X505F|TB-X505L|TB-X505X|TB-X605F|TB-X605L|TB-8703F|TB-8703X|TB-8703N|TB-8704N|TB-8704F|TB-8704X|TB-8704V|TB-7304F|TB-7304I|TB-7304X|Tab2A7-10F|Tab2A7-20F|TB2-X30L|YT3-X50L|YT3-X50F|YT3-X50M|YT-X705F|YT-X703F|YT-X703L|YT-X705L|YT-X705X|TB2-X30F|TB2-X30L|TB2-X30M|A2107A-F|A2107A-H|TB3-730F|TB3-730M|TB3-730X|TB-7504F|TB-7504X",
          DellTablet: "Venue 11|Venue 8|Venue 7|Dell Streak 10|Dell Streak 7",
          YarvikTablet:
            "Android.*\\b(TAB210|TAB211|TAB224|TAB250|TAB260|TAB264|TAB310|TAB360|TAB364|TAB410|TAB411|TAB420|TAB424|TAB450|TAB460|TAB461|TAB464|TAB465|TAB467|TAB468|TAB07-100|TAB07-101|TAB07-150|TAB07-151|TAB07-152|TAB07-200|TAB07-201-3G|TAB07-210|TAB07-211|TAB07-212|TAB07-214|TAB07-220|TAB07-400|TAB07-485|TAB08-150|TAB08-200|TAB08-201-3G|TAB08-201-30|TAB09-100|TAB09-211|TAB09-410|TAB10-150|TAB10-201|TAB10-211|TAB10-400|TAB10-410|TAB13-201|TAB274EUK|TAB275EUK|TAB374EUK|TAB462EUK|TAB474EUK|TAB9-200)\\b",
          MedionTablet:
            "Android.*\\bOYO\\b|LIFE.*(P9212|P9514|P9516|S9512)|LIFETAB",
          ArnovaTablet:
            "97G4|AN10G2|AN7bG3|AN7fG3|AN8G3|AN8cG3|AN7G3|AN9G3|AN7dG3|AN7dG3ST|AN7dG3ChildPad|AN10bG3|AN10bG3DT|AN9G2",
          IntensoTablet: "INM8002KP|INM1010FP|INM805ND|Intenso Tab|TAB1004",
          IRUTablet: "M702pro",
          MegafonTablet: "MegaFon V9|\\bZTE V9\\b|Android.*\\bMT7A\\b",
          EbodaTablet: "E-Boda (Supreme|Impresspeed|Izzycomm|Essential)",
          AllViewTablet:
            "Allview.*(Viva|Alldro|City|Speed|All TV|Frenzy|Quasar|Shine|TX1|AX1|AX2)",
          ArchosTablet:
            "\\b(101G9|80G9|A101IT)\\b|Qilive 97R|Archos5|\\bARCHOS (70|79|80|90|97|101|FAMILYPAD|)(b|c|)(G10| Cobalt| TITANIUM(HD|)| Xenon| Neon|XSK| 2| XS 2| PLATINUM| CARBON|GAMEPAD)\\b",
          AinolTablet:
            "NOVO7|NOVO8|NOVO10|Novo7Aurora|Novo7Basic|NOVO7PALADIN|novo9-Spark",
          NokiaLumiaTablet: "Lumia 2520",
          SonyTablet:
            "Sony.*Tablet|Xperia Tablet|Sony Tablet S|SO-03E|SGPT12|SGPT13|SGPT114|SGPT121|SGPT122|SGPT123|SGPT111|SGPT112|SGPT113|SGPT131|SGPT132|SGPT133|SGPT211|SGPT212|SGPT213|SGP311|SGP312|SGP321|EBRD1101|EBRD1102|EBRD1201|SGP351|SGP341|SGP511|SGP512|SGP521|SGP541|SGP551|SGP621|SGP641|SGP612|SOT31|SGP771|SGP611|SGP612|SGP712",
          PhilipsTablet:
            "\\b(PI2010|PI3000|PI3100|PI3105|PI3110|PI3205|PI3210|PI3900|PI4010|PI7000|PI7100)\\b",
          CubeTablet:
            "Android.*(K8GT|U9GT|U10GT|U16GT|U17GT|U18GT|U19GT|U20GT|U23GT|U30GT)|CUBE U8GT",
          CobyTablet:
            "MID1042|MID1045|MID1125|MID1126|MID7012|MID7014|MID7015|MID7034|MID7035|MID7036|MID7042|MID7048|MID7127|MID8042|MID8048|MID8127|MID9042|MID9740|MID9742|MID7022|MID7010",
          MIDTablet:
            "M9701|M9000|M9100|M806|M1052|M806|T703|MID701|MID713|MID710|MID727|MID760|MID830|MID728|MID933|MID125|MID810|MID732|MID120|MID930|MID800|MID731|MID900|MID100|MID820|MID735|MID980|MID130|MID833|MID737|MID960|MID135|MID860|MID736|MID140|MID930|MID835|MID733|MID4X10",
          MSITablet:
            "MSI \\b(Primo 73K|Primo 73L|Primo 81L|Primo 77|Primo 93|Primo 75|Primo 76|Primo 73|Primo 81|Primo 91|Primo 90|Enjoy 71|Enjoy 7|Enjoy 10)\\b",
          SMiTTablet:
            "Android.*(\\bMID\\b|MID-560|MTV-T1200|MTV-PND531|MTV-P1101|MTV-PND530)",
          RockChipTablet:
            "Android.*(RK2818|RK2808A|RK2918|RK3066)|RK2738|RK2808A",
          FlyTablet: "IQ310|Fly Vision",
          bqTablet:
            "Android.*(bq)?.*\\b(Elcano|Curie|Edison|Maxwell|Kepler|Pascal|Tesla|Hypatia|Platon|Newton|Livingstone|Cervantes|Avant|Aquaris ([E|M]10|M8))\\b|Maxwell.*Lite|Maxwell.*Plus",
          HuaweiTablet:
            "MediaPad|MediaPad 7 Youth|IDEOS S7|S7-201c|S7-202u|S7-101|S7-103|S7-104|S7-105|S7-106|S7-201|S7-Slim|M2-A01L|BAH-L09|BAH-W09|AGS-L09|CMR-AL19",
          NecTablet: "\\bN-06D|\\bN-08D",
          PantechTablet: "Pantech.*P4100",
          BronchoTablet: "Broncho.*(N701|N708|N802|a710)",
          VersusTablet: "TOUCHPAD.*[78910]|\\bTOUCHTAB\\b",
          ZyncTablet: "z1000|Z99 2G|z930|z990|z909|Z919|z900",
          PositivoTablet: "TB07STA|TB10STA|TB07FTA|TB10FTA",
          NabiTablet: "Android.*\\bNabi",
          KoboTablet: "Kobo Touch|\\bK080\\b|\\bVox\\b Build|\\bArc\\b Build",
          DanewTablet:
            "DSlide.*\\b(700|701R|702|703R|704|802|970|971|972|973|974|1010|1012)\\b",
          TexetTablet:
            "NaviPad|TB-772A|TM-7045|TM-7055|TM-9750|TM-7016|TM-7024|TM-7026|TM-7041|TM-7043|TM-7047|TM-8041|TM-9741|TM-9747|TM-9748|TM-9751|TM-7022|TM-7021|TM-7020|TM-7011|TM-7010|TM-7023|TM-7025|TM-7037W|TM-7038W|TM-7027W|TM-9720|TM-9725|TM-9737W|TM-1020|TM-9738W|TM-9740|TM-9743W|TB-807A|TB-771A|TB-727A|TB-725A|TB-719A|TB-823A|TB-805A|TB-723A|TB-715A|TB-707A|TB-705A|TB-709A|TB-711A|TB-890HD|TB-880HD|TB-790HD|TB-780HD|TB-770HD|TB-721HD|TB-710HD|TB-434HD|TB-860HD|TB-840HD|TB-760HD|TB-750HD|TB-740HD|TB-730HD|TB-722HD|TB-720HD|TB-700HD|TB-500HD|TB-470HD|TB-431HD|TB-430HD|TB-506|TB-504|TB-446|TB-436|TB-416|TB-146SE|TB-126SE",
          PlaystationTablet: "Playstation.*(Portable|Vita)",
          TrekstorTablet:
            "ST10416-1|VT10416-1|ST70408-1|ST702xx-1|ST702xx-2|ST80208|ST97216|ST70104-2|VT10416-2|ST10216-2A|SurfTab",
          PyleAudioTablet:
            "\\b(PTBL10CEU|PTBL10C|PTBL72BC|PTBL72BCEU|PTBL7CEU|PTBL7C|PTBL92BC|PTBL92BCEU|PTBL9CEU|PTBL9CUK|PTBL9C)\\b",
          AdvanTablet:
            "Android.* \\b(E3A|T3X|T5C|T5B|T3E|T3C|T3B|T1J|T1F|T2A|T1H|T1i|E1C|T1-E|T5-A|T4|E1-B|T2Ci|T1-B|T1-D|O1-A|E1-A|T1-A|T3A|T4i)\\b ",
          DanyTechTablet:
            "Genius Tab G3|Genius Tab S2|Genius Tab Q3|Genius Tab G4|Genius Tab Q4|Genius Tab G-II|Genius TAB GII|Genius TAB GIII|Genius Tab S1",
          GalapadTablet: "Android.*\\bG1\\b(?!\\))",
          MicromaxTablet:
            "Funbook|Micromax.*\\b(P250|P560|P360|P362|P600|P300|P350|P500|P275)\\b",
          KarbonnTablet:
            "Android.*\\b(A39|A37|A34|ST8|ST10|ST7|Smart Tab3|Smart Tab2)\\b",
          AllFineTablet:
            "Fine7 Genius|Fine7 Shine|Fine7 Air|Fine8 Style|Fine9 More|Fine10 Joy|Fine11 Wide",
          PROSCANTablet:
            "\\b(PEM63|PLT1023G|PLT1041|PLT1044|PLT1044G|PLT1091|PLT4311|PLT4311PL|PLT4315|PLT7030|PLT7033|PLT7033D|PLT7035|PLT7035D|PLT7044K|PLT7045K|PLT7045KB|PLT7071KG|PLT7072|PLT7223G|PLT7225G|PLT7777G|PLT7810K|PLT7849G|PLT7851G|PLT7852G|PLT8015|PLT8031|PLT8034|PLT8036|PLT8080K|PLT8082|PLT8088|PLT8223G|PLT8234G|PLT8235G|PLT8816K|PLT9011|PLT9045K|PLT9233G|PLT9735|PLT9760G|PLT9770G)\\b",
          YONESTablet:
            "BQ1078|BC1003|BC1077|RK9702|BC9730|BC9001|IT9001|BC7008|BC7010|BC708|BC728|BC7012|BC7030|BC7027|BC7026",
          ChangJiaTablet:
            "TPC7102|TPC7103|TPC7105|TPC7106|TPC7107|TPC7201|TPC7203|TPC7205|TPC7210|TPC7708|TPC7709|TPC7712|TPC7110|TPC8101|TPC8103|TPC8105|TPC8106|TPC8203|TPC8205|TPC8503|TPC9106|TPC9701|TPC97101|TPC97103|TPC97105|TPC97106|TPC97111|TPC97113|TPC97203|TPC97603|TPC97809|TPC97205|TPC10101|TPC10103|TPC10106|TPC10111|TPC10203|TPC10205|TPC10503",
          GUTablet: "TX-A1301|TX-M9002|Q702|kf026",
          PointOfViewTablet:
            "TAB-P506|TAB-navi-7-3G-M|TAB-P517|TAB-P-527|TAB-P701|TAB-P703|TAB-P721|TAB-P731N|TAB-P741|TAB-P825|TAB-P905|TAB-P925|TAB-PR945|TAB-PL1015|TAB-P1025|TAB-PI1045|TAB-P1325|TAB-PROTAB[0-9]+|TAB-PROTAB25|TAB-PROTAB26|TAB-PROTAB27|TAB-PROTAB26XL|TAB-PROTAB2-IPS9|TAB-PROTAB30-IPS9|TAB-PROTAB25XXL|TAB-PROTAB26-IPS10|TAB-PROTAB30-IPS10",
          OvermaxTablet:
            "OV-(SteelCore|NewBase|Basecore|Baseone|Exellen|Quattor|EduTab|Solution|ACTION|BasicTab|TeddyTab|MagicTab|Stream|TB-08|TB-09)|Qualcore 1027",
          HCLTablet:
            "HCL.*Tablet|Connect-3G-2.0|Connect-2G-2.0|ME Tablet U1|ME Tablet U2|ME Tablet G1|ME Tablet X1|ME Tablet Y2|ME Tablet Sync",
          DPSTablet: "DPS Dream 9|DPS Dual 7",
          VistureTablet:
            "V97 HD|i75 3G|Visture V4( HD)?|Visture V5( HD)?|Visture V10",
          CrestaTablet:
            "CTP(-)?810|CTP(-)?818|CTP(-)?828|CTP(-)?838|CTP(-)?888|CTP(-)?978|CTP(-)?980|CTP(-)?987|CTP(-)?988|CTP(-)?989",
          MediatekTablet: "\\bMT8125|MT8389|MT8135|MT8377\\b",
          ConcordeTablet: "Concorde([ ]+)?Tab|ConCorde ReadMan",
          GoCleverTablet:
            "GOCLEVER TAB|A7GOCLEVER|M1042|M7841|M742|R1042BK|R1041|TAB A975|TAB A7842|TAB A741|TAB A741L|TAB M723G|TAB M721|TAB A1021|TAB I921|TAB R721|TAB I720|TAB T76|TAB R70|TAB R76.2|TAB R106|TAB R83.2|TAB M813G|TAB I721|GCTA722|TAB I70|TAB I71|TAB S73|TAB R73|TAB R74|TAB R93|TAB R75|TAB R76.1|TAB A73|TAB A93|TAB A93.2|TAB T72|TAB R83|TAB R974|TAB R973|TAB A101|TAB A103|TAB A104|TAB A104.2|R105BK|M713G|A972BK|TAB A971|TAB R974.2|TAB R104|TAB R83.3|TAB A1042",
          ModecomTablet:
            "FreeTAB 9000|FreeTAB 7.4|FreeTAB 7004|FreeTAB 7800|FreeTAB 2096|FreeTAB 7.5|FreeTAB 1014|FreeTAB 1001 |FreeTAB 8001|FreeTAB 9706|FreeTAB 9702|FreeTAB 7003|FreeTAB 7002|FreeTAB 1002|FreeTAB 7801|FreeTAB 1331|FreeTAB 1004|FreeTAB 8002|FreeTAB 8014|FreeTAB 9704|FreeTAB 1003",
          VoninoTablet:
            "\\b(Argus[ _]?S|Diamond[ _]?79HD|Emerald[ _]?78E|Luna[ _]?70C|Onyx[ _]?S|Onyx[ _]?Z|Orin[ _]?HD|Orin[ _]?S|Otis[ _]?S|SpeedStar[ _]?S|Magnet[ _]?M9|Primus[ _]?94[ _]?3G|Primus[ _]?94HD|Primus[ _]?QS|Android.*\\bQ8\\b|Sirius[ _]?EVO[ _]?QS|Sirius[ _]?QS|Spirit[ _]?S)\\b",
          ECSTablet: "V07OT2|TM105A|S10OT1|TR10CS1",
          StorexTablet: "eZee[_']?(Tab|Go)[0-9]+|TabLC7|Looney Tunes Tab",
          VodafoneTablet:
            "SmartTab([ ]+)?[0-9]+|SmartTabII10|SmartTabII7|VF-1497|VFD 1400",
          EssentielBTablet: "Smart[ ']?TAB[ ]+?[0-9]+|Family[ ']?TAB2",
          RossMoorTablet:
            "RM-790|RM-997|RMD-878G|RMD-974R|RMT-705A|RMT-701|RME-601|RMT-501|RMT-711",
          iMobileTablet: "i-mobile i-note",
          TolinoTablet: "tolino tab [0-9.]+|tolino shine",
          AudioSonicTablet: "\\bC-22Q|T7-QC|T-17B|T-17P\\b",
          AMPETablet: "Android.* A78 ",
          SkkTablet: "Android.* (SKYPAD|PHOENIX|CYCLOPS)",
          TecnoTablet: "TECNO P9|TECNO DP8D",
          JXDTablet:
            "Android.* \\b(F3000|A3300|JXD5000|JXD3000|JXD2000|JXD300B|JXD300|S5800|S7800|S602b|S5110b|S7300|S5300|S602|S603|S5100|S5110|S601|S7100a|P3000F|P3000s|P101|P200s|P1000m|P200m|P9100|P1000s|S6600b|S908|P1000|P300|S18|S6600|S9100)\\b",
          iJoyTablet:
            "Tablet (Spirit 7|Essentia|Galatea|Fusion|Onix 7|Landa|Titan|Scooby|Deox|Stella|Themis|Argon|Unique 7|Sygnus|Hexen|Finity 7|Cream|Cream X2|Jade|Neon 7|Neron 7|Kandy|Scape|Saphyr 7|Rebel|Biox|Rebel|Rebel 8GB|Myst|Draco 7|Myst|Tab7-004|Myst|Tadeo Jones|Tablet Boing|Arrow|Draco Dual Cam|Aurix|Mint|Amity|Revolution|Finity 9|Neon 9|T9w|Amity 4GB Dual Cam|Stone 4GB|Stone 8GB|Andromeda|Silken|X2|Andromeda II|Halley|Flame|Saphyr 9,7|Touch 8|Planet|Triton|Unique 10|Hexen 10|Memphis 4GB|Memphis 8GB|Onix 10)",
          FX2Tablet: "FX2 PAD7|FX2 PAD10",
          XoroTablet:
            "KidsPAD 701|PAD[ ]?712|PAD[ ]?714|PAD[ ]?716|PAD[ ]?717|PAD[ ]?718|PAD[ ]?720|PAD[ ]?721|PAD[ ]?722|PAD[ ]?790|PAD[ ]?792|PAD[ ]?900|PAD[ ]?9715D|PAD[ ]?9716DR|PAD[ ]?9718DR|PAD[ ]?9719QR|PAD[ ]?9720QR|TelePAD1030|Telepad1032|TelePAD730|TelePAD731|TelePAD732|TelePAD735Q|TelePAD830|TelePAD9730|TelePAD795|MegaPAD 1331|MegaPAD 1851|MegaPAD 2151",
          ViewsonicTablet:
            "ViewPad 10pi|ViewPad 10e|ViewPad 10s|ViewPad E72|ViewPad7|ViewPad E100|ViewPad 7e|ViewSonic VB733|VB100a",
          VerizonTablet: "QTAQZ3|QTAIR7|QTAQTZ3|QTASUN1|QTASUN2|QTAXIA1",
          OdysTablet:
            "LOOX|XENO10|ODYS[ -](Space|EVO|Xpress|NOON)|\\bXELIO\\b|Xelio10Pro|XELIO7PHONETAB|XELIO10EXTREME|XELIOPT2|NEO_QUAD10",
          CaptivaTablet: "CAPTIVA PAD",
          IconbitTablet:
            "NetTAB|NT-3702|NT-3702S|NT-3702S|NT-3603P|NT-3603P|NT-0704S|NT-0704S|NT-3805C|NT-3805C|NT-0806C|NT-0806C|NT-0909T|NT-0909T|NT-0907S|NT-0907S|NT-0902S|NT-0902S",
          TeclastTablet:
            "T98 4G|\\bP80\\b|\\bX90HD\\b|X98 Air|X98 Air 3G|\\bX89\\b|P80 3G|\\bX80h\\b|P98 Air|\\bX89HD\\b|P98 3G|\\bP90HD\\b|P89 3G|X98 3G|\\bP70h\\b|P79HD 3G|G18d 3G|\\bP79HD\\b|\\bP89s\\b|\\bA88\\b|\\bP10HD\\b|\\bP19HD\\b|G18 3G|\\bP78HD\\b|\\bA78\\b|\\bP75\\b|G17s 3G|G17h 3G|\\bP85t\\b|\\bP90\\b|\\bP11\\b|\\bP98t\\b|\\bP98HD\\b|\\bG18d\\b|\\bP85s\\b|\\bP11HD\\b|\\bP88s\\b|\\bA80HD\\b|\\bA80se\\b|\\bA10h\\b|\\bP89\\b|\\bP78s\\b|\\bG18\\b|\\bP85\\b|\\bA70h\\b|\\bA70\\b|\\bG17\\b|\\bP18\\b|\\bA80s\\b|\\bA11s\\b|\\bP88HD\\b|\\bA80h\\b|\\bP76s\\b|\\bP76h\\b|\\bP98\\b|\\bA10HD\\b|\\bP78\\b|\\bP88\\b|\\bA11\\b|\\bA10t\\b|\\bP76a\\b|\\bP76t\\b|\\bP76e\\b|\\bP85HD\\b|\\bP85a\\b|\\bP86\\b|\\bP75HD\\b|\\bP76v\\b|\\bA12\\b|\\bP75a\\b|\\bA15\\b|\\bP76Ti\\b|\\bP81HD\\b|\\bA10\\b|\\bT760VE\\b|\\bT720HD\\b|\\bP76\\b|\\bP73\\b|\\bP71\\b|\\bP72\\b|\\bT720SE\\b|\\bC520Ti\\b|\\bT760\\b|\\bT720VE\\b|T720-3GE|T720-WiFi",
          OndaTablet:
            "\\b(V975i|Vi30|VX530|V701|Vi60|V701s|Vi50|V801s|V719|Vx610w|VX610W|V819i|Vi10|VX580W|Vi10|V711s|V813|V811|V820w|V820|Vi20|V711|VI30W|V712|V891w|V972|V819w|V820w|Vi60|V820w|V711|V813s|V801|V819|V975s|V801|V819|V819|V818|V811|V712|V975m|V101w|V961w|V812|V818|V971|V971s|V919|V989|V116w|V102w|V973|Vi40)\\b[\\s]+|V10 \\b4G\\b",
          JaytechTablet: "TPC-PA762",
          BlaupunktTablet: "Endeavour 800NG|Endeavour 1010",
          DigmaTablet:
            "\\b(iDx10|iDx9|iDx8|iDx7|iDxD7|iDxD8|iDsQ8|iDsQ7|iDsQ8|iDsD10|iDnD7|3TS804H|iDsQ11|iDj7|iDs10)\\b",
          EvolioTablet:
            "ARIA_Mini_wifi|Aria[ _]Mini|Evolio X10|Evolio X7|Evolio X8|\\bEvotab\\b|\\bNeura\\b",
          LavaTablet: "QPAD E704|\\bIvoryS\\b|E-TAB IVORY|\\bE-TAB\\b",
          AocTablet:
            "MW0811|MW0812|MW0922|MTK8382|MW1031|MW0831|MW0821|MW0931|MW0712",
          MpmanTablet:
            "MP11 OCTA|MP10 OCTA|MPQC1114|MPQC1004|MPQC994|MPQC974|MPQC973|MPQC804|MPQC784|MPQC780|\\bMPG7\\b|MPDCG75|MPDCG71|MPDC1006|MP101DC|MPDC9000|MPDC905|MPDC706HD|MPDC706|MPDC705|MPDC110|MPDC100|MPDC99|MPDC97|MPDC88|MPDC8|MPDC77|MP709|MID701|MID711|MID170|MPDC703|MPQC1010",
          CelkonTablet:
            "CT695|CT888|CT[\\s]?910|CT7 Tab|CT9 Tab|CT3 Tab|CT2 Tab|CT1 Tab|C820|C720|\\bCT-1\\b",
          WolderTablet:
            "miTab \\b(DIAMOND|SPACE|BROOKLYN|NEO|FLY|MANHATTAN|FUNK|EVOLUTION|SKY|GOCAR|IRON|GENIUS|POP|MINT|EPSILON|BROADWAY|JUMP|HOP|LEGEND|NEW AGE|LINE|ADVANCE|FEEL|FOLLOW|LIKE|LINK|LIVE|THINK|FREEDOM|CHICAGO|CLEVELAND|BALTIMORE-GH|IOWA|BOSTON|SEATTLE|PHOENIX|DALLAS|IN 101|MasterChef)\\b",
          MediacomTablet:
            "M-MPI10C3G|M-SP10EG|M-SP10EGP|M-SP10HXAH|M-SP7HXAH|M-SP10HXBH|M-SP8HXAH|M-SP8MXA",
          MiTablet: "\\bMI PAD\\b|\\bHM NOTE 1W\\b",
          NibiruTablet: "Nibiru M1|Nibiru Jupiter One",
          NexoTablet:
            "NEXO NOVA|NEXO 10|NEXO AVIO|NEXO FREE|NEXO GO|NEXO EVO|NEXO 3G|NEXO SMART|NEXO KIDDO|NEXO MOBI",
          LeaderTablet:
            "TBLT10Q|TBLT10I|TBL-10WDKB|TBL-10WDKBO2013|TBL-W230V2|TBL-W450|TBL-W500|SV572|TBLT7I|TBA-AC7-8G|TBLT79|TBL-8W16|TBL-10W32|TBL-10WKB|TBL-W100",
          UbislateTablet: "UbiSlate[\\s]?7C",
          PocketBookTablet: "Pocketbook",
          KocasoTablet: "\\b(TB-1207)\\b",
          HisenseTablet: "\\b(F5281|E2371)\\b",
          Hudl: "Hudl HT7S3|Hudl 2",
          TelstraTablet: "T-Hub2",
          GenericTablet:
            "Android.*\\b97D\\b|Tablet(?!.*PC)|BNTV250A|MID-WCDMA|LogicPD Zoom2|\\bA7EB\\b|CatNova8|A1_07|CT704|CT1002|\\bM721\\b|rk30sdk|\\bEVOTAB\\b|M758A|ET904|ALUMIUM10|Smartfren Tab|Endeavour 1010|Tablet-PC-4|Tagi Tab|\\bM6pro\\b|CT1020W|arc 10HD|\\bTP750\\b|\\bQTAQZ3\\b|WVT101|TM1088|KT107",
        },
        oss: {
          AndroidOS: "Android",
          BlackBerryOS: "blackberry|\\bBB10\\b|rim tablet os",
          PalmOS: "PalmOS|avantgo|blazer|elaine|hiptop|palm|plucker|xiino",
          SymbianOS: "Symbian|SymbOS|Series60|Series40|SYB-[0-9]+|\\bS60\\b",
          WindowsMobileOS:
            "Windows CE.*(PPC|Smartphone|Mobile|[0-9]{3}x[0-9]{3})|Windows Mobile|Windows Phone [0-9.]+|WCE;",
          WindowsPhoneOS:
            "Windows Phone 10.0|Windows Phone 8.1|Windows Phone 8.0|Windows Phone OS|XBLWP7|ZuneWP7|Windows NT 6.[23]; ARM;",
          iOS: "\\biPhone.*Mobile|\\biPod|\\biPad|AppleCoreMedia",
          iPadOS: "CPU OS 13",
          MeeGoOS: "MeeGo",
          MaemoOS: "Maemo",
          JavaOS: "J2ME/|\\bMIDP\\b|\\bCLDC\\b",
          webOS: "webOS|hpwOS",
          badaOS: "\\bBada\\b",
          BREWOS: "BREW",
        },
        uas: {
          Chrome: "\\bCrMo\\b|CriOS|Android.*Chrome/[.0-9]* (Mobile)?",
          Dolfin: "\\bDolfin\\b",
          Opera:
            "Opera.*Mini|Opera.*Mobi|Android.*Opera|Mobile.*OPR/[0-9.]+$|Coast/[0-9.]+",
          Skyfire: "Skyfire",
          Edge: "Mobile Safari/[.0-9]* Edge",
          IE: "IEMobile|MSIEMobile",
          Firefox:
            "fennec|firefox.*maemo|(Mobile|Tablet).*Firefox|Firefox.*Mobile|FxiOS",
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
          GenericBrowser:
            "NokiaBrowser|OviBrowser|OneBrowser|TwonkyBeamBrowser|SEMC.*Browser|FlyFlow|Minimo|NetFront|Novarra-Vision|MQQBrowser|MicroMessenger",
          PaleMoon: "Android.*PaleMoon|Mobile.*PaleMoon",
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
          IE: [
            "IEMobile/[VER];",
            "IEMobile [VER]",
            "MSIE [VER];",
            "Trident/[0-9.]+;.*rv:[VER]",
          ],
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
          BlackBerry: [
            "BlackBerry[\\w]+/[VER]",
            "BlackBerry.*Version/[VER]",
            "Version/[VER]",
          ],
          BREW: "BREW [VER]",
          Java: "Java/[VER]",
          "Windows Phone OS": ["Windows Phone OS [VER]", "Windows Phone [VER]"],
          "Windows Phone": "Windows Phone [VER]",
          "Windows CE": "Windows CE/[VER]",
          "Windows NT": "Windows NT [VER]",
          Symbian: ["SymbianOS/[VER]", "Symbian/[VER]"],
          webOS: ["webOS/[VER]", "hpwOS/[VER];"],
        },
        utils: {
          Bot: "Googlebot|facebookexternalhit|Google-AMPHTML|s~amp-validator|AdsBot-Google|Google Keyword Suggestion|Facebot|YandexBot|YandexMobileBot|bingbot|ia_archiver|AhrefsBot|Ezooms|GSLFbot|WBSearchBot|Twitterbot|TweetmemeBot|Twikle|PaperLiBot|Wotbox|UnwindFetchor|Exabot|MJ12bot|YandexImages|TurnitinBot|Pingdom|contentkingapp",
          MobileBot:
            "Googlebot-Mobile|AdsBot-Google-Mobile|YahooSeeker/M1A1-R2D2",
          DesktopMode: "WPDesktop",
          TV: "SonyDTV|HbbTV",
          WebKit: "(webkit)[ /]([\\w.]+)",
          Console:
            "\\b(Nintendo|Nintendo WiiU|Nintendo 3DS|Nintendo Switch|PLAYSTATION|Xbox)\\b",
          Watch: "SM-V700",
        },
      },
      detectMobileBrowsers: {
        fullPattern:
          /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i,
        shortPattern:
          /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,
        tabletPattern: /android|ipad|playbook|silk/i,
      },
    };
    var SS = Object.prototype.hasOwnProperty;
    S9.FALLBACK_PHONE = "UnknownPhone";
    S9.FALLBACK_TABLET = "UnknownTablet";
    S9.FALLBACK_MOBILE = "UnknownMobile";
    var SX =
      "isArray" in Array
        ? Array.isArray
        : function (SA) {
            return Object.prototype.toString.call(SA) === "[object Array]";
          };
    var Sz = S9.mobileDetectRules;
    for (S3 in Sz.props) {
      if (SS.call(Sz.props, S3)) {
        S4 = Sz.props[S3];
        S7 = (S4 = SX(S4) ? S4 : [S4]).length;
        S6 = 0;
        for (; S6 < S7; ++S6) {
          if ((S8 = (S5 = S4[S6]).indexOf("[VER]")) >= 0) {
            S5 = S5.substring(0, S8) + "([\\w._\\+]+)" + S5.substring(S8 + 5);
          }
          S4[S6] = new RegExp(S5, "i");
        }
        Sz.props[S3] = S4;
      }
    }
    S1(Sz.oss);
    S1(Sz.phones);
    S1(Sz.tablets);
    S1(Sz.uas);
    S1(Sz.utils);
    Sz.oss0 = {
      WindowsPhoneOS: Sz.oss.WindowsPhoneOS,
      WindowsMobileOS: Sz.oss.WindowsMobileOS,
    };
    S9.findMatch = function (SA, Sx) {
      for (var SO in SA) {
        if (SS.call(SA, SO) && SA[SO].test(Sx)) {
          return SO;
        }
      }
      return null;
    };
    S9.findMatches = function (SA, Sx) {
      var SO;
      var SY = [];
      for (SO in SA) {
        if (SS.call(SA, SO) && SA[SO].test(Sx)) {
          SY.push(SO);
        }
      }
      return SY;
    };
    S9.getVersionStr = function (SA, Sx) {
      var SO;
      var SY;
      var Sp;
      var SE;
      var SG = S9.mobileDetectRules.props;
      if (SS.call(SG, SA)) {
        Sp = (SO = SG[SA]).length;
        SY = 0;
        for (; SY < Sp; ++SY) {
          if ((SE = SO[SY].exec(Sx)) !== null) {
            return SE[1];
          }
        }
      }
      return null;
    };
    S9.getVersion = function (SA, Sx) {
      SA = S9.getVersionStr(SA, Sx);
      if (SA) {
        return S9.prepareVersionNo(SA);
      } else {
        return NaN;
      }
    };
    S9.prepareVersionNo = function (SA) {
      var Sx = SA.split(/[a-z._ \/\-]/i);
      if (Sx.length === 1) {
        SA = Sx[0];
      }
      if (Sx.length > 1) {
        SA = Sx[0] + ".";
        Sx.shift();
        SA += Sx.join("");
      }
      return Number(SA);
    };
    S9.isMobileFallback = function (SA) {
      return (
        S9.detectMobileBrowsers.fullPattern.test(SA) ||
        S9.detectMobileBrowsers.shortPattern.test(SA.substr(0, 4))
      );
    };
    S9.isTabletFallback = function (SA) {
      return S9.detectMobileBrowsers.tabletPattern.test(SA);
    };
    S9.prepareDetectionCache = function (SA, Sx, SO) {
      var SY;
      if (SA.mobile === N) {
        if ((SY = S9.findMatch(S9.mobileDetectRules.tablets, Sx))) {
          SA.mobile = SA.tablet = SY;
          SA.phone = null;
          return;
        } else if ((SY = S9.findMatch(S9.mobileDetectRules.phones, Sx))) {
          SA.mobile = SA.phone = SY;
          SA.tablet = null;
          return;
        } else {
          if (S9.isMobileFallback(Sx)) {
            if ((SY = S2.isPhoneSized(SO)) === N) {
              SA.mobile = S9.FALLBACK_MOBILE;
              SA.tablet = SA.phone = null;
            } else if (SY) {
              SA.mobile = SA.phone = S9.FALLBACK_PHONE;
              SA.tablet = null;
            } else {
              SA.mobile = SA.tablet = S9.FALLBACK_TABLET;
              SA.phone = null;
            }
          } else if (S9.isTabletFallback(Sx)) {
            SA.mobile = SA.tablet = S9.FALLBACK_TABLET;
            SA.phone = null;
          } else {
            SA.mobile = SA.tablet = SA.phone = null;
          }
          return;
        }
      }
    };
    S9.mobileGrade = function (SA) {
      var Sx = SA.mobile() !== null;
      if (
        (SA.os("iOS") && SA.version("iPad") >= 4.3) ||
        (SA.os("iOS") && SA.version("iPhone") >= 3.1) ||
        (SA.os("iOS") && SA.version("iPod") >= 3.1) ||
        (SA.version("Android") > 2.1 && SA.is("Webkit")) ||
        SA.version("Windows Phone OS") >= 7 ||
        (SA.is("BlackBerry") && SA.version("BlackBerry") >= 6) ||
        SA.match("Playbook.*Tablet") ||
        (SA.version("webOS") >= 1.4 && SA.match("Palm|Pre|Pixi")) ||
        SA.match("hp.*TouchPad") ||
        (SA.is("Firefox") && SA.version("Firefox") >= 12) ||
        (SA.is("Chrome") && SA.is("AndroidOS") && SA.version("Android") >= 4) ||
        (SA.is("Skyfire") &&
          SA.version("Skyfire") >= 4.1 &&
          SA.is("AndroidOS") &&
          SA.version("Android") >= 2.3) ||
        (SA.is("Opera") &&
          SA.version("Opera Mobi") > 11 &&
          SA.is("AndroidOS")) ||
        SA.is("MeeGoOS") ||
        SA.is("Tizen") ||
        (SA.is("Dolfin") && SA.version("Bada") >= 2) ||
        ((SA.is("UC Browser") || SA.is("Dolfin")) &&
          SA.version("Android") >= 2.3) ||
        SA.match("Kindle Fire") ||
        (SA.is("Kindle") && SA.version("Kindle") >= 3) ||
        (SA.is("AndroidOS") && SA.is("NookTablet")) ||
        (SA.version("Chrome") >= 11 && !Sx) ||
        (SA.version("Safari") >= 5 && !Sx) ||
        (SA.version("Firefox") >= 4 && !Sx) ||
        (SA.version("MSIE") >= 7 && !Sx) ||
        (SA.version("Opera") >= 10 && !Sx)
      ) {
        return "A";
      } else if (
        (SA.os("iOS") && SA.version("iPad") < 4.3) ||
        (SA.os("iOS") && SA.version("iPhone") < 3.1) ||
        (SA.os("iOS") && SA.version("iPod") < 3.1) ||
        (SA.is("Blackberry") &&
          SA.version("BlackBerry") >= 5 &&
          SA.version("BlackBerry") < 6) ||
        (SA.version("Opera Mini") >= 5 &&
          SA.version("Opera Mini") <= 6.5 &&
          (SA.version("Android") >= 2.3 || SA.is("iOS"))) ||
        SA.match("NokiaN8|NokiaC7|N97.*Series60|Symbian/3") ||
        (SA.version("Opera Mobi") >= 11 && SA.is("SymbianOS"))
      ) {
        return "B";
      } else {
        if (
          SA.version("BlackBerry") >= 5 &&
          !SA.match("MSIEMobile|Windows CE.*Mobile")
        ) {
          SA.version("Windows Mobile");
        }
        return "C";
      }
    };
    S9.detectOS = function (SA) {
      return (
        S9.findMatch(S9.mobileDetectRules.oss0, SA) ||
        S9.findMatch(S9.mobileDetectRules.oss, SA)
      );
    };
    S9.getDeviceSmallerSide = function () {
      if (window.screen.width < window.screen.height) {
        return window.screen.width;
      } else {
        return window.screen.height;
      }
    };
    S2.prototype = {
      constructor: S2,
      mobile: function () {
        S9.prepareDetectionCache(this._cache, this.ua, this.maxPhoneWidth);
        return this._cache.mobile;
      },
      phone: function () {
        S9.prepareDetectionCache(this._cache, this.ua, this.maxPhoneWidth);
        return this._cache.phone;
      },
      tablet: function () {
        S9.prepareDetectionCache(this._cache, this.ua, this.maxPhoneWidth);
        return this._cache.tablet;
      },
      userAgent: function () {
        if (this._cache.userAgent === N) {
          this._cache.userAgent = S9.findMatch(
            S9.mobileDetectRules.uas,
            this.ua
          );
        }
        return this._cache.userAgent;
      },
      userAgents: function () {
        if (this._cache.userAgents === N) {
          this._cache.userAgents = S9.findMatches(
            S9.mobileDetectRules.uas,
            this.ua
          );
        }
        return this._cache.userAgents;
      },
      os: function () {
        if (this._cache.os === N) {
          this._cache.os = S9.detectOS(this.ua);
        }
        return this._cache.os;
      },
      version: function (SA) {
        return S9.getVersion(SA, this.ua);
      },
      versionStr: function (SA) {
        return S9.getVersionStr(SA, this.ua);
      },
      is: function (SA) {
        return (
          S0(this.userAgents(), SA) ||
          y(SA, this.os()) ||
          y(SA, this.phone()) ||
          y(SA, this.tablet()) ||
          S0(S9.findMatches(S9.mobileDetectRules.utils, this.ua), SA)
        );
      },
      match: function (SA) {
        return (SA = SA instanceof RegExp ? SA : new RegExp(SA, "i")).test(
          this.ua
        );
      },
      isPhoneSized: function (SA) {
        return S2.isPhoneSized(SA || this.maxPhoneWidth);
      },
      mobileGrade: function () {
        if (this._cache.grade === N) {
          this._cache.grade = S9.mobileGrade(this);
        }
        return this._cache.grade;
      },
    };
    if (typeof window != "undefined" && window.screen) {
      S2.isPhoneSized = function (SA) {
        if (SA < 0) {
          return N;
        } else {
          return S9.getDeviceSmallerSide() <= SA;
        }
      };
    } else {
      S2.isPhoneSized = function () {};
    }
    S2._impl = S9;
    S2.version = "1.4.4 2019-09-21";
    return S2;
  });
})();
(function (N, n) {
  if (typeof exports == "object" && typeof module == "object") {
    module.exports = n();
  } else if (typeof define == "function" && define.amd) {
    define([], n);
  } else if (typeof exports == "object") {
    exports.devtoolsDetector = n();
  } else {
    N.devtoolsDetector = n();
  }
})(typeof self != "undefined" ? self : this, function () {
  y = [
    function (S1, S2, S3) {
      "use strict";

      (function (S4) {
        S2.c = function () {
          return (typeof performance != "undefined" ? performance : Date).now();
        };
        S2.b = function (S7) {
          var S8 = (S7 = S7 === undefined ? {} : S7).includes;
          var S7 = S7.excludes;
          var S7 = S7 === undefined ? [] : S7;
          var S9 = false;
          var SS = false;
          for (
            var SX = 0, Sz = S8 === undefined ? [] : S8;
            SX < Sz.length;
            SX++
          ) {
            if (Sz[SX] === true) {
              S9 = true;
              break;
            }
          }
          for (var SA = 0, Sx = S7; SA < Sx.length; SA++) {
            if (Sx[SA] === true) {
              SS = true;
              break;
            }
          }
          return S9 && !SS;
        };
        S2.d = function (S7, S8, S9) {
          S7 = S6.a[S7];
          return S7 !== undefined && Object(S5.compare)(S7, S8, S9);
        };
        S2.a = function () {
          if (typeof self != "undefined") {
            return self;
          } else if (typeof window != "undefined") {
            return window;
          } else if (S4 !== undefined) {
            return S4;
          } else {
            return this;
          }
        };
        var S5 = S3(11);
        S3.n(S5);
        var S6 = S3(5);
      }).call(S2, S3(10));
    },
    function (S1, S2, S3) {
      "use strict";

      S3.d(S2, "c", function () {
        return S5;
      });
      S3.d(S2, "d", function () {
        return S6;
      });
      S3.d(S2, "b", function () {
        return S7;
      });
      S3.d(S2, "g", function () {
        return S8;
      });
      S3.d(S2, "e", function () {
        return S9;
      });
      S3.d(S2, "a", function () {
        return SS;
      });
      S3.d(S2, "f", function () {
        return SX;
      });
      var S4;
      var S2 = S3(3);
      var S3 = S3(0);
      var S3 = Object(S3.a)();
      var S5 =
        "InstallTrigger" in ((S3 == null ? undefined : S3.window) || {}) ||
        /firefox/i.test(S2.b);
      var S6 = /trident/i.test(S2.b) || /msie/i.test(S2.b);
      var S7 = /edge/i.test(S2.b);
      var S8 = /webkit/i.test(S2.b) && !S7;
      var S9 = /IqiyiApp/.test(S2.b);
      var SS =
        ((S4 = S3 == null ? undefined : S3.window) == null
          ? undefined
          : S4.chrome) !== undefined ||
        /chrome/i.test(S2.b) ||
        /CriOS/i.test(S2.b);
      var SX =
        (
          ((S3 =
            (S4 = S3 == null ? undefined : S3.window) == null
              ? undefined
              : S4.safari) == null
            ? undefined
            : S3.pushNotification) || false
        ).toString() === "[object SafariRemoteNotification]" ||
        (/safari/i.test(S2.b) && !SS);
    },
    function (S1, S2, S3) {
      "use strict";

      S3.d(S2, "b", function () {
        return S6;
      });
      S3.d(S2, "c", function () {
        return S7;
      });
      S3.d(S2, "a", function () {
        return S8;
      });
      var S4 = S3(1);
      function S5(S9) {
        if (console) {
          if (!S4.d && !S4.b) {
            return console[S9];
          }
          if (S9 === "log" || S9 === "clear") {
            return function () {
              var SS = [];
              for (var SX = 0; SX < arguments.length; SX++) {
                SS[SX] = arguments[SX];
              }
              console[S9].apply(console, SS);
            };
          }
        }
        return function () {
          for (var SS = 0; SS < arguments.length; SS++) {
            SS;
            0;
          }
        };
      }
      var S6 = S5("log");
      var S7 = S5("table");
      var S8 = S5("clear");
    },
    function (S1, S2, S3) {
      "use strict";

      S2.a = function () {
        var S6;
        var S7 = [];
        for (var S8 = 0; S8 < arguments.length; S8++) {
          S7[S8] = arguments[S8];
        }
        if (S4 != null && S4.document) {
          return (S6 = S4.document).createElement.apply(S6, S7);
        } else {
          return {};
        }
      };
      S3.d(S2, "b", function () {
        return S5;
      });
      var S2 = S3(0);
      var S4 = Object(S2.a)();
      var S5 =
        ((S3 = S4 == null ? undefined : S4.navigator) == null
          ? undefined
          : S3.userAgent) || "xxxxx";
    },
    function (S1, S2, S3) {
      "use strict";

      Object.defineProperty(S2, "__esModule", {
        value: true,
      });
      S2.addListener = function (SA) {
        Sz.addListener(SA);
      };
      S2.removeListener = function (SA) {
        Sz.removeListener(SA);
      };
      S2.isLaunch = function () {
        return Sz.isLaunch();
      };
      S2.launch = function () {
        Sz.launch();
      };
      S2.stop = function () {
        Sz.stop();
      };
      S2.setDetectDelay = function (SA) {
        Sz.setDetectDelay(SA);
      };
      var S4 = S3(7);
      var S5 = S3(8);
      S3.d(S2, "DevtoolsDetector", function () {
        return S4.a;
      });
      S3.d(S2, "checkers", function () {
        return S5;
      });
      var S6 = S3(0);
      S3.d(S2, "match", function () {
        return S6.b;
      });
      S3.d(S2, "specificVersionMatch", function () {
        return S6.d;
      });
      var S7 = S3(1);
      S3.d(S2, "isFirefox", function () {
        return S7.c;
      });
      S3.d(S2, "isIE", function () {
        return S7.d;
      });
      S3.d(S2, "isEdge", function () {
        return S7.b;
      });
      S3.d(S2, "isWebkit", function () {
        return S7.g;
      });
      S3.d(S2, "isIqiyiApp", function () {
        return S7.e;
      });
      S3.d(S2, "isChrome", function () {
        return S7.a;
      });
      S3.d(S2, "isSafari", function () {
        return S7.f;
      });
      var S8 = S3(2);
      S3.d(S2, "log", function () {
        return S8.b;
      });
      S3.d(S2, "table", function () {
        return S8.c;
      });
      S3.d(S2, "clear", function () {
        return S8.a;
      });
      var S9 = S3(19);
      S3.d(S2, "isMobile", function () {
        return S9.a;
      });
      var SS = S3(5);
      S3.d(S2, "versionMap", function () {
        return SS.a;
      });
      var SX = S3(6);
      S3.d(S2, "isMac", function () {
        return SX.d;
      });
      S3.d(S2, "isIpad", function () {
        return SX.b;
      });
      S3.d(S2, "isIphone", function () {
        return SX.c;
      });
      S3.d(S2, "isAndroid", function () {
        return SX.a;
      });
      S3.d(S2, "isWindows", function () {
        return SX.e;
      });
      var Sz = new S4.a({
        checkers: [
          S5.erudaChecker,
          S5.elementIdChecker,
          S5.regToStringChecker,
          S5.functionToStringChecker,
          S5.depRegToStringChecker,
          S5.dateToStringChecker,
          S5.performanceChecker,
          S5.debuggerChecker,
        ],
      });
      S2.default = Sz;
    },
    function (S1, S2, S3) {
      "use strict";

      S3.d(S2, "a", function () {
        return S4;
      });
      var S4 = {};
      for (
        var S5 = 0, S6 = (S3(3).b || "").match(/\w+\/(\d|\.)+(\s|$)/gi) || [];
        S5 < S6.length;
        S5++
      ) {
        var S7 = S6[S5].split("/");
        var S8 = S7[0];
        var S7 = S7[1];
        S4[S8] = S7;
      }
    },
    function (S1, S2, S3) {
      "use strict";

      S3.d(S2, "d", function () {
        return S4;
      });
      S3.d(S2, "b", function () {
        return S5;
      });
      S3.d(S2, "c", function () {
        return S6;
      });
      S3.d(S2, "a", function () {
        return S7;
      });
      S3.d(S2, "e", function () {
        return S8;
      });
      var S2 = S3(3);
      var S4 = /macintosh/i.test(S2.b);
      var S5 = /ipad/i.test(S2.b) || (S4 && navigator.maxTouchPoints > 1);
      var S6 = /iphone/i.test(S2.b);
      var S7 = /android/i.test(S2.b);
      var S8 = /windows/i.test(S2.b);
    },
    function (S1, S2, S3) {
      "use strict";

      S3.d(S2, "a", function () {
        return S6;
      });
      var S4 =
        (this && this.__awaiter) ||
        function (S8, S9, SS, SX) {
          return new (SS = SS || Promise)(function (Sz, SA) {
            function Sx(Sp) {
              try {
                SY(SX.next(Sp));
              } catch (SE) {
                SA(SE);
              }
            }
            function SO(Sp) {
              try {
                SY(SX.throw(Sp));
              } catch (SE) {
                SA(SE);
              }
            }
            function SY(Sp) {
              var SE;
              if (Sp.done) {
                Sz(Sp.value);
              } else {
                ((SE = Sp.value) instanceof SS
                  ? SE
                  : new SS(function (SG) {
                      SG(SE);
                    })
                ).then(Sx, SO);
              }
            }
            SY((SX = SX.apply(S8, S9 || [])).next());
          });
        };
      var S5 =
        (this && this.__generator) ||
        function (S8, S9) {
          var SS;
          var SX;
          var Sz;
          var SA = {
            label: 0,
            sent: function () {
              if (Sz[0] & 1) {
                throw Sz[1];
              }
              return Sz[1];
            },
            trys: [],
            ops: [],
          };
          var Sx = {
            next: SO(0),
            throw: SO(1),
            return: SO(2),
          };
          if (typeof Symbol == "function") {
            Sx[Symbol.iterator] = function () {
              return this;
            };
          }
          return Sx;
          function SO(SY) {
            return function (Sp) {
              var SE = [SY, Sp];
              if (SS) {
                throw new TypeError("Generator is already executing.");
              }
              while (SA) {
                try {
                  SS = 1;
                  if (
                    SX &&
                    (Sz =
                      SE[0] & 2
                        ? SX.return
                        : SE[0]
                        ? SX.throw || ((Sz = SX.return) && Sz.call(SX), 0)
                        : SX.next) &&
                    !(Sz = Sz.call(SX, SE[1])).done
                  ) {
                    return Sz;
                  }
                  SX = 0;
                  switch ((SE = Sz ? [SE[0] & 2, Sz.value] : SE)[0]) {
                    case 0:
                    case 1:
                      Sz = SE;
                      break;
                    case 4:
                      SA.label++;
                      return {
                        value: SE[1],
                        done: false,
                      };
                    case 5:
                      SA.label++;
                      SX = SE[1];
                      SE = [0];
                      continue;
                    case 7:
                      SE = SA.ops.pop();
                      SA.trys.pop();
                      continue;
                    default:
                      if (
                        !(Sz =
                          (Sz = SA.trys).length > 0 && Sz[Sz.length - 1]) &&
                        (SE[0] === 6 || SE[0] === 2)
                      ) {
                        SA = 0;
                        continue;
                      }
                      if (
                        SE[0] === 3 &&
                        (!Sz || (SE[1] > Sz[0] && SE[1] < Sz[3]))
                      ) {
                        SA.label = SE[1];
                      } else if (SE[0] === 6 && SA.label < Sz[1]) {
                        SA.label = Sz[1];
                        Sz = SE;
                      } else {
                        if (!Sz || SA.label >= Sz[2]) {
                          if (Sz[2]) {
                            SA.ops.pop();
                          }
                          SA.trys.pop();
                          continue;
                        }
                        SA.label = Sz[2];
                        SA.ops.push(SE);
                      }
                  }
                  SE = S9.call(S8, SA);
                } catch (SG) {
                  SE = [6, SG];
                  SX = 0;
                } finally {
                  SS = Sz = 0;
                }
              }
              if (SE[0] & 5) {
                throw SE[1];
              }
              return {
                value: SE[0] ? SE[1] : undefined,
                done: true,
              };
            };
          }
        };
      S7.prototype.launch = function () {
        if (this._detectLoopDelay <= 0) {
          this.setDetectDelay(500);
        }
        if (this._detectLoopStopped) {
          this._detectLoopStopped = false;
          this._detectLoop();
        }
      };
      S7.prototype.stop = function () {
        if (!this._detectLoopStopped) {
          this._detectLoopStopped = true;
          clearTimeout(this._timer);
        }
      };
      S7.prototype.isLaunch = function () {
        return !this._detectLoopStopped;
      };
      S7.prototype.setDetectDelay = function (S8) {
        this._detectLoopDelay = S8;
      };
      S7.prototype.addListener = function (S8) {
        this._listeners.push(S8);
      };
      S7.prototype.removeListener = function (S8) {
        this._listeners = this._listeners.filter(function (S9) {
          return S9 !== S8;
        });
      };
      S7.prototype._broadcast = function (S8) {
        for (var S9 = 0, SS = this._listeners; S9 < SS.length; S9++) {
          var SX = SS[S9];
          try {
            SX(S8.isOpen, S8);
          } catch (Sz) {}
        }
      };
      S7.prototype._detectLoop = function () {
        return S4(this, undefined, undefined, function () {
          var S8;
          var S9;
          var SS;
          var SX;
          var Sz;
          var SA = this;
          return S5(this, function (Sx) {
            switch (Sx.label) {
              case 0:
                S8 = false;
                S9 = "";
                SS = 0;
                SX = this._checkers;
                Sx.label = 1;
              case 1:
                if (SS < SX.length) {
                  return [4, (Sz = SX[SS]).isEnable()];
                } else {
                  return [3, 6];
                }
              case 2:
                if (Sx.sent()) {
                  S9 = Sz.name;
                  return [4, Sz.isOpen()];
                } else {
                  return [3, 4];
                }
              case 3:
                S8 = Sx.sent();
                Sx.label = 4;
              case 4:
                if (S8) {
                  return [3, 6];
                }
                Sx.label = 5;
              case 5:
                SS++;
                return [3, 1];
              case 6:
                if (S8 != this._isOpen) {
                  this._isOpen = S8;
                  this._broadcast({
                    isOpen: S8,
                    checkerName: S9,
                  });
                }
                if (this._detectLoopDelay > 0) {
                  this._timer = setTimeout(function () {
                    return SA._detectLoop();
                  }, this._detectLoopDelay);
                } else {
                  this.stop();
                }
                return [2];
            }
          });
        });
      };
      var S6 = S7;
      function S7(S8) {
        S8 = S8.checkers;
        this._listeners = [];
        this._isOpen = false;
        this._detectLoopStopped = true;
        this._detectLoopDelay = 500;
        this._checkers = S8.slice();
      }
    },
    function (S1, S2, S3) {
      "use strict";

      Object.defineProperty(S2, "__esModule", {
        value: true,
      });
      var S4 = S3(9);
      S3.d(S2, "depRegToStringChecker", function () {
        return S4.a;
      });
      var S5 = S3(12);
      S3.d(S2, "elementIdChecker", function () {
        return S5.a;
      });
      var S6 = S3(13);
      S3.d(S2, "functionToStringChecker", function () {
        return S6.a;
      });
      var S7 = S3(14);
      S3.d(S2, "regToStringChecker", function () {
        return S7.a;
      });
      var S8 = S3(15);
      S3.d(S2, "debuggerChecker", function () {
        return S8.a;
      });
      var S9 = S3(16);
      S3.d(S2, "dateToStringChecker", function () {
        return S9.a;
      });
      var SS = S3(17);
      S3.d(S2, "performanceChecker", function () {
        return SS.a;
      });
      var SX = S3(18);
      S3.d(S2, "erudaChecker", function () {
        return SX.a;
      });
    },
    function (S1, S2, S3) {
      "use strict";

      S3.d(S2, "a", function () {
        return SX;
      });
      var S4 = S3(1);
      var S5 = S3(2);
      var S6 = S3(0);
      var S7 =
        (this && this.__awaiter) ||
        function (Sz, SA, Sx, SO) {
          return new (Sx = Sx || Promise)(function (SY, Sp) {
            function SE(Sa) {
              try {
                SR(SO.next(Sa));
              } catch (SV) {
                Sp(SV);
              }
            }
            function SG(Sa) {
              try {
                SR(SO.throw(Sa));
              } catch (SV) {
                Sp(SV);
              }
            }
            function SR(Sa) {
              var SV;
              if (Sa.done) {
                SY(Sa.value);
              } else {
                ((SV = Sa.value) instanceof Sx
                  ? SV
                  : new Sx(function (Sq) {
                      Sq(SV);
                    })
                ).then(SE, SG);
              }
            }
            SR((SO = SO.apply(Sz, SA || [])).next());
          });
        };
      var S8 =
        (this && this.__generator) ||
        function (Sz, SA) {
          var Sx;
          var SO;
          var SY;
          var Sp = {
            label: 0,
            sent: function () {
              if (SY[0] & 1) {
                throw SY[1];
              }
              return SY[1];
            },
            trys: [],
            ops: [],
          };
          var SE = {
            next: SG(0),
            throw: SG(1),
            return: SG(2),
          };
          if (typeof Symbol == "function") {
            SE[Symbol.iterator] = function () {
              return this;
            };
          }
          return SE;
          function SG(SR) {
            return function (Sa) {
              var SV = [SR, Sa];
              if (Sx) {
                throw new TypeError("Generator is already executing.");
              }
              while (Sp) {
                try {
                  Sx = 1;
                  if (
                    SO &&
                    (SY =
                      SV[0] & 2
                        ? SO.return
                        : SV[0]
                        ? SO.throw || ((SY = SO.return) && SY.call(SO), 0)
                        : SO.next) &&
                    !(SY = SY.call(SO, SV[1])).done
                  ) {
                    return SY;
                  }
                  SO = 0;
                  switch ((SV = SY ? [SV[0] & 2, SY.value] : SV)[0]) {
                    case 0:
                    case 1:
                      SY = SV;
                      break;
                    case 4:
                      Sp.label++;
                      return {
                        value: SV[1],
                        done: false,
                      };
                    case 5:
                      Sp.label++;
                      SO = SV[1];
                      SV = [0];
                      continue;
                    case 7:
                      SV = Sp.ops.pop();
                      Sp.trys.pop();
                      continue;
                    default:
                      if (
                        !(SY =
                          (SY = Sp.trys).length > 0 && SY[SY.length - 1]) &&
                        (SV[0] === 6 || SV[0] === 2)
                      ) {
                        Sp = 0;
                        continue;
                      }
                      if (
                        SV[0] === 3 &&
                        (!SY || (SV[1] > SY[0] && SV[1] < SY[3]))
                      ) {
                        Sp.label = SV[1];
                      } else if (SV[0] === 6 && Sp.label < SY[1]) {
                        Sp.label = SY[1];
                        SY = SV;
                      } else {
                        if (!SY || Sp.label >= SY[2]) {
                          if (SY[2]) {
                            Sp.ops.pop();
                          }
                          Sp.trys.pop();
                          continue;
                        }
                        Sp.label = SY[2];
                        Sp.ops.push(SV);
                      }
                  }
                  SV = SA.call(Sz, Sp);
                } catch (Sq) {
                  SV = [6, Sq];
                  SO = 0;
                } finally {
                  Sx = SY = 0;
                }
              }
              if (SV[0] & 5) {
                throw SV[1];
              }
              return {
                value: SV[0] ? SV[1] : undefined,
                done: true,
              };
            };
          }
        };
      var S9 = / /;
      var SS = false;
      S9.toString = function () {
        SS = true;
        return SX.name;
      };
      var SX = {
        name: "dep-reg-to-string",
        isOpen: function () {
          return S7(this, undefined, undefined, function () {
            return S8(this, function (Sz) {
              SS = false;
              Object(S5.c)({
                dep: S9,
              });
              Object(S5.a)();
              return [2, SS];
            });
          });
        },
        isEnable: function () {
          return S7(this, undefined, undefined, function () {
            return S8(this, function (Sz) {
              return [
                2,
                Object(S6.b)({
                  includes: [true],
                  excludes: [S4.c, S4.d],
                }),
              ];
            });
          });
        },
      };
    },
    function (S1, S2) {
      var S3 = (function () {
        return this;
      })();
      try {
        S3 = S3 || Function("return this")() || (0, eval)("this");
      } catch (S4) {
        if (typeof window == "object") {
          S3 = window;
        }
      }
      S1.exports = S3;
    },
    function (S1, S2, S3) {
      var S4;
      if (
        (S2 =
          typeof (S4 = function () {
            var S5 =
              /^v?(?:\d+)(\.(?:[x*]|\d+)(\.(?:[x*]|\d+)(\.(?:[x*]|\d+))?(?:-[\da-z\-]+(?:\.[\da-z\-]+)*)?(?:\+[\da-z\-]+(?:\.[\da-z\-]+)*)?)?)?$/i;
            function S6(Sz) {
              var SA = Sz.replace(/^v/, "").replace(/\+.*$/, "");
              var Sx = (function (SY, Sp) {
                if (SY.indexOf(Sp) === -1) {
                  return SY.length;
                } else {
                  return SY.indexOf(Sp);
                }
              })(SA, "-");
              var SO = SA.substring(0, Sx).split(".");
              SO.push(SA.substring(Sx + 1));
              return SO;
            }
            function S7(Sz) {
              if (isNaN(Number(Sz))) {
                return Sz;
              } else {
                return Number(Sz);
              }
            }
            function S8(Sz) {
              if (typeof Sz != "string") {
                throw new TypeError("Invalid argument expected string");
              }
              if (!S5.test(Sz)) {
                throw new Error(
                  "Invalid argument not valid semver ('" + Sz + "' received)"
                );
              }
            }
            function S9(Sz, SA) {
              [Sz, SA].forEach(S8);
              for (
                var Sx = S6(Sz), SO = S6(SA), SY = 0;
                SY < Math.max(Sx.length - 1, SO.length - 1);
                SY++
              ) {
                var Sp = parseInt(Sx[SY] || 0, 10);
                var SE = parseInt(SO[SY] || 0, 10);
                if (Sp > SE) {
                  return 1;
                }
                if (SE > Sp) {
                  return -1;
                }
              }
              var SG = Sx[Sx.length - 1];
              var SR = SO[SO.length - 1];
              if (SG && SR) {
                var Sa = SG.split(".").map(S7);
                var SV = SR.split(".").map(S7);
                for (SY = 0; SY < Math.max(Sa.length, SV.length); SY++) {
                  if (
                    Sa[SY] === undefined ||
                    (typeof SV[SY] == "string" && typeof Sa[SY] == "number")
                  ) {
                    return -1;
                  }
                  if (
                    SV[SY] === undefined ||
                    (typeof Sa[SY] == "string" && typeof SV[SY] == "number")
                  ) {
                    return 1;
                  }
                  if (Sa[SY] > SV[SY]) {
                    return 1;
                  }
                  if (SV[SY] > Sa[SY]) {
                    return -1;
                  }
                }
              } else if (SG || SR) {
                if (SG) {
                  return -1;
                } else {
                  return 1;
                }
              }
              return 0;
            }
            var SS = [">", ">=", "=", "<", "<="];
            var SX = {
              ">": [1],
              ">=": [0, 1],
              "=": [0],
              "<=": [-1, 0],
              "<": [-1],
            };
            S9.validate = function (Sz) {
              return typeof Sz == "string" && S5.test(Sz);
            };
            S9.compare = function (Sz, SA, Sx) {
              (function (SY) {
                if (typeof SY != "string") {
                  throw new TypeError(
                    "Invalid operator type, expected string but got " +
                      typeof SY
                  );
                }
                if (SS.indexOf(SY) === -1) {
                  throw new TypeError(
                    "Invalid operator, expected one of " + SS.join("|")
                  );
                }
              })(Sx);
              var SO = S9(Sz, SA);
              return SX[Sx].indexOf(SO) > -1;
            };
            return S9;
          }) == "function"
            ? S4.apply(S2, [])
            : S4) !== undefined
      ) {
        S1.exports = S2;
      }
    },
    function (S1, S2, S3) {
      "use strict";

      S3.d(S2, "a", function () {
        return SX;
      });
      var S4 = S3(1);
      var S5 = S3(2);
      var S6 = S3(0);
      var S2 = S3(3);
      var S7 =
        (this && this.__awaiter) ||
        function (Sz, SA, Sx, SO) {
          return new (Sx = Sx || Promise)(function (SY, Sp) {
            function SE(Sa) {
              try {
                SR(SO.next(Sa));
              } catch (SV) {
                Sp(SV);
              }
            }
            function SG(Sa) {
              try {
                SR(SO.throw(Sa));
              } catch (SV) {
                Sp(SV);
              }
            }
            function SR(Sa) {
              var SV;
              if (Sa.done) {
                SY(Sa.value);
              } else {
                ((SV = Sa.value) instanceof Sx
                  ? SV
                  : new Sx(function (Sq) {
                      Sq(SV);
                    })
                ).then(SE, SG);
              }
            }
            SR((SO = SO.apply(Sz, SA || [])).next());
          });
        };
      var S8 =
        (this && this.__generator) ||
        function (Sz, SA) {
          var Sx;
          var SO;
          var SY;
          var Sp = {
            label: 0,
            sent: function () {
              if (SY[0] & 1) {
                throw SY[1];
              }
              return SY[1];
            },
            trys: [],
            ops: [],
          };
          var SE = {
            next: SG(0),
            throw: SG(1),
            return: SG(2),
          };
          if (typeof Symbol == "function") {
            SE[Symbol.iterator] = function () {
              return this;
            };
          }
          return SE;
          function SG(SR) {
            return function (Sa) {
              var SV = [SR, Sa];
              if (Sx) {
                throw new TypeError("Generator is already executing.");
              }
              while (Sp) {
                try {
                  Sx = 1;
                  if (
                    SO &&
                    (SY =
                      SV[0] & 2
                        ? SO.return
                        : SV[0]
                        ? SO.throw || ((SY = SO.return) && SY.call(SO), 0)
                        : SO.next) &&
                    !(SY = SY.call(SO, SV[1])).done
                  ) {
                    return SY;
                  }
                  SO = 0;
                  switch ((SV = SY ? [SV[0] & 2, SY.value] : SV)[0]) {
                    case 0:
                    case 1:
                      SY = SV;
                      break;
                    case 4:
                      Sp.label++;
                      return {
                        value: SV[1],
                        done: false,
                      };
                    case 5:
                      Sp.label++;
                      SO = SV[1];
                      SV = [0];
                      continue;
                    case 7:
                      SV = Sp.ops.pop();
                      Sp.trys.pop();
                      continue;
                    default:
                      if (
                        !(SY =
                          (SY = Sp.trys).length > 0 && SY[SY.length - 1]) &&
                        (SV[0] === 6 || SV[0] === 2)
                      ) {
                        Sp = 0;
                        continue;
                      }
                      if (
                        SV[0] === 3 &&
                        (!SY || (SV[1] > SY[0] && SV[1] < SY[3]))
                      ) {
                        Sp.label = SV[1];
                      } else if (SV[0] === 6 && Sp.label < SY[1]) {
                        Sp.label = SY[1];
                        SY = SV;
                      } else {
                        if (!SY || Sp.label >= SY[2]) {
                          if (SY[2]) {
                            Sp.ops.pop();
                          }
                          Sp.trys.pop();
                          continue;
                        }
                        Sp.label = SY[2];
                        Sp.ops.push(SV);
                      }
                  }
                  SV = SA.call(Sz, Sp);
                } catch (Sq) {
                  SV = [6, Sq];
                  SO = 0;
                } finally {
                  Sx = SY = 0;
                }
              }
              if (SV[0] & 5) {
                throw SV[1];
              }
              return {
                value: SV[0] ? SV[1] : undefined,
                done: true,
              };
            };
          }
        };
      var S9 = Object(S2.a)("div");
      var SS = false;
      Object.defineProperty(S9, "id", {
        get: function () {
          SS = true;
          return SX.name;
        },
        configurable: true,
      });
      var SX = {
        name: "element-id",
        isOpen: function () {
          return S7(this, undefined, undefined, function () {
            return S8(this, function (Sz) {
              SS = false;
              Object(S5.b)(S9);
              Object(S5.a)();
              return [2, SS];
            });
          });
        },
        isEnable: function () {
          return S7(this, undefined, undefined, function () {
            return S8(this, function (Sz) {
              return [
                2,
                Object(S6.b)({
                  includes: [true],
                  excludes: [S4.d, S4.b, S4.c],
                }),
              ];
            });
          });
        },
      };
    },
    function (S1, S2, S3) {
      "use strict";

      S3.d(S2, "a", function () {
        return Sz;
      });
      var S4 = S3(1);
      var S5 = S3(2);
      var S6 = S3(6);
      var S7 = S3(0);
      var S8 =
        (this && this.__awaiter) ||
        function (SA, Sx, SO, SY) {
          return new (SO = SO || Promise)(function (Sp, SE) {
            function SG(SV) {
              try {
                Sa(SY.next(SV));
              } catch (Sq) {
                SE(Sq);
              }
            }
            function SR(SV) {
              try {
                Sa(SY.throw(SV));
              } catch (Sq) {
                SE(Sq);
              }
            }
            function Sa(SV) {
              var Sq;
              if (SV.done) {
                Sp(SV.value);
              } else {
                ((Sq = SV.value) instanceof SO
                  ? Sq
                  : new SO(function (SI) {
                      SI(Sq);
                    })
                ).then(SG, SR);
              }
            }
            Sa((SY = SY.apply(SA, Sx || [])).next());
          });
        };
      var S9 =
        (this && this.__generator) ||
        function (SA, Sx) {
          var SO;
          var SY;
          var Sp;
          var SE = {
            label: 0,
            sent: function () {
              if (Sp[0] & 1) {
                throw Sp[1];
              }
              return Sp[1];
            },
            trys: [],
            ops: [],
          };
          var SG = {
            next: SR(0),
            throw: SR(1),
            return: SR(2),
          };
          if (typeof Symbol == "function") {
            SG[Symbol.iterator] = function () {
              return this;
            };
          }
          return SG;
          function SR(Sa) {
            return function (SV) {
              var Sq = [Sa, SV];
              if (SO) {
                throw new TypeError("Generator is already executing.");
              }
              while (SE) {
                try {
                  SO = 1;
                  if (
                    SY &&
                    (Sp =
                      Sq[0] & 2
                        ? SY.return
                        : Sq[0]
                        ? SY.throw || ((Sp = SY.return) && Sp.call(SY), 0)
                        : SY.next) &&
                    !(Sp = Sp.call(SY, Sq[1])).done
                  ) {
                    return Sp;
                  }
                  SY = 0;
                  switch ((Sq = Sp ? [Sq[0] & 2, Sp.value] : Sq)[0]) {
                    case 0:
                    case 1:
                      Sp = Sq;
                      break;
                    case 4:
                      SE.label++;
                      return {
                        value: Sq[1],
                        done: false,
                      };
                    case 5:
                      SE.label++;
                      SY = Sq[1];
                      Sq = [0];
                      continue;
                    case 7:
                      Sq = SE.ops.pop();
                      SE.trys.pop();
                      continue;
                    default:
                      if (
                        !(Sp =
                          (Sp = SE.trys).length > 0 && Sp[Sp.length - 1]) &&
                        (Sq[0] === 6 || Sq[0] === 2)
                      ) {
                        SE = 0;
                        continue;
                      }
                      if (
                        Sq[0] === 3 &&
                        (!Sp || (Sq[1] > Sp[0] && Sq[1] < Sp[3]))
                      ) {
                        SE.label = Sq[1];
                      } else if (Sq[0] === 6 && SE.label < Sp[1]) {
                        SE.label = Sp[1];
                        Sp = Sq;
                      } else {
                        if (!Sp || SE.label >= Sp[2]) {
                          if (Sp[2]) {
                            SE.ops.pop();
                          }
                          SE.trys.pop();
                          continue;
                        }
                        SE.label = Sp[2];
                        SE.ops.push(Sq);
                      }
                  }
                  Sq = Sx.call(SA, SE);
                } catch (SI) {
                  Sq = [6, SI];
                  SY = 0;
                } finally {
                  SO = Sp = 0;
                }
              }
              if (Sq[0] & 5) {
                throw Sq[1];
              }
              return {
                value: Sq[0] ? Sq[1] : undefined,
                done: true,
              };
            };
          }
        };
      function SS() {}
      var SX = 0;
      SS.toString = function () {
        SX++;
        return "";
      };
      var Sz = {
        name: "function-to-string",
        isOpen: function () {
          return S8(this, undefined, undefined, function () {
            return S9(this, function (SA) {
              SX = 0;
              Object(S5.b)(SS);
              Object(S5.a)();
              return [2, SX === 2];
            });
          });
        },
        isEnable: function () {
          return S8(this, undefined, undefined, function () {
            return S9(this, function (SA) {
              return [
                2,
                Object(S7.b)({
                  includes: [true],
                  excludes: [S4.e, S4.c, (S6.b || S6.c) && S4.a],
                }),
              ];
            });
          });
        },
      };
    },
    function (S1, S2, S3) {
      "use strict";

      S3.d(S2, "a", function () {
        return SX;
      });
      var S4 = S3(2);
      var S5 = S3(1);
      var S6 = S3(0);
      var S7 =
        (this && this.__awaiter) ||
        function (Sz, SA, Sx, SO) {
          return new (Sx = Sx || Promise)(function (SY, Sp) {
            function SE(Sa) {
              try {
                SR(SO.next(Sa));
              } catch (SV) {
                Sp(SV);
              }
            }
            function SG(Sa) {
              try {
                SR(SO.throw(Sa));
              } catch (SV) {
                Sp(SV);
              }
            }
            function SR(Sa) {
              var SV;
              if (Sa.done) {
                SY(Sa.value);
              } else {
                ((SV = Sa.value) instanceof Sx
                  ? SV
                  : new Sx(function (Sq) {
                      Sq(SV);
                    })
                ).then(SE, SG);
              }
            }
            SR((SO = SO.apply(Sz, SA || [])).next());
          });
        };
      var S8 =
        (this && this.__generator) ||
        function (Sz, SA) {
          var Sx;
          var SO;
          var SY;
          var Sp = {
            label: 0,
            sent: function () {
              if (SY[0] & 1) {
                throw SY[1];
              }
              return SY[1];
            },
            trys: [],
            ops: [],
          };
          var SE = {
            next: SG(0),
            throw: SG(1),
            return: SG(2),
          };
          if (typeof Symbol == "function") {
            SE[Symbol.iterator] = function () {
              return this;
            };
          }
          return SE;
          function SG(SR) {
            return function (Sa) {
              var SV = [SR, Sa];
              if (Sx) {
                throw new TypeError("Generator is already executing.");
              }
              while (Sp) {
                try {
                  Sx = 1;
                  if (
                    SO &&
                    (SY =
                      SV[0] & 2
                        ? SO.return
                        : SV[0]
                        ? SO.throw || ((SY = SO.return) && SY.call(SO), 0)
                        : SO.next) &&
                    !(SY = SY.call(SO, SV[1])).done
                  ) {
                    return SY;
                  }
                  SO = 0;
                  switch ((SV = SY ? [SV[0] & 2, SY.value] : SV)[0]) {
                    case 0:
                    case 1:
                      SY = SV;
                      break;
                    case 4:
                      Sp.label++;
                      return {
                        value: SV[1],
                        done: false,
                      };
                    case 5:
                      Sp.label++;
                      SO = SV[1];
                      SV = [0];
                      continue;
                    case 7:
                      SV = Sp.ops.pop();
                      Sp.trys.pop();
                      continue;
                    default:
                      if (
                        !(SY =
                          (SY = Sp.trys).length > 0 && SY[SY.length - 1]) &&
                        (SV[0] === 6 || SV[0] === 2)
                      ) {
                        Sp = 0;
                        continue;
                      }
                      if (
                        SV[0] === 3 &&
                        (!SY || (SV[1] > SY[0] && SV[1] < SY[3]))
                      ) {
                        Sp.label = SV[1];
                      } else if (SV[0] === 6 && Sp.label < SY[1]) {
                        Sp.label = SY[1];
                        SY = SV;
                      } else {
                        if (!SY || Sp.label >= SY[2]) {
                          if (SY[2]) {
                            Sp.ops.pop();
                          }
                          Sp.trys.pop();
                          continue;
                        }
                        Sp.label = SY[2];
                        Sp.ops.push(SV);
                      }
                  }
                  SV = SA.call(Sz, Sp);
                } catch (Sq) {
                  SV = [6, Sq];
                  SO = 0;
                } finally {
                  Sx = SY = 0;
                }
              }
              if (SV[0] & 5) {
                throw SV[1];
              }
              return {
                value: SV[0] ? SV[1] : undefined,
                done: true,
              };
            };
          }
        };
      var S9 = / /;
      var SS = false;
      S9.toString = function () {
        SS = true;
        return SX.name;
      };
      var SX = {
        name: "reg-to-string",
        isOpen: function () {
          return S7(this, undefined, undefined, function () {
            return S8(this, function (Sz) {
              SS = false;
              Object(S4.b)(S9);
              Object(S4.a)();
              return [2, SS];
            });
          });
        },
        isEnable: function () {
          return S7(this, undefined, undefined, function () {
            return S8(this, function (Sz) {
              return [
                2,
                Object(S6.b)({
                  includes: [true],
                  excludes: [S5.g],
                }),
              ];
            });
          });
        },
      };
    },
    function (S1, S2, S3) {
      "use strict";

      S3.d(S2, "a", function () {
        return S7;
      });
      var S4 = S3(0);
      var S5 =
        (this && this.__awaiter) ||
        function (S8, S9, SS, SX) {
          return new (SS = SS || Promise)(function (Sz, SA) {
            function Sx(Sp) {
              try {
                SY(SX.next(Sp));
              } catch (SE) {
                SA(SE);
              }
            }
            function SO(Sp) {
              try {
                SY(SX.throw(Sp));
              } catch (SE) {
                SA(SE);
              }
            }
            function SY(Sp) {
              var SE;
              if (Sp.done) {
                Sz(Sp.value);
              } else {
                ((SE = Sp.value) instanceof SS
                  ? SE
                  : new SS(function (SG) {
                      SG(SE);
                    })
                ).then(Sx, SO);
              }
            }
            SY((SX = SX.apply(S8, S9 || [])).next());
          });
        };
      var S6 =
        (this && this.__generator) ||
        function (S8, S9) {
          var SS;
          var SX;
          var Sz;
          var SA = {
            label: 0,
            sent: function () {
              if (Sz[0] & 1) {
                throw Sz[1];
              }
              return Sz[1];
            },
            trys: [],
            ops: [],
          };
          var Sx = {
            next: SO(0),
            throw: SO(1),
            return: SO(2),
          };
          if (typeof Symbol == "function") {
            Sx[Symbol.iterator] = function () {
              return this;
            };
          }
          return Sx;
          function SO(SY) {
            return function (Sp) {
              var SE = [SY, Sp];
              if (SS) {
                throw new TypeError("Generator is already executing.");
              }
              while (SA) {
                try {
                  SS = 1;
                  if (
                    SX &&
                    (Sz =
                      SE[0] & 2
                        ? SX.return
                        : SE[0]
                        ? SX.throw || ((Sz = SX.return) && Sz.call(SX), 0)
                        : SX.next) &&
                    !(Sz = Sz.call(SX, SE[1])).done
                  ) {
                    return Sz;
                  }
                  SX = 0;
                  switch ((SE = Sz ? [SE[0] & 2, Sz.value] : SE)[0]) {
                    case 0:
                    case 1:
                      Sz = SE;
                      break;
                    case 4:
                      SA.label++;
                      return {
                        value: SE[1],
                        done: false,
                      };
                    case 5:
                      SA.label++;
                      SX = SE[1];
                      SE = [0];
                      continue;
                    case 7:
                      SE = SA.ops.pop();
                      SA.trys.pop();
                      continue;
                    default:
                      if (
                        !(Sz =
                          (Sz = SA.trys).length > 0 && Sz[Sz.length - 1]) &&
                        (SE[0] === 6 || SE[0] === 2)
                      ) {
                        SA = 0;
                        continue;
                      }
                      if (
                        SE[0] === 3 &&
                        (!Sz || (SE[1] > Sz[0] && SE[1] < Sz[3]))
                      ) {
                        SA.label = SE[1];
                      } else if (SE[0] === 6 && SA.label < Sz[1]) {
                        SA.label = Sz[1];
                        Sz = SE;
                      } else {
                        if (!Sz || SA.label >= Sz[2]) {
                          if (Sz[2]) {
                            SA.ops.pop();
                          }
                          SA.trys.pop();
                          continue;
                        }
                        SA.label = Sz[2];
                        SA.ops.push(SE);
                      }
                  }
                  SE = S9.call(S8, SA);
                } catch (SG) {
                  SE = [6, SG];
                  SX = 0;
                } finally {
                  SS = Sz = 0;
                }
              }
              if (SE[0] & 5) {
                throw SE[1];
              }
              return {
                value: SE[0] ? SE[1] : undefined,
                done: true,
              };
            };
          }
        };
      var S7 = {
        name: "debugger-checker",
        isOpen: function () {
          return S5(this, undefined, undefined, function () {
            var S8;
            return S6(this, function (S9) {
              S8 = Object(S4.c)();
              (function () {}).constructor("debugger")();
              return [2, Object(S4.c)() - S8 > 100];
            });
          });
        },
        isEnable: function () {
          return S5(this, undefined, undefined, function () {
            return S6(this, function (S8) {
              return [2, true];
            });
          });
        },
      };
    },
    function (S1, S2, S3) {
      "use strict";

      S3.d(S2, "a", function () {
        return Sz;
      });
      var S4 = S3(1);
      var S5 = S3(2);
      var S6 = S3(0);
      var S7 = S3(4);
      var S8 =
        (this && this.__awaiter) ||
        function (SA, Sx, SO, SY) {
          return new (SO = SO || Promise)(function (Sp, SE) {
            function SG(SV) {
              try {
                Sa(SY.next(SV));
              } catch (Sq) {
                SE(Sq);
              }
            }
            function SR(SV) {
              try {
                Sa(SY.throw(SV));
              } catch (Sq) {
                SE(Sq);
              }
            }
            function Sa(SV) {
              var Sq;
              if (SV.done) {
                Sp(SV.value);
              } else {
                ((Sq = SV.value) instanceof SO
                  ? Sq
                  : new SO(function (SI) {
                      SI(Sq);
                    })
                ).then(SG, SR);
              }
            }
            Sa((SY = SY.apply(SA, Sx || [])).next());
          });
        };
      var S9 =
        (this && this.__generator) ||
        function (SA, Sx) {
          var SO;
          var SY;
          var Sp;
          var SE = {
            label: 0,
            sent: function () {
              if (Sp[0] & 1) {
                throw Sp[1];
              }
              return Sp[1];
            },
            trys: [],
            ops: [],
          };
          var SG = {
            next: SR(0),
            throw: SR(1),
            return: SR(2),
          };
          if (typeof Symbol == "function") {
            SG[Symbol.iterator] = function () {
              return this;
            };
          }
          return SG;
          function SR(Sa) {
            return function (SV) {
              var Sq = [Sa, SV];
              if (SO) {
                throw new TypeError("Generator is already executing.");
              }
              while (SE) {
                try {
                  SO = 1;
                  if (
                    SY &&
                    (Sp =
                      Sq[0] & 2
                        ? SY.return
                        : Sq[0]
                        ? SY.throw || ((Sp = SY.return) && Sp.call(SY), 0)
                        : SY.next) &&
                    !(Sp = Sp.call(SY, Sq[1])).done
                  ) {
                    return Sp;
                  }
                  SY = 0;
                  switch ((Sq = Sp ? [Sq[0] & 2, Sp.value] : Sq)[0]) {
                    case 0:
                    case 1:
                      Sp = Sq;
                      break;
                    case 4:
                      SE.label++;
                      return {
                        value: Sq[1],
                        done: false,
                      };
                    case 5:
                      SE.label++;
                      SY = Sq[1];
                      Sq = [0];
                      continue;
                    case 7:
                      Sq = SE.ops.pop();
                      SE.trys.pop();
                      continue;
                    default:
                      if (
                        !(Sp =
                          (Sp = SE.trys).length > 0 && Sp[Sp.length - 1]) &&
                        (Sq[0] === 6 || Sq[0] === 2)
                      ) {
                        SE = 0;
                        continue;
                      }
                      if (
                        Sq[0] === 3 &&
                        (!Sp || (Sq[1] > Sp[0] && Sq[1] < Sp[3]))
                      ) {
                        SE.label = Sq[1];
                      } else if (Sq[0] === 6 && SE.label < Sp[1]) {
                        SE.label = Sp[1];
                        Sp = Sq;
                      } else {
                        if (!Sp || SE.label >= Sp[2]) {
                          if (Sp[2]) {
                            SE.ops.pop();
                          }
                          SE.trys.pop();
                          continue;
                        }
                        SE.label = Sp[2];
                        SE.ops.push(Sq);
                      }
                  }
                  Sq = Sx.call(SA, SE);
                } catch (SI) {
                  Sq = [6, SI];
                  SY = 0;
                } finally {
                  SO = Sp = 0;
                }
              }
              if (Sq[0] & 5) {
                throw Sq[1];
              }
              return {
                value: Sq[0] ? Sq[1] : undefined,
                done: true,
              };
            };
          }
        };
      var SS = new Date();
      var SX = 0;
      SS.toString = function () {
        SX++;
        return "";
      };
      var Sz = {
        name: "date-to-string",
        isOpen: function () {
          return S8(this, undefined, undefined, function () {
            return S9(this, function (SA) {
              SX = 0;
              Object(S5.b)(SS);
              Object(S5.a)();
              return [2, SX === 2];
            });
          });
        },
        isEnable: function () {
          return S8(this, undefined, undefined, function () {
            return S9(this, function (SA) {
              return [
                2,
                Object(S6.b)({
                  includes: [S4.a],
                  excludes: [(S7.isIpad || S7.isIphone) && S4.a],
                }),
              ];
            });
          });
        },
      };
    },
    function (S1, S2, S3) {
      "use strict";

      S3.d(S2, "a", function () {
        return SX;
      });
      var S4 = S3(1);
      var S5 = S3(2);
      var S6 = S3(0);
      var S7 =
        (this && this.__awaiter) ||
        function (Sz, SA, Sx, SO) {
          return new (Sx = Sx || Promise)(function (SY, Sp) {
            function SE(Sa) {
              try {
                SR(SO.next(Sa));
              } catch (SV) {
                Sp(SV);
              }
            }
            function SG(Sa) {
              try {
                SR(SO.throw(Sa));
              } catch (SV) {
                Sp(SV);
              }
            }
            function SR(Sa) {
              var SV;
              if (Sa.done) {
                SY(Sa.value);
              } else {
                ((SV = Sa.value) instanceof Sx
                  ? SV
                  : new Sx(function (Sq) {
                      Sq(SV);
                    })
                ).then(SE, SG);
              }
            }
            SR((SO = SO.apply(Sz, SA || [])).next());
          });
        };
      var S8 =
        (this && this.__generator) ||
        function (Sz, SA) {
          var Sx;
          var SO;
          var SY;
          var Sp = {
            label: 0,
            sent: function () {
              if (SY[0] & 1) {
                throw SY[1];
              }
              return SY[1];
            },
            trys: [],
            ops: [],
          };
          var SE = {
            next: SG(0),
            throw: SG(1),
            return: SG(2),
          };
          if (typeof Symbol == "function") {
            SE[Symbol.iterator] = function () {
              return this;
            };
          }
          return SE;
          function SG(SR) {
            return function (Sa) {
              var SV = [SR, Sa];
              if (Sx) {
                throw new TypeError("Generator is already executing.");
              }
              while (Sp) {
                try {
                  Sx = 1;
                  if (
                    SO &&
                    (SY =
                      SV[0] & 2
                        ? SO.return
                        : SV[0]
                        ? SO.throw || ((SY = SO.return) && SY.call(SO), 0)
                        : SO.next) &&
                    !(SY = SY.call(SO, SV[1])).done
                  ) {
                    return SY;
                  }
                  SO = 0;
                  switch ((SV = SY ? [SV[0] & 2, SY.value] : SV)[0]) {
                    case 0:
                    case 1:
                      SY = SV;
                      break;
                    case 4:
                      Sp.label++;
                      return {
                        value: SV[1],
                        done: false,
                      };
                    case 5:
                      Sp.label++;
                      SO = SV[1];
                      SV = [0];
                      continue;
                    case 7:
                      SV = Sp.ops.pop();
                      Sp.trys.pop();
                      continue;
                    default:
                      if (
                        !(SY =
                          (SY = Sp.trys).length > 0 && SY[SY.length - 1]) &&
                        (SV[0] === 6 || SV[0] === 2)
                      ) {
                        Sp = 0;
                        continue;
                      }
                      if (
                        SV[0] === 3 &&
                        (!SY || (SV[1] > SY[0] && SV[1] < SY[3]))
                      ) {
                        Sp.label = SV[1];
                      } else if (SV[0] === 6 && Sp.label < SY[1]) {
                        Sp.label = SY[1];
                        SY = SV;
                      } else {
                        if (!SY || Sp.label >= SY[2]) {
                          if (SY[2]) {
                            Sp.ops.pop();
                          }
                          Sp.trys.pop();
                          continue;
                        }
                        Sp.label = SY[2];
                        Sp.ops.push(SV);
                      }
                  }
                  SV = SA.call(Sz, Sp);
                } catch (Sq) {
                  SV = [6, Sq];
                  SO = 0;
                } finally {
                  Sx = SY = 0;
                }
              }
              if (SV[0] & 5) {
                throw SV[1];
              }
              return {
                value: SV[0] ? SV[1] : undefined,
                done: true,
              };
            };
          }
        };
      var S9 = null;
      var SS = 0;
      var SX = {
        name: "performance",
        isOpen: function () {
          return S7(this, undefined, undefined, function () {
            var Sz;
            var SA;
            return S8(this, function (Sx) {
              if (S9 === null) {
                S9 = (function () {
                  var SY = (function () {
                    var SG = {};
                    for (var SR = 0; SR < 500; SR++) {
                      SG[`${SR}`] = `${SR}`;
                    }
                    return SG;
                  })();
                  var Sp = [];
                  for (var SE = 0; SE < 50; SE++) {
                    Sp.push(SY);
                  }
                  return Sp;
                })();
              }
              SO = Object(S6.c)();
              Object(S5.c)(S9);
              Sz = Object(S6.c)() - SO;
              SO = Object(S6.c)();
              Object(S5.b)(S9);
              SA = Object(S6.c)() - SO;
              SS = Math.max(SS, SA);
              Object(S5.a)();
              if (Sz == 0 || SS === 0) {
                return [2, false];
              } else {
                return [2, SS * 10 < Sz];
              }
              var SO;
            });
          });
        },
        isEnable: function () {
          return S7(this, undefined, undefined, function () {
            return S8(this, function (Sz) {
              return [
                2,
                Object(S6.b)({
                  includes: [S4.a],
                  excludes: [],
                }),
              ];
            });
          });
        },
      };
    },
    function (S1, S2, S3) {
      "use strict";

      S3.d(S2, "a", function () {
        return S6;
      });
      var S4 =
        (this && this.__awaiter) ||
        function (S7, S8, S9, SS) {
          return new (S9 = S9 || Promise)(function (SX, Sz) {
            function SA(SY) {
              try {
                SO(SS.next(SY));
              } catch (Sp) {
                Sz(Sp);
              }
            }
            function Sx(SY) {
              try {
                SO(SS.throw(SY));
              } catch (Sp) {
                Sz(Sp);
              }
            }
            function SO(SY) {
              var Sp;
              if (SY.done) {
                SX(SY.value);
              } else {
                ((Sp = SY.value) instanceof S9
                  ? Sp
                  : new S9(function (SE) {
                      SE(Sp);
                    })
                ).then(SA, Sx);
              }
            }
            SO((SS = SS.apply(S7, S8 || [])).next());
          });
        };
      var S5 =
        (this && this.__generator) ||
        function (S7, S8) {
          var S9;
          var SS;
          var SX;
          var Sz = {
            label: 0,
            sent: function () {
              if (SX[0] & 1) {
                throw SX[1];
              }
              return SX[1];
            },
            trys: [],
            ops: [],
          };
          var SA = {
            next: Sx(0),
            throw: Sx(1),
            return: Sx(2),
          };
          if (typeof Symbol == "function") {
            SA[Symbol.iterator] = function () {
              return this;
            };
          }
          return SA;
          function Sx(SO) {
            return function (SY) {
              var Sp = [SO, SY];
              if (S9) {
                throw new TypeError("Generator is already executing.");
              }
              while (Sz) {
                try {
                  S9 = 1;
                  if (
                    SS &&
                    (SX =
                      Sp[0] & 2
                        ? SS.return
                        : Sp[0]
                        ? SS.throw || ((SX = SS.return) && SX.call(SS), 0)
                        : SS.next) &&
                    !(SX = SX.call(SS, Sp[1])).done
                  ) {
                    return SX;
                  }
                  SS = 0;
                  switch ((Sp = SX ? [Sp[0] & 2, SX.value] : Sp)[0]) {
                    case 0:
                    case 1:
                      SX = Sp;
                      break;
                    case 4:
                      Sz.label++;
                      return {
                        value: Sp[1],
                        done: false,
                      };
                    case 5:
                      Sz.label++;
                      SS = Sp[1];
                      Sp = [0];
                      continue;
                    case 7:
                      Sp = Sz.ops.pop();
                      Sz.trys.pop();
                      continue;
                    default:
                      if (
                        !(SX =
                          (SX = Sz.trys).length > 0 && SX[SX.length - 1]) &&
                        (Sp[0] === 6 || Sp[0] === 2)
                      ) {
                        Sz = 0;
                        continue;
                      }
                      if (
                        Sp[0] === 3 &&
                        (!SX || (Sp[1] > SX[0] && Sp[1] < SX[3]))
                      ) {
                        Sz.label = Sp[1];
                      } else if (Sp[0] === 6 && Sz.label < SX[1]) {
                        Sz.label = SX[1];
                        SX = Sp;
                      } else {
                        if (!SX || Sz.label >= SX[2]) {
                          if (SX[2]) {
                            Sz.ops.pop();
                          }
                          Sz.trys.pop();
                          continue;
                        }
                        Sz.label = SX[2];
                        Sz.ops.push(Sp);
                      }
                  }
                  Sp = S8.call(S7, Sz);
                } catch (SE) {
                  Sp = [6, SE];
                  SS = 0;
                } finally {
                  S9 = SX = 0;
                }
              }
              if (Sp[0] & 5) {
                throw Sp[1];
              }
              return {
                value: Sp[0] ? Sp[1] : undefined,
                done: true,
              };
            };
          }
        };
      var S6 = {
        name: "eruda",
        isOpen: function () {
          var S7;
          return S4(this, undefined, undefined, function () {
            return S5(this, function (S8) {
              if (typeof eruda != "undefined") {
                return [
                  2,
                  ((S7 = eruda?._devTools) == null ? undefined : S7._isShow) ===
                    true,
                ];
              } else {
                return [2, false];
              }
            });
          });
        },
        isEnable: function () {
          return S4(this, undefined, undefined, function () {
            return S5(this, function (S7) {
              return [2, true];
            });
          });
        },
      };
    },
    function (S1, S2, S3) {
      "use strict";

      S3.d(S2, "a", function () {
        return S4;
      });
      var S2 = S3(3);
      var S4 = /mobile/i.test(S2.b);
    },
  ];
  S0 = {};
  N.m = y;
  N.c = S0;
  N.d = function (S1, S2, S3) {
    if (!N.o(S1, S2)) {
      Object.defineProperty(S1, S2, {
        configurable: false,
        enumerable: true,
        get: S3,
      });
    }
  };
  N.n = function (S1) {
    var S2 =
      S1 && S1.__esModule
        ? function () {
            return S1.default;
          }
        : function () {
            return S1;
          };
    N.d(S2, "a", S2);
    return S2;
  };
  N.o = function (S1, S2) {
    return Object.prototype.hasOwnProperty.call(S1, S2);
  };
  N.p = "";
  return N((N.s = 4));
  function N(S1) {
    var S2;
    return (
      S0[S1] ||
      ((S2 = S0[S1] =
        {
          i: S1,
          l: false,
          exports: {},
        }),
      y[S1].call(S2.exports, S2, S2.exports, N),
      (S2.l = true),
      S2)
    ).exports;
  }
  var y;
  var S0;
});
(function (N) {
  if (
    (typeof exports != "object" || typeof module == "undefined") &&
    typeof define == "function" &&
    define.amd
  ) {
    define(N);
  } else {
    N();
  }
})(function () {
  "use strict";

  function N(S9) {
    var SS = this.constructor;
    return this.then(
      function (SX) {
        return SS.resolve(S9()).then(function () {
          return SX;
        });
      },
      function (SX) {
        return SS.resolve(S9()).then(function () {
          return SS.reject(SX);
        });
      }
    );
  }
  var y = setTimeout;
  function S0() {}
  function S1(S9) {
    if (!(this instanceof S1)) {
      throw new TypeError("Promises must be constructed via new");
    }
    if (typeof S9 != "function") {
      throw new TypeError("not a function");
    }
    this._state = 0;
    this._handled = false;
    this._value = undefined;
    this._deferreds = [];
    S7(S9, this);
  }
  function S2(S9, SS) {
    while (S9._state === 3) {
      S9 = S9._value;
    }
    if (S9._state === 0) {
      S9._deferreds.push(SS);
    } else {
      S9._handled = true;
      S1._immediateFn(function () {
        var SX;
        var Sz = S9._state === 1 ? SS.onFulfilled : SS.onRejected;
        if (Sz === null) {
          (S9._state === 1 ? S3 : S4)(SS.promise, S9._value);
        } else {
          try {
            SX = Sz(S9._value);
          } catch (SA) {
            S4(SS.promise, SA);
            return;
          }
          S3(SS.promise, SX);
        }
      });
    }
  }
  function S3(S9, SS) {
    try {
      if (SS === S9) {
        throw new TypeError("A promise cannot be resolved with itself.");
      }
      if (SS && (typeof SS == "object" || typeof SS == "function")) {
        var SX = SS.then;
        if (SS instanceof S1) {
          S9._state = 3;
          S9._value = SS;
          S5(S9);
          return;
        }
        if (typeof SX == "function") {
          S7(
            ((Sz = SX),
            (SA = SS),
            function () {
              Sz.apply(SA, arguments);
            }),
            S9
          );
          return;
        }
      }
      S9._state = 1;
      S9._value = SS;
      S5(S9);
    } catch (Sx) {
      S4(S9, Sx);
    }
    var Sz;
    var SA;
  }
  function S4(S9, SS) {
    S9._state = 2;
    S9._value = SS;
    S5(S9);
  }
  function S5(S9) {
    if (S9._state === 2 && S9._deferreds.length === 0) {
      S1._immediateFn(function () {
        if (!S9._handled) {
          S1._unhandledRejectionFn(S9._value);
        }
      });
    }
    for (var SS = 0, SX = S9._deferreds.length; SS < SX; SS++) {
      S2(S9, S9._deferreds[SS]);
    }
    S9._deferreds = null;
  }
  function S6(S9, SS, SX) {
    this.onFulfilled = typeof S9 == "function" ? S9 : null;
    this.onRejected = typeof SS == "function" ? SS : null;
    this.promise = SX;
  }
  function S7(S9, SS) {
    var SX = false;
    try {
      S9(
        function (Sz) {
          if (!SX) {
            SX = true;
            S3(SS, Sz);
          }
        },
        function (Sz) {
          if (!SX) {
            SX = true;
            S4(SS, Sz);
          }
        }
      );
    } catch (Sz) {
      if (!SX) {
        SX = true;
        S4(SS, Sz);
      }
    }
  }
  S1.prototype.catch = function (S9) {
    return this.then(null, S9);
  };
  S1.prototype.then = function (S9, SS) {
    var SX = new this.constructor(S0);
    S2(this, new S6(S9, SS, SX));
    return SX;
  };
  S1.prototype.finally = N;
  S1.all = function (S9) {
    return new S1(function (SS, SX) {
      if (!S9 || S9.length === undefined) {
        throw new TypeError("Promise.all accepts an array");
      }
      var Sz = Array.prototype.slice.call(S9);
      if (Sz.length === 0) {
        return SS([]);
      }
      var SA = Sz.length;
      for (var Sx = 0; Sx < Sz.length; Sx++) {
        (function SO(SY, Sp) {
          try {
            if (Sp && (typeof Sp == "object" || typeof Sp == "function")) {
              var SE = Sp.then;
              if (typeof SE == "function") {
                SE.call(
                  Sp,
                  function (SG) {
                    SO(SY, SG);
                  },
                  SX
                );
                return;
              }
            }
            Sz[SY] = Sp;
            if (--SA == 0) {
              SS(Sz);
            }
          } catch (SG) {
            SX(SG);
          }
        })(Sx, Sz[Sx]);
      }
    });
  };
  S1.resolve = function (S9) {
    if (S9 && typeof S9 == "object" && S9.constructor === S1) {
      return S9;
    } else {
      return new S1(function (SS) {
        SS(S9);
      });
    }
  };
  S1.reject = function (S9) {
    return new S1(function (SS, SX) {
      SX(S9);
    });
  };
  S1.race = function (S9) {
    return new S1(function (SS, SX) {
      for (var Sz = 0, SA = S9.length; Sz < SA; Sz++) {
        S9[Sz].then(SS, SX);
      }
    });
  };
  S1._immediateFn =
    typeof setImmediate == "function"
      ? function (S9) {
          setImmediate(S9);
        }
      : function (S9) {
          y(S9, 0);
        };
  S1._unhandledRejectionFn = function (S9) {
    if (typeof console != "undefined" && console) {
      console.warn("Possible Unhandled Promise Rejection:", S9);
    }
  };
  var S8 = (function () {
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
  })();
  if ("Promise" in S8) {
    S8.Promise.prototype.finally ||= N;
  } else {
    S8.Promise = S1;
  }
});
const x = new MobileDetect(window.navigator.userAgent);
const O = new URLSearchParams(window.location.search);
if (
  !x.match("playstation|xbox|smart-tv|smarttv") &&
  x.mobile() === null &&
  !O.get("_debug")
) {
}
(function (N, n) {
  if (typeof exports == "object") {
    module.exports = exports = n();
  } else if (typeof define == "function" && define.amd) {
    define([], n);
  } else {
    N.CryptoJS = n();
  }
})(this, function () {
  var S0;
  var S1;
  var S2;
  var S3;
  var S4;
  var S5;
  var S6;
  var S7;
  var S8;
  var S9;
  var SS;
  var SX;
  var Sz;
  var SA;
  var Sx;
  var SO;
  var SY;
  var Sp;
  var SE;
  var SG;
  var SR;
  var Sa;
  var SV;
  var Sq;
  var SI;
  var SH;
  var SU;
  var Sd;
  var SW;
  var Sg;
  var Sh;
  var SD;
  var Su;
  var Sr;
  var SM;
  var SQ;
  var Ss;
  var SL;
  var So;
  var Sm;
  var ST;
  var Sk;
  var SF;
  var Sl;
  var Sw = (function (zx) {
    var zO;
    if (typeof window != "undefined" && window.crypto) {
      zO = window.crypto;
    }
    if (typeof self != "undefined" && self.crypto) {
      zO = self.crypto;
    }
    if (
      !(zO =
        !(zO =
          !(zO =
            typeof globalThis != "undefined" && globalThis.crypto
              ? globalThis.crypto
              : zO) &&
          typeof window != "undefined" &&
          window.msCrypto
            ? window.msCrypto
            : zO) &&
        typeof global != "undefined" &&
        global.crypto
          ? global.crypto
          : zO) &&
      typeof require == "function"
    ) {
      try {
        zO = require("crypto");
      } catch (zW) {}
    }
    var zY =
      Object.create ||
      function (zg) {
        zp.prototype = zg;
        zg = new zp();
        zp.prototype = null;
        return zg;
      };
    function zp() {}
    var zE = {};
    var zG = (zE.lib = {});
    var zR = (zG.Base = {
      extend: function (zg) {
        var zh = zY(this);
        if (zg) {
          zh.mixIn(zg);
        }
        if (!zh.hasOwnProperty("init") || this.init === zh.init) {
          zh.init = function () {
            zh.$super.init.apply(this, arguments);
          };
        }
        (zh.init.prototype = zh).$super = this;
        return zh;
      },
      create: function () {
        var zg = this.extend();
        zg.init.apply(zg, arguments);
        return zg;
      },
      init: function () {},
      mixIn: function (zg) {
        for (var zh in zg) {
          if (zg.hasOwnProperty(zh)) {
            this[zh] = zg[zh];
          }
        }
        if (zg.hasOwnProperty("toString")) {
          this.toString = zg.toString;
        }
      },
      clone: function () {
        return this.init.prototype.extend(this);
      },
    });
    var za = (zG.WordArray = zR.extend({
      init: function (zg, zh) {
        zg = this.words = zg || [];
        this.sigBytes = zh ?? zg.length * 4;
      },
      toString: function (zg) {
        return (zg || zq).stringify(this);
      },
      concat: function (zg) {
        var zh = this.words;
        var zD = zg.words;
        var zu = this.sigBytes;
        var zr = zg.sigBytes;
        this.clamp();
        if (zu % 4) {
          for (var zM = 0; zM < zr; zM++) {
            var zQ = (zD[zM >>> 2] >>> (24 - (zM % 4) * 8)) & 255;
            zh[(zu + zM) >>> 2] |= zQ << (24 - ((zu + zM) % 4) * 8);
          }
        } else {
          for (var zs = 0; zs < zr; zs += 4) {
            zh[(zu + zs) >>> 2] = zD[zs >>> 2];
          }
        }
        this.sigBytes += zr;
        return this;
      },
      clamp: function () {
        var zg = this.words;
        var zh = this.sigBytes;
        zg[zh >>> 2] &= 4294967295 << (32 - (zh % 4) * 8);
        zg.length = zx.ceil(zh / 4);
      },
      clone: function () {
        var zg = zR.clone.call(this);
        zg.words = this.words.slice(0);
        return zg;
      },
      random: function (zg) {
        var zh = [];
        for (var zD = 0; zD < zg; zD += 4) {
          zh.push(
            (function () {
              if (zO) {
                if (typeof zO.getRandomValues == "function") {
                  try {
                    return zO.getRandomValues(new Uint32Array(1))[0];
                  } catch (zu) {}
                }
                if (typeof zO.randomBytes == "function") {
                  try {
                    return zO.randomBytes(4).readInt32LE();
                  } catch (zr) {}
                }
              }
              throw new Error(
                "Native crypto module could not be used to get secure random number."
              );
            })()
          );
        }
        return new za.init(zh, zg);
      },
    }));
    var zV = (zE.enc = {});
    var zq = (zV.Hex = {
      stringify: function (zg) {
        var zh = zg.words;
        for (var zD = zg.sigBytes, zu = [], zr = 0; zr < zD; zr++) {
          var zM = (zh[zr >>> 2] >>> (24 - (zr % 4) * 8)) & 255;
          zu.push((zM >>> 4).toString(16));
          zu.push((zM & 15).toString(16));
        }
        return zu.join("");
      },
      parse: function (zg) {
        for (var zh = zg.length, zD = [], zu = 0; zu < zh; zu += 2) {
          zD[zu >>> 3] |= parseInt(zg.substr(zu, 2), 16) << (24 - (zu % 8) * 4);
        }
        return new za.init(zD, zh / 2);
      },
    });
    var zI = (zV.Latin1 = {
      stringify: function (zg) {
        var zh = zg.words;
        for (var zD = zg.sigBytes, zu = [], zr = 0; zr < zD; zr++) {
          var zM = (zh[zr >>> 2] >>> (24 - (zr % 4) * 8)) & 255;
          zu.push(String.fromCharCode(zM));
        }
        return zu.join("");
      },
      parse: function (zg) {
        for (var zh = zg.length, zD = [], zu = 0; zu < zh; zu++) {
          zD[zu >>> 2] |= (zg.charCodeAt(zu) & 255) << (24 - (zu % 4) * 8);
        }
        return new za.init(zD, zh);
      },
    });
    var zH = (zV.Utf8 = {
      stringify: function (zg) {
        try {
          return decodeURIComponent(escape(zI.stringify(zg)));
        } catch (zh) {
          throw new Error("Malformed UTF-8 data");
        }
      },
      parse: function (zg) {
        return zI.parse(unescape(encodeURIComponent(zg)));
      },
    });
    var zU = (zG.BufferedBlockAlgorithm = zR.extend({
      reset: function () {
        this._data = new za.init();
        this._nDataBytes = 0;
      },
      _append: function (zg) {
        if (typeof zg == "string") {
          zg = zH.parse(zg);
        }
        this._data.concat(zg);
        this._nDataBytes += zg.sigBytes;
      },
      _process: function (zg) {
        var zh;
        var zD = this._data;
        var zu = zD.words;
        var zr = zD.sigBytes;
        var zM = this.blockSize;
        var zQ = zr / (zM * 4);
        var zs =
          (zQ = zg ? zx.ceil(zQ) : zx.max((zQ | 0) - this._minBufferSize, 0)) *
          zM;
        var zg = zx.min(zs * 4, zr);
        if (zs) {
          for (var zL = 0; zL < zs; zL += zM) {
            this._doProcessBlock(zu, zL);
          }
          zh = zu.splice(0, zs);
          zD.sigBytes -= zg;
        }
        return new za.init(zh, zg);
      },
      clone: function () {
        var zg = zR.clone.call(this);
        zg._data = this._data.clone();
        return zg;
      },
      _minBufferSize: 0,
    }));
    zG.Hasher = zU.extend({
      cfg: zR.extend(),
      init: function (zg) {
        this.cfg = this.cfg.extend(zg);
        this.reset();
      },
      reset: function () {
        zU.reset.call(this);
        this._doReset();
      },
      update: function (zg) {
        this._append(zg);
        this._process();
        return this;
      },
      finalize: function (zg) {
        if (zg) {
          this._append(zg);
        }
        return this._doFinalize();
      },
      blockSize: 16,
      _createHelper: function (zg) {
        return function (zh, zD) {
          return new zg.init(zD).finalize(zh);
        };
      },
      _createHmacHelper: function (zg) {
        return function (zh, zD) {
          return new zd.HMAC.init(zg, zD).finalize(zh);
        };
      },
    });
    var zd = (zE.algo = {});
    return zE;
  })(Math);
  Sj = (SJ = Sw).lib;
  S0 = Sj.Base;
  S1 = Sj.WordArray;
  (Sj = SJ.x64 = {}).Word = S0.extend({
    init: function (zx, zO) {
      this.high = zx;
      this.low = zO;
    },
  });
  Sj.WordArray = S0.extend({
    init: function (zx, zO) {
      zx = this.words = zx || [];
      this.sigBytes = zO ?? zx.length * 8;
    },
    toX32: function () {
      var zx = this.words;
      for (var zO = zx.length, zY = [], zp = 0; zp < zO; zp++) {
        var zE = zx[zp];
        zY.push(zE.high);
        zY.push(zE.low);
      }
      return S1.create(zY, this.sigBytes);
    },
    clone: function () {
      var zx = S0.clone.call(this);
      var zO = (zx.words = this.words.slice(0));
      for (var zY = zO.length, zp = 0; zp < zY; zp++) {
        zO[zp] = zO[zp].clone();
      }
      return zx;
    },
  });
  if (typeof ArrayBuffer == "function") {
    SJ = Sw.lib.WordArray;
    S2 = SJ.init;
    (SJ.init = function (zx) {
      if (
        (zx =
          (zx = zx instanceof ArrayBuffer ? new Uint8Array(zx) : zx) instanceof
            Int8Array ||
          (typeof Uint8ClampedArray != "undefined" &&
            zx instanceof Uint8ClampedArray) ||
          zx instanceof Int16Array ||
          zx instanceof Uint16Array ||
          zx instanceof Int32Array ||
          zx instanceof Uint32Array ||
          zx instanceof Float32Array ||
          zx instanceof Float64Array
            ? new Uint8Array(zx.buffer, zx.byteOffset, zx.byteLength)
            : zx) instanceof Uint8Array
      ) {
        for (var zO = zx.byteLength, zY = [], zp = 0; zp < zO; zp++) {
          zY[zp >>> 2] |= zx[zp] << (24 - (zp % 4) * 8);
        }
        S2.call(this, zY, zO);
      } else {
        S2.apply(this, arguments);
      }
    }).prototype = SJ;
  }
  var Sj = Sw;
  var Si = Sj.lib.WordArray;
  function SZ(zx) {
    return ((zx << 8) & 4278255360) | ((zx >>> 8) & 16711935);
  }
  (Sj = Sj.enc).Utf16 = Sj.Utf16BE = {
    stringify: function (zx) {
      var zO = zx.words;
      for (var zY = zx.sigBytes, zp = [], zE = 0; zE < zY; zE += 2) {
        var zG = (zO[zE >>> 2] >>> (16 - (zE % 4) * 8)) & 65535;
        zp.push(String.fromCharCode(zG));
      }
      return zp.join("");
    },
    parse: function (zx) {
      for (var zO = zx.length, zY = [], zp = 0; zp < zO; zp++) {
        zY[zp >>> 1] |= zx.charCodeAt(zp) << (16 - (zp % 2) * 16);
      }
      return Si.create(zY, zO * 2);
    },
  };
  Sj.Utf16LE = {
    stringify: function (zx) {
      var zO = zx.words;
      for (var zY = zx.sigBytes, zp = [], zE = 0; zE < zY; zE += 2) {
        var zG = SZ((zO[zE >>> 2] >>> (16 - (zE % 4) * 8)) & 65535);
        zp.push(String.fromCharCode(zG));
      }
      return zp.join("");
    },
    parse: function (zx) {
      for (var zO = zx.length, zY = [], zp = 0; zp < zO; zp++) {
        zY[zp >>> 1] |= SZ(zx.charCodeAt(zp) << (16 - (zp % 2) * 16));
      }
      return Si.create(zY, zO * 2);
    },
  };
  S3 = (SJ = Sw).lib.WordArray;
  SJ.enc.Base64 = {
    stringify: function (zx) {
      var zO = zx.words;
      for (
        var zY = zx.sigBytes, zp = this._map, zE = (zx.clamp(), []), zG = 0;
        zG < zY;
        zG += 3
      ) {
        var zR =
          (((zO[zG >>> 2] >>> (24 - (zG % 4) * 8)) & 255) << 16) |
          (((zO[(zG + 1) >>> 2] >>> (24 - ((zG + 1) % 4) * 8)) & 255) << 8) |
          ((zO[(zG + 2) >>> 2] >>> (24 - ((zG + 2) % 4) * 8)) & 255);
        for (var za = 0; za < 4 && zG + za * 0.75 < zY; za++) {
          zE.push(zp.charAt((zR >>> ((3 - za) * 6)) & 63));
        }
      }
      var zV = zp.charAt(64);
      if (zV) {
        while (zE.length % 4) {
          zE.push(zV);
        }
      }
      return zE.join("");
    },
    parse: function (zx) {
      var zO = zx.length;
      var zY = this._map;
      if (!(zp = this._reverseMap)) {
        var zp = (this._reverseMap = []);
        for (var zE = 0; zE < zY.length; zE++) {
          zp[zY.charCodeAt(zE)] = zE;
        }
      }
      var zG;
      var zR;
      var za = zY.charAt(64);
      if (za && (za = zx.indexOf(za)) !== -1) {
        zO = za;
      }
      var zV = zx;
      for (var zq = zO, zI = zp, zH = [], zU = 0, zd = 0; zd < zq; zd++) {
        if (zd % 4) {
          zG = zI[zV.charCodeAt(zd - 1)] << ((zd % 4) * 2);
          zR = zI[zV.charCodeAt(zd)] >>> (6 - (zd % 4) * 2);
          zH[zU >>> 2] |= (zG | zR) << (24 - (zU % 4) * 8);
          zU++;
        }
      }
      return S3.create(zH, zU);
    },
    _map: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
  };
  S4 = (Sj = Sw).lib.WordArray;
  Sj.enc.Base64url = {
    stringify: function (zx, zO = true) {
      var zY = zx.words;
      for (
        var zp = zx.sigBytes,
          zE = zO ? this._safe_map : this._map,
          zG = (zx.clamp(), []),
          zR = 0;
        zR < zp;
        zR += 3
      ) {
        var za =
          (((zY[zR >>> 2] >>> (24 - (zR % 4) * 8)) & 255) << 16) |
          (((zY[(zR + 1) >>> 2] >>> (24 - ((zR + 1) % 4) * 8)) & 255) << 8) |
          ((zY[(zR + 2) >>> 2] >>> (24 - ((zR + 2) % 4) * 8)) & 255);
        for (var zV = 0; zV < 4 && zR + zV * 0.75 < zp; zV++) {
          zG.push(zE.charAt((za >>> ((3 - zV) * 6)) & 63));
        }
      }
      var zq = zE.charAt(64);
      if (zq) {
        while (zG.length % 4) {
          zG.push(zq);
        }
      }
      return zG.join("");
    },
    parse: function (zx, zO = true) {
      var zY = zx.length;
      var zp = zO ? this._safe_map : this._map;
      if (!(zE = this._reverseMap)) {
        var zE = (this._reverseMap = []);
        for (var zG = 0; zG < zp.length; zG++) {
          zE[zp.charCodeAt(zG)] = zG;
        }
      }
      var zR;
      var za;
      var zO = zp.charAt(64);
      if (zO && (zO = zx.indexOf(zO)) !== -1) {
        zY = zO;
      }
      var zV = zx;
      for (var zq = zY, zI = zE, zH = [], zU = 0, zd = 0; zd < zq; zd++) {
        if (zd % 4) {
          zR = zI[zV.charCodeAt(zd - 1)] << ((zd % 4) * 2);
          za = zI[zV.charCodeAt(zd)] >>> (6 - (zd % 4) * 2);
          zH[zU >>> 2] |= (zR | za) << (24 - (zU % 4) * 8);
          zU++;
        }
      }
      return S4.create(zH, zU);
    },
    _map: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
    _safe_map:
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_",
  };
  var Sb = Math;
  var SJ = Sw;
  var SB = (Sj = SJ.lib).WordArray;
  var Sv = Sj.Hasher;
  var Sj = SJ.algo;
  var SC = [];
  for (var Sf = 0; Sf < 64; Sf++) {
    SC[Sf] = (Sb.abs(Sb.sin(Sf + 1)) * 4294967296) | 0;
  }
  function Sc(zx, zO, zY, zp, zE, zG, zR) {
    zx = zx + ((zO & zY) | (~zO & zp)) + zE + zR;
    return ((zx << zG) | (zx >>> (32 - zG))) + zO;
  }
  function SK(zx, zO, zY, zp, zE, zG, zR) {
    zx = zx + ((zO & zp) | (zY & ~zp)) + zE + zR;
    return ((zx << zG) | (zx >>> (32 - zG))) + zO;
  }
  function SP(zx, zO, zY, zp, zE, zG, zR) {
    zx = zx + (zO ^ zY ^ zp) + zE + zR;
    return ((zx << zG) | (zx >>> (32 - zG))) + zO;
  }
  function SN(zx, zO, zY, zp, zE, zG, zR) {
    zx = zx + (zY ^ (zO | ~zp)) + zE + zR;
    return ((zx << zG) | (zx >>> (32 - zG))) + zO;
  }
  Sj = Sj.MD5 = Sv.extend({
    _doReset: function () {
      this._hash = new SB.init([1732584193, 4023233417, 2562383102, 271733878]);
    },
    _doProcessBlock: function (zx, zO) {
      for (var zY = 0; zY < 16; zY++) {
        var zp = zO + zY;
        var zE = zx[zp];
        zx[zp] =
          (((zE << 8) | (zE >>> 24)) & 16711935) |
          (((zE << 24) | (zE >>> 8)) & 4278255360);
      }
      var zG = this._hash.words;
      var zR = zx[zO + 0];
      var za = zx[zO + 1];
      var zV = zx[zO + 2];
      var zq = zx[zO + 3];
      var zI = zx[zO + 4];
      var zH = zx[zO + 5];
      var zU = zx[zO + 6];
      var zd = zx[zO + 7];
      var zW = zx[zO + 8];
      var zg = zx[zO + 9];
      var zh = zx[zO + 10];
      var zD = zx[zO + 11];
      var zu = zx[zO + 12];
      var zr = zx[zO + 13];
      var zM = zx[zO + 14];
      var zQ = zx[zO + 15];
      var zs = Sc(
        zG[0],
        (zm = zG[1]),
        (zo = zG[2]),
        (zL = zG[3]),
        zR,
        7,
        SC[0]
      );
      var zL = Sc(zL, zs, zm, zo, za, 12, SC[1]);
      var zo = Sc(zo, zL, zs, zm, zV, 17, SC[2]);
      var zm = Sc(zm, zo, zL, zs, zq, 22, SC[3]);
      zs = Sc(zs, zm, zo, zL, zI, 7, SC[4]);
      zL = Sc(zL, zs, zm, zo, zH, 12, SC[5]);
      zo = Sc(zo, zL, zs, zm, zU, 17, SC[6]);
      zm = Sc(zm, zo, zL, zs, zd, 22, SC[7]);
      zs = Sc(zs, zm, zo, zL, zW, 7, SC[8]);
      zL = Sc(zL, zs, zm, zo, zg, 12, SC[9]);
      zo = Sc(zo, zL, zs, zm, zh, 17, SC[10]);
      zm = Sc(zm, zo, zL, zs, zD, 22, SC[11]);
      zs = Sc(zs, zm, zo, zL, zu, 7, SC[12]);
      zL = Sc(zL, zs, zm, zo, zr, 12, SC[13]);
      zo = Sc(zo, zL, zs, zm, zM, 17, SC[14]);
      zs = SK(
        zs,
        (zm = Sc(zm, zo, zL, zs, zQ, 22, SC[15])),
        zo,
        zL,
        za,
        5,
        SC[16]
      );
      zL = SK(zL, zs, zm, zo, zU, 9, SC[17]);
      zo = SK(zo, zL, zs, zm, zD, 14, SC[18]);
      zm = SK(zm, zo, zL, zs, zR, 20, SC[19]);
      zs = SK(zs, zm, zo, zL, zH, 5, SC[20]);
      zL = SK(zL, zs, zm, zo, zh, 9, SC[21]);
      zo = SK(zo, zL, zs, zm, zQ, 14, SC[22]);
      zm = SK(zm, zo, zL, zs, zI, 20, SC[23]);
      zs = SK(zs, zm, zo, zL, zg, 5, SC[24]);
      zL = SK(zL, zs, zm, zo, zM, 9, SC[25]);
      zo = SK(zo, zL, zs, zm, zq, 14, SC[26]);
      zm = SK(zm, zo, zL, zs, zW, 20, SC[27]);
      zs = SK(zs, zm, zo, zL, zr, 5, SC[28]);
      zL = SK(zL, zs, zm, zo, zV, 9, SC[29]);
      zo = SK(zo, zL, zs, zm, zd, 14, SC[30]);
      zs = SP(
        zs,
        (zm = SK(zm, zo, zL, zs, zu, 20, SC[31])),
        zo,
        zL,
        zH,
        4,
        SC[32]
      );
      zL = SP(zL, zs, zm, zo, zW, 11, SC[33]);
      zo = SP(zo, zL, zs, zm, zD, 16, SC[34]);
      zm = SP(zm, zo, zL, zs, zM, 23, SC[35]);
      zs = SP(zs, zm, zo, zL, za, 4, SC[36]);
      zL = SP(zL, zs, zm, zo, zI, 11, SC[37]);
      zo = SP(zo, zL, zs, zm, zd, 16, SC[38]);
      zm = SP(zm, zo, zL, zs, zh, 23, SC[39]);
      zs = SP(zs, zm, zo, zL, zr, 4, SC[40]);
      zL = SP(zL, zs, zm, zo, zR, 11, SC[41]);
      zo = SP(zo, zL, zs, zm, zq, 16, SC[42]);
      zm = SP(zm, zo, zL, zs, zU, 23, SC[43]);
      zs = SP(zs, zm, zo, zL, zg, 4, SC[44]);
      zL = SP(zL, zs, zm, zo, zu, 11, SC[45]);
      zo = SP(zo, zL, zs, zm, zQ, 16, SC[46]);
      zs = SN(
        zs,
        (zm = SP(zm, zo, zL, zs, zV, 23, SC[47])),
        zo,
        zL,
        zR,
        6,
        SC[48]
      );
      zL = SN(zL, zs, zm, zo, zd, 10, SC[49]);
      zo = SN(zo, zL, zs, zm, zM, 15, SC[50]);
      zm = SN(zm, zo, zL, zs, zH, 21, SC[51]);
      zs = SN(zs, zm, zo, zL, zu, 6, SC[52]);
      zL = SN(zL, zs, zm, zo, zq, 10, SC[53]);
      zo = SN(zo, zL, zs, zm, zh, 15, SC[54]);
      zm = SN(zm, zo, zL, zs, za, 21, SC[55]);
      zs = SN(zs, zm, zo, zL, zW, 6, SC[56]);
      zL = SN(zL, zs, zm, zo, zQ, 10, SC[57]);
      zo = SN(zo, zL, zs, zm, zU, 15, SC[58]);
      zm = SN(zm, zo, zL, zs, zr, 21, SC[59]);
      zs = SN(zs, zm, zo, zL, zI, 6, SC[60]);
      zL = SN(zL, zs, zm, zo, zD, 10, SC[61]);
      zo = SN(zo, zL, zs, zm, zV, 15, SC[62]);
      zm = SN(zm, zo, zL, zs, zg, 21, SC[63]);
      zG[0] = (zG[0] + zs) | 0;
      zG[1] = (zG[1] + zm) | 0;
      zG[2] = (zG[2] + zo) | 0;
      zG[3] = (zG[3] + zL) | 0;
    },
    _doFinalize: function () {
      var zx = this._data;
      var zO = zx.words;
      var zY = this._nDataBytes * 8;
      var zp = zx.sigBytes * 8;
      zO[zp >>> 5] |= 128 << (24 - (zp % 32));
      var zE = Sb.floor(zY / 4294967296);
      zO[15 + (((64 + zp) >>> 9) << 4)] =
        (((zE << 8) | (zE >>> 24)) & 16711935) |
        (((zE << 24) | (zE >>> 8)) & 4278255360);
      zO[14 + (((64 + zp) >>> 9) << 4)] =
        (((zY << 8) | (zY >>> 24)) & 16711935) |
        (((zY << 24) | (zY >>> 8)) & 4278255360);
      zx.sigBytes = (zO.length + 1) * 4;
      this._process();
      var zE = this._hash;
      var zG = zE.words;
      for (var zR = 0; zR < 4; zR++) {
        var za = zG[zR];
        zG[zR] =
          (((za << 8) | (za >>> 24)) & 16711935) |
          (((za << 24) | (za >>> 8)) & 4278255360);
      }
      return zE;
    },
    clone: function () {
      var zx = Sv.clone.call(this);
      zx._hash = this._hash.clone();
      return zx;
    },
  });
  SJ.MD5 = Sv._createHelper(Sj);
  SJ.HmacMD5 = Sv._createHmacHelper(Sj);
  Sj = (SJ = Sw).lib;
  S5 = Sj.WordArray;
  S6 = Sj.Hasher;
  Sj = SJ.algo;
  S7 = [];
  Sj = Sj.SHA1 = S6.extend({
    _doReset: function () {
      this._hash = new S5.init([
        1732584193, 4023233417, 2562383102, 271733878, 3285377520,
      ]);
    },
    _doProcessBlock: function (zx, zO) {
      var zY = this._hash.words;
      var zp = zY[0];
      var zE = zY[1];
      var zG = zY[2];
      var zR = zY[3];
      var za = zY[4];
      for (var zV = 0; zV < 80; zV++) {
        S7[zV] =
          zV < 16
            ? zx[zO + zV] | 0
            : ((zq = S7[zV - 3] ^ S7[zV - 8] ^ S7[zV - 14] ^ S7[zV - 16]) <<
                1) |
              (zq >>> 31);
        var zq = ((zp << 5) | (zp >>> 27)) + za + S7[zV];
        zq +=
          zV < 20
            ? 1518500249 + ((zE & zG) | (~zE & zR))
            : zV < 40
            ? 1859775393 + (zE ^ zG ^ zR)
            : zV < 60
            ? ((zE & zG) | (zE & zR) | (zG & zR)) - 1894007588
            : (zE ^ zG ^ zR) - 899497514;
        za = zR;
        zR = zG;
        zG = (zE << 30) | (zE >>> 2);
        zE = zp;
        zp = zq;
      }
      zY[0] = (zY[0] + zp) | 0;
      zY[1] = (zY[1] + zE) | 0;
      zY[2] = (zY[2] + zG) | 0;
      zY[3] = (zY[3] + zR) | 0;
      zY[4] = (zY[4] + za) | 0;
    },
    _doFinalize: function () {
      var zx = this._data;
      var zO = zx.words;
      var zY = this._nDataBytes * 8;
      var zp = zx.sigBytes * 8;
      zO[zp >>> 5] |= 128 << (24 - (zp % 32));
      zO[14 + (((64 + zp) >>> 9) << 4)] = Math.floor(zY / 4294967296);
      zO[15 + (((64 + zp) >>> 9) << 4)] = zY;
      zx.sigBytes = zO.length * 4;
      this._process();
      return this._hash;
    },
    clone: function () {
      var zx = S6.clone.call(this);
      zx._hash = this._hash.clone();
      return zx;
    },
  });
  SJ.SHA1 = S6._createHelper(Sj);
  SJ.HmacSHA1 = S6._createHmacHelper(Sj);
  var Sn = Math;
  var SJ = Sw;
  var Sy = (Sj = SJ.lib).WordArray;
  var X0 = Sj.Hasher;
  var Sj = SJ.algo;
  var X1 = [];
  var X2 = [];
  function X3(zx) {
    return ((zx - (zx | 0)) * 4294967296) | 0;
  }
  var X4 = 2;
  for (var X5 = 0; X5 < 64; ) {
    if (
      !!(function (zx) {
        for (var zO = Sn.sqrt(zx), zY = 2; zY <= zO; zY++) {
          if (!(zx % zY)) {
            return;
          }
        }
        return 1;
      })(X4)
    ) {
      if (X5 < 8) {
        X1[X5] = X3(Sn.pow(X4, 0.5));
      }
      X2[X5] = X3(Sn.pow(X4, 1 / 3));
      X5++;
    }
    X4++;
  }
  var X6 = [];
  var Sj = (Sj.SHA256 = X0.extend({
    _doReset: function () {
      this._hash = new Sy.init(X1.slice(0));
    },
    _doProcessBlock: function (zx, zO) {
      var zY = this._hash.words;
      var zp = zY[0];
      var zE = zY[1];
      var zG = zY[2];
      var zR = zY[3];
      var za = zY[4];
      var zV = zY[5];
      var zq = zY[6];
      var zI = zY[7];
      for (var zH = 0; zH < 64; zH++) {
        X6[zH] =
          zH < 16
            ? zx[zO + zH] | 0
            : ((((zU = X6[zH - 15]) << 25) | (zU >>> 7)) ^
                ((zU << 14) | (zU >>> 18)) ^
                (zU >>> 3)) +
              X6[zH - 7] +
              ((((zU = X6[zH - 2]) << 15) | (zU >>> 17)) ^
                ((zU << 13) | (zU >>> 19)) ^
                (zU >>> 10)) +
              X6[zH - 16];
        var zU = (zp & zE) ^ (zp & zG) ^ (zE & zG);
        var zd =
          zI +
          (((za << 26) | (za >>> 6)) ^
            ((za << 21) | (za >>> 11)) ^
            ((za << 7) | (za >>> 25))) +
          ((za & zV) ^ (~za & zq)) +
          X2[zH] +
          X6[zH];
        var zI = zq;
        var zq = zV;
        var zV = za;
        var za = (zR + zd) | 0;
        var zR = zG;
        var zG = zE;
        var zE = zp;
        var zp =
          (zd +
            ((((zp << 30) | (zp >>> 2)) ^
              ((zp << 19) | (zp >>> 13)) ^
              ((zp << 10) | (zp >>> 22))) +
              zU)) |
          0;
      }
      zY[0] = (zY[0] + zp) | 0;
      zY[1] = (zY[1] + zE) | 0;
      zY[2] = (zY[2] + zG) | 0;
      zY[3] = (zY[3] + zR) | 0;
      zY[4] = (zY[4] + za) | 0;
      zY[5] = (zY[5] + zV) | 0;
      zY[6] = (zY[6] + zq) | 0;
      zY[7] = (zY[7] + zI) | 0;
    },
    _doFinalize: function () {
      var zx = this._data;
      var zO = zx.words;
      var zY = this._nDataBytes * 8;
      var zp = zx.sigBytes * 8;
      zO[zp >>> 5] |= 128 << (24 - (zp % 32));
      zO[14 + (((64 + zp) >>> 9) << 4)] = Sn.floor(zY / 4294967296);
      zO[15 + (((64 + zp) >>> 9) << 4)] = zY;
      zx.sigBytes = zO.length * 4;
      this._process();
      return this._hash;
    },
    clone: function () {
      var zx = X0.clone.call(this);
      zx._hash = this._hash.clone();
      return zx;
    },
  }));
  SJ.SHA256 = X0._createHelper(Sj);
  SJ.HmacSHA256 = X0._createHmacHelper(Sj);
  S8 = (SJ = Sw).lib.WordArray;
  Sj = SJ.algo;
  S9 = Sj.SHA256;
  Sj = Sj.SHA224 = S9.extend({
    _doReset: function () {
      this._hash = new S8.init([
        3238371032, 914150663, 812702999, 4144912697, 4290775857, 1750603025,
        1694076839, 3204075428,
      ]);
    },
    _doFinalize: function () {
      var zx = S9._doFinalize.call(this);
      zx.sigBytes -= 4;
      return zx;
    },
  });
  SJ.SHA224 = S9._createHelper(Sj);
  SJ.HmacSHA224 = S9._createHmacHelper(Sj);
  var SJ = Sw;
  var X7 = SJ.lib.Hasher;
  var X8 = (Sj = SJ.x64).Word;
  var X9 = Sj.WordArray;
  var Sj = SJ.algo;
  function XS() {
    return X8.create.apply(X8, arguments);
  }
  var XX = [
    XS(1116352408, 3609767458),
    XS(1899447441, 602891725),
    XS(3049323471, 3964484399),
    XS(3921009573, 2173295548),
    XS(961987163, 4081628472),
    XS(1508970993, 3053834265),
    XS(2453635748, 2937671579),
    XS(2870763221, 3664609560),
    XS(3624381080, 2734883394),
    XS(310598401, 1164996542),
    XS(607225278, 1323610764),
    XS(1426881987, 3590304994),
    XS(1925078388, 4068182383),
    XS(2162078206, 991336113),
    XS(2614888103, 633803317),
    XS(3248222580, 3479774868),
    XS(3835390401, 2666613458),
    XS(4022224774, 944711139),
    XS(264347078, 2341262773),
    XS(604807628, 2007800933),
    XS(770255983, 1495990901),
    XS(1249150122, 1856431235),
    XS(1555081692, 3175218132),
    XS(1996064986, 2198950837),
    XS(2554220882, 3999719339),
    XS(2821834349, 766784016),
    XS(2952996808, 2566594879),
    XS(3210313671, 3203337956),
    XS(3336571891, 1034457026),
    XS(3584528711, 2466948901),
    XS(113926993, 3758326383),
    XS(338241895, 168717936),
    XS(666307205, 1188179964),
    XS(773529912, 1546045734),
    XS(1294757372, 1522805485),
    XS(1396182291, 2643833823),
    XS(1695183700, 2343527390),
    XS(1986661051, 1014477480),
    XS(2177026350, 1206759142),
    XS(2456956037, 344077627),
    XS(2730485921, 1290863460),
    XS(2820302411, 3158454273),
    XS(3259730800, 3505952657),
    XS(3345764771, 106217008),
    XS(3516065817, 3606008344),
    XS(3600352804, 1432725776),
    XS(4094571909, 1467031594),
    XS(275423344, 851169720),
    XS(430227734, 3100823752),
    XS(506948616, 1363258195),
    XS(659060556, 3750685593),
    XS(883997877, 3785050280),
    XS(958139571, 3318307427),
    XS(1322822218, 3812723403),
    XS(1537002063, 2003034995),
    XS(1747873779, 3602036899),
    XS(1955562222, 1575990012),
    XS(2024104815, 1125592928),
    XS(2227730452, 2716904306),
    XS(2361852424, 442776044),
    XS(2428436474, 593698344),
    XS(2756734187, 3733110249),
    XS(3204031479, 2999351573),
    XS(3329325298, 3815920427),
    XS(3391569614, 3928383900),
    XS(3515267271, 566280711),
    XS(3940187606, 3454069534),
    XS(4118630271, 4000239992),
    XS(116418474, 1914138554),
    XS(174292421, 2731055270),
    XS(289380356, 3203993006),
    XS(460393269, 320620315),
    XS(685471733, 587496836),
    XS(852142971, 1086792851),
    XS(1017036298, 365543100),
    XS(1126000580, 2618297676),
    XS(1288033470, 3409855158),
    XS(1501505948, 4234509866),
    XS(1607167915, 987167468),
    XS(1816402316, 1246189591),
  ];
  var Xz = [];
  for (var XA = 0; XA < 80; XA++) {
    Xz[XA] = XS();
  }
  Sj = Sj.SHA512 = X7.extend({
    _doReset: function () {
      this._hash = new X9.init([
        new X8.init(1779033703, 4089235720),
        new X8.init(3144134277, 2227873595),
        new X8.init(1013904242, 4271175723),
        new X8.init(2773480762, 1595750129),
        new X8.init(1359893119, 2917565137),
        new X8.init(2600822924, 725511199),
        new X8.init(528734635, 4215389547),
        new X8.init(1541459225, 327033209),
      ]);
    },
    _doProcessBlock: function (zx, zO) {
      var zY = this._hash.words;
      var zp = zY[0];
      var zE = zY[1];
      var zG = zY[2];
      var zR = zY[3];
      var za = zY[4];
      var zV = zY[5];
      var zq = zY[6];
      var zY = zY[7];
      var zI = zp.high;
      var zH = zp.low;
      var zU = zE.high;
      var zd = zE.low;
      var zW = zG.high;
      var zg = zG.low;
      var zh = zR.high;
      var zD = zR.low;
      var zu = za.high;
      var zr = za.low;
      var zM = zV.high;
      var zQ = zV.low;
      var zs = zq.high;
      var zL = zq.low;
      var zo = zY.high;
      var zm = zY.low;
      var zT = zI;
      var zk = zH;
      var zF = zU;
      var zl = zd;
      var zt = zW;
      var zw = zg;
      var zj = zh;
      var zi = zD;
      var zZ = zu;
      var zb = zr;
      var zJ = zM;
      var zB = zQ;
      var zv = zs;
      var zC = zL;
      var zf = zo;
      var zc = zm;
      for (var zK = 0; zK < 80; zK++) {
        var zP;
        var zN;
        var zn = Xz[zK];
        if (zK < 16) {
          zN = zn.high = zx[zO + zK * 2] | 0;
          zP = zn.low = zx[zO + zK * 2 + 1] | 0;
        } else {
          A6 = (A3 = Xz[zK - 15]).high;
          A3 = A3.low;
          A2 = (A1 = Xz[zK - 2]).high;
          A1 = A1.low;
          A0 = (zy = Xz[zK - 7]).high;
          zy = zy.low;
          A5 = (A4 = Xz[zK - 16]).high;
          zN =
            (zN =
              (((A6 >>> 1) | (A3 << 31)) ^
                ((A6 >>> 8) | (A3 << 24)) ^
                (A6 >>> 7)) +
              A0 +
              ((zP =
                (A0 =
                  ((A3 >>> 1) | (A6 << 31)) ^
                  ((A3 >>> 8) | (A6 << 24)) ^
                  ((A3 >>> 7) | (A6 << 25))) + zy) >>>
                0 <
              A0 >>> 0
                ? 1
                : 0)) +
            (((A2 >>> 19) | (A1 << 13)) ^
              ((A2 << 3) | (A1 >>> 29)) ^
              (A2 >>> 6)) +
            ((zP += A3 =
              ((A1 >>> 19) | (A2 << 13)) ^
              ((A1 << 3) | (A2 >>> 29)) ^
              ((A1 >>> 6) | (A2 << 26))) >>>
              0 <
            A3 >>> 0
              ? 1
              : 0);
          zP += A6 = A4.low;
          zn.high = zN = zN + A5 + (zP >>> 0 < A6 >>> 0 ? 1 : 0);
          zn.low = zP;
        }
        var zy = (zZ & zJ) ^ (~zZ & zv);
        var A0 = (zb & zB) ^ (~zb & zC);
        var A1 = (zT & zF) ^ (zT & zt) ^ (zF & zt);
        var A2 =
          ((zk >>> 28) | (zT << 4)) ^
          ((zk << 30) | (zT >>> 2)) ^
          ((zk << 25) | (zT >>> 7));
        var A3 = XX[zK];
        var A4 = A3.high;
        var A5 = A3.low;
        var A6 =
          zc +
          (((zb >>> 14) | (zZ << 18)) ^
            ((zb >>> 18) | (zZ << 14)) ^
            ((zb << 23) | (zZ >>> 9)));
        var zn =
          zf +
          (((zZ >>> 14) | (zb << 18)) ^
            ((zZ >>> 18) | (zb << 14)) ^
            ((zZ << 23) | (zb >>> 9))) +
          (A6 >>> 0 < zc >>> 0 ? 1 : 0);
        var A7 = A2 + ((zk & zl) ^ (zk & zw) ^ (zl & zw));
        var zf = zv;
        var zc = zC;
        var zv = zJ;
        var zC = zB;
        var zJ = zZ;
        var zB = zb;
        var zZ =
          (zj +
            (zn =
              zn +
              zy +
              ((A6 = A6 + A0) >>> 0 < A0 >>> 0 ? 1 : 0) +
              A4 +
              ((A6 = A6 + A5) >>> 0 < A5 >>> 0 ? 1 : 0) +
              zN +
              ((A6 = A6 + zP) >>> 0 < zP >>> 0 ? 1 : 0)) +
            ((zb = (zi + A6) | 0) >>> 0 < zi >>> 0 ? 1 : 0)) |
          0;
        var zj = zt;
        var zi = zw;
        var zt = zF;
        var zw = zl;
        var zF = zT;
        var zl = zk;
        var zT =
          (zn +
            ((((zT >>> 28) | (zk << 4)) ^
              ((zT << 30) | (zk >>> 2)) ^
              ((zT << 25) | (zk >>> 7))) +
              A1 +
              (A7 >>> 0 < A2 >>> 0 ? 1 : 0)) +
            ((zk = (A6 + A7) | 0) >>> 0 < A6 >>> 0 ? 1 : 0)) |
          0;
      }
      zH = zp.low = zH + zk;
      zp.high = zI + zT + (zH >>> 0 < zk >>> 0 ? 1 : 0);
      zd = zE.low = zd + zl;
      zE.high = zU + zF + (zd >>> 0 < zl >>> 0 ? 1 : 0);
      zg = zG.low = zg + zw;
      zG.high = zW + zt + (zg >>> 0 < zw >>> 0 ? 1 : 0);
      zD = zR.low = zD + zi;
      zR.high = zh + zj + (zD >>> 0 < zi >>> 0 ? 1 : 0);
      zr = za.low = zr + zb;
      za.high = zu + zZ + (zr >>> 0 < zb >>> 0 ? 1 : 0);
      zQ = zV.low = zQ + zB;
      zV.high = zM + zJ + (zQ >>> 0 < zB >>> 0 ? 1 : 0);
      zL = zq.low = zL + zC;
      zq.high = zs + zv + (zL >>> 0 < zC >>> 0 ? 1 : 0);
      zm = zY.low = zm + zc;
      zY.high = zo + zf + (zm >>> 0 < zc >>> 0 ? 1 : 0);
    },
    _doFinalize: function () {
      var zx = this._data;
      var zO = zx.words;
      var zY = this._nDataBytes * 8;
      var zp = zx.sigBytes * 8;
      zO[zp >>> 5] |= 128 << (24 - (zp % 32));
      zO[30 + (((128 + zp) >>> 10) << 5)] = Math.floor(zY / 4294967296);
      zO[31 + (((128 + zp) >>> 10) << 5)] = zY;
      zx.sigBytes = zO.length * 4;
      this._process();
      return this._hash.toX32();
    },
    clone: function () {
      var zx = X7.clone.call(this);
      zx._hash = this._hash.clone();
      return zx;
    },
    blockSize: 32,
  });
  SJ.SHA512 = X7._createHelper(Sj);
  SJ.HmacSHA512 = X7._createHmacHelper(Sj);
  Sj = (SJ = Sw).x64;
  SS = Sj.Word;
  SX = Sj.WordArray;
  Sj = SJ.algo;
  Sz = Sj.SHA512;
  Sj = Sj.SHA384 = Sz.extend({
    _doReset: function () {
      this._hash = new SX.init([
        new SS.init(3418070365, 3238371032),
        new SS.init(1654270250, 914150663),
        new SS.init(2438529370, 812702999),
        new SS.init(355462360, 4144912697),
        new SS.init(1731405415, 4290775857),
        new SS.init(2394180231, 1750603025),
        new SS.init(3675008525, 1694076839),
        new SS.init(1203062813, 3204075428),
      ]);
    },
    _doFinalize: function () {
      var zx = Sz._doFinalize.call(this);
      zx.sigBytes -= 16;
      return zx;
    },
  });
  SJ.SHA384 = Sz._createHelper(Sj);
  SJ.HmacSHA384 = Sz._createHmacHelper(Sj);
  var Xx = Math;
  var SJ = Sw;
  var XO = (Sj = SJ.lib).WordArray;
  var XY = Sj.Hasher;
  var Xp = SJ.x64.Word;
  var Sj = SJ.algo;
  var XE = [];
  var XG = [];
  var XR = [];
  var Xa = 1;
  var XV = 0;
  for (var Xq = 0; Xq < 24; Xq++) {
    XE[Xa + XV * 5] = (((Xq + 1) * (Xq + 2)) / 2) % 64;
    var XI = (Xa * 2 + XV * 3) % 5;
    Xa = XV % 5;
    XV = XI;
  }
  for (Xa = 0; Xa < 5; Xa++) {
    for (XV = 0; XV < 5; XV++) {
      XG[Xa + XV * 5] = XV + ((Xa * 2 + XV * 3) % 5) * 5;
    }
  }
  var XH = 1;
  for (var XU = 0; XU < 24; XU++) {
    var Xd;
    var XW = 0;
    var Xg = 0;
    for (var Xh = 0; Xh < 7; Xh++) {
      if (XH & 1) {
        if ((Xd = (1 << Xh) - 1) < 32) {
          Xg ^= 1 << Xd;
        } else {
          XW ^= 1 << (Xd - 32);
        }
      }
      if (XH & 128) {
        XH = (XH << 1) ^ 113;
      } else {
        XH <<= 1;
      }
    }
    XR[XU] = Xp.create(XW, Xg);
  }
  var XD = [];
  for (var Xu = 0; Xu < 25; Xu++) {
    XD[Xu] = Xp.create();
  }
  function Xr(zx, zO, zY) {
    return (zx & zO) | (~zx & zY);
  }
  function XM(zx, zO, zY) {
    return (zx & zY) | (zO & ~zY);
  }
  function XQ(zx, zO) {
    return (zx << zO) | (zx >>> (32 - zO));
  }
  function Xs(zx) {
    if (typeof zx == "string") {
      return SM;
    } else {
      return Sr;
    }
  }
  function XL(zx, zO, zY) {
    var zp;
    var zE = this._iv;
    if (zE) {
      zp = zE;
      this._iv = undefined;
    } else {
      zp = this._prevBlock;
    }
    for (var zG = 0; zG < zY; zG++) {
      zx[zO + zG] ^= zp[zG];
    }
  }
  function Xo(zx, zO, zY, zp) {
    var zE;
    var zG = this._iv;
    if (zG) {
      zE = zG.slice(0);
      this._iv = undefined;
    } else {
      zE = this._prevBlock;
    }
    zp.encryptBlock(zE, 0);
    for (var zR = 0; zR < zY; zR++) {
      zx[zO + zR] ^= zE[zR];
    }
  }
  function Xm(zx) {
    var zO;
    var zY;
    var zp;
    if (((zx >> 24) & 255) == 255) {
      zY = (zx >> 8) & 255;
      zp = zx & 255;
      if ((zO = (zx >> 16) & 255) === 255) {
        zO = 0;
        if (zY === 255) {
          zY = 0;
          if (zp === 255) {
            zp = 0;
          } else {
            ++zp;
          }
        } else {
          ++zY;
        }
      } else {
        ++zO;
      }
      zx = 0;
      zx = (zx += zO << 16) + (zY << 8) + zp;
    } else {
      zx += 1 << 24;
    }
    return zx;
  }
  Sj = Sj.SHA3 = XY.extend({
    cfg: XY.cfg.extend({
      outputLength: 512,
    }),
    _doReset: function () {
      var zx = (this._state = []);
      for (var zO = 0; zO < 25; zO++) {
        zx[zO] = new Xp.init();
      }
      this.blockSize = (1600 - this.cfg.outputLength * 2) / 32;
    },
    _doProcessBlock: function (zx, zO) {
      var zY = this._state;
      for (var zp = this.blockSize / 2, zE = 0; zE < zp; zE++) {
        var zG = zx[zO + zE * 2];
        var zR = zx[zO + zE * 2 + 1];
        var zG =
          (((zG << 8) | (zG >>> 24)) & 16711935) |
          (((zG << 24) | (zG >>> 8)) & 4278255360);
        (zs = zY[zE]).high ^=
          (((zR << 8) | (zR >>> 24)) & 16711935) |
          (((zR << 24) | (zR >>> 8)) & 4278255360);
        zs.low ^= zG;
      }
      for (var za = 0; za < 24; za++) {
        for (var zV = 0; zV < 5; zV++) {
          var zq = 0;
          var zI = 0;
          for (var zH = 0; zH < 5; zH++) {
            zq ^= (zs = zY[zV + zH * 5]).high;
            zI ^= zs.low;
          }
          var zU = XD[zV];
          zU.high = zq;
          zU.low = zI;
        }
        for (zV = 0; zV < 5; zV++) {
          var zd = XD[(zV + 4) % 5];
          var zW = XD[(zV + 1) % 5];
          var zg = zW.high;
          var zW = zW.low;
          var zq = zd.high ^ ((zg << 1) | (zW >>> 31));
          var zI = zd.low ^ ((zW << 1) | (zg >>> 31));
          for (var zH = 0; zH < 5; zH++) {
            (zs = zY[zV + zH * 5]).high ^= zq;
            zs.low ^= zI;
          }
        }
        for (var zh = 1; zh < 25; zh++) {
          var zD = (zs = zY[zh]).high;
          var zu = zs.low;
          var zr = XE[zh];
          zI =
            zr < 32
              ? ((zq = (zD << zr) | (zu >>> (32 - zr))),
                (zu << zr) | (zD >>> (32 - zr)))
              : ((zq = (zu << (zr - 32)) | (zD >>> (64 - zr))),
                (zD << (zr - 32)) | (zu >>> (64 - zr)));
          var zD = XD[XG[zh]];
          zD.high = zq;
          zD.low = zI;
        }
        var zM = XD[0];
        var zQ = zY[0];
        zM.high = zQ.high;
        zM.low = zQ.low;
        for (zV = 0; zV < 5; zV++) {
          for (zH = 0; zH < 5; zH++) {
            var zs = zY[(zh = zV + zH * 5)];
            var zL = XD[zh];
            var zo = XD[((zV + 1) % 5) + zH * 5];
            var zm = XD[((zV + 2) % 5) + zH * 5];
            zs.high = zL.high ^ (~zo.high & zm.high);
            zs.low = zL.low ^ (~zo.low & zm.low);
          }
        }
        zs = zY[0];
        zM = XR[za];
        zs.high ^= zM.high;
        zs.low ^= zM.low;
      }
    },
    _doFinalize: function () {
      var zx = this._data;
      var zO = zx.words;
      this._nDataBytes;
      var zY = zx.sigBytes * 8;
      var zp = this.blockSize * 32;
      zO[zY >>> 5] |= 1 << (24 - (zY % 32));
      zO[((Xx.ceil((1 + zY) / zp) * zp) >>> 5) - 1] |= 128;
      zx.sigBytes = zO.length * 4;
      this._process();
      var zE = this._state;
      var zY = this.cfg.outputLength / 8;
      for (var zG = zY / 8, zR = [], za = 0; za < zG; za++) {
        var zV = zE[za];
        var zq = zV.high;
        var zV = zV.low;
        var zq =
          (((zq << 8) | (zq >>> 24)) & 16711935) |
          (((zq << 24) | (zq >>> 8)) & 4278255360);
        zR.push(
          (((zV << 8) | (zV >>> 24)) & 16711935) |
            (((zV << 24) | (zV >>> 8)) & 4278255360)
        );
        zR.push(zq);
      }
      return new XO.init(zR, zY);
    },
    clone: function () {
      var zx = XY.clone.call(this);
      var zO = (zx._state = this._state.slice(0));
      for (var zY = 0; zY < 25; zY++) {
        zO[zY] = zO[zY].clone();
      }
      return zx;
    },
  });
  SJ.SHA3 = XY._createHelper(Sj);
  SJ.HmacSHA3 = XY._createHmacHelper(Sj);
  Math;
  Sj = (SJ = Sw).lib;
  SA = Sj.WordArray;
  Sx = Sj.Hasher;
  Sj = SJ.algo;
  SO = SA.create([
    0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 7, 4, 13, 1, 10, 6,
    15, 3, 12, 0, 9, 5, 2, 14, 11, 8, 3, 10, 14, 4, 9, 15, 8, 1, 2, 7, 0, 6, 13,
    11, 5, 12, 1, 9, 11, 10, 0, 8, 12, 4, 13, 3, 7, 15, 14, 5, 6, 2, 4, 0, 5, 9,
    7, 12, 2, 10, 14, 1, 3, 8, 11, 6, 15, 13,
  ]);
  SY = SA.create([
    5, 14, 7, 0, 9, 2, 11, 4, 13, 6, 15, 8, 1, 10, 3, 12, 6, 11, 3, 7, 0, 13, 5,
    10, 14, 15, 8, 12, 4, 9, 1, 2, 15, 5, 1, 3, 7, 14, 6, 9, 11, 8, 12, 2, 10,
    0, 4, 13, 8, 6, 4, 1, 3, 11, 15, 0, 5, 12, 2, 13, 9, 7, 10, 14, 12, 15, 10,
    4, 1, 5, 8, 7, 6, 2, 13, 14, 0, 3, 9, 11,
  ]);
  Sp = SA.create([
    11, 14, 15, 12, 5, 8, 7, 9, 11, 13, 14, 15, 6, 7, 9, 8, 7, 6, 8, 13, 11, 9,
    7, 15, 7, 12, 15, 9, 11, 7, 13, 12, 11, 13, 6, 7, 14, 9, 13, 15, 14, 8, 13,
    6, 5, 12, 7, 5, 11, 12, 14, 15, 14, 15, 9, 8, 9, 14, 5, 6, 8, 6, 5, 12, 9,
    15, 5, 11, 6, 8, 13, 12, 5, 12, 13, 14, 11, 8, 5, 6,
  ]);
  SE = SA.create([
    8, 9, 9, 11, 13, 15, 15, 5, 7, 7, 8, 11, 14, 14, 12, 6, 9, 13, 15, 7, 12, 8,
    9, 11, 7, 7, 12, 7, 6, 15, 13, 11, 9, 7, 15, 11, 8, 6, 6, 14, 12, 13, 5, 14,
    13, 13, 7, 5, 15, 5, 8, 11, 14, 14, 6, 14, 6, 9, 12, 9, 12, 5, 15, 8, 8, 5,
    12, 9, 12, 5, 14, 6, 8, 13, 6, 5, 15, 13, 11, 11,
  ]);
  SG = SA.create([0, 1518500249, 1859775393, 2400959708, 2840853838]);
  SR = SA.create([1352829926, 1548603684, 1836072691, 2053994217, 0]);
  Sj = Sj.RIPEMD160 = Sx.extend({
    _doReset: function () {
      this._hash = SA.create([
        1732584193, 4023233417, 2562383102, 271733878, 3285377520,
      ]);
    },
    _doProcessBlock: function (zx, zO) {
      for (var zY = 0; zY < 16; zY++) {
        var zp = zO + zY;
        var zE = zx[zp];
        zx[zp] =
          (((zE << 8) | (zE >>> 24)) & 16711935) |
          (((zE << 24) | (zE >>> 8)) & 4278255360);
      }
      var zG;
      var zR;
      var za;
      var zV;
      var zq;
      var zI;
      var zH = this._hash.words;
      var zU = SG.words;
      var zd = SR.words;
      var zW = SO.words;
      var zg = SY.words;
      var zh = Sp.words;
      var zD = SE.words;
      var zu = (zG = zH[0]);
      var zr = (zR = zH[1]);
      var zM = (za = zH[2]);
      var zQ = (zV = zH[3]);
      var zs = (zq = zH[4]);
      for (var zY = 0; zY < 80; zY += 1) {
        zI =
          ((zI = XQ(
            (zI =
              ((zI = (zG + zx[zO + zW[zY]]) | 0) +
                (zY < 16
                  ? (zR ^ za ^ zV) + zU[0]
                  : zY < 32
                  ? Xr(zR, za, zV) + zU[1]
                  : zY < 48
                  ? ((zR | ~za) ^ zV) + zU[2]
                  : zY < 64
                  ? XM(zR, za, zV) + zU[3]
                  : (zR ^ (za | ~zV)) + zU[4])) |
              0),
            zh[zY]
          )) +
            zq) |
          0;
        zG = zq;
        zq = zV;
        zV = XQ(za, 10);
        za = zR;
        zR = zI;
        zI =
          ((zI = XQ(
            (zI =
              ((zI = (zu + zx[zO + zg[zY]]) | 0) +
                (zY < 16
                  ? (zr ^ (zM | ~zQ)) + zd[0]
                  : zY < 32
                  ? XM(zr, zM, zQ) + zd[1]
                  : zY < 48
                  ? ((zr | ~zM) ^ zQ) + zd[2]
                  : zY < 64
                  ? Xr(zr, zM, zQ) + zd[3]
                  : (zr ^ zM ^ zQ) + zd[4])) |
              0),
            zD[zY]
          )) +
            zs) |
          0;
        zu = zs;
        zs = zQ;
        zQ = XQ(zM, 10);
        zM = zr;
        zr = zI;
      }
      zI = (zH[1] + za + zQ) | 0;
      zH[1] = (zH[2] + zV + zs) | 0;
      zH[2] = (zH[3] + zq + zu) | 0;
      zH[3] = (zH[4] + zG + zr) | 0;
      zH[4] = (zH[0] + zR + zM) | 0;
      zH[0] = zI;
    },
    _doFinalize: function () {
      var zx = this._data;
      var zO = zx.words;
      var zY = this._nDataBytes * 8;
      var zp = zx.sigBytes * 8;
      zO[zp >>> 5] |= 128 << (24 - (zp % 32));
      zO[14 + (((64 + zp) >>> 9) << 4)] =
        (((zY << 8) | (zY >>> 24)) & 16711935) |
        (((zY << 24) | (zY >>> 8)) & 4278255360);
      zx.sigBytes = (zO.length + 1) * 4;
      this._process();
      var zp = this._hash;
      var zE = zp.words;
      for (var zG = 0; zG < 5; zG++) {
        var zR = zE[zG];
        zE[zG] =
          (((zR << 8) | (zR >>> 24)) & 16711935) |
          (((zR << 24) | (zR >>> 8)) & 4278255360);
      }
      return zp;
    },
    clone: function () {
      var zx = Sx.clone.call(this);
      zx._hash = this._hash.clone();
      return zx;
    },
  });
  SJ.RIPEMD160 = Sx._createHelper(Sj);
  SJ.HmacRIPEMD160 = Sx._createHmacHelper(Sj);
  Sj = (SJ = Sw).lib.Base;
  Sa = SJ.enc.Utf8;
  SJ.algo.HMAC = Sj.extend({
    init: function (zx, zO) {
      zx = this._hasher = new zx.init();
      if (typeof zO == "string") {
        zO = Sa.parse(zO);
      }
      for (
        var zY = zx.blockSize,
          zp = zY * 4,
          zx =
            ((zO = zO.sigBytes > zp ? zx.finalize(zO) : zO).clamp(),
            (this._oKey = zO.clone())),
          zO = (this._iKey = zO.clone()),
          zE = zx.words,
          zG = zO.words,
          zR = 0;
        zR < zY;
        zR++
      ) {
        zE[zR] ^= 1549556828;
        zG[zR] ^= 909522486;
      }
      zx.sigBytes = zO.sigBytes = zp;
      this.reset();
    },
    reset: function () {
      var zx = this._hasher;
      zx.reset();
      zx.update(this._iKey);
    },
    update: function (zx) {
      this._hasher.update(zx);
      return this;
    },
    finalize: function (zx) {
      var zO = this._hasher;
      var zx = zO.finalize(zx);
      zO.reset();
      return zO.finalize(this._oKey.clone().concat(zx));
    },
  });
  Sj = (SJ = Sw).lib;
  XT = Sj.Base;
  SV = Sj.WordArray;
  Sj = SJ.algo;
  z0 = Sj.SHA1;
  Sq = Sj.HMAC;
  SI = Sj.PBKDF2 = XT.extend({
    cfg: XT.extend({
      keySize: 4,
      hasher: z0,
      iterations: 1,
    }),
    init: function (zx) {
      this.cfg = this.cfg.extend(zx);
    },
    compute: function (zx, zO) {
      var zY = this.cfg;
      var zp = Sq.create(zY.hasher, zx);
      var zE = SV.create();
      var zG = SV.create([1]);
      for (
        var zR = zE.words, za = zG.words, zV = zY.keySize, zq = zY.iterations;
        zR.length < zV;

      ) {
        var zI = zp.update(zO).finalize(zG);
        zp.reset();
        var zH = zI.words;
        var zU = zH.length;
        var zd = zI;
        for (var zW = 1; zW < zq; zW++) {
          zd = zp.finalize(zd);
          zp.reset();
          var zg = zd.words;
          for (var zh = 0; zh < zU; zh++) {
            zH[zh] ^= zg[zh];
          }
        }
        zE.concat(zI);
        za[0]++;
      }
      zE.sigBytes = zV * 4;
      return zE;
    },
  });
  SJ.PBKDF2 = function (zx, zO, zY) {
    return SI.create(zY).compute(zx, zO);
  };
  XT = (Sj = Sw).lib;
  z0 = XT.Base;
  SH = XT.WordArray;
  XT = Sj.algo;
  SJ = XT.MD5;
  SU = XT.EvpKDF = z0.extend({
    cfg: z0.extend({
      keySize: 4,
      hasher: SJ,
      iterations: 1,
    }),
    init: function (zx) {
      this.cfg = this.cfg.extend(zx);
    },
    compute: function (zx, zO) {
      var zY;
      var zp = this.cfg;
      var zE = zp.hasher.create();
      var zG = SH.create();
      for (
        var zR = zG.words, za = zp.keySize, zV = zp.iterations;
        zR.length < za;

      ) {
        if (zY) {
          zE.update(zY);
        }
        zY = zE.update(zx).finalize(zO);
        zE.reset();
        for (var zq = 1; zq < zV; zq++) {
          zY = zE.finalize(zY);
          zE.reset();
        }
        zG.concat(zY);
      }
      zG.sigBytes = za * 4;
      return zG;
    },
  });
  Sj.EvpKDF = function (zx, zO, zY) {
    return SU.create(zY).compute(zx, zO);
  };
  if (!Sw.lib.Cipher) {
    z0 = (XT = Sw).lib;
    SJ = z0.Base;
    Sd = z0.WordArray;
    SW = z0.BufferedBlockAlgorithm;
    (Sj = XT.enc).Utf8;
    Sg = Sj.Base64;
    Sh = XT.algo.EvpKDF;
    SD = z0.Cipher = SW.extend({
      cfg: SJ.extend(),
      createEncryptor: function (zx, zO) {
        return this.create(this._ENC_XFORM_MODE, zx, zO);
      },
      createDecryptor: function (zx, zO) {
        return this.create(this._DEC_XFORM_MODE, zx, zO);
      },
      init: function (zx, zO, zY) {
        this.cfg = this.cfg.extend(zY);
        this._xformMode = zx;
        this._key = zO;
        this.reset();
      },
      reset: function () {
        SW.reset.call(this);
        this._doReset();
      },
      process: function (zx) {
        this._append(zx);
        return this._process();
      },
      finalize: function (zx) {
        if (zx) {
          this._append(zx);
        }
        return this._doFinalize();
      },
      keySize: 4,
      ivSize: 4,
      _ENC_XFORM_MODE: 1,
      _DEC_XFORM_MODE: 2,
      _createHelper: function (zx) {
        return {
          encrypt: function (zO, zY, zp) {
            return Xs(zY).encrypt(zx, zO, zY, zp);
          },
          decrypt: function (zO, zY, zp) {
            return Xs(zY).decrypt(zx, zO, zY, zp);
          },
        };
      },
    });
    z0.StreamCipher = SD.extend({
      _doFinalize: function () {
        return this._process(true);
      },
      blockSize: 1,
    });
    Sj = XT.mode = {};
    SQ = z0.BlockCipherMode = SJ.extend({
      createEncryptor: function (zx, zO) {
        return this.Encryptor.create(zx, zO);
      },
      createDecryptor: function (zx, zO) {
        return this.Decryptor.create(zx, zO);
      },
      init: function (zx, zO) {
        this._cipher = zx;
        this._iv = zO;
      },
    });
    (Sj = SQ.extend()).Encryptor = Sj.extend({
      processBlock: function (zx, zO) {
        var zY = this._cipher;
        var zp = zY.blockSize;
        XL.call(this, zx, zO, zp);
        zY.encryptBlock(zx, zO);
        this._prevBlock = zx.slice(zO, zO + zp);
      },
    });
    Sj.Decryptor = Sj.extend({
      processBlock: function (zx, zO) {
        var zY = this._cipher;
        var zp = zY.blockSize;
        var zE = zx.slice(zO, zO + zp);
        zY.decryptBlock(zx, zO);
        XL.call(this, zx, zO, zp);
        this._prevBlock = zE;
      },
    });
    SQ = Sj.CBC = Sj;
    Sj = (XT.pad = {}).Pkcs7 = {
      pad: function (zx, zO) {
        var zO = zO * 4;
        for (
          var zY = zO - (zx.sigBytes % zO),
            zp = (zY << 24) | (zY << 16) | (zY << 8) | zY,
            zE = [],
            zG = 0;
          zG < zY;
          zG += 4
        ) {
          zE.push(zp);
        }
        zO = Sd.create(zE, zY);
        zx.concat(zO);
      },
      unpad: function (zx) {
        var zO = zx.words[(zx.sigBytes - 1) >>> 2] & 255;
        zx.sigBytes -= zO;
      },
    };
    z0.BlockCipher = SD.extend({
      cfg: SD.cfg.extend({
        mode: SQ,
        padding: Sj,
      }),
      reset: function () {
        SD.reset.call(this);
        var zx;
        var zO = this.cfg;
        var zY = zO.iv;
        var zO = zO.mode;
        if (this._xformMode == this._ENC_XFORM_MODE) {
          zx = zO.createEncryptor;
        } else {
          zx = zO.createDecryptor;
          this._minBufferSize = 1;
        }
        if (this._mode && this._mode.__creator == zx) {
          this._mode.init(this, zY && zY.words);
        } else {
          this._mode = zx.call(zO, this, zY && zY.words);
          this._mode.__creator = zx;
        }
      },
      _doProcessBlock: function (zx, zO) {
        this._mode.processBlock(zx, zO);
      },
      _doFinalize: function () {
        var zx;
        var zO = this.cfg.padding;
        if (this._xformMode == this._ENC_XFORM_MODE) {
          zO.pad(this._data, this.blockSize);
          zx = this._process(true);
        } else {
          zx = this._process(true);
          zO.unpad(zx);
        }
        return zx;
      },
      blockSize: 4,
    });
    Su = z0.CipherParams = SJ.extend({
      init: function (zx) {
        this.mixIn(zx);
      },
      toString: function (zx) {
        return (zx || this.formatter).stringify(this);
      },
    });
    SQ = (XT.format = {}).OpenSSL = {
      stringify: function (zx) {
        var zO = zx.ciphertext;
        var zx = zx.salt;
        var zx = zx
          ? Sd.create([1398893684, 1701076831]).concat(zx).concat(zO)
          : zO;
        return zx.toString(Sg);
      },
      parse: function (zx) {
        var zO;
        var zx = Sg.parse(zx);
        var zY = zx.words;
        if (zY[0] == 1398893684 && zY[1] == 1701076831) {
          zO = Sd.create(zY.slice(2, 4));
          zY.splice(0, 4);
          zx.sigBytes -= 16;
        }
        return Su.create({
          ciphertext: zx,
          salt: zO,
        });
      },
    };
    Sr = z0.SerializableCipher = SJ.extend({
      cfg: SJ.extend({
        format: SQ,
      }),
      encrypt: function (zx, zO, zY, zp) {
        zp = this.cfg.extend(zp);
        var zE = zx.createEncryptor(zY, zp);
        var zO = zE.finalize(zO);
        var zE = zE.cfg;
        return Su.create({
          ciphertext: zO,
          key: zY,
          iv: zE.iv,
          algorithm: zx,
          mode: zE.mode,
          padding: zE.padding,
          blockSize: zx.blockSize,
          formatter: zp.format,
        });
      },
      decrypt: function (zx, zO, zY, zp) {
        zp = this.cfg.extend(zp);
        zO = this._parse(zO, zp.format);
        return zx.createDecryptor(zY, zp).finalize(zO.ciphertext);
      },
      _parse: function (zx, zO) {
        if (typeof zx == "string") {
          return zO.parse(zx, this);
        } else {
          return zx;
        }
      },
    });
    Sj = (XT.kdf = {}).OpenSSL = {
      execute: function (zx, zO, zY, zp) {
        zp = zp || Sd.random(8);
        zx = Sh.create({
          keySize: zO + zY,
        }).compute(zx, zp);
        zY = Sd.create(zx.words.slice(zO), zY * 4);
        zx.sigBytes = zO * 4;
        return Su.create({
          key: zx,
          iv: zY,
          salt: zp,
        });
      },
    };
    SM = z0.PasswordBasedCipher = Sr.extend({
      cfg: Sr.cfg.extend({
        kdf: Sj,
      }),
      encrypt: function (zx, zO, zY, zp) {
        zY = (zp = this.cfg.extend(zp)).kdf.execute(zY, zx.keySize, zx.ivSize);
        zp.iv = zY.iv;
        zx = Sr.encrypt.call(this, zx, zO, zY.key, zp);
        zx.mixIn(zY);
        return zx;
      },
      decrypt: function (zx, zO, zY, zp) {
        zp = this.cfg.extend(zp);
        zO = this._parse(zO, zp.format);
        zY = zp.kdf.execute(zY, zx.keySize, zx.ivSize, zO.salt);
        zp.iv = zY.iv;
        return Sr.decrypt.call(this, zx, zO, zY.key, zp);
      },
    });
  }
  Sw.mode.CFB =
    (((SJ = Sw.lib.BlockCipherMode.extend()).Encryptor = SJ.extend({
      processBlock: function (zx, zO) {
        var zY = this._cipher;
        var zp = zY.blockSize;
        Xo.call(this, zx, zO, zp, zY);
        this._prevBlock = zx.slice(zO, zO + zp);
      },
    })),
    (SJ.Decryptor = SJ.extend({
      processBlock: function (zx, zO) {
        var zY = this._cipher;
        var zp = zY.blockSize;
        var zE = zx.slice(zO, zO + zp);
        Xo.call(this, zx, zO, zp, zY);
        this._prevBlock = zE;
      },
    })),
    SJ);
  Sw.mode.CTR =
    ((SQ = Sw.lib.BlockCipherMode.extend()),
    (XT = SQ.Encryptor =
      SQ.extend({
        processBlock: function (zx, zO) {
          var zY = this._cipher;
          var zp = zY.blockSize;
          var zE = this._iv;
          var zG = this._counter;
          if (zE) {
            zG = this._counter = zE.slice(0);
            this._iv = undefined;
          }
          var zR = zG.slice(0);
          zY.encryptBlock(zR, 0);
          zG[zp - 1] = (zG[zp - 1] + 1) | 0;
          for (var za = 0; za < zp; za++) {
            zx[zO + za] ^= zR[za];
          }
        },
      })),
    (SQ.Decryptor = XT),
    SQ);
  Sw.mode.CTRGladman =
    ((z0 = Sw.lib.BlockCipherMode.extend()),
    (Sj = z0.Encryptor =
      z0.extend({
        processBlock: function (zx, zO) {
          var zY = this._cipher;
          var zp = zY.blockSize;
          var zE = this._iv;
          var zG = this._counter;
          if (zE) {
            zG = this._counter = zE.slice(0);
            this._iv = undefined;
          }
          if (((zE = zG)[0] = Xm(zE[0])) === 0) {
            zE[1] = Xm(zE[1]);
          }
          var zR = zG.slice(0);
          zY.encryptBlock(zR, 0);
          for (var za = 0; za < zp; za++) {
            zx[zO + za] ^= zR[za];
          }
        },
      })),
    (z0.Decryptor = Sj),
    z0);
  Sw.mode.OFB =
    ((SJ = Sw.lib.BlockCipherMode.extend()),
    (XT = SJ.Encryptor =
      SJ.extend({
        processBlock: function (zx, zO) {
          var zY = this._cipher;
          var zp = zY.blockSize;
          var zE = this._iv;
          var zG = this._keystream;
          if (zE) {
            zG = this._keystream = zE.slice(0);
            this._iv = undefined;
          }
          zY.encryptBlock(zG, 0);
          for (var zR = 0; zR < zp; zR++) {
            zx[zO + zR] ^= zG[zR];
          }
        },
      })),
    (SJ.Decryptor = XT),
    SJ);
  Sw.mode.ECB =
    (((Sj = Sw.lib.BlockCipherMode.extend()).Encryptor = Sj.extend({
      processBlock: function (zx, zO) {
        this._cipher.encryptBlock(zx, zO);
      },
    })),
    (Sj.Decryptor = Sj.extend({
      processBlock: function (zx, zO) {
        this._cipher.decryptBlock(zx, zO);
      },
    })),
    Sj);
  Sw.pad.AnsiX923 = {
    pad: function (zx, zO) {
      var zY = zx.sigBytes;
      var zO = zO * 4;
      var zO = zO - (zY % zO);
      var zY = zY + zO - 1;
      zx.clamp();
      zx.words[zY >>> 2] |= zO << (24 - (zY % 4) * 8);
      zx.sigBytes += zO;
    },
    unpad: function (zx) {
      var zO = zx.words[(zx.sigBytes - 1) >>> 2] & 255;
      zx.sigBytes -= zO;
    },
  };
  Sw.pad.Iso10126 = {
    pad: function (zx, zO) {
      zO *= 4;
      zO -= zx.sigBytes % zO;
      zx.concat(Sw.lib.WordArray.random(zO - 1)).concat(
        Sw.lib.WordArray.create([zO << 24], 1)
      );
    },
    unpad: function (zx) {
      var zO = zx.words[(zx.sigBytes - 1) >>> 2] & 255;
      zx.sigBytes -= zO;
    },
  };
  Sw.pad.Iso97971 = {
    pad: function (zx, zO) {
      zx.concat(Sw.lib.WordArray.create([2147483648], 1));
      Sw.pad.ZeroPadding.pad(zx, zO);
    },
    unpad: function (zx) {
      Sw.pad.ZeroPadding.unpad(zx);
      zx.sigBytes--;
    },
  };
  Sw.pad.ZeroPadding = {
    pad: function (zx, zO) {
      zO *= 4;
      zx.clamp();
      zx.sigBytes += zO - (zx.sigBytes % zO || zO);
    },
    unpad: function (zx) {
      var zO = zx.words;
      for (var zY = zx.sigBytes - 1, zY = zx.sigBytes - 1; zY >= 0; zY--) {
        if ((zO[zY >>> 2] >>> (24 - (zY % 4) * 8)) & 255) {
          zx.sigBytes = zY + 1;
          break;
        }
      }
    },
  };
  Sw.pad.NoPadding = {
    pad: function () {},
    unpad: function () {},
  };
  Ss = (z0 = Sw).lib.CipherParams;
  SL = z0.enc.Hex;
  z0.format.Hex = {
    stringify: function (zx) {
      return zx.ciphertext.toString(SL);
    },
    parse: function (zx) {
      zx = SL.parse(zx);
      return Ss.create({
        ciphertext: zx,
      });
    },
  };
  var XT = Sw;
  var SJ = XT.lib.BlockCipher;
  var Sj = XT.algo;
  var Xk = [];
  var XF = [];
  var Xl = [];
  var Xt = [];
  var Xw = [];
  var Xj = [];
  var Xi = [];
  var XZ = [];
  var Xb = [];
  var XJ = [];
  var XB = [];
  for (var Xv = 0; Xv < 256; Xv++) {
    XB[Xv] = Xv < 128 ? Xv << 1 : (Xv << 1) ^ 283;
  }
  var XC = 0;
  var Xf = 0;
  for (var Xv = 0; Xv < 256; Xv++) {
    var Xc = Xf ^ (Xf << 1) ^ (Xf << 2) ^ (Xf << 3) ^ (Xf << 4);
    var XK = XB[(XF[(Xk[XC] = Xc = (Xc >>> 8) ^ (Xc & 255) ^ 99)] = XC)];
    var XP = XB[XK];
    var XN = XB[XP];
    var Xn = (XB[Xc] * 257) ^ (Xc * 16843008);
    Xl[XC] = (Xn << 24) | (Xn >>> 8);
    Xt[XC] = (Xn << 16) | (Xn >>> 16);
    Xw[XC] = (Xn << 8) | (Xn >>> 24);
    Xj[XC] = Xn;
    Xi[Xc] =
      ((Xn = (XN * 16843009) ^ (XP * 65537) ^ (XK * 257) ^ (XC * 16843008)) <<
        24) |
      (Xn >>> 8);
    XZ[Xc] = (Xn << 16) | (Xn >>> 16);
    Xb[Xc] = (Xn << 8) | (Xn >>> 24);
    XJ[Xc] = Xn;
    if (XC) {
      XC = XK ^ XB[XB[XB[XN ^ XK]]];
      Xf ^= XB[XB[Xf]];
    } else {
      XC = Xf = 1;
    }
  }
  var Xy = [0, 1, 2, 4, 8, 16, 32, 64, 128, 27, 54];
  var Sj = (Sj.AES = SJ.extend({
    _doReset: function () {
      if (!this._nRounds || this._keyPriorReset !== this._key) {
        var zx = (this._keyPriorReset = this._key);
        var zO = zx.words;
        var zY = zx.sigBytes / 4;
        for (
          var zp = (1 + (this._nRounds = 6 + zY)) * 4,
            zE = (this._keySchedule = []),
            zG = 0;
          zG < zp;
          zG++
        ) {
          if (zG < zY) {
            zE[zG] = zO[zG];
          } else {
            zV = zE[zG - 1];
            if (zG % zY) {
              if (zY > 6 && zG % zY == 4) {
                zV =
                  (Xk[zV >>> 24] << 24) |
                  (Xk[(zV >>> 16) & 255] << 16) |
                  (Xk[(zV >>> 8) & 255] << 8) |
                  Xk[zV & 255];
              }
            } else {
              zV =
                (Xk[(zV = (zV << 8) | (zV >>> 24)) >>> 24] << 24) |
                (Xk[(zV >>> 16) & 255] << 16) |
                (Xk[(zV >>> 8) & 255] << 8) |
                Xk[zV & 255];
              zV ^= Xy[(zG / zY) | 0] << 24;
            }
            zE[zG] = zE[zG - zY] ^ zV;
          }
        }
        var zR = (this._invKeySchedule = []);
        for (var za = 0; za < zp; za++) {
          var zV;
          var zG = zp - za;
          zV = za % 4 ? zE[zG] : zE[zG - 4];
          zR[za] =
            za < 4 || zG <= 4
              ? zV
              : Xi[Xk[zV >>> 24]] ^
                XZ[Xk[(zV >>> 16) & 255]] ^
                Xb[Xk[(zV >>> 8) & 255]] ^
                XJ[Xk[zV & 255]];
        }
      }
    },
    encryptBlock: function (zx, zO) {
      this._doCryptBlock(zx, zO, this._keySchedule, Xl, Xt, Xw, Xj, Xk);
    },
    decryptBlock: function (zx, zO) {
      var zY = zx[zO + 1];
      zx[zO + 1] = zx[zO + 3];
      zx[zO + 3] = zY;
      this._doCryptBlock(zx, zO, this._invKeySchedule, Xi, XZ, Xb, XJ, XF);
      var zY = zx[zO + 1];
      zx[zO + 1] = zx[zO + 3];
      zx[zO + 3] = zY;
    },
    _doCryptBlock: function (zx, zO, zY, zp, zE, zG, zR, za) {
      for (
        var zV = this._nRounds,
          zq = zx[zO] ^ zY[0],
          zI = zx[zO + 1] ^ zY[1],
          zH = zx[zO + 2] ^ zY[2],
          zU = zx[zO + 3] ^ zY[3],
          zd = 4,
          zW = 1;
        zW < zV;
        zW++
      ) {
        var zg =
          zp[zq >>> 24] ^
          zE[(zI >>> 16) & 255] ^
          zG[(zH >>> 8) & 255] ^
          zR[zU & 255] ^
          zY[zd++];
        var zh =
          zp[zI >>> 24] ^
          zE[(zH >>> 16) & 255] ^
          zG[(zU >>> 8) & 255] ^
          zR[zq & 255] ^
          zY[zd++];
        var zD =
          zp[zH >>> 24] ^
          zE[(zU >>> 16) & 255] ^
          zG[(zq >>> 8) & 255] ^
          zR[zI & 255] ^
          zY[zd++];
        var zu =
          zp[zU >>> 24] ^
          zE[(zq >>> 16) & 255] ^
          zG[(zI >>> 8) & 255] ^
          zR[zH & 255] ^
          zY[zd++];
        var zq = zg;
        var zI = zh;
        var zH = zD;
        var zU = zu;
      }
      zg =
        ((za[zq >>> 24] << 24) |
          (za[(zI >>> 16) & 255] << 16) |
          (za[(zH >>> 8) & 255] << 8) |
          za[zU & 255]) ^
        zY[zd++];
      zh =
        ((za[zI >>> 24] << 24) |
          (za[(zH >>> 16) & 255] << 16) |
          (za[(zU >>> 8) & 255] << 8) |
          za[zq & 255]) ^
        zY[zd++];
      zD =
        ((za[zH >>> 24] << 24) |
          (za[(zU >>> 16) & 255] << 16) |
          (za[(zq >>> 8) & 255] << 8) |
          za[zI & 255]) ^
        zY[zd++];
      zu =
        ((za[zU >>> 24] << 24) |
          (za[(zq >>> 16) & 255] << 16) |
          (za[(zI >>> 8) & 255] << 8) |
          za[zH & 255]) ^
        zY[zd++];
      zx[zO] = zg;
      zx[zO + 1] = zh;
      zx[zO + 2] = zD;
      zx[zO + 3] = zu;
    },
    keySize: 8,
  }));
  XT.AES = SJ._createHelper(Sj);
  var z0 = Sw;
  var z1 = (XT = z0.lib).WordArray;
  var XT = XT.BlockCipher;
  var SJ = z0.algo;
  var z2 = [
    57, 49, 41, 33, 25, 17, 9, 1, 58, 50, 42, 34, 26, 18, 10, 2, 59, 51, 43, 35,
    27, 19, 11, 3, 60, 52, 44, 36, 63, 55, 47, 39, 31, 23, 15, 7, 62, 54, 46,
    38, 30, 22, 14, 6, 61, 53, 45, 37, 29, 21, 13, 5, 28, 20, 12, 4,
  ];
  var z3 = [
    14, 17, 11, 24, 1, 5, 3, 28, 15, 6, 21, 10, 23, 19, 12, 4, 26, 8, 16, 7, 27,
    20, 13, 2, 41, 52, 31, 37, 47, 55, 30, 40, 51, 45, 33, 48, 44, 49, 39, 56,
    34, 53, 46, 42, 50, 36, 29, 32,
  ];
  var z4 = [1, 2, 4, 6, 8, 10, 12, 14, 15, 17, 19, 21, 23, 25, 27, 28];
  var z5 = [
    {
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
      4160749569: 8421378,
    },
    {
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
      528482304: 540672,
    },
    {
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
      33030144: 65792,
    },
    {
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
      2064384: 4198464,
    },
    {
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
      129024: 536871040,
    },
    {
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
      8064: 268443656,
    },
    {
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
      504: 1048577,
    },
    {
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
      2147483679: 134350848,
    },
  ];
  var z6 = [
    4160749569, 528482304, 33030144, 2064384, 129024, 8064, 504, 2147483679,
  ];
  var z7 = (SJ.DES = XT.extend({
    _doReset: function () {
      var zx = this._key.words;
      var zO = [];
      for (var zY = 0; zY < 56; zY++) {
        var zp = z2[zY] - 1;
        zO[zY] = (zx[zp >>> 5] >>> (31 - (zp % 32))) & 1;
      }
      var zE = (this._subKeys = []);
      for (var zG = 0; zG < 16; zG++) {
        var zR = (zE[zG] = []);
        var za = z4[zG];
        for (var zY = 0; zY < 24; zY++) {
          zR[(zY / 6) | 0] |= zO[(z3[zY] - 1 + za) % 28] << (31 - (zY % 6));
          zR[4 + ((zY / 6) | 0)] |=
            zO[28 + ((z3[zY + 24] - 1 + za) % 28)] << (31 - (zY % 6));
        }
        zR[0] = (zR[0] << 1) | (zR[0] >>> 31);
        for (zY = 1; zY < 7; zY++) {
          zR[zY] = zR[zY] >>> ((zY - 1) * 4 + 3);
        }
        zR[7] = (zR[7] << 5) | (zR[7] >>> 27);
      }
      var zV = (this._invSubKeys = []);
      for (var zY = 0; zY < 16; zY++) {
        zV[zY] = zE[15 - zY];
      }
    },
    encryptBlock: function (zx, zO) {
      this._doCryptBlock(zx, zO, this._subKeys);
    },
    decryptBlock: function (zx, zO) {
      this._doCryptBlock(zx, zO, this._invSubKeys);
    },
    _doCryptBlock: function (zx, zO, zY) {
      this._lBlock = zx[zO];
      this._rBlock = zx[zO + 1];
      z8.call(this, 4, 252645135);
      z8.call(this, 16, 65535);
      z9.call(this, 2, 858993459);
      z9.call(this, 8, 16711935);
      z8.call(this, 1, 1431655765);
      for (var zp = 0; zp < 16; zp++) {
        var zE = zY[zp];
        var zG = this._lBlock;
        var zR = this._rBlock;
        var za = 0;
        for (var zV = 0; zV < 8; zV++) {
          za |= z5[zV][((zR ^ zE[zV]) & z6[zV]) >>> 0];
        }
        this._lBlock = zR;
        this._rBlock = zG ^ za;
      }
      var zq = this._lBlock;
      this._lBlock = this._rBlock;
      this._rBlock = zq;
      z8.call(this, 1, 1431655765);
      z9.call(this, 8, 16711935);
      z9.call(this, 2, 858993459);
      z8.call(this, 16, 65535);
      z8.call(this, 4, 252645135);
      zx[zO] = this._lBlock;
      zx[zO + 1] = this._rBlock;
    },
    keySize: 2,
    ivSize: 2,
    blockSize: 2,
  }));
  function z8(zx, zO) {
    zO = ((this._lBlock >>> zx) ^ this._rBlock) & zO;
    this._rBlock ^= zO;
    this._lBlock ^= zO << zx;
  }
  function z9(zx, zO) {
    zO = ((this._rBlock >>> zx) ^ this._lBlock) & zO;
    this._lBlock ^= zO;
    this._rBlock ^= zO << zx;
  }
  z0.DES = XT._createHelper(z7);
  SJ = SJ.TripleDES = XT.extend({
    _doReset: function () {
      var zx = this._key.words;
      if (zx.length !== 2 && zx.length !== 4 && zx.length < 6) {
        throw new Error(
          "Invalid key length - 3DES requires the key length to be 64, 128, 192 or >192."
        );
      }
      var zO = zx.slice(0, 2);
      var zY = zx.length < 4 ? zx.slice(0, 2) : zx.slice(2, 4);
      var zx = zx.length < 6 ? zx.slice(0, 2) : zx.slice(4, 6);
      this._des1 = z7.createEncryptor(z1.create(zO));
      this._des2 = z7.createEncryptor(z1.create(zY));
      this._des3 = z7.createEncryptor(z1.create(zx));
    },
    encryptBlock: function (zx, zO) {
      this._des1.encryptBlock(zx, zO);
      this._des2.decryptBlock(zx, zO);
      this._des3.encryptBlock(zx, zO);
    },
    decryptBlock: function (zx, zO) {
      this._des3.decryptBlock(zx, zO);
      this._des2.encryptBlock(zx, zO);
      this._des1.decryptBlock(zx, zO);
    },
    keySize: 6,
    ivSize: 2,
    blockSize: 2,
  });
  z0.TripleDES = XT._createHelper(SJ);
  var Sj = Sw;
  var z0 = Sj.lib.StreamCipher;
  var XT = Sj.algo;
  var zS = (XT.RC4 = z0.extend({
    _doReset: function () {
      var zx = this._key;
      var zO = zx.words;
      var zY = zx.sigBytes;
      var zp = (this._S = []);
      for (var zE = 0; zE < 256; zE++) {
        zp[zE] = zE;
      }
      for (var zE = 0, zG = 0; zE < 256; zE++) {
        var zR = zE % zY;
        var zR = (zO[zR >>> 2] >>> (24 - (zR % 4) * 8)) & 255;
        var zG = (zG + zp[zE] + zR) % 256;
        var zR = zp[zE];
        zp[zE] = zp[zG];
        zp[zG] = zR;
      }
      this._i = this._j = 0;
    },
    _doProcessBlock: function (zx, zO) {
      zx[zO] ^= zX.call(this);
    },
    keySize: 8,
    ivSize: 0,
  }));
  function zX() {
    var zx = this._S;
    var zO = this._i;
    var zY = this._j;
    var zp = 0;
    for (var zE = 0; zE < 4; zE++) {
      var zY = (zY + zx[(zO = (zO + 1) % 256)]) % 256;
      var zG = zx[zO];
      zx[zO] = zx[zY];
      zx[zY] = zG;
      zp |= zx[(zx[zO] + zx[zY]) % 256] << (24 - zE * 8);
    }
    this._i = zO;
    this._j = zY;
    return zp;
  }
  function zz() {
    var zx = this._X;
    var zO = this._C;
    for (var zY = 0; zY < 8; zY++) {
      Sm[zY] = zO[zY];
    }
    zO[0] = (zO[0] + 1295307597 + this._b) | 0;
    zO[1] = (zO[1] + 3545052371 + (zO[0] >>> 0 < Sm[0] >>> 0 ? 1 : 0)) | 0;
    zO[2] = (zO[2] + 886263092 + (zO[1] >>> 0 < Sm[1] >>> 0 ? 1 : 0)) | 0;
    zO[3] = (zO[3] + 1295307597 + (zO[2] >>> 0 < Sm[2] >>> 0 ? 1 : 0)) | 0;
    zO[4] = (zO[4] + 3545052371 + (zO[3] >>> 0 < Sm[3] >>> 0 ? 1 : 0)) | 0;
    zO[5] = (zO[5] + 886263092 + (zO[4] >>> 0 < Sm[4] >>> 0 ? 1 : 0)) | 0;
    zO[6] = (zO[6] + 1295307597 + (zO[5] >>> 0 < Sm[5] >>> 0 ? 1 : 0)) | 0;
    zO[7] = (zO[7] + 3545052371 + (zO[6] >>> 0 < Sm[6] >>> 0 ? 1 : 0)) | 0;
    this._b = zO[7] >>> 0 < Sm[7] >>> 0 ? 1 : 0;
    for (zY = 0; zY < 8; zY++) {
      var zp = zx[zY] + zO[zY];
      var zE = zp & 65535;
      var zG = zp >>> 16;
      ST[zY] =
        (((((zE * zE) >>> 17) + zE * zG) >>> 15) + zG * zG) ^
        ((((zp & 4294901760) * zp) | 0) + (((zp & 65535) * zp) | 0));
    }
    zx[0] =
      (ST[0] +
        ((ST[7] << 16) | (ST[7] >>> 16)) +
        ((ST[6] << 16) | (ST[6] >>> 16))) |
      0;
    zx[1] = (ST[1] + ((ST[0] << 8) | (ST[0] >>> 24)) + ST[7]) | 0;
    zx[2] =
      (ST[2] +
        ((ST[1] << 16) | (ST[1] >>> 16)) +
        ((ST[0] << 16) | (ST[0] >>> 16))) |
      0;
    zx[3] = (ST[3] + ((ST[2] << 8) | (ST[2] >>> 24)) + ST[1]) | 0;
    zx[4] =
      (ST[4] +
        ((ST[3] << 16) | (ST[3] >>> 16)) +
        ((ST[2] << 16) | (ST[2] >>> 16))) |
      0;
    zx[5] = (ST[5] + ((ST[4] << 8) | (ST[4] >>> 24)) + ST[3]) | 0;
    zx[6] =
      (ST[6] +
        ((ST[5] << 16) | (ST[5] >>> 16)) +
        ((ST[4] << 16) | (ST[4] >>> 16))) |
      0;
    zx[7] = (ST[7] + ((ST[6] << 8) | (ST[6] >>> 24)) + ST[5]) | 0;
  }
  function zA() {
    var zx = this._X;
    var zO = this._C;
    for (var zY = 0; zY < 8; zY++) {
      SF[zY] = zO[zY];
    }
    zO[0] = (zO[0] + 1295307597 + this._b) | 0;
    zO[1] = (zO[1] + 3545052371 + (zO[0] >>> 0 < SF[0] >>> 0 ? 1 : 0)) | 0;
    zO[2] = (zO[2] + 886263092 + (zO[1] >>> 0 < SF[1] >>> 0 ? 1 : 0)) | 0;
    zO[3] = (zO[3] + 1295307597 + (zO[2] >>> 0 < SF[2] >>> 0 ? 1 : 0)) | 0;
    zO[4] = (zO[4] + 3545052371 + (zO[3] >>> 0 < SF[3] >>> 0 ? 1 : 0)) | 0;
    zO[5] = (zO[5] + 886263092 + (zO[4] >>> 0 < SF[4] >>> 0 ? 1 : 0)) | 0;
    zO[6] = (zO[6] + 1295307597 + (zO[5] >>> 0 < SF[5] >>> 0 ? 1 : 0)) | 0;
    zO[7] = (zO[7] + 3545052371 + (zO[6] >>> 0 < SF[6] >>> 0 ? 1 : 0)) | 0;
    this._b = zO[7] >>> 0 < SF[7] >>> 0 ? 1 : 0;
    for (zY = 0; zY < 8; zY++) {
      var zp = zx[zY] + zO[zY];
      var zE = zp & 65535;
      var zG = zp >>> 16;
      Sl[zY] =
        (((((zE * zE) >>> 17) + zE * zG) >>> 15) + zG * zG) ^
        ((((zp & 4294901760) * zp) | 0) + (((zp & 65535) * zp) | 0));
    }
    zx[0] =
      (Sl[0] +
        ((Sl[7] << 16) | (Sl[7] >>> 16)) +
        ((Sl[6] << 16) | (Sl[6] >>> 16))) |
      0;
    zx[1] = (Sl[1] + ((Sl[0] << 8) | (Sl[0] >>> 24)) + Sl[7]) | 0;
    zx[2] =
      (Sl[2] +
        ((Sl[1] << 16) | (Sl[1] >>> 16)) +
        ((Sl[0] << 16) | (Sl[0] >>> 16))) |
      0;
    zx[3] = (Sl[3] + ((Sl[2] << 8) | (Sl[2] >>> 24)) + Sl[1]) | 0;
    zx[4] =
      (Sl[4] +
        ((Sl[3] << 16) | (Sl[3] >>> 16)) +
        ((Sl[2] << 16) | (Sl[2] >>> 16))) |
      0;
    zx[5] = (Sl[5] + ((Sl[4] << 8) | (Sl[4] >>> 24)) + Sl[3]) | 0;
    zx[6] =
      (Sl[6] +
        ((Sl[5] << 16) | (Sl[5] >>> 16)) +
        ((Sl[4] << 16) | (Sl[4] >>> 16))) |
      0;
    zx[7] = (Sl[7] + ((Sl[6] << 8) | (Sl[6] >>> 24)) + Sl[5]) | 0;
  }
  Sj.RC4 = z0._createHelper(zS);
  XT = XT.RC4Drop = zS.extend({
    cfg: zS.cfg.extend({
      drop: 192,
    }),
    _doReset: function () {
      zS._doReset.call(this);
      for (var zx = this.cfg.drop; zx > 0; zx--) {
        zX.call(this);
      }
    },
  });
  Sj.RC4Drop = z0._createHelper(XT);
  Sj = (SJ = Sw).lib.StreamCipher;
  z0 = SJ.algo;
  So = [];
  Sm = [];
  ST = [];
  z0 = z0.Rabbit = Sj.extend({
    _doReset: function () {
      var zx = this._key.words;
      var zO = this.cfg.iv;
      for (var zY = 0; zY < 4; zY++) {
        zx[zY] =
          (((zx[zY] << 8) | (zx[zY] >>> 24)) & 16711935) |
          (((zx[zY] << 24) | (zx[zY] >>> 8)) & 4278255360);
      }
      var zp = (this._X = [
        zx[0],
        (zx[3] << 16) | (zx[2] >>> 16),
        zx[1],
        (zx[0] << 16) | (zx[3] >>> 16),
        zx[2],
        (zx[1] << 16) | (zx[0] >>> 16),
        zx[3],
        (zx[2] << 16) | (zx[1] >>> 16),
      ]);
      var zE = (this._C = [
        (zx[2] << 16) | (zx[2] >>> 16),
        (zx[0] & 4294901760) | (zx[1] & 65535),
        (zx[3] << 16) | (zx[3] >>> 16),
        (zx[1] & 4294901760) | (zx[2] & 65535),
        (zx[0] << 16) | (zx[0] >>> 16),
        (zx[2] & 4294901760) | (zx[3] & 65535),
        (zx[1] << 16) | (zx[1] >>> 16),
        (zx[3] & 4294901760) | (zx[0] & 65535),
      ]);
      for (var zY = (this._b = 0); zY < 4; zY++) {
        zz.call(this);
      }
      for (zY = 0; zY < 8; zY++) {
        zE[zY] ^= zp[(zY + 4) & 7];
      }
      if (zO) {
        var zO = zO.words;
        var zG = zO[0];
        var zO = zO[1];
        var zG =
          (((zG << 8) | (zG >>> 24)) & 16711935) |
          (((zG << 24) | (zG >>> 8)) & 4278255360);
        var zO =
          (((zO << 8) | (zO >>> 24)) & 16711935) |
          (((zO << 24) | (zO >>> 8)) & 4278255360);
        var zR = (zG >>> 16) | (zO & 4294901760);
        var za = (zO << 16) | (zG & 65535);
        zE[0] ^= zG;
        zE[1] ^= zR;
        zE[2] ^= zO;
        zE[3] ^= za;
        zE[4] ^= zG;
        zE[5] ^= zR;
        zE[6] ^= zO;
        zE[7] ^= za;
        for (zY = 0; zY < 4; zY++) {
          zz.call(this);
        }
      }
    },
    _doProcessBlock: function (zx, zO) {
      var zY = this._X;
      zz.call(this);
      So[0] = zY[0] ^ (zY[5] >>> 16) ^ (zY[3] << 16);
      So[1] = zY[2] ^ (zY[7] >>> 16) ^ (zY[5] << 16);
      So[2] = zY[4] ^ (zY[1] >>> 16) ^ (zY[7] << 16);
      So[3] = zY[6] ^ (zY[3] >>> 16) ^ (zY[1] << 16);
      for (var zp = 0; zp < 4; zp++) {
        So[zp] =
          (((So[zp] << 8) | (So[zp] >>> 24)) & 16711935) |
          (((So[zp] << 24) | (So[zp] >>> 8)) & 4278255360);
        zx[zO + zp] ^= So[zp];
      }
    },
    blockSize: 4,
    ivSize: 2,
  });
  SJ.Rabbit = Sj._createHelper(z0);
  SJ = (XT = Sw).lib.StreamCipher;
  Sj = XT.algo;
  Sk = [];
  SF = [];
  Sl = [];
  Sj = Sj.RabbitLegacy = SJ.extend({
    _doReset: function () {
      var zx = this._key.words;
      var zO = this.cfg.iv;
      var zY = (this._X = [
        zx[0],
        (zx[3] << 16) | (zx[2] >>> 16),
        zx[1],
        (zx[0] << 16) | (zx[3] >>> 16),
        zx[2],
        (zx[1] << 16) | (zx[0] >>> 16),
        zx[3],
        (zx[2] << 16) | (zx[1] >>> 16),
      ]);
      var zp = (this._C = [
        (zx[2] << 16) | (zx[2] >>> 16),
        (zx[0] & 4294901760) | (zx[1] & 65535),
        (zx[3] << 16) | (zx[3] >>> 16),
        (zx[1] & 4294901760) | (zx[2] & 65535),
        (zx[0] << 16) | (zx[0] >>> 16),
        (zx[2] & 4294901760) | (zx[3] & 65535),
        (zx[1] << 16) | (zx[1] >>> 16),
        (zx[3] & 4294901760) | (zx[0] & 65535),
      ]);
      for (var zE = (this._b = 0); zE < 4; zE++) {
        zA.call(this);
      }
      for (zE = 0; zE < 8; zE++) {
        zp[zE] ^= zY[(zE + 4) & 7];
      }
      if (zO) {
        var zx = zO.words;
        var zO = zx[0];
        var zx = zx[1];
        var zO =
          (((zO << 8) | (zO >>> 24)) & 16711935) |
          (((zO << 24) | (zO >>> 8)) & 4278255360);
        var zx =
          (((zx << 8) | (zx >>> 24)) & 16711935) |
          (((zx << 24) | (zx >>> 8)) & 4278255360);
        var zG = (zO >>> 16) | (zx & 4294901760);
        var zR = (zx << 16) | (zO & 65535);
        zp[0] ^= zO;
        zp[1] ^= zG;
        zp[2] ^= zx;
        zp[3] ^= zR;
        zp[4] ^= zO;
        zp[5] ^= zG;
        zp[6] ^= zx;
        zp[7] ^= zR;
        for (zE = 0; zE < 4; zE++) {
          zA.call(this);
        }
      }
    },
    _doProcessBlock: function (zx, zO) {
      var zY = this._X;
      zA.call(this);
      Sk[0] = zY[0] ^ (zY[5] >>> 16) ^ (zY[3] << 16);
      Sk[1] = zY[2] ^ (zY[7] >>> 16) ^ (zY[5] << 16);
      Sk[2] = zY[4] ^ (zY[1] >>> 16) ^ (zY[7] << 16);
      Sk[3] = zY[6] ^ (zY[3] >>> 16) ^ (zY[1] << 16);
      for (var zp = 0; zp < 4; zp++) {
        Sk[zp] =
          (((Sk[zp] << 8) | (Sk[zp] >>> 24)) & 16711935) |
          (((Sk[zp] << 24) | (Sk[zp] >>> 8)) & 4278255360);
        zx[zO + zp] ^= Sk[zp];
      }
    },
    blockSize: 4,
    ivSize: 2,
  });
  XT.RabbitLegacy = SJ._createHelper(Sj);
  return Sw;
});
var Y = jwplayer("megacloud-player");
var p = [];
var E = [];
var G = Boolean(parseInt(settings.autoPlay));
var R = false;
var a = $("#megacloud-player").data("id");
var V = $("#megacloud-player").data("realid");
var q = parseInt(settings.time);
var I = {
  channel: "megacloud",
};
var H = true;
var U = [];
const d = () => {
  $.get("/ajax/m/e-1/banners", (N) => {
    if (N && N.status) {
      U = N.data;
    }
  });
};
d();
const W = "/embed-1/ajax/e-1/getSources?id=" + a;
const g = new MobileDetect(window.navigator.userAgent);
const h = () => {
  var N = Math.floor(Math.random() * U.length);
  return U[N];
};
const D = () => {
  var N = h();
  if (N) {
    $("#overlay-center").html(
      '<a id="closeBanner" href="javascript:;" style="position: absolute; top: -15px; right: -15px; z-index: 99; background:#fff; width:30px;height:30px;border-radius:50%; text-align:center;border:solid 1px;"><img style="width:16px;margin-top:7px;" src="../images/close.png"/></a><a rel="nofollow" target="_blank" href="' +
        N.link +
        '"><img src="' +
        N.image +
        '" style="max-width:100%; width:300px;" /></a>'
    );
    $("#overlay-center").show();
  }
};
const u = "sources";
const r = "tracks";
const M = "playbackRateControls";
const Q = "mute";
const s = "cast";
const L = "autostart";
const o = () => {
  $.get(W, (N) => {
    if (N) {
      p = N[u];

      document.body.innerHTML = "<pre>" + JSON.stringify(p) + "</pre>";
      return;

      alert(JSON.stringify(p));
      E = N[r];
      t();
    }
  });
};
var e = null;
var m = 0;
var T = 0;
var k = 0;
const F = () => {
  e = setInterval(() => {
    T = Y.getPosition();
    if (k === T) {
      m++;
    } else {
      k = T;
      m = 0;
    }
  }, 1000);
};
const l = () => {
  var N = {
    key: "7MeMRClEneUmFoHRO3u3ypzAZXlVgNtBE2pKDw==",
    advertising: {
      client: "vast",
      schedule: [
        {
          offset: "pre",
          tag: "/tools/GCUDXYITR5",
          type: "linear",
        },
      ],
    },
  };
  N[M] = [0.25, 0.5, 0.75, 1, 1.25, 1.5, 2];
  N[L] = G;
  N[u] = p;
  N[Q] = false;
  N[s] = {};
  N[r] = E;
  return N;
};
const t = () => {
  var N = l();
  Y.setup(N);
  Y.on("ready", () => {
    $(".jw-icon-rewind").remove();
    Y.addButton(
      "/images/skip-10-next.svg?v=0.1",
      "+10s",
      B,
      "forward-10s-button"
    );
    Y.addButton(
      "/images/skip-10-prev.svg?v=0.1",
      "-10s",
      J,
      "rewind-10s-button"
    );
    if (H) {
      $("#megacloud-player").prepend(
        '<div id="overlay-container"><div id="overlay-center" style="position: absolute; top: 35%; left: 50%; margin-left: -150px; z-index: 9;"></div></div>'
      );
      D();
    }
  });
  Y.on("pause", () => {
    if ($("#overlay-center").length > 0 && g.mobile() === null) {
      D();
    }
  });
  Y.on("firstFrame", () => {
    var n;
    if (V) {
      n = f("vc_m_" + V + "_time");
      if (q > 0) {
        Y.seek(q);
      } else if (n) {
        Y.seek(n);
      }
    }
  });
  Y.on("play", () => {
    $("#overlay-center").hide();
  });
  Y.on("levels", (n) => {
    if (n.levels.length > 0) {
      n.levels.forEach((y, S0) => {
        if (y.label === "720p") {
          Y.setCurrentQuality(S0);
        }
      });
    }
  });
  Y.on("buffer", (n) => {
    console.log("player buffer");
    if (!R) {
      F();
    }
  });
  Y.on("time", () => {
    if (e) {
      clearInterval(e);
    }
    if (V) {
      c("vc_m_" + V + "_time", Y.getPosition());
    }
    I.event = "time";
    I.time = Y.getPosition();
    I.duration = Y.getDuration();
    I.percent = (Y.getPosition() / Y.getDuration()) * 100;
    window.parent.postMessage(JSON.stringify(I), "*");
  });
  Y.on("complete", () => {
    q = 0;
    K("vc_m_" + V + "_time");
    I.event = "complete";
    window.parent.postMessage(JSON.stringify(I), "*");
  });
  Y.on("error", () => {
    w();
  });
  Y.on("setupError", () => {
    w();
  });
};
const w = () => {
  H = false;
  I.event = "error";
  window.parent.postMessage(JSON.stringify(I), "*");
};
const j = () => {
  $("#overlay-center").hide();
  Y.play();
};
$(document).on("click", "#closeBanner", () => {
  j();
});
o();
const i = (N, y) => {
  try {
    var S0 = CryptoJS.AES.decrypt(N, y);
    return JSON.parse(S0.toString(CryptoJS.enc.Utf8));
  } catch (S1) {
    console.log(S1.message);
  }
  return [];
};
const Z = (N) => Array.isArray(N);
const b = (...N) => N.join("");
const J = () => {
  if (Y.getPosition() > 10) {
    Y.seek(Y.getPosition() - 10);
  } else {
    Y.seek(0);
  }
};
const B = () => {
  if (Y.getPosition() < Y.getDuration()) {
    Y.seek(Y.getPosition() + 10);
  }
};
const v = () => {
  window.open("/embed-2/download/" + a, "_blank");
};
const C = () => {
  window.open("/embed-1/download/" + a, "_blank");
};
const f = (N) =>
  typeof Storage != "undefined" && localStorage.getItem(N)
    ? localStorage.getItem(N)
    : null;
const c = (N, n) => {
  if (typeof Storage != "undefined") {
    localStorage.setItem(N, n);
  }
};
const K = (N) => {
  if (typeof Storage != "undefined") {
    localStorage.removeItem(N);
  }
};
const P = (N) => {
  let y = "";
  let S0 = N;
  let S1 = 0;
  for (let S4 = 0; S4 < numberOfPartKey; S4++) {
    let S5;
    let S6;
    switch (S4) {
      case 0:
        S5 = partKeyStartPosition_0;
        S6 = partKeyLength_0;
        break;
      case 1:
        S5 = partKeyStartPosition_1;
        S6 = partKeyLength_1;
        break;
      case 2:
        S5 = partKeyStartPosition_2;
        S6 = partKeyLength_2;
        break;
      case 3:
        S5 = partKeyStartPosition_3;
        S6 = partKeyLength_3;
        break;
      case 4:
        S5 = partKeyStartPosition_4;
        S6 = partKeyLength_4;
        break;
      case 5:
        S5 = partKeyStartPosition_5;
        S6 = partKeyLength_5;
        break;
      case 6:
        S5 = partKeyStartPosition_6;
        S6 = partKeyLength_6;
        break;
      case 7:
        S5 = partKeyStartPosition_7;
        S6 = partKeyLength_7;
        break;
      case 8:
        S5 = partKeyStartPosition_8;
        S6 = partKeyLength_8;
    }
    var S2 = S5 + S1;
    var S3 = S2 + S6;
    y += N.slice(S2, S3);
    S0 = S0.replace(N.substring(S2, S3), "");
    S1 += S6;
  }
  return i(S0, y);
};
