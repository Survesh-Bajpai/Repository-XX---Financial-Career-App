// Financial Certification Data
const certificationsData = {
  "CFA": {
    "type": "US",
    "full_name": "Chartered Financial Analyst",
    "levels": 3,
    "level_details": {
      "Level 1": {"difficulty": 4, "salary_lpa": "4-6", "cost_inr": 125000, "duration_months": 12},
      "Level 2": {"difficulty": 4.5, "salary_lpa": "6-10", "cost_inr": 100000, "duration_months": 12},
      "Level 3": {"difficulty": 4.5, "salary_lpa": "12-18", "cost_inr": 100000, "duration_months": 12}
    },
    "total_cost_inr": 325000,
    "total_duration_years": 3,
    "overall_difficulty": 4.5,
    "pass_rate": "40-50%",
    "career_opportunities": ["Investment Analyst", "Portfolio Manager", "Research Analyst", "Investment Banking", "Wealth Management"],
    "salary_range_lpa": "6-50+",
    "global_recognition": "Very High",
    "work_experience_required": "4 years",
    "study_hours": 900
  },
  "PMS_NISM_21B": {
    "type": "Indian",
    "full_name": "Portfolio Management Services - NISM Series XXI-B",
    "levels": 1,
    "level_details": {
      "Single Level": {"difficulty": 3, "salary_lpa": "6-15", "cost_inr": 3000, "duration_months": 3}
    },
    "total_cost_inr": 3000,
    "total_duration_years": 0.25,
    "overall_difficulty": 3,
    "pass_rate": "60%+",
    "career_opportunities": ["Portfolio Manager", "PMS Principal Officer", "Investment Advisor"],
    "salary_range_lpa": "6-25",
    "global_recognition": "India Specific",
    "work_experience_required": "None",
    "study_hours": 100
  },
  "CAIA": {
    "type": "US",
    "full_name": "Chartered Alternative Investment Analyst",
    "levels": 2,
    "level_details": {
      "Level 1": {"difficulty": 3.5, "salary_lpa": "8-15", "cost_inr": 115000, "duration_months": 6},
      "Level 2": {"difficulty": 4, "salary_lpa": "12-25", "cost_inr": 82000, "duration_months": 6}
    },
    "total_cost_inr": 197000,
    "total_duration_years": 1,
    "overall_difficulty": 3.75,
    "pass_rate": "50-69%",
    "career_opportunities": ["Alternative Investment Manager", "Hedge Fund Analyst", "Private Equity Associate"],
    "salary_range_lpa": "5-25",
    "global_recognition": "High",
    "work_experience_required": "1 year",
    "study_hours": 400
  },
  "AIF_NISM_19C": {
    "type": "Indian",
    "full_name": "Alternative Investment Fund Managers - NISM Series XIX-C",
    "levels": 1,
    "level_details": {
      "Single Level": {"difficulty": 3.5, "salary_lpa": "8-20", "cost_inr": 3000, "duration_months": 3}
    },
    "total_cost_inr": 3000,
    "total_duration_years": 0.25,
    "overall_difficulty": 3.5,
    "pass_rate": "60%+",
    "career_opportunities": ["AIF Manager", "Alternative Investment Analyst", "Fund Manager"],
    "salary_range_lpa": "8-25",
    "global_recognition": "India Specific",
    "work_experience_required": "None",
    "study_hours": 120
  },
  "CMT": {
    "type": "US",
    "full_name": "Chartered Market Technician",
    "levels": 3,
    "level_details": {
      "Level 1": {"difficulty": 3, "salary_lpa": "6-12", "cost_inr": 64000, "duration_months": 6},
      "Level 2": {"difficulty": 3.5, "salary_lpa": "8-15", "cost_inr": 88000, "duration_months": 6},
      "Level 3": {"difficulty": 4, "salary_lpa": "10-20", "cost_inr": 88000, "duration_months": 6}
    },
    "total_cost_inr": 240000,
    "total_duration_years": 1.5,
    "overall_difficulty": 3.5,
    "pass_rate": "50-60%",
    "career_opportunities": ["Technical Analyst", "Quantitative Analyst", "Trading Strategist"],
    "salary_range_lpa": "10-25",
    "global_recognition": "High",
    "work_experience_required": "None",
    "study_hours": 600
  },
  "RA_NISM_15": {
    "type": "Indian",
    "full_name": "Research Analyst - NISM Series XV",
    "levels": 1,
    "level_details": {
      "Single Level": {"difficulty": 2.5, "salary_lpa": "4-12", "cost_inr": 1500, "duration_months": 2}
    },
    "total_cost_inr": 1500,
    "total_duration_years": 0.17,
    "overall_difficulty": 2.5,
    "pass_rate": "65%+",
    "career_opportunities": ["Research Analyst", "Equity Analyst", "Investment Advisor"],
    "salary_range_lpa": "3-15",
    "global_recognition": "India Specific",
    "work_experience_required": "None",
    "study_hours": 60
  },
  "CFP": {
    "type": "US",
    "full_name": "Certified Financial Planner",
    "levels": 1,
    "level_details": {
      "Single Level": {"difficulty": 3, "salary_lpa": "6-20", "cost_inr": 150000, "duration_months": 12}
    },
    "total_cost_inr": 150000,
    "total_duration_years": 1,
    "overall_difficulty": 3,
    "pass_rate": "65%",
    "career_opportunities": ["Financial Planner", "Wealth Advisor", "Investment Consultant"],
    "salary_range_lpa": "6-20",
    "global_recognition": "High",
    "work_experience_required": "3 years",
    "study_hours": 300
  },
  "IA_NISM_10A": {
    "type": "Indian",
    "full_name": "Investment Adviser Level 1 - NISM Series X-A",
    "levels": 1,
    "level_details": {
      "Single Level": {"difficulty": 2.5, "salary_lpa": "4-10", "cost_inr": 3000, "duration_months": 3}
    },
    "total_cost_inr": 3000,
    "total_duration_years": 0.25,
    "overall_difficulty": 2.5,
    "pass_rate": "60%+",
    "career_opportunities": ["Investment Advisor", "Financial Consultant", "Wealth Manager"],
    "salary_range_lpa": "4-12",
    "global_recognition": "India Specific",
    "work_experience_required": "None",
    "study_hours": 80
  },
  "IA_NISM_10B": {
    "type": "Indian",
    "full_name": "Investment Adviser Level 2 - NISM Series X-B",
    "levels": 1,
    "level_details": {
      "Single Level": {"difficulty": 3, "salary_lpa": "6-15", "cost_inr": 3000, "duration_months": 3}
    },
    "total_cost_inr": 3000,
    "total_duration_years": 0.25,
    "overall_difficulty": 3,
    "pass_rate": "60%+",
    "career_opportunities": ["Senior Investment Advisor", "Financial Planning Manager"],
    "salary_range_lpa": "6-18",
    "global_recognition": "India Specific",
    "work_experience_required": "None",
    "study_hours": 100
  },
  "FRM": {
    "type": "US",
    "full_name": "Financial Risk Manager",
    "levels": 2,
    "level_details": {
      "Level 1": {"difficulty": 4, "salary_lpa": "6-10", "cost_inr": 80000, "duration_months": 6},
      "Level 2": {"difficulty": 4.5, "salary_lpa": "12-20", "cost_inr": 80000, "duration_months": 6}
    },
    "total_cost_inr": 160000,
    "total_duration_years": 1,
    "overall_difficulty": 4.25,
    "pass_rate": "40-50%",
    "career_opportunities": ["Risk Manager", "Credit Risk Analyst", "Market Risk Manager"],
    "salary_range_lpa": "9-50",
    "global_recognition": "Very High",
    "work_experience_required": "2 years",
    "study_hours": 650
  },
  "SORM_NISM_7": {
    "type": "Indian",
    "full_name": "Securities Operations and Risk Management - NISM Series VII",
    "levels": 1,
    "level_details": {
      "Single Level": {"difficulty": 2, "salary_lpa": "3-8", "cost_inr": 1500, "duration_months": 2}
    },
    "total_cost_inr": 1500,
    "total_duration_years": 0.17,
    "overall_difficulty": 2,
    "pass_rate": "70%+",
    "career_opportunities": ["Risk Management Officer", "Operations Manager", "Compliance Officer"],
    "salary_range_lpa": "3-10",
    "global_recognition": "India Specific",
    "work_experience_required": "None",
    "study_hours": 50
  }
};

