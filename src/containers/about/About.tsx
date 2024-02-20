'use client'

import { Tab, Tabs } from '@nextui-org/tabs'
import { useCallback, useRef, useState } from 'react'
import DetailSection from './components/DetailSection'
import SkillSection from './components/SkillSection'
import WorkSection from './components/WorkSection'
import ProjectSection from './components/ProjectSection'
import ActivitySection from './components/ActivitySection'
import SectionTrigger from '#components/SectionTrigger'
import EducationSection from './components/EducationSection'

const tabList = ['Detail', 'Skill', 'Work', 'Project', 'Activity']

const About = () => {
  const [selectedTab, setSelectedTab] = useState<string>(tabList[0])
  const scrollToRefList = useRef<HTMLDivElement[]>([])

  const onSelectionChange = useCallback((value: string | number) => {
    const index = tabList.findIndex((v) => v === value)
    console.log({ scrollToRefList })

    if (index >= 0)
      window.scrollTo({
        top: scrollToRefList.current[index].offsetTop - 100,
        behavior: 'smooth',
      })
  }, [])

  const setScrollToRef = useCallback(
    (index: number) => (ref: HTMLDivElement | null) => {
      if (ref) scrollToRefList.current[index] = ref
    },
    [],
  )

  return (
    <div>
      <div ref={setScrollToRef(0)} />
      <SectionTrigger
        offsetPercent={0.2}
        onTrigger={() => setSelectedTab(tabList[0])}
      >
        <DetailSection />
      </SectionTrigger>
      <div className="mt-32" />
      <div ref={setScrollToRef(1)} />
      <SectionTrigger
        offsetPercent={0.2}
        onTrigger={() => setSelectedTab(tabList[1])}
      >
        <SkillSection />
      </SectionTrigger>
      <div className="mt-32" />
      <div ref={setScrollToRef(2)} />
      <SectionTrigger
        offsetPercent={0.2}
        onTrigger={() => setSelectedTab(tabList[2])}
      >
        <WorkSection />
      </SectionTrigger>
      <div className="mt-32" />
      <div ref={setScrollToRef(3)} />
      <SectionTrigger
        offsetPercent={0.2}
        onTrigger={() => setSelectedTab(tabList[3])}
      >
        <ProjectSection />
      </SectionTrigger>
      <div className="mt-32" />
      <EducationSection />
      <div className="mt-32" />
      <div ref={setScrollToRef(4)} />
      <SectionTrigger
        offsetPercent={0.2}
        onTrigger={() => setSelectedTab(tabList[4])}
      >
        <ActivitySection />
      </SectionTrigger>
      <div className="mt-16" />
      <div className="sticky bottom-unit-xl flex justify-center md:bottom-unit-2xl">
        <Tabs
          selectedKey={selectedTab}
          onSelectionChange={onSelectionChange}
          radius="full"
          color="default"
        >
          {tabList.map((tab) => (
            <Tab key={tab} title={tab} />
          ))}
        </Tabs>
      </div>
    </div>
  )
}

export default About
