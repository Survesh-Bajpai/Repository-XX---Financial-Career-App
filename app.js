// Application data from JSON
const certificationData = {
  "certifications": [
    {"name": "NISM Series 9", "us_equivalent": "US Series 7", "focus": "Merchant Banking", "difficulty": 6.4, "cost_inr": 1500, "study_hours": 85, "pass_rate": 70, "entry_salary": [3.5, 6.0], "mid_salary": [6.0, 12.0], "senior_salary": [12.0, 25.0], "subjects": [{"name": "Capital Markets Introduction", "difficulty": 4, "weight": 7, "hours": 8}, {"name": "Merchant Banking Concepts", "difficulty": 5, "weight": 15, "hours": 12}, {"name": "Registration & Code of Conduct", "difficulty": 6, "weight": 15, "hours": 10}, {"name": "Issue Management Process", "difficulty": 8, "weight": 18, "hours": 15}]},
    {"name": "NISM Series 10A", "us_equivalent": "CFP", "focus": "Investment Advisory Level 1", "difficulty": 5.6, "cost_inr": 3000, "study_hours": 106, "pass_rate": 68, "entry_salary": [3.0, 5.0], "mid_salary": [5.0, 10.0], "senior_salary": [10.0, 20.0], "subjects": [{"name": "Personal Financial Planning", "difficulty": 4, "weight": 25, "hours": 20}, {"name": "Investment Products", "difficulty": 6, "weight": 25, "hours": 18}, {"name": "Portfolio Management", "difficulty": 7, "weight": 15, "hours": 15}]},
    {"name": "NISM Series 10B", "us_equivalent": "CFP", "focus": "Investment Advisory Level 2", "difficulty": 6.3, "cost_inr": 3000, "study_hours": 135, "pass_rate": 65, "entry_salary": [3.5, 6.0], "mid_salary": [6.0, 12.0], "senior_salary": [12.0, 25.0], "subjects": [{"name": "Risk & Insurance Planning", "difficulty": 6, "weight": 25, "hours": 25}, {"name": "Retirement Planning", "difficulty": 6, "weight": 30, "hours": 30}, {"name": "Comprehensive Planning", "difficulty": 8, "weight": 15, "hours": 20}]},
    {"name": "NISM Series 15", "us_equivalent": "CMT", "focus": "Research Analyst", "difficulty": 5.9, "cost_inr": 1500, "study_hours": 139, "pass_rate": 70, "entry_salary": [4.0, 7.0], "mid_salary": [8.0, 15.0], "senior_salary": [15.0, 35.0], "subjects": [{"name": "Economic Analysis", "difficulty": 6, "weight": 7, "hours": 10}, {"name": "Industry Analysis", "difficulty": 7, "weight": 10, "hours": 15}, {"name": "Company Analysis - Quantitative", "difficulty": 8, "weight": 15, "hours": 20}, {"name": "Valuation Principles", "difficulty": 9, "weight": 15, "hours": 25}]},
    {"name": "NISM Series 19C", "us_equivalent": "CAIA", "focus": "AIF Manager", "difficulty": 6.9, "cost_inr": 3000, "study_hours": 181, "pass_rate": 65, "entry_salary": [4.5, 7.0], "mid_salary": [8.0, 15.0], "senior_salary": [18.0, 40.0], "subjects": [{"name": "Fund Structuring", "difficulty": 8, "weight": 10, "hours": 18}, {"name": "Investment Strategies", "difficulty": 9, "weight": 10, "hours": 20}, {"name": "Valuation Techniques", "difficulty": 9, "weight": 10, "hours": 20}]},
    {"name": "NISM Series 19D", "us_equivalent": "CAIA", "focus": "AIF Distributor", "difficulty": 6.2, "cost_inr": 3000, "study_hours": 127, "pass_rate": 70, "entry_salary": [3.5, 6.0], "mid_salary": [6.0, 12.0], "senior_salary": [12.0, 25.0], "subjects": [{"name": "AIF Ecosystem", "difficulty": 6, "weight": 5, "hours": 8}, {"name": "Investment Strategies", "difficulty": 8, "weight": 10, "hours": 15}]},
    {"name": "NISM Series 21B", "us_equivalent": "CFA", "focus": "Portfolio Manager", "difficulty": 6.9, "cost_inr": 4500, "study_hours": 273, "pass_rate": 70, "entry_salary": [4.5, 8.0], "mid_salary": [8.0, 18.0], "senior_salary": [20.0, 50.0], "subjects": [{"name": "Fixed Income Securities", "difficulty": 8, "weight": 5, "hours": 12}, {"name": "Derivatives", "difficulty": 9, "weight": 5, "hours": 15}, {"name": "Equity Portfolio Strategies", "difficulty": 9, "weight": 15, "hours": 25}, {"name": "Performance Measurement", "difficulty": 8, "weight": 10, "hours": 18}]},
    {"name": "US Series 7", "us_equivalent": "US Series 7", "focus": "General Securities Representative", "difficulty": 6.9, "cost_inr": 175000, "study_hours": 135, "pass_rate": 72, "entry_salary": [5.0, 8.0], "mid_salary": [8.0, 18.0], "senior_salary": [18.0, 35.0], "subjects": [{"name": "Securities Products", "difficulty": 7, "weight": 25, "hours": 30}, {"name": "Options & Derivatives", "difficulty": 9, "weight": 15, "hours": 25}]},
    {"name": "CFP", "us_equivalent": "CFP", "focus": "Certified Financial Planner", "difficulty": 5.5, "cost_inr": 175000, "study_hours": 195, "pass_rate": 65, "entry_salary": [3.5, 6.0], "mid_salary": [6.0, 12.0], "senior_salary": [12.0, 25.0], "subjects": [{"name": "Investment Planning", "difficulty": 7, "weight": 16.7, "hours": 40}, {"name": "Tax Planning", "difficulty": 6, "weight": 16.7, "hours": 35}]},
    {"name": "CMT Level 1", "us_equivalent": "CMT", "focus": "Technical Analysis Level 1", "difficulty": 5.7, "cost_inr": 75000, "study_hours": 140, "pass_rate": 65, "entry_salary": [4.0, 6.0], "mid_salary": [8.0, 12.0], "senior_salary": [15.0, 25.0], "subjects": [{"name": "Chart Analysis", "difficulty": 6, "weight": 23, "hours": 30}]},
    {"name": "CMT Level 2", "us_equivalent": "CMT", "focus": "Technical Analysis Level 2", "difficulty": 7.2, "cost_inr": 80000, "study_hours": 160, "pass_rate": 70, "entry_salary": [5.0, 7.0], "mid_salary": [10.0, 15.0], "senior_salary": [20.0, 35.0], "subjects": [{"name": "Risk Management", "difficulty": 8, "weight": 15, "hours": 30}]},
    {"name": "CMT Level 3", "us_equivalent": "CMT", "focus": "Technical Analysis Level 3", "difficulty": 7.3, "cost_inr": 85000, "study_hours": 180, "pass_rate": 75, "entry_salary": [6.0, 8.0], "mid_salary": [12.0, 18.0], "senior_salary": [25.0, 50.0], "subjects": [{"name": "Advanced Risk Management", "difficulty": 9, "weight": 21, "hours": 40}]},
    {"name": "CAIA Level 1", "us_equivalent": "CAIA", "focus": "Alternative Investments Level 1", "difficulty": 6.8, "cost_inr": 110000, "study_hours": 260, "pass_rate": 53, "entry_salary": [8.0, 12.0], "mid_salary": [15.0, 25.0], "senior_salary": [30.0, 60.0], "subjects": [{"name": "Hedge Funds", "difficulty": 8, "weight": 20, "hours": 55}]},
    {"name": "CAIA Level 2", "us_equivalent": "CAIA", "focus": "Alternative Investments Level 2", "difficulty": 7.6, "cost_inr": 115000, "study_hours": 250, "pass_rate": 67, "entry_salary": [10.0, 15.0], "mid_salary": [18.0, 30.0], "senior_salary": [40.0, 80.0], "subjects": [{"name": "Methods & Models", "difficulty": 9, "weight": 10, "hours": 45}]},
    {"name": "CFA Level 1", "us_equivalent": "CFA", "focus": "Investment Analysis Level 1", "difficulty": 7.0, "cost_inr": 90000, "study_hours": 300, "pass_rate": 45, "entry_salary": [4.5, 8.0], "mid_salary": [8.0, 15.0], "senior_salary": [15.0, 35.0], "subjects": [{"name": "Fixed Income", "difficulty": 9, "weight": 12.5, "hours": 90}]},
    {"name": "CFA Level 2", "us_equivalent": "CFA", "focus": "Investment Analysis Level 2", "difficulty": 8.1, "cost_inr": 95000, "study_hours": 350, "pass_rate": 44, "entry_salary": [6.0, 12.0], "mid_salary": [12.0, 25.0], "senior_salary": [25.0, 60.0], "subjects": [{"name": "Derivatives", "difficulty": 9, "weight": 7.5, "hours": 75}]},
    {"name": "CFA Level 3", "us_equivalent": "CFA", "focus": "Portfolio Management", "difficulty": 8.3, "cost_inr": 100000, "study_hours": 350, "pass_rate": 54, "entry_salary": [10.0, 18.0], "mid_salary": [18.0, 35.0], "senior_salary": [35.0, 100.0], "subjects": [{"name": "Portfolio Management", "difficulty": 9, "weight": 37.5, "hours": 140}]}
  ],
  "common_subjects": [
    {"name": "Portfolio Strategies", "avg_difficulty": 9.0, "frequency": 2, "certifications": ["NISM Series 21B", "CFA Level 3"]},
    {"name": "Valuation", "avg_difficulty": 8.7, "frequency": 3, "certifications": ["NISM Series 15", "NISM Series 19C", "CAIA Level 2"]},
    {"name": "Investment Strategies", "avg_difficulty": 8.0, "frequency": 6, "certifications": ["NISM Series 19C", "NISM Series 19D", "CFP", "CAIA Levels"]},
    {"name": "Risk Management", "avg_difficulty": 7.8, "frequency": 5, "certifications": ["NISM Series 10A", "CMT Levels", "CAIA Level 2"]},
    {"name": "Fixed Income", "avg_difficulty": 8.7, "frequency": 4, "certifications": ["NISM Series 21B", "CFA Levels"]},
    {"name": "Derivatives", "avg_difficulty": 8.7, "frequency": 4, "certifications": ["NISM Series 21B", "CFA Levels"]},
    {"name": "Portfolio Management", "avg_difficulty": 8.0, "frequency": 7, "certifications": ["Multiple certifications"]},
    {"name": "Alternative Investments", "avg_difficulty": 6.7, "frequency": 8, "certifications": ["NISM AIF Series", "CAIA Levels", "CFA Levels"]}
  ],
  "career_paths": [
    {"name": "Investment Banking Path", "entry_cert": "NISM Series 9", "entry_role": "Merchant Banking Associate", "entry_salary": "₹3.5-6L", "entry_time": "0-2 years", "mid_cert": "NISM Series 9 + 21B", "mid_role": "Senior Merchant Banker", "mid_salary": "₹6-12L", "mid_time": "2-5 years", "senior_cert": "Multiple NISM + CFA L2", "senior_role": "Head Merchant Banking", "senior_salary": "₹12-25L", "senior_time": "5-10 years"},
    {"name": "Financial Planning Path", "entry_cert": "NISM Series 10A", "entry_role": "Investment Advisor", "entry_salary": "₹3-5L", "entry_time": "0-2 years", "mid_cert": "NISM Series 10B", "mid_role": "Senior Investment Advisor", "mid_salary": "₹5-10L", "mid_time": "2-5 years", "senior_cert": "Multiple NISM + CFP", "senior_role": "Chief Investment Advisor", "senior_salary": "₹10-20L", "senior_time": "5-10 years"},
    {"name": "Research Analysis Path", "entry_cert": "NISM Series 15", "entry_role": "Research Associate", "entry_salary": "₹4-7L", "entry_time": "0-2 years", "mid_cert": "NISM Series 15 + 10A", "mid_role": "Research Analyst", "mid_salary": "₹8-15L", "mid_time": "2-5 years", "senior_cert": "NISM 15 + CFA L2", "senior_role": "Head of Research", "senior_salary": "₹15-35L", "senior_time": "5-10 years"},
    {"name": "Alternative Investments Path", "entry_cert": "NISM Series 19C/19D", "entry_role": "AIF Analyst", "entry_salary": "₹4.5-7L", "entry_time": "0-2 years", "mid_cert": "NISM Series 19C + 21B", "mid_role": "AIF Manager", "mid_salary": "₹8-15L", "mid_time": "2-5 years", "senior_cert": "NISM 19C + CFA L1", "senior_role": "Head of Alternatives", "senior_salary": "₹18-40L", "senior_time": "5-10 years"},
    {"name": "Portfolio Management Path", "entry_cert": "NISM Series 21B", "entry_role": "Portfolio Assistant", "entry_salary": "₹4.5-8L", "entry_time": "0-2 years", "mid_cert": "NISM Series 21B + CFA L1", "mid_role": "Portfolio Manager", "mid_salary": "₹8-18L", "mid_time": "2-5 years", "senior_cert": "NISM 21B + CFA L2", "senior_role": "Chief Portfolio Manager", "senior_salary": "₹20-50L", "senior_time": "5-10 years"}
  ]
};

