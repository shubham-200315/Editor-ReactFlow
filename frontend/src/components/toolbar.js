import React from 'react';
import { DraggableNode } from './draggableNode';
import { getIcons } from '../assets/iconProvider';
import styles from '../styles/toolbarStyles'; 

const logoUrl = "https://framerusercontent.com/images/PUVFaa9JKxr86MtwPIPVKLjAY.png";

export const PipelineToolbar = () => {
  const icons = getIcons();

  return (
    <div style={styles.container}>
      <div style={styles.logoContainer}>
        <img src={logoUrl} alt="Logo" style={styles.logo} />
        <span style={styles.logoText}>VectorShift</span>
      </div>
      <div style={styles.nodeContainer}>
        <DraggableNode type='customInput' label='Input' icon={icons.file} />
        <DraggableNode type='llm' label='LLM' icon={icons.robot} />
        <DraggableNode type='customOutput' label='Output' icon={icons.share} />
        <DraggableNode type='text' label='Text' icon={icons.text} />
        <DraggableNode type='pipeline' label='Pipeline' icon={icons.pipeline} />
        <DraggableNode type='transform' label='Transform' icon={icons.transform} />
        <DraggableNode type='note' label='Note' icon={icons.note} />
        <DraggableNode type='fileSave' label='File Save' icon={icons.save} />
        <DraggableNode type='logic' label='Logic' icon={icons.logic} />
      </div>
    </div>
  );
};
