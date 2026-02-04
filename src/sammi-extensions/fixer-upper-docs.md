---
layout: product-docs.njk
title: Fixer Upper ~ Documentation
permalink: /shop/sammi-extensions/fixer-upper/documentation/
---
# Fixed Triggers
"Fixed Triggers" are built-in triggers that have had their behavior overridden by Fixer Upper. These are the most plug-and-play feature of the extension as they require the least amount of intervention in 80% of use cases.

Please check each trigger you'll be relying on the fixed behavior for, as not every trigger can be fixed in an ideal way and might be missing trigger data, or behave unexpectedly.

## Hype Train

on Janurary 15th, 2026, Hype Train v1 events were removed from Twitch's API, and replaced with v2. SAMMI versions below 2026.1.1 relied on v1, and thus, triggers for Hype Train related content are broken on those versions. Unfortunately, 2026.1.1 does not attempt to replicate the original format of v1's data, and opts to send data to SAMMI as-is; breaking all previous buttons.

This extension connects to v2, and reformats all the new data to match the old payload from v1 to ensure maximum compatibility with pre-existing SAMMI buttons, however, the following Trigger Data no longer exists:

- `last_contribution`
  - completely removed from v2.

Hype Train v2 is a very different workflow from v1. Instead of gathering info about users who contribute to your train from Hype Train events directly, you listen to other events that *contribute* to your hype train, and log them as an on-going train is occurring. **progressed** triggers run on an interval (according to the documentation) alongside contributions, so if you want to get info about a contributor, make sure you're listening to subs and bits.

### Started/Begin

#### Trigger Data

{primary}
| Pull Value | Type | Description |
| --- | --- | --- |
|`all_time_high_total_progress`(NEW!)|number|The all-time high total this type of Hype Train has reached for this broadcaster.
|`all_time_high_level`(NEW!)|number|The all-time high level this type of Hype Train has reached for this broadcaster.
|`current_goal`|number|The number of points required to reach the next level.
|`current_level`|number|The current level of the Hype Train.
|`event`|string|The type of event that triggered. value will be **begin**.
|`expires_at`|string|The time in RFC3339 when the Hype Train expires. The expiration is extended when the Hype Train reaches a new level.
|`from_channel_display_name`(NEW!)|string|Display name for this broadcaster.
|`from_channel_id`|string|id for this broadcaster.
|`from_channel_user_name`(NEW!)|string|login for this broadcaster.
|`goal_progress`|number|The number of points contributed to the Hype Train at the current level.
|`id`|number|The Hype Train ID.
|`is_golden_kappa_train`|boolean|self explanatory. Exists for compatibility reasons. It is suggested to use the new `train_type` data instead!
|`is_shared_train`(NEW!)|boolean|Indicates if the Hype Train is shared. When true, `shared_train_participants` will contain an array of broadcasters the train is shared with. Otherwise, will be undefined. Check this first!
|`raw_data`|Object|Raw event data from Twitch, unmodified.
|`started_at`|string|The time in RFC3339 when the Hype Train started.
|`shared_train_participants`|Object[]|Contains the list of broadcasters in the shared Hype Train if `is_shared_train` is true, otherwise will be undefined.
|⎩<span style="margin-left:8px"></span>`broadcaster_user_id`|string|The ID of the broadcaster participating in the shared Hype Train.
|⎩<span style="margin-left:8px"></span>`broadcaster_user_login`|string|The login of the broadcaster participating in the shared Hype Train.
|⎩<span style="margin-left:8px"></span>`broadcaster_user_name`|string|The display name of the broadcaster participating in the shared Hype Train.
|`top_bits_contribution`|Object|details of the top bits contributor of the Hype train.|
|⎩<span style="margin-left:8px"></span>`user_id`|string|The ID of the user that made the contribution
|⎩<span style="margin-left:8px"></span>`user_login`|string|The login of the user that made the contribution
|⎩<span style="margin-left:8px"></span>`user_name`|string|The display name of the user that made the contribution
|⎩<span style="margin-left:8px"></span>`type`|string|The contribution method used. The value will be **bits**, Cheered with bits.
|⎩<span style="margin-left:8px"></span>`total`|number|The total amount of Hype Train points contributed. will be equal to the amount of bits contributed.
|`top_other_contribution`|Object|details of the top other contributor of the Hype train.|
|⎩<span style="margin-left:8px"></span>`user_id`|string|The ID of the user that made the contribution
|⎩<span style="margin-left:8px"></span>`user_login`|string|The login of the user that made the contribution
|⎩<span style="margin-left:8px"></span>`user_name`|string|The display name of the user that made the contribution
|⎩<span style="margin-left:8px"></span>`type`|string|The contribution method used. The value will be **bits**, Cheered with bits.
|⎩<span style="margin-left:8px"></span>`total`|number|The total amount of Hype Train points contributed.
|`top_subscription_contribution`|Object|details of the top sub contributor of the Hype train.|
|⎩<span style="margin-left:8px"></span>`user_id`|string|The ID of the user that made the contribution
|⎩<span style="margin-left:8px"></span>`user_login`|string|The login of the user that made the contribution
|⎩<span style="margin-left:8px"></span>`user_name`|string|The display name of the user that made the contribution
|⎩<span style="margin-left:8px"></span>`type`|string|The contribution method used. The value will be **bits**, Cheered with bits.
|⎩<span style="margin-left:8px"></span>`total`|number|The total amount of Hype Train points contributed. total is 500, 1000, or 2500 to represent tier 1, 2, or 3 subscriptions, respectively. Will stack with any additional subscriptions (gifted) and account their tiers into the point total.
|`top_contributions`|Object[]| An array of the contributors with the most points contributed. First element is highest, stores up to a max of three(?)
|⎩<span style="margin-left:8px"></span>`user_id`|string|The ID of the user that made the contribution
|⎩<span style="margin-left:8px"></span>`user_login`|string|The login of the user that made the contribution
|⎩<span style="margin-left:8px"></span>`user_name`|string|The display name of the user that made the contribution
|⎩<span style="margin-left:8px"></span>`type`|string|The contribution method used. Possible values are:<ul><li>**bits** - Bits contributions with CHeering, Power-ups, and Extensions.</li><li>**subscription** - Subscription activity like subscribing or gifting subscriptions.</li><li>**other** - Covers other contribution methods not listed.</li></ul>
|⎩<span style="margin-left:8px"></span>`total`|number|The total amount of Hype Train points contributed. If type is bits, total represents the amount of Bits used. If type is subscription, total is 500, 1000, or 2500 to represent tier 1, 2, or 3 subscriptions, respectively.
|`total_progress`|number|Total points contributed to the Hype Train.
|`train_type`|string|The type of the Hype Train. Possible values are:<ul><li>treasure</li><li>golden_kappa</li><li>regular</li></ul>
|`type`|number|The type of event that triggered, numeric. value will be **1**.

