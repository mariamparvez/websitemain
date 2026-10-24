You are working on my already-developed portfolio website project for mariamparvez.in inside Figma Make.

IMPORTANT:

* This is an additive update ONLY.
* Do NOT redesign, restructure, resize, refactor, or disturb any existing sections/components/pages.
* Preserve the current design system, spacing, responsiveness, typography, animations, colors, and grid system exactly as-is.
* Do NOT modify navbar/footer/global styles.
* Keep implementation lightweight and production-ready.

---

1. CERTIFICATIONS FIX

---

The certification links are currently mapped incorrectly.

I will provide Certificates to the prompt. Take the names of them and append them to the card header of each certificate with pop up that shows the pdf of the certificate. the cta btn should be same as what i offer cta btns 

Match each certification with its correct URL properly.

Do NOT:

* rename certifications
* redesign the section
* change styling/layout

Only fix hyperlink mapping and the requested changes i have mentioned 

---

2. ART PAGE SCROLL FIX

---

Current issue:
When navigating to /art from the /home page, the Art page opens at random scroll positions.

Required:
Whenever /art loads, it must always open from the TOP of the page.

Implement proper scroll reset behavior.

Accepted approaches:

* window.scrollTo(0,0)
* router-based scroll restoration
* proper navigation scroll handling

Do NOT affect any other routing/navigation behavior.

---

3. EXPERIENCE TIMELINE CARD STACK SECTION

---

Create ONE NEW standalone section for my experience timeline.

IMPORTANT:

* Do NOT disturb any existing sections
* Keep current portfolio visual language
* Preserve responsiveness and grid system already used on the website

Interaction Style:
Modern swipeable horizontal card stack inspired by dating app interactions.

Behavior:

* Drag/swipe left → next experience
* Drag/swipe right → previous experience
* Smooth snapping animation
* Mouse drag + touch support
* Responsive across desktop/tablet/mobile

IMPORTANT:
This is NOT Tinder-style full-screen cards.

Card Design Requirements:

* Compact height
* Full-width according to current site container/grid
* Premium minimal aesthetic
* Smooth layered depth
* Elegant spacing
* Lightweight interaction
* No layout shifts

Performance:

* GPU optimized transforms
* Smooth spring animation
* Lightweight implementation
* Avoid unnecessary heavy libraries

Card Content Structure:

* Role
* Company
* Location
* Duration
* Key achievements
* Optional logo support

Order:
Latest → Oldest

---

## EXPERIENCE DATA

1. Lead UI UX Designer and Developer
   Company: Prodapt
   Location: Chennai, India
   Duration: Mar 2025 – Present

Achievements:

* Led enterprise-level UX initiatives for BT SRIMS stakeholders, collaborating with business analysts to deliver strategic digital experiences
* Mentored junior designers and improved cross-functional collaboration to optimize usability and product workflows
* Contributed to frontend-aware UX execution, ensuring seamless design-to-development handoffs for responsive digital products

---

2. Primary Web & Graphic Designer (Freelance)
   Company: Catalyst Media FZE
   Location: Sharjah, UAE
   Duration: Jan 2025 – Mar 2025

Achievements:

* Designed and developed the company website, strengthening digital brand visibility and UI consistency
* Managed visual direction and web presence independently as freelance creative contributor for international client

---

3. UI/UX Designer Coach and Trainer
   Company: ACTE Technologies
   Location: Chennai, India
   Duration: Jul 2024 – Jan 2025

Achievements:

* Mentored aspiring designers and developers through structured UI/UX coaching and career-focused educational content
* Conducted frontend workflow training, guiding students through practical, real-world design challenges

---

4. Senior UI UX Designer and Developer
   Company: InSoft.com
   Location: Chennai, India
   Duration: Sep 2022 – Jul 2024

Achievements:

* Led website redesign initiatives for US and Belgium projects, delivering responsive UX workflows and frontend-aware design execution
* Mentored junior designers and developers, improving team collaboration and design-to-code workflows

---

5. UI UX Designer and Developer
   Company: YOCO Labs Private Limited
   Location: Chennai, India
   Duration: Nov 2021 – Sep 2022

Achievements:

* Designed CCTV software interfaces focused on usability optimization, workflow efficiency, and product adoption
* Contributed to interaction-focused product experiences that enhanced user engagement and operational clarity

---

6. Web Designer
   Company: Netaxis IT Solutions
   Location: Chennai, India
   Duration: Sep 2020 – Nov 2021

Achievements:

* Developed responsive web experiences using HTML, CSS, and JavaScript
* Built foundational UX and frontend implementation skills through practical project execution

---

7. Graphic Designer
   Company: Deloitte Digital (formerly Ad2Pro Media Solutions)
   Location: Chennai, India
   Duration: Sep 2018 – Sep 2020

Achievements:

* Designed creative assets for international clients including Macy’s and News Corp
* Strengthened branding, visual hierarchy, and production-ready design execution across print and digital campaigns

---

8. Graphic Designer Intern
   Company: Deloitte Digital
   Location: Chennai, India
   Duration: Mar 2018 – Sep 2018

Achievements:

* Selected among 400 applicants to contribute to enterprise design production workflows
* Assisted creative teams while learning branding standards and large-scale design execution

---

4. INFINITE MARQUEE SECTION

---

Create ONE bold premium marquee-style horizontal section.

Behavior:

* Infinite seamless scrolling
* Linear movement
* Left → Right direction
* Smooth continuous motion
* No visible jump/glitch during loop

Visual Direction:

* Premium
* Bold
* Minimal
* Modern
* Brand-focused

Optimize and professionally refine this animation:

@keyframes marqueeScroll {
from {
transform: translateX(0);
}
to {
transform: translateX(-100%);
}
}

animation: marqueeScroll 10s linear infinite;

Implementation must feel smooth and production-ready.

---

5. MARQUEE CONTENT + LINKS

---

This marquee should showcase my platforms and brand presence.

Use proper linking support.

Platforms:

* LinkedIn → https://www.linkedin.com/in/themariamparvez/
* Superprof →
  https://www.superprof.co.in/with-over-years-experience-being-senior-designer-and-developer-and-with-the-experience-hold-coaching-can-not.html
* MUXION → [USE PROVIDED LOGO ASSET] https://muxion.in/
* Medium →https://medium.com/@themariamparvez
* YouTube →
  https://www.youtube.com/@muxionacademy
* Behance →
  https://www.behance.net/mariamparvez
* Dribbble →
  https://dribbble.com/mariamparvez
* Instagram →
  https://www.instagram.com/muxionacademy/

IMPORTANT:
Do NOT guess missing URLs.

For missing links:
Add placeholder comments:
"Replace with actual URL provided by Mariam"

Marquee Content Suggestions:

* Logo pills
* Brand labels
* Hover states
* Subtle opacity transitions - do not make it flashy to eyes
* Smooth interactions

---

6. IMPORTANT RESTRICTIONS

---

DO NOT:

* redesign existing pages
* alter typography system
* change spacing globally
* modify responsiveness
* replace libraries/frameworks
* touch unrelated components
* modify navbar/footer
* affect existing animations
* restructure layouts

ONLY implement requested additions/fixes.

---

8. FINAL EXPECTATION

---

The final implementation must feel:

* premium
* modern
* smooth
* responsive
* lightweight
* production-ready
* visually aligned with the current portfolio aesthetic

Most importantly:
DO NOT disturb or modify any existing work outside the requested features.