// Global state
let currentTab = 'overview';
let filteredCertifications = Object.keys(certificationsData);
let selectedCertifications = [];
let comparisonChart = null;
let careerChart = null;
let roiChart = null;

// Utility functions
function formatCurrency(amount) {
  if (amount >= 100000) {
    return `₹${(amount / 100000).toFixed(1)}L`;
  } else if (amount >= 1000) {
    return `₹${(amount / 1000).toFixed(0)}K`;
  }
  return `₹${amount}`;
}

function generateStars(difficulty) {
  return '⭐'.repeat(Math.floor(difficulty)) + (difficulty % 1 >= 0.5 ? '⭐' : '');
}

function getCostCategory(cost) {
  if (cost < 50000) return 'low';
  if (cost < 200000) return 'medium';
  return 'high';
}

// DOM manipulation functions
function showTab(tabName) {
  // Update nav tabs
  document.querySelectorAll('.nav-tab').forEach(tab => {
    tab.classList.remove('active');
  });
  document.querySelector(`[data-tab="${tabName}"]`).classList.add('active');

  // Update tab content
  document.querySelectorAll('.tab-content').forEach(content => {
    content.classList.remove('active');
  });
  document.getElementById(tabName).classList.add('active');

  currentTab = tabName;

  // Initialize tab-specific functionality
  if (tabName === 'comparison') {
    initializeComparisonTool();
  } else if (tabName === 'roi-calculator') {
    initializeROICalculator();
  } else if (tabName === 'learning-path') {
    initializeLearningPath();
  }
}

