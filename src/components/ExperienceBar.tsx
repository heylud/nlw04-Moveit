import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import styles from '../styles/components/Experiencebar.module.css';

export function Experiencebar() {
  const { currentExperience, experienceToNextLevel } = useContext(ChallengesContext);

  const porcenToNextLevel = Math.round(currentExperience * 100) / experienceToNextLevel;

  return (
    <header className={styles.experienceBar}>
     <span>0 xp</span> 
     <div>
      <div style={{width: `${porcenToNextLevel}%`}} />

      <span className={styles.currentExperince} style={{left: `${porcenToNextLevel}%`}}>
        {currentExperience} xp
      </span>
     </div>
     <span>{experienceToNextLevel} xp</span>
    </header>
  );
}