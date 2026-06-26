---
title: Mawun Valley Tea Academy Architecture
description: Website-ready structure for Jasur's personal Tea Academy as a 12-academy operating system.
status: ready-for-build
visibility: internal
last_audited: 2026-06-26
---

# Mawun Valley Tea Academy Architecture

This is the source-of-truth audit for the Mawun Valley Tea Academy website. The academy is a private operating system for learning tea through drinking, brewing, hosting, sourcing, writing, experimenting, growing, and building Mawun Valley's tea identity.

## Correction

The Tea Academy has exactly 12 academies. The accidental Academy 13 direction is removed.

Menu structure, pricing, pairings, seasonal rotations, and signature tea experiences are useful, but they are not a thirteenth academy. They become website tools and supporting sections connected mainly to The Table, The Market, The House, and Noni's.

## Audited 12-Academy Spine

1. The Leaf - tea as a plant, leaf, processing path, category system, and quality signal.
2. The Cup - brewing method, water, temperature, timing, ratio, vessel choice, and repeatable cup quality.
3. The Tongue - tasting memory, flavor language, aroma, mouthfeel, defects, comparison, and honest description.
4. The Hand - physical tea skill: weighing, rinsing, pouring, cleaning, preparing, serving, and resetting calmly.
5. The Table - hospitality, food connection, ceremony, guest pacing, welcome tea, explanation, and silence.
6. The Market - sourcing, vendors, pricing, value, ethics, samples, buying decisions, and reorder judgment.
7. The Archive - tea records, labels, tasting notes, experiments, photos, storage history, and review habits.
8. The Map - origins, terroir, travel, tea geography, climate, culture, and place-based learning.
9. The Spirit - philosophy, restraint, ritual, gratitude, silence, meaning, and respect without performance.
10. The Lab - experiments, variables, blends, cold brew, service trials, recipes, and useful failures.
11. The Garden - tea plants, herbs, local botanicals, living landscape, ecology, and garden-to-cup service.
12. The House - tea space, tools, storage, service station, guest flow, atmosphere, and maintenance.

## Academy Content Model

Each academy page should use the same content pattern so the website feels like a usable system, not scattered notes.

- Title and number.
- Short purpose.
- Why it matters to Mawun Valley.
- 5-7 modules.
- Core questions for each module.
- Missions that create real outputs.
- Output checklist.
- Connected tools.
- Related academies.
- Rank progress.
- Next action.

## Route Architecture

- `/tea-academy` - dashboard with the 12-academy spine, current focus, rank, and quick tools.
- `/tea-academy/academies/[slug]` - detail pages for each academy.
- `/tea-academy/journal` - tasting notes, service notes, field notes, and reflections.
- `/tea-academy/passport` - tea database by tea, origin, vendor, category, opened date, status, and reorder decision.
- `/tea-academy/lab` - experiment records for brewing variables, blends, cold brew, service tests, and outcomes.
- `/tea-academy/garden` - plants, herbs, local botanicals, care rhythm, and garden-to-cup notes.
- `/tea-academy/house` - tools, storage, station layout, checklists, maintenance, and service readiness.
- `/tea-academy/templates` - printable or reusable mission sheets, labels, tasting cards, checklists, and review forms.
- `/tea-academy/menu-builder` - supporting tool for menu descriptions, pricing, pairings, seasonal rotations, and signatures.

## Supporting Sections

These sections support the academy but do not add new academy numbers.

- Tea menu builder.
- Signature ceremony library.
- Noni's tea service integration.
- Mawun Valley tea garden plan.
- Guest-facing tea story.
- Internal staff scripts.
- Storage labels and tasting cards.
- Monthly review dashboard.
- Procurement and vendor shortlist.
- Seasonal tea calendar.

## Menu Material Placement

The former Academy 13 content should be redistributed like this:

- Menu structure - supporting section: Tea Menu Builder.
- Descriptions - The Tongue plus Tea Menu Builder.
- Pricing - The Market plus Tea Menu Builder.
- Pairings - The Table plus Noni's integration.
- Seasonal rotations - The Archive, The Garden, and Tea Menu Builder.
- Signature tea experiences - The Table, The Spirit, The House, and Signature Ceremony Library.

## Rank System

- Seed - starts the habit and basic language.
- Keeper - builds reliable practice, storage, service, and care.
- Host - serves guests with confidence and restraint.
- Maker - experiments, blends, documents, and improves.
- Steward - connects tea to Mawun Valley's land, culture, archive, and long-term identity.

## Website Build Priorities

1. Keep `/tea-academy` as the dashboard and table of contents.
2. Create a structured data file for the 12 academies before building detail pages.
3. Build one academy detail template and render all academies from the same model.
4. Add journal, passport, lab, garden, house, and templates as functional tool pages.
5. Add the menu builder only as a supporting tool, never as Academy 13.

## Acceptance Rules

- The academy count must stay at 12.
- The last academy is The House.
- No page title, route, navigation item, or content file should introduce Academy 13.
- Menu work must be labeled as a supporting tool or section.
- Each academy must produce practical outputs, not just reading material.
- The website should feel internal, practical, and Mawun Valley-specific.
