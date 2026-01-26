(() => {
  const STRINGS = {
    ko: {
      title_home: "Bake | 홈",
      meta_home_desc: "Bake의 4:2:2 10-bit를 4:4:4 12-bit로 복원하는 AI",
      title_product: "Bake | 제품",
      meta_product_desc: "Bake 제품 소개",
      title_tech: "Bake | 기술",
      meta_tech_desc: "Bake 기술 설명",
      title_samples: "Bake | 샘플",
      meta_samples_desc: "Bake 샘플 비교",
      title_pricing: "Bake | 가격",
      meta_pricing_desc: "Bake 가격 및 문의",
      title_faq: "Bake | FAQ",
      meta_faq_desc: "Bake FAQ",
      title_contact: "Bake | 문의",
      meta_contact_desc: "Bake 문의",
      title_about: "Bake | 회사 소개",
      meta_about_desc: "Bake 회사 소개",
      site_name: "Bake",
      nav_home: "홈",
      nav_product: "제품",
      nav_tech: "기술",
      nav_samples: "샘플",
      nav_pricing: "가격",
      nav_faq: "FAQ",
      nav_contact: "문의",
      nav_about: "회사 소개",
      cta_contact: "문의하기",
      cta_view_samples: "샘플 보기",
      footer_brand_title: "Bake",
      footer_mission: "독립영화 제작자들을 기술적으로 지원합니다.",
      footer_slogan_label: "슬로건",
      footer_slogan_text: "정확하기에 아름답다.",
      footer_contact_label: "문의",
      footer_rights: "© Bake. All rights reserved.",
      label_before: "Before",
      label_after: "After",
      compare_aria: "비포/애프터 비교 슬라이더",
      home_eyebrow: "클로즈드 베타",
      home_hero_title: "정확한 복원으로 그레이딩 내구성을 되살립니다.",
      home_hero_subtitle: "4:2:2 10-bit를 4:4:4 12-bit로 복원하는 AI",
      home_hero_desc:
        "크로마 디테일과 비트 깊이를 복원해 후반 작업의 선택지를 넓힙니다. 업스케일링이 아니라 복원에 집중합니다.",
      home_compare_caption:
        "슬라이더로 크로마 디테일과 비트 깊이의 차이를 확인하세요.",
      home_trust_title: "신뢰를 위한 근거",
      home_trust_beta_title: "클로즈드 베타",
      home_trust_beta_desc: "실제 제작 환경에서 검증을 진행 중입니다.",
      home_trust_samples_title: "테스트 영상",
      home_trust_samples_desc: "다양한 장면의 비포/애프터 샘플을 보유하고 있습니다.",
      home_trust_specs_title: "명확한 스펙",
      home_trust_specs_desc: "입력/출력과 처리 방식이 투명하게 정의되어 있습니다.",
      home_values_title: "핵심 가치",
      home_value_accuracy_title: "정확함",
      home_value_accuracy_desc: "결과를 과장하지 않고 근거로 설명합니다.",
      home_value_truth_title: "진실함",
      home_value_truth_desc: "처리 한계와 조건을 숨기지 않습니다.",
      home_value_extra_title: "비범함",
      home_value_extra_desc: "Oklab 기반 처리로 보이지 않던 디테일을 복원합니다.",
      home_diff_title: "차별점",
      home_diff_oklab_title: "Oklab",
      home_diff_oklab_desc: "지각적 특성을 반영한 Oklab 색공간에서 작업합니다.",
      home_diff_cnn_title: "CNN",
      home_diff_cnn_desc: "ViT가 아닌 CNN으로 국소 디테일에 주목합니다.",
      home_diff_diffusion_title: "Diffusion + Residual",
      home_diff_diffusion_desc: "Diffusion과 Residual로 안정성을 확보합니다.",
      home_specs_title: "입출력 스펙",
      spec_input_label: "입력",
      spec_input_value: "Apple ProRes 422 HQ, Apple ProRes 422, H.264",
      spec_output_label: "출력",
      spec_output_value: "Apple ProRes 4444 XQ",
      spec_processing_label: "처리 방식",
      spec_processing_value: "클라우드 업로드",
      spec_variable_label: "변수",
      spec_variable_value: "영상 총 프레임 수",
      home_cta_title: "프로젝트에 맞는 견적을 안내드립니다.",
      home_cta_desc: "총 프레임 수에 따라 처리 시간과 비용이 결정됩니다.",
      product_eyebrow: "제품",
      product_heading: "제품",
      product_tagline: "4:2:2 10-bit를 4:4:4 12-bit로 복원하는 AI",
      product_intro: "그레이딩 내구성을 높이기 위한 복원 솔루션입니다.",
      product_scope_title: "복원 범위",
      product_scope_item1_title: "크로마 디테일",
      product_scope_item1_desc: "색 차이의 미세한 구조를 복원합니다.",
      product_scope_item2_title: "비트 깊이",
      product_scope_item2_desc: "계조 정보를 확장해 후반 내구성을 높입니다.",
      product_specs_title: "입출력 스펙",
      product_process_title: "처리 방식",
      product_process_desc: "클라우드 업로드 후 복원 처리를 진행하고 결과물을 전달합니다.",
      product_variable_title: "시간/비용 변수",
      product_variable_desc: "영상 총 프레임 수에 따라 처리 시간과 비용이 달라집니다.",
      product_excludes_title: "포함하지 않는 것",
      product_excludes_item1: "해상도 업스케일링은 포함하지 않습니다.",
      product_excludes_item2: "원본과의 완전한 일치를 보장하지 않습니다.",
      product_cta_title: "프로젝트 정보를 알려주세요.",
      product_cta_desc: "입력 코덱, 러닝타임, 목표 납기를 알려주시면 안내드립니다.",
      tech_eyebrow: "기술",
      tech_heading: "기술",
      tech_intro: "핵심 기술을 있는 그대로 설명합니다. 용어는 유지하되 이해를 돕습니다.",
      tech_oklab_title: "Oklab",
      tech_oklab_desc: "색의 지각적 성질을 직접 다루기 위해 Oklab 색공간에서 처리합니다.",
      tech_cnn_title: "CNN 기반 복원",
      tech_cnn_desc: "ViT가 아닌 CNN을 사용해 국소 디테일 복원에 집중합니다.",
      tech_diffusion_title: "Diffusion + Residual",
      tech_diffusion_desc: "Diffusion과 Residual 구조로 안정적인 복원을 확보했습니다.",
      tech_chroma_title: "Chroma Subsampling",
      tech_chroma_desc: "4:2:2 소스의 크로마 정보를 복원하여 4:4:4 품질을 지향합니다.",
      tech_note: "기술적 용어는 그대로 사용하지만, 문의 시 상세 설명을 제공합니다.",
      samples_eyebrow: "샘플",
      samples_heading: "샘플",
      samples_intro: "비포/애프터 샘플을 슬라이더로 비교할 수 있습니다.",
      sample1_title: "샘플 01",
      sample1_desc: "저조도 장면의 크로마 디테일",
      sample2_title: "샘플 02",
      sample2_desc: "피부 톤과 미세 질감 복원",
      sample3_title: "샘플 03",
      sample3_desc: "하이라이트 계조 복원",
      samples_more_note: "추가 샘플은 문의로 제공드립니다.",
      pricing_eyebrow: "가격",
      pricing_heading: "가격",
      pricing_intro: "가격 정책은 프로젝트 단위로 산정되며 문의로 안내드립니다.",
      pricing_card_title: "프로젝트 단위 견적",
      pricing_card_desc: "입력 코덱, 러닝타임, 목표 납기, 총 프레임 수를 기반으로 산정합니다.",
      pricing_factors_title: "가격/시간 변수",
      pricing_factor_item1: "영상 총 프레임 수",
      pricing_factor_item2: "입력 코덱",
      pricing_factor_item3: "목표 납기",
      pricing_note: "구체적인 견적과 일정은 문의를 통해 안내드립니다.",
      pricing_cta_title: "프로젝트 정보를 보내주세요.",
      pricing_cta_desc: "샘플과 함께 문의하시면 확인 후 안내드립니다.",
      faq_eyebrow: "FAQ",
      faq_heading: "FAQ",
      faq_intro: "자주 묻는 질문을 정리했습니다. 추가 문의는 이메일로 받습니다.",
      faq_q1: "원본 영상과 너무 많이 다르면 어떡하죠?",
      faq_a1: "입력 품질에 따라 결과가 제한될 수 있습니다. 샘플로 사전 확인한 뒤 진행합니다.",
      faq_q2: "해상도 업스케일링도 되나요?",
      faq_a2: "해상도 업스케일링은 포함하지 않습니다.",
      faq_q3: "Log 영상도 가능한가요?",
      faq_a3: "가능합니다. 입력 스펙 범위 내에서 협의합니다.",
      faq_q4: "Oklab이 뭐에요?",
      faq_a4: "사람의 지각에 가까운 색공간으로, 색 변화를 안정적으로 다루기 위해 사용합니다.",
      faq_q5: "어떤 코덱으로 전달드려야 하나요?",
      faq_a5: "Apple ProRes 422 HQ, Apple ProRes 422, H.264를 지원합니다.",
      contact_eyebrow: "문의",
      contact_heading: "문의",
      contact_intro: "문의는 이메일로 받습니다.",
      contact_email_cta: "이메일 보내기",
      contact_email_label: "이메일",
      contact_info_title: "문의에 포함하면 좋은 정보",
      contact_info_item1: "입력 코덱",
      contact_info_item2: "러닝타임",
      contact_info_item3: "목표 납기",
      contact_info_item4: "테스트 샘플",
      contact_scope_title: "복원 범위",
      contact_scope_desc: "크로마 디테일과 비트 깊이 복원을 중심으로 제공합니다.",
      contact_scope_note: "품질 보증 기준은 현재 정의 중입니다.",
      about_eyebrow: "회사 소개",
      about_heading: "회사 소개",
      about_intro: "Bake는 독립영화 제작자들을 기술적으로 지원하는 복원 AI를 만듭니다.",
      about_mission_title: "미션",
      about_mission_desc: "후반 작업에서 필요한 정확한 복원을 제공하는 것입니다.",
      about_stage_title: "현재 단계",
      about_stage_desc: "클로즈드 베타 단계에서 실제 제작 환경을 검증 중입니다.",
      about_values_title: "핵심 가치",
      about_diff_title: "차별점",
      about_cta_title: "더 많은 정보를 원하신다면",
      about_cta_desc: "테스트 영상과 적용 가능 범위를 문의로 안내드립니다."
    },
    en: {
      title_home: "Bake | Home",
      meta_home_desc: "AI that restores 4:2:2 10-bit to 4:4:4 12-bit.",
      title_product: "Bake | Product",
      meta_product_desc: "Bake product overview.",
      title_tech: "Bake | Technology",
      meta_tech_desc: "Bake technology details.",
      title_samples: "Bake | Samples",
      meta_samples_desc: "Before/after sample comparisons.",
      title_pricing: "Bake | Pricing",
      meta_pricing_desc: "Project-based pricing via contact.",
      title_faq: "Bake | FAQ",
      meta_faq_desc: "Frequently asked questions.",
      title_contact: "Bake | Contact",
      meta_contact_desc: "Contact Bake by email.",
      title_about: "Bake | About",
      meta_about_desc: "About Bake.",
      site_name: "Bake",
      nav_home: "Home",
      nav_product: "Product",
      nav_tech: "Technology",
      nav_samples: "Samples",
      nav_pricing: "Pricing",
      nav_faq: "FAQ",
      nav_contact: "Contact",
      nav_about: "About",
      cta_contact: "Contact",
      cta_view_samples: "View samples",
      footer_brand_title: "Bake",
      footer_mission: "We support independent filmmakers with technology.",
      footer_slogan_label: "Slogan",
      footer_slogan_text: "Accurate, therefore beautiful.",
      footer_contact_label: "Contact",
      footer_rights: "© Bake. All rights reserved.",
      label_before: "Before",
      label_after: "After",
      compare_aria: "Before/after comparison slider",
      home_eyebrow: "Closed beta",
      home_hero_title: "Restore grading resilience with accuracy.",
      home_hero_subtitle: "AI that restores 4:2:2 10-bit to 4:4:4 12-bit",
      home_hero_desc:
        "We restore chroma detail and bit depth to widen post-production latitude. We focus on restoration, not upscaling.",
      home_compare_caption:
        "Use the slider to inspect chroma detail and bit depth differences.",
      home_trust_title: "Signals of trust",
      home_trust_beta_title: "Closed beta",
      home_trust_beta_desc: "We are validating in real production environments.",
      home_trust_samples_title: "Test footage",
      home_trust_samples_desc: "We keep before/after samples from diverse scenes.",
      home_trust_specs_title: "Clear specs",
      home_trust_specs_desc: "Input/output and processing are defined transparently.",
      home_values_title: "Core values",
      home_value_accuracy_title: "Accuracy",
      home_value_accuracy_desc: "We explain outcomes with evidence, not exaggeration.",
      home_value_truth_title: "Truth",
      home_value_truth_desc: "We do not hide limits or conditions.",
      home_value_extra_title: "Extraordinary",
      home_value_extra_desc: "We restore details in Oklab-based processing.",
      home_diff_title: "Differentiators",
      home_diff_oklab_title: "Oklab",
      home_diff_oklab_desc: "We work in Oklab to reflect perceptual color behavior.",
      home_diff_cnn_title: "CNN",
      home_diff_cnn_desc: "We use CNNs to focus on local detail restoration.",
      home_diff_diffusion_title: "Diffusion + Residual",
      home_diff_diffusion_desc: "Diffusion and residual structures stabilize results.",
      home_specs_title: "Input/Output specs",
      spec_input_label: "Input",
      spec_input_value: "Apple ProRes 422 HQ, Apple ProRes 422, H.264",
      spec_output_label: "Output",
      spec_output_value: "Apple ProRes 4444 XQ",
      spec_processing_label: "Processing",
      spec_processing_value: "Cloud upload",
      spec_variable_label: "Variable",
      spec_variable_value: "Total frame count",
      home_cta_title: "We provide project-based estimates.",
      home_cta_desc: "Processing time and cost depend on total frame count.",
      product_eyebrow: "Product",
      product_heading: "Product",
      product_tagline: "AI that restores 4:2:2 10-bit to 4:4:4 12-bit",
      product_intro: "A restoration solution to improve grading resilience.",
      product_scope_title: "Restoration scope",
      product_scope_item1_title: "Chroma detail",
      product_scope_item1_desc: "Restores fine structure in chroma differences.",
      product_scope_item2_title: "Bit depth",
      product_scope_item2_desc: "Extends tonal steps for more latitude.",
      product_specs_title: "Input/Output specs",
      product_process_title: "Processing",
      product_process_desc: "Upload to cloud, process restoration, deliver output.",
      product_variable_title: "Time/Cost variable",
      product_variable_desc: "Processing time and cost vary by total frame count.",
      product_excludes_title: "Not included",
      product_excludes_item1: "Resolution upscaling is not included.",
      product_excludes_item2: "Exact identity with the source is not guaranteed.",
      product_cta_title: "Share your project details.",
      product_cta_desc: "Send input codec, runtime, and delivery target for guidance.",
      tech_eyebrow: "Technology",
      tech_heading: "Technology",
      tech_intro: "We explain core technologies plainly, keeping terms intact.",
      tech_oklab_title: "Oklab",
      tech_oklab_desc: "We process in Oklab to work with perceptual color behavior.",
      tech_cnn_title: "CNN-based restoration",
      tech_cnn_desc: "We use CNNs over ViT to focus on local details.",
      tech_diffusion_title: "Diffusion + Residual",
      tech_diffusion_desc: "Diffusion and residual structure stabilize restoration.",
      tech_chroma_title: "Chroma Subsampling",
      tech_chroma_desc: "We restore chroma from 4:2:2 toward 4:4:4 quality.",
      tech_note: "Terms are kept as-is, with detailed explanations on request.",
      samples_eyebrow: "Samples",
      samples_heading: "Samples",
      samples_intro: "Compare before/after with the slider.",
      sample1_title: "Sample 01",
      sample1_desc: "Low-light chroma detail",
      sample2_title: "Sample 02",
      sample2_desc: "Skin tone and fine texture restoration",
      sample3_title: "Sample 03",
      sample3_desc: "Highlight gradation restoration",
      samples_more_note: "Additional samples are available on request.",
      pricing_eyebrow: "Pricing",
      pricing_heading: "Pricing",
      pricing_intro: "Pricing is project-based and provided via contact.",
      pricing_card_title: "Project-based estimate",
      pricing_card_desc: "Based on input codec, runtime, delivery target, and total frames.",
      pricing_factors_title: "Pricing/Time factors",
      pricing_factor_item1: "Total frame count",
      pricing_factor_item2: "Input codec",
      pricing_factor_item3: "Delivery target",
      pricing_note: "We provide detailed estimates and schedules by request.",
      pricing_cta_title: "Send project details.",
      pricing_cta_desc: "Include a sample to help us review your needs.",
      faq_eyebrow: "FAQ",
      faq_heading: "FAQ",
      faq_intro: "Frequently asked questions. For more, contact us by email.",
      faq_q1: "What if the source differs too much?",
      faq_a1: "Results depend on input quality. We review a sample before proceeding.",
      faq_q2: "Do you provide resolution upscaling?",
      faq_a2: "Resolution upscaling is not included.",
      faq_q3: "Can you handle Log footage?",
      faq_a3: "Yes. We coordinate within the supported input specs.",
      faq_q4: "What is Oklab?",
      faq_a4: "A perceptual color space used to handle color changes stably.",
      faq_q5: "Which codecs do you accept?",
      faq_a5: "Apple ProRes 422 HQ, Apple ProRes 422, and H.264.",
      contact_eyebrow: "Contact",
      contact_heading: "Contact",
      contact_intro: "We accept inquiries by email.",
      contact_email_cta: "Send email",
      contact_email_label: "Email",
      contact_info_title: "Helpful info to include",
      contact_info_item1: "Input codec",
      contact_info_item2: "Runtime",
      contact_info_item3: "Delivery target",
      contact_info_item4: "Test sample",
      contact_scope_title: "Restoration scope",
      contact_scope_desc: "Focused on chroma detail and bit depth restoration.",
      contact_scope_note: "Quality criteria are currently being defined.",
      about_eyebrow: "About",
      about_heading: "About",
      about_intro: "Bake builds restoration AI to support independent filmmakers.",
      about_mission_title: "Mission",
      about_mission_desc: "Provide accurate restoration for post-production.",
      about_stage_title: "Stage",
      about_stage_desc: "We are validating in closed beta with real productions.",
      about_values_title: "Core values",
      about_diff_title: "Differentiators",
      about_cta_title: "Looking for more details?",
      about_cta_desc: "We share test footage and applicability on request."
    }
  };

  const STORAGE_KEY = "bake_lang";
  const SUPPORTED = Object.keys(STRINGS);

  const getUrlLang = () => {
    const params = new URLSearchParams(window.location.search);
    const lang = params.get("lang");
    return SUPPORTED.includes(lang) ? lang : null;
  };

  const getStoredLang = () => {
    const stored = localStorage.getItem(STORAGE_KEY);
    return SUPPORTED.includes(stored) ? stored : null;
  };

  const getBrowserLang = () => {
    if (!navigator.language) {
      return null;
    }
    const short = navigator.language.toLowerCase().slice(0, 2);
    return SUPPORTED.includes(short) ? short : null;
  };

  const applyTranslations = (lang) => {
    const dict = STRINGS[lang];
    if (!dict) {
      return;
    }

    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      if (dict[key] !== undefined) {
        el.textContent = dict[key];
      }
    });

    document.querySelectorAll("[data-i18n-attr]").forEach((el) => {
      const attrValue = el.getAttribute("data-i18n-attr");
      if (!attrValue) {
        return;
      }
      const pairs = attrValue.split("|").map((pair) => pair.trim()).filter(Boolean);
      pairs.forEach((pair) => {
        const [attr, key] = pair.split(":").map((item) => item.trim());
        if (!attr || !key) {
          return;
        }
        if (dict[key] !== undefined) {
          el.setAttribute(attr, dict[key]);
        }
      });
    });
  };

  const updateLangButtons = (lang) => {
    document.querySelectorAll("[data-lang]").forEach((button) => {
      const active = button.getAttribute("data-lang") === lang;
      button.classList.toggle("is-active", active);
      button.setAttribute("aria-pressed", active ? "true" : "false");
    });
  };

  const setLanguage = (lang, { persist = true, updateUrl = true } = {}) => {
    if (!SUPPORTED.includes(lang)) {
      return;
    }
    if (persist) {
      localStorage.setItem(STORAGE_KEY, lang);
    }
    if (updateUrl) {
      const url = new URL(window.location.href);
      url.searchParams.set("lang", lang);
      history.replaceState(null, "", url.toString());
    }
    document.documentElement.setAttribute("lang", lang);
    applyTranslations(lang);
    updateLangButtons(lang);
  };

  const initI18n = () => {
    const initialLang = getUrlLang() || getStoredLang() || getBrowserLang() || "ko";
    setLanguage(initialLang, { persist: true, updateUrl: true });

    document.querySelectorAll("[data-lang]").forEach((button) => {
      button.addEventListener("click", () => {
        setLanguage(button.getAttribute("data-lang"));
      });
    });
  };

  window.BakeI18n = { initI18n, setLanguage };
})();
