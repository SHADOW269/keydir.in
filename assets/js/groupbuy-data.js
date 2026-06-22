/* ════════════════════════════════════════════════════════════════
   KEYDIR.in — Group Buy Data
   ════════════════════════════════════════════════════════════════
   Single source of truth for the /groupbuy/ page.
   Drop this file in /assets/js/ and load it BEFORE shared.js on
   the group buy page:

     <script src="/assets/js/groupbuy-data.js"></script>
     <script src="/assets/js/shared.js"></script>

   Edit the GROUP_BUYS array below to add / update / close a GB.
   Everything else on the page (counts, tabs, cards, sorting) is
   generated automatically from this array.
   ════════════════════════════════════════════════════════════════
   Fields:
     id              {string}   Unique slug, used as a DOM id (e.g. "gb-001")
     name            {string}   Group buy product name
     organizer       {string}   Vendor / builder / community member running it
     organizer_url   {string}   Link to organizer's store or profile
     icon            {string}   Emoji shown on the card
     category        {string}   One of: "Keyboard" | "Keycaps" | "Switches" |
                                "Artisan" | "Accessory" | "Deskpad/Mousepad"
     status          {string}   "active" | "upcoming" | "closed"
     desc            {string}   1–2 sentence description of the product
     price           {string}   Display price string, e.g. "₹8,500" or "₹4,200 – ₹6,800"
     moq             {string}   Minimum order qty / interest check status, e.g. "MOQ: 50 reached"
     start_date      {string}   "DD Mon YYYY" — when the GB opened
     end_date        {string}   "DD Mon YYYY" — interest check / payment deadline
                                (for closed GBs this is when it closed)
     est_delivery    {string}   Estimated delivery window, e.g. "Q3 2026"
     join_url        {string}   Link to join/pay (Discord, Google Form, store page).
                                Leave "" if closed and link no longer needed.
     discord         {string}   Discord invite/channel link. "" if none.
     warning         {boolean}  true = show a caution badge on the card
     warning_message {string}   Caution text (only shown if warning:true). "" otherwise.
     outcome         {string}   ONLY for status:"closed" — what happened, e.g.
                                "Delivered on time, Mar 2026" / "Refunded — MOQ not met"
   ══════════════════════════════════════════════════════════════ */

const GROUP_BUYS = [

  /* ── CURRENT ── */
  {
    id: "gb-kraze65",
    name: "[GB] Kraze65",
    organizer: "Neomacro",
    organizer_url: "https://neomacro.in",
    icon: "⌨",
    category: "Keyboard",
    status: "active",
    desc: "“Kraze” comes from a blend of “Keyboard” and “Craze.” The name represents the passion and enthusiasm shared by keyboard lovers around the world.",
    price: "₹11,000",
    moq: "MOQ: NOT SET",
    start_date: "08 Jun 2026",
    end_date: "30 Jun 2026",
    est_delivery: "Q4 2026",
    join_url: "https://neomacro.in/search?q=Kraze",
    discord: "https://discord.com/invite/W4ZzfmC8Me",
    warning: false,
    warning_message: "",
    outcome: ""
  },


  

  // ── Add new group buys below this line ──
  // {
  //   id: "gb-unique-slug",
  //   name: "Product Name",
  //   organizer: "Vendor / Builder Name",
  //   organizer_url: "https://example.in/",
  //   icon: "⌨",
  //   category: "Keyboard",
  //   status: "active",            // "active" | "upcoming" | "closed"
  //   desc: "Short description of the product.",
  //   price: "₹0,000",
  //   moq: "MOQ: 0 / 0",
  //   start_date: "DD Mon YYYY",
  //   end_date: "DD Mon YYYY",
  //   est_delivery: "Q_ 2026",
  //   join_url: "https://...",
  //   discord: "",
  //   warning: false,
  //   warning_message: "",
  //   outcome: ""                  // only fill in if status is "closed"
  // },
];