### Progressed

#### Trigger Data

{primary}
| Pull Value | Type | Description |
| --- | --- | --- |
|`current_goal`|number|The number of points required to reach the next level.
|`current_level`|number|The current level of the Hype Train.
|`event`|string|The type of event that triggered. value will be **progressed**.
|`expires_at`|string|The time in RFC3339 when the Hype Train expires. The expiration is extended when the Hype Train reaches a new level.
|`from_channel_display_name`(NEW!)|string|Display name for this broadcaster.
|`from_channel_id`|string|id for this broadcaster.
|`from_channel_user_name`(NEW!)|string|login for this broadcaster.
|`goal_progress`|number|The number of points contributed to the Hype Train at the current level.
|`id`|number|The Hype Train ID.
|`is_golden_kappa_train`|boolean|self explanatory. Exists for compatibility reasons. It is suggested to use the new `train_type` data instead!
|`is_shared_train`(NEW!)|boolean|Indicates if the Hype Train is shared. When true, `shared_train_participants` will contain an array of broadcasters the train is shared with. Otherwise, will be undefined. Check this first!
|`raw_data`|Object|Raw event data from Twitch, unmodified.
|`started_at`|string|The time in RFC3339 when the Hype Train started.
|`shared_train_participants`|Object[]|Contains the list of broadcasters in the shared Hype Train if `is_shared_train` is true, otherwise will be undefined.
|⎩<span style="margin-left:8px"></span>`broadcaster_user_id`|string|The ID of the broadcaster participating in the shared Hype Train.
|⎩<span style="margin-left:8px"></span>`broadcaster_user_login`|string|The login of the broadcaster participating in the shared Hype Train.
|⎩<span style="margin-left:8px"></span>`broadcaster_user_name`|string|The display name of the broadcaster participating in the shared Hype Train.
|`top_bits_contribution`|Object|details of the top bits contributor of the Hype train.|
|⎩<span style="margin-left:8px"></span>`user_id`|string|The ID of the user that made the contribution
|⎩<span style="margin-left:8px"></span>`user_login`|string|The login of the user that made the contribution
|⎩<span style="margin-left:8px"></span>`user_name`|string|The display name of the user that made the contribution
|⎩<span style="margin-left:8px"></span>`type`|string|The contribution method used. The value will be **bits**, Cheered with bits.
|⎩<span style="margin-left:8px"></span>`total`|number|The total amount of Hype Train points contributed. will be equal to the amount of bits contributed.
|`top_other_contribution`|Object|details of the top other contributor of the Hype train.|
|⎩<span style="margin-left:8px"></span>`user_id`|string|The ID of the user that made the contribution
|⎩<span style="margin-left:8px"></span>`user_login`|string|The login of the user that made the contribution
|⎩<span style="margin-left:8px"></span>`user_name`|string|The display name of the user that made the contribution
|⎩<span style="margin-left:8px"></span>`type`|string|The contribution method used. The value will be **bits**, Cheered with bits.
|⎩<span style="margin-left:8px"></span>`total`|number|The total amount of Hype Train points contributed.
|`top_subscription_contribution`|Object|details of the top sub contributor of the Hype train.|
|⎩<span style="margin-left:8px"></span>`user_id`|string|The ID of the user that made the contribution
|⎩<span style="margin-left:8px"></span>`user_login`|string|The login of the user that made the contribution
|⎩<span style="margin-left:8px"></span>`user_name`|string|The display name of the user that made the contribution
|⎩<span style="margin-left:8px"></span>`type`|string|The contribution method used. The value will be **bits**, Cheered with bits.
|⎩<span style="margin-left:8px"></span>`total`|number|The total amount of Hype Train points contributed. total is 500, 1000, or 2500 to represent tier 1, 2, or 3 subscriptions, respectively. Will stack with any additional subscriptions (gifted) and account their tiers into the point total.
|`top_contributions`|Object[]| An array of the contributors with the most points contributed. First element is highest, stores up to a max of three(?)
|⎩<span style="margin-left:8px"></span>`user_id`|string|The ID of the user that made the contribution
|⎩<span style="margin-left:8px"></span>`user_login`|string|The login of the user that made the contribution
|⎩<span style="margin-left:8px"></span>`user_name`|string|The display name of the user that made the contribution
|⎩<span style="margin-left:8px"></span>`type`|string|The contribution method used. Possible values are:<ul><li>**bits** - Bits contributions with CHeering, Power-ups, and Extensions.</li><li>**subscription** - Subscription activity like subscribing or gifting subscriptions.</li><li>**other** - Covers other contribution methods not listed.</li></ul>
|⎩<span style="margin-left:8px"></span>`total`|number|The total amount of Hype Train points contributed. If type is bits, total represents the amount of Bits used. If type is subscription, total is 500, 1000, or 2500 to represent tier 1, 2, or 3 subscriptions, respectively.
|`total_progress`|number|Total points contributed to the Hype Train.
|`train_type`|string|The type of the Hype Train. Possible values are:<ul><li>treasure</li><li>golden_kappa</li><li>regular</li></ul>
|`type`|number|The type of event that triggered, numeric. value will be **6**.

