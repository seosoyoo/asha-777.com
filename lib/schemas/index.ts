/**
 * Schemas Index
 * File ini mengekspor semua schema untuk digunakan di seluruh aplikasi
 */

import { generateHomePageSchema } from "./homeSchema"
import { generateGamesPageSchema } from "./gamesSchema"
import { generateFAQPageSchema } from "./faqSchema"
import { generateAboutPageSchema } from "./aboutSchema"
import { generateContactPageSchema } from "./contactSchema"
import { generatePrivacyPageSchema } from "./privacySchema"
import { generateTermsPageSchema } from "./termsSchema"
import { generatePromotionsPageSchema } from "./promotionsSchema"
import { generateBreadcrumbSchema } from "./breadcrumbSchema"
import { generateWebsiteSchema } from "./websiteSchema"
import { generateOrganizationSchema } from "./organizationSchema"

// Ekspor semua fungsi secara eksplisit
export {
  generateHomePageSchema,
  generateGamesPageSchema,
  generateFAQPageSchema,
  generateAboutPageSchema,
  generateContactPageSchema,
  generatePrivacyPageSchema,
  generateTermsPageSchema,
  generatePromotionsPageSchema,
  generateBreadcrumbSchema,
  generateWebsiteSchema,
  generateOrganizationSchema,
}