function renderCertificationGrid() {
  const grid = document.getElementById('certificationGrid');
  if (!grid) return;
  
  grid.innerHTML = '';

  filteredCertifications.forEach(certKey => {
    const cert = certificationsData[certKey];
    const card = createCertificationCard(certKey, cert);
    grid.appendChild(card);
  });
}

function createCertificationCard(key, cert) {
  const card = document.createElement('div');
  card.className = `cert-card ${cert.type.toLowerCase()}-cert`;
  card.setAttribute('data-cert', key);

  card.innerHTML = `
    <div class="cert-header">
      <h3 class="cert-title">${cert.full_name}</h3>
      <span class="cert-type-badge ${cert.type.toLowerCase()}">${cert.type}</span>
    </div>
    <div class="cert-details">
      <div class="cert-detail">
        <span class="label">Cost</span>
        <span class="value">${formatCurrency(cert.total_cost_inr)}</span>
      </div>
      <div class="cert-detail">
        <span class="label">Duration</span>
        <span class="value">${cert.total_duration_years}${cert.total_duration_years === 1 ? ' year' : ' years'}</span>
      </div>
      <div class="cert-detail">
        <span class="label">Difficulty</span>
        <span class="value difficulty-stars">${generateStars(cert.overall_difficulty)}</span>
      </div>
      <div class="cert-detail">
        <span class="label">Pass Rate</span>
        <span class="value">${cert.pass_rate}</span>
      </div>
    </div>
    <div class="cert-footer">
      <span class="salary-range">₹${cert.salary_range_lpa} LPA</span>
      <button class="view-details-btn" data-cert-key="${key}">View Details</button>
    </div>
  `;

  // Add event listeners
  card.addEventListener('click', (e) => {
    if (!e.target.classList.contains('view-details-btn')) {
      showCertificationModal(key);
    }
  });

  const detailsBtn = card.querySelector('.view-details-btn');
  detailsBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    showCertificationModal(key);
  });

  return card;
}

function showCertificationModal(certKey) {
  const cert = certificationsData[certKey];
  const modal = document.getElementById('certModal');
  const title = document.getElementById('modalTitle');
  const body = document.getElementById('modalBody');

  if (!modal || !title || !body) return;

  title.textContent = cert.full_name;
  
  body.innerHTML = `
    <div class="modal-detail-grid">
      <div class="modal-detail">
        <span class="label">Total Cost</span>
        <span class="value">${formatCurrency(cert.total_cost_inr)}</span>
      </div>
      <div class="modal-detail">
        <span class="label">Duration</span>
        <span class="value">${cert.total_duration_years} years</span>
      </div>
      <div class="modal-detail">
        <span class="label">Difficulty</span>
        <span class="value">${generateStars(cert.overall_difficulty)} (${cert.overall_difficulty}/5)</span>
      </div>
      <div class="modal-detail">
        <span class="label">Study Hours</span>
        <span class="value">${cert.study_hours}h</span>
      </div>
      <div class="modal-detail">
        <span class="label">Pass Rate</span>
        <span class="value">${cert.pass_rate}</span>
      </div>
      <div class="modal-detail">
        <span class="label">Recognition</span>
        <span class="value">${cert.global_recognition}</span>
      </div>
    </div>
    <div style="margin: 20px 0;">
      <h4>Career Opportunities</h4>
      <ul class="opportunities-list">
        ${cert.career_opportunities.map(opp => `<li>${opp}</li>`).join('')}
      </ul>
    </div>
    <div>
      <h4>Work Experience Required</h4>
      <p>${cert.work_experience_required}</p>
    </div>
  `;

  modal.classList.remove('hidden');
}

function hideModal() {
  const modal = document.getElementById('certModal');
  if (modal) {
    modal.classList.add('hidden');
  }
}