// Application state
let currentCareerPath = null;
let currentTreeLevel = 0;
let unlockedNodes = [];
let charts = {};

// Initialize application
document.addEventListener('DOMContentLoaded', function() {
  initializeApp();
});

function initializeApp() {
  setupNavigation();
  setupEventListeners();
  initializeDashboard();
  initializeSalaryCalculator();
  initializeSubjectAnalysis();
  setupModal();
}

// Navigation functionality
function setupNavigation() {
  const navItems = document.querySelectorAll('.nav-item');
  const sections = document.querySelectorAll('.section');
  
  navItems.forEach(item => {
    item.addEventListener('click', (e) => {
      e.preventDefault();
      const targetSection = item.getAttribute('data-section');
      switchSection(targetSection);
      
      // Update active nav item
      navItems.forEach(nav => nav.classList.remove('active'));
      item.classList.add('active');
    });
  });
}

function switchSection(sectionId) {
  const sections = document.querySelectorAll('.section');
  
  sections.forEach(section => {
    section.classList.remove('active');
  });
  
  const targetSection = document.getElementById(sectionId);
  if (targetSection) {
    targetSection.classList.add('active');
  }
}

// Event listeners setup
function setupEventListeners() {
  // Salary section filters
  const experienceFilter = document.getElementById('experienceFilter');
  const certTypeFilter = document.getElementById('certTypeFilter');
  
  if (experienceFilter) {
    experienceFilter.addEventListener('change', filterSalaryData);
  }
  if (certTypeFilter) {
    certTypeFilter.addEventListener('change', filterSalaryData);
  }
  
  // Subject search and filter
  const subjectSearch = document.getElementById('subjectSearch');
  const subjectDifficultyFilter = document.getElementById('subjectDifficultyFilter');
  
  if (subjectSearch) {
    subjectSearch.addEventListener('input', filterSubjects);
  }
  if (subjectDifficultyFilter) {
    subjectDifficultyFilter.addEventListener('change', filterSubjects);
  }
  
  // Career simulator
  const careerOptions = document.querySelectorAll('.career-option');
  careerOptions.forEach(option => {
    option.addEventListener('click', (e) => {
      const path = option.getAttribute('data-path');
      startCareerSimulation(path);
    });
  });
  
  const resetTree = document.getElementById('resetTree');
  if (resetTree) {
    resetTree.addEventListener('click', resetCareerTree);
  }
}

