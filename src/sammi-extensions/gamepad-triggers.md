---json
{
  "layout": "product.njk",
  "date": "2022-07-04",
  "title": "Gamepad Triggers",
  "description": "Control SAMMI with your Gamepad using Extension Triggers!",
  "version": "1.0.2",
  "versionSummaryHeader": "Critical Fix!",
  "versionSummaryBody": "Fixed an issue where data would be sent too fast to SAMMI, causing it to lock up severely. Sorry this is long overdue!",
  "tags": ["product", "sammiExtension"],
  "price": "$4",
  "permalink": "/shop/sammi-extensions/gamepad-triggers/",
  "image": "/assets/images/sammi-extensions/gamepad-triggers/cover.png",
  "imageAlt": "Product icon for Gamepad Triggers",
  "authors": ["Landie"],
  "shopLabels": ["$4", "Utility"],
  "downloadLink": "https://landie.land/shop/sammi-extensions/gamepad-triggers",
  "sammiImage": "https://landie.land/assets/sammi-extensions/gamepad-triggers/cover_bridge.png"
}
---

<!--overview start-->

❓ What is this?
===============

Check out the video!

This extension gives SAMMI controller support via the HTML5 Gamepad API! Trigger buttons with your controller by pressing and releasing buttons, shifting the analog stick, and using analog triggers!

Buttons are triggered via "Extension Triggers", which are explained in the [docs](#documentation)! With every extension trigger attatched to a button, you're able to pull lots of data about your controller via `Trigger Pull Data` such as joystick position, angle, radians, and more!

If your controller works on [gamepadviewer.com](https://gamepadviewer.com), it should work with this extension. Before purchasing, check there!

✨ Features
==========

* Normalized layouts across various popular controllers
* Button Triggers
    * PRESS
    * RELEASE
* Analog Button Triggers
    * PRESS
    * CHANGE
    * RELEASE
* Joystick Triggers
    * START
    * CHANGE
    * END
* Fully contained in Bridge, just needs to be docked in OBS!
* Bridge contains all dynamically generated triggers in a neat table (check docs)

🌟 How do I get started?
========================

Download the extension, then, head over to the setup tab, where you will be redirected to my website's setup page for Gamepad Triggers!

💚 Support
==========

If you want me to continue making awesome SAMMI extensions for everyone, please consider donating to my [Ko-Fi](https://ko-fi.com/landie)! Supporting me allows me to get more equipment to make extensions with, gives me some food on the table, and lets me know that my extensions are appreciated!

Made with Love, [Landie](https://landie.land)

<!--overview end-->
<!-- more -->
<!--Overview Right Side start-->

<iframe width="560" height="315" src="https://www.youtube.com/embed/bvlmrJWKJJ0"
                                            title="YouTube video player" frameborder="0"
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                            allowfullscreen></iframe>

<!--Overview Right Side end-->
<!-- more -->
<!--setup start-->

Getting Started
===============

### Prerequisites

**This requires SAMMI version "2022.3.0 CE" or higher to work!** Download SAMMI [here](https://sammi.solutions/docs/download)

**The bridge must be connected at ALL times**

**Bridge MUST be docked in OBS**

### Installation

1.  Download the .SEF file
2.  Install the .SEF file via the left hand side menu of the SAMMI core, and clicking the bridge button, then clicking "Install an Extension".

Done!

### Bridge And You™

The Bridge is an integral part of this extension, and in order to use it properly, you need to familiarize yourself with the bridge's interface. **This works best with chrome, you should already have your bridge docked in OBS, which uses chromium. Firefox, and other browsers have issues.**

![gamepad triggers bridge](./gamepad-triggers-docs-1.png)

Above it tells you the name of the extension, author, my socials, and version. If an update is available, a big yellow banner will appear telling you to update. Please make sure to click that when you see it.

Below that is a massive table of analog sticks, and buttons that are associated to your controller on connection. It also displays the name of your controller. These are dynamically generated [Extension Triggers](./gamepad-triggers.html#documentation) for use in the SAMMI Core.

The very bottom has links to support me, which i highly recommend so i can keep making awesome extensions for you lovely people 💚

there is also a special thanks accordion drop down for beta testers and supporters! (and soon patrons...?)

Updating
--------

I value updates a lot, so i can ensure everyone has the top quality product! When the bridge connects, there is an automatic update check. If there is a new update available, an alert message will be displayed in your receiver to check your bridge for an update button which checks, and provides a link to the releases section of this extension.

If you have a lot of alert messages pop up on bridge connect, you might miss it. I recommend clicking the "Check for updates" button in this extension's tab in the bridge every so often, or if you encounter an issue out of the blue.

### ⚠ Updating Procedure

To update this extension, please follow the steps below!

1.  Install the extension as normal. Allow the bridge to continue with installation, confirming overwrite. done!

<!--setup end-->
<!-- more -->
<!--tutorials start-->

Tutorial content here!

<!--tutorials end-->
<!-- more -->
<!--troubleshooting start-->
<!-- more -->
<!--troubleshooting end-->
<!--patchnotes start-->

# 1.0.2

### Bug Fixes:

- Fixed an issue where data would be sent too fast to SAMMI, causing it to lock up severely. Sorry this is long overdue!

<!--patchnotes end-->