function filterCertifications() {
  const searchInput = document.getElementById('searchInput');
  const typeFilter = document.getElementById('typeFilter');
  const difficultyFilter = document.getElementById('difficultyFilter');
  const costFilter = document.getElementById('costFilter');

  if (!searchInput || !typeFilter || !difficultyFilter || !costFilter) return;

  const search = searchInput.value.toLowerCase();
  const typeValue = typeFilter.value;
  const difficultyValue = difficultyFilter.value;
  const costValue = costFilter.value;

  filteredCertifications = Object.keys(certificationsData).filter(key => {
    const cert = certificationsData[key];
    
    // Search filter
    if (search && !cert.full_name.toLowerCase().includes(search) && !key.toLowerCase().includes(search)) {
      return false;
    }

    // Type filter
    if (typeValue && cert.type !== typeValue) {
      return false;
    }

    // Difficulty filter
    if (difficultyValue && Math.floor(cert.overall_difficulty) !== parseInt(difficultyValue)) {
      return false;
    }

    // Cost filter
    if (costValue && getCostCategory(cert.total_cost_inr) !== costValue) {
      return false;
    }

    return true;
  });

  renderCertificationGrid();
}

// Comparison Tool
function initializeComparisonTool() {
  const selectors = document.querySelectorAll('.comparison-select');
  selectors.forEach(selector => {
    selector.innerHTML = '<option value="">Select certification...</option>';
    Object.keys(certificationsData).forEach(key => {
      const cert = certificationsData[key];
      const option = document.createElement('option');
      option.value = key;
      option.textContent = cert.full_name;
      selector.appendChild(option);
    });

    selector.addEventListener('change', updateComparison);
  });
}

function updateComparison() {
  const selectors = document.querySelectorAll('.comparison-select');
  const selected = Array.from(selectors).map(s => s.value).filter(v => v);
  
  if (selected.length < 2) {
    document.getElementById('comparisonResults').innerHTML = '<p>Select at least 2 certifications to compare</p>';
    return;
  }

  renderComparisonTable(selected);
  renderComparisonChart(selected);
}

function renderComparisonTable(certKeys) {
  const results = document.getElementById('comparisonResults');
  const certs = certKeys.map(key => ({ key, ...certificationsData[key] }));

  const table = document.createElement('table');
  table.className = 'comparison-table';
  
  const headers = ['Attribute', ...certs.map(cert => cert.full_name)];
  const headerRow = document.createElement('tr');
  headers.forEach(header => {
    const th = document.createElement('th');
    th.textContent = header;
    headerRow.appendChild(th);
  });
  table.appendChild(headerRow);

  const attributes = [
    { label: 'Type', getValue: cert => cert.type },
    { label: 'Total Cost', getValue: cert => formatCurrency(cert.total_cost_inr) },
    { label: 'Duration', getValue: cert => `${cert.total_duration_years} years` },
    { label: 'Difficulty', getValue: cert => `${generateStars(cert.overall_difficulty)} (${cert.overall_difficulty}/5)` },
    { label: 'Study Hours', getValue: cert => `${cert.study_hours}h` },
    { label: 'Pass Rate', getValue: cert => cert.pass_rate },
    { label: 'Salary Range', getValue: cert => `₹${cert.salary_range_lpa} LPA` },
    { label: 'Global Recognition', getValue: cert => cert.global_recognition },
    { label: 'Work Experience', getValue: cert => cert.work_experience_required }
  ];

  attributes.forEach(attr => {
    const row = document.createElement('tr');
    const labelCell = document.createElement('td');
    labelCell.textContent = attr.label;
    labelCell.style.fontWeight = 'bold';
    row.appendChild(labelCell);

    certs.forEach(cert => {
      const valueCell = document.createElement('td');
      valueCell.innerHTML = attr.getValue(cert);
      row.appendChild(valueCell);
    });

    table.appendChild(row);
  });

  results.innerHTML = '';
  results.appendChild(table);
}

