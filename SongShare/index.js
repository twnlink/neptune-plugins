var ne=(n=>typeof require<"u"?require:typeof Proxy<"u"?new Proxy(n,{get:(e,r)=>(typeof require<"u"?require:e)[r]}):n)(function(n){if(typeof require<"u")return require.apply(this,arguments);throw Error('Dynamic require of "'+n+'" is not supported')});var X=(n,e)=>()=>(e||n((e={exports:{}}).exports,e),e.exports);var Le=X(oe=>{"use strict";oe.toString=function(n){switch(n){case 1:return"A";case 10:return"NULL";case 28:return"AAAA";case 18:return"AFSDB";case 42:return"APL";case 257:return"CAA";case 60:return"CDNSKEY";case 59:return"CDS";case 37:return"CERT";case 5:return"CNAME";case 49:return"DHCID";case 32769:return"DLV";case 39:return"DNAME";case 48:return"DNSKEY";case 43:return"DS";case 55:return"HIP";case 13:return"HINFO";case 45:return"IPSECKEY";case 25:return"KEY";case 36:return"KX";case 29:return"LOC";case 15:return"MX";case 35:return"NAPTR";case 2:return"NS";case 47:return"NSEC";case 50:return"NSEC3";case 51:return"NSEC3PARAM";case 12:return"PTR";case 46:return"RRSIG";case 17:return"RP";case 24:return"SIG";case 6:return"SOA";case 99:return"SPF";case 33:return"SRV";case 44:return"SSHFP";case 32768:return"TA";case 249:return"TKEY";case 52:return"TLSA";case 250:return"TSIG";case 16:return"TXT";case 252:return"AXFR";case 251:return"IXFR";case 41:return"OPT";case 255:return"ANY"}return"UNKNOWN_"+n};oe.toType=function(n){switch(n.toUpperCase()){case"A":return 1;case"NULL":return 10;case"AAAA":return 28;case"AFSDB":return 18;case"APL":return 42;case"CAA":return 257;case"CDNSKEY":return 60;case"CDS":return 59;case"CERT":return 37;case"CNAME":return 5;case"DHCID":return 49;case"DLV":return 32769;case"DNAME":return 39;case"DNSKEY":return 48;case"DS":return 43;case"HIP":return 55;case"HINFO":return 13;case"IPSECKEY":return 45;case"KEY":return 25;case"KX":return 36;case"LOC":return 29;case"MX":return 15;case"NAPTR":return 35;case"NS":return 2;case"NSEC":return 47;case"NSEC3":return 50;case"NSEC3PARAM":return 51;case"PTR":return 12;case"RRSIG":return 46;case"RP":return 17;case"SIG":return 24;case"SOA":return 6;case"SPF":return 99;case"SRV":return 33;case"SSHFP":return 44;case"TA":return 32768;case"TKEY":return 249;case"TLSA":return 52;case"TSIG":return 250;case"TXT":return 16;case"AXFR":return 252;case"IXFR":return 251;case"OPT":return 41;case"ANY":return 255;case"*":return 255}return n.toUpperCase().startsWith("UNKNOWN_")?parseInt(n.slice(8)):0}});var me=X(le=>{"use strict";le.toString=function(n){switch(n){case 0:return"NOERROR";case 1:return"FORMERR";case 2:return"SERVFAIL";case 3:return"NXDOMAIN";case 4:return"NOTIMP";case 5:return"REFUSED";case 6:return"YXDOMAIN";case 7:return"YXRRSET";case 8:return"NXRRSET";case 9:return"NOTAUTH";case 10:return"NOTZONE";case 11:return"RCODE_11";case 12:return"RCODE_12";case 13:return"RCODE_13";case 14:return"RCODE_14";case 15:return"RCODE_15"}return"RCODE_"+n};le.toRcode=function(n){switch(n.toUpperCase()){case"NOERROR":return 0;case"FORMERR":return 1;case"SERVFAIL":return 2;case"NXDOMAIN":return 3;case"NOTIMP":return 4;case"REFUSED":return 5;case"YXDOMAIN":return 6;case"YXRRSET":return 7;case"NXRRSET":return 8;case"NOTAUTH":return 9;case"NOTZONE":return 10;case"RCODE_11":return 11;case"RCODE_12":return 12;case"RCODE_13":return 13;case"RCODE_14":return 14;case"RCODE_15":return 15}return 0}});var Be=X(ge=>{"use strict";ge.toString=function(n){switch(n){case 0:return"QUERY";case 1:return"IQUERY";case 2:return"STATUS";case 3:return"OPCODE_3";case 4:return"NOTIFY";case 5:return"UPDATE";case 6:return"OPCODE_6";case 7:return"OPCODE_7";case 8:return"OPCODE_8";case 9:return"OPCODE_9";case 10:return"OPCODE_10";case 11:return"OPCODE_11";case 12:return"OPCODE_12";case 13:return"OPCODE_13";case 14:return"OPCODE_14";case 15:return"OPCODE_15"}return"OPCODE_"+n};ge.toOpcode=function(n){switch(n.toUpperCase()){case"QUERY":return 0;case"IQUERY":return 1;case"STATUS":return 2;case"OPCODE_3":return 3;case"NOTIFY":return 4;case"UPDATE":return 5;case"OPCODE_6":return 6;case"OPCODE_7":return 7;case"OPCODE_8":return 8;case"OPCODE_9":return 9;case"OPCODE_10":return 10;case"OPCODE_11":return 11;case"OPCODE_12":return 12;case"OPCODE_13":return 13;case"OPCODE_14":return 14;case"OPCODE_15":return 15}return 0}});var Se=X(se=>{"use strict";se.toString=function(n){switch(n){case 1:return"IN";case 2:return"CS";case 3:return"CH";case 4:return"HS";case 255:return"ANY"}return"UNKNOWN_"+n};se.toClass=function(n){switch(n.toUpperCase()){case"IN":return 1;case"CS":return 2;case"CH":return 3;case"HS":return 4;case"ANY":return 255}return 0}});var Ce=X(ue=>{"use strict";ue.toString=function(n){switch(n){case 1:return"LLQ";case 2:return"UL";case 3:return"NSID";case 5:return"DAU";case 6:return"DHU";case 7:return"N3U";case 8:return"CLIENT_SUBNET";case 9:return"EXPIRE";case 10:return"COOKIE";case 11:return"TCP_KEEPALIVE";case 12:return"PADDING";case 13:return"CHAIN";case 14:return"KEY_TAG";case 26946:return"DEVICEID"}return n<0?null:`OPTION_${n}`};ue.toCode=function(n){if(typeof n=="number")return n;if(!n)return-1;switch(n.toUpperCase()){case"OPTION_0":return 0;case"LLQ":return 1;case"UL":return 2;case"NSID":return 3;case"OPTION_4":return 4;case"DAU":return 5;case"DHU":return 6;case"N3U":return 7;case"CLIENT_SUBNET":return 8;case"EXPIRE":return 9;case"COOKIE":return 10;case"TCP_KEEPALIVE":return 11;case"PADDING":return 12;case"CHAIN":return 13;case"KEY_TAG":return 14;case"DEVICEID":return 26946;case"OPTION_65535":return 65535}let e=n.match(/_(\d+)$/);return e?parseInt(e[1],10):-1}});var Te=X((ve,ye)=>{var Ae=function(n){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.decode=g,n.encode=v,n.familyOf=U,n.name=void 0,n.sizeOf=O,n.v6=n.v4=void 0;let e=/^(\d{1,3}\.){3,3}\d{1,3}$/,r=4,c=/^(::)?(((\d{1,3}\.){3}(\d{1,3}){1})?([0-9a-f]){0,4}:{0,2}){1,8}(::)?$/i,t=16,i={name:"v4",size:r,isFormat:l=>e.test(l),encode(l,o,d){d=~~d,o=o||new Uint8Array(d+r);let E=l.length,w=0;for(let T=0;T<E;){let P=l.charCodeAt(T++);P===46?(o[d++]=w,w=0):w=w*10+(P-48)}return o[d]=w,o},decode(l,o){return o=~~o,`${l[o++]}.${l[o++]}.${l[o++]}.${l[o]}`}};n.v4=i;let y={name:"v6",size:t,isFormat:l=>l.length>0&&c.test(l),encode(l,o,d){d=~~d;let E=d+t,w=-1,T=0,P=0,ce=!0,ie=!1;o=o||new Uint8Array(d+t);for(let b=0;b<l.length;b++){let Y=l.charCodeAt(b);Y===58?(ce?w!==-1?(d<E&&(o[d]=0),d<E-1&&(o[d+1]=0),d+=2):d<E&&(w=d):(ie===!0?(d<E&&(o[d]=P),d++):(d<E&&(o[d]=T>>8),d<E-1&&(o[d+1]=T&255),d+=2),T=0,P=0),ce=!0,ie=!1):Y===46?(d<E&&(o[d]=P),d++,P=0,T=0,ce=!1,ie=!0):(ce=!1,Y>=97?Y-=87:Y>=65?Y-=55:(Y-=48,P=P*10+Y),T=(T<<4)+Y)}if(ce===!1)ie===!0?(d<E&&(o[d]=P),d++):(d<E&&(o[d]=T>>8),d<E-1&&(o[d+1]=T&255),d+=2);else if(w===0)d<E&&(o[d]=0),d<E-1&&(o[d+1]=0),d+=2;else if(w!==-1){d+=2;for(let b=Math.min(d-1,E-1);b>=w+2;b--)o[b]=o[b-2];o[w]=0,o[w+1]=0,w=d}if(w!==d&&w!==-1)for(d>E-2&&(d=E-2);E>w;)o[--E]=d<E&&d>w?o[--d]:0;else for(;d<E;)o[d++]=0;return o},decode(l,o){o=~~o;let d="";for(let E=0;E<t;E+=2)E!==0&&(d+=":"),d+=(l[o+E]<<8|l[o+E+1]).toString(16);return d.replace(/(^|:)0(:0)*:0(:|$)/,"$1::$3").replace(/:{3,4}/,"::")}};n.v6=y;let I="ip";n.name=I;function O(l){if(i.isFormat(l))return i.size;if(y.isFormat(l))return y.size;throw Error(`Invalid ip address: ${l}`)}function U(l){return O(l)===i.size?1:2}function v(l,o,d){d=~~d;let E=O(l);return typeof o=="function"&&(o=o(d+E)),E===i.size?i.encode(l,o,d):y.encode(l,o,d)}function g(l,o,d){if(o=~~o,d=d||l.length-o,d===i.size)return i.decode(l,o,d);if(d===y.size)return y.decode(l,o,d);throw Error(`Invalid buffer size needs to be ${i.size} for v4 or ${y.size} for v6.`)}return"default"in n?n.default:n}({});typeof define=="function"&&define.amd?define([],function(){return Ae}):typeof ye=="object"&&typeof ve=="object"&&(ye.exports=Ae)});var Re=X(s=>{"use strict";var u=ne("buffer").Buffer,J=Le(),Ke=me(),Ye=Be(),ae=Se(),he=Ce(),ee=Te(),Xe=0,Ne=32768,Ee=32768,qe=~Ee,De=32768,ze=~De,a=s.name={};a.encode=function(n,e,r){e||(e=u.alloc(a.encodingLength(n))),r||(r=0);let c=r,t=n.replace(/^\.|\.$/gm,"");if(t.length){let i=t.split(".");for(let y=0;y<i.length;y++){let I=e.write(i[y],r+1);e[r]=I,r+=I+1}}return e[r++]=0,a.encode.bytes=r-c,e};a.encode.bytes=0;a.decode=function(n,e){e||(e=0);let r=[],c=e,t=0,i=0,y=!1;for(;;){if(e>=n.length)throw new Error("Cannot decode name (buffer overflow)");let I=n[e++];if(i+=y?0:1,I===0)break;if(I&192)if((I&192)===192){if(e+1>n.length)throw new Error("Cannot decode name (buffer overflow)");let O=n.readUInt16BE(e-1)-49152;if(O>=c)throw new Error("Cannot decode name (bad pointer)");e=O,c=O,i+=y?0:1,y=!0}else throw new Error("Cannot decode name (bad label)");else{if(e+I>n.length)throw new Error("Cannot decode name (buffer overflow)");if(t+=I+1,t>254)throw new Error("Cannot decode name (name too long)");r.push(n.toString("utf-8",e,e+I)),e+=I,i+=y?0:I}}return a.decode.bytes=i,r.length===0?".":r.join(".")};a.decode.bytes=0;a.encodingLength=function(n){return n==="."||n===".."?1:u.byteLength(n.replace(/^\.|\.$/gm,""))+2};var h={};h.encode=function(n,e,r){e||(e=u.alloc(h.encodingLength(n))),r||(r=0);let c=e.write(n,r+1);return e[r]=c,h.encode.bytes=c+1,e};h.encode.bytes=0;h.decode=function(n,e){e||(e=0);let r=n[e],c=n.toString("utf-8",e+1,e+1+r);return h.decode.bytes=r+1,c};h.decode.bytes=0;h.encodingLength=function(n){return u.byteLength(n)+1};var R={};R.encode=function(n,e,r){e||(e=R.encodingLength(n)),r||(r=0);let c=(n.flags||0)&32767,t=n.type==="response"?Ne:Xe;return e.writeUInt16BE(n.id||0,r),e.writeUInt16BE(c|t,r+2),e.writeUInt16BE(n.questions.length,r+4),e.writeUInt16BE(n.answers.length,r+6),e.writeUInt16BE(n.authorities.length,r+8),e.writeUInt16BE(n.additionals.length,r+10),e};R.encode.bytes=12;R.decode=function(n,e){if(e||(e=0),n.length<12)throw new Error("Header must be 12 bytes");let r=n.readUInt16BE(e+2);return{id:n.readUInt16BE(e),type:r&Ne?"response":"query",flags:r&32767,flag_qr:(r>>15&1)===1,opcode:Ye.toString(r>>11&15),flag_aa:(r>>10&1)===1,flag_tc:(r>>9&1)===1,flag_rd:(r>>8&1)===1,flag_ra:(r>>7&1)===1,flag_z:(r>>6&1)===1,flag_ad:(r>>5&1)===1,flag_cd:(r>>4&1)===1,rcode:Ke.toString(r&15),questions:new Array(n.readUInt16BE(e+4)),answers:new Array(n.readUInt16BE(e+6)),authorities:new Array(n.readUInt16BE(e+8)),additionals:new Array(n.readUInt16BE(e+10))}};R.decode.bytes=12;R.encodingLength=function(){return 12};var q=s.unknown={};q.encode=function(n,e,r){return e||(e=u.alloc(q.encodingLength(n))),r||(r=0),e.writeUInt16BE(n.length,r),n.copy(e,r+2),q.encode.bytes=n.length+2,e};q.encode.bytes=0;q.decode=function(n,e){e||(e=0);let r=n.readUInt16BE(e),c=n.slice(e+2,e+2+r);return q.decode.bytes=r+2,c};q.decode.bytes=0;q.encodingLength=function(n){return n.length+2};var z=s.ns={};z.encode=function(n,e,r){return e||(e=u.alloc(z.encodingLength(n))),r||(r=0),a.encode(n,e,r+2),e.writeUInt16BE(a.encode.bytes,r),z.encode.bytes=a.encode.bytes+2,e};z.encode.bytes=0;z.decode=function(n,e){e||(e=0);let r=n.readUInt16BE(e),c=a.decode(n,e+2);return z.decode.bytes=r+2,c};z.decode.bytes=0;z.encodingLength=function(n){return a.encodingLength(n)+2};var V=s.soa={};V.encode=function(n,e,r){e||(e=u.alloc(V.encodingLength(n))),r||(r=0);let c=r;return r+=2,a.encode(n.mname,e,r),r+=a.encode.bytes,a.encode(n.rname,e,r),r+=a.encode.bytes,e.writeUInt32BE(n.serial||0,r),r+=4,e.writeUInt32BE(n.refresh||0,r),r+=4,e.writeUInt32BE(n.retry||0,r),r+=4,e.writeUInt32BE(n.expire||0,r),r+=4,e.writeUInt32BE(n.minimum||0,r),r+=4,e.writeUInt16BE(r-c-2,c),V.encode.bytes=r-c,e};V.encode.bytes=0;V.decode=function(n,e){e||(e=0);let r=e,c={};return e+=2,c.mname=a.decode(n,e),e+=a.decode.bytes,c.rname=a.decode(n,e),e+=a.decode.bytes,c.serial=n.readUInt32BE(e),e+=4,c.refresh=n.readUInt32BE(e),e+=4,c.retry=n.readUInt32BE(e),e+=4,c.expire=n.readUInt32BE(e),e+=4,c.minimum=n.readUInt32BE(e),e+=4,V.decode.bytes=e-r,c};V.decode.bytes=0;V.encodingLength=function(n){return 22+a.encodingLength(n.mname)+a.encodingLength(n.rname)};var $=s.txt={};$.encode=function(n,e,r){Array.isArray(n)||(n=[n]);for(let t=0;t<n.length;t++)if(typeof n[t]=="string"&&(n[t]=u.from(n[t])),!u.isBuffer(n[t]))throw new Error("Must be a Buffer");e||(e=u.alloc($.encodingLength(n))),r||(r=0);let c=r;return r+=2,n.forEach(function(t){e[r++]=t.length,t.copy(e,r,0,t.length),r+=t.length}),e.writeUInt16BE(r-c-2,c),$.encode.bytes=r-c,e};$.encode.bytes=0;$.decode=function(n,e){e||(e=0);let r=e,c=n.readUInt16BE(e);e+=2;let t=[];for(;c>0;){let i=n[e++];if(--c,c<i)throw new Error("Buffer overflow");t.push(n.slice(e,e+i)),e+=i,c-=i}return $.decode.bytes=e-r,t};$.decode.bytes=0;$.encodingLength=function(n){Array.isArray(n)||(n=[n]);let e=2;return n.forEach(function(r){typeof r=="string"?e+=u.byteLength(r)+1:e+=r.length+1}),e};var G=s.null={};G.encode=function(n,e,r){e||(e=u.alloc(G.encodingLength(n))),r||(r=0),typeof n=="string"&&(n=u.from(n)),n||(n=u.alloc(0));let c=r;r+=2;let t=n.length;return n.copy(e,r,0,t),r+=t,e.writeUInt16BE(r-c-2,c),G.encode.bytes=r-c,e};G.encode.bytes=0;G.decode=function(n,e){e||(e=0);let r=e,c=n.readUInt16BE(e);e+=2;let t=n.slice(e,e+c);return e+=c,G.decode.bytes=e-r,t};G.decode.bytes=0;G.encodingLength=function(n){return n?(u.isBuffer(n)?n.length:u.byteLength(n))+2:2};var Q=s.hinfo={};Q.encode=function(n,e,r){e||(e=u.alloc(Q.encodingLength(n))),r||(r=0);let c=r;return r+=2,h.encode(n.cpu,e,r),r+=h.encode.bytes,h.encode(n.os,e,r),r+=h.encode.bytes,e.writeUInt16BE(r-c-2,c),Q.encode.bytes=r-c,e};Q.encode.bytes=0;Q.decode=function(n,e){e||(e=0);let r=e,c={};return e+=2,c.cpu=h.decode(n,e),e+=h.decode.bytes,c.os=h.decode(n,e),e+=h.decode.bytes,Q.decode.bytes=e-r,c};Q.decode.bytes=0;Q.encodingLength=function(n){return h.encodingLength(n.cpu)+h.encodingLength(n.os)+2};var N=s.ptr={},Ve=s.cname=N,$e=s.dname=N;N.encode=function(n,e,r){return e||(e=u.alloc(N.encodingLength(n))),r||(r=0),a.encode(n,e,r+2),e.writeUInt16BE(a.encode.bytes,r),N.encode.bytes=a.encode.bytes+2,e};N.encode.bytes=0;N.decode=function(n,e){e||(e=0);let r=a.decode(n,e+2);return N.decode.bytes=a.decode.bytes+2,r};N.decode.bytes=0;N.encodingLength=function(n){return a.encodingLength(n)+2};var W=s.srv={};W.encode=function(n,e,r){e||(e=u.alloc(W.encodingLength(n))),r||(r=0),e.writeUInt16BE(n.priority||0,r+2),e.writeUInt16BE(n.weight||0,r+4),e.writeUInt16BE(n.port||0,r+6),a.encode(n.target,e,r+8);let c=a.encode.bytes+6;return e.writeUInt16BE(c,r),W.encode.bytes=c+2,e};W.encode.bytes=0;W.decode=function(n,e){e||(e=0);let r=n.readUInt16BE(e),c={};return c.priority=n.readUInt16BE(e+2),c.weight=n.readUInt16BE(e+4),c.port=n.readUInt16BE(e+6),c.target=a.decode(n,e+8),W.decode.bytes=r+2,c};W.decode.bytes=0;W.encodingLength=function(n){return 8+a.encodingLength(n.target)};var S=s.caa={};S.ISSUER_CRITICAL=128;S.encode=function(n,e,r){let c=S.encodingLength(n);return e||(e=u.alloc(S.encodingLength(n))),r||(r=0),n.issuerCritical&&(n.flags=S.ISSUER_CRITICAL),e.writeUInt16BE(c-2,r),r+=2,e.writeUInt8(n.flags||0,r),r+=1,h.encode(n.tag,e,r),r+=h.encode.bytes,e.write(n.value,r),r+=u.byteLength(n.value),S.encode.bytes=c,e};S.encode.bytes=0;S.decode=function(n,e){e||(e=0);let r=n.readUInt16BE(e);e+=2;let c=e,t={};return t.flags=n.readUInt8(e),e+=1,t.tag=h.decode(n,e),e+=h.decode.bytes,t.value=n.toString("utf-8",e,c+r),t.issuerCritical=!!(t.flags&S.ISSUER_CRITICAL),S.decode.bytes=r+2,t};S.decode.bytes=0;S.encodingLength=function(n){return h.encodingLength(n.tag)+h.encodingLength(n.value)+2};var f=s.mx={};f.encode=function(n,e,r){e||(e=u.alloc(f.encodingLength(n))),r||(r=0);let c=r;return r+=2,e.writeUInt16BE(n.preference||0,r),r+=2,a.encode(n.exchange,e,r),r+=a.encode.bytes,e.writeUInt16BE(r-c-2,c),f.encode.bytes=r-c,e};f.encode.bytes=0;f.decode=function(n,e){e||(e=0);let r=e,c={};return e+=2,c.preference=n.readUInt16BE(e),e+=2,c.exchange=a.decode(n,e),e+=a.decode.bytes,f.decode.bytes=e-r,c};f.encodingLength=function(n){return 4+a.encodingLength(n.exchange)};var j=s.a={};j.encode=function(n,e,r){return e||(e=u.alloc(j.encodingLength(n))),r||(r=0),e.writeUInt16BE(4,r),r+=2,ee.v4.encode(n,e,r),j.encode.bytes=6,e};j.encode.bytes=0;j.decode=function(n,e){e||(e=0),e+=2;let r=ee.v4.decode(n,e);return j.decode.bytes=6,r};j.decode.bytes=0;j.encodingLength=function(){return 6};var Z=s.aaaa={};Z.encode=function(n,e,r){return e||(e=u.alloc(Z.encodingLength(n))),r||(r=0),e.writeUInt16BE(16,r),r+=2,ee.v6.encode(n,e,r),Z.encode.bytes=18,e};Z.encode.bytes=0;Z.decode=function(n,e){e||(e=0),e+=2;let r=ee.v6.decode(n,e);return Z.decode.bytes=18,r};Z.decode.bytes=0;Z.encodingLength=function(){return 18};var B=s.option={};B.encode=function(n,e,r){e||(e=u.alloc(B.encodingLength(n))),r||(r=0);let c=r,t=he.toCode(n.code);if(e.writeUInt16BE(t,r),r+=2,n.data)e.writeUInt16BE(n.data.length,r),r+=2,n.data.copy(e,r),r+=n.data.length;else switch(t){case 8:let i=n.sourcePrefixLength||0,y=n.family||ee.familyOf(n.ip),I=ee.encode(n.ip,u.alloc),O=Math.ceil(i/8);e.writeUInt16BE(O+4,r),r+=2,e.writeUInt16BE(y,r),r+=2,e.writeUInt8(i,r++),e.writeUInt8(n.scopePrefixLength||0,r++),I.copy(e,r,0,O),r+=O;break;case 11:n.timeout?(e.writeUInt16BE(2,r),r+=2,e.writeUInt16BE(n.timeout,r),r+=2):(e.writeUInt16BE(0,r),r+=2);break;case 12:let U=n.length||0;e.writeUInt16BE(U,r),r+=2,e.fill(0,r,r+U),r+=U;break;case 14:let v=n.tags.length*2;e.writeUInt16BE(v,r),r+=2;for(let g of n.tags)e.writeUInt16BE(g,r),r+=2;break;default:throw new Error(`Unknown roption code: ${n.code}`)}return B.encode.bytes=r-c,e};B.encode.bytes=0;B.decode=function(n,e){e||(e=0);let r={};r.code=n.readUInt16BE(e),r.type=he.toString(r.code),e+=2;let c=n.readUInt16BE(e);switch(e+=2,r.data=n.slice(e,e+c),r.code){case 8:r.family=n.readUInt16BE(e),e+=2,r.sourcePrefixLength=n.readUInt8(e++),r.scopePrefixLength=n.readUInt8(e++);let t=u.alloc(r.family===1?4:16);n.copy(t,0,e,e+c-4),r.ip=ee.decode(t);break;case 11:c>0&&(r.timeout=n.readUInt16BE(e),e+=2);break;case 14:r.tags=[];for(let i=0;i<c;i+=2)r.tags.push(n.readUInt16BE(e)),e+=2}return B.decode.bytes=c+4,r};B.decode.bytes=0;B.encodingLength=function(n){if(n.data)return n.data.length+4;switch(he.toCode(n.code)){case 8:let r=n.sourcePrefixLength||0;return Math.ceil(r/8)+8;case 11:return typeof n.timeout=="number"?6:4;case 12:return n.length+4;case 14:return 4+n.tags.length*2}throw new Error(`Unknown roption code: ${n.code}`)};var A=s.opt={};A.encode=function(n,e,r){e||(e=u.alloc(A.encodingLength(n))),r||(r=0);let c=r,t=re(n,B);return e.writeUInt16BE(t,r),r=te(n,B,e,r+2),A.encode.bytes=r-c,e};A.encode.bytes=0;A.decode=function(n,e){e||(e=0);let r=e,c=[],t=n.readUInt16BE(e);e+=2;let i=0;for(;t>0;)c[i++]=B.decode(n,e),e+=B.decode.bytes,t-=B.decode.bytes;return A.decode.bytes=e-r,c};A.decode.bytes=0;A.encodingLength=function(n){return 2+re(n||[],B)};var m=s.dnskey={};m.PROTOCOL_DNSSEC=3;m.ZONE_KEY=128;m.SECURE_ENTRYPOINT=32768;m.encode=function(n,e,r){e||(e=u.alloc(m.encodingLength(n))),r||(r=0);let c=r,t=n.key;if(!u.isBuffer(t))throw new Error("Key must be a Buffer");return r+=2,e.writeUInt16BE(n.flags,r),r+=2,e.writeUInt8(m.PROTOCOL_DNSSEC,r),r+=1,e.writeUInt8(n.algorithm,r),r+=1,t.copy(e,r,0,t.length),r+=t.length,m.encode.bytes=r-c,e.writeUInt16BE(m.encode.bytes-2,c),e};m.encode.bytes=0;m.decode=function(n,e){e||(e=0);let r=e;var c={},t=n.readUInt16BE(e);if(e+=2,c.flags=n.readUInt16BE(e),e+=2,n.readUInt8(e)!==m.PROTOCOL_DNSSEC)throw new Error("Protocol must be 3");return e+=1,c.algorithm=n.readUInt8(e),e+=1,c.key=n.slice(e,r+t+2),e+=c.key.length,m.decode.bytes=e-r,c};m.decode.bytes=0;m.encodingLength=function(n){return 6+u.byteLength(n.key)};var _=s.rrsig={};_.encode=function(n,e,r){e||(e=u.alloc(_.encodingLength(n))),r||(r=0);let c=r,t=n.signature;if(!u.isBuffer(t))throw new Error("Signature must be a Buffer");return r+=2,e.writeUInt16BE(J.toType(n.typeCovered),r),r+=2,e.writeUInt8(n.algorithm,r),r+=1,e.writeUInt8(n.labels,r),r+=1,e.writeUInt32BE(n.originalTTL,r),r+=4,e.writeUInt32BE(n.expiration,r),r+=4,e.writeUInt32BE(n.inception,r),r+=4,e.writeUInt16BE(n.keyTag,r),r+=2,a.encode(n.signersName,e,r),r+=a.encode.bytes,t.copy(e,r,0,t.length),r+=t.length,_.encode.bytes=r-c,e.writeUInt16BE(_.encode.bytes-2,c),e};_.encode.bytes=0;_.decode=function(n,e){e||(e=0);let r=e;var c={},t=n.readUInt16BE(e);return e+=2,c.typeCovered=J.toString(n.readUInt16BE(e)),e+=2,c.algorithm=n.readUInt8(e),e+=1,c.labels=n.readUInt8(e),e+=1,c.originalTTL=n.readUInt32BE(e),e+=4,c.expiration=n.readUInt32BE(e),e+=4,c.inception=n.readUInt32BE(e),e+=4,c.keyTag=n.readUInt16BE(e),e+=2,c.signersName=a.decode(n,e),e+=a.decode.bytes,c.signature=n.slice(e,r+t+2),e+=c.signature.length,_.decode.bytes=e-r,c};_.decode.bytes=0;_.encodingLength=function(n){return 20+a.encodingLength(n.signersName)+u.byteLength(n.signature)};var x=s.rp={};x.encode=function(n,e,r){e||(e=u.alloc(x.encodingLength(n))),r||(r=0);let c=r;return r+=2,a.encode(n.mbox||".",e,r),r+=a.encode.bytes,a.encode(n.txt||".",e,r),r+=a.encode.bytes,x.encode.bytes=r-c,e.writeUInt16BE(x.encode.bytes-2,c),e};x.encode.bytes=0;x.decode=function(n,e){e||(e=0);let r=e,c={};return e+=2,c.mbox=a.decode(n,e)||".",e+=a.decode.bytes,c.txt=a.decode(n,e)||".",e+=a.decode.bytes,x.decode.bytes=e-r,c};x.decode.bytes=0;x.encodingLength=function(n){return 2+a.encodingLength(n.mbox||".")+a.encodingLength(n.txt||".")};var p={};p.encode=function(n,e,r){e||(e=u.alloc(p.encodingLength(n))),r||(r=0);let c=r;for(var t=[],i=0;i<n.length;i++){var y=J.toType(n[i]);t[y>>8]===void 0&&(t[y>>8]=[]),t[y>>8][y>>3&31]|=1<<7-(y&7)}for(i=0;i<t.length;i++)if(t[i]!==void 0){var I=u.from(t[i]);e.writeUInt8(i,r),r+=1,e.writeUInt8(I.length,r),r+=1,I.copy(e,r),r+=I.length}return p.encode.bytes=r-c,e};p.encode.bytes=0;p.decode=function(n,e,r){e||(e=0);let c=e;for(var t=[];e-c<r;){var i=n.readUInt8(e);e+=1;var y=n.readUInt8(e);e+=1;for(var I=0;I<y;I++)for(var O=n.readUInt8(e+I),U=0;U<8;U++)if(O&1<<7-U){var v=J.toString(i<<8|I<<3|U);t.push(v)}e+=y}return p.decode.bytes=e-c,t};p.decode.bytes=0;p.encodingLength=function(n){for(var e=[],r=0;r<n.length;r++){var c=J.toType(n[r]);e[c>>8]=Math.max(e[c>>8]||0,c&255)}var t=0;for(r=0;r<e.length;r++)e[r]!==void 0&&(t+=2+Math.ceil((e[r]+1)/8));return t};var k=s.nsec={};k.encode=function(n,e,r){e||(e=u.alloc(k.encodingLength(n))),r||(r=0);let c=r;return r+=2,a.encode(n.nextDomain,e,r),r+=a.encode.bytes,p.encode(n.rrtypes,e,r),r+=p.encode.bytes,k.encode.bytes=r-c,e.writeUInt16BE(k.encode.bytes-2,c),e};k.encode.bytes=0;k.decode=function(n,e){e||(e=0);let r=e;var c={},t=n.readUInt16BE(e);return e+=2,c.nextDomain=a.decode(n,e),e+=a.decode.bytes,c.rrtypes=p.decode(n,e,t-(e-r)),e+=p.decode.bytes,k.decode.bytes=e-r,c};k.decode.bytes=0;k.encodingLength=function(n){return 2+a.encodingLength(n.nextDomain)+p.encodingLength(n.rrtypes)};var F=s.nsec3={};F.encode=function(n,e,r){e||(e=u.alloc(F.encodingLength(n))),r||(r=0);let c=r,t=n.salt;if(!u.isBuffer(t))throw new Error("salt must be a Buffer");let i=n.nextDomain;if(!u.isBuffer(i))throw new Error("nextDomain must be a Buffer");return r+=2,e.writeUInt8(n.algorithm,r),r+=1,e.writeUInt8(n.flags,r),r+=1,e.writeUInt16BE(n.iterations,r),r+=2,e.writeUInt8(t.length,r),r+=1,t.copy(e,r,0,t.length),r+=t.length,e.writeUInt8(i.length,r),r+=1,i.copy(e,r,0,i.length),r+=i.length,p.encode(n.rrtypes,e,r),r+=p.encode.bytes,F.encode.bytes=r-c,e.writeUInt16BE(F.encode.bytes-2,c),e};F.encode.bytes=0;F.decode=function(n,e){e||(e=0);let r=e;var c={},t=n.readUInt16BE(e);e+=2,c.algorithm=n.readUInt8(e),e+=1,c.flags=n.readUInt8(e),e+=1,c.iterations=n.readUInt16BE(e),e+=2;let i=n.readUInt8(e);e+=1,c.salt=n.slice(e,e+i),e+=i;let y=n.readUInt8(e);return e+=1,c.nextDomain=n.slice(e,e+y),e+=y,c.rrtypes=p.decode(n,e,t-(e-r)),e+=p.decode.bytes,F.decode.bytes=e-r,c};F.decode.bytes=0;F.encodingLength=function(n){return 8+n.salt.length+n.nextDomain.length+p.encodingLength(n.rrtypes)};var M=s.ds={};M.encode=function(n,e,r){e||(e=u.alloc(M.encodingLength(n))),r||(r=0);let c=r,t=n.digest;if(!u.isBuffer(t))throw new Error("Digest must be a Buffer");return r+=2,e.writeUInt16BE(n.keyTag,r),r+=2,e.writeUInt8(n.algorithm,r),r+=1,e.writeUInt8(n.digestType,r),r+=1,t.copy(e,r,0,t.length),r+=t.length,M.encode.bytes=r-c,e.writeUInt16BE(M.encode.bytes-2,c),e};M.encode.bytes=0;M.decode=function(n,e){e||(e=0);let r=e;var c={},t=n.readUInt16BE(e);return e+=2,c.keyTag=n.readUInt16BE(e),e+=2,c.algorithm=n.readUInt8(e),e+=1,c.digestType=n.readUInt8(e),e+=1,c.digest=n.slice(e,r+t+2),e+=c.digest.length,M.decode.bytes=e-r,c};M.decode.bytes=0;M.encodingLength=function(n){return 6+u.byteLength(n.digest)};var C=s.sshfp={};C.getFingerprintLengthForHashType=function(e){switch(e){case 1:return 20;case 2:return 32}};C.encode=function(e,r,c){r||(r=u.alloc(C.encodingLength(e))),c||(c=0);let t=c;c+=2,r[c]=e.algorithm,c+=1,r[c]=e.hash,c+=1;let i=u.from(e.fingerprint.toUpperCase(),"hex");if(i.length!==C.getFingerprintLengthForHashType(e.hash))throw new Error("Invalid fingerprint length");return i.copy(r,c),c+=i.byteLength,C.encode.bytes=c-t,r.writeUInt16BE(C.encode.bytes-2,t),r};C.encode.bytes=0;C.decode=function(e,r){r||(r=0);let c=r,t={};r+=2,t.algorithm=e[r],r+=1,t.hash=e[r],r+=1;let i=C.getFingerprintLengthForHashType(t.hash);return t.fingerprint=e.slice(r,r+i).toString("hex").toUpperCase(),r+=i,C.decode.bytes=r-c,t};C.decode.bytes=0;C.encodingLength=function(n){return 4+u.from(n.fingerprint,"hex").byteLength};var H=s.naptr={};H.encode=function(n,e,r){e||(e=u.alloc(H.encodingLength(n))),r||(r=0);let c=r;return r+=2,e.writeUInt16BE(n.order||0,r),r+=2,e.writeUInt16BE(n.preference||0,r),r+=2,h.encode(n.flags,e,r),r+=h.encode.bytes,h.encode(n.services,e,r),r+=h.encode.bytes,h.encode(n.regexp,e,r),r+=h.encode.bytes,a.encode(n.replacement,e,r),r+=a.encode.bytes,H.encode.bytes=r-c,e.writeUInt16BE(H.encode.bytes-2,c),e};H.encode.bytes=0;H.decode=function(n,e){e||(e=0);let r=e,c={};return e+=2,c.order=n.readUInt16BE(e),e+=2,c.preference=n.readUInt16BE(e),e+=2,c.flags=h.decode(n,e),e+=h.decode.bytes,c.services=h.decode(n,e),e+=h.decode.bytes,c.regexp=h.decode(n,e),e+=h.decode.bytes,c.replacement=a.decode(n,e),e+=a.decode.bytes,H.decode.bytes=e-r,c};H.decode.bytes=0;H.encodingLength=function(n){return h.encodingLength(n.flags)+h.encodingLength(n.services)+h.encodingLength(n.regexp)+a.encodingLength(n.replacement)+6};var K=s.tlsa={};K.encode=function(n,e,r){e||(e=u.alloc(K.encodingLength(n))),r||(r=0);let c=r,t=n.certificate;if(!u.isBuffer(t))throw new Error("Certificate must be a Buffer");return r+=2,e.writeUInt8(n.usage,r),r+=1,e.writeUInt8(n.selector,r),r+=1,e.writeUInt8(n.matchingType,r),r+=1,t.copy(e,r,0,t.length),r+=t.length,K.encode.bytes=r-c,e.writeUInt16BE(K.encode.bytes-2,c),e};K.encode.bytes=0;K.decode=function(n,e){e||(e=0);let r=e,c={},t=n.readUInt16BE(e);return e+=2,c.usage=n.readUInt8(e),e+=1,c.selector=n.readUInt8(e),e+=1,c.matchingType=n.readUInt8(e),e+=1,c.certificate=n.slice(e,r+t+2),e+=c.certificate.length,K.decode.bytes=e-r,c};K.decode.bytes=0;K.encodingLength=function(n){return 5+u.byteLength(n.certificate)};var Ie=s.record=function(n){switch(n.toUpperCase()){case"A":return j;case"PTR":return N;case"CNAME":return Ve;case"DNAME":return $e;case"TXT":return $;case"NULL":return G;case"AAAA":return Z;case"SRV":return W;case"HINFO":return Q;case"CAA":return S;case"NS":return z;case"SOA":return V;case"MX":return f;case"OPT":return A;case"DNSKEY":return m;case"RRSIG":return _;case"RP":return x;case"NSEC":return k;case"NSEC3":return F;case"SSHFP":return C;case"DS":return M;case"NAPTR":return H;case"TLSA":return K}return q},L=s.answer={};L.encode=function(n,e,r){e||(e=u.alloc(L.encodingLength(n))),r||(r=0);let c=r;if(a.encode(n.name,e,r),r+=a.encode.bytes,e.writeUInt16BE(J.toType(n.type),r),n.type.toUpperCase()==="OPT"){if(n.name!==".")throw new Error("OPT name must be root.");e.writeUInt16BE(n.udpPayloadSize||4096,r+2),e.writeUInt8(n.extendedRcode||0,r+4),e.writeUInt8(n.ednsVersion||0,r+5),e.writeUInt16BE(n.flags||0,r+6),r+=8,A.encode(n.options||[],e,r),r+=A.encode.bytes}else{let t=ae.toClass(n.class===void 0?"IN":n.class);n.flush&&(t|=Ee),e.writeUInt16BE(t,r+2),e.writeUInt32BE(n.ttl||0,r+4),r+=8;let i=Ie(n.type);i.encode(n.data,e,r),r+=i.encode.bytes}return L.encode.bytes=r-c,e};L.encode.bytes=0;L.decode=function(n,e){e||(e=0);let r={},c=e;if(r.name=a.decode(n,e),e+=a.decode.bytes,r.type=J.toString(n.readUInt16BE(e)),r.type==="OPT")r.udpPayloadSize=n.readUInt16BE(e+2),r.extendedRcode=n.readUInt8(e+4),r.ednsVersion=n.readUInt8(e+5),r.flags=n.readUInt16BE(e+6),r.flag_do=(r.flags>>15&1)===1,r.options=A.decode(n,e+8),e+=8+A.decode.bytes;else{let t=n.readUInt16BE(e+2);r.ttl=n.readUInt32BE(e+4),r.class=ae.toString(t&qe),r.flush=!!(t&Ee);let i=Ie(r.type);r.data=i.decode(n,e+8),e+=8+i.decode.bytes}return L.decode.bytes=e-c,r};L.decode.bytes=0;L.encodingLength=function(n){let e=n.data!==null&&n.data!==void 0?n.data:n.options;return a.encodingLength(n.name)+8+Ie(n.type).encodingLength(e)};var D=s.question={};D.encode=function(n,e,r){e||(e=u.alloc(D.encodingLength(n))),r||(r=0);let c=r;return a.encode(n.name,e,r),r+=a.encode.bytes,e.writeUInt16BE(J.toType(n.type),r),r+=2,e.writeUInt16BE(ae.toClass(n.class===void 0?"IN":n.class),r),r+=2,D.encode.bytes=r-c,n};D.encode.bytes=0;D.decode=function(n,e){e||(e=0);let r=e,c={};return c.name=a.decode(n,e),e+=a.decode.bytes,c.type=J.toString(n.readUInt16BE(e)),e+=2,c.class=ae.toString(n.readUInt16BE(e)),e+=2,!!(c.class&De)&&(c.class&=ze),D.decode.bytes=e-r,c};D.decode.bytes=0;D.encodingLength=function(n){return a.encodingLength(n.name)+4};s.AUTHORITATIVE_ANSWER=1024;s.TRUNCATED_RESPONSE=512;s.RECURSION_DESIRED=256;s.RECURSION_AVAILABLE=128;s.AUTHENTIC_DATA=32;s.CHECKING_DISABLED=16;s.DNSSEC_OK=32768;s.encode=function(n,e,r){let c=!e;c&&(e=u.alloc(s.encodingLength(n))),r||(r=0);let t=r;return n.questions||(n.questions=[]),n.answers||(n.answers=[]),n.authorities||(n.authorities=[]),n.additionals||(n.additionals=[]),R.encode(n,e,r),r+=R.encode.bytes,r=te(n.questions,D,e,r),r=te(n.answers,L,e,r),r=te(n.authorities,L,e,r),r=te(n.additionals,L,e,r),s.encode.bytes=r-t,c&&s.encode.bytes!==e.length?e.slice(0,s.encode.bytes):e};s.encode.bytes=0;s.decode=function(n,e){e||(e=0);let r=e,c=R.decode(n,e);return e+=R.decode.bytes,e=de(c.questions,D,n,e),e=de(c.answers,L,n,e),e=de(c.authorities,L,n,e),e=de(c.additionals,L,n,e),s.decode.bytes=e-r,c};s.decode.bytes=0;s.encodingLength=function(n){return R.encodingLength(n)+re(n.questions||[],D)+re(n.answers||[],L)+re(n.authorities||[],L)+re(n.additionals||[],L)};s.streamEncode=function(n){let e=s.encode(n),r=u.alloc(2);r.writeUInt16BE(e.byteLength);let c=u.concat([r,e]);return s.streamEncode.bytes=c.byteLength,c};s.streamEncode.bytes=0;s.streamDecode=function(n){let e=n.readUInt16BE(0);if(n.byteLength<e+2)return null;let r=s.decode(n.slice(2));return s.streamDecode.bytes=s.decode.bytes,r};s.streamDecode.bytes=0;function re(n,e){let r=0;for(let c=0;c<n.length;c++)r+=e.encodingLength(n[c]);return r}function te(n,e,r,c){for(let t=0;t<n.length;t++)e.encode(n[t],r,c),c+=e.encode.bytes;return c}function de(n,e,r,c){for(let t=0;t<n.length;t++)n[t]=e.decode(r,c),c+=e.decode.bytes;return c}});var xe=X((Un,_e)=>{"use strict";var Pe=Je;process.nextTick(Ze,42);_e.exports=Ge;function Ge(n){var e=c;return r;function r(t){e(t||We)}function c(t){var i=[t];e=y,n(I);function y(O){i.push(O)}function I(O){var U=arguments;for(e=Qe(O)?c:v;i.length;)v(i.shift());function v(g){Pe(je,g,U)}}}}function Qe(n){return Object.prototype.toString.call(n)==="[object Error]"}function We(){}function je(n,e){n.apply(null,e)}function Ze(n){n===42&&(Pe=process.nextTick)}function Je(n,e,r){process.nextTick(function(){n(e,r)})}});var Me=X((wn,Fe)=>{var Ue=Re(),be=ne("dgram"),fe=xe(),en=ne("events"),Oe=ne("os"),we=function(){};Fe.exports=function(n){n||(n={});var e=new en.EventEmitter,r=typeof n.port=="number"?n.port:5353,c=n.type||"udp4",t=n.ip||n.host||(c==="udp4"?"224.0.0.251":null),i={address:t,port:r},y={},I=!1,O=null;if(c==="udp6"&&(!t||!n.interface))throw new Error("For IPv6 multicast you must specify `ip` and `interface`");var U=n.socket||be.createSocket({type:c,reuseAddr:n.reuseAddr!==!1,toString:function(){return c}});U.on("error",function(g){g.code==="EACCES"||g.code==="EADDRINUSE"?e.emit("error",g):e.emit("warning",g)}),U.on("message",function(g,l){try{g=Ue.decode(g)}catch(o){e.emit("warning",o);return}e.emit("packet",g,l),g.type==="query"&&e.emit("query",g,l),g.type==="response"&&e.emit("response",g,l)}),U.on("listening",function(){r||(r=i.port=U.address().port),n.multicast!==!1&&(e.update(),O=setInterval(e.update,5e3),U.setMulticastTTL(n.ttl||255),U.setMulticastLoopback(n.loopback!==!1))});var v=fe(function(g){if(!r||n.bind===!1)return g(null);U.once("error",g),U.bind(r,n.bind||n.interface,function(){U.removeListener("error",g),g(null)})});return v(function(g){if(g)return e.emit("error",g);e.emit("ready")}),e.send=function(g,l,o){if(typeof l=="function")return e.send(g,null,l);o||(o=we),l?!l.host&&!l.address&&(l.address=i.address):l=i,v(d);function d(E){if(I)return o();if(E)return o(E);var w=Ue.encode(g);U.send(w,0,w.length,l.port,l.address||l.host,o)}},e.response=e.respond=function(g,l,o){Array.isArray(g)&&(g={answers:g}),g.type="response",g.flags=(g.flags||0)|Ue.AUTHORITATIVE_ANSWER,e.send(g,l,o)},e.query=function(g,l,o,d){if(typeof l=="function")return e.query(g,null,null,l);if(typeof l=="object"&&l&&l.port)return e.query(g,null,l,o);if(typeof o=="function")return e.query(g,l,null,o);d||(d=we),typeof g=="string"&&(g=[{name:g,type:l||"ANY"}]),Array.isArray(g)&&(g={type:"query",questions:g}),g.type="query",e.send(g,o,d)},e.destroy=function(g){if(g||(g=we),I)return process.nextTick(g);I=!0,clearInterval(O);for(var l in y)try{U.dropMembership(t,l)}catch{}y={},U.close(g)},e.update=function(){for(var g=n.interface?[].concat(n.interface):rn(),l=!1,o=0;o<g.length;o++){var d=g[o];if(!y[d])try{U.addMembership(t,d),y[d]=!0,l=!0}catch(E){e.emit("warning",E)}}if(l){if(U.setMulticastInterface)try{U.setMulticastInterface(n.interface||nn())}catch(E){e.emit("warning",E)}e.emit("networkInterface")}},e};function nn(){for(var n=Oe.networkInterfaces(),e=Object.keys(n),r=0;r<e.length;r++)for(var c=n[e[r]],t=0;t<c.length;t++){var i=c[t];if(ke(i.family)&&!i.internal)return Oe.platform()==="darwin"&&e[r]==="en0"?i.address:"0.0.0.0"}return"127.0.0.1"}function rn(){for(var n=Oe.networkInterfaces(),e=Object.keys(n),r=[],c=0;c<e.length;c++)for(var t=n[e[c]],i=0;i<t.length;i++){var y=t[i];if(ke(y.family)){r.push(y.address);break}}return r}function ke(n){return n===4||n==="IPv4"}});import{fetchAndPlayMediaItem as cn}from"@neptune/actions/content";var tn=ne("http"),{networkInterfaces:dn}=ne("os"),pe=Me()(),an=/track\/(\d+)/;function on(){let n=dn();for(let e of Object.keys(n))for(let r of n[e]){let c=typeof r.family=="string"?"IPv4":4;if(r.family===c&&!r.internal)return r.address}}var ln=on();pe.on("query",()=>{pe.respond({answers:[{name:"neptune-songshare.local",type:"A",ttl:300,data:ln}]})});var He=tn.createServer((n,e)=>{if(n.method!="POST")return;n.setEncoding("utf-8");let r=[];n.on("data",c=>r.push(c)),n.on("end",()=>{e.writeHead(200,{"Content-Type":"text/plain"}),e.end("OK");let t=r.join("").match(an)?.[1];t&&cn({itemId:t,itemType:"track"})})});He.listen(16257);var pn=()=>{try{pe.destroy()}catch{}try{He.stop()}catch{}};export{pn as onUnload};
