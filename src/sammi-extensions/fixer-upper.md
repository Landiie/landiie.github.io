---json
{
  "layout": "product.njk",
  "date": "2023-05-15",
  "title": "Fixer Upper",
  "description": "Improve/Override (broken) SAMMI features for a stable experience.",
  "version": "1.0.0",
  "versionSummaryHeader": "Initial Release",
  "versionSummaryBody": "Initial Release",
  "tags": ["product", "sammiExtension", "utility"],
  "price": "FREE",
  "permalink": "/shop/sammi-extensions/fixer-upper/",
  "image": "/assets/images/sammi-extensions/fixer-upper/cover.png",
  "imageAlt": "Product icon for Fixer Upper",
  "authors": ["Landie"],
  "shopLabels": ["Free", "Utility"],
  "downloadLink": "https://landie.land/shop/sammi-extensions/fixer-upper",
  "sammiImage": "https://landie.land/assets/sammi-extensions/fixer-upper/cover_bridge.png"
}
---

<!--overview start-->

# ❓ What is this?

An extension that aims to fix features that were broken/poorly implemented in SAMMI due to updates of negligence, or lack of users choosing to update the application due to various outstanding complaints of the team surrounding SAMMI in it's current state.

In it's current state, this extension is:
- A drop-in replacement for broken/poorly implemented Twitch triggers such as:
  - Twitch Hype Train
  - Twitch New Follower
- Reimplemented test triggers for mentioned Twitch triggers (wip, only follows work atm)
- Event-Drop prevention, resending reimplemented Twitch triggers if SAMMI gets closed during events.

Implementation of these fixes prioritize the least amount of user intervention possible, so the majority of fixes should be plug and play. Please refer to the documentation for individual feature breakdown.

This extension should work on every version of SAMMI. It was made with **2025.3.0** in mind.

This is entirely free and open source, and can be contributed to here: https://github.com/Landiie/SAMMI-Fixer-Upper

Please consider donating at https://ko-fi.com/landie, every little bit goes towards a better future for streamers across the globe with my prolonged existence.

As always, Made with love 💚

# ❓How does it work?

When the extension is installed, it takes your Twitch credentials and creates it's own EventSub connection directly in the bridge. It then gets all currently subbed EventSub subscriptions, looks for session IDs that aren't related to it's own, and looks for a list of triggers to unsubscribe to, to avoid both Fixer Upper, and SAMMI from sending events at the same time, causing duplicate events.

# ❓Why bother?

I moved on from the development of SAMMI and started working on my own alternative, But that won't come out for a long time. Ultimately, me, and hundreds of other users still use SAMMI for ours streams to operate even though we want to stop relying on it due to changes in management and some rather unsavory comments made about the community by said management, embracements of AI, harsh treatment towards extension developers, and it's insistance on disregarding community feedback. Users have instead chosen to not update beyond certain versions to avoid instability or just don't want to interact with new management's changes.

Sadly, staying on an old update imposes issues, specifically with third party services like Twitch or OBS changing their APIs and SAMMI not knowing how to operate around those changes without intervention.

As it stands, it looks like the current dev is updating as these issues arise, however, these implementations are lazily made and completely ignore how SAMMI buttons are structured and refuse to do the bare minimum to support these pre-existing layouts. This extension aims to support users to the best of it's ability and overall provide a pleasent experience to those not willing to engage with recent patches.

<!--overview end-->
<!-- more -->
<!--Overview Right Side start-->

Nothing to see here!

<!--Overview Right Side end-->
<!-- more -->
<!--setup start-->

# Getting Started

## Installation

1.  Download the .sef file
2.  Install the .sef file via the left hand side menu of the core, clicking the bridge button, then clicking "Install an Extension".

## Updating

1.  Install the .sef file via the left hand side menu of the core, clicking the bridge button, then clicking "Install an Extension".
2.  👍 (ur good)

## Usage

Visit the [docs](#documentation) for usage!

<!--setup end-->
<!-- more -->
<!--tutorials start-->

None

<!--tutorials end-->
<!-- more -->
<!-- troubleshooting start-->

None yet

<!-- troubleshooting end-->
<!-- more -->
<!--patchnotes start-->
# 1.0.0
- Initial release 🎉

<!--patchnotes end-->