function renderComparisonChart(certKeys) {
  const ctx = document.getElementById('comparisonChart')?.getContext('2d');
  if (!ctx) return;

  const certs = certKeys.map(key => ({ key, ...certificationsData[key] }));

  if (comparisonChart) {
    comparisonChart.destroy();
  }

  comparisonChart = new Chart(ctx, {
    type: 'radar',
    data: {
      labels: ['Cost (Normalized)', 'Difficulty', 'Study Hours (Normalized)', 'Duration (Normalized)', 'Recognition Score'],
      datasets: certs.map((cert, index) => ({
        label: cert.full_name,
        data: [
          Math.min(cert.total_cost_inr / 50000, 10), // Normalize cost
          cert.overall_difficulty,
          Math.min(cert.study_hours / 100, 10), // Normalize study hours
          cert.total_duration_years * 2, // Scale duration
          cert.global_recognition === 'Very High' ? 5 : cert.global_recognition === 'High' ? 4 : 2
        ],
        backgroundColor: `rgba(${index === 0 ? '31, 184, 205' : index === 1 ? '255, 193, 133' : '180, 65, 60'}, 0.2)`,
        borderColor: `rgba(${index === 0 ? '31, 184, 205' : index === 1 ? '255, 193, 133' : '180, 65, 60'}, 1)`,
        borderWidth: 2
      }))
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        r: {
          beginAtZero: true,
          max: 10
        }
      }
    }
  });
}

// Career Simulator
function simulateCareer() {
  const experienceElement = document.getElementById('experienceLevel');
  const currentSalaryElement = document.getElementById('currentSalary');
  const targetRoleElement = document.getElementById('targetRole');
  const budgetElement = document.getElementById('investmentBudget');

  if (!experienceElement || !currentSalaryElement || !targetRoleElement || !budgetElement) return;

  const experience = experienceElement.value;
  const currentSalary = parseFloat(currentSalaryElement.value) || 6;
  const targetRole = targetRoleElement.value;
  const budget = parseFloat(budgetElement.value) || 100000;

  const roleMapping = {
    'investment_analyst': ['CFA', 'RA_NISM_15', 'IA_NISM_10A'],
    'portfolio_manager': ['CFA', 'PMS_NISM_21B', 'FRM'],
    'risk_manager': ['FRM', 'SORM_NISM_7', 'CFA'],
    'financial_planner': ['CFP', 'IA_NISM_10B', 'IA_NISM_10A'],
    'research_analyst': ['RA_NISM_15', 'CFA', 'CMT']
  };

  const recommendedCerts = roleMapping[targetRole] || [];
  const affordableCerts = recommendedCerts.filter(cert => certificationsData[cert].total_cost_inr <= budget);

  renderCareerSimulation(experience, currentSalary, targetRole, affordableCerts);
  renderCareerChart(currentSalary, affordableCerts);
}

function renderCareerSimulation(experience, currentSalary, targetRole, certKeys) {
  const results = document.getElementById('simulationResults');
  if (!results) return;

  const roleNames = {
    'investment_analyst': 'Investment Analyst',
    'portfolio_manager': 'Portfolio Manager',
    'risk_manager': 'Risk Manager',
    'financial_planner': 'Financial Planner',
    'research_analyst': 'Research Analyst'
  };

  let html = `
    <div class="recommended-path">
      <h3>Recommended Path for ${roleNames[targetRole]}</h3>
      <p>Based on your current profile (${experience}, ₹${currentSalary}L current salary)</p>
  `;

  certKeys.forEach((certKey, index) => {
    const cert = certificationsData[certKey];
    const salaryRange = cert.salary_range_lpa.split('-');
    const minSalary = parseFloat(salaryRange[0]);
    const expectedSalary = Math.max(currentSalary * 1.3, minSalary);

    html += `
      <div class="path-step">
        <h4>Step ${index + 1}: ${cert.full_name}</h4>
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); gap: 12px; margin-top: 12px;">
          <div><strong>Cost:</strong> ${formatCurrency(cert.total_cost_inr)}</div>
          <div><strong>Duration:</strong> ${cert.total_duration_years} years</div>
          <div><strong>Expected Salary:</strong> ₹${expectedSalary.toFixed(1)}L</div>
          <div><strong>ROI:</strong> ${((expectedSalary - currentSalary) * 100000 / cert.total_cost_inr).toFixed(1)}x</div>
        </div>
      </div>
    `;
  });

  html += '</div>';
  results.innerHTML = html;
}