// Dashboard initialization
function initializeDashboard() {
  initializeDashboardCharts();
  populateROITable();
}

function initializeDashboardCharts() {
  const nismCerts = certificationData.certifications.filter(cert => cert.name.startsWith('NISM'));
  const usCerts = certificationData.certifications.filter(cert => !cert.name.startsWith('NISM'));
  
  // Difficulty comparison chart
  const difficultyCtx = document.getElementById('difficultyChart');
  if (difficultyCtx) {
    charts.difficulty = new Chart(difficultyCtx, {
      type: 'bar',
      data: {
        labels: ['NISM Average', 'US Average'],
        datasets: [{
          label: 'Difficulty Level',
          data: [
            nismCerts.reduce((acc, cert) => acc + cert.difficulty, 0) / nismCerts.length,
            usCerts.reduce((acc, cert) => acc + cert.difficulty, 0) / usCerts.length
          ],
          backgroundColor: ['#1FB8CD', '#FFC185'],
          borderColor: ['#1FB8CD', '#FFC185'],
          borderWidth: 2,
          borderRadius: 8
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          y: {
            beginAtZero: true,
            max: 10
          }
        }
      }
    });
  }
  
  // Cost comparison pie chart
  const costCtx = document.getElementById('costChart');
  if (costCtx) {
    const avgNismCost = nismCerts.reduce((acc, cert) => acc + cert.cost_inr, 0) / nismCerts.length;
    const avgUsCost = usCerts.reduce((acc, cert) => acc + cert.cost_inr, 0) / usCerts.length;
    
    charts.cost = new Chart(costCtx, {
      type: 'doughnut',
      data: {
        labels: ['NISM Average', 'US Average'],
        datasets: [{
          data: [avgNismCost / 1000, avgUsCost / 1000],
          backgroundColor: ['#B4413C', '#ECEBD5'],
          borderWidth: 0
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            position: 'bottom'
          },
          tooltip: {
            callbacks: {
              label: function(context) {
                return context.label + ': ₹' + context.parsed.toFixed(0) + 'k';
              }
            }
          }
        }
      }
    });
  }
  
  // Pass rate line chart
  const passRateCtx = document.getElementById('passRateChart');
  if (passRateCtx) {
    const nismPassRates = nismCerts.map(cert => cert.pass_rate);
    const usPassRates = usCerts.map(cert => cert.pass_rate);
    
    charts.passRate = new Chart(passRateCtx, {
      type: 'line',
      data: {
        labels: ['Basic', 'Intermediate', 'Advanced'],
        datasets: [{
          label: 'NISM Pass Rates',
          data: [
            Math.max(...nismPassRates),
            nismPassRates.reduce((a,b) => a+b, 0) / nismPassRates.length,
            Math.min(...nismPassRates)
          ],
          borderColor: '#5D878F',
          backgroundColor: 'rgba(93, 135, 143, 0.1)',
          tension: 0.4,
          fill: true
        }, {
          label: 'US Pass Rates',
          data: [
            Math.max(...usPassRates),
            usPassRates.reduce((a,b) => a+b, 0) / usPassRates.length,
            Math.min(...usPassRates)
          ],
          borderColor: '#DB4545',
          backgroundColor: 'rgba(219, 69, 69, 0.1)',
          tension: 0.4,
          fill: true
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          y: {
            beginAtZero: true,
            max: 100
          }
        }
      }
    });
  }
  
  // Study hours stacked bar
  const studyHoursCtx = document.getElementById('studyHoursChart');
  if (studyHoursCtx) {
    const nismHours = nismCerts.map(cert => cert.study_hours);
    const usHours = usCerts.map(cert => cert.study_hours);
    
    charts.studyHours = new Chart(studyHoursCtx, {
      type: 'bar',
      data: {
        labels: ['Entry Level', 'Intermediate', 'Advanced'],
        datasets: [{
          label: 'NISM Hours',
          data: [
            Math.min(...nismHours),
            nismHours.reduce((a,b) => a+b, 0) / nismHours.length,
            Math.max(...nismHours)
          ],
          backgroundColor: '#D2BA4C'
        }, {
          label: 'US Hours',
          data: [
            Math.min(...usHours),
            usHours.reduce((a,b) => a+b, 0) / usHours.length,
            Math.max(...usHours)
          ],
          backgroundColor: '#964325'
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          x: {
            stacked: false
          },
          y: {
            stacked: false
          }
        }
      }
    });
  }
}

function populateROITable() {
  const tableBody = document.getElementById('roiTableBody');
  if (!tableBody) return;
  
  const sortedCerts = [...certificationData.certifications].sort((a, b) => {
    const roiA = calculateROI(a);
    const roiB = calculateROI(b);
    return roiB - roiA;
  });
  
  tableBody.innerHTML = sortedCerts.slice(0, 10).map(cert => `
    <tr>
      <td><strong>${cert.name}</strong></td>
      <td><span class="cert-badge">${cert.name.startsWith('NISM') ? 'NISM' : 'US'}</span></td>
      <td><span class="difficulty-badge difficulty-${getDifficultyClass(cert.difficulty)}">${cert.difficulty}/10</span></td>
      <td>₹${(cert.cost_inr / 1000).toFixed(0)}k</td>
      <td>₹${cert.senior_salary[1]}L</td>
      <td><strong>${calculateROI(cert).toFixed(1)}</strong></td>
    </tr>
  `).join('');
}

function calculateROI(cert) {
  const avgSeniorSalary = (cert.senior_salary[0] + cert.senior_salary[1]) / 2;
  const costInLakhs = cert.cost_inr / 100000;
  return (avgSeniorSalary / Math.max(costInLakhs, 0.01)) / cert.difficulty;
}

function getDifficultyClass(difficulty) {
  if (difficulty <= 5) return 'easy';
  if (difficulty <= 7) return 'medium';
  return 'hard';
}

// Salary section functionality
function initializeSalaryCalculator() {
  const calcCertification = document.getElementById('calcCertification');
  const experienceSlider = document.getElementById('experienceSlider');
  const experienceValue = document.getElementById('experienceValue');
  
  // Populate certification dropdown
  if (calcCertification) {
    certificationData.certifications.forEach(cert => {
      const option = document.createElement('option');
      option.value = cert.name;
      option.textContent = cert.name;
      calcCertification.appendChild(option);
    });
    
    calcCertification.addEventListener('change', updateSalaryCalculation);
  }
  
  if (experienceSlider && experienceValue) {
    experienceSlider.addEventListener('input', (e) => {
      experienceValue.textContent = `${e.target.value} years`;
      updateSalaryCalculation();
    });
  }
  
  // Initialize salary vs difficulty chart
  initializeSalaryDifficultyChart();
}

function updateSalaryCalculation() {
  const certName = document.getElementById('calcCertification').value;
  const experience = parseInt(document.getElementById('experienceSlider').value);
  const salaryDisplay = document.getElementById('calculatedSalary');
  
  if (!certName || !salaryDisplay) return;
  
  const cert = certificationData.certifications.find(c => c.name === certName);
  if (!cert) return;
  
  let salaryRange;
  if (experience <= 2) {
    salaryRange = cert.entry_salary;
  } else if (experience <= 7) {
    salaryRange = cert.mid_salary;
  } else {
    salaryRange = cert.senior_salary;
  }
  
  salaryDisplay.innerHTML = `
    <div class="salary-range-display">
      ₹${salaryRange[0]}L - ₹${salaryRange[1]}L
      <div style="font-size: 12px; margin-top: 4px; opacity: 0.8;">
        Based on ${experience} years experience
      </div>
    </div>
  `;
}

function initializeSalaryDifficultyChart() {
  const ctx = document.getElementById('salaryDifficultyChart');
  if (!ctx) return;
  
  const data = certificationData.certifications.map(cert => ({
    x: cert.difficulty,
    y: (cert.senior_salary[0] + cert.senior_salary[1]) / 2,
    r: Math.sqrt(cert.cost_inr / 10000),
    label: cert.name
  }));
  
  charts.salaryDifficulty = new Chart(ctx, {
    type: 'bubble',
    data: {
      datasets: [{
        label: 'Salary vs Difficulty',
        data: data,
        backgroundColor: 'rgba(31, 184, 205, 0.6)',
        borderColor: '#1FB8CD',
        borderWidth: 2
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        x: {
          title: {
            display: true,
            text: 'Difficulty Level'
          },
          min: 0,
          max: 10
        },
        y: {
          title: {
            display: true,
            text: 'Average Senior Salary (₹L)'
          }
        }
      },
      plugins: {
        tooltip: {
          callbacks: {
            label: function(context) {
              return `${context.raw.label}: ₹${context.parsed.y}L (Difficulty: ${context.parsed.x})`;
            }
          }
        }
      }
    }
  });
}

function filterSalaryData() {
  console.log('Filtering salary data...');
}

// Subject analysis functionality
function initializeSubjectAnalysis() {
  populateCommonSubjects();
  populateSubjectExplorer();
}

function populateCommonSubjects() {
  const container = document.getElementById('commonSubjectsTable');
  if (!container) return;
  
  const sortedSubjects = [...certificationData.common_subjects].sort((a, b) => b.avg_difficulty - a.avg_difficulty);
  
  container.innerHTML = `
    <h4>Most Challenging Common Subjects</h4>
    <div class="subject-list">
      ${sortedSubjects.map((subject, index) => `
        <div class="subject-item">
          <div class="subject-name">
            <strong>#${index + 1} ${subject.name}</strong>
            <div style="font-size: 12px; color: var(--color-text-secondary);">
              Found in ${subject.frequency} certifications
            </div>
          </div>
          <div class="subject-difficulty">
            <span class="difficulty-badge difficulty-${getDifficultyClass(subject.avg_difficulty)}">
              ${subject.avg_difficulty}/10
            </span>
          </div>
        </div>
      `).join('')}
    </div>
  `;
}

function populateSubjectExplorer() {
  const explorer = document.getElementById('subjectExplorer');
  if (!explorer) return;
  
  const allSubjects = [];
  certificationData.certifications.forEach(cert => {
    cert.subjects.forEach(subject => {
      allSubjects.push({
        ...subject,
        certification: cert.name,
        certType: cert.name.startsWith('NISM') ? 'NISM' : 'US'
      });
    });
  });
  
  renderSubjectExplorer(allSubjects);
}

function renderSubjectExplorer(subjects) {
  const explorer = document.getElementById('subjectExplorer');
  if (!explorer) return;
  
  explorer.innerHTML = subjects.map(subject => `
    <div class="subject-item">
      <div class="subject-name">
        <strong>${subject.name}</strong>
        <div style="font-size: 12px; color: var(--color-text-secondary);">
          ${subject.certification} | ${subject.hours}h | ${subject.weight}% weight
        </div>
      </div>
      <div class="subject-difficulty">
        <span class="difficulty-badge difficulty-${getDifficultyClass(subject.difficulty)}">
          ${subject.difficulty}/10
        </span>
      </div>
    </div>
  `).join('');
}

function filterSubjects() {
  const search = document.getElementById('subjectSearch').value.toLowerCase();
  const difficultyFilter = document.getElementById('subjectDifficultyFilter').value;
  
  const allSubjects = [];
  certificationData.certifications.forEach(cert => {
    cert.subjects.forEach(subject => {
      allSubjects.push({
        ...subject,
        certification: cert.name,
        certType: cert.name.startsWith('NISM') ? 'NISM' : 'US'
      });
    });
  });
  
  const filtered = allSubjects.filter(subject => {
    const matchesSearch = subject.name.toLowerCase().includes(search);
    
    let matchesDifficulty = true;
    if (difficultyFilter === 'easy') {
      matchesDifficulty = subject.difficulty <= 5;
    } else if (difficultyFilter === 'medium') {
      matchesDifficulty = subject.difficulty > 5 && subject.difficulty <= 7;
    } else if (difficultyFilter === 'hard') {
      matchesDifficulty = subject.difficulty > 7;
    }
    
    return matchesSearch && matchesDifficulty;
  });
  
  renderSubjectExplorer(filtered);
}

// Career simulator functionality
function startCareerSimulation(pathName) {
  const careerPath = certificationData.career_paths.find(path => path.name.includes(pathName));
  if (!careerPath) return;
  
  currentCareerPath = careerPath;
  currentTreeLevel = 0;
  unlockedNodes = ['entry'];
  
  document.getElementById('careerStarter').style.display = 'none';
  document.getElementById('careerTreeContainer').style.display = 'block';
  
  renderCareerTree();
}

function renderCareerTree() {
  const treeContainer = document.getElementById('careerTree');
  if (!treeContainer || !currentCareerPath) return;
  
  treeContainer.innerHTML = `
    <div class="tree-level">
      <div class="node node-entry ${unlockedNodes.includes('entry') ? 'unlocked' : 'locked'}" 
           onclick="selectNode('entry')" data-level="entry">
        <div class="node-title">${currentCareerPath.entry_cert}</div>
        <div class="node-salary">${currentCareerPath.entry_salary}</div>
        <div style="font-size: 10px;">${currentCareerPath.entry_time}</div>
      </div>
    </div>
    
    <div class="tree-level">
      <div class="node node-mid ${unlockedNodes.includes('mid') ? 'unlocked' : 'locked'}" 
           onclick="selectNode('mid')" data-level="mid">
        <div class="node-title">${currentCareerPath.mid_cert}</div>
        <div class="node-salary">${currentCareerPath.mid_salary}</div>
        <div style="font-size: 10px;">${currentCareerPath.mid_time}</div>
      </div>
    </div>
    
    <div class="tree-level">
      <div class="node node-senior ${unlockedNodes.includes('senior') ? 'unlocked' : 'locked'}" 
           onclick="selectNode('senior')" data-level="senior">
        <div class="node-title">${currentCareerPath.senior_cert}</div>
        <div class="node-salary">${currentCareerPath.senior_salary}</div>
        <div style="font-size: 10px;">${currentCareerPath.senior_time}</div>
      </div>
    </div>
  `;
  
  updateCareerInfo();
}

// Make selectNode global
window.selectNode = function(level) {
  if (!unlockedNodes.includes(level)) return;
  
  const nodeData = getNodeData(level);
  showNodeModal(nodeData);
  
  // Unlock next level
  if (level === 'entry' && !unlockedNodes.includes('mid')) {
    unlockedNodes.push('mid');
    renderCareerTree();
  } else if (level === 'mid' && !unlockedNodes.includes('senior')) {
    unlockedNodes.push('senior');
    renderCareerTree();
  }
};

function getNodeData(level) {
  if (!currentCareerPath) return null;
  
  const levelData = {
    entry: {
      title: currentCareerPath.entry_cert,
      role: currentCareerPath.entry_role,
      salary: currentCareerPath.entry_salary,
      time: currentCareerPath.entry_time
    },
    mid: {
      title: currentCareerPath.mid_cert,
      role: currentCareerPath.mid_role,
      salary: currentCareerPath.mid_salary,
      time: currentCareerPath.mid_time
    },
    senior: {
      title: currentCareerPath.senior_cert,
      role: currentCareerPath.senior_role,
      salary: currentCareerPath.senior_salary,
      time: currentCareerPath.senior_time
    }
  };
  
  return levelData[level];
}

function updateCareerInfo() {
  const careerInfo = document.getElementById('careerInfo');
  if (!careerInfo || !currentCareerPath) return;
  
  careerInfo.innerHTML = `
    <h4>${currentCareerPath.name}</h4>
    <p>Click on unlocked nodes to see details and progress through your career path.</p>
    <div style="margin-top: 16px; padding: 12px; background: var(--color-bg-1); border-radius: 6px;">
      <strong>Path Overview:</strong><br>
      Entry: ${currentCareerPath.entry_role}<br>
      Mid: ${currentCareerPath.mid_role}<br>
      Senior: ${currentCareerPath.senior_role}
    </div>
  `;
}

function resetCareerTree() {
  currentCareerPath = null;
  currentTreeLevel = 0;
  unlockedNodes = [];
  
  document.getElementById('careerStarter').style.display = 'block';
  document.getElementById('careerTreeContainer').style.display = 'none';
}

// Modal functionality - FIXED
function setupModal() {
  const modal = document.getElementById('nodeModal');
  const closeModalBtn = document.getElementById('closeModal');
  
  // Fix close button event listener
  if (closeModalBtn) {
    closeModalBtn.addEventListener('click', function(e) {
      e.preventDefault();
      e.stopPropagation();
      hideNodeModal();
    });
  }
  
  // Fix modal backdrop click
  if (modal) {
    modal.addEventListener('click', function(e) {
      if (e.target === modal) {
        hideNodeModal();
      }
    });
  }
  
  // Add escape key listener
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
      hideNodeModal();
    }
  });
}

function showNodeModal(nodeData) {
  const modal = document.getElementById('nodeModal');
  const modalTitle = document.getElementById('modalTitle');
  const modalBody = document.getElementById('modalBody');
  
  if (!modal || !nodeData) return;
  
  modalTitle.textContent = `${nodeData.title} - ${nodeData.role}`;
  modalBody.innerHTML = `
    <div class="node-details">
      <div class="detail-item" style="margin-bottom: 12px;">
        <strong>Salary Range:</strong> ${nodeData.salary}
      </div>
      <div class="detail-item" style="margin-bottom: 12px;">
        <strong>Experience Required:</strong> ${nodeData.time}
      </div>
      <div class="detail-item" style="margin-bottom: 12px;">
        <strong>Role:</strong> ${nodeData.role}
      </div>
      <div class="detail-item" style="margin-bottom: 12px;">
        <strong>Certification:</strong> ${nodeData.title}
      </div>
    </div>
    
    <div style="margin-top: 20px; padding: 16px; background: var(--color-bg-2); border-radius: 8px;">
      <h5 style="margin: 0 0 8px 0;">Next Steps:</h5>
      <p style="margin: 0;">Complete this certification to unlock the next career level. Focus on building practical experience alongside your studies.</p>
    </div>
  `;
  
  modal.classList.remove('hidden');
  
  // Focus trap for accessibility
  setTimeout(() => {
    const closeBtn = document.getElementById('closeModal');
    if (closeBtn) closeBtn.focus();
  }, 100);
}

function hideNodeModal() {
  const modal = document.getElementById('nodeModal');
  if (modal) {
    modal.classList.add('hidden');
  }
}