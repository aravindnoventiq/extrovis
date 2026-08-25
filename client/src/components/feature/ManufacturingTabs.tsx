import { useState } from 'react';

export interface ManufacturingTab {
  id: string;
  label: string;
  title: string;
  description: string;
  bullets: string[];
  image: string;
}

interface ManufacturingTabsProps {
  tabs: ManufacturingTab[];
  defaultTabId: string;
}

export default function ManufacturingTabs({ tabs, defaultTabId }: ManufacturingTabsProps) {
  const [activeTab, setActiveTab] = useState(defaultTabId);
  const activeData = tabs.find((t) => t.id === activeTab) || tabs[0];

  return (
    <section id="our-company" className="manufacturing-tabs">
      <div className="d-flex fade-in fade-in-done">
        <div className="text d-flex">
          <div className="tab">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                type="button"
                className={`tablinks${activeTab === tab.id ? ' active' : ''}`}
                onClick={() => setActiveTab(tab.id)}
              >
                {tab.label}
              </button>
            ))}
          </div>
          <div id={activeData.id} className="tabcontent active">
            <div className="d-flex fade-in fade-in-done">
              <div className="text">
                <h3 className="title mt-70">{activeData.title}</h3>
                <p>{activeData.description}</p>
                <ul>
                  {activeData.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              </div>
              <div className="img">
                <img src={activeData.image} alt={activeData.title} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