function renderCareerChart(currentSalary, certKeys) {
  const ctx = document.getElementById('careerChart')?.getContext('2d');
  if (!ctx) return;
  
  if (careerChart) {
    careerChart.destroy();
  }

  const years = ['Year 0'];
  const salaryProgression = [currentSalary];
  
  let cumulativeYears = 0;
  let currentProjectedSalary = currentSalary;

  certKeys.forEach((certKey, index) => {
    const cert = certificationsData[certKey];
    cumulativeYears += cert.total_duration_years;
    
    const salaryRange = cert.salary_range_lpa.split('-');
    const minSalary = parseFloat(salaryRange[0]);
    currentProjectedSalary = Math.max(currentProjectedSalary * 1.4, minSalary);
    
    years.push(`Year ${Math.ceil(cumulativeYears)}`);
    salaryProgression.push(currentProjectedSalary);
  });

  careerChart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: years,
      datasets: [{
        label: 'Projected Salary (LPA)',
        data: salaryProgression,
        backgroundColor: 'rgba(31, 184, 205, 0.1)',
        borderColor: 'rgba(31, 184, 205, 1)',
        borderWidth: 3,
        fill: true,
        tension: 0.4
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        y: {
          beginAtZero: true,
          title: {
            display: true,
            text: 'Salary (LPA in ₹)'
          }
        },
        x: {
          title: {
            display: true,
            text: 'Timeline'
          }
        }
      },
      plugins: {
        legend: {
          display: true,
          position: 'top'
        }
      }
    }
  });
}

// ROI Calculator
function initializeROICalculator() {
  const certSelect = document.getElementById('roiCertification');
  if (!certSelect) return;

  certSelect.innerHTML = '<option value="">Choose a certification...</option>';
  
  Object.keys(certificationsData).forEach(key => {
    const cert = certificationsData[key];
    const option = document.createElement('option');
    option.value = key;
    option.textContent = cert.full_name;
    certSelect.appendChild(option);
  });

  // Initialize sliders
  const currentSalarySlider = document.getElementById('currentSalarySlider');
  const salaryIncreaseSlider = document.getElementById('salaryIncreaseSlider');
  const timeToCompleteSlider = document.getElementById('timeToCompleteSlider');

  if (currentSalarySlider) currentSalarySlider.addEventListener('input', updateROICalculation);
  if (salaryIncreaseSlider) salaryIncreaseSlider.addEventListener('input', updateROICalculation);
  if (timeToCompleteSlider) timeToCompleteSlider.addEventListener('input', updateROICalculation);
  certSelect.addEventListener('change', updateROICalculation);

  updateROICalculation();
}

function updateROICalculation() {
  const currentSalarySlider = document.getElementById('currentSalarySlider');
  const salaryIncreaseSlider = document.getElementById('salaryIncreaseSlider');
  const timeToCompleteSlider = document.getElementById('timeToCompleteSlider');
  const certSelect = document.getElementById('roiCertification');

  if (!currentSalarySlider || !salaryIncreaseSlider || !timeToCompleteSlider || !certSelect) return;

  const currentSalary = parseFloat(currentSalarySlider.value);
  const salaryIncrease = parseFloat(salaryIncreaseSlider.value);
  const timeToComplete = parseFloat(timeToCompleteSlider.value);
  const certKey = certSelect.value;

  // Update display values
  const currentSalaryDisplay = document.getElementById('currentSalaryDisplay');
  const salaryIncreaseDisplay = document.getElementById('salaryIncreaseDisplay');
  const timeToCompleteDisplay = document.getElementById('timeToCompleteDisplay');

  if (currentSalaryDisplay) currentSalaryDisplay.textContent = currentSalary;
  if (salaryIncreaseDisplay) salaryIncreaseDisplay.textContent = salaryIncrease;
  if (timeToCompleteDisplay) timeToCompleteDisplay.textContent = timeToComplete;

  if (!certKey) {
    document.getElementById('roiResults').innerHTML = '<p>Select a certification to see ROI analysis</p>';
    return;
  }

  const cert = certificationsData[certKey];
  const newSalary = currentSalary * (1 + salaryIncrease / 100);
  const annualIncrease = (newSalary - currentSalary) * 100000; // Convert to rupees
  const roi = (annualIncrease * 5) / cert.total_cost_inr; // 5-year ROI
  const paybackMonths = (cert.total_cost_inr / (annualIncrease / 12)).toFixed(1);

  const html = `
    <div class="roi-summary">
      <div class="roi-metric">
        <h4>${formatCurrency(cert.total_cost_inr)}</h4>
        <p>Investment</p>
      </div>
      <div class="roi-metric">
        <h4>₹${(newSalary - currentSalary).toFixed(1)}L</h4>
        <p>Annual Increase</p>
      </div>
      <div class="roi-metric">
        <h4>${roi.toFixed(1)}x</h4>
        <p>5-Year ROI</p>
      </div>
      <div class="roi-metric">
        <h4>${paybackMonths} months</h4>
        <p>Payback Period</p>
      </div>
    </div>
  `;

  document.getElementById('roiResults').innerHTML = html;
  renderROIChart(certKey, currentSalary, newSalary, cert.total_cost_inr);
}

