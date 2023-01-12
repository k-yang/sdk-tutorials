(window.webpackJsonp=window.webpackJsonp||[]).push([[148],{759:function(e,g,l){"use strict";l.r(g);var c=l(1),o=Object(c.a)({},(function(){var e=this,g=e.$createElement,l=e._self._c||g;return l("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[l("h1",{attrs:{id:"extend-the-checkers-game-with-a-leaderboard"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#extend-the-checkers-game-with-a-leaderboard"}},[e._v("#")]),e._v(" Extend the Checkers Game With a Leaderboard")]),e._v(" "),l("HighlightBox",{attrs:{type:"learning"}},[l("p",[e._v("In this section, you will learn:")]),e._v(" "),l("ul",[l("li",[e._v("How to make an existing chain IBC-enabled.")]),e._v(" "),l("li",[e._v("How to extend your chains with additional modules.")])])]),e._v(" "),l("h2",{attrs:{id:"what-you-will-be-building-and-why"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#what-you-will-be-building-and-why"}},[e._v("#")]),e._v(" What you will be building and why")]),e._v(" "),l("p",[e._v("The checkers blockchain you have built has the ability to create games, play them, forfeit them, and wager on them (potentially with cross-chain tokens). A further optimization would be to include a leaderboard. This could be executed locally on the checkers blockchain to rank the best players on the checkers blockchain.")]),e._v(" "),l("p",[e._v("But what if there is more than one checkers chain? Or better yet, other game chains that allow players to play a competitive game. Would it not be great to enable a standard to send the game data from the local game chain to an application-specific chain that keeps a global leaderboard? This is exactly what you will be building in the next few sections.")]),e._v(" "),l("HighlightBox",{attrs:{type:"remember"}},[l("p",[e._v("Remember the "),l("RouterLink",{attrs:{to:"/academy/3-ibc/1-what-is-ibc.html#internet-of-blockchains"}},[e._v("appchain thesis that is an integral part of the Cosmos philosophy")]),e._v(" - where every application has its own chain and can be optimized for the application-specific logic it executes. Then IBC can be used to interoperate between all the chains that have specialised functionality. This is the idea behind the prototype checkers and leaderboard chains you're building, enabling IBC packets to be sent between those chains to create cross-chain applications.")],1)]),e._v(" "),l("h2",{attrs:{id:"adding-a-local-leaderboard-module-to-the-checkers-chain"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#adding-a-local-leaderboard-module-to-the-checkers-chain"}},[e._v("#")]),e._v(" Adding a local leaderboard module to the checkers chain")]),e._v(" "),l("p",[e._v("Currently, your checkers game contains the checkers module but is not IBC-enabled. It is now time to extend your checkers game with a leaderboard by adding a new module to make it IBC-enabled.")]),e._v(" "),l("p",[e._v("Let’s dive right into it.")]),e._v(" "),l("p",[e._v("Go to your checkers folder and make sure that you are checked out on the "),l("a",{attrs:{href:"https://github.com/cosmos/b9-checkers-academy-draft/tree/cosmjs-elements",target:"_blank",rel:"noopener noreferrer"}},[e._v("cosmjs-elements"),l("OutboundLink")],1),e._v(" tag.")]),e._v(" "),l("p",[e._v("In the checkers chain folder, you can scaffold a leaderboard module with Ignite:")]),e._v(" "),l("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"JCBpZ25pdGUgc2NhZmZvbGQgbW9kdWxlIGxlYWRlcmJvYXJkIC0taWJjCg=="}}),e._v(" "),l("p",[e._v("In order to create and maintain a leaderboard, you need to store the player information. Scaffold a structure with:")]),e._v(" "),l("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"JCBpZ25pdGUgc2NhZmZvbGQgbWFwIHBsYXllckluZm8gd29uQ291bnQ6dWludCBsb3N0Q291bnQ6dWludCBmb3JmZWl0ZWRDb3VudDp1aW50IGRhdGVVcGRhdGVkOnN0cmluZyAtLW1vZHVsZSBsZWFkZXJib2FyZCAtLW5vLW1lc3NhZ2UK"}}),e._v(" "),l("p",[e._v("Now you can use this structure to create the board itself:")]),e._v(" "),l("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"JCBpZ25pdGUgc2NhZmZvbGQgc2luZ2xlIGJvYXJkIFBsYXllckluZm86UGxheWVySW5mbyAtLW1vZHVsZSBsZWFkZXJib2FyZCAtLW5vLW1lc3NhZ2UK"}}),e._v(" "),l("p",[e._v("You want the structures to be "),l("a",{attrs:{href:"https://en.wikipedia.org/wiki/Nullable_type",target:"_blank",rel:"noopener noreferrer"}},[e._v("nullable types"),l("OutboundLink")],1),e._v(", so a few adjustments are needed - especially because you do not have a null value for an address.")]),e._v(" "),l("p",[e._v("You need to make the adjustments in the Protobuf files "),l("code",[e._v("proto/leaderboard/board.proto")]),e._v(" and "),l("code",[e._v("proto/leaderboard/genesis.proto")]),e._v(". Make sure to import "),l("code",[e._v("gogoproto/gogo.proto")]),e._v(" and use "),l("code",[e._v("[(gogoproto.nullable) = false];")]),e._v(" for the "),l("code",[e._v("PlayerInfo")]),e._v(" and the "),l("code",[e._v("Board")]),e._v(".")]),e._v(" "),l("p",[e._v("For example, for "),l("code",[e._v("proto/leaderboard/board.proto")]),e._v(" try this:")]),e._v(" "),l("tm-code-block",{staticClass:"codeblock",attrs:{language:"protobuf",base64:"c3ludGF4ID0gJnF1b3Q7cHJvdG8zJnF1b3Q7OwpwYWNrYWdlIGI5bGFiLmNoZWNrZXJzLmxlYWRlcmJvYXJkOwoKb3B0aW9uIGdvX3BhY2thZ2UgPSAmcXVvdDtnaXRodWIuY29tL2I5bGFiL2NoZWNrZXJzL3gvbGVhZGVyYm9hcmQvdHlwZXMmcXVvdDs7CmltcG9ydCAmcXVvdDtsZWFkZXJib2FyZC9wbGF5ZXJfaW5mby5wcm90byZxdW90OzsgCmltcG9ydCAmcXVvdDtnb2dvcHJvdG8vZ29nby5wcm90byZxdW90OzsKCm1lc3NhZ2UgQm9hcmQgewogIHJlcGVhdGVkIFBsYXllckluZm8gcGxheWVySW5mbyA9IDEgWyhnb2dvcHJvdG8ubnVsbGFibGUpID0gZmFsc2VdOyAKICAKfQo="}}),e._v(" "),l("HighlightBox",{attrs:{type:"note"}},[l("p",[e._v("You will also have to modify the "),l("code",[e._v("x/leaderboard/genesis.go")]),e._v(". In it, look for:")]),e._v(" "),l("tm-code-block",{staticClass:"codeblock",attrs:{language:"golang",base64:"ICAgIC8vIFNldCBpZiBkZWZpbmVkCiAgICBpZiBnZW5TdGF0ZS5Cb2FyZCAhPSBuaWwgewogICAgICAgIGsuU2V0Qm9hcmQoY3R4LCAqZ2VuU3RhdGUuQm9hcmQpCiAgICB9Cg=="}}),e._v(" "),l("p",[e._v("Simply change this to:")]),e._v(" "),l("tm-code-block",{staticClass:"codeblock",attrs:{language:"golang",base64:"ICAgIGsuU2V0Qm9hcmQoY3R4LCBnZW5TdGF0ZS5Cb2FyZCkK"}}),e._v(" "),l("p",[e._v("Next, in the "),l("code",[e._v("x/leaderboard/genesis_test.go")]),e._v(", look for:")]),e._v(" "),l("tm-code-block",{staticClass:"codeblock",attrs:{language:"golang",base64:"ICAgIEJvYXJkOiAmYW1wO3R5cGVzLkJvYXJkewogICAgICAgIFBsYXllckluZm86IG5ldyh0eXBlcy5QbGF5ZXJJbmZvKSwKICAgIH0sCg=="}}),e._v(" "),l("p",[e._v("Instead use:")]),e._v(" "),l("tm-code-block",{staticClass:"codeblock",attrs:{language:"golang",base64:"ICAgIEJvYXJkOiB0eXBlcy5Cb2FyZHsKICAgICBQbGF5ZXJJbmZvOiBbXXR5cGVzLlBsYXllckluZm97fSwKICAgfSwK"}}),e._v(" "),l("p",[e._v("We gave the checkers' module access to the leaderboard's keeper. Therefore you will need to modify "),l("code",[e._v("testutils/keeper/checkers.go")]),e._v(". Locate:")]),e._v(" "),l("tm-code-block",{staticClass:"codeblock",attrs:{language:"golang",base64:"ICAgIGsgOj0ga2VlcGVyLk5ld0tlZXBlcigKICAgICAgICAgICAgYmFuaywKICAgICAgICAgICAgY2RjLAogICAgICAgICAgICBzdG9yZUtleSwKICAgICAgICAgICAgbWVtU3RvcmVLZXksCg=="}}),e._v(" "),l("p",[e._v("Now add the leaderboard's keeper into it:")]),e._v(" "),l("tm-code-block",{staticClass:"codeblock",attrs:{language:"golang",base64:"ICAgIGxlYWRlcmJvYXJkS2VlcGVyLF8gOj0gTGVhZGVyYm9hcmRLZWVwZXIodCk7CiAgICBrIDo9IGtlZXBlci5OZXdLZWVwZXIoCiAgICAgICAgYmFuaywKICAgICAgICAqbGVhZGVyYm9hcmRLZWVwZXIsCiAgICAgICAgY2RjLAogICAgICAgIHN0b3JlS2V5LAogICAgICAgIG1lbVN0b3JlS2V5LAo="}})],1),e._v(" "),l("p",[e._v("You want to store a "),l("em",[e._v("win")]),e._v(", a "),l("em",[e._v("loss")]),e._v(", or a "),l("em",[e._v("draw")]),e._v(" when a game ends. Thus, you should create some helper functions first. Create a "),l("code",[e._v("x/checkers/keeper/player_info_handler.go")]),e._v(" file with the following code:")]),e._v(" "),l("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"cGFja2FnZSBrZWVwZXIKCmltcG9ydCAoCiAgICAmcXVvdDtmbXQmcXVvdDsKCiAgICBydWxlcyAmcXVvdDtnaXRodWIuY29tL2I5bGFiL2NoZWNrZXJzL3gvY2hlY2tlcnMvcnVsZXMmcXVvdDsKICAgICZxdW90O2dpdGh1Yi5jb20vYjlsYWIvY2hlY2tlcnMveC9jaGVja2Vycy90eXBlcyZxdW90OwoKICAgIHNkayAmcXVvdDtnaXRodWIuY29tL2Nvc21vcy9jb3Ntb3Mtc2RrL3R5cGVzJnF1b3Q7CikKCmZ1bmMgZ2V0V2lubmVyQW5kTG9zZXJBZGRyZXNzZXMoc3RvcmVkR2FtZSAqdHlwZXMuU3RvcmVkR2FtZSkgKHdpbm5lckFkZHJlc3Mgc2RrLkFjY0FkZHJlc3MsIGxvc2VyQWRkcmVzcyBzZGsuQWNjQWRkcmVzcykgewogICAgaWYgc3RvcmVkR2FtZS5XaW5uZXIgPT0gcnVsZXMuUGllY2VTdHJpbmdzW3J1bGVzLk5PX1BMQVlFUl0gewogICAgICAgIHBhbmljKHR5cGVzLkVyclRoZXJlSXNOb1dpbm5lci5FcnJvcigpKQogICAgfQogICAgcmVkQWRkcmVzcywgZXJyIDo9IHN0b3JlZEdhbWUuR2V0UmVkQWRkcmVzcygpCiAgICBpZiBlcnIgIT0gbmlsIHsKICAgICAgICBwYW5pYyhlcnIuRXJyb3IoKSkKICAgIH0KICAgIGJsYWNrQWRkcmVzcywgZXJyIDo9IHN0b3JlZEdhbWUuR2V0QmxhY2tBZGRyZXNzKCkKICAgIGlmIGVyciAhPSBuaWwgewogICAgICAgIHBhbmljKGVyci5FcnJvcigpKQogICAgfQogICAgaWYgc3RvcmVkR2FtZS5XaW5uZXIgPT0gcnVsZXMuUGllY2VTdHJpbmdzW3J1bGVzLlJFRF9QTEFZRVJdIHsKICAgICAgICB3aW5uZXJBZGRyZXNzID0gcmVkQWRkcmVzcwogICAgICAgIGxvc2VyQWRkcmVzcyA9IGJsYWNrQWRkcmVzcwogICAgfSBlbHNlIGlmIHN0b3JlZEdhbWUuV2lubmVyID09IHJ1bGVzLlBpZWNlU3RyaW5nc1tydWxlcy5CTEFDS19QTEFZRVJdIHsKICAgICAgICB3aW5uZXJBZGRyZXNzID0gYmxhY2tBZGRyZXNzCiAgICAgICAgbG9zZXJBZGRyZXNzID0gcmVkQWRkcmVzcwogICAgfSBlbHNlIHsKICAgICAgICBwYW5pYyhmbXQuU3ByaW50Zih0eXBlcy5FcnJXaW5uZXJOb3RQYXJzZWFibGUuRXJyb3IoKSwgc3RvcmVkR2FtZS5XaW5uZXIpKQogICAgfQogICAgcmV0dXJuIHdpbm5lckFkZHJlc3MsIGxvc2VyQWRkcmVzcwp9CgpmdW5jIChrICpLZWVwZXIpIE11c3RSZWdpc3RlclBsYXllcldpbihjdHggc2RrLkNvbnRleHQsIHN0b3JlZEdhbWUgKnR5cGVzLlN0b3JlZEdhbWUpIHsKICAgIHdpbm5lckFkZHJlc3MsIGxvc2VyQWRkcmVzcyA6PSBnZXRXaW5uZXJBbmRMb3NlckFkZHJlc3NlcyhzdG9yZWRHYW1lKQogICAgay5ib2FyZC5NdXN0QWRkV29uR2FtZVJlc3VsdFRvUGxheWVyKGN0eCwgd2lubmVyQWRkcmVzcykKICAgIGsuYm9hcmQuTXVzdEFkZExvc3RHYW1lUmVzdWx0VG9QbGF5ZXIoY3R4LCBsb3NlckFkZHJlc3MpCn0KCmZ1bmMgKGsgKktlZXBlcikgTXVzdFJlZ2lzdGVyUGxheWVyRm9yZmVpdChjdHggc2RrLkNvbnRleHQsIHN0b3JlZEdhbWUgKnR5cGVzLlN0b3JlZEdhbWUpIHsKICAgIHdpbm5lckFkZHJlc3MsIGxvc2VyQWRkcmVzcyA6PSBnZXRXaW5uZXJBbmRMb3NlckFkZHJlc3NlcyhzdG9yZWRHYW1lKQogICAgay5ib2FyZC5NdXN0QWRkV29uR2FtZVJlc3VsdFRvUGxheWVyKGN0eCwgd2lubmVyQWRkcmVzcykKICAgIGsuYm9hcmQuTXVzdEFkZEZvcmZlaXRlZEdhbWVSZXN1bHRUb1BsYXllcihjdHgsIGxvc2VyQWRkcmVzcykKfQoK"}}),e._v(" "),l("p",[e._v("The checkers module will need to access the leaderboard methods, like "),l("code",[e._v("k.board.MustAddWonGameResultToPlayer(...)")]),e._v(".")]),e._v(" "),l("p",[e._v("To achieve this, first, you need to write those functions. Create a "),l("code",[e._v("x/leaderboard/keeper/player_info_handler.go")]),e._v(" file with the following code:")]),e._v(" "),l("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"cGFja2FnZSBrZWVwZXIKCmltcG9ydCAoCiAgICAmcXVvdDtnaXRodWIuY29tL2I5bGFiL2NoZWNrZXJzL3gvbGVhZGVyYm9hcmQvdHlwZXMmcXVvdDsKICAgIHNkayAmcXVvdDtnaXRodWIuY29tL2Nvc21vcy9jb3Ntb3Mtc2RrL3R5cGVzJnF1b3Q7CikKCmZ1bmMgbXVzdEFkZERlbHRhR2FtZVJlc3VsdFRvUGxheWVyKAogICAgayAqS2VlcGVyLAogICAgY3R4IHNkay5Db250ZXh0LAogICAgcGxheWVyIHNkay5BY2NBZGRyZXNzLAogICAgd29uRGVsdGEgdWludDY0LAogICAgbG9zdERlbHRhIHVpbnQ2NCwKICAgIGZvcmZlaXRlZERlbHRhIHVpbnQ2NCwKKSAocGxheWVySW5mbyB0eXBlcy5QbGF5ZXJJbmZvKSB7CiAgICBwbGF5ZXJJbmZvLCBmb3VuZCA6PSBrLkdldFBsYXllckluZm8oY3R4LCBwbGF5ZXIuU3RyaW5nKCkpCiAgICBpZiAhZm91bmQgewogICAgICAgIHBsYXllckluZm8gPSB0eXBlcy5QbGF5ZXJJbmZvewogICAgICAgICAgICBJbmRleDogICAgICAgICAgcGxheWVyLlN0cmluZygpLAogICAgICAgICAgICBXb25Db3VudDogICAgICAgMCwKICAgICAgICAgICAgTG9zdENvdW50OiAgICAgIDAsCiAgICAgICAgICAgIEZvcmZlaXRlZENvdW50OiAwLAogICAgICAgICAgICBEYXRlVXBkYXRlZDogICAgY3R4LkJsb2NrVGltZSgpLlVUQygpLkZvcm1hdCh0eXBlcy5UaW1lTGF5b3V0KSwKICAgICAgICB9CiAgICB9CiAgICBwbGF5ZXJJbmZvLldvbkNvdW50ICs9IHdvbkRlbHRhCiAgICBwbGF5ZXJJbmZvLkxvc3RDb3VudCArPSBsb3N0RGVsdGEKICAgIHBsYXllckluZm8uRm9yZmVpdGVkQ291bnQgKz0gZm9yZmVpdGVkRGVsdGEKICAgIGsuU2V0UGxheWVySW5mbyhjdHgsIHBsYXllckluZm8pCiAgICByZXR1cm4gcGxheWVySW5mbwp9CgpmdW5jIChrICpLZWVwZXIpIE11c3RBZGRXb25HYW1lUmVzdWx0VG9QbGF5ZXIoY3R4IHNkay5Db250ZXh0LCBwbGF5ZXIgc2RrLkFjY0FkZHJlc3MpIHR5cGVzLlBsYXllckluZm8gewogICAgcmV0dXJuIG11c3RBZGREZWx0YUdhbWVSZXN1bHRUb1BsYXllcihrLCBjdHgsIHBsYXllciwgMSwgMCwgMCkKfQoKZnVuYyAoayAqS2VlcGVyKSBNdXN0QWRkTG9zdEdhbWVSZXN1bHRUb1BsYXllcihjdHggc2RrLkNvbnRleHQsIHBsYXllciBzZGsuQWNjQWRkcmVzcykgdHlwZXMuUGxheWVySW5mbyB7CiAgICByZXR1cm4gbXVzdEFkZERlbHRhR2FtZVJlc3VsdFRvUGxheWVyKGssIGN0eCwgcGxheWVyLCAwLCAxLCAwKQp9CgpmdW5jIChrICpLZWVwZXIpIE11c3RBZGRGb3JmZWl0ZWRHYW1lUmVzdWx0VG9QbGF5ZXIoY3R4IHNkay5Db250ZXh0LCBwbGF5ZXIgc2RrLkFjY0FkZHJlc3MpIHR5cGVzLlBsYXllckluZm8gewogICAgcmV0dXJuIG11c3RBZGREZWx0YUdhbWVSZXN1bHRUb1BsYXllcihrLCBjdHgsIHBsYXllciwgMCwgMCwgMSkKfQo="}}),e._v(" "),l("p",[e._v("For the code above to function, you need to define "),l("code",[e._v("TimeLayout")]),e._v(" in "),l("code",[e._v("x/leaderboard/types/keys.go")]),e._v(". Add the following piece of code at the end of the file:")]),e._v(" "),l("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"Y29uc3QgKAogICAgVGltZUxheW91dCAgICAgICAgICAgICAgPSAmcXVvdDsyMDA2LTAxLTAyIDE1OjA0OjA1Ljk5OTk5OTk5OSArMDAwMCBVVEMmcXVvdDsKICAgIExlYWRlcmJvYXJkV2lubmVyTGVuZ3RoID0gdWludDY0KDEwMCkKKQo="}}),e._v(" "),l("p",[e._v("Check your "),l("code",[e._v("x/checkers/types/errors.go")]),e._v(" and make sure that it includes the following:")]),e._v(" "),l("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"ICAgIEVycldpbm5lck5vdFBhcnNlYWJsZSAgICAgID0gc2RrZXJyb3JzLlJlZ2lzdGVyKE1vZHVsZU5hbWUsIDExMTgsICZxdW90O3dpbm5lciBpcyBub3QgcGFyc2VhYmxlOiAlcyZxdW90OykKICAgIEVyclRoZXJlSXNOb1dpbm5lciAgICAgICAgID0gc2RrZXJyb3JzLlJlZ2lzdGVyKE1vZHVsZU5hbWUsIDExMTksICZxdW90O3RoZXJlIGlzIG5vIHdpbm5lciZxdW90OykKICAgIEVyckludmFsaWREYXRlQWRkZWQgICAgICAgID0gc2RrZXJyb3JzLlJlZ2lzdGVyKE1vZHVsZU5hbWUsIDExMjAsICZxdW90O2RhdGVBZGRlZCBjYW5ub3QgYmUgcGFyc2VkOiAlcyZxdW90OykKICAgIEVyckNhbm5vdEFkZFRvTGVhZGVyYm9hcmQgID0gc2RrZXJyb3JzLlJlZ2lzdGVyKE1vZHVsZU5hbWUsIDExMjEsICZxdW90O2Nhbm5vdCBhZGQgdG8gbGVhZGVyYm9hcmQ6ICVzJnF1b3Q7KQo="}}),e._v(" "),l("p",[e._v("Now it is time to allow the checkers module access to the leaderboard module. Look for "),l("code",[e._v("app.CheckersKeeper")]),e._v(" in "),l("code",[e._v("app/app.go")]),e._v(" and modify it to include "),l("code",[e._v("app.LeaderboardKeeper")]),e._v(":")]),e._v(" "),l("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"YXBwLkNoZWNrZXJzS2VlcGVyID0gKmNoZWNrZXJzbW9kdWxla2VlcGVyLk5ld0tlZXBlcigKICAgICAgICBhcHAuQmFua0tlZXBlciwKICAgICAgICBhcHAuTGVhZGVyYm9hcmRLZWVwZXIsCiAgICAgICAgYXBwQ29kZWMsCiAgICAgICAga2V5c1tjaGVja2Vyc21vZHVsZXR5cGVzLlN0b3JlS2V5XSwKICAgICAgICBrZXlzW2NoZWNrZXJzbW9kdWxldHlwZXMuTWVtU3RvcmVLZXldLAogICAgICAgIGFwcC5HZXRTdWJzcGFjZShjaGVja2Vyc21vZHVsZXR5cGVzLk1vZHVsZU5hbWUpLAogICAgKQogICAgY2hlY2tlcnNNb2R1bGUgOj0gY2hlY2tlcnNtb2R1bGUuTmV3QXBwTW9kdWxlKGFwcENvZGVjLCBhcHAuQ2hlY2tlcnNLZWVwZXIsIGFwcC5BY2NvdW50S2VlcGVyLCBhcHAuQmFua0tlZXBlcikK"}}),e._v(" "),l("p",[e._v("In addition, you need to modify "),l("code",[e._v("x/checkers/keeper/keeper.go")]),e._v(" and include the leaderboard keeper:")]),e._v(" "),l("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"aW1wb3J0KAogICAgLi4uCgogICAgbGVhZGVyQm9hcmRLZWVwZXIgJnF1b3Q7Z2l0aHViLmNvbS9iOWxhYi9jaGVja2Vycy94L2xlYWRlcmJvYXJkL2tlZXBlciZxdW90OwogICAgKQoKLi4uCgp0eXBlICgKICAgIEtlZXBlciBzdHJ1Y3QgewogICAgICAgIGJhbmsgICAgICAgdHlwZXMuQmFua0VzY3Jvd0tlZXBlcgogICAgICAgIGJvYXJkICAgICAgbGVhZGVyQm9hcmRLZWVwZXIuS2VlcGVyCiAgICAgICAgY2RjICAgICAgICBjb2RlYy5CaW5hcnlDb2RlYwogICAgICAgIHN0b3JlS2V5ICAgc2RrLlN0b3JlS2V5CiAgICAgICAgbWVtS2V5ICAgICBzZGsuU3RvcmVLZXkKICAgICAgICBwYXJhbXN0b3JlIHBhcmFtdHlwZXMuU3Vic3BhY2UKICAgIH0KKQoKLi4uCgpmdW5jIE5ld0tlZXBlcigKICAgIGJhbmsgdHlwZXMuQmFua0VzY3Jvd0tlZXBlciwKICAgIGJvYXJkIGxlYWRlckJvYXJkS2VlcGVyLktlZXBlciwKICAgIGNkYyBjb2RlYy5CaW5hcnlDb2RlYywKICAgIHN0b3JlS2V5LAogICAgbWVtS2V5IHNkay5TdG9yZUtleSwKICAgIHBzIHBhcmFtdHlwZXMuU3Vic3BhY2UsCgopICpLZWVwZXIgewogICAgLy8gc2V0IEtleVRhYmxlIGlmIGl0IGhhcyBub3QgYWxyZWFkeSBiZWVuIHNldAogICAgaWYgIXBzLkhhc0tleVRhYmxlKCkgewogICAgICAgIHBzID0gcHMuV2l0aEtleVRhYmxlKHR5cGVzLlBhcmFtS2V5VGFibGUoKSkKICAgIH0KCiAgICByZXR1cm4gJmFtcDtLZWVwZXJ7CiAgICAgICAgYmFuazogICAgICAgYmFuaywKICAgICAgICBib2FyZDogICAgICBib2FyZCwKICAgICAgICBjZGM6ICAgICAgICBjZGMsCiAgICAgICAgc3RvcmVLZXk6ICAgc3RvcmVLZXksCiAgICAgICAgbWVtS2V5OiAgICAgbWVtS2V5LAogICAgICAgIHBhcmFtc3RvcmU6IHBzLAogICAgfQp9Cgo="}}),e._v(" "),l("p",[e._v("Now the checkers module can call the keeper of the leaderboard module, so add the call for a "),l("em",[e._v("win")]),e._v(" in "),l("code",[e._v("x/checkers/keeper/msg_server_play_move.go")]),e._v(":")]),e._v(" "),l("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"CmZ1bmMgKGsgbXNnU2VydmVyKSBQbGF5TW92ZShnb0N0eCBjb250ZXh0LkNvbnRleHQsIG1zZyAqdHlwZXMuTXNnUGxheU1vdmUpICgqdHlwZXMuTXNnUGxheU1vdmVSZXNwb25zZSwgZXJyb3IpIHsKICAgIGN0eCA6PSBzZGsuVW53cmFwU0RLQ29udGV4dChnb0N0eCkKCiAgICAuLi4KCiAgICBsYXN0Qm9hcmQgOj0gZ2FtZS5TdHJpbmcoKQogICAgaWYgc3RvcmVkR2FtZS5XaW5uZXIgPT0gcnVsZXMuUGllY2VTdHJpbmdzW3J1bGVzLk5PX1BMQVlFUl0gewogICAgICAgIGsuS2VlcGVyLlNlbmRUb0ZpZm9UYWlsKGN0eCwgJmFtcDtzdG9yZWRHYW1lLCAmYW1wO3N5c3RlbUluZm8pCiAgICAgICAgc3RvcmVkR2FtZS5Cb2FyZCA9IGxhc3RCb2FyZAogICAgfSBlbHNlIHsKICAgICAgICBrLktlZXBlci5SZW1vdmVGcm9tRmlmbyhjdHgsICZhbXA7c3RvcmVkR2FtZSwgJmFtcDtzeXN0ZW1JbmZvKQogICAgICAgIHN0b3JlZEdhbWUuQm9hcmQgPSAmcXVvdDsmcXVvdDsKICAgICAgICBrLktlZXBlci5NdXN0UGF5V2lubmluZ3MoY3R4LCAmYW1wO3N0b3JlZEdhbWUpCgogICAgICAgIC8vIEhlcmUgeW91IGNhbiByZWdpc3RlciBhIHdpbgogICAgICAgIGsuS2VlcGVyLk11c3RSZWdpc3RlclBsYXllcldpbihjdHgsICZhbXA7c3RvcmVkR2FtZSkKICAgIH0KCiAgICAuLi4K"}}),e._v(" "),l("p",[e._v("Now add the call for a "),l("em",[e._v("draw")]),e._v(" in "),l("code",[e._v("x/checkers/keeper/end_block_server_game.go")]),e._v(":")]),e._v(" "),l("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"ZnVuYyAoayBLZWVwZXIpIEZvcmZlaXRFeHBpcmVkR2FtZXMoZ29DdHggY29udGV4dC5Db250ZXh0KSB7CiAgICBjdHggOj0gc2RrLlVud3JhcFNES0NvbnRleHQoZ29DdHgpCgogICAgLi4uCiAgICAKICAgIGlmIGRlYWRsaW5lLkJlZm9yZShjdHguQmxvY2tUaW1lKCkpIHsKICAgIC8vIEdhbWUgaXMgcGFzdCBkZWFkbGluZQogICAgay5SZW1vdmVGcm9tRmlmbyhjdHgsICZhbXA7c3RvcmVkR2FtZSwgJmFtcDtzeXN0ZW1JbmZvKQogICAgbGFzdEJvYXJkIDo9IHN0b3JlZEdhbWUuQm9hcmQKICAgIGlmIHN0b3JlZEdhbWUuTW92ZUNvdW50ICZsdDs9IDEgewogICAgICAgIC8vIE5vIHBvaW50IGluIGtlZXBpbmcgYSBnYW1lIHRoYXQgd2FzIG5ldmVyIHJlYWxseSBwbGF5ZWQKICAgICAgICBrLlJlbW92ZVN0b3JlZEdhbWUoY3R4LCBnYW1lSW5kZXgpCiAgICAgICAgaWYgc3RvcmVkR2FtZS5Nb3ZlQ291bnQgPT0gMSB7CiAgICAgICAgICAgIGsuTXVzdFJlZnVuZFdhZ2VyKGN0eCwgJmFtcDtzdG9yZWRHYW1lKQogICAgICAgIH0KICAgIH0gZWxzZSB7CiAgICAgICAgc3RvcmVkR2FtZS5XaW5uZXIsIGZvdW5kID0gb3Bwb25lbnRzW3N0b3JlZEdhbWUuVHVybl0KICAgICAgICBpZiAhZm91bmQgewogICAgICAgICAgICBwYW5pYyhmbXQuU3ByaW50Zih0eXBlcy5FcnJDYW5ub3RGaW5kV2lubmVyQnlDb2xvci5FcnJvcigpLCBzdG9yZWRHYW1lLlR1cm4pKQogICAgICAgIH0KICAgICAgICBrLk11c3RQYXlXaW5uaW5ncyhjdHgsICZhbXA7c3RvcmVkR2FtZSkKCiAgICAgICAgLy8gSGVyZSB5b3UgY2FuIHJlZ2lzdGVyIGEgZHJhdwogICAgICAgIGsuTXVzdFJlZ2lzdGVyUGxheWVyRm9yZmVpdChjdHgsICZhbXA7c3RvcmVkR2FtZSkKCiAgICAgICAgc3RvcmVkR2FtZS5Cb2FyZCA9ICZxdW90OyZxdW90OwogICAgICAgIGsuU2V0U3RvcmVkR2FtZShjdHgsIHN0b3JlZEdhbWUpCiAgICB9CiAgICAKICAgIC4uLgo="}}),e._v(" "),l("p",[e._v("That will get the job done and add the player's "),l("em",[e._v("win")]),e._v(", "),l("em",[e._v("lose")]),e._v(", or "),l("em",[e._v("forfeit")]),e._v(" counts to the store.")]),e._v(" "),l("p",[e._v("It is time to sort the players and clip the leaderboard to the best 100 ("),l("code",[e._v("LeaderboardWinnerLength")]),e._v(") players. Scaffold a new transaction:")]),e._v(" "),l("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"JCBpZ25pdGUgc2NhZmZvbGQgbWVzc2FnZSB1cGRhdGVCb2FyZCAtLW1vZHVsZSBsZWFkZXJib2FyZAo="}}),e._v(" "),l("p",[e._v("Again, you can first create some helper functions in "),l("code",[e._v("x/leaderboard/keeper/board.go")]),e._v(":")]),e._v(" "),l("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"Li4uCgogICAgZnVuYyBQYXJzZURhdGVBZGRlZEFzVGltZShkYXRlQWRkZWQgc3RyaW5nKSAoZGF0ZUFkZGVkUGFyc2VkIHRpbWUuVGltZSwgZXJyIGVycm9yKSB7CiAgICAgICAgZGF0ZUFkZGVkUGFyc2VkLCBlcnJEYXRlQWRkZWQgOj0gdGltZS5QYXJzZSh0eXBlcy5UaW1lTGF5b3V0LCBkYXRlQWRkZWQpCiAgICAgICAgcmV0dXJuIGRhdGVBZGRlZFBhcnNlZCwgc2RrZXJyb3JzLldyYXBmKGVyckRhdGVBZGRlZCwgdHlwZXMuRXJySW52YWxpZERhdGVBZGRlZC5FcnJvcigpLCBkYXRlQWRkZWQpCiAgICB9CgogICAgZnVuYyBTb3J0UGxheWVySW5mbyhwbGF5ZXJJbmZvTGlzdCBbXXR5cGVzLlBsYXllckluZm8pIHsKICAgICAgICBzb3J0LlNsaWNlU3RhYmxlKHBsYXllckluZm9MaXN0WzpdLCBmdW5jKGksIGogaW50KSBib29sIHsKICAgICAgICAgICAgaWYgcGxheWVySW5mb0xpc3RbaV0uV29uQ291bnQgJmd0OyBwbGF5ZXJJbmZvTGlzdFtqXS5Xb25Db3VudCB7CiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZQogICAgICAgICAgICB9CiAgICAgICAgICAgIGlmIHBsYXllckluZm9MaXN0W2ldLldvbkNvdW50ICZsdDsgcGxheWVySW5mb0xpc3Rbal0uV29uQ291bnQgewogICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlCiAgICAgICAgICAgIH0KICAgICAgICAgICAgZmlyc3RQbGF5ZXJUaW1lLCBfIDo9IFBhcnNlRGF0ZUFkZGVkQXNUaW1lKHBsYXllckluZm9MaXN0W2ldLkRhdGVVcGRhdGVkKQogICAgICAgICAgICBzZWNvbmRQbGF5ZXJUaW1lLF8gOj0gUGFyc2VEYXRlQWRkZWRBc1RpbWUocGxheWVySW5mb0xpc3Rbal0uRGF0ZVVwZGF0ZWQpCgogICAgICAgICAgICByZXR1cm4gZmlyc3RQbGF5ZXJUaW1lLkFmdGVyKHNlY29uZFBsYXllclRpbWUpCiAgICAgICAgfSkKICAgIH0KCiAgICBmdW5jIChrIEtlZXBlcikgdXBkYXRlQm9hcmQoY3R4IHNkay5Db250ZXh0LCBwbGF5ZXJJbmZvTGlzdCBbXXR5cGVzLlBsYXllckluZm8pIHsKICAgICAgICBTb3J0UGxheWVySW5mbyhwbGF5ZXJJbmZvTGlzdCkKCiAgICAgICAgaWYgdHlwZXMuTGVhZGVyYm9hcmRXaW5uZXJMZW5ndGggJmx0OyB1aW50NjQobGVuKHBsYXllckluZm9MaXN0KSkgewogICAgICAgICAgICBwbGF5ZXJJbmZvTGlzdCA9IHBsYXllckluZm9MaXN0Wzp0eXBlcy5MZWFkZXJib2FyZFdpbm5lckxlbmd0aF0KICAgICAgICB9CgogICAgICAgIGsuU2V0Qm9hcmQoY3R4LCB0eXBlcy5Cb2FyZCB7CiAgICAgICAgICAgIFBsYXllckluZm86IHBsYXllckluZm9MaXN0LAogICAgICAgIH0pCiAgICB9Cg=="}}),e._v(" "),l("p",[e._v("If it cannot parse the date information, it will throw an error that you need to include in "),l("code",[e._v("x/leaderboard/types/errors.go")]),e._v(":")]),e._v(" "),l("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"ICAgIEVyckludmFsaWREYXRlQWRkZWQgICAgID0gc2RrZXJyb3JzLlJlZ2lzdGVyKE1vZHVsZU5hbWUsIDExMjAsICZxdW90O2RhdGVBZGRlZCBjYW5ub3QgYmUgcGFyc2VkOiAlcyZxdW90OykK"}}),e._v(" "),l("p",[e._v("Now you need to call "),l("code",[e._v("updateBoard")]),e._v(" in "),l("code",[e._v("x/leaderboard/keeper/msg_server_update_board.go")]),e._v(":")]),e._v(" "),l("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"cGFja2FnZSBrZWVwZXIKCmltcG9ydCAoCiAgICAmcXVvdDtjb250ZXh0JnF1b3Q7CgogICAgJnF1b3Q7Z2l0aHViLmNvbS9iOWxhYi9jaGVja2Vycy94L2xlYWRlcmJvYXJkL3R5cGVzJnF1b3Q7CiAgICBzZGsgJnF1b3Q7Z2l0aHViLmNvbS9jb3Ntb3MvY29zbW9zLXNkay90eXBlcyZxdW90OwopCgpmdW5jIChrIG1zZ1NlcnZlcikgVXBkYXRlQm9hcmQoZ29DdHggY29udGV4dC5Db250ZXh0LCBtc2cgKnR5cGVzLk1zZ1VwZGF0ZUJvYXJkKSAoKnR5cGVzLk1zZ1VwZGF0ZUJvYXJkUmVzcG9uc2UsIGVycm9yKSB7CiAgICBjdHggOj0gc2RrLlVud3JhcFNES0NvbnRleHQoZ29DdHgpCgogICAgcGxheWVySW5mb0xpc3QgOj0gay5HZXRBbGxQbGF5ZXJJbmZvKGN0eCkKICAgIGsudXBkYXRlQm9hcmQoY3R4LCBwbGF5ZXJJbmZvTGlzdCkKCiAgICByZXR1cm4gJmFtcDt0eXBlcy5Nc2dVcGRhdGVCb2FyZFJlc3BvbnNle30sIG5pbAp9Cg=="}}),e._v(" "),l("p",[e._v("That is it! Now the checkers blockchain can keep track of player information, and create or update the leaderboard based on player information if requested via the CLI.")]),e._v(" "),l("h3",{attrs:{id:"forwarding-player-information-via-ibc"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#forwarding-player-information-via-ibc"}},[e._v("#")]),e._v(" Forwarding player information via IBC")]),e._v(" "),l("p",[e._v("It is time to look at how you can forward the player information via IBC.")]),e._v(" "),l("HighlightBox",{attrs:{type:"remember"}},[l("p",[e._v("Remember, you created the module with the "),l("code",[e._v("--ibc")]),e._v(" flag.")])]),e._v(" "),l("p",[e._v("You can scaffold an IBC transaction with:")]),e._v(" "),l("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"JCBpZ25pdGUgc2NhZmZvbGQgcGFja2V0IGNhbmRpZGF0ZSBQbGF5ZXJJbmZvOlBsYXllckluZm8gLS1tb2R1bGUgbGVhZGVyYm9hcmQK"}}),e._v(" "),l("p",[e._v("You do not want arbitrary player information, but instead, want to fetch player information from the store, so make a small adjustment to "),l("code",[e._v("x/leaderboard/client/cli/tx_candidate.go")]),e._v(". Look for the following lines and remove them:")]),e._v(" "),l("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"ICAgIGFyZ1BsYXllckluZm8gOj0gbmV3KHR5cGVzLlBsYXllckluZm8pCiAgICBlcnIgPSBqc29uLlVubWFyc2hhbChbXWJ5dGUoYXJnc1syXSksIGFyZ1BsYXllckluZm8pCiAgICBpZiBlcnIgIT0gbmlsIHsKICAgICAgICByZXR1cm4gZXJyCiAgICB9Cg=="}}),e._v(" "),l("p",[e._v("You will also need to remove the import of "),l("code",[e._v("encoding/json")]),e._v(" because it is not used anymore, and you should remove the parameter "),l("code",[e._v("argPlayerInfo")]),e._v(" from the "),l("code",[e._v("types.NewMsgSendCandidate(...)")]),e._v(" call.")]),e._v(" "),l("p",[e._v("The last step is to implement the logic to fetch and send player information in "),l("code",[e._v("x/leaderboard/keeper/msg_server_candidate.go")]),e._v(":")]),e._v(" "),l("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"cGFja2FnZSBrZWVwZXIKCmltcG9ydCAoCiAgICAmcXVvdDtlcnJvcnMmcXVvdDsKICAgICZxdW90O2NvbnRleHQmcXVvdDsKICAgIC4uLgopCgpmdW5jIChrIG1zZ1NlcnZlcikgU2VuZENhbmRpZGF0ZShnb0N0eCBjb250ZXh0LkNvbnRleHQsIG1zZyAqdHlwZXMuTXNnU2VuZENhbmRpZGF0ZSkgKCp0eXBlcy5Nc2dTZW5kQ2FuZGlkYXRlUmVzcG9uc2UsIGVycm9yKSB7CiAgICBjdHggOj0gc2RrLlVud3JhcFNES0NvbnRleHQoZ29DdHgpCgogICAgLy8gVE9ETzogbG9naWMgYmVmb3JlIHRyYW5zbWl0dGluZyB0aGUgcGFja2V0CgogICAgLy8gQ29uc3RydWN0IHRoZSBwYWNrZXQKICAgIHZhciBwYWNrZXQgdHlwZXMuQ2FuZGlkYXRlUGFja2V0RGF0YQoKICAgIGFsbFBsYXllckluZm8gOj0gay5HZXRBbGxQbGF5ZXJJbmZvKGN0eCkKCiAgICBmb3VuZF9pbl9wbGF5ZXJfbGlzdDo9IGZhbHNlCiAgICBmb3IgaSA6PSByYW5nZSBhbGxQbGF5ZXJJbmZvIHsKICAgICAgICBpZiBhbGxQbGF5ZXJJbmZvW2ldLkluZGV4ID09IG1zZy5DcmVhdG9yIHsKICAgICAgICAgICAgcGFja2V0LlBsYXllckluZm8gPSAmYW1wO2FsbFBsYXllckluZm9baV07CiAgICAgICAgICAgIGZvdW5kX2luX3BsYXllcl9saXN0ID0gdHJ1ZQogICAgICAgICAgICBicmVhawogICAgICAgIH0KICAgIH0KCiAgICBpZiAhZm91bmRfaW5fcGxheWVyX2xpc3QgewogICAgICAgIHJldHVybiBuaWwsIGVycm9ycy5OZXcoJnF1b3Q7cGxheWVyIG5vdCBmb3VuZCZxdW90OykKICAgIH0KLi4uCn0KCg=="}}),e._v(" "),l("p",[e._v("You do not handle received packages, because this module is only meant for sending player information to a separate leaderboard chain, which you will create next.")])],1)}),[],!1,null,null,null);g.default=o.exports}}]);