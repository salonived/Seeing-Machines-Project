// Atlas Renderer
// Dynamically generates the atlas grid from data.js

function renderAtlas() {
  const gridContainer = document.querySelector('.atlas-grid');
  
  // Clear existing hardcoded cards
  gridContainer.innerHTML = '';
  
  // Generate cards from atlasData
  atlasData.forEach(caseStudy => {
    const card = createAtlasCard(caseStudy);
    gridContainer.appendChild(card);
  });
}

function createAtlasCard(caseStudy) {
  const card = document.createElement('div');
  card.className = 'atlas-card';
  
  const modeLabel = getModeLabel(caseStudy.type);
  
  card.innerHTML = `
    <div>
      <div class="query-num">
        ${caseStudy.number}
        <span class="type-tag ${caseStudy.type}">${modeLabel}</span>
      </div>
      <div class="query-text">"${caseStudy.query}"</div>
      <div class="metrics">
        <span class="badge">Top-k: ${caseStudy.topK}</span>
        <span class="badge blue-accent">Thresh: ${caseStudy.threshold.toFixed(2)}</span>
      </div>
      <div class="shot-box">
        <img src="${caseStudy.image}" alt="${caseStudy.number} Match Grid">
      </div>
    </div>
    <div class="analysis">
      <strong>${caseStudy.analysis.split('.')[0]}.</strong> ${caseStudy.analysis.split('.').slice(1).join('.')}
    </div>
  `;
  
  return card;
}

function getModeLabel(type) {
  const labels = {
    'target': 'Success Mode',
    'failure': 'Failure Mode',
    'style-check': 'Success Mode'
  };
  return labels[type] || 'Unknown';
}

// Run when DOM is ready
document.addEventListener('DOMContentLoaded', renderAtlas);