function renderROIChart(certKey, currentSalary, newSalary, cost) {
  const ctx = document.getElementById('roiChart')?.getContext('2d');
  if (!ctx) return;
  
  if (roiChart) {
    roiChart.destroy();
  }

  const years = Array.from({ length: 6 }, (_, i) => `Year ${i}`);
  const cumulativeGain = years.map((_, i) => {
    if (i === 0) return -cost / 100000; // Initial investment (negative)
    return ((newSalary - currentSalary) * i) - (cost / 100000);
  });

  roiChart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: years,
      datasets: [{
        label: 'Cumulative Gain (₹L)',
        data: cumulativeGain,
        backgroundColor: 'rgba(45, 166, 178, 0.1)',
        borderColor: 'rgba(45, 166, 178, 1)',
        borderWidth: 3,
        fill: true,
        tension: 0.4
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        y: {
          title: {
            display: true,
            text: 'Cumulative Gain (₹L)'
          },
          grid: {
            color: function(context) {
              return context.tick.value === 0 ? 'rgba(0, 0, 0, 0.3)' : 'rgba(0, 0, 0, 0.1)';
            }
          }
        },
        x: {
          title: {
            display: true,
            text: 'Timeline'
          }
        }
      },
      plugins: {
        legend: {
          display: true,
          position: 'top'
        }
      }
    }
  });
}

// Learning Path Generator
function initializeLearningPath() {
  const container = document.getElementById('pathCertifications');
  if (!container) return;

  container.innerHTML = '';

  Object.keys(certificationsData).forEach(key => {
    const cert = certificationsData[key];
    const checkbox = document.createElement('label');
    checkbox.className = 'cert-checkbox';
    checkbox.innerHTML = `
      <input type="checkbox" value="${key}" name="pathCert">
      <div>
        <div style="font-weight: bold;">${cert.full_name}</div>
        <div style="font-size: 12px; color: var(--color-text-secondary);">
          ${formatCurrency(cert.total_cost_inr)} • ${cert.study_hours}h • ${generateStars(cert.overall_difficulty)}
        </div>
      </div>
    `;
    container.appendChild(checkbox);
  });

  // Set default start date to today
  const startDateInput = document.getElementById('startDate');
  if (startDateInput) {
    startDateInput.valueAsDate = new Date();
  }
}

function generateLearningPath() {
  const selectedCerts = Array.from(document.querySelectorAll('input[name="pathCert"]:checked')).map(cb => cb.value);
  const studyHoursInput = document.getElementById('studyHours');
  const startDateInput = document.getElementById('startDate');

  if (!studyHoursInput || !startDateInput) return;

  const studyHours = parseInt(studyHoursInput.value) || 10;
  const startDate = new Date(startDateInput.value);

  if (selectedCerts.length === 0) {
    document.getElementById('learningTimeline').innerHTML = '<p>Please select at least one certification</p>';
    return;
  }

  // Sort certifications by difficulty and duration for optimal learning path
  const sortedCerts = selectedCerts
    .map(key => ({ key, ...certificationsData[key] }))
    .sort((a, b) => a.overall_difficulty - b.overall_difficulty);

  renderLearningTimeline(sortedCerts, studyHours, startDate);
  renderStudySchedule(sortedCerts, studyHours, startDate);
}

function renderLearningTimeline(certs, studyHours, startDate) {
  const timeline = document.getElementById('learningTimeline');
  if (!timeline) return;

  let currentDate = new Date(startDate);
  let totalCost = 0;

  let html = '<h3>Your Learning Timeline</h3>';

  certs.forEach((cert, index) => {
    const weeksNeeded = Math.ceil(cert.study_hours / studyHours);
    const endDate = new Date(currentDate);
    endDate.setDate(endDate.getDate() + (weeksNeeded * 7));
    
    totalCost += cert.total_cost_inr;

    html += `
      <div class="timeline-item">
        <h4>${cert.full_name}</h4>
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); gap: 12px;">
          <div><strong>Start:</strong> ${currentDate.toLocaleDateString()}</div>
          <div><strong>End:</strong> ${endDate.toLocaleDateString()}</div>
          <div><strong>Duration:</strong> ${weeksNeeded} weeks</div>
          <div><strong>Study Hours:</strong> ${cert.study_hours}h</div>
          <div><strong>Cost:</strong> ${formatCurrency(cert.total_cost_inr)}</div>
          <div><strong>Difficulty:</strong> ${generateStars(cert.overall_difficulty)}</div>
        </div>
      </div>
    `;

    currentDate = new Date(endDate);
    currentDate.setDate(currentDate.getDate() + 7); // 1 week break
  });

  html += `
    <div class="timeline-item" style="border-left-color: var(--color-success);">
      <h4>Summary</h4>
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); gap: 12px;">
        <div><strong>Total Duration:</strong> ${Math.ceil((currentDate - startDate) / (1000 * 60 * 60 * 24 * 7))} weeks</div>
        <div><strong>Total Cost:</strong> ${formatCurrency(totalCost)}</div>
        <div><strong>Total Study Hours:</strong> ${certs.reduce((sum, cert) => sum + cert.study_hours, 0)}h</div>
        <div><strong>Completion Date:</strong> ${currentDate.toLocaleDateString()}</div>
      </div>
    </div>
  `;

  timeline.innerHTML = html;
}