### Ended/End

#### Trigger Data

{primary}
| Pull Value | Type | Description |
| --- | --- | --- |
|`current_goal`|number|The number of points required to reach the next level.
|`current_level`|number|The current level of the Hype Train.
|`cooldown_ends_at`|string|The time in RFC3339 when the Hype Train cooldown ends so that the next Hype Train can start.
|`event`|string|The type of event that triggered. value will be **end**.
|`ended_at`|string|The time in RFC3339 when the Hype Train ended.
|`from_channel_display_name`(NEW!)|string|Display name for this broadcaster.
|`from_channel_id`|string|id for this broadcaster.
|`from_channel_user_name`(NEW!)|string|login for this broadcaster.
|`goal_progress`|number|The number of points contributed to the Hype Train at the current level.
|`id`|number|The Hype Train ID.
|`is_golden_kappa_train`|boolean|self explanatory. Exists for compatibility reasons. It is suggested to use the new `train_type` data instead!
|`is_shared_train`(NEW!)|boolean|Indicates if the Hype Train is shared. When true, `shared_train_participants` will contain an array of broadcasters the train is shared with. Otherwise, will be undefined. Check this first!
|`raw_data`|Object|Raw event data from Twitch, unmodified.
|`started_at`|string|The time in RFC3339 when the Hype Train started.
|`shared_train_participants`|Object[]|Contains the list of broadcasters in the shared Hype Train if `is_shared_train` is true, otherwise will be undefined.
|⎩<span style="margin-left:8px"></span>`broadcaster_user_id`|string|The ID of the broadcaster participating in the shared Hype Train.
|⎩<span style="margin-left:8px"></span>`broadcaster_user_login`|string|The login of the broadcaster participating in the shared Hype Train.
|⎩<span style="margin-left:8px"></span>`broadcaster_user_name`|string|The display name of the broadcaster participating in the shared Hype Train.
|`top_bits_contribution`|Object|details of the top bits contributor of the Hype train.|
|⎩<span style="margin-left:8px"></span>`user_id`|string|The ID of the user that made the contribution
|⎩<span style="margin-left:8px"></span>`user_login`|string|The login of the user that made the contribution
|⎩<span style="margin-left:8px"></span>`user_name`|string|The display name of the user that made the contribution
|⎩<span style="margin-left:8px"></span>`type`|string|The contribution method used. The value will be **bits**, Cheered with bits.
|⎩<span style="margin-left:8px"></span>`total`|number|The total amount of Hype Train points contributed. will be equal to the amount of bits contributed.
|`top_other_contribution`|Object|details of the top other contributor of the Hype train.|
|⎩<span style="margin-left:8px"></span>`user_id`|string|The ID of the user that made the contribution
|⎩<span style="margin-left:8px"></span>`user_login`|string|The login of the user that made the contribution
|⎩<span style="margin-left:8px"></span>`user_name`|string|The display name of the user that made the contribution
|⎩<span style="margin-left:8px"></span>`type`|string|The contribution method used. The value will be **bits**, Cheered with bits.
|⎩<span style="margin-left:8px"></span>`total`|number|The total amount of Hype Train points contributed.
|`top_subscription_contribution`|Object|details of the top sub contributor of the Hype train.|
|⎩<span style="margin-left:8px"></span>`user_id`|string|The ID of the user that made the contribution
|⎩<span style="margin-left:8px"></span>`user_login`|string|The login of the user that made the contribution
|⎩<span style="margin-left:8px"></span>`user_name`|string|The display name of the user that made the contribution
|⎩<span style="margin-left:8px"></span>`type`|string|The contribution method used. The value will be **bits**, Cheered with bits.
|⎩<span style="margin-left:8px"></span>`total`|number|The total amount of Hype Train points contributed. total is 500, 1000, or 2500 to represent tier 1, 2, or 3 subscriptions, respectively. Will stack with any additional subscriptions (gifted) and account their tiers into the point total.
|`top_contributions`|Object[]| An array of the contributors with the most points contributed. First element is highest, stores up to a max of three(?)
|⎩<span style="margin-left:8px"></span>`user_id`|string|The ID of the user that made the contribution
|⎩<span style="margin-left:8px"></span>`user_login`|string|The login of the user that made the contribution
|⎩<span style="margin-left:8px"></span>`user_name`|string|The display name of the user that made the contribution
|⎩<span style="margin-left:8px"></span>`type`|string|The contribution method used. Possible values are:<ul><li>**bits** - Bits contributions with CHeering, Power-ups, and Extensions.</li><li>**subscription** - Subscription activity like subscribing or gifting subscriptions.</li><li>**other** - Covers other contribution methods not listed.</li></ul>
|⎩<span style="margin-left:8px"></span>`total`|number|The total amount of Hype Train points contributed. If type is bits, total represents the amount of Bits used. If type is subscription, total is 500, 1000, or 2500 to represent tier 1, 2, or 3 subscriptions, respectively.
|`total_progress`|number|Total points contributed to the Hype Train.
|`train_type`|string|The type of the Hype Train. Possible values are:<ul><li>treasure</li><li>golden_kappa</li><li>regular</li></ul>
|`type`|number|The type of event that triggered, numeric. value will be **4**.

## New Follower

Just adds a new trigger value. Works fine in all versions currently.

#### Trigger Data

{primary}
| Pull Value | Type | Description |
| --- | --- | --- |
|`user_name`|string|login of the user who followed.
|`raw_data`|Object|raw Twitch EventSub data for this event.
|`display_name`|string|display name of the user who followed.
|`user_id`|string|id of the user who followed.
|`followed_at` (NEW!)|string|The time in RFC3339 when the user followed.