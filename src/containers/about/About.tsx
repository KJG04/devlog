'use client'

import { Tab, Tabs } from '@nextui-org/tabs'
import { useCallback, useState } from 'react'
import InfoSection from './components/InfoSection'
import SkillSection from './components/SkillSection'
import ActivitySection from './components/ActivitySection'

const tabList = ['Info', 'Skill', 'Activity']

const About = () => {
  const [selectedTab, setSelectedTab] = useState<string>(tabList[0])

  const onSelectionChange = useCallback(
    (value: string | number) => setSelectedTab(value.toString()),
    [],
  )

  return (
    <div>
      <InfoSection />
      <div className="mt-32" />
      <SkillSection />
      <div className="mt-32" />
      <ActivitySection />
      <Tabs
        className="fixed bottom-unit-xl left-1/2 -translate-x-1/2 md:bottom-unit-2xl"
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
  )
}

export default About