function renderStudySchedule(certs, studyHours, startDate) {
  const schedule = document.getElementById('studySchedule');
  if (!schedule) return;

  let html = '<h3>Detailed Study Schedule</h3>';

  let currentDate = new Date(startDate);

  certs.forEach((cert, certIndex) => {
    const weeksNeeded = Math.ceil(cert.study_hours / studyHours);
    const hoursPerWeek = cert.study_hours / weeksNeeded;

    html += `<div class="schedule-certification">
      <h4>${cert.full_name} (${weeksNeeded} weeks)</h4>
    `;

    for (let week = 1; week <= weeksNeeded; week++) {
      const weekStart = new Date(currentDate);
      const weekEnd = new Date(currentDate);
      weekEnd.setDate(weekEnd.getDate() + 6);

      html += `
        <div class="schedule-week">
          <h5>Week ${week} (${weekStart.toLocaleDateString()} - ${weekEnd.toLocaleDateString()})</h5>
          <div class="schedule-tasks">
            <div class="schedule-task">📚 Study: ${hoursPerWeek.toFixed(1)}h</div>
            <div class="schedule-task">📝 Practice: ${(hoursPerWeek * 0.3).toFixed(1)}h</div>
            <div class="schedule-task">🧠 Review: ${(hoursPerWeek * 0.2).toFixed(1)}h</div>
          </div>
        </div>
      `;

      currentDate.setDate(currentDate.getDate() + 7);
    }

    html += '</div>';
    currentDate.setDate(currentDate.getDate() + 7); // Break week
  });

  schedule.innerHTML = html;
}

// Theme toggle
function toggleTheme() {
  const currentTheme = document.documentElement.getAttribute('data-color-scheme');
  const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
  const button = document.getElementById('themeToggle');
  
  if (button) {
    document.documentElement.setAttribute('data-color-scheme', newTheme);
    button.textContent = newTheme === 'dark' ? '☀️ Light Mode' : '🌙 Dark Mode';
  }
}

// Event listeners
document.addEventListener('DOMContentLoaded', function() {
  // Tab navigation
  document.querySelectorAll('.nav-tab').forEach(tab => {
    tab.addEventListener('click', (e) => {
      e.preventDefault();
      const tabName = tab.getAttribute('data-tab');
      showTab(tabName);
    });
  });

  // Search and filters
  const searchInput = document.getElementById('searchInput');
  const typeFilter = document.getElementById('typeFilter');
  const difficultyFilter = document.getElementById('difficultyFilter');
  const costFilter = document.getElementById('costFilter');

  if (searchInput) searchInput.addEventListener('input', filterCertifications);
  if (typeFilter) typeFilter.addEventListener('change', filterCertifications);
  if (difficultyFilter) difficultyFilter.addEventListener('change', filterCertifications);
  if (costFilter) costFilter.addEventListener('change', filterCertifications);

  // Modal close
  const modalClose = document.getElementById('modalClose');
  const certModal = document.getElementById('certModal');

  if (modalClose) modalClose.addEventListener('click', hideModal);
  if (certModal) {
    certModal.addEventListener('click', (e) => {
      if (e.target === certModal) {
        hideModal();
      }
    });
  }

  // Career simulator
  const simulateBtn = document.getElementById('simulateCareer');
  if (simulateBtn) simulateBtn.addEventListener('click', simulateCareer);

  // Learning path generator
  const generateBtn = document.getElementById('generatePath');
  if (generateBtn) generateBtn.addEventListener('click', generateLearningPath);

  // Theme toggle
  const themeToggle = document.getElementById('themeToggle');
  if (themeToggle) themeToggle.addEventListener('click', toggleTheme);

  // Initialize the app
  renderCertificationGrid();
  
  // Detect system theme preference
  if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    document.documentElement.setAttribute('data-color-scheme', 'dark');
    if (themeToggle) themeToggle.textContent = '☀️ Light Mode';
  }
});

// Global functions for inline event handlers
window.showCertificationModal = showCertificationModal;