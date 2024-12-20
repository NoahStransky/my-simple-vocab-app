export enum Familiarity {
    NEW = 0,           // Never seen before
    LEARNING = 1,      // In the process of learning
    KNOWN = 2,         // Confidently knows the word
}

export interface VocabularyWord {
    id: number;
    word: string;
    phonetic: string;
    meaning: string;
    familiarity?: Familiarity;
}

export const vocabularyWords: VocabularyWord[] = [
    {
        "id": 8,
        "word": "abandon",
        "phonetic": "[əˈbændən]",
        "meaning": "lacking restraint or control; feeling of extreme emotional intensity; unbounded enthusiasm"
    },
    {
        "id": 9,
        "word": "abandonment",
        "phonetic": "[əˈbændənmənt]",
        "meaning": "giving up completely; freedom from constraint"
    },
    {
        "id": 10,
        "word": "abbreviation",
        "phonetic": "[əˌbriːviˈeɪʃᵊn]",
        "meaning": "shortening something by omitting parts of it"
    },
    {
        "id": 11,
        "word": "abeyance",
        "phonetic": "[əˈbeɪəns]",
        "meaning": "suspended action; temporary cessation or suspension"
    },
    {
        "id": 12,
        "word": "abide",
        "phonetic": "[əˈbaɪd]",
        "meaning": "endure; put up with; bear; tolerate"
    },
    {
        "id": 13,
        "word": "ability",
        "phonetic": "[əˈbɪləti]",
        "meaning": "capacity; skill"
    },
    {
        "id": 14,
        "word": "abnormal",
        "phonetic": "[æbˈnɔːmᵊl]",
        "meaning": "unusual; not typical; not normal"
    },
    {
        "id": 15,
        "word": "aboard",
        "phonetic": "[əˈbɔːd]",
        "meaning": "on a ship, train, plane or other vehicle; in or into a group, organization, or business"
    },
    {
        "id": 16,
        "word": "abolish",
        "phonetic": "[əˈbɒlɪʃ]",
        "meaning": "cancel; put an end to; destroy completely"
    },
    {
        "id": 17,
        "word": "abolition",
        "phonetic": "[ˌæbəʊˈlɪʃᵊn]",
        "meaning": "ending; act of abolishing; act of doing away with"
    },
    {
        "id": 18,
        "word": "abortion",
        "phonetic": "[əˈbɔːʃᵊn]",
        "meaning": "termination of pregnancy; failure of a plan"
    },
    {
        "id": 19,
        "word": "abortive",
        "phonetic": "[əˈbɔːtɪv]",
        "meaning": "unsuccessful; failing to accomplish an intended objective; fruitless"
    },
    {
        "id": 20,
        "word": "abridge",
        "phonetic": "[əˈbrɪʤ]",
        "meaning": "condense; shorten; reduce length of written text"
    },
    {
        "id": 21,
        "word": "abrogate",
        "phonetic": "[ˈæbrəʊɡeɪt]",
        "meaning": "abolish, do away with, or annul, especially by authority"
    },
    {
        "id": 22,
        "word": "abrupt",
        "phonetic": "[əˈbrʌpt]",
        "meaning": "broken off; very steep; having sudden transitions from one subject to another"
    },
    {
        "id": 23,
        "word": "absence",
        "phonetic": "[ˈæbsᵊns]",
        "meaning": "state of being absent; state of being away"
    },
    {
        "id": 24,
        "word": "absent",
        "phonetic": "[ˈæbsᵊnt]",
        "meaning": "go away or leave ; missing; not present"
    },
    {
        "id": 25,
        "word": "absolute",
        "phonetic": "[ˈæbsəluːt]",
        "meaning": "perfect in quality or nature; complete; totally unlimited; certain"
    },
    {
        "id": 26,
        "word": "absolutely",
        "phonetic": "[ˈæbsəluːtli]",
        "meaning": "utterly; definitely"
    },
    {
        "id": 27,
        "word": "absorb",
        "phonetic": "[əbˈzɔːb]",
        "meaning": "assimilate or incorporate; suck or drink up; occupy full attention"
    },
    {
        "id": 28,
        "word": "absorption",
        "phonetic": "[əbˈsɔːpʃᵊn]",
        "meaning": "process of absorbing nutrients into the body after digestion; state of mental"
    },
    {
        "id": 30,
        "word": "abstract",
        "phonetic": "[ˈæbstrækt]",
        "meaning": "theoretical; not concrete; not applied or practical; difficult to understand"
    },
    {
        "id": 31,
        "word": "absurd",
        "phonetic": "[əbˈsɜːd]",
        "meaning": "preposterous; ridiculously incongruous or unreasonable; foolish"
    },
    {
        "id": 32,
        "word": "absurdity",
        "phonetic": "[əbˈzɜːdɪti]",
        "meaning": "quality of being absurd or inconsistent with obvious truth, reason, or sound judgment;"
    },
    {
        "id": 34,
        "word": "abundance",
        "phonetic": "[əˈbʌndᵊns]",
        "meaning": "great or plentiful amount; fullness to overflowing"
    },
    {
        "id": 35,
        "word": "abundant",
        "phonetic": "[əˈbʌndᵊnt]",
        "meaning": "plentiful; possessing riches or resources"
    },
    {
        "id": 36,
        "word": "abuse",
        "phonetic": "[əˈbjuːs]",
        "meaning": "improper use or handling; misuse"
    },
    {
        "id": 37,
        "word": "academic",
        "phonetic": "[ˌækəˈdɛmɪk]",
        "meaning": "related to school; not practical or directly useful; relating to scholarly organization; based"
    },
    {
        "id": 39,
        "word": "academy",
        "phonetic": "[əˈkædəmi]",
        "meaning": "school for special instruction; society of scholars, scientists, or artists"
    },
    {
        "id": 40,
        "word": "accede",
        "phonetic": "[ækˈsiːd]",
        "meaning": "agree; give consent, often at insistence of another; concede"
    },
    {
        "id": 41,
        "word": "accelerate",
        "phonetic": "[əkˈsɛləreɪt]",
        "meaning": "move faster; cause to develop or progress more quickly; occur sooner than expected"
    },
    {
        "id": 42,
        "word": "acceleration",
        "phonetic": "[əkˌsɛləˈreɪʃᵊn]",
        "meaning": "faster rate of improvement; rate of change of velocity with respect to time"
    },
    {
        "id": 43,
        "word": "access",
        "phonetic": "[ˈæksɛs]",
        "meaning": "approach; entry; entrance"
    },
    {
        "id": 44,
        "word": "accessible",
        "phonetic": "[əkˈsɛsəbᵊl]",
        "meaning": "easily approached or entered; obtainable; easy to talk to or get along with"
    },
    {
        "id": 45,
        "word": "accessory",
        "phonetic": "[əkˈsɛsᵊri]",
        "meaning": "additional object; useful but not essential thing; subordinate or supplementary item"
    },
    {
        "id": 46,
        "word": "accident",
        "phonetic": "[ˈæksɪdᵊnt]",
        "meaning": "event that takes place without one's foresight or expectation; sudden, and unexpected"
    },
    {
        "id": 48,
        "word": "accidental",
        "phonetic": "[ˌæksɪˈdɛntᵊl]",
        "meaning": "unexpected; unforeseen"
    },
    {
        "id": 49,
        "word": "accidentally",
        "phonetic": "[ˌæksɪˈdɛntəli]",
        "meaning": "inadvertently; by chance; casually; fortuitously; not essentially or intrinsically"
    },
    {
        "id": 50,
        "word": "accommodate",
        "phonetic": "[əˈkɒmədeɪt]",
        "meaning": "do a favor or service for; provide for; supply with; make suitable; adapt; allow for"
    },
    {
        "id": 51,
        "word": "accommodation",
        "phonetic": "[əˌkɒməˈdeɪʃᵊn]",
        "meaning": "living quarters provided for public convenience"
    },
    {
        "id": 52,
        "word": "accompaniment",
        "phonetic": "[əˈkʌmpᵊnɪmənt]",
        "meaning": "act of accompanying someone or something"
    },
    {
        "id": 53,
        "word": "accompany",
        "phonetic": "[əˈkʌmpəni]",
        "meaning": "travel with; be associated with"
    },
    {
        "id": 54,
        "word": "accomplish",
        "phonetic": "[əˈkʌmplɪʃ]",
        "meaning": "succeed in doing; bring to pass; achieve; reach the end of; complete"
    },
    {
        "id": 55,
        "word": "accomplishment",
        "phonetic": "[əˈkʌmplɪʃmənt]",
        "meaning": "achievement; fulfillment"
    },
    {
        "id": 56,
        "word": "accord",
        "phonetic": "[əˈkɔːd]",
        "meaning": "settlement or compromise of conflicting opinions; written agreement between two states"
    },
    {
        "id": 57,
        "word": "account",
        "phonetic": "[əˈkaʊnt]",
        "meaning": "narrative or record of events; reason given for a particular action or event"
    },
    {
        "id": 58,
        "word": "accountant",
        "phonetic": "[əˈkaʊntᵊnt]",
        "meaning": "one who maintains and audits business accounts"
    },
    {
        "id": 59,
        "word": "accounting",
        "phonetic": "[əˈkaʊntɪŋ]",
        "meaning": "system that provides quantitative information about finances"
    },
    {
        "id": 60,
        "word": "accrue",
        "phonetic": "[əˈkruː]",
        "meaning": "increase, accumulate, or come about as a result of growth; accumulate over time"
    },
    {
        "id": 61,
        "word": "accumulate",
        "phonetic": "[əˈkjuːmjəleɪt]",
        "meaning": "pile up; collect; mount up; increase"
    },
    {
        "id": 62,
        "word": "accumulation",
        "phonetic": "[əˌkjuːmjəˈleɪʃᵊn]",
        "meaning": "increase by natural growth or addition; concentration"
    },
    {
        "id": 63,
        "word": "accuracy",
        "phonetic": "[ˈækjərəsi]",
        "meaning": "quality of nearness to the truth or the true value"
    },
    {
        "id": 64,
        "word": "accurate",
        "phonetic": "[ˈækjərət]",
        "meaning": "capable of providing a correct reading or measurement; performing with care and precision"
    },
    {
        "id": 65,
        "word": "accusation",
        "phonetic": "[ˌækjəˈzeɪʃᵊn]",
        "meaning": "indictment; charge of wrongdoing that is made against a person or other party"
    },
    {
        "id": 66,
        "word": "accuse",
        "phonetic": "[əˈkjuːz]",
        "meaning": "blame; condemn"
    },
    {
        "id": 67,
        "word": "achieve",
        "phonetic": "[əˈʧiːv]",
        "meaning": "gain with effort; accomplish; fulfill"
    },
    {
        "id": 68,
        "word": "achievement",
        "phonetic": "[əˈʧiːvmənt]",
        "meaning": "feat; accomplishment; award for completing a particular task or meeting an objective"
    },
    {
        "id": 69,
        "word": "acid",
        "phonetic": "[ˈæsɪd]",
        "meaning": "sour; water-soluble compounds having a sour taste; quality of being sarcastic, bitter, or scornful"
    },
    {
        "id": 70,
        "word": "acknowledge",
        "phonetic": "[əkˈnɒlɪʤ]",
        "meaning": "declare to be true or admit; express obligation, thanks"
    },
    {
        "id": 71,
        "word": "acquaint",
        "phonetic": "[əˈkweɪnt]",
        "meaning": "inform about; cause to come to know personally; make familiar"
    },
    {
        "id": 72,
        "word": "acquaintance",
        "phonetic": "[əˈkweɪntᵊns]",
        "meaning": "personal knowledge or information about someone or something"
    },
    {
        "id": 73,
        "word": "acquainted",
        "phonetic": "[əˈkweɪntɪd]",
        "meaning": "known by or familiar with another; informed or familiar"
    },
    {
        "id": 74,
        "word": "acquire",
        "phonetic": "[əˈkwaɪə]",
        "meaning": "gain through experience or effort; gain possession of; locate with tracking system"
    },
    {
        "id": 75,
        "word": "acquisition",
        "phonetic": "[ˌækwɪˈzɪʃᵊn]",
        "meaning": "act of contracting or assuming or acquiring possession of something"
    },
    {
        "id": 76,
        "word": "across",
        "phonetic": "[əˈkrɒs]",
        "meaning": "from side to side; crosswise, or in a direction opposed to the length"
    },
    {
        "id": 77,
        "word": "activate",
        "phonetic": "[ˈæktɪveɪt]",
        "meaning": "make active or more active; stimulate; make radioactive"
    },
    {
        "id": 78,
        "word": "actively",
        "phonetic": "[ˈæktɪvli]",
        "meaning": "energetically; vigorously; in an active manner; voluntarily, not passively"
    },
    {
        "id": 79,
        "word": "actual",
        "phonetic": "[ˈækʧuəl]",
        "meaning": "true; real; being, existing, or acting at the present moment; current"
    },
    {
        "id": 80,
        "word": "actually",
        "phonetic": "[ˈækʧuəli]",
        "meaning": "truly; really; in fact"
    },
    {
        "id": 81,
        "word": "acute",
        "phonetic": "[əˈkjuːt]",
        "meaning": "quickly perceptive; keen; having a sharp point or tip; extremely sharp or severe"
    },
    {
        "id": 82,
        "word": "adapt",
        "phonetic": "[əˈdæpt]",
        "meaning": "make fit for; change to suit a new purpose"
    },
    {
        "id": 83,
        "word": "adaptation",
        "phonetic": "[ˌædæpˈteɪʃᵊn]",
        "meaning": "modification; alteration or adjustment in structure or habits"
    },
    {
        "id": 84,
        "word": "additional",
        "phonetic": "[əˈdɪʃᵊnᵊl]",
        "meaning": "further; extra; supplemental or added to"
    },
    {
        "id": 85,
        "word": "additive",
        "phonetic": "[ˈædɪtɪv]",
        "meaning": "addition; supplement"
    },
    {
        "id": 86,
        "word": "address",
        "phonetic": "[əˈdrɛs]",
        "meaning": "make a formal speech to; deal with or discuss; direct efforts or attention of"
    },
    {
        "id": 87,
        "word": "adequate",
        "phonetic": "[ˈædəkwət]",
        "meaning": "sufficient; enough to meet a purpose"
    },
    {
        "id": 88,
        "word": "adhere",
        "phonetic": "[ədˈhɪə]",
        "meaning": "stick fast; stick to firmly; be compatible or in accordance with"
    },
    {
        "id": 89,
        "word": "adhesive",
        "phonetic": "[ədˈhiːsɪv]",
        "meaning": "glue; paste ; substance that unites or bonds surfaces together"
    },
    {
        "id": 90,
        "word": "adjacent",
        "phonetic": "[əˈʤeɪsᵊnt]",
        "meaning": "adjoining; neighboring; close to; lying near"
    },
    {
        "id": 91,
        "word": "adjoin",
        "phonetic": "[əˈʤɔɪn]",
        "meaning": "be next to; be contiguous to; border on"
    },
    {
        "id": 92,
        "word": "adjust",
        "phonetic": "[əˈʤʌst]",
        "meaning": "adapt; regulate"
    },
    {
        "id": 93,
        "word": "adjustment",
        "phonetic": "[əˈʤʌstmənt]",
        "meaning": "making or becoming suitable; adjusting to circumstances"
    },
    {
        "id": 94,
        "word": "administer",
        "phonetic": "[ədˈmɪnɪstə]",
        "meaning": "govern; supervise; give or apply medications"
    },
    {
        "id": 95,
        "word": "administration",
        "phonetic": "[ədˌmɪnɪˈstreɪʃᵊn]",
        "meaning": "management; supervision; people who are in charge for management; activity of"
    },
    {
        "id": 97,
        "word": "administrative",
        "phonetic": "[ədˈmɪnɪstrətɪv]",
        "meaning": "of or relating to or responsible for administration"
    },
    {
        "id": 98,
        "word": "admiration",
        "phonetic": "[ˌædməˈreɪʃᵊn]",
        "meaning": "favorable judgment; feeling of pleasure, wonder, and approval"
    },
    {
        "id": 99,
        "word": "admire",
        "phonetic": "[ədˈmaɪə]",
        "meaning": "regard with wonder or astonishment; view with surprise; marvel at"
    },
    {
        "id": 100,
        "word": "admission",
        "phonetic": "[ədˈmɪʃᵊn]",
        "meaning": "act or practice of admitting; power or permission to enter"
    },
    {
        "id": 101,
        "word": "admit",
        "phonetic": "[ədˈmɪt]",
        "meaning": "permit to enter; receive; provide the right or a means of entrance to"
    },
    {
        "id": 102,
        "word": "admittedly",
        "phonetic": "[ədˈmɪtɪdli]",
        "meaning": "doubtlessly; in an acknowledged manner; confessedly"
    },
    {
        "id": 103,
        "word": "adolescence",
        "phonetic": "[ˌædəʊˈlɛsns]",
        "meaning": "state of growing up from childhood to manhood or womanhood; transitional period"
    },
    {
        "id": 105,
        "word": "adolescent",
        "phonetic": "[ˌædəˈlɛsᵊnt]",
        "meaning": "a juvenile between the onset of puberty and maturity;"
    },
    {
        "id": 106,
        "word": "adopt",
        "phonetic": "[əˈdɒpt]",
        "meaning": "accept; take on; raise; take into one's family"
    },
    {
        "id": 107,
        "word": "adoption",
        "phonetic": "[əˈdɒpʃᵊn]",
        "meaning": "act of accepting with approval"
    },
    {
        "id": 108,
        "word": "adore",
        "phonetic": "[əˈdɔː]",
        "meaning": "worship with profound reverence; pay divine honors to; regard with the utmost esteem and"
    },
    {
        "id": 110,
        "word": "adorn",
        "phonetic": "[əˈdɔːn]",
        "meaning": "enhance or decorate with or as if with ornaments"
    },
    {
        "id": 111,
        "word": "adornment",
        "phonetic": "[əˈdɔːnmənt]",
        "meaning": "embellishment; decoration; something that beautifies or adorns; ornament"
    },
    {
        "id": 112,
        "word": "adult",
        "phonetic": "[ˈædʌlt]",
        "meaning": "one who has attained maturity or legal age; fully grown"
    },
    {
        "id": 113,
        "word": "advance",
        "phonetic": "[ədˈvɑːns]",
        "meaning": "proceed; move forward; improve; moving forward"
    },
    {
        "id": 114,
        "word": "advanced",
        "phonetic": "[ədˈvɑːnst]",
        "meaning": "improved; highly developed or complex; ahead of the times; progressive"
    },
    {
        "id": 115,
        "word": "adventure",
        "phonetic": "[ədˈvɛnʧə]",
        "meaning": "something happens without design; chance; hazard; risk; danger"
    },
    {
        "id": 116,
        "word": "adventurous",
        "phonetic": "[ədˈvɛnʧərəs]",
        "meaning": "valiant; venturesome; inclined or willing to incur hazard or engage in adventures"
    },
    {
        "id": 117,
        "word": "adversary",
        "phonetic": "[ˈædvəsᵊri]",
        "meaning": "opponent in contest; someone who offers opposition"
    },
    {
        "id": 118,
        "word": "adverse",
        "phonetic": "[ˈædvɜːs]",
        "meaning": "in opposing direction; harmful or unfavorable; acting or serving to oppose"
    },
    {
        "id": 119,
        "word": "adversity",
        "phonetic": "[ədˈvɜːsəti]",
        "meaning": "state of misfortune, hardship, or affliction; misfortune"
    },
    {
        "id": 120,
        "word": "advertise",
        "phonetic": "[ˈædvətaɪz]",
        "meaning": "give notice to; inform or apprise; make known; give public notice of"
    },
    {
        "id": 121,
        "word": "advisable",
        "phonetic": "[ədˈvaɪzəbᵊl]",
        "meaning": "proper to be advised or to be done; expedient; prudent; ready to receive advice"
    },
    {
        "id": 122,
        "word": "advocate",
        "phonetic": "[ˈædvəkeɪt]",
        "meaning": "speak, plead, or argue in favour of; plead for; push for something"
    },
    {
        "id": 123,
        "word": "aerial",
        "phonetic": "[ˈeəriəl]",
        "meaning": "of the air or atmosphere; produced by or found in the air; performed in the air"
    },
    {
        "id": 124,
        "word": "affect",
        "phonetic": "[əˈfɛkt]",
        "meaning": "have an emotional or cognitive impact upon"
    },
    {
        "id": 125,
        "word": "affection",
        "phonetic": "[əˈfɛkʃᵊn]",
        "meaning": "fondness; tender feeling toward another; fondness"
    },
    {
        "id": 126,
        "word": "affectionate",
        "phonetic": "[əˈfɛkʃnɪt]",
        "meaning": "having affection or warm regard; loving; fond; kindly inclined; zealous"
    },
    {
        "id": 127,
        "word": "affiliate",
        "phonetic": "[əˈfɪlieɪt]",
        "meaning": "associate; incorporate"
    },
    {
        "id": 128,
        "word": "affirm",
        "phonetic": "[əˈfɜːm]",
        "meaning": "assert; confirm"
    },
    {
        "id": 129,
        "word": "affirmation",
        "phonetic": "[ˌæfɜːˈmeɪʃᵊn]",
        "meaning": "positive assertion; confirmation; solemn pledge by one who refuses to take an oath"
    },
    {
        "id": 130,
        "word": "affirmative",
        "phonetic": "[əˈfɜːmətɪv]",
        "meaning": "confirmative; ratifying; giving assent or approval; confirming"
    },
    {
        "id": 131,
        "word": "afford",
        "phonetic": "[əˈfɔːd]",
        "meaning": "pay; provide; have the financial means for; bear the cost of"
    },
    {
        "id": 132,
        "word": "affordable",
        "phonetic": "[əˈfɔːdəbᵊl]",
        "meaning": "able to pay for"
    },
    {
        "id": 133,
        "word": "agency",
        "phonetic": "[ˈeɪʤᵊnsi]",
        "meaning": "a business that serves other businesses; an administrative unit of government"
    },
    {
        "id": 134,
        "word": "agent",
        "phonetic": "[ˈeɪʤᵊnt]",
        "meaning": "one that acts on behalf of other persons or organizations"
    },
    {
        "id": 135,
        "word": "aggravate",
        "phonetic": "[ˈæɡrəveɪt]",
        "meaning": "worsen; make worse or more troublesome"
    },
    {
        "id": 136,
        "word": "aggregate",
        "phonetic": "[ˈæɡrɪɡeɪt]",
        "meaning": "gather into a mass, sum, or whole; amount to"
    },
    {
        "id": 137,
        "word": "aggregation",
        "phonetic": "[ˌæɡrɪˈɡeɪʃᵊn]",
        "meaning": "several things grouped together or considered as a whole"
    },
    {
        "id": 138,
        "word": "aggressive",
        "phonetic": "[əˈɡrɛsɪv]",
        "meaning": "making assaults; unjustly attacking; combative; hostile; tending to spread quickly"
    },
    {
        "id": 139,
        "word": "aggressor",
        "phonetic": "[əˈɡrɛsə]",
        "meaning": "one that engages in aggression; person who first attacks"
    },
    {
        "id": 140,
        "word": "agitate",
        "phonetic": "[ˈæʤɪteɪt]",
        "meaning": "cause to move with violence or sudden force; upset; disturb"
    },
    {
        "id": 141,
        "word": "agitation",
        "phonetic": "[ˌæʤɪˈteɪʃᵊn]",
        "meaning": "anxiety; extreme emotional disturbance"
    },
    {
        "id": 142,
        "word": "agony",
        "phonetic": "[ˈæɡəni]",
        "meaning": "extreme pain of mind or body; anguish; last struggle of life; death struggle"
    },
    {
        "id": 143,
        "word": "agreeable",
        "phonetic": "[əˈɡrɪəbᵊl]",
        "meaning": "ready to consent or submit; acceptable"
    },
    {
        "id": 144,
        "word": "agreement",
        "phonetic": "[əˈɡriːmənt]",
        "meaning": "state of agreeing; harmony of opinion, statement, action, or character"
    },
    {
        "id": 145,
        "word": "agriculture",
        "phonetic": "[ˈæɡrɪkʌlʧə]",
        "meaning": "practice of cultivating the land or raising stock"
    },
    {
        "id": 146,
        "word": "aid",
        "phonetic": "[eɪd]",
        "meaning": "person or thing that promotes or helps in something done; helper; assistant"
    },
    {
        "id": 147,
        "word": "ailment",
        "phonetic": "[ˈeɪlmənt]",
        "meaning": "sickness; illness; affliction"
    },
    {
        "id": 148,
        "word": "aim",
        "phonetic": "[eɪm]",
        "meaning": "point or direct towards an object or spot with the intent of hitting it"
    },
    {
        "id": 149,
        "word": "air",
        "phonetic": "[eə]",
        "meaning": "be broadcast on television or radio"
    },
    {
        "id": 150,
        "word": "aircraft",
        "phonetic": "[ˈeəkrɑːft]",
        "meaning": "vehicle that can fly, such as an airplane, helicopter, balloon"
    },
    {
        "id": 151,
        "word": "aisle",
        "phonetic": "[aɪl]",
        "meaning": "passageway between rows of seats, as in an auditorium or an airplane; wing of a building"
    },
    {
        "id": 152,
        "word": "ajar",
        "phonetic": "[əˈʤɑː]",
        "meaning": "half-open; slightly turned or opened"
    },
    {
        "id": 153,
        "word": "alarm",
        "phonetic": "[əˈlɑːm]",
        "meaning": "any sound or information intended to give notice of approaching danger"
    },
    {
        "id": 154,
        "word": "album",
        "phonetic": "[ˈælbəm]",
        "meaning": "a list of names; a register for visitors; a blank book, in which to insert autographs sketches,"
    },
    {
        "id": 156,
        "word": "alert",
        "phonetic": "[əˈlɜːt]",
        "meaning": "warning serves; alarm; condition of heightened watchfulness or preparation for action"
    },
    {
        "id": 157,
        "word": "alien",
        "phonetic": "[ˈeɪliən]",
        "meaning": "dissimilar, inconsistent, or opposed in nature; very different place, society, or person"
    },
    {
        "id": 158,
        "word": "alienate",
        "phonetic": "[ˈeɪliəneɪt]",
        "meaning": "cause to become unfriendly or hostile; transfer property or ownership; isolate or dissociate"
    },
    {
        "id": 160,
        "word": "alignment",
        "phonetic": "[əˈlaɪnmənt]",
        "meaning": "arrangement; association; alliance"
    },
    {
        "id": 161,
        "word": "alike",
        "phonetic": "[əˈlaɪk]",
        "meaning": "similar; in the same manner or to the same degree"
    },
    {
        "id": 162,
        "word": "allergic",
        "phonetic": "[əˈlɜːʤɪk]",
        "meaning": "excessively sensitive; susceptible; having an allergy"
    },
    {
        "id": 163,
        "word": "allergy",
        "phonetic": "[ˈæləʤi]",
        "meaning": "hyper sensitivity reaction; abnormally high sensitivity to certain substances"
    },
    {
        "id": 164,
        "word": "alliance",
        "phonetic": "[əˈlaɪəns]",
        "meaning": "state of being allied; act of allying or uniting; a union or connection of interests between"
    },
    {
        "id": 166,
        "word": "allocate",
        "phonetic": "[ˈæləʊkeɪt]",
        "meaning": "assign; distribute according to plan"
    },
    {
        "id": 167,
        "word": "allot",
        "phonetic": "[əˈlɒt]",
        "meaning": "parcel out in parts or portions; distribute to each individual concerned; assign as a share or lot"
    },
    {
        "id": 168,
        "word": "allowance",
        "phonetic": "[əˈlaʊᵊns]",
        "meaning": "approval; act of allowing, granting, or admitting"
    },
    {
        "id": 169,
        "word": "alloy",
        "phonetic": "[ˈælɔɪ]",
        "meaning": "combine; mix; make less pure; lessen or moderate"
    },
    {
        "id": 170,
        "word": "ally",
        "phonetic": "[ˈælaɪ]",
        "meaning": "confederate; partner; collaborator"
    },
    {
        "id": 171,
        "word": "alone",
        "phonetic": "[əˈləʊn]",
        "meaning": "solitary; by oneself"
    },
    {
        "id": 172,
        "word": "along",
        "phonetic": "[əˈlɒŋ]",
        "meaning": "by the length; in a line with the length; onward; forward; in company; together"
    },
    {
        "id": 173,
        "word": "alongside",
        "phonetic": "[əˌlɒŋˈsaɪd]",
        "meaning": "along or by the side; side by side with"
    },
    {
        "id": 174,
        "word": "alter",
        "phonetic": "[ˈɒltə]",
        "meaning": "modify; cause to change; make different; convert"
    },
    {
        "id": 175,
        "word": "alternate",
        "phonetic": "[ˈɒltəneɪt]",
        "meaning": "happening or following in turns; succeeding each other continuously; substitute"
    },
    {
        "id": 176,
        "word": "alternation",
        "phonetic": "[ˌɒltəˈneɪʃᵊn]",
        "meaning": "successive change from one thing or state to another and back again"
    },
    {
        "id": 177,
        "word": "alternative",
        "phonetic": "[ɒlˈtɜːnətɪv]",
        "meaning": "one of two or more things, ideas or courses of action that may be used; option; choice"
    },
    {
        "id": 178,
        "word": "altitude",
        "phonetic": "[ˈæltɪtjuːd]",
        "meaning": "elevation especially above sea level; height"
    },
    {
        "id": 179,
        "word": "aluminum",
        "phonetic": "[əˈluːmənəm]",
        "meaning": "silvery ductile metallic element"
    },
    {
        "id": 180,
        "word": "amateur",
        "phonetic": "[ˈæmətə]",
        "meaning": "nonprofessional; lacking the skill of a professional, as in an art"
    },
    {
        "id": 181,
        "word": "amaze",
        "phonetic": "[əˈmeɪz]",
        "meaning": "astonish; affect with wonder"
    },
    {
        "id": 182,
        "word": "amazement",
        "phonetic": "[əˈmeɪzmənt]",
        "meaning": "wonder; state of extreme surprise or wonder; astonishment"
    },
    {
        "id": 183,
        "word": "ambassador",
        "phonetic": "[æmˈbæsədə]",
        "meaning": "authorized messenger or representative"
    },
    {
        "id": 184,
        "word": "ambiguity",
        "phonetic": "[ˌæmbɪˈɡjuːəti]",
        "meaning": "state of being ambiguous; doubtfulness or uncertainty"
    },
    {
        "id": 185,
        "word": "ambiguous",
        "phonetic": "[æmˈbɪɡjuəs]",
        "meaning": "unclear or doubtful in meaning"
    },
    {
        "id": 186,
        "word": "ambition",
        "phonetic": "[æmˈbɪʃᵊn]",
        "meaning": "aspiration"
    },
    {
        "id": 187,
        "word": "ambitious",
        "phonetic": "[æmˈbɪʃəs]",
        "meaning": "aspiring; having a strong desire for success or achievement"
    },
    {
        "id": 188,
        "word": "ambulance",
        "phonetic": "[ˈæmbjələns]",
        "meaning": "field hospital organized as to follow an army in its movements; wagon for conveying the"
    },
    {
        "id": 190,
        "word": "amend",
        "phonetic": "[əˈmɛnd]",
        "meaning": "change for the better; improve; remove faults or errors"
    },
    {
        "id": 191,
        "word": "amendment",
        "phonetic": "[əˈmɛndmənt]",
        "meaning": "correction; revision"
    },
    {
        "id": 192,
        "word": "amends",
        "phonetic": "[əˈmɛndz]",
        "meaning": "compensation for a loss or injury; recompense; reparation"
    },
    {
        "id": 193,
        "word": "amiable",
        "phonetic": "[ˈeɪmiəbᵊl]",
        "meaning": "good-natured and likable; lovable; warmly friendly"
    },
    {
        "id": 194,
        "word": "amicable",
        "phonetic": "[ˈæmɪkəbᵊl]",
        "meaning": "exhibiting friendliness or goodwill; not quarrelsome"
    },
    {
        "id": 195,
        "word": "amid",
        "phonetic": "[əˈmɪd]",
        "meaning": "in the middle of; among; surrounded by"
    },
    {
        "id": 196,
        "word": "ammunition",
        "phonetic": "[ˌæmjəˈnɪʃᵊn]",
        "meaning": "military stores or provisions; articles used in weapons, as powder, balls, shot, shells"
    },
    {
        "id": 197,
        "word": "amount",
        "phonetic": "[əˈmaʊnt]",
        "meaning": "total of two or more quantities; aggregate; sum"
    },
    {
        "id": 198,
        "word": "ample",
        "phonetic": "[ˈæmpᵊl]",
        "meaning": "more than enough in size or scope or capacity; fairly large"
    },
    {
        "id": 199,
        "word": "amplification",
        "phonetic": "[ˌæmplɪfɪˈkeɪʃᵊn]",
        "meaning": "addition of extra material or illustration or clarifying detail"
    },
    {
        "id": 200,
        "word": "amplify",
        "phonetic": "[ˈæmplɪfaɪ]",
        "meaning": "broaden or clarify by expanding; intensify; make larger or more powerful; increase"
    },
    {
        "id": 201,
        "word": "amuse",
        "phonetic": "[əˈmjuːz]",
        "meaning": "occupy or engage the attention of; lose in deep thought"
    },
    {
        "id": 202,
        "word": "analogy",
        "phonetic": "[əˈnæləʤi]",
        "meaning": "similarity in some respects; comparison based on similarity"
    },
    {
        "id": 203,
        "word": "analysis",
        "phonetic": "[əˈnæləsɪs]",
        "meaning": "study; investigation; process of breaking down a substance into its constituent parts"
    },
    {
        "id": 204,
        "word": "analytical",
        "phonetic": "[ˌænəˈlɪtɪkᵊl]",
        "meaning": "of analysis; resolving into elements or parts"
    },
    {
        "id": 205,
        "word": "analyze",
        "phonetic": "[ˈænᵊlaɪz]",
        "meaning": "diagnose; examine"
    },
    {
        "id": 206,
        "word": "ancestor",
        "phonetic": "[ˈænsɛstə]",
        "meaning": "forefather; forebear; forerunner or predecessor"
    },
    {
        "id": 207,
        "word": "anchor",
        "phonetic": "[ˈæŋkə]",
        "meaning": "secure or fasten firmly; be fixed in place; narrate or coordinate"
    },
    {
        "id": 208,
        "word": "anecdote",
        "phonetic": "[ˈænɪkdəʊt]",
        "meaning": "short account of amusing or interesting event; short narrative; secret story of history or"
    },
    {
        "id": 210,
        "word": "angular",
        "phonetic": "[ˈæŋɡjələ]",
        "meaning": "sharp-cornered; consisting of an angle or angles; stiff in manner"
    },
    {
        "id": 211,
        "word": "animate",
        "phonetic": "[ˈænɪmeɪt]",
        "meaning": "endowed with life; alive; living; animated"
    },
    {
        "id": 212,
        "word": "animation",
        "phonetic": "[ˌænɪˈmeɪʃᵊn]",
        "meaning": "act of animating, or giving life or spirit; state of being animate or alive."
    },
    {
        "id": 213,
        "word": "ankle",
        "phonetic": "[ˈæŋkᵊl]",
        "meaning": "joint which connects the foot with the leg; tarsus"
    },
    {
        "id": 214,
        "word": "annex",
        "phonetic": "[əˈnɛks]",
        "meaning": "append or attach; take possession of; incorporate into an existing political unit"
    },
    {
        "id": 215,
        "word": "anniversary",
        "phonetic": "[ˌænɪˈvɜːsᵊri]",
        "meaning": "annual; yearly; annual return of the day on which any notable event took place"
    },
    {
        "id": 216,
        "word": "announce",
        "phonetic": "[əˈnaʊns]",
        "meaning": "herald; give out; proclaim; make known publicly"
    },
    {
        "id": 217,
        "word": "announcement",
        "phonetic": "[əˈnaʊnsmənt]",
        "meaning": "formal public statement; act of making known publicly"
    },
    {
        "id": 218,
        "word": "announcer",
        "phonetic": "[əˈnaʊnsə]",
        "meaning": "one who proclaims a message publicly"
    },
    {
        "id": 219,
        "word": "annoy",
        "phonetic": "[əˈnɔɪ]",
        "meaning": "disturb, especially by minor irritations; irritate"
    },
    {
        "id": 220,
        "word": "annual",
        "phonetic": "[ˈænjuəl]",
        "meaning": "occurring or payable every year"
    },
    {
        "id": 221,
        "word": "annually",
        "phonetic": "[ˈænjuəli]",
        "meaning": "yearly; each year; returning every year; year by year"
    },
    {
        "id": 222,
        "word": "antagonism",
        "phonetic": "[ænˈtæɡᵊnɪzᵊm]",
        "meaning": "active resistance; condition of being an opposing principle, force, or factor"
    },
    {
        "id": 223,
        "word": "antagonist",
        "phonetic": "[ænˈtæɡənɪst]",
        "meaning": "one who contends with another, especially in combat; an adversary; opponent"
    },
    {
        "id": 224,
        "word": "antarctic",
        "phonetic": "[ænˈtɑːktɪk]",
        "meaning": "opposite to the northern or arctic pole; relating to the southern pole or to the region near it"
    },
    {
        "id": 225,
        "word": "antibiotic",
        "phonetic": "[ˌæntibaɪˈɒtɪk]",
        "meaning": "of or relating to chemical substance that kills microorganisms and cures infections"
    },
    {
        "id": 226,
        "word": "anticipate",
        "phonetic": "[ænˈtɪsɪpeɪt]",
        "meaning": "act in advance of; deal with ahead of time; predict"
    },
    {
        "id": 227,
        "word": "anticipation",
        "phonetic": "[ænˌtɪsɪˈpeɪʃᵊn]",
        "meaning": "something expected; pleasurable expectation; wishing with confidence"
    },
    {
        "id": 228,
        "word": "antique",
        "phonetic": "[ænˈtiːk]",
        "meaning": "any furniture old and valuable; out of fashion "
    },
    {
        "id": 229,
        "word": "antonym",
        "phonetic": "[ˈæntəʊnɪm]",
        "meaning": "word of opposite meaning; counter term"
    },
    {
        "id": 230,
        "word": "anxiety",
        "phonetic": "[æŋˈzaɪəti]",
        "meaning": "concern something in state of painful uneasiness; state of restlessness and agitation"
    },
    {
        "id": 231,
        "word": "anxious",
        "phonetic": "[ˈæŋkʃəs]",
        "meaning": "eager; keen; worried; uneasy and apprehensive about an uncertain event or matter"
    },
    {
        "id": 232,
        "word": "anyhow",
        "phonetic": "[ˈɛnihaʊ]",
        "meaning": "in any way or manner whatever; at any rate; in any event"
    },
    {
        "id": 233,
        "word": "apart",
        "phonetic": "[əˈpɑːt]",
        "meaning": "separately, in regard to space or company; in a state of separation as to place; aside"
    },
    {
        "id": 234,
        "word": "ape",
        "phonetic": "[eɪp]",
        "meaning": "imitate; mimic, as an ape imitates human actions"
    },
    {
        "id": 235,
        "word": "apologize",
        "phonetic": "[əˈpɒləʤaɪz]",
        "meaning": "beg pardon"
    },
    {
        "id": 236,
        "word": "apology",
        "phonetic": "[əˈpɒləʤi]",
        "meaning": "acknowledgment expressing regret or asking pardon for a fault or offense; explanation or"
    },
    {
        "id": 238,
        "word": "apparatus",
        "phonetic": "[ˌæpəˈreɪtəs]",
        "meaning": "a group of parts that work together to perform given function; appliance or device for"
    },
    {
        "id": 240,
        "word": "apparent",
        "phonetic": "[əˈpærᵊnt]",
        "meaning": "capable of being seen, or easily seen; open to view; visible to eye"
    },
    {
        "id": 241,
        "word": "appeal",
        "phonetic": "[əˈpiːl]",
        "meaning": "attraction; charm; attract; fascinate; challenge"
    },
    {
        "id": 242,
        "word": "appealing",
        "phonetic": "[əˈpiːlɪŋ]",
        "meaning": "attractive; charming"
    },
    {
        "id": 243,
        "word": "appendix",
        "phonetic": "[əˈpɛndɪks]",
        "meaning": "something appended or added"
    },
    {
        "id": 244,
        "word": "appetite",
        "phonetic": "[ˈæpətaɪt]",
        "meaning": "instinctive physical desire, especially one for food or drink"
    },
    {
        "id": 245,
        "word": "applaud",
        "phonetic": "[əˈplɔːd]",
        "meaning": "acclaim; express approval, especially by clapping the hands"
    },
    {
        "id": 246,
        "word": "appliance",
        "phonetic": "[əˈplaɪəns]",
        "meaning": "durable goods for home or office use; device or instrument for household use"
    },
    {
        "id": 247,
        "word": "applicable",
        "phonetic": "[əˈplɪkəbᵊl]",
        "meaning": "capable of being applied; fit or suitable to be applied; having relevance"
    },
    {
        "id": 248,
        "word": "applicant",
        "phonetic": "[ˈæplɪkənt]",
        "meaning": "candidate"
    },
    {
        "id": 249,
        "word": "application",
        "phonetic": "[ˌæplɪˈkeɪʃᵊn]",
        "meaning": "close attention; work of applying something; verbal or written request for assistance"
    },
    {
        "id": 250,
        "word": "apply",
        "phonetic": "[əˈplaɪ]",
        "meaning": "exert; put into service; avail oneself to;"
    },
    {
        "id": 251,
        "word": "appoint",
        "phonetic": "[əˈpɔɪnt]",
        "meaning": "designate; nominate"
    },
    {
        "id": 252,
        "word": "appointment",
        "phonetic": "[əˈpɔɪntmənt]",
        "meaning": "act of putting a person into a non-elective position; arrangement"
    },
    {
        "id": 253,
        "word": "appreciable",
        "phonetic": "[əˈpriːʃəbᵊl]",
        "meaning": "considerable; perceptible"
    },
    {
        "id": 254,
        "word": "appreciate",
        "phonetic": "[əˈpriːʃieɪt]",
        "meaning": "be thankful for; increase in worth; be thoroughly conscious of"
    },
    {
        "id": 255,
        "word": "appreciation",
        "phonetic": "[əˌpriːʃiˈeɪʃᵊn]",
        "meaning": "recognition; taste; judgment or opinion, especially a favorable one"
    },
    {
        "id": 256,
        "word": "appreciative",
        "phonetic": "[əˈpriːʃətɪv]",
        "meaning": "having or showing a just or ready appreciation or perception"
    },
    {
        "id": 257,
        "word": "apprentice",
        "phonetic": "[əˈprɛntɪs]",
        "meaning": "works for an expert to learn a trade; beginner; learner"
    },
    {
        "id": 258,
        "word": "approach",
        "phonetic": "[əˈprəʊʧ]",
        "meaning": "access; method"
    },
    {
        "id": 259,
        "word": "appropriate",
        "phonetic": "[əˈprəʊpriət]",
        "meaning": "acquire; take possession of for one's own use; set apart for specific use"
    },
    {
        "id": 260,
        "word": "approval",
        "phonetic": "[əˈpruːvᵊl]",
        "meaning": "official approbation; endorsement; act of approving"
    },
    {
        "id": 261,
        "word": "approve",
        "phonetic": "[əˈpruːv]",
        "meaning": "ratify; consider right or good; think or speak favorably of"
    },
    {
        "id": 262,
        "word": "approximate",
        "phonetic": "[əˈprɒksɪmɪt]",
        "meaning": "approach; come near"
    },
    {
        "id": 263,
        "word": "approximately",
        "phonetic": "[əˈprɒksɪmətli]",
        "meaning": "about; roughly"
    },
    {
        "id": 264,
        "word": "apt",
        "phonetic": "[æpt]",
        "meaning": "likely; exactly suitable; appropriate; quick to learn or understand"
    },
    {
        "id": 265,
        "word": "aptitude",
        "phonetic": "[ˈæptɪtjuːd]",
        "meaning": "inherent ability; quickness in learning and understanding"
    },
    {
        "id": 266,
        "word": "arbitrary",
        "phonetic": "[ˈɑːbɪtrəri]",
        "meaning": "randomly chosen; determined by chance or impulse, and not by reason or principle"
    },
    {
        "id": 267,
        "word": "arbitrator",
        "phonetic": "[ˈɑːbɪtreɪtə]",
        "meaning": "someone chosen to judge and decide disputed issue; one having ability or power to make"
    },
    {
        "id": 269,
        "word": "arc",
        "phonetic": "[ɑːk]",
        "meaning": "continuous portion of a circle; something curved in shape"
    },
    {
        "id": 270,
        "word": "arch",
        "phonetic": "[ɑːʧ]",
        "meaning": "any part of a curved line"
    },
    {
        "id": 271,
        "word": "archaeology",
        "phonetic": "[ˌɑːkiˈɒləʤi]",
        "meaning": "study of artifacts and relics of early mankind"
    },
    {
        "id": 272,
        "word": "architect",
        "phonetic": "[ˈɑːkɪtɛkt]",
        "meaning": "one who designs and supervises the construction of buildings or other large structures"
    },
    {
        "id": 273,
        "word": "architecture",
        "phonetic": "[ˈɑːkɪtɛkʧə]",
        "meaning": "art and science of designing and erecting buildings; buildings and other large structures"
    },
    {
        "id": 274,
        "word": "ardent",
        "phonetic": "[ˈɑːdᵊnt]",
        "meaning": "displaying or by strong enthusiasm or devotion; passionate"
    },
    {
        "id": 275,
        "word": "arduous",
        "phonetic": "[ˈɑːʤuəs]",
        "meaning": "demanding great effort or labor; difficult"
    },
    {
        "id": 276,
        "word": "area",
        "phonetic": "[ˈeəriə]",
        "meaning": "plane surface, as of the floor of a room; open space in a building; the enclosed space; extent;"
    },
    {
        "id": 278,
        "word": "arena",
        "phonetic": "[əˈriːnə]",
        "meaning": "playing field where sports events take place; large structure for open-air sports or"
    },
    {
        "id": 280,
        "word": "argue",
        "phonetic": "[ˈɑːɡjuː]",
        "meaning": "invent and offer reasons to support or overthrow a proposition, opinion, or measure; debate"
    },
    {
        "id": 281,
        "word": "arise",
        "phonetic": "[əˈraɪz]",
        "meaning": "come up from a lower to a higher position; come above the horizon; spring up; come into action"
    },
    {
        "id": 282,
        "word": "aristocracy",
        "phonetic": "[ˌærɪˈstɒkrəsi]",
        "meaning": "hereditary nobility; privileged class"
    },
    {
        "id": 283,
        "word": "aristocrat",
        "phonetic": "[ˈærɪstəkræt]",
        "meaning": "one of the aristocracy or people of rank in a community; one of a ruling class; a noble"
    },
    {
        "id": 284,
        "word": "arithmetic",
        "phonetic": "[əˈrɪθmətɪk]",
        "meaning": "theory of numerical calculations"
    },
    {
        "id": 285,
        "word": "armour",
        "phonetic": "[ˈɑːmə]",
        "meaning": "defensive covering, as of metal, wood, or leather, worn to protect the body against weapons"
    },
    {
        "id": 286,
        "word": "arms",
        "phonetic": "[ɑːmz]",
        "meaning": "weapons considered collectively; official symbols of a family"
    },
    {
        "id": 287,
        "word": "arouse",
        "phonetic": "[əˈraʊz]",
        "meaning": "excite; stimulate; awaken from or as if from sleep"
    },
    {
        "id": 288,
        "word": "arrange",
        "phonetic": "[əˈreɪnʤ]",
        "meaning": "put in proper order; dispose in the manner intended, or best suited for the purpose"
    },
    {
        "id": 289,
        "word": "arrangement",
        "phonetic": "[əˈreɪnʤmənt]",
        "meaning": "composition; order"
    },
    {
        "id": 290,
        "word": "array",
        "phonetic": "[əˈreɪ]",
        "meaning": "set out for display or use; place in orderly arrangement"
    },
    {
        "id": 291,
        "word": "arrest",
        "phonetic": "[əˈrɛst]",
        "meaning": "stop or slow down; catch someone's attention; take into custody"
    },
    {
        "id": 292,
        "word": "arrogance",
        "phonetic": "[ˈærəɡᵊns]",
        "meaning": "overbearing pride; haughtiness; manifest feeling of personal superiority in rank, power, or"
    },
    {
        "id": 294,
        "word": "arrogant",
        "phonetic": "[ˈærəɡᵊnt]",
        "meaning": "arising from feeling or assumption of one's superiority toward others"
    },
    {
        "id": 295,
        "word": "article",
        "phonetic": "[ˈɑːtɪkᵊl]",
        "meaning": "essay; editorial; individual thing or element of a class"
    },
    {
        "id": 296,
        "word": "artificial",
        "phonetic": "[ˌɑːtɪˈfɪʃᵊl]",
        "meaning": "made by humans; produced rather than natural."
    },
    {
        "id": 297,
        "word": "ascend",
        "phonetic": "[əˈsɛnd]",
        "meaning": "climb; mount"
    },
    {
        "id": 298,
        "word": "ascertain",
        "phonetic": "[ˌæsəˈteɪn]",
        "meaning": "find out for certain; discover with certainty; make sure of"
    },
    {
        "id": 299,
        "word": "ascribe",
        "phonetic": "[əˈskraɪb]",
        "meaning": "inscribe or dedicate; attribute to a specified cause, source, or origin; assign as a quality"
    },
    {
        "id": 300,
        "word": "ashamed",
        "phonetic": "[əˈʃeɪmd]",
        "meaning": "affected by shame; abashed or confused by guilt"
    },
    {
        "id": 301,
        "word": "aside",
        "phonetic": "[əˈsaɪd]",
        "meaning": "on, or to, one side; out of a straight line, course, or direction; at a little distance from the rest"
    },
    {
        "id": 302,
        "word": "aspect",
        "phonetic": "[ˈæspɛkt]",
        "meaning": "distinct feature or element in a problem; a way in which something can be viewed by the"
    },
    {
        "id": 304,
        "word": "aspirin",
        "phonetic": "[ˈæsprɪn]",
        "meaning": "white crystalline compound drug to relieve pain and reduce fever and inflammation"
    },
    {
        "id": 305,
        "word": "assassination",
        "phonetic": "[əˌsæsɪˈneɪʃᵊn]",
        "meaning": "act of assassinating; killing by treacherous violence; murder of public figure by"
    },
    {
        "id": 307,
        "word": "assault",
        "phonetic": "[əˈsɔːlt]",
        "meaning": "attack; onslaught"
    },
    {
        "id": 308,
        "word": "assemble",
        "phonetic": "[əˈsɛmbᵊl]",
        "meaning": "put together; bring or call together into a group or whole"
    },
    {
        "id": 309,
        "word": "assembly",
        "phonetic": "[əˈsɛmbli]",
        "meaning": "gathering; meeting; a group of persons gathered together for common reason"
    },
    {
        "id": 310,
        "word": "assert",
        "phonetic": "[əˈsɜːt]",
        "meaning": "declare or state with confidence; put oneself forward boldly"
    },
    {
        "id": 311,
        "word": "assess",
        "phonetic": "[əˈsɛs]",
        "meaning": "estimate value; judge worth of something"
    },
    {
        "id": 312,
        "word": "assessment",
        "phonetic": "[əˈsɛsmənt]",
        "meaning": "act of judging or assessing; amount determined as payable"
    },
    {
        "id": 313,
        "word": "assign",
        "phonetic": "[əˈsaɪn]",
        "meaning": "appoint; allot; make over; point out authoritatively or exactly"
    },
    {
        "id": 314,
        "word": "assignment",
        "phonetic": "[əˈsaɪnmənt]",
        "meaning": "task given to students; job; distribution; appointment"
    },
    {
        "id": 315,
        "word": "assist",
        "phonetic": "[əˈsɪst]",
        "meaning": "give help or support to, especially as a subordinate"
    },
    {
        "id": 316,
        "word": "assistance",
        "phonetic": "[əˈsɪstᵊns]",
        "meaning": "activity of contributing to fulfillment of a need or furtherance of an effort or purpose"
    },
    {
        "id": 317,
        "word": "assistant",
        "phonetic": "[əˈsɪstᵊnt]",
        "meaning": "helper; person who assists or helps someone else"
    },
    {
        "id": 318,
        "word": "associate",
        "phonetic": "[əˈsəʊʃiət]",
        "meaning": "connect or join together; combine"
    },
    {
        "id": 319,
        "word": "association",
        "phonetic": "[əˌsəʊsiˈeɪʃᵊn]",
        "meaning": "connection, whether of persons of things; union of persons in a company or society for"
    },
    {
        "id": 321,
        "word": "assorted",
        "phonetic": "[əˈsɔːtɪd]",
        "meaning": "varied; miscellaneous"
    },
    {
        "id": 322,
        "word": "assortment",
        "phonetic": "[əˈsɔːtmənt]",
        "meaning": "variety; collection containing a variety of sorts of things"
    },
    {
        "id": 323,
        "word": "assume",
        "phonetic": "[əˈsjuːm]",
        "meaning": "suppose; presume; take on; bear"
    },
    {
        "id": 324,
        "word": "assumption",
        "phonetic": "[əˈsʌmpʃᵊn]",
        "meaning": "something taken for accepted as true without proof; taking over or taking possession of"
    },
    {
        "id": 325,
        "word": "assurance",
        "phonetic": "[əˈʃʊərᵊns]",
        "meaning": "promise or pledge; certainty; self-confidence; freedom from doubt"
    },
    {
        "id": 326,
        "word": "assure",
        "phonetic": "[əˈʃɔː]",
        "meaning": "solidify; guarantee; convince"
    },
    {
        "id": 327,
        "word": "assured",
        "phonetic": "[əˈʃɔːd]",
        "meaning": "made sure; exhibiting confidence or authority; indubitable"
    },
    {
        "id": 328,
        "word": "astonish",
        "phonetic": "[əˈstɒnɪʃ]",
        "meaning": "surprise; shock"
    },
    {
        "id": 329,
        "word": "astound",
        "phonetic": "[əˈstaʊnd]",
        "meaning": "affect with wonder; surprise; shock"
    },
    {
        "id": 330,
        "word": "astray",
        "phonetic": "[əˈstreɪ]",
        "meaning": "away from the correct path or direction, either in a literal or in a figurative sense; wandering"
    },
    {
        "id": 331,
        "word": "astronomer",
        "phonetic": "[əˈstrɒnəmə]",
        "meaning": "a physicist who studies astronomy"
    },
    {
        "id": 332,
        "word": "astronomical",
        "phonetic": "[ˌæstrəˈnɒmɪkᵊl]",
        "meaning": "enormously large or extensive; relating to astronomy"
    },
    {
        "id": 333,
        "word": "astronomy",
        "phonetic": "[əˈstrɒnəmi]",
        "meaning": "branch of physics that studies celestial bodies and universe as a whole"
    },
    {
        "id": 334,
        "word": "athlete",
        "phonetic": "[ˈæθliːt]",
        "meaning": "sports man; one who contended for prize in public games"
    },
    {
        "id": 335,
        "word": "atlas",
        "phonetic": "[ˈætləs]",
        "meaning": "a bound volume of maps, charts, or tables"
    },
    {
        "id": 336,
        "word": "atmosphere",
        "phonetic": "[ˈætməsfɪə]",
        "meaning": "air"
    },
    {
        "id": 337,
        "word": "atom",
        "phonetic": "[ˈætəm]",
        "meaning": "a tiny piece of anything; the smallest component of an element having the chemical properties"
    },
    {
        "id": 339,
        "word": "atomic",
        "phonetic": "[əˈtɒmɪk]",
        "meaning": "of or relating to or comprising atoms; immeasurably small"
    },
    {
        "id": 340,
        "word": "attach",
        "phonetic": "[əˈtæʧ]",
        "meaning": "fasten; annex; be in contact with"
    },
    {
        "id": 341,
        "word": "attachment",
        "phonetic": "[əˈtæʧmənt]",
        "meaning": "a bond, as of affection or loyalty; fond regard; supplementary part; accessory"
    },
    {
        "id": 342,
        "word": "attack",
        "phonetic": "[əˈtæk]",
        "meaning": "offensive move; expression of strong criticism; hostile comment"
    },
    {
        "id": 343,
        "word": "attain",
        "phonetic": "[əˈteɪn]",
        "meaning": "achieve or accomplish; gain"
    },
    {
        "id": 344,
        "word": "attempt",
        "phonetic": "[əˈtɛmpt]",
        "meaning": "action of trying at something"
    },
    {
        "id": 345,
        "word": "attend",
        "phonetic": "[əˈtɛnd]",
        "meaning": "be present at; go to; take care of; tend"
    },
    {
        "id": 346,
        "word": "attendance",
        "phonetic": "[əˈtɛndᵊns]",
        "meaning": "act of being present"
    },
    {
        "id": 347,
        "word": "attendant",
        "phonetic": "[əˈtɛndᵊnt]",
        "meaning": "aide; servant; accompanying; person who participates in a meeting"
    },
    {
        "id": 348,
        "word": "attention",
        "phonetic": "[əˈtɛnʃᵊn]",
        "meaning": "act or state of attending or heeding; application of the mind to any object of sense,"
    },
    {
        "id": 350,
        "word": "attentive",
        "phonetic": "[əˈtɛntɪv]",
        "meaning": "alert and watchful; considerate; thoughtful"
    },
    {
        "id": 351,
        "word": "attic",
        "phonetic": "[ˈætɪk]",
        "meaning": "story or room directly below the roof of a building, especially a house;"
    },
    {
        "id": 352,
        "word": "attitude",
        "phonetic": "[ˈætɪtjuːd]",
        "meaning": "posture, action, or disposition of a figure or a statue"
    },
    {
        "id": 353,
        "word": "attorney",
        "phonetic": "[əˈtɜːni]",
        "meaning": "lawyer; one who is appointed by another to act in his place or stead; proxy"
    },
    {
        "id": 354,
        "word": "attract",
        "phonetic": "[əˈtrækt]",
        "meaning": "draw to, or cause to tend to; engage or fix, as the mind, attention; invite or allure"
    },
    {
        "id": 355,
        "word": "attraction",
        "phonetic": "[əˈtrækʃᵊn]",
        "meaning": "appeal; a characteristic that provides pleasure and attracts"
    },
    {
        "id": 356,
        "word": "attribute",
        "phonetic": "[ˈætrɪbjuːt]",
        "meaning": "essential quality; reputation; honor"
    },
    {
        "id": 357,
        "word": "auction",
        "phonetic": "[ˈɔːkʃᵊn]",
        "meaning": "public sale of property to the highest bidder"
    },
    {
        "id": 358,
        "word": "audience",
        "phonetic": "[ˈɔːdiəns]",
        "meaning": "a group of people within hearing; crowd seeing a stage performance"
    },
    {
        "id": 359,
        "word": "auditorium",
        "phonetic": "[ˌɔːdɪˈtɔːriəm]",
        "meaning": "area of theater or concert hall where audience sits"
    },
    {
        "id": 360,
        "word": "august",
        "phonetic": "[ˈɔːɡəst]",
        "meaning": "impressive; majestic; inspiring awe or admiration"
    },
    {
        "id": 361,
        "word": "author",
        "phonetic": "[ˈɔːθə]",
        "meaning": "beginner, former, or first mover of anything; creator; originator; one who composes or writes"
    },
    {
        "id": 363,
        "word": "authority",
        "phonetic": "[ɔːˈθɒrəti]",
        "meaning": "jurisdiction; power to enforce laws, exact obedience, command, determine, or judge;"
    },
    {
        "id": 365,
        "word": "authorization",
        "phonetic": "[ˌɔːθᵊraɪˈzeɪʃᵊn]",
        "meaning": "act of giving authority or legal power; establishment by authority; sanction or warrant"
    },
    {
        "id": 366,
        "word": "authorize",
        "phonetic": "[ˈɔːθᵊraɪz]",
        "meaning": "empower; give permission for; sanction"
    },
    {
        "id": 367,
        "word": "autobiography",
        "phonetic": "[ˌɔːtəbaɪˈɒɡrəfi]",
        "meaning": "biography or story written by yourself"
    },
    {
        "id": 368,
        "word": "automate",
        "phonetic": "[ˈɔːtəmeɪt]",
        "meaning": "control or operate by automation; replace or enhance human labor with machines"
    },
    {
        "id": 369,
        "word": "automatic",
        "phonetic": "[ˌɔːtəˈmætɪk]",
        "meaning": "mechanized; operating with minimal human intervention; independent of external control"
    },
    {
        "id": 370,
        "word": "automation",
        "phonetic": "[ˌɔːtəˈmeɪʃᵊn]",
        "meaning": "act or process of converting the controlling of a machine or device to a more automatic"
    },
    {
        "id": 372,
        "word": "automobile",
        "phonetic": "[ˈɔːtəməbiːl]",
        "meaning": "self-propelled vehicle suitable for use on street or roadway"
    },
    {
        "id": 373,
        "word": "autonomous",
        "phonetic": "[ɔːˈtɒnəməs]",
        "meaning": "self-governing; not controlled by others or by outside forces; independent"
    },
    {
        "id": 374,
        "word": "autonomy",
        "phonetic": "[ɔːˈtɒnəmi]",
        "meaning": "independence; self-government or the right of self-government; self-determination"
    },
    {
        "id": 375,
        "word": "auxiliary",
        "phonetic": "[ɔːɡˈzɪliəri]",
        "meaning": "helper, additional or subsidiary"
    },
    {
        "id": 376,
        "word": "avail",
        "phonetic": "[əˈveɪl]",
        "meaning": "turn to advantage of; be of service to; profit; promote"
    },
    {
        "id": 377,
        "word": "available",
        "phonetic": "[əˈveɪləbᵊl]",
        "meaning": "convenient for use or disposal; not busy, free; obtainable; accessible"
    },
    {
        "id": 378,
        "word": "avenge",
        "phonetic": "[əˈvɛnʤ]",
        "meaning": "take vengeance for something, or on behalf of someone"
    },
    {
        "id": 379,
        "word": "avenue",
        "phonetic": "[ˈævənjuː]",
        "meaning": "way or opening for entrance or exit place; passage by which a place may be reached; broad"
    },
    {
        "id": 381,
        "word": "average",
        "phonetic": "[ˈævᵊrɪʤ]",
        "meaning": "typical; mean; achieve or reach on average"
    },
    {
        "id": 382,
        "word": "aviation",
        "phonetic": "[ˌeɪviˈeɪʃᵊn]",
        "meaning": "art or science of flying; flight; aeronautics"
    },
    {
        "id": 383,
        "word": "avoid",
        "phonetic": "[əˈvɔɪd]",
        "meaning": "shield away from; prevent"
    },
    {
        "id": 384,
        "word": "aware",
        "phonetic": "[əˈweə]",
        "meaning": "knowing; having knowledge or cognizance"
    },
    {
        "id": 385,
        "word": "awe",
        "phonetic": "[ɔː]",
        "meaning": "mixed emotion of reverence, respect, dread, and wonder; fear, as of something evil"
    },
    {
        "id": 386,
        "word": "awful",
        "phonetic": "[ˈɔːfᵊl]",
        "meaning": "causing fear, dread, or terror; extremely bad or unpleasant; terrible"
    },
    {
        "id": 387,
        "word": "awkward",
        "phonetic": "[ˈɔːkwəd]",
        "meaning": "difficult to handle or manage"
    },
    {
        "id": 388,
        "word": "awkwardly",
        "phonetic": "[ˈɔːkwədli]",
        "meaning": "in an uncomfortable, nervous or embarrassed way"
    },
    {
        "id": 389,
        "word": "axis",
        "phonetic": "[ˈæksɪs]",
        "meaning": "the center around which something rotates; pivot"
    },
    {
        "id": 390,
        "word": "axle",
        "phonetic": "[ˈæksᵊl]",
        "meaning": "pin or spindle on which a wheel revolves, or which revolves with a wheel; transverse bar or shaft"
    },
    {
        "id": 396,
        "word": "baby-sitter",
        "phonetic": "[ˈbeɪbɪˌsɪtə]",
        "meaning": "person engaged to care for children when the parents are not home"
    },
    {
        "id": 397,
        "word": "bachelor",
        "phonetic": "[ˈbæʧᵊlə]",
        "meaning": "unmarried men; the first or lowest academic degree conferred by universities and colleges"
    },
    {
        "id": 398,
        "word": "backbone",
        "phonetic": "[ˈbækbəʊn]",
        "meaning": "support; mainstay; vertebrate spine or spinal column"
    },
    {
        "id": 399,
        "word": "backward",
        "phonetic": "[ˈbækwəd]",
        "meaning": "directed to the back or rear; unwilling; averse; reluctant; hesitating; undeveloped"
    },
    {
        "id": 400,
        "word": "bacon",
        "phonetic": "[ˈbeɪkᵊn]",
        "meaning": "back and sides of a pig salted and smoked"
    },
    {
        "id": 401,
        "word": "bacterium",
        "phonetic": "[bækˈtɪəriəm]",
        "meaning": "single celled organism with no nucleus"
    },
    {
        "id": 402,
        "word": "badge",
        "phonetic": "[bæʤ]",
        "meaning": "distinctive mark, token, or sign worn on the person"
    },
    {
        "id": 403,
        "word": "badminton",
        "phonetic": "[ˈbædmɪntᵊn]",
        "meaning": "game played on a court with light long-handled rackets"
    },
    {
        "id": 404,
        "word": "baffle",
        "phonetic": "[ˈbæfᵊl]",
        "meaning": "frustrate as by confusing or perplexing; impede force or movement of"
    },
    {
        "id": 405,
        "word": "baggage",
        "phonetic": "[ˈbæɡɪʤ]",
        "meaning": "trunks, bags, parcels, and suitcases in which one carries one's belongings while traveling;"
    },
    {
        "id": 407,
        "word": "bait",
        "phonetic": "[beɪt]",
        "meaning": "harass; tease; lure, entice, or entrap"
    },
    {
        "id": 408,
        "word": "bake",
        "phonetic": "[beɪk]",
        "meaning": "prepare, as food, by cooking in a dry heat, either in an oven or under coals, or on heated stone"
    },
    {
        "id": 410,
        "word": "balance",
        "phonetic": "[ˈbælᵊns]",
        "meaning": "being in equilibrium; equilibrium; symmetry; stability"
    },
    {
        "id": 411,
        "word": "balcony",
        "phonetic": "[ˈbælkəni]",
        "meaning": "platform projecting from the wall of a building"
    },
    {
        "id": 412,
        "word": "bald",
        "phonetic": "[bɔːld]",
        "meaning": "hairless; lacking a natural or usual covering"
    },
    {
        "id": 413,
        "word": "ballet",
        "phonetic": "[ˈbæleɪ]",
        "meaning": "a sort of theatrical representation by dancers"
    },
    {
        "id": 414,
        "word": "balloon",
        "phonetic": "[bəˈluːn]",
        "meaning": "large non-rigid bag filled with gas or heated air"
    },
    {
        "id": 415,
        "word": "ballroom",
        "phonetic": "[ˈbɔːlruːm]",
        "meaning": "large room used mainly for dancing"
    },
    {
        "id": 416,
        "word": "bamboo",
        "phonetic": "[bæmˈbuː]",
        "meaning": "plant of family of grasses, growing in tropical countries"
    },
    {
        "id": 417,
        "word": "band",
        "phonetic": "[bænd]",
        "meaning": "orchestra; team; strip; ribbon; belt; unite; ally"
    },
    {
        "id": 418,
        "word": "bandage",
        "phonetic": "[ˈbændɪʤ]",
        "meaning": "strip of woven material, used in dressing and binding up wounds"
    },
    {
        "id": 419,
        "word": "bang",
        "phonetic": "[bæŋ]",
        "meaning": "a vigorous blow; a conspicuous success"
    },
    {
        "id": 421,
        "word": "banker",
        "phonetic": "[ˈbæŋkə]",
        "meaning": "person in charge of the bank in a gambling game; one who owns or is an executive in a bank"
    },
    {
        "id": 422,
        "word": "bankrupt",
        "phonetic": "[ˈbæŋkrʌpt]",
        "meaning": "penniless, without any money; financially ruined"
    },
    {
        "id": 423,
        "word": "banner",
        "phonetic": "[ˈbænə]",
        "meaning": "flag; sign; a newspaper headline that runs across the full page"
    },
    {
        "id": 424,
        "word": "banquet",
        "phonetic": "[ˈbæŋkwɪt]",
        "meaning": "feast; entertainment of eating and drinking"
    },
    {
        "id": 425,
        "word": "bar",
        "phonetic": "[bɑː]",
        "meaning": "a counter where you can obtain food or drink; cafe; strip; stick"
    },
    {
        "id": 426,
        "word": "barber",
        "phonetic": "[ˈbɑːbə]",
        "meaning": "haircutter; one whose business is to cut hair and to shave or trim beards"
    },
    {
        "id": 427,
        "word": "bare",
        "phonetic": "[beə]",
        "meaning": "lacking the usual or appropriate covering or clothing"
    },
    {
        "id": 428,
        "word": "barely",
        "phonetic": "[ˈbeəli]",
        "meaning": "just; only; hardly; scarcely"
    },
    {
        "id": 429,
        "word": "bargain",
        "phonetic": "[ˈbɑːɡɪn]",
        "meaning": "agreement between parties concerning the sale of property"
    },
    {
        "id": 430,
        "word": "barge",
        "phonetic": "[bɑːʤ]",
        "meaning": "flatboat; long, large boat for transporting freight that is unpowered and towed or pushed by"
    },
    {
        "id": 432,
        "word": "bark",
        "phonetic": "[bɑːk]",
        "meaning": "sound made by a dog; harsh sound uttered by a dog"
    },
    {
        "id": 433,
        "word": "barn",
        "phonetic": "[bɑːn]",
        "meaning": "an outlying farm building for storing grain or animal feed and housing farm animals"
    },
    {
        "id": 434,
        "word": "barometer",
        "phonetic": "[bəˈrɒmɪtə]",
        "meaning": "instrument for determining the weight or pressure of the atmosphere"
    },
    {
        "id": 435,
        "word": "baron",
        "phonetic": "[ˈbærᵊn]",
        "meaning": "title or degree of nobility"
    },
    {
        "id": 436,
        "word": "barrel",
        "phonetic": "[ˈbærᵊl]",
        "meaning": "vessel; large cylindrical container"
    },
    {
        "id": 437,
        "word": "barren",
        "phonetic": "[ˈbærᵊn]",
        "meaning": "desolate; fruitless and unproductive; lacking"
    },
    {
        "id": 438,
        "word": "barrier",
        "phonetic": "[ˈbæriə]",
        "meaning": "obstacle; structure built to bar passage; boundary or limit"
    },
    {
        "id": 439,
        "word": "barter",
        "phonetic": "[ˈbɑːtə]",
        "meaning": "trade goods or services without the exchange of money"
    },
    {
        "id": 440,
        "word": "baseball",
        "phonetic": "[ˈbeɪsbɔːl]",
        "meaning": "game played with a bat and ball by two opposing teams of nine players; ball used in this"
    },
    {
        "id": 442,
        "word": "basement",
        "phonetic": "[ˈbeɪsmənt]",
        "meaning": "cellar; storage room"
    },
    {
        "id": 443,
        "word": "basin",
        "phonetic": "[ˈbeɪsᵊn]",
        "meaning": "bowl-shaped vessel, usually used for holding food or liquids"
    },
    {
        "id": 444,
        "word": "bathe",
        "phonetic": "[beɪð]",
        "meaning": "wash by immersion, as in a bath; subject to bath; lave; immerse or cover one's self"
    },
    {
        "id": 445,
        "word": "batter",
        "phonetic": "[ˈbætə]",
        "meaning": "beat with successive blows; beat repeatedly and with violence"
    },
    {
        "id": 446,
        "word": "battery",
        "phonetic": "[ˈbætᵊri]",
        "meaning": "beating or pounding; set of guns or heavy artillery; dry cell that produces electric current"
    },
    {
        "id": 447,
        "word": "bay",
        "phonetic": "[beɪ]",
        "meaning": "inlet of the sea, usually smaller than a gulf; small body of water set off from the main body"
    },
    {
        "id": 448,
        "word": "bazaar",
        "phonetic": "[bəˈzɑː]",
        "meaning": "market consisting of a street lined with shops and stalls, especially one in the Middle East"
    },
    {
        "id": 450,
        "word": "bead",
        "phonetic": "[biːd]",
        "meaning": "small piece of material, such as glass, plastic, or wood, that is pierced for stringing"
    },
    {
        "id": 451,
        "word": "beak",
        "phonetic": "[biːk]",
        "meaning": "nib ;horny projecting mouth of a bird"
    },
    {
        "id": 452,
        "word": "beam",
        "phonetic": "[biːm]",
        "meaning": "ray of light; long piece of metal or wood; long piece fixed or movable in structure, machine, or"
    },
    {
        "id": 454,
        "word": "bean",
        "phonetic": "[biːn]",
        "meaning": "various edible seeds; small oval or roundish seed, berry, nut, or lump"
    },
    {
        "id": 455,
        "word": "bear",
        "phonetic": "[beə]",
        "meaning": "support; sustain; carry; have; yield; give birth; hold up or support"
    },
    {
        "id": 456,
        "word": "bearing",
        "phonetic": "[ˈbeərɪŋ]",
        "meaning": "carrying another part; patient endurance; suffering without complaint; act of producing or"
    },
    {
        "id": 458,
        "word": "beat",
        "phonetic": "[biːt]",
        "meaning": "whip; strike; defeat; hit repeatedly"
    },
    {
        "id": 459,
        "word": "become",
        "phonetic": "[bɪˈkʌm]",
        "meaning": "suit or be suitable to; be worthy of, or proper for; cause to appear well; grow or come to be"
    },
    {
        "id": 460,
        "word": "beforehand",
        "phonetic": "[bɪˈfɔːhænd]",
        "meaning": "in state of anticipation; in advance; by way of preparation"
    },
    {
        "id": 461,
        "word": "behalf",
        "phonetic": "[bɪˈhɑːf]",
        "meaning": "represent; advantage, benefit, interest of someone"
    },
    {
        "id": 462,
        "word": "behave",
        "phonetic": "[bɪˈheɪv]",
        "meaning": "perform; conduct oneself in a proper way"
    },
    {
        "id": 463,
        "word": "behavior",
        "phonetic": "[bɪˈheɪvjə]",
        "meaning": "conduct; manner"
    },
    {
        "id": 464,
        "word": "belly",
        "phonetic": "[ˈbɛli]",
        "meaning": "part of human body which extends downward from breast to thighs, and contains bowels;"
    },
    {
        "id": 466,
        "word": "beloved",
        "phonetic": "[bɪˈlʌvɪd]",
        "meaning": "greatly loved; dear to the heart"
    },
    {
        "id": 467,
        "word": "below",
        "phonetic": "[bɪˈləʊ]",
        "meaning": "under, or lower in place; beneath not so high; inferior to in rank; unworthy of"
    },
    {
        "id": 468,
        "word": "bend",
        "phonetic": "[bɛnd]",
        "meaning": "strain or move out of a straight line; curve; turn toward some certain point"
    },
    {
        "id": 469,
        "word": "beneath",
        "phonetic": "[bɪˈniːθ]",
        "meaning": "lower in place, with something directly over or on; under; underneath; below"
    },
    {
        "id": 470,
        "word": "beneficial",
        "phonetic": "[ˌbɛnɪˈfɪʃᵊl]",
        "meaning": "helpful; tending to promote physical well-being"
    },
    {
        "id": 471,
        "word": "beneficiary",
        "phonetic": "[ˌbɛnəˈfɪʃᵊri]",
        "meaning": "person entitled to benefits or proceeds of an insurance policy or will"
    },
    {
        "id": 472,
        "word": "benefit",
        "phonetic": "[ˈbɛnɪfɪt]",
        "meaning": "advantage; something that aids or promotes well-being ; welfare; gain"
    },
    {
        "id": 473,
        "word": "benevolent",
        "phonetic": "[bəˈnɛvᵊlᵊnt]",
        "meaning": "generous in providing aid to others; charitable"
    },
    {
        "id": 474,
        "word": "bent",
        "phonetic": "[bɛnt]",
        "meaning": "determined to do or have"
    },
    {
        "id": 475,
        "word": "besides",
        "phonetic": "[bɪˈsaɪdz]",
        "meaning": "over and above; separate or distinct from; in addition to; other than"
    },
    {
        "id": 476,
        "word": "bestow",
        "phonetic": "[bɪˈstəʊ]",
        "meaning": "give as gift; present"
    },
    {
        "id": 477,
        "word": "bet",
        "phonetic": "[bɛt]",
        "meaning": "stake or pledge upon the event of a contingent issue; amount or object risked in a wager"
    },
    {
        "id": 478,
        "word": "betray",
        "phonetic": "[bɪˈtreɪ]",
        "meaning": "be unfaithful; reveal unconsciously or unwillingly"
    },
    {
        "id": 480,
        "word": "beverage",
        "phonetic": "[ˈbɛvᵊrɪʤ]",
        "meaning": "liquids for drinking, usually excluding water; refreshment"
    },
    {
        "id": 481,
        "word": "bewilder",
        "phonetic": "[bɪˈwɪldə]",
        "meaning": "lead into perplexity or confusion; perplex with mazes"
    },
    {
        "id": 482,
        "word": "bias",
        "phonetic": "[ˈbaɪəs]",
        "meaning": "preference or inclination, especially one that inhibits impartial judgment; influence in unfair way"
    },
    {
        "id": 483,
        "word": "bid",
        "phonetic": "[bɪd]",
        "meaning": "make an offer of; propose; offer in words; declare, as a wish, a greeting, a threat, or defiance"
    },
    {
        "id": 484,
        "word": "bill",
        "phonetic": "[bɪl]",
        "meaning": "invoice; act; proposal; statement or list of particulars, such as a theater program or menu"
    },
    {
        "id": 485,
        "word": "billion",
        "phonetic": "[ˈbɪljən]",
        "meaning": "the number that is represented as a one followed by 9 zeros"
    },
    {
        "id": 486,
        "word": "bind",
        "phonetic": "[baɪnd]",
        "meaning": "tie, or confine with a cord, band, or chain; make fast; contract; cohere or stick together"
    },
    {
        "id": 487,
        "word": "biographer",
        "phonetic": "[baɪˈɒɡrəfə]",
        "meaning": "one who writes a book about somebody's life"
    },
    {
        "id": 488,
        "word": "biography",
        "phonetic": "[baɪˈɒɡrəfi]",
        "meaning": "an account of the series of events making up a person's life; accounts of people's life"
    },
    {
        "id": 489,
        "word": "biologist",
        "phonetic": "[baɪˈɒləʤɪst]",
        "meaning": "scientist who studies living organisms"
    },
    {
        "id": 490,
        "word": "bite",
        "phonetic": "[baɪt]",
        "meaning": "pierce skin with teeth; seize with the teeth; sting with a stinger; eat into; have a sharp taste"
    },
    {
        "id": 491,
        "word": "bitter",
        "phonetic": "[ˈbɪtə]",
        "meaning": "harsh or corrosive in tone; painful; acrid; acrimonious"
    },
    {
        "id": 492,
        "word": "bitterness",
        "phonetic": "[ˈbɪtənəs]",
        "meaning": "sharp and bitter manner"
    },
    {
        "id": 493,
        "word": "blacksmith",
        "phonetic": "[ˈblæksmɪθ]",
        "meaning": "one who forges and shapes iron with a hammer and anvil"
    },
    {
        "id": 494,
        "word": "blade",
        "phonetic": "[bleɪd]",
        "meaning": "flat part of the leaf, of any plant, especially of gramineous plants; cutting part of an instrument"
    },
    {
        "id": 495,
        "word": "blame",
        "phonetic": "[bleɪm]",
        "meaning": "condemn; rebuke; find fault with; censure"
    },
    {
        "id": 496,
        "word": "blank",
        "phonetic": "[blæŋk]",
        "meaning": "of a white or pale color; without color; empty; void"
    },
    {
        "id": 497,
        "word": "blanket",
        "phonetic": "[ˈblæŋkɪt]",
        "meaning": "heavy, loosely woven fabric, usually of wool, and having a nap, used in bed clothing"
    },
    {
        "id": 498,
        "word": "blast",
        "phonetic": "[blɑːst]",
        "meaning": "explode; burst; gale; very strong gust of wind or air"
    },
    {
        "id": 499,
        "word": "blaze",
        "phonetic": "[bleɪz]",
        "meaning": "brilliant burst of fire; destructive fire; flame"
    },
    {
        "id": 500,
        "word": "bleach",
        "phonetic": "[bliːʧ]",
        "meaning": "make white or colorless; blanch"
    },
    {
        "id": 501,
        "word": "bleed",
        "phonetic": "[bliːd]",
        "meaning": "emit blood; lose blood; withdraw blood from the body"
    },
    {
        "id": 502,
        "word": "blend",
        "phonetic": "[blɛnd]",
        "meaning": "combination; mixture; forming uniform mixture"
    },
    {
        "id": 503,
        "word": "bless",
        "phonetic": "[blɛs]",
        "meaning": "make or pronounce holy; consecrate; make happy"
    },
    {
        "id": 504,
        "word": "blessing",
        "phonetic": "[ˈblɛsɪŋ]",
        "meaning": "praying for divine protection; formal act of giving approval"
    },
    {
        "id": 505,
        "word": "blink",
        "phonetic": "[blɪŋk]",
        "meaning": "shut eyes briefly; wink"
    },
    {
        "id": 506,
        "word": "block",
        "phonetic": "[blɒk]",
        "meaning": "hinder; obstruct; indicate broadly without great detail; sketch"
    },
    {
        "id": 507,
        "word": "bloom",
        "phonetic": "[bluːm]",
        "meaning": "flower; blossom; best time of youth; period of greatest prosperity or productivity"
    },
    {
        "id": 508,
        "word": "blossom",
        "phonetic": "[ˈblɒsəm]",
        "meaning": "reproductive organ of plants, especially one having showy or colorful parts"
    },
    {
        "id": 509,
        "word": "blot",
        "phonetic": "[blɒt]",
        "meaning": "spot or stain, as of ink on paper; blur; weak point or failing"
    },
    {
        "id": 510,
        "word": "blunder",
        "phonetic": "[ˈblʌndə]",
        "meaning": "serious mistake typically caused by ignorance or confusion"
    },
    {
        "id": 511,
        "word": "blunt",
        "phonetic": "[blʌnt]",
        "meaning": "having a dull edge or end; not sharp; lacking in feeling; insensitive"
    },
    {
        "id": 512,
        "word": "blush",
        "phonetic": "[blʌʃ]",
        "meaning": "become rosy or reddish; turn red, as if in embarrassment or shame"
    },
    {
        "id": 513,
        "word": "board",
        "phonetic": "[bɔːd]",
        "meaning": "a committee having supervisory powers; a flat piece of material designed for a special"
    },
    {
        "id": 515,
        "word": "boarding",
        "phonetic": "[ˈbɔːdɪŋ]",
        "meaning": "wooden boards collectively; act of entering a ship; supplying with meals and lodgings for"
    },
    {
        "id": 517,
        "word": "boast",
        "phonetic": "[bəʊst]",
        "meaning": "show off oneself; speak of with excessive pride"
    },
    {
        "id": 518,
        "word": "bodyguard",
        "phonetic": "[ˈbɒdɪɡɑːd]",
        "meaning": "guard to protect or defend person; lifeguard"
    },
    {
        "id": 519,
        "word": "boil",
        "phonetic": "[bɔɪl]",
        "meaning": "be agitated; pass from a liquid to vapor when heated; be excited with passion; heat in water"
    },
    {
        "id": 520,
        "word": "bold",
        "phonetic": "[bəʊld]",
        "meaning": "brave; daring; intrepid; impudent"
    },
    {
        "id": 521,
        "word": "bolt",
        "phonetic": "[bəʊlt]",
        "meaning": "dash or dart off; move or jump suddenly"
    },
    {
        "id": 522,
        "word": "bond",
        "phonetic": "[bɒnd]",
        "meaning": "link; connection; uniting force or tie; binding agreement; duty"
    },
    {
        "id": 523,
        "word": "bonus",
        "phonetic": "[ˈbəʊnəs]",
        "meaning": "an extra dividend to the shareholders; money paid in addition to a stated compensation"
    },
    {
        "id": 524,
        "word": "bookcase",
        "phonetic": "[ˈbʊkkeɪs]",
        "meaning": "case with shelves for holding books, especially one with glazed doors"
    },
    {
        "id": 525,
        "word": "boom",
        "phonetic": "[buːm]",
        "meaning": "bonanza; prosperity; prosper; expand; flourish"
    },
    {
        "id": 526,
        "word": "booming",
        "phonetic": "[ˈbuːmɪŋ]",
        "meaning": "deep and resonant; flourishing; thriving"
    },
    {
        "id": 527,
        "word": "boost",
        "phonetic": "[buːst]",
        "meaning": "raise; advance; push or shove upward"
    },
    {
        "id": 528,
        "word": "booth",
        "phonetic": "[buːð]",
        "meaning": "house or shed built for temporary occupation; covered stall or temporary structure"
    },
    {
        "id": 529,
        "word": "border",
        "phonetic": "[ˈbɔːdə]",
        "meaning": "outer part or edge of anything, as of a garment, a garden; margin; verge; brink; boundary"
    },
    {
        "id": 530,
        "word": "bore",
        "phonetic": "[bɔː]",
        "meaning": "drill; make a hole in or through, with or as if with a drill"
    },
    {
        "id": 531,
        "word": "boring",
        "phonetic": "[ˈbɔːrɪŋ]",
        "meaning": "uninteresting and tiresome; dull"
    },
    {
        "id": 532,
        "word": "bother",
        "phonetic": "[ˈbɒðə]",
        "meaning": "annoy; trouble; make agitated or nervous; fluster"
    },
    {
        "id": 533,
        "word": "bounce",
        "phonetic": "[baʊns]",
        "meaning": "jolt; rebound after having struck an object or a surface"
    },
    {
        "id": 534,
        "word": "bound",
        "phonetic": "[baʊnd]",
        "meaning": "tied; held; committed; limit; constraint; leap; jump"
    },
    {
        "id": 535,
        "word": "boundary",
        "phonetic": "[ˈbaʊndᵊri]",
        "meaning": "dividing line; border; frontier"
    },
    {
        "id": 536,
        "word": "bourgeois",
        "phonetic": "[ˈbɔːʒwɑː]",
        "meaning": "middle class; selfishly materialistic; dully conventional"
    },
    {
        "id": 537,
        "word": "bow",
        "phonetic": "[bəʊ]",
        "meaning": "inclination of head, or bending of body for reverence, respect, civility, or submission; bending or"
    },
    {
        "id": 539,
        "word": "bowl",
        "phonetic": "[bəʊl]",
        "meaning": "throw or roll a ball; move quickly and smoothly, especially by rolling"
    },
    {
        "id": 540,
        "word": "boycott",
        "phonetic": "[ˈbɔɪkɒt]",
        "meaning": "refrain from buying or using"
    },
    {
        "id": 541,
        "word": "brace",
        "phonetic": "[breɪs]",
        "meaning": "something which holds anything tightly or supports it firmly, as bandage, cord, or rod;"
    },
    {
        "id": 542,
        "word": "brain",
        "phonetic": "[breɪn]",
        "meaning": "organ or seat of intellect; understanding or imagination"
    },
    {
        "id": 543,
        "word": "brake",
        "phonetic": "[breɪk]",
        "meaning": "a piece of mechanism for retarding or stopping motion by friction"
    },
    {
        "id": 544,
        "word": "brand",
        "phonetic": "[brænd]",
        "meaning": "burning piece of wood; mark made by burning with a hot iron; distinctive mark upon in any"
    },
    {
        "id": 546,
        "word": "breach",
        "phonetic": "[briːʧ]",
        "meaning": "breaking of contract or duty"
    },
    {
        "id": 547,
        "word": "breadth",
        "phonetic": "[brɛdθ]",
        "meaning": "measure or dimension from side to side; width; extent"
    },
    {
        "id": 548,
        "word": "break",
        "phonetic": "[breɪk]",
        "meaning": "opportunity to do something; pause or interval, as from work; sudden change"
    },
    {
        "id": 549,
        "word": "breakdown",
        "phonetic": "[ˈbreɪkdaʊn]",
        "meaning": "process of failing to function or continue; sudden collapse in physical or mental health;"
    },
    {
        "id": 551,
        "word": "breakthrough",
        "phonetic": "[ˈbreɪkθruː]",
        "meaning": "act of overcoming or penetrating an obstacle or restriction"
    },
    {
        "id": 552,
        "word": "breath",
        "phonetic": "[brɛθ]",
        "meaning": "air that is inhaled and exhaled in respiration"
    },
    {
        "id": 553,
        "word": "breathe",
        "phonetic": "[briːð]",
        "meaning": "respire; inhale and exhale air"
    },
    {
        "id": 554,
        "word": "breed",
        "phonetic": "[briːd]",
        "meaning": "raise; produce offspring; give birth to or hatch; mate"
    },
    {
        "id": 555,
        "word": "breeze",
        "phonetic": "[briːz]",
        "meaning": "light current of air; gentle wind; progress swiftly and effortlessly"
    },
    {
        "id": 556,
        "word": "bribe",
        "phonetic": "[braɪb]",
        "meaning": "something serving to influence or persuade; reward or gift with a view to prevent judgment"
    },
    {
        "id": 557,
        "word": "bridle",
        "phonetic": "[ˈbraɪdᵊl]",
        "meaning": "headgear with which a horse is directed and which carries a bit and reins"
    },
    {
        "id": 558,
        "word": "brief",
        "phonetic": "[briːf]",
        "meaning": "short in time, duration, length, or extent; concise"
    },
    {
        "id": 559,
        "word": "brighten",
        "phonetic": "[ˈbraɪtᵊn]",
        "meaning": "lighten; cheer; encourage; make or become bright or brighter"
    },
    {
        "id": 560,
        "word": "brilliance",
        "phonetic": "[ˈbrɪljəns]",
        "meaning": "cleverness; magnificence"
    },
    {
        "id": 561,
        "word": "brilliant",
        "phonetic": "[ˈbrɪljənt]",
        "meaning": "full of light; shining; bright; sharp and clear in tone"
    },
    {
        "id": 562,
        "word": "brim",
        "phonetic": "[ˈbrɪm]",
        "meaning": "brink; edge"
    },
    {
        "id": 563,
        "word": "brink",
        "phonetic": "[brɪŋk]",
        "meaning": "edge, margin, or border of a steep place verge"
    },
    {
        "id": 564,
        "word": "brisk",
        "phonetic": "[brɪsk]",
        "meaning": "marked by speed, liveliness, and vigor; energetic; swift; keen or sharp in speech or manner"
    },
    {
        "id": 565,
        "word": "brittle",
        "phonetic": "[ˈbrɪtᵊl]",
        "meaning": "easily broken; having little elasticity"
    },
    {
        "id": 566,
        "word": "broadcast",
        "phonetic": "[ˈbrɔːdkɑːst]",
        "meaning": "message that is transmitted by radio or television; radio or television show"
    },
    {
        "id": 567,
        "word": "broaden",
        "phonetic": "[ˈbrɔːdᵊn]",
        "meaning": "widen; grow broad or broader"
    },
    {
        "id": 568,
        "word": "brochure",
        "phonetic": "[ˈbrəʊʃə]",
        "meaning": "pamphlet; small book usually having paper cover"
    },
    {
        "id": 569,
        "word": "bronze",
        "phonetic": "[brɒnz]",
        "meaning": "an alloy of copper and tin and sometimes other elements"
    },
    {
        "id": 570,
        "word": "brood",
        "phonetic": "[bruːd]",
        "meaning": "think long and anxiously; be in a state of gloomy, serious thought"
    },
    {
        "id": 571,
        "word": "brook",
        "phonetic": "[brʊk]",
        "meaning": "creek; stream"
    },
    {
        "id": 572,
        "word": "brown",
        "phonetic": "[braʊn]",
        "meaning": "of dark color, of various shades between black and red or yellow"
    },
    {
        "id": 573,
        "word": "bruise",
        "phonetic": "[bruːz]",
        "meaning": "injure, as by a blow or collision; contuse; fight with the fists"
    },
    {
        "id": 574,
        "word": "brutal",
        "phonetic": "[ˈbruːtᵊl]",
        "meaning": "like a brute; savage; cruel; inhuman; merciless"
    },
    {
        "id": 575,
        "word": "brute",
        "phonetic": "[bruːt]",
        "meaning": "not having sensation; senseless; inanimate; unconscious; without intelligence"
    },
    {
        "id": 576,
        "word": "bubble",
        "phonetic": "[ˈbʌbᵊl]",
        "meaning": "foam; dome-shaped covering made of transparent glass or plastic; fantastic or impracticable"
    },
    {
        "id": 578,
        "word": "bucket",
        "phonetic": "[ˈbʌkɪt]",
        "meaning": "vessel for drawing up water from a well; vessel for hoisting and conveying coal, ore, grain"
    },
    {
        "id": 579,
        "word": "bud",
        "phonetic": "[bʌd]",
        "meaning": "one that is not yet fully developed; sprout"
    },
    {
        "id": 580,
        "word": "budget",
        "phonetic": "[ˈbʌʤɪt]",
        "meaning": "estimate; a sum of money allocated for a particular purpose"
    },
    {
        "id": 581,
        "word": "buffet",
        "phonetic": "[ˈbʊfeɪ]",
        "meaning": "table with food set out for people to serve themselves; meal at which people help themselves"
    },
    {
        "id": 583,
        "word": "bug",
        "phonetic": "[bʌɡ]",
        "meaning": "general name applied to various insects"
    },
    {
        "id": 584,
        "word": "bulb",
        "phonetic": "[bʌlb]",
        "meaning": "rounded part of a cylindrical structure; electric lamp consisting of a glass ball"
    },
    {
        "id": 585,
        "word": "bulk",
        "phonetic": "[bʌlk]",
        "meaning": "majority; main part; volume; mass"
    },
    {
        "id": 586,
        "word": "bulky",
        "phonetic": "[ˈbʌlki]",
        "meaning": "of large size for its weight"
    },
    {
        "id": 587,
        "word": "bull",
        "phonetic": "[bʊl]",
        "meaning": "male of any species of cattle; large, strong, and aggressive person; optimist regarding business"
    },
    {
        "id": 589,
        "word": "bulletin",
        "phonetic": "[ˈbʊlətɪn]",
        "meaning": "brief statement of facts; any public notice or announcement; a periodical publication"
    },
    {
        "id": 590,
        "word": "bullion",
        "phonetic": "[ˈbʊliən]",
        "meaning": "gold and silver in the form of bars"
    },
    {
        "id": 591,
        "word": "bump",
        "phonetic": "[bʌmp]",
        "meaning": "impact as from a collision; lump on the body caused by a blow"
    },
    {
        "id": 592,
        "word": "bunch",
        "phonetic": "[bʌnʧ]",
        "meaning": "clump; cluster; gathering"
    },
    {
        "id": 593,
        "word": "bundle",
        "phonetic": "[ˈbʌndᵊl]",
        "meaning": "packet; a package of things tied together; a large sum of money"
    },
    {
        "id": 594,
        "word": "burdensome",
        "phonetic": "[ˈbɜːdnsəm]",
        "meaning": "not easily borne; wearing; causing uneasiness or fatigue"
    },
    {
        "id": 595,
        "word": "bureaucracy",
        "phonetic": "[bjʊəˈrɒkrəsi]",
        "meaning": "over-regulated administrative system"
    },
    {
        "id": 596,
        "word": "burial",
        "phonetic": "[ˈbɛriəl]",
        "meaning": "grave or tomb; ritual placing of a corpse in a grave; concealing something under the ground"
    },
    {
        "id": 597,
        "word": "bush",
        "phonetic": "[bʊʃ]",
        "meaning": "place abounding in trees or shrubs; wild forest"
    },
    {
        "id": 598,
        "word": "business",
        "phonetic": "[ˈbɪznɪs]",
        "meaning": "rightful concern or responsibility; occupation, work, or trade in which a person is engaged;"
    },
    {
        "id": 600,
        "word": "butcher",
        "phonetic": "[ˈbʊʧə]",
        "meaning": "one whose job is to kill animals for food; one who kills in large numbers, or with unusual"
    },
    {
        "id": 602,
        "word": "butter",
        "phonetic": "[ˈbʌtə]",
        "meaning": "oily, unctuous substance obtained from cream or milk by churning"
    },
    {
        "id": 603,
        "word": "butterfly",
        "phonetic": "[ˈbʌtəflaɪ]",
        "meaning": "insect typically having a slender body with broad colorful wings"
    },
    {
        "id": 604,
        "word": "buzz",
        "phonetic": "[bʌz]",
        "meaning": "confusion of activity and gossip; sound of rapid vibration"
    },
    {
        "id": 605,
        "word": "bygone",
        "phonetic": "[ˈbaɪɡɒn]",
        "meaning": "past; gone by"
    },
    {
        "id": 606,
        "word": "bypass",
        "phonetic": "[ˈbaɪpɑːs]",
        "meaning": "channel used to conduct gas or liquid around another pipe or a fixture; conductor having low"
    },
    {
        "id": 608,
        "word": "by-product",
        "phonetic": "[ˈbaɪˌprɒdʌkt]",
        "meaning": "product made during the manufacture of something else "
    },
    {
        "id": 613,
        "word": "cab",
        "phonetic": "[kæb]",
        "meaning": "taxi; one-horse vehicle for public hire"
    },
    {
        "id": 614,
        "word": "cabin",
        "phonetic": "[ˈkæbɪn]",
        "meaning": "small room on a ship or boat where people sleep"
    },
    {
        "id": 615,
        "word": "cabinet",
        "phonetic": "[ˈkæbɪnət]",
        "meaning": "group of persons appointed by a head of state or a prime minister; hut; cottage; small house;"
    },
    {
        "id": 617,
        "word": "cable",
        "phonetic": "[ˈkeɪbᵊl]",
        "meaning": "very strong thick rope made of twisted steel or metal wire"
    },
    {
        "id": 618,
        "word": "cafe",
        "phonetic": "[ˈkæfeɪ]",
        "meaning": "coffee house; restaurant where coffee and liquors are served"
    },
    {
        "id": 619,
        "word": "cafeteria",
        "phonetic": "[ˌkæfəˈtɪəriə]",
        "meaning": "restaurant where you serve yourself and pay a cashier"
    },
    {
        "id": 620,
        "word": "calculate",
        "phonetic": "[ˈkælkjəleɪt]",
        "meaning": "compute; determine; estimate"
    },
    {
        "id": 621,
        "word": "calculation",
        "phonetic": "[ˌkælkjəˈleɪʃᵊn]",
        "meaning": "planning something carefully and intentionally"
    },
    {
        "id": 622,
        "word": "calendar",
        "phonetic": "[ˈkæləndə]",
        "meaning": "orderly arrangement as years, months, weeks, and days; a table showing months, weeks,"
    },
    {
        "id": 624,
        "word": "calm",
        "phonetic": "[kɑːm]",
        "meaning": "freedom from motion, agitation, or disturbance; tranquility; stillness; quiet; serenity"
    },
    {
        "id": 625,
        "word": "calorie",
        "phonetic": "[ˈkælᵊri]",
        "meaning": "unit of heat; unit of heat equal to the amount of heat required to raise the temperature of 1"
    },
    {
        "id": 627,
        "word": "campaign",
        "phonetic": "[kæmˈpeɪn]",
        "meaning": "battle ;a series of actions advancing a principle or tending toward a particular end"
    },
    {
        "id": 628,
        "word": "campus",
        "phonetic": "[ˈkæmpəs]",
        "meaning": "field where the buildings of a university are situated"
    },
    {
        "id": 629,
        "word": "canal",
        "phonetic": "[kəˈnæl]",
        "meaning": "artificial channel filled with water; tube or duct"
    },
    {
        "id": 630,
        "word": "canary",
        "phonetic": "[kəˈneəri]",
        "meaning": "pale yellowish color; wine made in the Canary Islands; canary bird; quick and lively dance"
    },
    {
        "id": 631,
        "word": "cancel",
        "phonetic": "[ˈkænsᵊl]",
        "meaning": "revoke; call off; omit or delete"
    },
    {
        "id": 632,
        "word": "cancellation",
        "phonetic": "[ˌkænsᵊlˈeɪʃᵊn]",
        "meaning": "act of cancelling; calling off some arrangement"
    },
    {
        "id": 633,
        "word": "candid",
        "phonetic": "[ˈkændɪd]",
        "meaning": "straightforward; frank; free from prejudice; impartial"
    },
    {
        "id": 634,
        "word": "candidate",
        "phonetic": "[ˈkændɪˌdeɪt]",
        "meaning": "person who is considered for something; person who seeks or is nominated for an office,"
    },
    {
        "id": 636,
        "word": "cane",
        "phonetic": "[keɪn]",
        "meaning": "any plant with long, hard, elastic stems; walking stick"
    },
    {
        "id": 637,
        "word": "cannon",
        "phonetic": "[ˈkænən]",
        "meaning": "great gun; firearm for discharging heavy shot with great force"
    },
    {
        "id": 638,
        "word": "canon",
        "phonetic": "[ˈkænən]",
        "meaning": "law or rule; decision, regulation, code, or constitution made by ecclesiastical authority; books"
    },
    {
        "id": 640,
        "word": "canteen",
        "phonetic": "[kænˈtiːn]",
        "meaning": "vessel used by soldiers for carrying water, liquor, or other drink; snack bar or small"
    },
    {
        "id": 642,
        "word": "canvas",
        "phonetic": "[ˈkænvəs]",
        "meaning": "heavy closely woven fabric; background against which events unfold, as in a historical"
    },
    {
        "id": 644,
        "word": "canvass",
        "phonetic": "[ˈkænvəs]",
        "meaning": "determine votes; examine carefully or discuss thoroughly; scrutinize"
    },
    {
        "id": 645,
        "word": "capability",
        "phonetic": "[ˌkeɪpəˈbɪləti]",
        "meaning": "quality of being capable; capacity; skill"
    },
    {
        "id": 646,
        "word": "capable",
        "phonetic": "[ˈkeɪpəbᵊl]",
        "meaning": "having the ability required for a specific task"
    },
    {
        "id": 647,
        "word": "capacity",
        "phonetic": "[kəˈpæsəti]",
        "meaning": "mental or physical ability; ability to accommodate"
    },
    {
        "id": 648,
        "word": "cape",
        "phonetic": "[keɪp]",
        "meaning": "piece or point of land, extending beyond the adjacent coast into the sea or a lake; sleeveless"
    },
    {
        "id": 650,
        "word": "capital",
        "phonetic": "[ˈkæpɪtᵊl]",
        "meaning": "wealth in form of money or property; assets available for use; city that is the official seat of"
    },
    {
        "id": 652,
        "word": "caption",
        "phonetic": "[ˈkæpʃᵊn]",
        "meaning": "title; chapter heading; text under illustration"
    },
    {
        "id": 653,
        "word": "captive",
        "phonetic": "[ˈkæptɪv]",
        "meaning": "prisoner taken by force; one kept in power of another; one charmed or subdued by beauty,"
    },
    {
        "id": 655,
        "word": "capture",
        "phonetic": "[ˈkæpʧə]",
        "meaning": "act of seizing by force, or getting possession of by superior power; thing taken by force,"
    },
    {
        "id": 657,
        "word": "card",
        "phonetic": "[kɑːd]",
        "meaning": "flat, rectangular piece of stiff paper, cardboard, or plastic; business card; credit card"
    },
    {
        "id": 658,
        "word": "cardinal",
        "phonetic": "[ˈkɑːdɪnᵊl]",
        "meaning": "chief; serving as an essential component"
    },
    {
        "id": 659,
        "word": "career",
        "phonetic": "[kəˈrɪə]",
        "meaning": "profession or occupation; individual’s work and life roles over their lifespan"
    },
    {
        "id": 660,
        "word": "careful",
        "phonetic": "[ˈkeəfᵊl]",
        "meaning": "full of care; anxious; solicitous; taking care; giving good heed; watchful; cautious"
    },
    {
        "id": 661,
        "word": "careless",
        "phonetic": "[ˈkeələs]",
        "meaning": "negligent; taking insufficient care"
    },
    {
        "id": 662,
        "word": "cargo",
        "phonetic": "[ˈkɑːɡəʊ]",
        "meaning": "freight carried by a ship, an aircraft, or another vehicle"
    },
    {
        "id": 663,
        "word": "carol",
        "phonetic": "[ˈkærᵊl]",
        "meaning": "round dance; a song of joy; song of praise or joy, especially for Christmas"
    },
    {
        "id": 664,
        "word": "carpenter",
        "phonetic": "[ˈkɑːpɪntə]",
        "meaning": "skilled worker who makes, finishes, and repairs wooden objects and structures"
    },
    {
        "id": 665,
        "word": "carrier",
        "phonetic": "[ˈkæriə]",
        "meaning": "one that carries or conveys; messenger"
    },
    {
        "id": 666,
        "word": "carrot",
        "phonetic": "[ˈkærət]",
        "meaning": "root of cultivated varieties of the plant, usually spindle-shaped, and of a reddish yellow color"
    },
    {
        "id": 667,
        "word": "carry",
        "phonetic": "[ˈkæri]",
        "meaning": "convey or transport in any manner from one place to another; hold or support while moving;"
    },
    {
        "id": 669,
        "word": "cart",
        "phonetic": "[kɑːt]",
        "meaning": "common name for various kinds of vehicles; two-wheeled vehicle; light business wagon"
    },
    {
        "id": 670,
        "word": "carton",
        "phonetic": "[ˈkɑːtᵊn]",
        "meaning": "pasteboard for paper boxes; pasteboard box"
    },
    {
        "id": 671,
        "word": "cartoon",
        "phonetic": "[kɑːˈtuːn]",
        "meaning": "design or study drawn of full size to serve as a model for transferring or copying; drawing"
    },
    {
        "id": 673,
        "word": "carve",
        "phonetic": "[kɑːv]",
        "meaning": "cut; sculpt"
    },
    {
        "id": 674,
        "word": "carving",
        "phonetic": "[ˈkɑːvɪŋ]",
        "meaning": "cutting away parts to create a desired shape"
    },
    {
        "id": 675,
        "word": "cash",
        "phonetic": "[kæʃ]",
        "meaning": "money paid at the time of purchase; money in the form of bills or coins; currency"
    },
    {
        "id": 676,
        "word": "cashier",
        "phonetic": "[kæˈʃɪə]",
        "meaning": "one who has charge of money; cash keeper"
    },
    {
        "id": 677,
        "word": "cassette",
        "phonetic": "[kəˈsɛt]",
        "meaning": "container that holds a magnetic tape used for recording or playing sound or video"
    },
    {
        "id": 678,
        "word": "cast",
        "phonetic": "[kɑːst]",
        "meaning": "assign the roles of; choose at random"
    },
    {
        "id": 679,
        "word": "casual",
        "phonetic": "[ˈkæʒjuəl]",
        "meaning": "informal; purposeless; occurring by chance"
    },
    {
        "id": 680,
        "word": "casualty",
        "phonetic": "[ˈkæʒjuəlti]",
        "meaning": "serious or fatal accident; someone injured or killed in an accident"
    },
    {
        "id": 681,
        "word": "catalyst",
        "phonetic": "[ˈkætᵊlɪst]",
        "meaning": "agent which brings about chemical change while it remains unaffected and unchanged"
    },
    {
        "id": 682,
        "word": "catastrophe",
        "phonetic": "[kəˈtæstrəfi]",
        "meaning": "calamity; disaster; state of extreme ruin and misfortune"
    },
    {
        "id": 683,
        "word": "catch",
        "phonetic": "[kæʧ]",
        "meaning": "capture or seize, especially after a chase; take by or as if by trapping; reach just in time"
    },
    {
        "id": 684,
        "word": "category",
        "phonetic": "[ˈkætəɡᵊri]",
        "meaning": "group; class; collection of things sharing a common attribute"
    },
    {
        "id": 685,
        "word": "cater",
        "phonetic": "[ˈkeɪtə]",
        "meaning": "supply what is needed or desired; provide food professionally for special occasion"
    },
    {
        "id": 686,
        "word": "cathedral",
        "phonetic": "[kəˈθiːdrəl]",
        "meaning": "church; temple"
    },
    {
        "id": 687,
        "word": "catholic",
        "phonetic": "[ˈkæθᵊlɪk]",
        "meaning": "broadly sympathetic; universal; related to Roman Catholic Church"
    },
    {
        "id": 688,
        "word": "cause",
        "phonetic": "[kɔːz]",
        "meaning": "something produces a result; basis for an action or response; a reason"
    },
    {
        "id": 689,
        "word": "caution",
        "phonetic": "[ˈkɔːʃᵊn]",
        "meaning": "care; being attentive to possible danger"
    },
    {
        "id": 690,
        "word": "cautious",
        "phonetic": "[ˈkɔːʃəs]",
        "meaning": "conservative; careful"
    },
    {
        "id": 691,
        "word": "cavalry",
        "phonetic": "[ˈkævᵊlri]",
        "meaning": "part of military force which serves on horseback"
    },
    {
        "id": 692,
        "word": "cavern",
        "phonetic": "[ˈkævᵊn]",
        "meaning": "cave; large underground chamber, as in a cave"
    },
    {
        "id": 693,
        "word": "cavity",
        "phonetic": "[ˈkævəti]",
        "meaning": "hole; cavern; hollow area within the body"
    },
    {
        "id": 694,
        "word": "cease",
        "phonetic": "[siːs]",
        "meaning": "stop; terminate; put an end to; discontinue"
    },
    {
        "id": 695,
        "word": "celebrate",
        "phonetic": "[ˈsɛləbreɪt]",
        "meaning": "praise; assign great social importance to"
    },
    {
        "id": 696,
        "word": "cell",
        "phonetic": "[sɛl]",
        "meaning": "any small compartment"
    },
    {
        "id": 697,
        "word": "cellar",
        "phonetic": "[ˈsɛlə]",
        "meaning": "room or rooms under a building, and usually below the surface of the ground"
    },
    {
        "id": 698,
        "word": "cement",
        "phonetic": "[sɪˈmɛnt]",
        "meaning": "any substances used for making bodies adhere to each other; bond of union"
    },
    {
        "id": 699,
        "word": "cemetery",
        "phonetic": "[ˈsɛmətri]",
        "meaning": "place or ground set apart for the burial of the dead; graveyard"
    },
    {
        "id": 700,
        "word": "censor",
        "phonetic": "[ˈsɛnsə]",
        "meaning": "overseer of morals; official responsible for removal of objectionable or sensitive content"
    },
    {
        "id": 701,
        "word": "centigrade",
        "phonetic": "[ˈsɛntɪɡreɪd]",
        "meaning": "measure of temperature, used widely in Europe"
    },
    {
        "id": 702,
        "word": "cereal",
        "phonetic": "[ˈsɪəriəl]",
        "meaning": "grass such as wheat, oats, or corn, the starchy grains of which are used as food."
    },
    {
        "id": 703,
        "word": "ceremonial",
        "phonetic": "[ˌsɛrɪˈməʊniəl]",
        "meaning": "ritual; ceremony or rite"
    },
    {
        "id": 704,
        "word": "ceremony",
        "phonetic": "[ˈsɛrɪməni]",
        "meaning": "formal act or set of acts performed as prescribed by ritual or custom"
    },
    {
        "id": 705,
        "word": "certainty",
        "phonetic": "[ˈsɜːtᵊnti]",
        "meaning": "quality or condition of being certain; fact or truth unquestionable established; clearness"
    },
    {
        "id": 706,
        "word": "certificate",
        "phonetic": "[səˈtɪfɪkət]",
        "meaning": "document attesting to the truth of certain stated facts; document issued to a person"
    },
    {
        "id": 708,
        "word": "certify",
        "phonetic": "[ˈsɜːtɪfaɪ]",
        "meaning": "give certain information to; assure; make certain"
    },
    {
        "id": 709,
        "word": "chalk",
        "phonetic": "[ʧɔːk]",
        "meaning": "soft, earthy substance, of a white, grayish, or yellowish white color, used as a drawing"
    },
    {
        "id": 711,
        "word": "challenge",
        "phonetic": "[ˈʧælɪnʤ]",
        "meaning": "assert a right; raise a formal objection; take exception to"
    },
    {
        "id": 712,
        "word": "chamber",
        "phonetic": "[ˈʧeɪmbə]",
        "meaning": "cell; compartment; room"
    },
    {
        "id": 713,
        "word": "champion",
        "phonetic": "[ˈʧæmpiən]",
        "meaning": "protect or fight for as first place"
    },
    {
        "id": 714,
        "word": "championship",
        "phonetic": "[ˈʧæmpiənʃɪp]",
        "meaning": "status of being a champion; position or title of a winner"
    },
    {
        "id": 715,
        "word": "channel",
        "phonetic": "[ˈʧænᵊl]",
        "meaning": "passage for water or other fluids to flow through; bed of a stream or river; route of"
    },
    {
        "id": 717,
        "word": "chaos",
        "phonetic": "[ˈkeɪɒs]",
        "meaning": "disorder; condition or place of great disorder or confusion; disorderly mass"
    },
    {
        "id": 718,
        "word": "chap",
        "phonetic": "[ʧæp]",
        "meaning": "crack, as in earth surface; splitting of skin, caused by cold or exposure; one of the jaws or"
    },
    {
        "id": 720,
        "word": "chapter",
        "phonetic": "[ˈʧæptə]",
        "meaning": "division of a book or treatise; assembly of monks; bishop's council; organized branch of"
    },
    {
        "id": 722,
        "word": "character",
        "phonetic": "[ˈkærəktə]",
        "meaning": "part; nature; description of a person's attributes, traits, or abilities"
    },
    {
        "id": 723,
        "word": "characteristic",
        "phonetic": "[ˌkærəktəˈrɪstɪk]",
        "meaning": "feature that helps to identify, tell apart, or describe recognizably; a distinguishing"
    },
    {
        "id": 725,
        "word": "characterize",
        "phonetic": "[ˈkærəktəraɪz]",
        "meaning": "distinguish; be characteristic of; be a distinctive trait or mark of"
    },
    {
        "id": 726,
        "word": "charcoal",
        "phonetic": "[ˈʧɑːkəʊl]",
        "meaning": "a stick of black carbon material used for drawing; a very dark gray color"
    },
    {
        "id": 727,
        "word": "charge",
        "phonetic": "[ʧɑːʤ]",
        "meaning": "set or ask for a certain price; load to capacity; fill; instruct or urge authoritatively; command"
    },
    {
        "id": 728,
        "word": "charity",
        "phonetic": "[ˈʧærəti]",
        "meaning": "activity or gift that benefits the public at large"
    },
    {
        "id": 729,
        "word": "charm",
        "phonetic": "[ʧɑːm]",
        "meaning": "power or quality of pleasing or delighting; attractiveness; item worn for its supposed magical"
    },
    {
        "id": 731,
        "word": "chart",
        "phonetic": "[ʧɑːt]",
        "meaning": "graph; diagram; map showing coastlines, water depths, or other information of use to"
    },
    {
        "id": 733,
        "word": "charter",
        "phonetic": "[ˈʧɑːtə]",
        "meaning": "license; authorize; hold under a lease or rental agreement of goods and services"
    },
    {
        "id": 734,
        "word": "chase",
        "phonetic": "[ʧeɪs]",
        "meaning": "pursue for the purpose of killing or taking; hunt; follow as if to catch"
    },
    {
        "id": 735,
        "word": "chat",
        "phonetic": "[ʧæt]",
        "meaning": "talk without exchanging too much information; informal conversation"
    },
    {
        "id": 736,
        "word": "check",
        "phonetic": "[ʧɛk]",
        "meaning": "stop motion; curb or restrain"
    },
    {
        "id": 737,
        "word": "cheer",
        "phonetic": "[ʧɪə]",
        "meaning": "lightness of spirits or mood; source of joy or happiness; festive food and drink; refreshment"
    },
    {
        "id": 738,
        "word": "cheque",
        "phonetic": "[ʧɛk]",
        "meaning": "written order directing a bank to pay money"
    },
    {
        "id": 739,
        "word": "cherish",
        "phonetic": "[ˈʧɛrɪʃ]",
        "meaning": "harbor; treasure; treat with affection and tenderness; hold dear"
    },
    {
        "id": 740,
        "word": "chew",
        "phonetic": "[ʧuː]",
        "meaning": "bite and grind with the teeth"
    },
    {
        "id": 741,
        "word": "chief",
        "phonetic": "[ʧiːf]",
        "meaning": "highest in office or rank; principal; head"
    },
    {
        "id": 742,
        "word": "chill",
        "phonetic": "[ʧɪl]",
        "meaning": "cool; freeze"
    },
    {
        "id": 743,
        "word": "chilly",
        "phonetic": "[ˈʧɪli]",
        "meaning": "cold"
    },
    {
        "id": 744,
        "word": "chin",
        "phonetic": "[ʧɪn]",
        "meaning": "central forward portion of the lower jaw; bottom of face"
    },
    {
        "id": 745,
        "word": "chip",
        "phonetic": "[ʧɪp]",
        "meaning": "cut small pieces from; diminish or reduce to shape; break or crack"
    },
    {
        "id": 746,
        "word": "choke",
        "phonetic": "[ʧəʊk]",
        "meaning": "breathe with great difficulty, as when experiencing a strong emotion; reduce the air supply"
    },
    {
        "id": 747,
        "word": "chop",
        "phonetic": "[ʧɒp]",
        "meaning": "hew; cut by striking with a heavy sharp tool, such as an ax"
    },
    {
        "id": 748,
        "word": "chorus",
        "phonetic": "[ˈkɔːrəs]",
        "meaning": "any utterance produced simultaneously by a group"
    },
    {
        "id": 749,
        "word": "circle",
        "phonetic": "[ˈsɜːkᵊl]",
        "meaning": "round; something shaped like such a ring; group of people sharing an interest, activity, or"
    },
    {
        "id": 751,
        "word": "circuit",
        "phonetic": "[ˈsɜːkɪt]",
        "meaning": "electrical device that provides a path for electrical current to flow"
    },
    {
        "id": 752,
        "word": "circular",
        "phonetic": "[ˈsɜːkjələ]",
        "meaning": "round; shaped like or nearly like a circle"
    },
    {
        "id": 753,
        "word": "circulate",
        "phonetic": "[ˈsɜːkjəleɪt]",
        "meaning": "move through a space, circuit or system, returning to the starting point"
    },
    {
        "id": 754,
        "word": "circulation",
        "phonetic": "[ˌsɜːkjəˈleɪʃᵊn]",
        "meaning": "spread or transmission of something to a wider group or area"
    },
    {
        "id": 755,
        "word": "circumference",
        "phonetic": "[səˈkʌmfᵊrᵊns]",
        "meaning": "boundary line of a circle, figure, area, or object"
    },
    {
        "id": 756,
        "word": "circumstance",
        "phonetic": "[ˈsɜːkəmstɑːns]",
        "meaning": "situation; condition; detail accompanying or surrounding an event"
    },
    {
        "id": 757,
        "word": "circus",
        "phonetic": "[ˈsɜːkəs]",
        "meaning": "public entertainment of performances by acrobats, clowns, and trained animals"
    },
    {
        "id": 758,
        "word": "cite",
        "phonetic": "[saɪt]",
        "meaning": "quote; adduce as an instance"
    },
    {
        "id": 759,
        "word": "citizenship",
        "phonetic": "[ˈsɪtɪzᵊnʃɪp]",
        "meaning": "status of a citizen with rights and duties"
    },
    {
        "id": 760,
        "word": "civil",
        "phonetic": "[ˈsɪvᵊl]",
        "meaning": "having to do with citizens or the state; courteous and polite"
    },
    {
        "id": 761,
        "word": "civilization",
        "phonetic": "[ˌsɪvᵊlaɪˈzeɪʃᵊn]",
        "meaning": "culture"
    },
    {
        "id": 762,
        "word": "claim",
        "phonetic": "[kleɪm]",
        "meaning": "demand for something as rightful or due"
    },
    {
        "id": 763,
        "word": "clamp",
        "phonetic": "[klæmp]",
        "meaning": "any of various devices used to join, grip, support, or compress mechanical or structural parts"
    },
    {
        "id": 764,
        "word": "clap",
        "phonetic": "[klæp]",
        "meaning": "applaud; slap; strike together with a sharp sound, as one hard surface on another"
    },
    {
        "id": 765,
        "word": "clarification",
        "phonetic": "[ˌklærɪfɪˈkeɪʃᵊn]",
        "meaning": "process of making things clearer or easier to understand"
    },
    {
        "id": 766,
        "word": "clarify",
        "phonetic": "[ˈklærɪfaɪ]",
        "meaning": "make clear and comprehensible; elucidate"
    },
    {
        "id": 767,
        "word": "clash",
        "phonetic": "[klæʃ]",
        "meaning": "make noise by striking against something; dash noisily together; meet in opposition"
    },
    {
        "id": 768,
        "word": "clasp",
        "phonetic": "[klɑːsp]",
        "meaning": "fastening device; firm grip"
    },
    {
        "id": 769,
        "word": "classic",
        "phonetic": "[ˈklæsɪk]",
        "meaning": "work of acknowledged excellence and authority, or its author; creation of the highest"
    },
    {
        "id": 771,
        "word": "classical",
        "phonetic": "[ˈklæsɪkᵊl]",
        "meaning": "of recognized authority or excellence"
    },
    {
        "id": 772,
        "word": "classification",
        "phonetic": "[ˌklæsɪfɪˈkeɪʃᵊn]",
        "meaning": "assigning to a class or category"
    },
    {
        "id": 773,
        "word": "classify",
        "phonetic": "[ˈklæsɪfaɪ]",
        "meaning": "declare unavailable, as for security reasons; arrange or order by classes or categories"
    },
    {
        "id": 774,
        "word": "clause",
        "phonetic": "[klɔːz]",
        "meaning": "sentence; phrase; distinct article, stipulation, or provision in a document"
    },
    {
        "id": 775,
        "word": "clay",
        "phonetic": "[kleɪ]",
        "meaning": "very fine-grained soil that is plastic when moist but hard when fired"
    },
    {
        "id": 776,
        "word": "clear",
        "phonetic": "[klɪə]",
        "meaning": "out of the way; completely away"
    },
    {
        "id": 777,
        "word": "clearance",
        "phonetic": "[ˈklɪərᵊns]",
        "meaning": "act of clearing; space cleared; permission to proceed or trust"
    },
    {
        "id": 778,
        "word": "clench",
        "phonetic": "[klɛnʧ]",
        "meaning": "close tightly; grasp or grip tightly; fasten with a clinch"
    },
    {
        "id": 779,
        "word": "client",
        "phonetic": "[ˈklaɪᵊnt]",
        "meaning": "someone who pays to get goods or services"
    },
    {
        "id": 780,
        "word": "clientele",
        "phonetic": "[ˌkliːənˈtɛl]",
        "meaning": "clients of professional person; body of customers or patrons"
    },
    {
        "id": 781,
        "word": "climate",
        "phonetic": "[ˈklaɪmət]",
        "meaning": "weather condition; atmosphere; environment"
    },
    {
        "id": 782,
        "word": "climax",
        "phonetic": "[ˈklaɪmæks]",
        "meaning": "upward movement; steady increase; the highest point; the greatest degree"
    },
    {
        "id": 783,
        "word": "cling",
        "phonetic": "[klɪŋ]",
        "meaning": "hold fast or adhere to something; stick together and resist separation; remain emotionally"
    },
    {
        "id": 784,
        "word": "clinic",
        "phonetic": "[ˈklɪnɪk]",
        "meaning": "healthcare facility for outpatient care"
    },
    {
        "id": 785,
        "word": "clip",
        "phonetic": "[klɪp]",
        "meaning": "small section of filmed or filed material"
    },
    {
        "id": 786,
        "word": "clockwise",
        "phonetic": "[ˈklɒkwaɪz]",
        "meaning": "in the direction that the hands of a clock move"
    },
    {
        "id": 787,
        "word": "closet",
        "phonetic": "[ˈklɒzɪt]",
        "meaning": "small room or apartment; room for privacy"
    },
    {
        "id": 788,
        "word": "clue",
        "phonetic": "[kluː]",
        "meaning": "a ball of thread or cord; thread; something guides or directs anything of a doubtful or intricate"
    },
    {
        "id": 790,
        "word": "clumsy",
        "phonetic": "[ˈklʌmzi]",
        "meaning": "awkward; showing lack of skill or aptitude"
    },
    {
        "id": 791,
        "word": "cluster",
        "phonetic": "[ˈklʌstə]",
        "meaning": "group; bunch; group of the same or similar elements gathered or occurring closely"
    },
    {
        "id": 792,
        "word": "clutch",
        "phonetic": "[klʌʧ]",
        "meaning": "grasp and hold tightly; attempt to grasp or seize"
    },
    {
        "id": 793,
        "word": "coach",
        "phonetic": "[kəʊʧ]",
        "meaning": "tutor; teacher; a vehicle carrying many passengers"
    },
    {
        "id": 794,
        "word": "coarse",
        "phonetic": "[kɔːs]",
        "meaning": "rough; harsh; of low, common, or inferior quality"
    },
    {
        "id": 795,
        "word": "code",
        "phonetic": "[kəʊd]",
        "meaning": "body of law; system of rules or regulations relating to one subject; system of symbols, letters,"
    },
    {
        "id": 797,
        "word": "codify",
        "phonetic": "[ˈkɒdɪfaɪ]",
        "meaning": "arrange laws, rules as a code; classify; arrange or systematize"
    },
    {
        "id": 798,
        "word": "coherence",
        "phonetic": "[kəʊˈhɪərᵊns]",
        "meaning": "logical and orderly and consistent relation of parts; state of cohering or sticking together"
    },
    {
        "id": 799,
        "word": "coherent",
        "phonetic": "[kəʊˈhɪərᵊnt]",
        "meaning": "adhesive; cohesive; sticking together ; logical; sound; capable of thinking and expressing"
    },
    {
        "id": 801,
        "word": "cohesion",
        "phonetic": "[kəʊˈhiːʒᵊn]",
        "meaning": "tendency to keep together"
    },
    {
        "id": 802,
        "word": "cohesive",
        "phonetic": "[kəʊˈhiːsɪv]",
        "meaning": "cohering or tending to cohere; well integrated"
    },
    {
        "id": 803,
        "word": "coil",
        "phonetic": "[kɔɪl]",
        "meaning": "a series of connected spirals or concentric rings formed by gathering or winding; spiral pipe or"
    },
    {
        "id": 805,
        "word": "coin",
        "phonetic": "[kɔɪn]",
        "meaning": "make pieces of money from metal; invent or fabricate"
    },
    {
        "id": 806,
        "word": "coinage",
        "phonetic": "[ˈkɔɪnɪʤ]",
        "meaning": "coins collectively"
    },
    {
        "id": 807,
        "word": "coincide",
        "phonetic": "[ˌkəʊɪnˈsaɪd]",
        "meaning": "occur at the same time as; correspond"
    },
    {
        "id": 808,
        "word": "coincidence",
        "phonetic": "[kəʊˈɪnsɪdᵊns]",
        "meaning": "two or more things occurring at the same time by chance"
    },
    {
        "id": 809,
        "word": "coincident",
        "phonetic": "[kəʊˈɪnsɪdᵊnt]",
        "meaning": "concerning; simultaneous"
    },
    {
        "id": 810,
        "word": "collaborate",
        "phonetic": "[kəˈlæbəreɪt]",
        "meaning": "work together, especially in a joint intellectual effort"
    },
    {
        "id": 811,
        "word": "collaboration",
        "phonetic": "[kəˌlæbəˈreɪʃᵊn]",
        "meaning": "act of working together; act of cooperating with an enemy, especially it occupying"
    },
    {
        "id": 813,
        "word": "collapse",
        "phonetic": "[kəˈlæps]",
        "meaning": "breakdown; failure"
    },
    {
        "id": 814,
        "word": "colleague",
        "phonetic": "[ˈkɒliːɡ]",
        "meaning": "fellow worker; associate; co-worker"
    },
    {
        "id": 815,
        "word": "collective",
        "phonetic": "[kəˈlɛktɪv]",
        "meaning": "common; assembled into or viewed as a whole"
    },
    {
        "id": 816,
        "word": "collide",
        "phonetic": "[kəˈlaɪd]",
        "meaning": "bump; hit; conflict"
    },
    {
        "id": 817,
        "word": "collision",
        "phonetic": "[kəˈlɪʒᵊn]",
        "meaning": "crash; conflict of opposed ideas or attitudes or goals"
    },
    {
        "id": 818,
        "word": "colonel",
        "phonetic": "[ˈkɜːnᵊl]",
        "meaning": "a commissioned military officer"
    },
    {
        "id": 819,
        "word": "colonial",
        "phonetic": "[kəˈləʊniəl]",
        "meaning": "of or relating to or characteristic of or inhabiting a colony"
    },
    {
        "id": 820,
        "word": "colony",
        "phonetic": "[ˈkɒləni]",
        "meaning": "region politically controlled by a distant country; a dependency; a community of social"
    },
    {
        "id": 822,
        "word": "column",
        "phonetic": "[ˈkɒləm]",
        "meaning": "pillar; cylindrical or polygonal support for roof; anything resembling, in form or position;"
    },
    {
        "id": 824,
        "word": "combat",
        "phonetic": "[ˈkɒmbæt]",
        "meaning": "struggle as with an opposing force; fight with"
    },
    {
        "id": 825,
        "word": "combination",
        "phonetic": "[ˌkɒmbɪˈneɪʃᵊn]",
        "meaning": "blend; union"
    },
    {
        "id": 826,
        "word": "combine",
        "phonetic": "[kəmˈbaɪn]",
        "meaning": "blend; fuse; merge"
    },
    {
        "id": 827,
        "word": "comedy",
        "phonetic": "[ˈkɒmədi]",
        "meaning": "light and humorous drama with a happy ending"
    },
    {
        "id": 828,
        "word": "comic",
        "phonetic": "[ˈkɒmɪk]",
        "meaning": "arousing or provoking laughter; ridiculous; amusing; humorous"
    },
    {
        "id": 829,
        "word": "commander",
        "phonetic": "[kəˈmɑːndə]",
        "meaning": "chief; leader"
    },
    {
        "id": 830,
        "word": "commandment",
        "phonetic": "[kəˈmɑːndmənt]",
        "meaning": "order or injunction given by authority; command; charge; act of commanding;"
    },
    {
        "id": 832,
        "word": "commemorate",
        "phonetic": "[kəˈmɛməreɪt]",
        "meaning": "serve as a memorial to; honor the memory of with a ceremony"
    },
    {
        "id": 833,
        "word": "commence",
        "phonetic": "[kəˈmɛns]",
        "meaning": "have a beginning or origin; originate; start; begin"
    },
    {
        "id": 834,
        "word": "commend",
        "phonetic": "[kəˈmɛnd]",
        "meaning": "commit, intrust, or give in charge for care or preservation; recommend as worthy of"
    },
    {
        "id": 836,
        "word": "comment",
        "phonetic": "[ˈkɒmɛnt]",
        "meaning": "express an opinion; remark"
    },
    {
        "id": 837,
        "word": "commerce",
        "phonetic": "[ˈkɒmɜːs]",
        "meaning": "trade; business; intellectual exchange or social interaction"
    },
    {
        "id": 838,
        "word": "commercial",
        "phonetic": "[kəˈmɜːʃᵊl]",
        "meaning": "money-making; involved in work that is intended for the mass market"
    },
    {
        "id": 839,
        "word": "commission",
        "phonetic": "[kəˈmɪʃᵊn]",
        "meaning": "fee for services; group of people appointed to find out about something; authorize"
    },
    {
        "id": 840,
        "word": "commit",
        "phonetic": "[kəˈmɪt]",
        "meaning": "do something that cannot be changed; cause to be admitted"
    },
    {
        "id": 841,
        "word": "commitment",
        "phonetic": "[kəˈmɪtmənt]",
        "meaning": "pledge, undertaking; act of binding yourself to a course of action"
    },
    {
        "id": 842,
        "word": "committee",
        "phonetic": "[kəˈmɪti]",
        "meaning": "special group delegated to consider some matter"
    },
    {
        "id": 843,
        "word": "commodity",
        "phonetic": "[kəˈmɒdəti]",
        "meaning": "goods; article of trade; advantage; benefit."
    },
    {
        "id": 844,
        "word": "commonplace",
        "phonetic": "[ˈkɒmənpleɪs]",
        "meaning": "ordinary; having no remarkable features"
    },
    {
        "id": 845,
        "word": "commonsense",
        "phonetic": "[commonsense]",
        "meaning": "exhibiting native good judgment"
    },
    {
        "id": 846,
        "word": "communicate",
        "phonetic": "[kəˈmjuːnɪkeɪt]",
        "meaning": "send information about; make known; impart; reveal clearly"
    },
    {
        "id": 847,
        "word": "communication",
        "phonetic": "[kəˌmjuːnɪˈkeɪʃᵊn]",
        "meaning": "activity of communicating; activity of conveying information"
    },
    {
        "id": 848,
        "word": "community",
        "phonetic": "[kəˈmjuːnəti]",
        "meaning": "society; a group of people living in the same locality and under the same government"
    },
    {
        "id": 849,
        "word": "compact",
        "phonetic": "[ˈkɒmpækt]",
        "meaning": "closely and firmly united or packed together; briefly giving gist of something"
    },
    {
        "id": 850,
        "word": "companion",
        "phonetic": "[kəmˈpænjən]",
        "meaning": "associate; partner"
    },
    {
        "id": 851,
        "word": "company",
        "phonetic": "[ˈkʌmpəni]",
        "meaning": "team; guard team; group of persons; business enterprise"
    },
    {
        "id": 852,
        "word": "comparable",
        "phonetic": "[ˈkɒmpᵊrəbᵊl]",
        "meaning": "similar or equivalent; being of equal regard; worthy to be ranked with"
    },
    {
        "id": 853,
        "word": "comparative",
        "phonetic": "[kəmˈpærətɪv]",
        "meaning": "relative; based on, or involving comparison"
    },
    {
        "id": 854,
        "word": "comparatively",
        "phonetic": "[kəmˈpærətɪvli]",
        "meaning": "relatively; in comparison"
    },
    {
        "id": 855,
        "word": "compare",
        "phonetic": "[kəmˈpeə]",
        "meaning": "examine and note the similarities or differences of"
    },
    {
        "id": 856,
        "word": "compass",
        "phonetic": "[ˈkʌmpəs]",
        "meaning": "go about or entirely round; make the circuit of; enclose on all sides; surround"
    },
    {
        "id": 857,
        "word": "compatible",
        "phonetic": "[kəmˈpætəbᵊl]",
        "meaning": "harmonious; having similar disposition and tastes"
    },
    {
        "id": 858,
        "word": "compel",
        "phonetic": "[kəmˈpɛl]",
        "meaning": "force; coerce; necessitate or pressure by force"
    },
    {
        "id": 859,
        "word": "compensate",
        "phonetic": "[ˈkɒmpənseɪt]",
        "meaning": "make amends for; reimburse"
    },
    {
        "id": 860,
        "word": "compensation",
        "phonetic": "[ˌkɒmpɛnˈseɪʃᵊn]",
        "meaning": "something given or received as payment as for a service or loss or injury"
    },
    {
        "id": 861,
        "word": "compete",
        "phonetic": "[kəmˈpiːt]",
        "meaning": "contest; fight"
    },
    {
        "id": 862,
        "word": "competent",
        "phonetic": "[ˈkɒmpɪtᵊnt]",
        "meaning": "capable; adept"
    },
    {
        "id": 863,
        "word": "competition",
        "phonetic": "[ˌkɒmpəˈtɪʃᵊn]",
        "meaning": "struggle; rivalry; act of competing as for profit or a prize"
    },
    {
        "id": 864,
        "word": "competitive",
        "phonetic": "[kəmˈpɛtɪtɪv]",
        "meaning": "of or pertaining to competition; producing competition; showing a fighting disposition"
    },
    {
        "id": 865,
        "word": "competitiveness",
        "phonetic": "[kəmˈpɛtɪtɪvnəs]",
        "meaning": "an aggressive willingness to compete"
    },
    {
        "id": 866,
        "word": "competitor",
        "phonetic": "[kəmˈpɛtɪtə]",
        "meaning": "one who seeks what another seeks, or claims what another claims; one who competes;"
    },
    {
        "id": 868,
        "word": "compile",
        "phonetic": "[kəmˈpaɪl]",
        "meaning": "put together or compose from materials gathered from several sources"
    },
    {
        "id": 869,
        "word": "complain",
        "phonetic": "[kəmˈpleɪn]",
        "meaning": "make a formal accusation; bring a formal charge"
    },
    {
        "id": 870,
        "word": "complaint",
        "phonetic": "[kəmˈpleɪnt]",
        "meaning": "expression of pain, dissatisfaction, or resentment; criticism"
    },
    {
        "id": 871,
        "word": "complement",
        "phonetic": "[ˈkɒmplɪmɛnt]",
        "meaning": "complete; consummate; make perfect"
    },
    {
        "id": 872,
        "word": "complex",
        "phonetic": "[ˈkɒmplɛks]",
        "meaning": "complicated in structure; a whole structure, as a building, made up of interconnected or"
    },
    {
        "id": 874,
        "word": "complexity",
        "phonetic": "[kəmˈplɛksəti]",
        "meaning": "complication"
    },
    {
        "id": 875,
        "word": "compliance",
        "phonetic": "[kəmˈplaɪəns]",
        "meaning": "readiness to yield; happy friendly agreement"
    },
    {
        "id": 876,
        "word": "complicated",
        "phonetic": "[ˈkɒmplɪkeɪtɪd]",
        "meaning": "difficult to analyze or understand"
    },
    {
        "id": 877,
        "word": "compliment",
        "phonetic": "[ˈkɒmplɪmənt]",
        "meaning": "praise; commendation; say something to someone that expresses praise"
    },
    {
        "id": 878,
        "word": "complimentary",
        "phonetic": "[ˌkɒmplɪˈmɛntᵊri]",
        "meaning": "expressing of praise, admiration, or congratulation; given free to repay a favor or as"
    },
    {
        "id": 880,
        "word": "comply",
        "phonetic": "[kəmˈplaɪ]",
        "meaning": "yield assent; accord; agree, or acquiesce; adapt one's self; fulfill; accomplish"
    },
    {
        "id": 881,
        "word": "component",
        "phonetic": "[kəmˈpəʊnənt]",
        "meaning": "element; ingredient; abstract part of something"
    },
    {
        "id": 882,
        "word": "compose",
        "phonetic": "[kəmˈpəʊz]",
        "meaning": "write; create; make or create by putting together parts or elements"
    },
    {
        "id": 883,
        "word": "composite",
        "phonetic": "[ˈkɒmpəzɪt]",
        "meaning": "made up of distinct parts or elements; compounded"
    },
    {
        "id": 884,
        "word": "composition",
        "phonetic": "[ˌkɒmpəˈzɪʃᵊn]",
        "meaning": "makeup; constitution; writing; essay"
    },
    {
        "id": 885,
        "word": "compound",
        "phonetic": "[ˈkɒmpaʊnd]",
        "meaning": "combine; mix; constitute; pay interest; increase"
    },
    {
        "id": 886,
        "word": "comprehend",
        "phonetic": "[ˌkɒmprɪˈhɛnd]",
        "meaning": "take in the meaning, nature, or importance of; grasp"
    },
    {
        "id": 887,
        "word": "comprehension",
        "phonetic": "[ˌkɒmprɪˈhɛnʃᵊn]",
        "meaning": "grasp; ability to understand"
    },
    {
        "id": 888,
        "word": "comprehensive",
        "phonetic": "[ˌkɒmprɪˈhɛnsɪv]",
        "meaning": "thorough; including all or everything; broad in scope"
    },
    {
        "id": 889,
        "word": "compress",
        "phonetic": "[kəmˈprɛs]",
        "meaning": "close; squeeze or press together; contract"
    },
    {
        "id": 890,
        "word": "compression",
        "phonetic": "[kəmˈprɛʃᵊn]",
        "meaning": "applying pressure; encoding information while reducing the bandwidth or bits required"
    },
    {
        "id": 891,
        "word": "comprise",
        "phonetic": "[kəmˈpraɪz]",
        "meaning": "include; consist of; be composed of"
    },
    {
        "id": 892,
        "word": "compromise",
        "phonetic": "[ˈkɒmprəmaɪz]",
        "meaning": "adjust or settle by making mutual concessions; endanger the interests or reputation of"
    },
    {
        "id": 893,
        "word": "compulsory",
        "phonetic": "[kəmˈpʌlsᵊri]",
        "meaning": "mandatory; obligatory; required by rule"
    },
    {
        "id": 894,
        "word": "computation",
        "phonetic": "[ˌkɒmpjəˈteɪʃᵊn]",
        "meaning": "calculation"
    },
    {
        "id": 895,
        "word": "compute",
        "phonetic": "[kəmˈpjuːt]",
        "meaning": "reckon; make mathematical calculation"
    },
    {
        "id": 896,
        "word": "conceal",
        "phonetic": "[kənˈsiːl]",
        "meaning": "keep from being seen, found, observed, or discovered; secrete"
    },
    {
        "id": 897,
        "word": "concede",
        "phonetic": "[kənˈsiːd]",
        "meaning": "admit; yield; give up physical control of another"
    },
    {
        "id": 898,
        "word": "conceit",
        "phonetic": "[kənˈsiːt]",
        "meaning": "overly high self-esteem; feelings of excessive pride"
    },
    {
        "id": 899,
        "word": "conceited",
        "phonetic": "[kənˈsiːtɪd]",
        "meaning": "endowed with fancy or imagination; entertaining a flattering opinion of one's self; vain"
    },
    {
        "id": 900,
        "word": "conceive",
        "phonetic": "[kənˈsiːv]",
        "meaning": "form or develop in the mind; devise; become pregnant with; begin or originate in a specific "
    },
    {
        "id": 902,
        "word": "concentrate",
        "phonetic": "[ˈkɒnsᵊntreɪt]",
        "meaning": "bring to or direct toward a common center; unite more closely; gather into one body"
    },
    {
        "id": 903,
        "word": "concept",
        "phonetic": "[ˈkɒnsɛpt]",
        "meaning": "something formed in the mind; thought or notion"
    },
    {
        "id": 904,
        "word": "conception",
        "phonetic": "[kənˈsɛpʃᵊn]",
        "meaning": "beginning; forming of an idea; act of conceiving"
    },
    {
        "id": 905,
        "word": "concern",
        "phonetic": "[kənˈsɜːn]",
        "meaning": "interest in any person or thing; regard; solicitude; anxiety"
    },
    {
        "id": 906,
        "word": "concert",
        "phonetic": "[ˈkɒnsət]",
        "meaning": "performance of music by players or singers not involving theatrical staging; harmony; accord"
    },
    {
        "id": 907,
        "word": "concerted",
        "phonetic": "[kənˈsɜːtɪd]",
        "meaning": "planned or accomplished together; combined"
    },
    {
        "id": 908,
        "word": "concession",
        "phonetic": "[kənˈsɛʃᵊn]",
        "meaning": "act of yielding; point yielded; acknowledgment or admission"
    },
    {
        "id": 909,
        "word": "concise",
        "phonetic": "[kənˈsaɪs]",
        "meaning": "brief and compact; expressing much in few words"
    },
    {
        "id": 910,
        "word": "conclude",
        "phonetic": "[kənˈkluːd]",
        "meaning": "enclose; reach as an end of reasoning; make final determination ; judge or decide; bring to"
    },
    {
        "id": 912,
        "word": "conclusive",
        "phonetic": "[kənˈkluːsɪv]",
        "meaning": "definitive; decisive; final"
    },
    {
        "id": 913,
        "word": "concrete",
        "phonetic": "[ˈkɒŋkriːt]",
        "meaning": "solid mass; covering with cement; hard, strong construction material consisting of sand,"
    },
    {
        "id": 915,
        "word": "concurrent",
        "phonetic": "[kənˈkʌrᵊnt]",
        "meaning": "simultaneous; coincident; occurring or operating at the same time"
    },
    {
        "id": 916,
        "word": "condemn",
        "phonetic": "[kənˈdɛm]",
        "meaning": "blame; denounce; express strong disapproval of"
    },
    {
        "id": 917,
        "word": "condemnation",
        "phonetic": "[ˌkɒndɛmˈneɪʃᵊn]",
        "meaning": "blame"
    },
    {
        "id": 918,
        "word": "condensation",
        "phonetic": "[ˌkɒndɛnˈseɪʃᵊn]",
        "meaning": "compression"
    },
    {
        "id": 919,
        "word": "condense",
        "phonetic": "[kənˈdɛns]",
        "meaning": "change from a gaseous to a liquid state and fall in drops; compress or concentrate"
    },
    {
        "id": 920,
        "word": "condenser",
        "phonetic": "[kənˈdɛnsə]",
        "meaning": "lens used to concentrate light on an object; an apparatus that converts vapor into liquid"
    },
    {
        "id": 921,
        "word": "condition",
        "phonetic": "[kənˈdɪʃᵊn]",
        "meaning": "mode or state of being; fitness; existing circumstances"
    },
    {
        "id": 922,
        "word": "conduct",
        "phonetic": "[kənˈdʌkt]",
        "meaning": "direct the course of; manage or control; lead or guide"
    },
    {
        "id": 923,
        "word": "conductor",
        "phonetic": "[kənˈdʌktə]",
        "meaning": "a device designed to transmit electricity, heat; person who collects fares on a public"
    },
    {
        "id": 925,
        "word": "cone",
        "phonetic": "[kəʊn]",
        "meaning": "a shape whose base is a circle and whose sides taper up to a point"
    },
    {
        "id": 926,
        "word": "confer",
        "phonetic": "[kənˈfɜː]",
        "meaning": "bestow; present; have a conference in order to talk something over"
    },
    {
        "id": 927,
        "word": "conference",
        "phonetic": "[ˈkɒnfᵊrᵊns]",
        "meaning": "meeting for consultation or discussion; exchange of views"
    },
    {
        "id": 928,
        "word": "confess",
        "phonetic": "[kənˈfɛs]",
        "meaning": "acknowledge; admit"
    },
    {
        "id": 929,
        "word": "confession",
        "phonetic": "[kənˈfɛʃᵊn]",
        "meaning": "public declaration of faith"
    },
    {
        "id": 930,
        "word": "confide",
        "phonetic": "[kənˈfaɪd]",
        "meaning": "disclose; reveal; tell in confidence"
    },
    {
        "id": 931,
        "word": "confidence",
        "phonetic": "[ˈkɒnfɪdᵊns]",
        "meaning": "feeling secure or certain about something"
    },
    {
        "id": 932,
        "word": "confident",
        "phonetic": "[ˈkɒnfɪdᵊnt]",
        "meaning": "assured; having or marked by assurance"
    },
    {
        "id": 933,
        "word": "confidential",
        "phonetic": "[ˌkɒnfɪˈdɛnʃᵊl]",
        "meaning": "treated with confidence; trusted in; trustworthy; secret"
    },
    {
        "id": 934,
        "word": "confine",
        "phonetic": "[kənˈfaɪn]",
        "meaning": "restrict in movement; circumscribe"
    },
    {
        "id": 935,
        "word": "confinement",
        "phonetic": "[kənˈfaɪnmənt]",
        "meaning": "state of being confined; restraint within limits; any restraint of liberty by force"
    },
    {
        "id": 936,
        "word": "confirm",
        "phonetic": "[kənˈfɜːm]",
        "meaning": "support or establish the certainty or validity of; verify"
    },
    {
        "id": 937,
        "word": "confirmation",
        "phonetic": "[ˌkɒnfəˈmeɪʃᵊn]",
        "meaning": "additional proof that something that was believed"
    },
    {
        "id": 938,
        "word": "conflict",
        "phonetic": "[ˈkɒnflɪkt]",
        "meaning": "fight; struggle; incompatibility of dates or events"
    },
    {
        "id": 939,
        "word": "conform",
        "phonetic": "[kənˈfɔːm]",
        "meaning": "comply with; follow; fit; meet"
    },
    {
        "id": 940,
        "word": "conformity",
        "phonetic": "[kənˈfɔːməti]",
        "meaning": "similarity in form or character; agreement"
    },
    {
        "id": 941,
        "word": "confront",
        "phonetic": "[kənˈfrʌnt]",
        "meaning": "be face to face with; oppose in hostility or competition; deal with"
    },
    {
        "id": 942,
        "word": "confrontation",
        "phonetic": "[ˌkɒnfrʌnˈteɪʃᵊn]",
        "meaning": "state of being confronted, especially a meeting face to face; clash of opinions and"
    },
    {
        "id": 944,
        "word": "confuse",
        "phonetic": "[kənˈfjuːz]",
        "meaning": "cause to be unable to think with clarity or act with intelligence or understanding; mix up"
    },
    {
        "id": 945,
        "word": "confusion",
        "phonetic": "[kənˈfjuːʒᵊn]",
        "meaning": "mistake that results from taking one thing to be another; lack of clarity or order"
    },
    {
        "id": 946,
        "word": "congestion",
        "phonetic": "[kənˈʤɛsʧᵊn]",
        "meaning": "act of gathering or heaping together or forming a mass"
    },
    {
        "id": 947,
        "word": "congratulation",
        "phonetic": "[kənˌɡræʧəˈleɪʃᵊn]",
        "meaning": "act of acknowledging that someone has an occasion for celebration"
    },
    {
        "id": 948,
        "word": "congress",
        "phonetic": "[ˈkɒŋɡrɛs]",
        "meaning": "meeting of elected or appointed representatives"
    },
    {
        "id": 949,
        "word": "congressman",
        "phonetic": "[ˈkɒŋɡrɛsmən]",
        "meaning": "man who is a member of the U.S. Congress, especially of the House of"
    },
    {
        "id": 951,
        "word": "conjunction",
        "phonetic": "[kənˈʤʌŋkʃᵊn]",
        "meaning": "state of being conjoined, united, or associated; union; association; league"
    },
    {
        "id": 952,
        "word": "connect",
        "phonetic": "[kəˈnɛkt]",
        "meaning": "join, or fasten together; associate; combine; unite or link together"
    },
    {
        "id": 953,
        "word": "connection",
        "phonetic": "[kəˈnɛkʃᵊn]",
        "meaning": "relation between things or events; shifting from one form of transportation to another"
    },
    {
        "id": 954,
        "word": "conquer",
        "phonetic": "[ˈkɒŋkə]",
        "meaning": "gain or acquire by force; take possession of by violent means; gain dominion over"
    },
    {
        "id": 955,
        "word": "conquest",
        "phonetic": "[ˈkɒŋkwɛst]",
        "meaning": "success in mastering something difficult"
    },
    {
        "id": 956,
        "word": "conscience",
        "phonetic": "[ˈkɒnʃᵊns]",
        "meaning": "motivation deriving logically from ethical or moral principles; source of moral or ethical"
    },
    {
        "id": 958,
        "word": "conscientious",
        "phonetic": "[ˌkɒnʃiˈɛnʃəs]",
        "meaning": "diligent; responsible; reliable"
    },
    {
        "id": 959,
        "word": "conscious",
        "phonetic": "[ˈkɒnʃəs]",
        "meaning": "awake; alert"
    },
    {
        "id": 960,
        "word": "consciousness",
        "phonetic": "[ˈkɒnʃəsnəs]",
        "meaning": "having knowledge of ; special awareness or sensitivity:"
    },
    {
        "id": 961,
        "word": "consecutive",
        "phonetic": "[kənˈsɛkjətɪv]",
        "meaning": "following one after another without interruption; sequential"
    },
    {
        "id": 962,
        "word": "consent",
        "phonetic": "[kənˈsɛnt]",
        "meaning": "agree in opinion or sentiment; be of the same mind; accord; concur; allow"
    },
    {
        "id": 963,
        "word": "consequence",
        "phonetic": "[ˈkɒnsɪkwəns]",
        "meaning": "result; relation of a result to its cause; logical conclusion or inference"
    },
    {
        "id": 964,
        "word": "consequently",
        "phonetic": "[ˈkɒnsɪkwəntli]",
        "meaning": "therefore; as a result or consequence of something; subsequently"
    },
    {
        "id": 965,
        "word": "conservation",
        "phonetic": "[ˌkɒnsəˈveɪʃᵊn]",
        "meaning": "preservation or restoration from loss, damage, or neglect"
    },
    {
        "id": 966,
        "word": "conservative",
        "phonetic": "[kənˈsɜːvətɪv]",
        "meaning": "favoring traditional views and values; tending to oppose change"
    },
    {
        "id": 967,
        "word": "considerable",
        "phonetic": "[kənˈsɪdᵊrəbᵊl]",
        "meaning": "worthy of consideration; large in amount, extent, or degree"
    },
    {
        "id": 968,
        "word": "considerably",
        "phonetic": "[kənˈsɪdᵊrəbᵊli]",
        "meaning": "substantially; significantly; to a degree worth considering"
    },
    {
        "id": 969,
        "word": "considerate",
        "phonetic": "[kənˈsɪdᵊrət]",
        "meaning": "thoughtful; marked by consideration or reflection; deliberate"
    },
    {
        "id": 970,
        "word": "consideration",
        "phonetic": "[kənˌsɪdəˈreɪʃᵊn]",
        "meaning": "considerate and thoughtful act"
    },
    {
        "id": 971,
        "word": "consign",
        "phonetic": "[kənˈsaɪn]",
        "meaning": "give, transfer, or deliver in a formal manner, as if by signing over into the possession of"
    },
    {
        "id": 973,
        "word": "consist",
        "phonetic": "[kənˈsɪst]",
        "meaning": "stand firm; be in a fixed or permanent state; be supported and maintained"
    },
    {
        "id": 974,
        "word": "consistency",
        "phonetic": "[kənˈsɪstᵊnsi]",
        "meaning": "harmonious uniformity or agreement among things or parts"
    },
    {
        "id": 975,
        "word": "consistent",
        "phonetic": "[kənˈsɪstᵊnt]",
        "meaning": "being in agreement with itself; coherent; regular"
    },
    {
        "id": 976,
        "word": "console",
        "phonetic": "[kənˈsəʊl]",
        "meaning": "cheer from distress or depression; alleviate grief and raise spirits of; relieve; comfort"
    },
    {
        "id": 977,
        "word": "consolidate",
        "phonetic": "[kənˈsɒlɪdeɪt]",
        "meaning": "make solid; unite or press together into a compact mass; harden or make dense and"
    },
    {
        "id": 979,
        "word": "consonant",
        "phonetic": "[ˈkɒnsənənt]",
        "meaning": "compatible; harmonious"
    },
    {
        "id": 980,
        "word": "conspicuous",
        "phonetic": "[kənˈspɪkjuəs]",
        "meaning": "noticeable; prominent; easy to notice; obvious"
    },
    {
        "id": 981,
        "word": "conspiracy",
        "phonetic": "[kənˈspɪrəsi]",
        "meaning": "plot; intrigue; agreement to perform together an illegal, wrongful, or subversive act"
    },
    {
        "id": 982,
        "word": "constant",
        "phonetic": "[ˈkɒnstᵊnt]",
        "meaning": "invariable; repeating; continually occurring; persistent"
    },
    {
        "id": 983,
        "word": "constantly",
        "phonetic": "[ˈkɒnstᵊntli]",
        "meaning": "in an unchangeable or invariable manner; in every case; perpetually; continually"
    },
    {
        "id": 984,
        "word": "constituent",
        "phonetic": "[kənˈstɪʧuənt]",
        "meaning": "component or part; citizen, voter"
    },
    {
        "id": 985,
        "word": "constitute",
        "phonetic": "[ˈkɒnstɪʧuːt]",
        "meaning": "make up; form something"
    },
    {
        "id": 986,
        "word": "constitution",
        "phonetic": "[ˌkɒnstɪˈtjuːʃᵊn]",
        "meaning": "law determining the fundamental political principles of a government; the act of forming"
    },
    {
        "id": 988,
        "word": "constraint",
        "phonetic": "[kənˈstreɪnt]",
        "meaning": "something that restricts or confines within prescribed bounds"
    },
    {
        "id": 989,
        "word": "construct",
        "phonetic": "[kənˈstrʌkt]",
        "meaning": "form by assembling or combining parts; build; create"
    },
    {
        "id": 990,
        "word": "construction",
        "phonetic": "[kənˈstrʌkʃᵊn]",
        "meaning": "act of constructing or building something"
    },
    {
        "id": 991,
        "word": "consult",
        "phonetic": "[kənˈsʌlt]",
        "meaning": "seek advice or information of; take into account; consider"
    },
    {
        "id": 992,
        "word": "consultant",
        "phonetic": "[kənˈsʌltᵊnt]",
        "meaning": "an expert who gives advice"
    },
    {
        "id": 993,
        "word": "consume",
        "phonetic": "[kənˈsjuːm]",
        "meaning": "devour; eat"
    },
    {
        "id": 994,
        "word": "consumer",
        "phonetic": "[kənˈsjuːmə]",
        "meaning": "people who buy goods or services"
    },
    {
        "id": 995,
        "word": "consumption",
        "phonetic": "[kənˈsʌmpʃᵊn]",
        "meaning": "eating or drinking of something"
    },
    {
        "id": 996,
        "word": "contact",
        "phonetic": "[ˈkɒntækt]",
        "meaning": "get in touch with; reach"
    },
    {
        "id": 997,
        "word": "contain",
        "phonetic": "[kənˈteɪn]",
        "meaning": "include; incorporate; be capable of holding"
    },
    {
        "id": 998,
        "word": "container",
        "phonetic": "[kənˈteɪnə]",
        "meaning": "any object that can be used to hold things"
    },
    {
        "id": 999,
        "word": "contemplate",
        "phonetic": "[ˈkɒntɛmpleɪt]",
        "meaning": "look at attentively and thoughtfully; observe deep in thought"
    },
    {
        "id": 1000,
        "word": "contemplation",
        "phonetic": "[ˌkɒntɛmˈpleɪʃᵊn]",
        "meaning": "act of the mind in considering with attention; continued attention of the mind to a"
    },
    {
        "id": 1002,
        "word": "contemporary",
        "phonetic": "[kənˈtɛmpᵊrᵊri]",
        "meaning": "modern; belonging to the same period of time"
    },
    {
        "id": 1003,
        "word": "contempt",
        "phonetic": "[kənˈtɛmpt]",
        "meaning": "state of being despised or dishonored; disgrace; disobedience to, or open disrespect of"
    },
    {
        "id": 1004,
        "word": "contemptuous",
        "phonetic": "[kənˈtɛmpʧuəs]",
        "meaning": "scornful; expressing contempt; showing a lack of respect"
    },
    {
        "id": 1005,
        "word": "content",
        "phonetic": "[ˈkɒntɛnt]",
        "meaning": "volume; something contained; material, including text and images"
    },
    {
        "id": 1006,
        "word": "contest",
        "phonetic": "[ˈkɒntɛst]",
        "meaning": "contend for; call in question; oppose; dispute"
    },
    {
        "id": 1007,
        "word": "context",
        "phonetic": "[ˈkɒntɛkst]",
        "meaning": "circumstance"
    },
    {
        "id": 1008,
        "word": "continent",
        "phonetic": "[ˈkɒntɪnənt]",
        "meaning": "one of the large landmasses of the earth"
    },
    {
        "id": 1009,
        "word": "continental",
        "phonetic": "[ˌkɒntɪˈnɛntᵊl]",
        "meaning": "being or concerning or limited to a continent"
    },
    {
        "id": 1010,
        "word": "contingency",
        "phonetic": "[kənˈtɪnʤᵊnsi]",
        "meaning": "condition of being dependent on chance; uncertainty; possibility"
    },
    {
        "id": 1011,
        "word": "contract",
        "phonetic": "[ˈkɒntrækt]",
        "meaning": "constrict; make smaller; compress or concentrate"
    },
    {
        "id": 1012,
        "word": "contradict",
        "phonetic": "[ˌkɒntrəˈdɪkt]",
        "meaning": "confront; oppose"
    },
    {
        "id": 1013,
        "word": "contradiction",
        "phonetic": "[ˌkɒntrəˈdɪkʃᵊn]",
        "meaning": "assertion of the contrary to what has been said or affirmed; denial of the truth of a"
    },
    {
        "id": 1015,
        "word": "contrary",
        "phonetic": "[ˈkɒntrəri]",
        "meaning": "relation of direct opposition; very opposed in nature or character or purpose"
    },
    {
        "id": 1016,
        "word": "contrast",
        "phonetic": "[ˈkɒntrɑːst]",
        "meaning": "act of distinguishing by comparing differences"
    },
    {
        "id": 1017,
        "word": "contribute",
        "phonetic": "[kənˈtrɪbjuːt]",
        "meaning": "provide; bestow a quality on"
    },
    {
        "id": 1018,
        "word": "contribution",
        "phonetic": "[ˌkɒntrɪˈbjuːʃᵊn]",
        "meaning": "act of contributing; contribution; payment exacted for special purpose; impost or levy"
    },
    {
        "id": 1019,
        "word": "controversial",
        "phonetic": "[ˌkɒntrəˈvɜːʃᵊl]",
        "meaning": "controvertible; disputable"
    },
    {
        "id": 1020,
        "word": "controversy",
        "phonetic": "[ˈkɒntrəvɜːsi]",
        "meaning": "contentious speech act; argument"
    },
    {
        "id": 1021,
        "word": "convenience",
        "phonetic": "[kənˈviːniəns]",
        "meaning": "state of being suitable"
    },
    {
        "id": 1022,
        "word": "convenient",
        "phonetic": "[kənˈviːniənt]",
        "meaning": "suited or favorable to one's comfort, purpose, or needs:; near; accessible"
    },
    {
        "id": 1023,
        "word": "convention",
        "phonetic": "[kənˈvɛnʃᵊn]",
        "meaning": "social or moral custom; formal meeting of members, representatives, or delegates;"
    },
    {
        "id": 1025,
        "word": "conventional",
        "phonetic": "[kənˈvɛnʃᵊnᵊl]",
        "meaning": "based upon tradition rules; formed by agreement or compact"
    },
    {
        "id": 1026,
        "word": "conversant",
        "phonetic": "[kənˈvɜːsᵊnt]",
        "meaning": "familiar, as by study or experience; able to converse knowledgeably"
    },
    {
        "id": 1027,
        "word": "conversation",
        "phonetic": "[ˌkɒnvəˈseɪʃᵊn]",
        "meaning": "general course of conduct; intimate fellowship or association; close acquaintance;"
    },
    {
        "id": 1029,
        "word": "converse",
        "phonetic": "[kənˈvɜːs]",
        "meaning": "chat; talk informally; engage in a spoken exchange of thoughts"
    },
    {
        "id": 1030,
        "word": "conversely",
        "phonetic": "[ˈkɒnvɜːsli]",
        "meaning": "in a converse manner; with change of order or relation; reciprocally."
    },
    {
        "id": 1031,
        "word": "conversion",
        "phonetic": "[kənˈvɜːʃᵊn]",
        "meaning": "change; transformation"
    },
    {
        "id": 1032,
        "word": "convert",
        "phonetic": "[kənˈvɜːt]",
        "meaning": "change something into another form; transform"
    },
    {
        "id": 1033,
        "word": "convey",
        "phonetic": "[kənˈveɪ]",
        "meaning": "carry from one place to another; bear or transport"
    },
    {
        "id": 1034,
        "word": "conveyance",
        "phonetic": "[kənˈveɪᵊns]",
        "meaning": "act of conveying; tools of conveying, especially vehicle for transportation"
    },
    {
        "id": 1035,
        "word": "convict",
        "phonetic": "[kənˈvɪkt]",
        "meaning": "find or declare guilty"
    },
    {
        "id": 1036,
        "word": "conviction",
        "phonetic": "[kənˈvɪkʃᵊn]",
        "meaning": "judgment that someone is guilty of crime; strongly held belief"
    },
    {
        "id": 1037,
        "word": "convince",
        "phonetic": "[kənˈvɪns]",
        "meaning": "overpower; force to yield assent to truth; satisfy by proof; prove guilty"
    },
    {
        "id": 1038,
        "word": "convinced",
        "phonetic": "[kənˈvɪnst]",
        "meaning": "certain, sure"
    },
    {
        "id": 1039,
        "word": "cooperate",
        "phonetic": "[kəʊˈɒpᵊreɪt]",
        "meaning": "work or act together toward a common end or purpose"
    },
    {
        "id": 1040,
        "word": "cooperation",
        "phonetic": "[kəʊˌɒpᵊrˈeɪʃᵊn]",
        "meaning": "practice of cooperating; joint operation or action"
    },
    {
        "id": 1041,
        "word": "cooperative",
        "phonetic": "[kəʊˈɒpᵊrətɪv]",
        "meaning": "done with or working with others"
    },
    {
        "id": 1042,
        "word": "coordinate",
        "phonetic": "[kəʊˈɔːdɪneɪt]",
        "meaning": "bring order and organization to; harmonize"
    },
    {
        "id": 1043,
        "word": "coordination",
        "phonetic": "[kəʊˌɔːdɪˈneɪʃᵊn]",
        "meaning": "regulation of diverse elements into an integrated and harmonious operation"
    },
    {
        "id": 1044,
        "word": "cordial",
        "phonetic": "[ˈkɔːdiəl]",
        "meaning": "gracious; showing warm and friendliness"
    },
    {
        "id": 1045,
        "word": "core",
        "phonetic": "[kɔː]",
        "meaning": "basic, center, or most important part; essence"
    },
    {
        "id": 1046,
        "word": "cork",
        "phonetic": "[kɔːk]",
        "meaning": "lightweight elastic outer bark, used especially for bottle closures, insulation, floats"
    },
    {
        "id": 1047,
        "word": "corn",
        "phonetic": "[kɔːn]",
        "meaning": "single seed of certain plants, as wheat; grain; small, hard particle"
    },
    {
        "id": 1048,
        "word": "corner",
        "phonetic": "[ˈkɔːnə]",
        "meaning": "position at which two lines, surfaces, or edges meet and form an angle"
    },
    {
        "id": 1049,
        "word": "corporate",
        "phonetic": "[ˈkɔːpᵊrət]",
        "meaning": "united or combined into one body; collective; belonging to corporation or incorporated"
    },
    {
        "id": 1051,
        "word": "corporation",
        "phonetic": "[ˌkɔːpᵊrˈeɪʃᵊn]",
        "meaning": "business firm; a group of people combined into or acting as one body"
    },
    {
        "id": 1052,
        "word": "correlate",
        "phonetic": "[ˈkɒrɪleɪt]",
        "meaning": "relate; associate; bring into a mutual relation"
    },
    {
        "id": 1053,
        "word": "correlation",
        "phonetic": "[ˌkɒrɪˈleɪʃᵊn]",
        "meaning": "mutual relationship; interdependence or interconnection relationship"
    },
    {
        "id": 1054,
        "word": "correspond",
        "phonetic": "[ˌkɒrɪˈspɒnd]",
        "meaning": "be compatible, similar or consistent; exchange messages"
    },
    {
        "id": 1055,
        "word": "correspondence",
        "phonetic": "[ˌkɒrɪˈspɒndəns]",
        "meaning": "similarity or analogy; communication by the exchange of letters"
    },
    {
        "id": 1056,
        "word": "correspondent",
        "phonetic": "[ˌkɒrɪˈspɒndənt]",
        "meaning": "one who communicates information, especially, by letter or telegram to newspaper"
    },
    {
        "id": 1058,
        "word": "corresponding",
        "phonetic": "[ˌkɒrɪˈspɒndɪŋ]",
        "meaning": "accompanying"
    },
    {
        "id": 1059,
        "word": "corrode",
        "phonetic": "[kəˈrəʊd]",
        "meaning": "destroy metal or alloy gradually, especially by chemical action; be eaten or worn away"
    },
    {
        "id": 1060,
        "word": "corrosion",
        "phonetic": "[kəˈrəʊʒᵊn]",
        "meaning": "decay; erosion"
    },
    {
        "id": 1061,
        "word": "corrupt",
        "phonetic": "[kəˈrʌpt]",
        "meaning": "changed from sound to putrid state; spoiled; tainted"
    },
    {
        "id": 1062,
        "word": "corruption",
        "phonetic": "[kəˈrʌpʃᵊn]",
        "meaning": "bribery; fraud"
    },
    {
        "id": 1063,
        "word": "cosmic",
        "phonetic": "[ˈkɒzmɪk]",
        "meaning": "pertaining to the universe; vast"
    },
    {
        "id": 1064,
        "word": "cosmopolitan",
        "phonetic": "[ˌkɒzməˈpɒlɪtᵊn]",
        "meaning": "sophisticated; of worldwide scope"
    },
    {
        "id": 1065,
        "word": "cosmos",
        "phonetic": "[ˈkɒzmɒs]",
        "meaning": "universe or universality of created things; ordered, harmonious whole"
    },
    {
        "id": 1066,
        "word": "couch",
        "phonetic": "[kaʊʧ]",
        "meaning": "sofa; arrange or dispose as in a bed"
    },
    {
        "id": 1067,
        "word": "counsel",
        "phonetic": "[ˈkaʊnsᵊl]",
        "meaning": "advise; suggest"
    },
    {
        "id": 1068,
        "word": "countenance",
        "phonetic": "[ˈkaʊntᵊnəns]",
        "meaning": "give sanction or support to; tolerate or approve"
    },
    {
        "id": 1069,
        "word": "counter",
        "phonetic": "[ˈkaʊntə]",
        "meaning": "flat surface on which money is counted, business is transacted; one that is an opposite"
    },
    {
        "id": 1070,
        "word": "countermand",
        "phonetic": "[ˌkaʊntəˈmɑːnd]",
        "meaning": "cancel; revoke command or order; order or direct in opposition to; prohibit; forbid"
    },
    {
        "id": 1071,
        "word": "counterpart",
        "phonetic": "[ˈkaʊntəpɑːt]",
        "meaning": "duplicate copy; analogue; one that closely resembles another"
    },
    {
        "id": 1072,
        "word": "countless",
        "phonetic": "[ˈkaʊntləs]",
        "meaning": "innumerable; infinite; too many to count"
    },
    {
        "id": 1073,
        "word": "couple",
        "phonetic": "[ˈkʌpᵊl]",
        "meaning": "a male and female associated together; a pair who associate with one another"
    },
    {
        "id": 1074,
        "word": "court",
        "phonetic": "[kɔːt]",
        "meaning": "enclosed space; courtyard; uncovered area shut in by the walls of a building"
    },
    {
        "id": 1075,
        "word": "courteous",
        "phonetic": "[ˈkɜːtiəs]",
        "meaning": "exhibiting courtesy and politeness; showing regard or thought for others"
    },
    {
        "id": 1076,
        "word": "courtesy",
        "phonetic": "[ˈkɜːtəsi]",
        "meaning": "polite behavior; act of civility or respect; consent or agreement in spite of fact"
    },
    {
        "id": 1077,
        "word": "cover",
        "phonetic": "[ˈkʌvə]",
        "meaning": "overspread the surface; envelop; shelter, as from evil or danger; protect"
    },
    {
        "id": 1078,
        "word": "coverage",
        "phonetic": "[ˈkʌvᵊrɪʤ]",
        "meaning": "extent to which something is covered; news as presented by reporters"
    },
    {
        "id": 1079,
        "word": "coward",
        "phonetic": "[ˈkaʊəd]",
        "meaning": "person who lacks courage to face danger; timid"
    },
    {
        "id": 1080,
        "word": "crab",
        "phonetic": "[kræb]",
        "meaning": "a stroke of the oar that either misses the water or digs too deeply"
    },
    {
        "id": 1081,
        "word": "crack",
        "phonetic": "[kræk]",
        "meaning": "break into simpler molecules by means of heat; split; hit forcefully; pass through"
    },
    {
        "id": 1082,
        "word": "cradle",
        "phonetic": "[ˈkreɪdᵊl]",
        "meaning": "small low bed for an infant, often furnished with rockers; infancy, or very early life"
    },
    {
        "id": 1083,
        "word": "craft",
        "phonetic": "[krɑːft]",
        "meaning": "something made by people; vessel"
    },
    {
        "id": 1084,
        "word": "crash",
        "phonetic": "[kræʃ]",
        "meaning": "smash; collision; falling down or in pieces with a loud noise of breaking parts"
    },
    {
        "id": 1085,
        "word": "crate",
        "phonetic": "[kreɪt]",
        "meaning": "large basket, used for moving china or similar wares; box or case whose sides are of wooden"
    },
    {
        "id": 1087,
        "word": "crave",
        "phonetic": "[kreɪv]",
        "meaning": "ask with earnestness or importunity; ask with submission or humility; beg"
    },
    {
        "id": 1088,
        "word": "crawl",
        "phonetic": "[krɔːl]",
        "meaning": "move slowly, as people or animals with the body near the ground"
    },
    {
        "id": 1089,
        "word": "crazy",
        "phonetic": "[ˈkreɪzi]",
        "meaning": "affected with madness; insane; deranged"
    },
    {
        "id": 1090,
        "word": "create",
        "phonetic": "[kriˈeɪt]",
        "meaning": "make or cause to be or to become; invest with a new thing"
    },
    {
        "id": 1091,
        "word": "creation",
        "phonetic": "[kriˈeɪʃᵊn]",
        "meaning": "act of creating or causing to exist"
    },
    {
        "id": 1092,
        "word": "credit",
        "phonetic": "[ˈkrɛdɪt]",
        "meaning": "arrangement for deferred payment for goods and services; money available for a client to"
    },
    {
        "id": 1094,
        "word": "creek",
        "phonetic": "[kriːk]",
        "meaning": "small stream, often a shallow tributary to a river; brook"
    },
    {
        "id": 1095,
        "word": "creep",
        "phonetic": "[kriːp]",
        "meaning": "move slowly; move stealthily or cautiously"
    },
    {
        "id": 1096,
        "word": "crew",
        "phonetic": "[kruː]",
        "meaning": "group of people working together, as in spacecraft, ship, plane or train"
    },
    {
        "id": 1097,
        "word": "cricket",
        "phonetic": "[ˈkrɪkɪt]",
        "meaning": "outdoor game played with bats, a ball, and wickets by two teams of 11 players each"
    },
    {
        "id": 1098,
        "word": "criminal",
        "phonetic": "[ˈkrɪmɪnᵊl]",
        "meaning": "one who has committed a crime; one who is found guilty by verdict, confession, or proof"
    },
    {
        "id": 1099,
        "word": "crimson",
        "phonetic": "[ˈkrɪmzᵊn]",
        "meaning": "bloody"
    },
    {
        "id": 1100,
        "word": "cripple",
        "phonetic": "[ˈkrɪpᵊl]",
        "meaning": "person or animal that is partially disabled or unable to use a limb or limb"
    },
    {
        "id": 1101,
        "word": "crisis",
        "phonetic": "[ˈkraɪsɪs]",
        "meaning": "dangerous situation; crucial or decisive point or situation; a turning point"
    },
    {
        "id": 1102,
        "word": "crisp",
        "phonetic": "[krɪsp]",
        "meaning": "firm but easily broken or crumbled; brittle"
    },
    {
        "id": 1103,
        "word": "critical",
        "phonetic": "[ˈkrɪtɪkᵊl]",
        "meaning": "urgently needed; absolutely necessary; essential; acute; crucial; decisive"
    },
    {
        "id": 1104,
        "word": "crook",
        "phonetic": "[krʊk]",
        "meaning": "bend, turn, or curve; curvature; flexure"
    },
    {
        "id": 1105,
        "word": "crooked",
        "phonetic": "[ˈkrʊkɪd]",
        "meaning": "having or marked by bends or angles; not straight or aligned; curved"
    },
    {
        "id": 1106,
        "word": "crop",
        "phonetic": "[krɒp]",
        "meaning": "the top, end, or highest part of anything, especially of plant or tree; grain or other product of"
    },
    {
        "id": 1108,
        "word": "crossing",
        "phonetic": "[ˈkrɒsɪŋ]",
        "meaning": "traveling across; place at which roads, lines, or tracks intersect; intersection"
    },
    {
        "id": 1109,
        "word": "crouch",
        "phonetic": "[kraʊʧ]",
        "meaning": "bend down; stoop low; lie close to the ground with the legs bent, as an animal when waiting"
    },
    {
        "id": 1111,
        "word": "crown",
        "phonetic": "[kraʊn]",
        "meaning": "ornamental circlet or head covering, made of gold with jewels and worn as a symbol of"
    },
    {
        "id": 1113,
        "word": "crude",
        "phonetic": "[kruːd]",
        "meaning": "being in an unrefined or natural state; raw; lacking tact or taste; blunt or offensive"
    },
    {
        "id": 1114,
        "word": "cruise",
        "phonetic": "[kruːz]",
        "meaning": "sail back and forth on the ocean; sail as for protection of commerce, in search of an enemy,"
    },
    {
        "id": 1116,
        "word": "crumb",
        "phonetic": "[krʌm]",
        "meaning": "small fragment or piece, especially, a small piece of bread or other food; broken or cut off"
    },
    {
        "id": 1117,
        "word": "crumble",
        "phonetic": "[ˈkrʌmbᵊl]",
        "meaning": "break into small pieces; cause to fall in pieces"
    },
    {
        "id": 1118,
        "word": "crush",
        "phonetic": "[krʌʃ]",
        "meaning": "press between opposing bodies so as to break or injure; extract or obtain by pressing or"
    },
    {
        "id": 1120,
        "word": "crust",
        "phonetic": "[krʌst]",
        "meaning": "outer layer ; covering; coat; shell"
    },
    {
        "id": 1121,
        "word": "crystal",
        "phonetic": "[ˈkrɪstᵊl]",
        "meaning": "quartz; glassware made of quartz; high-quality, clear, colorless glass"
    },
    {
        "id": 1122,
        "word": "cube",
        "phonetic": "[kjuːb]",
        "meaning": "three-dimensional shape with six square or rectangular sides; cubicle, used for work or study"
    },
    {
        "id": 1123,
        "word": "cubic",
        "phonetic": "[ˈkjuːbɪk]",
        "meaning": "having three dimensions"
    },
    {
        "id": 1124,
        "word": "cubism",
        "phonetic": "[ˈkjuːbɪzᵊm]",
        "meaning": "an artistic movement in France beginning in 1907 that featured surfaces of geometrical"
    },
    {
        "id": 1126,
        "word": "cucumber",
        "phonetic": "[ˈkjuːkʌmbə]",
        "meaning": "cylindrical green fruit with thin green rind and white flesh eaten as a vegetable; related to"
    },
    {
        "id": 1128,
        "word": "cultivate",
        "phonetic": "[ˈkʌltɪveɪt]",
        "meaning": "improve and prepare, as by plowing or fertilizing, for raising crops; promote the growth of"
    },
    {
        "id": 1129,
        "word": "cultivation",
        "phonetic": "[ˌkʌltɪˈveɪʃᵊn]",
        "meaning": "production of food by preparing the land to grow crops"
    },
    {
        "id": 1130,
        "word": "culture",
        "phonetic": "[ˈkʌlʧə]",
        "meaning": "all the knowledge and values shared by a society ; foster; raising of plants or animals"
    },
    {
        "id": 1131,
        "word": "cunning",
        "phonetic": "[ˈkʌnɪŋ]",
        "meaning": "knowing; skillful; artful; designing; deceitful"
    },
    {
        "id": 1132,
        "word": "cupboard",
        "phonetic": "[ˈkʌbəd]",
        "meaning": "a small room or cabinet used for storage space"
    },
    {
        "id": 1133,
        "word": "curb",
        "phonetic": "[kɜːb]",
        "meaning": "bend or curve; guide and manage, or restrain"
    },
    {
        "id": 1134,
        "word": "cure",
        "phonetic": "[kjʊə]",
        "meaning": "medical or hygienic care; remedial treatment of disease; removal of disease or evil"
    },
    {
        "id": 1135,
        "word": "curiosity",
        "phonetic": "[ˌkjʊəriˈɒsəti]",
        "meaning": "desire to know or learn"
    },
    {
        "id": 1136,
        "word": "curious",
        "phonetic": "[ˈkjʊəriəs]",
        "meaning": "difficult to please or satisfy; careful or anxious to learn; eager for knowledge; given to"
    },
    {
        "id": 1138,
        "word": "curl",
        "phonetic": "[kɜːl]",
        "meaning": "form into coiled or spiral shape; twist into ringlets or coils; move in curve or spiral"
    },
    {
        "id": 1139,
        "word": "currency",
        "phonetic": "[ˈkʌrᵊnsi]",
        "meaning": "money; general acceptance or use"
    },
    {
        "id": 1140,
        "word": "current",
        "phonetic": "[ˈkʌrᵊnt]",
        "meaning": "stream; flow; up-to-date; present"
    },
    {
        "id": 1141,
        "word": "currently",
        "phonetic": "[ˈkʌrᵊntli]",
        "meaning": "presently; at the present time"
    },
    {
        "id": 1142,
        "word": "curse",
        "phonetic": "[kɜːs]",
        "meaning": "call upon divine or supernatural power to send injury upon; bring great evil upon"
    },
    {
        "id": 1143,
        "word": "curtail",
        "phonetic": "[kɜːˈteɪl]",
        "meaning": "cut short or reduce; cut off end or tail, or any part"
    },
    {
        "id": 1144,
        "word": "curve",
        "phonetic": "[kɜːv]",
        "meaning": "bend or turn gradually from a given direction, as road curves to the right"
    },
    {
        "id": 1145,
        "word": "cushion",
        "phonetic": "[ˈkʊʃᵊn]",
        "meaning": "soft pillow or pad usually used for sitting, reclining, or kneeling"
    },
    {
        "id": 1146,
        "word": "custody",
        "phonetic": "[ˈkʌstədi]",
        "meaning": "keeping or guarding; care, watch, inspection, for keeping, preservation, or security"
    },
    {
        "id": 1147,
        "word": "custom",
        "phonetic": "[ˈkʌstəm]",
        "meaning": "tradition; practice followed by people of a particular group or region"
    },
    {
        "id": 1148,
        "word": "customary",
        "phonetic": "[ˈkʌstəmᵊri]",
        "meaning": "agreeing with or established by common usage; conventional; habitual"
    },
    {
        "id": 1149,
        "word": "customer",
        "phonetic": "[ˈkʌstəmə]",
        "meaning": "patron; one that buys goods or services"
    },
    {
        "id": 1150,
        "word": "customs",
        "phonetic": "[ˈkʌstəmz]",
        "meaning": "money collected under a tariff"
    },
    {
        "id": 1151,
        "word": "cycle",
        "phonetic": "[ˈsaɪkᵊl]",
        "meaning": "periodically repeated sequence of events; long period of time; entire round in a circle or a spire "
    },
    {
        "id": 1155,
        "word": "dagger",
        "phonetic": "[ˈdæɡə]",
        "meaning": "knife; short pointed weapon with sharp edges"
    },
    {
        "id": 1156,
        "word": "dainty",
        "phonetic": "[ˈdeɪnti]",
        "meaning": "delicately beautiful or charming; exquisite; gratification or pleasure taken in anything"
    },
    {
        "id": 1157,
        "word": "dairy",
        "phonetic": "[ˈdeəri]",
        "meaning": "place where milk is produced, kept, or converted into butter or cheese"
    },
    {
        "id": 1158,
        "word": "dam",
        "phonetic": "[dæm]",
        "meaning": "barrier to prevent the flow of liquid, especially built across a water course"
    },
    {
        "id": 1159,
        "word": "damp",
        "phonetic": "[dæmp]",
        "meaning": "humid; moist; slightly wet"
    },
    {
        "id": 1160,
        "word": "dangerous",
        "phonetic": "[ˈdeɪnʤᵊrəs]",
        "meaning": "full of risk; perilous; hazardous; unsafe"
    },
    {
        "id": 1161,
        "word": "daring",
        "phonetic": "[ˈdeərɪŋ]",
        "meaning": "bold; brave"
    },
    {
        "id": 1162,
        "word": "dart",
        "phonetic": "[dɑːt]",
        "meaning": "move suddenly and rapidly"
    },
    {
        "id": 1163,
        "word": "dash",
        "phonetic": "[dæʃ]",
        "meaning": "throw with violence or haste; break, as by throwing or by collision; form or sketch rapidly"
    },
    {
        "id": 1164,
        "word": "data",
        "phonetic": "[ˈdeɪtə]",
        "meaning": "collection of facts, observations, or other information related to a particular question or problem"
    },
    {
        "id": 1165,
        "word": "date",
        "phonetic": "[deɪt]",
        "meaning": "mark the time of; assign a date to"
    },
    {
        "id": 1166,
        "word": "dawn",
        "phonetic": "[dɔːn]",
        "meaning": "time each morning at which daylight first begins; beginning; start"
    },
    {
        "id": 1167,
        "word": "dazzle",
        "phonetic": "[ˈdæzᵊl]",
        "meaning": "overpower with light; confuse the sight of by brilliance of light; bewilder or surprise with"
    },
    {
        "id": 1169,
        "word": "dazzling",
        "phonetic": "[ˈdæzᵊlɪŋ]",
        "meaning": "bright; brilliant"
    },
    {
        "id": 1170,
        "word": "deadly",
        "phonetic": "[ˈdɛdli]",
        "meaning": "fatal; lethal; causing or tending to cause death"
    },
    {
        "id": 1171,
        "word": "deaf",
        "phonetic": "[dɛf]",
        "meaning": "unable to perceive sounds; hard of hearing; unwilling to hear or listen; regardless; not to be"
    },
    {
        "id": 1173,
        "word": "deal",
        "phonetic": "[diːl]",
        "meaning": "part or portion; share; indefinite quantity, degree, or extent, degree, or extent; distribution;"
    },
    {
        "id": 1175,
        "word": "dean",
        "phonetic": "[diːn]",
        "meaning": "dignitary or presiding officer; head in the faculty of some colleges or universities"
    },
    {
        "id": 1176,
        "word": "debate",
        "phonetic": "[dɪˈbeɪt]",
        "meaning": "discussion; dispute; discussion involving opposing points"
    },
    {
        "id": 1177,
        "word": "debt",
        "phonetic": "[dɛt]",
        "meaning": "liability; obligation; money or goods or services owed by one person to another"
    },
    {
        "id": 1178,
        "word": "decade",
        "phonetic": "[ˈdɛkeɪd]",
        "meaning": "a group or division of ten, especially a period of ten years"
    },
    {
        "id": 1179,
        "word": "decay",
        "phonetic": "[dɪˈkeɪ]",
        "meaning": "decompose; break sown; disintegration; rottenness; decline; worsen; decadence"
    },
    {
        "id": 1180,
        "word": "deceit",
        "phonetic": "[dɪˈsiːt]",
        "meaning": "attempt or disposition to deceive or lead into error; any declaration, artifice, or practice, which"
    },
    {
        "id": 1182,
        "word": "deceive",
        "phonetic": "[dɪˈsiːv]",
        "meaning": "fool; cause to believe what is not true; mislead"
    },
    {
        "id": 1183,
        "word": "decent",
        "phonetic": "[ˈdiːsᵊnt]",
        "meaning": "suitable; modest.; honorable; meeting accepted standards"
    },
    {
        "id": 1184,
        "word": "deception",
        "phonetic": "[dɪˈsɛpʃᵊn]",
        "meaning": "act of deceiving"
    },
    {
        "id": 1185,
        "word": "decimal",
        "phonetic": "[ˈdɛsɪmᵊl]",
        "meaning": "of tens; numbered or proceeding by tens; based on ten"
    },
    {
        "id": 1186,
        "word": "deck",
        "phonetic": "[dɛk]",
        "meaning": "a pack of 52 cards; any of various floor-like platforms built into a vessel"
    },
    {
        "id": 1187,
        "word": "declaration",
        "phonetic": "[ˌdɛkləˈreɪʃᵊn]",
        "meaning": "announcement; explicit statement; formal public statement"
    },
    {
        "id": 1188,
        "word": "declare",
        "phonetic": "[dɪˈkleə]",
        "meaning": "state clearly; make known formally or officially"
    },
    {
        "id": 1189,
        "word": "decline",
        "phonetic": "[dɪˈklaɪn]",
        "meaning": "change toward something smaller or lower ; gradual falling off from a better state"
    },
    {
        "id": 1190,
        "word": "decompose",
        "phonetic": "[ˌdiːkəmˈpəʊz]",
        "meaning": "decay"
    },
    {
        "id": 1191,
        "word": "decorate",
        "phonetic": "[ˈdɛkəreɪt]",
        "meaning": "adorn; embellish"
    },
    {
        "id": 1192,
        "word": "decoration",
        "phonetic": "[ˌdɛkəˈreɪʃᵊn]",
        "meaning": "act of decorating something; something used to beautify"
    },
    {
        "id": 1193,
        "word": "decorative",
        "phonetic": "[ˈdɛkᵊrətɪv]",
        "meaning": "ornamental; embellishing; serving an esthetic rather than a useful purpose"
    },
    {
        "id": 1194,
        "word": "decrease",
        "phonetic": "[dɪˈkriːs]",
        "meaning": "lessen; reduce; make a quantity smaller"
    },
    {
        "id": 1195,
        "word": "decree",
        "phonetic": "[dɪˈkriː]",
        "meaning": "order from one having authority; decision, order, or sentence by court"
    },
    {
        "id": 1196,
        "word": "dedicate",
        "phonetic": "[ˈdɛdɪkeɪt]",
        "meaning": "set apart; devoted; consecrated"
    },
    {
        "id": 1197,
        "word": "deduce",
        "phonetic": "[dɪˈdjuːs]",
        "meaning": "lead forth; reach a conclusion by reasoning; trace the origin or derivation of"
    },
    {
        "id": 1198,
        "word": "deduct",
        "phonetic": "[dɪˈdʌkt]",
        "meaning": "lead forth or out; take away, separate, or remove, in numbering, estimating, or calculating;"
    },
    {
        "id": 1200,
        "word": "deed",
        "phonetic": "[diːd]",
        "meaning": "something that is carried out; act or action; feat or exploit"
    },
    {
        "id": 1201,
        "word": "deem",
        "phonetic": "[diːm]",
        "meaning": "decide; judge; sentence; condemn"
    },
    {
        "id": 1202,
        "word": "default",
        "phonetic": "[dɪˈfɔːlt]",
        "meaning": "failure to act; an option that is selected automatically"
    },
    {
        "id": 1203,
        "word": "defeat",
        "phonetic": "[dɪˈfiːt]",
        "meaning": "disfigure; destroy; frustrate; overcome or vanquish; resist with"
    },
    {
        "id": 1204,
        "word": "defect",
        "phonetic": "[dɪˈfɛkt]",
        "meaning": "abandon or turn against; cease or change one's loyalty"
    },
    {
        "id": 1205,
        "word": "defective",
        "phonetic": "[dɪˈfɛktɪv]",
        "meaning": "having a defect; faulty; imperfect; incomplete; lacking"
    },
    {
        "id": 1206,
        "word": "defence",
        "phonetic": "[dɪˈfɛns]",
        "meaning": "act of defending against attack, danger, or injury"
    },
    {
        "id": 1207,
        "word": "defend",
        "phonetic": "[dɪˈfɛnd]",
        "meaning": "make or keep safe from danger, attack, or harm"
    },
    {
        "id": 1208,
        "word": "defer",
        "phonetic": "[dɪˈfɜː]",
        "meaning": "delay till later; put off; hold back to a later time"
    },
    {
        "id": 1209,
        "word": "defiance",
        "phonetic": "[dɪˈfaɪəns]",
        "meaning": "refusal to yield; readiness to contend or resist"
    },
    {
        "id": 1210,
        "word": "deficiency",
        "phonetic": "[dɪˈfɪʃᵊnsi]",
        "meaning": "scarcity; lack or shortage, especially of something essential to health"
    },
    {
        "id": 1211,
        "word": "deficient",
        "phonetic": "[dɪˈfɪʃᵊnt]",
        "meaning": "inadequate; lacking an essential quality or element"
    },
    {
        "id": 1212,
        "word": "deficit",
        "phonetic": "[ˈdɛfɪsɪt]",
        "meaning": "inadequacy or insufficiency; sum of money falls short of required amount; shortage"
    },
    {
        "id": 1213,
        "word": "define",
        "phonetic": "[dɪˈfaɪn]",
        "meaning": "determine the nature of; give a definition; describe the nature or basic qualities of; explain"
    },
    {
        "id": 1214,
        "word": "definite",
        "phonetic": "[ˈdɛfɪnət]",
        "meaning": "fixed; exact; having distinct limits"
    },
    {
        "id": 1215,
        "word": "definitely",
        "phonetic": "[ˈdɛfɪnətli]",
        "meaning": "unequivocally; clearly; without question and beyond doubt"
    },
    {
        "id": 1216,
        "word": "definition",
        "phonetic": "[ˌdɛfɪˈnɪʃᵊn]",
        "meaning": "clarity of outline; concise explanation"
    },
    {
        "id": 1217,
        "word": "definitive",
        "phonetic": "[dɪˈfɪnɪtɪv]",
        "meaning": "final; complete; precisely defined or explicit"
    },
    {
        "id": 1218,
        "word": "deflate",
        "phonetic": "[dɪˈfleɪt]",
        "meaning": "reduce from an inflated condition; release contained air or gas from"
    },
    {
        "id": 1219,
        "word": "deflect",
        "phonetic": "[dɪˈflɛkt]",
        "meaning": "turn aside; draw someone's attention away from something"
    },
    {
        "id": 1220,
        "word": "deform",
        "phonetic": "[dɪˈfɔːm]",
        "meaning": "change shape by stress; become misshapen; make formless"
    },
    {
        "id": 1221,
        "word": "deformation",
        "phonetic": "[ˌdiːfɔːˈmeɪʃᵊn]",
        "meaning": "alteration in the shape or dimensions; a change for the worse"
    },
    {
        "id": 1222,
        "word": "defray",
        "phonetic": "[dɪˈfreɪ]",
        "meaning": "paycosts of; undertake payment of; make compensation to or for"
    },
    {
        "id": 1223,
        "word": "defy",
        "phonetic": "[dɪˈfaɪ]",
        "meaning": "renounce or dissolve all bonds of affiance, faith, or obligation with; provoke to combat or strife"
    },
    {
        "id": 1224,
        "word": "degradation",
        "phonetic": "[ˌdɛɡrəˈdeɪʃᵊn]",
        "meaning": "humiliation; debasement; decline to a lower condition, quality, or level"
    },
    {
        "id": 1225,
        "word": "degrade",
        "phonetic": "[dɪˈɡreɪd]",
        "meaning": "reduce level; lower grade of something"
    },
    {
        "id": 1226,
        "word": "delay",
        "phonetic": "[dɪˈleɪ]",
        "meaning": "act later than planned; put off; adjournment"
    },
    {
        "id": 1227,
        "word": "delegate",
        "phonetic": "[ˈdɛlɪɡət]",
        "meaning": "person authorized to act as representative for another; deputy"
    },
    {
        "id": 1228,
        "word": "delete",
        "phonetic": "[dɪˈliːt]",
        "meaning": "erase; strike out; remove or make invisible"
    },
    {
        "id": 1229,
        "word": "deliberate",
        "phonetic": "[dɪˈlɪbᵊrət]",
        "meaning": "consider; think about carefully; weigh"
    },
    {
        "id": 1230,
        "word": "deliberately",
        "phonetic": "[dɪˈlɪbᵊrətli]",
        "meaning": "intentionally; purposely; with careful consideration or deliberation; with full intent;"
    },
    {
        "id": 1231,
        "word": "delicate",
        "phonetic": "[ˈdɛlɪkət]",
        "meaning": "pleasing to the senses, especially in a subtle way; easily hurt; very subtle in difference"
    },
    {
        "id": 1232,
        "word": "delicious",
        "phonetic": "[dɪˈlɪʃəs]",
        "meaning": "extremely pleasing to the sense of taste; greatly pleasing or entertaining"
    },
    {
        "id": 1233,
        "word": "delinquency",
        "phonetic": "[dɪˈlɪŋkwᵊnsi]",
        "meaning": "failure or omission of duty; fault; misdeed; offense or crime"
    },
    {
        "id": 1234,
        "word": "delinquent",
        "phonetic": "[dɪˈlɪŋkwᵊnt]",
        "meaning": "failing in duty; offending by neglect of duty."
    },
    {
        "id": 1235,
        "word": "deliver",
        "phonetic": "[dɪˈlɪvə]",
        "meaning": "set free from restraint; set at liberty; release; give or transfer"
    },
    {
        "id": 1236,
        "word": "delusion",
        "phonetic": "[dɪˈluːʒᵊn]",
        "meaning": "false belief; mistaken or unfounded opinion"
    },
    {
        "id": 1237,
        "word": "democracy",
        "phonetic": "[dɪˈmɒkrəsi]",
        "meaning": "a political system in which the supreme power lies in a body of citizens who can elect"
    },
    {
        "id": 1239,
        "word": "demolish",
        "phonetic": "[dɪˈmɒlɪʃ]",
        "meaning": "raze; destroy; do away with completely; put an end to"
    },
    {
        "id": 1240,
        "word": "demolition",
        "phonetic": "[ˌdɛməˈlɪʃᵊn]",
        "meaning": "act of overthrowing, pulling down, or destroying"
    },
    {
        "id": 1241,
        "word": "demonstrate",
        "phonetic": "[ˈdɛmənstreɪt]",
        "meaning": "show clearly and deliberately; manifest; confirm; prove"
    },
    {
        "id": 1242,
        "word": "demonstration",
        "phonetic": "[ˌdɛmənˈstreɪʃᵊn]",
        "meaning": "proof; act of showing or making evident"
    },
    {
        "id": 1243,
        "word": "denial",
        "phonetic": "[dɪˈnaɪəl]",
        "meaning": "act of refusing or disowning; negation; refusal to admit the truth; refusal to grant; rejection of a"
    },
    {
        "id": 1245,
        "word": "denomination",
        "phonetic": "[dɪˌnɒmɪˈneɪʃᵊn]",
        "meaning": "class, society, or collection of individuals called by the same name; specifically, a"
    },
    {
        "id": 1247,
        "word": "denote",
        "phonetic": "[dɪˈnəʊt]",
        "meaning": "indicate; signify directly; refer to specifically"
    },
    {
        "id": 1248,
        "word": "denounce",
        "phonetic": "[dɪˈnaʊns]",
        "meaning": "condemn openly; criticize; make known in formal manner"
    },
    {
        "id": 1249,
        "word": "dense",
        "phonetic": "[dɛns]",
        "meaning": "thick; crowded closely together; compact"
    },
    {
        "id": 1250,
        "word": "density",
        "phonetic": "[ˈdɛnsɪti]",
        "meaning": "thickness; quantity of something per unit measure, especially per unit length, area, or"
    },
    {
        "id": 1252,
        "word": "dent",
        "phonetic": "[dɛnt]",
        "meaning": "cavity; a depression scratched or carved into a surface"
    },
    {
        "id": 1253,
        "word": "dentist",
        "phonetic": "[ˈdɛntɪst]",
        "meaning": "a person qualified to practice dentistry"
    },
    {
        "id": 1254,
        "word": "deny",
        "phonetic": "[dɪˈnaɪ]",
        "meaning": "disagree with; refuse; declare untrue"
    },
    {
        "id": 1255,
        "word": "depart",
        "phonetic": "[dɪˈpɑːt]",
        "meaning": "take off; leave; set out"
    },
    {
        "id": 1256,
        "word": "departure",
        "phonetic": "[dɪˈpɑːʧə]",
        "meaning": "act of departing"
    },
    {
        "id": 1257,
        "word": "dependable",
        "phonetic": "[dɪˈpɛndəbᵊl]",
        "meaning": "reliable; worthy of being depended on; trustworthy"
    },
    {
        "id": 1258,
        "word": "dependence",
        "phonetic": "[dɪˈpɛndəns]",
        "meaning": "reliance; lack of independence or self-sufficiency"
    },
    {
        "id": 1259,
        "word": "dependent",
        "phonetic": "[dɪˈpɛndənt]",
        "meaning": "relying on or requiring the aid of another for support"
    },
    {
        "id": 1260,
        "word": "depict",
        "phonetic": "[dɪˈpɪkt]",
        "meaning": "represent in a picture or sculpture; portray in words; describe"
    },
    {
        "id": 1261,
        "word": "deplete",
        "phonetic": "[dɪˈpliːt]",
        "meaning": "decrease fullness of; use up or empty out"
    },
    {
        "id": 1262,
        "word": "deposit",
        "phonetic": "[dɪˈpɒzɪt]",
        "meaning": "money given as a guarantee or security"
    },
    {
        "id": 1263,
        "word": "deposition",
        "phonetic": "[ˌdɛpəˈzɪʃᵊn]",
        "meaning": "testimony under oath; act of depositing, especially laying down of matter by natural"
    },
    {
        "id": 1265,
        "word": "depreciate",
        "phonetic": "[dɪˈpriːʃieɪt]",
        "meaning": "lessen price or value of; think or speak of as being of little worth; belittle"
    },
    {
        "id": 1266,
        "word": "depreciation",
        "phonetic": "[dɪˌpriːʃiˈeɪʃᵊn]",
        "meaning": "devaluation; decrease in price or value"
    },
    {
        "id": 1267,
        "word": "depress",
        "phonetic": "[dɪˈprɛs]",
        "meaning": "lower in spirits; press down"
    },
    {
        "id": 1268,
        "word": "depressed",
        "phonetic": "[dɪˈprɛst]",
        "meaning": "sad; gloomy; low in spirits; dejected"
    },
    {
        "id": 1269,
        "word": "depression",
        "phonetic": "[dɪˈprɛʃᵊn]",
        "meaning": "recession; economic slump; concavity in a surface produced by pressing ; sadness; low"
    },
    {
        "id": 1271,
        "word": "deprive",
        "phonetic": "[dɪˈpraɪv]",
        "meaning": "deny; take away"
    },
    {
        "id": 1272,
        "word": "deputy",
        "phonetic": "[ˈdɛpjəti]",
        "meaning": "one appointed as the substitute of another, and empowered to act for him; substitute in office"
    },
    {
        "id": 1273,
        "word": "derive",
        "phonetic": "[dɪˈraɪv]",
        "meaning": "obtain or receive from a source; trace the origin or development of"
    },
    {
        "id": 1274,
        "word": "descend",
        "phonetic": "[dɪˈsɛnd]",
        "meaning": "move downward and lower; come from; be connected by a relationship of blood"
    },
    {
        "id": 1275,
        "word": "descendant",
        "phonetic": "[dɪˈsɛndᵊnt]",
        "meaning": "offspring; person considered as descended from some ancestor or race"
    },
    {
        "id": 1276,
        "word": "descent",
        "phonetic": "[dɪˈsɛnt]",
        "meaning": "ancestry; origin; the descendants of one individual; drop; fall; a movement downward"
    },
    {
        "id": 1277,
        "word": "description",
        "phonetic": "[dɪˈskrɪpʃᵊn]",
        "meaning": "act of describing; sketch or account of anything in words"
    },
    {
        "id": 1278,
        "word": "desert",
        "phonetic": "[ˈdɛzət]",
        "meaning": "area with little or no vegetation; forsake; abandon"
    },
    {
        "id": 1279,
        "word": "deserve",
        "phonetic": "[dɪˈzɜːv]",
        "meaning": "be worthy of; have a right to"
    },
    {
        "id": 1280,
        "word": "design",
        "phonetic": "[dɪˈzaɪn]",
        "meaning": "act of working out the form of something; creation of something in the mind; formulate a plan"
    },
    {
        "id": 1282,
        "word": "designate",
        "phonetic": "[ˈdɛzɪɡneɪt]",
        "meaning": "indicate or specify; point out; assign a name or title to"
    },
    {
        "id": 1283,
        "word": "desirable",
        "phonetic": "[dɪˈzaɪərəbᵊl]",
        "meaning": "worthwhile; worth doing or achieving; advisable"
    },
    {
        "id": 1284,
        "word": "desire",
        "phonetic": "[dɪˈzaɪə]",
        "meaning": "anything which is longing for"
    },
    {
        "id": 1285,
        "word": "desolate",
        "phonetic": "[ˈdɛsᵊlət]",
        "meaning": "unpopulated; providing no shelter or sustenance; devoid of inhabitants"
    },
    {
        "id": 1286,
        "word": "despair",
        "phonetic": "[dɪˈspeə]",
        "meaning": "loss of hope; utter hopelessness; complete despondency"
    },
    {
        "id": 1287,
        "word": "desperate",
        "phonetic": "[ˈdɛspᵊrət]",
        "meaning": "having lost all hope; dangerous; extremely intense"
    },
    {
        "id": 1288,
        "word": "despise",
        "phonetic": "[dɪˈspaɪz]",
        "meaning": "dislike intensely; regard with contempt or scorn"
    },
    {
        "id": 1289,
        "word": "despite",
        "phonetic": "[dɪˈspaɪt]",
        "meaning": "lack of respect accompanied by a feeling of intense dislike; disdain, contemptuous feelings,"
    },
    {
        "id": 1291,
        "word": "dessert",
        "phonetic": "[dɪˈzɜːt]",
        "meaning": "a dish served as the last course of meal"
    },
    {
        "id": 1292,
        "word": "destination",
        "phonetic": "[ˌdɛstɪˈneɪʃᵊn]",
        "meaning": "ultimate goal; place to which one is going or directed"
    },
    {
        "id": 1293,
        "word": "destine",
        "phonetic": "[ˈdɛstɪn]",
        "meaning": "decree or designate beforehand; fate"
    },
    {
        "id": 1294,
        "word": "destiny",
        "phonetic": "[ˈdɛstɪni]",
        "meaning": "event that will inevitably happen in the future"
    },
    {
        "id": 1295,
        "word": "destruction",
        "phonetic": "[dɪˈstrʌkʃᵊn]",
        "meaning": "havoc; event that completely destroys something"
    },
    {
        "id": 1296,
        "word": "destructive",
        "phonetic": "[dɪˈstrʌktɪv]",
        "meaning": "devastating; ruinous"
    },
    {
        "id": 1297,
        "word": "detach",
        "phonetic": "[dɪˈtæʧ]",
        "meaning": "part; separate or disunite; disengage"
    },
    {
        "id": 1298,
        "word": "detain",
        "phonetic": "[dɪˈteɪn]",
        "meaning": "keep back or from; withhold; restrain from proceeding; stay or stop; delay"
    },
    {
        "id": 1299,
        "word": "detect",
        "phonetic": "[dɪˈtɛkt]",
        "meaning": "feel; discover the presence of; identify"
    },
    {
        "id": 1300,
        "word": "detection",
        "phonetic": "[dɪˈtɛkʃᵊn]",
        "meaning": "act of detecting; being open what was concealed or hidden; discovery"
    },
    {
        "id": 1301,
        "word": "detective",
        "phonetic": "[dɪˈtɛktɪv]",
        "meaning": "investigator; one, usually of police force, who investigates crimes and obtains evidence"
    },
    {
        "id": 1302,
        "word": "deteriorate",
        "phonetic": "[dɪˈtɪərɪəreɪt]",
        "meaning": "become worse; decline"
    },
    {
        "id": 1303,
        "word": "determination",
        "phonetic": "[dɪˌtɜːmɪˈneɪʃᵊn]",
        "meaning": "act of making or arriving at a decision; putting an end to; termination"
    },
    {
        "id": 1304,
        "word": "determine",
        "phonetic": "[dɪˈtɜːmɪn]",
        "meaning": "fix the boundaries of; mark off and separate; set bounds to; decide conclusively and"
    },
    {
        "id": 1306,
        "word": "detour",
        "phonetic": "[ˈdiːtɔː]",
        "meaning": "a turning; circuitous route; deviation from a direct course"
    },
    {
        "id": 1307,
        "word": "detriment",
        "phonetic": "[ˈdɛtrɪmənt]",
        "meaning": "harm; damage; injury; something that causes damage, harm, or loss"
    },
    {
        "id": 1308,
        "word": "detrimental",
        "phonetic": "[ˌdɛtrɪˈmɛntᵊl]",
        "meaning": "causing damage or harm; injurious"
    },
    {
        "id": 1309,
        "word": "deviate",
        "phonetic": "[ˈdiːvieɪt]",
        "meaning": "turn away from a principle, norm; depart; diverge"
    },
    {
        "id": 1310,
        "word": "device",
        "phonetic": "[dɪˈvaɪs]",
        "meaning": "technique or means; instrument; machine used to perform one or more relatively simple tasks"
    },
    {
        "id": 1311,
        "word": "devise",
        "phonetic": "[dɪˈvaɪz]",
        "meaning": "form, plan, or arrange in the mind; transmit or give by will"
    },
    {
        "id": 1312,
        "word": "devote",
        "phonetic": "[dɪˈvəʊt]",
        "meaning": "dedicate; contribute"
    },
    {
        "id": 1313,
        "word": "devotion",
        "phonetic": "[dɪˈvəʊʃᵊn]",
        "meaning": "faithfulness; ardent, often selfless affection and dedication"
    },
    {
        "id": 1314,
        "word": "devour",
        "phonetic": "[dɪˈvaʊə]",
        "meaning": "consume; eat greedily; destroy completely"
    },
    {
        "id": 1315,
        "word": "diagnose",
        "phonetic": "[ˌdaɪəɡˈnəʊz]",
        "meaning": "analyze; examine; identify"
    },
    {
        "id": 1316,
        "word": "diagnosis",
        "phonetic": "[ˌdaɪəɡˈnəʊsɪs]",
        "meaning": "art of identifying disease; critical analysis of nature of something"
    },
    {
        "id": 1317,
        "word": "diagram",
        "phonetic": "[ˈdaɪəɡræm]",
        "meaning": "graph; chart; figure or drawing made to illustrate a statement; plan"
    },
    {
        "id": 1318,
        "word": "dialect",
        "phonetic": "[ˈdaɪəlɛkt]",
        "meaning": "vocabulary that is for a specific group of people"
    },
    {
        "id": 1319,
        "word": "diameter",
        "phonetic": "[daɪˈæmɪtə]",
        "meaning": "length of straight line passing through the center of a circle and connecting two points on"
    },
    {
        "id": 1321,
        "word": "dictate",
        "phonetic": "[dɪkˈteɪt]",
        "meaning": "prescribe; rule as a dictator"
    },
    {
        "id": 1322,
        "word": "dictator",
        "phonetic": "[dɪkˈteɪtə]",
        "meaning": "one who dictates; one who prescribes rules and maxims authoritatively for the direction of"
    },
    {
        "id": 1324,
        "word": "diction",
        "phonetic": "[ˈdɪkʃᵊn]",
        "meaning": "choice and use of words in speech or writing"
    },
    {
        "id": 1325,
        "word": "diet",
        "phonetic": "[ˈdaɪət]",
        "meaning": "nutritional plan; nourishment; a prescribed selection of foods"
    },
    {
        "id": 1326,
        "word": "differ",
        "phonetic": "[ˈdɪfə]",
        "meaning": "be or stand apart; disagree; be unlike; be distinguished"
    },
    {
        "id": 1327,
        "word": "digest",
        "phonetic": "[daɪˈʤɛst]",
        "meaning": "break down; make more concise; convert food into absorbable substances"
    },
    {
        "id": 1328,
        "word": "digestion",
        "phonetic": "[daɪˈʤɛsʧᵊn]",
        "meaning": "process by which food is converted into substances that can be absorbed and assimilated"
    },
    {
        "id": 1330,
        "word": "digital",
        "phonetic": "[ˈdɪʤɪtᵊl]",
        "meaning": "of or performance to fingers, or to digits; done with the fingers"
    },
    {
        "id": 1331,
        "word": "dignity",
        "phonetic": "[ˈdɪɡnəti]",
        "meaning": "quality or state of being worthy of esteem or respect."
    },
    {
        "id": 1332,
        "word": "diligent",
        "phonetic": "[ˈdɪlɪʤᵊnt]",
        "meaning": "assiduous; industrious; hard-working"
    },
    {
        "id": 1333,
        "word": "dilute",
        "phonetic": "[daɪˈljuːt]",
        "meaning": "weaken; make thinner or less concentrated by adding a liquid such as water"
    },
    {
        "id": 1334,
        "word": "dim",
        "phonetic": "[dɪm]",
        "meaning": "emitting only a small amount of light; lacking in brightness"
    },
    {
        "id": 1335,
        "word": "dime",
        "phonetic": "[daɪm]",
        "meaning": "a United States coin worth one tenth of a dollar"
    },
    {
        "id": 1336,
        "word": "dimension",
        "phonetic": "[dɪˈmɛnʃᵊn]",
        "meaning": "measure of spatial extent, especially width, height, or length; size; aspect; element"
    },
    {
        "id": 1337,
        "word": "dimensional",
        "phonetic": "[daɪˈmɛnʃᵊnᵊl]",
        "meaning": "of or relating to dimensions"
    },
    {
        "id": 1338,
        "word": "diminish",
        "phonetic": "[dɪˈmɪnɪʃ]",
        "meaning": "dwindle; reduce; make smaller or less or to cause to appear so"
    },
    {
        "id": 1339,
        "word": "dine",
        "phonetic": "[daɪn]",
        "meaning": "eat principal regular meal of the day; take dinner; give a dinner to"
    },
    {
        "id": 1340,
        "word": "dingy",
        "phonetic": "[ˈdɪnʤi]",
        "meaning": "darkened with smoke and grime; dirty or discolored"
    },
    {
        "id": 1341,
        "word": "dip",
        "phonetic": "[dɪp]",
        "meaning": "insert into a fluid and withdraw again; immerse for baptism; wet, as if by immersing; moisten;"
    },
    {
        "id": 1343,
        "word": "diploma",
        "phonetic": "[dɪˈpləʊmə]",
        "meaning": "document certifying the successful completion of a course of study"
    },
    {
        "id": 1344,
        "word": "diplomacy",
        "phonetic": "[dɪˈpləʊməsi]",
        "meaning": "tact; politics; negotiation between nations"
    },
    {
        "id": 1345,
        "word": "diplomat",
        "phonetic": "[ˈdɪpləmæt]",
        "meaning": "one who uses skill and tact in dealing with others, such as an ambassador, who has been"
    },
    {
        "id": 1347,
        "word": "diplomatic",
        "phonetic": "[ˌdɪpləˈmætɪk]",
        "meaning": "relating to diplomacy; marked by tact and sensitivity in dealing with others"
    },
    {
        "id": 1348,
        "word": "disable",
        "phonetic": "[dɪˈseɪbᵊl]",
        "meaning": "deprive of capability or effectiveness; unable; impair; diminish"
    },
    {
        "id": 1349,
        "word": "disadvantage",
        "phonetic": "[ˌdɪsədˈvɑːntɪʤ]",
        "meaning": "drawback; defect; hinder; unfavorable condition or circumstance"
    },
    {
        "id": 1350,
        "word": "disappointment",
        "phonetic": "[ˌdɪsəˈpɔɪntmənt]",
        "meaning": "feeling of dissatisfaction"
    },
    {
        "id": 1351,
        "word": "disapproval",
        "phonetic": "[ˌdɪsəˈpruːvᵊl]",
        "meaning": "a feeling of disliking something or what someone is doing"
    },
    {
        "id": 1352,
        "word": "disaster",
        "phonetic": "[dɪˈzɑːstə]",
        "meaning": "catastrophe; misfortune"
    },
    {
        "id": 1353,
        "word": "disastrous",
        "phonetic": "[dɪˈzɑːstrəs]",
        "meaning": "extremely bad; terrible; dreadful"
    },
    {
        "id": 1354,
        "word": "disc",
        "phonetic": "[dɪsk]",
        "meaning": "flat round plate; circular structure either in plants or animals"
    },
    {
        "id": 1355,
        "word": "discard",
        "phonetic": "[dɪˈskɑːd]",
        "meaning": "throw out something from one's hand; get rid of"
    },
    {
        "id": 1356,
        "word": "discern",
        "phonetic": "[dɪˈsɜːn]",
        "meaning": "detect; perceive"
    },
    {
        "id": 1357,
        "word": "discharge",
        "phonetic": "[dɪsˈʧɑːʤ]",
        "meaning": "relieve of a burden or of contents; unload; pour forth or release; complete or carry out;"
    },
    {
        "id": 1359,
        "word": "discipline",
        "phonetic": "[ˈdɪsəplɪn]",
        "meaning": "trait of being well behaved ; act of punishing ; system of rules of conduct or method of"
    },
    {
        "id": 1361,
        "word": "disclose",
        "phonetic": "[dɪˈskləʊz]",
        "meaning": "unclose; open; remove a cover or envelope from; lay open or expose to view"
    },
    {
        "id": 1362,
        "word": "discomfort",
        "phonetic": "[dɪˈskʌmfət]",
        "meaning": "distress; uneasiness; mental or bodily distress"
    },
    {
        "id": 1363,
        "word": "discount",
        "phonetic": "[ˈdɪskaʊnt]",
        "meaning": "give reduction in price on"
    },
    {
        "id": 1364,
        "word": "discourage",
        "phonetic": "[dɪˈskʌrɪʤ]",
        "meaning": "depress; take away hope from"
    },
    {
        "id": 1365,
        "word": "discourse",
        "phonetic": "[ˈdɪskɔːs]",
        "meaning": "formal, lengthy discussion of a subject; verbal exchange; conversation"
    },
    {
        "id": 1366,
        "word": "discreet",
        "phonetic": "[dɪˈskriːt]",
        "meaning": "free from ostentation or pretension; distinct; distinguishable"
    },
    {
        "id": 1367,
        "word": "discrepancy",
        "phonetic": "[dɪˈskrɛpᵊnsi]",
        "meaning": "lack of consistency; difference"
    },
    {
        "id": 1368,
        "word": "discretion",
        "phonetic": "[dɪˈskrɛʃᵊn]",
        "meaning": "knowing how to avoid embarrassment or distress; trait of judging wisely and objectively"
    },
    {
        "id": 1369,
        "word": "discriminate",
        "phonetic": "[dɪˈskrɪmɪneɪt]",
        "meaning": "make a clear distinction; distinguish; make sensible decisions; judge wisely"
    },
    {
        "id": 1370,
        "word": "disdain",
        "phonetic": "[dɪsˈdeɪn]",
        "meaning": "view with scorn or contempt; feel with aversion"
    },
    {
        "id": 1371,
        "word": "disgrace",
        "phonetic": "[dɪsˈɡreɪs]",
        "meaning": "state of dishonor; bring shame or dishonor upon"
    },
    {
        "id": 1372,
        "word": "disguise",
        "phonetic": "[dɪsˈɡaɪz]",
        "meaning": "dress or exterior put on for purposes of concealment or of deception"
    },
    {
        "id": 1373,
        "word": "disgust",
        "phonetic": "[dɪsˈɡʌst]",
        "meaning": "strong feelings of dislike; offend the taste or moral sense of"
    },
    {
        "id": 1374,
        "word": "disinclined",
        "phonetic": "[ˌdɪsɪnˈklaɪnd]",
        "meaning": "not inclined; having a disinclination; being unwilling"
    },
    {
        "id": 1375,
        "word": "disinfectant",
        "phonetic": "[ˌdɪsɪnˈfɛktᵊnt]",
        "meaning": "substance which kills germs or viruses; agent for removing the causes of infection, as"
    },
    {
        "id": 1377,
        "word": "dismal",
        "phonetic": "[ˈdɪzməl]",
        "meaning": "causing gloom or depression; dreary; somber; melancholy"
    },
    {
        "id": 1378,
        "word": "dismay",
        "phonetic": "[dɪˈsmeɪ]",
        "meaning": "destroy courage or resolution by exciting dread; cause to lose enthusiasm"
    },
    {
        "id": 1379,
        "word": "dismiss",
        "phonetic": "[dɪˈsmɪs]",
        "meaning": "stop considering; end employment or service of; discharge; refuse to accept or recognize"
    },
    {
        "id": 1380,
        "word": "disorder",
        "phonetic": "[dɪˈsɔːdə]",
        "meaning": "neglect of order or system; irregularity; disturbance; sickness"
    },
    {
        "id": 1381,
        "word": "disparity",
        "phonetic": "[dɪˈspærəti]",
        "meaning": "difference; condition or fact of being unequal, as in age, rank, or degree"
    },
    {
        "id": 1382,
        "word": "dispatch",
        "phonetic": "[dɪˈspæʧ]",
        "meaning": "act of sending off something; property of being prompt and efficient; message usually sent"
    },
    {
        "id": 1384,
        "word": "dispel",
        "phonetic": "[dɪˈspɛl]",
        "meaning": "scatter; drive away; cause to vanish"
    },
    {
        "id": 1385,
        "word": "dispense",
        "phonetic": "[dɪˈspɛns]",
        "meaning": "distribute; prepare and give out; deal out in parts or portions"
    },
    {
        "id": 1386,
        "word": "disperse",
        "phonetic": "[dɪˈspɜːs]",
        "meaning": "move away from each other; cause to separate; cause to become widely known"
    },
    {
        "id": 1387,
        "word": "displace",
        "phonetic": "[dɪˈspleɪs]",
        "meaning": "move or shift from the usual place or position, especially to force to leave a homeland"
    },
    {
        "id": 1388,
        "word": "displacement",
        "phonetic": "[dɪˈspleɪsmənt]",
        "meaning": "act of removing from office or employment"
    },
    {
        "id": 1389,
        "word": "display",
        "phonetic": "[dɪˈspleɪ]",
        "meaning": "exhibit; present or hold up to view; show; demonstrate; give evidence of; manifest"
    },
    {
        "id": 1390,
        "word": "dispose",
        "phonetic": "[dɪˈspəʊz]",
        "meaning": "get rid of; settle or decide a matter; place or set in a particular order; arrange"
    },
    {
        "id": 1391,
        "word": "disposed",
        "phonetic": "[dɪˈspəʊzd]",
        "meaning": "prepared; inclined; be ready; being particular condition of body or of health"
    },
    {
        "id": 1392,
        "word": "disposition",
        "phonetic": "[ˌdɪspəˈzɪʃᵊn]",
        "meaning": "natural or acquired habit with tendency; act or means of getting rid of something"
    },
    {
        "id": 1393,
        "word": "dispute",
        "phonetic": "[dɪˈspjuːt]",
        "meaning": "argument; angry altercation; quarrel; verbal controversy; debate"
    },
    {
        "id": 1394,
        "word": "disregard",
        "phonetic": "[ˌdɪsrɪˈɡɑːd]",
        "meaning": "ignore; discount; take no notice of"
    },
    {
        "id": 1395,
        "word": "dissimilar",
        "phonetic": "[ˌdɪˈsɪmɪlə]",
        "meaning": "different; unlike"
    },
    {
        "id": 1396,
        "word": "dissipate",
        "phonetic": "[ˈdɪsɪpeɪt]",
        "meaning": "spend or expend wastefully; vanish by dispersion; drive away; disperse"
    },
    {
        "id": 1397,
        "word": "dissolve",
        "phonetic": "[dɪˈzɒlv]",
        "meaning": "melt; liquefy; cause to pass into solution; cause to disappear or vanish"
    },
    {
        "id": 1398,
        "word": "distance",
        "phonetic": "[ˈdɪstᵊns]",
        "meaning": "space between two objects; length of a line, especially the shortest line joining two points"
    },
    {
        "id": 1400,
        "word": "distant",
        "phonetic": "[ˈdɪstᵊnt]",
        "meaning": "far in space or time; cold in manner"
    },
    {
        "id": 1401,
        "word": "distinct",
        "phonetic": "[dɪˈstɪŋkt]",
        "meaning": "definite; separate; different"
    },
    {
        "id": 1402,
        "word": "distinction",
        "phonetic": "[dɪˈstɪŋkʃᵊn]",
        "meaning": "excellence or eminence; note or mark of difference"
    },
    {
        "id": 1403,
        "word": "distinctly",
        "phonetic": "[dɪˈstɪŋktli]",
        "meaning": "clear to the mind; in a distinct way"
    },
    {
        "id": 1404,
        "word": "distinguish",
        "phonetic": "[dɪsˈtɪŋɡwɪʃ]",
        "meaning": "characterize; differentiate; recognize"
    },
    {
        "id": 1405,
        "word": "distinguished",
        "phonetic": "[dɪˈstɪŋɡwɪʃt]",
        "meaning": "prominent; celebrated, well-known or eminent because of past achievements"
    },
    {
        "id": 1406,
        "word": "distort",
        "phonetic": "[dɪˈstɔːt]",
        "meaning": "twist out of proper or natural relation of parts; misshape; misrepresent"
    },
    {
        "id": 1407,
        "word": "distortion",
        "phonetic": "[dɪˈstɔːʃᵊn]",
        "meaning": "mistake of misrepresenting the facts"
    },
    {
        "id": 1408,
        "word": "distract",
        "phonetic": "[dɪˈstrækt]",
        "meaning": "cause to turn away from original focus; pull in conflicting emotional directions; unsettle"
    },
    {
        "id": 1409,
        "word": "distraction",
        "phonetic": "[dɪˈstrækʃᵊn]",
        "meaning": "extreme mental or emotional disturbance; obsession; confusion of affairs; being drawn"
    },
    {
        "id": 1411,
        "word": "distress",
        "phonetic": "[dɪˈstrɛs]",
        "meaning": "discomfort; cause strain, anxiety, or suffering to"
    },
    {
        "id": 1412,
        "word": "distribute",
        "phonetic": "[dɪˈstrɪbjuːt]",
        "meaning": "hand out; disseminate; allocate"
    },
    {
        "id": 1413,
        "word": "distribution",
        "phonetic": "[ˌdɪstrɪˈbjuːʃᵊn]",
        "meaning": "act of distributing or spreading or apportioning"
    },
    {
        "id": 1414,
        "word": "district",
        "phonetic": "[ˈdɪstrɪkt]",
        "meaning": "region; territory within which the lord has the power of coercing and punishing; division of"
    },
    {
        "id": 1416,
        "word": "disturb",
        "phonetic": "[dɪˈstɜːb]",
        "meaning": "upset; bother; trouble emotionally or mentally; put out of order; disarrange"
    },
    {
        "id": 1417,
        "word": "disturbance",
        "phonetic": "[dɪˈstɜːbᵊns]",
        "meaning": "disorder; turmoil; mental or emotional unbalance or disorder"
    },
    {
        "id": 1418,
        "word": "ditch",
        "phonetic": "[dɪʧ]",
        "meaning": "trench made in the earth by digging; any long, narrow receptacle for water on the surface of the"
    },
    {
        "id": 1420,
        "word": "dive",
        "phonetic": "[daɪv]",
        "meaning": "plunge, especially headfirst, into water; plummet"
    },
    {
        "id": 1421,
        "word": "diver",
        "phonetic": "[ˈdaɪvə]",
        "meaning": "one who works underwater"
    },
    {
        "id": 1422,
        "word": "diverge",
        "phonetic": "[daɪˈvɜːʤ]",
        "meaning": "vary; go in different directions from the same point"
    },
    {
        "id": 1423,
        "word": "divergence",
        "phonetic": "[daɪˈvɜːʤᵊns]",
        "meaning": "difference; deviation; separation; the act of moving away in different direction"
    },
    {
        "id": 1424,
        "word": "diverse",
        "phonetic": "[daɪˈvɜːs]",
        "meaning": "differing in some characteristics; various"
    },
    {
        "id": 1425,
        "word": "diversion",
        "phonetic": "[daɪˈvɜːʃᵊn]",
        "meaning": "act of turning aside; pastime; activity that relaxes or entertains"
    },
    {
        "id": 1426,
        "word": "diversity",
        "phonetic": "[daɪˈvɜːsəti]",
        "meaning": "point or respect in which things differ; difference"
    },
    {
        "id": 1427,
        "word": "divert",
        "phonetic": "[daɪˈvɜːt]",
        "meaning": "distract; withdraw money and move into a different location"
    },
    {
        "id": 1428,
        "word": "divide",
        "phonetic": "[dɪˈvaɪd]",
        "meaning": "sever into two or more parts or pieces; separate into parts; cause to be separate"
    },
    {
        "id": 1429,
        "word": "divine",
        "phonetic": "[dɪˈvaɪn]",
        "meaning": "perceive intuitively; foresee future; have nature of or being a deity"
    },
    {
        "id": 1430,
        "word": "division",
        "phonetic": "[dɪˈvɪʒᵊn]",
        "meaning": "act or process of diving anything into parts; state of being divided; separation"
    },
    {
        "id": 1431,
        "word": "divorce",
        "phonetic": "[dɪˈvɔːs]",
        "meaning": "end a marriage; legal dissolution of a marriage"
    },
    {
        "id": 1432,
        "word": "dizzy",
        "phonetic": "[ˈdɪzi]",
        "meaning": "having or causing a whirling sensation"
    },
    {
        "id": 1433,
        "word": "dock",
        "phonetic": "[dɒk]",
        "meaning": "deprive someone of benefits; remove or shorten the tail of an animal"
    },
    {
        "id": 1434,
        "word": "doctrine",
        "phonetic": "[ˈdɒktrɪn]",
        "meaning": "principles presented for belief, as by religious; principle of law; act of teaching; instruction"
    },
    {
        "id": 1435,
        "word": "document",
        "phonetic": "[ˈdɒkjəmənt]",
        "meaning": "provide written evidence; record in detail"
    },
    {
        "id": 1436,
        "word": "documentary",
        "phonetic": "[ˌdɒkjəˈmɛntᵊri]",
        "meaning": "film or TV program presenting the facts about a person or event; of or derived from"
    },
    {
        "id": 1438,
        "word": "documentation",
        "phonetic": "[ˌdɒkjəmɛnˈteɪʃᵊn]",
        "meaning": "confirmation that some fact or statement is true"
    },
    {
        "id": 1439,
        "word": "dodge",
        "phonetic": "[dɒʤ]",
        "meaning": "avoid a blow by moving or shifting quickly aside; shifty or ingenious trick"
    },
    {
        "id": 1440,
        "word": "doll",
        "phonetic": "[dɒl]",
        "meaning": "small toy with human figure, normally for little child"
    },
    {
        "id": 1441,
        "word": "domain",
        "phonetic": "[dəˈmeɪn]",
        "meaning": "field; territory over which rule or control is exercised; networked computers that share a"
    },
    {
        "id": 1443,
        "word": "dome",
        "phonetic": "[dəʊm]",
        "meaning": "building or house, especially as great hall, church, or temple; anything shaped like cupola"
    },
    {
        "id": 1444,
        "word": "domestic",
        "phonetic": "[dəˈmɛstɪk]",
        "meaning": "house-hold; of or relating to the home ; within the country or home"
    },
    {
        "id": 1445,
        "word": "dominant",
        "phonetic": "[ˈdɒmɪnənt]",
        "meaning": "major; important; outweighing"
    },
    {
        "id": 1446,
        "word": "dominate",
        "phonetic": "[ˈdɒmɪneɪt]",
        "meaning": "monopolize; command; rule; prevail; be prevalent in"
    },
    {
        "id": 1447,
        "word": "donate",
        "phonetic": "[dəʊˈneɪt]",
        "meaning": "grant; present as a gift to a fund or cause; contribute"
    },
    {
        "id": 1448,
        "word": "donation",
        "phonetic": "[dəʊˈneɪʃᵊn]",
        "meaning": "grant; act of giving to a fund or cause"
    },
    {
        "id": 1449,
        "word": "doom",
        "phonetic": "[duːm]",
        "meaning": "judgment; judicial sentence; penal decree; condemnation"
    },
    {
        "id": 1450,
        "word": "dormitory",
        "phonetic": "[ˈdɔːmɪtᵊri]",
        "meaning": "a college or university building for student living; a large bedroom where several people"
    },
    {
        "id": 1452,
        "word": "dose",
        "phonetic": "[dəʊs]",
        "meaning": "quantity of medicine given; sufficient quantity; portion"
    },
    {
        "id": 1453,
        "word": "dot",
        "phonetic": "[dɒt]",
        "meaning": "the shorter of two telegraphic signals used in Morse code; very small circular shape"
    },
    {
        "id": 1454,
        "word": "doubt",
        "phonetic": "[daʊt]",
        "meaning": "being in uncertainty as to belief respecting anything"
    },
    {
        "id": 1455,
        "word": "doubtful",
        "phonetic": "[ˈdaʊtfʊl]",
        "meaning": "distrustful; skeptical; full of doubt; having doubt; not settled in opinion"
    },
    {
        "id": 1456,
        "word": "doubtless",
        "phonetic": "[ˈdaʊtləs]",
        "meaning": "free from fear or suspicion"
    },
    {
        "id": 1457,
        "word": "downtown",
        "phonetic": "[ˈdaʊntaʊn]",
        "meaning": "commercial center of a town or city"
    },
    {
        "id": 1458,
        "word": "doze",
        "phonetic": "[dəʊz]",
        "meaning": "slumber; sleep lightly; be in dull or stupefied condition, as if half asleep; be drowsy"
    },
    {
        "id": 1459,
        "word": "draft",
        "phonetic": "[drɑːft]",
        "meaning": "rough outline; draw up an outline; sketch"
    },
    {
        "id": 1460,
        "word": "drag",
        "phonetic": "[dræɡ]",
        "meaning": "move or bring by force or with great effort"
    },
    {
        "id": 1461,
        "word": "drain",
        "phonetic": "[dreɪn]",
        "meaning": "draw out; flow out; waste"
    },
    {
        "id": 1462,
        "word": "drainage",
        "phonetic": "[ˈdreɪnɪʤ]",
        "meaning": "emptying accomplished by draining; gradual flowing off, as of a liquid"
    },
    {
        "id": 1463,
        "word": "drama",
        "phonetic": "[ˈdrɑːmə]",
        "meaning": "play; literary work intended for theater"
    },
    {
        "id": 1464,
        "word": "dramatic",
        "phonetic": "[drəˈmætɪk]",
        "meaning": "striking; sensational in appearance or thrilling in effect"
    },
    {
        "id": 1465,
        "word": "dramatize",
        "phonetic": "[ˈdræmətaɪz]",
        "meaning": "represent something in a dramatic manner; add details to"
    },
    {
        "id": 1466,
        "word": "drastic",
        "phonetic": "[ˈdræstɪk]",
        "meaning": "radical; taking effect violently or rapidly"
    },
    {
        "id": 1467,
        "word": "draw",
        "phonetic": "[drɔː]",
        "meaning": "cause to move continuously by force applied in advance of the thing moved; pull along; haul;"
    },
    {
        "id": 1469,
        "word": "drawback",
        "phonetic": "[ˈdrɔːbæk]",
        "meaning": "disadvantage or inconvenience; shortcoming; refund or remittance, such as a discount on"
    },
    {
        "id": 1471,
        "word": "drawer",
        "phonetic": "[drɔː]",
        "meaning": "boxlike container in a piece of furniture, made so as to slide in and out"
    },
    {
        "id": 1472,
        "word": "drawing",
        "phonetic": "[ˈdrɔːɪŋ]",
        "meaning": "creation of artistic drawings"
    },
    {
        "id": 1473,
        "word": "dread",
        "phonetic": "[drɛd]",
        "meaning": "fearful or distasteful anticipation; terror; horror"
    },
    {
        "id": 1474,
        "word": "dreadful",
        "phonetic": "[ˈdrɛdfᵊl]",
        "meaning": "very unpleasant; distasteful or shocking"
    },
    {
        "id": 1475,
        "word": "dreary",
        "phonetic": "[ˈdrɪəri]",
        "meaning": "gloomy; dismal; dark, colorless, or cheerless"
    },
    {
        "id": 1476,
        "word": "drench",
        "phonetic": "[drɛnʧ]",
        "meaning": "cause to drink, especially by force; put potion down throat of; steep in moisture; wet"
    },
    {
        "id": 1478,
        "word": "drift",
        "phonetic": "[drɪft]",
        "meaning": "float; moving aimlessly; wander"
    },
    {
        "id": 1479,
        "word": "drill",
        "phonetic": "[drɪl]",
        "meaning": "bore; pierce; make a hole; practice; train"
    },
    {
        "id": 1480,
        "word": "drip",
        "phonetic": "[drɪp]",
        "meaning": "process of falling in drops; liquid or moisture that falls in drops; sound made by liquid falling in"
    },
    {
        "id": 1482,
        "word": "drought",
        "phonetic": "[draʊt]",
        "meaning": "dry period; aridity; long period of abnormally low rainfall"
    },
    {
        "id": 1483,
        "word": "drown",
        "phonetic": "[draʊn]",
        "meaning": "kill by submerging and suffocating in water; overwhelm in water; deaden one's awareness of"
    },
    {
        "id": 1484,
        "word": "dubious",
        "phonetic": "[ˈdjuːbiəs]",
        "meaning": "questionable; filled with doubt"
    },
    {
        "id": 1485,
        "word": "due",
        "phonetic": "[djuː]",
        "meaning": "owed and payable immediately or on demand; proper and appropriate; fitting"
    },
    {
        "id": 1486,
        "word": "dull",
        "phonetic": "[dʌl]",
        "meaning": "lacking responsiveness or alertness; intellectually weak or obtuse"
    },
    {
        "id": 1487,
        "word": "duly",
        "phonetic": "[ˈdjuːli]",
        "meaning": "as it ought to be; properly; regularly"
    },
    {
        "id": 1488,
        "word": "dumb",
        "phonetic": "[dʌm]",
        "meaning": "mute; lacking the power of speech"
    },
    {
        "id": 1489,
        "word": "dump",
        "phonetic": "[dʌmp]",
        "meaning": "sell at artificially low prices; throw away as refuse"
    },
    {
        "id": 1490,
        "word": "duplicate",
        "phonetic": "[ˈdjuːplɪkeɪt]",
        "meaning": "one that corresponds exactly to another, especially an original; identical copy; facsimile"
    },
    {
        "id": 1491,
        "word": "durable",
        "phonetic": "[ˈdjʊərəbᵊl]",
        "meaning": "lasting; long-lasting; enduring"
    },
    {
        "id": 1492,
        "word": "duration",
        "phonetic": "[djʊˈreɪʃᵊn]",
        "meaning": "length of time something lasts"
    },
    {
        "id": 1493,
        "word": "dwarf",
        "phonetic": "[dwɔːf]",
        "meaning": "cause to seem small; check natural growth or development of"
    },
    {
        "id": 1494,
        "word": "dwell",
        "phonetic": "[dwɛl]",
        "meaning": "live as a resident; exist in a given place or state"
    },
    {
        "id": 1495,
        "word": "dweller",
        "phonetic": "[ˈdwɛlə]",
        "meaning": "a person who inhabits a particular place"
    },
    {
        "id": 1496,
        "word": "dwelling",
        "phonetic": "[ˈdwɛlɪŋ]",
        "meaning": "residence; place to live in; abode"
    },
    {
        "id": 1497,
        "word": "dye",
        "phonetic": "[daɪ]",
        "meaning": "substance used to color materials"
    },
    {
        "id": 1498,
        "word": "dynamic",
        "phonetic": "[daɪˈnæmɪk]",
        "meaning": "energetic; vigorously active "
    },
    {
        "id": 1503,
        "word": "eager",
        "phonetic": "[ˈiːɡə]",
        "meaning": "avid; enthusiastic"
    },
    {
        "id": 1504,
        "word": "earnest",
        "phonetic": "[ˈɜːnɪst]",
        "meaning": "seriousness; reality; fixed determination; eagerness; intentness"
    },
    {
        "id": 1505,
        "word": "earthquake",
        "phonetic": "[ˈɜːθkweɪk]",
        "meaning": "quake from underground; disturbance that is extremely disruptive; temblor"
    },
    {
        "id": 1506,
        "word": "ease",
        "phonetic": "[iːz]",
        "meaning": "satisfaction; pleasure; entertainment; freedom from care"
    },
    {
        "id": 1507,
        "word": "eccentric",
        "phonetic": "[ɪkˈsɛntrɪk]",
        "meaning": "departing from a recognized, conventional, or established norm or pattern"
    },
    {
        "id": 1508,
        "word": "eccentricity",
        "phonetic": "[ˌɛksɛnˈtrɪsəti]",
        "meaning": "oddity; departure from that which is stated, regular, or usual; deviation from center"
    },
    {
        "id": 1509,
        "word": "echo",
        "phonetic": "[ˈɛkəʊ]",
        "meaning": "sound reflected from an opposing surface and repeated to the ear; repetition of a sound"
    },
    {
        "id": 1510,
        "word": "eclipse",
        "phonetic": "[ɪˈklɪps]",
        "meaning": "darken; exceed in importance; outweigh"
    },
    {
        "id": 1511,
        "word": "ecology",
        "phonetic": "[ɪˈkɒləʤi]",
        "meaning": "science of the relationships between organisms and their environments"
    },
    {
        "id": 1512,
        "word": "economic",
        "phonetic": "[ˌiːkəˈnɒmɪk]",
        "meaning": "pertaining to economy; frugal; cheap"
    },
    {
        "id": 1513,
        "word": "economical",
        "phonetic": "[ˌiːkəˈnɒmɪkᵊl]",
        "meaning": "thrifty; saving; using the minimum of time or resources necessary for effectiveness"
    },
    {
        "id": 1514,
        "word": "economics",
        "phonetic": "[ˌiːkəˈnɒmɪks]",
        "meaning": "branch of social science that deals with the production and distribution and consumption"
    },
    {
        "id": 1516,
        "word": "economize",
        "phonetic": "[ɪˈkɒnəmaɪz]",
        "meaning": "save money or resource; cut back; be thrifty"
    },
    {
        "id": 1517,
        "word": "economy",
        "phonetic": "[ɪˈkɒnəmi]",
        "meaning": "efficient use of resources; reduction in cost; specific type of economic system"
    },
    {
        "id": 1518,
        "word": "ecstasy",
        "phonetic": "[ˈɛkstəsi]",
        "meaning": "intense joy or delight; any overpowering emotion"
    },
    {
        "id": 1519,
        "word": "edge",
        "phonetic": "[ɛʤ]",
        "meaning": "brink; perimeter; margin"
    },
    {
        "id": 1520,
        "word": "edit",
        "phonetic": "[ˈɛdɪt]",
        "meaning": "revise and prepare for publication; select, correct, arrange matter of, for publication"
    },
    {
        "id": 1521,
        "word": "edition",
        "phonetic": "[ɪˈdɪʃᵊn]",
        "meaning": "whole number of copies of a work printed and published; single copy; act of editing"
    },
    {
        "id": 1522,
        "word": "editorial",
        "phonetic": "[ˌɛdɪˈtɔːriəl]",
        "meaning": "of or pertaining to an editor; written or sanctioned by an editor"
    },
    {
        "id": 1523,
        "word": "education",
        "phonetic": "[ˌɛʤʊˈkeɪʃᵊn]",
        "meaning": "act or process of educating; the result of educating"
    },
    {
        "id": 1524,
        "word": "effective",
        "phonetic": "[ɪˈfɛktɪv]",
        "meaning": "efficient; productive; producing a strong impression or response"
    },
    {
        "id": 1525,
        "word": "effectiveness",
        "phonetic": "[ɪˈfɛktɪvnəs]",
        "meaning": "efficiency; quality of being effective"
    },
    {
        "id": 1526,
        "word": "efficiency",
        "phonetic": "[ɪˈfɪʃᵊnsi]",
        "meaning": "effectiveness; quality or property of being efficient; ratio of useful output to the total input"
    },
    {
        "id": 1528,
        "word": "efficient",
        "phonetic": "[ɪˈfɪʃᵊnt]",
        "meaning": "effective; acting directly to produce an effect; exhibiting a high ratio of output to input"
    },
    {
        "id": 1529,
        "word": "effort",
        "phonetic": "[ˈɛfət]",
        "meaning": "exertion of strength or power, whether physical or mental, in performing an act or aiming at an"
    },
    {
        "id": 1531,
        "word": "eject",
        "phonetic": "[iˈʤɛkt]",
        "meaning": "put out or expel from a place; discharge"
    },
    {
        "id": 1532,
        "word": "elaborate",
        "phonetic": "[ɪˈlæbᵊrət]",
        "meaning": "marked by complexity and richness of detail; done with care and in minute detail"
    },
    {
        "id": 1533,
        "word": "elaboration",
        "phonetic": "[ɪˌlæbəˈreɪʃᵊn]",
        "meaning": "production by gradual process; act of working out with great care in detail"
    },
    {
        "id": 1534,
        "word": "elapse",
        "phonetic": "[ɪˈlæps]",
        "meaning": "slip or glide away; pass away silently"
    },
    {
        "id": 1535,
        "word": "elastic",
        "phonetic": "[ɪˈlæstɪk]",
        "meaning": "springing back; having the power of rebounding; able to return quickly to a former state or"
    },
    {
        "id": 1537,
        "word": "elasticity",
        "phonetic": "[ˌiːlæˈstɪsəti]",
        "meaning": "tendency of a body to return to its original shape after it has been stretched or compressed"
    },
    {
        "id": 1538,
        "word": "elbow",
        "phonetic": "[ˈɛlbəʊ]",
        "meaning": "hinge joint between the forearm and upper arm"
    },
    {
        "id": 1539,
        "word": "election",
        "phonetic": "[ɪˈlɛkʃᵊn]",
        "meaning": "voting; balloting; right or ability to make a choice"
    },
    {
        "id": 1540,
        "word": "electrical",
        "phonetic": "[ɪˈlɛktrɪkᵊl]",
        "meaning": "pertaining to electricity; electric"
    },
    {
        "id": 1541,
        "word": "electrician",
        "phonetic": "[ˌɪlɛkˈtrɪʃᵊn]",
        "meaning": "one whose occupation is the installation, maintenance, repair, or operation of electric"
    },
    {
        "id": 1543,
        "word": "electron",
        "phonetic": "[ɪˈlɛktrɒn]",
        "meaning": "elementary particle with negative charge"
    },
    {
        "id": 1544,
        "word": "electronic",
        "phonetic": "[ˌɛlɛkˈtrɒnɪk]",
        "meaning": "of or pertaining to an electron or electrons."
    },
    {
        "id": 1545,
        "word": "electronics",
        "phonetic": "[ˌɛlɛkˈtrɒnɪks]",
        "meaning": "branch of physics that deals with the behavior of electrons; electronic devices"
    },
    {
        "id": 1546,
        "word": "elegance",
        "phonetic": "[ˈɛlɪɡᵊns]",
        "meaning": "refined quality of gracefulness and good taste"
    },
    {
        "id": 1547,
        "word": "elegant",
        "phonetic": "[ˈɛlɪɡᵊnt]",
        "meaning": "refined and tasteful in appearance or behavior or style"
    },
    {
        "id": 1548,
        "word": "element",
        "phonetic": "[ˈɛlɪmənt]",
        "meaning": "fundamental or essential constituent of a composite entity; basic assumptions or principles"
    },
    {
        "id": 1550,
        "word": "elementary",
        "phonetic": "[ˌɛlɪˈmɛntᵊri]",
        "meaning": "basic; fundamental"
    },
    {
        "id": 1551,
        "word": "elevate",
        "phonetic": "[ˈɛlɪveɪt]",
        "meaning": "raise; give a promotion to or assign to a higher position"
    },
    {
        "id": 1552,
        "word": "elevation",
        "phonetic": "[ˌɛlɪˈveɪʃᵊn]",
        "meaning": "altitude; height"
    },
    {
        "id": 1553,
        "word": "elevator",
        "phonetic": "[ˈɛlɪveɪtə]",
        "meaning": "lifting device consisting of a platform or cage"
    },
    {
        "id": 1554,
        "word": "eliminate",
        "phonetic": "[ɪˈlɪmɪneɪt]",
        "meaning": "eradicate; abolish; rule out"
    },
    {
        "id": 1555,
        "word": "elimination",
        "phonetic": "[ɪˌlɪmɪˈneɪʃᵊn]",
        "meaning": "act of removing or getting rid of something"
    },
    {
        "id": 1556,
        "word": "ellipsis",
        "phonetic": "[ɪˈlɪpsɪs]",
        "meaning": "omission of words from text; mark or series of marks used in writing to indicate omission"
    },
    {
        "id": 1557,
        "word": "elliptical",
        "phonetic": "[ɪˈlɪptɪkᵊl]",
        "meaning": "rounded like an egg; in a shape reminding of an ellipse; oval"
    },
    {
        "id": 1558,
        "word": "eloquence",
        "phonetic": "[ˈɛləkwᵊns]",
        "meaning": "powerful and effective language; persuasive speech"
    },
    {
        "id": 1559,
        "word": "eloquent",
        "phonetic": "[ˈɛləkwᵊnt]",
        "meaning": "vividly or movingly expressive; persuasive"
    },
    {
        "id": 1560,
        "word": "elusive",
        "phonetic": "[ɪˈluːsɪv]",
        "meaning": "difficult to describe; difficult to detect or grasp by mind"
    },
    {
        "id": 1561,
        "word": "emancipate",
        "phonetic": "[ɪˈmænsɪpeɪt]",
        "meaning": "free from bondage, oppression, or restraint; liberate"
    },
    {
        "id": 1562,
        "word": "emancipation",
        "phonetic": "[ɪˌmænsɪˈpeɪʃᵊn]",
        "meaning": "freeing someone from the control of another"
    },
    {
        "id": 1563,
        "word": "embargo",
        "phonetic": "[ɛmˈbɑːɡəʊ]",
        "meaning": "ban on commerce or other activity"
    },
    {
        "id": 1564,
        "word": "embark",
        "phonetic": "[ɪmˈbɑːk]",
        "meaning": "commence; go on board a boat or airplane; begin a journey"
    },
    {
        "id": 1565,
        "word": "embarrass",
        "phonetic": "[ɪmˈbærəs]",
        "meaning": "humiliate; shame; cause to feel self-conscious or ill at ease; disconcert"
    },
    {
        "id": 1566,
        "word": "embassy",
        "phonetic": "[ˈɛmbəsi]",
        "meaning": "diplomatic building where ambassadors live or work; diplomatic representatives headed by"
    },
    {
        "id": 1568,
        "word": "embody",
        "phonetic": "[ɪmˈbɒdi]",
        "meaning": "give a bodily form to; represent in bodily or material form; incorporate"
    },
    {
        "id": 1569,
        "word": "embrace",
        "phonetic": "[ɪmˈbreɪs]",
        "meaning": "hug; adopt or espouse; accept readily; hold close with the arms, usually as an expression"
    },
    {
        "id": 1571,
        "word": "embroider",
        "phonetic": "[ɪmˈbrɔɪdə]",
        "meaning": "decorate with needlework; add details to"
    },
    {
        "id": 1572,
        "word": "embroidery",
        "phonetic": "[ɪmˈbrɔɪdᵊri]",
        "meaning": "elaboration by the use of decorative detail; ornamentation of fabric with needlework"
    },
    {
        "id": 1573,
        "word": "emerge",
        "phonetic": "[ɪˈmɜːʤ]",
        "meaning": "come into prominence; spring up; appear"
    },
    {
        "id": 1574,
        "word": "emergency",
        "phonetic": "[ɪˈmɜːʤᵊnsi]",
        "meaning": "sudden unforeseen crisis; condition of urgent need for action or assistance"
    },
    {
        "id": 1575,
        "word": "emigrant",
        "phonetic": "[ˈɛmɪɡrənt]",
        "meaning": "someone who leaves one country to settle in another"
    },
    {
        "id": 1576,
        "word": "emigrate",
        "phonetic": "[ˈɛmɪɡreɪt]",
        "meaning": "remove from one country or State to another, for the purpose of residence; migrate from"
    },
    {
        "id": 1578,
        "word": "eminent",
        "phonetic": "[ˈɛmɪnənt]",
        "meaning": "standing out above other things; high in rank, office, or worth"
    },
    {
        "id": 1579,
        "word": "emission",
        "phonetic": "[ɪˈmɪʃᵊn]",
        "meaning": "radiation; discharge; act of emitting"
    },
    {
        "id": 1580,
        "word": "emit",
        "phonetic": "[ɪˈmɪt]",
        "meaning": "give off; send out; give out as sound"
    },
    {
        "id": 1581,
        "word": "emotion",
        "phonetic": "[ɪˈməʊʃᵊn]",
        "meaning": "feeling; mood; state of mental agitation or disturbance"
    },
    {
        "id": 1582,
        "word": "emotional",
        "phonetic": "[ɪˈməʊʃᵊnᵊl]",
        "meaning": "sentimental; passionate; excitable; easily moved"
    },
    {
        "id": 1583,
        "word": "emphasis",
        "phonetic": "[ˈɛmfəsɪs]",
        "meaning": "special attention or effort directed toward something; stress"
    },
    {
        "id": 1584,
        "word": "emphasize",
        "phonetic": "[ˈɛmfəsaɪz]",
        "meaning": "stress; underscore; utter or pronounce with a particular stress of voice"
    },
    {
        "id": 1585,
        "word": "empirical",
        "phonetic": "[ɪmˈpɪrɪkᵊl]",
        "meaning": "derived from experiment and observation rather than theory"
    },
    {
        "id": 1586,
        "word": "employ",
        "phonetic": "[ɪmˈplɔɪ]",
        "meaning": "engage the services of; put to work; apply"
    },
    {
        "id": 1587,
        "word": "employee",
        "phonetic": "[ˌɛmplɔɪˈiː]",
        "meaning": "worker; person who works for another in return for financial or other compensation"
    },
    {
        "id": 1588,
        "word": "employer",
        "phonetic": "[ɪmˈplɔɪə]",
        "meaning": "a person or firm that employs workers"
    },
    {
        "id": 1589,
        "word": "employment",
        "phonetic": "[ɪmˈplɔɪmənt]",
        "meaning": "act of employing or using"
    },
    {
        "id": 1590,
        "word": "empty",
        "phonetic": "[ˈɛmpti]",
        "meaning": "containing nothing; not holding or having anything within; void of contents or appropriate"
    },
    {
        "id": 1592,
        "word": "enable",
        "phonetic": "[ɪˈneɪbᵊl]",
        "meaning": "supply with the means, knowledge, or opportunity; make able; make feasible or possible"
    },
    {
        "id": 1593,
        "word": "enchant",
        "phonetic": "[ɪnˈʧɑːnt]",
        "meaning": "charm by sorcery; get control of by magical words and rites"
    },
    {
        "id": 1594,
        "word": "encircle",
        "phonetic": "[ɪnˈsɜːkᵊl]",
        "meaning": "form a circle about; inclose within a circle or ring; surround"
    },
    {
        "id": 1595,
        "word": "enclose",
        "phonetic": "[ɪnˈkləʊz]",
        "meaning": "include; surround on all sides; close in"
    },
    {
        "id": 1596,
        "word": "enclosure",
        "phonetic": "[ɪnˈkləʊʒə]",
        "meaning": "place where animals are kept"
    },
    {
        "id": 1597,
        "word": "encounter",
        "phonetic": "[ɪnˈkaʊntə]",
        "meaning": "face; confront; meet, especially unexpectedly; come upon"
    },
    {
        "id": 1598,
        "word": "encourage",
        "phonetic": "[ɪnˈkʌrɪʤ]",
        "meaning": "activate; stimulate"
    },
    {
        "id": 1599,
        "word": "endanger",
        "phonetic": "[ɪnˈdeɪnʤə]",
        "meaning": "threaten; jeopardize; do something that may damage it or destroy it"
    },
    {
        "id": 1600,
        "word": "endeavor",
        "phonetic": "[ɪnˈdɛvə]",
        "meaning": "attempt by employing effort"
    },
    {
        "id": 1601,
        "word": "endless",
        "phonetic": "[ˈɛndləs]",
        "meaning": "without end; having no end or conclusion; perpetual; interminable"
    },
    {
        "id": 1602,
        "word": "endorse",
        "phonetic": "[ɪnˈdɔːs]",
        "meaning": "acknowledge by signing a bill, draft, or other instrument"
    },
    {
        "id": 1603,
        "word": "endorsement",
        "phonetic": "[ɪnˈdɔːsmənt]",
        "meaning": "act of endorsing; support; formal and explicit approval; signature that validates"
    },
    {
        "id": 1605,
        "word": "endow",
        "phonetic": "[ɪnˈdaʊ]",
        "meaning": "grant; award; give qualities or abilities to"
    },
    {
        "id": 1606,
        "word": "endurance",
        "phonetic": "[ɪnˈdjʊərᵊns]",
        "meaning": "perseverance; state or fact of persevering; continuing existence"
    },
    {
        "id": 1607,
        "word": "endure",
        "phonetic": "[ɪnˈdjʊə]",
        "meaning": "tolerate; carry on through, despite hardships"
    },
    {
        "id": 1608,
        "word": "energetic",
        "phonetic": "[ˌɛnəˈʤɛtɪk]",
        "meaning": "active; brisk; vigorous"
    },
    {
        "id": 1609,
        "word": "energy",
        "phonetic": "[ˈɛnəʤi]",
        "meaning": "exertion of force; capacity for work or vigorous activity; usable heat or power"
    },
    {
        "id": 1610,
        "word": "enforce",
        "phonetic": "[ɪnˈfɔːs]",
        "meaning": "put force upon; force; constrain; compel; put in motion or action by violence"
    },
    {
        "id": 1611,
        "word": "engage",
        "phonetic": "[ɪnˈɡeɪʤ]",
        "meaning": "obtain for services of; arrange for the use of; pledge or promise, especially to marry"
    },
    {
        "id": 1612,
        "word": "engagement",
        "phonetic": "[ɪnˈɡeɪʤmənt]",
        "meaning": "act of engaging, pledging, enlisting, occupying, or entering into contest; state of being"
    },
    {
        "id": 1614,
        "word": "engrave",
        "phonetic": "[ɪnˈɡreɪv]",
        "meaning": "carve or cut into a block or surface, as used for printing; impress deeply as if by carving"
    },
    {
        "id": 1615,
        "word": "engraving",
        "phonetic": "[ɪnˈɡreɪvɪŋ]",
        "meaning": "practice of incising a design onto a hard, flat surface, by cutting grooves into it"
    },
    {
        "id": 1616,
        "word": "engulf",
        "phonetic": "[ɪnˈɡʌlf]",
        "meaning": "absorb or swallow up as in a gulf; flow over or cover completely"
    },
    {
        "id": 1617,
        "word": "enhance",
        "phonetic": "[ɪnˈhɑːns]",
        "meaning": "make better or more attractive; increase; improve"
    },
    {
        "id": 1618,
        "word": "enhancement",
        "phonetic": "[ɪnˈhɑːnsmənt]",
        "meaning": "act of increasing, or state of being increased; augmentation; aggravation"
    },
    {
        "id": 1619,
        "word": "enlighten",
        "phonetic": "[ɪnˈlaɪtᵊn]",
        "meaning": "supply with light; illuminate, as the sun enlightens the earth; make clear to the intellect or"
    },
    {
        "id": 1621,
        "word": "enormous",
        "phonetic": "[ɪˈnɔːməs]",
        "meaning": "very great in size, extent, number, or degrees; huge; massive"
    },
    {
        "id": 1622,
        "word": "enquire",
        "phonetic": "[ɪnˈkwaɪə]",
        "meaning": "seek information by asking a question"
    },
    {
        "id": 1623,
        "word": "enquiry",
        "phonetic": "[ɪnˈkwaɪəri]",
        "meaning": "search for knowledge"
    },
    {
        "id": 1624,
        "word": "enrich",
        "phonetic": "[ɪnˈrɪʧ]",
        "meaning": "make rich; richen; improve"
    },
    {
        "id": 1625,
        "word": "enroll",
        "phonetic": "[ɪnˈrəʊl]",
        "meaning": "insert in a roil; register or enter in list or catalogue; insert in records; enlist"
    },
    {
        "id": 1626,
        "word": "enrolment",
        "phonetic": "[ɪnˈrəʊlmənt]",
        "meaning": "act of enrolling; specifically, the registering, recording, or entering"
    },
    {
        "id": 1627,
        "word": "ensure",
        "phonetic": "[ɪnˈʃɔː]",
        "meaning": "make sure or certain; insure; assure"
    },
    {
        "id": 1628,
        "word": "entail",
        "phonetic": "[ɪnˈteɪl]",
        "meaning": "imply or require; cause to ensue or accrue; cut or carve in ornamental way"
    },
    {
        "id": 1629,
        "word": "enterprise",
        "phonetic": "[ˈɛntəpraɪz]",
        "meaning": "company; firm; organization created for business ventures"
    },
    {
        "id": 1630,
        "word": "entertain",
        "phonetic": "[ˌɛntəˈteɪn]",
        "meaning": "amuse; host"
    },
    {
        "id": 1631,
        "word": "entertainment",
        "phonetic": "[ˌɛntəˈteɪnmənt]",
        "meaning": "amusement; fun"
    },
    {
        "id": 1632,
        "word": "enthusiasm",
        "phonetic": "[ɪnˈθjuːziæzᵊm]",
        "meaning": "great excitement for or interest in a subject or cause; feeling of excitement"
    },
    {
        "id": 1633,
        "word": "enthusiastic",
        "phonetic": "[ɪnˌθjuːziˈæstɪk]",
        "meaning": "having or showing great excitement and interest"
    },
    {
        "id": 1634,
        "word": "entitle",
        "phonetic": "[ɪnˈtaɪtᵊl]",
        "meaning": "give right to; authorize; furnish with a right or claim to something; designate; give title to"
    },
    {
        "id": 1635,
        "word": "entrance",
        "phonetic": "[ˈɛntrəns]",
        "meaning": "fill with delight or wonder; put into a trance; attract"
    },
    {
        "id": 1636,
        "word": "entreat",
        "phonetic": "[ɪnˈtriːt]",
        "meaning": "plead; make earnest request of; ask for earnestly"
    },
    {
        "id": 1637,
        "word": "entrust",
        "phonetic": "[ɪnˈtrʌst]",
        "meaning": "give over something to another for care, protection, or performance; give as a trust to"
    },
    {
        "id": 1639,
        "word": "entry",
        "phonetic": "[ˈɛntri]",
        "meaning": "admission; entrance; item inserted in a written record"
    },
    {
        "id": 1640,
        "word": "enumerate",
        "phonetic": "[ɪˈnjuːməreɪt]",
        "meaning": "list each one; mention one by one"
    },
    {
        "id": 1641,
        "word": "envelop",
        "phonetic": "[ɪnˈvɛləp]",
        "meaning": "enclose or encase completely with or as if with a covering"
    },
    {
        "id": 1642,
        "word": "environment",
        "phonetic": "[ɪnˈvaɪrᵊnmənt]",
        "meaning": "surroundings; totality of surrounding conditions"
    },
    {
        "id": 1643,
        "word": "envy",
        "phonetic": "[ˈɛnvi]",
        "meaning": "malice; ill will; discontent or uneasiness at another's excellence or good fortune, accompanied"
    },
    {
        "id": 1645,
        "word": "epidemic",
        "phonetic": "[ˌɛpɪˈdɛmɪk]",
        "meaning": "outbreak of a contagious disease that spreads rapidly and widely; widely prevalent"
    },
    {
        "id": 1646,
        "word": "episode",
        "phonetic": "[ˈɛpɪsəʊd]",
        "meaning": "a brief section of a literary or dramatic work that forms part of a connected series"
    },
    {
        "id": 1647,
        "word": "epoch",
        "phonetic": "[ˈiːpɒk]",
        "meaning": "particular period of history, especially one considered remarkable"
    },
    {
        "id": 1648,
        "word": "equal",
        "phonetic": "[ˈiːkwəl]",
        "meaning": "having the same quantity, measure, or value as another; identical"
    },
    {
        "id": 1649,
        "word": "equality",
        "phonetic": "[iˈkwɒləti]",
        "meaning": "state or quality of being equal"
    },
    {
        "id": 1650,
        "word": "equation",
        "phonetic": "[ɪˈkweɪʒᵊn]",
        "meaning": "making equal; equal division; equality; equilibrium"
    },
    {
        "id": 1651,
        "word": "equator",
        "phonetic": "[ɪˈkweɪtə]",
        "meaning": "the imaginary great circle on the earth's surface, everywhere equally distant from the two"
    },
    {
        "id": 1653,
        "word": "equilibrium",
        "phonetic": "[ˌɛkwɪˈlɪbriəm]",
        "meaning": "mental or emotional balance; state of balance of any causes, powers, or motives"
    },
    {
        "id": 1654,
        "word": "equip",
        "phonetic": "[ɪˈkwɪp]",
        "meaning": "supply with necessities such as tools or provisions; furnish with the qualities necessary for"
    },
    {
        "id": 1656,
        "word": "equipment",
        "phonetic": "[ɪˈkwɪpmənt]",
        "meaning": "apparatus"
    },
    {
        "id": 1657,
        "word": "equivalent",
        "phonetic": "[ɪˈkwɪvᵊlᵊnt]",
        "meaning": "interchangeable; comparable; equal, as in value, force, or meaning"
    },
    {
        "id": 1658,
        "word": "eradicate",
        "phonetic": "[ɪˈrædɪkeɪt]",
        "meaning": "completely destroy; eliminate; exterminate"
    },
    {
        "id": 1659,
        "word": "erase",
        "phonetic": "[ɪˈreɪz]",
        "meaning": "rub letters or characters written, engraved, or painted"
    },
    {
        "id": 1660,
        "word": "erect",
        "phonetic": "[ɪˈrɛkt]",
        "meaning": "construct; stand; set up"
    },
    {
        "id": 1661,
        "word": "erosion",
        "phonetic": "[ɪˈrəʊʒᵊn]",
        "meaning": "corrosion; a gradual decline of something"
    },
    {
        "id": 1662,
        "word": "errand",
        "phonetic": "[ˈɛrənd]",
        "meaning": "short trip taken to perform a specified task; mission; embassy"
    },
    {
        "id": 1663,
        "word": "erupt",
        "phonetic": "[ɪˈrʌpt]",
        "meaning": "explode; burst out; become violently active"
    },
    {
        "id": 1664,
        "word": "eruption",
        "phonetic": "[ɪˈrʌpʃᵊn]",
        "meaning": "outbreak; sudden, often violent outburst"
    },
    {
        "id": 1665,
        "word": "escalator",
        "phonetic": "[ˈɛskəleɪtə]",
        "meaning": "stairway whose steps move continuously on a circulating belt"
    },
    {
        "id": 1666,
        "word": "escape",
        "phonetic": "[ɪˈskeɪp]",
        "meaning": "act of fleeing from danger, of evading harm, or of avoiding notice; deliverance from injury or"
    },
    {
        "id": 1668,
        "word": "escort",
        "phonetic": "[ɪˈskɔːt]",
        "meaning": "one who conducts someone as attendant; guard; protection, care, or safeguard on a journey"
    },
    {
        "id": 1669,
        "word": "essay",
        "phonetic": "[ˈɛseɪ]",
        "meaning": "effort made for performance of anything; short literary composition on a single subject"
    },
    {
        "id": 1670,
        "word": "essence",
        "phonetic": "[ˈɛsᵊns]",
        "meaning": "most essential or most vital part of some idea or experience"
    },
    {
        "id": 1671,
        "word": "essential",
        "phonetic": "[ɪˈsɛnʃᵊl]",
        "meaning": "necessary; critical; vital; constituting or being part of the essence of something"
    },
    {
        "id": 1672,
        "word": "establish",
        "phonetic": "[ɪˈstæblɪʃ]",
        "meaning": "set up or found; build"
    },
    {
        "id": 1673,
        "word": "establishment",
        "phonetic": "[ɪˈstæblɪʃmənt]",
        "meaning": "act of establishing; ratifying or ordaining; settlement; arranged order or system,"
    },
    {
        "id": 1675,
        "word": "estate",
        "phonetic": "[ɪˈsteɪt]",
        "meaning": "extensive landed property; everything you own; all of your assets"
    },
    {
        "id": 1676,
        "word": "esteem",
        "phonetic": "[ɪˈstiːm]",
        "meaning": "regard with respect; favorable regard"
    },
    {
        "id": 1677,
        "word": "estimate",
        "phonetic": "[ˈɛstɪmeɪt]",
        "meaning": "judge to be probable; form an opinion about; evaluate"
    },
    {
        "id": 1678,
        "word": "eternal",
        "phonetic": "[ɪˈtɜːnᵊl]",
        "meaning": "forever; being without beginning or end; existing outside of time; infinite"
    },
    {
        "id": 1679,
        "word": "evaluate",
        "phonetic": "[ɪˈvæljueɪt]",
        "meaning": "judge; examine and judge carefully; appraise"
    },
    {
        "id": 1680,
        "word": "evaporate",
        "phonetic": "[ɪˈvæpəreɪt]",
        "meaning": "vaporize; disappear; change into a vapor"
    },
    {
        "id": 1681,
        "word": "evaporation",
        "phonetic": "[ɪˌvæpəˈreɪʃᵊn]",
        "meaning": "process of extracting moisture"
    },
    {
        "id": 1682,
        "word": "eventful",
        "phonetic": "[ɪˈvɛntfᵊl]",
        "meaning": "busy; momentous; full of events or incidents"
    },
    {
        "id": 1683,
        "word": "eventually",
        "phonetic": "[ɪˈvɛnʧuəli]",
        "meaning": "ultimately; in the final result or issue; in the end"
    },
    {
        "id": 1684,
        "word": "everlasting",
        "phonetic": "[ˌɛvəˈlɑːstɪŋ]",
        "meaning": "continuing forever or indefinitely"
    },
    {
        "id": 1685,
        "word": "evidence",
        "phonetic": "[ˈɛvɪdᵊns]",
        "meaning": "something which makes evident or manifest; any mode of proof"
    },
    {
        "id": 1686,
        "word": "evident",
        "phonetic": "[ˈɛvɪdᵊnt]",
        "meaning": "easily seen or understood; obvious; apparent; clear"
    },
    {
        "id": 1687,
        "word": "evolution",
        "phonetic": "[ˌiːvəˈluːʃᵊn]",
        "meaning": "development; progression"
    },
    {
        "id": 1688,
        "word": "evolve",
        "phonetic": "[ɪˈvɒlv]",
        "meaning": "develop; grow"
    },
    {
        "id": 1689,
        "word": "exact",
        "phonetic": "[ɪɡˈzækt]",
        "meaning": "precisely agreeing with standard, fact, or truth; perfectly conforming"
    },
    {
        "id": 1690,
        "word": "exaggerate",
        "phonetic": "[ɪɡˈzæʤəreɪt]",
        "meaning": "represent as greater than is actually the case; overstate; magnify; do something to an"
    },
    {
        "id": 1692,
        "word": "exaggeration",
        "phonetic": "[ɪɡˌzæʤəˈreɪʃᵊn]",
        "meaning": "overstatement; act of making something more noticeable than usual"
    },
    {
        "id": 1693,
        "word": "exalt",
        "phonetic": "[ɪɡˈzɔːlt]",
        "meaning": "raise in rank or dignity; praise"
    },
    {
        "id": 1694,
        "word": "exalted",
        "phonetic": "[ɪɡˈzɔːltɪd]",
        "meaning": "superior; elevated in rank, character, or status; of high moral or intellectual value"
    },
    {
        "id": 1695,
        "word": "exasperate",
        "phonetic": "[ɪɡˈzɑːspəreɪt]",
        "meaning": "make worse; irritate; make very angry or impatient; annoy greatly"
    },
    {
        "id": 1696,
        "word": "exceed",
        "phonetic": "[ɪkˈsiːd]",
        "meaning": "go beyond; be or do something to a greater degree"
    },
    {
        "id": 1697,
        "word": "exceedingly",
        "phonetic": "[ɪkˈsiːdɪŋli]",
        "meaning": "in a very great degree; beyond what is usual; surpassingly"
    },
    {
        "id": 1698,
        "word": "excel",
        "phonetic": "[ɪkˈsɛl]",
        "meaning": "be superior; distinguish oneself"
    },
    {
        "id": 1699,
        "word": "excellent",
        "phonetic": "[ˈɛksᵊlᵊnt]",
        "meaning": "surpassing others in some good quality or the sum of qualities; of great worth; eminent, in"
    },
    {
        "id": 1701,
        "word": "exception",
        "phonetic": "[ɪkˈsɛpʃᵊn]",
        "meaning": "instance that does not conform to a rule"
    },
    {
        "id": 1702,
        "word": "exceptional",
        "phonetic": "[ɪkˈsɛpʃᵊnᵊl]",
        "meaning": "extraordinary; unusual; well above average"
    },
    {
        "id": 1703,
        "word": "excess",
        "phonetic": "[ɪkˈsɛs]",
        "meaning": "amount or quantity beyond what is normal or sufficient; surplus"
    },
    {
        "id": 1704,
        "word": "excessive",
        "phonetic": "[ɪkˈsɛsɪv]",
        "meaning": "extreme; inordinate; too much"
    },
    {
        "id": 1705,
        "word": "exchange",
        "phonetic": "[ɪksˈʧeɪnʤ]",
        "meaning": "substitute; trade in; give in return for something received"
    },
    {
        "id": 1706,
        "word": "excite",
        "phonetic": "[ɪkˈsaɪt]",
        "meaning": "arouse"
    },
    {
        "id": 1707,
        "word": "excitement",
        "phonetic": "[ɪkˈsaɪtmənt]",
        "meaning": "state of being emotionally aroused"
    },
    {
        "id": 1708,
        "word": "exciting",
        "phonetic": "[ɪkˈsaɪtɪŋ]",
        "meaning": "creating or producing excitement"
    },
    {
        "id": 1709,
        "word": "exclaim",
        "phonetic": "[ɪkˈskleɪm]",
        "meaning": "cry out suddenly, as from surprise or emotion"
    },
    {
        "id": 1710,
        "word": "exclude",
        "phonetic": "[ɪkˈskluːd]",
        "meaning": "leave out of; keep out of; reject"
    },
    {
        "id": 1711,
        "word": "exclusion",
        "phonetic": "[ɪkˈskluːʒᵊn]",
        "meaning": "rejection; act of excluding or shutting out"
    },
    {
        "id": 1712,
        "word": "exclusive",
        "phonetic": "[ɪkˈskluːsɪv]",
        "meaning": "not divided or shared with others; excluding much or all; not allowing something else"
    },
    {
        "id": 1713,
        "word": "exclusively",
        "phonetic": "[ɪkˈskluːsɪvli]",
        "meaning": "without any others being included or involved; purely; strictly"
    },
    {
        "id": 1714,
        "word": "excursion",
        "phonetic": "[ɪkˈskɜːʃᵊn]",
        "meaning": "trip; usually short journey made for pleasure"
    },
    {
        "id": 1715,
        "word": "excuse",
        "phonetic": "[ɪkˈskjuːz]",
        "meaning": "free from blame; clear from guilt; release from a charge; forgive entirely"
    },
    {
        "id": 1716,
        "word": "execute",
        "phonetic": "[ˈɛksɪkjuːt]",
        "meaning": "put into effect; carry out the legalities of"
    },
    {
        "id": 1717,
        "word": "execution",
        "phonetic": "[ˌɛksɪˈkjuːʃᵊn]",
        "meaning": "accomplishment; putting into practice; putting a person to death"
    },
    {
        "id": 1718,
        "word": "executive",
        "phonetic": "[ɪɡˈzɛkjətɪv]",
        "meaning": "role of government which makes sure that laws are carried out; administrator"
    },
    {
        "id": 1719,
        "word": "exemplify",
        "phonetic": "[ɪɡˈzɛmplɪfaɪ]",
        "meaning": "serve as an example of; embody"
    },
    {
        "id": 1720,
        "word": "exempt",
        "phonetic": "[ɪɡˈzɛmpt]",
        "meaning": "not subject to duty or obligation; not subject to taxation"
    },
    {
        "id": 1721,
        "word": "exert",
        "phonetic": "[ɪɡˈzɜːt]",
        "meaning": "cause; apply; exercise"
    },
    {
        "id": 1722,
        "word": "exertion",
        "phonetic": "[ɪɡˈzɜːʃᵊn]",
        "meaning": "effort; expenditure of much physical work"
    },
    {
        "id": 1723,
        "word": "exhaust",
        "phonetic": "[ɪɡˈzɔːst]",
        "meaning": "gases ejected from an engine as waste products ; use up the whole supply of"
    },
    {
        "id": 1724,
        "word": "exhausted",
        "phonetic": "[ɪɡˈzɔːstɪd]",
        "meaning": "depleted; tired"
    },
    {
        "id": 1725,
        "word": "exhaustion",
        "phonetic": "[ɪɡˈzɔːsʧᵊn]",
        "meaning": "act of draining out or draining off; act of emptying completely of the contents; state of"
    },
    {
        "id": 1727,
        "word": "exhaustive",
        "phonetic": "[ɪɡˈzɔːstɪv]",
        "meaning": "treating all parts or aspects without omission; comprehensive"
    },
    {
        "id": 1728,
        "word": "exhibit",
        "phonetic": "[ɪɡˈzɪbɪt]",
        "meaning": "show, make visible or apparent"
    },
    {
        "id": 1729,
        "word": "exhibition",
        "phonetic": "[ˌɛksɪˈbɪʃᵊn]",
        "meaning": "exposition; presentation; large-scale public showing"
    },
    {
        "id": 1730,
        "word": "exile",
        "phonetic": "[ˈɛksaɪl]",
        "meaning": "force separation from one's native country"
    },
    {
        "id": 1731,
        "word": "exit",
        "phonetic": "[ˈɛksɪt]",
        "meaning": "passage or way out; act of going away or out"
    },
    {
        "id": 1732,
        "word": "exonerate",
        "phonetic": "[ɪɡˈzɒnəreɪt]",
        "meaning": "acquit; free from blame; discharge from duty"
    },
    {
        "id": 1733,
        "word": "expand",
        "phonetic": "[ɪkˈspænd]",
        "meaning": "become larger in size or volume; grow stronger; add details"
    },
    {
        "id": 1734,
        "word": "expansion",
        "phonetic": "[ɪkˈspænʃᵊn]",
        "meaning": "growth; extent or amount by which something has expanded"
    },
    {
        "id": 1735,
        "word": "expedient",
        "phonetic": "[ɪkˈspiːdiənt]",
        "meaning": "suitable; appropriate to a purpose; serving to promote your interest"
    },
    {
        "id": 1736,
        "word": "expedite",
        "phonetic": "[ˈɛkspədaɪt]",
        "meaning": "process fast and efficiently; execute quickly and efficiently"
    },
    {
        "id": 1737,
        "word": "expedition",
        "phonetic": "[ˌɛkspəˈdɪʃᵊn]",
        "meaning": "journey organized for a particular purpose"
    },
    {
        "id": 1738,
        "word": "expel",
        "phonetic": "[ɪkˈspɛl]",
        "meaning": "oust; discharge; force or drive out"
    },
    {
        "id": 1739,
        "word": "expend",
        "phonetic": "[ɪkˈspɛnd]",
        "meaning": "lay out, apply, or employ in any way; consume by use; use up or distribute, either in payment"
    },
    {
        "id": 1741,
        "word": "expenditure",
        "phonetic": "[ɪkˈspɛndɪʧə]",
        "meaning": "payment or expense; output"
    },
    {
        "id": 1742,
        "word": "expert",
        "phonetic": "[ˈɛkspɜːt]",
        "meaning": "person with a high degree of skill in or knowledge of a certain subject"
    },
    {
        "id": 1743,
        "word": "expertise",
        "phonetic": "[ˌɛkspɜːˈtiːz]",
        "meaning": "specialized knowledge; expert skill"
    },
    {
        "id": 1744,
        "word": "expiration",
        "phonetic": "[ˌɛkspɪˈreɪʃᵊn]",
        "meaning": "act of coming to a close; termination; act of breathing out; exhalation"
    },
    {
        "id": 1745,
        "word": "expire",
        "phonetic": "[ɪkˈspaɪə]",
        "meaning": "come to an end; terminate; lose validity; breathe one's last breath; die"
    },
    {
        "id": 1746,
        "word": "explicit",
        "phonetic": "[ɪkˈsplɪsɪt]",
        "meaning": "precisely and clearly expressed; definite; outspoken"
    },
    {
        "id": 1747,
        "word": "explode",
        "phonetic": "[ɪkˈspləʊd]",
        "meaning": "erupt; blow up; burst violently as a result of internal pressure"
    },
    {
        "id": 1748,
        "word": "exploit",
        "phonetic": "[ɪkˈsplɔɪt]",
        "meaning": "make use of, sometimes unjustly"
    },
    {
        "id": 1749,
        "word": "exploitation",
        "phonetic": "[ˌɛksplɔɪˈteɪʃᵊn]",
        "meaning": "unfair use of someone’s work giving little in return"
    },
    {
        "id": 1750,
        "word": "exploration",
        "phonetic": "[ˌɛkspləˈreɪʃᵊn]",
        "meaning": "travel for the purpose of discovery"
    },
    {
        "id": 1751,
        "word": "explore",
        "phonetic": "[ɪkˈsplɔː]",
        "meaning": "investigate systematically; examine; search"
    },
    {
        "id": 1752,
        "word": "explorer",
        "phonetic": "[ɪkˈsplɔːrə]",
        "meaning": "someone who travels into little known regions"
    },
    {
        "id": 1753,
        "word": "explosive",
        "phonetic": "[ɪkˈspləʊsɪv]",
        "meaning": "tending or serving to sudden outburst; sudden and loud"
    },
    {
        "id": 1754,
        "word": "export",
        "phonetic": "[ɛksˈpɔːt]",
        "meaning": "sell or transfer abroad"
    },
    {
        "id": 1755,
        "word": "expose",
        "phonetic": "[ɪkˈspəʊz]",
        "meaning": "set forth; set out to public view"
    },
    {
        "id": 1756,
        "word": "exposition",
        "phonetic": "[ˌɛkspəˈzɪʃᵊn]",
        "meaning": "exhibition; part of a play that provides the background information; opening section of a"
    },
    {
        "id": 1758,
        "word": "exposure",
        "phonetic": "[ɪkˈspəʊʒə]",
        "meaning": "risk, particularly of being exposed to disease; unmasking; act of laying something open"
    },
    {
        "id": 1759,
        "word": "expressive",
        "phonetic": "[ɪkˈsprɛsɪv]",
        "meaning": "demonstrative; indicative"
    },
    {
        "id": 1760,
        "word": "expressly",
        "phonetic": "[ɪkˈsprɛsli]",
        "meaning": "particularly; specifically; in an explicit manner"
    },
    {
        "id": 1761,
        "word": "exquisite",
        "phonetic": "[ɪkˈskwɪzɪt]",
        "meaning": "excellent; flawless; acutely perceptive or discriminating"
    },
    {
        "id": 1762,
        "word": "extend",
        "phonetic": "[ɪkˈstɛnd]",
        "meaning": "open or straighten something out; unbend; prolong"
    },
    {
        "id": 1763,
        "word": "extension",
        "phonetic": "[ɪkˈstɛnʃᵊn]",
        "meaning": "supplement; act of extending or the condition of being extended"
    },
    {
        "id": 1764,
        "word": "extensive",
        "phonetic": "[ɪkˈstɛnsɪv]",
        "meaning": "widespread; far-reaching; wide"
    },
    {
        "id": 1765,
        "word": "extent",
        "phonetic": "[ɪkˈstɛnt]",
        "meaning": "extensive space or area; distance or area over which something extends"
    },
    {
        "id": 1766,
        "word": "exterior",
        "phonetic": "[ɪkˈstɪəriə]",
        "meaning": "outside; external or outward appearance"
    },
    {
        "id": 1767,
        "word": "external",
        "phonetic": "[ɪkˈstɜːnᵊl]",
        "meaning": "exterior; outer; suitable for application to the outside"
    },
    {
        "id": 1768,
        "word": "extinct",
        "phonetic": "[ɪkˈstɪŋkt]",
        "meaning": "no longer existing or living; vanished; dead"
    },
    {
        "id": 1769,
        "word": "extinction",
        "phonetic": "[ɪkˈstɪŋkʃᵊn]",
        "meaning": "death of all its remaining members"
    },
    {
        "id": 1770,
        "word": "extinguish",
        "phonetic": "[ɪkˈstɪŋɡwɪʃ]",
        "meaning": "quench; put out, as a light or fire; cause to die out; put an end to; destroy"
    },
    {
        "id": 1771,
        "word": "extra",
        "phonetic": "[ˈɛkstrə]",
        "meaning": "something additional of the same kind"
    },
    {
        "id": 1772,
        "word": "extract",
        "phonetic": "[ɪkˈstrækt]",
        "meaning": "draw or pull out, usually with some force or effort; remove; get despite difficulties or obstacles"
    },
    {
        "id": 1773,
        "word": "extraordinary",
        "phonetic": "[ɪkˈstrɔːdᵊnᵊri]",
        "meaning": "exceptional; remarkable; beyond what is ordinary or usual"
    },
    {
        "id": 1774,
        "word": "extravagant",
        "phonetic": "[ɪkˈstrævəɡᵊnt]",
        "meaning": "wandering beyond one's bounds; exceeding due bounds; wild; excessive; unrestrained"
    },
    {
        "id": 1775,
        "word": "extreme",
        "phonetic": "[ɪkˈstriːm]",
        "meaning": "outermost; utmost; farthest; most remote; at the widest limit"
    },
    {
        "id": 1776,
        "word": "eye",
        "phonetic": "[aɪ]",
        "meaning": "small hole or loop; good discernment; organ of vision or of light sensitivity "
    },
    {
        "id": 1780,
        "word": "fabric",
        "phonetic": "[ˈfæbrɪk]",
        "meaning": "cloth; stuff; artifact made by weaving or synthetic fibers; structure; framework"
    },
    {
        "id": 1781,
        "word": "fabricate",
        "phonetic": "[ˈfæbrɪkeɪt]",
        "meaning": "build; put together out of components or parts"
    },
    {
        "id": 1782,
        "word": "face",
        "phonetic": "[feɪs]",
        "meaning": "confront; encounter; be opposite"
    },
    {
        "id": 1783,
        "word": "facilitate",
        "phonetic": "[fəˈsɪlɪteɪt]",
        "meaning": "help bring about; make less difficult"
    },
    {
        "id": 1784,
        "word": "facility",
        "phonetic": "[fəˈsɪləti]",
        "meaning": "service, space, and equipment provided for a particular purpose"
    },
    {
        "id": 1785,
        "word": "faction",
        "phonetic": "[ˈfækʃᵊn]",
        "meaning": "a party of persons having a common end in view"
    },
    {
        "id": 1786,
        "word": "factor",
        "phonetic": "[ˈfæktə]",
        "meaning": "anything that contributes causally to a result; element; variable"
    },
    {
        "id": 1787,
        "word": "fade",
        "phonetic": "[feɪd]",
        "meaning": "disappear; die out; lose color; lose freshness"
    },
    {
        "id": 1788,
        "word": "faint",
        "phonetic": "[feɪnt]",
        "meaning": "lacking strength or vigor ; weak"
    },
    {
        "id": 1789,
        "word": "fairly",
        "phonetic": "[ˈfeəli]",
        "meaning": "in fair manner; clearly; openly; plainly; fully; distinctly; frankly"
    },
    {
        "id": 1790,
        "word": "fairy",
        "phonetic": "[ˈfeəri]",
        "meaning": "enchantment; illusion; imaginary supernatural being or spirit"
    },
    {
        "id": 1791,
        "word": "faith",
        "phonetic": "[feɪθ]",
        "meaning": "loyalty or allegiance to a cause or a person; complete confidence"
    },
    {
        "id": 1792,
        "word": "faithful",
        "phonetic": "[ˈfeɪθfᵊl]",
        "meaning": "believer; follower"
    },
    {
        "id": 1793,
        "word": "fake",
        "phonetic": "[feɪk]",
        "meaning": "imitation; counterfeit; having a false or misleading appearance"
    },
    {
        "id": 1794,
        "word": "fall",
        "phonetic": "[fɔːl]",
        "meaning": "drop; sink; lose an upright position suddenly; decrease in size, extent, or range"
    },
    {
        "id": 1795,
        "word": "fame",
        "phonetic": "[feɪm]",
        "meaning": "favorable public reputation; great renown"
    },
    {
        "id": 1796,
        "word": "familiar",
        "phonetic": "[fəˈmɪliə]",
        "meaning": "well known or easily recognized"
    },
    {
        "id": 1797,
        "word": "familiarity",
        "phonetic": "[fəˌmɪliˈærəti]",
        "meaning": "state of being familiar; intimate and frequent converse, or association; unconstrained"
    },
    {
        "id": 1799,
        "word": "famine",
        "phonetic": "[ˈfæmɪn]",
        "meaning": "shortage of food; starvation"
    },
    {
        "id": 1800,
        "word": "fanatic",
        "phonetic": "[fəˈnætɪk]",
        "meaning": "person who is zealously enthusiastic for some cause; showing evidence of possession by a"
    },
    {
        "id": 1802,
        "word": "fancy",
        "phonetic": "[ˈfænsi]",
        "meaning": "capricious notion; something many people believe that is false"
    },
    {
        "id": 1803,
        "word": "fantastic",
        "phonetic": "[fænˈtæstɪk]",
        "meaning": "excellent; extraordinary; strange in form, conception, or appearance"
    },
    {
        "id": 1804,
        "word": "fare",
        "phonetic": "[feə]",
        "meaning": "food and drink; diet; transportation charge; a paying passenger"
    },
    {
        "id": 1805,
        "word": "farewell",
        "phonetic": "[ˌfeəˈwɛl]",
        "meaning": "acknowledgment at parting; goodbye; act of departing or taking leave"
    },
    {
        "id": 1806,
        "word": "fascinate",
        "phonetic": "[ˈfæsɪneɪt]",
        "meaning": "cause to be interested or curious; captivate"
    },
    {
        "id": 1807,
        "word": "fascination",
        "phonetic": "[ˌfæsɪˈneɪʃᵊn]",
        "meaning": "capacity to attract intense interest"
    },
    {
        "id": 1808,
        "word": "fashion",
        "phonetic": "[ˈfæʃᵊn]",
        "meaning": "style, shape, appearance, or mode of structure; pattern, model"
    },
    {
        "id": 1809,
        "word": "fashionable",
        "phonetic": "[ˈfæʃᵊnəbᵊl]",
        "meaning": "conforming to the current style; being or in accordance with current fashion"
    },
    {
        "id": 1810,
        "word": "fasten",
        "phonetic": "[ˈfɑːsᵊn]",
        "meaning": "attach; affix"
    },
    {
        "id": 1811,
        "word": "fatal",
        "phonetic": "[ˈfeɪtᵊl]",
        "meaning": "causing death"
    },
    {
        "id": 1812,
        "word": "fathom",
        "phonetic": "[ˈfæðəm]",
        "meaning": "measure the depth; come to understand"
    },
    {
        "id": 1813,
        "word": "fatigue",
        "phonetic": "[fəˈtiːɡ]",
        "meaning": "physical or mental weariness; exhaustion"
    },
    {
        "id": 1814,
        "word": "fault",
        "phonetic": "[fɔːlt]",
        "meaning": "crack; a crack in the earth; defect; flaw; a wrong action"
    },
    {
        "id": 1815,
        "word": "favorable",
        "phonetic": "[ˈfeɪvᵊrəbᵊl]",
        "meaning": "approving or pleasing; granting what has been desired or requested"
    },
    {
        "id": 1816,
        "word": "feasible",
        "phonetic": "[ˈfiːzəbᵊl]",
        "meaning": "capable of being accomplished or brought about"
    },
    {
        "id": 1817,
        "word": "feast",
        "phonetic": "[fiːst]",
        "meaning": "a festival or holiday; festive or joyous meal; something highly agreeable; entertainment"
    },
    {
        "id": 1818,
        "word": "feat",
        "phonetic": "[fiːt]",
        "meaning": "achievement; accomplishment"
    },
    {
        "id": 1819,
        "word": "feature",
        "phonetic": "[ˈfiːʧə]",
        "meaning": "prominent aspect of something"
    },
    {
        "id": 1820,
        "word": "federal",
        "phonetic": "[ˈfɛdᵊrᵊl]",
        "meaning": "of or relating to central government; national"
    },
    {
        "id": 1821,
        "word": "federation",
        "phonetic": "[ˌfɛdəˈreɪʃᵊn]",
        "meaning": "uniting in a league; confederation; league"
    },
    {
        "id": 1822,
        "word": "fee",
        "phonetic": "[fiː]",
        "meaning": "give a tip beyond the agreed-on compensation"
    },
    {
        "id": 1823,
        "word": "feeble",
        "phonetic": "[ˈfiːbᵊl]",
        "meaning": "lacking vigor, force, or effectiveness; faint; frail"
    },
    {
        "id": 1824,
        "word": "feed",
        "phonetic": "[fiːd]",
        "meaning": "give food to; supply with nourishment"
    },
    {
        "id": 1825,
        "word": "feedback",
        "phonetic": "[ˈfiːdbæk]",
        "meaning": "response to an inquiry or experiment"
    },
    {
        "id": 1826,
        "word": "fell",
        "phonetic": "[fɛl]",
        "meaning": "capable of destroying; lethal"
    },
    {
        "id": 1827,
        "word": "fellowship",
        "phonetic": "[ˈfɛləʊʃɪp]",
        "meaning": "state or relation of being or associate; companionship of persons on equal and friendly"
    },
    {
        "id": 1829,
        "word": "female",
        "phonetic": "[ˈfiːmeɪl]",
        "meaning": "for or composed of women or girls"
    },
    {
        "id": 1830,
        "word": "ferocious",
        "phonetic": "[fəˈrəʊʃəs]",
        "meaning": "fierce; savage; wild; indicating cruelty"
    },
    {
        "id": 1831,
        "word": "ferry",
        "phonetic": "[ˈfɛri]",
        "meaning": "shuttle; transport by boat or aircraft"
    },
    {
        "id": 1832,
        "word": "fertile",
        "phonetic": "[ˈfɜːtaɪl]",
        "meaning": "rich; fruitful; inventive; creative; intellectually productive"
    },
    {
        "id": 1833,
        "word": "fertilizer",
        "phonetic": "[ˈfɜːtɪlaɪzə]",
        "meaning": "any substance used to make soil more fertile"
    },
    {
        "id": 1834,
        "word": "fervent",
        "phonetic": "[ˈfɜːvᵊnt]",
        "meaning": "extremely hot; sincerely or intensely felt"
    },
    {
        "id": 1835,
        "word": "festival",
        "phonetic": "[ˈfɛstɪvᵊl]",
        "meaning": "a day or period of time for feasting and celebration"
    },
    {
        "id": 1836,
        "word": "fetch",
        "phonetic": "[fɛʧ]",
        "meaning": "take away or remove; reduce; go or come after and bring or take back"
    },
    {
        "id": 1837,
        "word": "feud",
        "phonetic": "[fjuːd]",
        "meaning": "bitter quarrel between two parties"
    },
    {
        "id": 1838,
        "word": "fiber",
        "phonetic": "[faɪbə]",
        "meaning": "slender, elongated, threadlike object or structure; material to make paper or cloth"
    },
    {
        "id": 1839,
        "word": "fiction",
        "phonetic": "[ˈfɪkʃᵊn]",
        "meaning": "story; imaginative creation; literary work whose content is produced by imagination"
    },
    {
        "id": 1840,
        "word": "fictional",
        "phonetic": "[ˈfɪkʃᵊnᵊl]",
        "meaning": "imaginary; invented, as opposed to real"
    },
    {
        "id": 1841,
        "word": "fierce",
        "phonetic": "[fɪəs]",
        "meaning": "ferocious; savage; extremely severe or violent; terrible"
    },
    {
        "id": 1842,
        "word": "fig",
        "phonetic": "[fɪɡ]",
        "meaning": "small fruit tree with large leaves, known from the remotest antiquity"
    },
    {
        "id": 1843,
        "word": "figurative",
        "phonetic": "[ˈfɪɡᵊrətɪv]",
        "meaning": "not literal, but metaphorical; using figure of speech"
    },
    {
        "id": 1844,
        "word": "figure",
        "phonetic": "[ˈfɪɡə]",
        "meaning": "model of a bodily form; impression produced by a person; written or printed symbol"
    },
    {
        "id": 1846,
        "word": "file",
        "phonetic": "[faɪl]",
        "meaning": "line; proceed in line"
    },
    {
        "id": 1847,
        "word": "filter",
        "phonetic": "[ˈfɪltə]",
        "meaning": "strain; pass liquid or gas through device that blocks some matter by particular criterion"
    },
    {
        "id": 1848,
        "word": "filth",
        "phonetic": "[fɪlθ]",
        "meaning": "foul matter; anything that soils or defiles; dirt; corruption; pollution"
    },
    {
        "id": 1849,
        "word": "filthy",
        "phonetic": "[ˈfɪlθi]",
        "meaning": "nasty; dirty; polluted; foul; impure"
    },
    {
        "id": 1850,
        "word": "final",
        "phonetic": "[ˈfaɪnᵊl]",
        "meaning": "forming or occurring at the end; terminating; ultimate; conclusive"
    },
    {
        "id": 1851,
        "word": "finance",
        "phonetic": "[ˈfaɪnæns]",
        "meaning": "management of money and credit and banking and investments; subsidizing; fund"
    },
    {
        "id": 1852,
        "word": "financial",
        "phonetic": "[faɪˈnænʃᵊl]",
        "meaning": "monetary; pertaining or relating to money matters"
    },
    {
        "id": 1853,
        "word": "financing",
        "phonetic": "[ˈfaɪnænsɪŋ]",
        "meaning": "subsidy; transaction that provides funds for a business"
    },
    {
        "id": 1854,
        "word": "finite",
        "phonetic": "[ˈfaɪnaɪt]",
        "meaning": "having a limit; limited in quantity, degree, or capacity; bounded"
    },
    {
        "id": 1855,
        "word": "fir",
        "phonetic": "[fɜː]",
        "meaning": "any of various evergreen trees of the genus Abies"
    },
    {
        "id": 1856,
        "word": "firm",
        "phonetic": "[fɜːm]",
        "meaning": "hard; solid; resolute; determined"
    },
    {
        "id": 1857,
        "word": "fishery",
        "phonetic": "[ˈfɪʃᵊri]",
        "meaning": "business or practice of catching fish; fishing; a place for catching fish; the right to take fish at"
    },
    {
        "id": 1859,
        "word": "fist",
        "phonetic": "[fɪst]",
        "meaning": "hand with the fingers doubled into the palm; closed hand"
    },
    {
        "id": 1860,
        "word": "fit",
        "phonetic": "[fɪt]",
        "meaning": "be the right size or shape; conform to some shape or size"
    },
    {
        "id": 1861,
        "word": "fitness",
        "phonetic": "[ˈfɪtnəs]",
        "meaning": "health; vigor; state or condition of being fit; suitability or appropriateness"
    },
    {
        "id": 1862,
        "word": "fitting",
        "phonetic": "[ˈfɪtɪŋ]",
        "meaning": "small accessory to a larger system; small detachable part for a machine or apparatus; act of"
    },
    {
        "id": 1864,
        "word": "fixed",
        "phonetic": "[fɪkst]",
        "meaning": "firmly in position; stationary"
    },
    {
        "id": 1865,
        "word": "fixture",
        "phonetic": "[ˈfɪksʧə]",
        "meaning": "commonplace object; object firmly fixed in place"
    },
    {
        "id": 1866,
        "word": "flag",
        "phonetic": "[flæɡ]",
        "meaning": "become less intense; sink, or settle from pressure"
    },
    {
        "id": 1867,
        "word": "flake",
        "phonetic": "[fleɪk]",
        "meaning": "flat thin piece or layer; chip; small piece; small crystalline bit of snow"
    },
    {
        "id": 1868,
        "word": "flame",
        "phonetic": "[fleɪm]",
        "meaning": "stream of burning vapor or gas, emitting light and heat; passion of love"
    },
    {
        "id": 1869,
        "word": "flap",
        "phonetic": "[flæp]",
        "meaning": "flat, usually thin piece attached at only one side; act of waving or fluttering; blow given with"
    },
    {
        "id": 1871,
        "word": "flare",
        "phonetic": "[fleə]",
        "meaning": "sudden outburst of emotion; glare; shine; shine with sudden light"
    },
    {
        "id": 1872,
        "word": "flash",
        "phonetic": "[flæʃ]",
        "meaning": "emit a brief burst of light; appear briefly; sudden intense burst of radiant energy"
    },
    {
        "id": 1873,
        "word": "flask",
        "phonetic": "[flɑːsk]",
        "meaning": "a small bottle-shaped vessel for holding fluids; narrow-necked vessel of metal or glass"
    },
    {
        "id": 1874,
        "word": "flatter",
        "phonetic": "[ˈflætə]",
        "meaning": "compliment someone, often insincerely and sometimes to win favor; enhance someone's"
    },
    {
        "id": 1876,
        "word": "flavor",
        "phonetic": "[ˈfleɪvə]",
        "meaning": "distinctive taste; quality produced by the sensation of taste"
    },
    {
        "id": 1877,
        "word": "flaw",
        "phonetic": "[flɔː]",
        "meaning": "crack or breach; gap or fissure; defect; fault; sudden burst of noise and disorder"
    },
    {
        "id": 1878,
        "word": "flee",
        "phonetic": "[fliː]",
        "meaning": "run away, as from danger or evil; avoid in alarmed or cowardly manner"
    },
    {
        "id": 1879,
        "word": "fleece",
        "phonetic": "[fliːs]",
        "meaning": "rob; strip of money or other property unjustly, especially by trickery or fraud; ask unreasonable"
    },
    {
        "id": 1881,
        "word": "fleet",
        "phonetic": "[fliːt]",
        "meaning": "a group of steamships under the same ownership; a group of vessels or vehicles"
    },
    {
        "id": 1882,
        "word": "flesh",
        "phonetic": "[flɛʃ]",
        "meaning": "soft tissue of body, mainly muscle and fat; substance; reality; surface or skin of human body;"
    },
    {
        "id": 1884,
        "word": "flexibility",
        "phonetic": "[ˌflɛksəˈbɪləti]",
        "meaning": "quality of being adaptable or variable"
    },
    {
        "id": 1885,
        "word": "flexible",
        "phonetic": "[ˈflɛksəbᵊl]",
        "meaning": "pliant; elastic; capable of being bent or flexed; pliable"
    },
    {
        "id": 1886,
        "word": "flicker",
        "phonetic": "[ˈflɪkə]",
        "meaning": "flutter; flap the wings without flying; waver unsteadily, like a flame in a current of air"
    },
    {
        "id": 1887,
        "word": "fling",
        "phonetic": "[flɪŋ]",
        "meaning": "throw with force or recklessness; throw or cast away; move in an abrupt"
    },
    {
        "id": 1888,
        "word": "float",
        "phonetic": "[fləʊt]",
        "meaning": "drift along; make the surface of level or smooth; move lightly"
    },
    {
        "id": 1889,
        "word": "flock",
        "phonetic": "[flɒk]",
        "meaning": "group; herd; crowd; gather; crowd; throng"
    },
    {
        "id": 1890,
        "word": "flour",
        "phonetic": "[flaʊə]",
        "meaning": "fine powdery foodstuff; soft, fine powder"
    },
    {
        "id": 1891,
        "word": "flourish",
        "phonetic": "[ˈflʌrɪʃ]",
        "meaning": "grow well; decorate with ornaments; be in a period of productivity"
    },
    {
        "id": 1892,
        "word": "fluctuate",
        "phonetic": "[ˈflʌkʧueɪt]",
        "meaning": "rise and fall in or as if in waves; shift; vary irregularly"
    },
    {
        "id": 1893,
        "word": "fluctuation",
        "phonetic": "[ˌflʌkʧuˈeɪʃᵊn]",
        "meaning": "a wave motion"
    },
    {
        "id": 1894,
        "word": "fluency",
        "phonetic": "[ˈfluːənsi]",
        "meaning": "quality of smoothness of flow; quality of being fluent in language"
    },
    {
        "id": 1895,
        "word": "fluent",
        "phonetic": "[ˈfluːənt]",
        "meaning": "easy and graceful in shape; graceful; smooth and unconstrained in movement"
    },
    {
        "id": 1896,
        "word": "flush",
        "phonetic": "[flʌʃ]",
        "meaning": "turn red, as from fever, embarrassment, or strong emotion; glow, especially with a reddish"
    },
    {
        "id": 1898,
        "word": "flutter",
        "phonetic": "[ˈflʌtə]",
        "meaning": "vibrate or move quickly; drive in disorder; throw into confusion"
    },
    {
        "id": 1899,
        "word": "flux",
        "phonetic": "[flʌks]",
        "meaning": "flowing; series of changes; state of being liquid through heat"
    },
    {
        "id": 1900,
        "word": "foam",
        "phonetic": "[fəʊm]",
        "meaning": "white substance, consisting of an aggregation of bubbles, which is formed on the surface of"
    },
    {
        "id": 1902,
        "word": "focus",
        "phonetic": "[ˈfəʊkəs]",
        "meaning": "most important thing; a fixed reference point; center of interest or activity"
    },
    {
        "id": 1903,
        "word": "fodder",
        "phonetic": "[ˈfɒdə]",
        "meaning": "coarse food for cattle or horses"
    },
    {
        "id": 1904,
        "word": "foe",
        "phonetic": "[fəʊ]",
        "meaning": "enemy; one who entertains hatred, grudge; adversary"
    },
    {
        "id": 1905,
        "word": "fog",
        "phonetic": "[fɒɡ]",
        "meaning": "droplets of water vapor suspended in air near ground ; haze"
    },
    {
        "id": 1906,
        "word": "foggy",
        "phonetic": "[ˈfɒɡi]",
        "meaning": "obscured by fog; indistinct or hazy in outline"
    },
    {
        "id": 1907,
        "word": "fold",
        "phonetic": "[fəʊld]",
        "meaning": "make something double; bend or lay so that one part covers the other"
    },
    {
        "id": 1908,
        "word": "foliage",
        "phonetic": "[ˈfəʊliɪʤ]",
        "meaning": "masses of leaves; a cluster of leaves, flowers, and branches"
    },
    {
        "id": 1909,
        "word": "foolish",
        "phonetic": "[ˈfuːlɪʃ]",
        "meaning": "marked with, or exhibiting, folly; void of understanding; weak in intellect; without judgment"
    },
    {
        "id": 1910,
        "word": "forbid",
        "phonetic": "[fəˈbɪd]",
        "meaning": "not allow; prohibit; prevent"
    },
    {
        "id": 1911,
        "word": "forecast",
        "phonetic": "[ˈfɔːkɑːst]",
        "meaning": "prediction about how something will develop, as for weather"
    },
    {
        "id": 1912,
        "word": "forefather",
        "phonetic": "[ˈfɔːˌfɑːðə]",
        "meaning": "ancestor; forebear"
    },
    {
        "id": 1913,
        "word": "foremost",
        "phonetic": "[ˈfɔːməʊst]",
        "meaning": "leading; main; primary; first in time or place"
    },
    {
        "id": 1914,
        "word": "foresee",
        "phonetic": "[fɔːˈsiː]",
        "meaning": "anticipate; predict"
    },
    {
        "id": 1915,
        "word": "foretell",
        "phonetic": "[fɔːˈtɛl]",
        "meaning": "tell of or indicate beforehand; predict"
    },
    {
        "id": 1916,
        "word": "forge",
        "phonetic": "[fɔːʤ]",
        "meaning": "workplace where metal is worked by heating and hammering"
    },
    {
        "id": 1917,
        "word": "forgery",
        "phonetic": "[ˈfɔːʤᵊri]",
        "meaning": "act of forging, especially the illegal production of something counterfeit"
    },
    {
        "id": 1918,
        "word": "forgive",
        "phonetic": "[fəˈɡɪv]",
        "meaning": "give wholly; cease to feel resentment against; excuse for a fault or an offense; give up;"
    },
    {
        "id": 1920,
        "word": "formal",
        "phonetic": "[ˈfɔːmᵊl]",
        "meaning": "official; executed, carried out, or done in proper or regular form"
    },
    {
        "id": 1921,
        "word": "formality",
        "phonetic": "[fɔːˈmæləti]",
        "meaning": "quality or condition of being formal; something done just for form's sake"
    },
    {
        "id": 1922,
        "word": "format",
        "phonetic": "[ˈfɔːmæt]",
        "meaning": "pattern; design; set into a specific pattern"
    },
    {
        "id": 1923,
        "word": "formation",
        "phonetic": "[fɔːˈmeɪʃᵊn]",
        "meaning": "configuration; pattern"
    },
    {
        "id": 1924,
        "word": "former",
        "phonetic": "[ˈfɔːmə]",
        "meaning": "preceding in order of time; antecedent; previous; prior; earlier"
    },
    {
        "id": 1925,
        "word": "formerly",
        "phonetic": "[ˈfɔːməli]",
        "meaning": "previously;at an earlier time; once"
    },
    {
        "id": 1926,
        "word": "formidable",
        "phonetic": "[fɔːˈmɪdəbᵊl]",
        "meaning": "arousing fear; threatening; difficult to undertake or defeat"
    },
    {
        "id": 1927,
        "word": "formula",
        "phonetic": "[ˈfɔːmjələ]",
        "meaning": "plan; directions for making something; a group of symbols that make a mathematical"
    },
    {
        "id": 1929,
        "word": "formulate",
        "phonetic": "[ˈfɔːmjəleɪt]",
        "meaning": "decide upon and express in words"
    },
    {
        "id": 1930,
        "word": "forsake",
        "phonetic": "[fəˈseɪk]",
        "meaning": "leave someone who needs or counts on you"
    },
    {
        "id": 1931,
        "word": "fort",
        "phonetic": "[fɔːt]",
        "meaning": "a fortified defensive structure; permanent army post"
    },
    {
        "id": 1932,
        "word": "forthcoming",
        "phonetic": "[fɔːθˈkʌmɪŋ]",
        "meaning": "ready or about to appear; making appearance"
    },
    {
        "id": 1933,
        "word": "fortitude",
        "phonetic": "[ˈfɔːtɪtjuːd]",
        "meaning": "bravery; force; power to attack or to resist attack"
    },
    {
        "id": 1934,
        "word": "fortnight",
        "phonetic": "[ˈfɔːtnaɪt]",
        "meaning": "a period of fourteen consecutive days"
    },
    {
        "id": 1935,
        "word": "fortress",
        "phonetic": "[ˈfɔːtrəs]",
        "meaning": "fort; castle; fortified place, especially a large military stronghold, often includes a town"
    },
    {
        "id": 1936,
        "word": "fortunate",
        "phonetic": "[ˈfɔːʧᵊnət]",
        "meaning": "lucky; bringing something good and unforeseen"
    },
    {
        "id": 1937,
        "word": "fortune",
        "phonetic": "[ˈfɔːʧuːn]",
        "meaning": "arrival of something in a sudden or unexpected manner; chance; accident; luck"
    },
    {
        "id": 1938,
        "word": "forum",
        "phonetic": "[ˈfɔːrəm]",
        "meaning": "place to discuss public concerns; meeting or medium for open discussion"
    },
    {
        "id": 1939,
        "word": "forward",
        "phonetic": "[ˈfɔːwəd]",
        "meaning": "at or to or toward the front; toward the future"
    },
    {
        "id": 1940,
        "word": "fossil",
        "phonetic": "[ˈfɒsᵊl]",
        "meaning": "remnant; remains of a plant or animal that existed in a past geological age"
    },
    {
        "id": 1941,
        "word": "foster",
        "phonetic": "[ˈfɒstə]",
        "meaning": "rear; promote the growth of; help develop"
    },
    {
        "id": 1942,
        "word": "foul",
        "phonetic": "[faʊl]",
        "meaning": "act that violates of the rules of a sport"
    },
    {
        "id": 1943,
        "word": "found",
        "phonetic": "[faʊnd]",
        "meaning": "establish or set up, especially with provision for continuing existence; melt metal and pour into"
    },
    {
        "id": 1945,
        "word": "foundation",
        "phonetic": "[faʊnˈdeɪʃᵊn]",
        "meaning": "basis on which something is grounded"
    },
    {
        "id": 1946,
        "word": "founder",
        "phonetic": "[ˈfaʊndə]",
        "meaning": "person who establishes an organization, business"
    },
    {
        "id": 1947,
        "word": "fountain",
        "phonetic": "[ˈfaʊntɪn]",
        "meaning": "spring of water issuing from the earth; artificially produced jet or stream of water"
    },
    {
        "id": 1948,
        "word": "fraction",
        "phonetic": "[ˈfrækʃᵊn]",
        "meaning": "segment; fragment; a small proportion of"
    },
    {
        "id": 1949,
        "word": "fracture",
        "phonetic": "[ˈfrækʧə]",
        "meaning": "break into pieces; crack; destroy; violate or abuse"
    },
    {
        "id": 1950,
        "word": "fragile",
        "phonetic": "[ˈfræʤaɪl]",
        "meaning": "easy to destroy, delicate, not strong"
    },
    {
        "id": 1951,
        "word": "fragment",
        "phonetic": "[ˈfræɡmənt]",
        "meaning": "small part broken off or detached; fraction"
    },
    {
        "id": 1952,
        "word": "fragrance",
        "phonetic": "[ˈfreɪɡrᵊns]",
        "meaning": "scent; aroma; distinctive odor that is pleasant"
    },
    {
        "id": 1953,
        "word": "fragrant",
        "phonetic": "[ˈfreɪɡrᵊnt]",
        "meaning": "pleasant-smelling; odorous"
    },
    {
        "id": 1954,
        "word": "frail",
        "phonetic": "[freɪl]",
        "meaning": "physically weak; easily broken"
    },
    {
        "id": 1955,
        "word": "frame",
        "phonetic": "[freɪm]",
        "meaning": "structure that gives shape or support; closed, often rectangular border of drawn or printed"
    },
    {
        "id": 1957,
        "word": "framework",
        "phonetic": "[ˈfreɪmwɜːk]",
        "meaning": "fundamental structure, as for a written work; skeleton"
    },
    {
        "id": 1958,
        "word": "franchise",
        "phonetic": "[ˈfrænʧaɪz]",
        "meaning": "right granted by authority; right to vote; business licensed to sell a product in particular"
    },
    {
        "id": 1960,
        "word": "frank",
        "phonetic": "[fræŋk]",
        "meaning": "honest; sincere; open and sincere in expression; straightforward"
    },
    {
        "id": 1961,
        "word": "freight",
        "phonetic": "[freɪt]",
        "meaning": "transport commercially as cargo; load with goods; goods carried by a large vehicle"
    },
    {
        "id": 1962,
        "word": "fret",
        "phonetic": "[frɛt]",
        "meaning": "cause to be uneasy; wear away"
    },
    {
        "id": 1963,
        "word": "friction",
        "phonetic": "[ˈfrɪkʃᵊn]",
        "meaning": "clash in opinion; rubbing against; conflict"
    },
    {
        "id": 1964,
        "word": "frightening",
        "phonetic": "[ˈfraɪtᵊnɪŋ]",
        "meaning": "inspiring with fear; causing fear; of capable of causing fear; scary"
    },
    {
        "id": 1965,
        "word": "fringe",
        "phonetic": "[frɪnʤ]",
        "meaning": "margin; periphery; decorative border of hanging threads, cords, or strips, often attached to a"
    },
    {
        "id": 1967,
        "word": "frontier",
        "phonetic": "[ˈfrʌntɪə]",
        "meaning": "part of a country which fronts or faces another country or an unsettled region; border,"
    },
    {
        "id": 1969,
        "word": "frost",
        "phonetic": "[frɒst]",
        "meaning": "ice crystal; weather cold enough to cause freezing; provide with a rough surface or appearance"
    },
    {
        "id": 1970,
        "word": "frown",
        "phonetic": "[fraʊn]",
        "meaning": "look angry; wrinkle one's forehead; regard something with disapproval or distaste"
    },
    {
        "id": 1971,
        "word": "frugal",
        "phonetic": "[ˈfruːɡᵊl]",
        "meaning": "sparing; economical; costing little; inexpensive"
    },
    {
        "id": 1972,
        "word": "fruitful",
        "phonetic": "[ˈfruːtfᵊl]",
        "meaning": "productive; fertile; producing results; profitable"
    },
    {
        "id": 1973,
        "word": "frustrate",
        "phonetic": "[frʌsˈtreɪt]",
        "meaning": "make null; bring to nothing; prevent from taking effect or attaining fulfillment"
    },
    {
        "id": 1974,
        "word": "frustration",
        "phonetic": "[frʌsˈtreɪʃᵊn]",
        "meaning": "disappointment; failure; act of frustrating"
    },
    {
        "id": 1975,
        "word": "fuel",
        "phonetic": "[ˈfjuːəl]",
        "meaning": "substance that can be consumed to produce energy"
    },
    {
        "id": 1976,
        "word": "fulfil",
        "phonetic": "[fʊlˈfɪl]",
        "meaning": "fill full; fill to the utmost capacity, as a vessel, a room"
    },
    {
        "id": 1977,
        "word": "full",
        "phonetic": "[fʊl]",
        "meaning": "filled to satisfaction with food or drink; containing as much or as many as is possible or normal"
    },
    {
        "id": 1978,
        "word": "fumble",
        "phonetic": "[ˈfʌmbᵊl]",
        "meaning": "feel or grope about; make awkward attempts to do or find something; play childishly; \\turn"
    },
    {
        "id": 1980,
        "word": "function",
        "phonetic": "[ˈfʌŋkʃᵊn]",
        "meaning": "act of executing or performing any duty; assigned duty or activity"
    },
    {
        "id": 1981,
        "word": "functional",
        "phonetic": "[ˈfʌŋkʃᵊnᵊl]",
        "meaning": "useful; in good working order"
    },
    {
        "id": 1982,
        "word": "fund",
        "phonetic": "[fʌnd]",
        "meaning": "money; capital; a reserve of money set aside for some purpose; finance; subsidize"
    },
    {
        "id": 1983,
        "word": "fundamental",
        "phonetic": "[ˌfʌndəˈmɛntᵊl]",
        "meaning": "relating to foundation or base; elementary; primary; essential"
    },
    {
        "id": 1984,
        "word": "funeral",
        "phonetic": "[ˈfjuːnᵊrᵊl]",
        "meaning": "ceremony held in connection with burial; burial procession accompanying body to grave; end"
    },
    {
        "id": 1986,
        "word": "furious",
        "phonetic": "[ˈfjʊəriəs]",
        "meaning": "extreme anger; raging; full of activity; energetic or rapid"
    },
    {
        "id": 1987,
        "word": "furnace",
        "phonetic": "[ˈfɜːnɪs]",
        "meaning": "enclosed place in which heat is produced; place or time of punishment or great trial"
    },
    {
        "id": 1988,
        "word": "furnish",
        "phonetic": "[ˈfɜːnɪʃ]",
        "meaning": "provide; supply; equip with what is needed, especially to provide furniture for"
    },
    {
        "id": 1989,
        "word": "furniture",
        "phonetic": "[ˈfɜːnɪʧə]",
        "meaning": "movable articles in a room or an establishment that make it fit for living or working"
    },
    {
        "id": 1990,
        "word": "furrow",
        "phonetic": "[ˈfʌrəʊ]",
        "meaning": "trench in the earth made by a plow; any trench, channel, or groove, as in wood or metal;"
    },
    {
        "id": 1992,
        "word": "further",
        "phonetic": "[ˈfɜːðə]",
        "meaning": "get greater distance; make more in advance"
    },
    {
        "id": 1993,
        "word": "furthermore",
        "phonetic": "[ˌfɜːðəˈmɔː]",
        "meaning": "in addition; moreover"
    },
    {
        "id": 1994,
        "word": "fury",
        "phonetic": "[ˈfjʊəri]",
        "meaning": "violent anger; rage; uncontrolled action; turbulence"
    },
    {
        "id": 1995,
        "word": "fuse",
        "phonetic": "[fjuːz]",
        "meaning": "combine; blend; become plastic or fluid or liquefied from heat"
    },
    {
        "id": 1996,
        "word": "fuss",
        "phonetic": "[fʌs]",
        "meaning": "angry disturbance; excited state of agitation; needlessly nervous or useless activity; protest;"
    },
    {
        "id": 1998,
        "word": "fussy",
        "phonetic": "[ˈfʌsi]",
        "meaning": "easily upset; given to bouts of ill temper; full of superfluous details "
    },
    {
        "id": 2002,
        "word": "gale",
        "phonetic": "[ɡeɪl]",
        "meaning": "very strong wind; gust of wind; emotional outburst as laughter or tears"
    },
    {
        "id": 2003,
        "word": "gallery",
        "phonetic": "[ˈɡæləri]",
        "meaning": "long usually narrow room ; covered corridor"
    },
    {
        "id": 2004,
        "word": "gallop",
        "phonetic": "[ˈɡæləp]",
        "meaning": "move or run rapidly or carelessly, as by a quadruped, particularly by a horse lifting alternately"
    },
    {
        "id": 2006,
        "word": "gamble",
        "phonetic": "[ˈɡæmbᵊl]",
        "meaning": "play or game for money or other stake; lose or squander by gaming"
    },
    {
        "id": 2007,
        "word": "gang",
        "phonetic": "[ɡæŋ]",
        "meaning": "group of criminals who band together for mutual protection and profit; herd of buffalo or elk"
    },
    {
        "id": 2008,
        "word": "gaol",
        "phonetic": "[ʤeɪl]",
        "meaning": "place of confinement, especially for minor offenses or provisional imprisonment"
    },
    {
        "id": 2009,
        "word": "gap",
        "phonetic": "[ɡæp]",
        "meaning": "opening through mountains; pass; conspicuous difference or imbalance"
    },
    {
        "id": 2010,
        "word": "garbage",
        "phonetic": "[ˈɡɑːbɪʤ]",
        "meaning": "trash; worthless or nonsensical matter; food wastes"
    },
    {
        "id": 2011,
        "word": "garment",
        "phonetic": "[ˈɡɑːmənt]",
        "meaning": "any article of clothing, as coat or gown"
    },
    {
        "id": 2012,
        "word": "gasoline",
        "phonetic": "[ˈɡæsəliːn]",
        "meaning": "petrol; flammable liquid consisting of a mixture of refined petroleum hydrocarbons"
    },
    {
        "id": 2013,
        "word": "gauge",
        "phonetic": "[ɡeɪʤ]",
        "meaning": "measuring instrument; measure; judge"
    },
    {
        "id": 2014,
        "word": "gaze",
        "phonetic": "[ɡeɪz]",
        "meaning": "fix the eyes in a steady and earnest look; look with eagerness or curiosity, as in admiration,"
    },
    {
        "id": 2016,
        "word": "gear",
        "phonetic": "[ɡɪə]",
        "meaning": "toothed machine part, such as a wheel or cylinder, to transmit motion or to change speed or"
    },
    {
        "id": 2018,
        "word": "gem",
        "phonetic": "[ʤɛm]",
        "meaning": "precious stone; jewel; pearl or mineral that has been cut and polished for use as an ornament"
    },
    {
        "id": 2019,
        "word": "generalization",
        "phonetic": "[ˌʤɛnᵊrᵊlaɪˈzeɪʃᵊn]",
        "meaning": "an idea having general application; reasoning from detailed facts to general"
    },
    {
        "id": 2021,
        "word": "generalize",
        "phonetic": "[ˈʤɛnᵊrᵊlaɪz]",
        "meaning": "reach conclusion; become systemic and spread throughout the body"
    },
    {
        "id": 2022,
        "word": "generate",
        "phonetic": "[ˈʤɛnəreɪt]",
        "meaning": "bring into being; give rise to; produce"
    },
    {
        "id": 2023,
        "word": "generation",
        "phonetic": "[ˌʤɛnəˈreɪʃᵊn]",
        "meaning": "all offspring at same stage from common ancestor; interval of time between the birth of"
    },
    {
        "id": 2025,
        "word": "generator",
        "phonetic": "[ˈʤɛnəreɪtə]",
        "meaning": "one that generates, especially converts mechanical energy into electrical energy;"
    },
    {
        "id": 2027,
        "word": "generosity",
        "phonetic": "[ˌʤɛnəˈrɒsəti]",
        "meaning": "noble birth; quality of being noble; noble-mindedness; liberality in giving"
    },
    {
        "id": 2028,
        "word": "generous",
        "phonetic": "[ˈʤɛnᵊrəs]",
        "meaning": "more than adequate; willing to give and share unstintingly"
    },
    {
        "id": 2029,
        "word": "genius",
        "phonetic": "[ˈʤiːniəs]",
        "meaning": "exceptional creative ability; unusual mental ability; someone who is dazzlingly skilled in any"
    },
    {
        "id": 2031,
        "word": "gentle",
        "phonetic": "[ˈʤɛntᵊl]",
        "meaning": "well-born; of a good family or respectable birth; mild; meek; bland; amiable; tender"
    },
    {
        "id": 2032,
        "word": "genuine",
        "phonetic": "[ˈʤɛnjuɪn]",
        "meaning": "authentic; real; true"
    },
    {
        "id": 2033,
        "word": "geology",
        "phonetic": "[ʤiˈɒləʤi]",
        "meaning": "science which treats the structure and mineral constitution of the globe"
    },
    {
        "id": 2034,
        "word": "geometry",
        "phonetic": "[ʤiˈɒmətri]",
        "meaning": "mathematics of the properties, measurement, and relationships of points, lines, angles,"
    },
    {
        "id": 2036,
        "word": "germ",
        "phonetic": "[ʤɜːm]",
        "meaning": "bacteria; earliest form of an organism; seed"
    },
    {
        "id": 2037,
        "word": "gesture",
        "phonetic": "[ˈʤɛsʧə]",
        "meaning": "motion of hands or body to emphasize or help to express a thought or feeling"
    },
    {
        "id": 2038,
        "word": "giant",
        "phonetic": "[ˈʤaɪᵊnt]",
        "meaning": "person of extraordinary strength or powers, bodily or intellectual"
    },
    {
        "id": 2039,
        "word": "gigantic",
        "phonetic": "[ʤaɪˈɡæntɪk]",
        "meaning": "exceedingly large; huge; very large or extensive"
    },
    {
        "id": 2040,
        "word": "giggle",
        "phonetic": "[ˈɡɪɡᵊl]",
        "meaning": "laugh with short catches of the breath or voice; laugh in light, affected, or silly manner"
    },
    {
        "id": 2041,
        "word": "ginger",
        "phonetic": "[ˈʤɪnʤə]",
        "meaning": "plant of the genus Zingiber, of the East and West Indies"
    },
    {
        "id": 2042,
        "word": "glare",
        "phonetic": "[ɡleə]",
        "meaning": "light; brightness; fierce or angry stare"
    },
    {
        "id": 2043,
        "word": "glassware",
        "phonetic": "[ˈɡlɑːsweə]",
        "meaning": "an article of tableware made of glass"
    },
    {
        "id": 2044,
        "word": "gleam",
        "phonetic": "[ɡliːm]",
        "meaning": "cause to emit a flash of light"
    },
    {
        "id": 2045,
        "word": "glide",
        "phonetic": "[ɡlaɪd]",
        "meaning": "slide; move in a smooth, effortless manner"
    },
    {
        "id": 2046,
        "word": "glimpse",
        "phonetic": "[ɡlɪmps]",
        "meaning": "glance; a quick look ; see briefly; a brief or incomplete view"
    },
    {
        "id": 2047,
        "word": "glisten",
        "phonetic": "[ˈɡlɪsᵊn]",
        "meaning": "sparkle or shine, especially shine with a mild, subdued, and fitful luster; emit a soft,"
    },
    {
        "id": 2049,
        "word": "glitter",
        "phonetic": "[ˈɡlɪtə]",
        "meaning": "bright, sparkling light; brilliant and showy luster; brilliancy"
    },
    {
        "id": 2050,
        "word": "global",
        "phonetic": "[ˈɡləʊbᵊl]",
        "meaning": "worldwide; international; having the shape of a globe"
    },
    {
        "id": 2051,
        "word": "globe",
        "phonetic": "[ˈɡləʊb]",
        "meaning": "body with the shape of a sphere, especially a representation of the earth in the form of a"
    },
    {
        "id": 2053,
        "word": "gloom",
        "phonetic": "[ɡluːm]",
        "meaning": "partial or total darkness; thick shade; obscurity; shady, gloomy, or dark place or grove;"
    },
    {
        "id": 2055,
        "word": "gloomy",
        "phonetic": "[ˈɡluːmi]",
        "meaning": "imperfectly illuminated; dusky; dim; clouded"
    },
    {
        "id": 2056,
        "word": "glorify",
        "phonetic": "[ˈɡlɔːrɪfaɪ]",
        "meaning": "cause to seem more splendid; beautify"
    },
    {
        "id": 2057,
        "word": "glorious",
        "phonetic": "[ˈɡlɔːriəs]",
        "meaning": "having or deserving glory; famous; characterized by great beauty and splendor;"
    },
    {
        "id": 2059,
        "word": "glossary",
        "phonetic": "[ˈɡlɒsᵊri]",
        "meaning": "brief explanation of words, often placed at back of book"
    },
    {
        "id": 2060,
        "word": "glow",
        "phonetic": "[ɡləʊ]",
        "meaning": "shine with an intense or white heat; give forth vivid light and heat; exhibit a strong, bright color"
    },
    {
        "id": 2061,
        "word": "glue",
        "phonetic": "[ɡluː]",
        "meaning": "be fixed as if by sticky substance; join or attach with or as if sticky substance"
    },
    {
        "id": 2062,
        "word": "glut",
        "phonetic": "[ɡlʌt]",
        "meaning": "fill beyond capacity, especially with food; swallow greedlly"
    },
    {
        "id": 2063,
        "word": "gnaw",
        "phonetic": "[nɔː]",
        "meaning": "bite or chew on with the teeth"
    },
    {
        "id": 2064,
        "word": "goal",
        "phonetic": "[ɡəʊl]",
        "meaning": "end; objective; final purpose or aim"
    },
    {
        "id": 2065,
        "word": "goat",
        "phonetic": "[ɡəʊt]",
        "meaning": "any of various ruminant mammals, of the genus Capra, related to the sheep; scapegoat"
    },
    {
        "id": 2066,
        "word": "gorge",
        "phonetic": "[ɡɔːʤ]",
        "meaning": "stuff oneself; overeat; make a pig of oneself"
    },
    {
        "id": 2067,
        "word": "gorgeous",
        "phonetic": "[ˈɡɔːʤəs]",
        "meaning": "dazzlingly beautiful; magnificent"
    },
    {
        "id": 2068,
        "word": "gossip",
        "phonetic": "[ˈɡɒsɪp]",
        "meaning": "rumor; malicious report about other people; light informal conversation for social occasions"
    },
    {
        "id": 2069,
        "word": "govern",
        "phonetic": "[ˈɡʌvᵊn]",
        "meaning": "make and administer the public policy and affairs of"
    },
    {
        "id": 2070,
        "word": "governor",
        "phonetic": "[ˈɡʌvᵊnə]",
        "meaning": "head of a state government"
    },
    {
        "id": 2071,
        "word": "gown",
        "phonetic": "[ɡaʊn]",
        "meaning": "loose, flowing upper garment; ordinary outer dress of woman; official robe of certain"
    },
    {
        "id": 2073,
        "word": "grab",
        "phonetic": "[ɡræb]",
        "meaning": "take or grasp suddenly; snatch; capture"
    },
    {
        "id": 2074,
        "word": "grace",
        "phonetic": "[ɡreɪs]",
        "meaning": "elegance and beauty of movement or expression; short prayer of thanks before a meal"
    },
    {
        "id": 2075,
        "word": "graceful",
        "phonetic": "[ˈɡreɪsfᵊl]",
        "meaning": "elegant; showing grace of movement, form, or proportion"
    },
    {
        "id": 2076,
        "word": "gracious",
        "phonetic": "[ˈɡreɪʃəs]",
        "meaning": "beneficent; merciful; disposed to show kindness or favor"
    },
    {
        "id": 2077,
        "word": "grade",
        "phonetic": "[ɡreɪd]",
        "meaning": "step or degree in any series, rank, quality, order; relative position or standing"
    },
    {
        "id": 2078,
        "word": "gradual",
        "phonetic": "[ˈɡræʤuəl]",
        "meaning": "proceeding by steps or degrees; advancing, step by step, as in ascent or descent or from"
    },
    {
        "id": 2080,
        "word": "graduate",
        "phonetic": "[ˈɡræʤuət]",
        "meaning": "one who has received an academicals or professional degree; one who has completed the"
    },
    {
        "id": 2082,
        "word": "grand",
        "phonetic": "[ɡrænd]",
        "meaning": "large and impressive in size, scope, or extent"
    },
    {
        "id": 2083,
        "word": "granite",
        "phonetic": "[ˈɡrænɪt]",
        "meaning": "common, coarse-grained, light-colored, hard igneous rock consisting chiefly of quartz;"
    },
    {
        "id": 2085,
        "word": "grant",
        "phonetic": "[ɡrɑːnt]",
        "meaning": "allow to have; give on the basis of merit; be willing to concede"
    },
    {
        "id": 2086,
        "word": "graph",
        "phonetic": "[ɡrɑːf]",
        "meaning": "chart; a drawing illustrating the relations"
    },
    {
        "id": 2087,
        "word": "grasp",
        "phonetic": "[ɡrɑːsp]",
        "meaning": "grip; take hold of or seize firmly with or as if with the hand"
    },
    {
        "id": 2088,
        "word": "grasshopper",
        "phonetic": "[ˈɡrɑːsˌhɒpə]",
        "meaning": "terrestrial plant-eating insect; young student in initial stages of training"
    },
    {
        "id": 2089,
        "word": "grateful",
        "phonetic": "[ˈɡreɪtfᵊl]",
        "meaning": "thankful; appreciative of benefits received"
    },
    {
        "id": 2090,
        "word": "gratify",
        "phonetic": "[ˈɡrætɪfaɪ]",
        "meaning": "give pleasure to; satisfy; indulge; make happy"
    },
    {
        "id": 2091,
        "word": "gratis",
        "phonetic": "[ˈɡreɪtɪs]",
        "meaning": "free, without charge; costing nothing"
    },
    {
        "id": 2092,
        "word": "gratitude",
        "phonetic": "[ˈɡrætɪtjuːd]",
        "meaning": "state of being grateful; warm and friendly feeling toward a benefactor; thankfulness"
    },
    {
        "id": 2093,
        "word": "grave",
        "phonetic": "[ɡreɪv]",
        "meaning": "place for the burial; death or extinction"
    },
    {
        "id": 2094,
        "word": "gravel",
        "phonetic": "[ˈɡrævᵊl]",
        "meaning": "small stones, or fragments of stone; very small pebbles, often intermixed with particles of"
    },
    {
        "id": 2096,
        "word": "gravity",
        "phonetic": "[ˈɡrævəti]",
        "meaning": "seriousness; solemn and dignified feeling; natural force between two massive bodies"
    },
    {
        "id": 2097,
        "word": "graze",
        "phonetic": "[ɡreɪz]",
        "meaning": "scrape gently; feed on growing grasses and herbage"
    },
    {
        "id": 2098,
        "word": "grease",
        "phonetic": "[ɡriːs]",
        "meaning": "oil; fat; state of being covered with unclean things"
    },
    {
        "id": 2099,
        "word": "greedy",
        "phonetic": "[ˈɡriːdi]",
        "meaning": "wanting to get more than one can reasonably get"
    },
    {
        "id": 2100,
        "word": "greenhouse",
        "phonetic": "[ˈɡriːnhaʊs]",
        "meaning": "house in which tender plants are cultivated and sheltered from the weather"
    },
    {
        "id": 2101,
        "word": "grief",
        "phonetic": "[ɡriːf]",
        "meaning": "pain of mind; mental suffering arising from any cause, as misfortune, loss of friends; sorrow;"
    },
    {
        "id": 2103,
        "word": "grieve",
        "phonetic": "[ɡriːv]",
        "meaning": "cause to be sorrowful; distress"
    },
    {
        "id": 2104,
        "word": "grim",
        "phonetic": "[ɡrɪm]",
        "meaning": "unrelenting; rigid; dismal and gloomy; cold and forbidding"
    },
    {
        "id": 2105,
        "word": "grin",
        "phonetic": "[ɡrɪn]",
        "meaning": "act of withdrawing lips and showing teeth; broad smile"
    },
    {
        "id": 2106,
        "word": "grind",
        "phonetic": "[ɡraɪnd]",
        "meaning": "crush; scrape; reduce to small pieces or particles by pounding or abrading"
    },
    {
        "id": 2107,
        "word": "grip",
        "phonetic": "[ɡrɪp]",
        "meaning": "hold fast or firmly; seize as in a wrestling match"
    },
    {
        "id": 2108,
        "word": "groan",
        "phonetic": "[ɡrəʊn]",
        "meaning": "give forth a low, moaning sound in breathing"
    },
    {
        "id": 2109,
        "word": "groove",
        "phonetic": "[ɡruːv]",
        "meaning": "long narrow furrow or channel; settled routine; very pleasurable experience"
    },
    {
        "id": 2110,
        "word": "grope",
        "phonetic": "[ɡrəʊp]",
        "meaning": "search blindly or uncertainly; reach about uncertainly; feel one's way"
    },
    {
        "id": 2111,
        "word": "gross",
        "phonetic": "[ɡrəʊs]",
        "meaning": "of huge size; excessively large; coarse; rough; not fine or delicate"
    },
    {
        "id": 2112,
        "word": "ground",
        "phonetic": "[ɡraʊnd]",
        "meaning": "solid surface of the earth; bottom; lowest part"
    },
    {
        "id": 2113,
        "word": "grove",
        "phonetic": "[ɡrəʊv]",
        "meaning": "group of trees smaller than a forest; orchard"
    },
    {
        "id": 2114,
        "word": "growl",
        "phonetic": "[ɡraʊl]",
        "meaning": "utter a deep guttural sound, as angry dog; give forth an angry, grumbling sound; emit low"
    },
    {
        "id": 2116,
        "word": "grudge",
        "phonetic": "[ɡrʌʤ]",
        "meaning": "be unwilling or reluctant to give or admit; be envious; show discontent"
    },
    {
        "id": 2117,
        "word": "grumble",
        "phonetic": "[ˈɡrʌmbᵊl]",
        "meaning": "utter or emit low dull rumbling sounds"
    },
    {
        "id": 2118,
        "word": "guarantee",
        "phonetic": "[ˌɡærᵊnˈtiː]",
        "meaning": "pledge that something will happen or that something is true"
    },
    {
        "id": 2119,
        "word": "guardian",
        "phonetic": "[ˈɡɑːdiən]",
        "meaning": "one who guards, preserves, or secures; one who has, or is entitled to custody of person or"
    },
    {
        "id": 2121,
        "word": "guess",
        "phonetic": "[ɡɛs]",
        "meaning": "form an opinion concerning, without knowledge or means of knowledge; judge of at random"
    },
    {
        "id": 2122,
        "word": "guilt",
        "phonetic": "[ɡɪlt]",
        "meaning": "state of one who has broken a moral or political law; crime; criminality; offense against right"
    },
    {
        "id": 2123,
        "word": "guilty",
        "phonetic": "[ˈɡɪlti]",
        "meaning": "deserving of blame; adjudged to have committed crime"
    },
    {
        "id": 2124,
        "word": "gulf",
        "phonetic": "[ɡʌlf]",
        "meaning": "an arm of a sea or ocean partly enclosed by land; larger than a bay"
    },
    {
        "id": 2125,
        "word": "gulp",
        "phonetic": "[ɡʌlp]",
        "meaning": "swallow; utter or make a noise, as when swallowing too quickly"
    },
    {
        "id": 2126,
        "word": "gust",
        "phonetic": "[ɡʌst]",
        "meaning": "blast; outburst"
    },
    {
        "id": 2127,
        "word": "gutter",
        "phonetic": "[ˈɡʌtə]",
        "meaning": "channel at the eaves of a roof for conveying away the rain; eaves channel; eaves trough"
    },
    {
        "id": 2128,
        "word": "gymnasium",
        "phonetic": "[ʤɪmˈneɪziəm]",
        "meaning": "place or building where athletic exercises are performed; a school for gymnastics"
    },
    {
        "id": 2129,
        "word": "gymnastics",
        "phonetic": "[ʤɪmˈnæstɪks]",
        "meaning": "sport that involves exercises intended to display strength and balance and agility "
    },
    {
        "id": 2134,
        "word": "habit",
        "phonetic": "[ˈhæbɪt]",
        "meaning": "established disposition of the mind or character; distinctive dress, especially of a religious order"
    },
    {
        "id": 2135,
        "word": "haggard",
        "phonetic": "[ˈhæɡəd]",
        "meaning": "wasted away; showing wearing effects of overwork or suffering"
    },
    {
        "id": 2136,
        "word": "haggle",
        "phonetic": "[ˈhæɡᵊl]",
        "meaning": "argue about prices; bargain, as over the price of something"
    },
    {
        "id": 2137,
        "word": "hail",
        "phonetic": "[heɪl]",
        "meaning": "call for; salute; greet; praise vociferously"
    },
    {
        "id": 2138,
        "word": "hairy",
        "phonetic": "[ˈheəri]",
        "meaning": "bearing or covered with hair; made of or resembling hair; rough with hair"
    },
    {
        "id": 2139,
        "word": "hallmark",
        "phonetic": "[ˈhɔːlmɑːk]",
        "meaning": "sign; feature; mark indicating quality or excellence"
    },
    {
        "id": 2140,
        "word": "halt",
        "phonetic": "[hɔːlt]",
        "meaning": "stop; stand in doubt; hesitate"
    },
    {
        "id": 2141,
        "word": "ham",
        "phonetic": "[hæm]",
        "meaning": "meat cut from the thigh of a hog, usually smoked"
    },
    {
        "id": 2142,
        "word": "hamburger",
        "phonetic": "[ˈhæmbɜːɡə]",
        "meaning": "a fried bread of minced beef served on a bun"
    },
    {
        "id": 2143,
        "word": "hamper",
        "phonetic": "[ˈhæmpə]",
        "meaning": "put at disadvantage; prevent progress or free movement of"
    },
    {
        "id": 2144,
        "word": "handbook",
        "phonetic": "[ˈhændbʊk]",
        "meaning": "concise reference book providing specific information"
    },
    {
        "id": 2145,
        "word": "handful",
        "phonetic": "[ˈhændfʊl]",
        "meaning": "a small number"
    },
    {
        "id": 2146,
        "word": "handicap",
        "phonetic": "[ˈhændɪkæp]",
        "meaning": "disadvantage; physical disability; cripple; hinder; impede"
    },
    {
        "id": 2147,
        "word": "handle",
        "phonetic": "[ˈhændᵊl]",
        "meaning": "touch; feel with the hand; use or hold with the hand; manage in using; deal with"
    },
    {
        "id": 2148,
        "word": "handsome",
        "phonetic": "[ˈhænsəm]",
        "meaning": "skillful; handy; agreeable to the eye or to correct taste; having a pleasing appearance;"
    },
    {
        "id": 2150,
        "word": "handy",
        "phonetic": "[ˈhændi]",
        "meaning": "convenient; close"
    },
    {
        "id": 2151,
        "word": "hang",
        "phonetic": "[hæŋ]",
        "meaning": "suspend; fasten to some elevated point without support from below; hold for support"
    },
    {
        "id": 2152,
        "word": "hanger",
        "phonetic": "[ˈhæŋə]",
        "meaning": "one who hangs, or causes to be hanged; loop or strap by which something is hung"
    },
    {
        "id": 2153,
        "word": "haphazard",
        "phonetic": "[ˈhæpˈhæzəd]",
        "meaning": "not thorough, constant or consistent; by chance"
    },
    {
        "id": 2154,
        "word": "harbor",
        "phonetic": "[ˈhɑːbə]",
        "meaning": "provide a refuge for; hide; give shelter to"
    },
    {
        "id": 2155,
        "word": "harden",
        "phonetic": "[ˈhɑːdᵊn]",
        "meaning": "become hard or harder"
    },
    {
        "id": 2156,
        "word": "hardware",
        "phonetic": "[ˈhɑːdweə]",
        "meaning": "mechanical, magnetic, electronic, and electrical components making up a computer"
    },
    {
        "id": 2158,
        "word": "hardy",
        "phonetic": "[ˈhɑːdi]",
        "meaning": "in robust and good health; able to survive under unfavorable conditions"
    },
    {
        "id": 2159,
        "word": "harmful",
        "phonetic": "[ˈhɑːmfᵊl]",
        "meaning": "damaging; noxious; detrimental; dangerous"
    },
    {
        "id": 2160,
        "word": "harmless",
        "phonetic": "[ˈhɑːmləs]",
        "meaning": "unlikely to harm or disturb anyone"
    },
    {
        "id": 2161,
        "word": "harmonious",
        "phonetic": "[hɑːˈməʊniəs]",
        "meaning": "concordant; accordant; suitable and fitting"
    },
    {
        "id": 2162,
        "word": "harmony",
        "phonetic": "[ˈhɑːməni]",
        "meaning": "compatibility in opinion and action; an agreeable sound property"
    },
    {
        "id": 2163,
        "word": "harness",
        "phonetic": "[ˈhɑːnəs]",
        "meaning": "stable gear consisting of an arrangement to an animal so that it can be attached to and pull"
    },
    {
        "id": 2165,
        "word": "harsh",
        "phonetic": "[hɑːʃ]",
        "meaning": "rough; coarse; severe; unpleasantly stern"
    },
    {
        "id": 2166,
        "word": "harvest",
        "phonetic": "[ˈhɑːvɪst]",
        "meaning": "gather; yield from plants in a single growing season"
    },
    {
        "id": 2167,
        "word": "haste",
        "phonetic": "[heɪst]",
        "meaning": "hurry; rapidity of action or motion"
    },
    {
        "id": 2168,
        "word": "hasten",
        "phonetic": "[ˈheɪsᵊn]",
        "meaning": "accelerate; quicken"
    },
    {
        "id": 2169,
        "word": "hasty",
        "phonetic": "[ˈheɪsti]",
        "meaning": "easily angered; irritable; made too quickly to be accurate or wise"
    },
    {
        "id": 2170,
        "word": "hatch",
        "phonetic": "[hæʧ]",
        "meaning": "breed; emerge from the egg"
    },
    {
        "id": 2171,
        "word": "haughty",
        "phonetic": "[ˈhɔːti]",
        "meaning": "high; lofty; bold; arrogant; overbearing"
    },
    {
        "id": 2172,
        "word": "haul",
        "phonetic": "[hɔːl]",
        "meaning": "draw slowly or heavily; pull or drag forcibly; shift direction"
    },
    {
        "id": 2173,
        "word": "haunt",
        "phonetic": "[hɔːnt]",
        "meaning": "be a regular or frequent visitor to a certain place; bother; disturb"
    },
    {
        "id": 2174,
        "word": "hawk",
        "phonetic": "[hɔːk]",
        "meaning": "bird of prey typically having short rounded wings and a long tail"
    },
    {
        "id": 2175,
        "word": "hay",
        "phonetic": "[heɪ]",
        "meaning": "grass or other plants, cut and dried for fodder"
    },
    {
        "id": 2176,
        "word": "hazard",
        "phonetic": "[ˈhæzəd]",
        "meaning": "danger; risk"
    },
    {
        "id": 2177,
        "word": "heading",
        "phonetic": "[ˈhɛdɪŋ]",
        "meaning": "course or direction in which a ship or aircraft is moving; title, subtitle, or topic that stands at"
    },
    {
        "id": 2179,
        "word": "headlong",
        "phonetic": "[ˈhɛdlɒŋ]",
        "meaning": "uncontrollably forceful or fast; done with head leading; headfirst"
    },
    {
        "id": 2180,
        "word": "heal",
        "phonetic": "[hiːl]",
        "meaning": "cure; make or get healthy again"
    },
    {
        "id": 2181,
        "word": "heap",
        "phonetic": "[hiːp]",
        "meaning": "crowd or throng; a great number of persons; pile or mass"
    },
    {
        "id": 2182,
        "word": "hearing",
        "phonetic": "[ˈhɪərɪŋ]",
        "meaning": "opportunity to be heard; capacity to hear; judicial investigation of a suit at law"
    },
    {
        "id": 2183,
        "word": "heave",
        "phonetic": "[hiːv]",
        "meaning": "cause to move upward or onward by a lifting effort; lift; raise; hoist; throw"
    },
    {
        "id": 2184,
        "word": "heaven",
        "phonetic": "[ˈhɛvᵊn]",
        "meaning": "expanse of space surrounding the earth; sky; place where the sun, moon, and stars appear"
    },
    {
        "id": 2185,
        "word": "hedge",
        "phonetic": "[hɛʤ]",
        "meaning": "thicket of bushes, usually thorn bushes"
    },
    {
        "id": 2186,
        "word": "hedgehog",
        "phonetic": "[ˈhɛʤhɒɡ]",
        "meaning": "small European insectivore, and other allied species of Asia and Africa, having the hair on "
    },
    {
        "id": 2188,
        "word": "heed",
        "phonetic": "[hiːd]",
        "meaning": "pay attention to; listen to and consider"
    },
    {
        "id": 2189,
        "word": "heel",
        "phonetic": "[hiːl]",
        "meaning": "back part of the human foot; lower end of a ship's mast"
    },
    {
        "id": 2190,
        "word": "heighten",
        "phonetic": "[ˈhaɪtᵊn]",
        "meaning": "enhance; hoist; raise or increase the quantity or degree of; intensify"
    },
    {
        "id": 2191,
        "word": "heir",
        "phonetic": "[eə]",
        "meaning": "person who inherits some title or office"
    },
    {
        "id": 2192,
        "word": "heiress",
        "phonetic": "[ˈeərɪs]",
        "meaning": "woman who is an heir, especially to great wealth"
    },
    {
        "id": 2193,
        "word": "helicopter",
        "phonetic": "[ˈhɛlɪkɒptə]",
        "meaning": "aircraft without wings that obtains its lift from the rotation of overhead blades"
    },
    {
        "id": 2194,
        "word": "hell",
        "phonetic": "[hɛl]",
        "meaning": "place of the dead, or of souls after death where sinners suffer eternal punishment; any place of"
    },
    {
        "id": 2196,
        "word": "helmet",
        "phonetic": "[ˈhɛlmət]",
        "meaning": "defensive covering for head; hat, made of cork, felt, or metal, worn as uniform of soldiers,"
    },
    {
        "id": 2198,
        "word": "helpful",
        "phonetic": "[ˈhɛlpfᵊl]",
        "meaning": "giving aid; assistant; useful; salutary"
    },
    {
        "id": 2199,
        "word": "helpless",
        "phonetic": "[ˈhɛlpləs]",
        "meaning": "unable to help oneself; powerless or incompetent; powerless; weak"
    },
    {
        "id": 2200,
        "word": "hemisphere",
        "phonetic": "[ˈhɛmɪsfɪə]",
        "meaning": "halves; half of a sphere bounded by a great circle"
    },
    {
        "id": 2201,
        "word": "hence",
        "phonetic": "[hɛns]",
        "meaning": "from this place; from this time; from this reason; as an inference or deduction"
    },
    {
        "id": 2202,
        "word": "henceforth",
        "phonetic": "[ˌhɛnsˈfɔːθ]",
        "meaning": "from this time forward; henceforward"
    },
    {
        "id": 2203,
        "word": "herald",
        "phonetic": "[ˈhɛrᵊld]",
        "meaning": "proclaim; announces important news; messenger"
    },
    {
        "id": 2204,
        "word": "herb",
        "phonetic": "[hɜːb]",
        "meaning": "plant lacking a permanent woody stem, some having medicinal properties"
    },
    {
        "id": 2205,
        "word": "herd",
        "phonetic": "[hɜːd]",
        "meaning": "flock; crowd; group of cattle or other domestic animals"
    },
    {
        "id": 2206,
        "word": "hesitant",
        "phonetic": "[ˈhɛzɪtᵊnt]",
        "meaning": "reluctant, irresolute; tending to wait, or proceed with caution or reservation"
    },
    {
        "id": 2207,
        "word": "hesitate",
        "phonetic": "[ˈhɛzɪteɪt]",
        "meaning": "pause or hold back in uncertainty or unwillingness"
    },
    {
        "id": 2208,
        "word": "hide",
        "phonetic": "[haɪd]",
        "meaning": "prevent from being seen or discovered"
    },
    {
        "id": 2209,
        "word": "hideous",
        "phonetic": "[ˈhɪdiəs]",
        "meaning": "frightful, shocking, or offensive to the eyes; offensive to moral sensibilities; despicable"
    },
    {
        "id": 2210,
        "word": "hijack",
        "phonetic": "[ˈhaɪʤæk]",
        "meaning": "stop and rob a vehicle in transit; seize control of by use of force"
    },
    {
        "id": 2211,
        "word": "hike",
        "phonetic": "[haɪk]",
        "meaning": "long walk usually for exercise or pleasure"
    },
    {
        "id": 2212,
        "word": "hinder",
        "phonetic": "[ˈhɪndə]",
        "meaning": "put at a disadvantage; tie up; hamper; prevent the progress"
    },
    {
        "id": 2213,
        "word": "hindrance",
        "phonetic": "[ˈhɪndrəns]",
        "meaning": "something that holds back or causes problems with something else; obstacle"
    },
    {
        "id": 2214,
        "word": "hinge",
        "phonetic": "[hɪnʤ]",
        "meaning": "a joint that holds two parts together so that one can swing relative to the other"
    },
    {
        "id": 2215,
        "word": "hint",
        "phonetic": "[hɪnt]",
        "meaning": "allusion; clue; brief or indirect suggestion"
    },
    {
        "id": 2216,
        "word": "hinterland",
        "phonetic": "[ˈhɪntəlænd]",
        "meaning": "region; remote and undeveloped area"
    },
    {
        "id": 2217,
        "word": "hiss",
        "phonetic": "[hɪs]",
        "meaning": "prolonged sound like that letter s, made by forcing out the breath between the tongue and teeth"
    },
    {
        "id": 2218,
        "word": "historian",
        "phonetic": "[hɪˈstɔːriən]",
        "meaning": "one who is an authority on history"
    },
    {
        "id": 2219,
        "word": "historic",
        "phonetic": "[hɪˈstɒrɪk]",
        "meaning": "having importance or significance in history; belonging to the past; historical"
    },
    {
        "id": 2220,
        "word": "hitchhike",
        "phonetic": "[ˈhɪʧhaɪk]",
        "meaning": "travel by getting free rides from passing vehicles; be carried along with something else"
    },
    {
        "id": 2221,
        "word": "hitherto",
        "phonetic": "[ˈhɪðəˈtuː]",
        "meaning": "to this place; to a prescribed limit; up to this time; as yet; until now"
    },
    {
        "id": 2222,
        "word": "hoarse",
        "phonetic": "[hɔːs]",
        "meaning": "having a harsh, rough, grating voice or sound, as when affected with a cold; making a rough,"
    },
    {
        "id": 2224,
        "word": "hobby",
        "phonetic": "[ˈhɒbi]",
        "meaning": "auxiliary activity; activity or interest pursued outside one's regular occupation"
    },
    {
        "id": 2225,
        "word": "hoe",
        "phonetic": "[həʊ]",
        "meaning": "weed, cultivate, or dig up with a tool, which has flat blade attached at right angles to a long"
    },
    {
        "id": 2227,
        "word": "hoist",
        "phonetic": "[hɔɪst]",
        "meaning": "raise; lift; elevate"
    },
    {
        "id": 2228,
        "word": "hold",
        "phonetic": "[həʊld]",
        "meaning": "keep from departing; take and maintain control over; stop dealing with"
    },
    {
        "id": 2229,
        "word": "hollow",
        "phonetic": "[ˈhɒləʊ]",
        "meaning": "sound as if echoing in a empty space; void; vain; not solid; having a space or gap or cavity"
    },
    {
        "id": 2230,
        "word": "homely",
        "phonetic": "[ˈhəʊmli]",
        "meaning": "of home; domestic; familiar; intimate; plain; unpretending; rude in appearance; unpolished"
    },
    {
        "id": 2231,
        "word": "homesick",
        "phonetic": "[ˈhəʊmsɪk]",
        "meaning": "unhappy at being away and longing for familiar things or persons"
    },
    {
        "id": 2232,
        "word": "hook",
        "phonetic": "[hʊk]",
        "meaning": "a piece of metal, or other hard material, bent into curve or at angle, for catching, holding, or"
    },
    {
        "id": 2234,
        "word": "hop",
        "phonetic": "[hɒp]",
        "meaning": "move by successive leaps, as toads do; spring or jump on one foot"
    },
    {
        "id": 2235,
        "word": "horizon",
        "phonetic": "[həˈraɪzᵊn]",
        "meaning": "line at which the sky and Earth appear to meet; range of one's knowledge, experience, or"
    },
    {
        "id": 2237,
        "word": "horizontal",
        "phonetic": "[ˌhɒrɪˈzɒntᵊl]",
        "meaning": "flat; level; parallel to or in a base line"
    },
    {
        "id": 2238,
        "word": "horn",
        "phonetic": "[hɔːn]",
        "meaning": "one of the bony outgrowths on the heads of certain ungulates"
    },
    {
        "id": 2239,
        "word": "horrible",
        "phonetic": "[ˈhɒrəbᵊl]",
        "meaning": "exciting, or tending to horror or fear; hideous"
    },
    {
        "id": 2240,
        "word": "horror",
        "phonetic": "[ˈhɒrə]",
        "meaning": "terror; fear; intense dislike"
    },
    {
        "id": 2241,
        "word": "hose",
        "phonetic": "[həʊz]",
        "meaning": "a flexible pipe for conveying a liquid or gas"
    },
    {
        "id": 2242,
        "word": "hospitable",
        "phonetic": "[hɒˈspɪtəbᵊl]",
        "meaning": "disposed to treat guests with warmth and generosity; receptive"
    },
    {
        "id": 2243,
        "word": "hospitality",
        "phonetic": "[ˌhɒspɪˈtæləti]",
        "meaning": "act or practice of one who is hospitable; reception and entertainment of strangers or"
    },
    {
        "id": 2245,
        "word": "host",
        "phonetic": "[həʊst]",
        "meaning": "great number; person entertaining guests"
    },
    {
        "id": 2246,
        "word": "hostage",
        "phonetic": "[ˈhɒstɪʤ]",
        "meaning": "prisoner who is held by one party to insure that another party will meet specified terms"
    },
    {
        "id": 2247,
        "word": "hostile",
        "phonetic": "[ˈhɒstaɪl]",
        "meaning": "unfriendly; showing the disposition of an enemy"
    },
    {
        "id": 2248,
        "word": "hound",
        "phonetic": "[haʊnd]",
        "meaning": "a variety of domestic dog, having large, drooping ears; side bar used to strengthen portions of"
    },
    {
        "id": 2250,
        "word": "house",
        "phonetic": "[haʊs]",
        "meaning": "provide living quarters for; lodge; contain; harbor"
    },
    {
        "id": 2251,
        "word": "hover",
        "phonetic": "[ˈhɒvə]",
        "meaning": "hang about; wait nearby; remain floating"
    },
    {
        "id": 2252,
        "word": "howl",
        "phonetic": "[haʊl]",
        "meaning": "utter a loud, mournful sound or cry, as dogs and wolves often do; utter a sound expressive of"
    },
    {
        "id": 2254,
        "word": "hug",
        "phonetic": "[hʌɡ]",
        "meaning": "crowd together; keep close to; tight or amorous embrace"
    },
    {
        "id": 2255,
        "word": "hull",
        "phonetic": "[hʌl]",
        "meaning": "outer covering of anything, particularly of a nut or of grain; outer skin of a kernel; husk"
    },
    {
        "id": 2256,
        "word": "hum",
        "phonetic": "[hʌm]",
        "meaning": "low, prolonged sound; humming noise; singing with shut mouth"
    },
    {
        "id": 2257,
        "word": "humane",
        "phonetic": "[hjuːˈmeɪn]",
        "meaning": "marked by kindness, mercy, or compassion"
    },
    {
        "id": 2258,
        "word": "humanitarian",
        "phonetic": "[hjuːˌmænɪˈteəriən]",
        "meaning": "philanthropic; one devoted to the promotion of human welfare and to social reforms"
    },
    {
        "id": 2259,
        "word": "humanity",
        "phonetic": "[hjuːˈmænəti]",
        "meaning": "kindness; virtue; all of the inhabitants of the earth"
    },
    {
        "id": 2260,
        "word": "humble",
        "phonetic": "[ˈhʌmbᵊl]",
        "meaning": "low or inferior in station or quality; modest"
    },
    {
        "id": 2261,
        "word": "humid",
        "phonetic": "[ˈhjuːmɪd]",
        "meaning": "containing a high amount of water or water vapor"
    },
    {
        "id": 2262,
        "word": "humidity",
        "phonetic": "[hjuːˈmɪdəti]",
        "meaning": "dampness; moisture"
    },
    {
        "id": 2263,
        "word": "humiliate",
        "phonetic": "[hjuːˈmɪlieɪt]",
        "meaning": "cause to feel shame; hurt the pride of"
    },
    {
        "id": 2264,
        "word": "humorous",
        "phonetic": "[ˈhjuːmərəs]",
        "meaning": "employing or showing humor; funny; amusing"
    },
    {
        "id": 2265,
        "word": "hunger",
        "phonetic": "[ˈhʌŋɡə]",
        "meaning": "strong desire for something; feel the need to eat"
    },
    {
        "id": 2266,
        "word": "hurl",
        "phonetic": "[hɜːl]",
        "meaning": "throw with great force; cast; toss"
    },
    {
        "id": 2267,
        "word": "husband",
        "phonetic": "[ˈhʌzbənd]",
        "meaning": "use economically; conserve; save"
    },
    {
        "id": 2268,
        "word": "hush",
        "phonetic": "[hʌʃ]",
        "meaning": "make silent or quiet; keep from public knowledge; suppress mention of"
    },
    {
        "id": 2269,
        "word": "hustle",
        "phonetic": "[ˈhʌsᵊl]",
        "meaning": "bustle; cause to move furtively and hurriedly"
    },
    {
        "id": 2270,
        "word": "hydrogen",
        "phonetic": "[ˈhaɪdrəʤᵊn]",
        "meaning": "a nonmetallic univalent element that is normally a colorless and odorless highly flammable"
    },
    {
        "id": 2272,
        "word": "hygiene",
        "phonetic": "[ˈhaɪʤiːn]",
        "meaning": "cleanliness; sanitation"
    },
    {
        "id": 2273,
        "word": "hymn",
        "phonetic": "[hɪm]",
        "meaning": "song of praise or adoration, especially, a religious ode, a sacred lyric"
    },
    {
        "id": 2274,
        "word": "hypocrisy",
        "phonetic": "[hɪˈpɒkrəsi]",
        "meaning": "act or practice of a hypocrite"
    },
    {
        "id": 2275,
        "word": "hypothesis",
        "phonetic": "[haɪˈpɒθɪsɪs]",
        "meaning": "assumption; theory"
    },
    {
        "id": 2276,
        "word": "hypothetical",
        "phonetic": "[ˌhaɪpəˈθɛtɪkᵊl]",
        "meaning": "based on assumptions; supposed"
    },
    {
        "id": 2277,
        "word": "hysteria",
        "phonetic": "[hɪˈstɪəriə]",
        "meaning": "behavior exhibiting excessive or uncontrollable emotion, such as fear or panic; mental"
    },
    {
        "id": 2283,
        "word": "ideal",
        "phonetic": "[aɪˈdɪəl]",
        "meaning": "existing in idea or thought; conception; intellectual; mental; imaginary standard of excellence; fit"
    },
    {
        "id": 2285,
        "word": "identical",
        "phonetic": "[aɪˈdɛntɪkᵊl]",
        "meaning": "duplicate; alike; being the exact same one"
    },
    {
        "id": 2286,
        "word": "identification",
        "phonetic": "[aɪˌdɛntɪfɪˈkeɪʃᵊn]",
        "meaning": "act of designating or identifying something; condition of having your identity"
    },
    {
        "id": 2288,
        "word": "identify",
        "phonetic": "[aɪˈdɛntɪfaɪ]",
        "meaning": "detect; find out; discover"
    },
    {
        "id": 2289,
        "word": "identity",
        "phonetic": "[aɪˈdɛntəti]",
        "meaning": "exact sameness; distinct personality of an individual regarded as a persisting entity"
    },
    {
        "id": 2290,
        "word": "idiom",
        "phonetic": "[ˈɪdiəm]",
        "meaning": "expression whose meaning differs from meanings of its individual words; distinctive style"
    },
    {
        "id": 2291,
        "word": "idiomatic",
        "phonetic": "[ˌɪdɪəˈmætɪk]",
        "meaning": "having the nature of an idiom; characteristic of a given language"
    },
    {
        "id": 2292,
        "word": "idiot",
        "phonetic": "[ˈɪdiət]",
        "meaning": "foolish or stupid person; unlearned, ignorant, or simple person"
    },
    {
        "id": 2293,
        "word": "idle",
        "phonetic": "[ˈaɪdᵊl]",
        "meaning": "useless; vain; trifling; unprofitable; thoughtless; given rest and ease; avoiding work or"
    },
    {
        "id": 2295,
        "word": "idol",
        "phonetic": "[ˈaɪdᵊl]",
        "meaning": "image used for worship; image of divinity; representation or symbol; false notion or conception"
    },
    {
        "id": 2296,
        "word": "ignite",
        "phonetic": "[ɪɡˈnaɪt]",
        "meaning": "kindle; cause to start burning; set fire to"
    },
    {
        "id": 2297,
        "word": "ignorance",
        "phonetic": "[ˈɪɡnᵊrᵊns]",
        "meaning": "lack of knowledge or education"
    },
    {
        "id": 2298,
        "word": "ignorant",
        "phonetic": "[ˈɪɡnᵊrᵊnt]",
        "meaning": "lacking education or knowledge; unaware"
    },
    {
        "id": 2299,
        "word": "ignore",
        "phonetic": "[ɪɡˈnɔː]",
        "meaning": "refuse to pay attention to; disregard; overlook; neglect"
    },
    {
        "id": 2300,
        "word": "illegible",
        "phonetic": "[ɪˈlɛʤəbᵊl]",
        "meaning": "incapable of being read; unclear; not legible"
    },
    {
        "id": 2301,
        "word": "illiterate",
        "phonetic": "[ɪˈlɪtᵊrət]",
        "meaning": "uncultured; uneducated; not able to read or write"
    },
    {
        "id": 2302,
        "word": "illuminate",
        "phonetic": "[ɪˈljuːmɪneɪt]",
        "meaning": "provide or brighten with light; clear up or make understandable; enlighten"
    },
    {
        "id": 2303,
        "word": "illusion",
        "phonetic": "[ɪˈluːʒᵊn]",
        "meaning": "misleading vision; being deceived by a false perception or belief"
    },
    {
        "id": 2304,
        "word": "illusive",
        "phonetic": "[ɪˈluːsɪv]",
        "meaning": "deceptive; misleading; based on or having the nature of an illusion"
    },
    {
        "id": 2305,
        "word": "illustrate",
        "phonetic": "[ˈɪləstreɪt]",
        "meaning": "represent; demonstrate; depict; clarify, as by use of examples or comparisons"
    },
    {
        "id": 2306,
        "word": "illustration",
        "phonetic": "[ˌɪləˈstreɪʃᵊn]",
        "meaning": "picture; drawing; showing by example"
    },
    {
        "id": 2307,
        "word": "image",
        "phonetic": "[ˈɪmɪʤ]",
        "meaning": "visual representation; representation of a person"
    },
    {
        "id": 2308,
        "word": "imaginary",
        "phonetic": "[ɪˈmæʤɪnᵊri]",
        "meaning": "having existence only in the imagination; fanciful; visionary"
    },
    {
        "id": 2309,
        "word": "imitate",
        "phonetic": "[ˈɪmɪteɪt]",
        "meaning": "copy the actions, appearance, mannerisms, or speech of; mimic; use or follow as a model"
    },
    {
        "id": 2310,
        "word": "imitation",
        "phonetic": "[ˌɪmɪˈteɪʃᵊn]",
        "meaning": "emulation; copying the actions of someone else"
    },
    {
        "id": 2311,
        "word": "immediate",
        "phonetic": "[ɪˈmiːdiət]",
        "meaning": "not deferred by an interval of time; present; occurring at once; instant"
    },
    {
        "id": 2312,
        "word": "immediately",
        "phonetic": "[ɪˈmiːdiətli]",
        "meaning": "proximately; directly; without interval of time; without delay; promptly; instantly; at once"
    },
    {
        "id": 2313,
        "word": "immense",
        "phonetic": "[ɪˈmɛns]",
        "meaning": "enormous; boundless; so great as to be beyond measurement"
    },
    {
        "id": 2314,
        "word": "immerse",
        "phonetic": "[ɪˈmɜːs]",
        "meaning": "plunge into anything, especially a fluid; sink; dip"
    },
    {
        "id": 2315,
        "word": "immigrant",
        "phonetic": "[ˈɪmɪɡrənt]",
        "meaning": "one who comes to a country where they were not born in order to settle there; non-native"
    },
    {
        "id": 2316,
        "word": "immigrate",
        "phonetic": "[ˈɪmɪɡreɪt]",
        "meaning": "move into another country to stay there permanently"
    },
    {
        "id": 2317,
        "word": "immigration",
        "phonetic": "[ˌɪmɪˈɡreɪʃᵊn]",
        "meaning": "migration into a place; moving into a place"
    },
    {
        "id": 2318,
        "word": "imminent",
        "phonetic": "[ˈɪmɪnənt]",
        "meaning": "near at hand; close in time; about to occur"
    },
    {
        "id": 2319,
        "word": "immoral",
        "phonetic": "[ɪˈmɒrᵊl]",
        "meaning": "not moral; contrary to conscience or the divine law; wicked; unjust; dishonest"
    },
    {
        "id": 2320,
        "word": "immortal",
        "phonetic": "[ɪˈmɔːtᵊl]",
        "meaning": "not mortal; exempt from liability to die; undying; imperishable; lasting forever"
    },
    {
        "id": 2321,
        "word": "impact",
        "phonetic": "[ˈɪmpækt]",
        "meaning": "forceful consequence; strong effect; influencing strongly"
    },
    {
        "id": 2322,
        "word": "impart",
        "phonetic": "[ɪmˈpɑːt]",
        "meaning": "reveal or tell; grant a share of; bestow"
    },
    {
        "id": 2323,
        "word": "impartial",
        "phonetic": "[ɪmˈpɑːʃᵊl]",
        "meaning": "not biased; fair; showing lack of favoritism"
    },
    {
        "id": 2324,
        "word": "imperative",
        "phonetic": "[ɪmˈpɛrətɪv]",
        "meaning": "having power command or control; critically importance; some duty that is essential and"
    },
    {
        "id": 2326,
        "word": "implement",
        "phonetic": "[ˈɪmplɪmənt]",
        "meaning": "put into effect; supply with tools"
    },
    {
        "id": 2327,
        "word": "implication",
        "phonetic": "[ˌɪmplɪˈkeɪʃᵊn]",
        "meaning": "something hinted at or suggested; act of implying; condition of being implied"
    },
    {
        "id": 2328,
        "word": "implore",
        "phonetic": "[ɪmˈplɔː]",
        "meaning": "beg for urgently; make an earnest appeal"
    },
    {
        "id": 2329,
        "word": "imply",
        "phonetic": "[ɪmˈplaɪ]",
        "meaning": "express or indicate indirectly; signify"
    },
    {
        "id": 2330,
        "word": "import",
        "phonetic": "[ˈɪmpɔːt]",
        "meaning": "bring in from another country"
    },
    {
        "id": 2331,
        "word": "impose",
        "phonetic": "[ɪmˈpəʊz]",
        "meaning": "demand; force; compel to behave in a certain way"
    },
    {
        "id": 2332,
        "word": "impractical",
        "phonetic": "[ɪmˈpræktɪkᵊl]",
        "meaning": "unwise to implement or maintain in practice; theoretical"
    },
    {
        "id": 2333,
        "word": "impressive",
        "phonetic": "[ɪmˈprɛsɪv]",
        "meaning": "making a strong or vivid impression; producing a strong effect"
    },
    {
        "id": 2334,
        "word": "imprisonment",
        "phonetic": "[ɪmˈprɪzᵊnmənt]",
        "meaning": "confinement; putting someone in prison or in jail as lawful punishment"
    },
    {
        "id": 2335,
        "word": "impulse",
        "phonetic": "[ˈɪmpʌls]",
        "meaning": "act of applying force suddenly; an impelling force or strength"
    },
    {
        "id": 2336,
        "word": "inability",
        "phonetic": "[ˌɪnəˈbɪləti]",
        "meaning": "lack of ability, especially mental ability, to do something"
    },
    {
        "id": 2337,
        "word": "inaccessible",
        "phonetic": "[ˌɪnəkˈsɛsəbᵊl]",
        "meaning": "unreachable; not available; unattainable"
    },
    {
        "id": 2338,
        "word": "inadequate",
        "phonetic": "[ɪˈnædɪkwət]",
        "meaning": "not sufficient to meet a need; insufficient; poor"
    },
    {
        "id": 2339,
        "word": "inaugurate",
        "phonetic": "[ɪˈnɔːɡjəreɪt]",
        "meaning": "start; initiate; induct into office by formal ceremony"
    },
    {
        "id": 2340,
        "word": "incense",
        "phonetic": "[ˈɪnsɛns]",
        "meaning": "enrage; infuriate; cause to be extremely angry"
    },
    {
        "id": 2341,
        "word": "incentive",
        "phonetic": "[ɪnˈsɛntɪv]",
        "meaning": "something, such as the fear of punishment or the expectation of reward"
    },
    {
        "id": 2342,
        "word": "incident",
        "phonetic": "[ˈɪnsɪdᵊnt]",
        "meaning": "usually minor event or condition that is subordinate to another; event; happening"
    },
    {
        "id": 2343,
        "word": "incidentally",
        "phonetic": "[ˌɪnsɪˈdɛntᵊli]",
        "meaning": "by chance; accidentally"
    },
    {
        "id": 2344,
        "word": "inclination",
        "phonetic": "[ˌɪnklɪˈneɪʃᵊn]",
        "meaning": "preference; tendency; inclined surface; slope"
    },
    {
        "id": 2345,
        "word": "incline",
        "phonetic": "[ɪnˈklaɪn]",
        "meaning": "cause to lean, slant, or slope; deviate from the horizontal or vertical"
    },
    {
        "id": 2346,
        "word": "inclined",
        "phonetic": "[ɪnˈklaɪnd]",
        "meaning": "tending or leaning toward; bent; having preference or tendency"
    },
    {
        "id": 2347,
        "word": "inclusive",
        "phonetic": "[ɪnˈkluːsɪv]",
        "meaning": "tending to include all; taking a great deal or everything within its scope"
    },
    {
        "id": 2348,
        "word": "income",
        "phonetic": "[ˈɪnkʌm]",
        "meaning": "gain from labor, business, property, or capital"
    },
    {
        "id": 2349,
        "word": "incompatible",
        "phonetic": "[ˌɪnkəmˈpætəbᵊl]",
        "meaning": "inharmonious; impossible to coexist; not easy to combine harmoniously"
    },
    {
        "id": 2350,
        "word": "inconsistency",
        "phonetic": "[ˌɪnkənˈsɪstᵊnsi]",
        "meaning": "state of being self-contradictory; lack of uniformity or steadiness"
    },
    {
        "id": 2351,
        "word": "inconvenient",
        "phonetic": "[ˌɪnkənˈviːniənt]",
        "meaning": "not suited to your comfort, purpose or needs"
    },
    {
        "id": 2352,
        "word": "incorporate",
        "phonetic": "[ɪnˈkɔːpᵊreɪt]",
        "meaning": "combine something into a larger whole; unite"
    },
    {
        "id": 2353,
        "word": "incredible",
        "phonetic": "[ɪnˈkrɛdəbᵊl]",
        "meaning": "unbelievable; beyond belief or understanding"
    },
    {
        "id": 2354,
        "word": "incredulous",
        "phonetic": "[ɪnˈkrɛʤələs]",
        "meaning": "difficult to believe; incredible; skeptical"
    },
    {
        "id": 2355,
        "word": "increment",
        "phonetic": "[ˈɪnkrɪmənt]",
        "meaning": "process of increasing in number, size, quantity, or extent"
    },
    {
        "id": 2356,
        "word": "incur",
        "phonetic": "[ɪnˈkɜː]",
        "meaning": "bring upon oneself; become liable to; acquire or come into"
    },
    {
        "id": 2357,
        "word": "indebted",
        "phonetic": "[ɪnˈdɛtɪd]",
        "meaning": "morally, socially, or legally obligated to another; under a legal obligation to someone"
    },
    {
        "id": 2358,
        "word": "indefinite",
        "phonetic": "[ɪnˈdɛfɪnət]",
        "meaning": "unclear; vague; lacking precise limits"
    },
    {
        "id": 2359,
        "word": "indefinitely",
        "phonetic": "[ɪnˈdɛfɪnətli]",
        "meaning": "endlessly; incessantly; for a long time, no end defined; forever"
    },
    {
        "id": 2360,
        "word": "indent",
        "phonetic": "[ˈɪndɛnt]",
        "meaning": "nick; set in from margin; impress or stamp"
    },
    {
        "id": 2361,
        "word": "independent",
        "phonetic": "[ˌɪndɪˈpɛndənt]",
        "meaning": "not dependent; free; not subject to control by others; not relying on others"
    },
    {
        "id": 2362,
        "word": "index",
        "phonetic": "[ˈɪndɛks]",
        "meaning": "anything which shows, indicates, manifests, or discloses; prologue indicating what follows;"
    },
    {
        "id": 2364,
        "word": "indicate",
        "phonetic": "[ˈɪndɪkeɪt]",
        "meaning": "point out; direct to a knowledge of"
    },
    {
        "id": 2365,
        "word": "indicative",
        "phonetic": "[ɪnˈdɪkətɪv]",
        "meaning": "suggestive; implying; serving to indicate"
    },
    {
        "id": 2366,
        "word": "indifference",
        "phonetic": "[ɪnˈdɪfᵊrᵊns]",
        "meaning": "unconcern; disinterest; lack of enthusiasm"
    },
    {
        "id": 2367,
        "word": "indifferent",
        "phonetic": "[ɪnˈdɪfᵊrᵊnt]",
        "meaning": "having no particular interest or concern; being neither good nor bad"
    },
    {
        "id": 2368,
        "word": "indigestion",
        "phonetic": "[ˌɪndɪˈʤɛsʧᵊn]",
        "meaning": "a disorder of digestive function; difficulty in digesting"
    },
    {
        "id": 2369,
        "word": "indignant",
        "phonetic": "[ɪnˈdɪɡnənt]",
        "meaning": "affected with indignation; wrathful; passionate; irate; feeling wrath by unworthy or unjust"
    },
    {
        "id": 2371,
        "word": "indignation",
        "phonetic": "[ˌɪndɪɡˈneɪʃᵊn]",
        "meaning": "anger aroused by something unjust"
    },
    {
        "id": 2372,
        "word": "indispensable",
        "phonetic": "[ˌɪndɪˈspɛnsəbᵊl]",
        "meaning": "essential; requisite; impossible to be omitted or remitted"
    },
    {
        "id": 2373,
        "word": "individual",
        "phonetic": "[ˌɪndɪˈvɪʤuəl]",
        "meaning": "single person or thing; human regarded as a unique personality"
    },
    {
        "id": 2374,
        "word": "induce",
        "phonetic": "[ɪnˈdjuːs]",
        "meaning": "persuade; bring about; reason or establish by induction"
    },
    {
        "id": 2375,
        "word": "inducement",
        "phonetic": "[ɪnˈdjuːsmənt]",
        "meaning": "act of inducing, or the state of being induced; a motive or consideration that leads one"
    },
    {
        "id": 2377,
        "word": "indulge",
        "phonetic": "[ɪnˈdʌlʤ]",
        "meaning": "be complacent toward; give way to; not to oppose or restrain; yield to the desire of"
    },
    {
        "id": 2378,
        "word": "industrial",
        "phonetic": "[ɪnˈdʌstriəl]",
        "meaning": "of or relating to or resulting from industry; having highly developed industries"
    },
    {
        "id": 2379,
        "word": "industrialization",
        "phonetic": "[ɪnˌdʌstriəlaɪˈzeɪʃᵊn]",
        "meaning": "development of industry on an extensive scale"
    },
    {
        "id": 2380,
        "word": "industrialized",
        "phonetic": "[ɪnˈdʌstriəlaɪzd]",
        "meaning": "made industrial; converted to industrialism"
    },
    {
        "id": 2381,
        "word": "industrious",
        "phonetic": "[ɪnˈdʌstriəs]",
        "meaning": "diligent; hard-working; busy and laborious"
    },
    {
        "id": 2382,
        "word": "inertia",
        "phonetic": "[ɪˈnɜːʃə]",
        "meaning": "property of matter by which it tends when at rest to remain so, and when in motion to continue"
    },
    {
        "id": 2384,
        "word": "inevitable",
        "phonetic": "[ɪˈnɛvɪtəbᵊl]",
        "meaning": "unavoidable; incapable of being avoided or prevented"
    },
    {
        "id": 2385,
        "word": "inevitably",
        "phonetic": "[ɪˈnɛvɪtəbᵊli]",
        "meaning": "unavoidably; in a manner that is impossible to avoid or prevent"
    },
    {
        "id": 2386,
        "word": "infant",
        "phonetic": "[ˈɪnfənt]",
        "meaning": "child in the first period of life; young babe"
    },
    {
        "id": 2387,
        "word": "infantry",
        "phonetic": "[ˈɪnfəntri]",
        "meaning": "body of children; a body of soldiers serving on foot; foot soldiers"
    },
    {
        "id": 2388,
        "word": "infect",
        "phonetic": "[ɪnˈfɛkt]",
        "meaning": "bring into contact with a substance that can cause illness"
    },
    {
        "id": 2389,
        "word": "infection",
        "phonetic": "[ɪnˈfɛkʃᵊn]",
        "meaning": "moral corruption or contamination; invasion of body which can lead to tissue damage and"
    },
    {
        "id": 2391,
        "word": "infectious",
        "phonetic": "[ɪnˈfɛkʃəs]",
        "meaning": "contagious; contaminating"
    },
    {
        "id": 2392,
        "word": "infer",
        "phonetic": "[ɪnˈfɜː]",
        "meaning": "deduce; conclude from evidence or premises; lead to as a consequence or conclusion"
    },
    {
        "id": 2393,
        "word": "inference",
        "phonetic": "[ˈɪnfᵊrᵊns]",
        "meaning": "inferring by deduction or induction; truth or proposition drawn from another which is"
    },
    {
        "id": 2395,
        "word": "inferior",
        "phonetic": "[ɪnˈfɪəriə]",
        "meaning": "poor; lower than a given reference point; low or lower in order, degree, or rank"
    },
    {
        "id": 2396,
        "word": "inferiority",
        "phonetic": "[ɪnˌfɪəriˈɒrəti]",
        "meaning": "state of being lower than or not as good as"
    },
    {
        "id": 2397,
        "word": "infinite",
        "phonetic": "[ˈɪnfɪnət]",
        "meaning": "unlimited or boundless, in time or space; without limit in power, capacity, knowledge, or"
    },
    {
        "id": 2399,
        "word": "infinity",
        "phonetic": "[ɪnˈfɪnəti]",
        "meaning": "unlimited extent of time, space, or quantity; eternity; boundlessness; immensity"
    },
    {
        "id": 2400,
        "word": "inflation",
        "phonetic": "[ɪnˈfleɪʃᵊn]",
        "meaning": "general increase in the prices of goods and services in a country"
    },
    {
        "id": 2401,
        "word": "inflict",
        "phonetic": "[ɪnˈflɪkt]",
        "meaning": "impose something unpleasant; cause"
    },
    {
        "id": 2402,
        "word": "influence",
        "phonetic": "[ˈɪnfluəns]",
        "meaning": "power affecting person or thing; effect of one thing on another; flowing in or upon; influx"
    },
    {
        "id": 2403,
        "word": "influential",
        "phonetic": "[ˌɪnfluˈɛnʃᵊl]",
        "meaning": "important; powerful; having or exercising influence or power"
    },
    {
        "id": 2404,
        "word": "influenza",
        "phonetic": "[ˌɪnfluˈɛnzə]",
        "meaning": "an acute febrile highly contagious viral disease"
    },
    {
        "id": 2405,
        "word": "inform",
        "phonetic": "[ɪnˈfɔːm]",
        "meaning": "impart information to; make aware of something; be a pervasive presence in; animate"
    },
    {
        "id": 2406,
        "word": "informal",
        "phonetic": "[ɪnˈfɔːmᵊl]",
        "meaning": "absence of ceremony; casual"
    },
    {
        "id": 2407,
        "word": "informative",
        "phonetic": "[ɪnˈfɔːmətɪv]",
        "meaning": "instructive; illustrative; providing or conveying information"
    },
    {
        "id": 2408,
        "word": "infringe",
        "phonetic": "[ɪnˈfrɪnʤ]",
        "meaning": "act contrary to, as a law, right, or obligation; annul or hinder"
    },
    {
        "id": 2409,
        "word": "ingenious",
        "phonetic": "[ɪnˈʤiːniəs]",
        "meaning": "clever; having inventive or cunning mind"
    },
    {
        "id": 2410,
        "word": "ingenuity",
        "phonetic": "[ˌɪnʤəˈnjuːəti]",
        "meaning": "quality or power of ready invention; quickness or acuteness in forming new combinations"
    },
    {
        "id": 2411,
        "word": "inhabit",
        "phonetic": "[ɪnˈhæbɪt]",
        "meaning": "live in; occupy; reside in"
    },
    {
        "id": 2412,
        "word": "inhabitant",
        "phonetic": "[ɪnˈhæbɪtᵊnt]",
        "meaning": "resident; someone or thing who lives in a place"
    },
    {
        "id": 2413,
        "word": "inherent",
        "phonetic": "[ɪnˈhɛrᵊnt]",
        "meaning": "firmly established by nature or habit"
    },
    {
        "id": 2414,
        "word": "inherit",
        "phonetic": "[ɪnˈhɛrɪt]",
        "meaning": "receive from an ancestor by legal succession or will; receive by bequest or as a legacy"
    },
    {
        "id": 2415,
        "word": "initial",
        "phonetic": "[ɪˈnɪʃᵊl]",
        "meaning": "early; preliminary; occurring at the beginning"
    },
    {
        "id": 2416,
        "word": "initially",
        "phonetic": "[ɪˈnɪʃᵊli]",
        "meaning": "in the beginning; at first"
    },
    {
        "id": 2417,
        "word": "initiate",
        "phonetic": "[ɪˈnɪʃiət]",
        "meaning": "begin; originate; admit into membership"
    },
    {
        "id": 2418,
        "word": "initiative",
        "phonetic": "[ɪˈnɪʃətɪv]",
        "meaning": "serving to initiate; introductory step or movement; act which originates or begins"
    },
    {
        "id": 2419,
        "word": "inject",
        "phonetic": "[ɪnˈʤɛkt]",
        "meaning": "put in; infuse ; force or drive fluid into something"
    },
    {
        "id": 2420,
        "word": "injure",
        "phonetic": "[ˈɪnʤə]",
        "meaning": "do harm to; inflict damage; do injustice to"
    },
    {
        "id": 2421,
        "word": "injury",
        "phonetic": "[ˈɪnʤᵊri]",
        "meaning": "any physical damage to body caused by violence or accident or fracture"
    },
    {
        "id": 2422,
        "word": "injustice",
        "phonetic": "[ɪnˈʤʌstɪs]",
        "meaning": "unjust act; practice of being unjust or unfair"
    },
    {
        "id": 2423,
        "word": "inland",
        "phonetic": "[ˈɪnlənd]",
        "meaning": "within the land; more or less remote from the ocean or from open water; interior"
    },
    {
        "id": 2424,
        "word": "innocent",
        "phonetic": "[ˈɪnəsᵊnt]",
        "meaning": "naive; lacking sense or awareness; free from evil or guilt"
    },
    {
        "id": 2425,
        "word": "innovate",
        "phonetic": "[ˈɪnəveɪt]",
        "meaning": "change or alter by bringing in something new"
    },
    {
        "id": 2426,
        "word": "innovation",
        "phonetic": "[ˌɪnəˈveɪʃᵊn]",
        "meaning": "introduction of something new"
    },
    {
        "id": 2427,
        "word": "innumerable",
        "phonetic": "[ɪˈnjuːmərəbᵊl]",
        "meaning": "countless; numerous"
    },
    {
        "id": 2428,
        "word": "inquire",
        "phonetic": "[ɪnˈkwaɪə]",
        "meaning": "ask a question; seek for truth or information by putting queries"
    },
    {
        "id": 2429,
        "word": "inquiry",
        "phonetic": "[ɪnˈkwaɪəri]",
        "meaning": "investigation; search for knowledge"
    },
    {
        "id": 2430,
        "word": "insane",
        "phonetic": "[ɪnˈseɪn]",
        "meaning": "exhibiting disordered of mind; deranged in mind; very foolish"
    },
    {
        "id": 2431,
        "word": "insert",
        "phonetic": "[ˈɪnsɜːt]",
        "meaning": "input; enter; put or set into, between, or among"
    },
    {
        "id": 2432,
        "word": "insider",
        "phonetic": "[ɪnˈsaɪdə]",
        "meaning": "an accepted member of a group; one who has special knowledge or access to confidential"
    },
    {
        "id": 2434,
        "word": "insight",
        "phonetic": "[ˈɪnsaɪt]",
        "meaning": "understanding; grasping the inner nature of things intuitively"
    },
    {
        "id": 2435,
        "word": "insignificant",
        "phonetic": "[ˌɪnsɪɡˈnɪfɪkᵊnt]",
        "meaning": "not large enough to consider or notice; lacking in importance; trivial"
    },
    {
        "id": 2436,
        "word": "insist",
        "phonetic": "[ɪnˈsɪst]",
        "meaning": "stand or rest; find support; take a stand and refuse to give way; be persistent"
    },
    {
        "id": 2437,
        "word": "insolvent",
        "phonetic": "[ɪnˈsɒlvᵊnt]",
        "meaning": "bankrupt; unable to repay one's debts"
    },
    {
        "id": 2438,
        "word": "inspect",
        "phonetic": "[ɪnˈspɛkt]",
        "meaning": "look over; examine carefully and critically, especially for flaws"
    },
    {
        "id": 2439,
        "word": "inspection",
        "phonetic": "[ɪnˈspɛkʃᵊn]",
        "meaning": "formal or official examination"
    },
    {
        "id": 2440,
        "word": "inspector",
        "phonetic": "[ɪnˈspɛktə]",
        "meaning": "high ranking police officer; investigator who observes carefully"
    },
    {
        "id": 2441,
        "word": "inspiration",
        "phonetic": "[ˌɪnspɪˈreɪʃᵊn]",
        "meaning": "sudden intuition as part of solving a problem; arousing to a particular emotion or action"
    },
    {
        "id": 2442,
        "word": "inspire",
        "phonetic": "[ɪnˈspaɪə]",
        "meaning": "encourage; inspirit; fire the imagination of"
    },
    {
        "id": 2443,
        "word": "install",
        "phonetic": "[ɪnˈstɔːl]",
        "meaning": "set up; connect or set in position and prepare for use"
    },
    {
        "id": 2444,
        "word": "installation",
        "phonetic": "[ˌɪnstəˈleɪʃᵊn]",
        "meaning": "act of installing or giving possession of an office, rank, or order, with the usual rites or"
    },
    {
        "id": 2446,
        "word": "installment",
        "phonetic": "[ɪnˈstɔːlmənt]",
        "meaning": "monthly payment; a part of a published serial"
    },
    {
        "id": 2447,
        "word": "instance",
        "phonetic": "[ˈɪnstəns]",
        "meaning": "example that is cited to prove a contention or illustrate a point; case or occurrence"
    },
    {
        "id": 2448,
        "word": "instinct",
        "phonetic": "[ˈɪnstɪŋkt]",
        "meaning": "inborn pattern of behavior ; nature"
    },
    {
        "id": 2449,
        "word": "instinctive",
        "phonetic": "[ɪnˈstɪŋktɪv]",
        "meaning": "unthinking; prompted by instinct; spontaneous"
    },
    {
        "id": 2450,
        "word": "institute",
        "phonetic": "[ˈɪnstɪtjuːt]",
        "meaning": "advance or set forth in court; association organized to promote art or science or education"
    },
    {
        "id": 2451,
        "word": "institution",
        "phonetic": "[ˌɪnstɪˈtjuːʃᵊn]",
        "meaning": "institute; organization; introducing something new"
    },
    {
        "id": 2452,
        "word": "instruct",
        "phonetic": "[ɪnˈstrʌkt]",
        "meaning": "teach; make aware of"
    },
    {
        "id": 2453,
        "word": "instruction",
        "phonetic": "[ɪnˈstrʌkʃᵊn]",
        "meaning": "direction; teaching; activities of educating or instructing"
    },
    {
        "id": 2454,
        "word": "instructive",
        "phonetic": "[ɪnˈstrʌktɪv]",
        "meaning": "serving to instruct of enlighten or inform; enlightening"
    },
    {
        "id": 2455,
        "word": "instrument",
        "phonetic": "[ˈɪnstrəmənt]",
        "meaning": "tool; one used by another to accomplish a purpose; device used to produce music; legal"
    },
    {
        "id": 2457,
        "word": "instrumental",
        "phonetic": "[ˌɪnstrəˈmɛntᵊl]",
        "meaning": "serving or acting as a means or aid; helpful; relating to musical instruments"
    },
    {
        "id": 2458,
        "word": "insufficient",
        "phonetic": "[ˌɪnsəˈfɪʃᵊnt]",
        "meaning": "of a quantity not able to fulfill a need or requirement"
    },
    {
        "id": 2459,
        "word": "insulate",
        "phonetic": "[ˈɪnsjəleɪt]",
        "meaning": "make an island of; place in a detached situation, or in a state having no communication with"
    },
    {
        "id": 2461,
        "word": "insulation",
        "phonetic": "[ˌɪnsjəˈleɪʃᵊn]",
        "meaning": "act of insulating; separation; state of being detached, from other objects"
    },
    {
        "id": 2462,
        "word": "insult",
        "phonetic": "[ˈɪnsʌlt]",
        "meaning": "offend; affront; treat, mention, or speak to rudely"
    },
    {
        "id": 2463,
        "word": "insurance",
        "phonetic": "[ɪnˈʃʊərᵊns]",
        "meaning": "protection against future loss; act, business, or system of insuring"
    },
    {
        "id": 2464,
        "word": "insure",
        "phonetic": "[ɪnˈʃɔː]",
        "meaning": "make sure or secure, specifically against loss by a contingent event; give or take insurance"
    },
    {
        "id": 2466,
        "word": "intangible",
        "phonetic": "[ɪnˈtænʤəbᵊl]",
        "meaning": "not able to be perceived by senses, as touch; vague"
    },
    {
        "id": 2467,
        "word": "integral",
        "phonetic": "[ˈɪntɪɡrəl]",
        "meaning": "essential or necessary for completeness; entire"
    },
    {
        "id": 2468,
        "word": "integrate",
        "phonetic": "[ˈɪntɪɡreɪt]",
        "meaning": "make whole; combine; make into one unit"
    },
    {
        "id": 2469,
        "word": "integrity",
        "phonetic": "[ɪnˈtɛɡrəti]",
        "meaning": "quality or condition of being whole or undivided; completeness"
    },
    {
        "id": 2470,
        "word": "intellect",
        "phonetic": "[ˈɪntᵊlɛkt]",
        "meaning": "ability to learn and reason; ability to think abstractly or profoundly"
    },
    {
        "id": 2471,
        "word": "intellectual",
        "phonetic": "[ˌɪntᵊlˈɛkʧuəl]",
        "meaning": "of intellect; showing intellect; requiring the use of the mind, rather than emotions or"
    },
    {
        "id": 2473,
        "word": "intelligence",
        "phonetic": "[ɪnˈtɛlɪʤᵊns]",
        "meaning": "ability to comprehend; understand and profit from experience; intellect; power of"
    },
    {
        "id": 2475,
        "word": "intelligent",
        "phonetic": "[ɪnˈtɛlɪʤᵊnt]",
        "meaning": "ingenious; wise; bright; having a high degree of intelligence; mentally acute"
    },
    {
        "id": 2476,
        "word": "intense",
        "phonetic": "[ɪnˈtɛns]",
        "meaning": "extreme; acute; in an extreme degree"
    },
    {
        "id": 2477,
        "word": "intensive",
        "phonetic": "[ɪnˈtɛnsɪv]",
        "meaning": "thorough; concentrated; tending to give force or emphasis"
    },
    {
        "id": 2478,
        "word": "intent",
        "phonetic": "[ɪnˈtɛnt]",
        "meaning": "something that is intended; aim or purpose"
    },
    {
        "id": 2479,
        "word": "intention",
        "phonetic": "[ɪnˈtɛnʃᵊn]",
        "meaning": "motive; with respect to marriage; aim that guides action"
    },
    {
        "id": 2480,
        "word": "interact",
        "phonetic": "[ˌɪntəˈrækt]",
        "meaning": "interplay; act together or towards others or with"
    },
    {
        "id": 2481,
        "word": "interaction",
        "phonetic": "[ˌɪntəˈrækʃᵊn]",
        "meaning": "communication; a mutual or reciprocal action; interacting"
    },
    {
        "id": 2482,
        "word": "interest",
        "phonetic": "[ˈɪntrɛst]",
        "meaning": "attention; curiosity; dividend; yield"
    },
    {
        "id": 2483,
        "word": "interfere",
        "phonetic": "[ˌɪntəˈfɪə]",
        "meaning": "disrupt; hinder; be or create a hindrance or obstacle"
    },
    {
        "id": 2484,
        "word": "interference",
        "phonetic": "[ˌɪntəˈfɪərᵊns]",
        "meaning": "obstruction; prevention; act or an instance of hindering, obstructing, or impeding"
    },
    {
        "id": 2485,
        "word": "interior",
        "phonetic": "[ɪnˈtɪəriə]",
        "meaning": "inside; inner part; internal; inner"
    },
    {
        "id": 2486,
        "word": "intermediate",
        "phonetic": "[ˌɪntəˈmiːdiət]",
        "meaning": "middle; lying between two extremes"
    },
    {
        "id": 2487,
        "word": "internal",
        "phonetic": "[ɪnˈtɜːnᵊl]",
        "meaning": "inside; interior; located within the limits or surface"
    },
    {
        "id": 2488,
        "word": "interpret",
        "phonetic": "[ɪnˈtɜːprɪt]",
        "meaning": "explain or tell the meaning of; translate orally; decipher"
    },
    {
        "id": 2489,
        "word": "interpretation",
        "phonetic": "[ɪnˌtɜːprəˈteɪʃᵊn]",
        "meaning": "explanation; performer's distinctive personal version of a song, dance, piece of music"
    },
    {
        "id": 2490,
        "word": "interrupt",
        "phonetic": "[ˌɪntəˈrʌpt]",
        "meaning": "terminate; make a break in"
    },
    {
        "id": 2491,
        "word": "interval",
        "phonetic": "[ˈɪntəvᵊl]",
        "meaning": "pause; break; space between two objects, points, or units"
    },
    {
        "id": 2492,
        "word": "intervene",
        "phonetic": "[ˌɪntəˈviːn]",
        "meaning": "get involved; come, appear, or lie between two things"
    },
    {
        "id": 2493,
        "word": "intimate",
        "phonetic": "[ˈɪntɪmət]",
        "meaning": "give to understand; imply as a possibility; make known subtly and indirectly"
    },
    {
        "id": 2494,
        "word": "intrude",
        "phonetic": "[ɪnˈtruːd]",
        "meaning": "trespass; enter as an uninvited person"
    },
    {
        "id": 2495,
        "word": "inundate",
        "phonetic": "[ˈɪnʌndeɪt]",
        "meaning": "overwhelm; cover with water, especially floodwaters"
    },
    {
        "id": 2496,
        "word": "invade",
        "phonetic": "[ɪnˈveɪd]",
        "meaning": "move into; intrude; enter by force in order to conquer or pillage"
    },
    {
        "id": 2497,
        "word": "invader",
        "phonetic": "[ɪnˈveɪdə]",
        "meaning": "one who invades; assailant; encroacher; intruder"
    },
    {
        "id": 2498,
        "word": "invalid",
        "phonetic": "[ɪnˈvælɪd]",
        "meaning": "of no force or weight; not valid; weak; void; null"
    },
    {
        "id": 2499,
        "word": "invalidate",
        "phonetic": "[ɪnˈvælɪdeɪt]",
        "meaning": "make invalid; nullify; destroy"
    },
    {
        "id": 2500,
        "word": "invaluable",
        "phonetic": "[ɪnˈvæljəbᵊl]",
        "meaning": "valuable under estimation; inestimable; priceless"
    },
    {
        "id": 2501,
        "word": "invariably",
        "phonetic": "[ɪnˈveəriəbᵊli]",
        "meaning": "constantly; always"
    },
    {
        "id": 2502,
        "word": "invasion",
        "phonetic": "[ɪnˈveɪʒᵊn]",
        "meaning": "raid; attack; act of invading, especially the entrance of an armed force into a territory to"
    },
    {
        "id": 2504,
        "word": "inverse",
        "phonetic": "[ɪnˈvɜːs]",
        "meaning": "opposite; reversed in order, nature, or effect; turned upside down"
    },
    {
        "id": 2505,
        "word": "invest",
        "phonetic": "[ɪnˈvɛst]",
        "meaning": "put clothe on, as with office or authority; place in possession of rank, dignity, or estate;"
    },
    {
        "id": 2507,
        "word": "investigate",
        "phonetic": "[ɪnˈvɛstɪɡeɪt]",
        "meaning": "explore; observe or inquire into in detail; examine systematically"
    },
    {
        "id": 2508,
        "word": "investigation",
        "phonetic": "[ɪnˌvɛstɪˈɡeɪʃᵊn]",
        "meaning": "detailed inquiry or systematic examination; inquiry"
    },
    {
        "id": 2509,
        "word": "invisible",
        "phonetic": "[ɪnˈvɪzəbᵊl]",
        "meaning": "incapable of being seen; impossible or nearly impossible to see"
    },
    {
        "id": 2510,
        "word": "invoice",
        "phonetic": "[ˈɪnvɔɪs]",
        "meaning": "bill; commercial document issued by seller to buyer indicating the products, quantities and"
    },
    {
        "id": 2512,
        "word": "involve",
        "phonetic": "[ɪnˈvɒlv]",
        "meaning": "wind round; connect with something; include necessarily; engage thoroughly"
    },
    {
        "id": 2513,
        "word": "irony",
        "phonetic": "[ˈaɪrəni]",
        "meaning": "expression by deliberate contrast between apparent and intended meaning; witty language"
    },
    {
        "id": 2515,
        "word": "irregular",
        "phonetic": "[ɪˈrɛɡjələ]",
        "meaning": "contrary to rule or accepted order or general practice; inconstant"
    },
    {
        "id": 2516,
        "word": "irresistible",
        "phonetic": "[ˌɪrɪˈzɪstəbᵊl]",
        "meaning": "overwhelming; tempting; charming"
    },
    {
        "id": 2517,
        "word": "irrespective",
        "phonetic": "[ˌɪrɪˈspɛktɪv]",
        "meaning": "without regard for conditions, circumstances, or consequences; unbiased; independent"
    },
    {
        "id": 2518,
        "word": "irrevocable",
        "phonetic": "[ɪˈrɛvəkəbᵊl]",
        "meaning": "unalterable; irreversible; impossible to retract or revoke"
    },
    {
        "id": 2519,
        "word": "irrigate",
        "phonetic": "[ˈɪrɪɡeɪt]",
        "meaning": "supply land with water artificially; clean a wound with a fluid"
    },
    {
        "id": 2520,
        "word": "irrigation",
        "phonetic": "[ˌɪrɪˈɡeɪʃᵊn]",
        "meaning": "supplying water to the land to help crops grow"
    },
    {
        "id": 2521,
        "word": "irritate",
        "phonetic": "[ˈɪrɪteɪt]",
        "meaning": "rouse to impatience or anger; annoy; provoke"
    },
    {
        "id": 2522,
        "word": "isolate",
        "phonetic": "[ˈaɪsəleɪt]",
        "meaning": "seclude; set apart or cut off from others"
    },
    {
        "id": 2523,
        "word": "isolation",
        "phonetic": "[ˌaɪsəˈleɪʃᵊn]",
        "meaning": "separation; detachment; quality or condition of being isolated"
    },
    {
        "id": 2524,
        "word": "issue",
        "phonetic": "[ˈɪʃuː]",
        "meaning": "subject; topic; problem; edition; publication; release; publish"
    },
    {
        "id": 2525,
        "word": "item",
        "phonetic": "[ˈaɪtəm]",
        "meaning": "a whole individual unit; a distinct part that can be specified separately in a group"
    },
    {
        "id": 2526,
        "word": "ivory",
        "phonetic": "[ˈaɪvᵊri]",
        "meaning": "teeth of elephant "
    },
    {
        "id": 2531,
        "word": "jail",
        "phonetic": "[ʤeɪl]",
        "meaning": "building for confinement of persons held in lawful custody"
    },
    {
        "id": 2532,
        "word": "jam",
        "phonetic": "[ʤæm]",
        "meaning": "crush or bruise; get stuck; press tightly together"
    },
    {
        "id": 2533,
        "word": "jar",
        "phonetic": "[ʤɑː]",
        "meaning": "pitcher; vase; small, cylindrical container for food, normally made of glass or clay"
    },
    {
        "id": 2534,
        "word": "jealous",
        "phonetic": "[ˈʤɛləs]",
        "meaning": "resentful or bitter in rivalry; envious"
    },
    {
        "id": 2535,
        "word": "jealousy",
        "phonetic": "[ˈʤɛləsi]",
        "meaning": "envy; jealous attitude or disposition"
    },
    {
        "id": 2536,
        "word": "jelly",
        "phonetic": "[ˈʤɛli]",
        "meaning": "substance having the consistency of semi-solid foods"
    },
    {
        "id": 2537,
        "word": "jeopardize",
        "phonetic": "[ˈʤɛpədaɪz]",
        "meaning": "endanger; imperil; put at risk"
    },
    {
        "id": 2538,
        "word": "jerk",
        "phonetic": "[ʤɜːk]",
        "meaning": "pull, or move with a sudden movement; move with abrupt, seemingly uncontrolled motions"
    },
    {
        "id": 2539,
        "word": "jettison",
        "phonetic": "[ˈʤɛtɪsᵊn]",
        "meaning": "throw overboard; eject from boat, submarine, aircraft, or spaceship"
    },
    {
        "id": 2540,
        "word": "jewel",
        "phonetic": "[ˈʤuːᵊl]",
        "meaning": "gemstone; costly ornament of precious metal or gem"
    },
    {
        "id": 2541,
        "word": "jewelry",
        "phonetic": "[ˈʤuːᵊlri]",
        "meaning": "adornment made of precious metals, as a bracelet or ring or necklace"
    },
    {
        "id": 2542,
        "word": "jog",
        "phonetic": "[ʤɒɡ]",
        "meaning": "run or ride at a steady slow trot; give a push or shake to"
    },
    {
        "id": 2543,
        "word": "journal",
        "phonetic": "[ˈʤɜːnᵊl]",
        "meaning": "magazine; periodical; log; diary; a ledger in which transactions have been recorded as they"
    },
    {
        "id": 2545,
        "word": "journalism",
        "phonetic": "[ˈʤɜːnəlɪzᵊm]",
        "meaning": "profession of reporting or photographing or editing news stories for one of the media"
    },
    {
        "id": 2546,
        "word": "journalist",
        "phonetic": "[ˈʤɜːnəlɪst]",
        "meaning": "writer for newspapers and magazines"
    },
    {
        "id": 2547,
        "word": "judgement",
        "phonetic": "[ˈʤʌʤmənt]",
        "meaning": "decision; appraisal"
    },
    {
        "id": 2548,
        "word": "juice",
        "phonetic": "[ʤuːs]",
        "meaning": "liquid; liquid part that can be extracted from plant or animal tissue"
    },
    {
        "id": 2549,
        "word": "juicy",
        "phonetic": "[ˈʤuːsi]",
        "meaning": "full of juice; lucrative; richly interesting"
    },
    {
        "id": 2550,
        "word": "jumble",
        "phonetic": "[ˈʤʌmbᵊl]",
        "meaning": "assemble without order or sense; confused multitude of things; chaos; mess; mixture"
    },
    {
        "id": 2551,
        "word": "junction",
        "phonetic": "[ˈʤʌŋkʃᵊn]",
        "meaning": "connection; joint; intersection; crossing"
    },
    {
        "id": 2552,
        "word": "jungle",
        "phonetic": "[ˈʤʌŋɡᵊl]",
        "meaning": "land densely overgrown with tropical vegetation; dense, confused mass"
    },
    {
        "id": 2553,
        "word": "junior",
        "phonetic": "[ˈʤuːniə]",
        "meaning": "less advanced in age than another; younger; lower in standing or in rank"
    },
    {
        "id": 2554,
        "word": "jury",
        "phonetic": "[ˈʤʊəri]",
        "meaning": "committee appointed to judge a case"
    },
    {
        "id": 2555,
        "word": "justice",
        "phonetic": "[ˈʤʌstɪs]",
        "meaning": "quality of being just; practical conformity to human or divine law; equity; uprightness"
    },
    {
        "id": 2556,
        "word": "justifiable",
        "phonetic": "[ˈʤʌstɪfaɪəbᵊl]",
        "meaning": "capable of being justified, or shown to be just"
    },
    {
        "id": 2557,
        "word": "justification",
        "phonetic": "[ˌʤʌstɪfɪˈkeɪʃᵊn]",
        "meaning": "good or just reason; condition or fact of being justified"
    },
    {
        "id": 2558,
        "word": "justify",
        "phonetic": "[ˈʤʌstɪfaɪ]",
        "meaning": "adjust the spaces between words; show to be reasonable; explain, clear away"
    },
    {
        "id": 2559,
        "word": "juvenile",
        "phonetic": "[ˈʤuːvənaɪl]",
        "meaning": "youth; adolescent; not fully grown or developed "
    },
    {
        "id": 2564,
        "word": "kangaroo",
        "phonetic": "[ˌkæŋɡəˈruː]",
        "meaning": "animal that having large powerful hind legs and a long thick tail"
    },
    {
        "id": 2565,
        "word": "keen",
        "phonetic": "[kiːn]",
        "meaning": "acute; incisive; sharp ; express grief verbally"
    },
    {
        "id": 2566,
        "word": "kernel",
        "phonetic": "[ˈkɜːnᵊl]",
        "meaning": "central or vital part; most material and central part; grain or seed as of corn"
    },
    {
        "id": 2567,
        "word": "kerosene",
        "phonetic": "[ˈkɛrəsiːn]",
        "meaning": "flammable hydrocarbon oil used as fuel in lamps and heaters"
    },
    {
        "id": 2568,
        "word": "keyboard",
        "phonetic": "[ˈkiːbɔːd]",
        "meaning": "device consisting of a set of keys on a piano or organ or typewriter or typesetting machine"
    },
    {
        "id": 2570,
        "word": "kidnap",
        "phonetic": "[ˈkɪdnæp]",
        "meaning": "take by force or fear, and against one's will; seize and detain unlawfully and usually for"
    },
    {
        "id": 2572,
        "word": "kidney",
        "phonetic": "[ˈkɪdni]",
        "meaning": "glandular organ which excretes urea and other waste products from the animal body"
    },
    {
        "id": 2573,
        "word": "kindle",
        "phonetic": "[ˈkɪndᵊl]",
        "meaning": "build or fuel a fire; cause to glow; light up; inspire"
    },
    {
        "id": 2574,
        "word": "kingdom",
        "phonetic": "[ˈkɪŋdəm]",
        "meaning": "rank, quality, state, or attributes of a king; royal authority; sovereign power; rule; dominion;"
    },
    {
        "id": 2576,
        "word": "kneel",
        "phonetic": "[niːl]",
        "meaning": "bend the knee; fall or rest on the knees"
    },
    {
        "id": 2577,
        "word": "knit",
        "phonetic": "[nɪt]",
        "meaning": "contract into wrinkles; grow together; form into fabric by intertwining"
    },
    {
        "id": 2578,
        "word": "knob",
        "phonetic": "[nɒb]",
        "meaning": "hard protuberance; hard swelling or rising; bunch; lump"
    },
    {
        "id": 2579,
        "word": "knot",
        "phonetic": "[nɒt]",
        "meaning": "fastening together of one or more threads, cords, ropes; lump or loop formed in thread;"
    },
    {
        "id": 2585,
        "word": "label",
        "phonetic": "[ˈleɪbᵊl]",
        "meaning": "paper affixed to anything by inscription; slip of ribbon, parchment; writing annexed by way of"
    },
    {
        "id": 2587,
        "word": "laborer",
        "phonetic": "[ˈleɪbərə]",
        "meaning": "worker; someone who works with their hands"
    },
    {
        "id": 2588,
        "word": "lace",
        "phonetic": "[leɪs]",
        "meaning": "delicate decorative fabric woven in an open web of symmetrical patterns; rope; cord that is"
    },
    {
        "id": 2590,
        "word": "lag",
        "phonetic": "[læɡ]",
        "meaning": "delay; drag; the act of slowing down or falling behind"
    },
    {
        "id": 2591,
        "word": "lamb",
        "phonetic": "[læm]",
        "meaning": "the young of the sheep; simple, unsophisticated person"
    },
    {
        "id": 2592,
        "word": "lame",
        "phonetic": "[leɪm]",
        "meaning": "moving with pain or difficulty because of injury; disabled so that movement is difficult or"
    },
    {
        "id": 2594,
        "word": "landing",
        "phonetic": "[ˈlændɪŋ]",
        "meaning": "touchdown; act of coming down to the earth"
    },
    {
        "id": 2595,
        "word": "landscape",
        "phonetic": "[ˈlændskeɪp]",
        "meaning": "scenery; expanse of scenery that can be seen in a single view"
    },
    {
        "id": 2596,
        "word": "lane",
        "phonetic": "[leɪn]",
        "meaning": "passageway between fences which is not traveled as a highroad; narrow country road"
    },
    {
        "id": 2597,
        "word": "lap",
        "phonetic": "[læp]",
        "meaning": "take in food or drink with one's tongue; splash gently"
    },
    {
        "id": 2598,
        "word": "lapse",
        "phonetic": "[læps]",
        "meaning": "gliding, slipping, or gradual falling; unobserved or imperceptible progress; slip or error; failing"
    },
    {
        "id": 2600,
        "word": "largely",
        "phonetic": "[ˈlɑːʤli]",
        "meaning": "in a large manner; for the most part; mainly"
    },
    {
        "id": 2601,
        "word": "lark",
        "phonetic": "[lɑːk]",
        "meaning": "any of various small, singing passerine birds of the family Alaudidae; one who wakes early; one"
    },
    {
        "id": 2603,
        "word": "laser",
        "phonetic": "[ˈleɪzə]",
        "meaning": "optical device that produces an intense monochromatic beam of coherent light"
    },
    {
        "id": 2604,
        "word": "lasting",
        "phonetic": "[ˈlɑːstɪŋ]",
        "meaning": "continuing or remaining for a long time; enduring; durable"
    },
    {
        "id": 2605,
        "word": "latent",
        "phonetic": "[ˈleɪtᵊnt]",
        "meaning": "present or potential but not evident or active; dormant; hidden"
    },
    {
        "id": 2606,
        "word": "lateral",
        "phonetic": "[ˈlætᵊrᵊl]",
        "meaning": "coming from side; situated at or extending to the side"
    },
    {
        "id": 2607,
        "word": "latitude",
        "phonetic": "[ˈlætɪtjuːd]",
        "meaning": "freedom from normal restraints; angular distance north or south of the earth's equator"
    },
    {
        "id": 2608,
        "word": "launch",
        "phonetic": "[lɔːnʧ]",
        "meaning": "begin; originate; initiate; send off; take off"
    },
    {
        "id": 2609,
        "word": "laundry",
        "phonetic": "[ˈlɔːndri]",
        "meaning": "washing; workplace where clothes are washed and ironed"
    },
    {
        "id": 2610,
        "word": "lawn",
        "phonetic": "[lɔːn]",
        "meaning": "landscape; grassland, usually tended or mowed; meadow"
    },
    {
        "id": 2611,
        "word": "lay",
        "phonetic": "[leɪ]",
        "meaning": "put into a certain place; cause to lie down; spread over a surface"
    },
    {
        "id": 2612,
        "word": "layer",
        "phonetic": "[ˈleɪə]",
        "meaning": "tier; a relatively thin sheet like expanse or region lying over or under another"
    },
    {
        "id": 2613,
        "word": "layout",
        "phonetic": "[ˈleɪaʊt]",
        "meaning": "overall design of a page; plan or design of something that is laid out"
    },
    {
        "id": 2614,
        "word": "leadership",
        "phonetic": "[ˈliːdəʃɪp]",
        "meaning": "guidance; direction; authority; position or office of a leader"
    },
    {
        "id": 2615,
        "word": "leading",
        "phonetic": "[ˈliːdɪŋ]",
        "meaning": "chief; principal; having a position in the lead; foremost"
    },
    {
        "id": 2616,
        "word": "leaflet",
        "phonetic": "[ˈliːflɪt]",
        "meaning": "small leaf; leaf like organ or part"
    },
    {
        "id": 2617,
        "word": "league",
        "phonetic": "[liːɡ]",
        "meaning": "association; union"
    },
    {
        "id": 2618,
        "word": "leak",
        "phonetic": "[liːk]",
        "meaning": "escape fluid from container through a hole or crack; tell anonymously; reveal"
    },
    {
        "id": 2619,
        "word": "lean",
        "phonetic": "[liːn]",
        "meaning": "bend or slant away from the vertical; rely for assistance or support"
    },
    {
        "id": 2620,
        "word": "leap",
        "phonetic": "[liːp]",
        "meaning": "jump; hop; place jumped over or from"
    },
    {
        "id": 2621,
        "word": "lease",
        "phonetic": "[liːs]",
        "meaning": "rent; charter; engage for service under a term of contract"
    },
    {
        "id": 2622,
        "word": "lecture",
        "phonetic": "[ˈlɛkʧə]",
        "meaning": "teaching by giving a discourse on some subject; speech that is open to the public"
    },
    {
        "id": 2623,
        "word": "legal",
        "phonetic": "[ˈliːɡᵊl]",
        "meaning": "created by, permitted by law; according to the law of works"
    },
    {
        "id": 2624,
        "word": "legend",
        "phonetic": "[ˈlɛʤənd]",
        "meaning": "explanatory list of symbols on a map; unverified story handed down from earlier times"
    },
    {
        "id": 2625,
        "word": "legendary",
        "phonetic": "[ˈlɛʤᵊndri]",
        "meaning": "mythical; fabled; extremely well known; famous or renowned"
    },
    {
        "id": 2626,
        "word": "legislation",
        "phonetic": "[ˌlɛʤɪˈsleɪʃᵊn]",
        "meaning": "lawmaking; the act of making or enacting laws ; law enacted by a legislative body"
    },
    {
        "id": 2627,
        "word": "legitimate",
        "phonetic": "[lɪˈʤɪtɪmɪt]",
        "meaning": "accordant with law; lawful; based on logical reasoning; reasonable"
    },
    {
        "id": 2628,
        "word": "leisure",
        "phonetic": "[ˈlɛʒə]",
        "meaning": "convenience; vacancy; freedom to choose a pastime or enjoyable activity"
    },
    {
        "id": 2629,
        "word": "lengthen",
        "phonetic": "[ˈlɛŋθən]",
        "meaning": "extend; make or become longer"
    },
    {
        "id": 2630,
        "word": "leopard",
        "phonetic": "[ˈlɛpəd]",
        "meaning": "large feline of African and Asian forests usually having a tawny coat with black spots"
    },
    {
        "id": 2631,
        "word": "lever",
        "phonetic": "[ˈliːvə]",
        "meaning": "bar, applied to a rotator piece to turn it"
    },
    {
        "id": 2632,
        "word": "levy",
        "phonetic": "[ˈlɛvi]",
        "meaning": "impose fine or tax; collect payment"
    },
    {
        "id": 2633,
        "word": "liability",
        "phonetic": "[ˌlaɪəˈbɪləti]",
        "meaning": "something that holds one back; state of being legally obliged and responsible"
    },
    {
        "id": 2634,
        "word": "liable",
        "phonetic": "[ˈlaɪəbᵊl]",
        "meaning": "bound or obliged in law or equity"
    },
    {
        "id": 2635,
        "word": "liberal",
        "phonetic": "[ˈlɪbᵊrᵊl]",
        "meaning": "open-minded; tolerant; broad-mindedness; having political views favoring reform and"
    },
    {
        "id": 2637,
        "word": "liberate",
        "phonetic": "[ˈlɪbəreɪt]",
        "meaning": "set free, as from oppression, confinement, or foreign control; discharge; release"
    },
    {
        "id": 2638,
        "word": "liberty",
        "phonetic": "[ˈlɪbəti]",
        "meaning": "state of free person; exemption from subjection to the will of another; freedom"
    },
    {
        "id": 2639,
        "word": "license",
        "phonetic": "[ˈlaɪsᵊns]",
        "meaning": "official or legal permission to do or own a specified thing"
    },
    {
        "id": 2640,
        "word": "lick",
        "phonetic": "[lɪk]",
        "meaning": "draw or pass the tongue over; pass or lap quickly and rapidly; beat thoroughly in a competition or"
    },
    {
        "id": 2642,
        "word": "lift",
        "phonetic": "[lɪft]",
        "meaning": "direct or carry from a lower to a higher position; raise; transport by air"
    },
    {
        "id": 2643,
        "word": "light",
        "phonetic": "[laɪt]",
        "meaning": "brightness; something that admits illumination; source of fire; particular aspect of a situation"
    },
    {
        "id": 2644,
        "word": "likelihood",
        "phonetic": "[ˈlaɪklɪhʊd]",
        "meaning": "possibility, strong probability"
    },
    {
        "id": 2645,
        "word": "likewise",
        "phonetic": "[ˈlaɪkwaɪz]",
        "meaning": "similarly; as well; too"
    },
    {
        "id": 2646,
        "word": "limb",
        "phonetic": "[lɪm]",
        "meaning": "arm; leg; any of the main branches arising from the trunk or a bough of a tree"
    },
    {
        "id": 2647,
        "word": "limestone",
        "phonetic": "[ˈlaɪmstəʊn]",
        "meaning": "rock consisting chiefly of calcium carbonate or carbonate of lime"
    },
    {
        "id": 2648,
        "word": "limousine",
        "phonetic": "[ˌlɪməˈziːn]",
        "meaning": "any of various large passenger vehicles, especially a luxurious automobile; van or small"
    },
    {
        "id": 2650,
        "word": "limp",
        "phonetic": "[lɪmp]",
        "meaning": "walk lamely, especially with irregularity, as if favoring one leg; move or proceed haltingly or"
    },
    {
        "id": 2652,
        "word": "line",
        "phonetic": "[laɪn]",
        "meaning": "thin continuous mark, as that made by a pen, pencil, or brush applied to a surface; border or"
    },
    {
        "id": 2654,
        "word": "linear",
        "phonetic": "[ˈlɪniə]",
        "meaning": "having form of a line; straight; consisting of lines; lineal."
    },
    {
        "id": 2655,
        "word": "linen",
        "phonetic": "[ˈlɪnɪn]",
        "meaning": "fabric woven with fibers from the flax plant; thread made from fibers of the flax plant"
    },
    {
        "id": 2656,
        "word": "liner",
        "phonetic": "[ˈlaɪnə]",
        "meaning": "vessel belonging to a regular line of packets, as ship or plane"
    },
    {
        "id": 2657,
        "word": "linger",
        "phonetic": "[ˈlɪŋɡə]",
        "meaning": "be slow in leaving; continue or persist; stay"
    },
    {
        "id": 2658,
        "word": "linguistics",
        "phonetic": "[lɪŋˈɡwɪstɪks]",
        "meaning": "humanistic study of language and literature"
    },
    {
        "id": 2659,
        "word": "link",
        "phonetic": "[lɪŋk]",
        "meaning": "be or become joined or united; connect, fasten, or put together two or more pieces"
    },
    {
        "id": 2660,
        "word": "liquid",
        "phonetic": "[ˈlɪkwɪd]",
        "meaning": "fluid; juice; substance in fluid state"
    },
    {
        "id": 2661,
        "word": "liquor",
        "phonetic": "[ˈlɪkə]",
        "meaning": "any liquid, as water, milk, blood, sap, juice; alcoholic or spirituous fluid"
    },
    {
        "id": 2662,
        "word": "list",
        "phonetic": "[lɪst]",
        "meaning": "lean or cause to lean to the side; lean over; itemize"
    },
    {
        "id": 2663,
        "word": "literacy",
        "phonetic": "[ˈlɪtᵊrəsi]",
        "meaning": "reading and writing; ability to read and write"
    },
    {
        "id": 2664,
        "word": "literal",
        "phonetic": "[ˈlɪtᵊrᵊl]",
        "meaning": "according to the letter or verbal expression; exactly as stated"
    },
    {
        "id": 2665,
        "word": "literally",
        "phonetic": "[ˈlɪtᵊrᵊli]",
        "meaning": "with meaning; word for word; letter by letter"
    },
    {
        "id": 2666,
        "word": "literary",
        "phonetic": "[ˈlɪtᵊrᵊri]",
        "meaning": "knowledgeable about literature; of or relating to or characteristic of literature"
    },
    {
        "id": 2667,
        "word": "literate",
        "phonetic": "[ˈlɪtᵊrət]",
        "meaning": "educated; schooled; one who can read and write"
    },
    {
        "id": 2668,
        "word": "literature",
        "phonetic": "[ˈlɪtrəʧə]",
        "meaning": "imaginative or creative writing, especially of recognized artistic value; art or occupation of a"
    },
    {
        "id": 2670,
        "word": "litter",
        "phonetic": "[ˈlɪtə]",
        "meaning": "make untidy by discarding rubbish carelessly; scatter about"
    },
    {
        "id": 2671,
        "word": "livelihood",
        "phonetic": "[ˈlaɪvlɪhʊd]",
        "meaning": "subsistence; financial means whereby one lives"
    },
    {
        "id": 2672,
        "word": "lively",
        "phonetic": "[ˈlaɪvli]",
        "meaning": "busy; energetic; vigorous"
    },
    {
        "id": 2673,
        "word": "liver",
        "phonetic": "[ˈlɪvə]",
        "meaning": "large and complicated reddish-brown glandular organ located in upper right chest"
    },
    {
        "id": 2674,
        "word": "livestock",
        "phonetic": "[ˈlaɪvstɒk]",
        "meaning": "any animals kept for use or profit"
    },
    {
        "id": 2675,
        "word": "load",
        "phonetic": "[ləʊd]",
        "meaning": "burden; something which is laid on or put in anything for conveyance; quantity which can be"
    },
    {
        "id": 2677,
        "word": "loaf",
        "phonetic": "[ləʊf]",
        "meaning": "any thick lump, mass, or cake, especially, a large regularly shaped or molded mass, as of bread"
    },
    {
        "id": 2678,
        "word": "loan",
        "phonetic": "[ləʊn]",
        "meaning": "give temporarily; temporary provision of money"
    },
    {
        "id": 2679,
        "word": "lobby",
        "phonetic": "[ˈlɒbi]",
        "meaning": "a group of people who try to influence legislation; hall; room; a large entrance or reception"
    },
    {
        "id": 2681,
        "word": "lobster",
        "phonetic": "[ˈlɒbstə]",
        "meaning": "any large macrurous crustacean used as food"
    },
    {
        "id": 2682,
        "word": "locality",
        "phonetic": "[ləˈkæləti]",
        "meaning": "place; district; surrounding or nearby region; particular neighborhood"
    },
    {
        "id": 2683,
        "word": "locate",
        "phonetic": "[ləʊˈkeɪt]",
        "meaning": "find; monitor; settle; determine or specify the position or limits o"
    },
    {
        "id": 2684,
        "word": "location",
        "phonetic": "[ləʊˈkeɪʃᵊn]",
        "meaning": "scene; site; place where something is or could be located"
    },
    {
        "id": 2685,
        "word": "lock",
        "phonetic": "[lɒk]",
        "meaning": "strand or cluster of hair; fastening together; a closing of one thing upon another; device"
    },
    {
        "id": 2687,
        "word": "locomotive",
        "phonetic": "[ˈləʊkəˌməʊtɪv]",
        "meaning": "of or relating to locomotion; a wheeled vehicle consisting of a self-propelled engine"
    },
    {
        "id": 2688,
        "word": "locust",
        "phonetic": "[ˈləʊkəst]",
        "meaning": "any one of numerous species of long-winged, migratory insects, of the family Acrididae"
    },
    {
        "id": 2689,
        "word": "lodge",
        "phonetic": "[lɒʤ]",
        "meaning": "small house on the grounds of an estate or a park, used by a caretaker or gatekeeper"
    },
    {
        "id": 2690,
        "word": "lodging",
        "phonetic": "[ˈlɒʤɪŋ]",
        "meaning": "accommodation; lodging"
    },
    {
        "id": 2691,
        "word": "lofty",
        "phonetic": "[ˈlɒfti]",
        "meaning": "high, tall, having great height; idealistic, implying over-optimism"
    },
    {
        "id": 2692,
        "word": "log",
        "phonetic": "[lɒɡ]",
        "meaning": "record of a voyage or flight; record of day to day activities"
    },
    {
        "id": 2693,
        "word": "logic",
        "phonetic": "[ˈlɒʤɪk]",
        "meaning": "reasoned and reasonable judgment; a system of reasoning"
    },
    {
        "id": 2694,
        "word": "logical",
        "phonetic": "[ˈlɒʤɪkᵊl]",
        "meaning": "reasonable; based on known statements or events or conditions"
    },
    {
        "id": 2695,
        "word": "longevity",
        "phonetic": "[lɒnˈʤɛvəti]",
        "meaning": "long life; great duration of life; long duration or continuance, as in an occupation"
    },
    {
        "id": 2696,
        "word": "longitude",
        "phonetic": "[ˈlɒnʤɪtjuːd]",
        "meaning": "an imaginary great circle on the surface of the earth passing through the north and south"
    },
    {
        "id": 2698,
        "word": "loom",
        "phonetic": "[luːm]",
        "meaning": "appear or take shape, usually in enlarged or distorted form"
    },
    {
        "id": 2699,
        "word": "loop",
        "phonetic": "[luːp]",
        "meaning": "circle; ring; move in loops; make a loop in; join with a loop"
    },
    {
        "id": 2700,
        "word": "loose",
        "phonetic": "[luːs]",
        "meaning": "unbound; untied; not attached, fastened, fixed, or confined"
    },
    {
        "id": 2701,
        "word": "loosen",
        "phonetic": "[ˈluːsᵊn]",
        "meaning": "make loose or looser; make less severe or strict"
    },
    {
        "id": 2702,
        "word": "lose",
        "phonetic": "[luːz]",
        "meaning": "fail to keep or to maintain; cease to have; be deprived of; fail to win"
    },
    {
        "id": 2703,
        "word": "lottery",
        "phonetic": "[ˈlɒtᵊri]",
        "meaning": "scheme for distribution of prizes by chance; gaming in which tickets bearing particular"
    },
    {
        "id": 2705,
        "word": "lounge",
        "phonetic": "[laʊnʤ]",
        "meaning": "public room with seating where people can wait; living room; lobby"
    },
    {
        "id": 2706,
        "word": "low",
        "phonetic": "[ləʊ]",
        "meaning": "utter sound made by cattle; make a low noise"
    },
    {
        "id": 2707,
        "word": "loyal",
        "phonetic": "[ˈlɔɪəl]",
        "meaning": "steadfast in allegiance or duty; faithful to a person, ideal, custom, cause, or duty"
    },
    {
        "id": 2708,
        "word": "lubricate",
        "phonetic": "[ˈluːbrɪkeɪt]",
        "meaning": "make smooth or slippery"
    },
    {
        "id": 2709,
        "word": "lumber",
        "phonetic": "[ˈlʌmbə]",
        "meaning": "move heavily or clumsily; cut down timber of"
    },
    {
        "id": 2710,
        "word": "luminous",
        "phonetic": "[ˈluːmɪnəs]",
        "meaning": "shining; emitting light, especially emitting self-generated light"
    },
    {
        "id": 2711,
        "word": "lump",
        "phonetic": "[lʌmp]",
        "meaning": "a small mass of matter of irregular shape; irregular or shapeless mass; small cube of sugar"
    },
    {
        "id": 2712,
        "word": "lunar",
        "phonetic": "[ˈluːnə]",
        "meaning": "pertaining to the moon; affecting the moon"
    },
    {
        "id": 2713,
        "word": "luxurious",
        "phonetic": "[lʌɡˈʒʊəriəs]",
        "meaning": "rich and superior in quality; lavish"
    },
    {
        "id": 2714,
        "word": "luxury",
        "phonetic": "[ˈlʌkʃᵊri]",
        "meaning": "something that is an indulgence rather than necessity; excessively expensive "
    },
    {
        "id": 2719,
        "word": "mackintosh",
        "phonetic": "[ˈmækɪntɒʃ]",
        "meaning": "waterproof long coat made of rubberized cloth"
    },
    {
        "id": 2720,
        "word": "magic",
        "phonetic": "[ˈmæʤɪk]",
        "meaning": "any art that invokes supernatural powers"
    },
    {
        "id": 2721,
        "word": "magician",
        "phonetic": "[məˈʤɪʃᵊn]",
        "meaning": "one who performs magic tricks to amuse an audience; sorcerer; wizard"
    },
    {
        "id": 2722,
        "word": "magistrate",
        "phonetic": "[ˈmæʤɪstreɪt]",
        "meaning": "civil officer with power to administer and enforce law"
    },
    {
        "id": 2723,
        "word": "magnetic",
        "phonetic": "[mæɡˈnɛtɪk]",
        "meaning": "having the properties of attracting iron or steel; captivating; attractive; being to draw or pull"
    },
    {
        "id": 2724,
        "word": "magnetism",
        "phonetic": "[ˈmæɡnətɪzᵊm]",
        "meaning": "attraction for iron; associated with electric currents as well as magnets"
    },
    {
        "id": 2725,
        "word": "magnificent",
        "phonetic": "[mæɡˈnɪfɪsᵊnt]",
        "meaning": "grand or noble in thought or deed; outstanding of its kind"
    },
    {
        "id": 2726,
        "word": "magnify",
        "phonetic": "[ˈmæɡnɪfaɪ]",
        "meaning": "intensify; increase; make greater in size; enlarge"
    },
    {
        "id": 2727,
        "word": "magnitude",
        "phonetic": "[ˈmæɡnɪtjuːd]",
        "meaning": "extent; greatness of rank, size, or position"
    },
    {
        "id": 2728,
        "word": "maintain",
        "phonetic": "[meɪnˈteɪn]",
        "meaning": "keep in any particular state or condition; keep up or carry on; continue"
    },
    {
        "id": 2729,
        "word": "maintenance",
        "phonetic": "[ˈmeɪntᵊnəns]",
        "meaning": "preservation; support; continuance; court-ordered support paid by one spouse to"
    },
    {
        "id": 2731,
        "word": "maize",
        "phonetic": "[meɪz]",
        "meaning": "tall annual cereal grass bearing kernels on large ears"
    },
    {
        "id": 2732,
        "word": "majesty",
        "phonetic": "[ˈmæʤəsti]",
        "meaning": "nobility; greatness and dignity of a sovereign; royal personage"
    },
    {
        "id": 2733,
        "word": "major",
        "phonetic": "[ˈmeɪʤə]",
        "meaning": "greater in number, quantity, or extent; more important"
    },
    {
        "id": 2734,
        "word": "majority",
        "phonetic": "[məˈʤɒrəti]",
        "meaning": "greater number or part; a number more than half of the total"
    },
    {
        "id": 2735,
        "word": "malady",
        "phonetic": "[ˈmælədi]",
        "meaning": "disease, disorder, or ailment; unwholesome condition"
    },
    {
        "id": 2736,
        "word": "malaise",
        "phonetic": "[məˈleɪz]",
        "meaning": "general sense of depression or unease; vague feeling of bodily discomfort, as at beginning"
    },
    {
        "id": 2738,
        "word": "malice",
        "phonetic": "[ˈmælɪs]",
        "meaning": "enmity of heart; malevolence; ill will; spirit delighting in harm or misfortune to another"
    },
    {
        "id": 2739,
        "word": "malicious",
        "phonetic": "[məˈlɪʃəs]",
        "meaning": "deliberately harmful; spiteful; proceeding from extreme hatred"
    },
    {
        "id": 2740,
        "word": "manifest",
        "phonetic": "[ˈmænɪfɛst]",
        "meaning": "clearly apparent to understanding; obvious"
    },
    {
        "id": 2741,
        "word": "manifestation",
        "phonetic": "[ˌmænɪfɛsˈteɪʃᵊn]",
        "meaning": "revelation; indication of the existence, reality, or presence of something"
    },
    {
        "id": 2742,
        "word": "manifesto",
        "phonetic": "[ˌmænɪˈfɛstəʊ]",
        "meaning": "public declaration of principles; statement of policy"
    },
    {
        "id": 2743,
        "word": "manipulate",
        "phonetic": "[məˈnɪpjəleɪt]",
        "meaning": "operate with one's hands; control or play upon people, forces artfully"
    },
    {
        "id": 2744,
        "word": "mansion",
        "phonetic": "[ˈmænʃᵊn]",
        "meaning": "dwelling-house of the better class; a large or stately residence"
    },
    {
        "id": 2745,
        "word": "manual",
        "phonetic": "[ˈmænjuəl]",
        "meaning": "guide book; hand-operated"
    },
    {
        "id": 2746,
        "word": "manufacture",
        "phonetic": "[ˌmænjəˈfækʧə]",
        "meaning": "make products by hand or machinery; make from raw materials"
    },
    {
        "id": 2747,
        "word": "manuscript",
        "phonetic": "[ˈmænjəskrɪpt]",
        "meaning": "written with or by the hand; not printed; literary or musical composition written with the"
    },
    {
        "id": 2749,
        "word": "map",
        "phonetic": "[mæp]",
        "meaning": "depict as if on a map; plan or delineate, especially in detail; arrange"
    },
    {
        "id": 2750,
        "word": "maple",
        "phonetic": "[ˈmeɪpᵊl]",
        "meaning": "tree of the genus Acer, including about fifty species"
    },
    {
        "id": 2751,
        "word": "marble",
        "phonetic": "[ˈmɑːbᵊl]",
        "meaning": "hard crystalline metamorphic rock that takes a high polish"
    },
    {
        "id": 2752,
        "word": "march",
        "phonetic": "[mɑːʧ]",
        "meaning": "walking with regular steps; a procession of people walking together; steady advance"
    },
    {
        "id": 2753,
        "word": "margin",
        "phonetic": "[ˈmɑːʤɪn]",
        "meaning": "border; rim; room"
    },
    {
        "id": 2754,
        "word": "marginal",
        "phonetic": "[ˈmɑːʤɪnᵊl]",
        "meaning": "of or pertaining to a margin; written or printed in the margin"
    },
    {
        "id": 2755,
        "word": "marine",
        "phonetic": "[məˈriːn]",
        "meaning": "sea-dwelling; maritime; naval"
    },
    {
        "id": 2756,
        "word": "mariner",
        "phonetic": "[ˈmærɪnə]",
        "meaning": "one whose occupation is to assist in navigating ships; seaman or sailor"
    },
    {
        "id": 2757,
        "word": "marked",
        "phonetic": "[mɑːkt]",
        "meaning": "noticeable or pronounced; having one or more distinguishing marks"
    },
    {
        "id": 2758,
        "word": "marsh",
        "phonetic": "[mɑːʃ]",
        "meaning": "swamp; bog; low lying wet land with grassy vegetation"
    },
    {
        "id": 2759,
        "word": "marshal",
        "phonetic": "[ˈmɑːʃᵊl]",
        "meaning": "put in order; arrange or place something in line"
    },
    {
        "id": 2760,
        "word": "martyr",
        "phonetic": "[ˈmɑːtə]",
        "meaning": "one who makes great sacrifices or suffers to further belief or principle; one who endures great"
    },
    {
        "id": 2762,
        "word": "marvel",
        "phonetic": "[ˈmɑːvᵊl]",
        "meaning": "wonder; strong surprise; astonishment"
    },
    {
        "id": 2763,
        "word": "masculine",
        "phonetic": "[ˈmæskjəlɪn]",
        "meaning": "of the male sex; not female; having the qualities of a man"
    },
    {
        "id": 2764,
        "word": "mask",
        "phonetic": "[mɑːsk]",
        "meaning": "try to conceal something; disguise; hide under a false appearance"
    },
    {
        "id": 2765,
        "word": "massacre",
        "phonetic": "[ˈmæsəkə]",
        "meaning": "killing of a considerable number of human beings under circumstances of atrocity or"
    },
    {
        "id": 2767,
        "word": "massive",
        "phonetic": "[ˈmæsɪv]",
        "meaning": "enormous; colossal; consisting of great mass; containing a great quantity of matter"
    },
    {
        "id": 2768,
        "word": "mast",
        "phonetic": "[mɑːst]",
        "meaning": "fruit of the oak and beech, or other forest trees; nuts; acorns; a pole, or long, strong, round"
    },
    {
        "id": 2770,
        "word": "masterpiece",
        "phonetic": "[ˈmɑːstəpiːs]",
        "meaning": "chief excellence or great talent; outstanding work of art or craft"
    },
    {
        "id": 2771,
        "word": "match",
        "phonetic": "[mæʧ]",
        "meaning": "something that resembles or harmonizes with"
    },
    {
        "id": 2772,
        "word": "mate",
        "phonetic": "[meɪt]",
        "meaning": "a fellow member of a team"
    },
    {
        "id": 2773,
        "word": "material",
        "phonetic": "[məˈtɪəriəl]",
        "meaning": "of, relating to, or composed of matter; concerned with physical, not from intellectual or"
    },
    {
        "id": 2775,
        "word": "materialism",
        "phonetic": "[məˈtɪəriəlɪzᵊm]",
        "meaning": "philosophical theory that matter is the only reality"
    },
    {
        "id": 2776,
        "word": "mathematics",
        "phonetic": "[ˌmæθᵊmˈætɪks]",
        "meaning": "science dealing with the logic of quantity and shape"
    },
    {
        "id": 2777,
        "word": "mattress",
        "phonetic": "[ˈmætrəs]",
        "meaning": "quilted bed; bed stuffed with hair, moss, or other suitable material, and quilted or otherwise"
    },
    {
        "id": 2779,
        "word": "mature",
        "phonetic": "[məˈʧʊə]",
        "meaning": "develop and reach maturity; grow old or older"
    },
    {
        "id": 2780,
        "word": "maturity",
        "phonetic": "[məˈʧʊərəti]",
        "meaning": "state or quality of being mature; ripeness; full development; arrival of the time fixed for"
    },
    {
        "id": 2782,
        "word": "maximum",
        "phonetic": "[ˈmæksɪməm]",
        "meaning": "the largest possible quantity"
    },
    {
        "id": 2783,
        "word": "meadow",
        "phonetic": "[ˈmɛdəʊ]",
        "meaning": "tract of low or level land producing grass; any field on which grass is grown for hay"
    },
    {
        "id": 2784,
        "word": "measure",
        "phonetic": "[ˈmɛʒə]",
        "meaning": "determine the size of something; mark, lay out, or establish dimensions; estimate by"
    },
    {
        "id": 2786,
        "word": "mechanical",
        "phonetic": "[məˈkænɪkᵊl]",
        "meaning": "automatic; monotonous; relating to or governed by or in accordance with mechanics"
    },
    {
        "id": 2787,
        "word": "mechanics",
        "phonetic": "[məˈkænɪks]",
        "meaning": "branch of physics concerned with the motion of bodies"
    },
    {
        "id": 2788,
        "word": "mechanism",
        "phonetic": "[ˈmɛkənɪzᵊm]",
        "meaning": "device; machine; the technical aspects of doing something"
    },
    {
        "id": 2789,
        "word": "medal",
        "phonetic": "[ˈmɛdᵊl]",
        "meaning": "a piece of metal in form of coin, and intended to preserve remembrance of notable event or"
    },
    {
        "id": 2791,
        "word": "medieval",
        "phonetic": "[ˌmɛdiˈiːvᵊl]",
        "meaning": "very old-fashioned; as if belonging to the Middle Ages"
    },
    {
        "id": 2792,
        "word": "meditate",
        "phonetic": "[ˈmɛdɪteɪt]",
        "meaning": "dwell on anything in thought; think seriously; keep the mind fixed upon; purpose; intend"
    },
    {
        "id": 2793,
        "word": "meditation",
        "phonetic": "[ˌmɛdɪˈteɪʃᵊn]",
        "meaning": "lengthy intent consideration; long and thoughtful observation; contemplation of spiritual"
    },
    {
        "id": 2795,
        "word": "medium",
        "phonetic": "[ˈmiːdiəm]",
        "meaning": "state that is intermediate between extremes"
    },
    {
        "id": 2796,
        "word": "meek",
        "phonetic": "[miːk]",
        "meaning": "quiet and obedient; showing patience and humility"
    },
    {
        "id": 2797,
        "word": "melancholy",
        "phonetic": "[ˈmɛləŋkɒli]",
        "meaning": "gloomy; feeling of thoughtful sadness; affected by depression"
    },
    {
        "id": 2798,
        "word": "melody",
        "phonetic": "[ˈmɛlədi]",
        "meaning": "tune; pleasing succession or arrangement of sounds; poem suitable for setting to music or"
    },
    {
        "id": 2800,
        "word": "melon",
        "phonetic": "[ˈmɛlən]",
        "meaning": "juicy fruit of certain cucurbitaceous plants, as the muskmelon, watermelon; plant that"
    },
    {
        "id": 2802,
        "word": "melt",
        "phonetic": "[mɛlt]",
        "meaning": "changed from a solid to a liquid state especially by the application of heat"
    },
    {
        "id": 2803,
        "word": "memo",
        "phonetic": "[ˈmiːməʊ]",
        "meaning": "short note; memorandum; written proposal or reminder"
    },
    {
        "id": 2804,
        "word": "memorial",
        "phonetic": "[məˈmɔːriəl]",
        "meaning": "monument; short note or abstract, intended for registry, exhibiting the particulars of a deed"
    },
    {
        "id": 2805,
        "word": "memorize",
        "phonetic": "[ˈmɛməraɪz]",
        "meaning": "commemorate; commit to memory; learn by heart"
    },
    {
        "id": 2806,
        "word": "memory",
        "phonetic": "[ˈmɛmᵊri]",
        "meaning": "faculty of mind by which it retains the knowledge of previous thoughts, impressions, or"
    },
    {
        "id": 2808,
        "word": "menace",
        "phonetic": "[ˈmɛnɪs]",
        "meaning": "danger; a threat or the act of threatening; something that is a source of danger; threaten;"
    },
    {
        "id": 2810,
        "word": "mend",
        "phonetic": "[mɛnd]",
        "meaning": "make repairs or restoration to; fix; improve"
    },
    {
        "id": 2811,
        "word": "mental",
        "phonetic": "[ˈmɛntᵊl]",
        "meaning": "involving mind or intellectual process; affected by disorder of mind"
    },
    {
        "id": 2812,
        "word": "mentality",
        "phonetic": "[mɛnˈtæləti]",
        "meaning": "mental action or power; intellectual activity; intellectuality"
    },
    {
        "id": 2813,
        "word": "mention",
        "phonetic": "[ˈmɛnʃᵊn]",
        "meaning": "speak or notice of anything, usually in a brief or cursory manner"
    },
    {
        "id": 2814,
        "word": "menu",
        "phonetic": "[ˈmɛnjuː]",
        "meaning": "an agenda of things to do"
    },
    {
        "id": 2815,
        "word": "mercantile",
        "phonetic": "[ˈmɜːkəntaɪl]",
        "meaning": "trading; commercial; of or relating to trade or traders"
    },
    {
        "id": 2816,
        "word": "merchandise",
        "phonetic": "[ˈmɜːʧᵊndaɪz]",
        "meaning": "objects for sale; goods"
    },
    {
        "id": 2817,
        "word": "merchant",
        "phonetic": "[ˈmɜːʧᵊnt]",
        "meaning": "one who traffics on a large scale, especially with foreign countries; trafficker; trader"
    },
    {
        "id": 2818,
        "word": "mercy",
        "phonetic": "[ˈmɜːsi]",
        "meaning": "compassionate treatment of unfortunate and helpless; willingness to spare or to help;"
    },
    {
        "id": 2820,
        "word": "mere",
        "phonetic": "[mɪə]",
        "meaning": "being nothing more than what is specified; considered apart from anything else; small; slight"
    },
    {
        "id": 2821,
        "word": "merge",
        "phonetic": "[mɜːʤ]",
        "meaning": "combine; unite"
    },
    {
        "id": 2822,
        "word": "merit",
        "phonetic": "[ˈmɛrɪt]",
        "meaning": "virtue; admirable quality or attribute; credit"
    },
    {
        "id": 2823,
        "word": "mermaid",
        "phonetic": "[ˈmɜːmeɪd]",
        "meaning": "legendary sea creature having the head and upper body of a woman and the tail of a fish"
    },
    {
        "id": 2824,
        "word": "mesh",
        "phonetic": "[mɛʃ]",
        "meaning": "opening or space inclosed by the threads of a net between knot and knot; network or net"
    },
    {
        "id": 2825,
        "word": "mess",
        "phonetic": "[mɛs]",
        "meaning": "soft semi liquid food; a quantity of food set on a table at one time; provision of food for one"
    },
    {
        "id": 2827,
        "word": "metallic",
        "phonetic": "[məˈtælɪk]",
        "meaning": "of or pertaining to metal; of metal nature; resembling metal"
    },
    {
        "id": 2828,
        "word": "method",
        "phonetic": "[ˈmɛθəd]",
        "meaning": "orderly procedure or process; regular manner of doing anything"
    },
    {
        "id": 2829,
        "word": "methodology",
        "phonetic": "[ˌmɛθəˈdɒləʤi]",
        "meaning": "system of methods followed in a particular discipline"
    },
    {
        "id": 2830,
        "word": "meticulous",
        "phonetic": "[məˈtɪkjələs]",
        "meaning": "excessively careful; marked by extreme care in treatment of details"
    },
    {
        "id": 2831,
        "word": "metric",
        "phonetic": "[ˈmɛtrɪk]",
        "meaning": "relating to measurement; involving, or proceeding by measurement."
    },
    {
        "id": 2832,
        "word": "metropolitan",
        "phonetic": "[ˌmɛtrəˈpɒlɪtᵊn]",
        "meaning": "city center; one who lives in a city center"
    },
    {
        "id": 2833,
        "word": "microscope",
        "phonetic": "[ˈmaɪkrəskəʊp]",
        "meaning": "magnifier of the image of small objects"
    },
    {
        "id": 2834,
        "word": "microwave",
        "phonetic": "[ˈmaɪkrəweɪv]",
        "meaning": "a short electromagnetic wave; cook or heat in a microwave oven"
    },
    {
        "id": 2835,
        "word": "mighty",
        "phonetic": "[ˈmaɪti]",
        "meaning": "having or showing great strength or force or intensity"
    },
    {
        "id": 2836,
        "word": "migrant",
        "phonetic": "[ˈmaɪɡrənt]",
        "meaning": "habitually moving from place to place especially in search of seasonal work; wandering"
    },
    {
        "id": 2837,
        "word": "migrate",
        "phonetic": "[maɪˈɡreɪt]",
        "meaning": "move from one country or region to another and settle there"
    },
    {
        "id": 2838,
        "word": "migration",
        "phonetic": "[maɪˈɡreɪʃᵊn]",
        "meaning": "movement of persons from one country or locality to another"
    },
    {
        "id": 2839,
        "word": "milestone",
        "phonetic": "[ˈmaɪlstəʊn]",
        "meaning": "landmark; significant development"
    },
    {
        "id": 2840,
        "word": "military",
        "phonetic": "[ˈmɪlɪtᵊri]",
        "meaning": "pertaining to soldiers, to arms, or to war; of whole body of soldiers"
    },
    {
        "id": 2841,
        "word": "milk",
        "phonetic": "[mɪlk]",
        "meaning": "white fluid secreted by the mammary glands of female mammals for the nourishment of their"
    },
    {
        "id": 2843,
        "word": "miller",
        "phonetic": "[ˈmɪlə]",
        "meaning": "one who keeps or attends a flour mill or gristmill; milling machine"
    },
    {
        "id": 2844,
        "word": "millionaire",
        "phonetic": "[ˌmɪljəˈneə]",
        "meaning": "one whose material wealth is valued at more than a million dollars"
    },
    {
        "id": 2845,
        "word": "mince",
        "phonetic": "[mɪns]",
        "meaning": "cut into very small pieces; chop fine; suppress or weaken the force of"
    },
    {
        "id": 2846,
        "word": "mingle",
        "phonetic": "[ˈmɪŋɡᵊl]",
        "meaning": "be all mixed up or jumbled together;"
    },
    {
        "id": 2847,
        "word": "miniature",
        "phonetic": "[ˈmɪnəʧə]",
        "meaning": "very small; model that represents something in a greatly reduced size"
    },
    {
        "id": 2848,
        "word": "minimize",
        "phonetic": "[ˈmɪnɪmaɪz]",
        "meaning": "diminish; belittle; make small or insignificant"
    },
    {
        "id": 2849,
        "word": "minimum",
        "phonetic": "[ˈmɪnɪməm]",
        "meaning": "the smallest possible quantity"
    },
    {
        "id": 2850,
        "word": "minister",
        "phonetic": "[ˈmɪnɪstə]",
        "meaning": "one who performs service for another; officer of justice; executive head of a government"
    },
    {
        "id": 2852,
        "word": "ministry",
        "phonetic": "[ˈmɪnɪstri]",
        "meaning": "act of serving; government department, at the administrative level normally headed by a"
    },
    {
        "id": 2854,
        "word": "minor",
        "phonetic": "[ˈmaɪnə]",
        "meaning": "of lesser importance or stature or rank; not of legal age; limited in size or scope"
    },
    {
        "id": 2855,
        "word": "minority",
        "phonetic": "[maɪˈnɒrəti]",
        "meaning": "a group of people who differ racially or politically from a larger group"
    },
    {
        "id": 2856,
        "word": "minus",
        "phonetic": "[ˈmaɪnəs]",
        "meaning": "less; requiring to be subtracted; negative"
    },
    {
        "id": 2857,
        "word": "minute",
        "phonetic": "[ˈmɪnɪt]",
        "meaning": "extremely small; short note"
    },
    {
        "id": 2858,
        "word": "miracle",
        "phonetic": "[ˈmɪrəkᵊl]",
        "meaning": "wonderful thing; something that excites admiration or astonishment"
    },
    {
        "id": 2859,
        "word": "miraculous",
        "phonetic": "[mɪˈrækjələs]",
        "meaning": "astonishing; amazing"
    },
    {
        "id": 2860,
        "word": "miscarriage",
        "phonetic": "[ˈmɪsˌkærɪʤ]",
        "meaning": "failure of administration or management; failure to attain a desired result or reach a"
    },
    {
        "id": 2862,
        "word": "mischief",
        "phonetic": "[ˈmɪsʧɪf]",
        "meaning": "behavior that causes discomfiture or annoyance in another; tendency to play pranks or"
    },
    {
        "id": 2864,
        "word": "miserable",
        "phonetic": "[ˈmɪzᵊrəbᵊl]",
        "meaning": "very unhappy; full of misery; wretched"
    },
    {
        "id": 2865,
        "word": "misery",
        "phonetic": "[ˈmɪzəri]",
        "meaning": "great unhappiness; extreme pain of body or mind"
    },
    {
        "id": 2866,
        "word": "misfortune",
        "phonetic": "[ˌmɪsˈfɔːʧuːn]",
        "meaning": "bad fortune or ill luck; bad luck"
    },
    {
        "id": 2867,
        "word": "misgiving",
        "phonetic": "[ˌmɪsˈɡɪvɪŋ]",
        "meaning": "feeling of doubt, distrust, or apprehension"
    },
    {
        "id": 2868,
        "word": "mishap",
        "phonetic": "[ˈmɪshæp]",
        "meaning": "unfortunate accident; bad luck"
    },
    {
        "id": 2869,
        "word": "mislead",
        "phonetic": "[ˌmɪsˈliːd]",
        "meaning": "deceive; misguide"
    },
    {
        "id": 2870,
        "word": "missile",
        "phonetic": "[ˈmɪsaɪl]",
        "meaning": "weapon that is thrown or projected; rocket carrying instruments or warhead"
    },
    {
        "id": 2871,
        "word": "mission",
        "phonetic": "[ˈmɪʃᵊn]",
        "meaning": "assignment that is given to a person or group; operation that is assigned by a higher"
    },
    {
        "id": 2873,
        "word": "mist",
        "phonetic": "[mɪst]",
        "meaning": "visible watery vapor suspended in atmosphere, at or near the surface of the earth; fog"
    },
    {
        "id": 2874,
        "word": "moan",
        "phonetic": "[məʊn]",
        "meaning": "a low prolonged sound of grief or pain, whether articulate or not; groan softly and continuously"
    },
    {
        "id": 2875,
        "word": "mobile",
        "phonetic": "[ˈməʊbaɪl]",
        "meaning": "movable; not fixed; fluid; unstable"
    },
    {
        "id": 2876,
        "word": "mobilize",
        "phonetic": "[ˈməʊbɪlaɪz]",
        "meaning": "assemble, prepare, or put into operation for or as if for war; make mobile or capable of"
    },
    {
        "id": 2878,
        "word": "mock",
        "phonetic": "[mɒk]",
        "meaning": "treat with ridicule or contempt; mimic; frustrate hopes of"
    },
    {
        "id": 2879,
        "word": "mode",
        "phonetic": "[məʊd]",
        "meaning": "prevailing style; manner; way of doing something; fashion or style"
    },
    {
        "id": 2880,
        "word": "moderate",
        "phonetic": "[ˈmɒdᵊrət]",
        "meaning": "temperate; gentle; mild; make less fast or intense ; preside over"
    },
    {
        "id": 2881,
        "word": "modest",
        "phonetic": "[ˈmɒdɪst]",
        "meaning": "humble; less ambitious; moderate"
    },
    {
        "id": 2882,
        "word": "modification",
        "phonetic": "[ˌmɒdɪfɪˈkeɪʃᵊn]",
        "meaning": "act of modifying, or state of being modified; modified form or condition; a change"
    },
    {
        "id": 2883,
        "word": "modify",
        "phonetic": "[ˈmɒdɪfaɪ]",
        "meaning": "alter; change"
    },
    {
        "id": 2884,
        "word": "modulate",
        "phonetic": "[ˈmɒʤəleɪt]",
        "meaning": "tone down in intensity; regulate; change from one key to another"
    },
    {
        "id": 2885,
        "word": "module",
        "phonetic": "[ˈmɒʤuːl]",
        "meaning": "standard or unit of measurement; self-contained component of a system; unit of education"
    },
    {
        "id": 2887,
        "word": "moist",
        "phonetic": "[mɔɪst]",
        "meaning": "slightly wet; damp or humid"
    },
    {
        "id": 2888,
        "word": "moisture",
        "phonetic": "[ˈmɔɪsʧə]",
        "meaning": "wetness caused by water"
    },
    {
        "id": 2889,
        "word": "molecular",
        "phonetic": "[məˈlɛkjələ]",
        "meaning": "of molecules; relating to simple or basic structure or form"
    },
    {
        "id": 2890,
        "word": "molecule",
        "phonetic": "[ˈmɒlɪkjuːl]",
        "meaning": "the smallest particle of substance, having all the properties of that substance"
    },
    {
        "id": 2891,
        "word": "momentary",
        "phonetic": "[ˈməʊməntᵊri]",
        "meaning": "done in a moment; continuing only a moment; lasting a very short time"
    },
    {
        "id": 2892,
        "word": "momentous",
        "phonetic": "[məʊˈmɛntəs]",
        "meaning": "very important; of outstanding significance or consequence"
    },
    {
        "id": 2893,
        "word": "monarch",
        "phonetic": "[ˈmɒnək]",
        "meaning": "king; sole and absolute ruler; sovereign, such as a king or empress"
    },
    {
        "id": 2894,
        "word": "monastery",
        "phonetic": "[ˈmɒnəstri]",
        "meaning": "house of religious retirement, or of seclusion from ordinary temporal concerns, especially"
    },
    {
        "id": 2896,
        "word": "monetary",
        "phonetic": "[ˈmʌnɪtri]",
        "meaning": "of or relating to money; nation's currency; financial"
    },
    {
        "id": 2897,
        "word": "monitor",
        "phonetic": "[ˈmɒnɪtə]",
        "meaning": "observe; watch; keep an eye on"
    },
    {
        "id": 2898,
        "word": "monopolize",
        "phonetic": "[məˈnɒpᵊlaɪz]",
        "meaning": "dominate; occupy; have and control fully and exclusively"
    },
    {
        "id": 2899,
        "word": "monopoly",
        "phonetic": "[məˈnɒpᵊli]",
        "meaning": "exclusive control or possession of something; domination"
    },
    {
        "id": 2900,
        "word": "monotonous",
        "phonetic": "[məˈnɒtnəs]",
        "meaning": "boring; dull; tediously repetitious or lacking in variety"
    },
    {
        "id": 2901,
        "word": "monotony",
        "phonetic": "[məˈnɒtni]",
        "meaning": "uniformity or lack of variation; continual increase, or continual decrease; tedium as a"
    },
    {
        "id": 2903,
        "word": "monster",
        "phonetic": "[ˈmɒnstə]",
        "meaning": "beast; ugly creature; someone or something that is abnormally large and powerful"
    },
    {
        "id": 2904,
        "word": "monstrous",
        "phonetic": "[ˈmɒnstrəs]",
        "meaning": "marvelous; strange; extraordinary on account of ugliness, viciousness, or wickedness"
    },
    {
        "id": 2905,
        "word": "monument",
        "phonetic": "[ˈmɒnjəmənt]",
        "meaning": "structure erected to commemorate persons or events; memorial"
    },
    {
        "id": 2906,
        "word": "monumental",
        "phonetic": "[ˌmɒnjəˈmɛntᵊl]",
        "meaning": "massive; taking a great amount of time and effort to complete; in manner of a"
    },
    {
        "id": 2908,
        "word": "moor",
        "phonetic": "[mʊə]",
        "meaning": "dark-colored person generally; broad area of open land, often high but poorly drained"
    },
    {
        "id": 2909,
        "word": "morale",
        "phonetic": "[məˈrɑːl]",
        "meaning": "confidence; mood or spirit of a group that makes the members wants the group to succeed"
    },
    {
        "id": 2910,
        "word": "morality",
        "phonetic": "[məˈræləti]",
        "meaning": "set of social rules, customs, traditions, beliefs, or practices which specify proper, acceptable"
    },
    {
        "id": 2912,
        "word": "moreover",
        "phonetic": "[ˌmɔːˈrəʊvə]",
        "meaning": "beyond what has been said; further; besides; in addition; furthermore; also; likewise"
    },
    {
        "id": 2913,
        "word": "mortal",
        "phonetic": "[ˈmɔːtᵊl]",
        "meaning": "man, human being; liable or subject to death; accompanying death"
    },
    {
        "id": 2914,
        "word": "motel",
        "phonetic": "[məʊˈtɛl]",
        "meaning": "motor hotel; lodging rooms adjacent to a parking lot"
    },
    {
        "id": 2915,
        "word": "motion",
        "phonetic": "[ˈməʊʃᵊn]",
        "meaning": "movement; act of changing location; ability or power to move"
    },
    {
        "id": 2916,
        "word": "motionless",
        "phonetic": "[ˈməʊʃᵊnləs]",
        "meaning": "at rest, stationary, immobile, not moving"
    },
    {
        "id": 2917,
        "word": "motivate",
        "phonetic": "[ˈməʊtɪveɪt]",
        "meaning": "stimulate; impel; provide with an incentive; move to action"
    },
    {
        "id": 2918,
        "word": "motivation",
        "phonetic": "[ˌməʊtɪˈveɪʃᵊn]",
        "meaning": "incentive; psychological feature that arouses an organism to action toward a desired goal"
    },
    {
        "id": 2919,
        "word": "motive",
        "phonetic": "[ˈməʊtɪv]",
        "meaning": "emotion, desire, physiological need; that which gives purpose and direction to behavior"
    },
    {
        "id": 2920,
        "word": "motto",
        "phonetic": "[ˈmɒtəʊ]",
        "meaning": "short, suggestive expression of a guiding principle; maxim"
    },
    {
        "id": 2921,
        "word": "mould",
        "phonetic": "[məʊld]",
        "meaning": "crumbling, soft, friable earth; soil"
    },
    {
        "id": 2922,
        "word": "mount",
        "phonetic": "[maʊnt]",
        "meaning": "go up or advance; fix onto a backing; put up or launch"
    },
    {
        "id": 2923,
        "word": "mourn",
        "phonetic": "[mɔːn]",
        "meaning": "express or to feel grief or sorrow; grieve; be sorrowful"
    },
    {
        "id": 2924,
        "word": "mournful",
        "phonetic": "[ˈmɔːnfᵊl]",
        "meaning": "feeling or expressing sorrow or grief; sad; gloomy"
    },
    {
        "id": 2925,
        "word": "mourning",
        "phonetic": "[ˈmɔːnɪŋ]",
        "meaning": "expression of deep sorrow because someone has died"
    },
    {
        "id": 2926,
        "word": "moustache",
        "phonetic": "[məˈstɑːʃ]",
        "meaning": "hair growing on the human upper lip, especially when cultivated and groomed"
    },
    {
        "id": 2927,
        "word": "mouth",
        "phonetic": "[maʊθ]",
        "meaning": "opening through which an animal receives food; aperture between jaws or between lips"
    },
    {
        "id": 2928,
        "word": "movement",
        "phonetic": "[ˈmuːvmənt]",
        "meaning": "act of moving; change of place or posture; transference, by any means, from one"
    },
    {
        "id": 2930,
        "word": "muffle",
        "phonetic": "[ˈmʌfᵊl]",
        "meaning": "bare end of nose between nostrils"
    },
    {
        "id": 2931,
        "word": "muffler",
        "phonetic": "[ˈmʌflə]",
        "meaning": "heavy scarf worn around the neck for warmth; anything used in muffling; part of the exhaust"
    },
    {
        "id": 2933,
        "word": "multiple",
        "phonetic": "[ˈmʌltɪpᵊl]",
        "meaning": "having, or consisting of more than one part; many"
    },
    {
        "id": 2934,
        "word": "multiply",
        "phonetic": "[ˈmʌltɪplaɪ]",
        "meaning": "proliferate; increase; combine by multiplication"
    },
    {
        "id": 2935,
        "word": "multitude",
        "phonetic": "[ˈmʌltɪtjuːd]",
        "meaning": "a great number; many"
    },
    {
        "id": 2936,
        "word": "municipal",
        "phonetic": "[mjuːˈnɪsɪpᵊl]",
        "meaning": "metropolitan; civic; having local self-government"
    },
    {
        "id": 2937,
        "word": "murmur",
        "phonetic": "[ˈmɜːmə]",
        "meaning": "make low, confused, and indistinct sound, like that of running water"
    },
    {
        "id": 2938,
        "word": "muscular",
        "phonetic": "[ˈmʌskjələ]",
        "meaning": "having or suggesting great physical power; of or relating to or consisting of muscle"
    },
    {
        "id": 2939,
        "word": "muse",
        "phonetic": "[mjuːz]",
        "meaning": "be absorbed in one's thoughts; consider or say thoughtfully"
    },
    {
        "id": 2940,
        "word": "mushroom",
        "phonetic": "[ˈmʌʃruːm]",
        "meaning": "multiply, grow, or expand rapidly"
    },
    {
        "id": 2941,
        "word": "mute",
        "phonetic": "[mjuːt]",
        "meaning": "refraining from producing speech or vocal sound; unable to speak; expressed without speech;"
    },
    {
        "id": 2943,
        "word": "mutton",
        "phonetic": "[ˈmʌtᵊn]",
        "meaning": "sheep; flesh of a sheep; loose woman; prostitute"
    },
    {
        "id": 2944,
        "word": "mutual",
        "phonetic": "[ˈmjuːʧuəl]",
        "meaning": "common to or shared by two or more parties; shared"
    },
    {
        "id": 2945,
        "word": "myriad",
        "phonetic": "[ˈmɪriəd]",
        "meaning": "of very large or indefinite number; of ten thousand"
    },
    {
        "id": 2946,
        "word": "mysterious",
        "phonetic": "[mɪˈstɪəriəs]",
        "meaning": "beyond ordinary understanding"
    },
    {
        "id": 2947,
        "word": "myth",
        "phonetic": "[mɪθ]",
        "meaning": "legend; fable; a traditional story accepted as history"
    },
    {
        "id": 2948,
        "word": "mythology",
        "phonetic": "[mɪˈθɒləʤi]",
        "meaning": "study of myths; collection of myth "
    },
    {
        "id": 2953,
        "word": "naked",
        "phonetic": "[ˈneɪkɪd]",
        "meaning": "bare and pure; completely unclothed"
    },
    {
        "id": 2954,
        "word": "namely",
        "phonetic": "[ˈneɪmli]",
        "meaning": "by name; by particular mention; expressly; that is to say"
    },
    {
        "id": 2955,
        "word": "nap",
        "phonetic": "[næp]",
        "meaning": "a period of time spent sleeping"
    },
    {
        "id": 2956,
        "word": "narrator",
        "phonetic": "[nəˈreɪtə]",
        "meaning": "someone who tells a story"
    },
    {
        "id": 2957,
        "word": "nasty",
        "phonetic": "[ˈnɑːsti]",
        "meaning": "very dirty, foul; disgusting; nauseous"
    },
    {
        "id": 2958,
        "word": "native",
        "phonetic": "[ˈneɪtɪv]",
        "meaning": "being as origin; as found in nature in the elemental form"
    },
    {
        "id": 2959,
        "word": "nausea",
        "phonetic": "[ˈnɔːziə]",
        "meaning": "feeling of sickness in stomach by an urge to vomit; strong aversion; disgust"
    },
    {
        "id": 2960,
        "word": "naval",
        "phonetic": "[ˈneɪvᵊl]",
        "meaning": "relating to, or adjacent to the sea; relating to marine shipping or navigation"
    },
    {
        "id": 2961,
        "word": "navigable",
        "phonetic": "[ˈnævɪɡəbᵊl]",
        "meaning": "wide and deep enough to allow ships to pass through; able to be steered"
    },
    {
        "id": 2962,
        "word": "navigation",
        "phonetic": "[ˌnævɪˈɡeɪʃᵊn]",
        "meaning": "guidance of ships or airplanes from place to place"
    },
    {
        "id": 2963,
        "word": "neat",
        "phonetic": "[niːt]",
        "meaning": "clean or orderly"
    },
    {
        "id": 2964,
        "word": "necessitate",
        "phonetic": "[nəˈsɛsɪteɪt]",
        "meaning": "make necessary or indispensable; render unavoidable"
    },
    {
        "id": 2965,
        "word": "needle",
        "phonetic": "[ˈniːdᵊl]",
        "meaning": "long, thin, sharp implement usually for piercing such as sewing, or knitting"
    },
    {
        "id": 2966,
        "word": "needy",
        "phonetic": "[ˈniːdi]",
        "meaning": "poor; indigent; being in need; impoverished"
    },
    {
        "id": 2967,
        "word": "negate",
        "phonetic": "[nɪˈɡeɪt]",
        "meaning": "cancel out; make ineffective or invalid; deny"
    },
    {
        "id": 2968,
        "word": "negation",
        "phonetic": "[nɪˈɡeɪʃᵊn]",
        "meaning": "act of denying; assertion of the nonrealistic or untruthfulness of anything"
    },
    {
        "id": 2969,
        "word": "negative",
        "phonetic": "[ˈnɛɡətɪv]",
        "meaning": "adverse; involving disadvantage or harm; pessimistic"
    },
    {
        "id": 2970,
        "word": "neglect",
        "phonetic": "[nɪˈɡlɛkt]",
        "meaning": "disregard; ignore; pay little or no attention to"
    },
    {
        "id": 2971,
        "word": "negligence",
        "phonetic": "[ˈnɛɡlɪʤᵊns]",
        "meaning": "neglect; failure to take reasonable care; state or quality of being negligent"
    },
    {
        "id": 2972,
        "word": "negligent",
        "phonetic": "[ˈnɛɡlɪʤᵊnt]",
        "meaning": "careless; inattentive"
    },
    {
        "id": 2973,
        "word": "negligible",
        "phonetic": "[ˈnɛɡlɪʤəbᵊl]",
        "meaning": "so small, trifling, or unimportant that it may be easily disregarded"
    },
    {
        "id": 2974,
        "word": "negotiable",
        "phonetic": "[nəˈɡəʊʃəbᵊl]",
        "meaning": "capable of being negotiated; transferable by assignment or endorsement to another"
    },
    {
        "id": 2976,
        "word": "negotiation",
        "phonetic": "[nəˌɡəʊʃiˈeɪʃᵊn]",
        "meaning": "discussion intended to produce an agreement"
    },
    {
        "id": 2977,
        "word": "nervous",
        "phonetic": "[ˈnɜːvəs]",
        "meaning": "agitated; anxious"
    },
    {
        "id": 2978,
        "word": "network",
        "phonetic": "[ˈnɛtwɜːk]",
        "meaning": "any system of lines or channels crossing like the fabric of a net; complex, interconnected"
    },
    {
        "id": 2980,
        "word": "neutral",
        "phonetic": "[ˈnjuːtrəl]",
        "meaning": "impartial; not supporting one side over another"
    },
    {
        "id": 2981,
        "word": "neutron",
        "phonetic": "[ˈnjuːtrɒn]",
        "meaning": "elementary particle with 0 charge and mass about equal to a proton"
    },
    {
        "id": 2982,
        "word": "nevertheless",
        "phonetic": "[ˌnɛvəðəˈlɛs]",
        "meaning": "not the less; notwithstanding; in spite of that; yet"
    },
    {
        "id": 2983,
        "word": "nickel",
        "phonetic": "[ˈnɪkᵊl]",
        "meaning": "coin worth one twentieth of a dollar"
    },
    {
        "id": 2984,
        "word": "nightmare",
        "phonetic": "[ˈnaɪtmeə]",
        "meaning": "dream arousing feelings of intense fear, horror, and distress; event or experience that is"
    },
    {
        "id": 2986,
        "word": "nitrogen",
        "phonetic": "[ˈnaɪtrəʤᵊn]",
        "meaning": "colorless nonmetallic element, tasteless and odorless, comprising four fifths of the"
    },
    {
        "id": 2988,
        "word": "nobility",
        "phonetic": "[nəʊˈbɪləti]",
        "meaning": "quality or state of being noble; superiority of mind or of character; commanding excellence;"
    },
    {
        "id": 2990,
        "word": "noisy",
        "phonetic": "[ˈnɔɪzi]",
        "meaning": "full of loud and nonmusical sounds; clamorous"
    },
    {
        "id": 2991,
        "word": "nominal",
        "phonetic": "[ˈnɒmɪnᵊl]",
        "meaning": "in name only; insignificantly small"
    },
    {
        "id": 2992,
        "word": "nominate",
        "phonetic": "[ˈnɒmɪneɪt]",
        "meaning": "designate; appoint"
    },
    {
        "id": 2993,
        "word": "nomination",
        "phonetic": "[ˌnɒmɪˈneɪʃᵊn]",
        "meaning": "act of naming or nominating; designation of a person as a candidate for office"
    },
    {
        "id": 2994,
        "word": "nonsense",
        "phonetic": "[ˈnɒnsᵊns]",
        "meaning": "silliness; words or signs having no intelligible meaning"
    },
    {
        "id": 2995,
        "word": "norm",
        "phonetic": "[nɔːm]",
        "meaning": "convention; standard; rule"
    },
    {
        "id": 2996,
        "word": "normally",
        "phonetic": "[ˈnɔːmᵊli]",
        "meaning": "usually; as a rule; regularly; according to a rule"
    },
    {
        "id": 2997,
        "word": "notable",
        "phonetic": "[ˈnəʊtəbᵊl]",
        "meaning": "worthy of note or notice; remarkable; important"
    },
    {
        "id": 2998,
        "word": "notably",
        "phonetic": "[ˈnəʊtəbli]",
        "meaning": "especially; in a notable manner; remarkably; particularly"
    },
    {
        "id": 2999,
        "word": "note",
        "phonetic": "[nəʊt]",
        "meaning": "observe carefully; notice; show; indicate"
    },
    {
        "id": 3000,
        "word": "notify",
        "phonetic": "[ˈnəʊtɪfaɪ]",
        "meaning": "make known; give notice to; inform by notice"
    },
    {
        "id": 3001,
        "word": "notion",
        "phonetic": "[ˈnəʊʃᵊn]",
        "meaning": "general or universal conception; belief or opinion"
    },
    {
        "id": 3002,
        "word": "notorious",
        "phonetic": "[nəʊˈtɔːriəs]",
        "meaning": "disreputable; known widely and usually unfavorably; infamous"
    },
    {
        "id": 3003,
        "word": "notwithstanding",
        "phonetic": "[ˌnɒtwɪθˈstændɪŋ]",
        "meaning": "nevertheless; in spite of"
    },
    {
        "id": 3004,
        "word": "nought",
        "phonetic": "[nɔːt]",
        "meaning": "nonexistence; nothingness; zero"
    },
    {
        "id": 3005,
        "word": "nourish",
        "phonetic": "[ˈnʌrɪʃ]",
        "meaning": "provide with nourishment; provide with food or other substances necessary for life and"
    },
    {
        "id": 3007,
        "word": "nourishment",
        "phonetic": "[ˈnʌrɪʃmənt]",
        "meaning": "a source of materials to nourish the body"
    },
    {
        "id": 3008,
        "word": "novel",
        "phonetic": "[ˈnɒvᵊl]",
        "meaning": "previously unknown; strikingly new, unusual, or different; young"
    },
    {
        "id": 3009,
        "word": "novelty",
        "phonetic": "[ˈnɒvᵊlti]",
        "meaning": "quality of being novel; newness; something new and unusual"
    },
    {
        "id": 3010,
        "word": "nowadays",
        "phonetic": "[ˈnaʊədeɪz]",
        "meaning": "during current time; presently"
    },
    {
        "id": 3011,
        "word": "nowhere",
        "phonetic": "[ˈnəʊweə]",
        "meaning": "not anywhere; not in any place or state"
    },
    {
        "id": 3012,
        "word": "nuclear",
        "phonetic": "[ˈnjuːklɪə]",
        "meaning": "of, relating to, or forming a nucleus of an atom; pertaining to, or using nuclear weapons"
    },
    {
        "id": 3013,
        "word": "nucleus",
        "phonetic": "[ˈnjuːkliəs]",
        "meaning": "central or essential part around which other parts are gathered or grouped; core"
    },
    {
        "id": 3014,
        "word": "nuisance",
        "phonetic": "[ˈnjuːsᵊns]",
        "meaning": "something that annoys or gives trouble and vexation; something that is offensive or"
    },
    {
        "id": 3016,
        "word": "null",
        "phonetic": "[nʌl]",
        "meaning": "invalid; void; nullified; having no legal force; invalid"
    },
    {
        "id": 3017,
        "word": "nullify",
        "phonetic": "[ˈnʌlɪfaɪ]",
        "meaning": "make invalid; make null; invalidate; counteract force or effectiveness of"
    },
    {
        "id": 3018,
        "word": "numerical",
        "phonetic": "[njuːˈmɛrɪkᵊl]",
        "meaning": "belonging to number; denoting number; consisting in numbers; expressed by numbers,"
    },
    {
        "id": 3020,
        "word": "numerous",
        "phonetic": "[ˈnjuːmərəs]",
        "meaning": "many; various; amounting to a large indefinite number"
    },
    {
        "id": 3021,
        "word": "nursery",
        "phonetic": "[ˈnɜːsᵊri]",
        "meaning": "room for baby; area in a household set apart for the use of children"
    },
    {
        "id": 3022,
        "word": "nylon",
        "phonetic": "[ˈnaɪlɒn]",
        "meaning": "any of a family of high-strength, resilient synthetic polymers"
    },
    {
        "id": 3027,
        "word": "oak",
        "phonetic": "[əʊk]",
        "meaning": "any tree or shrub of the genus Quercus; durable wood of any of these trees or shrubs"
    },
    {
        "id": 3028,
        "word": "oar",
        "phonetic": "[ɔː]",
        "meaning": "long, thin, usually wooden pole with a blade at one end, used to row or steer a boat"
    },
    {
        "id": 3029,
        "word": "oath",
        "phonetic": "[əʊθ]",
        "meaning": "solemn promise; commitment to tell the truth"
    },
    {
        "id": 3030,
        "word": "obedient",
        "phonetic": "[əˈbiːdiənt]",
        "meaning": "subject in will or act to authority; willing to obey; submissive to restraint, control, or"
    },
    {
        "id": 3032,
        "word": "object",
        "phonetic": "[ˈɒbʤɪkt]",
        "meaning": "be averse to or express disapproval of"
    },
    {
        "id": 3033,
        "word": "objection",
        "phonetic": "[əbˈʤɛkʃᵊn]",
        "meaning": "act of expressing earnest opposition or protest"
    },
    {
        "id": 3034,
        "word": "objective",
        "phonetic": "[əbˈʤɛktɪv]",
        "meaning": "not influenced by emotions; having actual existence or reality"
    },
    {
        "id": 3035,
        "word": "obligation",
        "phonetic": "[ˌɒblɪˈɡeɪʃᵊn]",
        "meaning": "act of binding oneself by a social, legal, or moral tie; written promise to repay a debt"
    },
    {
        "id": 3036,
        "word": "oblige",
        "phonetic": "[əˈblaɪʤ]",
        "meaning": "force; bind by an obligation; cause to be indebted; do a service or favor for"
    },
    {
        "id": 3037,
        "word": "obliterate",
        "phonetic": "[əˈblɪtəreɪt]",
        "meaning": "destroy completely; do away with completely so as to leave no trace"
    },
    {
        "id": 3038,
        "word": "oblong",
        "phonetic": "[ˈɒblɒŋ]",
        "meaning": "having greater length than breadth, especially when rectangular"
    },
    {
        "id": 3039,
        "word": "obscure",
        "phonetic": "[əbˈskjʊə]",
        "meaning": "darken; make dim or indistinct; conceal in obscurity"
    },
    {
        "id": 3040,
        "word": "observance",
        "phonetic": "[əbˈzɜːvᵊns]",
        "meaning": "act or practice of observing or noticing with attention; an act, ceremony, or rite, as of"
    },
    {
        "id": 3042,
        "word": "observe",
        "phonetic": "[əbˈzɜːv]",
        "meaning": "be on the watch respecting; pay attention to; notice with care; see; perceive"
    },
    {
        "id": 3043,
        "word": "obstacle",
        "phonetic": "[ˈɒbstəkᵊl]",
        "meaning": "one that opposes, stands in the way of, or holds up progress"
    },
    {
        "id": 3044,
        "word": "obstinate",
        "phonetic": "[ˈɒbstɪnɪt]",
        "meaning": "stubbornly adhering to an attitude or opinion; hard to control or treat"
    },
    {
        "id": 3045,
        "word": "obstruction",
        "phonetic": "[əbˈstrʌkʃᵊn]",
        "meaning": "act of obstructing; any structure that makes progress difficult"
    },
    {
        "id": 3046,
        "word": "obtain",
        "phonetic": "[əbˈteɪn]",
        "meaning": "get hold of; gain possession of; acquire, in any way"
    },
    {
        "id": 3047,
        "word": "obtainable",
        "phonetic": "[əbˈteɪnəbᵊl]",
        "meaning": "available; capable of being obtained"
    },
    {
        "id": 3048,
        "word": "obvious",
        "phonetic": "[ˈɒbviəs]",
        "meaning": "exposed; easily discovered; plain"
    },
    {
        "id": 3049,
        "word": "occasion",
        "phonetic": "[əˈkeɪʒᵊn]",
        "meaning": "significant event that occurs at a critical time; opportunity to do something; event or"
    },
    {
        "id": 3051,
        "word": "occasional",
        "phonetic": "[əˈkeɪʒᵊnᵊl]",
        "meaning": "random; occurring from time to time; infrequent"
    },
    {
        "id": 3052,
        "word": "occasionally",
        "phonetic": "[əˈkeɪʒᵊnᵊli]",
        "meaning": "now and then; from time to time; infrequently; irregularly"
    },
    {
        "id": 3053,
        "word": "occupation",
        "phonetic": "[ˌɒkjəˈpeɪʃᵊn]",
        "meaning": "act of occupying or taking possession; control of a country by military forces of a foreign"
    },
    {
        "id": 3055,
        "word": "occupy",
        "phonetic": "[ˈɒkjəpaɪ]",
        "meaning": "inhabit; live in a certain place; be present in; be inside of"
    },
    {
        "id": 3056,
        "word": "occur",
        "phonetic": "[əˈkɜː]",
        "meaning": "take place; be found to exist ; come to one's mind"
    },
    {
        "id": 3057,
        "word": "occurrence",
        "phonetic": "[əˈkʌrᵊns]",
        "meaning": "an event that happens"
    },
    {
        "id": 3058,
        "word": "odd",
        "phonetic": "[ɒd]",
        "meaning": "not easily explained; beyond from the usual or expected; not divisible by two"
    },
    {
        "id": 3059,
        "word": "odour",
        "phonetic": "[ˈəʊdə]",
        "meaning": "any smell, whether fragrant or offensive; scent; perfume"
    },
    {
        "id": 3060,
        "word": "offence",
        "phonetic": "[əˈfɛns]",
        "meaning": "act of causing anger, resentment, displeasure, or affront; violation or infraction of moral or"
    },
    {
        "id": 3062,
        "word": "offend",
        "phonetic": "[əˈfɛnd]",
        "meaning": "strike against; attack; assail; make angry; affront"
    },
    {
        "id": 3063,
        "word": "offensive",
        "phonetic": "[əˈfɛnsɪv]",
        "meaning": "causing anger, displeasure, resentment, or affront"
    },
    {
        "id": 3064,
        "word": "offer",
        "phonetic": "[ˈɒfə]",
        "meaning": "act of presenting; something, such as a suggestion, proposal, bid, or recommendation"
    },
    {
        "id": 3065,
        "word": "offset",
        "phonetic": "[ˈɒfsɛt]",
        "meaning": "counterbalance, counteract, or compensate for; balance"
    },
    {
        "id": 3066,
        "word": "offspring",
        "phonetic": "[ˈɒfsprɪŋ]",
        "meaning": "descendant"
    },
    {
        "id": 3067,
        "word": "omen",
        "phonetic": "[ˈəʊmən]",
        "meaning": "any indication or action regarded as a foreshowing; phenomenon supposed to portend good or"
    },
    {
        "id": 3069,
        "word": "ominous",
        "phonetic": "[ˈɒmɪnəs]",
        "meaning": "threatening; foreshadowing evil or tragic developments"
    },
    {
        "id": 3070,
        "word": "omission",
        "phonetic": "[əˈmɪʃᵊn]",
        "meaning": "act of omitting; neglect or failure to do something required by propriety or duty"
    },
    {
        "id": 3071,
        "word": "omit",
        "phonetic": "[əˈmɪt]",
        "meaning": "leave undone or leave out ; bypass; neglect; fail to include or mention"
    },
    {
        "id": 3072,
        "word": "onset",
        "phonetic": "[ˈɒnsɛt]",
        "meaning": "beginning or early stages; offensive against enemy"
    },
    {
        "id": 3073,
        "word": "opaque",
        "phonetic": "[əʊˈpeɪk]",
        "meaning": "impenetrable by light; not transparent; not reflecting light; having no luster"
    },
    {
        "id": 3074,
        "word": "opera",
        "phonetic": "[ˈɒpᵊrə]",
        "meaning": "a drama set to music and consists of singing"
    },
    {
        "id": 3075,
        "word": "operative",
        "phonetic": "[ˈɒpᵊrətɪv]",
        "meaning": "having power of acting; exerting force, physical or moral; active in the production of effects"
    },
    {
        "id": 3076,
        "word": "opinion",
        "phonetic": "[əˈpɪnjən]",
        "meaning": "notion or conviction founded on probable evidence; belief stronger than impression;"
    },
    {
        "id": 3078,
        "word": "opponent",
        "phonetic": "[əˈpəʊnənt]",
        "meaning": "contestant; someone who offers opposition ; adverse; hostile; opposing"
    },
    {
        "id": 3079,
        "word": "opportune",
        "phonetic": "[ˈɒpəʧuːn]",
        "meaning": "timely; just in time; suited or right for a particular purpose"
    },
    {
        "id": 3080,
        "word": "opportunity",
        "phonetic": "[ˌɒpəˈʧuːnəti]",
        "meaning": "favorable or advantageous circumstance; chance for progress or advancement"
    },
    {
        "id": 3081,
        "word": "oppose",
        "phonetic": "[əˈpəʊz]",
        "meaning": "place in front of, or over against; set opposite; exhibit; confront; resist; withstand"
    },
    {
        "id": 3082,
        "word": "opposite",
        "phonetic": "[ˈɒpəzɪt]",
        "meaning": "two words that express opposing concepts; contrariwise; directly facing each other"
    },
    {
        "id": 3083,
        "word": "opposition",
        "phonetic": "[ˌɒpəˈzɪʃᵊn]",
        "meaning": "condition of being in conflict; act of opposing something"
    },
    {
        "id": 3084,
        "word": "optical",
        "phonetic": "[ˈɒptɪkᵊl]",
        "meaning": "of or relating to or involving light or optics"
    },
    {
        "id": 3085,
        "word": "optimal",
        "phonetic": "[ˈɒptɪmᵊl]",
        "meaning": "most advantageous; optimum; ideal"
    },
    {
        "id": 3086,
        "word": "optimism",
        "phonetic": "[ˈɒptɪmɪzᵊm]",
        "meaning": "tendency to expect the best possible outcome; belief that the universe is improving and"
    },
    {
        "id": 3088,
        "word": "optimistic",
        "phonetic": "[ˌɒptɪˈmɪstɪk]",
        "meaning": "hopeful; positive; expecting the best in all possible ways"
    },
    {
        "id": 3089,
        "word": "optimum",
        "phonetic": "[ˈɒptɪməm]",
        "meaning": "most favorable or advantageous"
    },
    {
        "id": 3090,
        "word": "option",
        "phonetic": "[ˈɒpʃᵊn]",
        "meaning": "act of choosing; power or freedom to choose"
    },
    {
        "id": 3091,
        "word": "optional",
        "phonetic": "[ˈɒpʃᵊnᵊl]",
        "meaning": "not obligatory; left to choice; not compulsory or automatic"
    },
    {
        "id": 3092,
        "word": "oral",
        "phonetic": "[ˈɔːrəl]",
        "meaning": "spoken; unwritten; relating to the mouth"
    },
    {
        "id": 3093,
        "word": "orbit",
        "phonetic": "[ˈɔːbɪt]",
        "meaning": "path; circle; move in an orbit; encircle"
    },
    {
        "id": 3094,
        "word": "orchard",
        "phonetic": "[ˈɔːʧəd]",
        "meaning": "garden; area of land devoted to the cultivation of fruit or nut trees"
    },
    {
        "id": 3095,
        "word": "orchestra",
        "phonetic": "[ˈɔːkɪstrə]",
        "meaning": "band"
    },
    {
        "id": 3096,
        "word": "orderly",
        "phonetic": "[ˈɔːdəli]",
        "meaning": "conformed to order; in order; regular; well-regulated"
    },
    {
        "id": 3097,
        "word": "ore",
        "phonetic": "[ɔː]",
        "meaning": "mineral that contains metal that is valuable enough to be mined"
    },
    {
        "id": 3098,
        "word": "organ",
        "phonetic": "[ˈɔːɡən]",
        "meaning": "natural part or structure in animal or plant, capable of performing some special action"
    },
    {
        "id": 3099,
        "word": "organic",
        "phonetic": "[ɔːˈɡænɪk]",
        "meaning": "simple and healthful and close to nature"
    },
    {
        "id": 3100,
        "word": "organism",
        "phonetic": "[ˈɔːɡᵊnɪzᵊm]",
        "meaning": "living being; system considered analogous in structure or function to a living body"
    },
    {
        "id": 3101,
        "word": "orient",
        "phonetic": "[ˈɔːriənt]",
        "meaning": "focus toward; determine position with reference to another point; locate to face the east"
    },
    {
        "id": 3102,
        "word": "oriental",
        "phonetic": "[ˌɔːriˈɛntᵊl]",
        "meaning": "of or relating to the countries of the orient or their peoples or cultures; eastern"
    },
    {
        "id": 3103,
        "word": "orientation",
        "phonetic": "[ˌɔːriənˈteɪʃᵊn]",
        "meaning": "act of finding oneself position; position or alignment relative to points of directions;"
    },
    {
        "id": 3105,
        "word": "origin",
        "phonetic": "[ˈɒrɪʤɪn]",
        "meaning": "the first existence or beginning of anything; birth; fountain"
    },
    {
        "id": 3106,
        "word": "original",
        "phonetic": "[əˈrɪʤᵊnᵊl]",
        "meaning": "not second hand; not copied or translated from something else"
    },
    {
        "id": 3107,
        "word": "originality",
        "phonetic": "[əˌrɪʤᵊnˈæləti]",
        "meaning": "novelty; creativity; capacity to act or think independently"
    },
    {
        "id": 3108,
        "word": "originate",
        "phonetic": "[əˈrɪʤɪneɪt]",
        "meaning": "initiate; invent; bring into being; create"
    },
    {
        "id": 3109,
        "word": "ornament",
        "phonetic": "[ˈɔːnəmənt]",
        "meaning": "decoration; something used to beautify"
    },
    {
        "id": 3110,
        "word": "ornamental",
        "phonetic": "[ˌɔːnəˈmɛntᵊl]",
        "meaning": "decorative; any plant grown for its beauty or ornamental value"
    },
    {
        "id": 3111,
        "word": "ounce",
        "phonetic": "[aʊns]",
        "meaning": "unit of weight equal to one sixteenth of a pound"
    },
    {
        "id": 3112,
        "word": "outbreak",
        "phonetic": "[ˈaʊtbreɪk]",
        "meaning": "beginning; eruption; explosion"
    },
    {
        "id": 3113,
        "word": "outcome",
        "phonetic": "[ˈaʊtkʌm]",
        "meaning": "result; end or consequence; result of a random trial"
    },
    {
        "id": 3114,
        "word": "outdoors",
        "phonetic": "[ˌaʊtˈdɔːz]",
        "meaning": "out of house; out of doors"
    },
    {
        "id": 3115,
        "word": "outermost",
        "phonetic": "[ˈaʊtəməʊst]",
        "meaning": "far most; utmost; outmost; most distant from the center or inside"
    },
    {
        "id": 3116,
        "word": "outlandish",
        "phonetic": "[aʊtˈlændɪʃ]",
        "meaning": "unconventional; strikingly unfamiliar; located far from civilized areas"
    },
    {
        "id": 3117,
        "word": "outlaw",
        "phonetic": "[ˈaʊtlɔː]",
        "meaning": "person excluded from the benefit of the law, or deprived of its protection; fugitive from the"
    },
    {
        "id": 3119,
        "word": "outlet",
        "phonetic": "[ˈaʊtlɛt]",
        "meaning": "an opening that permits escape or release; activity that releases creative energy or emotion"
    },
    {
        "id": 3120,
        "word": "outline",
        "phonetic": "[ˈaʊtlaɪn]",
        "meaning": "line that appears to bound an object"
    },
    {
        "id": 3121,
        "word": "outlook",
        "phonetic": "[ˈaʊtlʊk]",
        "meaning": "prospect; view; belief about the future ; act of looking out"
    },
    {
        "id": 3122,
        "word": "output",
        "phonetic": "[ˈaʊtpʊt]",
        "meaning": "act or process of producing; production; amount produced during a certain time"
    },
    {
        "id": 3123,
        "word": "outrage",
        "phonetic": "[ˈaʊtreɪʤ]",
        "meaning": "act of extreme violence or viciousness; offense"
    },
    {
        "id": 3124,
        "word": "outrageous",
        "phonetic": "[aʊtˈreɪʤəs]",
        "meaning": "of the nature of an outrage; exceeding the limits of right, reason"
    },
    {
        "id": 3125,
        "word": "outright",
        "phonetic": "[ˈaʊtraɪt]",
        "meaning": "altogether; entirely; without reservation or exception"
    },
    {
        "id": 3126,
        "word": "outset",
        "phonetic": "[ˈaʊtsɛt]",
        "meaning": "beginning; start; origin; time at which something is supposed to begin"
    },
    {
        "id": 3127,
        "word": "outstanding",
        "phonetic": "[aʊtˈstændɪŋ]",
        "meaning": "distinguished from others in excellence"
    },
    {
        "id": 3128,
        "word": "oval",
        "phonetic": "[ˈəʊvᵊl]",
        "meaning": "elliptic; rounded like an egg"
    },
    {
        "id": 3129,
        "word": "overall",
        "phonetic": "[ˌəʊvəˈrɔːl]",
        "meaning": "general; comprehensive; from one end to the other; including everything"
    },
    {
        "id": 3130,
        "word": "overcast",
        "phonetic": "[ˈəʊvəkɑːst]",
        "meaning": "covered or obscured, as with clouds or mist; gloomy; melancholy"
    },
    {
        "id": 3131,
        "word": "overcharge",
        "phonetic": "[ˌəʊvəˈʧɑːʤ]",
        "meaning": "overprice; a price that is too high"
    },
    {
        "id": 3132,
        "word": "overcome",
        "phonetic": "[ˌəʊvəˈkʌm]",
        "meaning": "defeat another in competition or conflict; conquer; prevail over"
    },
    {
        "id": 3133,
        "word": "overestimate",
        "phonetic": "[ˌəʊvəˈrɛstɪmət]",
        "meaning": "make too high an estimate of"
    },
    {
        "id": 3134,
        "word": "overflow",
        "phonetic": "[ˈəʊvəfləʊ]",
        "meaning": "flow over; cover with, or as with, water or other fluid; spread over; flow over the brim of"
    },
    {
        "id": 3135,
        "word": "overhear",
        "phonetic": "[ˌəʊvəˈhɪə]",
        "meaning": "hear more of anything than was intended to be heard; hear again"
    },
    {
        "id": 3136,
        "word": "overlap",
        "phonetic": "[ˌəʊvəˈlæp]",
        "meaning": "representation of common ground between two things; extend over and cover a part of"
    },
    {
        "id": 3137,
        "word": "overlapping",
        "phonetic": "[ˌəʊvəˈlæpɪŋ]",
        "meaning": "covering with a design in which one element covers a part of another"
    },
    {
        "id": 3138,
        "word": "overload",
        "phonetic": "[ˈəʊvələʊd]",
        "meaning": "place too much a load on"
    },
    {
        "id": 3139,
        "word": "overlook",
        "phonetic": "[ˌəʊvəˈlʊk]",
        "meaning": "ignore; disregard; fail to notice ; watch over"
    },
    {
        "id": 3140,
        "word": "overseas",
        "phonetic": "[ˌəʊvəˈsiːz]",
        "meaning": "beyond or across the sea; abroad"
    },
    {
        "id": 3141,
        "word": "oversight",
        "phonetic": "[ˈəʊvəsaɪt]",
        "meaning": "unintentional omission or mistake; watchful care or management; supervision"
    },
    {
        "id": 3142,
        "word": "overtake",
        "phonetic": "[ˌəʊvəˈteɪk]",
        "meaning": "come up with in a course, pursuit, progress, or motion; catch up with; come upon from"
    },
    {
        "id": 3144,
        "word": "overthrow",
        "phonetic": "[ˈəʊvəθrəʊ]",
        "meaning": "throw over; overturn; upset; turn upside down; cause to fall or to fail"
    },
    {
        "id": 3145,
        "word": "overtime",
        "phonetic": "[ˈəʊvətaɪm]",
        "meaning": "beyond the regular time"
    },
    {
        "id": 3146,
        "word": "overwhelm",
        "phonetic": "[ˌəʊvəˈwɛlm]",
        "meaning": "defeat; cover completely or make imperceptible; overcome by superior force ; charge"
    },
    {
        "id": 3148,
        "word": "overwhelming",
        "phonetic": "[ˌəʊvəˈwɛlmɪŋ]",
        "meaning": "overpowering in effect or strength; very great or intense; extreme"
    },
    {
        "id": 3149,
        "word": "owe",
        "phonetic": "[əʊ]",
        "meaning": "be in debt; be obliged to pay or repay"
    },
    {
        "id": 3150,
        "word": "owl",
        "phonetic": "[aʊl]",
        "meaning": "any species of raptorial birds of the family Strigidae"
    },
    {
        "id": 3151,
        "word": "own",
        "phonetic": "[əʊn]",
        "meaning": "belonging to oneself or itself; not foreign; domestic"
    },
    {
        "id": 3152,
        "word": "ownership",
        "phonetic": "[ˈəʊnəʃɪp]",
        "meaning": "having and controlling property"
    },
    {
        "id": 3153,
        "word": "oxide",
        "phonetic": "[ˈɒksaɪd]",
        "meaning": "binary compound of oxygen with an atom or radical, or a compound which is regarded as"
    },
    {
        "id": 3155,
        "word": "oxygen",
        "phonetic": "[ˈɒksɪʤən]",
        "meaning": "a nonmetallic bivalent element that is normally a colorless odorless tasteless nonflammable"
    },
    {
        "id": 3157,
        "word": "oyster",
        "phonetic": "[ˈɔɪstə]",
        "meaning": "marine mollusks having a rough irregular shell "
    },
    {
        "id": 3162,
        "word": "pace",
        "phonetic": "[peɪs]",
        "meaning": "single movement from one foot to the other in walking; slow gait; step"
    },
    {
        "id": 3163,
        "word": "pack",
        "phonetic": "[pæk]",
        "meaning": "pact or bundle made up and prepared to be carried; a number of similar things; a full set of"
    },
    {
        "id": 3165,
        "word": "packaging",
        "phonetic": "[ˈpækɪʤɪŋ]",
        "meaning": "putting something into boxes"
    },
    {
        "id": 3166,
        "word": "pad",
        "phonetic": "[pæd]",
        "meaning": "soft or small cushion; a kind of cushion for writing upon, or for blotting"
    },
    {
        "id": 3167,
        "word": "painting",
        "phonetic": "[ˈpeɪntɪŋ]",
        "meaning": "drawing; picture or design in paint; action of applying paint to a surface"
    },
    {
        "id": 3168,
        "word": "pair",
        "phonetic": "[peə]",
        "meaning": "two people or things considered as a unit; two items of the same kind; couple"
    },
    {
        "id": 3169,
        "word": "pale",
        "phonetic": "[peɪl]",
        "meaning": "not ruddy; dusky white; pallid; not bright or brilliant"
    },
    {
        "id": 3170,
        "word": "palm",
        "phonetic": "[pɑːm]",
        "meaning": "inner surface of the hand between bases of fingers and wrist; tropical evergreen trees of the"
    },
    {
        "id": 3172,
        "word": "pamphlet",
        "phonetic": "[ˈpæmflɪt]",
        "meaning": "brochure; leaflet; a small book usually having a paper cover"
    },
    {
        "id": 3173,
        "word": "pan",
        "phonetic": "[pæn]",
        "meaning": "criticize harshly; wash in pan; cook in pan"
    },
    {
        "id": 3174,
        "word": "pane",
        "phonetic": "[peɪn]",
        "meaning": "framed section of window or door that is filled with a sheet of glass or others; panel in a wall or"
    },
    {
        "id": 3176,
        "word": "panel",
        "phonetic": "[ˈpænᵊl]",
        "meaning": "a group of people gathered for a special purpose; small board or pad"
    },
    {
        "id": 3177,
        "word": "panic",
        "phonetic": "[ˈpænɪk]",
        "meaning": "sudden mass fear and anxiety"
    },
    {
        "id": 3178,
        "word": "panorama",
        "phonetic": "[ˌpænəˈrɑːmə]",
        "meaning": "complete view in every direction."
    },
    {
        "id": 3179,
        "word": "panoramic",
        "phonetic": "[ˌpænəˈræmɪk]",
        "meaning": "related to unobstructed and comprehensive view; with a wide view"
    },
    {
        "id": 3180,
        "word": "pant",
        "phonetic": "[pænt]",
        "meaning": "breathe quickly or in a labored manner; respire with heaving of the breast; sigh"
    },
    {
        "id": 3181,
        "word": "pantry",
        "phonetic": "[ˈpæntri]",
        "meaning": "apartment or closet in which bread and other provisions are kept"
    },
    {
        "id": 3182,
        "word": "pants",
        "phonetic": "[pænts]",
        "meaning": "trousers; underwear; garment extending from waist to knee or ankle"
    },
    {
        "id": 3183,
        "word": "par",
        "phonetic": "[pɑː]",
        "meaning": "amount or level considered to be average; standard; equality of status, level, or value"
    },
    {
        "id": 3184,
        "word": "parachute",
        "phonetic": "[ˈpærəʃuːt]",
        "meaning": "rescue equipment consisting of a device that fills with air and retards your fall"
    },
    {
        "id": 3185,
        "word": "parade",
        "phonetic": "[pəˈreɪd]",
        "meaning": "march in a procession; ceremonial procession; visible display"
    },
    {
        "id": 3186,
        "word": "paradise",
        "phonetic": "[ˈpærədaɪs]",
        "meaning": "garden of Eden; any place of complete delight and peace"
    },
    {
        "id": 3187,
        "word": "paragraph",
        "phonetic": "[ˈpærəɡrɑːf]",
        "meaning": "distinct division of written or printed matter that begins on a new, usually indented line"
    },
    {
        "id": 3188,
        "word": "parallel",
        "phonetic": "[ˈpærəlɛl]",
        "meaning": "make or place something to another's side; of or relating to multiple operations at same time;"
    },
    {
        "id": 3190,
        "word": "paralyse",
        "phonetic": "[ˈpærᵊlaɪz]",
        "meaning": "make unable to move or act; impair the progress or functioning of"
    },
    {
        "id": 3191,
        "word": "parameter",
        "phonetic": "[pəˈræmɪtə]",
        "meaning": "characteristic or feature that distinguishes something from others"
    },
    {
        "id": 3192,
        "word": "parasite",
        "phonetic": "[ˈpærəsaɪt]",
        "meaning": "animal or plant living on another"
    },
    {
        "id": 3193,
        "word": "parliament",
        "phonetic": "[ˈpɑːlɪmənt]",
        "meaning": "discussion; formal conference on public affairs; general council, especially an assembly"
    },
    {
        "id": 3195,
        "word": "partial",
        "phonetic": "[ˈpɑːʃᵊl]",
        "meaning": "incomplete; fragmentary; favoring one person or side over another or others"
    },
    {
        "id": 3196,
        "word": "participant",
        "phonetic": "[pɑːˈtɪsɪpᵊnt]",
        "meaning": "people who take part in"
    },
    {
        "id": 3197,
        "word": "participate",
        "phonetic": "[pɑːˈtɪsɪpeɪt]",
        "meaning": "take part in something; share in something"
    },
    {
        "id": 3198,
        "word": "particle",
        "phonetic": "[ˈpɑːtɪkᵊl]",
        "meaning": "a tiny piece of anything"
    },
    {
        "id": 3199,
        "word": "partition",
        "phonetic": "[pɑːˈtɪʃᵊn]",
        "meaning": "divide into parts, pieces, or sections"
    },
    {
        "id": 3200,
        "word": "partner",
        "phonetic": "[ˈpɑːtnə]",
        "meaning": "person who is a member of a partnership; associate who works with others toward a"
    },
    {
        "id": 3202,
        "word": "passion",
        "phonetic": "[ˈpæʃᵊn]",
        "meaning": "strong feeling or emotion ; fervor"
    },
    {
        "id": 3203,
        "word": "passionate",
        "phonetic": "[ˈpæʃᵊnət]",
        "meaning": "zealous; enthusiastic; filled with or motivated by zeal"
    },
    {
        "id": 3204,
        "word": "passive",
        "phonetic": "[ˈpæsɪv]",
        "meaning": "lacking in energy or will; peacefully resistant in response to injustice"
    },
    {
        "id": 3205,
        "word": "passport",
        "phonetic": "[ˈpɑːspɔːt]",
        "meaning": "legal document identifying the bearer as citizen of a country and allowing to travel abroad"
    },
    {
        "id": 3206,
        "word": "pastime",
        "phonetic": "[ˈpɑːstaɪm]",
        "meaning": "something which amuses, and serves to make time pass agreeably; sport; amusement"
    },
    {
        "id": 3207,
        "word": "pasture",
        "phonetic": "[ˈpɑːsʧə]",
        "meaning": "field covered with grass; meadow"
    },
    {
        "id": 3208,
        "word": "patch",
        "phonetic": "[pæʧ]",
        "meaning": "a piece of cloth; small area of ground covered by specific vegetation"
    },
    {
        "id": 3209,
        "word": "patent",
        "phonetic": "[ˈpeɪtᵊnt]",
        "meaning": "open for the public to read; obvious; plain"
    },
    {
        "id": 3210,
        "word": "path",
        "phonetic": "[pɑːθ]",
        "meaning": "way; footway; course or track; route; passage"
    },
    {
        "id": 3211,
        "word": "pathetic",
        "phonetic": "[pəˈθɛtɪk]",
        "meaning": "causing sadness, compassion, or pity"
    },
    {
        "id": 3212,
        "word": "patriot",
        "phonetic": "[ˈpætriət]",
        "meaning": "one who loves and defends his or her country"
    },
    {
        "id": 3213,
        "word": "patriotic",
        "phonetic": "[ˌpætriˈɒtɪk]",
        "meaning": "inspired by love for one's country"
    },
    {
        "id": 3214,
        "word": "patriotism",
        "phonetic": "[ˈpætriətɪzᵊm]",
        "meaning": "love of country; devotion to welfare of one's country; virtues and actions of patriot"
    },
    {
        "id": 3215,
        "word": "patrol",
        "phonetic": "[pəˈtrəʊl]",
        "meaning": "activity of going on an area at regular intervals for security purposes"
    },
    {
        "id": 3216,
        "word": "patron",
        "phonetic": "[ˈpeɪtrən]",
        "meaning": "benefactor; regular customer"
    },
    {
        "id": 3217,
        "word": "patronage",
        "phonetic": "[ˈpætrənɪʤ]",
        "meaning": "sponsorship; support; state of being a sponsor"
    },
    {
        "id": 3218,
        "word": "pave",
        "phonetic": "[peɪv]",
        "meaning": "coat; cover"
    },
    {
        "id": 3219,
        "word": "pavement",
        "phonetic": "[ˈpeɪvmənt]",
        "meaning": "floor or covering of solid material, laid so as to make hard and convenient surface for"
    },
    {
        "id": 3221,
        "word": "pawn",
        "phonetic": "[pɔːn]",
        "meaning": "something given as security for loan; pledge or guaranty; article deposited as security"
    },
    {
        "id": 3222,
        "word": "peach",
        "phonetic": "[piːʧ]",
        "meaning": "small tree in Prunus persica widely cultivated at temperate regions, having pink flowers and"
    },
    {
        "id": 3224,
        "word": "peak",
        "phonetic": "[piːk]",
        "meaning": "summit; apex; maximum; prime"
    },
    {
        "id": 3225,
        "word": "pebble",
        "phonetic": "[ˈpɛbᵊl]",
        "meaning": "small smooth rounded rock"
    },
    {
        "id": 3226,
        "word": "peck",
        "phonetic": "[pɛk]",
        "meaning": "pick; hit lightly with a picking motion; eat like a bird"
    },
    {
        "id": 3227,
        "word": "peculiar",
        "phonetic": "[pɪˈkjuːliə]",
        "meaning": "special; characteristic; unusual; odd; bizarre"
    },
    {
        "id": 3228,
        "word": "peculiarity",
        "phonetic": "[pɪˌkjuːliˈærəti]",
        "meaning": "eccentricity; oddness; an odd or unusual characteristic; private ownership; proprietorship"
    },
    {
        "id": 3229,
        "word": "pedal",
        "phonetic": "[ˈpɛdᵊl]",
        "meaning": "foot-operated lever used for actuating or controlling a mechanism"
    },
    {
        "id": 3230,
        "word": "pedestrian",
        "phonetic": "[pɪˈdɛstriən]",
        "meaning": "lacking wit or imagination; ordinary"
    },
    {
        "id": 3231,
        "word": "peel",
        "phonetic": "[piːl]",
        "meaning": "come off in flakes or thin small pieces; strip the skin off; get undressed"
    },
    {
        "id": 3232,
        "word": "peer",
        "phonetic": "[pɪə]",
        "meaning": "gaze; stare; look searchingly; company with"
    },
    {
        "id": 3233,
        "word": "penalty",
        "phonetic": "[ˈpɛnᵊlti]",
        "meaning": "punishment established by law or authority for a crime or offense; fine"
    },
    {
        "id": 3234,
        "word": "pending",
        "phonetic": "[ˈpɛndɪŋ]",
        "meaning": "not yet decided or settled; awaiting conclusion or confirmation"
    },
    {
        "id": 3235,
        "word": "penetrate",
        "phonetic": "[ˈpɛnɪtreɪt]",
        "meaning": "pierce; go through; permeate"
    },
    {
        "id": 3236,
        "word": "penetration",
        "phonetic": "[ˌpɛnɪˈtreɪʃᵊn]",
        "meaning": "act or process of penetrating, piercing, or entering"
    },
    {
        "id": 3237,
        "word": "pension",
        "phonetic": "[ˈpɛnʃᵊn]",
        "meaning": "something paid or given; payment to a person in consideration of past services"
    },
    {
        "id": 3238,
        "word": "perceive",
        "phonetic": "[pəˈsiːv]",
        "meaning": "become aware of through the senses; detect"
    },
    {
        "id": 3239,
        "word": "percent",
        "phonetic": "[pəˈsɛnt]",
        "meaning": "out of each hundred; per hundred; one part in a hundred"
    },
    {
        "id": 3240,
        "word": "perception",
        "phonetic": "[pəˈsɛpʃᵊn]",
        "meaning": "understanding; feeling; effect or product of perceiving"
    },
    {
        "id": 3241,
        "word": "perch",
        "phonetic": "[pɜːʧ]",
        "meaning": "a place high up; an elevated place serving as a seat"
    },
    {
        "id": 3242,
        "word": "perfect",
        "phonetic": "[ˈpɜːfɛkt]",
        "meaning": "completed; not defective nor redundant; having all the properties or qualities; without flaw,"
    },
    {
        "id": 3244,
        "word": "perfection",
        "phonetic": "[pəˈfɛkʃᵊn]",
        "meaning": "flawlessness; excellence; state of being without flaw or defect"
    },
    {
        "id": 3245,
        "word": "perform",
        "phonetic": "[pəˈfɔːm]",
        "meaning": "carry through; bring to completion; achieve; accomplish; execute"
    },
    {
        "id": 3246,
        "word": "performance",
        "phonetic": "[pəˈfɔːməns]",
        "meaning": "act of performing; dramatic or musical entertainment; process or manner"
    },
    {
        "id": 3247,
        "word": "performer",
        "phonetic": "[pəˈfɔːmə]",
        "meaning": "entertainer; who performs or takes part in a play or performance of any kind"
    },
    {
        "id": 3248,
        "word": "perfume",
        "phonetic": "[ˈpɜːfjuːm]",
        "meaning": "pleasing, agreeable scent or odor"
    },
    {
        "id": 3249,
        "word": "peril",
        "phonetic": "[ˈpɛrɪl]",
        "meaning": "danger; risk; hazard; jeopardy; exposure of person or property to injury, loss, or destruction"
    },
    {
        "id": 3250,
        "word": "perimeter",
        "phonetic": "[pəˈrɪmɪtə]",
        "meaning": "outer boundary length; closed curve bounding a plane area"
    },
    {
        "id": 3251,
        "word": "period",
        "phonetic": "[ˈpɪəriəd]",
        "meaning": "duration, continuance, term; end of something"
    },
    {
        "id": 3252,
        "word": "periodic",
        "phonetic": "[ˌpɪəriˈɒdɪk]",
        "meaning": "repeated; recurring at intervals of time"
    },
    {
        "id": 3253,
        "word": "periodical",
        "phonetic": "[ˌpɪəriˈɒdɪkᵊl]",
        "meaning": "publication that appears at fixed intervals"
    },
    {
        "id": 3254,
        "word": "peripheral",
        "phonetic": "[pəˈrɪfᵊrᵊl]",
        "meaning": "located in outer boundary; unimportant; auxiliary"
    },
    {
        "id": 3255,
        "word": "perish",
        "phonetic": "[ˈpɛrɪʃ]",
        "meaning": "be destroyed; pass away; become nothing"
    },
    {
        "id": 3256,
        "word": "permanent",
        "phonetic": "[ˈpɜːmənənt]",
        "meaning": "remaining without essential change"
    },
    {
        "id": 3257,
        "word": "permission",
        "phonetic": "[pəˈmɪʃᵊn]",
        "meaning": "consent; approval to do something"
    },
    {
        "id": 3258,
        "word": "permissive",
        "phonetic": "[pəˈmɪsɪv]",
        "meaning": "approving; tolerant; granting; not strict in discipline"
    },
    {
        "id": 3259,
        "word": "permit",
        "phonetic": "[ˈpɜːmɪt]",
        "meaning": "consent to; give permission"
    },
    {
        "id": 3260,
        "word": "perpendicular",
        "phonetic": "[ˌpɜːpᵊnˈdɪkjələ]",
        "meaning": "vertical; upright; intersecting at or forming right angles; extremely steep"
    },
    {
        "id": 3261,
        "word": "perpetual",
        "phonetic": "[pəˈpɛʧuəl]",
        "meaning": "everlasting; continuing without interruption"
    },
    {
        "id": 3262,
        "word": "perplex",
        "phonetic": "[pəˈplɛks]",
        "meaning": "baffle; confuse"
    },
    {
        "id": 3263,
        "word": "persecute",
        "phonetic": "[ˈpɜːsɪkjuːt]",
        "meaning": "pursue in a manner to injure, grieve, or afflict; beset with cruelty or malignity; harass;"
    },
    {
        "id": 3265,
        "word": "persecution",
        "phonetic": "[ˌpɜːsɪˈkjuːʃᵊn]",
        "meaning": "act or practice of persecuting on the basis of race, religion, gender, sexual orientation,"
    },
    {
        "id": 3267,
        "word": "perseverance",
        "phonetic": "[ˌpɜːsɪˈvɪərᵊns]",
        "meaning": "endurance; steady persistence in adhering to a course of action"
    },
    {
        "id": 3268,
        "word": "persevere",
        "phonetic": "[ˌpɜːsɪˈvɪə]",
        "meaning": "endure; be persistent, refuse to stop"
    },
    {
        "id": 3269,
        "word": "persist",
        "phonetic": "[pəˈsɪst]",
        "meaning": "continue; insist; persevere"
    },
    {
        "id": 3270,
        "word": "persistence",
        "phonetic": "[pəˈsɪstᵊns]",
        "meaning": "endurance; tenacity; state or quality of being persistent; persistency"
    },
    {
        "id": 3271,
        "word": "personal",
        "phonetic": "[ˈpɜːsᵊnᵊl]",
        "meaning": "particular to a given individual; concerning or affecting a particular person"
    },
    {
        "id": 3272,
        "word": "personality",
        "phonetic": "[ˌpɜːsᵊnˈæləti]",
        "meaning": "complex of all the attributes of a person; totality of qualities and traits of a person"
    },
    {
        "id": 3273,
        "word": "personnel",
        "phonetic": "[ˌpɜːsᵊnˈɛl]",
        "meaning": "group of people willing to obey orders"
    },
    {
        "id": 3274,
        "word": "perspective",
        "phonetic": "[pəˈspɛktɪv]",
        "meaning": "appearance of things; view, outlook, or vista"
    },
    {
        "id": 3275,
        "word": "persuade",
        "phonetic": "[pəˈsweɪd]",
        "meaning": "advise; counsel; urge the acceptance or practice of; convince"
    },
    {
        "id": 3276,
        "word": "pertain",
        "phonetic": "[pɜːˈteɪn]",
        "meaning": "belong; have connection with, or dependence on"
    },
    {
        "id": 3277,
        "word": "pertinent",
        "phonetic": "[ˈpɜːtɪnənt]",
        "meaning": "having precise or logical relevance; pertaining or relating"
    },
    {
        "id": 3278,
        "word": "perturb",
        "phonetic": "[pəˈtɜːb]",
        "meaning": "disturb greatly; make uneasy or anxious; throw into great confusion"
    },
    {
        "id": 3279,
        "word": "peruse",
        "phonetic": "[pəˈruːz]",
        "meaning": "read or examine, typically with great care"
    },
    {
        "id": 3280,
        "word": "pest",
        "phonetic": "[pɛst]",
        "meaning": "persistently annoying person; organism that injures livestock or crops"
    },
    {
        "id": 3281,
        "word": "pet",
        "phonetic": "[pɛt]",
        "meaning": "animal kept for amusement or companionship"
    },
    {
        "id": 3282,
        "word": "petition",
        "phonetic": "[pəˈtɪʃᵊn]",
        "meaning": "plea; formal message requesting something"
    },
    {
        "id": 3283,
        "word": "petroleum",
        "phonetic": "[pəˈtrəʊliəm]",
        "meaning": "dark oil consisting mainly of hydrocarbons"
    },
    {
        "id": 3284,
        "word": "petty",
        "phonetic": "[ˈpɛti]",
        "meaning": "trivial; of small importance; very small"
    },
    {
        "id": 3285,
        "word": "phase",
        "phonetic": "[feɪz]",
        "meaning": "any distinct time period in a sequence of events; stage"
    },
    {
        "id": 3286,
        "word": "phenomenon",
        "phonetic": "[fəˈnɒmɪnən]",
        "meaning": "appearance; anything visible, in matter or spirit; extraordinary or very remarkable"
    },
    {
        "id": 3288,
        "word": "philosophy",
        "phonetic": "[fɪˈlɒsəfi]",
        "meaning": "body of highest truth; investigation of nature, causes, or principles of reality, knowledge,"
    },
    {
        "id": 3290,
        "word": "phonetics",
        "phonetic": "[fəʊˈnɛtɪks]",
        "meaning": "branch of acoustics concerned with speech processes including its production and"
    },
    {
        "id": 3292,
        "word": "photograph",
        "phonetic": "[ˈfəʊtəɡrɑːf]",
        "meaning": "picture or likeness obtained by photography"
    },
    {
        "id": 3293,
        "word": "phrase",
        "phonetic": "[freɪz]",
        "meaning": "brief expression, sometimes a single word, but usually two or more words forming an"
    },
    {
        "id": 3295,
        "word": "physical",
        "phonetic": "[ˈfɪzɪkᵊl]",
        "meaning": "relating to the body as distinguished from the mind or spirit"
    },
    {
        "id": 3296,
        "word": "physician",
        "phonetic": "[fɪˈzɪʃᵊn]",
        "meaning": "person skilled in physic, or the art of healing; one duty authorized to treat diseases; doctor"
    },
    {
        "id": 3298,
        "word": "piano",
        "phonetic": "[piˈænəʊ]",
        "meaning": "stringed instrument that is played by depressing keys"
    },
    {
        "id": 3299,
        "word": "pick",
        "phonetic": "[pɪk]",
        "meaning": "remove something with the fingers, or with the teeth; separate as choice or desirable"
    },
    {
        "id": 3300,
        "word": "picnic",
        "phonetic": "[ˈpɪknɪk]",
        "meaning": "eat in the open air; have informal meal eaten outside or on an excursion"
    },
    {
        "id": 3301,
        "word": "picturesque",
        "phonetic": "[ˌpɪkʧəˈrɛsk]",
        "meaning": "scenic; striking or interesting in an unusual way"
    },
    {
        "id": 3302,
        "word": "pier",
        "phonetic": "[pɪə]",
        "meaning": "landing place; platform built out from shore into water and supported by piles; provides access "
    },
    {
        "id": 3304,
        "word": "pigment",
        "phonetic": "[ˈpɪɡmənt]",
        "meaning": "substance used as coloring; dry coloring matter"
    },
    {
        "id": 3305,
        "word": "pile",
        "phonetic": "[paɪl]",
        "meaning": "large timber or post; heap; hair; fiber of wool, cotton; head of an arrow or spear"
    },
    {
        "id": 3306,
        "word": "pilgrim",
        "phonetic": "[ˈpɪlɡrɪm]",
        "meaning": "traveler; one who travels far, or in strange lands, to visit some holy place or shrine as a"
    },
    {
        "id": 3308,
        "word": "pill",
        "phonetic": "[pɪl]",
        "meaning": "a dose of medicine in the form of a small pellet; something that is unpleasant or offensive"
    },
    {
        "id": 3309,
        "word": "pillar",
        "phonetic": "[ˈpɪlə]",
        "meaning": "column; post"
    },
    {
        "id": 3310,
        "word": "pillow",
        "phonetic": "[ˈpɪləʊ]",
        "meaning": "a cushion to support the head of a sleeping person"
    },
    {
        "id": 3311,
        "word": "pilot",
        "phonetic": "[ˈpaɪlət]",
        "meaning": "one who guides a course of action for others; one who operates or is licensed to operate an"
    },
    {
        "id": 3313,
        "word": "pin",
        "phonetic": "[pɪn]",
        "meaning": "a piece of wood, metal, generally cylindrical, used for fastening separate articles together"
    },
    {
        "id": 3314,
        "word": "pinch",
        "phonetic": "[pɪnʧ]",
        "meaning": "clutch; squeeze between the thumb and a finger, the jaws of a tool, or other edges"
    },
    {
        "id": 3315,
        "word": "pine",
        "phonetic": "[paɪn]",
        "meaning": "have desire for something or someone; yearn; grieve or mourn for"
    },
    {
        "id": 3316,
        "word": "pineapple",
        "phonetic": "[ˈpaɪnæpᵊl]",
        "meaning": "large sweet fleshy tropical fruit with a terminal tuft of stiff leaves"
    },
    {
        "id": 3317,
        "word": "pioneer",
        "phonetic": "[ˌpaɪəˈnɪə]",
        "meaning": "originator; explorer"
    },
    {
        "id": 3318,
        "word": "pioneering",
        "phonetic": "[ˌpaɪəˈnɪərɪŋ]",
        "meaning": "initial; groundbreaking; originating; serving to pioneer"
    },
    {
        "id": 3319,
        "word": "pious",
        "phonetic": "[ˈpaɪəs]",
        "meaning": "devout; religious; exhibiting strict, traditional sense of virtue and morality"
    },
    {
        "id": 3320,
        "word": "pirate",
        "phonetic": "[ˈpaɪrət]",
        "meaning": "robber on seas; one who by open violence takes the property of another on seas"
    },
    {
        "id": 3321,
        "word": "pistol",
        "phonetic": "[ˈpɪstᵊl]",
        "meaning": "the smallest firearm used, intended to be fired from one hand"
    },
    {
        "id": 3322,
        "word": "piston",
        "phonetic": "[ˈpɪstᵊn]",
        "meaning": "sliding piece which either is moved by, or moves against"
    },
    {
        "id": 3323,
        "word": "pit",
        "phonetic": "[pɪt]",
        "meaning": "confront; set into opposition or rivalry"
    },
    {
        "id": 3324,
        "word": "pitch",
        "phonetic": "[pɪʧ]",
        "meaning": "action or manner of throwing something"
    },
    {
        "id": 3325,
        "word": "pitcher",
        "phonetic": "[ˈpɪʧə]",
        "meaning": "container for liquids, having a handle and a lip or spout for pouring; player who throws the"
    },
    {
        "id": 3327,
        "word": "plague",
        "phonetic": "[pleɪɡ]",
        "meaning": "epidemic disease with a high death rate; annoyance"
    },
    {
        "id": 3328,
        "word": "plain",
        "phonetic": "[pleɪn]",
        "meaning": "without elevations or depressions; flat; smooth; not rich; simple; without beauty; not handsome"
    },
    {
        "id": 3329,
        "word": "plane",
        "phonetic": "[pleɪn]",
        "meaning": "flat or level surface; level of development, existence, or achievement"
    },
    {
        "id": 3330,
        "word": "planet",
        "phonetic": "[ˈplænɪt]",
        "meaning": "celestial bodies that revolve around the sun"
    },
    {
        "id": 3331,
        "word": "plantation",
        "phonetic": "[plænˈteɪʃᵊn]",
        "meaning": "farm; an area under cultivation; a group of cultivated trees or plants"
    },
    {
        "id": 3332,
        "word": "plaster",
        "phonetic": "[ˈplɑːstə]",
        "meaning": "cover conspicuously, as by pasting something on; adhesive tape used in dressing wounds; a"
    },
    {
        "id": 3334,
        "word": "plastic",
        "phonetic": "[ˈplæstɪk]",
        "meaning": "capable of being molded; capable of being shaped or formed; easily influenced"
    },
    {
        "id": 3335,
        "word": "plate",
        "phonetic": "[pleɪt]",
        "meaning": "flat piece of metal; thick sheet of metal; small, usually circular, vessel of metal or wood for food"
    },
    {
        "id": 3337,
        "word": "plateau",
        "phonetic": "[ˈplætəʊ]",
        "meaning": "highland; upland; relatively flat highland"
    },
    {
        "id": 3338,
        "word": "platform",
        "phonetic": "[ˈplætfɔːm]",
        "meaning": "stage; a raised horizontal surface"
    },
    {
        "id": 3339,
        "word": "playwright",
        "phonetic": "[ˈpleɪraɪt]",
        "meaning": "someone who writes plays"
    },
    {
        "id": 3340,
        "word": "plea",
        "phonetic": "[pliː]",
        "meaning": "request for help; excuse or pretext"
    },
    {
        "id": 3341,
        "word": "plead",
        "phonetic": "[pliːd]",
        "meaning": "appeal or request earnestly; enter a plea; offer as an excuse"
    },
    {
        "id": 3342,
        "word": "pleasure",
        "phonetic": "[ˈplɛʒə]",
        "meaning": "agreeable sensations or emotions; excitement, relish, or happiness produced by the"
    },
    {
        "id": 3344,
        "word": "pledge",
        "phonetic": "[plɛʤ]",
        "meaning": "promise solemnly and formally; binding commitment to do something"
    },
    {
        "id": 3345,
        "word": "plight",
        "phonetic": "[plaɪt]",
        "meaning": "condition or state, especially a bad state or condition"
    },
    {
        "id": 3346,
        "word": "plot",
        "phonetic": "[plɒt]",
        "meaning": "small extent of ground; secret scheme or strategy"
    },
    {
        "id": 3347,
        "word": "plough",
        "phonetic": "[plaʊ]",
        "meaning": "plow"
    },
    {
        "id": 3348,
        "word": "pluck",
        "phonetic": "[plʌk]",
        "meaning": "pull or draw, especially, to pull with sudden force or effort, or to pull off or out from something"
    },
    {
        "id": 3349,
        "word": "plug",
        "phonetic": "[plʌɡ]",
        "meaning": "something, such as a cork or a wad of cloth, used to fill a hole tightly; stopper"
    },
    {
        "id": 3350,
        "word": "plumb",
        "phonetic": "[plʌm]",
        "meaning": "checking perpendicularity; exactly vertical"
    },
    {
        "id": 3351,
        "word": "plumber",
        "phonetic": "[ˈplʌmə]",
        "meaning": "craftsman who installs and repairs pipes and fixtures and appliances"
    },
    {
        "id": 3352,
        "word": "plume",
        "phonetic": "[pluːm]",
        "meaning": "feather, especially a soft, downy feather, or a long, conspicuous, or handsome feather; an"
    },
    {
        "id": 3354,
        "word": "plump",
        "phonetic": "[plʌmp]",
        "meaning": "sound of a sudden heavy fall; well-rounded and full in form"
    },
    {
        "id": 3355,
        "word": "plunder",
        "phonetic": "[ˈplʌndə]",
        "meaning": "take goods of by force, or without right; spoil; sack; strip; rob"
    },
    {
        "id": 3356,
        "word": "plunge",
        "phonetic": "[plʌnʤ]",
        "meaning": "dive; submerge; become suddenly lower; decrease dramatically; throw oneself into a"
    },
    {
        "id": 3358,
        "word": "plus",
        "phonetic": "[plʌs]",
        "meaning": "involving advantage or good; on the positive side or higher end of a scale"
    },
    {
        "id": 3359,
        "word": "ply",
        "phonetic": "[plaɪ]",
        "meaning": "bend; lay on closely, or in folds; work upon steadily, or with repeated acts; press upon"
    },
    {
        "id": 3360,
        "word": "pneumonia",
        "phonetic": "[njuːˈməʊniə]",
        "meaning": "inflammation of the lungs"
    },
    {
        "id": 3361,
        "word": "poke",
        "phonetic": "[pəʊk]",
        "meaning": "push at, as with a finger or an arm; search or look curiously; proceed in slow or lazy manner;"
    },
    {
        "id": 3363,
        "word": "polar",
        "phonetic": "[ˈpəʊlə]",
        "meaning": "pertaining to one of the poles of the earth; of the poles"
    },
    {
        "id": 3364,
        "word": "pole",
        "phonetic": "[pəʊl]",
        "meaning": "a long rod; one of two divergent or mutually exclusive opinions"
    },
    {
        "id": 3365,
        "word": "policy",
        "phonetic": "[ˈpɒləsi]",
        "meaning": "settled method of government to administer; system of public or official administration"
    },
    {
        "id": 3366,
        "word": "polish",
        "phonetic": "[ˈpɒlɪʃ]",
        "meaning": "remove flaws from; perfect or complete"
    },
    {
        "id": 3367,
        "word": "politics",
        "phonetic": "[ˈpɒlətɪks]",
        "meaning": "profession devoted to governing and political affairs; study of government of states and other"
    },
    {
        "id": 3369,
        "word": "poll",
        "phonetic": "[pəʊl]",
        "meaning": "voting; survey; number of votes cast or recorded"
    },
    {
        "id": 3370,
        "word": "pollute",
        "phonetic": "[pəˈluːt]",
        "meaning": "make impure; make unfit for or harmful to living things, especially by the addition of waste"
    },
    {
        "id": 3372,
        "word": "pollution",
        "phonetic": "[pəˈluːʃᵊn]",
        "meaning": "contamination; undesirable state of the natural environment being contaminated"
    },
    {
        "id": 3373,
        "word": "ponder",
        "phonetic": "[ˈpɒndə]",
        "meaning": "weigh; weigh in the mind; view with deliberation; examine carefully; consider attentively"
    },
    {
        "id": 3374,
        "word": "pony",
        "phonetic": "[ˈpəʊni]",
        "meaning": "small horse; small glass of beer; word for word translation of a foreign language text"
    },
    {
        "id": 3375,
        "word": "popcorn",
        "phonetic": "[ˈpɒpkɔːn]",
        "meaning": "small kernels of corn exploded by heat"
    },
    {
        "id": 3376,
        "word": "popular",
        "phonetic": "[ˈpɒpjələ]",
        "meaning": "of common people; suitable to common people; easy to be comprehended; not abstruse;"
    },
    {
        "id": 3378,
        "word": "popularity",
        "phonetic": "[ˌpɒpjəˈlærəti]",
        "meaning": "quality of being widely admired or accepted or sought after"
    },
    {
        "id": 3379,
        "word": "porcelain",
        "phonetic": "[ˈpɔːsᵊlɪn]",
        "meaning": "ceramic ware made of a more or less translucent ceramic"
    },
    {
        "id": 3380,
        "word": "porch",
        "phonetic": "[pɔːʧ]",
        "meaning": "covered and enclosed entrance to building; covered passage"
    },
    {
        "id": 3381,
        "word": "pore",
        "phonetic": "[pɔː]",
        "meaning": "gaze intently; stare; scrutinize; read or study carefully and attentively"
    },
    {
        "id": 3382,
        "word": "port",
        "phonetic": "[pɔːt]",
        "meaning": "place on waterway with facilities for loading and unloading ships"
    },
    {
        "id": 3383,
        "word": "portable",
        "phonetic": "[ˈpɔːtəbᵊl]",
        "meaning": "mobile; easily or conveniently transported"
    },
    {
        "id": 3384,
        "word": "portion",
        "phonetic": "[ˈpɔːʃᵊn]",
        "meaning": "section or quantity within a larger thing; a part of a whole"
    },
    {
        "id": 3385,
        "word": "portrait",
        "phonetic": "[ˈpɔːtrət]",
        "meaning": "portraiture; picture; likeness of a person, especially one showing the face"
    },
    {
        "id": 3386,
        "word": "portray",
        "phonetic": "[pɔːˈtreɪ]",
        "meaning": "depict; describe; draw"
    },
    {
        "id": 3387,
        "word": "pose",
        "phonetic": "[pəʊz]",
        "meaning": "pretend to be someone you are not; assume a posture as for artistic purposes"
    },
    {
        "id": 3388,
        "word": "positive",
        "phonetic": "[ˈpɒzətɪv]",
        "meaning": "involving advantage or good ; greater than zero; very sure; confident"
    },
    {
        "id": 3389,
        "word": "possess",
        "phonetic": "[pəˈzɛs]",
        "meaning": "occupy in person; hold or actually have in one's own keeping; have and hold; have the legal"
    },
    {
        "id": 3391,
        "word": "possession",
        "phonetic": "[pəˈzɛʃᵊn]",
        "meaning": "act of having and controlling property; belongings"
    },
    {
        "id": 3392,
        "word": "post",
        "phonetic": "[pəʊst]",
        "meaning": "display announcement in a place of public view; publish on a list"
    },
    {
        "id": 3393,
        "word": "postage",
        "phonetic": "[ˈpəʊstɪʤ]",
        "meaning": "token that postal fee has been paid; charge for mailing something"
    },
    {
        "id": 3394,
        "word": "postal",
        "phonetic": "[ˈpəʊstᵊl]",
        "meaning": "of or relating to the system for delivering mail"
    },
    {
        "id": 3395,
        "word": "postcard",
        "phonetic": "[ˈpəʊstkɑːd]",
        "meaning": "card for sending messages by post without an envelope"
    },
    {
        "id": 3396,
        "word": "posterity",
        "phonetic": "[pɒsˈtɛrəti]",
        "meaning": "descendants; future generations"
    },
    {
        "id": 3397,
        "word": "postpone",
        "phonetic": "[pəʊstˈpəʊn]",
        "meaning": "hold back to a later time; delay; defer"
    },
    {
        "id": 3398,
        "word": "postulate",
        "phonetic": "[ˈpɒsʧələt]",
        "meaning": "essential premise; underlying assumption"
    },
    {
        "id": 3399,
        "word": "pot",
        "phonetic": "[pɒt]",
        "meaning": "metallic or earthen vessel for boiling meat or vegetables, for holding liquids, or for plant"
    },
    {
        "id": 3400,
        "word": "potent",
        "phonetic": "[ˈpəʊtᵊnt]",
        "meaning": "powerful; having power to influence or convince; having great control or authority"
    },
    {
        "id": 3401,
        "word": "potential",
        "phonetic": "[pəˈtɛnʃᵊl]",
        "meaning": "existing in possibility; expected to become or be"
    },
    {
        "id": 3402,
        "word": "potentiality",
        "phonetic": "[pəˌtɛnʃiˈæləti]",
        "meaning": "inherent capacity for coming into being; an aptitude that may be developed"
    },
    {
        "id": 3403,
        "word": "poultry",
        "phonetic": "[ˈpəʊltri]",
        "meaning": "domestic fowls reared for eating, or for their eggs or feathers, such as cocks and hens,"
    },
    {
        "id": 3405,
        "word": "pound",
        "phonetic": "[paʊnd]",
        "meaning": "unit of weight equal to 16 ounces"
    },
    {
        "id": 3406,
        "word": "pour",
        "phonetic": "[pɔː]",
        "meaning": "flow in a spurt; rain heavily; supply in large amounts"
    },
    {
        "id": 3407,
        "word": "poverty",
        "phonetic": "[ˈpɒvəti]",
        "meaning": "lack of money; state of being poor; lack of the means of providing material needs or"
    },
    {
        "id": 3409,
        "word": "practicable",
        "phonetic": "[ˈpræktɪkəbᵊl]",
        "meaning": "feasible; capable of being effected, done, or put into practice"
    },
    {
        "id": 3410,
        "word": "practical",
        "phonetic": "[ˈpræktɪkᵊl]",
        "meaning": "based on experience; useful"
    },
    {
        "id": 3411,
        "word": "practically",
        "phonetic": "[ˈpræktɪkᵊli]",
        "meaning": "virtually; actually; for all practical purpose"
    },
    {
        "id": 3412,
        "word": "prairie",
        "phonetic": "[ˈpreəri]",
        "meaning": "treeless grassy plain; extensive area of flat or rolling"
    },
    {
        "id": 3413,
        "word": "preach",
        "phonetic": "[priːʧ]",
        "meaning": "advocate; speak, plead; argue in favor of"
    },
    {
        "id": 3414,
        "word": "precaution",
        "phonetic": "[prɪˈkɔːʃᵊn]",
        "meaning": "prevention; measure taken beforehand; act of foresight"
    },
    {
        "id": 3415,
        "word": "precede",
        "phonetic": "[prɪˈsiːd]",
        "meaning": "come before; antecede"
    },
    {
        "id": 3416,
        "word": "precedence",
        "phonetic": "[ˈprɛsɪdᵊns]",
        "meaning": "fact, state, or right of preceding; priority; previous occurrence, or existence before;"
    },
    {
        "id": 3418,
        "word": "precedent",
        "phonetic": "[ˈprɛsɪdᵊnt]",
        "meaning": "act or instance that may be used as example in subsequent similar cases"
    },
    {
        "id": 3419,
        "word": "preceding",
        "phonetic": "[prɪˈsiːdɪŋ]",
        "meaning": "ahead; prior to"
    },
    {
        "id": 3420,
        "word": "precious",
        "phonetic": "[ˈprɛʃəs]",
        "meaning": "of high worth or cost"
    },
    {
        "id": 3421,
        "word": "precise",
        "phonetic": "[prɪˈsaɪs]",
        "meaning": "exact; clearly expressed; accurate or correct"
    },
    {
        "id": 3422,
        "word": "precision",
        "phonetic": "[prɪˈsɪʒᵊn]",
        "meaning": "exactness; accuracy; number of significant digits to which a value has been reliably"
    },
    {
        "id": 3424,
        "word": "predecessor",
        "phonetic": "[ˈpriːdɪsɛsə]",
        "meaning": "former occupant of post; ancestor or forefather"
    },
    {
        "id": 3425,
        "word": "predict",
        "phonetic": "[prɪˈdɪkt]",
        "meaning": "state, tell about, or make known in advance, especially on the basis of special knowledge"
    },
    {
        "id": 3426,
        "word": "prediction",
        "phonetic": "[prɪˈdɪkʃᵊn]",
        "meaning": "something foretold or predicted; prophecy"
    },
    {
        "id": 3427,
        "word": "predominant",
        "phonetic": "[prɪˈdɒmɪnənt]",
        "meaning": "most frequent or common; having superior power and influence"
    },
    {
        "id": 3428,
        "word": "preface",
        "phonetic": "[ˈprɛfɪs]",
        "meaning": "something spoken as introductory to a discourse, or written as introductory to a book or"
    },
    {
        "id": 3430,
        "word": "preferable",
        "phonetic": "[ˈprɛfᵊrəbᵊl]",
        "meaning": "favored; better; more desirable or worthy than another; preferred"
    },
    {
        "id": 3431,
        "word": "preference",
        "phonetic": "[ˈprɛfᵊrᵊns]",
        "meaning": "a strong liking; favorite"
    },
    {
        "id": 3432,
        "word": "pregnancy",
        "phonetic": "[ˈprɛɡnənsi]",
        "meaning": "condition of being pregnant; fruitfulness; fertility"
    },
    {
        "id": 3433,
        "word": "pregnant",
        "phonetic": "[ˈprɛɡnənt]",
        "meaning": "expecting a baby; carrying within the body or being about to produce new life"
    },
    {
        "id": 3434,
        "word": "prejudice",
        "phonetic": "[ˈprɛʤədɪs]",
        "meaning": "opinion formed without due examination; leaning toward one side of a question"
    },
    {
        "id": 3435,
        "word": "preliminary",
        "phonetic": "[prɪˈlɪmɪnᵊri]",
        "meaning": "prior to or preparing for the main matter; introductory"
    },
    {
        "id": 3436,
        "word": "prelude",
        "phonetic": "[ˈprɛljuːd]",
        "meaning": "introduction; forerunner; preliminary or preface"
    },
    {
        "id": 3437,
        "word": "premature",
        "phonetic": "[ˈprɛməʧə]",
        "meaning": "too soon; too early; occurring before a state of readiness"
    },
    {
        "id": 3438,
        "word": "premium",
        "phonetic": "[ˈpriːmiəm]",
        "meaning": "having or reflecting superior quality or value"
    },
    {
        "id": 3439,
        "word": "prescribe",
        "phonetic": "[prɪˈskraɪb]",
        "meaning": "dictate; guide; advise the use of; assert a right; claim"
    },
    {
        "id": 3440,
        "word": "prescribed",
        "phonetic": "[prɪˈskraɪbd]",
        "meaning": "set down as a rule or guide; certain; stated"
    },
    {
        "id": 3441,
        "word": "prescription",
        "phonetic": "[prɪˈskrɪpʃᵊn]",
        "meaning": "written instructions from doctor; written order; act of establishing official rules, laws, or"
    },
    {
        "id": 3443,
        "word": "presence",
        "phonetic": "[ˈprɛzᵊns]",
        "meaning": "state of being present; current existence"
    },
    {
        "id": 3444,
        "word": "present",
        "phonetic": "[ˈprɛzᵊnt]",
        "meaning": "being in existence; something presented as a gift; period of time that is happening now"
    },
    {
        "id": 3445,
        "word": "presentation",
        "phonetic": "[ˌprɛzᵊnˈteɪʃᵊn]",
        "meaning": "show or display; act of presenting something to sight or view"
    },
    {
        "id": 3446,
        "word": "preservation",
        "phonetic": "[ˌprɛzəˈveɪʃᵊn]",
        "meaning": "conservation; protection"
    },
    {
        "id": 3447,
        "word": "preserve",
        "phonetic": "[prɪˈzɜːv]",
        "meaning": "uphold; retain; maintain in safety from injury, peril, or harm"
    },
    {
        "id": 3448,
        "word": "preside",
        "phonetic": "[prɪˈzaɪd]",
        "meaning": "be set, or to sit, in the place of authority; to occupy the place of president, chairman,"
    },
    {
        "id": 3450,
        "word": "press",
        "phonetic": "[prɛs]",
        "meaning": "machines or devices that apply pressure or print; collecting and publishing of news; journalism "
    },
    {
        "id": 3452,
        "word": "pressure",
        "phonetic": "[ˈprɛʃə]",
        "meaning": "stress; tension; condition of being pressed"
    },
    {
        "id": 3453,
        "word": "prestige",
        "phonetic": "[prɛsˈtiːʒ]",
        "meaning": "impression produced by achievements or reputation; recognized distinction or importance"
    },
    {
        "id": 3454,
        "word": "presumably",
        "phonetic": "[prɪˈzjuːməbli]",
        "meaning": "assumedly; supposedly"
    },
    {
        "id": 3455,
        "word": "presume",
        "phonetic": "[prɪˈzjuːm]",
        "meaning": "take for granted as true in absence of proof; venture without authority"
    },
    {
        "id": 3456,
        "word": "pretense",
        "phonetic": "[prɪˈtɛns]",
        "meaning": "act of giving a false appearance; imaginative intellectual play"
    },
    {
        "id": 3457,
        "word": "pretentious",
        "phonetic": "[prɪˈtɛnʃəs]",
        "meaning": "intended to attract notice and impress others; making unjustified claims; overly"
    },
    {
        "id": 3459,
        "word": "prevail",
        "phonetic": "[prɪˈveɪl]",
        "meaning": "induce; be greater in strength or influence; triumph; win out"
    },
    {
        "id": 3460,
        "word": "prevailing",
        "phonetic": "[prɪˈveɪlɪŋ]",
        "meaning": "most frequent; widespread; predominant"
    },
    {
        "id": 3461,
        "word": "prevalent",
        "phonetic": "[ˈprɛvᵊlənt]",
        "meaning": "widespread; widely or commonly occurring, existing, accepted"
    },
    {
        "id": 3462,
        "word": "previous",
        "phonetic": "[ˈpriːviəs]",
        "meaning": "existing or occurring before something else"
    },
    {
        "id": 3463,
        "word": "prey",
        "phonetic": "[preɪ]",
        "meaning": "target of a hunt; animal hunted or caught for food"
    },
    {
        "id": 3464,
        "word": "prick",
        "phonetic": "[prɪk]",
        "meaning": "penetrate or puncture by a sharp and slender thing"
    },
    {
        "id": 3465,
        "word": "primary",
        "phonetic": "[ˈpraɪmᵊri]",
        "meaning": "of first rank or importance or value; essential or basic"
    },
    {
        "id": 3466,
        "word": "prime",
        "phonetic": "[praɪm]",
        "meaning": "first in excellence, quality, or value; at the best stage; peak; first in degree or rank; chief"
    },
    {
        "id": 3467,
        "word": "primitive",
        "phonetic": "[ˈprɪmɪtɪv]",
        "meaning": "belonging to an early stage; simple or naive in style; primeval"
    },
    {
        "id": 3468,
        "word": "principal",
        "phonetic": "[ˈprɪnsəpᵊl]",
        "meaning": "highest in rank, authority, character, importance, or degree"
    },
    {
        "id": 3469,
        "word": "principle",
        "phonetic": "[ˈprɪnsəpᵊl]",
        "meaning": "basic truth or law or assumption; rule or law of nature; rule of personal conduct"
    },
    {
        "id": 3470,
        "word": "prior",
        "phonetic": "[ˈpraɪə]",
        "meaning": "preceding in the order of time; former; previous"
    },
    {
        "id": 3471,
        "word": "priority",
        "phonetic": "[praɪˈɒrəti]",
        "meaning": "preceding in time, importance, or urgency"
    },
    {
        "id": 3472,
        "word": "privacy",
        "phonetic": "[ˈprɪvəsi]",
        "meaning": "quality of being secluded from view of others; condition of being hidden"
    },
    {
        "id": 3473,
        "word": "privilege",
        "phonetic": "[ˈprɪvᵊlɪʤ]",
        "meaning": "special advantage or benefit not enjoyed by all; right reserved exclusively"
    },
    {
        "id": 3474,
        "word": "probe",
        "phonetic": "[prəʊb]",
        "meaning": "explore with tools; investigate; search"
    },
    {
        "id": 3475,
        "word": "problematic",
        "phonetic": "[ˌprɒblɪˈmætɪk]",
        "meaning": "open to doubt; unsettled; questionable; difficult to solve"
    },
    {
        "id": 3476,
        "word": "procedure",
        "phonetic": "[prəˈsiːʤə]",
        "meaning": "act or manner of moving forward; act performed; steps taken in an action"
    },
    {
        "id": 3477,
        "word": "proceed",
        "phonetic": "[prəˈsiːd]",
        "meaning": "follow a certain course; move ahead; travel onward"
    },
    {
        "id": 3478,
        "word": "proceeding",
        "phonetic": "[prəˈsiːdɪŋ]",
        "meaning": "a sequence of steps by which legal judgments are invoked"
    },
    {
        "id": 3479,
        "word": "proceeds",
        "phonetic": "[ˈprəʊsiːdz]",
        "meaning": "profit, money made from selling something; income arising from land or other property"
    },
    {
        "id": 3480,
        "word": "process",
        "phonetic": "[ˈprəʊsɛs]",
        "meaning": "act of proceeding; continued forward movement; a series of actions"
    },
    {
        "id": 3481,
        "word": "procession",
        "phonetic": "[prəˈsɛʃᵊn]",
        "meaning": "act of proceeding, moving on, advancing, or issuing; regular, orderly, or ceremonious"
    },
    {
        "id": 3483,
        "word": "proclaim",
        "phonetic": "[prəˈkleɪm]",
        "meaning": "declare; announce"
    },
    {
        "id": 3484,
        "word": "procure",
        "phonetic": "[prəˈkjʊə]",
        "meaning": "bring into possession; cause to accrue to, or to come into possession of; cause to come;"
    },
    {
        "id": 3486,
        "word": "produce",
        "phonetic": "[ˈprɒdjuːs]",
        "meaning": "bring forward; lead forth; offer to view or notice; exhibit; cause to be or to happen"
    },
    {
        "id": 3487,
        "word": "productive",
        "phonetic": "[prəˈdʌktɪv]",
        "meaning": "having quality or power of producing; yielding or furnishing results; causing to exist"
    },
    {
        "id": 3488,
        "word": "productivity",
        "phonetic": "[ˌprɒdʌkˈtɪvəti]",
        "meaning": "quality or state of being productive; productiveness."
    },
    {
        "id": 3489,
        "word": "profession",
        "phonetic": "[prəˈfɛʃᵊn]",
        "meaning": "occupation requiring special education"
    },
    {
        "id": 3490,
        "word": "professional",
        "phonetic": "[prəˈfɛʃᵊnᵊl]",
        "meaning": "engaged in, or suitable for a profession"
    },
    {
        "id": 3491,
        "word": "proficiency",
        "phonetic": "[prəˈfɪʃᵊnsi]",
        "meaning": "skillfulness in command of fundamentals deriving from practice and familiarity; expertise"
    },
    {
        "id": 3492,
        "word": "proficient",
        "phonetic": "[prəˈfɪʃᵊnt]",
        "meaning": "skilled; expert; having or showing knowledge and skill and aptitude"
    },
    {
        "id": 3493,
        "word": "profile",
        "phonetic": "[ˈprəʊfaɪl]",
        "meaning": "outline; biographical sketch"
    },
    {
        "id": 3494,
        "word": "profit",
        "phonetic": "[ˈprɒfɪt]",
        "meaning": "advantageous gain or return; income received from investments or property"
    },
    {
        "id": 3495,
        "word": "profound",
        "phonetic": "[prəˈfaʊnd]",
        "meaning": "deep; not superficial; far-reaching"
    },
    {
        "id": 3496,
        "word": "progress",
        "phonetic": "[ˈprəʊɡrɛs]",
        "meaning": "moving or going forward; proceeding onward; advance"
    },
    {
        "id": 3497,
        "word": "progressive",
        "phonetic": "[prəˈɡrɛsɪv]",
        "meaning": "forward-looking; advancing; incremental"
    },
    {
        "id": 3498,
        "word": "prohibit",
        "phonetic": "[prəˈhɪbɪt]",
        "meaning": "ban; taboo; forbid"
    },
    {
        "id": 3499,
        "word": "prohibitive",
        "phonetic": "[prəˈhɪbɪtɪv]",
        "meaning": "tending to discourage; prohibiting; forbidding"
    },
    {
        "id": 3500,
        "word": "project",
        "phonetic": "[ˈprɒʤɛkt]",
        "meaning": "any piece of work that is undertaken or attempted; program; plan; scheme"
    },
    {
        "id": 3501,
        "word": "projection",
        "phonetic": "[prəˈʤɛkʃᵊn]",
        "meaning": "plan for anticipated course of action; thing that extends outward beyond a prevailing line"
    },
    {
        "id": 3503,
        "word": "projector",
        "phonetic": "[prəˈʤɛktə]",
        "meaning": "optical device for projecting a beam of light"
    },
    {
        "id": 3504,
        "word": "proletarian",
        "phonetic": "[ˌprəʊlɪˈteəriən]",
        "meaning": "member of working class; blue collar person"
    },
    {
        "id": 3505,
        "word": "prolong",
        "phonetic": "[prəˈlɒŋ]",
        "meaning": "make longer; draw out; lengthen"
    },
    {
        "id": 3506,
        "word": "prominence",
        "phonetic": "[ˈprɒmɪnəns]",
        "meaning": "relative importance; property of being prominent; a standing out from the surface of"
    },
    {
        "id": 3508,
        "word": "prominent",
        "phonetic": "[ˈprɒmɪnənt]",
        "meaning": "conspicuous; immediately noticeable; sticking out; widely known"
    },
    {
        "id": 3509,
        "word": "promise",
        "phonetic": "[ˈprɒmɪs]",
        "meaning": "declaration assuring that one will or will not do something; indication of something favorable"
    },
    {
        "id": 3511,
        "word": "promising",
        "phonetic": "[ˈprɒmɪsɪŋ]",
        "meaning": "likely to develop in a desirable manner; affording hope"
    },
    {
        "id": 3512,
        "word": "promote",
        "phonetic": "[prəˈməʊt]",
        "meaning": "help to flourish; advance in rank; publicize"
    },
    {
        "id": 3513,
        "word": "prompt",
        "phonetic": "[prɒmpt]",
        "meaning": "move to act; incite; give rise to; assist with a reminder"
    },
    {
        "id": 3514,
        "word": "prone",
        "phonetic": "[prəʊn]",
        "meaning": "inclined; lying face downward; having a tendency"
    },
    {
        "id": 3515,
        "word": "proof",
        "phonetic": "[pruːf]",
        "meaning": "evidence; demonstration; statement or argument used in such a validation"
    },
    {
        "id": 3516,
        "word": "propaganda",
        "phonetic": "[ˌprɒpəˈɡændə]",
        "meaning": "organization or plan for spreading a particular doctrine or a system of principles"
    },
    {
        "id": 3517,
        "word": "propagate",
        "phonetic": "[ˈprɒpəɡeɪt]",
        "meaning": "cause something to multiply or breed; cause to extend to broader area or larger number"
    },
    {
        "id": 3518,
        "word": "propel",
        "phonetic": "[prəˈpɛl]",
        "meaning": "drive forward; cause to move forward or onward; push"
    },
    {
        "id": 3519,
        "word": "propeller",
        "phonetic": "[prəˈpɛlə]",
        "meaning": "machine for propelling an aircraft or boat; one who propels"
    },
    {
        "id": 3520,
        "word": "proper",
        "phonetic": "[ˈprɒpə]",
        "meaning": "belonging to one; one's own; individual; belonging to natural or essential constitution;"
    },
    {
        "id": 3522,
        "word": "property",
        "phonetic": "[ˈprɒpəti]",
        "meaning": "any tangible or intangible possession that is owned by someone"
    },
    {
        "id": 3523,
        "word": "prophet",
        "phonetic": "[ˈprɒfɪt]",
        "meaning": "one who speaks by divine inspiration or as the interpreter through whom the will of a god is"
    },
    {
        "id": 3525,
        "word": "proportion",
        "phonetic": "[prəˈpɔːʃᵊn]",
        "meaning": "percentage; quotient obtained when a part is divided by the whole; part considered in"
    },
    {
        "id": 3527,
        "word": "proposal",
        "phonetic": "[prəˈpəʊzᵊl]",
        "meaning": "something proposed; act of making a proposal; an offer of marriage"
    },
    {
        "id": 3528,
        "word": "propose",
        "phonetic": "[prəˈpəʊz]",
        "meaning": "make a proposal, declare a plan for something"
    },
    {
        "id": 3529,
        "word": "proposition",
        "phonetic": "[ˌprɒpəˈzɪʃᵊn]",
        "meaning": "plan suggested for acceptance; a matter to be dealt with; subject for discussion or"
    },
    {
        "id": 3531,
        "word": "proprietor",
        "phonetic": "[prəˈpraɪətə]",
        "meaning": "one who has legal title to something; owner"
    },
    {
        "id": 3532,
        "word": "proprietorship",
        "phonetic": "[prəˈpraɪətəʃɪp]",
        "meaning": "an unincorporated business owned by a single person who is responsible for its"
    },
    {
        "id": 3534,
        "word": "prose",
        "phonetic": "[prəʊz]",
        "meaning": "essay; ordinary speech or writing; commonplace expression or quality"
    },
    {
        "id": 3535,
        "word": "prosecute",
        "phonetic": "[ˈprɒsɪkjuːt]",
        "meaning": "seek to obtain or enforce by legal action; carry out or participate in an activity; be involved"
    },
    {
        "id": 3537,
        "word": "prosecutor",
        "phonetic": "[ˈprɒsɪkjuːtə]",
        "meaning": "one who carries out legal action, especially criminal proceedings; one who prosecutes"
    },
    {
        "id": 3539,
        "word": "prospect",
        "phonetic": "[ˈprɒspɛkt]",
        "meaning": "possibility of future success; belief about future"
    },
    {
        "id": 3540,
        "word": "prosperity",
        "phonetic": "[prɒsˈpɛrəti]",
        "meaning": "good fortune; financial success; physical well-being"
    },
    {
        "id": 3541,
        "word": "prosperous",
        "phonetic": "[ˈprɒspᵊrəs]",
        "meaning": "successful; thriving; having or characterized by financial success or good fortune"
    },
    {
        "id": 3542,
        "word": "protein",
        "phonetic": "[ˈprəʊtiːn]",
        "meaning": "any of a large group of nitrogenous organic compounds that are essential constituents of"
    },
    {
        "id": 3544,
        "word": "protest",
        "phonetic": "[ˈprəʊtɛst]",
        "meaning": "expression of disagreement and disapproval; complain against"
    },
    {
        "id": 3545,
        "word": "protocol",
        "phonetic": "[ˈprəʊtəkɒl]",
        "meaning": "code of correct conduct ; rules governing socially acceptable behavior; record of"
    },
    {
        "id": 3547,
        "word": "prototype",
        "phonetic": "[ˈprəʊtətaɪp]",
        "meaning": "original work used as a model; original type"
    },
    {
        "id": 3548,
        "word": "provincial",
        "phonetic": "[prəˈvɪnʃᵊl]",
        "meaning": "relating to a province; limited in outlook; unsophisticated"
    },
    {
        "id": 3549,
        "word": "provision",
        "phonetic": "[prəˈvɪʒᵊn]",
        "meaning": "stipulated condition; act of supplying or fitting out; something provided"
    },
    {
        "id": 3550,
        "word": "provisional",
        "phonetic": "[prəˈvɪʒᵊnᵊl]",
        "meaning": "temporary; provided for present need only"
    },
    {
        "id": 3551,
        "word": "provocation",
        "phonetic": "[ˌprɒvəˈkeɪʃᵊn]",
        "meaning": "unfriendly behavior that causes anger or resentment; aggravation"
    },
    {
        "id": 3552,
        "word": "provoke",
        "phonetic": "[prəˈvəʊk]",
        "meaning": "stir to anger; give rise to; stir to action or feeling"
    },
    {
        "id": 3553,
        "word": "prudence",
        "phonetic": "[ˈpruːdᵊns]",
        "meaning": "quality or state of being prudent; wisdom in the way of caution and provision; good"
    },
    {
        "id": 3555,
        "word": "prudent",
        "phonetic": "[ˈpruːdᵊnt]",
        "meaning": "cautious; careful in regard to one's own interests"
    },
    {
        "id": 3556,
        "word": "psychology",
        "phonetic": "[saɪˈkɒləʤi]",
        "meaning": "science that deals with mental processes and behavior"
    },
    {
        "id": 3557,
        "word": "publication",
        "phonetic": "[ˌpʌblɪˈkeɪʃᵊn]",
        "meaning": "act or process of publishing printed matter; communication of information to public"
    },
    {
        "id": 3558,
        "word": "publicity",
        "phonetic": "[pʌˈblɪsəti]",
        "meaning": "state of being public; information to attract public notice"
    },
    {
        "id": 3559,
        "word": "publish",
        "phonetic": "[ˈpʌblɪʃ]",
        "meaning": "make public; make known to mankind, or to people in general"
    },
    {
        "id": 3560,
        "word": "pull",
        "phonetic": "[pʊl]",
        "meaning": "steer or move into a certain direction; take away; remove from a fixed position; extract"
    },
    {
        "id": 3561,
        "word": "pulse",
        "phonetic": "[pʌls]",
        "meaning": "beat; rhythm; rate at which heart beats;"
    },
    {
        "id": 3562,
        "word": "pump",
        "phonetic": "[pʌmp]",
        "meaning": "draw fluid or gas by pressure or suction; supply in great quantities"
    },
    {
        "id": 3563,
        "word": "pumpkin",
        "phonetic": "[ˈpʌmpkɪn]",
        "meaning": "usually large pulpy deep-yellow round fruit of the squash family"
    },
    {
        "id": 3564,
        "word": "punch",
        "phonetic": "[pʌnʧ]",
        "meaning": "blow; drive forcibly; pierce; hit with a sharp blow of the fist"
    },
    {
        "id": 3565,
        "word": "punctual",
        "phonetic": "[ˈpʌŋkʧuəl]",
        "meaning": "consisting in a point; limited to a point; unexpended; precise"
    },
    {
        "id": 3566,
        "word": "pupil",
        "phonetic": "[ˈpjuːpᵊl]",
        "meaning": "a learner who is enrolled in an educational institution"
    },
    {
        "id": 3567,
        "word": "puppy",
        "phonetic": "[ˈpʌpi]",
        "meaning": "young dog; pup; doll; puppet"
    },
    {
        "id": 3568,
        "word": "purchase",
        "phonetic": "[ˈpɜːʧəs]",
        "meaning": "act or an instance of buying; something bought"
    },
    {
        "id": 3569,
        "word": "purify",
        "phonetic": "[ˈpjʊərɪfaɪ]",
        "meaning": "refine; make pure or free from sin or guilt; become clean"
    },
    {
        "id": 3570,
        "word": "purity",
        "phonetic": "[ˈpjʊərəti]",
        "meaning": "condition of being pure; freedom from foreign admixture or deleterious matter; cleanness"
    },
    {
        "id": 3571,
        "word": "purple",
        "phonetic": "[ˈpɜːpᵊl]",
        "meaning": "chromatic color between red and blue; belonging to or befitting a supreme ruler"
    },
    {
        "id": 3572,
        "word": "purse",
        "phonetic": "[pɜːs]",
        "meaning": "gather or contract into wrinkles or folds; contract one's lips into a rounded shape"
    },
    {
        "id": 3573,
        "word": "pursue",
        "phonetic": "[pəˈsjuː]",
        "meaning": "follow in; go in search of or hunt for"
    },
    {
        "id": 3574,
        "word": "pursuit",
        "phonetic": "[pəˈsjuːt]",
        "meaning": "follow after; follow with a view to obtain; endeavor to attain"
    },
    {
        "id": 3575,
        "word": "puzzle",
        "phonetic": "[ˈpʌzᵊl]",
        "meaning": "difficult question or problem"
    },
    {
        "id": 3576,
        "word": "pyramid",
        "phonetic": "[ˈpɪrəmɪd]",
        "meaning": "a massive memorial with a square base and four triangular sides; built as royal tombs in"
    },
    {
        "id": 3582,
        "word": "qualification",
        "phonetic": "[ˌkwɒlɪfɪˈkeɪʃᵊn]",
        "meaning": "an attribute that must be met"
    },
    {
        "id": 3583,
        "word": "qualified",
        "phonetic": "[ˈkwɒlɪfaɪd]",
        "meaning": "restricted; having the appropriate qualifications for an office, position, or task"
    },
    {
        "id": 3584,
        "word": "qualify",
        "phonetic": "[ˈkwɒlɪfaɪ]",
        "meaning": "make such as is required; give added or requisite qualities to; make legally capable"
    },
    {
        "id": 3585,
        "word": "qualitative",
        "phonetic": "[ˈkwɒlɪtətɪv]",
        "meaning": "relating to quality; having the character of quality"
    },
    {
        "id": 3586,
        "word": "quantitative",
        "phonetic": "[ˈkwɒntɪtətɪv]",
        "meaning": "expressed or expressible as a quantity; relating to measurement of quantity"
    },
    {
        "id": 3587,
        "word": "quarter",
        "phonetic": "[ˈkwɔːtə]",
        "meaning": "one of four equal parts; a fourth part or portion"
    },
    {
        "id": 3588,
        "word": "quarterly",
        "phonetic": "[ˈkwɔːtəli]",
        "meaning": "every three months; in three month intervals"
    },
    {
        "id": 3589,
        "word": "quartz",
        "phonetic": "[kwɔːts]",
        "meaning": "a hard glossy mineral consisting of silicon dioxide in crystal form"
    },
    {
        "id": 3590,
        "word": "quay",
        "phonetic": "[kiː]",
        "meaning": "dock; landing place; reinforced bank where ships are loaded or unloaded"
    },
    {
        "id": 3591,
        "word": "queer",
        "phonetic": "[kwɪə]",
        "meaning": "odd or unconventional, as in behavior; eccentric; mysterious; suspicious; questionable"
    },
    {
        "id": 3592,
        "word": "quench",
        "phonetic": "[kwɛnʧ]",
        "meaning": "put out a fire; extinguish; put an end to; destroy"
    },
    {
        "id": 3593,
        "word": "query",
        "phonetic": "[ˈkwɪəri]",
        "meaning": "inquiry; doubt in the mind; mental reservation"
    },
    {
        "id": 3594,
        "word": "quest",
        "phonetic": "[kwɛst]",
        "meaning": "act of searching for something"
    },
    {
        "id": 3595,
        "word": "questionnaire",
        "phonetic": "[ˌkwɛstɪəˈneə]",
        "meaning": "form containing a set of questions; submitted to people to gain statistical information"
    },
    {
        "id": 3596,
        "word": "quilt",
        "phonetic": "[kwɪlt]",
        "meaning": "bedding made of two layers of cloth filled with stuffing"
    },
    {
        "id": 3597,
        "word": "quiver",
        "phonetic": "[ˈkwɪvə]",
        "meaning": "shake with slight, rapid, tremulous movement"
    },
    {
        "id": 3598,
        "word": "quota",
        "phonetic": "[ˈkwəʊtə]",
        "meaning": "limitation on imports; ration; prescribed number"
    },
    {
        "id": 3599,
        "word": "quotation",
        "phonetic": "[kwəʊˈteɪʃᵊn]",
        "meaning": "passage or expression that is quoted or cited; practice of quoting from books"
    },
    {
        "id": 3600,
        "word": "quote",
        "phonetic": "[kwəʊt]",
        "meaning": "cite or repeat a passage from; repeat or copy the words of another"
    },
    {
        "id": 3605,
        "word": "rack",
        "phonetic": "[ræk]",
        "meaning": "framework for holding objects"
    },
    {
        "id": 3606,
        "word": "racket",
        "phonetic": "[ˈrækɪt]",
        "meaning": "thin strip of wood, having the ends brought together, forming elliptical hoop, across which a"
    },
    {
        "id": 3609,
        "word": "radar",
        "phonetic": "[ˈreɪdə]",
        "meaning": "measuring instrument to detect distant objects by microwave"
    },
    {
        "id": 3610,
        "word": "radiant",
        "phonetic": "[ˈreɪdiənt]",
        "meaning": "brilliant; delighted"
    },
    {
        "id": 3611,
        "word": "radiate",
        "phonetic": "[ˈreɪdiɪt]",
        "meaning": "spread out; effuse; issue or emerge in rays or waves"
    },
    {
        "id": 3612,
        "word": "radiation",
        "phonetic": "[ˌreɪdiˈeɪʃᵊn]",
        "meaning": "very small particles of a radioactive substance that can cause illness or death"
    },
    {
        "id": 3613,
        "word": "radical",
        "phonetic": "[ˈrædɪkᵊl]",
        "meaning": "drastic; extreme; arising from or going to a root or source; basic"
    },
    {
        "id": 3614,
        "word": "radius",
        "phonetic": "[ˈreɪdiəs]",
        "meaning": "right line drawn or extending from the center of a circle to the periphery"
    },
    {
        "id": 3615,
        "word": "rage",
        "phonetic": "[reɪʤ]",
        "meaning": "something that is desired intensely; state of extreme anger"
    },
    {
        "id": 3616,
        "word": "raid",
        "phonetic": "[reɪd]",
        "meaning": "search without warning; surprise attack by a small armed force"
    },
    {
        "id": 3617,
        "word": "rail",
        "phonetic": "[reɪl]",
        "meaning": "scold; express objections or criticisms in bitter, harsh, or abusive language"
    },
    {
        "id": 3618,
        "word": "rainbow",
        "phonetic": "[ˈreɪnbəʊ]",
        "meaning": "arc of colored light in sky caused by refraction of the sun's rays by rain"
    },
    {
        "id": 3619,
        "word": "rally",
        "phonetic": "[ˈræli]",
        "meaning": "call up or summon; call together for a common purpose"
    },
    {
        "id": 3620,
        "word": "ramble",
        "phonetic": "[ˈræmbᵊl]",
        "meaning": "wander aimlessly; move about aimlessly; walk about casually or for pleasure"
    },
    {
        "id": 3621,
        "word": "ranch",
        "phonetic": "[rɑːnʧ]",
        "meaning": "farm consisting of a large tract of land"
    },
    {
        "id": 3622,
        "word": "random",
        "phonetic": "[ˈrændəm]",
        "meaning": "without definite purpose, plan, or aim; having no specific pattern"
    },
    {
        "id": 3623,
        "word": "range",
        "phonetic": "[reɪnʤ]",
        "meaning": "limits within which something can be effective; variety of different things or activities"
    },
    {
        "id": 3624,
        "word": "rank",
        "phonetic": "[ræŋk]",
        "meaning": "hold a particular position in a social hierarchy; form or stand in a row or rows"
    },
    {
        "id": 3625,
        "word": "rapture",
        "phonetic": "[ˈræpʧə]",
        "meaning": "seizing by violence; hurrying along; rapidity with violence; state or condition of being rapt, or"
    },
    {
        "id": 3627,
        "word": "rare",
        "phonetic": "[reə]",
        "meaning": "scarce; infrequently occurring; uncommon"
    },
    {
        "id": 3628,
        "word": "rarely",
        "phonetic": "[ˈreəli]",
        "meaning": "not often; in an unusual degree; exceptionally"
    },
    {
        "id": 3629,
        "word": "rat",
        "phonetic": "[ræt]",
        "meaning": "any of various long tailed rodents, similar to but larger than mouse"
    },
    {
        "id": 3630,
        "word": "ratify",
        "phonetic": "[ˈrætɪfaɪ]",
        "meaning": "approve formally; confirm; verify"
    },
    {
        "id": 3631,
        "word": "ratio",
        "phonetic": "[ˈreɪʃiəʊ]",
        "meaning": "relation which one quantity or magnitude has to another of the same kind; rate; proportion"
    },
    {
        "id": 3632,
        "word": "ration",
        "phonetic": "[ˈræʃᵊn]",
        "meaning": "allotment; allowance; portion; allot; distribute in rations"
    },
    {
        "id": 3633,
        "word": "rational",
        "phonetic": "[ˈræʃᵊnᵊl]",
        "meaning": "consistent with; based on; using reason"
    },
    {
        "id": 3634,
        "word": "rattle",
        "phonetic": "[ˈrætᵊl]",
        "meaning": "a rapid series of short loud sounds; loosely connected horny sections"
    },
    {
        "id": 3635,
        "word": "ravage",
        "phonetic": "[ˈrævɪʤ]",
        "meaning": "bring heavy destruction on; devastate"
    },
    {
        "id": 3636,
        "word": "raw",
        "phonetic": "[rɔː]",
        "meaning": "in the natural unprocessed condition; cruel and unfair; uncooked; untrained and inexperienced"
    },
    {
        "id": 3637,
        "word": "ray",
        "phonetic": "[reɪ]",
        "meaning": "one of a number of lines diverging from a point; a line of light or heat proceeding from a point"
    },
    {
        "id": 3638,
        "word": "razor",
        "phonetic": "[ˈreɪzə]",
        "meaning": "sharp-edged cutting instrument used especially for shaving the face or other body parts"
    },
    {
        "id": 3639,
        "word": "react",
        "phonetic": "[riˈækt]",
        "meaning": "act against or in opposition to; show a response or a reaction"
    },
    {
        "id": 3640,
        "word": "reactionary",
        "phonetic": "[riˈækʃᵊnᵊri]",
        "meaning": "opposition to progress or liberalism; extremely conservative"
    },
    {
        "id": 3641,
        "word": "readily",
        "phonetic": "[ˈrɛdɪli]",
        "meaning": "easily; quickly; in a prompt, timely manner; promptly"
    },
    {
        "id": 3642,
        "word": "realization",
        "phonetic": "[ˌrɪəlaɪˈzeɪʃᵊn]",
        "meaning": "fulfillment; awareness; coming to understand something clearly and distinctly"
    },
    {
        "id": 3643,
        "word": "realm",
        "phonetic": "[rɛlm]",
        "meaning": "kingdom; domain ruled by a king or queen"
    },
    {
        "id": 3644,
        "word": "reap",
        "phonetic": "[riːp]",
        "meaning": "gain; harvest a crop from; get or derive; obtain as a result of effort"
    },
    {
        "id": 3645,
        "word": "rear",
        "phonetic": "[rɪə]",
        "meaning": "side of an object that is opposite its front; hind part; point or area farthest from the front"
    },
    {
        "id": 3646,
        "word": "reasonable",
        "phonetic": "[ˈriːzᵊnəbᵊl]",
        "meaning": "showing reason or sound judgment; capable of reasoning; rational; being within bounds"
    },
    {
        "id": 3648,
        "word": "reassure",
        "phonetic": "[ˌriːəˈʃɔː]",
        "meaning": "give or restore confidence in; cause to feel sure or certain"
    },
    {
        "id": 3649,
        "word": "rebel",
        "phonetic": "[ˈrɛbᵊl]",
        "meaning": "one who takes part in an armed group against the constituted authority; revolt;"
    },
    {
        "id": 3650,
        "word": "rebellion",
        "phonetic": "[rɪˈbɛliən]",
        "meaning": "organized opposition to authority"
    },
    {
        "id": 3651,
        "word": "rebuke",
        "phonetic": "[rɪˈbjuːk]",
        "meaning": "scold harshly; criticize severely"
    },
    {
        "id": 3652,
        "word": "recall",
        "phonetic": "[rɪˈkɔːl]",
        "meaning": "remember; call back; cause to be returned"
    },
    {
        "id": 3653,
        "word": "recede",
        "phonetic": "[rɪˈsiːd]",
        "meaning": "move back; retreat; withdraw a claim or pretension"
    },
    {
        "id": 3654,
        "word": "receipt",
        "phonetic": "[rɪˈsiːt]",
        "meaning": "act of receiving; acknowledgment of goods delivered or money paid"
    },
    {
        "id": 3655,
        "word": "reception",
        "phonetic": "[rɪˈsɛpʃᵊn]",
        "meaning": "act of receiving; manner in which something is greeted"
    },
    {
        "id": 3656,
        "word": "receptionist",
        "phonetic": "[rɪˈsɛpʃᵊnɪst]",
        "meaning": "secretary whose main duty is to answer the telephone and receive visitors"
    },
    {
        "id": 3657,
        "word": "recession",
        "phonetic": "[rɪˈsɛʃᵊn]",
        "meaning": "withdrawal; retreat; time of low economic activity"
    },
    {
        "id": 3658,
        "word": "recipe",
        "phonetic": "[ˈrɛsɪpi]",
        "meaning": "medical prescription; a set of directions for making or preparing something, especially food"
    },
    {
        "id": 3659,
        "word": "recipient",
        "phonetic": "[rɪˈsɪpiənt]",
        "meaning": "receiver; one that receives or is receptive"
    },
    {
        "id": 3660,
        "word": "reciprocal",
        "phonetic": "[rɪˈsɪprəkᵊl]",
        "meaning": "concerning each of two or more persons or things; exchangeable; interacting"
    },
    {
        "id": 3661,
        "word": "recite",
        "phonetic": "[rɪˈsaɪt]",
        "meaning": "repeat, as something already prepared, written down, committed to memory; rehearse, as a"
    },
    {
        "id": 3663,
        "word": "reckless",
        "phonetic": "[ˈrɛkləs]",
        "meaning": "headstrong; rash; indifferent to or disregardful of consequences"
    },
    {
        "id": 3664,
        "word": "reckon",
        "phonetic": "[ˈrɛkᵊn]",
        "meaning": "compute; take account of; have faith or confidence in"
    },
    {
        "id": 3665,
        "word": "reclaim",
        "phonetic": "[rɪˈkleɪm]",
        "meaning": "bring into or return to a suitable condition for use; claim back; make useful again"
    },
    {
        "id": 3666,
        "word": "recognition",
        "phonetic": "[ˌrɛkəɡˈnɪʃᵊn]",
        "meaning": "acceptance ; appreciation; approval"
    },
    {
        "id": 3667,
        "word": "recognize",
        "phonetic": "[ˈrɛkəɡnaɪz]",
        "meaning": "perceive the identity of; consent or admit with a formal acknowledgment; show"
    },
    {
        "id": 3669,
        "word": "recollection",
        "phonetic": "[ˌrɛkəˈlɛkʃᵊn]",
        "meaning": "memory; remembrance; power of recalling ideas to the mind"
    },
    {
        "id": 3670,
        "word": "recommend",
        "phonetic": "[ˌrɛkəˈmɛnd]",
        "meaning": "suggest; bestow commendation on; represent favorably"
    },
    {
        "id": 3671,
        "word": "recommendation",
        "phonetic": "[ˌrɛkəmɛnˈdeɪʃᵊn]",
        "meaning": "making attractive or acceptable; pushing for something"
    },
    {
        "id": 3672,
        "word": "recompense",
        "phonetic": "[ˈrɛkəmpɛns]",
        "meaning": "render an equivalent to, for service, loss; requite; remunerate; compensate; give in"
    },
    {
        "id": 3674,
        "word": "reconcile",
        "phonetic": "[ˈrɛkᵊnsaɪl]",
        "meaning": "correct inconsistencies; become friendly after a quarrel; become compatible or consistent"
    },
    {
        "id": 3675,
        "word": "reconnaissance",
        "phonetic": "[rɪˈkɒnɪsᵊns]",
        "meaning": "gain information about enemy; inspection or exploration of an area"
    },
    {
        "id": 3676,
        "word": "recourse",
        "phonetic": "[rɪˈkɔːs]",
        "meaning": "one that is turned or applied to for aid or security; resort for help or protection; access or"
    },
    {
        "id": 3678,
        "word": "recover",
        "phonetic": "[rɪˈkʌvə]",
        "meaning": "get or find back; regain a former condition"
    },
    {
        "id": 3679,
        "word": "recreation",
        "phonetic": "[ˌrɛkriˈeɪʃᵊn]",
        "meaning": "amusement; entertainment"
    },
    {
        "id": 3680,
        "word": "recruit",
        "phonetic": "[rɪˈkruːt]",
        "meaning": "enlist; register formally as a participant; engage for military service"
    },
    {
        "id": 3681,
        "word": "rectangle",
        "phonetic": "[ˈrɛktæŋɡᵊl]",
        "meaning": "a parallelogram with four right angles"
    },
    {
        "id": 3682,
        "word": "rectify",
        "phonetic": "[ˈrɛktɪfaɪ]",
        "meaning": "set right; correct by calculation or adjustment"
    },
    {
        "id": 3683,
        "word": "recur",
        "phonetic": "[rɪˈkɜː]",
        "meaning": "reappear; happen or occur again"
    },
    {
        "id": 3684,
        "word": "recurrence",
        "phonetic": "[rɪˈkʌrəns]",
        "meaning": "act of recurring, or state of being recurrent; return"
    },
    {
        "id": 3685,
        "word": "redeem",
        "phonetic": "[rɪˈdiːm]",
        "meaning": "purchase back; regain possession of by payment; ransom or rescue from captivity; pay"
    },
    {
        "id": 3687,
        "word": "reed",
        "phonetic": "[riːd]",
        "meaning": "tall woody perennial grasses with hollow slender stems"
    },
    {
        "id": 3688,
        "word": "reef",
        "phonetic": "[riːf]",
        "meaning": "chain or range of rocks lying at or near the surface of the water"
    },
    {
        "id": 3689,
        "word": "reel",
        "phonetic": "[riːl]",
        "meaning": "frame with radial arms, or a kind of spool, turning on axis, on which threads or lines are wound"
    },
    {
        "id": 3690,
        "word": "referee",
        "phonetic": "[ˌrɛfəˈriː]",
        "meaning": "someone to investigate and report on a case or to ensure fair play"
    },
    {
        "id": 3691,
        "word": "reference",
        "phonetic": "[ˈrɛfᵊrᵊns]",
        "meaning": "act of referring or consulting; remark that calls attention to something or someone"
    },
    {
        "id": 3692,
        "word": "refine",
        "phonetic": "[rɪˈfaɪn]",
        "meaning": "purify; make more precise; improve"
    },
    {
        "id": 3693,
        "word": "refined",
        "phonetic": "[rɪˈfaɪnd]",
        "meaning": "cultured; purified; made pure"
    },
    {
        "id": 3694,
        "word": "refinement",
        "phonetic": "[rɪˈfaɪnmənt]",
        "meaning": "result of improving something; process of removing impurities"
    },
    {
        "id": 3695,
        "word": "reflect",
        "phonetic": "[rɪˈflɛkt]",
        "meaning": "throw or bend back light from a surface; give back or show an image of; mirror"
    },
    {
        "id": 3696,
        "word": "reflection",
        "phonetic": "[rɪˈflɛkʃᵊn]",
        "meaning": "image of something as reflected by mirror; remark expressing careful consideration"
    },
    {
        "id": 3697,
        "word": "refrain",
        "phonetic": "[rɪˈfreɪn]",
        "meaning": "abstain from; resist; hold oneself back"
    },
    {
        "id": 3698,
        "word": "refreshment",
        "phonetic": "[rɪˈfrɛʃmənt]",
        "meaning": "activity that refreshes and recreates; snacks and drinks served as a light meal"
    },
    {
        "id": 3699,
        "word": "refrigerator",
        "phonetic": "[rɪˈfrɪʤᵊreɪtə]",
        "meaning": "machines in which food can be stored at low temperatures"
    },
    {
        "id": 3700,
        "word": "refugee",
        "phonetic": "[ˌrɛfjʊˈʤiː]",
        "meaning": "one who flees to shelter, or place of safety"
    },
    {
        "id": 3701,
        "word": "refund",
        "phonetic": "[ˈriːfʌnd]",
        "meaning": "repayment of fund; an amount repaid"
    },
    {
        "id": 3702,
        "word": "refusal",
        "phonetic": "[rɪˈfjuːzᵊl]",
        "meaning": "act of refusing; denial of anything demanded"
    },
    {
        "id": 3703,
        "word": "refute",
        "phonetic": "[rɪˈfjuːt]",
        "meaning": "disprove; prove to be false or incorrect"
    },
    {
        "id": 3704,
        "word": "regarding",
        "phonetic": "[rɪˈɡɑːdɪŋ]",
        "meaning": "with respect to; by concerning"
    },
    {
        "id": 3705,
        "word": "regardless",
        "phonetic": "[rɪˈɡɑːdləs]",
        "meaning": "without consideration; in spite of everything; anyway"
    },
    {
        "id": 3706,
        "word": "regime",
        "phonetic": "[reɪˈʒiːm]",
        "meaning": "form of government; government in power; administration; prevailing social system or pattern"
    },
    {
        "id": 3707,
        "word": "regiment",
        "phonetic": "[ˈrɛʤɪmənt]",
        "meaning": "government; mode of ruling; rule; authority"
    },
    {
        "id": 3708,
        "word": "region",
        "phonetic": "[ˈriːʤᵊn]",
        "meaning": "province; district; tract; neighborhood; the upper air; sky or heavens; inhabitants of a district"
    },
    {
        "id": 3709,
        "word": "register",
        "phonetic": "[ˈrɛʤɪstə]",
        "meaning": "give outward signs of; express; record in writing; enroll as a student"
    },
    {
        "id": 3710,
        "word": "regulate",
        "phonetic": "[ˈrɛɡjəleɪt]",
        "meaning": "bring into conformity with rules or principles or usage; impose regulations; fix or adjust the"
    },
    {
        "id": 3712,
        "word": "regulation",
        "phonetic": "[ˌrɛɡjəˈleɪʃᵊn]",
        "meaning": "act of controlling or directing according to rule; prescribed by or according to rule"
    },
    {
        "id": 3713,
        "word": "rehearsal",
        "phonetic": "[rəˈhɜːsᵊl]",
        "meaning": "act of rehearsing; exercise or practice to prepare for a public performance"
    },
    {
        "id": 3714,
        "word": "rehearse",
        "phonetic": "[rɪˈhɜːs]",
        "meaning": "practice; drill; engage in preparation for a public performance"
    },
    {
        "id": 3715,
        "word": "reign",
        "phonetic": "[reɪn]",
        "meaning": "sovereignty; rule; dominance or widespread influence"
    },
    {
        "id": 3716,
        "word": "reimburse",
        "phonetic": "[ˌriːɪmˈbɜːs]",
        "meaning": "pay back for some expense incurred"
    },
    {
        "id": 3717,
        "word": "rein",
        "phonetic": "[reɪn]",
        "meaning": "strap or rope attached to the bridle or bit, used to control a horse or other animal; instrument or"
    },
    {
        "id": 3719,
        "word": "reinforce",
        "phonetic": "[ˌriːɪnˈfɔːs]",
        "meaning": "give more force or effectiveness to; strengthen; enhance"
    },
    {
        "id": 3720,
        "word": "reiterate",
        "phonetic": "[riːˈɪtəreɪt]",
        "meaning": "say, state, or perform again or repeatedly"
    },
    {
        "id": 3721,
        "word": "reject",
        "phonetic": "[ˈriːʤɛkt]",
        "meaning": "turn down; refuse to accept; dismiss from consideration"
    },
    {
        "id": 3722,
        "word": "rejection",
        "phonetic": "[rɪˈʤɛkʃᵊn]",
        "meaning": "act of rejecting something"
    },
    {
        "id": 3723,
        "word": "rejoice",
        "phonetic": "[rɪˈʤɔɪs]",
        "meaning": "feel joy; experience gladness in a high degree; have pleasurable satisfaction; be delighted;"
    },
    {
        "id": 3725,
        "word": "relax",
        "phonetic": "[rɪˈlæks]",
        "meaning": "make less severe or strict; become less tense"
    },
    {
        "id": 3726,
        "word": "relaxation",
        "phonetic": "[ˌriːlækˈseɪʃᵊn]",
        "meaning": "state of refreshing tranquility; act of making less strict"
    },
    {
        "id": 3727,
        "word": "relay",
        "phonetic": "[ˌrɪˈleɪ]",
        "meaning": "act of passing something along from one person, group, or station to another"
    },
    {
        "id": 3728,
        "word": "release",
        "phonetic": "[rɪˈliːs]",
        "meaning": "give off; liberate; grant freedom to; make something available"
    },
    {
        "id": 3729,
        "word": "relevant",
        "phonetic": "[ˈrɛləvᵊnt]",
        "meaning": "pertinent; having connection with matter at hand"
    },
    {
        "id": 3730,
        "word": "reliability",
        "phonetic": "[rɪˌlaɪəˈbɪləti]",
        "meaning": "trait of being dependable or reliable"
    },
    {
        "id": 3731,
        "word": "reliable",
        "phonetic": "[rɪˈlaɪəbᵊl]",
        "meaning": "worthy of being depended on; trustworthy"
    },
    {
        "id": 3732,
        "word": "reliance",
        "phonetic": "[rɪˈlaɪəns]",
        "meaning": "dependence; certainty based on past experience"
    },
    {
        "id": 3733,
        "word": "relief",
        "phonetic": "[rɪˈliːf]",
        "meaning": "easing of burden or distress, such as pain or anxiety; release from post or duty; pleasant or"
    },
    {
        "id": 3735,
        "word": "relieve",
        "phonetic": "[rɪˈliːv]",
        "meaning": "free from a burden; alleviate; save from ruin"
    },
    {
        "id": 3736,
        "word": "religion",
        "phonetic": "[rɪˈlɪʤᵊn]",
        "meaning": "belief in supernatural power regarded as creator and governor of the universe"
    },
    {
        "id": 3737,
        "word": "religious",
        "phonetic": "[rɪˈlɪʤəs]",
        "meaning": "of religion; concerned with religion; having or showing belief in and reverence for God or a"
    },
    {
        "id": 3739,
        "word": "relinquish",
        "phonetic": "[rɪˈlɪŋkwɪʃ]",
        "meaning": "give up something with reluctance; retire from; give up or abandon"
    },
    {
        "id": 3740,
        "word": "relish",
        "phonetic": "[ˈrɛlɪʃ]",
        "meaning": "take keen or zestful pleasure in; enjoy the flavor of; give spice or flavor to"
    },
    {
        "id": 3741,
        "word": "reluctance",
        "phonetic": "[rɪˈlʌktᵊns]",
        "meaning": "state of being reluctant; unwillingness; hesitancy in taking some action"
    },
    {
        "id": 3742,
        "word": "reluctant",
        "phonetic": "[rɪˈlʌktᵊnt]",
        "meaning": "not wanting to take some action; averse"
    },
    {
        "id": 3743,
        "word": "rely",
        "phonetic": "[rɪˈlaɪ]",
        "meaning": "rest with confidence; have confidence; depend"
    },
    {
        "id": 3744,
        "word": "remainder",
        "phonetic": "[rɪˈmeɪndə]",
        "meaning": "remnant; something left after other parts have been taken away"
    },
    {
        "id": 3745,
        "word": "remains",
        "phonetic": "[rɪˈmeɪnz]",
        "meaning": "all that is left after other parts have been taken away, used up, or destroyed; corpse;"
    },
    {
        "id": 3747,
        "word": "remark",
        "phonetic": "[rɪˈmɑːk]",
        "meaning": "expression, in speech or writing, of something remarked or noticed"
    },
    {
        "id": 3748,
        "word": "remarkable",
        "phonetic": "[rɪˈmɑːkəbᵊl]",
        "meaning": "worthy of notice; extraordinary"
    },
    {
        "id": 3749,
        "word": "remedy",
        "phonetic": "[ˈrɛmədi]",
        "meaning": "a medicine or therapy; ; cure; fix; repair; provide relief for"
    },
    {
        "id": 3750,
        "word": "remind",
        "phonetic": "[rɪˈmaɪnd]",
        "meaning": "recall knowledge from memory; have a recollection"
    },
    {
        "id": 3751,
        "word": "reminiscence",
        "phonetic": "[ˌrɛmɪˈnɪsns]",
        "meaning": "recollection; process of remembering"
    },
    {
        "id": 3752,
        "word": "remit",
        "phonetic": "[rɪˈmɪt]",
        "meaning": "send back; give up; surrender; resign; restore; transmit or send, especially as money in"
    },
    {
        "id": 3754,
        "word": "remittance",
        "phonetic": "[rɪˈmɪtᵊns]",
        "meaning": "transmitting money, bills, especially to a distant place, as in satisfaction of a demand, or"
    },
    {
        "id": 3756,
        "word": "remnant",
        "phonetic": "[ˈrɛmnənt]",
        "meaning": "remainder; small part or portion that remains after the main part no longer exists"
    },
    {
        "id": 3757,
        "word": "remove",
        "phonetic": "[rɪˈmuːv]",
        "meaning": "move away from the position occupied; cause to change place; take away"
    },
    {
        "id": 3758,
        "word": "renaissance",
        "phonetic": "[rəˈneɪsᵊns]",
        "meaning": "revival; renewal; revival of learning and culture"
    },
    {
        "id": 3759,
        "word": "render",
        "phonetic": "[ˈrɛndə]",
        "meaning": "deliver;give or make available; provide; represent in a drawing or painting"
    },
    {
        "id": 3760,
        "word": "renew",
        "phonetic": "[rɪˈnjuː]",
        "meaning": "renovate; make new or as if new again; restore"
    },
    {
        "id": 3761,
        "word": "renewable",
        "phonetic": "[rɪˈnjuːəbᵊl]",
        "meaning": "capable of being renewed or extended"
    },
    {
        "id": 3762,
        "word": "renewal",
        "phonetic": "[rɪˈnjuːəl]",
        "meaning": "act of renewing; filling again by supplying what has been used up"
    },
    {
        "id": 3763,
        "word": "rent",
        "phonetic": "[rɛnt]",
        "meaning": "payment, usually of an amount fixed by contract"
    },
    {
        "id": 3764,
        "word": "rental",
        "phonetic": "[ˈrɛntᵊl]",
        "meaning": "amount paid or collected as rent; act of renting"
    },
    {
        "id": 3765,
        "word": "repeal",
        "phonetic": "[rɪˈpiːl]",
        "meaning": "revoke or annul, especially by official or formal act"
    },
    {
        "id": 3766,
        "word": "repel",
        "phonetic": "[rɪˈpɛl]",
        "meaning": "force or drive back; disgust; offer resistance to; fight against"
    },
    {
        "id": 3767,
        "word": "repent",
        "phonetic": "[ˈriːpᵊnt]",
        "meaning": "cause to feel remorse or regret; feel regret or self-reproach for"
    },
    {
        "id": 3768,
        "word": "repetition",
        "phonetic": "[ˌrɛpɪˈtɪʃᵊn]",
        "meaning": "act of doing or performing again"
    },
    {
        "id": 3769,
        "word": "replace",
        "phonetic": "[rɪˈpleɪs]",
        "meaning": "substitute; put in the place of another; switch seemingly equivalent items"
    },
    {
        "id": 3770,
        "word": "replacement",
        "phonetic": "[rɪˈpleɪsmənt]",
        "meaning": "act of replacing; substitution; person or thing that takes the place of another"
    },
    {
        "id": 3771,
        "word": "replenish",
        "phonetic": "[rɪˈplɛnɪʃ]",
        "meaning": "fill or make complete again; add a new stock or supply to"
    },
    {
        "id": 3772,
        "word": "represent",
        "phonetic": "[ˌrɛprɪˈzɛnt]",
        "meaning": "stand for; describe or present; play a role or part"
    },
    {
        "id": 3773,
        "word": "representation",
        "phonetic": "[ˌrɛprɪzɛnˈteɪʃᵊn]",
        "meaning": "act of representing; standing in for someone or some group and speaking with "
    },
    {
        "id": 3775,
        "word": "representative",
        "phonetic": "[ˌrɛprɪˈzɛntətɪv]",
        "meaning": "one that represents anything; that which exhibits a likeness or similitude; agent"
    },
    {
        "id": 3776,
        "word": "reproach",
        "phonetic": "[rɪˈprəʊʧ]",
        "meaning": "express disapproval or disappointment; bring shame upon; disgrace"
    },
    {
        "id": 3777,
        "word": "reproduce",
        "phonetic": "[ˌriːprəˈdjuːs]",
        "meaning": "have offspring or young; duplicate; make a copy"
    },
    {
        "id": 3778,
        "word": "reproduction",
        "phonetic": "[ˌriːprəˈdʌkʃᵊn]",
        "meaning": "act of making copies"
    },
    {
        "id": 3779,
        "word": "reptile",
        "phonetic": "[ˈrɛptaɪl]",
        "meaning": "cold-blooded vertebrate including tortoises turtles snakes lizards alligators crocodiles"
    },
    {
        "id": 3780,
        "word": "repudiate",
        "phonetic": "[rɪˈpjuːdieɪt]",
        "meaning": "disown; refuse to acknowledge; reject validity or authority of"
    },
    {
        "id": 3781,
        "word": "reputable",
        "phonetic": "[ˈrɛpjətəbᵊl]",
        "meaning": "having a good reputation; honorable"
    },
    {
        "id": 3782,
        "word": "reputation",
        "phonetic": "[ˌrɛpjəˈteɪʃᵊn]",
        "meaning": "state of being held in high esteem; general estimation in which a person is held by the"
    },
    {
        "id": 3784,
        "word": "repute",
        "phonetic": "[rɪˈpjuːt]",
        "meaning": "ascribe a particular fact or characteristic to; consider; suppose"
    },
    {
        "id": 3785,
        "word": "request",
        "phonetic": "[rɪˈkwɛst]",
        "meaning": "express the need or desire for; ask for"
    },
    {
        "id": 3786,
        "word": "require",
        "phonetic": "[rɪˈkwaɪə]",
        "meaning": "insist upon having; request and expect"
    },
    {
        "id": 3787,
        "word": "requisite",
        "phonetic": "[ˈrɛkwɪzɪt]",
        "meaning": "necessary requirement; indispensable item"
    },
    {
        "id": 3788,
        "word": "rescind",
        "phonetic": "[rɪˈsɪnd]",
        "meaning": "cancel; make void; repeal or annul"
    },
    {
        "id": 3789,
        "word": "rescue",
        "phonetic": "[ˈrɛskjuː]",
        "meaning": "free from harm or evil; take from legal custody by force"
    },
    {
        "id": 3790,
        "word": "research",
        "phonetic": "[rɪˈsɜːʧ]",
        "meaning": "inquire into; attempt to find out in scientific manner"
    },
    {
        "id": 3791,
        "word": "resemblance",
        "phonetic": "[rɪˈzɛmbləns]",
        "meaning": "likeness; similarity in appearance or external or superficial details"
    },
    {
        "id": 3792,
        "word": "resemble",
        "phonetic": "[rɪˈzɛmbᵊl]",
        "meaning": "be similar to; take after; look like"
    },
    {
        "id": 3793,
        "word": "resent",
        "phonetic": "[rɪˈzɛnt]",
        "meaning": "feel bitter; consider as injury or affront; be in angry"
    },
    {
        "id": 3794,
        "word": "resentment",
        "phonetic": "[rɪˈzɛntmənt]",
        "meaning": "indignation; deep sense of injury; strong displeasure"
    },
    {
        "id": 3795,
        "word": "reserve",
        "phonetic": "[rɪˈzɜːv]",
        "meaning": "lack of enthusiasm; skeptical caution; something saved for future use; self-restraint in"
    },
    {
        "id": 3797,
        "word": "reservoir",
        "phonetic": "[ˈrɛzəvwɑː]",
        "meaning": "tank used for collecting and storing a liquid; holding pond; lake used to store water for"
    },
    {
        "id": 3799,
        "word": "reside",
        "phonetic": "[rɪˈzaɪd]",
        "meaning": "dwell; live in a place permanently or for an extended period"
    },
    {
        "id": 3800,
        "word": "residence",
        "phonetic": "[ˈrɛzɪdᵊns]",
        "meaning": "official house; large house; act of dwelling in a place"
    },
    {
        "id": 3801,
        "word": "resident",
        "phonetic": "[ˈrɛzɪdᵊnt]",
        "meaning": "one who resides in a place permanently or for an extended period; dweller"
    },
    {
        "id": 3802,
        "word": "residual",
        "phonetic": "[rɪˈzɪdjuəl]",
        "meaning": "remaining as a residue; surplus"
    },
    {
        "id": 3803,
        "word": "resign",
        "phonetic": "[rɪˈzaɪn]",
        "meaning": "sign back; return by a formal act; yield to another; abandon"
    },
    {
        "id": 3804,
        "word": "resignation",
        "phonetic": "[ˌrɛzɪɡˈneɪʃᵊn]",
        "meaning": "act of resigning or giving up, as a claim, possession, or office; surrender"
    },
    {
        "id": 3805,
        "word": "resist",
        "phonetic": "[rɪˈzɪst]",
        "meaning": "stand up or offer resistance; refuse to comply; withstand the force of something"
    },
    {
        "id": 3806,
        "word": "resistance",
        "phonetic": "[rɪˈzɪstᵊns]",
        "meaning": "action of opposing something that you disapprove or disagree with"
    },
    {
        "id": 3807,
        "word": "resistant",
        "phonetic": "[rɪˈzɪstᵊnt]",
        "meaning": "unaffected; incapable of being affected"
    },
    {
        "id": 3808,
        "word": "resolute",
        "phonetic": "[ˈrɛzəluːt]",
        "meaning": "firm, unyielding, or determined; having decided purpose"
    },
    {
        "id": 3809,
        "word": "resolution",
        "phonetic": "[ˌrɛzəˈluːʃᵊn]",
        "meaning": "determination; resolving to do something; formal statement of a decision"
    },
    {
        "id": 3810,
        "word": "resolve",
        "phonetic": "[rɪˈzɒlv]",
        "meaning": "determination; formal expression by a meeting; agreed to by a vote"
    },
    {
        "id": 3811,
        "word": "resort",
        "phonetic": "[rɪˈzɔːt]",
        "meaning": "vacation spot; act of turning to for assistance"
    },
    {
        "id": 3812,
        "word": "resource",
        "phonetic": "[rɪˈzɔːs]",
        "meaning": "materials; abilities; available source"
    },
    {
        "id": 3813,
        "word": "respect",
        "phonetic": "[rɪˈspɛkt]",
        "meaning": "honor or esteem; admire; aspect; detail or point"
    },
    {
        "id": 3814,
        "word": "respective",
        "phonetic": "[rɪˈspɛktɪv]",
        "meaning": "individual; relating to particular persons or things, each to each; particular; respectful;"
    },
    {
        "id": 3816,
        "word": "respectively",
        "phonetic": "[rɪˈspɛktɪvli]",
        "meaning": "separately; individually; in the order given"
    },
    {
        "id": 3817,
        "word": "respond",
        "phonetic": "[rɪˈspɒnd]",
        "meaning": "show a reaction to something favorably or as hoped"
    },
    {
        "id": 3818,
        "word": "responsibility",
        "phonetic": "[rɪˌspɒnsɪˈbɪləti]",
        "meaning": "duties; obligation; state of being responsible, accountable, or answerable"
    },
    {
        "id": 3819,
        "word": "responsible",
        "phonetic": "[rɪˈspɒnsəbᵊl]",
        "meaning": "accountable; held accountable"
    },
    {
        "id": 3820,
        "word": "restless",
        "phonetic": "[ˈrɛstləs]",
        "meaning": "never resting; unquiet; uneasy; continually moving; eager for change; discontented"
    },
    {
        "id": 3821,
        "word": "restore",
        "phonetic": "[rɪˈstɔː]",
        "meaning": "give or bring back; return to its original condition"
    },
    {
        "id": 3822,
        "word": "restrain",
        "phonetic": "[rɪˈstreɪn]",
        "meaning": "keep under control; hold back ; place limits on"
    },
    {
        "id": 3823,
        "word": "restraint",
        "phonetic": "[rɪˈstreɪnt]",
        "meaning": "moderation or limitation; controlling force; loss of freedom; control of feelings"
    },
    {
        "id": 3824,
        "word": "restrict",
        "phonetic": "[rɪˈstrɪkt]",
        "meaning": "keep or confine within limits"
    },
    {
        "id": 3825,
        "word": "restriction",
        "phonetic": "[rɪˈstrɪkʃᵊn]",
        "meaning": "act of keeping something within specified bounds; a principle that limits the extent of"
    },
    {
        "id": 3827,
        "word": "restrictive",
        "phonetic": "[rɪˈstrɪktɪv]",
        "meaning": "tending or serving to restrict; limiting; confining"
    },
    {
        "id": 3828,
        "word": "resume",
        "phonetic": "[rɪˈzjuːm]",
        "meaning": "give a summary; return to a previous location or condition"
    },
    {
        "id": 3829,
        "word": "retail",
        "phonetic": "[ˈriːteɪl]",
        "meaning": "selling of goods to consumers"
    },
    {
        "id": 3830,
        "word": "retailer",
        "phonetic": "[riːˈteɪlə]",
        "meaning": "company which sells goods"
    },
    {
        "id": 3831,
        "word": "retain",
        "phonetic": "[rɪˈteɪn]",
        "meaning": "keep; maintain possession of; hire by payment of a fee; keep in mind; remember"
    },
    {
        "id": 3832,
        "word": "retire",
        "phonetic": "[rɪˈtaɪə]",
        "meaning": "move back and away from; stop performing one's work or withdraw from one's position"
    },
    {
        "id": 3833,
        "word": "retirement",
        "phonetic": "[rɪˈtaɪəmənt]",
        "meaning": "period of your life after you have stopped work at a certain age"
    },
    {
        "id": 3834,
        "word": "retort",
        "phonetic": "[rɪˈtɔːt]",
        "meaning": "reply, especially to answer in a quick, caustic, or witty manner"
    },
    {
        "id": 3835,
        "word": "retreat",
        "phonetic": "[rɪˈtriːt]",
        "meaning": "receding; pull back or move away or backward; withdrawal of troops to a more favorable"
    },
    {
        "id": 3837,
        "word": "retroactive",
        "phonetic": "[ˌrɛtrəʊˈæktɪv]",
        "meaning": "extending in scope or effect to a prior time or to prior conditions"
    },
    {
        "id": 3838,
        "word": "reveal",
        "phonetic": "[rɪˈviːl]",
        "meaning": "make known; disclose or show"
    },
    {
        "id": 3839,
        "word": "revenge",
        "phonetic": "[rɪˈvɛnʤ]",
        "meaning": "do punishment in return for injury or insult; avenge"
    },
    {
        "id": 3840,
        "word": "revenue",
        "phonetic": "[ˈrɛvənjuː]",
        "meaning": "money which returns from an investment; annual income; reward"
    },
    {
        "id": 3841,
        "word": "reverence",
        "phonetic": "[ˈrɛvᵊrᵊns]",
        "meaning": "profound respect and esteem mingled with fear and affection, as for a holy being or place;"
    },
    {
        "id": 3843,
        "word": "reverse",
        "phonetic": "[rɪˈvɜːs]",
        "meaning": "overturn; turn inside out or upside down; turning in the opposite direction"
    },
    {
        "id": 3844,
        "word": "revert",
        "phonetic": "[rɪˈvɜːt]",
        "meaning": "return to a former condition, practice, subject, or belief; backslide; turn back to"
    },
    {
        "id": 3845,
        "word": "review",
        "phonetic": "[rɪˈvjuː]",
        "meaning": "summary of a longer discussion; formal examination; practice to refresh memory"
    },
    {
        "id": 3846,
        "word": "revise",
        "phonetic": "[rɪˈvaɪz]",
        "meaning": "amend; change"
    },
    {
        "id": 3847,
        "word": "revision",
        "phonetic": "[rɪˈvɪʒᵊn]",
        "meaning": "modification; correction; act of altering"
    },
    {
        "id": 3848,
        "word": "revival",
        "phonetic": "[rɪˈvaɪvᵊl]",
        "meaning": "bringing again into activity and prominence"
    },
    {
        "id": 3849,
        "word": "revive",
        "phonetic": "[rɪˈvaɪv]",
        "meaning": "restore from a depressed; renew"
    },
    {
        "id": 3850,
        "word": "revoke",
        "phonetic": "[rɪˈvəʊk]",
        "meaning": "void or annul by recalling, withdrawing, or reversing; cancel; retract"
    },
    {
        "id": 3851,
        "word": "revolt",
        "phonetic": "[rɪˈvəʊlt]",
        "meaning": "organize opposition to authority; make revolution"
    },
    {
        "id": 3852,
        "word": "revolution",
        "phonetic": "[ˌrɛvəˈluːʃᵊn]",
        "meaning": "act of revolving; motion of body round a fixed point or line; rotation; total or radical"
    },
    {
        "id": 3854,
        "word": "revolutionary",
        "phonetic": "[ˌrɛvəˈluːʃᵊnᵊri]",
        "meaning": "marked by new or introducing radical change"
    },
    {
        "id": 3855,
        "word": "revolve",
        "phonetic": "[rɪˈvɒlv]",
        "meaning": "turn or roll round on, or as on, an axis, like a wheel; rotate; move in curved path round a"
    },
    {
        "id": 3857,
        "word": "reward",
        "phonetic": "[rɪˈwɔːd]",
        "meaning": "satisfying return or result; profit, return for performance of a desired behavior; positive"
    },
    {
        "id": 3859,
        "word": "rhythm",
        "phonetic": "[ˈrɪðᵊm]",
        "meaning": "pattern; beat; recurring at regular intervals"
    },
    {
        "id": 3860,
        "word": "rib",
        "phonetic": "[rɪb]",
        "meaning": "one of the curved bones attached to the vertebral column and supporting the lateral walls of the"
    },
    {
        "id": 3862,
        "word": "ribbon",
        "phonetic": "[ˈrɪbᵊn]",
        "meaning": "fillet or narrow woven fabric, commonly of silk; narrow strip of fine material used for trimming"
    },
    {
        "id": 3863,
        "word": "riddle",
        "phonetic": "[ˈrɪdᵊl]",
        "meaning": "pierce with numerous holes; perforate; permeate or spread throughout"
    },
    {
        "id": 3864,
        "word": "ridge",
        "phonetic": "[rɪʤ]",
        "meaning": "long, narrow upper section or crest; chain of hills or mountains"
    },
    {
        "id": 3865,
        "word": "ridicule",
        "phonetic": "[ˈrɪdɪkjuːl]",
        "meaning": "words or actions intended to evoke contemptuous laughter; make fun of"
    },
    {
        "id": 3866,
        "word": "ridiculous",
        "phonetic": "[rɪˈdɪkjələs]",
        "meaning": "completely lacking of wisdom or good sense"
    },
    {
        "id": 3867,
        "word": "rifle",
        "phonetic": "[ˈraɪfᵊl]",
        "meaning": "shoulder firearm with a long barrel"
    },
    {
        "id": 3868,
        "word": "righteous",
        "phonetic": "[ˈraɪʧəs]",
        "meaning": "morally justified; equitable; free from wrong, guilt, or sin"
    },
    {
        "id": 3869,
        "word": "rigid",
        "phonetic": "[ˈrɪʤɪd]",
        "meaning": "stiff and unyielding; strict; hard and unbending; not flexible"
    },
    {
        "id": 3870,
        "word": "rigidity",
        "phonetic": "[rɪˈʤɪdəti]",
        "meaning": "stiffness; physical property of being stiff and resisting bending"
    },
    {
        "id": 3871,
        "word": "rigor",
        "phonetic": "[ˈrɪɡə]",
        "meaning": "strictness or severity, as in temperament, action, or judgment; something hard to endure"
    },
    {
        "id": 3872,
        "word": "rigorous",
        "phonetic": "[ˈrɪɡᵊrəs]",
        "meaning": "full of rigors; harsh; rigidly accurate; precise"
    },
    {
        "id": 3873,
        "word": "rim",
        "phonetic": "[rɪm]",
        "meaning": "border, edge, or margin of a thing, usually of something circular or curving"
    },
    {
        "id": 3874,
        "word": "rinse",
        "phonetic": "[rɪns]",
        "meaning": "cleanse with water; flush; wash lightly without soap"
    },
    {
        "id": 3875,
        "word": "riot",
        "phonetic": "[ˈraɪət]",
        "meaning": "state of disorder involving group violence; rebellion"
    },
    {
        "id": 3876,
        "word": "rip",
        "phonetic": "[rɪp]",
        "meaning": "tear or be torn violently; criticize or abuse strongly and violently"
    },
    {
        "id": 3877,
        "word": "ripe",
        "phonetic": "[raɪp]",
        "meaning": "ready; fully developed; mature"
    },
    {
        "id": 3878,
        "word": "ripen",
        "phonetic": "[ˈraɪpᵊn]",
        "meaning": "grow ripe; cause to ripen or develop fully"
    },
    {
        "id": 3879,
        "word": "ripple",
        "phonetic": "[ˈrɪpᵊl]",
        "meaning": "form or display little undulations or waves on the surface, as disturbed water does"
    },
    {
        "id": 3880,
        "word": "rise",
        "phonetic": "[raɪz]",
        "meaning": "move from a lower position to a higher; mount up; move upward; reach a higher level"
    },
    {
        "id": 3881,
        "word": "risky",
        "phonetic": "[ˈrɪski]",
        "meaning": "involving risk or danger; hazardous"
    },
    {
        "id": 3882,
        "word": "rival",
        "phonetic": "[ˈraɪvᵊl]",
        "meaning": "compete; be equal to in quality or ability; match"
    },
    {
        "id": 3883,
        "word": "rivalry",
        "phonetic": "[ˈraɪvᵊlri]",
        "meaning": "competition; the act of competing as for profit or a prize"
    },
    {
        "id": 3884,
        "word": "roam",
        "phonetic": "[rəʊm]",
        "meaning": "wander; ramble; stroll"
    },
    {
        "id": 3885,
        "word": "roar",
        "phonetic": "[rɔː]",
        "meaning": "bellow; rumble; make a loud noise"
    },
    {
        "id": 3886,
        "word": "roast",
        "phonetic": "[rəʊst]",
        "meaning": "cook with dry heat, usually in an oven; subject to laughter or ridicule"
    },
    {
        "id": 3887,
        "word": "robe",
        "phonetic": "[rəʊb]",
        "meaning": "outer garment; dress of rich, flowing, and elegant style or make; dress of state, rank, office"
    },
    {
        "id": 3888,
        "word": "robust",
        "phonetic": "[rəʊˈbʌst]",
        "meaning": "vigorous; full of health and strength; vigorous"
    },
    {
        "id": 3889,
        "word": "rod",
        "phonetic": "[rɒd]",
        "meaning": "stick; a long thin implement made of metal or wood"
    },
    {
        "id": 3890,
        "word": "role",
        "phonetic": "[rəʊl]",
        "meaning": "normal activity of a person in particular social setting; part played by a performer"
    },
    {
        "id": 3891,
        "word": "roll",
        "phonetic": "[rəʊl]",
        "meaning": "a list of names"
    },
    {
        "id": 3892,
        "word": "rooster",
        "phonetic": "[ˈruːstə]",
        "meaning": "adult male chicken"
    },
    {
        "id": 3893,
        "word": "rot",
        "phonetic": "[rɒt]",
        "meaning": "become decomposed by a natural process; perish slowly; become corrupt"
    },
    {
        "id": 3894,
        "word": "rotary",
        "phonetic": "[ˈrəʊtᵊri]",
        "meaning": "turning, as a wheel on its axis; pertaining to, or resembling, the motion of a wheel on its axis"
    },
    {
        "id": 3895,
        "word": "rotate",
        "phonetic": "[rəʊˈteɪt]",
        "meaning": "plant or grow in a fixed cyclic order of succession; swirl; revolve; turn on or around an axis or"
    },
    {
        "id": 3897,
        "word": "rotation",
        "phonetic": "[rəʊˈteɪʃᵊn]",
        "meaning": "revolution; act of rotating as if on an axis"
    },
    {
        "id": 3898,
        "word": "rough",
        "phonetic": "[rʌf]",
        "meaning": "not perfected; having or caused by an irregular surface"
    },
    {
        "id": 3899,
        "word": "roughly",
        "phonetic": "[ˈrʌfli]",
        "meaning": "approximately; more or less"
    },
    {
        "id": 3900,
        "word": "round",
        "phonetic": "[raʊnd]",
        "meaning": "by moving in or forming a circle; from beginning to end; throughout; to a specific place or"
    },
    {
        "id": 3902,
        "word": "roundabout",
        "phonetic": "[ˈraʊndəbaʊt]",
        "meaning": "circuitous; going round; indirect; encircling; enveloping; comprehensive"
    },
    {
        "id": 3903,
        "word": "rouse",
        "phonetic": "[raʊz]",
        "meaning": "pull or haul strongly and all together, as upon a rope, without the assistance of mechanical"
    },
    {
        "id": 3905,
        "word": "route",
        "phonetic": "[ruːt]",
        "meaning": "way for travel or transportation"
    },
    {
        "id": 3906,
        "word": "routine",
        "phonetic": "[ruːˈtiːn]",
        "meaning": "unvarying or habitual method of procedure; occurring at fixed times or predictable intervals"
    },
    {
        "id": 3907,
        "word": "royalty",
        "phonetic": "[ˈrɔɪəlti]",
        "meaning": "being royal; quality of royal person; kingship; sovereignty; share of product, as a percentage"
    },
    {
        "id": 3909,
        "word": "rub",
        "phonetic": "[rʌb]",
        "meaning": "move over the surface with pressure and friction; spread a substance thinly over"
    },
    {
        "id": 3910,
        "word": "ruin",
        "phonetic": "[ˈruːɪn]",
        "meaning": "fall or tumble down; destroy; devastate; exterminate"
    },
    {
        "id": 3911,
        "word": "ruinous",
        "phonetic": "[ˈruːɪnəs]",
        "meaning": "causing, or tending to cause, ruin; destructive; baneful; pernicious"
    },
    {
        "id": 3912,
        "word": "rule",
        "phonetic": "[ruːl]",
        "meaning": "governing direction for a specific purpose; regulation; systematic method"
    },
    {
        "id": 3913,
        "word": "rural",
        "phonetic": "[ˈrʊərəl]",
        "meaning": "country; relating to rural areas"
    },
    {
        "id": 3914,
        "word": "rust",
        "phonetic": "[rʌst]",
        "meaning": "become destroyed by water, air, or an etching chemical such as an acid"
    },
    {
        "id": 3915,
        "word": "ruthless",
        "phonetic": "[ˈruːθləs]",
        "meaning": "pitiless; cruel; having no compassion or pity; me "
    },
    {
        "id": 3920,
        "word": "sack",
        "phonetic": "[sæk]",
        "meaning": "bag made of paper or plastic for holding customer's purchases; enclosed space"
    },
    {
        "id": 3921,
        "word": "sacred",
        "phonetic": "[ˈseɪkrɪd]",
        "meaning": "concerned with religion; worthy of respect or dedication"
    },
    {
        "id": 3922,
        "word": "sacrifice",
        "phonetic": "[ˈsækrɪfaɪs]",
        "meaning": "offering of something to god; victim offered to god; surrender or loss of profit for higher"
    },
    {
        "id": 3924,
        "word": "saddle",
        "phonetic": "[ˈsædᵊl]",
        "meaning": "load or burden; put harness onto animal's back to ride"
    },
    {
        "id": 3925,
        "word": "sag",
        "phonetic": "[sæɡ]",
        "meaning": "sink, in the middle, by its weight or under applied pressure, below a horizontal line or plane"
    },
    {
        "id": 3926,
        "word": "sake",
        "phonetic": "[seɪk]",
        "meaning": "purpose; reason for wanting something done"
    },
    {
        "id": 3927,
        "word": "salmon",
        "phonetic": "[ˈsæmən]",
        "meaning": "several species of fish of the Salmonidae family; reddish yellow or orange color, like the"
    },
    {
        "id": 3929,
        "word": "salute",
        "phonetic": "[səˈluːt]",
        "meaning": "give a sign of good will; compliment by an act or ceremony, as a kiss, a bow; honor"
    },
    {
        "id": 3930,
        "word": "sample",
        "phonetic": "[ˈsɑːmpᵊl]",
        "meaning": "small part of something intended as representative of the whole"
    },
    {
        "id": 3931,
        "word": "sandy",
        "phonetic": "[ˈsændi]",
        "meaning": "loose and large-grained in consistency"
    },
    {
        "id": 3932,
        "word": "sanitary",
        "phonetic": "[ˈsænɪtᵊri]",
        "meaning": "relating to health or the protection of health"
    },
    {
        "id": 3933,
        "word": "sarcasm",
        "phonetic": "[ˈsɑːkæzᵊm]",
        "meaning": "cutting, often ironic remark intended to wound; stinging rebuke; form of humor by mocking"
    },
    {
        "id": 3935,
        "word": "sarcastic",
        "phonetic": "[sɑːˈkæstɪk]",
        "meaning": "ironic; expressing or expressive of ridicule that wounds"
    },
    {
        "id": 3936,
        "word": "satellite",
        "phonetic": "[ˈsætᵊlaɪt]",
        "meaning": "small body revolving around a larger one; subordinate"
    },
    {
        "id": 3937,
        "word": "satire",
        "phonetic": "[ˈsætaɪə]",
        "meaning": "form of literature in which irony and ridicule are used to attack human vice and folly"
    },
    {
        "id": 3938,
        "word": "satisfaction",
        "phonetic": "[ˌsætɪsˈfækʃᵊn]",
        "meaning": "fulfillment or gratification of a desire, need, or appetite; source or means of gratification"
    },
    {
        "id": 3939,
        "word": "satisfactory",
        "phonetic": "[ˌsætɪsˈfæktᵊri]",
        "meaning": "acceptable; passable"
    },
    {
        "id": 3940,
        "word": "sauce",
        "phonetic": "[sɔːs]",
        "meaning": "stewed fruit served with other foods; appetizing ingredients for meat, fish or puddings"
    },
    {
        "id": 3941,
        "word": "saucer",
        "phonetic": "[ˈsɔːsə]",
        "meaning": "dish; small shallow dish having a slight circular depression in the center for holding a cup"
    },
    {
        "id": 3942,
        "word": "savage",
        "phonetic": "[ˈsævɪʤ]",
        "meaning": "in a state of nature; wild; untamed; uncultivated; inhuman; brutal; not civilized; lacking polish;"
    },
    {
        "id": 3944,
        "word": "save",
        "phonetic": "[seɪv]",
        "meaning": "rescue; preserve; make unnecessary; set aside for future use"
    },
    {
        "id": 3945,
        "word": "savings",
        "phonetic": "[ˈseɪvɪŋz]",
        "meaning": "resources; money saved"
    },
    {
        "id": 3946,
        "word": "scale",
        "phonetic": "[skeɪl]",
        "meaning": "climb up or over; alter according to a standard; estimate or measure; remove in layers"
    },
    {
        "id": 3947,
        "word": "scan",
        "phonetic": "[skæn]",
        "meaning": "make a wide, sweeping search of; examine"
    },
    {
        "id": 3948,
        "word": "scandal",
        "phonetic": "[ˈskændᵊl]",
        "meaning": "publicized incident that brings about disgrace; damage to reputation by disclosure of"
    },
    {
        "id": 3950,
        "word": "scar",
        "phonetic": "[skɑː]",
        "meaning": "mark of damage; mark left on the skin after injury"
    },
    {
        "id": 3951,
        "word": "scarce",
        "phonetic": "[skeəs]",
        "meaning": "hard to find; absent or rare; limited"
    },
    {
        "id": 3952,
        "word": "scarcely",
        "phonetic": "[ˈskeəsli]",
        "meaning": "hardly; barely; only just"
    },
    {
        "id": 3953,
        "word": "scare",
        "phonetic": "[skeə]",
        "meaning": "frighten; alarm; strike with sudden fear"
    },
    {
        "id": 3954,
        "word": "scarf",
        "phonetic": "[skɑːf]",
        "meaning": "long piece of cloth worn about the head, neck, or shoulders"
    },
    {
        "id": 3955,
        "word": "scarlet",
        "phonetic": "[ˈskɑːlət]",
        "meaning": "bright red"
    },
    {
        "id": 3956,
        "word": "scatter",
        "phonetic": "[ˈskætə]",
        "meaning": "sprinkle; disseminate; cause to separate and go in different directions"
    },
    {
        "id": 3957,
        "word": "scene",
        "phonetic": "[siːn]",
        "meaning": "structure on which something is shown; part of theater where the acting is done; place, time,"
    },
    {
        "id": 3959,
        "word": "scenery",
        "phonetic": "[ˈsiːnəri]",
        "meaning": "landscape; view; view or views of natural features, especially in open country"
    },
    {
        "id": 3960,
        "word": "scenic",
        "phonetic": "[ˈsiːnɪk]",
        "meaning": "constituting or affording pleasing views of natural features; beautiful"
    },
    {
        "id": 3961,
        "word": "scent",
        "phonetic": "[sɛnt]",
        "meaning": "distinctive odor that is pleasant; fragrance; perfume"
    },
    {
        "id": 3962,
        "word": "schedule",
        "phonetic": "[ˈʃɛdjuːl]",
        "meaning": "plan for an activity or event; arrange"
    },
    {
        "id": 3963,
        "word": "scheme",
        "phonetic": "[skiːm]",
        "meaning": "elaborate and systematic plan of action; chart or outline of a system or object"
    },
    {
        "id": 3964,
        "word": "scholar",
        "phonetic": "[ˈskɒlə]",
        "meaning": "professor; a learned person"
    },
    {
        "id": 3965,
        "word": "scholarship",
        "phonetic": "[ˈskɒləʃɪp]",
        "meaning": "knowledge resulting from study and research; grant of financial aid awarded to student"
    },
    {
        "id": 3966,
        "word": "scissors",
        "phonetic": "[ˈsɪzəz]",
        "meaning": "edge tool having two crossed pivoting blades"
    },
    {
        "id": 3967,
        "word": "scoff",
        "phonetic": "[skɒf]",
        "meaning": "mock; ridicule; show or express scorn; eat quickly and greedily"
    },
    {
        "id": 3968,
        "word": "scold",
        "phonetic": "[skəʊld]",
        "meaning": "find fault or rail with rude clamor; utter harsh, rude, boisterous rebuke"
    },
    {
        "id": 3969,
        "word": "scope",
        "phonetic": "[skəʊp]",
        "meaning": "range of one's perceptions, thoughts, or actions; extent; bound"
    },
    {
        "id": 3970,
        "word": "scorch",
        "phonetic": "[skɔːʧ]",
        "meaning": "burn superficially; parch, or shrivel, the surface of, by heat; affect painfully with heat; burn"
    },
    {
        "id": 3971,
        "word": "score",
        "phonetic": "[skɔː]",
        "meaning": "act of getting point in a game or sport; facts about an actual situation"
    },
    {
        "id": 3972,
        "word": "scorn",
        "phonetic": "[skɔːn]",
        "meaning": "extreme and lofty contempt; haughty disregard"
    },
    {
        "id": 3973,
        "word": "scotch",
        "phonetic": "[skɒʧ]",
        "meaning": "put an abrupt end to; block to prevent rolling or slipping"
    },
    {
        "id": 3974,
        "word": "scout",
        "phonetic": "[skaʊt]",
        "meaning": "find paths through unexplored territory"
    },
    {
        "id": 3975,
        "word": "scramble",
        "phonetic": "[ˈskræmbᵊl]",
        "meaning": "unceremonious and disorganized struggle; rushing about hastily in an undignified way"
    },
    {
        "id": 3976,
        "word": "scrap",
        "phonetic": "[skræp]",
        "meaning": "small piece or bit; fragment; fragment; leftover bits of food; remnant"
    },
    {
        "id": 3977,
        "word": "scrape",
        "phonetic": "[skreɪp]",
        "meaning": "gather something together over time; scratch repeatedly"
    },
    {
        "id": 3978,
        "word": "scratch",
        "phonetic": "[skræʧ]",
        "meaning": "cut the surface of; cause friction"
    },
    {
        "id": 3979,
        "word": "screen",
        "phonetic": "[skriːn]",
        "meaning": "surface where pictures can be projected for viewing ; examine; test"
    },
    {
        "id": 3980,
        "word": "screw",
        "phonetic": "[skruː]",
        "meaning": "cause to penetrate with a circular motion; fastener with shank and slotted head"
    },
    {
        "id": 3981,
        "word": "screwdriver",
        "phonetic": "[ˈskruːˌdraɪvə]",
        "meaning": "a hand tool for driving screws"
    },
    {
        "id": 3982,
        "word": "script",
        "phonetic": "[skrɪpt]",
        "meaning": "prepare text for filming or broadcasting"
    },
    {
        "id": 3983,
        "word": "scrub",
        "phonetic": "[skrʌb]",
        "meaning": "rub hard; wash with rubbing"
    },
    {
        "id": 3984,
        "word": "scrutiny",
        "phonetic": "[ˈskruːtɪni]",
        "meaning": "close examination; minute inspection; critical observation."
    },
    {
        "id": 3985,
        "word": "sculptor",
        "phonetic": "[ˈskʌlptə]",
        "meaning": "artist who creates sculptures"
    },
    {
        "id": 3986,
        "word": "sculpture",
        "phonetic": "[ˈskʌlpʧə]",
        "meaning": "statue; creating figures or designs in three dimensions"
    },
    {
        "id": 3987,
        "word": "seal",
        "phonetic": "[siːl]",
        "meaning": "middle size aquatic mammal; stamp used for authentication or security"
    },
    {
        "id": 3988,
        "word": "seam",
        "phonetic": "[siːm]",
        "meaning": "line of junction formed by sewing together two pieces; line across a surface, as a crack; scar"
    },
    {
        "id": 3989,
        "word": "seaport",
        "phonetic": "[ˈsiːpɔːt]",
        "meaning": "sheltered port where ships can take on or discharge cargo"
    },
    {
        "id": 3990,
        "word": "seashore",
        "phonetic": "[ˈsiːʃɔː]",
        "meaning": "coast; beach; the shore of a sea or ocean"
    },
    {
        "id": 3991,
        "word": "seasonal",
        "phonetic": "[ˈsiːzᵊnᵊl]",
        "meaning": "occurring at or dependent on a particular season"
    },
    {
        "id": 3992,
        "word": "secondary",
        "phonetic": "[ˈsɛkᵊndri]",
        "meaning": "not of major importance; of second rank or importance or value; not direct or immediate"
    },
    {
        "id": 3993,
        "word": "secret",
        "phonetic": "[ˈsiːkrət]",
        "meaning": "something studiously concealed; a thing kept from general knowledge"
    },
    {
        "id": 3994,
        "word": "section",
        "phonetic": "[ˈsɛkʃᵊn]",
        "meaning": "one of several parts; pieces that fit with others to constitute a whole object"
    },
    {
        "id": 3995,
        "word": "sector",
        "phonetic": "[ˈsɛktə]",
        "meaning": "particular aspect of life or activity; body of people who form part of society or economy"
    },
    {
        "id": 3996,
        "word": "secure",
        "phonetic": "[sɪˈkjʊə]",
        "meaning": "free from fear, care, or anxiety; not have reason to doubt"
    },
    {
        "id": 3997,
        "word": "security",
        "phonetic": "[sɪˈkjʊərəti]",
        "meaning": "freedom from risk or danger; safety"
    },
    {
        "id": 3998,
        "word": "seek",
        "phonetic": "[siːk]",
        "meaning": "make an effort to; try to get; try to discover"
    },
    {
        "id": 3999,
        "word": "seemingly",
        "phonetic": "[ˈsiːmɪŋli]",
        "meaning": "apparently; supposedly"
    },
    {
        "id": 4000,
        "word": "segment",
        "phonetic": "[ˈsɛɡmənt]",
        "meaning": "sector; portion; any of the parts into which something can be divided"
    },
    {
        "id": 4001,
        "word": "select",
        "phonetic": "[sɪˈlɛkt]",
        "meaning": "taken from a number by preference; picked out as more valuable or excellent than others; of"
    },
    {
        "id": 4003,
        "word": "selection",
        "phonetic": "[sɪˈlɛkʃᵊn]",
        "meaning": "choice; variety; collection"
    },
    {
        "id": 4004,
        "word": "senator",
        "phonetic": "[ˈsɛnətə]",
        "meaning": "a member of a senate; a member of the king's council; a king's councilor"
    },
    {
        "id": 4005,
        "word": "sensation",
        "phonetic": "[sɛnˈseɪʃᵊn]",
        "meaning": "feeling; perception associated with stimulation of a sense organ or with a specific body"
    },
    {
        "id": 4007,
        "word": "sensational",
        "phonetic": "[sɛnˈseɪʃᵊnᵊl]",
        "meaning": "arousing or intended to arouse strong curiosity, interest, or reaction"
    },
    {
        "id": 4008,
        "word": "sense",
        "phonetic": "[sɛns]",
        "meaning": "faculty through which to know external world; feeling produced by stimulus"
    },
    {
        "id": 4009,
        "word": "sensible",
        "phonetic": "[ˈsɛnsəbᵊl]",
        "meaning": "able to feel or perceive; perceivable; wise; showing reason or sound judgment"
    },
    {
        "id": 4010,
        "word": "sensitive",
        "phonetic": "[ˈsɛnsɪtɪv]",
        "meaning": "able to feel; responsive to external conditions; susceptible to attitudes of others"
    },
    {
        "id": 4011,
        "word": "sensitivity",
        "phonetic": "[ˌsɛnsɪˈtɪvəti]",
        "meaning": "sense; acuteness; capacity of an organ or organism to respond to stimulation"
    },
    {
        "id": 4012,
        "word": "sentence",
        "phonetic": "[ˈsɛntəns]",
        "meaning": "final judgment of guilty in criminal case and punishment that is imposed"
    },
    {
        "id": 4013,
        "word": "sentiment",
        "phonetic": "[ˈsɛntɪmənt]",
        "meaning": "thought prompted by passion or feeling; feeling toward or respecting some person or"
    },
    {
        "id": 4015,
        "word": "sentimental",
        "phonetic": "[ˌsɛntɪˈmɛntᵊl]",
        "meaning": "emotional; Resulting from emotion rather than reason or realism"
    },
    {
        "id": 4016,
        "word": "separate",
        "phonetic": "[ˈsɛpᵊrət]",
        "meaning": "set or keep apart; disunite; divide; disconnect"
    },
    {
        "id": 4017,
        "word": "sequence",
        "phonetic": "[ˈsiːkwəns]",
        "meaning": "serial arrangement in which things follow in logical order or a recurrent pattern"
    },
    {
        "id": 4018,
        "word": "serene",
        "phonetic": "[sɪˈriːn]",
        "meaning": "completely clear and fine"
    },
    {
        "id": 4019,
        "word": "serenity",
        "phonetic": "[səˈrɛnəti]",
        "meaning": "calmness of mind; quietness; stillness; peace"
    },
    {
        "id": 4020,
        "word": "series",
        "phonetic": "[ˈsɪəriːz]",
        "meaning": "a number of things or events standing or succeeding in order; sequence"
    },
    {
        "id": 4021,
        "word": "serious",
        "phonetic": "[ˈsɪəriəs]",
        "meaning": "grave in manner or disposition; earnest; thoughtful; solemn; really intending what is said"
    },
    {
        "id": 4022,
        "word": "seriously",
        "phonetic": "[ˈsɪəriəsli]",
        "meaning": "in a serious or literal manner; gravely; solemnly; in earnest; without levity"
    },
    {
        "id": 4023,
        "word": "session",
        "phonetic": "[ˈsɛʃᵊn]",
        "meaning": "meeting devoted to a particular activity; time for school to hold classes"
    },
    {
        "id": 4024,
        "word": "setting",
        "phonetic": "[ˈsɛtɪŋ]",
        "meaning": "context and environment in which something is set"
    },
    {
        "id": 4025,
        "word": "settle",
        "phonetic": "[ˈsɛtᵊl]",
        "meaning": "take up residence; form a community; come to rest; bring to an end; fix firmly"
    },
    {
        "id": 4026,
        "word": "severe",
        "phonetic": "[sɪˈvɪə]",
        "meaning": "serious in feeling or manner; not light, lively, or cheerful"
    },
    {
        "id": 4027,
        "word": "shabby",
        "phonetic": "[ˈʃæbi]",
        "meaning": "torn or worn to rage; poor; mean; ragged"
    },
    {
        "id": 4028,
        "word": "shade",
        "phonetic": "[ʃeɪd]",
        "meaning": "a slight amount or degree of difference; shadow; protective covering that protects something"
    },
    {
        "id": 4030,
        "word": "shaft",
        "phonetic": "[ʃɑːft]",
        "meaning": "axes; vertical passage into a mine; long narrow stem or body of a spear or arrow"
    },
    {
        "id": 4031,
        "word": "shallow",
        "phonetic": "[ˈʃæləʊ]",
        "meaning": "lacking physical depth; not deep or strong"
    },
    {
        "id": 4032,
        "word": "sham",
        "phonetic": "[ʃæm]",
        "meaning": "pretend; put on false appearance of; feign"
    },
    {
        "id": 4033,
        "word": "sharpen",
        "phonetic": "[ˈʃɑːpᵊn]",
        "meaning": "make pointed; make sharp or sharper"
    },
    {
        "id": 4034,
        "word": "sharply",
        "phonetic": "[ˈʃɑːpli]",
        "meaning": "steeply; changing suddenly in direction and degree; acutely"
    },
    {
        "id": 4035,
        "word": "shatter",
        "phonetic": "[ˈʃætə]",
        "meaning": "destroy; break up; break into many pieces"
    },
    {
        "id": 4036,
        "word": "shave",
        "phonetic": "[ʃeɪv]",
        "meaning": "act of removing hair with a razor; thin slice or scraping"
    },
    {
        "id": 4037,
        "word": "shear",
        "phonetic": "[ʃɪə]",
        "meaning": "cut or clip hair; strip of something; remove by cutting or clipping"
    },
    {
        "id": 4038,
        "word": "shed",
        "phonetic": "[ʃɛd]",
        "meaning": "get rid of ; cast off; cause to pour forth"
    },
    {
        "id": 4039,
        "word": "sheer",
        "phonetic": "[ʃɪə]",
        "meaning": "very thin or transparent; very steep; absolute or pure"
    },
    {
        "id": 4040,
        "word": "sheet",
        "phonetic": "[ʃiːt]",
        "meaning": "bed linen consisting of a large rectangular piece; any broad thin surface"
    },
    {
        "id": 4041,
        "word": "shell",
        "phonetic": "[ʃɛl]",
        "meaning": "ammunition consisting of a cylindrical metal casing containing an explosive charge; usually"
    },
    {
        "id": 4043,
        "word": "shelter",
        "phonetic": "[ˈʃɛltə]",
        "meaning": "structure that provides privacy and protection from danger"
    },
    {
        "id": 4044,
        "word": "shepherd",
        "phonetic": "[ˈʃɛpəd]",
        "meaning": "a herder of sheep; someone who keeps the sheep together in a flock"
    },
    {
        "id": 4045,
        "word": "sheriff",
        "phonetic": "[ˈʃɛrɪf]",
        "meaning": "chief officer of a shire or county, to whom is entrusted the execution of the laws"
    },
    {
        "id": 4046,
        "word": "shield",
        "phonetic": "[ʃiːld]",
        "meaning": "protective covering or structure; protect; guard"
    },
    {
        "id": 4047,
        "word": "shift",
        "phonetic": "[ʃɪft]",
        "meaning": "moving from one setting or context to another; moving very slightly"
    },
    {
        "id": 4048,
        "word": "shine",
        "phonetic": "[ʃaɪn]",
        "meaning": "emit rays of light; give light; beam with steady radiance; exhibit brightness or splendor"
    },
    {
        "id": 4049,
        "word": "shiny",
        "phonetic": "[ˈʃaɪni]",
        "meaning": "reflecting light; radiant; bright from reflected light"
    },
    {
        "id": 4050,
        "word": "shipment",
        "phonetic": "[ˈʃɪpmənt]",
        "meaning": "sending of cargo; act of sending off something"
    },
    {
        "id": 4051,
        "word": "shipwreck",
        "phonetic": "[ˈʃɪprɛk]",
        "meaning": "destruction of a ship, as by storm or collision; complete failure or ruin"
    },
    {
        "id": 4052,
        "word": "shiver",
        "phonetic": "[ˈʃɪvə]",
        "meaning": "shake with or as if with cold; tremble; break into fragments or splinters"
    },
    {
        "id": 4053,
        "word": "shock",
        "phonetic": "[ʃɒk]",
        "meaning": "unpleasant or disappointing surprise; surprise greatly; effect of such a collision or blow"
    },
    {
        "id": 4054,
        "word": "short",
        "phonetic": "[ʃɔːt]",
        "meaning": "not long; unwilling to endure; inadequate or insufficient; most direct; lasting a brief time"
    },
    {
        "id": 4055,
        "word": "shortcut",
        "phonetic": "[ˈʃɔːtkʌt]",
        "meaning": "a direct route; a route shorter than the usual one"
    },
    {
        "id": 4056,
        "word": "shot",
        "phonetic": "[ʃɒt]",
        "meaning": "photographic view or exposure"
    },
    {
        "id": 4057,
        "word": "shove",
        "phonetic": "[ʃʌv]",
        "meaning": "drive along by the direct and continuous application of strength; push along, aside, or away, in"
    },
    {
        "id": 4059,
        "word": "shovel",
        "phonetic": "[ˈʃʌvᵊl]",
        "meaning": "tool consisting of a broad scoop, or hollow blade, with a handle, used for lifting and throwing"
    },
    {
        "id": 4061,
        "word": "shower",
        "phonetic": "[ˈʃaʊə]",
        "meaning": "one who shows or exhibits; brief fall of precipitation, such as rain, hail; bath in which the"
    },
    {
        "id": 4063,
        "word": "shrewd",
        "phonetic": "[ʃruːd]",
        "meaning": "clever; characterized by keen awareness, sharp intelligence"
    },
    {
        "id": 4064,
        "word": "shriek",
        "phonetic": "[ʃriːk]",
        "meaning": "sharp, shrill outcry or scream; shrill wild cry such as is caused by sudden or extreme terror,"
    },
    {
        "id": 4066,
        "word": "shrill",
        "phonetic": "[ʃrɪl]",
        "meaning": "acute; sharp; piercing; having or emitting a sharp, piercing tone or sound"
    },
    {
        "id": 4067,
        "word": "shrine",
        "phonetic": "[ʃraɪn]",
        "meaning": "case or box, especially one in which are deposited sacred relics, as the bones of a saint;"
    },
    {
        "id": 4069,
        "word": "shrink",
        "phonetic": "[ʃrɪŋk]",
        "meaning": "become smaller or draw together; compress"
    },
    {
        "id": 4070,
        "word": "shroud",
        "phonetic": "[ʃraʊd]",
        "meaning": "hide from view; wrap for burial; shut off from sight; shelter"
    },
    {
        "id": 4071,
        "word": "shrub",
        "phonetic": "[ʃrʌb]",
        "meaning": "bush"
    },
    {
        "id": 4072,
        "word": "shrug",
        "phonetic": "[ʃrʌɡ]",
        "meaning": "draw up or contract the shoulders, especially by way of expressing dislike, dread, doubt, or"
    },
    {
        "id": 4074,
        "word": "shuffle",
        "phonetic": "[ˈʃʌfᵊl]",
        "meaning": "disorder; move back and forth; mix so as to make a random order or arrangement"
    },
    {
        "id": 4075,
        "word": "shun",
        "phonetic": "[ʃʌn]",
        "meaning": "avoid deliberately; keep away from"
    },
    {
        "id": 4076,
        "word": "shutter",
        "phonetic": "[ˈʃʌtə]",
        "meaning": "a hinged blind for a window"
    },
    {
        "id": 4077,
        "word": "shuttle",
        "phonetic": "[ˈʃʌtᵊl]",
        "meaning": "public transport that consists of a bus or train or airplane that run between two points;"
    },
    {
        "id": 4079,
        "word": "shy",
        "phonetic": "[ʃaɪ]",
        "meaning": "timid; bashful; easily startled; distrustful"
    },
    {
        "id": 4080,
        "word": "sick",
        "phonetic": "[sɪk]",
        "meaning": "affected with disease of any kind; ill; indisposed; not in health"
    },
    {
        "id": 4081,
        "word": "sickness",
        "phonetic": "[ˈsɪknəs]",
        "meaning": "state that precedes vomiting; disease"
    },
    {
        "id": 4082,
        "word": "sideways",
        "phonetic": "[ˈsaɪdweɪz]",
        "meaning": "with the side forward; to or from a side"
    },
    {
        "id": 4083,
        "word": "siege",
        "phonetic": "[siːʤ]",
        "meaning": "seat, especially a royal seat; throne; rank; grade; sitting before a fortified place; surrounding or"
    },
    {
        "id": 4085,
        "word": "sieve",
        "phonetic": "[sɪv]",
        "meaning": "a utensil for separating the finer and coarser parts; a kind of coarse basket"
    },
    {
        "id": 4086,
        "word": "sift",
        "phonetic": "[sɪft]",
        "meaning": "separate with a sieve, as the fine part of a substance from the course; examine critically or"
    },
    {
        "id": 4088,
        "word": "sigh",
        "phonetic": "[saɪ]",
        "meaning": "inhale a larger quantity of air than usual, and immediately expel it; make a deep single audible"
    },
    {
        "id": 4090,
        "word": "sightseeing",
        "phonetic": "[ˈsaɪtˌsiːɪŋ]",
        "meaning": "act or pastime of visiting sights of interest"
    },
    {
        "id": 4091,
        "word": "sign",
        "phonetic": "[saɪn]",
        "meaning": "public display of message; visible mark or indication"
    },
    {
        "id": 4092,
        "word": "signal",
        "phonetic": "[ˈsɪɡnᵊl]",
        "meaning": "a sign made for the purpose of giving notice to a person"
    },
    {
        "id": 4093,
        "word": "signature",
        "phonetic": "[ˈsɪɡnɪʧə]",
        "meaning": "name written in own handwriting"
    },
    {
        "id": 4094,
        "word": "significance",
        "phonetic": "[sɪɡˈnɪfɪkᵊns]",
        "meaning": "message that is intended or expressed or signified; meaning"
    },
    {
        "id": 4095,
        "word": "significant",
        "phonetic": "[sɪɡˈnɪfɪkᵊnt]",
        "meaning": "fairly large; important in effect or meaning"
    },
    {
        "id": 4096,
        "word": "signify",
        "phonetic": "[ˈsɪɡnɪfaɪ]",
        "meaning": "denote; mean; indicate"
    },
    {
        "id": 4097,
        "word": "silly",
        "phonetic": "[ˈsɪli]",
        "meaning": "exhibiting a lack of wisdom or good sense; foolish; stupid"
    },
    {
        "id": 4098,
        "word": "similar",
        "phonetic": "[ˈsɪmɪlə]",
        "meaning": "nearly corresponding; somewhat like; having a general likeness"
    },
    {
        "id": 4099,
        "word": "simplicity",
        "phonetic": "[sɪmˈplɪsəti]",
        "meaning": "easiness; plainness; absence of luxury or showiness; lack of good sense or intelligence;"
    },
    {
        "id": 4101,
        "word": "simplify",
        "phonetic": "[ˈsɪmplɪfaɪ]",
        "meaning": "make simple; make less complex; make clear by giving the explanation for"
    },
    {
        "id": 4102,
        "word": "simulate",
        "phonetic": "[ˈsɪmjəleɪt]",
        "meaning": "make a pretence of; reproduce someone's behavior or looks"
    },
    {
        "id": 4103,
        "word": "simultaneous",
        "phonetic": "[ˌsɪmᵊlˈteɪniəs]",
        "meaning": "existing, happening, or done at the same time"
    },
    {
        "id": 4104,
        "word": "sincere",
        "phonetic": "[sɪnˈsɪə]",
        "meaning": "open and genuine; not deceitful; pure; unmixed"
    },
    {
        "id": 4105,
        "word": "single",
        "phonetic": "[ˈsɪŋɡᵊl]",
        "meaning": "one only; consisting of one alone; alone; having no companion"
    },
    {
        "id": 4106,
        "word": "singular",
        "phonetic": "[ˈsɪŋɡjələ]",
        "meaning": "unique; extraordinary; being only one"
    },
    {
        "id": 4107,
        "word": "sink",
        "phonetic": "[sɪŋk]",
        "meaning": "fall by, force of gravity; descend lower; decline gradually; enter deeply"
    },
    {
        "id": 4108,
        "word": "siren",
        "phonetic": "[ˈsaɪərən]",
        "meaning": "electronic device producing a similar sound as a signal or warning; something insidious or"
    },
    {
        "id": 4110,
        "word": "site",
        "phonetic": "[saɪt]",
        "meaning": "physical position in relation to the surroundings; position; location"
    },
    {
        "id": 4111,
        "word": "skeleton",
        "phonetic": "[ˈskɛlətᵊn]",
        "meaning": "framework; internal supporting structure that gives an artifact its shape"
    },
    {
        "id": 4112,
        "word": "sketch",
        "phonetic": "[skɛʧ]",
        "meaning": "draw or describe briefly; give the main points; summary of"
    },
    {
        "id": 4113,
        "word": "skim",
        "phonetic": "[skɪm]",
        "meaning": "pass near surface of; brush surface of; glide swiftly along surface of; read or examine"
    },
    {
        "id": 4115,
        "word": "skip",
        "phonetic": "[skɪp]",
        "meaning": "jump lightly; hop; bypass"
    },
    {
        "id": 4116,
        "word": "skirmish",
        "phonetic": "[ˈskɜːmɪʃ]",
        "meaning": "minor battle in war; minor or preliminary conflict or dispute"
    },
    {
        "id": 4117,
        "word": "skull",
        "phonetic": "[skʌl]",
        "meaning": "bony skeleton of the head of vertebrates"
    },
    {
        "id": 4118,
        "word": "skyrocket",
        "phonetic": "[ˈskaɪˌrɒkɪt]",
        "meaning": "increase rapidly; rise quickly; soar"
    },
    {
        "id": 4119,
        "word": "skyscraper",
        "phonetic": "[ˈskaɪˌskreɪpə]",
        "meaning": "very tall building with many stories"
    },
    {
        "id": 4120,
        "word": "slack",
        "phonetic": "[slæk]",
        "meaning": "area of still water; lack of tension; cord, rope, or cable that is hanging loosely; unused capacity; "
    },
    {
        "id": 4122,
        "word": "slam",
        "phonetic": "[slæm]",
        "meaning": "shut with force and a loud noise; strike with force"
    },
    {
        "id": 4123,
        "word": "slander",
        "phonetic": "[ˈslɑːndə]",
        "meaning": "defamation; false and malicious statement or report about someone"
    },
    {
        "id": 4124,
        "word": "slap",
        "phonetic": "[slæp]",
        "meaning": "sharp blow from a flat object as an open hand; smack; sharp insult"
    },
    {
        "id": 4125,
        "word": "slaughter",
        "phonetic": "[ˈslɔːtə]",
        "meaning": "act of killing; extensive, violent, bloody, or wanton destruction of life; carnage"
    },
    {
        "id": 4126,
        "word": "slay",
        "phonetic": "[sleɪ]",
        "meaning": "put to death with a weapon, or by violence; kill; put an end to; destroy; overwhelm, as with"
    },
    {
        "id": 4128,
        "word": "slender",
        "phonetic": "[ˈslɛndə]",
        "meaning": "having little width in proportion to height or length; long and thin"
    },
    {
        "id": 4129,
        "word": "slice",
        "phonetic": "[slaɪs]",
        "meaning": "a serving that has been cut from a larger portion; piece; a share of something"
    },
    {
        "id": 4130,
        "word": "slide",
        "phonetic": "[slaɪd]",
        "meaning": "slip; move usually in an uncontrolled manner; move smoothly along a surface"
    },
    {
        "id": 4131,
        "word": "slight",
        "phonetic": "[slaɪt]",
        "meaning": "almost no; very little; deliberate discourtesy"
    },
    {
        "id": 4132,
        "word": "slightly",
        "phonetic": "[ˈslaɪtli]",
        "meaning": "a little; a bit"
    },
    {
        "id": 4133,
        "word": "slim",
        "phonetic": "[slɪm]",
        "meaning": "small in quantity; being of delicate or slender build"
    },
    {
        "id": 4134,
        "word": "slip",
        "phonetic": "[slɪp]",
        "meaning": "move smoothly and easily; move out of position; move stealthily"
    },
    {
        "id": 4135,
        "word": "slipper",
        "phonetic": "[ˈslɪpə]",
        "meaning": "low footwear that can be on and off easily; one who slips or slides because of loss of traction"
    },
    {
        "id": 4136,
        "word": "slippery",
        "phonetic": "[ˈslɪpᵊri]",
        "meaning": "smooth; being such as to cause things to slip or slide"
    },
    {
        "id": 4137,
        "word": "slit",
        "phonetic": "[slɪt]",
        "meaning": "long, straight, narrow cut or opening; slot; pocket"
    },
    {
        "id": 4138,
        "word": "slogan",
        "phonetic": "[ˈsləʊɡən]",
        "meaning": "phrase used repeatedly, as in advertising or promotion"
    },
    {
        "id": 4139,
        "word": "slope",
        "phonetic": "[sləʊp]",
        "meaning": "be at an angle; incline; gradient"
    },
    {
        "id": 4140,
        "word": "slum",
        "phonetic": "[slʌm]",
        "meaning": "a district of a city marked by poverty and inferior living conditions"
    },
    {
        "id": 4141,
        "word": "slumber",
        "phonetic": "[ˈslʌmbə]",
        "meaning": "sleep; state of inactivity or dormancy"
    },
    {
        "id": 4142,
        "word": "slump",
        "phonetic": "[slʌmp]",
        "meaning": "sudden falling off or decline, as in activity, prices, or business; gross amount; mass"
    },
    {
        "id": 4143,
        "word": "smart",
        "phonetic": "[smɑːt]",
        "meaning": "clever; intelligent; showing mental alertness and calculation"
    },
    {
        "id": 4144,
        "word": "smash",
        "phonetic": "[smæʃ]",
        "meaning": "break in pieces by violence; dash to pieces; crush"
    },
    {
        "id": 4145,
        "word": "smog",
        "phonetic": "[smɒɡ]",
        "meaning": "air pollution by a mixture of smoke and fog"
    },
    {
        "id": 4146,
        "word": "smooth",
        "phonetic": "[smuːð]",
        "meaning": "free from obstructions; make surface shine"
    },
    {
        "id": 4147,
        "word": "smoothly",
        "phonetic": "[ˈsmuːðli]",
        "meaning": "in a smooth manner; successfully; easily"
    },
    {
        "id": 4148,
        "word": "smuggle",
        "phonetic": "[ˈsmʌɡᵊl]",
        "meaning": "import or export without paying customs duties"
    },
    {
        "id": 4149,
        "word": "snack",
        "phonetic": "[snæk]",
        "meaning": "eat light informal meal; eat lightly"
    },
    {
        "id": 4150,
        "word": "snap",
        "phonetic": "[snæp]",
        "meaning": "make a sharp sound; break suddenly as under tension; utter in angry or sharp tone"
    },
    {
        "id": 4151,
        "word": "snatch",
        "phonetic": "[snæʧ]",
        "meaning": "grasp or seize hastily, eagerly, or suddenly"
    },
    {
        "id": 4152,
        "word": "sneak",
        "phonetic": "[sniːk]",
        "meaning": "creep or steal privately; come or go meanly, as a person afraid or ashamed to be seen"
    },
    {
        "id": 4153,
        "word": "sneer",
        "phonetic": "[snɪə]",
        "meaning": "show contempt by turning up the nose, or by a particular facial expression; speak derisively;"
    },
    {
        "id": 4155,
        "word": "snob",
        "phonetic": "[snɒb]",
        "meaning": "vulgar person who affects to be better, richer, or more fashionable, than he really is; one who"
    },
    {
        "id": 4157,
        "word": "snobbish",
        "phonetic": "[ˈsnɒbɪʃ]",
        "meaning": "of or pertaining to a snob; vulgarly pretentious"
    },
    {
        "id": 4158,
        "word": "soak",
        "phonetic": "[səʊk]",
        "meaning": "cause or suffer to lie in a fluid; absorb; drain; drink intemperately or gluttonously"
    },
    {
        "id": 4159,
        "word": "soar",
        "phonetic": "[sɔː]",
        "meaning": "fly aloft, as a bird; mount upward on wings; rise in thought, spirits, or imagination"
    },
    {
        "id": 4160,
        "word": "sober",
        "phonetic": "[ˈsəʊbə]",
        "meaning": "not extreme; marked by seriousness or gravity; not affected by use of drugs; self-restraint"
    },
    {
        "id": 4161,
        "word": "sociable",
        "phonetic": "[ˈsəʊʃəbᵊl]",
        "meaning": "gregarious; friendly; inclined to or conducive to companionship with others"
    },
    {
        "id": 4162,
        "word": "sociology",
        "phonetic": "[ˌsəʊsiˈɒləʤi]",
        "meaning": "branch of philosophy which treats of the constitution, phenomena, and development of"
    },
    {
        "id": 4164,
        "word": "sock",
        "phonetic": "[sɒk]",
        "meaning": "plowshare; short stocking reaching a point between ankle and knee; hard blow or punch; comic"
    },
    {
        "id": 4166,
        "word": "soil",
        "phonetic": "[sɔɪl]",
        "meaning": "material in the surface of the earth"
    },
    {
        "id": 4167,
        "word": "solar",
        "phonetic": "[ˈsəʊlə]",
        "meaning": "of or relating to the sun"
    },
    {
        "id": 4168,
        "word": "soldier",
        "phonetic": "[ˈsəʊlʤə]",
        "meaning": "one who is engaged in military service as an officer or a private; one who serves in an army"
    },
    {
        "id": 4169,
        "word": "sole",
        "phonetic": "[səʊl]",
        "meaning": "bottom; underside of foot or shoe or boot; bottom surface of a plow"
    },
    {
        "id": 4170,
        "word": "solely",
        "phonetic": "[ˈsəʊlli]",
        "meaning": "alone; only; without another"
    },
    {
        "id": 4171,
        "word": "solemn",
        "phonetic": "[ˈsɒləm]",
        "meaning": "serious; somber; deeply earnest, serious, and sober"
    },
    {
        "id": 4172,
        "word": "solicitor",
        "phonetic": "[səˈlɪsɪtə]",
        "meaning": "petitioner who seeks contributions or trade or votes; chief law officer of a city, town, or"
    },
    {
        "id": 4174,
        "word": "solidarity",
        "phonetic": "[ˌsɒlɪˈdærəti]",
        "meaning": "union of interests, purposes, or sympathies among members of a group; accord"
    },
    {
        "id": 4175,
        "word": "solitary",
        "phonetic": "[ˈsɒlɪtᵊri]",
        "meaning": "isolated; existing, living, or going without others; alone; unaccompanied"
    },
    {
        "id": 4176,
        "word": "solitude",
        "phonetic": "[ˈsɒlɪtjuːd]",
        "meaning": "state of being alone; seclusion; lonely or secluded place"
    },
    {
        "id": 4177,
        "word": "solo",
        "phonetic": "[ˈsəʊləʊ]",
        "meaning": "composed or performed by a single voice or instrument; unaccompanied; single"
    },
    {
        "id": 4178,
        "word": "solution",
        "phonetic": "[səˈluːʃᵊn]",
        "meaning": "method for solving a problem; successful action of solving a problem"
    },
    {
        "id": 4179,
        "word": "solvent",
        "phonetic": "[ˈsɒlvᵊnt]",
        "meaning": "able to pay all debts; capable of meeting financial obligations"
    },
    {
        "id": 4180,
        "word": "somehow",
        "phonetic": "[ˈsʌmhaʊ]",
        "meaning": "in one way or another; in some way not yet known; by some means"
    },
    {
        "id": 4181,
        "word": "somewhat",
        "phonetic": "[ˈsʌmwɒt]",
        "meaning": "to some extent or degree; rather; a bit; slightly"
    },
    {
        "id": 4182,
        "word": "soothe",
        "phonetic": "[suːð]",
        "meaning": "cause to feel better; give moral or emotional strength to"
    },
    {
        "id": 4183,
        "word": "sophisticated",
        "phonetic": "[səˈfɪstɪkeɪtɪd]",
        "meaning": "wide-ranging knowledge; complex; intellectually appealing"
    },
    {
        "id": 4184,
        "word": "sophistication",
        "phonetic": "[səˌfɪstɪˈkeɪʃᵊn]",
        "meaning": "being expert or having knowledge of some technical subject"
    },
    {
        "id": 4185,
        "word": "sore",
        "phonetic": "[sɔː]",
        "meaning": "skin infection; hurting; inflamed and painful; source of pain, distress, or irritation"
    },
    {
        "id": 4186,
        "word": "sort",
        "phonetic": "[sɔːt]",
        "meaning": "kind or species; a class of;"
    },
    {
        "id": 4187,
        "word": "sound",
        "phonetic": "[saʊnd]",
        "meaning": "sensation perceived by the ear; distinctive noise; long narrow inlet"
    },
    {
        "id": 4188,
        "word": "sour",
        "phonetic": "[saʊə]",
        "meaning": "taste experience when vinegar or lemon juice; showing ill humor"
    },
    {
        "id": 4189,
        "word": "source",
        "phonetic": "[sɔːs]",
        "meaning": "point of origin, such as spring, of stream or river; one that causes, creates, or initiates"
    },
    {
        "id": 4190,
        "word": "souvenir",
        "phonetic": "[ˌsuːvəˈnɪə]",
        "meaning": "token of remembrance; memento; something of sentimental value"
    },
    {
        "id": 4191,
        "word": "sovereign",
        "phonetic": "[ˈsɒvᵊrɪn]",
        "meaning": "having supreme rank or power; self governing; excellent; independent"
    },
    {
        "id": 4192,
        "word": "sovereignty",
        "phonetic": "[ˈsɒvrɪnti]",
        "meaning": "autonomy; independence"
    },
    {
        "id": 4193,
        "word": "sow",
        "phonetic": "[səʊ]",
        "meaning": "plant; place seeds in or on"
    },
    {
        "id": 4194,
        "word": "soy",
        "phonetic": "[sɔɪ]",
        "meaning": "soybean; most highly protein vegetable"
    },
    {
        "id": 4195,
        "word": "spacecraft",
        "phonetic": "[ˈspeɪskrɑːft]",
        "meaning": "a vehicle for travelling in space"
    },
    {
        "id": 4196,
        "word": "spaceship",
        "phonetic": "[ˈspeɪsʃɪp]",
        "meaning": "spacecraft designed to carry a crew into interstellar space"
    },
    {
        "id": 4197,
        "word": "spacious",
        "phonetic": "[ˈspeɪʃəs]",
        "meaning": "wide; generous or large in area or extent; sizable"
    },
    {
        "id": 4198,
        "word": "span",
        "phonetic": "[spæn]",
        "meaning": "duration; distance; cover; extent or measure of space between two points"
    },
    {
        "id": 4199,
        "word": "spare",
        "phonetic": "[speə]",
        "meaning": "give up what is not strictly needed; hold back from; withhold or avoid; save or relieve from"
    },
    {
        "id": 4201,
        "word": "spark",
        "phonetic": "[spɑːk]",
        "meaning": "flash; sparkle; emit or produce sparks"
    },
    {
        "id": 4202,
        "word": "sparkle",
        "phonetic": "[ˈspɑːkl]",
        "meaning": "be brilliant in performance; give off or reflect flashes of light; glitter"
    },
    {
        "id": 4203,
        "word": "sparrow",
        "phonetic": "[ˈspærəʊ]",
        "meaning": "any of several small dull-colored singing birds feeding on seeds or insects"
    },
    {
        "id": 4204,
        "word": "spatial",
        "phonetic": "[ˈspeɪʃᵊl]",
        "meaning": "relating to space; existing in or connected with space"
    },
    {
        "id": 4205,
        "word": "spear",
        "phonetic": "[spɪə]",
        "meaning": "a long, pointed weapon, used in war and hunting, by thrusting or throwing"
    },
    {
        "id": 4206,
        "word": "specialize",
        "phonetic": "[ˈspɛʃᵊlaɪz]",
        "meaning": "mention specially; particularize; apply to some specialty or limited object"
    },
    {
        "id": 4207,
        "word": "specialized",
        "phonetic": "[ˈspɛʃᵊlaɪzd]",
        "meaning": "developed or designed for a special activity or function"
    },
    {
        "id": 4208,
        "word": "species",
        "phonetic": "[ˈspiːʃiːz]",
        "meaning": "a specific kind of something"
    },
    {
        "id": 4209,
        "word": "specific",
        "phonetic": "[spəˈsɪfɪk]",
        "meaning": "stated explicitly or in detail; definite"
    },
    {
        "id": 4210,
        "word": "specification",
        "phonetic": "[ˌspɛsɪfɪˈkeɪʃᵊn]",
        "meaning": "instruction; description; act of specifying, or making a detailed statement"
    },
    {
        "id": 4211,
        "word": "specify",
        "phonetic": "[ˈspɛsɪfaɪ]",
        "meaning": "detail; designate"
    },
    {
        "id": 4212,
        "word": "specimen",
        "phonetic": "[ˈspɛsɪmən]",
        "meaning": "model; sample; an example regarded as typical of its class"
    },
    {
        "id": 4213,
        "word": "spectacle",
        "phonetic": "[ˈspɛktəkl]",
        "meaning": "demonstration; show"
    },
    {
        "id": 4214,
        "word": "spectacular",
        "phonetic": "[spɛkˈtækjələ]",
        "meaning": "impressive or sensational; lavishly produced performance; grand"
    },
    {
        "id": 4215,
        "word": "spectator",
        "phonetic": "[spɛkˈteɪtə]",
        "meaning": "observer; audience; one who looks on"
    },
    {
        "id": 4216,
        "word": "spectrum",
        "phonetic": "[ˈspɛktrəm]",
        "meaning": "colored band produced when beam of light passes through a prism; a range of values"
    },
    {
        "id": 4217,
        "word": "speculate",
        "phonetic": "[ˈspɛkjəleɪt]",
        "meaning": "assume to be true without conclusive evidence; engage in buying or selling of a"
    },
    {
        "id": 4219,
        "word": "speculation",
        "phonetic": "[ˌspɛkjəˈleɪʃᵊn]",
        "meaning": "speculating; examination by eye; intellectual check; business venture in unusual risks,"
    },
    {
        "id": 4221,
        "word": "speedy",
        "phonetic": "[ˈspiːdi]",
        "meaning": "fast; rapid; accomplished or arrived at without delay; prompt"
    },
    {
        "id": 4222,
        "word": "spell",
        "phonetic": "[spɛl]",
        "meaning": "name or write in order the letters constituting; add up to; signify"
    },
    {
        "id": 4223,
        "word": "sphere",
        "phonetic": "[sfɪə]",
        "meaning": "ball; globe; a particular aspect of life or activity"
    },
    {
        "id": 4224,
        "word": "spill",
        "phonetic": "[spɪl]",
        "meaning": "pour; sudden drop from an upright position; flow or run out"
    },
    {
        "id": 4225,
        "word": "spin",
        "phonetic": "[spɪn]",
        "meaning": "turn round rapidly; move round rapidly; move swiftly"
    },
    {
        "id": 4226,
        "word": "spiral",
        "phonetic": "[ˈspaɪərᵊl]",
        "meaning": "rotary; curled; moving in a zigzag course; moving in shape of a coil"
    },
    {
        "id": 4227,
        "word": "spiritual",
        "phonetic": "[ˈspɪrɪʧuəl]",
        "meaning": "not tangible or material; belonging to religion; sacred; supernatural"
    },
    {
        "id": 4228,
        "word": "spit",
        "phonetic": "[spɪt]",
        "meaning": "expel or eject from the mouth; rain gently"
    },
    {
        "id": 4229,
        "word": "spite",
        "phonetic": "[spaɪt]",
        "meaning": "ill-will or hatred toward another, accompanied with the disposition to irritate, annoy, or thwart"
    },
    {
        "id": 4230,
        "word": "splash",
        "phonetic": "[splæʃ]",
        "meaning": "cause fluid to scatter in flying masses; strike and dash about, as water, mud"
    },
    {
        "id": 4231,
        "word": "splendid",
        "phonetic": "[ˈsplɛndɪd]",
        "meaning": "shining; very bright; magnificent; brilliant"
    },
    {
        "id": 4232,
        "word": "split",
        "phonetic": "[splɪt]",
        "meaning": "break apart; cut; devide"
    },
    {
        "id": 4233,
        "word": "spoil",
        "phonetic": "[spɔːɪl]",
        "meaning": "go bad; rot; decay; become unfit for consumption or use"
    },
    {
        "id": 4234,
        "word": "spokesman",
        "phonetic": "[ˈspəʊksmən]",
        "meaning": "one who speaks for another"
    },
    {
        "id": 4235,
        "word": "sponge",
        "phonetic": "[spʌnʤ]",
        "meaning": "soaking up; small absorbent contraceptive pad, used for bathing or cleaning"
    },
    {
        "id": 4236,
        "word": "sponsor",
        "phonetic": "[ˈspɒnsə]",
        "meaning": "one who binds himself to answer for another, and is responsible for his default; godfather or"
    },
    {
        "id": 4238,
        "word": "spontaneous",
        "phonetic": "[spɒnˈteɪniəs]",
        "meaning": "arising without external cause; growing without cultivation or human labor"
    },
    {
        "id": 4239,
        "word": "spoon",
        "phonetic": "[spuːn]",
        "meaning": "a piece of cutlery with a shallow bowl-shaped container and a handle"
    },
    {
        "id": 4240,
        "word": "sport",
        "phonetic": "[spɔːt]",
        "meaning": "activity that is governed by a set of rules or customs and often engaged in competitively"
    },
    {
        "id": 4241,
        "word": "spot",
        "phonetic": "[spɒt]",
        "meaning": "location; place; site; pinpoint; mark to allow easy recognition"
    },
    {
        "id": 4242,
        "word": "sprain",
        "phonetic": "[spreɪn]",
        "meaning": "violent wrenching of the soft parts surrounding a joint; injury caused by pushing or pressing;"
    },
    {
        "id": 4244,
        "word": "spray",
        "phonetic": "[spreɪ]",
        "meaning": "a quantity of small objects flying through air"
    },
    {
        "id": 4245,
        "word": "spring",
        "phonetic": "[sprɪŋ]",
        "meaning": "develop suddenly; jump; move forward by leaps and bounds"
    },
    {
        "id": 4246,
        "word": "sprout",
        "phonetic": "[spraʊt]",
        "meaning": "have new growth of a plant such as a new branch or a bud; shoot up"
    },
    {
        "id": 4247,
        "word": "spur",
        "phonetic": "[spɜː]",
        "meaning": "urge a horse; incite or stimulate; ride quickly by spurring a horse; proceed in haste"
    },
    {
        "id": 4248,
        "word": "square",
        "phonetic": "[skweə]",
        "meaning": "be compatible with; cause to match; cut to rectangular shape; bring into agreement or"
    },
    {
        "id": 4250,
        "word": "squash",
        "phonetic": "[skwɒʃ]",
        "meaning": "a game played in an enclosed court by two or four players who strike the ball with longhandled"
    },
    {
        "id": 4252,
        "word": "squat",
        "phonetic": "[skwɒt]",
        "meaning": "stocky; short and thick; low and broad"
    },
    {
        "id": 4253,
        "word": "squeeze",
        "phonetic": "[skwiːz]",
        "meaning": "force something into or through a restricted space; compress with violence"
    },
    {
        "id": 4254,
        "word": "squirrel",
        "phonetic": "[ˈskwɪrᵊl]",
        "meaning": "a kind of arboreal rodent having a long bushy tail"
    },
    {
        "id": 4255,
        "word": "stab",
        "phonetic": "[stæb]",
        "meaning": "pierce with a pointed weapon; wound or kill by pointed instrument"
    },
    {
        "id": 4256,
        "word": "stability",
        "phonetic": "[stəˈbɪləti]",
        "meaning": "balance; constancy"
    },
    {
        "id": 4257,
        "word": "stable",
        "phonetic": "[ˈsteɪbᵊl]",
        "meaning": "not easily moved or disturbed"
    },
    {
        "id": 4258,
        "word": "stack",
        "phonetic": "[stæk]",
        "meaning": "an orderly pile; heap; a large number ; arrange in pile"
    },
    {
        "id": 4259,
        "word": "stadium",
        "phonetic": "[ˈsteɪdiəm]",
        "meaning": "large, usually open structure for sports events with tiered seating for spectators"
    },
    {
        "id": 4260,
        "word": "staff",
        "phonetic": "[stɑːf]",
        "meaning": "personnel who assist superior to carry out assigned task"
    },
    {
        "id": 4261,
        "word": "stagger",
        "phonetic": "[ˈstæɡə]",
        "meaning": "sway; walk as if unable to control one's movements"
    },
    {
        "id": 4262,
        "word": "stain",
        "phonetic": "[steɪn]",
        "meaning": "soiled or discolored; symbol of disgrace or infamy; natural spot of a color different from the"
    },
    {
        "id": 4264,
        "word": "staircase",
        "phonetic": "[ˈsteəkeɪs]",
        "meaning": "a way of access consisting of a set of steps"
    },
    {
        "id": 4265,
        "word": "stake",
        "phonetic": "[steɪk]",
        "meaning": "money risked on gamble; pole set up to mark something; right or legal share of something"
    },
    {
        "id": 4266,
        "word": "stale",
        "phonetic": "[steɪl]",
        "meaning": "having lost freshness; lacking originality or spontaneity"
    },
    {
        "id": 4267,
        "word": "stalk",
        "phonetic": "[stɔːk]",
        "meaning": "go through an area in search of prey; pursue; walk with a stiff or angry gait; move threateningly"
    },
    {
        "id": 4268,
        "word": "stall",
        "phonetic": "[stɔːl]",
        "meaning": "small area set off by walls for special use; booth"
    },
    {
        "id": 4269,
        "word": "stammer",
        "phonetic": "[ˈstæmə]",
        "meaning": "make involuntary stops in uttering syllables or words; hesitate or falter in speaking; speak"
    },
    {
        "id": 4271,
        "word": "standard",
        "phonetic": "[ˈstændəd]",
        "meaning": "criteria; basis for comparison"
    },
    {
        "id": 4272,
        "word": "standardize",
        "phonetic": "[ˈstændədaɪz]",
        "meaning": "normalize; cause to conform to a standard"
    },
    {
        "id": 4273,
        "word": "standing",
        "phonetic": "[ˈstændɪŋ]",
        "meaning": "high reputation; esteem; maintaining an erect position"
    },
    {
        "id": 4274,
        "word": "standpoint",
        "phonetic": "[ˈstændpɔɪnt]",
        "meaning": "a mental position from which things are viewed"
    },
    {
        "id": 4275,
        "word": "staple",
        "phonetic": "[ˈsteɪpᵊl]",
        "meaning": "necessary foods or commodities; basic elements; secure or fasten; a short U-shaped wire nail"
    },
    {
        "id": 4277,
        "word": "stapler",
        "phonetic": "[ˈsteɪpᵊlə]",
        "meaning": "one who deals in staple goods or staple fibers; device used to bind material together by"
    },
    {
        "id": 4279,
        "word": "startle",
        "phonetic": "[ˈstɑːtᵊl]",
        "meaning": "move suddenly, or be excited; excite by sudden alarm, surprise"
    },
    {
        "id": 4280,
        "word": "starvation",
        "phonetic": "[stɑːˈveɪʃᵊn]",
        "meaning": "act of depriving of food or subjecting to famine"
    },
    {
        "id": 4281,
        "word": "starve",
        "phonetic": "[stɑːv]",
        "meaning": "hunger; deprive of food"
    },
    {
        "id": 4282,
        "word": "statesman",
        "phonetic": "[ˈsteɪtsmən]",
        "meaning": "one occupied with the affairs of government, and influential in shaping policy"
    },
    {
        "id": 4283,
        "word": "static",
        "phonetic": "[ˈstætɪk]",
        "meaning": "having no motion; being at rest; fixed; stationary"
    },
    {
        "id": 4284,
        "word": "stationary",
        "phonetic": "[ˈsteɪʃᵊnᵊri]",
        "meaning": "fixed; immobile; static; not capable of being moved"
    },
    {
        "id": 4285,
        "word": "stationery",
        "phonetic": "[ˈsteɪʃᵊnᵊri]",
        "meaning": "paper cut to right size for writing letters; writing materials and office supplies"
    },
    {
        "id": 4286,
        "word": "statistics",
        "phonetic": "[stəˈtɪstɪks]",
        "meaning": "a branch of applied mathematics concerned with the collection and interpretation of"
    },
    {
        "id": 4288,
        "word": "statue",
        "phonetic": "[ˈstæʧuː]",
        "meaning": "sculpture representing a human or animal"
    },
    {
        "id": 4289,
        "word": "status",
        "phonetic": "[ˈsteɪtəs]",
        "meaning": "position relative to others; standing"
    },
    {
        "id": 4290,
        "word": "statute",
        "phonetic": "[ˈstæʧuːt]",
        "meaning": "law enacted by legislature; decree or edict, as of a ruler"
    },
    {
        "id": 4291,
        "word": "steady",
        "phonetic": "[ˈstɛdi]",
        "meaning": "securely in position; not shaky; not easily excited"
    },
    {
        "id": 4292,
        "word": "steak",
        "phonetic": "[steɪk]",
        "meaning": "slice of meat, typically beef, usually cut thick"
    },
    {
        "id": 4293,
        "word": "steamer",
        "phonetic": "[ˈstiːmə]",
        "meaning": "vessel propelled by steam; steamship or steamboat; road locomotive for use on common"
    },
    {
        "id": 4295,
        "word": "steep",
        "phonetic": "[stiːp]",
        "meaning": "soak; make thoroughly wet"
    },
    {
        "id": 4296,
        "word": "steer",
        "phonetic": "[stɪə]",
        "meaning": "drive; direct; guide by means of a device such as a rudder, paddle, or wheel"
    },
    {
        "id": 4297,
        "word": "stem",
        "phonetic": "[stɛm]",
        "meaning": "stop flow of a liquid; make headway against"
    },
    {
        "id": 4298,
        "word": "stereo",
        "phonetic": "[ˈstɛriəʊ]",
        "meaning": "stereophonic sound-reproduction system"
    },
    {
        "id": 4299,
        "word": "sterling",
        "phonetic": "[ˈstɜːlɪŋ]",
        "meaning": "any English coin of standard value; coined money"
    },
    {
        "id": 4300,
        "word": "stern",
        "phonetic": "[stɜːn]",
        "meaning": "hard, harsh, or severe in manner or character; firm or unyielding"
    },
    {
        "id": 4301,
        "word": "steward",
        "phonetic": "[ˈstjuːəd]",
        "meaning": "man employed in a large family, a large estate, a hotel, a club, or on board a ship to"
    },
    {
        "id": 4303,
        "word": "stick",
        "phonetic": "[stɪk]",
        "meaning": "fasten into place by fixing an end; be a follower or supporter"
    },
    {
        "id": 4304,
        "word": "sticky",
        "phonetic": "[ˈstɪki]",
        "meaning": "glutinous; adhesive; covered with an adhesive agent; humid; stiff"
    },
    {
        "id": 4305,
        "word": "stiff",
        "phonetic": "[stɪf]",
        "meaning": "not moving or operating freely; lacking ease in bending; resistant"
    },
    {
        "id": 4306,
        "word": "stimulate",
        "phonetic": "[ˈstɪmjəleɪt]",
        "meaning": "encourage; motivate; arouse; spur; excite or invigorate with a stimulant"
    },
    {
        "id": 4307,
        "word": "stimulation",
        "phonetic": "[ˌstɪmjəˈleɪʃᵊn]",
        "meaning": "arousing an organism to action"
    },
    {
        "id": 4308,
        "word": "sting",
        "phonetic": "[stɪŋ]",
        "meaning": "pierce painfully with sharp pointed structure or organ; cause to suffer keenly in the mind or"
    },
    {
        "id": 4310,
        "word": "stink",
        "phonetic": "[stɪŋk]",
        "meaning": "strong, offensive smell; disgusting odor; stench"
    },
    {
        "id": 4311,
        "word": "stipulate",
        "phonetic": "[ˈstɪpjəleɪt]",
        "meaning": "specify or arrange in agreement; express demand in agreement; promise in agreement"
    },
    {
        "id": 4312,
        "word": "stipulation",
        "phonetic": "[ˌstɪpjəˈleɪʃᵊn]",
        "meaning": "provision; an agreement made by parties in a judicial proceeding"
    },
    {
        "id": 4313,
        "word": "stitch",
        "phonetic": "[stɪʧ]",
        "meaning": "sew; knit; fasten or join with or as if with thread"
    },
    {
        "id": 4314,
        "word": "stock",
        "phonetic": "[stɒk]",
        "meaning": "certificate for shareholder of corporation; total amount of goods in a shop"
    },
    {
        "id": 4315,
        "word": "stomach",
        "phonetic": "[ˈstʌmək]",
        "meaning": "principal organ of digestion; abdomen or belly; appetite for food; desire, especially for"
    },
    {
        "id": 4317,
        "word": "stoop",
        "phonetic": "[stuːp]",
        "meaning": "bend forward and down from the waist or the middle of the back"
    },
    {
        "id": 4318,
        "word": "storey",
        "phonetic": "[ˈstɔːri]",
        "meaning": "story"
    },
    {
        "id": 4319,
        "word": "stout",
        "phonetic": "[staʊt]",
        "meaning": "dependable; stocky; euphemisms for fat"
    },
    {
        "id": 4320,
        "word": "straightforward",
        "phonetic": "[streɪtˈfɔːwəd]",
        "meaning": "proceeding in a straight course or manner; not deviating; honest; frank."
    },
    {
        "id": 4321,
        "word": "strain",
        "phonetic": "[streɪn]",
        "meaning": "group of organisms within a species; tension; pressure"
    },
    {
        "id": 4322,
        "word": "strait",
        "phonetic": "[streɪt]",
        "meaning": "difficult; stressful; narrow; not broad; tight; close; closely fitting"
    },
    {
        "id": 4323,
        "word": "strand",
        "phonetic": "[strænd]",
        "meaning": "complex of fibers that twisted together to form a cable, rope, thread; land bordering a body of"
    },
    {
        "id": 4325,
        "word": "strap",
        "phonetic": "[stræp]",
        "meaning": "belt; band that goes over the shoulder and supports a garment or bag"
    },
    {
        "id": 4326,
        "word": "strategic",
        "phonetic": "[strəˈtiːʤɪk]",
        "meaning": "important or essential in relation to a plan of action; essential to the effective conduct of"
    },
    {
        "id": 4328,
        "word": "strategy",
        "phonetic": "[ˈstrætəʤi]",
        "meaning": "elaborate and systematic plan; plan of action intended to accomplish a specific goal"
    },
    {
        "id": 4329,
        "word": "streak",
        "phonetic": "[striːk]",
        "meaning": "a line or long mark of a different color from the ground; stripe; vein"
    },
    {
        "id": 4330,
        "word": "strengthen",
        "phonetic": "[ˈstrɛŋθᵊn]",
        "meaning": "reinforce; fortify; make strong or increase the strength of"
    },
    {
        "id": 4331,
        "word": "stress",
        "phonetic": "[strɛs]",
        "meaning": "put special emphasis on; utter with an accent; state of extreme difficulty, pressure, or strain"
    },
    {
        "id": 4332,
        "word": "stretch",
        "phonetic": "[strɛʧ]",
        "meaning": "extend; pull in opposite directions; lie down comfortably"
    },
    {
        "id": 4333,
        "word": "stride",
        "phonetic": "[straɪd]",
        "meaning": "step; pace; significant progress"
    },
    {
        "id": 4334,
        "word": "strife",
        "phonetic": "[straɪf]",
        "meaning": "act of striving; earnest endeavor; exertion or contention for superiority; contest of emulation,"
    },
    {
        "id": 4336,
        "word": "strike",
        "phonetic": "[straɪk]",
        "meaning": "a group's refusal to work in protest against low pay or bad work conditions"
    },
    {
        "id": 4337,
        "word": "striking",
        "phonetic": "[ˈstraɪkɪŋ]",
        "meaning": "dramatic; outstanding; arresting attention and producing a vivid impression"
    },
    {
        "id": 4338,
        "word": "string",
        "phonetic": "[strɪŋ]",
        "meaning": "lightweight cord; a collection of objects threaded on a single strand; plant fiber"
    },
    {
        "id": 4339,
        "word": "strip",
        "phonetic": "[strɪp]",
        "meaning": "remove the surface from"
    },
    {
        "id": 4340,
        "word": "stripe",
        "phonetic": "[straɪp]",
        "meaning": "a kind or category; band; ribbon"
    },
    {
        "id": 4341,
        "word": "strive",
        "phonetic": "[straɪv]",
        "meaning": "endeavor; struggle or fight forcefully; exert much effort or energy"
    },
    {
        "id": 4342,
        "word": "stroke",
        "phonetic": "[strəʊk]",
        "meaning": "blow; light touch; sudden loss of consciousness for brain blood vessel lacking oxygen"
    },
    {
        "id": 4343,
        "word": "stroll",
        "phonetic": "[strəʊl]",
        "meaning": "wander on foot; ramble idly or leisurely"
    },
    {
        "id": 4344,
        "word": "structural",
        "phonetic": "[ˈstrʌkʧᵊrᵊl]",
        "meaning": "of structure; affecting structure; constructional"
    },
    {
        "id": 4345,
        "word": "structure",
        "phonetic": "[ˈstrʌkʧə]",
        "meaning": "complex construction or entity; complex composition of knowledge"
    },
    {
        "id": 4346,
        "word": "stubborn",
        "phonetic": "[ˈstʌbən]",
        "meaning": "unreasonably, often perversely unyielding; persistent; difficult to treat"
    },
    {
        "id": 4347,
        "word": "studio",
        "phonetic": "[ˈstjuːdiəʊ]",
        "meaning": "workplace for the teaching or practice of an art"
    },
    {
        "id": 4348,
        "word": "stuff",
        "phonetic": "[stʌf]",
        "meaning": "unspecified objects; tangible substance"
    },
    {
        "id": 4349,
        "word": "stuffy",
        "phonetic": "[ˈstʌfi]",
        "meaning": "stout; lacking sufficient ventilation; close; dull and boring"
    },
    {
        "id": 4350,
        "word": "stumble",
        "phonetic": "[ˈstʌmbᵊl]",
        "meaning": "miss a step and fall or nearly fall; walk unsteadily"
    },
    {
        "id": 4351,
        "word": "sturdy",
        "phonetic": "[ˈstɜːdi]",
        "meaning": "robust; strong; substantially made or constructed"
    },
    {
        "id": 4352,
        "word": "style",
        "phonetic": "[staɪl]",
        "meaning": "particular kind; a way of expressing something"
    },
    {
        "id": 4353,
        "word": "subdue",
        "phonetic": "[səbˈdjuː]",
        "meaning": "quiet or bring under control by physical force or persuasion; make less intense; tone down"
    },
    {
        "id": 4354,
        "word": "subject",
        "phonetic": "[ˈsʌbʤɪkt]",
        "meaning": "something to be treated; course or area of study"
    },
    {
        "id": 4355,
        "word": "subjective",
        "phonetic": "[səbˈʤɛktɪv]",
        "meaning": "occurring or taking place in person's mind rather than external world; unreal"
    },
    {
        "id": 4356,
        "word": "submarine",
        "phonetic": "[ˌsʌbməˈriːn]",
        "meaning": "submersible warship; move forward or under in a sliding motion; underwater"
    },
    {
        "id": 4357,
        "word": "submerge",
        "phonetic": "[səbˈmɜːʤ]",
        "meaning": "sink; immerse; put under water"
    },
    {
        "id": 4358,
        "word": "submit",
        "phonetic": "[səbˈmɪt]",
        "meaning": "refer for judgment or consideration; hand in; present"
    },
    {
        "id": 4359,
        "word": "subordinate",
        "phonetic": "[səˈbɔːdɪnət]",
        "meaning": "occupying lower rank; inferior; submissive"
    },
    {
        "id": 4360,
        "word": "subscribe",
        "phonetic": "[səbˈskraɪb]",
        "meaning": "write underneath, as one's name; sign to a document; give consent to; promise to give, by"
    },
    {
        "id": 4362,
        "word": "subsequent",
        "phonetic": "[ˈsʌbsɪkwənt]",
        "meaning": "following in time or order; succeeding; later"
    },
    {
        "id": 4363,
        "word": "subsequently",
        "phonetic": "[ˈsʌbsɪkwəntli]",
        "meaning": "in a subsequent manner; at a later time; accordingly; therefore"
    },
    {
        "id": 4364,
        "word": "subsidiary",
        "phonetic": "[səbˈsɪdiəri]",
        "meaning": "subordinate; secondary; serving to assist or supplement"
    },
    {
        "id": 4365,
        "word": "substantial",
        "phonetic": "[səbˈstænʃᵊl]",
        "meaning": "fairly large; in essentials; material; true or real; not imaginary; solidly built"
    },
    {
        "id": 4366,
        "word": "substantiate",
        "phonetic": "[səbˈstænʃieɪt]",
        "meaning": "establish by evidence; make firm or solid; support"
    },
    {
        "id": 4367,
        "word": "substitute",
        "phonetic": "[ˈsʌbstɪtjuːt]",
        "meaning": "exchange; put in the place of another"
    },
    {
        "id": 4368,
        "word": "subtle",
        "phonetic": "[ˈsʌtᵊl]",
        "meaning": "slight; be difficult to detect or grasp by the mind"
    },
    {
        "id": 4369,
        "word": "subtract",
        "phonetic": "[səbˈtrækt]",
        "meaning": "remove a part from the whole"
    },
    {
        "id": 4370,
        "word": "subtraction",
        "phonetic": "[səbˈtrækʃᵊn]",
        "meaning": "reduction; deduction; removing a part from the whole"
    },
    {
        "id": 4371,
        "word": "suburb",
        "phonetic": "[ˈsʌbɜːb]",
        "meaning": "outskirts; usually residential area or community outlying a city"
    },
    {
        "id": 4372,
        "word": "succession",
        "phonetic": "[səkˈsɛʃᵊn]",
        "meaning": "act of succeeding, or following after; following of things in order of time or place, or a"
    },
    {
        "id": 4374,
        "word": "successive",
        "phonetic": "[səkˈsɛsɪv]",
        "meaning": "consecutive"
    },
    {
        "id": 4375,
        "word": "successor",
        "phonetic": "[səkˈsɛsə]",
        "meaning": "one who or that which succeeds or follows; one who takes the place which another has"
    },
    {
        "id": 4377,
        "word": "suck",
        "phonetic": "[sʌk]",
        "meaning": "draw liquid into mouth; take in; draw something by vacuum"
    },
    {
        "id": 4378,
        "word": "suffice",
        "phonetic": "[səˈfaɪs]",
        "meaning": "be enough, or sufficient; meet the need; be equal to the end proposed; be adequate; satisfy"
    },
    {
        "id": 4379,
        "word": "sufficient",
        "phonetic": "[səˈfɪʃᵊnt]",
        "meaning": "adequate; enough; being as much as is needed"
    },
    {
        "id": 4380,
        "word": "suit",
        "phonetic": "[suːt]",
        "meaning": "meet the requirements of; fit; please; satisfy"
    },
    {
        "id": 4381,
        "word": "suitable",
        "phonetic": "[ˈsuːtəbᵊl]",
        "meaning": "appropriate to a purpose or an occasion"
    },
    {
        "id": 4382,
        "word": "suitcase",
        "phonetic": "[ˈsuːtkeɪs]",
        "meaning": "portable rectangular traveling bag for carrying clothes"
    },
    {
        "id": 4383,
        "word": "suite",
        "phonetic": "[swiːt]",
        "meaning": "apartment consisting of a series of connected rooms; a matching set of furniture"
    },
    {
        "id": 4384,
        "word": "sullen",
        "phonetic": "[ˈsʌlən]",
        "meaning": "lonely; solitary; desolate; gloomy; dismal; affected with ill humor"
    },
    {
        "id": 4385,
        "word": "sultry",
        "phonetic": "[ˈsʌltri]",
        "meaning": "burning hot; extremely and unpleasantly hot"
    },
    {
        "id": 4386,
        "word": "sum",
        "phonetic": "[sʌm]",
        "meaning": "mount or whole of any number of individuals or particulars added together; principal points or"
    },
    {
        "id": 4388,
        "word": "summary",
        "phonetic": "[ˈsʌmᵊri]",
        "meaning": "brief statement that presents the main points"
    },
    {
        "id": 4389,
        "word": "summit",
        "phonetic": "[ˈsʌmɪt]",
        "meaning": "utmost height; highest point of a mountain"
    },
    {
        "id": 4390,
        "word": "summon",
        "phonetic": "[ˈsʌmən]",
        "meaning": "call, bid, or cite; notify to come to appear; call upon to surrender"
    },
    {
        "id": 4391,
        "word": "sunburn",
        "phonetic": "[ˈsʌnbɜːn]",
        "meaning": "redness of the skin caused by exposure to the rays of the sun"
    },
    {
        "id": 4392,
        "word": "sunflower",
        "phonetic": "[ˈsʌnˌflaʊə]",
        "meaning": "plant having large flower heads with dark disk florets and showy yellow rays"
    },
    {
        "id": 4393,
        "word": "sunlight",
        "phonetic": "[ˈsʌnlaɪt]",
        "meaning": "rays of the sun"
    },
    {
        "id": 4394,
        "word": "sunrise",
        "phonetic": "[ˈsʌnraɪz]",
        "meaning": "daily event of the sun rising above the horizon"
    },
    {
        "id": 4395,
        "word": "sunset",
        "phonetic": "[ˈsʌnsɛt]",
        "meaning": "daily event of the sun sinking below the horizon"
    },
    {
        "id": 4396,
        "word": "sunshine",
        "phonetic": "[ˈsʌnʃaɪn]",
        "meaning": "moderate weather; suitable for outdoor activities; the rays of the sun"
    },
    {
        "id": 4397,
        "word": "superb",
        "phonetic": "[suːˈpɜːb]",
        "meaning": "of unusually high quality; excellent; wonderful"
    },
    {
        "id": 4398,
        "word": "superficial",
        "phonetic": "[ˌsuːpəˈfɪʃᵊl]",
        "meaning": "trivial; of little substance; involving a surface only"
    },
    {
        "id": 4399,
        "word": "superintendent",
        "phonetic": "[ˌsuːpərɪnˈtɛndᵊnt]",
        "meaning": "director; person who has the authority to supervise or direct; janitor or custodian in a"
    },
    {
        "id": 4401,
        "word": "superior",
        "phonetic": "[suːˈpɪəriə]",
        "meaning": "greater rank or station or quality; excellent"
    },
    {
        "id": 4402,
        "word": "supersede",
        "phonetic": "[ˈsuːpəˈsiːd]",
        "meaning": "be placed in or take the room of; replace; make obsolete; make void or useless by"
    },
    {
        "id": 4404,
        "word": "supersonic",
        "phonetic": "[ˈsuːpəˈsɒnɪk]",
        "meaning": "having, caused by, or relating to speed greater than the speed of sound"
    },
    {
        "id": 4405,
        "word": "superstition",
        "phonetic": "[ˌsuːpəˈstɪʃᵊn]",
        "meaning": "excessive reverence for, or fear of, that which is unknown or mysterious; worship of a"
    },
    {
        "id": 4407,
        "word": "supervise",
        "phonetic": "[ˈsuːpəvaɪz]",
        "meaning": "administer; direct"
    },
    {
        "id": 4408,
        "word": "supervision",
        "phonetic": "[ˌsuːpəˈvɪʒᵊn]",
        "meaning": "management by overseeing the performance"
    },
    {
        "id": 4409,
        "word": "supervisor",
        "phonetic": "[ˈsuːpəvaɪzə]",
        "meaning": "director; overseer; one who is in charge of a particular unit, as in government or school"
    },
    {
        "id": 4411,
        "word": "supplement",
        "phonetic": "[ˈsʌplɪmənt]",
        "meaning": "add as something seems insufficient; complement; extension; addition"
    },
    {
        "id": 4412,
        "word": "supplementary",
        "phonetic": "[ˌsʌplɪˈmɛntᵊri]",
        "meaning": "added to complete or make up a deficiency"
    },
    {
        "id": 4413,
        "word": "suppose",
        "phonetic": "[səˈpəʊz]",
        "meaning": "imagine or admit to exist; assume to be true; believe; receive as true"
    },
    {
        "id": 4414,
        "word": "suppress",
        "phonetic": "[səˈprɛs]",
        "meaning": "put down by force or authority; overwhelm; keep from being revealed"
    },
    {
        "id": 4415,
        "word": "supreme",
        "phonetic": "[suːˈpriːm]",
        "meaning": "most outstanding; highest; superior"
    },
    {
        "id": 4416,
        "word": "surcharge",
        "phonetic": "[ˈsɜːʧɑːʤ]",
        "meaning": "an additional charge; charge an extra fee"
    },
    {
        "id": 4417,
        "word": "surface",
        "phonetic": "[ˈsɜːfɪs]",
        "meaning": "exterior part of anything that has length and breadth; outside; outward or external"
    },
    {
        "id": 4419,
        "word": "surge",
        "phonetic": "[sɜːʤ]",
        "meaning": "outburst; roll or be tossed about on waves, as a boat"
    },
    {
        "id": 4420,
        "word": "surgeon",
        "phonetic": "[ˈsɜːʤᵊn]",
        "meaning": "one who performs manual operations on a patient"
    },
    {
        "id": 4421,
        "word": "surgery",
        "phonetic": "[ˈsɜːʤᵊri]",
        "meaning": "medical treatment that involves cutting open a person's body"
    },
    {
        "id": 4422,
        "word": "surmise",
        "phonetic": "[sɜːˈmaɪz]",
        "meaning": "guess; infer something without sufficiently conclusive evidence"
    },
    {
        "id": 4423,
        "word": "surpass",
        "phonetic": "[sɜːˈpɑːs]",
        "meaning": "be or go beyond, as in degree or quality; exceed"
    },
    {
        "id": 4424,
        "word": "surplus",
        "phonetic": "[ˈsɜːpləs]",
        "meaning": "remainder; more than is needed; quantity much larger than is needed; remaining"
    },
    {
        "id": 4425,
        "word": "surrender",
        "phonetic": "[səˈrɛndə]",
        "meaning": "hand over, give up, give something into another's control"
    },
    {
        "id": 4426,
        "word": "survey",
        "phonetic": "[ˈsɜːveɪ]",
        "meaning": "poll; detailed critical inspection"
    },
    {
        "id": 4427,
        "word": "survival",
        "phonetic": "[səˈvaɪvᵊl]",
        "meaning": "existence; remaining alive"
    },
    {
        "id": 4428,
        "word": "survive",
        "phonetic": "[səˈvaɪv]",
        "meaning": "continue to live; endure or last"
    },
    {
        "id": 4429,
        "word": "survivor",
        "phonetic": "[səˈvaɪvə]",
        "meaning": "one who outlives another; one who lives through affliction"
    },
    {
        "id": 4430,
        "word": "suspect",
        "phonetic": "[ˈsʌspɛkt]",
        "meaning": "have doubts about; distrust"
    },
    {
        "id": 4431,
        "word": "suspend",
        "phonetic": "[səˈspɛnd]",
        "meaning": "hang freely; postpone; delay"
    },
    {
        "id": 4432,
        "word": "suspense",
        "phonetic": "[səˈspɛns]",
        "meaning": "uncertain cognitive state; uncertainty"
    },
    {
        "id": 4433,
        "word": "suspicion",
        "phonetic": "[səˈspɪʃᵊn]",
        "meaning": "mistrust; act of suspecting something, especially something wrong, on little evidence or"
    },
    {
        "id": 4435,
        "word": "suspicious",
        "phonetic": "[səˈspɪʃəs]",
        "meaning": "openly distrustful and unwilling to confide; questionable"
    },
    {
        "id": 4436,
        "word": "sustain",
        "phonetic": "[səˈsteɪn]",
        "meaning": "admit as valid; keep in existence; lengthen or extend in duration or space"
    },
    {
        "id": 4437,
        "word": "swallow",
        "phonetic": "[ˈswɒləʊ]",
        "meaning": "take back what one has said ; enclose or envelop completely"
    },
    {
        "id": 4438,
        "word": "swamp",
        "phonetic": "[swɒmp]",
        "meaning": "low land that is seasonally flooded; low land region saturated with water"
    },
    {
        "id": 4439,
        "word": "swarm",
        "phonetic": "[swɔːm]",
        "meaning": "dense moving crowd; large group of honeybees"
    },
    {
        "id": 4440,
        "word": "sway",
        "phonetic": "[sweɪ]",
        "meaning": "swing; move back and forth or sideways; win approval or support for; convince"
    },
    {
        "id": 4441,
        "word": "swear",
        "phonetic": "[sweə]",
        "meaning": "affirm or utter a solemn declaration; make promise or resolve on oath"
    },
    {
        "id": 4442,
        "word": "sweater",
        "phonetic": "[ˈswɛtə]",
        "meaning": "knitted garment covering the upper part of the body"
    },
    {
        "id": 4443,
        "word": "sweep",
        "phonetic": "[swiːp]",
        "meaning": "movement in an arc; clean with a broom; wide scope; winning all"
    },
    {
        "id": 4444,
        "word": "swell",
        "phonetic": "[swɛl]",
        "meaning": "bulge; expand abnormally; increase in size; become filled with pride or anger"
    },
    {
        "id": 4445,
        "word": "swift",
        "phonetic": "[swɪft]",
        "meaning": "quick; moving or capable of moving with great speed"
    },
    {
        "id": 4446,
        "word": "swing",
        "phonetic": "[swɪŋ]",
        "meaning": "sway or move from one side to another; turn round by wind or tide; be hanged"
    },
    {
        "id": 4447,
        "word": "syllable",
        "phonetic": "[ˈsɪləbᵊl]",
        "meaning": "a unit of spoken language larger than a phoneme"
    },
    {
        "id": 4448,
        "word": "symbol",
        "phonetic": "[ˈsɪmbᵊl]",
        "meaning": "sign; something visible to represent something else invisible"
    },
    {
        "id": 4449,
        "word": "symbolize",
        "phonetic": "[ˈsɪmbᵊlaɪz]",
        "meaning": "represent; signify; stand for"
    },
    {
        "id": 4450,
        "word": "symmetry",
        "phonetic": "[ˈsɪmətri]",
        "meaning": "arrangement of parts so that balance is obtained; congruity"
    },
    {
        "id": 4451,
        "word": "sympathetic",
        "phonetic": "[ˌsɪmpəˈθɛtɪk]",
        "meaning": "expressing compassion or friendly fellow feelings; approving; having similar disposition"
    },
    {
        "id": 4453,
        "word": "sympathize",
        "phonetic": "[ˈsɪmpəθaɪz]",
        "meaning": "be understanding of; feel or express sympathy or compassion"
    },
    {
        "id": 4454,
        "word": "sympathy",
        "phonetic": "[ˈsɪmpəθi]",
        "meaning": "compassion; pity; concern"
    },
    {
        "id": 4455,
        "word": "symphony",
        "phonetic": "[ˈsɪmfəni]",
        "meaning": "large orchestra; harmony, especially of sound or color"
    },
    {
        "id": 4456,
        "word": "symposium",
        "phonetic": "[sɪmˈpəʊziəm]",
        "meaning": "collection of writings on a particular topic, as in a magazine; meeting or conference for"
    },
    {
        "id": 4458,
        "word": "symptom",
        "phonetic": "[ˈsɪmptəm]",
        "meaning": "sign; indication; any sensation or change in bodily function that is experienced by a patient"
    },
    {
        "id": 4459,
        "word": "synonym",
        "phonetic": "[ˈsɪnənɪm]",
        "meaning": "two words that can be interchanged in a context"
    },
    {
        "id": 4460,
        "word": "synthesis",
        "phonetic": "[ˈsɪnθəsɪs]",
        "meaning": "combining parts into a coherent whole; putting of two or more things togethe"
    },
    {
        "id": 4461,
        "word": "synthetic",
        "phonetic": "[sɪnˈθɛtɪk]",
        "meaning": "artificial; involving or of the nature of synthesis as opposed to analysis"
    },
    {
        "id": 4462,
        "word": "system",
        "phonetic": "[ˈsɪstəm]",
        "meaning": "organized structure for arranging or classifying"
    },
    {
        "id": 4463,
        "word": "systematic",
        "phonetic": "[ˌsɪstəˈmætɪk]",
        "meaning": "ordered; methodical; carried on using step-by-step procedures "
    },
    {
        "id": 4468,
        "word": "table",
        "phonetic": "[ˈteɪbᵊl]",
        "meaning": "set resolution or proposal for future consideration; hold back to a later time"
    },
    {
        "id": 4469,
        "word": "tablet",
        "phonetic": "[ˈtæblət]",
        "meaning": "a small flat compressed cake of some substance; a dose of medicine"
    },
    {
        "id": 4470,
        "word": "tack",
        "phonetic": "[tæk]",
        "meaning": "small, short, sharp-pointed nail, usually having a broad, flat head"
    },
    {
        "id": 4471,
        "word": "tackle",
        "phonetic": "[ˈtækᵊl]",
        "meaning": "apparatus for raising or lowering heavy weights, consisting of a rope and pulley blocks; act of"
    },
    {
        "id": 4473,
        "word": "tact",
        "phonetic": "[tækt]",
        "meaning": "sense of touch; feeling; stroke in beating time; sensitive mental touch; peculiar skill or faculty"
    },
    {
        "id": 4474,
        "word": "tactics",
        "phonetic": "[ˈtæktɪks]",
        "meaning": "strategy; policy; plan for attaining a particular goal"
    },
    {
        "id": 4475,
        "word": "tag",
        "phonetic": "[tæɡ]",
        "meaning": "attach; append; provide with a name or nickname; label"
    },
    {
        "id": 4476,
        "word": "tailor",
        "phonetic": "[ˈteɪlə]",
        "meaning": "one whose occupation is making garments; create clothes with cloth"
    },
    {
        "id": 4477,
        "word": "talent",
        "phonetic": "[ˈtælᵊnt]",
        "meaning": "skill; gift; marked innate ability, as for artistic accomplishment"
    },
    {
        "id": 4478,
        "word": "tally",
        "phonetic": "[ˈtæli]",
        "meaning": "record by making a mark; reckon or count; keep score"
    },
    {
        "id": 4479,
        "word": "tame",
        "phonetic": "[teɪm]",
        "meaning": "domesticated; very restrained or quiet; make less strong or intense; soften"
    },
    {
        "id": 4480,
        "word": "tan",
        "phonetic": "[tæn]",
        "meaning": "yellowish-brown color; brown color imparted to the skin by exposure to the sun"
    },
    {
        "id": 4481,
        "word": "tangle",
        "phonetic": "[ˈtæŋɡᵊl]",
        "meaning": "uniting or knitting together confusedly; knot of threads, or other thing, united confusedly, or so"
    },
    {
        "id": 4483,
        "word": "tap",
        "phonetic": "[tæp]",
        "meaning": "draw upon; strike lightly; make good use of"
    },
    {
        "id": 4484,
        "word": "tape",
        "phonetic": "[teɪp]",
        "meaning": "long thin piece of cloth or paper; measuring instrument for length by narrow strip"
    },
    {
        "id": 4485,
        "word": "tar",
        "phonetic": "[tɑː]",
        "meaning": "sailor or seaman; thick, black, viscous liquid obtained by the distillation of wood, coal"
    },
    {
        "id": 4486,
        "word": "target",
        "phonetic": "[ˈtɑːɡɪt]",
        "meaning": "reference point to shoot at; goal intended to be attained"
    },
    {
        "id": 4487,
        "word": "tariff",
        "phonetic": "[ˈtærɪf]",
        "meaning": "tax on goods coming into a country"
    },
    {
        "id": 4488,
        "word": "task",
        "phonetic": "[tɑːsk]",
        "meaning": "labor or study imposed by another; undertake; labor"
    },
    {
        "id": 4489,
        "word": "taste",
        "phonetic": "[teɪst]",
        "meaning": "have experience or enjoyment; take a sample of; have flavor"
    },
    {
        "id": 4490,
        "word": "taxation",
        "phonetic": "[tækˈseɪʃᵊn]",
        "meaning": "laying a tax, or imposing taxes, as on the subjects of a state, by authority; raising of"
    },
    {
        "id": 4492,
        "word": "team",
        "phonetic": "[tiːm]",
        "meaning": "a number of persons associated together in any work; a flock of wild ducks"
    },
    {
        "id": 4493,
        "word": "teapot",
        "phonetic": "[ˈtiːpɒt]",
        "meaning": "pot for brewing tea; usually has a spout and handle"
    },
    {
        "id": 4494,
        "word": "tear",
        "phonetic": "[teə]",
        "meaning": "separate or be separated by force; divide or disrupt; fill with tears or shed tears"
    },
    {
        "id": 4495,
        "word": "tease",
        "phonetic": "[tiːz]",
        "meaning": "tear into pieces; raise the fibers of"
    },
    {
        "id": 4496,
        "word": "technical",
        "phonetic": "[ˈtɛknɪkᵊl]",
        "meaning": "having special skill or knowledge; according to principle; formal rather than practical;"
    },
    {
        "id": 4498,
        "word": "technician",
        "phonetic": "[tɛkˈnɪʃᵊn]",
        "meaning": "one skilled particularly in the technical details of work"
    },
    {
        "id": 4499,
        "word": "technique",
        "phonetic": "[tɛkˈniːk]",
        "meaning": "practical method or art applied to some particular task; skillfulness"
    },
    {
        "id": 4500,
        "word": "technology",
        "phonetic": "[tɛkˈnɒləʤi]",
        "meaning": "application of science, especially to industrial or commercial objectives"
    },
    {
        "id": 4501,
        "word": "tedious",
        "phonetic": "[ˈtiːdiəs]",
        "meaning": "tiresome by reason of length, slowness, or dullness; progressing very slowly"
    },
    {
        "id": 4502,
        "word": "telegraph",
        "phonetic": "[ˈtɛlɪɡrɑːf]",
        "meaning": "apparatus used to communicate at a distance over a wire"
    },
    {
        "id": 4503,
        "word": "telescope",
        "phonetic": "[ˈtɛlɪskəʊp]",
        "meaning": "a magnifier of images of distant objects"
    },
    {
        "id": 4504,
        "word": "telex",
        "phonetic": "[ˈtɛlɛks]",
        "meaning": "communications system consisting of teletypewriters connected to a telephonic network to"
    },
    {
        "id": 4506,
        "word": "temper",
        "phonetic": "[ˈtɛmpə]",
        "meaning": "moderate; tone down or restrain; bring to a desired consistency; adjust finely"
    },
    {
        "id": 4507,
        "word": "temperature",
        "phonetic": "[ˈtɛmprəʧə]",
        "meaning": "degree of any quality; condition with respect to heat or cold; degree of heat or cold"
    },
    {
        "id": 4508,
        "word": "temple",
        "phonetic": "[ˈtɛmpᵊl]",
        "meaning": "church; place of worship"
    },
    {
        "id": 4509,
        "word": "temporary",
        "phonetic": "[ˈtɛmpᵊrᵊri]",
        "meaning": "not permanent; not lasting"
    },
    {
        "id": 4510,
        "word": "tempt",
        "phonetic": "[tɛmpt]",
        "meaning": "give rise to a desire by being attractive"
    },
    {
        "id": 4511,
        "word": "temptation",
        "phonetic": "[tɛmpˈteɪʃᵊn]",
        "meaning": "act of tempting, or enticing to evil; seduction"
    },
    {
        "id": 4512,
        "word": "tenant",
        "phonetic": "[ˈtɛnənt]",
        "meaning": "occupant; one that pays rent to use land or building"
    },
    {
        "id": 4513,
        "word": "tend",
        "phonetic": "[tɛnd]",
        "meaning": "make a tender of; be disposed or inclined; move or extend in a certain direction"
    },
    {
        "id": 4514,
        "word": "tendency",
        "phonetic": "[ˈtɛndənsi]",
        "meaning": "trend; a general direction in which something tends to move"
    },
    {
        "id": 4515,
        "word": "tender",
        "phonetic": "[ˈtɛndə]",
        "meaning": "offer formally; extend; propose a payment"
    },
    {
        "id": 4516,
        "word": "tenor",
        "phonetic": "[ˈtɛnə]",
        "meaning": "general, usual, or prevailing course or direction; settled or prevailing or habitual course of a"
    },
    {
        "id": 4518,
        "word": "tense",
        "phonetic": "[tɛns]",
        "meaning": "stretch or force to the limit; tight"
    },
    {
        "id": 4519,
        "word": "tension",
        "phonetic": "[ˈtɛnʃᵊn]",
        "meaning": "action of stretching something tight; anxiety; feelings of hostility"
    },
    {
        "id": 4520,
        "word": "tentative",
        "phonetic": "[ˈtɛntətɪv]",
        "meaning": "hesitant; not fully worked out or developed; experimental; not definite or positive"
    },
    {
        "id": 4521,
        "word": "term",
        "phonetic": "[tɜːm]",
        "meaning": "limited period of time; point in time at which something ends; termination; deadline"
    },
    {
        "id": 4522,
        "word": "terminal",
        "phonetic": "[ˈtɜːmɪnᵊl]",
        "meaning": "causing or ending in or approaching death; station"
    },
    {
        "id": 4523,
        "word": "terminate",
        "phonetic": "[ˈtɜːmɪneɪt]",
        "meaning": "stop; bring to an end or halt"
    },
    {
        "id": 4524,
        "word": "termination",
        "phonetic": "[ˌtɜːmɪˈneɪʃᵊn]",
        "meaning": "end of something in time or space; result or outcome; conclusion"
    },
    {
        "id": 4525,
        "word": "terminology",
        "phonetic": "[ˌtɜːmɪˈnɒləʤi]",
        "meaning": "vocabulary of technical terms used in a particular field, subject, science, or art"
    },
    {
        "id": 4526,
        "word": "terrace",
        "phonetic": "[ˈtɛrəs]",
        "meaning": "row of houses built in a similar style; level shelf of land with steep slopes"
    },
    {
        "id": 4527,
        "word": "terribly",
        "phonetic": "[ˈtɛrəbli]",
        "meaning": "dreadfully; frightfully; to a great extent; very much"
    },
    {
        "id": 4528,
        "word": "terrific",
        "phonetic": "[təˈrɪfɪk]",
        "meaning": "causing extreme terror; very great; extraordinarily good"
    },
    {
        "id": 4529,
        "word": "terrify",
        "phonetic": "[ˈtɛrɪfaɪ]",
        "meaning": "frighten; fill with terror"
    },
    {
        "id": 4530,
        "word": "territory",
        "phonetic": "[ˈtɛrɪtᵊri]",
        "meaning": "large extent of land; organized portion of country"
    },
    {
        "id": 4531,
        "word": "terror",
        "phonetic": "[ˈtɛrə]",
        "meaning": "extreme fear; violent dread; fright"
    },
    {
        "id": 4532,
        "word": "testify",
        "phonetic": "[ˈtɛstɪfaɪ]",
        "meaning": "give testimony in a court of law; provide evidence for"
    },
    {
        "id": 4533,
        "word": "testimony",
        "phonetic": "[ˈtɛstɪmᵊni]",
        "meaning": "solemn declaration or affirmation; something that serves as evidence"
    },
    {
        "id": 4534,
        "word": "text",
        "phonetic": "[tɛkst]",
        "meaning": "written words; book prepared for use in schools or colleges"
    },
    {
        "id": 4535,
        "word": "textile",
        "phonetic": "[ˈtɛkstaɪl]",
        "meaning": "cloth; fabric"
    },
    {
        "id": 4536,
        "word": "theatrical",
        "phonetic": "[θiˈætrɪkᵊl]",
        "meaning": "of or pertaining to theater, or to scenic representations; resembling manner of dramatic"
    },
    {
        "id": 4538,
        "word": "theft",
        "phonetic": "[θɛft]",
        "meaning": "act of taking something from someone unlawfully; stealing"
    },
    {
        "id": 4539,
        "word": "theme",
        "phonetic": "[θiːm]",
        "meaning": "subject of conversation or discussion; topic; essay"
    },
    {
        "id": 4540,
        "word": "theoretical",
        "phonetic": "[θɪəˈrɛtɪkᵊl]",
        "meaning": "not practical or applied; hypothetical; of or based on theory"
    },
    {
        "id": 4541,
        "word": "theory",
        "phonetic": "[ˈθɪəri]",
        "meaning": "doctrine or scheme of things; general or abstract principles of any science"
    },
    {
        "id": 4542,
        "word": "thereby",
        "phonetic": "[ˌðeəˈbaɪ]",
        "meaning": "thus; accordingly; by that means; because of that"
    },
    {
        "id": 4543,
        "word": "therefore",
        "phonetic": "[ˈðeəfɔː]",
        "meaning": "consequently; hence"
    },
    {
        "id": 4544,
        "word": "thermometer",
        "phonetic": "[θəˈmɒmɪtə]",
        "meaning": "instrument for measuring temperature"
    },
    {
        "id": 4545,
        "word": "thesis",
        "phonetic": "[ˈθiːsɪs]",
        "meaning": "paper; dissertation; an unproved statement put forward as a premise in an argument"
    },
    {
        "id": 4546,
        "word": "thigh",
        "phonetic": "[θaɪ]",
        "meaning": "part of the leg between the hip and the knee"
    },
    {
        "id": 4547,
        "word": "thirst",
        "phonetic": "[θɜːst]",
        "meaning": "sensation of dryness in the throat"
    },
    {
        "id": 4548,
        "word": "thorn",
        "phonetic": "[θɔːn]",
        "meaning": "something that causes irritation; a sharp-pointed tip on a stem or leaf"
    },
    {
        "id": 4549,
        "word": "thorough",
        "phonetic": "[ˈθʌrə]",
        "meaning": "accurate or careful; complete"
    },
    {
        "id": 4550,
        "word": "thoughtful",
        "phonetic": "[ˈθɔːtfᵊl]",
        "meaning": "considerate; having intellectual depth; giving close attention"
    },
    {
        "id": 4551,
        "word": "thrash",
        "phonetic": "[θræʃ]",
        "meaning": "beat severely; discuss or examine repeatedly; use a machine or flail to separate grain or"
    },
    {
        "id": 4553,
        "word": "thread",
        "phonetic": "[θrɛd]",
        "meaning": "a very small twist of flax, wool, cotton, silk, or other fibrous substance; filament, as of a flower,"
    },
    {
        "id": 4555,
        "word": "threaten",
        "phonetic": "[ˈθrɛtᵊn]",
        "meaning": "pose a threat to; present a danger to"
    },
    {
        "id": 4556,
        "word": "threshold",
        "phonetic": "[ˈθrɛʃhəʊld]",
        "meaning": "entrance; starting point for a new state or experience"
    },
    {
        "id": 4557,
        "word": "thrifty",
        "phonetic": "[ˈθrɪfti]",
        "meaning": "careful about money; economical"
    },
    {
        "id": 4558,
        "word": "thrill",
        "phonetic": "[θrɪl]",
        "meaning": "feel sudden intense sensation or emotion; tremble as from fear or excitement"
    },
    {
        "id": 4559,
        "word": "thrive",
        "phonetic": "[θraɪv]",
        "meaning": "make steady progress; prosper; flourish"
    },
    {
        "id": 4560,
        "word": "throat",
        "phonetic": "[θrəʊt]",
        "meaning": "part of neck in front of; passage to stomach and lung"
    },
    {
        "id": 4561,
        "word": "throng",
        "phonetic": "[θrɒŋ]",
        "meaning": "large group of people gathered or crowded closely together"
    },
    {
        "id": 4562,
        "word": "throughout",
        "phonetic": "[θruːˈaʊt]",
        "meaning": "in every part; in or through all parts; everywhere; during the entire time or extent"
    },
    {
        "id": 4563,
        "word": "thrust",
        "phonetic": "[θrʌst]",
        "meaning": "push; force used in pushing ; activity or idea is the main or essential thing it expresses"
    },
    {
        "id": 4564,
        "word": "thumb",
        "phonetic": "[θʌm]",
        "meaning": "short, thick first digit of human hand"
    },
    {
        "id": 4565,
        "word": "thunder",
        "phonetic": "[ˈθʌndə]",
        "meaning": "sound which follows flash of lightning; discharge of electricity; loud noise"
    },
    {
        "id": 4566,
        "word": "thunderstorm",
        "phonetic": "[ˈθʌndəstɔːm]",
        "meaning": "storm resulting from strong rising air currents; heavy rain or hail along with thunder"
    },
    {
        "id": 4568,
        "word": "tick",
        "phonetic": "[tɪk]",
        "meaning": "emit recurring clicking sounds; do well or as designed"
    },
    {
        "id": 4569,
        "word": "tide",
        "phonetic": "[taɪd]",
        "meaning": "periodic rise and fall of the sea level"
    },
    {
        "id": 4570,
        "word": "tidy",
        "phonetic": "[ˈtaɪdi]",
        "meaning": "being in proper time; timely; arranged in good order; orderly; appropriate; neat; kept in proper"
    },
    {
        "id": 4571,
        "word": "tighten",
        "phonetic": "[ˈtaɪtᵊn]",
        "meaning": "draw tighter; straiten; make closer in any manner."
    },
    {
        "id": 4572,
        "word": "tile",
        "phonetic": "[taɪl]",
        "meaning": "flat thin rectangular slab used to cover surfaces; short length of pipe made of clay or concrete,"
    },
    {
        "id": 4574,
        "word": "tilt",
        "phonetic": "[tɪlt]",
        "meaning": "slight but noticeable partiality; line or surface that departs from the vertical"
    },
    {
        "id": 4575,
        "word": "timber",
        "phonetic": "[ˈtɪmbə]",
        "meaning": "wood; lumber; trees or wooded land considered as a source of wood"
    },
    {
        "id": 4576,
        "word": "timely",
        "phonetic": "[ˈtaɪmli]",
        "meaning": "being or occurring in good time; sufficiently early; seasonable"
    },
    {
        "id": 4577,
        "word": "timid",
        "phonetic": "[ˈtɪmɪd]",
        "meaning": "shy; craven; lacking self-confidence; shy"
    },
    {
        "id": 4578,
        "word": "tip",
        "phonetic": "[tɪp]",
        "meaning": "piece or attachment; end of a pointed or projecting object; a V shape ; indication of potential"
    },
    {
        "id": 4580,
        "word": "tissue",
        "phonetic": "[ˈtɪʃuː]",
        "meaning": "groups of cells that make particular parts of the body; soft thin paper"
    },
    {
        "id": 4581,
        "word": "title",
        "phonetic": "[ˈtaɪtᵊl]",
        "meaning": "right or claim to possession; mark of rank; name of a book or film"
    },
    {
        "id": 4582,
        "word": "toast",
        "phonetic": "[təʊst]",
        "meaning": "dry and brown by heat of fire; warm thoroughly; drink to the health or in honor"
    },
    {
        "id": 4583,
        "word": "toe",
        "phonetic": "[təʊ]",
        "meaning": "one of digits of the foot; forepart of a foot or hoof"
    },
    {
        "id": 4584,
        "word": "toil",
        "phonetic": "[tɔɪl]",
        "meaning": "exhausting labor or effort; any thread, web, or string spread for taking prey"
    },
    {
        "id": 4585,
        "word": "token",
        "phonetic": "[ˈtəʊkᵊn]",
        "meaning": "something intended or supposed to represent or indicate another thing or an event; sign or"
    },
    {
        "id": 4587,
        "word": "tolerable",
        "phonetic": "[ˈtɒlərəbᵊl]",
        "meaning": "capable of being borne or endured; supportable, either physically or mentally."
    },
    {
        "id": 4588,
        "word": "tolerance",
        "phonetic": "[ˈtɒlᵊrᵊns]",
        "meaning": "capacity for or the practice of recognizing and respecting the beliefs or practices of others;"
    },
    {
        "id": 4590,
        "word": "tolerant",
        "phonetic": "[ˈtɒlᵊrᵊnt]",
        "meaning": "showing respect for the rights of others; open-minded; showing capacity for endurance"
    },
    {
        "id": 4591,
        "word": "tolerate",
        "phonetic": "[ˈtɒləreɪt]",
        "meaning": "endure; withstand; allow without prohibiting or opposing; permit"
    },
    {
        "id": 4592,
        "word": "toll",
        "phonetic": "[təʊl]",
        "meaning": "take away; vacate; annul; entice; allure; cause to sound, as a bell, with strokes slowly and"
    },
    {
        "id": 4594,
        "word": "tongue",
        "phonetic": "[tʌŋ]",
        "meaning": "organ situated in floor of mouth; speech; language; clapper of bell"
    },
    {
        "id": 4595,
        "word": "topic",
        "phonetic": "[ˈtɒpɪk]",
        "meaning": "subject of a speech, essay, thesis, discussion, or conversation"
    },
    {
        "id": 4596,
        "word": "torch",
        "phonetic": "[tɔːʧ]",
        "meaning": "large candle or lamp giving flaring flame; flashlight"
    },
    {
        "id": 4597,
        "word": "torrent",
        "phonetic": "[ˈtɒrᵊnt]",
        "meaning": "rushing stream; flood; heavy downpour"
    },
    {
        "id": 4598,
        "word": "torture",
        "phonetic": "[ˈtɔːʧə]",
        "meaning": "extreme pain; anguish of body or mind"
    },
    {
        "id": 4599,
        "word": "toss",
        "phonetic": "[tɒs]",
        "meaning": "throw carelessly; throw to see which side comes up; move or stir about violently"
    },
    {
        "id": 4600,
        "word": "tough",
        "phonetic": "[tʌf]",
        "meaning": "hard; difficult; feeling physical discomfort or pain; hard to bear"
    },
    {
        "id": 4601,
        "word": "tourism",
        "phonetic": "[ˈtʊərɪzᵊm]",
        "meaning": "practice of traveling for pleasure; business of providing tours and services for tourists"
    },
    {
        "id": 4602,
        "word": "tow",
        "phonetic": "[təʊ]",
        "meaning": "draw or pull behind by a chain or line"
    },
    {
        "id": 4603,
        "word": "towel",
        "phonetic": "[taʊəl]",
        "meaning": "rectangular cloth or paper for drying or wiping"
    },
    {
        "id": 4604,
        "word": "tower",
        "phonetic": "[ˈtaʊə]",
        "meaning": "building or part of a building that is exceptionally high in proportion to its width and length; tall,"
    },
    {
        "id": 4606,
        "word": "trace",
        "phonetic": "[treɪs]",
        "meaning": "follow, discover; make a mark or lines on a surface"
    },
    {
        "id": 4607,
        "word": "track",
        "phonetic": "[træk]",
        "meaning": "road or path affording passage; line or route along which something moves"
    },
    {
        "id": 4608,
        "word": "tractor",
        "phonetic": "[ˈtræktə]",
        "meaning": "a truck that has a cab but no body"
    },
    {
        "id": 4609,
        "word": "tradition",
        "phonetic": "[trəˈdɪʃᵊn]",
        "meaning": "thought or behavior followed from generation to generation; heritage"
    },
    {
        "id": 4610,
        "word": "tragedy",
        "phonetic": "[ˈtræʤədi]",
        "meaning": "disaster; event resulting in great loss and misfortune"
    },
    {
        "id": 4611,
        "word": "trail",
        "phonetic": "[treɪl]",
        "meaning": "path or track roughly through wild or hilly country; overland route"
    },
    {
        "id": 4612,
        "word": "traitor",
        "phonetic": "[ˈtreɪtə]",
        "meaning": "one who violates his allegiance and betrays his country"
    },
    {
        "id": 4613,
        "word": "tramp",
        "phonetic": "[træmp]",
        "meaning": "travel or wander through; cleanse clothes in water"
    },
    {
        "id": 4614,
        "word": "trample",
        "phonetic": "[ˈtræmpᵊl]",
        "meaning": "destroy; step on"
    },
    {
        "id": 4615,
        "word": "tranquil",
        "phonetic": "[ˈtræŋkwɪl]",
        "meaning": "free from disturbance; pacific"
    },
    {
        "id": 4616,
        "word": "transaction",
        "phonetic": "[trænˈzækʃᵊn]",
        "meaning": "deal; communication involving two or more people that affects all those involved"
    },
    {
        "id": 4617,
        "word": "transfer",
        "phonetic": "[ˈtrænsfɜː]",
        "meaning": "shifting; conveyance or removal of something from one place, person, or thing to another"
    },
    {
        "id": 4618,
        "word": "transform",
        "phonetic": "[trænsˈfɔːm]",
        "meaning": "change in outward structure or looks; convert"
    },
    {
        "id": 4619,
        "word": "transformation",
        "phonetic": "[ˌtrænsfəˈmeɪʃᵊn]",
        "meaning": "change in form , appearance, nature, disposition, condition, or the like"
    },
    {
        "id": 4620,
        "word": "transistor",
        "phonetic": "[trænˈzɪstə]",
        "meaning": "small electronic device containing a semiconductor and having at least three electrical"
    },
    {
        "id": 4622,
        "word": "transit",
        "phonetic": "[ˈtrænzɪt]",
        "meaning": "act of passing; passage through or over; line or route of passage"
    },
    {
        "id": 4623,
        "word": "transition",
        "phonetic": "[trænˈzɪʃᵊn]",
        "meaning": "going from one state of action to another"
    },
    {
        "id": 4624,
        "word": "transmission",
        "phonetic": "[trænzˈmɪʃᵊn]",
        "meaning": "act of transmitting; automotive assembly of gears; sending of a signal"
    },
    {
        "id": 4625,
        "word": "transmit",
        "phonetic": "[trænzˈmɪt]",
        "meaning": "forward; send from one person or place to another"
    },
    {
        "id": 4626,
        "word": "transparent",
        "phonetic": "[trænˈspærᵊnt]",
        "meaning": "easily detected; permitting light to pass through freely"
    },
    {
        "id": 4627,
        "word": "transplant",
        "phonetic": "[trænˈsplɑːnt]",
        "meaning": "act of uprooting and moving a plant to a new location"
    },
    {
        "id": 4628,
        "word": "transport",
        "phonetic": "[ˈtrænspɔːt]",
        "meaning": "carry from one place to another; carry away; deport"
    },
    {
        "id": 4629,
        "word": "trap",
        "phonetic": "[træp]",
        "meaning": "catch; hold or catch as if in a hole"
    },
    {
        "id": 4630,
        "word": "traverse",
        "phonetic": "[trəˈvɜːs]",
        "meaning": "go through or across, often under difficult conditions"
    },
    {
        "id": 4631,
        "word": "tray",
        "phonetic": "[treɪ]",
        "meaning": "an open receptacle for holding or displaying or serving articles or food"
    },
    {
        "id": 4632,
        "word": "tread",
        "phonetic": "[trɛd]",
        "meaning": "step on; mate with; place the foot"
    },
    {
        "id": 4633,
        "word": "treason",
        "phonetic": "[ˈtriːzᵊn]",
        "meaning": "disloyalty; betrayal of trust or confidence"
    },
    {
        "id": 4634,
        "word": "treatment",
        "phonetic": "[ˈtriːtmənt]",
        "meaning": "handling; care that are intended to relieve illness or injury"
    },
    {
        "id": 4635,
        "word": "treaty",
        "phonetic": "[ˈtriːti]",
        "meaning": "act of treating for the adjustment of differences; negotiation"
    },
    {
        "id": 4636,
        "word": "tremble",
        "phonetic": "[ˈtrɛmbᵊl]",
        "meaning": "shake involuntarily, as with fear, cold, or weakness; quake; quiver; shiver; shudder"
    },
    {
        "id": 4637,
        "word": "tremendous",
        "phonetic": "[trɪˈmɛndəs]",
        "meaning": "huge; capable of making one tremble; terrible"
    },
    {
        "id": 4638,
        "word": "trench",
        "phonetic": "[trɛnʧ]",
        "meaning": "canal; deep furrow or ditch; long, steep-sided valley on the ocean floor"
    },
    {
        "id": 4639,
        "word": "trend",
        "phonetic": "[trɛnd]",
        "meaning": "popular taste; general direction in which something tends to move"
    },
    {
        "id": 4640,
        "word": "trial",
        "phonetic": "[traɪəl]",
        "meaning": "experiment; act of testing; examination of evidence to determine the charges or claims"
    },
    {
        "id": 4641,
        "word": "tribe",
        "phonetic": "[traɪb]",
        "meaning": "family, race, or series of generations, descending from the same direct ancestor, and kept"
    },
    {
        "id": 4643,
        "word": "tribute",
        "phonetic": "[ˈtrɪbjuːt]",
        "meaning": "payment in money made by one ruler or nation; tax; mark of respect; praiseworthy quality"
    },
    {
        "id": 4644,
        "word": "trick",
        "phonetic": "[trɪk]",
        "meaning": "cunning or deceitful activity; attempt to get others to do something foolish"
    },
    {
        "id": 4645,
        "word": "trickle",
        "phonetic": "[ˈtrɪkᵊl]",
        "meaning": "flow in drops; run or flow slowly; drip"
    },
    {
        "id": 4646,
        "word": "trifle",
        "phonetic": "[ˈtraɪfᵊl]",
        "meaning": "a thing of very little value or importance"
    },
    {
        "id": 4647,
        "word": "trigger",
        "phonetic": "[ˈtrɪɡə]",
        "meaning": "cause something happen; set off"
    },
    {
        "id": 4648,
        "word": "trim",
        "phonetic": "[trɪm]",
        "meaning": "clip; cut down to the desired size or shape"
    },
    {
        "id": 4649,
        "word": "triple",
        "phonetic": "[ˈtrɪpᵊl]",
        "meaning": "consisting of three united; multiplied by three; threefold; three times repeated"
    },
    {
        "id": 4650,
        "word": "triumph",
        "phonetic": "[ˈtraɪəmf]",
        "meaning": "victory; win; expressing great joy"
    },
    {
        "id": 4651,
        "word": "trivial",
        "phonetic": "[ˈtrɪviəl]",
        "meaning": "unimportant; of little significance or value; ordinary; commonplace"
    },
    {
        "id": 4652,
        "word": "tropic",
        "phonetic": "[ˈtrɒpɪk]",
        "meaning": "one of the two small circles of the celestial sphere, situated on each side of the equator, and"
    },
    {
        "id": 4655,
        "word": "tropical",
        "phonetic": "[ˈtrɒpɪkᵊl]",
        "meaning": "relating to region on either side of the equator; hot and humid"
    },
    {
        "id": 4656,
        "word": "troublesome",
        "phonetic": "[ˈtrʌbᵊlsᵊm]",
        "meaning": "annoying; bothersome"
    },
    {
        "id": 4657,
        "word": "trumpet",
        "phonetic": "[ˈtrʌmpɪt]",
        "meaning": "brass musical instrument with brilliant tone"
    },
    {
        "id": 4658,
        "word": "trunk",
        "phonetic": "[trʌŋk]",
        "meaning": "stem, or body, of a tree; main stem, without the branches; body of animal apart from the head"
    },
    {
        "id": 4660,
        "word": "tub",
        "phonetic": "[tʌb]",
        "meaning": "a large open vessel for holding or storing liquids"
    },
    {
        "id": 4661,
        "word": "tube",
        "phonetic": "[ʧuːb]",
        "meaning": "hollow cylindrical shape; underground railway"
    },
    {
        "id": 4662,
        "word": "tuck",
        "phonetic": "[tʌk]",
        "meaning": "make one or more folds in; store in a safe spot; put in a snug spot"
    },
    {
        "id": 4663,
        "word": "tug",
        "phonetic": "[tʌɡ]",
        "meaning": "pull or draw with great effort; draw along with continued exertion; haul along; tow"
    },
    {
        "id": 4664,
        "word": "tuition",
        "phonetic": "[tjuˈɪʃᵊn]",
        "meaning": "teaching pupils individually; fee for instruction, especially at a formal institution of learning"
    },
    {
        "id": 4665,
        "word": "tumble",
        "phonetic": "[ˈtʌmbᵊl]",
        "meaning": "fall down, as if collapsing"
    },
    {
        "id": 4666,
        "word": "tumult",
        "phonetic": "[ˈtjuːmʌlt]",
        "meaning": "noise, as made by a crowd; riot or uprising"
    },
    {
        "id": 4667,
        "word": "tunnel",
        "phonetic": "[ˈtʌnᵊl]",
        "meaning": "passageway through or under something, usually underground"
    },
    {
        "id": 4668,
        "word": "turbulent",
        "phonetic": "[ˈtɜːbjələnt]",
        "meaning": "characterized by unrest or disorder"
    },
    {
        "id": 4669,
        "word": "turnover",
        "phonetic": "[ˈtɜːnˌəʊvə]",
        "meaning": "act or result of turning over; upset; abrupt change; number of workers hired by an"
    },
    {
        "id": 4671,
        "word": "tutor",
        "phonetic": "[ˈtjuːtə]",
        "meaning": "guide; give individual instruction"
    },
    {
        "id": 4672,
        "word": "twig",
        "phonetic": "[twɪɡ]",
        "meaning": "small branch or division of a branch"
    },
    {
        "id": 4673,
        "word": "twilight",
        "phonetic": "[ˈtwaɪlaɪt]",
        "meaning": "light perceived before the rising, and after the setting, of the sun; faint light; dubious or"
    },
    {
        "id": 4675,
        "word": "twinkle",
        "phonetic": "[ˈtwɪŋkᵊl]",
        "meaning": "open and shut the eye rapidly; blink; wink"
    },
    {
        "id": 4676,
        "word": "twist",
        "phonetic": "[twɪst]",
        "meaning": "turn in the opposite direction; form into a spiral shape"
    },
    {
        "id": 4677,
        "word": "typhoon",
        "phonetic": "[taɪˈfuːn]",
        "meaning": "tropical cyclone occurring in the western Pacific; violent whirlwind"
    },
    {
        "id": 4678,
        "word": "typical",
        "phonetic": "[ˈtɪpɪkᵊl]",
        "meaning": "conforming to a type; representative"
    },
    {
        "id": 4679,
        "word": "tyranny",
        "phonetic": "[ˈtɪrəni]",
        "meaning": "oppression; cruel government; office or authority of an absolute ruler; absolute power"
    },
    {
        "id": 4680,
        "word": "tyrant",
        "phonetic": "[ˈtaɪərᵊnt]",
        "meaning": "absolute ruler; sovereign unrestrained by law or constitution"
    },
    {
        "id": 4681,
        "word": "tyre",
        "phonetic": "[ˈtaɪə]",
        "meaning": "tire; covering for a wheel, usually made of rubber reinforced with cords of nylon  "
    },
    {
        "id": 4686,
        "word": "ugly",
        "phonetic": "[ˈʌɡli]",
        "meaning": "offensive to the sight; contrary to beauty; disagreeable aspect; unsightly"
    },
    {
        "id": 4687,
        "word": "ultimate",
        "phonetic": "[ˈʌltɪmət]",
        "meaning": "final; being the last or concluding; fundamental; elemental; extreme"
    },
    {
        "id": 4688,
        "word": "ultimately",
        "phonetic": "[ˈʌltɪmətli]",
        "meaning": "as final consequence; at last; in the end"
    },
    {
        "id": 4689,
        "word": "ultrasonic",
        "phonetic": "[ˌʌltrəˈsɒnɪk]",
        "meaning": "supersonic; higher in frequency than the range of sound perceptible to the human ear"
    },
    {
        "id": 4690,
        "word": "ultraviolet",
        "phonetic": "[ˈʌltrəˈvaɪəlɪt]",
        "meaning": "wave lengths shorter than light but longer than X rays"
    },
    {
        "id": 4691,
        "word": "unanimous",
        "phonetic": "[juːˈnænɪməs]",
        "meaning": "uniform; in complete agreement"
    },
    {
        "id": 4692,
        "word": "unbearable",
        "phonetic": "[ʌnˈbeərəbᵊl]",
        "meaning": "unendurable; so unpleasant, distasteful, or painful as to be intolerable"
    },
    {
        "id": 4693,
        "word": "unconscious",
        "phonetic": "[ʌnˈkɒnʃəs]",
        "meaning": "lacking awareness; senseless; unaware"
    },
    {
        "id": 4694,
        "word": "uncover",
        "phonetic": "[ʌnˈkʌvə]",
        "meaning": "remove the cover from; expose; disclose"
    },
    {
        "id": 4695,
        "word": "underestimate",
        "phonetic": "[ˌʌndəˈrɛstɪmɪt]",
        "meaning": "make too low an estimate of the quantity; undervalue"
    },
    {
        "id": 4696,
        "word": "undergo",
        "phonetic": "[ˌʌndəˈɡəʊ]",
        "meaning": "experience; suffer; pass through"
    },
    {
        "id": 4697,
        "word": "undergraduate",
        "phonetic": "[ˌʌndəˈɡræʤuət]",
        "meaning": "university student who has not yet received a first degree"
    },
    {
        "id": 4698,
        "word": "underground",
        "phonetic": "[ˈʌndəɡraʊnd]",
        "meaning": "under the level of the ground; buried"
    },
    {
        "id": 4699,
        "word": "underline",
        "phonetic": "[ˈʌndəlaɪn]",
        "meaning": "mark a line below, as words; underscore."
    },
    {
        "id": 4700,
        "word": "underlying",
        "phonetic": "[ˌʌndəˈlaɪɪŋ]",
        "meaning": "lying under or beneath something; basic; implicit; taking precedence; prior"
    },
    {
        "id": 4701,
        "word": "undermine",
        "phonetic": "[ˌʌndəˈmaɪn]",
        "meaning": "weaken by wearing away base or foundation; injure or impair; dig a mine or tunnel"
    },
    {
        "id": 4703,
        "word": "underneath",
        "phonetic": "[ˌʌndəˈniːθ]",
        "meaning": "under or below an object or a surface; lower down on the page"
    },
    {
        "id": 4704,
        "word": "undertake",
        "phonetic": "[ˌʌndəˈteɪk]",
        "meaning": "take on; embark on; assume"
    },
    {
        "id": 4705,
        "word": "undertaking",
        "phonetic": "[ˌʌndəˈteɪkɪŋ]",
        "meaning": "task or assignment undertaken; career"
    },
    {
        "id": 4706,
        "word": "undo",
        "phonetic": "[ʌnˈduː]",
        "meaning": "release; cause the ruin or downfall of; cancel or reverse an action"
    },
    {
        "id": 4707,
        "word": "undoubtedly",
        "phonetic": "[ʌnˈdaʊtɪdli]",
        "meaning": "unquestionably; without doubt; certainly"
    },
    {
        "id": 4708,
        "word": "undue",
        "phonetic": "[ʌnˈdjuː]",
        "meaning": "not due; not yet owing; not just, proper, or legal; ; excessive"
    },
    {
        "id": 4709,
        "word": "uneasy",
        "phonetic": "[ʌnˈiːzi]",
        "meaning": "not easy; difficult; restless; disturbed by pain, anxiety"
    },
    {
        "id": 4710,
        "word": "unfair",
        "phonetic": "[ʌnˈfeə]",
        "meaning": "unjust; contrary to laws or conventions, especially in commerce"
    },
    {
        "id": 4711,
        "word": "unfold",
        "phonetic": "[ʌnˈfəʊld]",
        "meaning": "extend or stretch out to a greater or the full length; happen"
    },
    {
        "id": 4712,
        "word": "unfortunately",
        "phonetic": "[ʌnˈfɔːʧᵊnətli]",
        "meaning": "unluckily; by bad luck"
    },
    {
        "id": 4713,
        "word": "uniform",
        "phonetic": "[ˈjuːnɪfɔːm]",
        "meaning": "consistent; standardized; clothing of a particular group"
    },
    {
        "id": 4714,
        "word": "unique",
        "phonetic": "[juːˈniːk]",
        "meaning": "without an equal; being the only one of its kind"
    },
    {
        "id": 4715,
        "word": "unity",
        "phonetic": "[ˈjuːnəti]",
        "meaning": "cohesion; harmony; quality of being united into one"
    },
    {
        "id": 4716,
        "word": "universal",
        "phonetic": "[ˌjuːnɪˈvɜːsᵊl]",
        "meaning": "affecting all; general; present everywhere; relating to the entire world or all within the"
    },
    {
        "id": 4718,
        "word": "universe",
        "phonetic": "[ˈjuːnɪvɜːs]",
        "meaning": "cosmos; everything that exists anywhere"
    },
    {
        "id": 4719,
        "word": "unlikely",
        "phonetic": "[ʌnˈlaɪkli]",
        "meaning": "improbable; has little chance of being the case or coming about"
    },
    {
        "id": 4720,
        "word": "unload",
        "phonetic": "[ʌnˈləʊd]",
        "meaning": "take something off a container"
    },
    {
        "id": 4721,
        "word": "unprecedented",
        "phonetic": "[ʌnˈprɛsɪdɛntɪd]",
        "meaning": "having no previous example; novel; unparalleled"
    },
    {
        "id": 4722,
        "word": "unsatisfactory",
        "phonetic": "[ʌnˌsætɪsˈfæktᵊri]",
        "meaning": "not giving satisfaction; inadequate"
    },
    {
        "id": 4723,
        "word": "unstable",
        "phonetic": "[ʌnˈsteɪbᵊl]",
        "meaning": "inconstant; variable; lacking control of one's emotions; constantly changing"
    },
    {
        "id": 4724,
        "word": "unwarranted",
        "phonetic": "[ʌnˈwɒrᵊntɪd]",
        "meaning": "having no justification; groundless; not guaranteed to be good, sound, or of a certain"
    },
    {
        "id": 4726,
        "word": "uphold",
        "phonetic": "[ʌpˈhəʊld]",
        "meaning": "support; preserve; hold aloft; raise"
    },
    {
        "id": 4727,
        "word": "upright",
        "phonetic": "[ˈʌpraɪt]",
        "meaning": "in an erect position or posture; perpendicular; vertical, or nearly vertical; pointing upward"
    },
    {
        "id": 4728,
        "word": "upset",
        "phonetic": "[ʌpˈsɛt]",
        "meaning": "concerned by anxious uneasiness or trouble or grief"
    },
    {
        "id": 4729,
        "word": "urban",
        "phonetic": "[ˈɜːbᵊn]",
        "meaning": "metropolitan; of, relating to, or located in a city"
    },
    {
        "id": 4730,
        "word": "urge",
        "phonetic": "[ɜːʤ]",
        "meaning": "force in an indicated direction; stimulate; excite"
    },
    {
        "id": 4731,
        "word": "urgent",
        "phonetic": "[ˈɜːʤᵊnt]",
        "meaning": "pressing; compelling immediate action or attention"
    },
    {
        "id": 4732,
        "word": "utensil",
        "phonetic": "[juːˈtɛnsᵊl]",
        "meaning": "instrument, implement, or container for practical use, especially in kitchen or laboratory"
    },
    {
        "id": 4733,
        "word": "utility",
        "phonetic": "[juːˈtɪləti]",
        "meaning": "something useful; public service"
    },
    {
        "id": 4734,
        "word": "utilization",
        "phonetic": "[ˌjuːtɪlaɪˈzeɪʃᵊn]",
        "meaning": "state of having been made use of; the act of using"
    },
    {
        "id": 4735,
        "word": "utilize",
        "phonetic": "[ˈjuːtɪˌlaɪz]",
        "meaning": "put into service; take advantage of"
    },
    {
        "id": 4736,
        "word": "utmost",
        "phonetic": "[ˈʌtməʊst]",
        "meaning": "farthest point or extremity; most distant; extreme"
    },
    {
        "id": 4737,
        "word": "utter",
        "phonetic": "[ˈʌtə]",
        "meaning": "speak; express; send forth with the voice"
    },
    {
        "id": 4738,
        "word": "utterance",
        "phonetic": "[ˈʌtᵊrᵊns]",
        "meaning": "vocal expression; power of speaking; last or utmost extremity "
    },
    {
        "id": 4743,
        "word": "vacancy",
        "phonetic": "[ˈveɪkᵊnsi]",
        "meaning": "absence; emptiness"
    },
    {
        "id": 4744,
        "word": "vacant",
        "phonetic": "[ˈveɪkᵊnt]",
        "meaning": "void of thought or knowledge; without an occupant or incumbent"
    },
    {
        "id": 4745,
        "word": "vacation",
        "phonetic": "[veɪˈkeɪʃᵊn]",
        "meaning": "leisure time away from work; act of making something legally void"
    },
    {
        "id": 4746,
        "word": "vaccinate",
        "phonetic": "[ˈvæksɪneɪt]",
        "meaning": "perform or produce immunity"
    },
    {
        "id": 4747,
        "word": "vacuum",
        "phonetic": "[ˈvækjuːm]",
        "meaning": "empty area or space; electrical home appliance that cleans by suction"
    },
    {
        "id": 4748,
        "word": "vague",
        "phonetic": "[veɪɡ]",
        "meaning": "imprecise; indistinct; not clearly expressed; inexplicit"
    },
    {
        "id": 4749,
        "word": "vain",
        "phonetic": "[veɪn]",
        "meaning": "having no real substance, value, or importance; empty; void; worthless; unsatisfying"
    },
    {
        "id": 4750,
        "word": "valid",
        "phonetic": "[ˈvælɪd]",
        "meaning": "logically convincing; sound; legally acceptable; well grounded"
    },
    {
        "id": 4751,
        "word": "validity",
        "phonetic": "[vəˈlɪdəti]",
        "meaning": "quality of having legal force or effectiveness"
    },
    {
        "id": 4752,
        "word": "valley",
        "phonetic": "[ˈvæli]",
        "meaning": "space between ranges of mountains; area drained or irrigated by a river system; internal angle"
    },
    {
        "id": 4754,
        "word": "valve",
        "phonetic": "[vælv]",
        "meaning": "device or structure for controlling the flow of a fluid"
    },
    {
        "id": 4755,
        "word": "vanish",
        "phonetic": "[ˈvænɪʃ]",
        "meaning": "disappear; pass out of sight, especially quickly; die out"
    },
    {
        "id": 4756,
        "word": "vanity",
        "phonetic": "[ˈvænəti]",
        "meaning": "quality or state of being vain; emptiness; feelings of excessive pride; conceit"
    },
    {
        "id": 4757,
        "word": "vapor",
        "phonetic": "[ˈveɪpə]",
        "meaning": "gas; steam; barely visible or cloudy diffused matter, such as mist or smoke"
    },
    {
        "id": 4758,
        "word": "variable",
        "phonetic": "[ˈveəriəbᵊl]",
        "meaning": "factor; something that is likely to vary; changeable; inconstant"
    },
    {
        "id": 4759,
        "word": "variance",
        "phonetic": "[ˈveəriəns]",
        "meaning": "an event that departs from expectations; the expected value of the square of the deviations"
    },
    {
        "id": 4761,
        "word": "variant",
        "phonetic": "[ˈveəriənt]",
        "meaning": "varying in from, character, or the like; variable; different; diverse."
    },
    {
        "id": 4762,
        "word": "variation",
        "phonetic": "[ˌveəriˈeɪʃᵊn]",
        "meaning": "act of changing or altering"
    },
    {
        "id": 4763,
        "word": "varied",
        "phonetic": "[ˈveərɪd]",
        "meaning": "differed; diversified; various"
    },
    {
        "id": 4764,
        "word": "variety",
        "phonetic": "[vəˈraɪəti]",
        "meaning": "diversity; quality or condition of being various or varied"
    },
    {
        "id": 4765,
        "word": "various",
        "phonetic": "[ˈveəriəs]",
        "meaning": "different; diverse; several; manifold; changeable; uncertain"
    },
    {
        "id": 4766,
        "word": "varnish",
        "phonetic": "[ˈvɑːnɪʃ]",
        "meaning": "deceptively attractive external appearance; paint to coat a surface with a hard, glossy,"
    },
    {
        "id": 4768,
        "word": "vary",
        "phonetic": "[ˈveəri]",
        "meaning": "change aspect of; alter in form, appearance, substance, position; make different by a partial"
    },
    {
        "id": 4770,
        "word": "vast",
        "phonetic": "[vɑːst]",
        "meaning": "large; broad; extensive; very great in size, number, amount, or quantity"
    },
    {
        "id": 4771,
        "word": "vault",
        "phonetic": "[vɔːlt]",
        "meaning": "arched brick or stone ceiling or roof; burial chamber usually underground"
    },
    {
        "id": 4772,
        "word": "vegetable",
        "phonetic": "[ˈvɛʤtəbᵊl]",
        "meaning": "any of numerous herbaceous plants to eat in meal"
    },
    {
        "id": 4773,
        "word": "vehicle",
        "phonetic": "[ˈvɪəkᵊl]",
        "meaning": "automobile; means of conveying; medium"
    },
    {
        "id": 4774,
        "word": "veil",
        "phonetic": "[veɪl]",
        "meaning": "a length of cloth worn by women over the head, shoulders, and often the face; cover; hide"
    },
    {
        "id": 4775,
        "word": "vein",
        "phonetic": "[veɪn]",
        "meaning": "blood vessel that carries blood"
    },
    {
        "id": 4776,
        "word": "velocity",
        "phonetic": "[vəˈlɒsəti]",
        "meaning": "rapidity or speed of motion; swiftness"
    },
    {
        "id": 4777,
        "word": "vengeance",
        "phonetic": "[ˈvɛnʤᵊns]",
        "meaning": "punishment inflicted in return for an injury or an offense; retribution"
    },
    {
        "id": 4778,
        "word": "ventilate",
        "phonetic": "[ˈvɛntɪleɪt]",
        "meaning": "freshen; circulate through and freshen"
    },
    {
        "id": 4779,
        "word": "ventilation",
        "phonetic": "[ˌvɛntɪˈleɪʃᵊn]",
        "meaning": "act of supplying fresh air and getting rid of foul air"
    },
    {
        "id": 4780,
        "word": "venture",
        "phonetic": "[ˈvɛnʧə]",
        "meaning": "put at risk; adventure"
    },
    {
        "id": 4781,
        "word": "verbal",
        "phonetic": "[ˈvɜːbᵊl]",
        "meaning": "expressed in spoken rather than written words; consisting of words alone without action"
    },
    {
        "id": 4782,
        "word": "verge",
        "phonetic": "[vɜːʤ]",
        "meaning": "extreme edge or margin; border; enclosing boundary; space enclosed by such a boundary"
    },
    {
        "id": 4783,
        "word": "verify",
        "phonetic": "[ˈvɛrɪfaɪ]",
        "meaning": "confirm; prove the truth of by presentation of evidence or testimony"
    },
    {
        "id": 4784,
        "word": "versatile",
        "phonetic": "[ˈvɜːsətaɪl]",
        "meaning": "having many talents; capable of working in many fields"
    },
    {
        "id": 4785,
        "word": "verse",
        "phonetic": "[vɜːs]",
        "meaning": "a piece of poetry"
    },
    {
        "id": 4786,
        "word": "version",
        "phonetic": "[ˈvɜːʒᵊn]",
        "meaning": "written work in a new form; edition; interpretation of a particular viewpoint"
    },
    {
        "id": 4787,
        "word": "vertical",
        "phonetic": "[ˈvɜːtɪkᵊl]",
        "meaning": "upright in position or posture; oriented vertically"
    },
    {
        "id": 4788,
        "word": "vessel",
        "phonetic": "[ˈvɛsᵊl]",
        "meaning": "craft; ship; container for liquids"
    },
    {
        "id": 4789,
        "word": "veteran",
        "phonetic": "[ˈvɛtᵊrᵊn]",
        "meaning": "someone who has given long service"
    },
    {
        "id": 4790,
        "word": "veto",
        "phonetic": "[ˈviːtəʊ]",
        "meaning": "rejection; vote that blocks a decision; deny; prohibit; command against"
    },
    {
        "id": 4791,
        "word": "vex",
        "phonetic": "[vɛks]",
        "meaning": "annoy; disturb, especially by minor irritations; be a mystery or bewildering to"
    },
    {
        "id": 4792,
        "word": "via",
        "phonetic": "[ˈvaɪə]",
        "meaning": "by the way of"
    },
    {
        "id": 4793,
        "word": "vibrate",
        "phonetic": "[vaɪˈbreɪt]",
        "meaning": "shake, quiver; move or swing from side to side regularly"
    },
    {
        "id": 4794,
        "word": "vibration",
        "phonetic": "[vaɪˈbreɪʃᵊn]",
        "meaning": "act of vibrating; a shaky motion "
    },
    {
        "id": 4795,
        "word": "vice",
        "phonetic": "[vaɪs]",
        "meaning": "moral fault or failing; evil, degrading, or immoral practice or habit; physical defect or weakness"
    },
    {
        "id": 4796,
        "word": "vicinity",
        "phonetic": "[vɪˈsɪnəti]",
        "meaning": "state of being near in space or relationship; proximity"
    },
    {
        "id": 4797,
        "word": "vicious",
        "phonetic": "[ˈvɪʃəs]",
        "meaning": "by vice or defects; defective; imperfect; having the nature of vice; evil, immoral, or depraved"
    },
    {
        "id": 4798,
        "word": "victorious",
        "phonetic": "[vɪkˈtɔːriəs]",
        "meaning": "successful; being the winner in a contest or struggle"
    },
    {
        "id": 4799,
        "word": "victory",
        "phonetic": "[ˈvɪktᵊri]",
        "meaning": "successful ending of struggle or contest; defeat of an enemy or opponent"
    },
    {
        "id": 4800,
        "word": "vigor",
        "phonetic": "[ˈvɪɡə]",
        "meaning": "active strength of body or mind; imaginative lively style, especially style of writing; exertion of"
    },
    {
        "id": 4802,
        "word": "vigorous",
        "phonetic": "[ˈvɪɡᵊrəs]",
        "meaning": "robust; strong; energetic, and active in mind or body"
    },
    {
        "id": 4803,
        "word": "vine",
        "phonetic": "[vaɪn]",
        "meaning": "weak-stemmed plant that derives support from climbing"
    },
    {
        "id": 4804,
        "word": "violate",
        "phonetic": "[ˈvaɪəleɪt]",
        "meaning": "treat in a violent manner; abuse; do violence to; disturb; interrupt"
    },
    {
        "id": 4805,
        "word": "violence",
        "phonetic": "[ˈvaɪəlᵊns]",
        "meaning": "physical force exerted for the purpose of violating, damaging, or abusing"
    },
    {
        "id": 4806,
        "word": "violent",
        "phonetic": "[ˈvaɪəlᵊnt]",
        "meaning": "turbulent; intensely vivid or loud; by violence or bloodshed"
    },
    {
        "id": 4807,
        "word": "violin",
        "phonetic": "[ˌvaɪəˈlɪn]",
        "meaning": "small instrument with four strings, played with a bow; a fiddle"
    },
    {
        "id": 4808,
        "word": "virtual",
        "phonetic": "[ˈvɜːʧuəl]",
        "meaning": "existing or resulting in essence or effect though not in actual fact; existing in mind, especially"
    },
    {
        "id": 4810,
        "word": "virtually",
        "phonetic": "[ˈvɜːʧuəli]",
        "meaning": "almost completely; practically; essentially"
    },
    {
        "id": 4811,
        "word": "virtue",
        "phonetic": "[ˈvɜːʧuː]",
        "meaning": "goodness, moral excellence; good quality"
    },
    {
        "id": 4812,
        "word": "virus",
        "phonetic": "[ˈvaɪərəs]",
        "meaning": "disease communicator; something that poisons one's soul or mind; program for unwanted"
    },
    {
        "id": 4814,
        "word": "viscous",
        "phonetic": "[ˈvɪskəs]",
        "meaning": "sticky; gluey; having high resistance to flow"
    },
    {
        "id": 4815,
        "word": "visible",
        "phonetic": "[ˈvɪzəbᵊl]",
        "meaning": "being often in public eye; obvious to the eye"
    },
    {
        "id": 4816,
        "word": "vision",
        "phonetic": "[ˈvɪʒᵊn]",
        "meaning": "ability to see; sight; vivid mental image"
    },
    {
        "id": 4817,
        "word": "visual",
        "phonetic": "[ˈvɪʒuəl]",
        "meaning": "seen or able to be seen by the eye; visible; optical"
    },
    {
        "id": 4818,
        "word": "vital",
        "phonetic": "[ˈvaɪtᵊl]",
        "meaning": "full of life; animated; necessary to continued existence; living or breathing"
    },
    {
        "id": 4819,
        "word": "vivid",
        "phonetic": "[ˈvɪvɪd]",
        "meaning": "bright; lively; graphic; having striking color"
    },
    {
        "id": 4820,
        "word": "vocation",
        "phonetic": "[vəʊˈkeɪʃᵊn]",
        "meaning": "career; profession"
    },
    {
        "id": 4821,
        "word": "vogue",
        "phonetic": "[vəʊɡ]",
        "meaning": "popular fashion; current state or style of general acceptance and use"
    },
    {
        "id": 4822,
        "word": "void",
        "phonetic": "[vɔɪd]",
        "meaning": "emptiness; containing nothing; clear or empty a place"
    },
    {
        "id": 4823,
        "word": "volcano",
        "phonetic": "[vɒlˈkeɪnəʊ]",
        "meaning": "fissure in the earth's crust through which molten lava and gases erupt"
    },
    {
        "id": 4824,
        "word": "volley",
        "phonetic": "[ˈvɒli]",
        "meaning": "flight of missiles; round of gunshots; tennis return made by hitting the ball before it bounces"
    },
    {
        "id": 4825,
        "word": "voltage",
        "phonetic": "[ˈvɒltɪʤ]",
        "meaning": "difference in electrical charge between two points"
    },
    {
        "id": 4826,
        "word": "volume",
        "phonetic": "[ˈvɒljuːm]",
        "meaning": "capacity; amount of space occupied by an object"
    },
    {
        "id": 4827,
        "word": "voluntary",
        "phonetic": "[ˈvɒləntᵊri]",
        "meaning": "done or undertaken of one's own free will; unforced"
    },
    {
        "id": 4828,
        "word": "volunteer",
        "phonetic": "[ˌvɒlənˈtɪə]",
        "meaning": "person who performs or offers to perform a service voluntarily"
    },
    {
        "id": 4829,
        "word": "vote",
        "phonetic": "[vəʊt]",
        "meaning": "formal expression of preference for a candidate; number of cast in election; result of election or"
    },
    {
        "id": 4831,
        "word": "voter",
        "phonetic": "[ˈvəʊtə]",
        "meaning": "a citizen who has a legal right to vote"
    },
    {
        "id": 4832,
        "word": "voucher",
        "phonetic": "[ˈvaʊʧə]",
        "meaning": "a piece of substantiating evidence; proof; written authorization or certificate"
    },
    {
        "id": 4833,
        "word": "vow",
        "phonetic": "[vaʊ]",
        "meaning": "solemn promise made to God; promise of fidelity; pledge of love or affection"
    },
    {
        "id": 4834,
        "word": "vowel",
        "phonetic": "[vaʊəl]",
        "meaning": "speech sound made with the vocal tract open"
    },
    {
        "id": 4835,
        "word": "voyage",
        "phonetic": "[ˈvɔɪɪʤ]",
        "meaning": "long journey to a foreign or distant place, especially by sea; aviation"
    },
    {
        "id": 4836,
        "word": "vulgar",
        "phonetic": "[ˈvʌlɡə]",
        "meaning": "common; low; coarse; belonging or relating to the common people, as distinguished from the"
    },
    {
        "id": 4838,
        "word": "vulnerable",
        "phonetic": "[ˈvʌlnᵊrəbᵊl]",
        "meaning": "susceptible to wounds; capable of being wounded or hurt"
    },
    {
        "id": 4843,
        "word": "wade",
        "phonetic": "[weɪd]",
        "meaning": "paddle; walk through relatively shallow water"
    },
    {
        "id": 4844,
        "word": "wag",
        "phonetic": "[wæɡ]",
        "meaning": "move one way and the other with quick turns; shake to and fro; move in vibrating; cause to"
    },
    {
        "id": 4846,
        "word": "wage",
        "phonetic": "[weɪʤ]",
        "meaning": "hazard on the event of a contest; stake; engage in, as a contest; adventure, or lay out, for hire"
    },
    {
        "id": 4848,
        "word": "wagon",
        "phonetic": "[ˈwæɡən]",
        "meaning": "any of various kinds of wheeled vehicles drawn by a horse or tractor"
    },
    {
        "id": 4849,
        "word": "waist",
        "phonetic": "[weɪst]",
        "meaning": "narrowing of the body between the ribs and hips"
    },
    {
        "id": 4850,
        "word": "waive",
        "phonetic": "[weɪv]",
        "meaning": "give up temporarily; yield; give up voluntarily; defer"
    },
    {
        "id": 4851,
        "word": "wake",
        "phonetic": "[weɪk]",
        "meaning": "trail of ship or other object through water; path of something that has gone before"
    },
    {
        "id": 4852,
        "word": "walnut",
        "phonetic": "[ˈwɔːlnʌt]",
        "meaning": "tree with 10 - 40 meters tall; hard, dark brown wood of any of these trees"
    },
    {
        "id": 4853,
        "word": "wander",
        "phonetic": "[ˈwɒndə]",
        "meaning": "move about without a definite destination or purpose; range about; stroll; go away; depart"
    },
    {
        "id": 4854,
        "word": "ward",
        "phonetic": "[wɔːd]",
        "meaning": "guard; defender; protector; state under guard; division of a county; division of a hospital"
    },
    {
        "id": 4855,
        "word": "wardrobe",
        "phonetic": "[ˈwɔːdrəʊb]",
        "meaning": "tall cabinet, closet, or small room built to hold clothes"
    },
    {
        "id": 4856,
        "word": "ware",
        "phonetic": "[weə]",
        "meaning": "articles of merchandise; style or class of manufactures; especially, in the plural, goods;"
    },
    {
        "id": 4858,
        "word": "warehouse",
        "phonetic": "[ˈweəhaʊs]",
        "meaning": "depot; storehouse for goods and merchandise"
    },
    {
        "id": 4859,
        "word": "warfare",
        "phonetic": "[ˈwɔːfeə]",
        "meaning": "military service; military life; contest carried on by enemies"
    },
    {
        "id": 4860,
        "word": "warrant",
        "phonetic": "[ˈwɒrᵊnt]",
        "meaning": "guarantee; assurance by seller; authorization or certification"
    },
    {
        "id": 4861,
        "word": "warrior",
        "phonetic": "[ˈwɒriə]",
        "meaning": "fighter; combatant; one who is engaged in or experienced in battle"
    },
    {
        "id": 4862,
        "word": "waterproof",
        "phonetic": "[ˈwɔːtəpruːf]",
        "meaning": "tight; unaffected by water; made of or covered with material that doesn't allow water in"
    },
    {
        "id": 4863,
        "word": "waver",
        "phonetic": "[ˈweɪvə]",
        "meaning": "play or move to and fro; move one way and the other; swing; be unsettled in opinion"
    },
    {
        "id": 4864,
        "word": "wax",
        "phonetic": "[wæks]",
        "meaning": "increase gradually in size, number, strength, or intensity; show a progressively larger illuminated"
    },
    {
        "id": 4866,
        "word": "weapon",
        "phonetic": "[ˈwɛpən]",
        "meaning": "arms"
    },
    {
        "id": 4867,
        "word": "weary",
        "phonetic": "[ˈwɪəri]",
        "meaning": "tired; exhausted; physically or mentally fatigued"
    },
    {
        "id": 4868,
        "word": "weather",
        "phonetic": "[ˈwɛðə]",
        "meaning": "endure the effects of weather or other forces; come through safely; survive"
    },
    {
        "id": 4869,
        "word": "weave",
        "phonetic": "[wiːv]",
        "meaning": "pattern or structure by weaving ; knit; interlace"
    },
    {
        "id": 4870,
        "word": "weaver",
        "phonetic": "[ˈwiːvə]",
        "meaning": "craftsman who weaves cloth"
    },
    {
        "id": 4871,
        "word": "web",
        "phonetic": "[wɛb]",
        "meaning": "textile fabric; complex, interconnected structure or arrangement; the World Wide Web; radio or"
    },
    {
        "id": 4873,
        "word": "wedding",
        "phonetic": "[ˈwɛdɪŋ]",
        "meaning": "marriage ceremony; act of marrying; anniversary of a marriage"
    },
    {
        "id": 4874,
        "word": "wedge",
        "phonetic": "[wɛʤ]",
        "meaning": "a piece of metal, or other hard material, thick at one end, and tapering to a thin edge at the"
    },
    {
        "id": 4876,
        "word": "weed",
        "phonetic": "[wiːd]",
        "meaning": "undesirable or troublesome plant, especially growing where it is not wanted as in a garden."
    },
    {
        "id": 4877,
        "word": "weld",
        "phonetic": "[wɛld]",
        "meaning": "unite closely or intimately; join together by heating"
    },
    {
        "id": 4878,
        "word": "welfare",
        "phonetic": "[ˈwɛlfeə]",
        "meaning": "benefit; something that aids health or happiness"
    },
    {
        "id": 4879,
        "word": "whereas",
        "phonetic": "[weərˈæz]",
        "meaning": "considering that; it being the case that; since"
    },
    {
        "id": 4880,
        "word": "whereby",
        "phonetic": "[weəˈbaɪ]",
        "meaning": "by which; by what; how"
    },
    {
        "id": 4881,
        "word": "whilst",
        "phonetic": "[waɪlst]",
        "meaning": "while"
    },
    {
        "id": 4882,
        "word": "whip",
        "phonetic": "[wɪp]",
        "meaning": "overlay with other cords going round and round it; take or move by a sudden motion; clean"
    },
    {
        "id": 4884,
        "word": "whirl",
        "phonetic": "[wɜːl]",
        "meaning": "act of rotating or revolving rapidly; state of confusion; tumult"
    },
    {
        "id": 4885,
        "word": "whisper",
        "phonetic": "[ˈwɪspə]",
        "meaning": "speaking in a quiet voice; soft speech produced without full voice; secretly expressed belief,"
    },
    {
        "id": 4887,
        "word": "whistle",
        "phonetic": "[ˈwɪsᵊl]",
        "meaning": "make a kind of musical sound by lips; emit a similar sound from mouth as birds"
    },
    {
        "id": 4888,
        "word": "wholesale",
        "phonetic": "[ˈhəʊlseɪl]",
        "meaning": "selling or related to selling goods in large quantities; large-scale; on a large scale without"
    },
    {
        "id": 4890,
        "word": "wholesaler",
        "phonetic": "[ˈhəʊlseɪlə]",
        "meaning": "someone who buys large quantities of goods and resells to merchants"
    },
    {
        "id": 4891,
        "word": "wholesome",
        "phonetic": "[ˈhəʊlsəm]",
        "meaning": "conducive to sound health or well-being; beneficial"
    },
    {
        "id": 4892,
        "word": "wicked",
        "phonetic": "[ˈwɪkɪd]",
        "meaning": "evil in principle or practice; contrary to moral or divine law; addicted to vice or sin"
    },
    {
        "id": 4893,
        "word": "widespread",
        "phonetic": "[ˈwaɪdsprɛd]",
        "meaning": "spread or scattered over a considerable extent; occurring or accepted widely"
    },
    {
        "id": 4894,
        "word": "width",
        "phonetic": "[wɪdθ]",
        "meaning": "extent of something from side to side"
    },
    {
        "id": 4895,
        "word": "wield",
        "phonetic": "[wiːld]",
        "meaning": "handle (a weapon or tool, for example) with skill and ease. exercise effectively; handle; have"
    },
    {
        "id": 4897,
        "word": "wilderness",
        "phonetic": "[ˈwɪldənəs]",
        "meaning": "a tract of land, or a region, uncultivated and uninhabited by human beings, whether a"
    },
    {
        "id": 4899,
        "word": "willow",
        "phonetic": "[ˈwɪləʊ]",
        "meaning": "trees having usually narrow leaves"
    },
    {
        "id": 4900,
        "word": "winding",
        "phonetic": "[ˈwɪndɪŋ]",
        "meaning": "twisting or turning; spiral"
    },
    {
        "id": 4901,
        "word": "wisdom",
        "phonetic": "[ˈwɪzdəm]",
        "meaning": "quality of being wise; knowledge ; results of wise judgments"
    },
    {
        "id": 4902,
        "word": "wit",
        "phonetic": "[wɪt]",
        "meaning": "intellect; mental ability; natural ability to perceive and understand"
    },
    {
        "id": 4903,
        "word": "withdraw",
        "phonetic": "[wɪðˈdrɔː]",
        "meaning": "remove from; pull back; break from gathering; retreat; depart"
    },
    {
        "id": 4904,
        "word": "withdrawal",
        "phonetic": "[wɪðˈdrɔːᵊl]",
        "meaning": "secession; retreat or retirement"
    },
    {
        "id": 4905,
        "word": "wither",
        "phonetic": "[ˈwɪðə]",
        "meaning": "shrivel; decay; lose freshness, vigor, or vitality; loss of moisture"
    },
    {
        "id": 4906,
        "word": "withhold",
        "phonetic": "[wɪðˈhəʊld]",
        "meaning": "refuse to give; refrain from giving, granting, or permitting; deduct from employee's salary"
    },
    {
        "id": 4907,
        "word": "withstand",
        "phonetic": "[wɪðˈstænd]",
        "meaning": "stand up against; successfully resist; oppose with force or resolution"
    },
    {
        "id": 4908,
        "word": "witness",
        "phonetic": "[ˈwɪtnəs]",
        "meaning": "someone who sees an event and reports what happened; observe; watch"
    },
    {
        "id": 4909,
        "word": "woe",
        "phonetic": "[wəʊ]",
        "meaning": "deep, inconsolable grief; affliction; suffering; deep distress or misery, as from grief"
    },
    {
        "id": 4910,
        "word": "woods",
        "phonetic": "[wʊdz]",
        "meaning": "small forest; woodland; dense collection of trees covering a relatively small area"
    },
    {
        "id": 4911,
        "word": "wool",
        "phonetic": "[wʊl]",
        "meaning": "dense, soft, often curly hair forming the coat of sheep and certain other mammals"
    },
    {
        "id": 4912,
        "word": "wording",
        "phonetic": "[ˈwɜːdɪŋ]",
        "meaning": "act or style of expressing in words; expression, or power of expression"
    },
    {
        "id": 4913,
        "word": "worldwide",
        "phonetic": "[ˌwɜːldˈwaɪd]",
        "meaning": "global; universal; throughout the world"
    },
    {
        "id": 4914,
        "word": "worst",
        "phonetic": "[wɜːst]",
        "meaning": "be better than; defeat; gain the advantage over"
    },
    {
        "id": 4915,
        "word": "worthwhile",
        "phonetic": "[ˌwɜːθˈwaɪl]",
        "meaning": "sufficiently valuable"
    },
    {
        "id": 4916,
        "word": "wrap",
        "phonetic": "[ræp]",
        "meaning": "enclose; arrange or fold as a cover or protection"
    },
    {
        "id": 4917,
        "word": "wrath",
        "phonetic": "[rɒθ]",
        "meaning": "forceful, often vindictive anger; fury; just punishment of an offense or crime"
    },
    {
        "id": 4918,
        "word": "wreck",
        "phonetic": "[rɛk]",
        "meaning": "destruction; destroy; smash or break forcefully"
    },
    {
        "id": 4919,
        "word": "wrench",
        "phonetic": "[rɛnʧ]",
        "meaning": "twist or turn suddenly and forcibly; move, extract, or force free by pulling violently"
    },
    {
        "id": 4920,
        "word": "wrestle",
        "phonetic": "[ˈrɛsᵊl]",
        "meaning": "contend by grappling with, and striving to trip or throw down an opponent; struggle or strive"
    },
    {
        "id": 4922,
        "word": "wretched",
        "phonetic": "[ˈrɛʧɪd]",
        "meaning": "very miserable; sunk in, or accompanied by deep affliction or distress; calamitous; woeful;"
    },
    {
        "id": 4924,
        "word": "wring",
        "phonetic": "[rɪŋ]",
        "meaning": "twist; squeeze; compress, especially so as to extract liquid"
    },
    {
        "id": 4925,
        "word": "wrinkle",
        "phonetic": "[ˈrɪŋkᵊl]",
        "meaning": "a minor difficulty; a slight depression in the smoothness of a surface"
    },
    {
        "id": 4926,
        "word": "wrist",
        "phonetic": "[rɪst]",
        "meaning": "joint between the hand and the forearm"
    },
    {
        "id": 4931,
        "word": "yacht",
        "phonetic": "[jɒt]",
        "meaning": "light ship used for private pleasure trips"
    },
    {
        "id": 4932,
        "word": "yard",
        "phonetic": "[jɑːd]",
        "meaning": "rod; stick; branch; long piece of timber; measure of length, equaling three feet"
    },
    {
        "id": 4933,
        "word": "yawn",
        "phonetic": "[jɔːn]",
        "meaning": "open the mouth wide with a deep inhalation, usually involuntarily from drowsiness, fatigue, or"
    },
    {
        "id": 4935,
        "word": "yearn",
        "phonetic": "[jɜːn]",
        "meaning": "pain; grieve; vex; be pained or distressed; feel deep pity, sympathy, or tenderness"
    },
    {
        "id": 4936,
        "word": "yeast",
        "phonetic": "[jiːst]",
        "meaning": "foam, or troth (top yeast), or the sediment (bottom yeast), of beer or other in fermentation"
    },
    {
        "id": 4937,
        "word": "yield",
        "phonetic": "[jiːld]",
        "meaning": "give in; surrender; give forth a natural product; be productive"
    },
    {
        "id": 4938,
        "word": "yoke",
        "phonetic": "[jəʊk]",
        "meaning": "join together, unite; harness a draft animal to; join securely; force into heavy labor"
    },
    {
        "id": 4939,
        "word": "yolk",
        "phonetic": "[jəʊk]",
        "meaning": "nutritive material; greasy substance found in unprocessed sheep's wool; yellow part of an egg"
    },
    {
        "id": 4940,
        "word": "Sưu tầm & tổng hợp ",
        "phonetic": "[Suu tæm & tɒŋ hɒp ]",
        "meaning": "Admin Group IELTS SHARE"
    },
    {
        "id": 4945,
        "word": "zeal",
        "phonetic": "[ziːl]",
        "meaning": "intense interest; eagerness to accomplish some object"
    },
    {
        "id": 4946,
        "word": "zealous",
        "phonetic": "[ˈzɛləs]",
        "meaning": "enthusiastic; filled with or motivated by zeal"
    },
    {
        "id": 4947,
        "word": "zone",
        "phonetic": "[zəʊn]",
        "meaning": "region; portion of the surface of a sphere;"
    },
    {
        "id": 4948,
        "word": "zoology",
        "phonetic": "[zəʊˈɒləʤi]",
        "meaning": "part of biology which relates to the animal kingdom"
    }
]
